'use client'

import { useActionState, useEffect, useRef } from 'react'
import { submitRsvp, type RsvpState } from '@/app/actions/rsvp'

const initial: RsvpState = { status: 'idle', message: '' }

const label: React.CSSProperties = {
  fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase',
  color: 'var(--muted)', display: 'block', marginBottom: '0.45rem', fontWeight: 600,
}
const input: React.CSSProperties = {
  width: '100%', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)',
  borderRadius: '8px', color: 'var(--dark)', padding: '0.85rem 1rem', fontSize: '16px',
  outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box',
}

export function RsvpForm() {
  const [state, action, pending] = useActionState(submitRsvp, initial)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === 'success') formRef.current?.reset()
  }, [state.status])

  if (state.status === 'success') {
    return (
      <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--terra)', borderRadius: '14px', padding: '2.5rem', textAlign: 'center' }}>
        <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: 'rgba(44,85,48,0.12)', border: '1px solid var(--terra)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="var(--terra)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </div>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.3rem', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.6rem', letterSpacing: '-0.02em' }}>Inscription confirmée</h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{state.message}</p>
      </div>
    )
  }

  return (
    <form ref={formRef} action={action} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} aria-hidden="true" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.1rem' }}>
        <div>
          <label style={label} htmlFor="nom">Nom et prénom *</label>
          <input style={input} id="nom" name="nom" required maxLength={100} autoComplete="name" />
        </div>
        <div>
          <label style={label} htmlFor="societe">Société</label>
          <input style={input} id="societe" name="societe" maxLength={120} autoComplete="organization" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.1rem' }}>
        <div>
          <label style={label} htmlFor="email">Email</label>
          <input style={input} id="email" name="email" type="email" maxLength={150} autoComplete="email" inputMode="email" />
        </div>
        <div>
          <label style={label} htmlFor="telephone">Téléphone</label>
          <input style={input} id="telephone" name="telephone" type="tel" maxLength={30} autoComplete="tel" inputMode="tel" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.1rem' }}>
        <div>
          <label style={label} htmlFor="nb_personnes">Nombre de personnes</label>
          <select style={{ ...input, appearance: 'auto' }} id="nb_personnes" name="nb_personnes" defaultValue="1">
            {[1, 2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
        <div>
          <label style={label} htmlFor="creneau">Arrivée envisagée</label>
          <select style={{ ...input, appearance: 'auto' }} id="creneau" name="creneau" defaultValue="">
            <option value="">Peu importe</option>
            <option value="8h - 9h">Plutôt 8h - 9h</option>
            <option value="9h - 10h">Plutôt 9h - 10h</option>
            <option value="10h - 11h">Plutôt 10h - 11h</option>
            <option value="11h - 12h">Plutôt 11h - 12h</option>
          </select>
        </div>
      </div>

      <div>
        <label style={label} htmlFor="message">Un mot (facultatif)</label>
        <textarea style={{ ...input, minHeight: '90px', resize: 'vertical' }} id="message" name="message" maxLength={1500} />
      </div>

      {state.status === 'error' && (
        <div style={{ backgroundColor: 'rgba(180,50,40,0.08)', border: '1px solid rgba(180,50,40,0.3)', borderRadius: '8px', padding: '0.85rem 1rem', fontSize: '0.88rem', color: '#9a2f24' }}>
          {state.message}
        </div>
      )}

      <button type="submit" disabled={pending} style={{
        backgroundColor: 'var(--terra)', color: '#fff', border: 'none', borderRadius: '999px',
        padding: '0.95rem 1.75rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em',
        textTransform: 'uppercase', cursor: pending ? 'wait' : 'pointer', opacity: pending ? 0.7 : 1,
        fontFamily: 'inherit', alignSelf: 'flex-start',
      }}>
        {pending ? 'Envoi en cours…' : 'Confirmer ma présence'}
      </button>

      <p style={{ fontSize: '0.75rem', color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>
        Vos informations servent uniquement à organiser l’accueil du petit-déjeuner. Elles ne sont ni revendues ni utilisées à d’autres fins.
      </p>
    </form>
  )
}
