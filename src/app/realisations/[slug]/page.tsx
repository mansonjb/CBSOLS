import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { realisations, getRealisationBySlug } from '@/data/realisations'
import { Button } from '@/components/Button'
import { BreadcrumbLD } from '@/components/BreadcrumbLD'
import { company } from '@/data/company'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return realisations.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const r = getRealisationBySlug(slug)
  if (!r) return {}
  return {
    title: `${r.title} | Réalisation CB Sols`,
    description: r.description,
    alternates: { canonical: `https://cbsols.fr/realisations/${slug}` },
    openGraph: {
      title: r.title,
      description: r.description,
      images: [{ url: r.image }],
    },
  }
}

export default async function RealisationDetailPage({ params }: Props) {
  const { slug } = await params
  const r = getRealisationBySlug(slug)
  if (!r) notFound()

  // Related : 3 autres projets du même secteur, sinon les plus récents
  const related = realisations
    .filter((x) => x.slug !== r.slug)
    .sort((a, b) => {
      const aMatch = a.sector === r.sector ? 1 : 0
      const bMatch = b.sector === r.sector ? 1 : 0
      if (aMatch !== bMatch) return bMatch - aMatch
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    .slice(0, 3)

  // Article JSON-LD pour SEO
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: r.title,
    description: r.description,
    image: `https://cbsols.fr${r.image}`,
    datePublished: r.date,
    dateModified: r.date,
    author: { '@type': 'Organization', name: company.legalName, url: 'https://cbsols.fr' },
    publisher: {
      '@type': 'Organization',
      name: company.legalName,
      logo: { '@type': 'ImageObject', url: 'https://cbsols.fr/images/logo-cbsols.png' },
    },
    locationCreated: { '@type': 'Place', name: r.location },
  }

  return (
    <>
      <BreadcrumbLD
        items={[
          { name: 'CB Sols', url: 'https://cbsols.fr' },
          { name: 'Réalisations', url: 'https://cbsols.fr/realisations' },
          { name: r.title, url: `https://cbsols.fr/realisations/${slug}` },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

      <article style={{ paddingTop: '72px' }}>
        {/* Hero image */}
        <section style={{ position: 'relative', height: 'clamp(380px, 60vh, 580px)', overflow: 'hidden' }}>
          <Image
            src={r.image}
            alt={r.title}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(13,12,10,0.35) 0%, rgba(13,12,10,0.15) 50%, rgba(13,12,10,0.85) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end' }}>
            <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '3rem 2rem 2.5rem' }}>
              <nav aria-label="Fil d'ariane" style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)', textDecoration: 'none' }}>CB Sols</Link>
                <span style={{ color: 'var(--text-on-dark-faint)' }}>/</span>
                <Link href="/realisations" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)', textDecoration: 'none' }}>Réalisations</Link>
                <span style={{ color: 'var(--text-on-dark-faint)' }}>/</span>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Projet</span>
              </nav>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', padding: '0.35rem 0.9rem', backgroundColor: 'rgba(44,85,48,0.85)', borderRadius: '999px', backdropFilter: 'blur(4px)' }}>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#fff', fontWeight: 600 }}>
                  {r.sector} · {r.year}
                </span>
              </div>

              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, color: 'var(--text-on-dark)', margin: '0 0 0.75rem', letterSpacing: '-0.025em', lineHeight: 1.05, maxWidth: '900px' }}>
                {r.title}
              </h1>

              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', color: 'var(--terra)', margin: 0 }}>
                {r.type}
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: '2.5rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem 2rem' }}>
            <Stat label="Lieu" value={r.location} />
            <Stat label="Année" value={r.year} />
            {r.client && <Stat label="Client" value={r.client} />}
            <Stat label="Type de prestation" value={r.type} />
            {r.surface && <Stat label="Surface" value={r.surface} />}
          </div>
        </section>

        {/* Body */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem', fontWeight: 600 }}>Le projet</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              Notre intervention
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {r.body.map((paragraph, i) => (
                <p key={i} style={{ fontSize: '1rem', color: 'var(--dark-2)', lineHeight: 1.8, margin: 0 }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              Un projet <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>similaire ?</em>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Décrivez-nous votre espace et vos contraintes. Nous étudions chaque projet sur mesure.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href={`/contact?from=realisation-${slug}`} variant="primary" size="lg">Demander un devis</Button>
              <Button href="/showroom" variant="outline" size="md">Visiter le showroom</Button>
            </div>
          </div>
        </section>

        {/* Related projects */}
        {related.length > 0 && (
          <section style={{ padding: '5rem 2rem 6rem', borderTop: '1px solid var(--border)' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Autres projets</div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.5vw, 1.85rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.02em' }}>
                À découvrir aussi
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/realisations/${p.slug}`}
                    style={{
                      backgroundColor: 'var(--project-card-bg)',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      position: 'relative',
                      overflow: 'hidden',
                      minHeight: '260px',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                    className="project-card-link"
                  >
                    <Image src={p.image} alt={p.title} fill style={{ objectFit: 'cover', opacity: 0.6 }} sizes="(max-width: 768px) 100vw, 33vw" />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,12,10,0.92) 0%, rgba(13,12,10,0.2) 55%, transparent 100%)' }} />
                    <div style={{ padding: '1.75rem', position: 'relative', zIndex: 1 }}>
                      <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>{p.sector} · {p.year}</div>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--text-on-dark)', margin: '0 0 0.5rem' }}>{p.title}</h3>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-on-dark-muted)', margin: 0, lineHeight: 1.55 }}>{p.description.length > 90 ? p.description.slice(0, 90) + '…' : p.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/realisations" style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--terra)', textDecoration: 'none', fontWeight: 600 }}>
                  Voir toutes les réalisations →
                </Link>
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>
        {label}
      </div>
      <div style={{ fontSize: '0.92rem', color: 'var(--dark)', fontWeight: 600, lineHeight: 1.3 }}>
        {value}
      </div>
    </div>
  )
}
