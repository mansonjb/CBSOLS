import Link from 'next/link'
import type { Metadata } from 'next'
import { enGuides } from '../_lib/guides'
import { BreadcrumbLD } from '@/components/BreadcrumbLD'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Floor Covering Guides | CB Sols, Pro Advice Charente-Maritime',
  description:
    'All of CB Sols’ practical guides to choosing, laying and caring for your floor coverings: professional carpet, vinyl, bespoke rugs. A craftsman’s advice.',
  alternates: {
    canonical: 'https://cbsols.fr/en/guide',
    languages: { 'fr-FR': 'https://cbsols.fr/guide', en: 'https://cbsols.fr/en/guide', es: 'https://cbsols.fr/es/guide', },
  },
}

function groupByCategory(items: typeof enGuides) {
  const map = new Map<string, typeof enGuides>()
  for (const g of items) {
    if (!map.has(g.category)) map.set(g.category, [])
    map.get(g.category)!.push(g)
  }
  return Array.from(map.entries())
}

export default function GuidesHubPageEn() {
  const grouped = groupByCategory(enGuides)

  return (
    <>
      <BreadcrumbLD
        items={[
          { name: 'CB Sols', url: 'https://cbsols.fr/en' },
          { name: 'Guides', url: 'https://cbsols.fr/en/guide' },
        ]}
      />
      <div style={{ paddingTop: '72px' }}>
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(44, 85, 48, 0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '920px', margin: '0 auto', position: 'relative' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Library</div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              Guides & <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>advice.</em>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--cream-muted)', lineHeight: 1.7, margin: 0, maxWidth: '640px' }}>
              Over 28 years of projects summed up in practical guides. How to choose a professional carpet, compare vinyl and tiles in a pro kitchen, care for a contract floor so it lasts. No waffle.
            </p>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem 6rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {grouped.map(([category, items]) => (
              <div key={category}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem', fontWeight: 600 }}>
                  {category} · {items.length} guide{items.length > 1 ? 's' : ''}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
                  {items.map((g) => (
                    <Link key={g.slug} href={`/en/guide/${g.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                      <article style={{ padding: '2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem', transition: 'transform 0.2s, box-shadow 0.2s' }} className="service-card">
                        <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--dark)', margin: 0, lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                          {g.title}
                        </h2>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6, flex: 1 }}>
                          {g.intro.length > 180 ? g.intro.slice(0, 180).trim() + '…' : g.intro}
                        </p>
                        <div style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700, marginTop: '0.5rem' }}>
                          Read the guide →
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              A specific question about your project?
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              The guides answer the general. For your particular case, ask us for a free quote or come to the showroom.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/en/contact" variant="primary" size="lg">Free quote</Button>
              <Button href="/en/faq" variant="outline" size="md">See the FAQ</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
