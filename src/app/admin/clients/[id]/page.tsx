import { notFound } from 'next/navigation'
import Link from 'next/link'
import { clients, getClientById, getChantiersForClient, CHANTIER_STATUS_LABEL } from '@/data/crm-fixtures'

const eur = (n: number) => n.toLocaleString('fr-FR') + ' € HT'

export function generateStaticParams() {
  return clients.map((c) => ({ id: c.id }))
}

export default async function ClientDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const client = getClientById(id)
  if (!client) notFound()

  const chantiers = getChantiersForClient(id).sort((a, b) =>
    new Date(b.date_devis || '0').getTime() - new Date(a.date_devis || '0').getTime()
  )

  return (
    <div style={{ padding: '2.5rem', maxWidth: '1100px' }}>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1.5rem', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
        <Link href="/admin/clients" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Clients</Link>
        <span>/</span>
        <span style={{ color: 'var(--terra)' }}>{client.nom}</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.5rem', letterSpacing: '-0.02em' }}>
            {client.nom}
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0 }}>
            {client.contact_principal} · {client.ville}
          </p>
        </div>
        <span style={{ fontSize: '0.65rem', color: 'var(--terra)', fontWeight: 700, padding: '0.5rem 1rem', border: '1.5px solid var(--terra)', borderRadius: '999px', whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          {client.type === 'pro' ? 'Client Pro' : 'Particulier'}
        </span>
      </div>

      {/* KPIs client */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <KPI label="CA cumulé" value={eur(client.ca_total_ht)} accent />
        <KPI label="Chantiers" value={client.nombre_chantiers.toString()} />
        <KPI label="Premier contact" value={client.date_premier_contact ? new Date(client.date_premier_contact).toLocaleDateString('fr-FR') : '—'} />
        <KPI label="Dernière intervention" value={client.derniere_intervention ? new Date(client.derniere_intervention).toLocaleDateString('fr-FR') : 'En cours'} />
      </div>

      {/* Two-column */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(280px, 1fr)', gap: '2rem' }} className="client-detail-grid">

        <div>
          {/* Coordonnées */}
          <section style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem', fontWeight: 700 }}>
              Coordonnées
            </h2>
            <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', margin: 0 }}>
              <Field label="Téléphone" value={client.telephone} />
              <Field label="Email" value={client.email} />
              <Field label="Adresse" value={`${client.adresse}, ${client.ville}`} />
              {client.entreprise && <Field label="Raison sociale" value={client.entreprise} />}
            </dl>
          </section>

          {/* Chantiers liés */}
          <section style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
            <h2 style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem', fontWeight: 700 }}>
              Chantiers ({chantiers.length})
            </h2>
            {chantiers.length === 0 ? (
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Aucun chantier enregistré pour ce client.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {chantiers.map((ch) => {
                  const status = CHANTIER_STATUS_LABEL[ch.statut]
                  return (
                    <Link key={ch.id} href={`/admin/chantiers/${ch.id}`} style={{ textDecoration: 'none', display: 'block', padding: '1rem 0', borderTop: '1px solid var(--border)', color: 'inherit' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem' }}>
                        <div style={{ minWidth: 0, flex: 1 }}>
                          <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.2rem' }}>
                            {ch.titre}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            {ch.surface_m2} m² · {eur(ch.montant_ht)} {ch.date_fin ? `· terminé ${new Date(ch.date_fin).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })}` : ''}
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
            )}
          </section>
        </div>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {client.tags.length > 0 && (
            <section style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
              <h3 style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 700 }}>
                Tags
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {client.tags.map((t) => (
                  <span key={t} style={{ fontSize: '0.7rem', color: 'var(--terra)', padding: '0.3rem 0.7rem', backgroundColor: 'rgba(196,113,74,0.08)', borderRadius: '999px', fontWeight: 500 }}>
                    {t}
                  </span>
                ))}
              </div>
            </section>
          )}

          {client.notes && (
            <section style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
              <h3 style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem', fontWeight: 700 }}>
                Notes internes
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--dark-2)', margin: 0, lineHeight: 1.7, fontStyle: 'italic' }}>
                {client.notes}
              </p>
            </section>
          )}

          <section style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
            <h3 style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 700 }}>
              Actions rapides
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href={`tel:${client.telephone.replace(/\s/g, '')}`} style={{ padding: '0.6rem 0.9rem', backgroundColor: 'var(--terra)', color: '#fff', borderRadius: '999px', textDecoration: 'none', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, textAlign: 'center' }}>
                Appeler
              </a>
              <a href={`mailto:${client.email}`} style={{ padding: '0.55rem 0.9rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', borderRadius: '999px', textDecoration: 'none', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, textAlign: 'center' }}>
                Envoyer un email
              </a>
            </div>
          </section>
        </aside>
      </div>

      <style>{`@media (max-width: 900px) { .client-detail-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>{label}</div>
      <div style={{ fontSize: '0.88rem', color: 'var(--dark)', lineHeight: 1.5 }}>{value}</div>
    </div>
  )
}

function KPI({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', borderLeft: accent ? '3px solid var(--terra)' : '1px solid var(--border)' }}>
      <div style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 600 }}>{label}</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.25rem', fontWeight: 800, color: accent ? 'var(--terra)' : 'var(--dark)', letterSpacing: '-0.01em' }}>{value}</div>
    </div>
  )
}
