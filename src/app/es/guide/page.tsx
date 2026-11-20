import Link from 'next/link'
import type { Metadata } from 'next'
import { esGuides } from '../_lib/guides'
import { BreadcrumbLD } from '@/components/BreadcrumbLD'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Guías de revestimientos de suelo | CB Sols, consejos profesionales en Charente-Maritime',
  description:
    'Todas las guías prácticas de CB Sols para elegir, colocar y cuidar sus revestimientos de suelo: moqueta profesional, vinílico, alfombras a medida. Los consejos de un artesano.',
  alternates: {
    canonical: 'https://cbsols.fr/es/guide',
    languages: { 'fr-FR': 'https://cbsols.fr/guide', en: 'https://cbsols.fr/en/guide', es: 'https://cbsols.fr/es/guide', },
  },
}

function groupByCategory(items: typeof esGuides) {
  const map = new Map<string, typeof esGuides>()
  for (const g of items) {
    if (!map.has(g.category)) map.set(g.category, [])
    map.get(g.category)!.push(g)
  }
  return Array.from(map.entries())
}

export default function GuidesHubPageEn() {
  const grouped = groupByCategory(esGuides)

  return (
    <>
      <BreadcrumbLD
        items={[
          { name: 'CB Sols', url: 'https://cbsols.fr/es' },
          { name: 'Guides', url: 'https://cbsols.fr/es/guide' },
        ]}
      />
      <div style={{ paddingTop: '72px' }}>
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(44, 85, 48, 0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '920px', margin: '0 auto', position: 'relative' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Biblioteca</div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              Guías y <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>consejos.</em>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--cream-muted)', lineHeight: 1.7, margin: 0, maxWidth: '640px' }}>
              Más de 28 años de proyectos resumidos en guías prácticas. Cómo elegir una moqueta profesional, comparar vinílico y baldosas en una cocina profesional, cuidar un suelo de uso intensivo para que dure. Sin rodeos.
            </p>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem 6rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {grouped.map(([category, items]) => (
              <div key={category}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem', fontWeight: 600 }}>
                  {category} · {items.length} guía{items.length > 1 ? 's' : ''}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
                  {items.map((g) => (
                    <Link key={g.slug} href={`/es/guide/${g.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                      <article style={{ padding: '2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem', transition: 'transform 0.2s, box-shadow 0.2s' }} className="service-card">
                        <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--dark)', margin: 0, lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                          {g.title}
                        </h2>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6, flex: 1 }}>
                          {g.intro.length > 180 ? g.intro.slice(0, 180).trim() + '…' : g.intro}
                        </p>
                        <div style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700, marginTop: '0.5rem' }}>
                          Leer la guía →
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
              ¿Una pregunta concreta sobre su proyecto?
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Las guías responden a lo general. Para su caso particular, pídanos un presupuesto gratuito o venga a la exposición.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/es/contact" variant="primary" size="lg">Presupuesto gratuito</Button>
              <Button href="/es/faq" variant="outline" size="md">Ver la FAQ</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
