'use server'

import nodemailer from 'nodemailer'
import { company } from '@/data/company'

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

// Rate limiting en mémoire par IP — simple mais efficace pour un petit trafic
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
  const messageE = esc(message).replace(/\n/g, '<br>')

  const htmlBody = `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0D0C0A; color: #F0EBE3; padding: 40px;">
      <div style="border-bottom: 2px solid #C4714A; padding-bottom: 20px; margin-bottom: 30px;">
        <h1 style="font-size: 24px; color: #C4714A; margin: 0;">Nouvelle demande de devis</h1>
        <p style="color: #8A8070; margin: 8px 0 0; font-size: 14px;">CB Sols, cbsols.fr</p>
      </div>

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid rgba(240,235,227,0.08); color: #8A8070; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 140px;">Nom</td>
          <td style="padding: 12px 0; border-bottom: 1px solid rgba(240,235,227,0.08); color: #F0EBE3; font-size: 15px;">${nameE}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid rgba(240,235,227,0.08); color: #8A8070; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Téléphone</td>
          <td style="padding: 12px 0; border-bottom: 1px solid rgba(240,235,227,0.08);"><a href="tel:${phoneE}" style="color: #C4714A; font-size: 18px; font-weight: bold; text-decoration: none;">${phoneE}</a></td>
        </tr>
        ${email ? `<tr>
          <td style="padding: 12px 0; border-bottom: 1px solid rgba(240,235,227,0.08); color: #8A8070; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
          <td style="padding: 12px 0; border-bottom: 1px solid rgba(240,235,227,0.08);"><a href="mailto:${emailE}" style="color: #C4714A; text-decoration: none;">${emailE}</a></td>
        </tr>` : ''}
        ${city ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(240,235,227,0.08); color: #8A8070; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Ville</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(240,235,227,0.08); color: #F0EBE3;">${cityE}</td></tr>` : ''}
        ${projectType ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(240,235,227,0.08); color: #8A8070; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Type de projet</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(240,235,227,0.08); color: #F0EBE3;">${projectTypeE}</td></tr>` : ''}
      </table>

      ${message ? `
      <div style="margin-top: 30px; padding: 20px; background: rgba(240,235,227,0.04); border-left: 3px solid #C4714A;">
        <div style="color: #8A8070; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px;">Message</div>
        <p style="color: #B8AFA4; line-height: 1.7; margin: 0; font-size: 14px;">${messageE}</p>
      </div>` : ''}

      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(240,235,227,0.08); color: #8A8070; font-size: 11px;">
        Reçu le ${new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  `

  const autoReplyHtml = `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0D0C0A; color: #F0EBE3; padding: 40px;">
      <h1 style="font-size: 24px; color: #C4714A; margin: 0 0 8px;">Votre demande a bien été reçue</h1>
      <p style="color: #8A8070; font-size: 14px; margin: 0 0 30px;">CB Sols : Revêtements de sol en Charente-Maritime</p>

      <p style="color: #B8AFA4; line-height: 1.7;">Bonjour ${nameE},</p>
      <p style="color: #B8AFA4; line-height: 1.7;">
        Nous avons bien reçu votre demande${projectType ? ` concernant : <strong style="color: #F0EBE3;">${projectTypeE}</strong>` : ''}.
        Valentin Prévoteau vous recontactera sous <strong style="color: #C4714A;">48 h ouvrées</strong> pour faire le point sur votre projet.
      </p>
      <p style="color: #B8AFA4; line-height: 1.7;">
        En attendant, n&#39;hésitez pas à nous appeler directement au <a href="tel:${company.phoneClean}" style="color: #C4714A; text-decoration: none;">${company.phone}</a>.
      </p>
      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(240,235,227,0.08);">
        <p style="color: #8A8070; font-size: 12px; margin: 0;">CB Sols Revêtements<br>${company.address.full}<br>${company.email}</p>
      </div>
    </div>
  `

  try {
    await transporter.sendMail({
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_TO,
      replyTo: email || undefined,
      subject: sanitizeHeader(`[CB Sols] Devis | ${projectType || 'Nouveau contact'} | ${name}`),
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

    return { status: 'success', message: 'Votre message a bien été envoyé. Nous vous répondrons sous 48 h.' }
  } catch (err) {
    console.error('Email error:', err)
    return { status: 'error', message: `Une erreur est survenue. Appelez-nous directement au ${company.phone}.` }
  }
}
