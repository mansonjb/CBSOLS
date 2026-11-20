'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { localeFromPath } from '@/lib/locale'

/**
 * Synchronise l'attribut <html lang> avec la locale de la route.
 * Le root layout rend statiquement lang="fr" (locale majoritaire + accueil).
 * Sur /en et /es, ce composant bascule document.documentElement.lang côté client,
 * et revient à "fr" au retour (navigation client FR<->EN<->ES fiable).
 * Léger, client-only : ne force pas le rendu dynamique du root layout.
 */
export function LangSync() {
  const pathname = usePathname() ?? ''
  useEffect(() => {
    document.documentElement.lang = localeFromPath(pathname)
  }, [pathname])
  return null
}
