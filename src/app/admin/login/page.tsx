import type { Metadata } from 'next'
import { Suspense } from 'react'
import { LoginForm } from './LoginForm'

export const metadata: Metadata = {
  title: 'Espace privé | CB Sols',
  robots: { index: false, follow: false, nocache: true },
}

export default function AdminLoginPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', backgroundColor: 'var(--bg)' }}>
      <div style={{ width: '100%', maxWidth: '420px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem' }}>
            Espace privé
          </div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--dark)', margin: 0, letterSpacing: '-0.02em' }}>
            CB Sols <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>CRM</em>
          </h1>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
            Suivi prospects · Clients · Chantiers
          </p>
        </div>

        <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
          <Suspense fallback={<div style={{ minHeight: 220 }} />}>
            <LoginForm />
          </Suspense>
        </div>

        <p style={{ textAlign: 'center', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '1.5rem' }}>
          Accès réservé au personnel CB Sols.
        </p>
      </div>
    </div>
  )
}
