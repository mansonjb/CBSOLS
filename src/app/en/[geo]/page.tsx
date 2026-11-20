import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { enCities, getEnCityBySlug, enCityZoneLabels } from '../_lib/cities'
import { enServices, getEnServiceBySlug } from '../services/_data'
import { company } from '@/data/company'
import { getEnZoneContent } from '../_lib/zones'
import { BreadcrumbLD } from '@/components/BreadcrumbLD'
import { Button } from '@/components/Button'

interface Props {
  params: Promise<{ geo: string }>
}

// EN geo pages: index only the pages reactivated on the FR side (anti thin-content),
// the rest stay noindex, follow, mirroring the FR strategy.
const REACTIVATED_GEO = new Set([
  'revetement-sol-la-rochelle',
  'sol-pvc-les-la-rochelle',
  'pose-moquette-la-rochelle',
  'sol-pvc-lames-dalles-la-rochelle',
  'revetement-sol-saintes',
  'revetement-sol-royan',
  'revetement-sol-rochefort',
  'revetement-sol-surgeres',
  'revetement-sol-saint-jean-dangely',
  'revetement-sol-saint-martin-de-re',
  'pose-moquette-saint-martin-de-re',
  'revetement-sol-le-bois-plage-en-re',
  'sol-pvc-les-saint-jean-dangely',
  'sol-pvc-les-saujon',
  'sol-pvc-lames-dalles-perigny',
  'revetement-sol-meschers-sur-gironde',
  'revetement-sol-chatelaillon-plage',
  'sol-pvc-les-chatelaillon-plage',
  'revetement-sol-perigny',
  'revetement-sol-cognac',
])

function parseGeoSlug(geo: string): { service: ReturnType<typeof getEnServiceBySlug>; city: ReturnType<typeof getEnCityBySlug> } | null {
  for (const service of enServices) {
    if (geo.startsWith(service.slug + '-')) {
      const citySlug = geo.slice(service.slug.length + 1)
      const city = getEnCityBySlug(citySlug)
      if (city) return { service, city }
    }
  }
  return null
}

function ctaLabel(serviceName: string): string {
  return serviceName.toLowerCase()
}

