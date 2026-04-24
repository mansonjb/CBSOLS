import Link from 'next/link'
import type { Metadata } from 'next'
import { sectors } from '@/data/sectors'

export const metadata: Metadata = {
  title: 'Solutions Pro | Hôtels, Restaurants, Bureaux, Collectivités',
  description:
    'CB Sols, partenaire des professionnels de Charente-Maritime. Solutions revêtement de sol pour hôtellerie, restauration, bureaux, collectivités, commerces, campings et EHPAD.',
}

export default function SecteursPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Professionnels</div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
            Solutions pour chaque secteur
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', maxWidth: '560px', lineHeight: 1.7, margin: 0 }}>
            CB Sols accompagne les professionnels de Charente-Maritime avec des solutions adaptées à chaque secteur d'activité. Normes, contraintes techniques, budgets : nous connaissons votre environnement.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem 6rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {sectors.map((sector, i) => (
              <Link key={sector.slug} href={`/secteurs/${sector.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <div className="sector-row" style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: '2rem', alignItems: 'center', padding: '2.5rem 0', borderBottom: '1px solid var(--border)', transition: 'all 0.2s' }}>
                  <div className="sector-row-icon" style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontSize: '2.25rem', fontWeight: 300, color: 'var(--terra)', fontStyle: 'italic', lineHeight: 1 }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.2rem, 3.5vw, 1.5rem)', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.4rem', letterSpacing: '-0.03em' }}>
                      {sector.name}
                    </h2>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '0 0 1rem', lineHeight: 1.6, maxWidth: '500px' }}>
                      {sector.tagline} : {sector.description.slice(0, 100)}…
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {sector.recommendedServices.slice(0, 3).map((s) => (
                        <span key={s} style={{ fontSize: '0.62rem', padding: '0.25rem 0.65rem', border: '1px solid var(--border)', color: 'var(--text-muted)', borderRadius: '999px' }}>{s.replace(/-/g, ' ')}</span>
                      ))}
                    </div>
                  </div>
                  <div className="sector-row-cta" style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', whiteSpace: 'nowrap', fontWeight: 600 }}>
                    Découvrir →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
