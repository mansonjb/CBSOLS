import Link from 'next/link'
import { sql, ensureSchema, type LeadRow } from '@/lib/db'
import { LEAD_STATUS_LABEL, SOURCE_LABEL } from '@/data/crm-fixtures'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const daysSince = (iso: string) =>
  Math.round((Date.now() - new Date(iso).getTime()) / (1000 * 60 * 60 * 24))

async function getAllLeads(): Promise<LeadRow[]> {
  await ensureSchema()
  const q = sql()
  const rows = (await q`
    SELECT
      id, created_at, updated_at, source, nom, telephone, email, ville,
      type_projet, surface, message, statut, derniere_interaction,
      prochaine_action, notes, segment, ua, referer, ip_hash
    FROM leads
    ORDER BY created_at DESC
  `) as unknown as LeadRow[]
  return rows
}

export default async function AdminDashboard() {
  const leads = await getAllLeads()

  // ── Statistiques calculées sur les vrais leads en DB ──
  const now = new Date()
  const startMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  const startWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const start24h = new Date(now.getTime() - 24 * 60 * 60 * 1000)

  const totalAll = leads.length
  const totalMois = leads.filter((l) => new Date(l.created_at) >= startMonth).length
  const totalSemaine = leads.filter((l) => new Date(l.created_at) >= startWeek).length
  const total24h = leads.filter((l) => new Date(l.created_at) >= start24h).length

  const nouveaux = leads.filter((l) => l.statut === 'nouveau').length
  const aRelancer = leads
    .filter((l) => l.statut !== 'converti' && l.statut !== 'perdu' && daysSince(l.derniere_interaction) >= 7)
    .sort((a, b) => daysSince(b.derniere_interaction) - daysSince(a.derniere_interaction))
    .slice(0, 5)

  const derniers = leads.slice(0, 6)

  const parStatut: Record<string, number> = {}
  for (const l of leads) parStatut[l.statut] = (parStatut[l.statut] ?? 0) + 1

  const parSource: Record<string, number> = {}
  for (const l of leads) parSource[l.source] = (parSource[l.source] ?? 0) + 1
  const totalSources = Object.values(parSource).reduce((s, n) => s + n, 0)

  const parVille: Record<string, number> = {}
  for (const l of leads) {
    if (l.ville) parVille[l.ville] = (parVille[l.ville] ?? 0) + 1
  }
  const topVilles = Object.entries(parVille)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)

  const tauxConversion = totalAll > 0
    ? Math.round(((parStatut.converti ?? 0) / totalAll) * 100)
    : 0

  return (
    <div style={{ padding: '2.5rem', maxWidth: '1400px' }}>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>
          Tableau de bord
        </div>
        <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: 0, letterSpacing: '-0.025em', lineHeight: 1.2 }}>
          Bonjour Valentin, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>voici vos demandes.</em>
        </h1>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          {now.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
          {' · '}
          {totalAll === 0
            ? 'Aucune demande pour le moment'
            : `${totalAll} demande${totalAll > 1 ? 's' : ''} reçue${totalAll > 1 ? 's' : ''}`}
        </p>
      </div>

      {/* ── KPIs principaux ────────────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
        <KpiCard label="Dernières 24 h" value={total24h.toString()} accent />
        <KpiCard label="Cette semaine" value={totalSemaine.toString()} />
        <KpiCard label="Ce mois-ci" value={totalMois.toString()} />
        <KpiCard label="Total" value={totalAll.toString()} />
        <KpiCard label="Nouvelles à traiter" value={nouveaux.toString()} warning={nouveaux > 0} />
        <KpiCard label="Taux conversion" value={`${tauxConversion}%`} />
      </div>

      {/* Empty state */}
      {totalAll === 0 && (
        <div style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px dashed var(--border)', borderRadius: '12px', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📭</div>
          <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.5rem' }}>
            Aucune demande pour le moment
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 auto', maxWidth: '420px', lineHeight: 1.6 }}>
            Dès qu&apos;un visiteur remplira le formulaire de contact sur le site, sa demande apparaîtra ici automatiquement.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', marginTop: '1.25rem', fontSize: '0.7rem', color: 'var(--terra)', textDecoration: 'none', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Voir le formulaire de contact →
          </Link>
        </div>
      )}

      {totalAll > 0 && (
        <>
          {/* ── À relancer + Statuts breakdown ───────────────────── */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>

            {/* À relancer */}
            <div style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#D9802F', marginBottom: '0.4rem', fontWeight: 700 }}>
                    À relancer
                  </div>
                  <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', margin: 0 }}>Sans contact depuis ≥ 7 jours</h2>
                </div>
                <Link href="/admin/leads" style={{ fontSize: '0.7rem', color: 'var(--terra)', textDecoration: 'none', fontWeight: 600, letterSpacing: '0.08em' }}>Tout voir →</Link>
              </div>
              {aRelancer.length === 0 ? (
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Aucun retard.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {aRelancer.map((l) => (
                    <Link key={l.id} href={`/admin/leads/${l.id}`} style={{ textDecoration: 'none', display: 'block', borderTop: '1px solid var(--border)', padding: '0.875rem 0', color: 'inherit' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem' }}>
                        <div style={{ minWidth: 0, flex: 1 }}>
                          <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.2rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {l.nom}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                            {l.ville ?? '—'} · {(l.type_projet ?? '').slice(0, 60)}{(l.type_projet ?? '').length > 60 ? '…' : ''}
                          </div>
                        </div>
                        <span style={{ fontSize: '0.7rem', color: '#D9802F', fontWeight: 700, whiteSpace: 'nowrap' }}>
                          {daysSince(l.derniere_interaction)} j
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Statuts breakdown */}
            <div style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
              <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 1.25rem' }}>Répartition par statut</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {(['nouveau', 'contacte', 'devis_envoye', 'relance', 'converti', 'perdu'] as const).map((s) => {
                  const count = parStatut[s] ?? 0
                  const pct = totalAll > 0 ? Math.round((count / totalAll) * 100) : 0
                  const meta = LEAD_STATUS_LABEL[s]
                  return (
                    <div key={s}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                        <span style={{ fontSize: '0.82rem', color: 'var(--dark)', fontWeight: 500 }}>{meta.label}</span>
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>{count} · {pct}%</span>
                      </div>
                      <div style={{ width: '100%', height: 6, backgroundColor: 'var(--bg-subtle)', borderRadius: 3, overflow: 'hidden' }}>
                        <div style={{ width: `${pct}%`, height: '100%', backgroundColor: meta.color }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* ── Derniers + Top villes + Sources ──────────────────── */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>

            {/* Derniers */}
            <div style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.25rem' }}>
                <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', margin: 0 }}>Dernières demandes</h2>
                <Link href="/admin/leads" style={{ fontSize: '0.7rem', color: 'var(--terra)', textDecoration: 'none', fontWeight: 600, letterSpacing: '0.08em' }}>Tout voir →</Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {derniers.map((l) => {
                  const meta = LEAD_STATUS_LABEL[l.statut as keyof typeof LEAD_STATUS_LABEL] ?? { label: l.statut, color: '#999' }
                  return (
                    <Link key={l.id} href={`/admin/leads/${l.id}`} style={{ textDecoration: 'none', display: 'block', borderTop: '1px solid var(--border)', padding: '0.875rem 0', color: 'inherit' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem' }}>
                        <div style={{ minWidth: 0, flex: 1 }}>
                          <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.2rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {l.nom}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                            {l.ville ?? '—'} · {daysSince(l.created_at)} j
                          </div>
                        </div>
                        <span style={{ fontSize: '0.6rem', color: meta.color, fontWeight: 700, padding: '0.25rem 0.6rem', border: `1px solid ${meta.color}`, borderRadius: '999px', whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          {meta.label}
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Top villes */}
            <div style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
              <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 1.25rem' }}>Top villes</h2>
              {topVilles.length === 0 ? (
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Pas encore de données.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {topVilles.map(([ville, count]) => {
                    const pct = totalAll > 0 ? Math.round((count / totalAll) * 100) : 0
                    return (
                      <div key={ville}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                          <span style={{ fontSize: '0.82rem', color: 'var(--dark)', fontWeight: 500 }}>{ville}</span>
                          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>{count}</span>
                        </div>
                        <div style={{ width: '100%', height: 6, backgroundColor: 'var(--bg-subtle)', borderRadius: 3, overflow: 'hidden' }}>
                          <div style={{ width: `${pct}%`, height: '100%', backgroundColor: 'var(--terra)' }} />
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Sources */}
            <div style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
              <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 1.25rem' }}>Sources</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {Object.entries(parSource).sort(([, a], [, b]) => b - a).map(([source, count]) => {
                  const pct = totalSources > 0 ? Math.round((count / totalSources) * 100) : 0
                  return (
                    <div key={source}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                        <span style={{ fontSize: '0.82rem', color: 'var(--dark)', fontWeight: 500 }}>
                          {SOURCE_LABEL[source as keyof typeof SOURCE_LABEL] ?? source}
                        </span>
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>{count} · {pct}%</span>
                      </div>
                      <div style={{ width: '100%', height: 6, backgroundColor: 'var(--bg-subtle)', borderRadius: 3, overflow: 'hidden' }}>
                        <div style={{ width: `${pct}%`, height: '100%', backgroundColor: 'var(--terra)' }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </>
      )}

    </div>
  )
}

function KpiCard({ label, value, accent, warning }: { label: string; value: string; accent?: boolean; warning?: boolean }) {
  return (
    <div style={{
      padding: '1.5rem',
      backgroundColor: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: '10px',
      borderLeft: accent ? '3px solid var(--terra)' : warning ? '3px solid #D9802F' : '1px solid var(--border)',
    }}>
      <div style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.6rem', fontWeight: 600 }}>
        {label}
      </div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.6rem', fontWeight: 800, color: warning ? '#D9802F' : accent ? 'var(--terra)' : 'var(--dark)', letterSpacing: '-0.02em', lineHeight: 1 }}>
        {value}
      </div>
    </div>
  )
}
