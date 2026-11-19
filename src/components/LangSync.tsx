'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Synchronise l'attribut <html lang> avec la locale de la route.
 * Le root layout rend statiquement lang="fr" (locale majoritaire + accueil).
 * Sur les pages /en, ce composant bascule document.documentElement.lang sur "en"
 * côté client, et le remet à "fr" au retour (navigation client FR<->EN fiable).
 * Léger, client-only : ne force pas le rendu dynamique du root layout.
 */
export function LangSync() {
  const pathname = usePathname() ?? ''
  useEffect(() => {
    const isEn = pathname === '/en' || pathname.startsWith('/en/')
    document.documentElement.lang = isEn ? 'en' : 'fr'
  }, [pathname])
  return null
}
