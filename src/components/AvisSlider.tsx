'use client'
import { useState, useEffect, useRef, useCallback } from 'react'

export type Avis = {
  name: string
  context: string
  date: string
  text: string
}

export function AvisSlider({ reviews }: { reviews: Avis[] }) {
  const [index, setIndex] = useState(0)
  const [perView, setPerView] = useState(3)
  const trackRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)

  // Responsive perView
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w < 720) setPerView(1)
      else if (w < 1080) setPerView(2)
      else setPerView(3)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxIndex = Math.max(0, reviews.length - perView)

  const goTo = useCallback(
    (i: number) => {
      const clamped = Math.max(0, Math.min(i, maxIndex))
      setIndex(clamped)
    },
    [maxIndex]
  )

  // Auto-rotation
  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current) return
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 6000)
    return () => clearInterval(id)
  }, [maxIndex])

  const cardWidthPct = 100 / perView
  const translatePct = -(index * cardWidthPct)

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      {/* Viewport */}
      <div style={{ overflow: 'hidden' }}>
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            transform: `translateX(${translatePct}%)`,
            transition: 'transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1)',
            willChange: 'transform',
          }}
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              style={{
                flex: `0 0 ${cardWidthPct}%`,
                padding: '0 0.625rem',
                boxSizing: 'border-box',
              }}
            >
              <article
                style={{
                  padding: '1.75rem',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.875rem',
                  height: '100%',
                  minHeight: '320px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.2rem' }}>{review.name}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)', lineHeight: 1.4 }}>{review.context}</div>
                  </div>
                  <div style={{ display: 'inline-flex', gap: 1, flexShrink: 0 }}>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} width="11" height="11" viewBox="0 0 24 24" fill="#FBBC04" stroke="none">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--dark-2)', lineHeight: 1.7, margin: 0, fontStyle: 'italic', flex: 1 }}>
                  « {review.text} »
                </p>
                <div style={{ fontSize: '0.7rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.4rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21.35 11.1H12v3.18h5.59c-.26 1.5-1.5 4.4-5.59 4.4-3.36 0-6.1-2.78-6.1-6.2s2.74-6.2 6.1-6.2c1.91 0 3.2.81 3.93 1.5l2.68-2.59C16.9 3.65 14.66 2.7 12 2.7 6.92 2.7 2.8 6.82 2.8 11.9s4.12 9.2 9.2 9.2c5.31 0 8.83-3.73 8.83-9 0-.6-.07-1.05-.18-1.5z"
                      fill="#4285F4"
                    />
                  </svg>
                  Avis Google · {review.date}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', gap: '1rem', flexWrap: 'wrap' }}>
        {/* Dots */}
        <div style={{ display: 'flex', gap: '0.4rem', flex: 1, flexWrap: 'wrap' }}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Page ${i + 1}`}
              style={{
                width: i === index ? '22px' : '7px',
                height: '7px',
                borderRadius: '999px',
                backgroundColor: i === index ? 'var(--terra)' : 'var(--border-hover)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Arrows */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label="Précédent"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '999px',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--bg-card)',
              cursor: index === 0 ? 'not-allowed' : 'pointer',
              opacity: index === 0 ? 0.4 : 1,
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--dark)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={() => goTo(index + 1)}
            disabled={index >= maxIndex}
            aria-label="Suivant"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '999px',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--bg-card)',
              cursor: index >= maxIndex ? 'not-allowed' : 'pointer',
              opacity: index >= maxIndex ? 0.4 : 1,
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--dark)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
