'use client'

import { useActionState, useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { sendContactForm, type ContactState } from '@/app/actions/contact'
import { readAttribution, type AttributionData } from '@/lib/attribution'
import { AttributionFields } from '@/components/AttributionFields'

const initial: ContactState = { status: 'idle', message: '' }

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: 'var(--bg-subtle)',
  border: '1px solid var(--border)',
  color: 'var(--cream)',
  padding: '0.9rem 1rem',
  fontSize: '16px',
  outline: 'none',
  fontFamily: 'inherit',
  transition: 'border-color 0.2s',
}

const labelStyle: React.CSSProperties = {
  fontSize: '0.65rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase' as const,
  color: 'var(--cream-muted)',
  display: 'block',
  marginBottom: '0.5rem',
}

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContactForm, initial)
  const formRef = useRef<HTMLFormElement>(null)
  const searchParams = useSearchParams()
  const prefillCity = searchParams?.get('city') ?? ''
  const [attr, setAttr] = useState<AttributionData | null>(null)

  useEffect(() => {
    setAttr(readAttribution())
  }, [])

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset()
      // Push event GTM/GA4 sur soumission formulaire réussie. L'agence
      // (ou tout outil branché à dataLayer) peut déclencher des balises
      // sur l'event 'form_submit' avec la cible 'contact'.
      if (typeof window !== 'undefined') {
        const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> }
        w.dataLayer = w.dataLayer || []
        w.dataLayer.push({
          event: 'form_submit',
          form_name: 'contact',
          form_destination: 'cb-sols-devis',
        })
      }
    }
  }, [state.status])

  if (state.status === 'success') {
    return (
      <div
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border)',
          padding: '3rem',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'rgba(44, 85, 48, 0.15)',
            border: '1px solid var(--terra)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10l4.5 4.5L16 6" stroke="#2C5530" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-playfair, Georgia, serif)',
            fontSize: '1.5rem',
            fontWeight: 400,
            color: 'var(--cream)',
            margin: '0 0 1rem',
          }}
        >
          Message envoyé
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', lineHeight: 1.7, margin: '0 0 2rem' }}>
          {state.message}
        </p>
        <button
          onClick={() => window.location.reload()}
          style={{
            background: 'none',
            border: '1px solid var(--border-hover)',
            color: 'var(--cream-muted)',
            padding: '0.75rem 1.5rem',
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          Nouvelle demande
        </button>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', padding: '3rem' }}>
      <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '2rem' }}>
        Demande de devis
      </div>

      <form ref={formRef} action={action} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Honeypot anti-bot : champ caché, ne doit jamais être rempli */}
        <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
          <label>
            Ne remplissez pas ce champ
            <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
          </label>
        </div>

        <AttributionFields attr={attr} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label htmlFor="contact-name" style={labelStyle}>Nom *</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              aria-required="true"
              maxLength={100}
              disabled={pending}
              placeholder="Jean Dupont"
              style={{ ...inputStyle, opacity: pending ? 0.6 : 1 }}
            />
          </div>
          <div>
            <label htmlFor="contact-phone" style={labelStyle}>Téléphone *</label>
            <input
              id="contact-phone"
              type="tel"
              name="phone"
              required
              aria-required="true"
              maxLength={30}
              disabled={pending}
              placeholder="06 00 00 00 00"
              style={{ ...inputStyle, opacity: pending ? 0.6 : 1 }}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-email" style={labelStyle}>Email *</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            aria-required="true"
            maxLength={150}
            disabled={pending}
            placeholder="vous@exemple.fr"
            style={{ ...inputStyle, opacity: pending ? 0.6 : 1 }}
          />
        </div>

        <div>
          <label htmlFor="contact-city" style={labelStyle}>Ville / Lieu du projet</label>
          <input
            id="contact-city"
            type="text"
            name="city"
            disabled={pending}
            maxLength={100}
            defaultValue={prefillCity}
            placeholder="La Rochelle, Île de Ré…"
            style={{ ...inputStyle, opacity: pending ? 0.6 : 1 }}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label htmlFor="contact-project-type" style={labelStyle}>Type de projet</label>
            <select
              id="contact-project-type"
              name="project_type"
              disabled={pending}
              style={{ ...inputStyle, appearance: 'none', opacity: pending ? 0.6 : 1 }}
            >
              <option value="">Choisir…</option>
              <option>Pose de moquette</option>
              <option>Sol PVC (lames ou dalles)</option>
              <option>Sol PVC en lés</option>
              <option>Tapis sur mesure</option>
              <option>Tapis de propreté</option>
              <option>Salle de cinéma</option>
              <option>Coin lecture</option>
              <option>Nettoyage de moquette</option>
              <option>Autre / Conseil</option>
            </select>
          </div>
          <div>
            <label htmlFor="contact-surface" style={labelStyle}>Surface approximative (m²)</label>
            <input
              id="contact-surface"
              type="number"
              name="surface_m2"
              min={1}
              max={100000}
              step={1}
              inputMode="numeric"
              disabled={pending}
              placeholder="Ex. 80"
              style={{ ...inputStyle, opacity: pending ? 0.6 : 1 }}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" style={labelStyle}>Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            maxLength={3000}
            disabled={pending}
            placeholder="Surface approximative, type de local, délai souhaité…"
            style={{ ...inputStyle, resize: 'vertical', opacity: pending ? 0.6 : 1 }}
          />
        </div>

        <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
          En envoyant ce formulaire, vous acceptez que vos informations soient utilisées pour traiter votre demande. Elles ne sont ni vendues ni partagées. Conservation 3 ans, <a href="/mentions-legales" style={{ color: 'var(--terra)', textDecoration: 'underline' }}>voir mentions légales</a>.
        </p>

        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          style={state.status === 'error' ? {
            padding: '1rem',
            backgroundColor: 'rgba(196,74,74,0.1)',
            border: '1px solid rgba(196,74,74,0.3)',
            fontSize: '0.83rem',
            color: '#e07070',
          } : { position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap', border: 0 }}
        >
          {state.status === 'error' ? state.message : ''}
        </div>

        <button
          type="submit"
          disabled={pending}
          style={{
            padding: '1.05rem 1.5rem',
            backgroundColor: pending ? 'var(--text-muted)' : 'var(--terra)',
            color: '#fff',
            border: 'none',
            cursor: pending ? 'wait' : 'pointer',
            opacity: pending ? 0.6 : 1,
            fontSize: '0.7rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            fontWeight: 700,
            fontFamily: 'inherit',
            transition: 'background-color 0.2s, opacity 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            borderRadius: '999px',
          }}
        >
          {pending ? (
            <>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ animation: 'spin 1s linear infinite' }}>
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="20 10" />
              </svg>
              Envoi en cours…
            </>
          ) : (
            'Envoyer ma demande'
          )}
        </button>

        <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0 }}>
          Réponse garantie sous 48h ouvrées · Un email de confirmation vous sera envoyé
        </p>
      </form>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        input:focus, select:focus, textarea:focus { border-color: var(--terra) !important; }
      `}</style>
    </div>
  )
}