export async function generateStaticParams() {
  const params: { geo: string }[] = []
  for (const service of enServices) {
    for (const city of enCities) {
      params.push({ geo: `${service.slug}-${city.slug}` })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { geo } = await params
  const parsed = parseGeoSlug(geo)
  if (!parsed || !parsed.service || !parsed.city) return {}
  const { service, city } = parsed
  return {
    title: `${service.name} ${city.name} | Free Quote Within 48h`,
    description: `Professional ${ctaLabel(service.name)} in ${city.name} and the surrounding area. CB Sols: specialist craftsman for over 28 years, free quote.`,
    alternates: {
      canonical: `https://cbsols.fr/en/${geo}`,
      languages: { 'fr-FR': `https://cbsols.fr/${geo}`, en: `https://cbsols.fr/en/${geo}`, es: `https://cbsols.fr/es/${geo}`, },
    },
    robots: { index: REACTIVATED_GEO.has(geo), follow: true },
  }
}

export default async function GeoPageEn({ params }: Props) {
  const { geo } = await params
  const parsed = parseGeoSlug(geo)
  if (!parsed || !parsed.service || !parsed.city) notFound()

  const { service, city } = parsed
  const zoneContent = getEnZoneContent(city.zone)
  const zoneLabel = enCityZoneLabels[city.zone]

  const otherServicesInCity = enServices.filter((s) => s.slug !== service.slug).slice(0, 5)
  const nearbyCities = enCities.filter((c) => c.slug !== city.slug && c.zone === city.zone).slice(0, 6)
  const highlights = zoneContent.projectHighlights.slice(0, 2)
  const label = ctaLabel(service.name)

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} ${city.name}`,
    description: `Professional ${label} in ${city.name} and the surrounding area.`,
    serviceType: service.name,
    areaServed: { '@type': 'City', name: city.name, containedInPlace: { '@type': 'AdministrativeArea', name: 'Charente-Maritime' } },
    provider: {
      '@type': 'LocalBusiness',
      name: company.legalName,
      telephone: company.phoneClean,
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.address.street,
        addressLocality: company.address.city,
        postalCode: company.address.zip,
        addressCountry: 'FR',
      },
      geo: { '@type': 'GeoCoordinates', latitude: company.geo.lat, longitude: company.geo.lng },
    },
  }

  const showroomDistance = city.zone === 'ile-de-re' ? '30 minutes' : city.zone === 'la-rochelle' ? '10-15 minutes' : '30-45 minutes'

  const faqItems = [
    {
      q: `Does CB Sols carry out ${label} in ${city.name}?`,
      a: `Yes, CB Sols regularly carries out ${label} in ${city.name}, ${city.description}. Our team, based in Villedoux, covers the whole of ${zoneLabel}.`,
    },
    {
      q: `What does ${label} cost in ${city.name}?`,
      a: `The price of ${label} in ${city.name} depends on the area, the material chosen and the specifics of the project. CB Sols provides free, detailed quotes within 48 hours.`,
    },
    {
      q: `Which materials do you offer for ${label} in ${city.name}?`,
      a: `CB Sols supplies the finest brands: ${service.brands.join(', ')}. For your project in ${city.name}, our experts will advise the material best suited to your use and budget.`,
    },
    {
      q: `Do you have a showroom near ${city.name}?`,
      a: `Our showroom is in Villedoux (17230), ${showroomDistance} from ${city.name}. By appointment, you will find over 500 samples there.`,
    },
    { q: zoneContent.zoneFaq[0].q, a: zoneContent.zoneFaq[0].a },
  ]

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
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
          { name: service.shortName, url: `https://cbsols.fr/en/services/${service.slug}` },
          { name: city.name, url: `https://cbsols.fr/en/revetement-sol-${city.slug}` },
          { name: `${service.shortName} ${city.name}`, url: `https://cbsols.fr/en/${geo}` },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div style={{ paddingTop: '72px' }}>

        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(44, 85, 48, 0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>

            <nav aria-label="Breadcrumb" style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>CB Sols</Link>
              <span style={{ color: 'var(--border-hover)' }}>/</span>
              <Link href={`/en/services/${service.slug}`} style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>{service.shortName}</Link>
              <span style={{ color: 'var(--border-hover)' }}>/</span>
              <Link href={`/en/revetement-sol-${city.slug}`} style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>{city.name}</Link>
            </nav>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', padding: '0.35rem 0.9rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(44, 85, 48, 0.08)', borderRadius: '999px' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'inline-block' }} />
              <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 600 }}>
                Specialist craftsman · {zoneLabel}
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 5vw, 4.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              {service.geoVerb}<br />
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>{city.name}.</em>
            </h1>

            <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', maxWidth: '680px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              CB Sols, specialist craftsman since 1998, carries out {label} in {city.name} and across {zoneLabel}.
              {' '}{service.longDescription.split('.')[0]}. Free quote within 48 hours.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href={`/en/contact?city=${encodeURIComponent(city.name)}`} variant="primary" size="md">
                Free quote in {city.name}
              </Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'none', borderRadius: '999px', fontWeight: 500 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.46 2 2 0 0 1 3.62 1.27h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.72 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 5.9 5.9l.99-1.04a2 2 0 0 1 2.11-.45c.9.36 1.85.59 2.81.72a2 2 0 0 1 1.72 2.02z"/>
                </svg>
                {company.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>
                  Why CB Sols
                </div>
                <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                  {service.shortName} in {city.name}, by a hands-on craftsman
                </h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--cream-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  {service.longDescription}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {service.benefits.map((b) => (
                    <div key={b} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--terra)', marginTop: '0.55rem', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.85rem', color: 'var(--dark-2)', lineHeight: 1.6 }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>Applications in {city.name}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {service.useCases.map((uc) => (
                    <div key={uc} style={{ padding: '1rem 1.25rem', border: '1px solid var(--border)', fontSize: '0.85rem', color: 'var(--dark-2)', backgroundColor: 'var(--bg-card)' }}>{uc}</div>
                  ))}
                </div>
                {service.brands.length > 0 && (
                  <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)' }}>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Available brands</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                      {service.brands.map((b) => (
                        <span key={b} style={{ padding: '0.35rem 0.75rem', border: '1px solid var(--border)', fontSize: '0.72rem', color: 'var(--dark-2)', borderRadius: '999px' }}>{b}</span>
                      ))}
                    </div>
                    <Link href="/en/showroom" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)', textDecoration: 'none', fontWeight: 600 }}>
                      See the samples at the showroom →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Local context */}
        {city.localContext && (
          <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)' }}>
            <div style={{ maxWidth: '860px', margin: '0 auto' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>
                Local context
              </div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                {service.name} in {city.name}: what we see on the ground
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--dark-2)', lineHeight: 1.85, marginBottom: city.localFootnote ? '1.75rem' : 0 }}>
                {city.localContext}
              </p>
              {city.localFootnote && (
                <div style={{ padding: '1.25rem 1.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.4rem', fontWeight: 700 }}>
                    Technical note
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--dark)', lineHeight: 1.65, margin: 0 }}>
                    {city.localFootnote}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Zone specifics */}
        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Local expertise · {zoneLabel}</div>
                <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                  {zoneContent.specificsTitle}
                </h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--cream-muted)', lineHeight: 1.8 }}>
                  {zoneContent.specificsBody}
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {zoneContent.challenges.slice(0, 3).map((item) => (
                  <div key={item.label} style={{ padding: '1.25rem 1.5rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg)', borderLeft: '3px solid var(--terra)' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.4rem', fontFamily: 'var(--font-sans)' }}>{item.label}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mini-portfolio */}
        <section style={{ padding: '4rem 2rem', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Projects in {zoneLabel}</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Recent projects in the area
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
              {highlights.map((project) => (
                <div key={project.title} style={{ backgroundColor: 'var(--project-card-bg)', border: '1px solid var(--border)', position: 'relative', overflow: 'hidden', minHeight: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.img} alt={project.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,12,10,0.92) 0%, rgba(13,12,10,0.2) 55%, transparent 100%)' }} />
                  <div style={{ padding: '1.75rem', position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra-on-dark)', marginBottom: '0.5rem', fontWeight: 700 }}>{project.sector} · {project.year}</div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--text-on-dark)', margin: '0 0 0.5rem' }}>{project.title}</h3>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-on-dark-muted)', margin: 0, lineHeight: 1.55 }}>{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2rem' }}>
              <Link href="/en/realisations" style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--terra)', textDecoration: 'none', fontWeight: 600 }}>
                See all projects →
              </Link>
            </div>
          </div>
        </section>

        {/* Zone testimonial */}
        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra-on-dark)', marginBottom: '1.5rem', fontWeight: 700 }}>Client feedback</div>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', color: 'var(--text-on-dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &ldquo;{zoneContent.testimonial.quote}&rdquo;
            </p>
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>{zoneContent.testimonial.author}</div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>FAQ</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              {service.shortName} in {city.name}, frequently asked questions
            </h2>
            {faqItems.map((item, i) => (
              <details key={i} style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
                <summary style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--dark)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <span>{item.q}</span>
                  <span style={{ color: 'var(--terra)', fontSize: '1.25rem', lineHeight: 1, flexShrink: 0 }}>+</span>
                </summary>
                <div style={{ fontSize: '0.88rem', color: 'var(--cream-muted)', lineHeight: 1.75, marginTop: '1rem' }}>{item.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* Internal linking */}
        <section style={{ padding: '4rem 2rem 6rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem', fontWeight: 600 }}>
                  Other services in {city.name}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <Link href={`/en/revetement-sol-${city.slug}`} style={{ fontSize: '0.85rem', color: 'var(--dark)', textDecoration: 'none', padding: '0.75rem 0', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', fontWeight: 500 }}>
                    <span>All floor coverings in {city.name}</span>
                    <span style={{ color: 'var(--terra)' }}>→</span>
                  </Link>
                  {otherServicesInCity.map((s) => (
                    <Link key={s.slug} href={`/en/${s.slug}-${city.slug}`} style={{ fontSize: '0.82rem', color: 'var(--cream-muted)', textDecoration: 'none', padding: '0.75rem 0', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
                      <span>{s.geoVerb} {city.name}</span>
                      <span style={{ color: 'var(--terra)' }}>→</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem', fontWeight: 600 }}>
                  {service.geoVerb.replace(/ in$/, '')}, other towns
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {nearbyCities.map((c) => (
                    <Link key={c.slug} href={`/en/${service.slug}-${c.slug}`} style={{ display: 'inline-block', padding: '0.55rem 1rem', fontSize: '0.78rem', color: 'var(--dark)', textDecoration: 'none', border: '1px solid var(--border-strong)', borderRadius: '999px', backgroundColor: 'var(--bg)' }}>
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
