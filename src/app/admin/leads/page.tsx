import Link from 'next/link'
import { sql, ensureSchema, type LeadRow } from '@/lib/db'
import { LEAD_STATUS_LABEL, SOURCE_LABEL } from '@/data/crm-fixtures'

// Toujours fetcher fresh : on veut voir les nouveaux leads en temps réel
export const dynamic = 'force-dynamic'
export const revalidate = 0

const daysSince = (iso: string) =>
  Math.round((Date.now() - new Date(iso).getTime()) / (1000 * 60 * 60 * 24))

async function getLeads(): Promise<LeadRow[]> {
  await ensureSchema()
  const q = sql()
  const rows = (await q`
    SELECT
      id, created_at, updated_at, source, nom, telephone, email, ville,
      type_projet, surface, message, statut, derniere_interaction,
      prochaine_action, notes, segment, ua, referer, ip_hash
    FROM leads
    ORDER BY created_at DESC
    LIMIT 500
  `) as unknown as LeadRow[]
  return rows
}

export default async function LeadsListPage() {
  const leads = await getLeads()
  const counts = leads.reduce<Record<string, number>>((acc, l) => {
    acc[l.statut] = (acc[l.statut] || 0) + 1
    return acc
  }, {})

  return (
    <div style={{ padding: '2.5rem', maxWidth: '1400px' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>Prospects</div>
        <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: 0, letterSpacing: '-0.025em' }}>
          Demandes de devis
        </h1>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          {leads.length === 0
            ? 'Aucune demande pour le moment. Les nouveaux leads via le formulaire apparaîtront ici automatiquement.'
            : `${leads.length} entrée${leads.length > 1 ? 's' : ''} au total`}
        </p>
      </div>

      {/* Filtres rapides */}
      {leads.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {(['nouveau', 'contacte', 'devis_envoye', 'relance', 'converti', 'perdu'] as const).map((s) => {
            const meta = LEAD_STATUS_LABEL[s]
            return (
              <span key={s} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0.8rem', border: `1px solid ${meta.color}`, borderRadius: '999px', fontSize: '0.7rem', color: meta.color, fontWeight: 600, letterSpacing: '0.04em' }}>
                {meta.label} <span style={{ fontWeight: 700 }}>{counts[s] ?? 0}</span>
              </span>
            )
          })}
        </div>
      )}

      {/* Table (cachée si pas de données) */}
      {leads.length > 0 && (
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '780px' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-subtle)' }}>
                  {['Date', 'Nom', 'Ville', 'Type projet', 'Source', 'Statut', 'Suivi'].map((h) => (
                    <th key={h} style={{ padding: '0.85rem 1rem', textAlign: 'left', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, borderBottom: '1px solid var(--border)' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => {
                  const statusMeta = LEAD_STATUS_LABEL[l.statut as keyof typeof LEAD_STATUS_LABEL] ?? { label: l.statut, color: '#999' }
                  const sourceLabel = SOURCE_LABEL[l.source as keyof typeof SOURCE_LABEL] ?? l.source
                  const days = daysSince(l.derniere_interaction)
                  const overdue = l.statut !== 'converti' && l.statut !== 'perdu' && days >= 7
                  return (
                    <tr key={l.id} style={{ borderBottom: '1px solid var(--border)' }} className="lead-row">
                      <td style={{ padding: '0.85rem 1rem', fontSize: '0.78rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                        {new Date(l.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })}
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
                        {l.ville ?? '—'}
                      </td>
                      <td style={{ padding: '0.85rem 1rem', fontSize: '0.82rem', color: 'var(--dark-2)', maxWidth: 280 }}>
                        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {l.type_projet ?? '—'}
                        </div>
                      </td>
                      <td style={{ padding: '0.85rem 1rem', fontSize: '0.78rem', color: 'var(--dark-2)' }}>
                        {sourceLabel}
                      </td>
                      <td style={{ padding: '0.85rem 1rem' }}>
                        <span style={{ fontSize: '0.6rem', color: statusMeta.color, fontWeight: 700, padding: '0.25rem 0.6rem', border: `1px solid ${statusMeta.color}`, borderRadius: '999px', whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          {statusMeta.label}
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
      )}

      <style>{`
        .lead-row:hover { background-color: var(--bg-subtle); }
        .lead-row:hover td a { color: var(--terra) !important; }
      `}</style>
    </div>
  )
}
