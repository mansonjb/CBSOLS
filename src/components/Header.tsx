'use client'
import Link from 'next/link'
import { useState } from 'react'
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

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'rgba(13, 12, 10, 0.92)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span
                style={{
                  fontFamily: 'var(--font-playfair, Georgia, serif)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--cream)',
                  letterSpacing: '-0.03em',
                }}
              >
                CB <span style={{ color: 'var(--terra)' }}>Sols</span>
              </span>
              <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', color: 'var(--cream-muted)', textTransform: 'uppercase', marginTop: '2px' }}>
                Revêtements • La Rochelle
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--cream-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--cream)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--cream-muted)')}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href={`tel:${company.phoneClean}`}
              style={{
                fontSize: '0.75rem',
                color: 'var(--cream-muted)',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
              className="hidden-mobile"
            >
              {company.phone}
            </a>
            <Link
              href="/contact"
              style={{
                display: 'inline-block',
                padding: '0.625rem 1.5rem',
                backgroundColor: 'var(--terra)',
                color: 'var(--cream)',
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'background-color 0.2s',
              }}
            >
              Devis gratuit
            </Link>

            {/* Burger */}
            <button
              onClick={() => setOpen(!open)}
              style={{
                display: 'none',
                flexDirection: 'column',
                gap: '5px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
              }}
              className="show-mobile"
              aria-label="Menu"
            >
              <span style={{ display: 'block', width: '22px', height: '1px', background: 'var(--cream)', transition: 'all 0.2s', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
              <span style={{ display: 'block', width: '22px', height: '1px', background: 'var(--cream)', opacity: open ? 0 : 1, transition: 'all 0.2s' }} />
              <span style={{ display: 'block', width: '22px', height: '1px', background: 'var(--cream)', transition: 'all 0.2s', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)', padding: '1.5rem 2rem' }}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                borderBottom: '1px solid var(--border)',
                color: 'var(--cream-muted)',
                textDecoration: 'none',
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${company.phoneClean}`}
            style={{
              display: 'block',
              marginTop: '1rem',
              color: 'var(--terra)',
              fontSize: '1rem',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            {company.phone}
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
