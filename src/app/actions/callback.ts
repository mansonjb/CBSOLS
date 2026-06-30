'use server'

import nodemailer from 'nodemailer'
import { headers } from 'next/headers'
import { company } from '@/data/company'
import { sql, ensureSchema, findOrCreateContact } from '@/lib/db'
import { parseChannel } from '@/lib/attribution'
import { CRENEAUX } from '@/data/callback-creneaux'

export interface CallbackState {
  status: 'idle' | 'success' | 'error'
  message: string
}

// HTML-escape pour empêcher toute injection dans les templates mail.
function esc(str: string): string {
  return String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[c] as string)
}

// Supprime les CR/LF des entêtes SMTP (anti injection d'entête).
function sanitizeHeader(str: string): string {
  return String(str).replace(/[\r\n]+/g, ' ').slice(0, 200)
}

// Rate limiting en mémoire par IP, simple mais suffisant pour un site vitrine.
// Reset automatique à chaque redéploiement.
const submissions = new Map<string, { count: number; firstAt: number }>()
const RATE_WINDOW_MS = 60 * 60 * 1000 // 1h
const RATE_MAX = 5 // 5 demandes max par clé par heure

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

// Nettoyage périodique pour éviter une fuite mémoire.
setInterval(() => {
  const now = Date.now()
  for (const [key, value] of submissions.entries()) {
    if (now - value.firstAt > RATE_WINDOW_MS) submissions.delete(key)
  }
}, 15 * 60 * 1000)

// ── Helpers persistance (dupliqués depuis contact.ts pour rester autonomes) ──

function generateLeadId(): string {
  const random = Math.random().toString(36).slice(2, 10)
  return `ld_${Date.now().toString(36)}${random}`
}

