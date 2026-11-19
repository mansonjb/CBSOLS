import Link from 'next/link'
import type { Metadata } from 'next'
import { enSolutions } from '../_lib/solutions'
import { BreadcrumbLD } from '@/components/BreadcrumbLD'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Floor Covering Solutions | CB Sols, Hotels, Restaurants, Offices',
  description:
    'Floor covering solutions by use: hotel carpet, restaurant vinyl, office carpet, cinema room, reading nook. Choose by your type of establishment.',
  alternates: {
    canonical: 'https://cbsols.fr/en/solutions',
    languages: { 'fr-FR': 'https://cbsols.fr/solutions', en: 'https://cbsols.fr/en/solutions' },
  },
}

function groupByService(items: typeof enSolutions) {
  const map = new Map<string, typeof enSolutions>()
  for (const s of items) {
    if (!map.has(s.serviceName)) map.set(s.serviceName, [])
    map.get(s.serviceName)!.push(s)
  }
  return Array.from(map.entries())
}

export default function SolutionsHubPageEn() {
  const grouped = groupByService(enSolutions)

  return (
    <>
      <BreadcrumbLD
        items={[
          { name: 'CB Sols', url: 'https://cbsols.fr/en' },
          { name: 'Solutions', url: 'https://cbsols.fr/en/solutions' },
        ]}
      />
      <div style={{ paddingTop: '72px' }}>
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(44, 85, 48, 0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '920px', margin: '0 auto', position: 'relative' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Solutions by use</div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              The right floor<br />
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>for the right use.</em>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--cream-muted)', lineHeight: 1.7, margin: 0, maxWidth: '640px' }}>
              Hotel carpet has nothing in common with office carpet. A professional-kitchen vinyl floor meets standards a residential floor never covers. Here are our solutions, organised by your type of establishment.
            </p>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem 6rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {grouped.map(([serviceName, items]) => (
              <div key={serviceName}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Service · {items.length} solution{items.length > 1 ? 's' : ''}
                </div>
                <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.025em' }}>
                  {serviceName}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
                  {items.map((s) => (
                    <Link key={s.slug} href={`/en/solutions/${s.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                      <article style={{ padding: '2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderTop: '3px solid var(--terra)', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem', transition: 'transform 0.2s, box-shadow 0.2s' }} className="service-card">
                        <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--dark)', margin: 0, lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                          {s.title}
                        </h3>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6, flex: 1 }}>
                          {s.intro.length > 200 ? s.intro.slice(0, 200).trim() + '…' : s.intro}
                        </p>
                        <div style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700, marginTop: '0.5rem' }}>
                          See the solution →
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
              Your establishment <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>not listed?</em>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              We also handle shops, schools, public bodies and converted farm buildings. Tell us about your project and we&apos;ll get back to you within 48 hours.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/en/contact" variant="primary" size="lg">Discuss my project</Button>
              <Button href="/en/secteurs" variant="outline" size="md">Browse by sector</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
