import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { sectors, getSectorBySlug } from '@/data/sectors'
import { getServiceBySlug } from '@/data/services'
import { company } from '@/data/company'
import { getFaqsForSector } from '@/data/faq-matchers'
import { BreadcrumbLD } from '@/components/BreadcrumbLD'
import { Button } from '@/components/Button'
import { VideoTestimonial } from '@/components/VideoTestimonial'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const sector = getSectorBySlug(slug)
  if (!sector) return {}
  return {
    title: `Revêtement Sol ${sector.name}`,
    description: `CB Sols, partenaire revêtement de sol pour ${sector.name.toLowerCase()} en Charente-Maritime. ${sector.tagline}. Devis gratuit, intervention rapide.`,
    alternates: { canonical: `https://cbsols.fr/secteurs/${slug}` },
  }
}

export default async function SecteurPage({ params }: Props) {
  const { slug } = await params
  const sector = getSectorBySlug(slug)
  if (!sector) notFound()

  const recommendedServicesData = sector.recommendedServices
    .map((s) => getServiceBySlug(s))
    .filter(Boolean)

  const contextualFaqs = getFaqsForSector(slug, 4)
  const faqJsonLd = contextualFaqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: contextualFaqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.shortAnswer },
    })),
  } : null

  return (
    <>
    <BreadcrumbLD
      items={[
        { name: 'CB Sols', url: 'https://cbsols.fr' },
        { name: 'Professionnels', url: 'https://cbsols.fr/secteurs' },
        { name: sector.name, url: `https://cbsols.fr/secteurs/${slug}` },
      ]}
    />
    {faqJsonLd && (
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    )}
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(44, 85, 48, 0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem' }}>
            <Link href="/secteurs" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>Professionnels</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>{sector.name}</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '1rem 0 0.75rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
            {sector.name}
          </h1>
          <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--terra)', margin: '0 0 1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 300 }}>
            {sector.tagline}
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', maxWidth: '600px', lineHeight: 1.7, margin: '0 0 2.5rem' }}>
            {sector.description}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button href="/contact" variant="primary" size="md">Devis professionnel</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-block', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'none', borderRadius: '999px' }}>
              {company.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Challenges + Solutions */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Vos contraintes</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {sector.challenges.map((c, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--terra)', opacity: 0.5, lineHeight: 1, flexShrink: 0, fontWeight: 800 }}>0{i + 1}</div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--cream-muted)', lineHeight: 1.5 }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nos réponses</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {sector.solutions.map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '24px', height: '24px', backgroundColor: 'rgba(44, 85, 48, 0.15)', border: '1px solid rgba(44, 85, 48, 0.3)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--terra)', borderRadius: '50%' }} />
                    </div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--cream)', lineHeight: 1.6 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services recommandés */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '2rem' }}>Services recommandés pour {sector.name}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {recommendedServicesData.map((service) => service && (
              <Link key={service.slug} href={`/services/${service.slug}`} style={{ textDecoration: 'none' }}>
                <div className="service-card" style={{ backgroundColor: 'var(--bg-alt)', padding: '2rem', border: '1px solid var(--border)', transition: 'background-color 0.2s', height: '100%' }}>
                  <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--dark)', margin: '0 0 0.75rem' }}>{service.name}</h3>
                  <p style={{ fontSize: '0.78rem', color: 'var(--muted)', margin: '0 0 1.25rem', lineHeight: 1.6 }}>{service.description}</p>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--terra)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>Découvrir →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignage vidéo (hôtellerie) */}
      {sector.slug === 'hotellerie' && (
        <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700, marginBottom: '1rem', textAlign: 'center' }}>
              Un hôtelier en parle
            </div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.025em', lineHeight: 1.15, textAlign: 'center' }}>
              Cédrick Poucineau, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>Cozy Hotels.</em>
            </h2>
            <VideoTestimonial
              vimeoId="1201720983"
              name="Cédrick Poucineau"
              role="Directeur des Opérations"
              company="Groupe Cozy Hotels"
              quote="En hôtellerie, le sol participe directement au confort ressenti par nos clients. Le travail de CB Sols nous a permis de transformer nos chambres durablement."
              projectInfo="Chambres et espaces communs"
            />
          </div>
        </section>
      )}

      {/* FAQ contextuelles */}
      {contextualFaqs.length > 0 && (
        <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Questions fréquentes</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
              Ce que les pros nous demandent, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>nos réponses directes.</em>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contextualFaqs.map((f) => (
                <details key={f.slug} style={{ border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', padding: '1.25rem 1.5rem' }}>
                  <summary style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--dark)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    <span>{f.question}</span>
                    <span style={{ color: 'var(--terra)', fontSize: '1.2rem', flexShrink: 0 }}>+</span>
                  </summary>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.75, margin: '1rem 0 0.75rem' }}>{f.shortAnswer}</p>
                  <Link href={`/faq/${f.slug}`} style={{ fontSize: '0.72rem', letterSpacing: '0.08em', color: 'var(--terra)', textDecoration: 'none', fontWeight: 500 }}>
                    Voir la réponse complète →
                  </Link>
                </details>
              ))}
            </div>
            <div style={{ marginTop: '2rem' }}>
              <Link href="/faq" style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', textDecoration: 'none' }}>
                Toutes les questions fréquentes →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Références */}
      <section style={{ padding: '4rem 2rem 6rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Quelques références</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {sector.referencesExamples.map((ref) => (
              <div key={ref} style={{ padding: '1.5rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--terra)', marginBottom: '0.875rem' }} />
                <p style={{ fontSize: '0.85rem', color: 'var(--cream-muted)', margin: 0, lineHeight: 1.6 }}>{ref}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button href="/contact" variant="primary" size="md">Obtenir un devis pro</Button>
            <Button href="/secteurs" variant="outline" size="md">Tous les secteurs</Button>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
