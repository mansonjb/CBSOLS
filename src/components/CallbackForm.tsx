'use client'

import { useActionState, useEffect, useRef, useState } from 'react'
import { requestCallback, type CallbackState } from '@/app/actions/callback'
import { CRENEAUX } from '@/data/callback-creneaux'
import { company } from '@/data/company'

const initial: CallbackState = { status: 'idle', message: '' }

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: 'var(--bg-card)',
  border: '1px solid var(--border)',
  color: 'var(--dark)',
  padding: '0.85rem 1rem',
  fontSize: '16px',
  outline: 'none',
  fontFamily: 'inherit',
  borderRadius: '8px',
  transition: 'border-color 0.2s',
}

const labelStyle: React.CSSProperties = {
  fontSize: '0.65rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--muted)',
  display: 'block',
  marginBottom: '0.5rem',
  fontWeight: 600,
}

export function CallbackForm() {
  const [state, action, pending] = useActionState(requestCallback, initial)
  const formRef = useRef<HTMLFormElement>(null)
  const [creneau, setCreneau] = useState<string>(CRENEAUX[0])
  // On garde le prénom pour le message de confirmation chaleureux.
  const [prenom, setPrenom] = useState<string>('')
  const [confirmedCreneau, setConfirmedCreneau] = useState<string>(CRENEAUX[0])

  useEffect(() => {
    if (state.status === 'success') {
      setConfirmedCreneau(creneau)
      formRef.current?.reset()
      if (typeof window !== 'undefined') {
        const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> }
        w.dataLayer = w.dataLayer || []
        w.dataLayer.push({ event: 'callback_request', form_name: 'rappel' })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.status])

  if (state.status === 'success') {
    const firstName = prenom.trim().split(/\s+/)[0] || 'à vous'
    return (
      <div
        role="status"
        aria-live="polite"
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '2.25rem',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'rgba(44, 85, 48, 0.12)',
            border: '1px solid var(--terra)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10l4.5 4.5L16 6" stroke="var(--terra)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p style={{ fontSize: '1rem', color: 'var(--dark)', lineHeight: 1.6, margin: 0 }}>
          Parfait, {firstName} ! Valentin ou son équipe vous rappelle {confirmedCreneau.toLowerCase()}. À tout de suite.
        </p>
      </div>
    )
  }

  return (
    <form ref={formRef} action={action} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
      {/* Honeypot anti-bot : masqué hors écran, jamais rempli par un humain */}
      <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <label>
          Ne remplissez pas ce champ
          <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>

      <div>
        <label htmlFor="callback-nom" style={labelStyle}>Prénom et nom</label>
        <input
          id="callback-nom"
          type="text"
          name="nom"
          required
          aria-required="true"
          maxLength={100}
          disabled={pending}
          placeholder="Jean Dupont"
          onChange={(e) => setPrenom(e.target.value)}
          style={{ ...inputStyle, opacity: pending ? 0.6 : 1 }}
        />
      </div>

      <div>
        <label htmlFor="callback-tel" style={labelStyle}>Téléphone</label>
        <input
          id="callback-tel"
          type="tel"
          name="telephone"
          inputMode="tel"
          required
          aria-required="true"
          maxLength={14}
          disabled={pending}
          placeholder="06 00 00 00 00"
          style={{ ...inputStyle, opacity: pending ? 0.6 : 1 }}
        />
      </div>

      <div>
        <span style={labelStyle} id="callback-creneau-label">Quand vous rappeler ?</span>
        <input type="hidden" name="creneau" value={creneau} />
        <div
          role="radiogroup"
          aria-labelledby="callback-creneau-label"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}
        >
          {CRENEAUX.map((c) => {
            const selected = c === creneau
            return (
              <button
                type="button"
                key={c}
                role="radio"
                aria-checked={selected}
                disabled={pending}
                onClick={() => setCreneau(c)}
                style={{
                  padding: '0.55rem 0.95rem',
                  fontSize: '0.82rem',
                  fontFamily: 'inherit',
                  cursor: pending ? 'wait' : 'pointer',
                  borderRadius: '999px',
                  border: selected ? '1px solid var(--terra)' : '1px solid var(--border)',
                  backgroundColor: selected ? 'var(--terra)' : 'var(--bg-card)',
                  color: selected ? '#fff' : 'var(--dark)',
                  transition: 'all 0.15s',
                }}
              >
                {c}
              </button>
            )
          })}
        </div>
      </div>

      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        style={state.status === 'error' ? {
          padding: '0.85rem 1rem',
          backgroundColor: 'rgba(196,74,74,0.08)',
          border: '1px solid rgba(196,74,74,0.25)',
          borderRadius: '8px',
          fontSize: '0.83rem',
          color: '#b03c3c',
          lineHeight: 1.5,
        } : { position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap', border: 0 }}
      >
        {state.status === 'error' ? (
          <>
            {state.message}{' '}
            <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra)', fontWeight: 700, textDecoration: 'underline' }}>
              {company.phone}
            </a>
          </>
        ) : ''}
      </div>

      <button
        type="submit"
        disabled={pending}
        style={{
          padding: '1rem 1.5rem',
          backgroundColor: pending ? 'var(--muted)' : 'var(--terra)',
          color: '#fff',
          border: 'none',
          cursor: pending ? 'wait' : 'pointer',
          opacity: pending ? 0.7 : 1,
          fontSize: '0.72rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          fontWeight: 700,
          fontFamily: 'inherit',
          borderRadius: '999px',
          transition: 'background-color 0.2s, opacity 0.2s',
        }}
      >
        {pending ? 'Envoi…' : 'Être rappelé gratuitement'}
      </button>

      <style>{`
        #callback-nom:focus, #callback-tel:focus { border-color: var(--terra) !important; }
      `}</style>
    </form>
  )
}
