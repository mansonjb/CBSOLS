import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Contacto y presupuesto gratuito | CB Sols La Rochelle',
  description:
    'Pida su presupuesto gratuito a CB Sols. Artesano instalador de revestimientos de suelo en La Rochelle, Île de Ré y Charente-Maritime. Respuesta en 48 h.',
  alternates: {
    canonical: 'https://cbsols.fr/es/contact',
    languages: { 'fr-FR': 'https://cbsols.fr/contact', en: 'https://cbsols.fr/en/contact', es: 'https://cbsols.fr/es/contact', },
  },
}

const waNumber = company.phoneClean.replace('+', '')
const waMessage = encodeURIComponent('Hola CB Sols, me gustaría un presupuesto para mi proyecto.')

export default function ContactPageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem', minHeight: '80vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '6rem', alignItems: 'start' }}>

            {/* Left: info */}
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Contacto</div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Hablemos de<br /><em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>su proyecto.</em>
              </h1>
              <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '3rem' }}>
                Presupuesto gratuito en 48 h. Nos desplazamos por toda Charente-Maritime para estudiar su proyecto.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>Teléfono</div>
                  <a href={`tel:${company.phoneClean}`} style={{ fontSize: '1.75rem', fontFamily: 'var(--font-sans)', color: 'var(--dark)', textDecoration: 'none', fontWeight: 800 }}>
                    {company.phone}
                  </a>
                </div>
                <div>
                  <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>Email</div>
                  <a href={`mailto:${company.email}`} style={{ fontSize: '1rem', color: 'var(--cream-muted)', textDecoration: 'none' }}>{company.email}</a>
                </div>
                <div>
                  <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>Showroom (con cita previa)</div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', margin: 0, lineHeight: 1.6 }}>
                    {company.address.full}
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem' }}>Zona de intervención</div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', margin: 0, lineHeight: 1.6 }}>
                    {company.zones.join(' · ')}
                  </p>
                </div>

                <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Presupuesto gratuito y sin compromiso',
                    'Respuesta en 48 horas laborables',
                    'Desplazamiento gratuito para la valoración',
                    'Garantía decenal en todos los trabajos',
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
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem', fontWeight: 700 }}>Póngase en contacto</div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
                La vía más rápida para un presupuesto.
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, margin: '0 0 2rem' }}>
                Llámenos, envíenos un correo con sus planos o unas fotos, o escríbanos por WhatsApp. Respondemos en 48 horas laborables y concertamos una visita gratuita a su domicilio.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Button href={`tel:${company.phoneClean}`} external variant="primary" size="md" style={{ display: 'flex', width: '100%' }}>
                  Llamar al {company.phone}
                </Button>
                <Button href={`mailto:${company.email}`} external variant="outline" size="md" style={{ display: 'flex', width: '100%' }}>
                  Escríbanos
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
