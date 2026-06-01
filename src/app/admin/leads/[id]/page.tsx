import { notFound } from 'next/navigation'
import Link from 'next/link'
import { sql, ensureSchema, type LeadRow } from '@/lib/db'
import { LEAD_STATUS_LABEL, SOURCE_LABEL } from '@/data/crm-fixtures'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const daysSince = (iso: string) =>
  Math.round((Date.now() - new Date(iso).getTime()) / (1000 * 60 * 60 * 24))

async function getLeadById(id: string): Promise<LeadRow | null> {
  await ensureSchema()
  const q = sql()
  const rows = (await q`
    SELECT
      id, created_at, updated_at, source, nom, telephone, email, ville,
      type_projet, surface, message, statut, derniere_interaction,
      prochaine_action, notes, segment, ua, referer, ip_hash
    FROM leads
    WHERE id = ${id}
    LIMIT 1
  `) as unknown as LeadRow[]
  return rows[0] ?? null
}

export default async function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const lead = await getLeadById(id)
  if (!lead) notFound()

  const statusMeta = LEAD_STATUS_LABEL[lead.statut as keyof typeof LEAD_STATUS_LABEL] ?? { label: lead.statut, color: '#999' }
  const sourceLabel = SOURCE_LABEL[lead.source as keyof typeof SOURCE_LABEL] ?? lead.source
  const daysOld = daysSince(lead.created_at)

  return (
    <div style={{ padding: '2.5rem', maxWidth: '1100px' }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1.5rem', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
        <Link href="/admin/leads" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Demandes</Link>
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
            {sourceLabel} · {daysOld === 0 ? "reçu aujourd'hui" : `reçu il y a ${daysOld} jour${daysOld > 1 ? 's' : ''}`}
          </p>
        </div>
        <span style={{ fontSize: '0.7rem', color: statusMeta.color, fontWeight: 700, padding: '0.5rem 1rem', border: `1.5px solid ${statusMeta.color}`, borderRadius: '999px', whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          {statusMeta.label}
        </span>
      </div>

      {/* Quick actions */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <a href={`tel:${lead.telephone.replace(/\s/g, '')}`} style={{ padding: '0.7rem 1.2rem', backgroundColor: 'var(--terra)', color: '#fff', borderRadius: '999px', textDecoration: 'none', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700 }}>
          Appeler
        </a>
        {lead.email && (
          <a href={`mailto:${lead.email}`} style={{ padding: '0.7rem 1.2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', borderRadius: '999px', textDecoration: 'none', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
            Email
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
              <Field label="Ville" value={lead.ville ?? '—'} />
              <Field label="Segment" value={lead.segment ?? '—'} />
            </dl>
          </section>

          {/* Projet */}
          <section style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem', fontWeight: 700 }}>
              Demande
            </h2>
            <dl style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', margin: 0 }}>
              <Field label="Type de projet" value={lead.type_projet ?? '—'} />
              {lead.surface && <Field label="Surface estimée" value={lead.surface} />}
              {lead.message && <Field label="Message" value={lead.message} multiline />}
            </dl>
          </section>

          {/* Historique notes */}
          <section style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.25rem' }}>
              <h2 style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', margin: 0, fontWeight: 700 }}>
                Suivi
              </h2>
            </div>
            {!lead.notes || lead.notes.length === 0 ? (
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                Aucune note pour le moment.
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
              Métadonnées
            </h3>
            <Field label="Identifiant" value={lead.id} />
            <div style={{ marginTop: '1rem' }}>
              <Field
                label="Reçue le"
                value={new Date(lead.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
              />
            </div>
            {lead.referer && (
              <div style={{ marginTop: '1rem' }}>
                <Field label="Page d'origine" value={lead.referer.replace(/^https?:\/\/[^/]+/, '')} />
              </div>
            )}
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

function Field({ label, value, multiline }: { label: string; value: string; multiline?: boolean }) {
  return (
    <div>
      <div style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>{label}</div>
      <div style={{ fontSize: '0.88rem', color: 'var(--dark)', lineHeight: 1.5, whiteSpace: multiline ? 'pre-wrap' : 'normal' }}>{value}</div>
    </div>
  )
}
