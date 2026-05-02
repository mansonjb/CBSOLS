import Link from 'next/link'
import { clients } from '@/data/crm-fixtures'

const eur = (n: number) => n.toLocaleString('fr-FR') + ' €'

export default function ClientsListPage() {
  const sorted = [...clients].sort((a, b) => b.ca_total_ht - a.ca_total_ht)
  const totalCA = clients.reduce((s, c) => s + c.ca_total_ht, 0)

  return (
    <div style={{ padding: '2.5rem', maxWidth: '1400px' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>Clients</div>
        <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: 0, letterSpacing: '-0.025em' }}>
          Portefeuille clients
        </h1>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          {clients.length} clients · CA cumulé total : <strong style={{ color: 'var(--dark)' }}>{eur(totalCA)} HT</strong>
        </p>
      </div>

      {/* Cards grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem' }}>
        {sorted.map((c) => (
          <Link key={c.id} href={`/admin/clients/${c.id}`} style={{ textDecoration: 'none', display: 'block' }}>
            <article className="client-card" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', height: '100%', transition: 'transform 0.15s, box-shadow 0.15s' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '0.75rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', margin: 0, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                  {c.nom}
                </h3>
                <span style={{ fontSize: '0.55rem', color: 'var(--terra)', border: '1px solid var(--terra)', padding: '0.2rem 0.5rem', borderRadius: '999px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap', flexShrink: 0 }}>
                  {c.type === 'pro' ? 'Pro' : 'Particulier'}
                </span>
              </div>

              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '0 0 1.25rem' }}>
                {c.contact_principal} · {c.ville}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                <div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.3rem' }}>CA cumulé</div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--terra)', fontFamily: 'var(--font-sans)' }}>{eur(c.ca_total_ht)}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.3rem' }}>Chantiers</div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--dark)', fontFamily: 'var(--font-sans)' }}>{c.nombre_chantiers}</div>
                </div>
              </div>

              {c.tags.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginTop: '1rem' }}>
                  {c.tags.slice(0, 3).map((tag) => (
                    <span key={tag} style={{ fontSize: '0.62rem', color: 'var(--text-muted)', padding: '0.2rem 0.55rem', backgroundColor: 'var(--bg-subtle)', borderRadius: '4px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </Link>
        ))}
      </div>

      <style>{`.client-card:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,0.06); border-color: var(--terra) !important; }`}</style>
    </div>
  )
}
