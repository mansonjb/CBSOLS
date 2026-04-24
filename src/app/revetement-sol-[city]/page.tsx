import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { cities, getCityBySlug, cityZoneLabels } from '@/data/cities'
import { services } from '@/data/services'
import { sectors } from '@/data/sectors'
import { company } from '@/data/company'
import { getZoneContent, citySizeDescriptor, cityChantierCount } from '@/data/zones'
import { BreadcrumbLD } from '@/components/BreadcrumbLD'
import { SectorTestimonials } from '@/components/SectorTestimonials'
import { WhatsAppInlineCTA } from '@/components/WhatsAppInlineCTA'

interface Props {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params
  const cityData = getCityBySlug(city)
  if (!cityData) return {}
  return {
    title: `Revêtement de Sol ${cityData.name} | CB Sols, Artisan Certifié`,
    description: `Pose de revêtement de sol à ${cityData.name} par CB Sols. Spécialiste moquette, sol PVC et tapis depuis 1999. Devis gratuit, intervention rapide en ${cityZoneLabels[cityData.zone]}.`,
    alternates: { canonical: `https://cbsols.fr/revetement-sol-${city}` },
  }
}

export default async function CityHubPage({ params }: Props) {
  const { city } = await params
  const cityData = getCityBySlug(city)
  if (!cityData) notFound()

  const zoneContent = getZoneContent(cityData.zone)
  const sizeDescriptor = citySizeDescriptor(cityData.population)
  const chantiersCount = cityChantierCount(cityData)

  const nearbyCities = cities
    .filter((c) => c.slug !== city && c.zone === cityData.zone)
    .slice(0, 8)

  // ── JSON-LD ────────────────────────────────────────────────

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Revêtement de Sol ${cityData.name}`,
    description: `Pose de moquette, sol PVC, tapis sur mesure à ${cityData.name} par CB Sols, artisan certifié Qualibat depuis 1999.`,
    serviceType: 'Revêtement de sol',
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
      q: `CB Sols intervient-il bien à ${cityData.name} ?`,
      a: `Oui, CB Sols intervient régulièrement à ${cityData.name}, ${cityData.description}. Basé à Villedoux (Charente-Maritime), nous couvrons l'ensemble de la ${cityZoneLabels[cityData.zone]}.`,
    },
    {
      q: `Quel est le délai d'intervention à ${cityData.name} ?`,
      a: `Nous nous déplaçons à ${cityData.name} pour un devis sous 48 à 72 h. La réalisation des travaux est planifiée selon votre calendrier et notre plan de charge, généralement sous 3 à 6 semaines.`,
    },
    {
      q: `Quels types de sols posez-vous à ${cityData.name} ?`,
      a: `Nous posons tous types de revêtements à ${cityData.name} : moquette (en rouleau ou dalles), sol PVC (lames, dalles ou lés), douches intégrales PVC, tapis sur mesure et tapis de propreté. Conseil en showroom à 10 min de La Rochelle.`,
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
          { name: 'CB Sols', url: 'https://cbsols.fr' },
          { name: cityZoneLabels[cityData.zone], url: `https://cbsols.fr/${cityData.zone === 'la-rochelle' ? 'zones' : cityData.zone}` },
          { name: cityData.name, url: `https://cbsols.fr/revetement-sol-${city}` },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div style={{ paddingTop: '72px' }}>

        {/* ── HERO avec photo de zone ─────────────────────────── */}
        <section style={{ position: 'relative', minHeight: '600px', display: 'flex', alignItems: 'center', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
          {/* Photo de fond */}
          <Image
            src={zoneContent.photo}
            alt={`Revêtement de sol à ${cityData.name}, ${cityZoneLabels[cityData.zone]}`}
            fill
            style={{ objectFit: 'cover', opacity: 0.22 }}
            priority
            sizes="100vw"
          />
          {/* Overlay gradient */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(110deg, var(--bg) 0%, var(--bg) 40%, rgba(var(--bg-rgb,250,250,248),0.85) 70%, rgba(var(--bg-rgb,250,250,248),0.6) 100%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(196,113,74,0.12) 0%, transparent 60%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem', position: 'relative', width: '100%' }}>
            {/* Breadcrumb */}
            <nav aria-label="Fil d'ariane" style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>CB Sols</Link>
              <span style={{ color: 'var(--border-hover)' }}>/</span>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{cityZoneLabels[cityData.zone]}</span>
              <span style={{ color: 'var(--border-hover)' }}>/</span>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>{cityData.name}</span>
            </nav>

            {/* Badge zone */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.75rem', padding: '0.35rem 0.9rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(196,113,74,0.08)', borderRadius: '999px' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'inline-block' }} />
              <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 600 }}>
                {cityZoneLabels[cityData.zone]}
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0, maxWidth: '900px' }}>
              Revêtement de sol<br />
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>{cityData.name}.</em>
            </h1>

            <p style={{ fontSize: '1.05rem', color: 'var(--cream-muted)', maxWidth: '600px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              {zoneContent.tagline} Moquette, sol PVC, tapis sur mesure posés par un artisan certifié Qualibat depuis 1999. Devis gratuit sous 48 h à {cityData.name}.
            </p>

            {/* Stats strip */}
            <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', marginBottom: '2.5rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', maxWidth: '760px' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--terra)', lineHeight: 1 }}>
                  {chantiersCount}+
                </div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '0.4rem' }}>Chantiers en {cityZoneLabels[cityData.zone].replace('Agglomération de ', '').replace("Charente-Maritime (17)", 'Charente-Maritime')}</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--terra)', lineHeight: 1 }}>
                  4,9<span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 400 }}>/5</span>
                </div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '0.4rem' }}>47 avis Google</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--terra)', lineHeight: 1 }}>
                  48h
                </div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '0.4rem' }}>Délai de devis</div>
              </div>
              {cityData.population && (
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--terra)', lineHeight: 1 }}>
                    {cityData.population.toLocaleString('fr-FR')}
                  </div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '0.4rem' }}>Habitants · {sizeDescriptor}</div>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href={`/contact?city=${encodeURIComponent(cityData.name)}`} style={{ display: 'inline-block', padding: '0.95rem 2.25rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, borderRadius: '999px' }}>
                Devis gratuit à {cityData.name}
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

        {/* ── SERVICES à la ville ─────────────────────────────── */}
        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Prestations à {cityData.name}</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.025em', lineHeight: 1.1, maxWidth: '700px' }}>
              Toutes nos expertises, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>à votre porte.</em>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', margin: '0 0 3rem', maxWidth: '580px', lineHeight: 1.7 }}>
              Chaque prestation est adaptée aux contraintes locales. Cliquez pour voir la page dédiée au service à {cityData.name}.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1px', backgroundColor: 'var(--border)' }}>
              {services.map((service) => (
                <Link key={service.slug} href={`/${service.slug}-${city}`} style={{ textDecoration: 'none' }}>
                  <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', transition: 'background-color 0.2s', height: '100%' }}>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', lineHeight: 1.3 }}>
                      {service.geoVerb} {cityData.name}
                    </h3>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '0 0 1.5rem', lineHeight: 1.6 }}>
                      {service.description}
                    </p>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 600 }}>Voir le détail →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── SPÉCIFICITÉS de la zone ─────────────────────────── */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Expertise locale</div>
                <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
                  {zoneContent.specificsTitle}
                </h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                  {zoneContent.specificsBody}
                </p>
                <Link href="/a-propos" style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--terra)', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  En savoir plus sur Valentin →
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

        {/* ── TYPES D'ÉTABLISSEMENTS typiques ─────────────────── */}
        <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Typologies de chantiers</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.02em', lineHeight: 1.15, maxWidth: '700px' }}>
              Ce que nous posons régulièrement en {cityZoneLabels[cityData.zone]}
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
              {sectors.slice(0, 4).map((sector) => (
                <Link key={sector.slug} href={`/secteurs/${sector.slug}`} style={{ display: 'inline-block', padding: '0.55rem 1rem', fontSize: '0.75rem', color: 'var(--terra)', textDecoration: 'none', border: '1px solid rgba(196,113,74,0.3)', borderRadius: '999px' }}>
                  {sector.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── MINI-PORTFOLIO local ────────────────────────────── */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Réalisations récentes</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15, maxWidth: '700px' }}>
              Nos chantiers en {cityZoneLabels[cityData.zone]}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
              {zoneContent.projectHighlights.map((project) => (
                <div key={project.title} style={{ backgroundColor: '#1a1410', border: '1px solid var(--border)', position: 'relative', overflow: 'hidden', minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <Image src={project.img} alt={project.title} fill style={{ objectFit: 'cover', opacity: 0.6 }} sizes="(max-width: 768px) 100vw, 33vw" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,12,10,0.92) 0%, rgba(13,12,10,0.2) 55%, transparent 100%)' }} />
                  <div style={{ padding: '1.75rem', position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>{project.sector} · {project.year}</div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 400, color: '#F0EBE3', margin: '0 0 0.5rem' }}>{project.title}</h3>
                    <p style={{ fontSize: '0.78rem', color: 'rgba(240,235,227,0.7)', margin: 0, lineHeight: 1.55 }}>{project.desc}</p>
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

        {/* ── WhatsApp CTA inline ─────────────────────────────── */}
        <section style={{ padding: '3rem 2rem' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <WhatsAppInlineCTA context={cityData.name} />
          </div>
        </section>

        {/* ── TESTIMONIALS secteur rotation ───────────────────── */}
        <SectorTestimonials
          zone={cityData.zone}
          seed={`city-${city}`}
          count={3}
          dark
          eyebrow="Paroles de clients"
          title={`Ils ont choisi CB Sols en ${cityZoneLabels[cityData.zone]}`}
        />

        {/* ── FAQ enrichie ─────────────────────────────────────── */}
        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Questions fréquentes</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              FAQ — {cityData.name}
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

        {/* ── CTA final ───────────────────────────────────────── */}
        <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 100%, rgba(196,113,74,0.1) 0%, transparent 60%)' }} />
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Un projet à <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>{cityData.name}</em> ?
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Décrivez-nous votre espace et votre usage. Nous revenons vers vous sous 48 h avec un premier chiffrage ou un RDV sur place.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href={`/contact?city=${encodeURIComponent(cityData.name)}`} style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 700, borderRadius: '999px' }}>
                Demander un devis
              </Link>
              <Link href="/showroom" style={{ display: 'inline-block', padding: '0.95rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '999px', fontWeight: 600 }}>
                Visiter le showroom
              </Link>
            </div>
          </div>
        </section>

        {/* ── VILLES PROCHES ──────────────────────────────────── */}
        {nearbyCities.length > 0 && (
          <section style={{ padding: '4rem 2rem 6rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>
                Également en {cityZoneLabels[cityData.zone]}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {nearbyCities.map((c) => (
                  <Link key={c.slug} href={`/revetement-sol-${c.slug}`} style={{ display: 'inline-block', padding: '0.6rem 1.1rem', fontSize: '0.78rem', color: 'var(--dark)', textDecoration: 'none', border: '1px solid var(--border-strong)', borderRadius: '999px', fontWeight: 500, backgroundColor: 'var(--bg)' }}>
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
