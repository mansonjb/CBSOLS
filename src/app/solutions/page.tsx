import Link from 'next/link'
import type { Metadata } from 'next'
import { solutions } from '@/data/solutions'
import { BreadcrumbLD } from '@/components/BreadcrumbLD'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Solutions Revêtement de Sol | CB Sols, Hôtels, Restaurants, Bureaux',
  description:
    "Solutions revêtement de sol par usage : moquette hôtel, sol PVC restaurant, moquette bureau, EHPAD, douches PVC. Choisissez par votre type d'établissement.",
  alternates: { canonical: 'https://cbsols.fr/solutions' },
}

function groupByService(items: typeof solutions) {
  const map = new Map<string, typeof solutions>()
  for (const s of items) {
    if (!map.has(s.serviceName)) map.set(s.serviceName, [])
    map.get(s.serviceName)!.push(s)
  }
  return Array.from(map.entries())
}

export default function SolutionsHubPage() {
  const grouped = groupByService(solutions)

  return (
    <>
      <BreadcrumbLD
        items={[
          { name: 'CB Sols', url: 'https://cbsols.fr' },
          { name: 'Solutions', url: 'https://cbsols.fr/solutions' },
        ]}
      />
      <div style={{ paddingTop: '72px' }}>
        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(196,113,74,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '920px', margin: '0 auto', position: 'relative' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Solutions par usage</div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              Le bon sol<br />
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>pour le bon usage.</em>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--cream-muted)', lineHeight: 1.7, margin: 0, maxWidth: '640px' }}>
              Une moquette hôtelière n&apos;a rien à voir avec une moquette de bureau. Un sol PVC de cuisine pro répond à des normes que ne couvre pas un sol résidentiel. Voici nos solutions, organisées par votre type d&apos;établissement.
            </p>
          </div>
        </section>

        {/* Grouped solutions */}
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
                    <Link key={s.slug} href={`/solutions/${s.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                      <article style={{ padding: '2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderTop: '3px solid var(--terra)', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem', transition: 'transform 0.2s, box-shadow 0.2s' }} className="service-card">
                        <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--dark)', margin: 0, lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                          {s.title}
                        </h3>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6, flex: 1 }}>
                          {s.intro.length > 200 ? s.intro.slice(0, 200).trim() + '…' : s.intro}
                        </p>
                        <div style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700, marginTop: '0.5rem' }}>
                          Voir la solution →
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              Votre établissement <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>n&apos;est pas listé ?</em>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Nous traitons aussi les commerces, écoles, collectivités et bâtiments agricoles reconvertis. Décrivez-nous votre projet, on revient vers vous sous 48 h.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/contact" variant="primary" size="lg">Discuter de mon projet</Button>
              <Button href="/secteurs" variant="outline" size="md">Voir par secteur</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
