'use server'

import nodemailer from 'nodemailer'
import { headers } from 'next/headers'
import { company } from '@/data/company'
import { sql, ensureSchema, findOrCreateContact } from '@/lib/db'
import { parseChannel } from '@/lib/attribution'

export interface ContactState {
  status: 'idle' | 'success' | 'error'
  message: string
}

// HTML-escape pour empêcher injection dans les templates mail
function esc(str: string): string {
  return String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[c] as string)
}

// Supprime les CR/LF des entêtes SMTP (anti injection)
function sanitizeHeader(str: string): string {
  return String(str).replace(/[\r\n]+/g, ' ').slice(0, 200)
}

// Rate limiting en mémoire par IP, simple mais efficace pour un petit trafic
// Reset automatique à chaque redéploiement, suffisant pour un site vitrine artisan
const submissions = new Map<string, { count: number; firstAt: number }>()
const RATE_WINDOW_MS = 60 * 60 * 1000 // 1h
const RATE_MAX = 5 // 5 soumissions max par IP par heure

function checkRateLimit(key: string): boolean {
  const now = Date.now()
  const entry = submissions.get(key)
  if (!entry) {
    submissions.set(key, { count: 1, firstAt: now })
    return true
  }
  if (now - entry.firstAt > RATE_WINDOW_MS) {
    submissions.set(key, { count: 1, firstAt: now })
    return true
  }
  if (entry.count >= RATE_MAX) return false
  entry.count++
  return true
}

// Nettoyage périodique pour éviter fuite mémoire
setInterval(() => {
  const now = Date.now()
  for (const [key, value] of submissions.entries()) {
    if (now - value.firstAt > RATE_WINDOW_MS) submissions.delete(key)
  }
}, 15 * 60 * 1000)

const MAX_LEN = {
  name: 100,
  phone: 30,
  email: 150,
  city: 100,
  projectType: 80,
  message: 3000,
}

