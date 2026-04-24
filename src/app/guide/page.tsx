import Link from 'next/link'
import type { Metadata } from 'next'
import { guides } from '@/data/guides'
import { BreadcrumbLD } from '@/components/BreadcrumbLD'

export const metadata: Metadata = {
  title: 'Guides Revêtement de Sol | CB Sols, Conseils Pro Charente-Maritime',
  description:
    "Tous les guides pratiques de CB Sols pour bien choisir, poser et entretenir vos revêtements de sol : moquette professionnelle, sol PVC, tapis sur mesure. Conseils d'artisan.",
  alternates: { canonical: 'https://cbsols.fr/guide' },
}

// Group guides by category for clearer hub navigation
function groupByCategory(items: typeof guides) {
  const map = new Map<string, typeof guides>()
  for (const g of items) {
    if (!map.has(g.category)) map.set(g.category, [])
    map.get(g.category)!.push(g)
  }
  return Array.from(map.entries())
}

export default function GuidesHubPage() {
  const grouped = groupByCategory(guides)

  return (
    <>
      <BreadcrumbLD
        items={[
          { name: 'CB Sols', url: 'https://cbsols.fr' },
          { name: 'Guides', url: 'https://cbsols.fr/guide' },
        ]}
      />
      <div style={{ paddingTop: '72px' }}>
        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(196,113,74,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '920px', margin: '0 auto', position: 'relative' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Bibliothèque</div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              Guides &amp; <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>conseils.</em>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--cream-muted)', lineHeight: 1.7, margin: 0, maxWidth: '640px' }}>
              25 ans de chantiers résumés en guides pratiques. Comment choisir une moquette professionnelle, comparer sol PVC et carrelage en cuisine pro, entretenir un sol contrat pour qu&apos;il dure. Sans baratin.
            </p>
          </div>
        </section>

        {/* Grouped guides */}
        <section style={{ padding: '5rem 2rem 6rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {grouped.map(([category, items]) => (
              <div key={category}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem', fontWeight: 600 }}>
                  {category} · {items.length} guide{items.length > 1 ? 's' : ''}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
                  {items.map((g) => (
                    <Link key={g.slug} href={`/guide/${g.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                      <article style={{ padding: '2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem', transition: 'transform 0.2s, box-shadow 0.2s' }} className="service-card">
                        <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--dark)', margin: 0, lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                          {g.title}
                        </h2>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6, flex: 1 }}>
                          {g.intro.length > 180 ? g.intro.slice(0, 180).trim() + '…' : g.intro}
                        </p>
                        <div style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700, marginTop: '0.5rem' }}>
                          Lire le guide →
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
              Une question précise sur votre projet ?
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Les guides répondent au général. Pour votre cas particulier, demandez-nous un devis gratuit ou venez en showroom.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 700, borderRadius: '999px' }}>
                Devis gratuit
              </Link>
              <Link href="/faq" style={{ display: 'inline-block', padding: '0.95rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '999px', fontWeight: 600 }}>
                Voir la FAQ
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