async function sha256(input: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input))
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export async function requestCallback(
  _prev: CallbackState,
  formData: FormData
): Promise<CallbackState> {
  // ── Honeypot anti-bot : champ caché qui doit rester vide ──
  const honeypot = formData.get('honeypot')?.toString() ?? ''
  if (honeypot) {
    // Succès silencieux pour ne pas donner d'indice au bot.
    return { status: 'success', message: 'Votre demande de rappel a bien été enregistrée.' }
  }

  // ── Extraction et trim ──
  const nom = (formData.get('nom')?.toString() ?? '').trim().slice(0, 100)
  const telephone = (formData.get('telephone')?.toString() ?? '').trim().slice(0, 30)
  const creneau = (formData.get('creneau')?.toString() ?? '').trim()

  // ── Validation ──
  if (nom.length < 2) {
    return { status: 'error', message: 'Merci de renseigner votre prénom et votre nom.' }
  }
  if (nom.length > 100) {
    return { status: 'error', message: 'Nom trop long.' }
  }

  // Téléphone FR plausible : chiffres, espaces, points, +33, 10 à 14 caractères.
  const phoneRegex = /^(?:\+33|0)[\d.\s]{8,13}$/
  const phoneCompact = telephone.replace(/\s/g, '')
  if (!phoneRegex.test(phoneCompact) || telephone.length < 10 || telephone.length > 14) {
    return { status: 'error', message: 'Numéro de téléphone invalide.' }
  }

  if (!(CRENEAUX as readonly string[]).includes(creneau)) {
    return { status: 'error', message: 'Merci de choisir un créneau de rappel.' }
  }

  // ── Rate limiting (clé = numéro de téléphone) ──
  const phoneDigits = telephone.replace(/\D/g, '')
  if (!checkRateLimit(phoneDigits)) {
    return {
      status: 'error',
      message: `Trop de demandes récentes. Appelez-nous directement au ${company.phone}.`,
    }
  }

  // ── Env SMTP ──
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

  const nomE = esc(nom)
  const phoneE = esc(telephone)
  const creneauE = esc(creneau)

  /**
   * Wrapper HTML email forçant le mode clair (iOS Mail / Gmail / Outlook),
   * repris des emails de contact.ts déjà corrigés pour iOS.
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
            <h1 class="green-text" style="font-size:24px; color:#2C5530; margin:0; font-family: Georgia, 'Times New Roman', serif;">Demande de rappel</h1>
            <p style="color:#6b6155; margin:8px 0 0; font-size:14px; font-family: Georgia, 'Times New Roman', serif;">CB Sols, cbsols.fr</p>
          </td></tr>
        </table>

        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-collapse:collapse; margin-top:24px;">
          <tr>
            <td style="padding:12px 0; border-bottom:1px solid #e8e2d5; color:#6b6155; font-size:12px; text-transform:uppercase; letter-spacing:0.1em; width:160px; font-family: Georgia, serif;">Nom</td>
            <td class="dark-text" style="padding:12px 0; border-bottom:1px solid #e8e2d5; color:#1a1916; font-size:15px; font-weight:600; font-family: Georgia, serif;">${nomE}</td>
          </tr>
          <tr>
            <td style="padding:12px 0; border-bottom:1px solid #e8e2d5; color:#6b6155; font-size:12px; text-transform:uppercase; letter-spacing:0.1em; font-family: Georgia, serif;">Téléphone</td>
            <td style="padding:12px 0; border-bottom:1px solid #e8e2d5;"><a href="tel:${phoneE}" class="green-text" style="color:#2C5530; font-size:22px; font-weight:bold; text-decoration:none; font-family: Georgia, serif;">${phoneE}</a></td>
          </tr>
          <tr>
            <td style="padding:12px 0; border-bottom:1px solid #e8e2d5; color:#6b6155; font-size:12px; text-transform:uppercase; letter-spacing:0.1em; font-family: Georgia, serif;">Créneau souhaité</td>
            <td class="dark-text" style="padding:12px 0; border-bottom:1px solid #e8e2d5; color:#1a1916; font-size:15px; font-weight:600; font-family: Georgia, serif;">${creneauE}</td>
          </tr>
        </table>

        <div style="margin-top:40px; padding-top:20px; border-top:1px solid #e8e2d5; color:#6b6155; font-size:11px; font-family: Georgia, serif;">
          Demande reçue le ${new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
        </div>
      </td></tr>
    </table>
  `)

  try {
    await transporter.sendMail({
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_TO,
      subject: sanitizeHeader(`Demande de rappel - ${nom}`),
      html: htmlBody,
    })

    // ── Persistance du lead (non-bloquant : l'email prime) ──
    try {
      await ensureSchema()
      const q = sql()
      const h = await headers()
      const ua = h.get('user-agent')?.slice(0, 500) ?? null
      const referer = h.get('referer')?.slice(0, 500) ?? null
      const ipRaw = (h.get('x-forwarded-for') ?? '').split(',')[0].trim() || (h.get('x-real-ip') ?? '')
      // IP hashée : trace anti-doublon sans stocker de PII identifiante (RGPD).
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
      const typeProjet = 'Rappel téléphonique demandé'
      const message = `Créneau souhaité : ${creneau}`

      const contactId = await findOrCreateContact({
        nom,
        telephone,
        email: null,
        ville: null,
        segment: 'particulier',
      })

      await q`
        INSERT INTO leads (
          id, source, nom, telephone, email, ville, type_projet, surface,
          message, segment, ua, referer, ip_hash, contact_id,
          geo_city, geo_region, geo_country, attr_channel, attr_referrer,
          attr_landing, utm_source, utm_medium, utm_campaign, gclid
        ) VALUES (
          ${id}, 'rappel', ${nom}, ${telephone}, ${null},
          ${null}, ${typeProjet}, ${null},
          ${message}, ${'particulier'}, ${ua}, ${referer}, ${ipHash}, ${contactId},
          ${geoCity}, ${geoRegion}, ${geoCountry}, ${attrChannel}, ${attrReferrer},
          ${attrLanding}, ${utmSource}, ${utmMedium}, ${utmCampaign}, ${gclid}
        )
      `
    } catch (dbErr) {
      console.error('Lead persist error (non-bloquant):', dbErr)
    }

    return {
      status: 'success',
      message: 'Votre demande de rappel a bien été enregistrée. À tout de suite.',
    }
  } catch (err) {
    console.error('Callback email error:', err)
    return { status: 'error', message: `Une erreur est survenue. Appelez-nous directement au ${company.phone}.` }
  }
}
