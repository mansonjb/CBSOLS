'use client'

import { useState } from 'react'
import { ContactForm } from './ContactForm'
import { QuickQuoteForm } from './QuickQuoteForm'

export function ContactFormSwitcher() {
  const [mode, setMode] = useState<'quick' | 'full'>('quick')

  return (
    <div>
      {/* Mode switcher */}
      <div
        style={{
          display: 'inline-flex',
          padding: '4px',
          backgroundColor: 'var(--bg-subtle)',
          border: '1px solid var(--border)',
          borderRadius: '999px',
          marginBottom: '2rem',
        }}
      >
        <button
          type="button"
          onClick={() => setMode('quick')}
          style={{
            padding: '0.5rem 1.25rem',
            borderRadius: '999px',
            border: 'none',
            backgroundColor: mode === 'quick' ? 'var(--terra)' : 'transparent',
            color: mode === 'quick' ? '#fff' : 'var(--cream-muted)',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontFamily: 'inherit',
          }}
        >
          Devis express
        </button>
        <button
          type="button"
          onClick={() => setMode('full')}
          style={{
            padding: '0.5rem 1.25rem',
            borderRadius: '999px',
            border: 'none',
            backgroundColor: mode === 'full' ? 'var(--terra)' : 'transparent',
            color: mode === 'full' ? '#fff' : 'var(--cream-muted)',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontFamily: 'inherit',
          }}
        >
          Formulaire complet
        </button>
      </div>

      {mode === 'quick' && (
        <>
          <p style={{ fontSize: '0.85rem', color: 'var(--cream-muted)', marginTop: 0, marginBottom: '1.5rem', lineHeight: 1.6 }}>
            3 champs, on vous rappelle dans la journée.
          </p>
          <QuickQuoteForm onSwitchToFull={() => setMode('full')} />
        </>
      )}
      {mode === 'full' && (
        <>
          <p style={{ fontSize: '0.85rem', color: 'var(--cream-muted)', marginTop: 0, marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Décrivez-nous votre projet en détail pour un premier chiffrage précis.
          </p>
          <ContactForm />
        </>
      )}
    </div>
  )
}
