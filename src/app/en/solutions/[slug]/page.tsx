import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { enSolutions, getEnSolutionBySlug } from '../../_lib/solutions'
import { enCities } from '../../_lib/cities'
import { enFaqs } from '../../_lib/faqs'
import { company } from '@/data/company'
import { BreadcrumbLD } from '@/components/BreadcrumbLD'
import { Button } from '@/components/Button'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return enSolutions.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const solution = getEnSolutionBySlug(slug)
  if (!solution) return {}
  return {
    title: solution.metaTitle,
    description: solution.metaDescription,
    alternates: {
      canonical: `https://cbsols.fr/en/solutions/${slug}`,
      languages: {
        'fr-FR': `https://cbsols.fr/solutions/${slug}`,
        en: `https://cbsols.fr/en/solutions/${slug}`,
      },
    },
  }
}

export default async function SolutionPageEn({ params }: Props) {
  const { slug } = await params
  const solution = getEnSolutionBySlug(slug)
  if (!solution) notFound()

  const relatedCities = enCities.slice(0, 10)
  const relatedFaqs = enFaqs.filter((f) => f.relatedSolutions.includes(slug))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: solution.title,
    description: solution.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: company.legalName,
      telephone: company.phoneClean,
      address: {
        '@type': 'PostalAddress',
        addressLocality: company.address.city,
        postalCode: company.address.zip,
        addressCountry: 'FR',
      },
    },
    areaServed: { '@type': 'State', name: 'Charente-Maritime' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: solution.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <BreadcrumbLD
        items={[
          { name: 'CB Sols', url: 'https://cbsols.fr/en' },
          { name: 'Solutions', url: 'https://cbsols.fr/en/solutions' },
          { name: solution.title, url: `https://cbsols.fr/en/solutions/${slug}` },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ paddingTop: '72px' }}>

        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 40%, rgba(44, 85, 48, 0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
              <span style={{ color: 'var(--border-hover)' }}>→</span>
              <Link href={`/en/services/${solution.serviceSlug}`} style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>{solution.serviceName}</Link>
              <span style={{ color: 'var(--border-hover)' }}>→</span>
              <Link href={`/en/secteurs/${solution.sectorSlug}`} style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>{solution.sectorName}</Link>
            </div>

            <div style={{ display: 'flex', gap: '0.625rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.3rem 0.875rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(44, 85, 48, 0.08)', borderRadius: '999px' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'inline-block' }} />
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)' }}>{solution.serviceName}</span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.3rem 0.875rem', border: '1px solid var(--border)', borderRadius: '999px' }}>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)' }}>{solution.sectorName}</span>
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              {solution.headline}
            </h1>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', color: 'var(--terra)', margin: '0 0 1.5rem' }}>
              {solution.tagline}
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '640px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              {solution.intro}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/en/contact" variant="primary" size="md">Free quote</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-block', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'none', borderRadius: '999px' }}>
                {company.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Challenges + Approach */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Specific challenges</div>
                <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em' }}>
                  What this sector demands
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {solution.specificChallenges.map((challenge, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '22px', height: '22px', border: '1px solid var(--border-strong)', borderRadius: '4px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px' }}>
                        <span style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--muted)' }}>{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <span style={{ fontSize: '0.85rem', color: 'var(--dark-2)', lineHeight: 1.6 }}>{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach</div>
                <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em' }}>
                  How CB Sols answers
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {solution.ourApproach.map((step, i) => (
                    <div key={i} style={{ padding: '1.125rem 1.375rem', backgroundColor: i === 0 ? 'rgba(44, 85, 48, 0.06)' : 'var(--bg-card)', border: `1px solid ${i === 0 ? 'rgba(44, 85, 48, 0.2)' : 'var(--border)'}` }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--dark-2)', lineHeight: 1.6 }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Products */}
        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Recommended products</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
              The CB Sols selection{' '}
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>for {solution.sectorName.toLowerCase()}</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1px', backgroundColor: 'var(--border)' }}>
              {solution.keyProducts.map((product) => (
                <div key={product.name} style={{ backgroundColor: 'var(--bg-card)', padding: '2rem' }}>
                  <div style={{ width: '32px', height: '2px', backgroundColor: 'var(--terra)', marginBottom: '1.25rem' }} />
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>
                    {product.name}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>
                    {product.desc}
                  </p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Button href="/en/showroom" variant="outline" size="md">See all the samples at the showroom</Button>
            </div>
          </div>
        </section>

        {/* References */}
        {solution.references.length > 0 && (
          <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>References</div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.03em' }}>
                Completed projects
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {solution.references.map((ref, i) => (
                  <div key={i} style={{ padding: '1.25rem 0', borderBottom: '1px solid var(--border)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'rgba(44, 85, 48, 0.1)', border: '1px solid rgba(44, 85, 48, 0.2)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>
                      <span style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--terra)' }}>{i + 1}</span>
                    </div>
                    <span style={{ fontSize: '0.875rem', color: 'var(--dark-2)', lineHeight: 1.6 }}>{ref}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>FAQ</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
              Frequently asked questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {solution.faq.map((item, i) => (
                <div key={i} style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>{item.q}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7 }}>{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related FAQs */}
        {relatedFaqs.length > 0 && (
          <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Go further</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.75rem' }}>
                {relatedFaqs.map((f) => (
                  <Link key={f.slug} href={`/en/faq/${f.slug}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', padding: '1.25rem', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)', borderRadius: '4px', backgroundColor: 'var(--bg-card)' }}>
                    <div style={{ fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 600 }}>Question</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--dark)', lineHeight: 1.4 }}>{f.question}</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Geo links */}
        <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>
              {solution.serviceName} - local service
            </div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em' }}>
              We work across the whole of Charente-Maritime
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {relatedCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/en/${solution.serviceSlug}-${city.slug}`}
                  style={{ display: 'inline-block', padding: '0.5rem 1rem', fontSize: '0.78rem', color: 'var(--muted)', textDecoration: 'none', border: '1px solid var(--border)', borderRadius: '999px', transition: 'all 0.2s' }}
                >
                  {solution.serviceName} {city.name}
                </Link>
              ))}
              <Link href="/en/zones" style={{ display: 'inline-block', padding: '0.5rem 1rem', fontSize: '0.78rem', color: 'var(--terra)', textDecoration: 'none', border: '1px solid rgba(44, 85, 48, 0.3)', borderRadius: '999px' }}>
                All areas →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA bottom */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Your project</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
              Let&apos;s talk about your project
            </h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.1rem', color: 'var(--muted)', margin: '0 0 2.5rem' }}>
              Free quote within 48h, on-site visit included
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact" variant="primary" size="md">Request a quote</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-block', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'none', borderRadius: '999px' }}>
                {company.phone}
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
