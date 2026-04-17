import Link from 'next/link'
import type { Metadata } from 'next'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Nos Services — Moquette, Sol PVC, Tapis Sur Mesure',
  description:
    'Découvrez tous les services CB Sols : pose de moquette, sol PVC lames/dalles/lés, douches PVC, tapis sur mesure, tapis de propreté, nettoyage de moquette. Artisan certifié en Charente-Maritime.',
}

export default function ServicesPage() {
  return (
    <>
      <div style={{ paddingTop: '72px' }}>
        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Expertise</div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              Nos services
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', maxWidth: '560px', lineHeight: 1.7, margin: 0 }}>
              Spécialiste du revêtement de sol depuis 25 ans en Charente-Maritime. CB Sols accompagne particuliers et professionnels de A à Z — conseil, fourniture, pose et entretien.
            </p>
          </div>
        </section>

        {/* Services list */}
        <section style={{ padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {services.map((service, i) => (
                <Link key={service.slug} href={`/services/${service.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '80px 1fr auto',
                      gap: '2rem',
                      alignItems: 'center',
                      padding: '2.5rem 0',
                      borderBottom: '1px solid var(--border)',
                      transition: 'all 0.2s',
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2.5rem', color: 'var(--terra)', opacity: 0.2, fontWeight: 800, lineHeight: 1 }}>
                      0{i + 1}
                    </div>
                    <div>
                      <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.5rem', letterSpacing: '-0.03em' }}>
                        {service.name}
                      </h2>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                        {service.description}
                      </p>
                      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                        {service.useCases.slice(0, 3).map((uc) => (
                          <span key={uc} style={{ fontSize: '0.65rem', padding: '0.25rem 0.75rem', border: '1px solid var(--border)', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                            {uc}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', whiteSpace: 'nowrap' }}>
                      Découvrir →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '4rem 2rem 6rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
              Besoin d'un devis ?
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Décrivez votre projet, nous vous répondons sous 48h.
            </p>
            <Link href="/contact" style={{ display: 'inline-block', padding: '0.875rem 2.25rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, borderRadius: '999px' }}>
              Demander un devis
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
