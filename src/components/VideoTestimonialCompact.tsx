'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

export interface VideoTestimonialCompactProps {
  vimeoId: string
  name: string
  thumbnailUrl?: string
}

/**
 * Variante compacte du témoignage vidéo, sans card ni citation.
 * Juste la vidéo 9:16 réduite, à intégrer dans un layout horizontal
 * (typiquement homepage : vidéo à gauche, texte à droite).
 */
export function VideoTestimonialCompact({ vimeoId, name, thumbnailUrl }: VideoTestimonialCompactProps) {
  const [loaded, setLoaded] = useState(false)
  const poster = thumbnailUrl ?? `https://vumbnail.com/${vimeoId}_large.jpg`

  return (
    <div
      className="vt-compact-frame"
      style={{
        position: 'relative',
        paddingTop: '177.78%',
        width: '200px',
        margin: '0 auto',
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
          className="video-poster-compact"
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
            className="video-poster-compact-btn"
            style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              backgroundColor: 'rgba(44, 85, 48, 0.92)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 12px 36px -10px rgba(0,0,0,0.5)',
              transition: 'transform 200ms ease',
            }}
          >
            <Play size={20} color="#fff" fill="#fff" strokeWidth={0} style={{ marginLeft: '3px' }} />
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

      <style>{`
        .video-poster-compact:hover .video-poster-compact-btn { transform: scale(1.08); }
        @media (max-width: 720px) {
          .vt-compact-frame { width: 140px !important; }
        }
      `}</style>
    </div>
  )
}
