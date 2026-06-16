import Image from 'next/image'
import type { ClientReference } from '@/data/clients'

interface Props {
  client: ClientReference
  /** Si on est sur fond clair (sections light) plutôt que dark */
  light?: boolean
  /** Hauteur de la carte (px) */
  height?: number
}

/**
 * Carte logo client. Si une URL est fournie, le logo devient cliquable
 * et ouvre le site officiel dans un nouvel onglet (rel noopener).
 *
 * Utilise next/image pour servir des versions responsives optimisées (le source
 * est en 400×400 webp mais l'affichage est 80×80, on évite 73 KiB inutiles).
 */
export function ClientLogoCard({ client, light = false, height = 130 }: Props) {
  const logoMax = Math.min(80, height - 50)
  const inner = (
    <Image
      src={client.src}
      alt={client.alt}
      width={logoMax}
      height={logoMax}
      loading="lazy"
      sizes={`${logoMax}px`}
      style={{
        maxHeight: logoMax,
        maxWidth: '100%',
        width: 'auto',
        height: 'auto',
        objectFit: 'contain',
        opacity: 0.9,
      }}
    />
  )

  const cardStyle: React.CSSProperties = {
    height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.25rem',
    borderRadius: '8px',
    border: light
      ? '1px solid rgba(0,0,0,0.06)'
      : '1px solid rgba(240,235,227,0.08)',
    backgroundColor: light ? 'var(--bg-card)' : 'transparent',
    transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
    textDecoration: 'none',
    color: 'inherit',
  }

  if (client.href) {
    return (
      <a
        href={client.href}
        target="_blank"
        rel="noopener noreferrer"
        title={`Visiter le site de ${client.alt}`}
        aria-label={`Visiter le site de ${client.alt}`}
        className={light ? 'client-card-light' : 'client-card-dark'}
        style={cardStyle}
      >
        {inner}
      </a>
    )
  }

  return (
    <div
      className={light ? 'client-card-light' : 'client-card-dark'}
      style={cardStyle}
    >
      {inner}
    </div>
  )
}
