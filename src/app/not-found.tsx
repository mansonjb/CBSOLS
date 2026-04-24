import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Page introuvable | CB Sols',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div style={{ minHeight: 'calc(100vh - 72px)', paddingTop: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '640px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontSize: 'clamp(5rem, 15vw, 9rem)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)', lineHeight: 1, marginBottom: '1rem' }}>
          404
        </div>
        <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem' }}>
          Page introuvable
        </div>
        <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
          Cette page semble avoir <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>perdu ses repères.</em>
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
          L&apos;adresse que vous cherchez n&apos;existe pas ou a été déplacée. Vous pouvez retourner à l&apos;accueil ou nous contacter directement.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button href="/" variant="primary" size="lg">Retour à l&apos;accueil</Button>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'none', borderRadius: '999px', fontWeight: 500 }}>
            {company.phone}
          </a>
        </div>
      </div>
    </div>
  )
}
