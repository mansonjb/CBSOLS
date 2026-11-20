import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { enServices, getEnServiceBySlug } from '../_data'
import { company } from '@/data/company'
import { BreadcrumbLD } from '@/components/BreadcrumbLD'
import { Button } from '@/components/Button'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return enServices.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getEnServiceBySlug(slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://cbsols.fr/en/services/${slug}`,
      languages: {
        'fr-FR': `https://cbsols.fr/services/${slug}`, en: `https://cbsols.fr/en/services/${slug}`, es: `https://cbsols.fr/es/services/${slug}`,
      },
    },
  }
}

export default async function ServicePageEn({ params }: Props) {
  const { slug } = await params
  const service = getEnServiceBySlug(slug)
  if (!service) notFound()

  const serviceIndex = enServices.findIndex((s) => s.slug === slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    serviceType: service.name,
    description: service.longDescription,
    url: `https://cbsols.fr/en/services/${slug}`,
    category: service.shortName,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://cbsols.fr/#localbusiness',
      name: company.legalName,
      telephone: company.phoneClean,
      email: company.email,
      url: 'https://cbsols.fr',
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.address.street,
        addressLocality: company.address.city,
        postalCode: company.address.zip,
        addressCountry: 'FR',
      },
    },
    areaServed: [
      { '@type': 'City', name: 'La Rochelle' },
      { '@type': 'AdministrativeArea', name: 'Île de Ré' },
      { '@type': 'AdministrativeArea', name: "Île d'Oléron" },
      { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
    ],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'EUR' },
      url: 'https://cbsols.fr/en/contact',
    },
  }

  const faqJsonLd = service.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
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
          { name: 'Services', url: 'https://cbsols.fr/en/services' },
          { name: service.name, url: `https://cbsols.fr/en/services/${slug}` },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      <div style={{ paddingTop: '72px' }}>
        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(44, 85, 48, 0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem' }}>
              <Link href="/en/services" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>Services</Link>
              <span style={{ color: 'var(--border-hover)' }}>→</span>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>{service.name}</span>
            </div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>
              Service 0{serviceIndex + 1}
            </div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              {service.name}
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', maxWidth: '600px', lineHeight: 1.7, margin: '0 0 2.5rem' }}>
              {service.longDescription}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/en/contact" variant="primary" size="md">Request a quote</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-block', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'none', borderRadius: '999px' }}>
                {company.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Benefits + Use cases */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Benefits</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {service.benefits.map((b) => (
                    <div key={b} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '20px', height: '20px', border: '1px solid var(--terra)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px' }}>
                        <div style={{ width: '8px', height: '1px', backgroundColor: 'var(--terra)' }} />
                        <div style={{ width: '1px', height: '8px', backgroundColor: 'var(--terra)', position: 'absolute' }} />
                      </div>
                      <span style={{ fontSize: '0.85rem', color: 'var(--cream-muted)', lineHeight: 1.5 }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Applications</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {service.useCases.map((uc) => (
                    <div key={uc} style={{ padding: '1rem 1.25rem', border: '1px solid var(--border)', fontSize: '0.85rem', color: 'var(--cream-muted)' }}>{uc}</div>
                  ))}
                </div>
              </div>
              <div>
                {service.brands.length > 0 && (
                  <>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Partner brands</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {service.brands.map((b) => (
                        <span key={b} style={{ padding: '0.5rem 1rem', border: '1px solid var(--border)', fontSize: '0.75rem', color: 'var(--cream-muted)', letterSpacing: '0.05em' }}>{b}</span>
                      ))}
                    </div>
                  </>
                )}
                {service.hasShowroom && (
                  <div style={{ marginTop: service.brands.length > 0 ? '2rem' : 0, padding: '1.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem' }}>Showroom</div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--cream-muted)', margin: '0 0 1rem', lineHeight: 1.6 }}>
                      Come and see all our {service.shortName.toLowerCase()} samples at our Villedoux showroom.
                    </p>
                    <Link href="/en/showroom" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', textDecoration: 'none' }}>
                      Book an appointment →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Areas */}
        <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>{service.geoVerb} …</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em' }}>
              We work across the whole of Charente-Maritime (17)
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.75, maxWidth: '720px', margin: '0 0 2rem' }}>
              From our base near La Rochelle we cover La Rochelle, Île de Ré, Île d&apos;Oléron, Rochefort, Royan, Saintes and the surrounding towns, for homes, businesses and public bodies alike.
            </p>
            <Link href="/en/zones" style={{ display: 'inline-block', padding: '0.5rem 1rem', fontSize: '0.78rem', color: 'var(--terra)', textDecoration: 'none', border: '1px solid var(--terra)' }}>
              All areas we cover →
            </Link>
          </div>
        </section>

        {/* FAQ */}
        {service.faqs.length > 0 && (
          <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Frequently asked questions</div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
                About {service.aboutLabel}, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>clear answers.</em>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {service.faqs.map((f) => (
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

        {/* Other services */}
        <section style={{ padding: '4rem 2rem 6rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '2rem' }}>Other services</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {enServices.filter((s) => s.slug !== slug).map((s) => (
                <Link key={s.slug} href={`/en/services/${s.slug}`} style={{ textDecoration: 'none', display: 'inline-block', padding: '0.625rem 1.25rem', border: '1px solid var(--border-mid)', fontSize: '0.78rem', color: 'var(--dark-2)', transition: 'border-color 0.2s, color 0.2s' }}>
                  {s.shortName}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
