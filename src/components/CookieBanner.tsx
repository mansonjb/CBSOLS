'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'cbsols-cookie-consent-v1'

type Consent = 'accepted' | 'declined' | null

function readConsent(): Consent {
  if (typeof window === 'undefined') return null
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'accepted' || v === 'declined') return v
    return null
  } catch {
    return null
  }
}

function saveConsent(value: 'accepted' | 'declined') {
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // localStorage indisponible (mode privé)
  }
}

/**
 * Bannière cookies CNIL-compliant.
 * Le site n'utilise que des cookies fonctionnels (préférence thème) et
 * Vercel Speed Insights (mesure de perf anonymisée).
 * Pas de Google Analytics, pas de remarketing — la bannière est donc
 * purement informative. L'utilisateur peut quand même refuser.
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const consent = readConsent()
    if (consent === null) {
      // Délai léger pour ne pas flasher au premier paint
      const t = setTimeout(() => setVisible(true), 600)
      return () => clearTimeout(t)
    }
  }, [])

  if (!mounted || !visible) return null

  const handleAccept = () => {
    saveConsent('accepted')
    setVisible(false)
  }
  const handleDecline = () => {
    saveConsent('declined')
    setVisible(false)
    // Si on ajoute du tracking analytique plus tard, c'est ici qu'on le désactive
    // ex: window.gtag?.('consent','update',{analytics_storage:'denied'})
  }

  return (
    <div
      role="dialog"
      aria-label="Préférences cookies"
      style={{
        position: 'fixed',
        bottom: '1rem',
        left: '1rem',
        right: '1rem',
        maxWidth: '480px',
        marginLeft: 'auto',
        marginRight: 'auto',
        zIndex: 95,
        padding: '1.5rem 1.75rem',
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-strong)',
        borderRadius: '14px',
        boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
        animation: 'cookie-slide-up 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.6rem', fontWeight: 600 }}>
        Cookies
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--dark-2)', lineHeight: 1.6, margin: '0 0 1.25rem' }}>
        Nous utilisons un minimum de cookies (préférence de thème, mesure de performance anonyme via Vercel). Aucun cookie publicitaire ni traceur tiers.
      </p>
      <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <button
          type="button"
          onClick={handleAccept}
          style={{
            padding: '0.65rem 1.4rem',
            backgroundColor: 'var(--terra)',
            color: '#fff',
            border: 'none',
            fontSize: '0.7rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 700,
            borderRadius: '999px',
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          Accepter
        </button>
        <button
          type="button"
          onClick={handleDecline}
          style={{
            padding: '0.65rem 1.4rem',
            backgroundColor: 'transparent',
            color: 'var(--dark-2)',
            border: '1.5px solid var(--border-strong)',
            fontSize: '0.7rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 600,
            borderRadius: '999px',
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          Refuser
        </button>
        <Link
          href="/mentions-legales#cookies-et-traceurs"
          style={{
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
            textDecoration: 'underline',
            marginLeft: 'auto',
          }}
          onClick={() => setVisible(false)}
        >
          En savoir plus
        </Link>
      </div>

      <style>{`
        @keyframes cookie-slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
