import { sql, ensureRsvpSchema, type RsvpRow } from '@/lib/db'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const EVENT_SLUG = 'matieres-projets-2026'
const EVENT_LABEL = 'Matières & Projets · CB SOLS × KRETZ · 23 octobre 2026'

async function getRsvps(): Promise<RsvpRow[]> {
  await ensureRsvpSchema()
  const q = sql()
  const rows = (await q`
    SELECT id, created_at, event_slug, nom, societe, email, telephone,
           nb_personnes, creneau, message, ua, referer, ip_hash
    FROM event_rsvp
    WHERE event_slug = ${EVENT_SLUG}
    ORDER BY created_at DESC
    LIMIT 2000
  `) as unknown as RsvpRow[]
  return rows
}

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })

export default async function InscriptionsPage() {
  const rsvps = await getRsvps()
  const totalInscrits = rsvps.length
  const totalPersonnes = rsvps.reduce((s, r) => s + (r.nb_personnes || 1), 0)

  const stats = [
    { label: 'Inscrits', value: totalInscrits },
    { label: 'Personnes attendues', value: totalPersonnes },
  ]

  return (
    <div style={{ padding: '2.5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '0.4rem', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700 }}>Événement</div>
      <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.7rem', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.4rem', letterSpacing: '-0.02em' }}>Inscriptions petit-déjeuner</h1>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 1.75rem' }}>{EVENT_LABEL}</p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
        {stats.map((s) => (
          <div key={s.label} style={{ flex: '1 1 180px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem 1.5rem' }}>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '0.5rem', fontWeight: 600 }}>{s.label}</div>
          </div>
        ))}
        <div style={{ flex: '1 1 180px', display: 'flex', alignItems: 'center' }}>
          <a href="/admin/inscriptions/export" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--terra)', color: '#fff', padding: '0.75rem 1.25rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700 }}>
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
            Exporter en CSV
          </a>
        </div>
      </div>

      {rsvps.length === 0 ? (
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
          Aucune inscription pour le moment.
        </div>
      ) : (
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', minWidth: '860px' }}>
              <thead>
                <tr>
                  {['Date', 'Nom', 'Société', 'Contact', 'Pers.', 'Arrivée', 'Message'].map((h) => (
                    <th key={h} style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '1px solid var(--border)', fontSize: '0.66rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rsvps.map((r) => (
                  <tr key={r.id}>
                    <td style={{ padding: '0.8rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{fmtDate(r.created_at)}</td>
                    <td style={{ padding: '0.8rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--dark)', fontWeight: 600, whiteSpace: 'nowrap' }}>{r.nom}</td>
                    <td style={{ padding: '0.8rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--dark)' }}>{r.societe || '·'}</td>
                    <td style={{ padding: '0.8rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--dark)' }}>
                      {r.email && <div><a href={`mailto:${r.email}`} style={{ color: 'var(--terra)', textDecoration: 'none' }}>{r.email}</a></div>}
                      {r.telephone && <div><a href={`tel:${r.telephone}`} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>{r.telephone}</a></div>}
                      {!r.email && !r.telephone && '·'}
                    </td>
                    <td style={{ padding: '0.8rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--dark)', fontWeight: 700, textAlign: 'center' }}>{r.nb_personnes}</td>
                    <td style={{ padding: '0.8rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{r.creneau || '·'}</td>
                    <td style={{ padding: '0.8rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--text-muted)', maxWidth: '280px' }}>{r.message || ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
