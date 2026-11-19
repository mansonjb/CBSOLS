import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { enSectors, getEnSectorBySlug } from '../_data'
import { getEnServiceBySlug } from '../../services/_data'
import { company } from '@/data/company'
import { BreadcrumbLD } from '@/components/BreadcrumbLD'
import { Button } from '@/components/Button'
import { VideoTestimonial } from '@/components/VideoTestimonial'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return enSectors.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const sector = getEnSectorBySlug(slug)
  if (!sector) return {}
  return {
    title: sector.metaTitle,
    description: sector.metaDescription,
    alternates: {
      canonical: `https://cbsols.fr/en/secteurs/${slug}`,
      languages: {
        'fr-FR': `https://cbsols.fr/secteurs/${slug}`,
        en: `https://cbsols.fr/en/secteurs/${slug}`,
      },
    },
  }
}

export default async function SecteurPageEn({ params }: Props) {
  const { slug } = await params
  const sector = getEnSectorBySlug(slug)
  if (!sector) notFound()

  const recommendedServicesData = sector.recommendedServices
    .map((s) => getEnServiceBySlug(s))
    .filter(Boolean)

  const faqJsonLd = sector.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: sector.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } : null

  return (
    <>
    <BreadcrumbLD
      items={[
        { name: 'CB Sols', url: 'https://cbsols.fr/en' },
        { name: 'For businesses', url: 'https://cbsols.fr/en/secteurs' },
        { name: sector.name, url: `https://cbsols.fr/en/secteurs/${slug}` },
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
            <Link href="/en/secteurs" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>For businesses</Link>
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
            <Button href="/en/contact" variant="primary" size="md">Professional quote</Button>
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
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Your constraints</div>
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
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our answers</div>
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

      {/* Recommended services */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '2rem' }}>Recommended services for {sector.name}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {recommendedServicesData.map((service) => service && (
              <Link key={service.slug} href={`/en/services/${service.slug}`} style={{ textDecoration: 'none' }}>
                <div className="service-card" style={{ backgroundColor: 'var(--bg-alt)', padding: '2rem', border: '1px solid var(--border)', transition: 'background-color 0.2s', height: '100%' }}>
                  <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--dark)', margin: '0 0 0.75rem' }}>{service.name}</h3>
                  <p style={{ fontSize: '0.78rem', color: 'var(--muted)', margin: '0 0 1.25rem', lineHeight: 1.6 }}>{service.description}</p>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--terra)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>Explore →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video testimonial (hotels) */}
      {sector.slug === 'hotellerie' && (
        <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700, marginBottom: '1rem', textAlign: 'center' }}>
              A hotelier&rsquo;s view
            </div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.025em', lineHeight: 1.15, textAlign: 'center' }}>
              Cédrick Poucineau, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>Cosy Hotels.</em>
            </h2>
            <VideoTestimonial
              vimeoId="1201720983"
              name="Cédrick Poucineau"
              role="Operations Director"
              company="Cosy Hotels Group"
              quote="In hospitality, the floor plays a direct part in the comfort our guests feel. The work CB Sols did let us transform our bedrooms for the long term."
              projectInfo="Bedrooms and common areas"
            />
          </div>
        </section>
      )}

      {/* FAQ */}
      {sector.faqs.length > 0 && (
        <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Frequently asked questions</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
              What professionals ask us, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>straight answers.</em>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {sector.faqs.map((f) => (
                <details key={f.question} style={{ border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', padding: '1.25rem 1.5rem' }}>
                  <summary style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--dark)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    <span>{f.question}</span>
                    <span style={{ color: 'var(--terra)', fontSize: '1.2rem', flexShrink: 0 }}>+</span>
                  </summary>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.75, margin: '1rem 0 0' }}>{f.answer}</p>
                </details>
              ))}
            </div>
            <div style={{ marginTop: '2rem' }}>
              <Link href="/en/faq" style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', textDecoration: 'none' }}>
                All frequently asked questions →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* References */}
      <section style={{ padding: '4rem 2rem 6rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>A few references</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {sector.referencesExamples.map((ref) => (
              <div key={ref} style={{ padding: '1.5rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--terra)', marginBottom: '0.875rem' }} />
                <p style={{ fontSize: '0.85rem', color: 'var(--cream-muted)', margin: 0, lineHeight: 1.6 }}>{ref}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button href="/en/contact" variant="primary" size="md">Get a professional quote</Button>
            <Button href="/en/secteurs" variant="outline" size="md">All sectors</Button>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
