import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { esBrands, getEsBrandBySlug } from '../_data'
import { company } from '@/data/company'
import { BreadcrumbLD } from '@/components/BreadcrumbLD'
import { Button } from '@/components/Button'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return esBrands.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const brand = getEsBrandBySlug(slug)
  if (!brand) return {}
  return {
    title: brand.metaTitle,
    description: brand.metaDescription,
    alternates: {
      canonical: `https://cbsols.fr/es/marques/${slug}`,
      languages: {
        'fr-FR': `https://cbsols.fr/marques/${slug}`, en: `https://cbsols.fr/en/marques/${slug}`, es: `https://cbsols.fr/es/marques/${slug}`,
      },
    },
  }
}

export default async function BrandPageEn({ params }: Props) {
  const { slug } = await params
  const brand = getEsBrandBySlug(slug)
  if (!brand) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: brand.fullName,
    description: brand.metaDescription,
    brand: { '@type': 'Brand', name: brand.name },
    offers: {
      '@type': 'Offer',
      seller: { '@type': 'LocalBusiness', name: company.legalName, telephone: company.phoneClean },
    },
  }

  return (
    <>
      <BreadcrumbLD
        items={[
          { name: 'CB Sols', url: 'https://cbsols.fr/es' },
          { name: 'Marcas', url: 'https://cbsols.fr/es/marques' },
          { name: brand.name, url: `https://cbsols.fr/es/marques/${slug}` },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ paddingTop: '72px' }}>

        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 30%, rgba(44, 85, 48, 0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem' }}>
              <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
              <span style={{ color: 'var(--border-hover)' }}>→</span>
              <Link href="/es/marques" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>Marcas</Link>
              <span style={{ color: 'var(--border-hover)' }}>→</span>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>{brand.name}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={brand.logoSrc} alt={brand.name} style={{ height: '40px', width: 'auto', maxWidth: '100px', objectFit: 'contain', opacity: 0.8 }} />
              <div style={{ height: '1px', width: '40px', backgroundColor: 'var(--border-strong)' }} />
              <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)' }}>{brand.country} · Distribuidor autorizado CB Sols</span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              {brand.fullName}
            </h1>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.2rem', color: 'var(--terra)', margin: '0 0 1.5rem' }}>
              {brand.tagline}
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '640px', lineHeight: 1.75, marginBottom: '2.5rem' }}>
              {brand.intro}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/es/contact" variant="primary" size="md">Solicitar muestras</Button>
              <Button href="/es/showroom" variant="outline" size="md">Ver en la exposición</Button>
            </div>
          </div>
        </section>

        {/* Expertise + Certifications */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Especialidad</div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>Lo que mejor hace la marca</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {brand.expertise.map((e, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--terra)', flexShrink: 0, marginTop: '7px' }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--dark-2)', lineHeight: 1.6 }}>{e}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Certificaciones</div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>Conformidad y sellos</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {brand.certifications.map((c) => (
                  <span key={c} style={{ display: 'inline-block', padding: '0.4rem 0.875rem', border: '1px solid var(--border)', borderRadius: '999px', fontSize: '0.72rem', color: 'var(--dark-2)' }}>{c}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Top Collections */}
        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-alt)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Selección CB Sols</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
              Colecciones recomendadas
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1px', backgroundColor: 'var(--border)' }}>
              {brand.topCollections.map((col) => (
                <div key={col.name} style={{ backgroundColor: 'var(--bg-card)', padding: '2rem' }}>
                  <div style={{ width: '28px', height: '2px', backgroundColor: 'var(--terra)', marginBottom: '1.25rem' }} />
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>{col.name}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6, margin: '0 0 1rem' }}>{col.desc}</p>
                  <div style={{ fontSize: '0.7rem', color: 'var(--terra)', fontStyle: 'italic' }}>→ {col.useCases}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why CB Sols recommends this brand */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>La opinión de CB Sols</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
              Por qué recomendamos {brand.name}
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--dark-2)', lineHeight: 1.8 }}>{brand.why}</p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
              Ver {brand.name} en la exposición
            </h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.1rem', color: 'var(--muted)', margin: '0 0 2.5rem' }}>
              Villedoux · a 10 min de La Rochelle · con cita previa
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact" variant="primary" size="md">Reservar una cita</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-block', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'none', borderRadius: '999px' }}>
                {company.phone}
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
