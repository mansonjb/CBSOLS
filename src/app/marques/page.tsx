import Link from 'next/link'
import type { Metadata } from 'next'
import { brands } from '@/data/brands'

export const metadata: Metadata = {
  title: 'Marques Partenaires | EGE, Gerflor, objectflor, Bostik, Romus',
  description: 'CB Sols travaille avec 5 marques sélectionnées avec soin : EGE et objectflor (revêtements), Gerflor (PVC), Bostik (colles & supports), Romus (profilés). Showroom Villedoux.',
  alternates: { canonical: 'https://cbsols.fr/marques' },
}

export default function MarquesPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem' }}>
            <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Marques</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
            Marques sélectionnées<br />
            <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>avec soin.</em>
          </h1>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.2rem', color: 'var(--terra)', margin: '0 0 1.5rem' }}>
            Revendeur agréé en Charente-Maritime
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '640px', lineHeight: 1.75 }}>
            Cinq partenaires choisis selon un critère simple : la qualité que nous poserions chez nous. <strong style={{ color: 'var(--dark)' }}>EGE et objectflor</strong> pour la moquette et le vinyle haut de gamme, <strong style={{ color: 'var(--dark)' }}>Gerflor</strong> pour le PVC professionnel, <strong style={{ color: 'var(--dark)' }}>Bostik</strong> pour les colles et préparations de support, <strong style={{ color: 'var(--dark)' }}>Romus</strong> pour les profilés et finitions. Chaque marque est consultable dans notre showroom de Villedoux.
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {brands.map((brand) => (
              <Link key={brand.slug} href={`/marques/${brand.slug}`} style={{ textDecoration: 'none' }}>
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
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)' }}>Découvrir →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
