import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { cities, getCityBySlug, cityZoneLabels } from '@/data/cities'
import { services, getServiceBySlug } from '@/data/services'
import { company } from '@/data/company'

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

  const otherServicesInCity = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 5)

  const nearbyCities = cities
    .filter((c) => c.slug !== city.slug && c.zone === city.zone)
    .slice(0, 6)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} ${city.name}`,
    description: service.metaDescription(city.name),
    areaServed: { '@type': 'City', name: city.name },
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
  }

  const faqItems = [
    {
      q: `CB Sols intervient-il pour la ${service.name.toLowerCase()} à ${city.name} ?`,
      a: `Oui, CB Sols intervient régulièrement pour la ${service.name.toLowerCase()} à ${city.name}, ${city.description}. Notre équipe basée à Villedoux couvre l'ensemble de ${cityZoneLabels[city.zone]}.`,
    },
    {
      q: `Quel est le prix d'une ${service.name.toLowerCase()} à ${city.name} ?`,
      a: `Le tarif d'une ${service.name.toLowerCase()} à ${city.name} dépend de la surface, du matériau choisi et des spécificités du chantier. CB Sols réalise des devis gratuits et détaillés sous 48h.`,
    },
    {
      q: `Quels matériaux proposez-vous pour la ${service.name.toLowerCase()} à ${city.name} ?`,
      a: `CB Sols distribue les meilleures marques : ${service.brands.join(', ')}. Pour votre projet à ${city.name}, nos experts vous conseilleront le matériau le mieux adapté à votre usage et à votre budget.`,
    },
    {
      q: `Proposez-vous un showroom près de ${city.name} ?`,
      a: `Notre showroom est situé à Villedoux (17230), à ${city.zone === 'ile-de-re' ? '30 minutes' : city.zone === 'la-rochelle' ? '10-15 minutes' : '30-45 minutes'} de ${city.name}. Sur rendez-vous, vous y découvrirez plus de 500 échantillons.`,
    },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ paddingTop: '72px' }}>

        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(196,113,74,0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>

            {/* Breadcrumb */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>CB Sols</Link>
              <span style={{ color: 'var(--border-hover)' }}>→</span>
              <Link href={`/services/${service.slug}`} style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>{service.shortName}</Link>
              <span style={{ color: 'var(--border-hover)' }}>→</span>
              <Link href={`/revetement-sol-${city.slug}`} style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>{city.name}</Link>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', padding: '0.3rem 0.875rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(196,113,74,0.08)' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'inline-block' }} />
              <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)' }}>
                Artisan certifié · {cityZoneLabels[city.zone]}
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 400, color: 'var(--cream)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              {service.h1(city.name)}
            </h1>

            <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', maxWidth: '680px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              CB Sols, artisan spécialiste depuis 25 ans, intervient pour la {service.name.toLowerCase()} à {city.name} et dans toute la {cityZoneLabels[city.zone]}.
              {service.longDescription.split('.')[0]}. Devis gratuit sous 48h.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: 'var(--terra)', color: 'var(--cream)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500 }}>
                Devis gratuit à {city.name}
              </Link>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-block', padding: '1rem 2rem', border: '1px solid var(--border-hover)', color: 'var(--cream-muted)', fontSize: '0.82rem', textDecoration: 'none' }}>
                {company.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>
                  Pourquoi CB Sols pour votre {service.shortName.toLowerCase()} à {city.name}
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  {service.longDescription}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {service.benefits.map((b) => (
                    <div key={b} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--terra)', marginTop: '0.5rem', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.83rem', color: 'var(--cream)', lineHeight: 1.5 }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Applications à {city.name}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {service.useCases.map((uc) => (
                    <div key={uc} style={{ padding: '1rem 1.25rem', border: '1px solid var(--border)', fontSize: '0.83rem', color: 'var(--cream-muted)' }}>{uc}</div>
                  ))}
                </div>
                <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem' }}>Marques disponibles</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                    {service.brands.map((b) => (
                      <span key={b} style={{ padding: '0.35rem 0.75rem', border: '1px solid var(--border)', fontSize: '0.72rem', color: 'var(--cream-muted)' }}>{b}</span>
                    ))}
                  </div>
                  <Link href="/showroom" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)', textDecoration: 'none' }}>
                    Voir les échantillons en showroom →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>
              FAQ — {service.name} à {city.name}
            </div>
            {faqItems.map((item, i) => (
              <div key={i} style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.92rem', fontWeight: 500, color: 'var(--cream)', marginBottom: '0.75rem' }}>{item.q}</div>
                <div style={{ fontSize: '0.83rem', color: 'var(--cream-muted)', lineHeight: 1.7 }}>{item.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Maillage : autres services à [city] + même service autres villes */}
        <section style={{ padding: '4rem 2rem 6rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>
                  Autres services à {city.name}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <Link href={`/revetement-sol-${city.slug}`} style={{ fontSize: '0.82rem', color: 'var(--cream-muted)', textDecoration: 'none', padding: '0.625rem 0', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Tous les revêtements à {city.name}</span>
                    <span style={{ color: 'var(--terra)' }}>→</span>
                  </Link>
                  {otherServicesInCity.map((s) => (
                    <Link key={s.slug} href={`/${s.slug}-${city.slug}`} style={{ fontSize: '0.82rem', color: 'var(--cream-muted)', textDecoration: 'none', padding: '0.625rem 0', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
                      <span>{s.geoVerb} {city.name}</span>
                      <span style={{ color: 'var(--terra)' }}>→</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>
                  {service.geoVerb} d'autres communes
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {nearbyCities.map((c) => (
                    <Link key={c.slug} href={`/${service.slug}-${c.slug}`} style={{ display: 'inline-block', padding: '0.5rem 0.875rem', fontSize: '0.75rem', color: 'var(--cream-muted)', textDecoration: 'none', border: '1px solid var(--border)' }}>
                      {city.zone === 'ile-de-re' ? '🏝 ' : ''}{c.name}
                    </Link>
                  ))}
                  {cities.filter((c) => c.zone !== city.zone).slice(0, 4).map((c) => (
                    <Link key={c.slug} href={`/${service.slug}-${c.slug}`} style={{ display: 'inline-block', padding: '0.5rem 0.875rem', fontSize: '0.75rem', color: 'var(--text-muted)', textDecoration: 'none', border: '1px solid var(--border)' }}>
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
