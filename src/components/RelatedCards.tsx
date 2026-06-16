import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'

export interface RelatedCardItem {
  href: string
  title: string
  teaser: string
  icon: LucideIcon
}

export function RelatedCards({ items, sectionTitle = 'Voir aussi', sectionSubtitle }: {
  items: RelatedCardItem[]
  sectionTitle?: string
  sectionSubtitle?: string
}) {
  return (
    <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700, marginBottom: '1rem' }}>
          {sectionTitle}
        </div>
        {sectionSubtitle ? (
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.65, maxWidth: '780px', marginBottom: '2.5rem' }}>{sectionSubtitle}</p>
        ) : null}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {items.map((it, i) => {
            const Icon = it.icon
            return (
              <Link key={i} href={it.href} className="related-card" style={{
                display: 'flex', flexDirection: 'column', gap: '1rem',
                padding: '1.75rem', backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)', borderRadius: '14px',
                textDecoration: 'none', color: 'var(--dark)',
                transition: 'transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease',
                position: 'relative', minHeight: 180,
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  backgroundColor: 'color-mix(in srgb, var(--terra) 12%, transparent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={20} color="var(--terra)" strokeWidth={1.75} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.25, marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>{it.title}</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.55, margin: 0 }}>{it.teaser}</p>
                </div>
                <div style={{ position: 'absolute', top: '1.75rem', right: '1.75rem' }}>
                  <ArrowRight size={16} color="var(--terra)" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      <style>{`
        .related-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px -8px rgba(44, 85, 48, 0.18);
          border-color: var(--terra);
        }
      `}</style>
    </section>
  )
}
