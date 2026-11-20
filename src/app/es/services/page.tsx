import Link from 'next/link'
import type { Metadata } from 'next'
import { esServices } from './_data'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Nuestros servicios | Moqueta, suelo vinílico, alfombras a medida',
  description:
    'Descubra todos los servicios de CB Sols: colocación de moqueta, lamas y baldosas LVT, vinílico en rollo, alfombras a medida, felpudos de entrada, salas de cine en casa, rincones de lectura, limpieza de moqueta. Artesano especialista en Charente-Maritime.',
  alternates: {
    canonical: 'https://cbsols.fr/es/services',
    languages: { 'fr-FR': 'https://cbsols.fr/services', en: 'https://cbsols.fr/en/services', es: 'https://cbsols.fr/es/services', },
  },
}

export default function ServicesPageEn() {
  return (
    <>
      <div style={{ paddingTop: '72px' }}>
        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Especialidad</div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              Nuestros servicios
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', maxWidth: '560px', lineHeight: 1.7, margin: 0 }}>
              Especialista en revestimientos de suelo desde hace más de 28 años en Charente-Maritime. CB Sols acompaña a clientes particulares y profesionales de principio a fin: asesoramiento, suministro, colocación y mantenimiento.
            </p>
          </div>
        </section>

        {/* Services list */}
        <section style={{ padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {esServices.map((service, i) => (
                <Link key={service.slug} href={`/es/services/${service.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
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
                      Explorar →
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
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Mantenimiento · Servicio recurrente</div>
                <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                  Limpieza de moqueta <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>por inyección-extracción.</em>
                </h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                  Un mantenimiento periódico prolonga la vida de una moqueta entre un 30 y un 50 %. Hoteles, oficinas, restaurantes: trabajamos sin interrumpir su actividad, con contratos anuales disponibles.
                </p>
                <Button href="/es/services/nettoyage-moquette" variant="primary" size="md">
                  Explorar el servicio
                </Button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { val: '×2', label: 'Vida útil de la moqueta' },
                  { val: '95%', label: 'De alérgenos extraídos' },
                  { val: '2 a 4h', label: 'De secado activo' },
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
              ¿Necesita un presupuesto?
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Cuéntenos su proyecto y le responderemos en un plazo de 48 horas.
            </p>
            <Button href="/es/contact" variant="primary" size="md">Solicitar un presupuesto</Button>
          </div>
        </section>
      </div>
    </>
  )
}
