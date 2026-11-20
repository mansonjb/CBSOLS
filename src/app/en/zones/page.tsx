import type { Metadata } from 'next'
import Link from 'next/link'
import { enCities, enCityZoneLabels } from '../_lib/cities'
import { enServices } from '../services/_data'

export const metadata: Metadata = {
  title: 'Areas We Cover | CB Sols, All of Charente-Maritime',
  description:
    'CB Sols works across 51 towns in Charente-Maritime: La Rochelle, Île de Ré, Rochefort, Saintes, Royan and the surrounding area. Floor covering, carpet, vinyl.',
  alternates: {
    canonical: 'https://cbsols.fr/en/zones',
    languages: { 'fr-FR': 'https://cbsols.fr/zones', en: 'https://cbsols.fr/en/zones', es: 'https://cbsols.fr/es/zones', },
  },
}

const zoneKeys = ['la-rochelle', 'ile-de-re', 'ile-doleron', 'charente-maritime'] as const

export default function ZonesPageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Territory</div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
            Areas we cover
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', maxWidth: '560px', lineHeight: 1.7, margin: 0 }}>
            CB Sols works across {enCities.length} towns in Charente-Maritime. Based in Villedoux, we cover Greater La Rochelle, Île de Ré and the whole of the département (17).
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem 6rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {zoneKeys.map((zone) => {
              const zoneCities = enCities.filter((c) => c.zone === zone)
              return (
                <div key={zone}>
                  <div style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                    <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.75rem', fontWeight: 400, color: 'var(--cream)', margin: '0 0 0.5rem', letterSpacing: '-0.02em' }}>
                      {enCityZoneLabels[zone]}
                    </h2>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                      {zoneCities.length} towns covered
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1px', backgroundColor: 'var(--border)' }}>
                    {zoneCities.map((city) => (
                      <div key={city.slug} style={{ backgroundColor: 'var(--bg-card)', padding: '1.5rem' }}>
                        <Link href={`/en/revetement-sol-${city.slug}`} style={{ textDecoration: 'none' }}>
                          <div style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--cream)', marginBottom: '0.25rem' }}>{city.name}</div>
                        </Link>
                        <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: '0 0 1rem' }}>{city.description}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                          {enServices.slice(0, 4).map((s) => (
                            <Link
                              key={s.slug}
                              href={`/en/${s.slug}-${city.slug}`}
                              style={{ fontSize: '0.6rem', padding: '0.25rem 0.5rem', border: '1px solid var(--border)', color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '0.05em' }}
                            >
                              {s.shortName}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
