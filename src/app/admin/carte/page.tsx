import { sql, ensureSchema } from '@/lib/db'
import { backfillGeocoding } from './actions'
import { ContactMapClient } from '@/components/ContactMapClient'
import type { MapContact } from '@/components/ContactMap'

export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getData(): Promise<{ contacts: MapContact[]; pending: number }> {
  await ensureSchema()
  const q = sql()
  const rows = (await q`
    SELECT id, nom, ville, lat, lng FROM contacts
    WHERE lat IS NOT NULL AND lng IS NOT NULL
    ORDER BY updated_at DESC
    LIMIT 1000
  `) as unknown as Array<{ id: string; nom: string; ville: string | null; lat: number; lng: number }>

  const pendingRows = (await q`
    SELECT COUNT(*)::int AS n FROM contacts
    WHERE (lat IS NULL OR lng IS NULL) AND ville IS NOT NULL AND ville <> ''
  `) as unknown as Array<{ n: number }>
  return {
    contacts: rows.map((r) => ({ id: r.id, nom: r.nom, ville: r.ville, lat: r.lat, lng: r.lng })),
    pending: pendingRows[0]?.n ?? 0,
  }
}

export default async function CartePage() {
  const { contacts, pending } = await getData()

  return (
    <div style={{ padding: '2.5rem', maxWidth: '1400px' }}>
      <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>
            Terrain
          </div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: 0, letterSpacing: '-0.025em' }}>
            Carte des chantiers
          </h1>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            {contacts.length} contact{contacts.length > 1 ? 's' : ''} geo-localise{contacts.length > 1 ? 's' : ''}
            {pending > 0 ? ` / ${pending} en attente de geocoding` : ''}
          </p>
        </div>
        {pending > 0 && (
          <form action={backfillGeocoding}>
            <button type="submit" style={{
              padding: '0.6rem 1.1rem',
              border: '1px solid var(--terra)',
              backgroundColor: 'var(--terra)',
              color: '#fff',
              borderRadius: '999px',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}>
              Geocoder maintenant (max 50)
            </button>
          </form>
        )}
      </div>

      {contacts.length === 0 ? (
        <div style={{ padding: '3rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Aucun contact geo-localise pour le moment.
          {pending > 0 && ' Cliquez sur "Geocoder maintenant" pour lancer le backfill.'}
        </div>
      ) : (
        <ContactMapClient contacts={contacts} />
      )}
    </div>
  )
}
