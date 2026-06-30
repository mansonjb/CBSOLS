import { notFound } from 'next/navigation'
import Link from 'next/link'
import { sql, ensureSchema, type LeadRow, type ContactRow } from '@/lib/db'
import { LEAD_STATUS_LABEL, SOURCE_LABEL } from '@/data/crm-fixtures'
import { updateLeadStatus, addLeadNote, archiveLead, unarchiveLead, updateLead } from '../actions'

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
      prochaine_action, notes, segment, ua, referer, ip_hash, archived, contact_id,
      geo_city, geo_region, geo_country, attr_channel, attr_referrer,
      attr_landing, utm_source, utm_medium, utm_campaign, gclid
    FROM leads
    WHERE id = ${id}
    LIMIT 1
  `) as unknown as LeadRow[]
  return rows[0] ?? null
}

async function getContactById(id: string): Promise<ContactRow | null> {
  const q = sql()
  const rows = (await q`
    SELECT id, created_at, updated_at, nom, telephone, email, ville, segment, notes, tags
    FROM contacts WHERE id = ${id} LIMIT 1
  `) as unknown as ContactRow[]
  return rows[0] ?? null
}

const NEXT_STATUTS: Record<string, Array<{ key: string; label: string; primary?: boolean }>> = {
  nouveau: [
    { key: 'contacte', label: 'Marquer contacté', primary: true },
    { key: 'devis_envoye', label: 'Devis envoyé' },
    { key: 'perdu', label: 'Perdu' },
  ],
  contacte: [
    { key: 'devis_envoye', label: 'Devis envoyé', primary: true },
    { key: 'relance', label: 'À relancer' },
    { key: 'perdu', label: 'Perdu' },
  ],
  devis_envoye: [
    { key: 'converti', label: 'Converti, gagné', primary: true },
    { key: 'relance', label: 'À relancer' },
    { key: 'perdu', label: 'Perdu' },
  ],
  relance: [
    { key: 'devis_envoye', label: 'Devis envoyé' },
    { key: 'converti', label: 'Converti, gagné', primary: true },
    { key: 'perdu', label: 'Perdu' },
  ],
  converti: [{ key: 'nouveau', label: 'Réouvrir' }],
  perdu: [{ key: 'nouveau', label: 'Réouvrir' }],
}

// Ordre logique de la timeline (converti et perdu sont des fins alternatives)
const TIMELINE: Array<{ key: string; short: string }> = [
  { key: 'nouveau', short: 'Nouveau' },
  { key: 'contacte', short: 'Contacté' },
  { key: 'devis_envoye', short: 'Devis envoyé' },
  { key: 'relance', short: 'Relance' },
  { key: 'converti', short: 'Converti' },
  { key: 'perdu', short: 'Perdu' },
]

// Métadonnées des canaux d'acquisition : libellé + couleur du badge.
const CHANNEL_META: Record<string, { label: string; color: string; bg: string }> = {
  google_ads: { label: 'Google Ads', color: '#1a73e8', bg: 'rgba(26,115,232,0.12)' },
  google_organic: { label: 'Google (organique)', color: '#2C5530', bg: 'rgba(44,85,48,0.12)' },
  direct: { label: 'Direct / inconnu', color: '#6b6155', bg: 'rgba(107,97,85,0.12)' },
  pagesjaunes: { label: 'PagesJaunes', color: '#b8860b', bg: 'rgba(184,134,11,0.14)' },
  social: { label: 'Réseaux sociaux', color: '#8b3fb5', bg: 'rgba(139,63,181,0.12)' },
  ai: { label: 'ChatGPT / IA', color: '#0d9488', bg: 'rgba(13,148,136,0.12)' },
  bing: { label: 'Bing', color: '#4aa6d6', bg: 'rgba(74,166,214,0.14)' },
  referral: { label: 'Référent', color: '#6b6155', bg: 'rgba(107,97,85,0.10)' },
}

/**
 * Parse un user-agent en libellé simple "Appareil · Navigateur".
 * Retourne 'Inconnu' si l'UA est absent.
 */
function parseUA(ua: string | null): string {
  if (!ua) return 'Inconnu'
  let device = 'Ordinateur'
  if (/iPhone/i.test(ua)) device = 'iPhone'
  else if (/iPad/i.test(ua)) device = 'iPad'
  else if (/Android/i.test(ua)) device = 'Android'
  else if (/Windows/i.test(ua)) device = 'Windows'
  else if (/Macintosh|Mac OS X/i.test(ua)) device = 'Mac'

  let browser = ''
  if (/Edg\//i.test(ua)) browser = 'Edge'
  else if (/Firefox\//i.test(ua)) browser = 'Firefox'
  else if (/Chrome\//i.test(ua) && !/Edg\//i.test(ua)) browser = 'Chrome'
  else if (/Safari\//i.test(ua) && !/Chrome\//i.test(ua)) browser = 'Safari'

  return browser ? `${device} · ${browser}` : device
}

export default async function LeadDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ edit?: string }>
}) {
  const { id } = await params
  const { edit } = await searchParams
  const isEditing = edit === '1'

  const lead = await getLeadById(id)
  if (!lead) notFound()

  const contact = lead.contact_id ? await getContactById(lead.contact_id) : null
  const statusMeta = LEAD_STATUS_LABEL[lead.statut as keyof typeof LEAD_STATUS_LABEL] ?? { label: lead.statut, color: '#999' }
  const sourceLabel = SOURCE_LABEL[lead.source as keyof typeof SOURCE_LABEL] ?? lead.source
  const daysOld = daysSince(lead.created_at)
  const nextActions = NEXT_STATUTS[lead.statut] ?? []
  const currentIdx = TIMELINE.findIndex((s) => s.key === lead.statut)

  return (
    <div style={{ padding: '2.5rem', maxWidth: '1100px' }}>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1.5rem', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
        <Link href="/admin/leads" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Demandes</Link>
        <span>/</span>
        <span style={{ color: 'var(--terra)', fontFamily: 'monospace' }}>{lead.id}</span>
      </div>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.5rem', letterSpacing: '-0.02em', wordBreak: 'break-word' }}>
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

      {/* Timeline statuts visuelle */}
      <section style={{ padding: '1.25rem 1.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {TIMELINE.map((step, idx) => {
            const meta = LEAD_STATUS_LABEL[step.key as keyof typeof LEAD_STATUS_LABEL] ?? { label: step.short, color: '#999' }
            const isCurrent = step.key === lead.statut
            const isPast = currentIdx >= 0 && idx < currentIdx && step.key !== 'perdu'
            const isFuture = !isCurrent && !isPast

            const chipStyle: React.CSSProperties = {
              padding: isCurrent ? '0.55rem 1.1rem' : '0.45rem 0.85rem',
              borderRadius: '999px',
              border: isCurrent ? `2px solid ${meta.color}` : isFuture ? '1.5px solid var(--border)' : `1.5px solid ${meta.color}`,
              backgroundColor: isCurrent ? meta.color : isPast ? meta.color : 'transparent',
              color: isCurrent || isPast ? '#fff' : isFuture ? 'var(--text-muted)' : meta.color,
              fontSize: isCurrent ? '0.78rem' : '0.68rem',
              fontWeight: isCurrent ? 800 : 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              fontFamily: 'inherit',
              cursor: isCurrent ? 'default' : 'pointer',
              opacity: isFuture ? 0.7 : 1,
              transition: 'all 0.15s',
            }

            if (isCurrent) {
              return (
                <span key={step.key} style={chipStyle}>{meta.label}</span>
              )
            }

            return (
              <form key={step.key} action={updateLeadStatus} style={{ margin: 0 }}>
                <input type="hidden" name="id" value={lead.id} />
                <input type="hidden" name="statut" value={step.key} />
                <button type="submit" style={{ ...chipStyle, border: chipStyle.border, background: chipStyle.backgroundColor }}>
                  {meta.label}
                </button>
              </form>
            )
          })}
        </div>
      </section>

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

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(280px, 1fr)', gap: '2rem' }} className="lead-detail-grid">

        <div>
          {/* Carte info (lecture ou édition) */}
          <section style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem', gap: '1rem' }}>
              <h2 style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', margin: 0, fontWeight: 700 }}>
                Informations
              </h2>
              {!isEditing && (
                <Link
                  href={`/admin/leads/${lead.id}?edit=1`}
                  style={{ padding: '0.45rem 0.9rem', border: '1px solid var(--border-strong)', color: 'var(--dark-2)', borderRadius: '999px', textDecoration: 'none', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}
                >
                  Modifier
                </Link>
              )}
            </div>

            {isEditing ? (
              <form action={updateLead}>
                <input type="hidden" name="id" value={lead.id} />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  <InputField label="Nom" name="nom" defaultValue={lead.nom} required />
                  <InputField label="Téléphone" name="telephone" defaultValue={lead.telephone} required />
                  <InputField label="Email" name="email" defaultValue={lead.email ?? ''} type="email" />
                  <InputField label="Ville" name="ville" defaultValue={lead.ville ?? ''} />
                  <InputField label="Type de projet" name="type_projet" defaultValue={lead.type_projet ?? ''} />
                  <InputField label="Surface" name="surface" defaultValue={lead.surface ?? ''} />
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <span style={lblStyle}>Message</span>
                    <textarea name="message" defaultValue={lead.message ?? ''} rows={4} style={{ ...textareaStyle }} />
                  </label>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <span style={lblStyle}>Prochaine action</span>
                    <input type="text" name="prochaine_action" defaultValue={lead.prochaine_action ?? ''} style={inputStyle} />
                  </label>
                </div>
                <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1.25rem', justifyContent: 'flex-end' }}>
                  <Link href={`/admin/leads/${lead.id}`} style={cancelBtn}>Annuler</Link>
                  <button type="submit" style={saveBtn}>Enregistrer</button>
                </div>
              </form>
            ) : (
              <>
                <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', margin: '0 0 1.25rem' }}>
                  <Field label="Téléphone" value={lead.telephone} />
                  <Field label="Email" value={lead.email ?? '—'} />
                  <Field label="Ville" value={lead.ville ?? '—'} />
                  <Field label="Segment" value={lead.segment ?? '—'} />
                </dl>
                <dl style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', margin: 0, borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
                  <Field label="Type de projet" value={lead.type_projet ?? '—'} />
                  {lead.surface && <Field label="Surface estimée" value={lead.surface} />}
                  {lead.message && <Field label="Message" value={lead.message} multiline />}
                  {lead.prochaine_action && <Field label="Prochaine action" value={lead.prochaine_action} />}
                </dl>
              </>
            )}
          </section>

          {/* Notes */}
          <section style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
            <h2 style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem', fontWeight: 700 }}>
              Notes de suivi
            </h2>

            <form action={addLeadNote} style={{ marginBottom: '1.5rem' }}>
              <input type="hidden" name="id" value={lead.id} />
              <textarea
                name="content"
                placeholder="Ajouter une note (compte rendu d'appel, prochaine étape, etc.)"
                rows={3}
                required
                maxLength={2000}
                style={textareaStyle}
              />
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                <button type="submit" style={saveBtn}>Ajouter la note</button>
              </div>
            </form>

            {!lead.notes || lead.notes.length === 0 ? (
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
                Aucune note pour le moment.
              </p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                {[...lead.notes].reverse().map((n, i) => (
                  <div key={i} style={{ borderLeft: '2px solid var(--terra)', paddingLeft: '1rem' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>
                      {new Date(n.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' })} · {n.auteur}
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--dark-2)', margin: 0, lineHeight: 1.65, whiteSpace: 'pre-wrap' }}>
                      {n.content}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          {/* Contact lié */}
          {contact && (
            <section style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
              <h3 style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem', fontWeight: 700 }}>
                Contact lié
              </h3>
              <div style={{ fontSize: '0.95rem', color: 'var(--dark)', fontWeight: 700, marginBottom: '0.35rem' }}>{contact.nom}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.9rem' }}>
                {contact.ville ?? '—'} · {contact.telephone}
              </div>
              <a
                href={`/admin/contacts/${contact.id}?from=${lead.id}`}
                target="_blank"
                rel="noopener"
                style={{ display: 'inline-block', fontSize: '0.72rem', color: 'var(--terra)', textDecoration: 'none', fontWeight: 700, letterSpacing: '0.06em' }}
              >
                Voir la fiche →
              </a>
            </section>
          )}

          {/* Transitions classiques */}
          <section style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
            <h3 style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem', fontWeight: 700 }}>
              Faire évoluer
            </h3>
            {nextActions.length === 0 ? (
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Aucune transition disponible.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {nextActions.map((a) => {
                  const targetMeta = LEAD_STATUS_LABEL[a.key as keyof typeof LEAD_STATUS_LABEL] ?? { label: a.label, color: '#999' }
                  return (
                    <form key={a.key} action={updateLeadStatus} style={{ margin: 0 }}>
                      <input type="hidden" name="id" value={lead.id} />
                      <input type="hidden" name="statut" value={a.key} />
                      <button
                        type="submit"
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '0.65rem 0.9rem',
                          border: a.primary ? 'none' : `1px solid ${targetMeta.color}`,
                          backgroundColor: a.primary ? targetMeta.color : 'transparent',
                          color: a.primary ? '#fff' : targetMeta.color,
                          borderRadius: '999px',
                          fontSize: '0.72rem',
                          fontFamily: 'inherit',
                          cursor: 'pointer',
                          fontWeight: 600,
                          letterSpacing: '0.04em',
                        }}
                      >
                        {a.label}
                      </button>
                    </form>
                  )
                })}
              </div>
            )}
          </section>

          {/* Métadonnées */}
          <section style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
            <h3 style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 700 }}>
              Infos demande
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Field
                label="Reçue le"
                value={new Date(lead.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
              />
              {lead.updated_at !== lead.created_at && (
                <Field
                  label="Dernière mise à jour"
                  value={new Date(lead.updated_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', hour: '2-digit', minute: '2-digit' })}
                />
              )}
              {lead.referer && (
                <Field label="Page d'envoi" value={lead.referer.replace(/^https?:\/\/[^/]+/, '')} />
              )}
              <Field label="Identifiant" value={lead.id} monospace />
            </div>
          </section>

          {/* Source & contexte (attribution) */}
          {(() => {
            const channelMeta = CHANNEL_META[lead.attr_channel ?? ''] ?? null
            const channelLabel =
              channelMeta?.label ??
              (lead.attr_channel ? lead.attr_channel : 'Non détecté')
            const channelColor = channelMeta?.color ?? 'var(--text-muted)'
            const channelBg = channelMeta?.bg ?? 'rgba(107,97,85,0.10)'
            const ville =
              lead.geo_city && lead.geo_region
                ? `${lead.geo_city}, ${lead.geo_region}`
                : lead.geo_city
                  ? lead.geo_city
                  : 'Non détectée'
            const appareil = parseUA(lead.ua)
            const hasGclid = !!(lead.gclid && lead.gclid.trim())
            return (
              <section style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
                <h3 style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem', fontWeight: 700 }}>
                  Source & contexte
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>
                      Canal
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span style={{ display: 'inline-block', padding: '0.3rem 0.75rem', borderRadius: '999px', backgroundColor: channelBg, color: channelColor, border: `1px solid ${channelColor}`, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.04em' }}>
                        {channelLabel}
                      </span>
                      {hasGclid && (
                        <span style={{ fontSize: '0.62rem', color: '#1a73e8', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                          Lead publicitaire
                        </span>
                      )}
                    </div>
                  </div>
                  <Field label="Ville détectée" value={ville} />
                  <Field label="Appareil" value={appareil} />
                  <Field label="Page d'atterrissage" value={lead.attr_landing ?? '—'} />
                  {lead.utm_campaign && <Field label="Campagne" value={lead.utm_campaign} />}
                </div>
              </section>
            )
          })()}

          {/* Archiver / désarchiver */}
          <section style={{ padding: '1.5rem', backgroundColor: lead.archived ? '#fef6ef' : 'var(--bg-card)', border: `1px solid ${lead.archived ? '#d9802f' : 'var(--border)'}`, borderRadius: '10px' }}>
            <h3 style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: lead.archived ? '#D9802F' : 'var(--text-muted)', marginBottom: '0.75rem', fontWeight: 700 }}>
              {lead.archived ? 'Archivée' : 'Archivage'}
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.55, margin: '0 0 1rem' }}>
              {lead.archived
                ? "Cette demande est archivée et n'apparaît plus dans la liste ni dans les statistiques du tableau de bord."
                : "Archiver une demande (test, doublon, spam). Elle sera retirée de la liste et exclue des statistiques."}
            </p>
            <form action={lead.archived ? unarchiveLead : archiveLead} style={{ margin: 0 }}>
              <input type="hidden" name="id" value={lead.id} />
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '0.65rem 0.9rem',
                  border: lead.archived ? '1px solid var(--terra)' : '1px solid #d9802f',
                  backgroundColor: lead.archived ? 'var(--terra)' : 'transparent',
                  color: lead.archived ? '#fff' : '#d9802f',
                  borderRadius: '999px',
                  fontSize: '0.72rem',
                  fontFamily: 'inherit',
                  cursor: 'pointer',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                {lead.archived ? 'Désarchiver' : 'Archiver cette demande'}
              </button>
            </form>
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

function Field({
  label,
  value,
  multiline,
  monospace,
}: {
  label: string
  value: string
  multiline?: boolean
  monospace?: boolean
}) {
  return (
    <div style={{ minWidth: 0 }}>
      <div style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>{label}</div>
      <div
        style={{
          fontSize: '0.88rem',
          color: 'var(--dark)',
          lineHeight: 1.5,
          whiteSpace: multiline ? 'pre-wrap' : 'normal',
          wordBreak: 'break-word',
          overflowWrap: 'anywhere',
          fontFamily: monospace ? 'monospace' : 'inherit',
        }}
      >
        {value}
      </div>
    </div>
  )
}

function InputField({ label, name, defaultValue, type = 'text', required }: { label: string; name: string; defaultValue: string; type?: string; required?: boolean }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
      <span style={lblStyle}>{label}{required ? ' *' : ''}</span>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        required={required}
        style={inputStyle}
      />
    </label>
  )
}

const lblStyle: React.CSSProperties = {
  fontSize: '0.6rem',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  fontWeight: 600,
}

const inputStyle: React.CSSProperties = {
  padding: '0.6rem 0.75rem',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  backgroundColor: 'var(--bg)',
  color: 'var(--dark)',
  fontFamily: 'inherit',
  fontSize: '0.88rem',
}

const textareaStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  backgroundColor: 'var(--bg)',
  color: 'var(--dark)',
  fontFamily: 'inherit',
  fontSize: '0.88rem',
  lineHeight: 1.5,
  resize: 'vertical',
  minHeight: 70,
}

const saveBtn: React.CSSProperties = {
  padding: '0.55rem 1.1rem',
  backgroundColor: 'var(--terra)',
  color: '#fff',
  border: 'none',
  borderRadius: '999px',
  fontSize: '0.7rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  fontWeight: 700,
  cursor: 'pointer',
  fontFamily: 'inherit',
}

const cancelBtn: React.CSSProperties = {
  padding: '0.55rem 1.1rem',
  border: '1px solid var(--border-strong)',
  color: 'var(--dark-2)',
  borderRadius: '999px',
  textDecoration: 'none',
  fontSize: '0.7rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  fontWeight: 600,
}
