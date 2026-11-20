import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Showroom de revestimientos de suelo en La Rochelle | CB Sols, con cita previa',
  description:
    'Visite el showroom de CB Sols en Villedoux (a 10 min de La Rochelle): más de 500 muestras de EGE, Gerflor, objectflor, Bostik y Romus para ver in situ. Con cita previa.',
  alternates: {
    canonical: 'https://cbsols.fr/es/showroom',
    languages: { 'fr-FR': 'https://cbsols.fr/showroom', en: 'https://cbsols.fr/en/showroom', es: 'https://cbsols.fr/es/showroom', },
  },
}

export default function ShowroomPageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Showroom · Con cita previa</div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
            Venga a tocar,<br />ver, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>elegir.</em>
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', maxWidth: '560px', lineHeight: 1.7 }}>
            Nuestro showroom es un espacio tranquilo, lejos de las grandes superficies. Le recibe un experto que se toma el tiempo de entender su proyecto, su uso y sus deseos.
          </p>
        </div>
      </section>

      {/* How a visit unfolds */}
      <section style={{ padding: '4.5rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem' }}>Cómo transcurre una visita</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 700, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.02em', maxWidth: '640px', lineHeight: 1.15 }}>
            Una hora para entender su proyecto, 48 horas para presupuestarlo.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {[
              { num: '01', title: 'Conversación inicial', desc: 'Hablamos de su espacio, su uso, el tránsito, la luz. Cada condicionante orienta la elección del material.' },
              { num: '02', title: 'Selección de muestras', desc: 'Identificamos de 5 a 10 referencias adecuadas entre nuestras más de 500 muestras disponibles in situ: material, color, acabado.' },
              { num: '03', title: 'Verlo en contexto', desc: 'Para proyectos a medida, llevamos las muestras para que pueda verlas en contexto sobre el terreno, con la luz de su espacio. Para referencias específicas que no tenemos en stock, las pedimos a los fabricantes en un plazo de 5 a 10 días.' },
              { num: '04', title: 'Visita técnica y presupuesto en 48 h', desc: 'La visita técnica a domicilio es obligatoria antes de cualquier valoración: comprobamos la planeidad, la humedad residual y el estado del soporte. Después recibe un presupuesto detallado: suministro, instalación, preparación, plazos.' },
            ].map((step) => (
              <div key={step.num} style={{ borderTop: '2px solid var(--terra)', paddingTop: '1.5rem' }}>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--terra)', fontWeight: 600, marginBottom: '0.75rem' }}>{step.num}</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.75rem', fontFamily: 'var(--font-sans)' }}>{step.title}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', margin: 0, lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Lo que encontrará</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { label: 'Más de 500 muestras in situ', desc: 'Una gama muy amplia de EGE, Gerflor, objectflor, Bostik y Romus para ver y manipular en el showroom' },
                  { label: 'Asesoramiento personalizado', desc: 'Valentin Prévoteau o un miembro de su equipo le orienta en su elección' },
                  { label: 'Muestras pedidas bajo petición', desc: 'Para las referencias que le interesen y no tengamos en stock en el showroom, las pedimos al fabricante en un plazo de 5 a 10 días para la aprobación final.' },
                  { label: 'Visualización in situ', desc: 'Le ayudamos a imaginar el resultado final en su espacio con herramientas de visualización' },
                  { label: 'Visita técnica obligatoria', desc: 'Siempre nos desplazamos al lugar antes de presupuestar para evaluar el soporte y garantizar un presupuesto sin sorpresas' },
                  { label: 'Presupuesto en 48 h', desc: 'Tras la visita técnica, se envía por correo un presupuesto detallado: suministro, instalación, preparación del soporte, plazos' },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--terra)', marginTop: '0.5rem', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--cream)', marginBottom: '0.25rem' }}>{item.label}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', padding: '3rem' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '2rem' }}>Pedir cita</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-muted)', marginBottom: '0.5rem' }}>Dirección</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--cream)', margin: 0, lineHeight: 1.6 }}>
                    8 rue des Merises, ZA les Cerisiers<br />17230 Villedoux<br />
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>(a 10 minutos de La Rochelle)</span>
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-muted)', marginBottom: '0.5rem' }}>Contacto</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--cream)', margin: 0 }}>{company.contact}</p>
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-muted)', marginBottom: '0.5rem' }}>Horario</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--cream-muted)', margin: 0 }}>Lun – Vie · 8:00 – 18:00<br />Solo con cita previa</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Button href={`tel:${company.phoneClean}`} external variant="primary" size="md" style={{ display: 'flex', width: '100%' }}>
                  Llamar para pedir cita
                </Button>
                <Button href="/es/contact" variant="outline" size="md" style={{ display: 'flex', width: '100%' }}>
                  Página de contacto
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
