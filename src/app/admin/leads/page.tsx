import Link from 'next/link'
import { sql, ensureSchema, type LeadRow } from '@/lib/db'
import { LEAD_STATUS_LABEL, SOURCE_LABEL } from '@/data/crm-fixtures'

// Toujours fetcher fresh : on veut voir les nouveaux leads en temps reel
export const dynamic = 'force-dynamic'
export const revalidate = 0

const daysSince = (iso: string) =>
  Math.round((Date.now() - new Date(iso).getTime()) / (1000 * 60 * 60 * 24))

type Filters = {
  archived: boolean
  ville: string | null
  type: string | null
  statut: string | null
  segment: string | null
  q: string | null
}

async function getLeads(f: Filters): Promise<LeadRow[]> {
  await ensureSchema()
  const q = sql()
  // Construction dynamique : utilise des conditions optionnelles via SQL avec
  // parametres nullables (chaque WHERE est neutralise si param NULL).
  const rows = (await q`
    SELECT
      id, created_at, updated_at, source, nom, telephone, email, ville,
      type_projet, surface, message, statut, derniere_interaction,
      prochaine_action, notes, segment, ua, referer, ip_hash, archived
    FROM leads
    WHERE archived = ${f.archived}
      AND (${f.ville}::text IS NULL OR LOWER(ville) = LOWER(${f.ville}::text))
      AND (${f.type}::text IS NULL OR LOWER(type_projet) LIKE '%' || LOWER(${f.type}::text) || '%')
      AND (${f.statut}::text IS NULL OR statut = ${f.statut}::text)
      AND (${f.segment}::text IS NULL OR segment = ${f.segment}::text)
      AND (
        ${f.q}::text IS NULL
        OR LOWER(COALESCE(nom, '')) LIKE '%' || LOWER(${f.q}::text) || '%'
        OR LOWER(COALESCE(ville, '')) LIKE '%' || LOWER(${f.q}::text) || '%'
        OR LOWER(COALESCE(message, '')) LIKE '%' || LOWER(${f.q}::text) || '%'
        OR LOWER(COALESCE(type_projet, '')) LIKE '%' || LOWER(${f.q}::text) || '%'
      )
    ORDER BY created_at DESC
    LIMIT 500
  `) as unknown as LeadRow[]
  return rows
}

async function getArchivedCount(): Promise<number> {
  await ensureSchema()
  const q = sql()
  const rows = (await q`SELECT COUNT(*)::int AS n FROM leads WHERE archived = TRUE`) as unknown as { n: number }[]
  return rows[0]?.n ?? 0
}

async function getFilterOptions(): Promise<{ villes: string[]; segments: string[] }> {
  const q = sql()
  const villesRows = (await q`
    SELECT ville, COUNT(*)::int AS n
    FROM leads
    WHERE archived = FALSE AND ville IS NOT NULL AND ville <> ''
    GROUP BY ville
    ORDER BY n DESC
    LIMIT 10
  `) as unknown as Array<{ ville: string; n: number }>
  const segmentsRows = (await q`
    SELECT DISTINCT segment FROM leads
    WHERE archived = FALSE AND segment IS NOT NULL AND segment <> ''
    ORDER BY segment ASC
  `) as unknown as Array<{ segment: string }>
  return {
    villes: villesRows.map((r) => r.ville),
    segments: segmentsRows.map((r) => r.segment),
  }
}

type SearchParams = {
  view?: string
  ville?: string
  type?: string
  statut?: string
  segment?: string
  q?: string
}

function buildHref(current: SearchParams, patch: Partial<SearchParams> & { toggle?: keyof SearchParams }): string {
  const next: Record<string, string> = {}
  for (const [k, v] of Object.entries(current)) {
    if (v) next[k] = v
  }
  for (const [k, v] of Object.entries(patch)) {
    if (k === 'toggle') continue
    if (v === undefined || v === null || v === '') delete next[k]
    else next[k] = String(v)
  }
  const qs = new URLSearchParams(next).toString()
  return qs ? `/admin/leads?${qs}` : '/admin/leads'
}

