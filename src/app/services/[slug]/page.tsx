import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { services, getServiceBySlug } from '@/data/services'
import { cities } from '@/data/cities'
import { company } from '@/data/company'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: service.metaTitle('La Rochelle'),
    description: service.metaDescription('La Rochelle'),
    alternates: { canonical: `https://cbsols.fr/services/${slug}` },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const serviceIndex = services.findIndex((s) => s.slug === slug)
  const relatedCities = cities.slice(0, 12)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ paddingTop: '72px' }}>
        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(196,113,74,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem' }}>
              <Link href="/services" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>Services</Link>
              <span style={{ color: 'var(--border-hover)' }}>→</span>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>{service.name}</span>
            </div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>
              Service 0{serviceIndex + 1}
            </div>
            <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 400, color: 'var(--cream)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              {service.name}
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', maxWidth: '600px', lineHeight: 1.7, margin: '0 0 2.5rem' }}>
              {service.longDescription}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: 'var(--terra)', color: 'var(--cream)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500 }}>
                Demander un devis
              </Link>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-block', padding: '1rem 2rem', border: '1px solid var(--border-hover)', color: 'var(--cream-muted)', fontSize: '0.82rem', textDecoration: 'none' }}>
                {company.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Avantages + Usage */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Avantages</div>
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
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Marques partenaires</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {service.brands.map((b) => (
                    <span key={b} style={{ padding: '0.5rem 1rem', border: '1px solid var(--border)', fontSize: '0.75rem', color: 'var(--cream-muted)', letterSpacing: '0.05em' }}>{b}</span>
                  ))}
                </div>
                <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem' }}>Showroom</div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--cream-muted)', margin: '0 0 1rem', lineHeight: 1.6 }}>
                    Venez découvrir tous nos échantillons de {service.shortName.toLowerCase()} dans notre showroom de Villedoux.
                  </p>
                  <Link href="/showroom" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', textDecoration: 'none' }}>
                    Prendre rendez-vous →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Zones */}
        <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>{service.geoVerb} …</div>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.75rem', fontWeight: 400, color: 'var(--cream)', margin: '0 0 2rem', letterSpacing: '-0.02em' }}>
              Intervention dans tout le département 17
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {relatedCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${service.slug}-${city.slug}`}
                  style={{ display: 'inline-block', padding: '0.5rem 1rem', fontSize: '0.78rem', color: 'var(--cream-muted)', textDecoration: 'none', border: '1px solid var(--border)', transition: 'all 0.2s' }}
                >
                  {service.geoVerb} {city.name}
                </Link>
              ))}
              <Link href="/zones" style={{ display: 'inline-block', padding: '0.5rem 1rem', fontSize: '0.78rem', color: 'var(--terra)', textDecoration: 'none', border: '1px solid var(--terra)' }}>
                Toutes les zones →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>FAQ</div>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '2rem', fontWeight: 400, color: 'var(--cream)', margin: '0 0 3rem', letterSpacing: '-0.02em' }}>
              Questions fréquentes
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                {
                  q: `Quel est le délai pour une pose de ${service.shortName.toLowerCase()} ?`,
                  a: `Selon la surface et la complexité du chantier, une pose de ${service.shortName.toLowerCase()} prend généralement 1 à 3 jours. CB Sols vous communique un planning précis lors du devis.`,
                },
                {
                  q: 'Vous intervenez sur les chantiers neufs et en rénovation ?',
                  a: 'Oui, CB Sols intervient aussi bien sur des constructions neuves que sur des projets de rénovation. Nous adaptons nos méthodes à chaque contexte de chantier.',
                },
                {
                  q: 'Proposez-vous une garantie sur vos travaux ?',
                  a: 'Tous nos travaux sont couverts par la garantie décennale. Les matériaux bénéficient également des garanties constructeur des marques que nous distribuons.',
                },
                {
                  q: 'Comment obtenir un devis ?',
                  a: 'Contactez-nous par téléphone ou via le formulaire de contact. Nous nous déplaçons gratuitement pour évaluer votre projet et vous remettre un devis détaillé sous 48h.',
                },
              ].map((item, idx) => (
                <div key={idx} style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--cream)', marginBottom: '0.75rem' }}>{item.q}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--cream-muted)', lineHeight: 1.7 }}>{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other services */}
        <section style={{ padding: '4rem 2rem 6rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '2rem' }}>Autres services</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1px', backgroundColor: 'var(--border)' }}>
              {services.filter((s) => s.slug !== slug).map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ backgroundColor: 'var(--bg-card)', padding: '1.5rem', transition: 'background-color 0.2s' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--cream)', marginBottom: '0.5rem' }}>{s.shortName}</div>
                    <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--terra)' }}>Voir →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
