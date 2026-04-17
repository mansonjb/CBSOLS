import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { cities, getCityBySlug, cityZoneLabels } from '@/data/cities'
import { services } from '@/data/services'
import { sectors } from '@/data/sectors'
import { company } from '@/data/company'

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
    title: `Revêtement de Sol ${cityData.name} — CB Sols, Artisan Certifié`,
    description: `Pose de revêtement de sol à ${cityData.name} par CB Sols. Spécialiste moquette, sol PVC et tapis depuis 25 ans. Devis gratuit, intervention rapide en ${cityZoneLabels[cityData.zone]}.`,
    alternates: { canonical: `https://cbsols.fr/revetement-sol-${city}` },
  }
}

export default async function CityHubPage({ params }: Props) {
  const { city } = await params
  const cityData = getCityBySlug(city)
  if (!cityData) notFound()

  const nearbyCities = cities
    .filter((c) => c.slug !== city && c.zone === cityData.zone)
    .slice(0, 6)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Revêtement de Sol ${cityData.name}`,
    description: `Pose de revêtement de sol à ${cityData.name} par CB Sols, artisan spécialiste depuis 25 ans.`,
    areaServed: { '@type': 'City', name: cityData.name },
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ paddingTop: '72px' }}>
        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(196,113,74,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>CB Sols</Link>
              <span style={{ color: 'var(--border-hover)' }}>→</span>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{cityZoneLabels[cityData.zone]}</span>
              <span style={{ color: 'var(--border-hover)' }}>→</span>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>{cityData.name}</span>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', padding: '0.3rem 0.875rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(196,113,74,0.08)' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'inline-block' }} />
              <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)' }}>
                {cityZoneLabels[cityData.zone]}
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              Revêtement de Sol<br />
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>{cityData.name}</em>
            </h1>

            <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', maxWidth: '640px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              CB Sols intervient à {cityData.name}, {cityData.description}, pour tous vos projets de revêtement de sol.
              Moquette, sol PVC, tapis sur mesure — posés par des artisans qualifiés depuis 25 ans en Charente-Maritime. Devis gratuit sous 48h.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-block', padding: '0.875rem 2.25rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, borderRadius: '999px' }}>
                Devis gratuit à {cityData.name}
              </Link>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-block', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'none', borderRadius: '999px' }}>
                {company.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Services à [city] */}
        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nos services à {cityData.name}</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
              Toutes les prestations disponibles
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1px', backgroundColor: 'var(--border)' }}>
              {services.map((service) => (
                <Link key={service.slug} href={`/${service.slug}-${city}`} style={{ textDecoration: 'none' }}>
                  <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', transition: 'background-color 0.2s', height: '100%' }}>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', lineHeight: 1.3 }}>
                      {service.geoVerb} {cityData.name}
                    </h3>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '0 0 1.5rem', lineHeight: 1.6 }}>
                      {service.description}
                    </p>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)' }}>Voir →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi CB Sols à [city] */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pourquoi CB Sols à {cityData.name}</div>
                <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  CB Sols est basé à Villedoux, à quelques kilomètres de {cityData.name}. Cette proximité nous permet d'intervenir rapidement sur votre chantier, sans frais de déplacement excessifs.
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', lineHeight: 1.8 }}>
                  Nous connaissons les spécificités locales : humidité côtière de l'Atlantique, contraintes des bâtiments anciens rochelais, normes des établissements touristiques de l'Île de Ré. Nos préconisations matériaux tiennent compte de votre environnement.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { label: `Intervention rapide à ${cityData.name}`, desc: 'Basé en Charente-Maritime, disponible sous 48-72h pour un déplacement estimatif' },
                  { label: 'Devis gratuit et détaillé', desc: 'Métrés, matériaux, main d\'œuvre — tout est précisé dans notre devis' },
                  { label: 'Pose soignée par des artisans', desc: 'Équipe CB Sols formée aux exigences des chantiers professionnels et résidentiels' },
                  { label: 'Garantie décennale', desc: 'Tous nos chantiers à ' + cityData.name + ' sont couverts par la garantie décennale' },
                ].map((item) => (
                  <div key={item.label} style={{ padding: '1.25rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 500, color: 'var(--cream)', marginBottom: '0.375rem' }}>{item.label}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ locale */}
        <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '2rem' }}>FAQ — Revêtement de sol à {cityData.name}</div>
            {[
              {
                q: `CB Sols intervient-il bien à ${cityData.name} ?`,
                a: `Oui, CB Sols intervient régulièrement à ${cityData.name}, ${cityData.description}. Basé à Villedoux (Charente-Maritime), nous couvrons l'ensemble de la zone ${cityZoneLabels[cityData.zone]}.`,
              },
              {
                q: `Quel est le délai d'intervention à ${cityData.name} ?`,
                a: `Nous nous déplaçons à ${cityData.name} pour un devis sous 48-72h. La réalisation des travaux est planifiée en fonction de votre calendrier et de notre planning.`,
              },
              {
                q: `Quels types de sols posez-vous à ${cityData.name} ?`,
                a: `Nous posons tous types de revêtements à ${cityData.name} : moquette, sol PVC (lames, dalles ou lés), douches intégrales PVC, tapis sur mesure et tapis de propreté.`,
              },
            ].map((item, i) => (
              <div key={i} style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.92rem', fontWeight: 500, color: 'var(--cream)', marginBottom: '0.75rem' }}>{item.q}</div>
                <div style={{ fontSize: '0.83rem', color: 'var(--cream-muted)', lineHeight: 1.7 }}>{item.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Villes proches */}
        {nearbyCities.length > 0 && (
          <section style={{ padding: '4rem 2rem 6rem' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>
                Nous intervenons aussi à proximité
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {nearbyCities.map((c) => (
                  <Link key={c.slug} href={`/revetement-sol-${c.slug}`} style={{ display: 'inline-block', padding: '0.5rem 1rem', fontSize: '0.78rem', color: 'var(--cream-muted)', textDecoration: 'none', border: '1px solid var(--border)' }}>
                    {c.name}
                  </Link>
                ))}
                {sectors.slice(0, 3).map((sector) => (
                  <Link key={sector.slug} href={`/secteurs/${sector.slug}`} style={{ display: 'inline-block', padding: '0.5rem 1rem', fontSize: '0.78rem', color: 'var(--terra)', textDecoration: 'none', border: '1px solid rgba(196,113,74,0.3)' }}>
                    {sector.icon} {sector.name}
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
