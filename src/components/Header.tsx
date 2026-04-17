'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { company } from '@/data/company'

const nav = [
  { href: '/services', label: 'Services' },
  { href: '/secteurs', label: 'Professionnels' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/showroom', label: 'Showroom' },
  { href: '/a-propos', label: 'À propos' },
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
      backgroundColor: '#FFFFFF',
      borderBottom: `1px solid ${scrolled ? 'rgba(26,25,22,0.12)' : 'rgba(26,25,22,0.08)'}`,
      boxShadow: scrolled ? '0 1px 20px rgba(26,25,22,0.06)' : 'none',
      transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
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
          <nav style={{ display: 'flex', gap: '2.5rem' }} className="desk-nav">
            {nav.map(item => (
              <Link key={item.href} href={item.href} style={{
                fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--dark-2)', textDecoration: 'none', fontWeight: 500,
                transition: 'color 0.2s', position: 'relative',
              }}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }} className="desk-nav">
            <a href={`tel:${company.phoneClean}`} style={{
              fontSize: '0.8rem', color: 'var(--dark-2)', textDecoration: 'none',
              fontWeight: 500, letterSpacing: '0.02em',
            }}>
              {company.phone}
            </a>
            <Link href="/contact" style={{
              display: 'inline-block', padding: '0.625rem 1.5rem',
              backgroundColor: 'var(--terra)', color: '#fff',
              fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase',
              textDecoration: 'none', fontWeight: 600, borderRadius: '999px',
              transition: 'background-color 0.2s',
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

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: '#fff', borderTop: '1px solid var(--border)', padding: '1.5rem 2rem 2rem' }}>
          {nav.map(item => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} style={{
              display: 'block', padding: '0.875rem 0',
              borderBottom: '1px solid var(--border)',
              color: 'var(--dark)', textDecoration: 'none',
              fontSize: '0.875rem', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500,
            }}>
              {item.label}
            </Link>
          ))}
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href={`tel:${company.phoneClean}`} style={{ fontSize: '1.25rem', color: 'var(--terra)', textDecoration: 'none', fontWeight: 600, fontFamily: 'Playfair Display, Georgia, serif' }}>
              {company.phone}
            </a>
            <Link href="/contact" onClick={() => setOpen(false)} style={{ display: 'inline-block', padding: '0.875rem 1.5rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, textAlign: 'center' }}>
              Devis gratuit
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) { .desk-nav { display: none !important; } .mob-burger { display: flex !important; } }
        @media (min-width: 901px) { .mob-burger { display: none !important; } .desk-nav { display: flex !important; } }
      `}</style>
    </header>
  )
}
