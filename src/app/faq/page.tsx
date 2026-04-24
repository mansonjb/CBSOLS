import Link from 'next/link'
import type { Metadata } from 'next'
import { faqs } from '@/data/faqs'
import { BreadcrumbLD } from '@/components/BreadcrumbLD'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'FAQ Revêtement de Sol | CB Sols, Réponses d&apos;Artisan',
  description:
    'Toutes vos questions sur la moquette, le sol PVC et la pose : délais, prix, normes, techniques, différences. Réponses claires d&apos;un artisan certifié Qualibat.',
  alternates: { canonical: 'https://cbsols.fr/faq' },
}

function groupByCategory(items: typeof faqs) {
  const map = new Map<string, typeof faqs>()
  for (const f of items) {
    if (!map.has(f.category)) map.set(f.category, [])
    map.get(f.category)!.push(f)
  }
  return Array.from(map.entries())
}

export default function FaqHubPage() {
  const grouped = groupByCategory(faqs)

  // FAQPage JSON-LD agrège toutes les questions
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.shortAnswer },
    })),
  }

  return (
    <>
      <BreadcrumbLD
        items={[
          { name: 'CB Sols', url: 'https://cbsols.fr' },
          { name: 'FAQ', url: 'https://cbsols.fr/faq' },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div style={{ paddingTop: '72px' }}>
        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(196,113,74,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '920px', margin: '0 auto', position: 'relative' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Questions fréquentes</div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              FAQ <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>revêtement de sol.</em>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--cream-muted)', lineHeight: 1.7, margin: 0, maxWidth: '640px' }}>
              Les questions qui reviennent le plus souvent sur nos chantiers, classées par thème. Chaque réponse est rédigée à partir de cas réels traités en Charente-Maritime.
            </p>
          </div>
        </section>

        {/* Quick anchor nav */}
        <section style={{ padding: '2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginRight: '0.5rem' }}>Catégories :</span>
            {grouped.map(([cat]) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                style={{ padding: '0.45rem 1rem', fontSize: '0.72rem', color: 'var(--terra)', textDecoration: 'none', border: '1px solid rgba(196,113,74,0.3)', borderRadius: '999px', fontWeight: 600 }}
              >
                {cat}
              </a>
            ))}
          </div>
        </section>

        {/* Grouped FAQs */}
        <section style={{ padding: '5rem 2rem 6rem' }}>
          <div style={{ maxWidth: '880px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {grouped.map(([category, items]) => (
              <div
                key={category}
                id={category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                style={{ scrollMarginTop: '90px' }}
              >
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem', fontWeight: 600 }}>
                  {category}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {items.map((f) => (
                    <details key={f.slug} style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
                      <summary style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--dark)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                        <span>{f.question}</span>
                        <span style={{ color: 'var(--terra)', fontSize: '1.4rem', lineHeight: 1, flexShrink: 0 }}>+</span>
                      </summary>
                      <div style={{ fontSize: '0.9rem', color: 'var(--cream-muted)', lineHeight: 1.75, marginTop: '1rem' }}>
                        {f.shortAnswer}
                      </div>
                      <div style={{ marginTop: '1rem' }}>
                        <Link href={`/faq/${f.slug}`} style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--terra)', textDecoration: 'none', fontWeight: 700 }}>
                          Lire la réponse complète →
                        </Link>
                      </div>
                    </details>
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
              Vous ne trouvez pas votre réponse ?
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Posez-nous votre question directement, nous vous répondons sous 48 h.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/contact" variant="primary" size="lg">Poser ma question</Button>
              <Button href="/guide" variant="outline" size="md">Voir les guides</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
