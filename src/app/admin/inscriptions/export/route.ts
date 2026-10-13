import { sql, ensureRsvpSchema, type RsvpRow } from '@/lib/db'

export const dynamic = 'force-dynamic'

const EVENT_SLUG = 'matieres-projets-2026'

// Échappement CSV : guillemets doublés, champ entouré de guillemets si besoin.
function csvCell(v: unknown): string {
  const s = v === null || v === undefined ? '' : String(v)
  if (/[",;\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}

export async function GET() {
  await ensureRsvpSchema()
  const q = sql()
  const rows = (await q`
    SELECT created_at, nom, societe, email, telephone, nb_personnes, creneau, message
    FROM event_rsvp
    WHERE event_slug = ${EVENT_SLUG}
    ORDER BY created_at DESC
    LIMIT 5000
  `) as unknown as RsvpRow[]

  const header = ['Date', 'Nom', 'Societe', 'Email', 'Telephone', 'Personnes', 'Arrivee', 'Message']
  const lines = [header.join(';')]
  for (const r of rows) {
    lines.push([
      csvCell(new Date(r.created_at).toLocaleString('fr-FR')),
      csvCell(r.nom),
      csvCell(r.societe),
      csvCell(r.email),
      csvCell(r.telephone),
      csvCell(r.nb_personnes),
      csvCell(r.creneau),
      csvCell(r.message),
    ].join(';'))
  }
  // BOM UTF-8 pour qu'Excel ouvre les accents correctement.
  const csv = '﻿' + lines.join('\r\n')
  const today = new Date().toISOString().slice(0, 10)
  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="inscriptions-petit-dejeuner-${today}.csv"`,
      'Cache-Control': 'no-store',
    },
  })
}
