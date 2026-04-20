'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const slides = [
  {
    img: '/images/tapis-hotel.webp',
    project: 'Hôtel La Baronnie · Île de Ré',
    type: 'Tapis sur mesure',
    surface: '600 m²',
  },
  {
    img: '/images/motif-tapis-hotel.webp',
    project: 'Lobby hôtelier · La Rochelle',
    type: 'Tapis motif exclusif',
    surface: '120 m²',
  },
  {
    img: '/images/restaurant-coutanceau.webp',
    project: 'Restaurant Coutanceau · La Rochelle',
    type: 'Moquette gastronomique',
    surface: '220 m²',
  },
  {
    img: '/images/moquette-chambre.webp',
    project: 'Résidences · Île de Ré',
    type: 'Moquette chambre hôtelière',
    surface: '180 m²',
  },
  {
    img: '/images/moquette-bureau.webp',
    project: 'Bureaux · Charente-Maritime',
    type: 'Moquette dalles contrat',
    surface: '350 m²',
  },
  {
    img: '/images/golf.webp',
    project: 'Golf de la Prée · Île de Ré',
    type: 'Moquette + PVC vestiaires',
    surface: '600 m²',
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  const goTo = useCallback((index: number) => {
    setTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setTransitioning(false)
    }, 400)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [current, goTo])

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '100%', minHeight: '600px' }}>
      {slides.map((slide, i) => (
        <div
          key={slide.img}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: i === current ? (transitioning ? 0 : 1) : 0,
            transition: 'opacity 0.9s ease',
            willChange: 'opacity',
          }}
        >
          <Image
            src={slide.img}
            alt={slide.project}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority={i === 0}
            sizes="50vw"
          />
        </div>
      ))}

      {/* Caption */}
      <div style={{
        position: 'absolute',
        bottom: '1.5rem',
        left: '1.5rem',
        right: '4.5rem',
        backgroundColor: 'var(--bg-glass)',
        backdropFilter: 'blur(12px)',
        padding: '1rem 1.25rem',
        borderLeft: '3px solid var(--terra)',
        borderRadius: '14px',
        transition: 'opacity 0.4s',
        opacity: transitioning ? 0 : 1,
      }}>
        <div style={{ fontSize: '0.56rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.3rem', fontWeight: 600 }}>
          {slides[current].type} · {slides[current].surface}
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--dark)', fontWeight: 500, fontFamily: 'var(--font-sans)' }}>
          {slides[current].project}
        </div>
      </div>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: '2.25rem', right: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: '5px',
              height: i === current ? '22px' : '5px',
              backgroundColor: i === current ? 'var(--terra)' : 'rgba(255,255,255,0.45)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.35s ease',
              borderRadius: '3px',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  )
}
