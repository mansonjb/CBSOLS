import Link from 'next/link'
import type { Metadata } from 'next'
import { enBrands } from './_data'

export const metadata: Metadata = {
  title: 'Partner Brands | EGE, Gerflor, objectflor, Bostik, Romus',
  description: 'CB Sols works with 5 carefully selected brands: EGE (carpet), Gerflor and objectflor (vinyl), Bostik (adhesives & preparation), Romus (profiles). Villedoux showroom.',
  alternates: {
    canonical: 'https://cbsols.fr/en/marques',
    languages: { 'fr-FR': 'https://cbsols.fr/marques', en: 'https://cbsols.fr/en/marques' },
  },
}

export default function MarquesPageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Brands</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
            Brands chosen<br />
            <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>with care.</em>
          </h1>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.2rem', color: 'var(--terra)', margin: '0 0 1.5rem' }}>
            Approved dealer in Charente-Maritime
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '640px', lineHeight: 1.75 }}>
            Five partners chosen by one simple test: the quality we would lay in our own homes. <strong style={{ color: 'var(--dark)' }}>EGE</strong> for high-end carpet, <strong style={{ color: 'var(--dark)' }}>Gerflor and objectflor</strong> for professional vinyl flooring, <strong style={{ color: 'var(--dark)' }}>Bostik</strong> for adhesives and substrate preparation, <strong style={{ color: 'var(--dark)' }}>Romus</strong> for profiles and trims. Every brand can be seen in our Villedoux showroom.
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {enBrands.map((brand) => (
              <Link key={brand.slug} href={`/en/marques/${brand.slug}`} style={{ textDecoration: 'none' }}>
                <div className="service-card" style={{ padding: '2.25rem', border: '1px solid var(--border)', borderRadius: '16px', backgroundColor: 'var(--bg-card)', height: '100%', transition: 'border-color 0.2s, box-shadow 0.2s', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={brand.logoSrc} alt={brand.name} style={{ height: '32px', width: 'auto', maxWidth: '80px', objectFit: 'contain', filter: 'grayscale(1)', opacity: 0.7 }} />
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>{brand.country}</div>
                  </div>
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.5rem', letterSpacing: '-0.02em' }}>{brand.fullName}</h2>
                    <p style={{ fontSize: '0.82rem', color: 'var(--muted)', fontStyle: 'italic', margin: 0 }}>{brand.tagline}</p>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginTop: 'auto' }}>
                    {brand.services.slice(0, 2).map((s) => (
                      <span key={s} style={{ fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.625rem', border: '1px solid var(--border)', borderRadius: '999px', color: 'var(--muted)' }}>
                        {s.replace(/-/g, ' ')}
                      </span>
                    ))}
                  </div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)' }}>Explore →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
