/**
 * Geocoding via Nominatim OpenStreetMap (gratuit, no key).
 * Respecter le rate limit : 1 requete/seconde max. Pour du backfill, appeler
 * sequentiellement avec une pause.
 */
export async function geocodeVille(ville: string): Promise<{ lat: number; lng: number } | null> {
  const v = ville?.trim()
  if (!v) return null
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(v + ', France')}&format=json&limit=1`
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'CB Sols CRM (contact@cbsols.fr)' },
      cache: 'no-store',
    })
    if (!res.ok) return null
    const data = (await res.json()) as Array<{ lat: string; lon: string }>
    if (!data[0]) return null
    const lat = parseFloat(data[0].lat)
    const lng = parseFloat(data[0].lon)
    if (Number.isNaN(lat) || Number.isNaN(lng)) return null
    return { lat, lng }
  } catch (err) {
    console.error('geocodeVille error:', err)
    return null
  }
}

/** Pause util pour respecter le rate limit Nominatim. */
export function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms))
}
