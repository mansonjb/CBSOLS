import Link from 'next/link'
import type { Metadata } from 'next'
import { enServices } from './_data'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Our Services | Carpet, Vinyl Flooring, Bespoke Rugs',
  description:
    'Discover every CB Sols service: carpet fitting, LVT planks and tiles, sheet vinyl, bespoke rugs, entrance matting, home cinema rooms, reading nooks, carpet cleaning. Specialist craftsman in Charente-Maritime.',
  alternates: {
    canonical: 'https://cbsols.fr/en/services',
    languages: { 'fr-FR': 'https://cbsols.fr/services', en: 'https://cbsols.fr/en/services' },
  },
}

export default function ServicesPageEn() {
  return (
    <>
      <div style={{ paddingTop: '72px' }}>
        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Expertise</div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              Our services
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', maxWidth: '560px', lineHeight: 1.7, margin: 0 }}>
              Floor-covering specialist for over 28 years in Charente-Maritime. CB Sols guides private and professional clients from start to finish: advice, supply, fitting and maintenance.
            </p>
          </div>
        </section>

        {/* Services list */}
        <section style={{ padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {enServices.map((service, i) => (
                <Link key={service.slug} href={`/en/services/${service.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
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
                      Explore →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Recurring service: cleaning */}
        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Maintenance · Recurring service</div>
                <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                  Carpet cleaning <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>by hot-water extraction.</em>
                </h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                  Periodic maintenance extends a carpet&apos;s life by 30 to 50%. Hotels, offices, restaurants: we work without interrupting your activity, with annual contracts available.
                </p>
                <Button href="/en/services/nettoyage-moquette" variant="primary" size="md">
                  Explore the service
                </Button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { val: '×2', label: 'Carpet lifespan' },
                  { val: '95%', label: 'Of allergens extracted' },
                  { val: '2 to 4h', label: 'Of active drying' },
                ].map((s) => (
                  <div key={s.label} style={{ padding: '1.25rem 1.5rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg)', borderLeft: '3px solid var(--terra)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--dark)', fontWeight: 500 }}>{s.label}</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--terra)', lineHeight: 1, flexShrink: 0 }}>{s.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '4rem 2rem 6rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
              Need a quote?
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Tell us about your project and we&apos;ll get back to you within 48 hours.
            </p>
            <Button href="/en/contact" variant="primary" size="md">Request a quote</Button>
          </div>
        </section>
      </div>
    </>
  )
}
