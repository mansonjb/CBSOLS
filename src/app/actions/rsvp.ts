'use server'

import nodemailer from 'nodemailer'
import { headers } from 'next/headers'
import { company } from '@/data/company'
import { sql, ensureRsvpSchema } from '@/lib/db'

export interface RsvpState {
  status: 'idle' | 'success' | 'error'
  message: string
}

// Détails de l'événement (un seul à la fois ici). Si un autre événement
// arrive, dupliquer la page avec un autre slug.
const EVENT_SLUG = 'matieres-projets-2026'
const EVENT_LABEL = 'Matières & Projets · CB SOLS × KRETZ'

function esc(str: string): string {
  return String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[c] as string)
}

function sanitizeHeader(str: string): string {
  return String(str).replace(/[\r\n]+/g, ' ').slice(0, 200)
}

// Rate limiting mémoire par clé email+tel (cf. contact.ts)
const submissions = new Map<string, { count: number; firstAt: number }>()
const RATE_WINDOW_MS = 60 * 60 * 1000
const RATE_MAX = 6
function checkRateLimit(key: string): boolean {
  const now = Date.now()
  const entry = submissions.get(key)
  if (!entry) { submissions.set(key, { count: 1, firstAt: now }); return true }
  if (now - entry.firstAt > RATE_WINDOW_MS) { submissions.set(key, { count: 1, firstAt: now }); return true }
  if (entry.count >= RATE_MAX) return false
  entry.count++
  return true
}

const MAX = { nom: 100, societe: 120, email: 150, tel: 30, creneau: 40, message: 1500 }

async function sha256(input: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input))
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('')
}

function rsvpId(): string {
  return `rsvp_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`
}

export async function submitRsvp(_prev: RsvpState, formData: FormData): Promise<RsvpState> {
  // Honeypot anti-bot
  if ((formData.get('website')?.toString() ?? '')) {
    return { status: 'success', message: 'Merci, votre inscription est bien enregistrée.' }
  }

  const nom = (formData.get('nom')?.toString() ?? '').trim().slice(0, MAX.nom)
  const societe = (formData.get('societe')?.toString() ?? '').trim().slice(0, MAX.societe)
  const email = (formData.get('email')?.toString() ?? '').trim().slice(0, MAX.email)
  const telephone = (formData.get('telephone')?.toString() ?? '').trim().slice(0, MAX.tel)
  const creneau = (formData.get('creneau')?.toString() ?? '').trim().slice(0, MAX.creneau)
  const message = (formData.get('message')?.toString() ?? '').trim().slice(0, MAX.message)
  const nbRaw = (formData.get('nb_personnes')?.toString() ?? '1').replace(/[^\d]/g, '')
  const nbPersonnes = Math.min(Math.max(parseInt(nbRaw || '1', 10) || 1, 1), 50)

  // Validation : nom + (email ou téléphone) obligatoires
  if (!nom || nom.length < 2) {
    return { status: 'error', message: 'Merci d’indiquer votre nom.' }
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (email && !emailRegex.test(email)) {
    return { status: 'error', message: 'Adresse email invalide.' }
  }
  if (!email && !telephone) {
    return { status: 'error', message: 'Laissez-nous un email ou un téléphone pour vous recontacter.' }
  }

  const rateKey = (email || 'no-email') + '|' + telephone.replace(/\D/g, '')
  if (!checkRateLimit(rateKey)) {
    return { status: 'error', message: `Trop de tentatives. Réessayez plus tard ou appelez-nous au ${company.phone}.` }
  }

  // ── Persistance DB (prioritaire : c'est la liste des inscrits) ──
  let persisted = false
  try {
    await ensureRsvpSchema()
    const q = sql()
    const h = await headers()
    const ua = h.get('user-agent')?.slice(0, 500) ?? null
    const referer = h.get('referer')?.slice(0, 500) ?? null
    const ipRaw = (h.get('x-forwarded-for') ?? '').split(',')[0].trim() || (h.get('x-real-ip') ?? '')
    const ipHash = ipRaw ? await sha256(ipRaw) : null
    await q`
      INSERT INTO event_rsvp (
        id, event_slug, nom, societe, email, telephone, nb_personnes,
        creneau, message, ua, referer, ip_hash
      ) VALUES (
        ${rsvpId()}, ${EVENT_SLUG}, ${nom}, ${societe || null}, ${email || null},
        ${telephone || null}, ${nbPersonnes}, ${creneau || null}, ${message || null},
        ${ua}, ${referer}, ${ipHash}
      )
    `
    persisted = true
  } catch (dbErr) {
    console.error('RSVP persist error:', dbErr)
  }

  // ── Email de notification à CB Sols (non bloquant) ──
  try {
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 465),
        secure: process.env.SMTP_SECURE === 'true' || Number(process.env.SMTP_PORT ?? 465) === 465,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      })
      const rows = [
        ['Nom', nom],
        ['Société', societe],
        ['Email', email],
        ['Téléphone', telephone],
        ['Personnes', String(nbPersonnes)],
        ['Arrivée', creneau],
        ['Message', message],
      ].filter(([, v]) => v)
      const trs = rows.map(([k, v]) => `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #e8e2d5;color:#6b6155;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;width:140px;font-family:Georgia,serif;">${esc(k)}</td>
          <td style="padding:10px 0;border-bottom:1px solid #e8e2d5;color:#1a1916;font-size:15px;font-family:Georgia,serif;">${esc(v).replace(/\n/g, '<br>')}</td>
        </tr>`).join('')
      const html = `<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8"><meta name="color-scheme" content="light only"></head>
<body style="margin:0;padding:0;background:#f5f0e6;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f0e6;"><tr><td align="center" style="padding:24px 12px;">
<table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;background:#fefefe;border-radius:8px;font-family:Georgia,serif;color:#1a1916;">
<tr><td style="padding:40px;">
<h1 style="font-size:22px;color:#2C5530;margin:0;">Nouvelle inscription · petit-déjeuner</h1>
<p style="color:#6b6155;margin:8px 0 24px;font-size:14px;">${esc(EVENT_LABEL)}</p>
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">${trs}</table>
<p style="margin-top:28px;color:#6b6155;font-size:12px;">Reçu le ${new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })} · Liste complète dans l’admin : cbsols.fr/admin/inscriptions</p>
</td></tr></table></td></tr></table></body></html>`
      await transporter.sendMail({
        from: process.env.CONTACT_FROM,
        to: process.env.CONTACT_TO,
        replyTo: email || undefined,
        subject: sanitizeHeader(`[CB Sols] Inscription petit-déjeuner · ${nom}${societe ? ` (${societe})` : ''} · ${nbPersonnes} p.`),
        html,
      })
    }
  } catch (mailErr) {
    console.error('RSVP mail error (non bloquant):', mailErr)
  }

  if (!persisted) {
    return { status: 'error', message: `Une erreur est survenue. Merci de nous appeler au ${company.phone}.` }
  }
  return {
    status: 'success',
    message: 'Votre inscription est bien enregistrée. Au plaisir de vous accueillir le vendredi 23 octobre.',
  }
}
