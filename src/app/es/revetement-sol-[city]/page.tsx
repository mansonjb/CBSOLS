import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { esCities, getEsCityBySlug, esCityZoneLabels, esCitySizeDescriptor, esCityProjetCount } from '../_lib/cities'
import { esServices } from '../services/_data'
import { esSectors } from '../secteurs/_data'
import { company } from '@/data/company'
import { getEsZoneContent } from '../_lib/zones'
import { BreadcrumbLD } from '@/components/BreadcrumbLD'
import { Button } from '@/components/Button'

interface Props {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return esCities.map((c) => ({ city: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params
  const cityData = getEsCityBySlug(city)
  if (!cityData) return {}
  return {
    title: `Revestimiento de suelo ${cityData.name} | Instalador certificado`,
    description: `Revestimiento de suelo colocado en ${cityData.name} por CB Sols. Especialista en moqueta, vinilo y alfombras desde 1998. Presupuesto gratuito, respuesta rápida en todo ${esCityZoneLabels[cityData.zone]}.`,
    alternates: {
      canonical: `https://cbsols.fr/es/revetement-sol-${city}`,
      languages: {
        'fr-FR': `https://cbsols.fr/revetement-sol-${city}`, en: `https://cbsols.fr/en/revetement-sol-${city}`, es: `https://cbsols.fr/es/revetement-sol-${city}`,
      },
    },
  }
}

export default async function CityHubPageEn({ params }: Props) {
  const { city } = await params
  const cityData = getEsCityBySlug(city)
  if (!cityData) notFound()

  const zoneContent = getEsZoneContent(cityData.zone)
  const zoneLabel = esCityZoneLabels[cityData.zone]
  const sizeDescriptor = esCitySizeDescriptor(cityData.population)
  const projetsCount = esCityProjetCount(cityData)

  const nearbyCities = esCities.filter((c) => c.slug !== city && c.zone === cityData.zone).slice(0, 8)

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Revestimiento de suelo ${cityData.name}`,
    description: `Moqueta, vinilo y alfombras a medida colocadas en ${cityData.name} por CB Sols, instalador especialista desde 1998.`,
    serviceType: 'Revestimiento de suelo',
    areaServed: {
      '@type': 'City',
      name: cityData.name,
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
    },
    provider: {
      '@type': 'LocalBusiness',
      name: company.legalName,
      telephone: company.phoneClean,
      email: company.email,
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

  const faqItems = [
    {
      q: `¿Trabaja CB Sols realmente en ${cityData.name}?`,
      a: `Sí, CB Sols trabaja con regularidad en ${cityData.name}, ${cityData.description}. Con sede en Villedoux (Charente-Maritime), cubrimos todo ${zoneLabel}.`,
    },
    {
      q: `¿Cuál es el plazo para una obra en ${cityData.name}?`,
      a: `Nos desplazamos a ${cityData.name} para un presupuesto en 48 horas. La obra en sí se programa según su calendario y nuestra carga de trabajo, normalmente en 3 a 6 semanas.`,
    },
    {
      q: `¿Qué tipos de suelo coloca en ${cityData.name}?`,
      a: `Colocamos todo tipo de revestimiento en ${cityData.name}: moqueta (en rollo o en losetas), vinilo (en lamas, losetas o lámina), alfombras a medida, felpudos de entrada y acondicionamientos específicos (sala de cine, rincón de lectura). Asesoramiento en nuestro showroom a 10 min de La Rochelle.`,
    },
    ...zoneContent.zoneFaq,
  ]

  const faqLd = {
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
          { name: 'CB Sols', url: 'https://cbsols.fr/es' },
          { name: zoneLabel, url: `https://cbsols.fr/es/zones` },
          { name: cityData.name, url: `https://cbsols.fr/es/revetement-sol-${city}` },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div style={{ paddingTop: '72px' }}>

        {/* HERO with zone photo */}
        <section style={{ position: 'relative', minHeight: '600px', display: 'flex', alignItems: 'center', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
          <Image
            src={zoneContent.photo}
            alt={`Revestimiento de suelo en ${cityData.name}, ${zoneLabel}`}
            fill
            style={{ objectFit: 'cover', opacity: 0.22 }}
            priority
            sizes="100vw"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(110deg, var(--bg) 0%, var(--bg) 40%, rgba(var(--bg-rgb,250,250,248),0.85) 70%, rgba(var(--bg-rgb,250,250,248),0.6) 100%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(44, 85, 48, 0.12) 0%, transparent 60%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem', position: 'relative', width: '100%' }}>
            <nav aria-label="Breadcrumb" style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>CB Sols</Link>
              <span style={{ color: 'var(--border-hover)' }}>/</span>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{zoneLabel}</span>
              <span style={{ color: 'var(--border-hover)' }}>/</span>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>{cityData.name}</span>
            </nav>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.75rem', padding: '0.35rem 0.9rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(44, 85, 48, 0.08)', borderRadius: '999px' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'inline-block' }} />
              <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 600 }}>
                {zoneLabel}
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0, maxWidth: '900px' }}>
              Revestimiento de suelo<br />
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>{cityData.name}.</em>
            </h1>

            <p style={{ fontSize: '1.05rem', color: 'var(--cream-muted)', maxWidth: '600px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              {zoneContent.tagline} Moqueta, vinilo y alfombras a medida colocadas por un instalador especialista desde 1998. Presupuesto gratuito en 48 horas en {cityData.name}.
            </p>

            <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', marginBottom: '2.5rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', maxWidth: '760px' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--terra)', lineHeight: 1 }}>
                  {projetsCount}+
                </div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '0.4rem' }}>Proyectos en {zoneLabel}</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--terra)', lineHeight: 1 }}>
                  4.9<span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 400 }}>/5</span>
                </div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '0.4rem' }}>41 reseñas de Google</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--terra)', lineHeight: 1 }}>
                  48h
                </div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '0.4rem' }}>Plazo de presupuesto</div>
              </div>
              {cityData.population && (
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--terra)', lineHeight: 1 }}>
                    {cityData.population.toLocaleString('es-ES')}
                  </div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '0.4rem' }}>Habitantes · {sizeDescriptor}</div>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href={`/es/contact?city=${encodeURIComponent(cityData.name)}`} variant="primary" size="md">
                Presupuesto gratuito en {cityData.name}
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

        {/* SERVICES in the town */}
        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Servicios en {cityData.name}</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.025em', lineHeight: 1.1, maxWidth: '700px' }}>
              Todo nuestro saber hacer, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>en su puerta.</em>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', margin: '0 0 3rem', maxWidth: '580px', lineHeight: 1.7 }}>
              Cada servicio se adapta a las exigencias locales. Haga clic para ver la página dedicada a ese servicio en {cityData.name}.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1px', backgroundColor: 'var(--border)' }}>
              {esServices.map((service) => (
                <Link key={service.slug} href={`/es/${service.slug}-${city}`} style={{ textDecoration: 'none' }}>
                  <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', transition: 'background-color 0.2s', height: '100%' }}>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', lineHeight: 1.3 }}>
                      {service.geoVerb} {cityData.name}
                    </h3>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '0 0 1.5rem', lineHeight: 1.6 }}>
                      {service.description}
                    </p>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 600 }}>Ver detalles →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* LOCAL CONTEXT */}
        {cityData.localContext && (
          <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)' }}>
            <div style={{ maxWidth: '860px', margin: '0 auto' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>
                Contexto local
              </div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                Lo que vemos en {cityData.name}
              </h2>
              <p style={{ fontSize: '1.02rem', color: 'var(--dark-2)', lineHeight: 1.85, marginBottom: cityData.localFootnote ? '1.75rem' : 0 }}>
                {cityData.localContext}
              </p>
              {cityData.localFootnote && (
                <div style={{ padding: '1.25rem 1.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.4rem', fontWeight: 700 }}>
                    Nota técnica
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--dark)', lineHeight: 1.65, margin: 0 }}>
                    {cityData.localFootnote}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ZONE SPECIFICS */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Saber hacer local</div>
                <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
                  {zoneContent.specificsTitle}
                </h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                  {zoneContent.specificsBody}
                </p>
                <Link href="/es/a-propos" style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--terra)', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Más sobre Valentin →
                </Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {zoneContent.challenges.map((item) => (
                  <div key={item.label} style={{ padding: '1.5rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)', borderLeft: '3px solid var(--terra)' }}>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.4rem', fontFamily: 'var(--font-sans)' }}>{item.label}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TYPICAL ESTABLISHMENTS */}
        <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Tipos de proyecto</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.02em', lineHeight: 1.15, maxWidth: '700px' }}>
              Lo que colocamos con regularidad en {zoneLabel}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
              {zoneContent.typicalEstablishments.map((est) => (
                <div key={est} style={{ padding: '1.25rem 1.5rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--terra)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', color: 'var(--dark)', fontWeight: 500 }}>{est}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {esSectors.slice(0, 4).map((sector) => (
                <Link key={sector.slug} href={`/es/secteurs/${sector.slug}`} style={{ display: 'inline-block', padding: '0.55rem 1rem', fontSize: '0.75rem', color: 'var(--terra)', textDecoration: 'none', border: '1px solid rgba(44, 85, 48, 0.3)', borderRadius: '999px' }}>
                  {sector.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* MINI-PORTFOLIO */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Proyectos recientes</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15, maxWidth: '700px' }}>
              Nuestros proyectos en {zoneLabel}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
              {zoneContent.projectHighlights.map((project) => (
                <div key={project.title} style={{ backgroundColor: 'var(--project-card-bg)', border: '1px solid var(--border)', position: 'relative', overflow: 'hidden', minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <Image src={project.img} alt={project.title} fill style={{ objectFit: 'cover', opacity: 0.6 }} sizes="(max-width: 768px) 100vw, 33vw" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,12,10,0.92) 0%, rgba(13,12,10,0.2) 55%, transparent 100%)' }} />
                  <div style={{ padding: '1.75rem', position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra-on-dark)', marginBottom: '0.5rem', fontWeight: 700 }}>{project.sector} · {project.year}</div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 400, color: 'var(--text-on-dark)', margin: '0 0 0.5rem' }}>{project.title}</h3>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-on-dark-muted)', margin: 0, lineHeight: 1.55 }}>{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2rem' }}>
              <Link href="/es/realisations" style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--terra)', textDecoration: 'none', fontWeight: 600 }}>
                Ver todos los proyectos →
              </Link>
            </div>
          </div>
        </section>

        {/* ZONE TESTIMONIAL */}
        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra-on-dark)', marginBottom: '1.5rem', fontWeight: 700 }}>Opinión de clientes · {zoneLabel}</div>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', color: 'var(--text-on-dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &ldquo;{zoneContent.testimonial.quote}&rdquo;
            </p>
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>{zoneContent.testimonial.author}</div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Preguntas frecuentes</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              FAQ, {cityData.name}
            </h2>
            <div>
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
          </div>
        </section>

        {/* FINAL CTA */}
        <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 100%, rgba(44, 85, 48, 0.1) 0%, transparent 60%)' }} />
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              ¿Un proyecto en <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>{cityData.name}</em>?
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Cuéntenos su espacio y cómo lo utiliza. Le respondemos en 48 horas con una primera estimación o una cita a domicilio.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href={`/es/contact?city=${encodeURIComponent(cityData.name)}`} variant="primary" size="lg">
                Solicitar un presupuesto
              </Button>
              <Button href="/es/showroom" variant="outline" size="md">Visitar el showroom</Button>
            </div>
          </div>
        </section>

        {/* NEARBY TOWNS */}
        {nearbyCities.length > 0 && (
          <section style={{ padding: '4rem 2rem 6rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>
                También en {zoneLabel}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {nearbyCities.map((c) => (
                  <Link key={c.slug} href={`/es/revetement-sol-${c.slug}`} style={{ display: 'inline-block', padding: '0.6rem 1.1rem', fontSize: '0.78rem', color: 'var(--dark)', textDecoration: 'none', border: '1px solid var(--border-strong)', borderRadius: '999px', fontWeight: 500, backgroundColor: 'var(--bg)' }}>
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  )
}
