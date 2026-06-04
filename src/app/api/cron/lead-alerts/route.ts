import { NextRequest, NextResponse } from 'next/server'
import { sql, ensureSchema, type LeadRow } from '@/lib/db'
import { getMailer } from '@/lib/mailer'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

type Bucket = {
  title: string
  intro: string
  leads: LeadRow[]
}

function esc(str: string): string {
  return String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[c] as string)
}

function renderBucket(b: Bucket): string {
  if (b.leads.length === 0) return ''
  const rows = b.leads.map((l) => {
    const url = `https://cbsols.fr/admin/leads/${l.id}`
    const date = new Date(l.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })
    return `
      <tr>
        <td style="padding:10px 8px; border-bottom:1px solid #e8e2d5; font-family: Georgia, serif; font-size:13px; color:#1a1916;">
          <a href="${url}" style="color:#2C5530; text-decoration:none; font-weight:600;">${esc(l.nom)}</a>
          <div style="font-size:12px; color:#6b6155; margin-top:2px;">
            ${esc(l.telephone)}${l.ville ? ' &middot; ' + esc(l.ville) : ''}${l.type_projet ? ' &middot; ' + esc(l.type_projet) : ''}
          </div>
          <div style="font-size:11px; color:#9a9080; margin-top:2px;">Recu le ${date}</div>
        </td>
      </tr>`
  }).join('')
  return `
    <h2 style="font-family: Georgia, serif; color:#2C5530; font-size:18px; margin:28px 0 6px;">${esc(b.title)} (${b.leads.length})</h2>
    <p style="font-family: Georgia, serif; color:#6b6155; font-size:13px; margin:0 0 12px;">${esc(b.intro)}</p>
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-collapse:collapse; background:#fefefe;">
      ${rows}
    </table>`
}

export async function GET(request: NextRequest) {
  // Auth via header Authorization (Vercel envoie automatiquement CRON_SECRET)
  const auth = request.headers.get('authorization') ?? ''
  const expected = `Bearer ${process.env.CRON_SECRET ?? ''}`
  if (!process.env.CRON_SECRET || auth !== expected) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  await ensureSchema()
  const q = sql()

  const nouveaux = (await q`
    SELECT id, created_at, updated_at, source, nom, telephone, email, ville,
           type_projet, surface, message, statut, derniere_interaction,
           prochaine_action, notes, segment, ua, referer, ip_hash, archived
    FROM leads
    WHERE statut = 'nouveau' AND archived = FALSE AND created_at < NOW() - INTERVAL '24 hours'
    ORDER BY created_at ASC
  `) as unknown as LeadRow[]

  const devisSansReponse = (await q`
    SELECT id, created_at, updated_at, source, nom, telephone, email, ville,
           type_projet, surface, message, statut, derniere_interaction,
           prochaine_action, notes, segment, ua, referer, ip_hash, archived
    FROM leads
    WHERE statut = 'devis_envoye' AND archived = FALSE AND derniere_interaction < NOW() - INTERVAL '14 days'
    ORDER BY derniere_interaction ASC
  `) as unknown as LeadRow[]

  const relances = (await q`
    SELECT id, created_at, updated_at, source, nom, telephone, email, ville,
           type_projet, surface, message, statut, derniere_interaction,
           prochaine_action, notes, segment, ua, referer, ip_hash, archived
    FROM leads
    WHERE statut = 'relance' AND archived = FALSE AND derniere_interaction < NOW() - INTERVAL '7 days'
    ORDER BY derniere_interaction ASC
  `) as unknown as LeadRow[]

  const count = nouveaux.length + devisSansReponse.length + relances.length
  console.log(`[cron lead-alerts] nouveaux=${nouveaux.length} devis=${devisSansReponse.length} relances=${relances.length}`)

  if (count === 0) {
    return NextResponse.json({ ok: true, count: 0 })
  }

  const buckets: Bucket[] = [
    { title: 'Nouveaux leads sans contact (>24h)', intro: 'A contacter en priorite, premier appel ou message.', leads: nouveaux },
    { title: 'Devis envoyes sans reponse (>14j)', intro: 'Relance manuelle a faire, leads tiedes a reactiver.', leads: devisSansReponse },
    { title: 'Relances en attente (>7j)', intro: 'Le client devait revenir vers nous, on insiste ou on archive.', leads: relances },
  ]

  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="color-scheme" content="light only">
  <title>CB Sols CRM - alertes</title>
</head>
<body style="margin:0; padding:0; background:#f5f0e6;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
    <tr><td align="center" style="padding:24px 12px;">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="640" style="max-width:640px; width:100%; background:#fefefe; border-radius:8px; padding:32px;">
        <tr><td>
          <h1 style="font-family: Georgia, serif; color:#2C5530; font-size:22px; margin:0 0 6px;">${count} lead${count > 1 ? 's' : ''} attend${count > 1 ? 'ent' : ''} une action</h1>
          <p style="font-family: Georgia, serif; color:#6b6155; font-size:13px; margin:0 0 6px;">Resume automatique CB Sols CRM, envoye chaque jour a 9h.</p>
          ${buckets.map(renderBucket).join('')}
          <div style="margin-top:36px; padding-top:18px; border-top:1px solid #e8e2d5; font-family: Georgia, serif; font-size:11px; color:#9a9080;">
            <a href="https://cbsols.fr/admin/leads" style="color:#2C5530; text-decoration:none;">Ouvrir le CRM</a>
          </div>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`

  try {
    const transporter = getMailer()
    await transporter.sendMail({
      from: process.env.CONTACT_FROM,
      to: 'contact@cbsols.fr',
      subject: `CB Sols CRM - ${count} lead${count > 1 ? 's' : ''} attend${count > 1 ? 'ent' : ''} une action`,
      html,
    })
  } catch (err) {
    console.error('[cron lead-alerts] email error:', err)
    return NextResponse.json({ ok: false, count, error: 'mail_failed' }, { status: 500 })
  }

  return NextResponse.json({ ok: true, count })
}
