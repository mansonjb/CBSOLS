import Link from 'next/link'
import {
  computeKPIs,
  leads,
  chantiers,
  LEAD_STATUS_LABEL,
  CHANTIER_STATUS_LABEL,
  SOURCE_LABEL,
  getClientById,
} from '@/data/crm-fixtures'

const eur = (n: number) => n.toLocaleString('fr-FR') + ' € HT'
const today = new Date('2026-05-02')

function daysSince(iso: string): number {
  return Math.round((today.getTime() - new Date(iso).getTime()) / (1000 * 60 * 60 * 24))
}

export default function AdminDashboard() {
  const kpis = computeKPIs()

  const leadsRecents = [...leads]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5)

  const chantiersActifs = chantiers.filter((c) => c.statut === 'en_cours' || c.statut === 'planifie')
  const aRelancer = leads
    .filter((l) => l.statut !== 'converti' && l.statut !== 'perdu' && daysSince(l.derniere_interaction) >= 5)
    .sort((a, b) => daysSince(b.derniere_interaction) - daysSince(a.derniere_interaction))
    .slice(0, 5)

  const totalSourcesLeads = Object.values(kpis.top_sources).reduce((s, n) => s + n, 0)

  return (
    <div style={{ padding: '2.5rem', maxWidth: '1400px' }}>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>
          Tableau de bord
        </div>
        <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: 0, letterSpacing: '-0.025em' }}>
          Bonjour Valentin <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>,</em> voici votre activité.
        </h1>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          Vendredi 2 mai 2026 · {kpis.leads_actifs} prospects actifs · {kpis.projets_actifs} chantiers en cours ou planifiés
        </p>
      </div>

      {/* KPIs grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
        {[
          { label: 'CA mois en cours', value: eur(kpis.ca_mois_en_cours), accent: true },
          { label: 'CA prévu mois prochain', value: eur(kpis.ca_planifie_mois_prochain) },
          { label: 'Prospects actifs', value: kpis.leads_actifs.toString() },
          { label: 'À relancer', value: kpis.leads_a_relancer.toString(), warning: kpis.leads_a_relancer > 0 },
          { label: 'Taux conversion (mois)', value: `${kpis.taux_conversion}%` },
          { label: 'Total clients', value: kpis.total_clients.toString() },
        ].map((k) => (
          <div
            key={k.label}
            style={{
              padding: '1.5rem',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              borderLeft: k.accent ? '3px solid var(--terra)' : k.warning ? '3px solid #D9802F' : '1px solid var(--border)',
            }}
          >
            <div style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.6rem', fontWeight: 600 }}>
              {k.label}
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.6rem', fontWeight: 800, color: k.warning ? '#D9802F' : k.accent ? 'var(--terra)' : 'var(--dark)', letterSpacing: '-0.02em', lineHeight: 1 }}>
              {k.value}
            </div>
          </div>
        ))}
      </div>

      {/* Two-column section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>

        {/* À relancer */}
        <div style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.25rem' }}>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#D9802F', marginBottom: '0.4rem', fontWeight: 700 }}>
                ⚠ À relancer
              </div>
              <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', margin: 0 }}>Prospects sans contact ≥ 5 jours</h2>
            </div>
            <Link href="/admin/leads" style={{ fontSize: '0.7rem', color: 'var(--terra)', textDecoration: 'none', fontWeight: 600, letterSpacing: '0.08em' }}>Tout voir →</Link>
          </div>
          {aRelancer.length === 0 ? (
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Aucun prospect en retard 👍</p>
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
                        {l.ville} · {l.type_projet.length > 60 ? l.type_projet.slice(0, 60) + '…' : l.type_projet}
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

        {/* Chantiers actifs */}
        <div style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.25rem' }}>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.4rem', fontWeight: 700 }}>
                Chantiers actifs
              </div>
              <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', margin: 0 }}>En cours et planifiés</h2>
            </div>
            <Link href="/admin/chantiers" style={{ fontSize: '0.7rem', color: 'var(--terra)', textDecoration: 'none', fontWeight: 600, letterSpacing: '0.08em' }}>Tout voir →</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {chantiersActifs.map((c) => {
              const client = getClientById(c.client_id)
              const status = CHANTIER_STATUS_LABEL[c.statut]
              return (
                <Link key={c.id} href={`/admin/chantiers/${c.id}`} style={{ textDecoration: 'none', display: 'block', borderTop: '1px solid var(--border)', padding: '0.875rem 0', color: 'inherit' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem' }}>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.2rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {c.titre}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        {client?.nom ?? ','} · {c.surface_m2} m² · {eur(c.montant_ht)}
                      </div>
                    </div>
                    <span style={{ fontSize: '0.62rem', color: status.color, fontWeight: 700, padding: '0.25rem 0.6rem', border: `1px solid ${status.color}`, borderRadius: '999px', whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {status.label}
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '1.5rem' }}>

        {/* Recent leads */}
        <div style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', margin: 0 }}>Derniers prospects</h2>
            <Link href="/admin/leads" style={{ fontSize: '0.7rem', color: 'var(--terra)', textDecoration: 'none', fontWeight: 600, letterSpacing: '0.08em' }}>Tout voir →</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {leadsRecents.map((l) => {
              const status = LEAD_STATUS_LABEL[l.statut]
              return (
                <Link key={l.id} href={`/admin/leads/${l.id}`} style={{ textDecoration: 'none', display: 'block', borderTop: '1px solid var(--border)', padding: '0.875rem 0', color: 'inherit' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem' }}>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.2rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {l.nom}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        {SOURCE_LABEL[l.source]} · {l.ville} · {daysSince(l.date)} j
                      </div>
                    </div>
                    <span style={{ fontSize: '0.6rem', color: status.color, fontWeight: 700, padding: '0.25rem 0.6rem', border: `1px solid ${status.color}`, borderRadius: '999px', whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {status.label}
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Sources breakdown */}
        <div style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
          <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 1.25rem' }}>Sources des prospects</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {Object.entries(kpis.top_sources)
              .sort(([, a], [, b]) => b - a)
              .map(([source, count]) => {
                const pct = totalSourcesLeads > 0 ? Math.round((count / totalSourcesLeads) * 100) : 0
                return (
                  <div key={source}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.82rem', color: 'var(--dark)', fontWeight: 500 }}>{SOURCE_LABEL[source as keyof typeof SOURCE_LABEL] ?? source}</span>
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

    </div>
  )
}
