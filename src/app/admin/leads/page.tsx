import Link from 'next/link'
import { leads, LEAD_STATUS_LABEL, SOURCE_LABEL } from '@/data/crm-fixtures'

const today = new Date('2026-05-02')
const daysSince = (iso: string) => Math.round((today.getTime() - new Date(iso).getTime()) / (1000 * 60 * 60 * 24))

export default function LeadsListPage() {
  const sorted = [...leads].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const counts = leads.reduce<Record<string, number>>((acc, l) => {
    acc[l.statut] = (acc[l.statut] || 0) + 1
    return acc
  }, {})

  return (
    <div style={{ padding: '2.5rem', maxWidth: '1400px' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>Prospects</div>
        <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: 0, letterSpacing: '-0.025em' }}>
          Tous les prospects
        </h1>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          {leads.length} entrées au total
        </p>
      </div>

      {/* Filtres rapides */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {(['nouveau','contacte','devis_envoye','relance','converti','perdu'] as const).map((s) => {
          const meta = LEAD_STATUS_LABEL[s]
          return (
            <span key={s} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0.8rem', border: `1px solid ${meta.color}`, borderRadius: '999px', fontSize: '0.7rem', color: meta.color, fontWeight: 600, letterSpacing: '0.04em' }}>
              {meta.label} <span style={{ fontWeight: 700 }}>{counts[s] ?? 0}</span>
            </span>
          )
        })}
      </div>

      {/* Table */}
      <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '780px' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--bg-subtle)' }}>
                {['Date','Nom','Ville','Type projet','Source','Statut','Suivi'].map((h) => (
                  <th key={h} style={{ padding: '0.85rem 1rem', textAlign: 'left', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, borderBottom: '1px solid var(--border)' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((l) => {
                const status = LEAD_STATUS_LABEL[l.statut]
                const days = daysSince(l.derniere_interaction)
                const overdue = l.statut !== 'converti' && l.statut !== 'perdu' && days >= 7
                return (
                  <tr key={l.id} style={{ borderBottom: '1px solid var(--border)' }} className="lead-row">
                    <td style={{ padding: '0.85rem 1rem', fontSize: '0.78rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                      {new Date(l.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })}
                    </td>
                    <td style={{ padding: '0.85rem 1rem', fontSize: '0.85rem' }}>
                      <Link href={`/admin/leads/${l.id}`} style={{ color: 'var(--dark)', textDecoration: 'none', fontWeight: 600 }}>
                        {l.nom}
                      </Link>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {l.telephone}
                      </div>
                    </td>
                    <td style={{ padding: '0.85rem 1rem', fontSize: '0.82rem', color: 'var(--dark-2)' }}>
                      {l.ville}
                    </td>
                    <td style={{ padding: '0.85rem 1rem', fontSize: '0.82rem', color: 'var(--dark-2)', maxWidth: 280 }}>
                      <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {l.type_projet}
                      </div>
                    </td>
                    <td style={{ padding: '0.85rem 1rem', fontSize: '0.78rem', color: 'var(--dark-2)' }}>
                      {SOURCE_LABEL[l.source]}
                    </td>
                    <td style={{ padding: '0.85rem 1rem' }}>
                      <span style={{ fontSize: '0.6rem', color: status.color, fontWeight: 700, padding: '0.25rem 0.6rem', border: `1px solid ${status.color}`, borderRadius: '999px', whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        {status.label}
                      </span>
                    </td>
                    <td style={{ padding: '0.85rem 1rem', fontSize: '0.78rem', whiteSpace: 'nowrap' }}>
                      <span style={{ color: overdue ? '#D9802F' : 'var(--text-muted)', fontWeight: overdue ? 700 : 500 }}>
                        {days === 0 ? "aujourd'hui" : `il y a ${days} j`}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .lead-row:hover { background-color: var(--bg-subtle); }
        .lead-row:hover td a { color: var(--terra) !important; }
      `}</style>
    </div>
  )
}
