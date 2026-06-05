import { notFound } from 'next/navigation'
import Link from 'next/link'
import { sql, ensureSchema, type ContactRow, type LeadRow } from '@/lib/db'
import { LEAD_STATUS_LABEL } from '@/data/crm-fixtures'
import { updateContact, addContactNote } from '../actions'
import { DeleteContactButton } from './DeleteContactButton'

export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getContact(id: string): Promise<ContactRow | null> {
  await ensureSchema()
  const q = sql()
  const rows = (await q`
    SELECT id, created_at, updated_at, nom, telephone, email, ville, segment, notes, tags
    FROM contacts WHERE id = ${id} LIMIT 1
  `) as unknown as ContactRow[]
  return rows[0] ?? null
}

async function getLeadsForContact(contactId: string): Promise<LeadRow[]> {
  const q = sql()
  const rows = (await q`
    SELECT id, created_at, updated_at, source, nom, telephone, email, ville,
           type_projet, surface, message, statut, derniere_interaction,
           prochaine_action, notes, segment, ua, referer, ip_hash, archived, contact_id
    FROM leads
    WHERE contact_id = ${contactId}
    ORDER BY created_at DESC
  `) as unknown as LeadRow[]
  return rows
}

export default async function ContactDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ edit?: string; from?: string }>
}) {
  const { id } = await params
  const { edit, from } = await searchParams
  const isEditing = edit === '1'

  const contact = await getContact(id)
  if (!contact) notFound()

  const leads = await getLeadsForContact(id)

  return (
    <div style={{ padding: '2.5rem', maxWidth: '1100px' }}>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1.5rem', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
        <Link href="/admin/contacts" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Contacts</Link>
        <span>/</span>
        <span style={{ color: 'var(--terra)', fontFamily: 'monospace' }}>{contact.id}</span>
        {from && (
          <>
            <span style={{ marginLeft: 'auto' }}>
              <Link href={`/admin/leads/${from}`} style={{ color: 'var(--terra)', textDecoration: 'none', fontWeight: 600 }}>
                ← Retour à la demande
              </Link>
            </span>
          </>
        )}
      </div>

      {/* Carte info contact */}
      <section style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem', gap: '1rem' }}>
          <h2 style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', margin: 0, fontWeight: 700 }}>
            Fiche contact
          </h2>
          {!isEditing ? (
            <Link
              href={`/admin/contacts/${contact.id}?edit=1`}
              style={{ padding: '0.45rem 0.9rem', border: '1px solid var(--border-strong)', color: 'var(--dark-2)', borderRadius: '999px', textDecoration: 'none', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}
            >
              Modifier
            </Link>
          ) : null}
        </div>

        {isEditing ? (
          <form action={updateContact}>
            <input type="hidden" name="id" value={contact.id} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <InputField label="Nom" name="nom" defaultValue={contact.nom} required />
              <InputField label="Téléphone" name="telephone" defaultValue={contact.telephone} required />
              <InputField label="Email" name="email" defaultValue={contact.email ?? ''} type="email" />
              <InputField label="Ville" name="ville" defaultValue={contact.ville ?? ''} />
              <InputField label="Segment" name="segment" defaultValue={contact.segment ?? ''} />
            </div>
            <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1.25rem', justifyContent: 'flex-end' }}>
              <Link href={`/admin/contacts/${contact.id}`} style={cancelBtn}>Annuler</Link>
              <button type="submit" style={saveBtn}>Enregistrer</button>
            </div>
          </form>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 800, color: 'var(--dark)', margin: 0, letterSpacing: '-0.02em', gridColumn: '1 / -1' }}>
              {contact.nom}
            </h1>
            <Field label="Téléphone" value={contact.telephone} />
            <Field label="Email" value={contact.email ?? '—'} />
            <Field label="Ville" value={contact.ville ?? '—'} />
            <Field label="Segment" value={contact.segment ?? '—'} />
          </div>
        )}
      </section>

      {/* Historique des demandes */}
      <section style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem', fontWeight: 700 }}>
          Historique des demandes ({leads.length})
        </h2>
        {leads.length === 0 ? (
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Aucune demande liée.</p>
        ) : (
          <div style={{ overflow: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <th style={th}>Identifiant</th>
                  <th style={th}>Date</th>
                  <th style={th}>Type de projet</th>
                  <th style={th}>Statut</th>
                  <th style={th}></th>
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => {
                  const meta = LEAD_STATUS_LABEL[l.statut as keyof typeof LEAD_STATUS_LABEL] ?? { label: l.statut, color: '#999' }
                  return (
                    <tr key={l.id} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ ...td, fontFamily: 'monospace', fontSize: '0.78rem' }}>{l.id}</td>
                      <td style={td}>{new Date(l.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                      <td style={td}>{l.type_projet ?? '—'}</td>
                      <td style={td}>
                        <span style={{ fontSize: '0.65rem', color: meta.color, fontWeight: 700, padding: '0.25rem 0.65rem', border: `1px solid ${meta.color}`, borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          {meta.label}
                        </span>
                      </td>
                      <td style={td}>
                        <Link href={`/admin/leads/${l.id}`} style={{ color: 'var(--terra)', textDecoration: 'none', fontSize: '0.78rem', fontWeight: 600 }}>
                          Ouvrir →
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Notes contact */}
      <section style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
        <h2 style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem', fontWeight: 700 }}>
          Notes contact
        </h2>
        <form action={addContactNote} style={{ marginBottom: '1.5rem' }}>
          <input type="hidden" name="id" value={contact.id} />
          <textarea
            name="content"
            placeholder="Note générale sur ce contact (recommandé par, historique, préférences…)"
            rows={3}
            required
            maxLength={2000}
            style={textareaStyle}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
            <button type="submit" style={saveBtn}>Ajouter la note</button>
          </div>
        </form>
        {!contact.notes || contact.notes.length === 0 ? (
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
            Aucune note pour le moment.
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
            {[...contact.notes].reverse().map((n, i) => (
              <div key={i} style={{ borderLeft: '2px solid var(--terra)', paddingLeft: '1rem' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  {new Date(n.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' })} · {n.auteur}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--dark-2)', margin: 0, lineHeight: 1.65, whiteSpace: 'pre-wrap' }}>{n.content}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Zone dangereuse : suppression de la fiche contact */}
      <section style={{ padding: '1.5rem', border: '1px solid #fce4e4', backgroundColor: '#fdf5f5', borderRadius: '10px', marginTop: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#b71c1c', fontWeight: 700, marginBottom: '0.4rem' }}>
              Zone dangereuse
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--dark-2)', margin: 0, lineHeight: 1.6 }}>
              Supprime la fiche contact. Les demandes de devis liées (leads) restent accessibles dans l&apos;onglet Demandes mais ne sont plus regroupées.
            </p>
          </div>
          <DeleteContactButton id={contact.id} nom={contact.nom} />
        </div>
      </section>
    </div>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ minWidth: 0 }}>
      <div style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>{label}</div>
      <div style={{ fontSize: '0.88rem', color: 'var(--dark)', lineHeight: 1.5, wordBreak: 'break-word' }}>{value}</div>
    </div>
  )
}

function InputField({ label, name, defaultValue, type = 'text', required }: { label: string; name: string; defaultValue: string; type?: string; required?: boolean }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
      <span style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>{label}{required ? ' *' : ''}</span>
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

const th: React.CSSProperties = {
  padding: '0.7rem 0.75rem',
  textAlign: 'left',
  fontSize: '0.6rem',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  fontWeight: 700,
}

const td: React.CSSProperties = {
  padding: '0.8rem 0.75rem',
  fontSize: '0.85rem',
  color: 'var(--dark-2)',
  verticalAlign: 'middle',
}
