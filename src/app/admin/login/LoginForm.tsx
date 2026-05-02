'use client'

import { useActionState } from 'react'
import { useSearchParams } from 'next/navigation'
import { loginAction, type LoginState } from '../actions'

const initial: LoginState = { status: 'idle', message: '' }

export function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, initial)
  const searchParams = useSearchParams()
  const next = searchParams?.get('next') ?? '/admin'

  return (
    <form action={action} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div>
        <label
          htmlFor="password"
          style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}
        >
          Mot de passe
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          autoComplete="current-password"
          disabled={pending}
          placeholder="••••••••••"
          style={{
            width: '100%',
            backgroundColor: 'var(--bg-subtle)',
            border: '1.5px solid var(--border)',
            color: 'var(--dark)',
            padding: '0.95rem 1rem',
            fontSize: '16px',
            outline: 'none',
            fontFamily: 'inherit',
            borderRadius: '8px',
            transition: 'border-color 0.2s',
            opacity: pending ? 0.6 : 1,
          }}
        />
      </div>

      <input type="hidden" name="next" value={next} />

      {state.status === 'error' && (
        <div style={{ padding: '0.75rem 1rem', backgroundColor: 'var(--error-bg)', border: '1px solid var(--error)', borderRadius: '6px', color: 'var(--error-fg)', fontSize: '0.82rem' }}>
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        style={{
          padding: '1rem 1.5rem',
          backgroundColor: 'var(--terra)',
          color: '#fff',
          border: 'none',
          fontSize: '0.7rem',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          fontWeight: 700,
          borderRadius: '999px',
          cursor: pending ? 'wait' : 'pointer',
          fontFamily: 'inherit',
          opacity: pending ? 0.7 : 1,
        }}
      >
        {pending ? 'Connexion...' : 'Se connecter'}
      </button>
    </form>
  )
}
