/**
 * Récupère la vignette officielle Vimeo (via oEmbed) pour une vidéo.
 *
 * Avantage vs vumbnail.com : zéro cache tiers, la vignette retournée est
 * TOUJOURS celle actuellement définie côté Vimeo. Quand le user change
 * la vignette via Vimeo Settings, le changement est immédiat (au prochain
 * fetch côté serveur).
 *
 * Le résultat est cached côté Next.js pendant 1h (revalidate: 3600).
 */
export async function getVimeoThumbnail(vimeoId: string): Promise<string | null> {
  try {
    const url = `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}&width=720`
    const res = await fetch(url, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    const data = (await res.json()) as { thumbnail_url?: string }
    return data.thumbnail_url ?? null
  } catch {
    return null
  }
}
