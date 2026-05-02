import { notFound } from 'next/navigation'
import Link from 'next/link'
import { leads, LEAD_STATUS_LABEL, SOURCE_LABEL, getLeadById } from '@/data/crm-fixtures'

export function generateStaticParams() {
  return leads.map((l) => ({ id: l.id }))
}

const today = new Date('2026-05-02')
const daysSince = (iso: string) => Math.round((today.getTime() - new Date(iso).getTime()) / (1000 * 60 * 60 * 24))

export default async function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const lead = getLeadById(id)
  if (!lead) notFound()

  const status = LEAD_STATUS_LABEL[lead.statut]

  return (
    <div style={{ padding: '2.5rem', maxWidth: '1100px' }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1.5rem', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
        <Link href="/admin/leads" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Prospects</Link>
        <span>/</span>
        <span style={{ color: 'var(--terra)' }}>{lead.id}</span>
      </div>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.5rem', letterSpacing: '-0.02em' }}>
            {lead.nom}
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0 }}>
            {SOURCE_LABEL[lead.source]} · arrivé il y a {daysSince(lead.date)} jour{daysSince(lead.date) > 1 ? 's' : ''}
          </p>
        </div>
        <span style={{ fontSize: '0.7rem', color: status.color, fontWeight: 700, padding: '0.5rem 1rem', border: `1.5px solid ${status.color}`, borderRadius: '999px', whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          {status.label}
        </span>
      </div>

      {/* Quick actions */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <a href={`tel:${lead.telephone.replace(/\s/g, '')}`} style={{ padding: '0.7rem 1.2rem', backgroundColor: 'var(--terra)', color: '#fff', borderRadius: '999px', textDecoration: 'none', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700 }}>
          📞 Appeler
        </a>
        {lead.email && (
          <a href={`mailto:${lead.email}`} style={{ padding: '0.7rem 1.2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', borderRadius: '999px', textDecoration: 'none', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
            ✉ Email
          </a>
        )}
        <a
          href={`https://wa.me/33${lead.telephone.replace(/\D/g, '').replace(/^0/, '')}`}
          target="_blank"
          rel="noopener"
          style={{ padding: '0.7rem 1.2rem', border: '1.5px solid #25D366', color: '#25D366', borderRadius: '999px', textDecoration: 'none', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700 }}
        >
          WhatsApp
        </a>
      </div>

      {/* Two-column */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(280px, 1fr)', gap: '2rem' }} className="lead-detail-grid">

        {/* Main */}
        <div>
          {/* Coordonnées */}
          <section style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem', fontWeight: 700 }}>
              Coordonnées
            </h2>
            <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', margin: 0 }}>
              <Field label="Téléphone" value={lead.telephone} />
              <Field label="Email" value={lead.email ?? '—'} />
              <Field label="Ville" value={lead.ville} />
              <Field label="Segment" value={lead.segment} />
            </dl>
          </section>

          {/* Projet */}
          <section style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem', fontWeight: 700 }}>
              Projet
            </h2>
            <dl style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', margin: 0 }}>
              <Field label="Type" value={lead.type_projet} />
              {lead.surface_estimee && <Field label="Surface estimée" value={lead.surface_estimee} />}
              {lead.budget_estime && <Field label="Budget estimé" value={lead.budget_estime} />}
              {lead.message && <Field label="Message reçu" value={lead.message} />}
            </dl>
          </section>

          {/* Historique notes */}
          <section style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.25rem' }}>
              <h2 style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', margin: 0, fontWeight: 700 }}>
                Historique de suivi
              </h2>
              <button style={{ padding: '0.4rem 0.9rem', backgroundColor: 'transparent', border: '1px solid var(--border-strong)', borderRadius: '999px', fontSize: '0.7rem', cursor: 'pointer', color: 'var(--dark-2)', fontFamily: 'inherit', fontWeight: 600 }}>
                + Note
              </button>
            </div>
            {lead.notes.length === 0 ? (
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                Aucune note pour le moment. Ajoutez le récap de votre prochain échange.
              </p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[...lead.notes].reverse().map((n, i) => (
                  <div key={i} style={{ borderLeft: '2px solid var(--terra)', paddingLeft: '1rem' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>
                      {new Date(n.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' })} · {n.auteur}
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--dark-2)', margin: 0, lineHeight: 1.65 }}>
                      {n.content}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>

        {/* Aside */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <section style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
            <h3 style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 700 }}>
              Suivi
            </h3>
            <Field label="Identifiant" value={lead.id} />
            <div style={{ marginTop: '1rem' }}>
              <Field label="Dernière interaction" value={`il y a ${daysSince(lead.derniere_interaction)} j`} />
            </div>
            {lead.prochaine_action && (
              <div style={{ marginTop: '1rem' }}>
                <Field label="Prochaine action" value={lead.prochaine_action} />
              </div>
            )}
          </section>

          <section style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
            <h3 style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 700 }}>
              Faire évoluer
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {(['contacte','devis_envoye','relance','converti','perdu'] as const).map((s) => {
                const meta = LEAD_STATUS_LABEL[s]
                return (
                  <button key={s} disabled style={{ textAlign: 'left', padding: '0.6rem 0.9rem', border: `1px solid ${meta.color}`, color: meta.color, borderRadius: '999px', backgroundColor: 'transparent', fontSize: '0.72rem', fontFamily: 'inherit', cursor: 'not-allowed', opacity: 0.7, fontWeight: 600 }}>
                    Marquer comme {meta.label.toLowerCase()}
                  </button>
                )
              })}
            </div>
            <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.75rem', lineHeight: 1.5 }}>
              <em>(Mode prototype : les changements ne sont pas persistés.)</em>
            </p>
          </section>
        </aside>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .lead-detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
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
