import { pickTestimonials, type Testimonial, type TestimonialSector } from '@/data/testimonials'

interface Props {
  zone?: Testimonial['zone']
  preferSector?: TestimonialSector
  /** Used to deterministically rotate when multiple pages share the same zone */
  seed?: string
  count?: number
  title?: string
  eyebrow?: string
  /** Render on dark background? */
  dark?: boolean
}

/**
 * Grid of testimonials. Server component.
 * Rotates deterministically by `seed` so each page shows a different subset.
 */
export function SectorTestimonials({
  zone,
  preferSector,
  seed = '',
  count = 3,
  title = 'Ce que nos clients disent',
  eyebrow = 'Paroles de clients',
  dark = false,
}: Props) {
  const items = pickTestimonials({ zone, preferSector, seed, count })
  const bg = dark ? 'var(--bg-inv)' : 'var(--bg)'
  const headingColor = dark ? '#F0EBE3' : 'var(--dark)'
  const quoteColor = dark ? '#F0EBE3' : 'var(--dark)'
  const authorColor = dark ? 'rgba(240,235,227,0.55)' : 'var(--text-muted)'
  const cardBg = dark ? 'rgba(240,235,227,0.03)' : 'var(--bg-card)'
  const cardBorder = dark ? 'rgba(240,235,227,0.1)' : 'var(--border)'

  return (
    <section style={{ padding: '5rem 2rem', backgroundColor: bg, borderTop: dark ? 'none' : '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem' }}>{eyebrow}</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: headingColor, margin: 0, letterSpacing: '-0.025em', lineHeight: 1.2 }}>
            {title}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(${count > 2 ? '280px' : '360px'}, 1fr))`, gap: '1.5rem' }}>
          {items.map((t, i) => (
            <div
              key={i}
              style={{
                padding: '2rem',
                border: `1px solid ${cardBorder}`,
                backgroundColor: cardBg,
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', color: 'var(--terra)', lineHeight: 0.7 }}>&ldquo;</div>
              <blockquote
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '0.95rem',
                  color: quoteColor,
                  lineHeight: 1.65,
                  margin: 0,
                  flex: 1,
                  fontWeight: 300,
                }}
              >
                {t.quote}
              </blockquote>
              <div style={{ fontSize: '0.7rem', color: authorColor, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
                {t.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