export async function sendContactForm(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // ── Honeypot anti-bot ─────────────────────────────────────
  // Champ caché "website" que seul un bot remplirait
  const honeypot = formData.get('website')?.toString() ?? ''
  if (honeypot) {
    // Silencieusement renvoyer succès pour ne pas donner d'indice au bot
    return { status: 'success', message: 'Votre message a bien été envoyé. Nous vous répondrons sous 48 h.' }
  }

  // ── Extraction et trim ────────────────────────────────────
  const name = (formData.get('name')?.toString() ?? '').trim().slice(0, MAX_LEN.name)
  const phone = (formData.get('phone')?.toString() ?? '').trim().slice(0, MAX_LEN.phone)
  const email = (formData.get('email')?.toString() ?? '').trim().slice(0, MAX_LEN.email)
  const city = (formData.get('city')?.toString() ?? '').trim().slice(0, MAX_LEN.city)
  const projectType = (formData.get('project_type')?.toString() ?? '').trim().slice(0, MAX_LEN.projectType)
  // Surface : on ne garde que les chiffres (anti format libre / pollution)
  const surfaceRaw = (formData.get('surface_m2')?.toString() ?? '').trim().slice(0, 10)
  const surfaceDigits = surfaceRaw.replace(/[^\d]/g, '')
  const surface = surfaceDigits ? `${surfaceDigits} m²` : ''
  const message = (formData.get('message')?.toString() ?? '').trim().slice(0, MAX_LEN.message)

  // ── Validation obligatoire ────────────────────────────────
  if (!name || !phone) {
    return { status: 'error', message: 'Nom et téléphone sont obligatoires.' }
  }
  if (name.length < 2) {
    return { status: 'error', message: 'Merci de renseigner votre nom complet.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (email && !emailRegex.test(email)) {
    return { status: 'error', message: 'Adresse email invalide.' }
  }

  // Téléphone : doit contenir au moins 9 chiffres
  const phoneDigits = phone.replace(/\D/g, '')
  if (phoneDigits.length < 9) {
    return { status: 'error', message: 'Numéro de téléphone invalide.' }
  }

  // ── Rate limiting ─────────────────────────────────────────
  // Pas d'accès IP facile en server action Next, on utilise email+phone comme clé
  // (bot moyen ne varie pas les 2 en même temps)
  const rateKey = (email || 'no-email') + '|' + phoneDigits
  if (!checkRateLimit(rateKey)) {
    return { status: 'error', message: 'Trop de tentatives récentes. Merci de réessayer plus tard ou de nous appeler directement.' }
  }

  // ── Détection spam grossière ──────────────────────────────
  // Liens multiples dans le message = spam fort probable
  const linkCount = (message.match(/https?:\/\//gi) ?? []).length
  if (linkCount > 2) {
    return { status: 'success', message: 'Votre message a bien été envoyé. Nous vous répondrons sous 48 h.' }
  }

  // ── Env SMTP vérification ─────────────────────────────────
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('SMTP env variables missing')
    return { status: 'error', message: `Une erreur est survenue. Appelez-nous directement au ${company.phone}.` }
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  // Tous les inputs HTML-escape avant interpolation dans templates
  const nameE = esc(name)
  const phoneE = esc(phone)
  const emailE = esc(email)
  const cityE = esc(city)
  const projectTypeE = esc(projectType)
  const surfaceE = esc(surface)
  const messageE = esc(message).replace(/\n/g, '<br>')

  /**
   * Wrapper HTML email avec forçage du mode clair sur tous les clients
   * (iOS Mail / Gmail / Outlook), pour empêcher l'inversion automatique
   * des couleurs en dark mode qui rend le vert CB Sols délavé/illisible.
   *
   * Trois mécanismes cumulés :
   * 1. meta color-scheme="light only" (Apple Mail, Gmail récent)
   * 2. CSS :root color-scheme light only
   * 3. Couleurs hex slightly off-pure (#fefefe au lieu de #ffffff) →
   *    iOS Mail ne déclenche pas son auto-darkening sur ces nuances
   */
  const wrap = (content: string) => `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light only">
  <meta name="supported-color-schemes" content="light only">
  <title>CB Sols</title>
  <style>
    :root { color-scheme: light only; supported-color-schemes: light only; }
    body { margin: 0; padding: 0; background: #f5f0e6; }
    /* Outlook dark mode override */
    [data-ogsc] .light-bg { background: #fefefe !important; }
    [data-ogsc] .dark-text { color: #1a1916 !important; }
    [data-ogsc] .green-text { color: #2C5530 !important; }
  </style>
</head>
<body style="margin:0; padding:0; background:#f5f0e6;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background:#f5f0e6;">
    <tr><td align="center" style="padding:24px 12px;">
      ${content}
    </td></tr>
  </table>
</body>
</html>`

  const htmlBody = wrap(`
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" class="light-bg" style="max-width:600px; width:100%; background:#fefefe; font-family: Georgia, 'Times New Roman', serif; color:#1a1916; border-radius:8px;">
      <tr><td style="padding:40px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-bottom:2px solid #2C5530; padding-bottom:20px; margin-bottom:30px;">
          <tr><td>
            <h1 class="green-text" style="font-size:24px; color:#2C5530; margin:0; font-family: Georgia, 'Times New Roman', serif;">Nouvelle demande de devis</h1>
            <p style="color:#6b6155; margin:8px 0 0; font-size:14px; font-family: Georgia, 'Times New Roman', serif;">CB Sols, cbsols.fr</p>
          </td></tr>
        </table>

        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-collapse:collapse; margin-top:24px;">
          <tr>
            <td style="padding:12px 0; border-bottom:1px solid #e8e2d5; color:#6b6155; font-size:12px; text-transform:uppercase; letter-spacing:0.1em; width:140px; font-family: Georgia, serif;">Nom</td>
            <td class="dark-text" style="padding:12px 0; border-bottom:1px solid #e8e2d5; color:#1a1916; font-size:15px; font-weight:600; font-family: Georgia, serif;">${nameE}</td>
          </tr>
          <tr>
            <td style="padding:12px 0; border-bottom:1px solid #e8e2d5; color:#6b6155; font-size:12px; text-transform:uppercase; letter-spacing:0.1em; font-family: Georgia, serif;">Téléphone</td>
            <td style="padding:12px 0; border-bottom:1px solid #e8e2d5;"><a href="tel:${phoneE}" class="green-text" style="color:#2C5530; font-size:18px; font-weight:bold; text-decoration:none; font-family: Georgia, serif;">${phoneE}</a></td>
          </tr>
          ${email ? `<tr>
            <td style="padding:12px 0; border-bottom:1px solid #e8e2d5; color:#6b6155; font-size:12px; text-transform:uppercase; letter-spacing:0.1em; font-family: Georgia, serif;">Email</td>
            <td style="padding:12px 0; border-bottom:1px solid #e8e2d5;"><a href="mailto:${emailE}" class="green-text" style="color:#2C5530; text-decoration:none; font-family: Georgia, serif;">${emailE}</a></td>
          </tr>` : ''}
          ${city ? `<tr><td style="padding:12px 0; border-bottom:1px solid #e8e2d5; color:#6b6155; font-size:12px; text-transform:uppercase; letter-spacing:0.1em; font-family: Georgia, serif;">Ville</td><td class="dark-text" style="padding:12px 0; border-bottom:1px solid #e8e2d5; color:#1a1916; font-family: Georgia, serif;">${cityE}</td></tr>` : ''}
          ${projectType ? `<tr><td style="padding:12px 0; border-bottom:1px solid #e8e2d5; color:#6b6155; font-size:12px; text-transform:uppercase; letter-spacing:0.1em; font-family: Georgia, serif;">Type de projet</td><td class="dark-text" style="padding:12px 0; border-bottom:1px solid #e8e2d5; color:#1a1916; font-family: Georgia, serif;">${projectTypeE}</td></tr>` : ''}
          ${surface ? `<tr><td style="padding:12px 0; border-bottom:1px solid #e8e2d5; color:#6b6155; font-size:12px; text-transform:uppercase; letter-spacing:0.1em; font-family: Georgia, serif;">Surface estimée</td><td class="dark-text" style="padding:12px 0; border-bottom:1px solid #e8e2d5; color:#1a1916; font-weight:600; font-family: Georgia, serif;">${surfaceE}</td></tr>` : ''}
        </table>

        ${message ? `
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top:30px; background:#f5f0e6; border-left:3px solid #2C5530; border-radius:4px;">
          <tr><td style="padding:20px;">
            <div style="color:#6b6155; font-size:12px; text-transform:uppercase; letter-spacing:0.1em; margin-bottom:12px; font-family: Georgia, serif;">Message</div>
            <p class="dark-text" style="color:#1a1916; line-height:1.7; margin:0; font-size:14px; font-family: Georgia, serif;">${messageE}</p>
          </td></tr>
        </table>` : ''}

        <div style="margin-top:40px; padding-top:20px; border-top:1px solid #e8e2d5; color:#6b6155; font-size:11px; font-family: Georgia, serif;">
          Reçu le ${new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
        </div>
      </td></tr>
    </table>
  `)

  const autoReplyHtml = wrap(`
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" class="light-bg" style="max-width:600px; width:100%; background:#fefefe; font-family: Georgia, 'Times New Roman', serif; color:#1a1916; border-radius:8px;">
      <tr><td style="padding:40px;">
        <h1 class="green-text" style="font-size:24px; color:#2C5530; margin:0 0 8px; font-family: Georgia, 'Times New Roman', serif;">Votre demande a bien été reçue</h1>
        <p style="color:#6b6155; font-size:14px; margin:0 0 30px; font-family: Georgia, serif;">CB Sols · Revêtements de sol en Charente-Maritime</p>

        <p class="dark-text" style="color:#1a1916; line-height:1.7; font-size:15px; font-family: Georgia, serif;">Bonjour ${nameE},</p>
        <p class="dark-text" style="color:#1a1916; line-height:1.7; font-size:15px; font-family: Georgia, serif;">
          Nous avons bien reçu votre demande${projectType ? ` concernant : <strong class="green-text" style="color:#2C5530;">${projectTypeE}</strong>` : ''}.
          Valentin Prévoteau vous recontactera sous <strong class="green-text" style="color:#2C5530;">48 h ouvrées</strong> pour faire le point sur votre projet.
        </p>
        <p class="dark-text" style="color:#1a1916; line-height:1.7; font-size:15px; font-family: Georgia, serif;">
          En attendant, n&#39;hésitez pas à nous appeler directement au <a href="tel:${company.phoneClean}" class="green-text" style="color:#2C5530; text-decoration:none; font-weight:600; font-family: Georgia, serif;">${company.phone}</a>.
        </p>
        <div style="margin-top:40px; padding-top:20px; border-top:1px solid #e8e2d5;">
          <p style="color:#6b6155; font-size:12px; margin:0; line-height:1.6; font-family: Georgia, serif;">CB Sols Revêtements<br>${company.address.full}<br><a href="mailto:${company.email}" class="green-text" style="color:#2C5530; text-decoration:none;">${company.email}</a></p>
        </div>
      </td></tr>
    </table>
  `)

  try {
    await transporter.sendMail({
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_TO,
      replyTo: email || undefined,
      subject: sanitizeHeader(`[CB Sols] Devis | ${projectType || 'Nouveau contact'}${surface ? ` · ${surface}` : ''} | ${name}`),
      html: htmlBody,
    })

    if (email) {
      await transporter.sendMail({
        from: process.env.CONTACT_FROM,
        to: email,
        subject: 'CB Sols : Votre demande a bien été reçue',
        html: autoReplyHtml,
      })
    }

    // ── Persistance du lead en DB Neon (non-bloquant : un échec DB ne
    //    doit pas casser l'expérience utilisateur — l'email a été envoyé) ──
    try {
      await ensureSchema()
      const q = sql()
      const h = await headers()
      const ua = h.get('user-agent')?.slice(0, 500) ?? null
      const referer = h.get('referer')?.slice(0, 500) ?? null
      const ipRaw = (h.get('x-forwarded-for') ?? '').split(',')[0].trim() || (h.get('x-real-ip') ?? '')
      // On hash l'IP : on garde une trace anti-doublon mais on ne stocke pas
      // de PII identifiante (RGPD-friendly)
      const ipHash = ipRaw ? await sha256(ipRaw) : null

      // ── Géolocalisation Vercel (niveau ville, RGPD) ──
      let geoCity: string | null = null
      try {
        const rawCity = h.get('x-vercel-ip-city')
        geoCity = rawCity ? decodeURIComponent(rawCity) : null
      } catch {
        geoCity = h.get('x-vercel-ip-city')
      }
      const geoRegion = h.get('x-vercel-ip-country-region')
      const geoCountry = h.get('x-vercel-ip-country')

      // ── Champs d'attribution (first-touch) remontés du formulaire ──
      const attrReferrer = (formData.get('attr_referrer')?.toString() ?? '').slice(0, 500).trim() || null
      const attrLanding = (formData.get('attr_landing')?.toString() ?? '').slice(0, 500).trim() || null
      const utmSource = (formData.get('attr_utm_source')?.toString() ?? '').slice(0, 500).trim() || null
      const utmMedium = (formData.get('attr_utm_medium')?.toString() ?? '').slice(0, 500).trim() || null
      const utmCampaign = (formData.get('attr_utm_campaign')?.toString() ?? '').slice(0, 500).trim() || null
      const gclid = (formData.get('attr_gclid')?.toString() ?? '').slice(0, 500).trim() || null
      const attrChannel = parseChannel({ referrer: attrReferrer, utm_medium: utmMedium, gclid }).channel

      const id = generateLeadId()
      const segment = inferSegment(projectType)

      // Trouve ou crée un contact lié (regroupement par téléphone/email/nom+ville)
      const contactId = await findOrCreateContact({
        nom: name,
        telephone: phone,
        email: email || null,
        ville: city || null,
        segment,
      })

      await q`
        INSERT INTO leads (
          id, source, nom, telephone, email, ville, type_projet, surface,
          message, segment, ua, referer, ip_hash, contact_id,
          geo_city, geo_region, geo_country, attr_channel, attr_referrer,
          attr_landing, utm_source, utm_medium, utm_campaign, gclid
        ) VALUES (
          ${id}, 'site_web', ${name}, ${phone}, ${email || null},
          ${city || null}, ${projectType || null}, ${surface || null},
          ${message || null}, ${segment}, ${ua}, ${referer}, ${ipHash}, ${contactId},
          ${geoCity}, ${geoRegion}, ${geoCountry}, ${attrChannel}, ${attrReferrer},
          ${attrLanding}, ${utmSource}, ${utmMedium}, ${utmCampaign}, ${gclid}
        )
      `
    } catch (dbErr) {
      // Logué côté serveur, l'utilisateur ne le voit pas — l'email passe quand
      // même donc le lead n'est pas perdu pour Valentin
      console.error('Lead persist error (non-bloquant):', dbErr)
    }

    return { status: 'success', message: 'Votre message a bien été envoyé. Nous vous répondrons sous 48 h.' }
  } catch (err) {
    console.error('Email error:', err)
    return { status: 'error', message: `Une erreur est survenue. Appelez-nous directement au ${company.phone}.` }
  }
}

// ── Helpers persistance ─────────────────────────────────────────────────

function generateLeadId(): string {
  // id lisible : ld_<8 chars random base36> pour pouvoir les retrouver
  // facilement dans les URLs admin
  const random = Math.random().toString(36).slice(2, 10)
  return `ld_${Date.now().toString(36)}${random}`
}

async function sha256(input: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input))
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

function inferSegment(projectType: string | undefined): string {
  if (!projectType) return 'particulier'
  const p = projectType.toLowerCase()
  if (p.includes('hôtel') || p.includes('hotel')) return 'hotel'
  if (p.includes('restaurant') || p.includes('brasserie')) return 'restaurant'
  if (p.includes('bureau') || p.includes('open')) return 'bureau'
  if (p.includes('camping') || p.includes('mobil')) return 'camping'
  if (p.includes('collectivité') || p.includes('école') || p.includes('mairie')) return 'collectivite'
  if (p.includes('commerce') || p.includes('boutique')) return 'commerce'
  if (p.includes('architecte')) return 'architecte'
  return 'particulier'
}
