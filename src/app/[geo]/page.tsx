import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { cities, getCityBySlug, cityZoneLabels } from '@/data/cities'
import { services, getServiceBySlug } from '@/data/services'
import { company } from '@/data/company'
import { getZoneContent } from '@/data/zones'
import { BreadcrumbLD } from '@/components/BreadcrumbLD'
import { SectorTestimonials } from '@/components/SectorTestimonials'
import { WhatsAppInlineCTA } from '@/components/WhatsAppInlineCTA'

interface Props {
  params: Promise<{ geo: string }>
}

function parseGeoSlug(geo: string): { service: ReturnType<typeof getServiceBySlug>; city: ReturnType<typeof getCityBySlug> } | null {
  for (const service of services) {
    if (geo.startsWith(service.slug + '-')) {
      const citySlug = geo.slice(service.slug.length + 1)
      const city = getCityBySlug(citySlug)
      if (city) return { service, city }
    }
  }
  return null
}

export async function generateStaticParams() {
  const params: { geo: string }[] = []
  for (const service of services) {
    for (const city of cities) {
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
    title: service.metaTitle(city.name),
    description: service.metaDescription(city.name),
    alternates: { canonical: `https://cbsols.fr/${geo}` },
  }
}

export default async function GeoPage({ params }: Props) {
  const { geo } = await params
  const parsed = parseGeoSlug(geo)
  if (!parsed || !parsed.service || !parsed.city) notFound()

  const { service, city } = parsed
  const zoneContent = getZoneContent(city.zone)

  const otherServicesInCity = services.filter((s) => s.slug !== service.slug).slice(0, 5)
  const nearbyCities = cities.filter((c) => c.slug !== city.slug && c.zone === city.zone).slice(0, 6)

  // Pick 1 zone-specific FAQ adapted for this service
  const zoneFaqItem = zoneContent.zoneFaq[0]

  // Pick 2 zone-specific project highlights (differs per service to avoid duplicate)
  const highlights = zoneContent.projectHighlights.slice(0, 2)

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} ${city.name}`,
    description: service.metaDescription(city.name),
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
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '47',
        bestRating: '5',
      },
    },
  }

  const faqItems = [
    {
      q: `CB Sols intervient-il pour la ${service.name.toLowerCase()} à ${city.name} ?`,
      a: `Oui, CB Sols intervient régulièrement pour la ${service.name.toLowerCase()} à ${city.name}, ${city.description}. Notre équipe basée à Villedoux couvre l'ensemble de la ${cityZoneLabels[city.zone]}.`,
    },
    {
      q: `Quel est le prix d'une ${service.name.toLowerCase()} à ${city.name} ?`,
      a: `Le tarif d'une ${service.name.toLowerCase()} à ${city.name} dépend de la surface, du matériau choisi et des spécificités du chantier. CB Sols réalise des devis gratuits et détaillés sous 48 h.`,
    },
    {
      q: `Quels matériaux proposez-vous pour la ${service.name.toLowerCase()} à ${city.name} ?`,
      a: `CB Sols distribue les meilleures marques : ${service.brands.join(', ')}. Pour votre projet à ${city.name}, nos experts vous conseilleront le matériau le mieux adapté à votre usage et à votre budget.`,
    },
    {
      q: `Proposez-vous un showroom près de ${city.name} ?`,
      a: `Notre showroom est situé à Villedoux (17230), à ${city.zone === 'ile-de-re' ? '30 minutes' : city.zone === 'la-rochelle' ? '10-15 minutes' : '30-45 minutes'} de ${city.name}. Sur rendez-vous, vous y découvrirez plus de 500 échantillons.`,
    },
    zoneFaqItem,
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
          { name: 'CB Sols', url: 'https://cbsols.fr' },
          { name: service.shortName, url: `https://cbsols.fr/services/${service.slug}` },
          { name: city.name, url: `https://cbsols.fr/revetement-sol-${city.slug}` },
          { name: `${service.shortName} ${city.name}`, url: `https://cbsols.fr/${geo}` },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div style={{ paddingTop: '72px' }}>

        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(196,113,74,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>

            {/* Breadcrumb */}
            <nav aria-label="Fil d'ariane" style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>CB Sols</Link>
              <span style={{ color: 'var(--border-hover)' }}>/</span>
              <Link href={`/services/${service.slug}`} style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>{service.shortName}</Link>
              <span style={{ color: 'var(--border-hover)' }}>/</span>
              <Link href={`/revetement-sol-${city.slug}`} style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>{city.name}</Link>
            </nav>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', padding: '0.35rem 0.9rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(196,113,74,0.08)', borderRadius: '999px' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'inline-block' }} />
              <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 600 }}>
                Artisan certifié Qualibat · {cityZoneLabels[city.zone]}
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 5vw, 4.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              {service.h1(city.name).split(' à ')[0]}<br />
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>à {city.name}.</em>
            </h1>

            <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', maxWidth: '680px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              CB Sols, artisan spécialiste depuis 1999, intervient pour la {service.name.toLowerCase()} à {city.name} et dans toute la {cityZoneLabels[city.zone]}.
              {service.longDescription.split('.')[0]}. Devis gratuit sous 48 h.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href={`/contact?city=${encodeURIComponent(city.name)}`} style={{ display: 'inline-block', padding: '0.95rem 2.25rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, borderRadius: '999px' }}>
                Devis gratuit à {city.name}
              </Link>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'none', borderRadius: '999px', fontWeight: 500 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.46 2 2 0 0 1 3.62 1.27h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.72 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 5.9 5.9l.99-1.04a2 2 0 0 1 2.11-.45c.9.36 1.85.59 2.81.72a2 2 0 0 1 1.72 2.02z"/>
                </svg>
                {company.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>
                  Pourquoi CB Sols
                </div>
                <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                  {service.shortName} à {city.name}, par un artisan du terrain
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
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>Applications à {city.name}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {service.useCases.map((uc) => (
                    <div key={uc} style={{ padding: '1rem 1.25rem', border: '1px solid var(--border)', fontSize: '0.85rem', color: 'var(--dark-2)', backgroundColor: 'var(--bg-card)' }}>{uc}</div>
                  ))}
                </div>
                <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)' }}>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Marques disponibles</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                    {service.brands.map((b) => (
                      <span key={b} style={{ padding: '0.35rem 0.75rem', border: '1px solid var(--border)', fontSize: '0.72rem', color: 'var(--dark-2)', borderRadius: '999px' }}>{b}</span>
                    ))}
                  </div>
                  <Link href="/showroom" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)', textDecoration: 'none', fontWeight: 600 }}>
                    Voir les échantillons en showroom →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spécificités de la zone */}
        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Expertise locale · {cityZoneLabels[city.zone]}</div>
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

        {/* WhatsApp CTA inline */}
        <section style={{ padding: '3rem 2rem' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <WhatsAppInlineCTA context={`${service.name.toLowerCase()} à ${city.name}`} />
          </div>
        </section>

        {/* Mini-portfolio zoné */}
        <section style={{ padding: '4rem 2rem', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Réalisations en {cityZoneLabels[city.zone]}</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Projets récents dans la zone
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
              {highlights.map((project) => (
                <div key={project.title} style={{ backgroundColor: 'var(--project-card-bg)', border: '1px solid var(--border)', position: 'relative', overflow: 'hidden', minHeight: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.img} alt={project.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,12,10,0.92) 0%, rgba(13,12,10,0.2) 55%, transparent 100%)' }} />
                  <div style={{ padding: '1.75rem', position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>{project.sector} · {project.year}</div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--text-on-dark)', margin: '0 0 0.5rem' }}>{project.title}</h3>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-on-dark-muted)', margin: 0, lineHeight: 1.55 }}>{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2rem' }}>
              <Link href="/realisations" style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--terra)', textDecoration: 'none', fontWeight: 600 }}>
                Voir toutes les réalisations →
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials secteur rotation */}
        <SectorTestimonials
          zone={city.zone}
          seed={`${service.slug}-${city.slug}`}
          count={2}
          dark
          eyebrow="Retours clients"
          title="Ils ont choisi CB Sols"
        />

        {/* FAQ enrichie */}
        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>FAQ</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              {service.shortName} à {city.name} — questions fréquentes
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

        {/* Maillage */}
        <section style={{ padding: '4rem 2rem 6rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem', fontWeight: 600 }}>
                  Autres services à {city.name}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <Link href={`/revetement-sol-${city.slug}`} style={{ fontSize: '0.85rem', color: 'var(--dark)', textDecoration: 'none', padding: '0.75rem 0', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', fontWeight: 500 }}>
                    <span>Tous les revêtements à {city.name}</span>
                    <span style={{ color: 'var(--terra)' }}>→</span>
                  </Link>
                  {otherServicesInCity.map((s) => (
                    <Link key={s.slug} href={`/${s.slug}-${city.slug}`} style={{ fontSize: '0.82rem', color: 'var(--cream-muted)', textDecoration: 'none', padding: '0.75rem 0', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
                      <span>{s.geoVerb} {city.name}</span>
                      <span style={{ color: 'var(--terra)' }}>→</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem', fontWeight: 600 }}>
                  {service.geoVerb} — autres communes
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {nearbyCities.map((c) => (
                    <Link key={c.slug} href={`/${service.slug}-${c.slug}`} style={{ display: 'inline-block', padding: '0.55rem 1rem', fontSize: '0.78rem', color: 'var(--dark)', textDecoration: 'none', border: '1px solid var(--border-strong)', borderRadius: '999px', backgroundColor: 'var(--bg)' }}>
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
