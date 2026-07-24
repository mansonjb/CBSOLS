import Link from 'next/link'
import { Phone } from 'lucide-react'
import { company } from '@/data/company'

interface DevisBannerProps {
  /** Titre du bandeau. Défaut orienté conversion. */
  title?: string
  /** Sous-titre optionnel (petite ligne sous le titre). */
  subtitle?: string
  /** Libellé du bouton principal. */
  ctaLabel?: string
  /** Cible du bouton principal. */
  ctaHref?: string
}

/**
 * Bandeau CTA "demande de devis" à intégrer au fil d'un contenu long
 * (guides, pages éditoriales). Fond terra, texte clair, bouton devis +
 * numéro cliquable. Pensé pour casser un mur de texte et rappeler l'action.
 */
export function DevisBanner({
  title = 'Un projet de sol chez vous ?',
  subtitle = 'Devis gratuit et sans engagement, réponse rapide. Plus de 25 ans de savoir-faire près de La Rochelle.',
  ctaLabel = 'Demander un devis',
  ctaHref = '/devis-revetement-sol',
}: DevisBannerProps) {
  return (
    <div
      style={{
        margin: '3.5rem 0',
        padding: 'clamp(1.75rem, 4vw, 2.5rem)',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, var(--terra) 0%, #244726 100%)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem',
        boxShadow: '0 20px 50px -22px rgba(44, 85, 48, 0.55)',
      }}
    >
      <div style={{ flex: '1 1 300px', minWidth: 0 }}>
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1.15rem, 2.4vw, 1.5rem)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            marginBottom: subtitle ? '0.6rem' : 0,
          }}
        >
          {title}
        </div>
        {subtitle && (
          <p
            style={{
              fontSize: '0.9rem',
              lineHeight: 1.6,
              color: 'var(--terra-on-dark)',
              margin: 0,
              maxWidth: '46ch',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Link
          href={ctaHref}
          style={{
            display: 'inline-block',
            padding: '0.875rem 1.75rem',
            backgroundColor: '#fff',
            color: 'var(--terra)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            borderRadius: '999px',
            whiteSpace: 'nowrap',
          }}
        >
          {ctaLabel}
        </Link>
        <a
          href={`tel:${company.phoneClean}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.875rem 1.5rem',
            border: '1px solid rgba(255,255,255,0.4)',
            color: '#fff',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textDecoration: 'none',
            borderRadius: '999px',
            whiteSpace: 'nowrap',
          }}
        >
          <Phone size={15} strokeWidth={2} />
          {company.phone}
        </a>
      </div>
    </div>
  )
}
