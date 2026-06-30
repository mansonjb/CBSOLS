/**
 * Attribution de source des leads — utilitaires partagés client + serveur.
 *
 * Ce module NE PORTE PAS de directive 'use client' / 'use server' : il est
 * importé à la fois côté navigateur (capture first-touch, lecture des champs
 * cachés) et côté serveur (parseChannel dans les server actions).
 */

export type AttributionData = {
  referrer: string
  landing: string
  utm_source: string
  utm_medium: string
  utm_campaign: string
  gclid: string
}

const STORAGE_KEY = 'cbsols_attribution'

/**
 * Déduit un "canal" marketing lisible à partir du referrer, de l'utm_medium
 * et de la présence d'un gclid. L'ordre des tests est volontaire (priorité au
 * payant, puis aux moteurs, puis au social/IA, enfin au référent générique).
 */
export function parseChannel(input: {
  referrer?: string | null
  utm_medium?: string | null
  gclid?: string | null
}): { channel: string; detail: string } {
  const referrer = (input.referrer ?? '').toLowerCase()
  const utmMedium = (input.utm_medium ?? '').toLowerCase()
  const gclid = (input.gclid ?? '').trim()

  if (gclid !== '' || utmMedium === 'cpc') {
    return { channel: 'google_ads', detail: 'Google Ads' }
  }
  if (referrer.includes('google.')) {
    return { channel: 'google_organic', detail: 'Google (organique)' }
  }
  if (referrer.includes('bing.')) {
    return { channel: 'bing', detail: 'Bing' }
  }
  if (referrer.includes('pagesjaunes')) {
    return { channel: 'pagesjaunes', detail: 'PagesJaunes' }
  }
  if (referrer.includes('facebook') || referrer.includes('instagram') || referrer.includes('ig.')) {
    return { channel: 'social', detail: 'Réseaux sociaux' }
  }
  if (referrer.includes('chatgpt') || referrer.includes('openai')) {
    return { channel: 'ai', detail: 'ChatGPT / IA' }
  }
  if (referrer === '') {
    return { channel: 'direct', detail: 'Direct / inconnu' }
  }
  if (referrer.includes('cbsols.fr')) {
    return { channel: 'direct', detail: 'Direct / inconnu' }
  }

  // Référent générique : on extrait le domaine du referrer pour le libellé.
  let domaine = referrer
  try {
    domaine = new URL(input.referrer ?? '').hostname.replace(/^www\./, '')
  } catch {
    domaine = referrer.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0]
  }
  return { channel: 'referral', detail: 'Référent : ' + domaine }
}

/**
 * Lit l'attribution stockée en sessionStorage. Retourne null côté serveur,
 * en l'absence de données ou en cas de JSON corrompu.
 */
export function readAttribution(): AttributionData | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as AttributionData
  } catch {
    return null
  }
}

/**
 * Capture le first-touch de la session (referrer, UTM, gclid, landing) et le
 * fige en sessionStorage. N'écrase jamais une attribution déjà présente :
 * on garde la toute première origine de la session.
 */
export function captureFirstTouch(): void {
  if (typeof window === 'undefined') return
  try {
    if (sessionStorage.getItem(STORAGE_KEY)) return
    const params = new URLSearchParams(window.location.search)
    const data: AttributionData = {
      referrer: document.referrer || '',
      landing: window.location.pathname + window.location.search,
      utm_source: params.get('utm_source') ?? '',
      utm_medium: params.get('utm_medium') ?? '',
      utm_campaign: params.get('utm_campaign') ?? '',
      gclid: params.get('gclid') ?? '',
    }
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // sessionStorage indisponible (mode privé strict, quota) : on ignore.
  }
}