export default async function LeadsListPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const sp = await searchParams
  const showArchived = sp.view === 'archive'
  const filters: Filters = {
    archived: showArchived,
    ville: sp.ville?.trim() || null,
    type: sp.type?.trim() || null,
    statut: sp.statut?.trim() || null,
    segment: sp.segment?.trim() || null,
    q: sp.q?.trim() || null,
  }
  const [leads, archivedCount, options] = await Promise.all([
    getLeads(filters),
    getArchivedCount(),
    getFilterOptions(),
  ])
  const counts = leads.reduce<Record<string, number>>((acc, l) => {
    acc[l.statut] = (acc[l.statut] || 0) + 1
    return acc
  }, {})

  const anyFilter = Boolean(filters.ville || filters.type || filters.statut || filters.segment || filters.q)

  return (
    <div style={{ padding: '2.5rem', maxWidth: '1400px' }}>
      <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: showArchived ? 'var(--text-muted)' : 'var(--terra)', marginBottom: '0.5rem' }}>
            {showArchived ? 'Archives' : 'Prospects'}
          </div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: 0, letterSpacing: '-0.025em' }}>
            {showArchived ? 'Demandes archivees' : 'Demandes de devis'}
          </h1>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            {leads.length === 0
              ? (anyFilter ? 'Aucun resultat pour ces filtres.' : (showArchived ? 'Aucune demande archivee.' : 'Aucune demande pour le moment. Les nouveaux leads via le formulaire apparaitront ici automatiquement.'))
              : `${leads.length} entree${leads.length > 1 ? 's' : ''}${showArchived ? ' archivee' : ''}${leads.length > 1 ? 's' : ''}`}
          </p>
        </div>
        {/* Toggle archive */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {showArchived ? (
            <Link href="/admin/leads" style={{ fontSize: '0.72rem', color: 'var(--terra)', textDecoration: 'none', fontWeight: 600, letterSpacing: '0.06em', padding: '0.55rem 1rem', border: '1px solid var(--terra)', borderRadius: '999px' }}>
              Retour aux demandes actives
            </Link>
          ) : archivedCount > 0 ? (
            <Link href="/admin/leads?view=archive" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600, letterSpacing: '0.06em', padding: '0.55rem 1rem', border: '1px solid var(--border)', borderRadius: '999px' }}>
              Voir les archives ({archivedCount})
            </Link>
          ) : null}
        </div>
      </div>

      {/* Barre de filtres rapides */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {/* Recherche full-text */}
        <form method="get" action="/admin/leads" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {showArchived && <input type="hidden" name="view" value="archive" />}
          {filters.ville && <input type="hidden" name="ville" value={filters.ville} />}
          {filters.type && <input type="hidden" name="type" value={filters.type} />}
          {filters.statut && <input type="hidden" name="statut" value={filters.statut} />}
          {filters.segment && <input type="hidden" name="segment" value={filters.segment} />}
          <input
            type="search"
            name="q"
            defaultValue={filters.q ?? ''}
            placeholder="Recherche nom, ville, message..."
            style={{
              flex: '1 1 240px',
              maxWidth: 360,
              padding: '0.55rem 0.85rem',
              border: '1px solid var(--border)',
              borderRadius: '999px',
              fontSize: '0.82rem',
              backgroundColor: 'var(--bg-card)',
              color: 'var(--dark)',
              fontFamily: 'inherit',
            }}
          />
          <button type="submit" style={{ padding: '0.55rem 1rem', border: '1px solid var(--terra)', borderRadius: '999px', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em', cursor: 'pointer', textTransform: 'uppercase' }}>
            Chercher
          </button>
          {anyFilter && (
            <Link href={showArchived ? '/admin/leads?view=archive' : '/admin/leads'} style={{ padding: '0.55rem 1rem', border: '1px solid var(--border)', borderRadius: '999px', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.72rem', fontWeight: 600 }}>
              Effacer les filtres
            </Link>
          )}
        </form>

        {/* Chips villes */}
        {options.villes.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginRight: '0.3rem' }}>Villes</span>
            {options.villes.map((v) => {
              const active = filters.ville?.toLowerCase() === v.toLowerCase()
              const href = buildHref(sp, { ville: active ? '' : v })
              return (
                <Link key={v} href={href} style={{
                  padding: '0.3rem 0.7rem',
                  border: `1px solid ${active ? 'var(--terra)' : 'var(--border)'}`,
                  borderRadius: '999px',
                  fontSize: '0.7rem',
                  color: active ? '#fff' : 'var(--dark-2)',
                  backgroundColor: active ? 'var(--terra)' : 'transparent',
                  textDecoration: 'none',
                  fontWeight: 600,
                }}>{v}</Link>
              )
            })}
          </div>
        )}

        {/* Chips segments */}
        {options.segments.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginRight: '0.3rem' }}>Segments</span>
            {options.segments.map((s) => {
              const active = filters.segment === s
              const href = buildHref(sp, { segment: active ? '' : s })
              return (
                <Link key={s} href={href} style={{
                  padding: '0.3rem 0.7rem',
                  border: `1px solid ${active ? 'var(--terra)' : 'var(--border)'}`,
                  borderRadius: '999px',
                  fontSize: '0.7rem',
                  color: active ? '#fff' : 'var(--dark-2)',
                  backgroundColor: active ? 'var(--terra)' : 'transparent',
                  textDecoration: 'none',
                  fontWeight: 600,
                }}>{s}</Link>
              )
            })}
          </div>
        )}
      </div>

      {/* Compteurs par statut */}
      {leads.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {(['nouveau', 'contacte', 'devis_envoye', 'relance', 'converti', 'perdu'] as const).map((s) => {
            const meta = LEAD_STATUS_LABEL[s]
            const active = filters.statut === s
            const href = buildHref(sp, { statut: active ? '' : s })
            return (
              <Link key={s} href={href} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0.8rem', border: `1px solid ${meta.color}`, borderRadius: '999px', fontSize: '0.7rem', color: active ? '#fff' : meta.color, backgroundColor: active ? meta.color : 'transparent', fontWeight: 600, letterSpacing: '0.04em', textDecoration: 'none' }}>
                {meta.label} <span style={{ fontWeight: 700 }}>{counts[s] ?? 0}</span>
              </Link>
            )
          })}
        </div>
      )}

      {/* Table */}
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
                        {l.ville ?? '/'}
                      </td>
                      <td style={{ padding: '0.85rem 1rem', fontSize: '0.82rem', color: 'var(--dark-2)', maxWidth: 280 }}>
                        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {l.type_projet ?? '/'}
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
