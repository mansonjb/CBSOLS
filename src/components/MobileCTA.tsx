'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { company } from '@/data/company'
import { getCityBySlug } from '@/data/cities'

export function MobileCTA() {
  const pathname = usePathname() ?? ''
  // Detect city context on /revetement-sol-[city] and /[service]-[city]
  let contextCity: string | null = null
  if (pathname.startsWith('/revetement-sol-')) {
    const slug = pathname.replace('/revetement-sol-', '').split('/')[0]
    contextCity = getCityBySlug(slug)?.name ?? null
  }
  const ctaHref = contextCity ? `/contact?city=${encodeURIComponent(contextCity)}` : '/contact'
  const ctaLabel = contextCity ? `Devis ${contextCity}` : 'Devis gratuit 48h'

  return (
    <div className="mobile-cta-bar" style={{
      display: 'none',
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 90,
      backgroundColor: 'var(--bg-card)',
      borderTop: '1px solid var(--border-mid)',
      padding: '0.75rem 1rem 0.875rem',
      gap: '0.75rem',
      alignItems: 'center',
      boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
    }}>
      <a
        href={`tel:${company.phoneClean}`}
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          padding: '0.95rem 1rem',
          minHeight: '48px',
          border: '1.5px solid var(--border-strong)',
          borderRadius: '999px',
          color: 'var(--dark)',
          textDecoration: 'none',
          fontSize: '0.85rem',
          fontWeight: 600,
          letterSpacing: '-0.01em',
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.46 2 2 0 0 1 3.62 1.27h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.72 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 5.9 5.9l.99-1.04a2 2 0 0 1 2.11-.45c.9.36 1.85.59 2.81.72a2 2 0 0 1 1.72 2.02z"/>
        </svg>
        Appeler
      </a>
      <Link
        href={ctaHref}
        style={{
          flex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.95rem 1rem',
          minHeight: '48px',
          backgroundColor: 'var(--terra)',
          borderRadius: '999px',
          color: '#fff',
          textDecoration: 'none',
          fontSize: '0.78rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        {ctaLabel}
      </Link>
    </div>
  )
}
