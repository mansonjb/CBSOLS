'use client'
import { useState, useEffect, useCallback } from 'react'

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

/**
 * Slider beige : gradient continu entre blanc-chaud et beige profond.
 * 0 = blanc neutre (#FAFAF8) — 100 = beige soutenu (#EFE3CC).
 * Stocké dans localStorage. Désactivé en dark mode.
 */
const BEIGE_KEY = 'cbsols-beige-pct'
const BEIGE_DEFAULT = 25

const BEIGE_STOPS = {
  start: { bg: '#FAFAF8', bgAlt: '#F4F1EC', bgCard: '#FFFFFF', bgSubtle: '#F9F7F4' },
  end:   { bg: '#EFE3CC', bgAlt: '#E5D7B8', bgCard: '#F6EBD3', bgSubtle: '#EBDFC8' },
}

function lerpHex(c1: string, c2: string, t: number): string {
  const h = (s: string, i: number) => parseInt(s.slice(i, i + 2), 16)
  const r = Math.round(h(c1, 1) + (h(c2, 1) - h(c1, 1)) * t)
  const g = Math.round(h(c1, 3) + (h(c2, 3) - h(c1, 3)) * t)
  const b = Math.round(h(c1, 5) + (h(c2, 5) - h(c1, 5)) * t)
  return '#' + [r, g, b].map((n) => Math.max(0, Math.min(255, n)).toString(16).padStart(2, '0')).join('')
}

function applyBeige(pct: number) {
  if (typeof document === 'undefined') return
  const root = document.documentElement.style
  const isDark = document.documentElement.dataset.theme === 'dark'
  if (isDark) {
    // En dark mode, on retire les overrides pour laisser le CSS dark agir
    root.removeProperty('--bg')
    root.removeProperty('--bg-alt')
    root.removeProperty('--bg-card')
    root.removeProperty('--bg-subtle')
    return
  }
  const t = Math.max(0, Math.min(100, pct)) / 100
  root.setProperty('--bg', lerpHex(BEIGE_STOPS.start.bg, BEIGE_STOPS.end.bg, t))
  root.setProperty('--bg-alt', lerpHex(BEIGE_STOPS.start.bgAlt, BEIGE_STOPS.end.bgAlt, t))
  root.setProperty('--bg-card', lerpHex(BEIGE_STOPS.start.bgCard, BEIGE_STOPS.end.bgCard, t))
  root.setProperty('--bg-subtle', lerpHex(BEIGE_STOPS.start.bgSubtle, BEIGE_STOPS.end.bgSubtle, t))
}

