'use client'
import { useState, useEffect } from 'react'

const palettes = [
  { id: 'terra',    label: 'Terra',    main: '#C4714A', dark: '#A85D38' },
  { id: 'ardoise',  label: 'Ardoise',  main: '#4A80A8', dark: '#3A6588' },
  { id: 'sauge',    label: 'Sauge',    main: '#6B8B5E', dark: '#557048' },
  { id: 'bordeaux', label: 'Bordeaux', main: '#963D5A', dark: '#7A2E48' },
  { id: 'encre',    label: 'Encre',    main: '#5C6BC0', dark: '#4555AA' },
]

export function ColorSwitcher() {
  const [active, setActive] = useState('terra')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('accent') || 'terra'
    setActive(saved)
    applyPalette(saved)
  }, [])

  function applyPalette(id: string) {
    const p = palettes.find(p => p.id === id)
    if (!p) return
    document.documentElement.style.setProperty('--terra', p.main)
    document.documentElement.style.setProperty('--terra-dark', p.dark)
    localStorage.setItem('accent', id)
  }

  function pick(id: string) {
    setActive(id)
    applyPalette(id)
    setOpen(false)
  }

  const current = palettes.find(p => p.id === active)!

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
