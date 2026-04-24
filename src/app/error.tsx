'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { company } from '@/data/company'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log en console — en prod, Sentry/Datadog prendrait le relais ici
    console.error('App error:', error)
  }, [error])

  return (
    <div style={{ minHeight: 'calc(100vh - 72px)', paddingTop: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '640px', textAlign: 'center' }}>
        <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>
          Une erreur est survenue
        </div>
        <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
          Quelque chose s&apos;est <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>mal passé.</em>
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
          Nos excuses pour ce désagrément. Vous pouvez réessayer, retourner à l&apos;accueil ou nous appeler directement.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={reset}
            style={{ padding: '1rem 2.5rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', border: 'none', fontWeight: 700, borderRadius: '999px', cursor: 'pointer', fontFamily: 'inherit' }}
          >
            Réessayer
          </button>
          <Link href="/" style={{ display: 'inline-block', padding: '0.95rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '999px', fontWeight: 600 }}>
            Accueil
          </Link>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'underline' }}>
            {company.phone}
          </a>
        </div>
        {error.digest && (
          <div style={{ marginTop: '2rem', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
            Référence : <code>{error.digest}</code>
          </div>
        )}
      </div>
    </div>
  )
}
