'use client'

import { useActionState, useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { sendContactForm, type ContactState } from '@/app/actions/contact'

const initial: ContactState = { status: 'idle', message: '' }

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: 'var(--bg-subtle)',
  border: '1px solid var(--border)',
  color: 'var(--cream)',
  padding: '0.95rem 1rem',
  fontSize: '16px',
  outline: 'none',
  fontFamily: 'inherit',
  transition: 'border-color 0.2s',
}

const labelStyle: React.CSSProperties = {
  fontSize: '0.65rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--cream-muted)',
  display: 'block',
  marginBottom: '0.5rem',
}

interface Props {
  /** Switch to show a link to full form */
  onSwitchToFull?: () => void
}

export function QuickQuoteForm({ onSwitchToFull }: Props) {
  const [state, action, pending] = useActionState(sendContactForm, initial)
  const formRef = useRef<HTMLFormElement>(null)
  const searchParams = useSearchParams()
  const prefillCity = searchParams?.get('city') ?? ''
  const [focusedField, setFocusedField] = useState<string | null>(null)

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset()
    }
  }, [state.status])

  if (state.status === 'success') {
    return (
      <div
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border)',
          padding: '2.5rem',
          textAlign: 'center',
          borderRadius: '8px',
        }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'rgba(196,113,74,0.15)',
            border: '1px solid var(--terra)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10l4.5 4.5L16 6" stroke="var(--terra)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--cream)', margin: '0 0 0.75rem' }}>
          Message envoyé
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', lineHeight: 1.7, margin: 0 }}>
          {state.message}
        </p>
      </div>
    )
  }

  return (
    <form ref={formRef} action={action} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <label style={labelStyle}>Votre nom</label>
        <input
          type="text"
          name="name"
          required
          disabled={pending}
          placeholder="Jean Dupont"
          style={{ ...inputStyle, borderColor: focusedField === 'name' ? 'var(--terra)' : 'var(--border)', opacity: pending ? 0.6 : 1 }}
          onFocus={() => setFocusedField('name')}
          onBlur={() => setFocusedField(null)}
        />
      </div>

      <div>
        <label style={labelStyle}>Téléphone</label>
        <input
          type="tel"
          name="phone"
          required
          disabled={pending}
          placeholder="06 00 00 00 00"
          style={{ ...inputStyle, borderColor: focusedField === 'phone' ? 'var(--terra)' : 'var(--border)', opacity: pending ? 0.6 : 1 }}
          onFocus={() => setFocusedField('phone')}
          onBlur={() => setFocusedField(null)}
        />
      </div>

      <div>
        <label style={labelStyle}>Type de projet</label>
        <select
          name="project_type"
          disabled={pending}
          style={{ ...inputStyle, appearance: 'none', borderColor: focusedField === 'type' ? 'var(--terra)' : 'var(--border)', opacity: pending ? 0.6 : 1, cursor: 'pointer' }}
          onFocus={() => setFocusedField('type')}
          onBlur={() => setFocusedField(null)}
        >
          <option value="">Choisir…</option>
          <option>Pose de moquette</option>
          <option>Sol PVC (lames ou dalles)</option>
          <option>Sol PVC en lés</option>
          <option>Tapis sur mesure</option>
          <option>Autre / je ne sais pas</option>
        </select>
      </div>

      {/* Hidden prefilled city + empty email to reuse existing action */}
      <input type="hidden" name="city" value={prefillCity} />
      <input type="hidden" name="email" value="" />

      <button
        type="submit"
        disabled={pending}
        style={{
          marginTop: '0.5rem',
          padding: '1.05rem 1.5rem',
          backgroundColor: 'var(--terra)',
          color: '#fff',
          border: 'none',
          fontSize: '0.7rem',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          fontWeight: 700,
          cursor: pending ? 'wait' : 'pointer',
          opacity: pending ? 0.6 : 1,
          borderRadius: '999px',
          fontFamily: 'inherit',
        }}
      >
        {pending ? 'Envoi en cours…' : 'Demander mon devis'}
      </button>

      {state.status === 'error' && (
        <div style={{ padding: '0.875rem 1rem', backgroundColor: 'rgba(224,112,112,0.1)', border: '1px solid rgba(224,112,112,0.3)', borderRadius: '6px', color: '#e07070', fontSize: '0.82rem' }}>
          {state.message}
        </div>
      )}

      {onSwitchToFull && (
        <button
          type="button"
          onClick={onSwitchToFull}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--cream-muted)',
            fontSize: '0.75rem',
            textDecoration: 'underline',
            cursor: 'pointer',
            marginTop: '0.25rem',
            textAlign: 'center',
            fontFamily: 'inherit',
          }}
        >
          Préciser plus de détails (email, surface, message) →
        </button>
      )}
    </form>
  )
}
