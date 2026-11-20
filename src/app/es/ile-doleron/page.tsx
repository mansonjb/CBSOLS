import Link from 'next/link'
import type { Metadata } from 'next'
import { esCities } from '../_lib/cities'
import { esServices } from '../services/_data'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: "Revestimiento de suelo en la Île d'Oléron, artesano cualificado",
  description: "CB Sols trabaja en toda la Île d'Oléron, instalando moqueta, vinilo y alfombras a medida. Hoteles, campings, residencias. Presupuesto gratuito en 48 h.",
  alternates: {
    canonical: 'https://cbsols.fr/es/ile-doleron',
    languages: { 'fr-FR': 'https://cbsols.fr/ile-doleron', en: 'https://cbsols.fr/en/ile-doleron', es: 'https://cbsols.fr/es/ile-doleron', },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Revestimiento de suelo en la Île d'Oléron",
  description: "Revestimientos de suelo instalados en la Île d'Oléron por CB Sols: moqueta, vinilo, alfombras a medida.",
  areaServed: { '@type': 'Place', name: "Île d'Oléron" },
  provider: { '@type': 'LocalBusiness', name: 'CB SOLS REVÊTEMENTS', telephone: company.phoneClean },
}

const specifics = [
  { title: 'Aire marino y humedad', desc: 'El entorno marino exige productos que resistan de verdad la humedad. Elegimos adhesivos, imprimaciones y revestimientos probados en las islas. El suelo dura.' },
  { title: 'Una temporada turística corta', desc: 'Los hoteles, campings y residencias deben estar listos a tiempo. Trabajamos de octubre a mayo, sin tocar las reservas ni los ingresos de la temporada.' },
  { title: 'Logística insular', desc: 'Nuestros equipos traen todo el equipo desde tierra firme. El presupuesto integra la logística insular desde el principio, para que no haya sorpresas en la factura.' },
  { title: 'Alojamientos de categoría', desc: 'La isla cuenta con bonitas casas y establecimientos exigentes. Conocemos el nivel de acabado que esperan. El resultado es cuidado, el uso aguanta.' },
]

export default function IleDoleronPageEn() {
  const oleronCities = esCities.filter((c) => c.zone === 'ile-doleron')
  const nearbyZones = [
    { label: 'Área metropolitana de La Rochelle', href: '/es/revetement-sol-la-rochelle' },
    { label: 'Île de Ré', href: '/es/ile-de-re' },
    { label: 'Rochefort', href: '/es/revetement-sol-rochefort' },
    { label: 'Royan', href: '/es/revetement-sol-royan' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ paddingTop: '72px' }}>
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(44, 85, 48, 0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem' }}>
              <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
              <span style={{ color: 'var(--border-hover)' }}>→</span>
              <Link href="/es/zones" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>Zonas</Link>
              <span style={{ color: 'var(--border-hover)' }}>→</span>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Île d'Oléron</span>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.3rem 0.875rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(44, 85, 48, 0.08)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', borderRadius: '999px', marginBottom: '1.5rem' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'inline-block' }} />
              Île d'Oléron · Charente-Maritime · 17
            </span>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              Revestimiento de suelo<br />
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>Île d'Oléron</em>
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '640px', lineHeight: 1.75, marginBottom: '2.5rem' }}>
              CB Sols trabaja en toda la Île d&apos;Oléron, la segunda isla más grande de la costa atlántica francesa. Moqueta de hotel, vinilo para cocinas profesionales, alfombras a medida para campings y residencias. Conocemos las limitaciones de la isla y cómo trabajar allí de forma limpia.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/es/contact" variant="primary" size="md">Presupuesto gratuito en la isla</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-block', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'none', borderRadius: '999px' }}>
                {company.phone}
              </a>
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Lo que hace particular a la isla</div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
                Lo que sabemos de la Île d'Oléron
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
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro trabajo en la isla</div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
                Municipios cubiertos
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {oleronCities.map((city) => (
                  <Link key={city.slug} href={`/es/revetement-sol-${city.slug}`} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid var(--border)' }}>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.15rem' }}>{city.name}</div>
                      <div style={{ fontSize: '0.73rem', color: 'var(--muted)', fontStyle: 'italic' }}>{city.description}</div>
                    </div>
                    <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', flexShrink: 0 }}>Ver →</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-alt)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestros servicios en la isla</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
              Todo tipo de revestimientos
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
              {esServices.slice(0, 6).map((service) => (
                <Link key={service.slug} href={`/es/services/${service.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="service-card" style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)', height: '100%' }}>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.5rem' }}>{service.name}</h3>
                    <p style={{ fontSize: '0.78rem', color: 'var(--muted)', margin: '0 0 1rem', lineHeight: 1.6 }}>{service.description}</p>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)' }}>Ver →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 2rem 5rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>También trabajamos en</div>
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
