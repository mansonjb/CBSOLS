'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

export interface VideoTestimonialProps {
  vimeoId: string
  name: string
  role: string
  company: string
  quote: string
  /** Ex: "Cabinet d'assurance, La Rochelle" */
  projectInfo?: string
}

/**
 * Témoignage vidéo client, Vimeo.
 * Lazy: la thumbnail (vumbnail.com) est affichée tant que l'utilisateur n'a pas
 * cliqué sur Play. Aucune iframe Vimeo ni cookie tant que pas de clic.
 * Aspect ratio 4:3.
 */
export function VideoTestimonial({
  vimeoId,
  name,
  role,
  company,
  quote,
  projectInfo,
}: VideoTestimonialProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '14px',
        padding: '2rem',
        maxWidth: '720px',
        margin: '0 auto',
      }}
    >
      {/* Citation en exergue */}
      <div
        style={{
          borderLeft: '3px solid var(--terra)',
          paddingLeft: '1.25rem',
          marginBottom: '1.75rem',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)',
            color: 'var(--dark)',
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          « {quote} »
        </p>
      </div>

      {/* Zone vidéo 9:16 (vertical) avec lazy load, max-width pour ne pas envahir l'écran sur desktop */}
      <div
        style={{
          position: 'relative',
          paddingTop: '177.78%',
          width: '100%',
          maxWidth: '380px',
          margin: '0 auto 1.5rem',
          borderRadius: '10px',
          overflow: 'hidden',
          backgroundColor: 'var(--dark)',
        }}
      >
        {!loaded ? (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            aria-label={`Lire le témoignage vidéo de ${name}`}
            className="video-poster"
            style={{
              position: 'absolute',
              inset: 0,
              padding: 0,
              border: 'none',
              cursor: 'pointer',
              backgroundImage: `url(https://vumbnail.com/${vimeoId}.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              className="video-poster-btn"
              style={{
                width: 76,
                height: 76,
                borderRadius: '50%',
                backgroundColor: 'rgba(44, 85, 48, 0.92)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 12px 36px -10px rgba(0,0,0,0.5)',
                transition: 'transform 200ms ease',
              }}
            >
              <Play
                size={28}
                color="#fff"
                fill="#fff"
                strokeWidth={0}
                style={{ marginLeft: '4px' }}
              />
            </div>
          </button>
        ) : (
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&dnt=1&badge=0&autopause=0&app_id=58479`}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0,
            }}
            title={`Témoignage ${name}`}
          />
        )}
      </div>

      {/* Identité client */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            color: 'var(--dark)',
            fontSize: '1.05rem',
            marginBottom: '0.25rem',
          }}
        >
          {name}
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
          {role}, {company}
        </div>
        {projectInfo ? (
          <div
            style={{
              marginTop: '0.5rem',
              fontSize: '0.8rem',
              color: 'var(--terra)',
              fontWeight: 600,
            }}
          >
            {projectInfo}
          </div>
        ) : null}
      </div>

      <style>{`
        .video-poster:hover .video-poster-btn { transform: scale(1.08); }
      `}</style>
    </div>
  )
}
