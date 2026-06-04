import Link from 'next/link'
import { sql, ensureSchema, backfillContacts, type ContactRow } from '@/lib/db'

export const dynamic = 'force-dynamic'
export const revalidate = 0

type ContactWithCount = ContactRow & {
  lead_count: number
  last_lead_at: string | null
}

async function getContacts(): Promise<ContactWithCount[]> {
  await ensureSchema()
  await backfillContacts()
  const q = sql()
  const rows = (await q`
    SELECT
      c.id, c.created_at, c.updated_at, c.nom, c.telephone, c.email, c.ville,
      c.segment, c.notes, c.tags,
      COALESCE(COUNT(l.id), 0)::int AS lead_count,
      MAX(l.created_at) AS last_lead_at
    FROM contacts c
    LEFT JOIN leads l ON l.contact_id = c.id
    GROUP BY c.id
    ORDER BY MAX(l.created_at) DESC NULLS LAST, c.created_at DESC
    LIMIT 500
  `) as unknown as ContactWithCount[]
  return rows
}

export default async function ContactsListPage() {
  const contacts = await getContacts()

  return (
    <div style={{ padding: '2.5rem', maxWidth: '1400px' }}>
      <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>
            Annuaire
          </div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: 'var(--dark)', margin: 0, letterSpacing: '-0.02em' }}>
            Contacts
          </h1>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.5rem 0 0' }}>
            {contacts.length} contact{contacts.length > 1 ? 's' : ''} au total
          </p>
        </div>
        <Link href="/admin/leads" style={{ padding: '0.6rem 1.1rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', borderRadius: '999px', textDecoration: 'none', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
          Voir les demandes
        </Link>
      </div>

      {contacts.length === 0 ? (
        <div style={{ padding: '3rem', textAlign: 'center', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', color: 'var(--text-muted)' }}>
          Aucun contact pour le moment.
        </div>
      ) : (
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
                <th style={th}>Nom</th>
                <th style={th}>Téléphone</th>
                <th style={th}>Ville</th>
                <th style={{ ...th, textAlign: 'right' }}>Demandes</th>
                <th style={th}>Dernière demande</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => (
                <tr key={c.id} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={td}>
                    <Link href={`/admin/contacts/${c.id}`} style={{ color: 'var(--dark)', textDecoration: 'none', fontWeight: 600 }}>
                      {c.nom}
                    </Link>
                  </td>
                  <td style={{ ...td, fontFamily: 'monospace', fontSize: '0.85rem' }}>{c.telephone}</td>
                  <td style={td}>{c.ville ?? '—'}</td>
                  <td style={{ ...td, textAlign: 'right', fontWeight: 700, color: 'var(--terra)' }}>{c.lead_count}</td>
                  <td style={{ ...td, color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                    {c.last_lead_at
                      ? new Date(c.last_lead_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })
                      : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

const th: React.CSSProperties = {
  padding: '0.85rem 1rem',
  textAlign: 'left',
  fontSize: '0.62rem',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  fontWeight: 700,
}

const td: React.CSSProperties = {
  padding: '0.9rem 1rem',
  fontSize: '0.88rem',
  color: 'var(--dark-2)',
  verticalAlign: 'middle',
}
