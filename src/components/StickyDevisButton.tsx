'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Calendar } from 'lucide-react'

export function StickyDevisButton({ from }: { from: string }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Link
      href={`/contact?from=${from}`}
      aria-label="Demander un devis"
      style={{
        position: 'fixed',
        bottom: '1.25rem',
        left: '1.25rem',
        zIndex: 88,
        backgroundColor: 'var(--terra)',
        color: '#fff',
        padding: '0.85rem 1.25rem',
        borderRadius: '999px',
        textDecoration: 'none',
        fontWeight: 700,
        fontSize: '0.88rem',
        letterSpacing: '0.02em',
        boxShadow: '0 8px 24px -6px rgba(44, 85, 48, 0.45)',
        display: visible ? 'inline-flex' : 'none',
        alignItems: 'center',
        gap: '0.5rem',
        transition: 'transform 200ms ease, box-shadow 200ms ease',
      }}
      className="sticky-devis-btn"
    >
      <Calendar size={16} strokeWidth={2} />
      Demander un devis
      <style>{`
        .sticky-devis-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px -6px rgba(44, 85, 48, 0.55);
        }
        @media (max-width: 640px) {
          .sticky-devis-btn { display: none !important; }
        }
      `}</style>
    </Link>
  )
}
