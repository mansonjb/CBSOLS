'use client'
import { useState, useEffect } from 'react'

/**
 * Nuancier vert — déclinaisons inspirées Goyard (vert profond emblématique)
 */
const palettes = [
  { id: 'goyard',   label: 'Goyard',     main: '#2C5530', dark: '#1E3D22' },
  { id: 'forest',   label: 'Forêt',      main: '#1E3D22', dark: '#14291A' },
  { id: 'sauge',    label: 'Sauge',      main: '#6B8B5E', dark: '#557048' },
  { id: 'olive',    label: 'Olive',      main: '#5C6E2E', dark: '#475624' },
  { id: 'jade',     label: 'Jade',       main: '#3F7A45', dark: '#2C5530' },
  { id: 'mousse',   label: 'Mousse',     main: '#4A6850', dark: '#3A523F' },
]

export function ColorSwitcher() {
  const [active, setActive] = useState('goyard')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('accent') || 'goyard'
    setActive(saved)
    applyPalette(saved)
  }, [])

  function applyPalette(id: string) {
    const p = palettes.find((p) => p.id === id) ?? palettes[0]
    document.documentElement.style.setProperty('--terra', p.main)
    document.documentElement.style.setProperty('--terra-dark', p.dark)
    localStorage.setItem('accent', p.id)
    if (p.id !== id) setActive(p.id)
  }

  function pick(id: string) {
    setActive(id)
    applyPalette(id)
    setOpen(false)
  }

  const current = palettes.find((p) => p.id === active) ?? palettes[0]

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Changer la couleur d'accent"
        title="Couleur d'accent"
        style={{
          width: '34px',
          height: '34px',
          borderRadius: '999px',
          border: '2px solid var(--border-mid)',
          backgroundColor: current.main,
          cursor: 'pointer',
          padding: 0,
          flexShrink: 0,
          transition: 'transform 0.15s, border-color 0.2s',
          transform: open ? 'scale(1.1)' : 'scale(1)',
        }}
      />
      {open && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 10px)',
          right: 0,
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-mid)',
          borderRadius: '16px',
          padding: '0.875rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          zIndex: 200,
          minWidth: '140px',
        }}>
          <div style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.25rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border)' }}>
            Accent
          </div>
          {palettes.map(p => (
            <button
              key={p.id}
              onClick={() => pick(p.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.375rem 0.25rem',
                borderRadius: '8px',
                backgroundColor: active === p.id ? 'var(--bg-alt)' : 'transparent',
                transition: 'background-color 0.15s',
                width: '100%',
                textAlign: 'left',
              }}
            >
              <span style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: p.main,
                flexShrink: 0,
                boxShadow: active === p.id ? `0 0 0 2px var(--bg-card), 0 0 0 4px ${p.main}` : 'none',
                transition: 'box-shadow 0.2s',
              }} />
              <span style={{ fontSize: '0.75rem', color: 'var(--dark-2)', fontWeight: active === p.id ? 600 : 400 }}>
                {p.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
