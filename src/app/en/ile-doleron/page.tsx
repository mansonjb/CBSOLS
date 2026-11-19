import Link from 'next/link'
import type { Metadata } from 'next'
import { enCities } from '../_lib/cities'
import { enServices } from '../services/_data'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: "Floor Covering Île d'Oléron, Certified Craftsman",
  description: "CB Sols works across the whole of Île d'Oléron, laying carpet, vinyl and bespoke rugs. Hotels, campsites, residences. Free quote within 48h.",
  alternates: {
    canonical: 'https://cbsols.fr/en/ile-doleron',
    languages: { 'fr-FR': 'https://cbsols.fr/ile-doleron', en: 'https://cbsols.fr/en/ile-doleron' },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Floor Covering Île d'Oléron",
  description: "Floor covering laid on Île d'Oléron by CB Sols: carpet, vinyl, bespoke rugs.",
  areaServed: { '@type': 'Place', name: "Île d'Oléron" },
  provider: { '@type': 'LocalBusiness', name: 'CB SOLS REVÊTEMENTS', telephone: company.phoneClean },
}

const specifics = [
  { title: 'Sea air and damp', desc: 'The marine environment calls for products that genuinely resist damp. We choose adhesives, primers and coverings proven on the islands. The floor lasts.' },
  { title: 'A short tourist season', desc: 'Hotels, campsites and residences must be ready in time. We work from October to May, without touching the bookings or the takings of the season.' },
  { title: 'Island logistics', desc: 'Our teams bring all the equipment over from the mainland. The quote builds in the island logistics from the start, so there is no surprise on the invoice.' },
  { title: 'Upmarket accommodation', desc: 'The island has fine houses and demanding establishments. We know the level of finish they expect. The result is careful, the use holds up.' },
]

export default function IleDoleronPageEn() {
  const oleronCities = enCities.filter((c) => c.zone === 'ile-doleron')
  const nearbyZones = [
    { label: 'Greater La Rochelle', href: '/en/revetement-sol-la-rochelle' },
    { label: 'Île de Ré', href: '/en/ile-de-re' },
    { label: 'Rochefort', href: '/en/revetement-sol-rochefort' },
    { label: 'Royan', href: '/en/revetement-sol-royan' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ paddingTop: '72px' }}>
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(44, 85, 48, 0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem' }}>
              <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
              <span style={{ color: 'var(--border-hover)' }}>→</span>
              <Link href="/en/zones" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>Areas</Link>
              <span style={{ color: 'var(--border-hover)' }}>→</span>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Île d'Oléron</span>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.3rem 0.875rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(44, 85, 48, 0.08)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', borderRadius: '999px', marginBottom: '1.5rem' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'inline-block' }} />
              Île d'Oléron · Charente-Maritime · 17
            </span>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              Floor Covering<br />
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>Île d'Oléron</em>
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '640px', lineHeight: 1.75, marginBottom: '2.5rem' }}>
              CB Sols works across the whole of Île d&apos;Oléron, the second-largest island on the French Atlantic coast. Hotel carpet, professional-kitchen vinyl, bespoke rugs for campsites and residences. We know the island&apos;s constraints and how to work there cleanly.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/en/contact" variant="primary" size="md">Free quote on the island</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-block', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'none', borderRadius: '999px' }}>
                {company.phone}
              </a>
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>What makes the island particular</div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
                What we know about Île d'Oléron
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {specifics.map((item) => (
                  <div key={item.title} style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.4rem' }}>{item.title}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.65 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our work on the island</div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
                Towns covered
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {oleronCities.map((city) => (
                  <Link key={city.slug} href={`/en/revetement-sol-${city.slug}`} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid var(--border)' }}>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.15rem' }}>{city.name}</div>
                      <div style={{ fontSize: '0.73rem', color: 'var(--muted)', fontStyle: 'italic' }}>{city.description}</div>
                    </div>
                    <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', flexShrink: 0 }}>View →</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-alt)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our services on the island</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
              Every type of covering
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
              {enServices.slice(0, 6).map((service) => (
                <Link key={service.slug} href={`/en/services/${service.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="service-card" style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)', height: '100%' }}>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.5rem' }}>{service.name}</h3>
                    <p style={{ fontSize: '0.78rem', color: 'var(--muted)', margin: '0 0 1rem', lineHeight: 1.6 }}>{service.description}</p>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)' }}>View →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 2rem 5rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>We also work in</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
              {nearbyZones.map((z) => (
                <Link key={z.href} href={z.href} style={{ display: 'inline-block', padding: '0.625rem 1.25rem', fontSize: '0.8rem', color: 'var(--dark-2)', textDecoration: 'none', border: '1px solid var(--border)', borderRadius: '999px' }}>
                  {z.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