export function ColorSwitcher() {
  const [active, setActive] = useState('goyard')
  const [beige, setBeige] = useState(BEIGE_DEFAULT)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('accent') || 'goyard'
    setActive(saved)
    applyPalette(saved)

    const savedBeige = parseInt(localStorage.getItem(BEIGE_KEY) ?? '', 10)
    const initialBeige = Number.isFinite(savedBeige) ? savedBeige : BEIGE_DEFAULT
    setBeige(initialBeige)
    applyBeige(initialBeige)

    // Réapplique le beige quand le thème change (dark→light)
    const obs = new MutationObserver(() => applyBeige(initialBeige))
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => obs.disconnect()
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
  }

  const onBeigeChange = useCallback((pct: number) => {
    setBeige(pct)
    applyBeige(pct)
    localStorage.setItem(BEIGE_KEY, String(pct))
  }, [])

  const current = palettes.find((p) => p.id === active) ?? palettes[0]
  const beigePreview = lerpHex(BEIGE_STOPS.start.bg, BEIGE_STOPS.end.bg, beige / 100)
  const isDark = typeof document !== 'undefined' && document.documentElement.dataset.theme === 'dark'

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Personnaliser le thème"
        title="Personnaliser le thème"
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
        <>
          <div onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 199 }} />
          <div
            style={{
              position: 'absolute',
              top: 'calc(100% + 10px)',
              right: 0,
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-mid)',
              borderRadius: '16px',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              boxShadow: '0 12px 36px rgba(0,0,0,0.16)',
              zIndex: 200,
              minWidth: '230px',
            }}
          >
            {/* Accent palette */}
            <div>
              <div style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.6rem', fontWeight: 600 }}>
                Accent
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.4rem' }}>
                {palettes.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => pick(p.id)}
                    title={p.label}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.3rem',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '0.4rem 0.2rem',
                      borderRadius: '8px',
                      backgroundColor: active === p.id ? 'var(--bg-alt)' : 'transparent',
                      transition: 'background-color 0.15s',
                    }}
                  >
                    <span style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      backgroundColor: p.main,
                      boxShadow: active === p.id ? `0 0 0 2px var(--bg-card), 0 0 0 4px ${p.main}` : 'none',
                      transition: 'box-shadow 0.2s',
                    }} />
                    <span style={{ fontSize: '0.62rem', color: 'var(--dark-2)', fontWeight: active === p.id ? 600 : 400 }}>
                      {p.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Beige slider */}
            <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.6rem' }}>
                <span style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>
                  Beige du fond
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--dark-2)', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>
                  {beige}%
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {/* Preview chip */}
                <span
                  aria-hidden="true"
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    backgroundColor: beigePreview,
                    border: '1px solid var(--border-strong)',
                    flexShrink: 0,
                  }}
                />
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={1}
                  value={beige}
                  onChange={(e) => onBeigeChange(parseInt(e.target.value, 10))}
                  disabled={isDark}
                  aria-label="Intensité du beige"
                  style={{
                    flex: 1,
                    height: 6,
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    background: 'linear-gradient(to right, #FAFAF8, #EFE3CC)',
                    borderRadius: 999,
                    outline: 'none',
                    cursor: isDark ? 'not-allowed' : 'pointer',
                    opacity: isDark ? 0.4 : 1,
                  }}
                  className="beige-slider"
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => onBeigeChange(0)}
                  disabled={isDark}
                  style={{ fontSize: '0.62rem', color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', padding: '0.2rem 0.4rem', fontFamily: 'inherit' }}
                >
                  Neutre
                </button>
                <button
                  type="button"
                  onClick={() => onBeigeChange(BEIGE_DEFAULT)}
                  disabled={isDark}
                  style={{ fontSize: '0.62rem', color: 'var(--terra)', background: 'none', border: 'none', cursor: 'pointer', padding: '0.2rem 0.4rem', fontFamily: 'inherit', fontWeight: 700 }}
                >
                  Défaut
                </button>
                <button
                  type="button"
                  onClick={() => onBeigeChange(100)}
                  disabled={isDark}
                  style={{ fontSize: '0.62rem', color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', padding: '0.2rem 0.4rem', fontFamily: 'inherit' }}
                >
                  Beige fort
                </button>
              </div>

              {isDark && (
                <p style={{ fontSize: '0.62rem', color: 'var(--text-muted)', margin: '0.5rem 0 0', lineHeight: 1.5 }}>
                  Le slider beige est désactivé en mode sombre.
                </p>
              )}
            </div>
          </div>
        </>
      )}

      <style>{`
        .beige-slider::-webkit-slider-thumb {
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--terra);
          border: 2px solid var(--bg-card);
          box-shadow: 0 1px 4px rgba(0,0,0,0.25);
          cursor: pointer;
          transition: transform 0.15s;
        }
        .beige-slider::-webkit-slider-thumb:hover { transform: scale(1.15); }
        .beige-slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--terra);
          border: 2px solid var(--bg-card);
          box-shadow: 0 1px 4px rgba(0,0,0,0.25);
          cursor: pointer;
        }
        .beige-slider:disabled::-webkit-slider-thumb { cursor: not-allowed; }
      `}</style>
    </div>
  )
}
