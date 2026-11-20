export type Locale = 'fr' | 'en' | 'es'

export const LOCALES: Locale[] = ['fr', 'en', 'es']

/** Locale déduite du pathname. FR = racine, EN = /en, ES = /es. */
export function localeFromPath(pathname: string): Locale {
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en'
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es'
  return 'fr'
}

/** Préfixe d'URL d'une locale ('' pour FR, '/en', '/es'). */
export function localeBase(locale: Locale): string {
  return locale === 'fr' ? '' : `/${locale}`
}

/** Retire le préfixe de locale d'un pathname, renvoie le chemin "nu" (commence par /). */
export function stripLocale(pathname: string): string {
  return pathname.replace(/^\/(en|es)(?=\/|$)/, '') || '/'
}

/** Construit l'URL d'un chemin nu dans une locale donnée. */
export function withLocale(bareHref: string, locale: Locale): string {
  const base = localeBase(locale)
  if (bareHref === '/') return base || '/'
  return `${base}${bareHref}`
}
