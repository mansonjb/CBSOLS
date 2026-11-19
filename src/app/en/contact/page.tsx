import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Contact & Free Quote | CB Sols La Rochelle',
  description:
    'Ask CB Sols for your free quote. Floor-covering craftsman in La Rochelle, Île de Ré and Charente-Maritime. Reply within 48h.',
  alternates: {
    canonical: 'https://cbsols.fr/en/contact',
    languages: { 'fr-FR': 'https://cbsols.fr/contact', en: 'https://cbsols.fr/en/contact' },
  },
}

const waNumber = company.phoneClean.replace('+', '')
const waMessage = encodeURIComponent('Hello CB Sols, I would like a quote for my project.')

export default function ContactPageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem', minHeight: '80vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '6rem', alignItems: 'start' }}>

            {/* Left: info */}
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Contact</div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Let&apos;s talk about<br /><em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>your project.</em>
              </h1>
              <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '3rem' }}>
                Free quote within 48h. We travel across the whole of Charente-Maritime to assess your project.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>Phone</div>
                  <a href={`tel:${company.phoneClean}`} style={{ fontSize: '1.75rem', fontFamily: 'var(--font-sans)', color: 'var(--dark)', textDecoration: 'none', fontWeight: 800 }}>
                    {company.phone}
                  </a>
                </div>
                <div>
                  <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>Email</div>
                  <a href={`mailto:${company.email}`} style={{ fontSize: '1rem', color: 'var(--cream-muted)', textDecoration: 'none' }}>{company.email}</a>
                </div>
                <div>
                  <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>Showroom (by appointment)</div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', margin: 0, lineHeight: 1.6 }}>
                    {company.address.full}
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>Service area</div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', margin: 0, lineHeight: 1.6 }}>
                    {company.zones.join(' · ')}
                  </p>
                </div>

                <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Free quote, no obligation',
                    'Reply within 48 working hours',
                    'Free travel for an estimate',
                    'Ten-year structural guarantee on all work',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--terra)', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.8rem', color: 'var(--cream-muted)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: contact CTAs */}
            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '14px', padding: 'clamp(2rem, 4vw, 3rem)' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem', fontWeight: 700 }}>Get in touch</div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
                The fastest way to a quote.
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, margin: '0 0 2rem' }}>
                Call us, send an email with your plans or a few photos, or message us on WhatsApp. We reply within 48 working hours and arrange a free on-site visit.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Button href={`tel:${company.phoneClean}`} external variant="primary" size="md" style={{ display: 'flex', width: '100%' }}>
                  Call {company.phone}
                </Button>
                <Button href={`mailto:${company.email}`} external variant="outline" size="md" style={{ display: 'flex', width: '100%' }}>
                  Email us
                </Button>
                <a
                  href={`https://wa.me/${waNumber}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'none', borderRadius: '999px', fontWeight: 600 }}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
