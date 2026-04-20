import type { Metadata } from 'next'
import { Suspense } from 'react'
import { company } from '@/data/company'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact & Devis Gratuit | CB Sols La Rochelle',
  description:
    'Demandez votre devis gratuit à CB Sols. Artisan revêtement de sol à La Rochelle, Île de Ré et Charente-Maritime. Réponse sous 48h.',
}

export default function ContactPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem', minHeight: '80vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '6rem', alignItems: 'start' }}>

            {/* Left: infos */}
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Contact</div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Parlons de<br /><em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>votre projet.</em>
              </h1>
              <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '3rem' }}>
                Devis gratuit sous 48h. Nous nous déplaçons sur l'ensemble de la Charente-Maritime pour évaluer votre chantier.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>Téléphone</div>
                  <a href={`tel:${company.phoneClean}`} style={{ fontSize: '1.75rem', fontFamily: 'var(--font-sans)', color: 'var(--dark)', textDecoration: 'none', fontWeight: 800 }}>
                    {company.phone}
                  </a>
                </div>
                <div>
                  <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>Email</div>
                  <a href={`mailto:${company.email}`} style={{ fontSize: '1rem', color: 'var(--cream-muted)', textDecoration: 'none' }}>{company.email}</a>
                </div>
                <div>
                  <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>Showroom (sur RDV)</div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', margin: 0, lineHeight: 1.6 }}>
                    {company.address.full}
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>Zones d'intervention</div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', margin: 0, lineHeight: 1.6 }}>
                    {company.zones.join(' · ')}
                  </p>
                </div>

                {/* Trust signals */}
                <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Devis gratuit, sans engagement',
                    'Réponse sous 48h ouvrées',
                    'Déplacement gratuit pour estimation',
                    'Garantie décennale sur tous les travaux',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--terra)', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.8rem', color: 'var(--cream-muted)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: real form with server action */}
            <Suspense fallback={<div style={{ minHeight: 400 }} />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  )
}
