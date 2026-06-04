'use server'

import { revalidatePath } from 'next/cache'
import { sql, ensureSchema, geocodeAndUpdateContact } from '@/lib/db'
import { sleep } from '@/lib/geocode'

/**
 * Backfill geocoding : parcourt les contacts sans lat/lng, sequentiellement,
 * max 50 par run pour respecter le rate limit Nominatim (1 req/s).
 */
export async function backfillGeocoding(): Promise<void> {
  await ensureSchema()
  const q = sql()
  const rows = (await q`
    SELECT id, ville FROM contacts
    WHERE (lat IS NULL OR lng IS NULL) AND ville IS NOT NULL AND ville <> ''
    LIMIT 50
  `) as unknown as Array<{ id: string; ville: string }>

  let done = 0
  for (const r of rows) {
    const ok = await geocodeAndUpdateContact(r.id, r.ville)
    if (ok) done++
    await sleep(1100)
  }
  console.log(`[backfillGeocoding] ${done}/${rows.length} contacts geocoded`)
  revalidatePath('/admin/carte')
}
