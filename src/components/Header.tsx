'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { localeFromPath, localeBase, stripLocale, withLocale, type Locale } from '@/lib/locale'

const navByLocale = {
  fr: [
    { href: '/services', label: 'Services' },
    { href: '/secteurs', label: 'Professionnels' },
    { href: '/particuliers', label: 'Particuliers' },
    { href: '/architectes', label: 'Architectes' },
    { href: '/realisations', label: 'Réalisations' },
    { href: '/showroom', label: 'Showroom' },
  ],
  en: [
    { href: '/en/services', label: 'Services' },
    { href: '/en/secteurs', label: 'For businesses' },
    { href: '/en/particuliers', label: 'For homeowners' },
    { href: '/en/architectes', label: 'Architects' },
    { href: '/en/realisations', label: 'Projects' },
    { href: '/en/showroom', label: 'Showroom' },
  ],
  es: [
    { href: '/es/services', label: 'Servicios' },
    { href: '/es/secteurs', label: 'Profesionales' },
    { href: '/es/particuliers', label: 'Particulares' },
    { href: '/es/architectes', label: 'Arquitectos' },
    { href: '/es/realisations', label: 'Proyectos' },
    { href: '/es/showroom', label: 'Showroom' },
  ],
}

const navMobileExtraByLocale = {
  fr: [
    { href: '/marques', label: 'Marques' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/zones', label: 'Zones' },
  ],
  en: [
    { href: '/en/marques', label: 'Brands' },
    { href: '/en/a-propos', label: 'About' },
    { href: '/en/zones', label: 'Areas' },
  ],
  es: [
    { href: '/es/marques', label: 'Marcas' },
    { href: '/es/a-propos', label: 'Quiénes somos' },
    { href: '/es/zones', label: 'Zonas' },
  ],
}

const ctaByLocale = {
  fr: { quote: 'Devis gratuit', home: '/' },
  en: { quote: 'Free quote', home: '/en' },
  es: { quote: 'Presupuesto gratis', home: '/es' },
}

const LANG_CODES: { locale: Locale; code: string }[] = [
  { locale: 'fr', code: 'FR' },
  { locale: 'en', code: 'EN' },
  { locale: 'es', code: 'ES' },
]

export function Header() {
  const pathname = usePathname() ?? ''
  const locale = localeFromPath(pathname)
  const nav = navByLocale[locale]
  const navMobileExtra = navMobileExtraByLocale[locale]
  const cta = ctaByLocale[locale]
  // Chemin "nu" courant, pour construire les bascules de langue qui gardent la page.
  const bare = stripLocale(pathname)
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const current = LANG_CODES.find((l) => l.locale === locale) ?? LANG_CODES[0]

  // Pas de header public sur /admin/* (interface admin a son propre layout)
  if (pathname.startsWith('/admin')) return null

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Fermer le menu langue au clic extérieur / Escape
  useEffect(() => {
    if (!langOpen) return
    const onDoc = (e: MouseEvent) => {
      if (!(e.target as HTMLElement)?.closest('[data-lang-switch]')) setLangOpen(false)
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLangOpen(false) }
    document.addEventListener('click', onDoc)
    window.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('click', onDoc); window.removeEventListener('keydown', onKey) }
  }, [langOpen])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      backgroundColor: 'var(--bg-card)',
      borderBottom: '1px solid var(--border-mid)',
      boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.08)' : 'none',
      transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
    }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', height: '72px' }}>

          {/* Logo */}
          <Link href={cta.home} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <Image
              src="/images/logo-cbsols.png"
              alt={locale === 'en' ? 'CB Sols Flooring' : locale === 'es' ? 'CB Sols Revestimientos' : 'CB Sols Revêtements'}
              width={40}
              height={38}
              style={{ filter: 'brightness(0) saturate(100%)', objectFit: 'contain' }}
              priority
            />
            <div style={{ borderLeft: '1px solid rgba(26,25,22,0.15)', paddingLeft: '0.75rem' }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                CB <span style={{ color: 'var(--terra)' }}>Sols</span>
              </div>
              <div style={{ fontSize: '0.55rem', letterSpacing: '0.18em', color: 'var(--muted)', textTransform: 'uppercase', marginTop: '2px' }}>
                {locale === 'en' ? 'Coverings · La Rochelle' : locale === 'es' ? 'Revestimientos · La Rochelle' : 'Revêtements · La Rochelle'}
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', gap: '1.75rem' }} className="desk-nav">
            {nav.map(item => (
              <Link key={item.href} href={item.href} style={{
                fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase',
                color: 'var(--dark-2)', textDecoration: 'none', fontWeight: 500,
                transition: 'color 0.2s', position: 'relative', whiteSpace: 'nowrap',
              }}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }} className="desk-nav">
            <a href={`tel:${company.phoneClean}`} style={{
              fontSize: '0.75rem', color: 'var(--dark-2)', textDecoration: 'none',
              fontWeight: 500, letterSpacing: '0.02em', whiteSpace: 'nowrap',
            }}>
              {company.phone}
            </a>
            <div data-lang-switch style={{ position: 'relative' }}>
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={langOpen}
                aria-label={`Langue : ${current.code}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.3rem',
                  fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: 'var(--dark-2)', background: 'none', border: '1px solid var(--border)',
                  borderRadius: '6px', padding: '0.35rem 0.5rem', whiteSpace: 'nowrap', cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                {current.code}
                <svg width="9" height="9" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" style={{ transform: langOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                  <path d="M1 1l4 4 4-4" />
                </svg>
              </button>
              {langOpen && (
                <div role="menu" style={{
                  position: 'absolute', top: 'calc(100% + 0.4rem)', right: 0, minWidth: '100%',
                  backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: '8px', boxShadow: '0 6px 24px rgba(0,0,0,0.12)', overflow: 'hidden', zIndex: 10,
                  animation: 'fade-in 0.15s ease',
                }}>
                  {LANG_CODES.filter((l) => l.locale !== locale).map((l) => (
                    <Link key={l.locale} href={withLocale(bare, l.locale)} hrefLang={l.locale} role="menuitem" onClick={() => setLangOpen(false)} aria-label={`CB Sols ${l.code}`} style={{
                      display: 'block', padding: '0.5rem 0.9rem',
                      fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: 'var(--dark-2)', textDecoration: 'none', whiteSpace: 'nowrap',
                    }}>
                      {l.code}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Button href={withLocale('/contact', locale)} variant="primary" size="sm">{cta.quote}</Button>
          </div>

          {/* Burger */}
          <button onClick={() => setOpen(!open)} style={{ display: 'none', flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '6px' }} className="mob-burger" aria-label="Menu">
            <span style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--dark)', transition: 'all 0.2s', transform: open ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--dark)', transition: 'opacity 0.2s', opacity: open ? 0 : 1 }} />
            <span style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--dark)', transition: 'all 0.2s', transform: open ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Backdrop overlay, click to close */}
      {open && (
        <button
          type="button"
          aria-label={locale === 'en' ? 'Close menu' : locale === 'es' ? 'Cerrar el menú' : 'Fermer le menu'}
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: '72px 0 0 0',
            zIndex: -1,
            background: 'rgba(0,0,0,0.35)',
            border: 'none',
            cursor: 'pointer',
            animation: 'fade-in 0.25s ease',
          }}
        />
      )}

      {/* Mobile menu - animated slide */}
      <div style={{
        maxHeight: open ? 'calc(100vh - 72px)' : '0',
        overflowY: open ? 'auto' : 'hidden',
        overflowX: 'hidden',
        transition: 'max-height 0.38s cubic-bezier(0.4, 0, 0.2, 1)',
        backgroundColor: 'var(--bg-card)',
        WebkitOverflowScrolling: 'touch',
      }}>
        <div style={{ borderTop: '1px solid var(--border)', padding: '1.5rem 2rem calc(2rem + env(safe-area-inset-bottom, 0px))' }}>
          {/* Sélecteur de langue, visible en haut du menu mobile (accès direct FR/EN/ES) */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {LANG_CODES.map(l => (
              l.locale === locale ? (
                <span key={l.locale} aria-current="true" style={{
                  flex: 1, textAlign: 'center', padding: '0.6rem 0',
                  borderRadius: '999px', backgroundColor: 'var(--terra)', color: '#fff',
                  fontSize: '0.72rem', letterSpacing: '0.14em', fontWeight: 700,
                }}>{l.code}</span>
              ) : (
                <Link key={l.locale} href={withLocale(bare, l.locale)} hrefLang={l.locale} onClick={() => setOpen(false)} aria-label={`CB Sols ${l.code}`} style={{
                  flex: 1, textAlign: 'center', padding: '0.6rem 0',
                  borderRadius: '999px', border: '1px solid var(--border)',
                  color: 'var(--dark)', textDecoration: 'none',
                  fontSize: '0.72rem', letterSpacing: '0.14em', fontWeight: 700,
                }}>{l.code}</Link>
              )
            ))}
          </div>
          {[...nav, ...navMobileExtra].map(item => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} style={{
              display: 'block', padding: '0.875rem 0',
              borderBottom: '1px solid var(--border)',
              color: 'var(--dark)', textDecoration: 'none',
              fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600,
            }}>
              {item.label}
            </Link>
          ))}
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href={`tel:${company.phoneClean}`} style={{ fontSize: '1.4rem', color: 'var(--terra)', textDecoration: 'none', fontWeight: 800, fontFamily: 'var(--font-sans)' }}>
              {company.phone}
            </a>
            <Link
              href={withLocale('/contact', locale)}
              onClick={() => setOpen(false)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '0.875rem 2rem',
                backgroundColor: 'var(--terra)', color: '#fff',
                fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                textDecoration: 'none', fontWeight: 700, borderRadius: '999px',
              }}
            >
              {cta.quote}
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .desk-nav { display: none !important; } .mob-burger { display: flex !important; } }
        @media (min-width: 1025px) { .mob-burger { display: none !important; } .desk-nav { display: flex !important; } }
      `}</style>
    </header>
  )
}
