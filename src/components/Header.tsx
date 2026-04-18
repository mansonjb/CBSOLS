'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { company } from '@/data/company'
import { ThemeToggle } from './ThemeToggle'
import { ColorSwitcher } from './ColorSwitcher'

const nav = [
  { href: '/services', label: 'Services' },
  { href: '/secteurs', label: 'Professionnels' },
  { href: '/marques', label: 'Marques' },
  { href: '/tarifs', label: 'Tarifs' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/showroom', label: 'Showroom' },
]

const navMobileExtra = [
  { href: '/a-propos', label: 'À propos' },
  { href: '/zones', label: 'Zones' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      backgroundColor: 'var(--bg-card)',
      borderBottom: '1px solid var(--border-mid)',
      boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.08)' : 'none',
      transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
    }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <Image
              src="/images/logo-cbsols.png"
              alt="CB Sols Revêtements"
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
                Revêtements · La Rochelle
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
            <ColorSwitcher />
            <ThemeToggle />
            <a href={`tel:${company.phoneClean}`} style={{
              fontSize: '0.75rem', color: 'var(--dark-2)', textDecoration: 'none',
              fontWeight: 500, letterSpacing: '0.02em', whiteSpace: 'nowrap',
            }}>
              {company.phone}
            </a>
            <Link href="/contact" style={{
              display: 'inline-block', padding: '0.55rem 1.25rem',
              backgroundColor: 'var(--terra)', color: '#fff',
              fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              textDecoration: 'none', fontWeight: 600, borderRadius: '999px',
              transition: 'background-color 0.2s', whiteSpace: 'nowrap',
            }}>
              Devis gratuit
            </Link>
          </div>

          {/* Burger */}
          <button onClick={() => setOpen(!open)} style={{ display: 'none', flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '6px' }} className="mob-burger" aria-label="Menu">
            <span style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--dark)', transition: 'all 0.2s', transform: open ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--dark)', transition: 'opacity 0.2s', opacity: open ? 0 : 1 }} />
            <span style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--dark)', transition: 'all 0.2s', transform: open ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu — animated slide */}
      <div style={{
        maxHeight: open ? '520px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.38s cubic-bezier(0.4, 0, 0.2, 1)',
        backgroundColor: 'var(--bg-card)',
      }}>
        <div style={{ borderTop: '1px solid var(--border)', padding: '1.5rem 2rem 2rem' }}>
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
            <Link href="/contact" onClick={() => setOpen(false)} style={{ display: 'inline-block', padding: '0.875rem 1.5rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, textAlign: 'center', borderRadius: '999px' }}>
              Devis gratuit
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '0.5rem' }}>
              <ThemeToggle />
              <span style={{ fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.06em' }}>Thème sombre / clair</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) { .desk-nav { display: none !important; } .mob-burger { display: flex !important; } }
        @media (min-width: 1101px) { .mob-burger { display: none !important; } .desk-nav { display: flex !important; } }
      `}</style>
    </header>
  )
}
