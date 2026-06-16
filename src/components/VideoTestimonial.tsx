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
  /** URL d'une vignette custom (sinon fallback sur vumbnail.com qui pull la vignette Vimeo). */
  thumbnailUrl?: string
}

/**
 * Témoignage vidéo client, Vimeo. Format 9:16 vertical.
 * Lazy: la thumbnail est affichée tant que l'utilisateur n'a pas cliqué sur Play.
 * Aucune iframe Vimeo ni cookie tant que pas de clic.
 *
 * Ordre d'affichage : vidéo en haut, identité + citation en dessous.
 */
export function VideoTestimonial({
  vimeoId,
  name,
  role,
  company,
  quote,
  projectInfo,
  thumbnailUrl,
}: VideoTestimonialProps) {
  const [loaded, setLoaded] = useState(false)
  const poster = thumbnailUrl ?? `https://vumbnail.com/${vimeoId}_large.jpg`

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '14px',
        padding: '1.25rem',
        maxWidth: '720px',
        margin: '0 auto',
        // Cards alignées même hauteur dans la grille : flex column, citation poussée en bas
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* Zone vidéo 9:16 vertical (fichier source 2160×3840 confirmé, ratio strict) */}
      <div
        style={{
          position: 'relative',
          paddingTop: '177.78%',
          width: '100%',
          maxWidth: '200px',
          margin: '0 auto 1.25rem',
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
              backgroundImage: `url(${poster})`,
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
                width: 64,
                height: 64,
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
                size={24}
                color="#fff"
                fill="#fff"
                strokeWidth={0}
                style={{ marginLeft: '3px' }}
              />
            </div>
          </button>
        ) : (
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&dnt=1&badge=0&autopause=0&app_id=58479`}
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
      <div style={{ marginBottom: '1rem' }}>
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            color: 'var(--dark)',
            fontSize: '1rem',
            marginBottom: '0.2rem',
          }}
        >
          {name}
        </div>
        <div style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.4 }}>
          {role}, {company}
        </div>
        {projectInfo ? (
          <div
            style={{
              marginTop: '0.4rem',
              fontSize: '0.75rem',
              color: 'var(--terra)',
              fontWeight: 600,
            }}
          >
            {projectInfo}
          </div>
        ) : null}
      </div>

      {/* Citation en bas (poussée au pied de la carte pour aligner les hauteurs en grille) */}
      <div
        style={{
          borderLeft: '2px solid var(--terra)',
          paddingLeft: '0.85rem',
          marginTop: 'auto',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '0.88rem',
            color: 'var(--dark)',
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          « {quote} »
        </p>
      </div>

      <style>{`
        .video-poster:hover .video-poster-btn { transform: scale(1.08); }
      `}</style>
    </div>
  )
}
