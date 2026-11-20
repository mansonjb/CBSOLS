import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Presupuesto gratuito de revestimiento de suelo | Respuesta en 48 h',
  description: 'Pida su presupuesto gratuito y sin compromiso de revestimiento de suelo: moqueta, vinilo, alfombras a medida. Respuesta en 48 h en Charente-Maritime. CB Sols, más de 28 años de experiencia.',
  alternates: {
    canonical: 'https://cbsols.fr/es/devis-revetement-sol',
    languages: { 'fr-FR': 'https://cbsols.fr/devis-revetement-sol', en: 'https://cbsols.fr/en/devis-revetement-sol', es: 'https://cbsols.fr/es/devis-revetement-sol', },
  },
}

const waNumber = company.phoneClean.replace('+', '')
const waMessage = encodeURIComponent('Hola CB Sols, me gustaría un presupuesto para mi proyecto.')

const reassurances = [
  { title: '100% gratuito', desc: 'Visita y valoración incluidas' },
  { title: 'Respuesta en 48 h', desc: 'Un único interlocutor' },
  { title: 'Sin compromiso', desc: 'Usted decide con total libertad' },
]

const etapes = [
  { step: 'Usted describe su proyecto', desc: 'Tipo de suelo, estancia afectada, superficie aproximada, su municipio. Lleva dos minutos, y una duda sobre la superficie no es problema, para eso estamos.' },
  { step: 'Hablamos y medimos', desc: 'Una llamada para concretar la necesidad y, después, una visita a domicilio cuando conviene. Comprobamos el soporte, tomamos las medidas exactas y le aconsejamos el material adecuado.' },
  { step: 'Usted recibe su presupuesto', desc: 'Un documento claro en 48 horas, desglosado línea a línea. Se toma su tiempo para pensarlo. Es libre de aceptar o no, sin insistencias.' },
]

const inclus = [
  'El suministro del revestimiento elegido, con la marca y la gama indicadas',
  'La preparación del soporte, con nivelación incluida si hace falta',
  'La instalación a cargo nuestro, nunca subcontratada',
  'Los acabados, rodapiés, perfiles de transición y uniones',
  'La retirada de residuos y la limpieza de la obra al final de la instalación',
  'La garantía decenal y nuestro compromiso con el acabado',
]

const faq = [
  { q: '¿El presupuesto es realmente gratuito?', a: 'Sí, por completo. El estudio de su proyecto, la visita a domicilio y la valoración detallada no le cuestan nada ni le comprometen a nada. Solo paga si decide confiarnos la obra.' },
  { q: '¿Cuánto tardan en responder?', a: 'Nos comprometemos a responderle en un plazo de 48 horas laborables desde su solicitud. En la práctica, un primer contacto suele producirse al día siguiente para encuadrar la necesidad y concertar una visita si es útil. El presupuesto detallado le llega dentro de los dos días siguientes a nuestra conversación o visita. Si su proyecto es urgente, díganoslo y hacemos lo posible por acelerar. Nunca se queda sin noticias: si necesitamos un dato, le llamamos en lugar de dejar su solicitud parada.' },
  { q: '¿Siempre hay que desplazarse?', a: 'No siempre. Para un proyecto sencillo y bien descrito, por ejemplo moqueta en una habitación, a menudo podemos elaborar una primera valoración a distancia, a partir de sus medidas y de unas fotos. Sin embargo, en cuanto el soporte es incierto, la superficie es grande o los acabados son delicados, la visita sigue siendo la garantía de un presupuesto justo. Es gratuita y sin compromiso. A menudo diez minutos sobre el terreno evitan un disgusto a mitad de la obra.' },
  { q: '¿Trabajan en mi municipio?', a: 'Trabajamos por toda Charente-Maritime, de La Rochelle a Royan pasando por Rochefort, Saintes, la Île de Ré y la Île d\'Oléron. También nos desplazamos con regularidad más allá, por toda Nouvelle-Aquitaine, para proyectos de particulares o profesionales. Si tiene dudas sobre su municipio, llámenos o indíquelo en el formulario: le diremos con franqueza si el desplazamiento tiene sentido para su proyecto. Preferimos ser honestos de entrada antes que dejarle esperando una obra que no podríamos hacer como es debido.' },
  { q: '¿Me comprometo si acepto el presupuesto?', a: 'Aceptar el presupuesto solo confirma que desea iniciar la obra en las condiciones indicadas. Hasta que no lo haya firmado, no se compromete a nada, e incluso después de la visita sigue teniendo total libertad. Una vez firmado, el presupuesto hace las veces de contrato: fija el precio, las prestaciones y los plazos acordados, lo que le protege tanto a usted como a nosotros. Ninguna cifra que cambie por el camino, ninguna prestación añadida sin su acuerdo. Ese es precisamente el papel de un presupuesto detallado.' },
  { q: '¿Pueden presupuestar la instalación sobre un suelo existente?', a: 'Sí, y es muy habitual. En muchos casos, un revestimiento nuevo puede instalarse directamente sobre baldosas, un parqué antiguo o una moqueta existente, siempre que el soporte sea firme y estable. Esto evita el coste y el ruido de un desmontaje. Todo depende del estado real del suelo existente: una baldosa que suena a hueco, un parqué que se mueve o una moqueta empapada de humedad cambian las cosas. Eso es exactamente lo que comprobamos en la visita, para decirle qué es viable y qué va a durar. El presupuesto siempre indica la solución elegida.' },
  { q: '¿El presupuesto incluye retirar el suelo antiguo?', a: 'Cuando hace falta el desmontaje, aparece claramente en el presupuesto, con su coste detallado y la retirada de escombros. Cuando podemos instalar directamente sobre el suelo existente, esa línea desaparece y usted ve el ahorro de inmediato. Nuestro principio es sencillo: usted debe entender cada partida de la factura, el desmontaje incluido. Ningún importe a tanto alzado sin desglosar, ninguna sorpresa el día de la obra. Si tras abrir la obra encontramos un problema oculto grave bajo el suelo antiguo, le avisamos y lo confirmamos juntos antes de seguir adelante.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://cbsols.fr/es/devis-revetement-sol#service',
      name: 'Presupuesto gratuito de revestimiento de suelo',
      provider: { '@id': 'https://cbsols.fr/#localbusiness' },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
        { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        { '@type': 'Country', name: 'France' },
      ],
      serviceType: 'Presupuesto y valoración de revestimientos de suelo',
      description: 'Un presupuesto gratuito y sin compromiso para la instalación de revestimientos de suelo: moqueta, vinilo, alfombras a medida. Visita a domicilio, valoración detallada línea a línea, respuesta en 48 horas en Charente-Maritime.',
    },
    { '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
        { '@type': 'ListItem', position: 2, name: 'Presupuesto de revestimiento de suelo', item: 'https://cbsols.fr/es/devis-revetement-sol' },
      ],
    },
  ],
}

export default function DevisRevetementSolPageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ padding: '5rem 2rem 3.5rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(44, 85, 48, 0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '920px', margin: '0 auto', position: 'relative' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Presupuesto gratuito</div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Su presupuesto de revestimiento de suelo,<br />
            <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>gratuito, en 48 h.</em>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--cream-muted)', lineHeight: 1.7, maxWidth: '680px', marginBottom: '2rem' }}>
            Moqueta, suelo de vinilo, alfombras a medida: pida su presupuesto gratuito y sin compromiso. Visita a domicilio, valoración detallada línea a línea, más de 28 años de experiencia en Charente-Maritime.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {reassurances.map((r) => (
              <div key={r.title} style={{ minWidth: '160px' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--terra)' }}>{r.title}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '2rem' }}>Cómo funciona</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem' }}>
            {etapes.map((e, i) => (
              <div key={e.step} style={{ borderTop: '2px solid var(--terra)', paddingTop: '1.5rem' }}>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--terra)', fontWeight: 700, marginBottom: '0.75rem' }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.75rem', fontFamily: 'var(--font-sans)' }}>{e.step}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.7 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>Lo que incluye el presupuesto</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {inclus.map((it) => (
                <li key={it} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--dark-2)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--terra)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '14px', padding: '2rem', borderLeft: '3px solid var(--terra)' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem', fontWeight: 700 }}>Pida su presupuesto</div>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, margin: '0 0 1.75rem' }}>
              Llámenos, envíenos por correo sus planos o unas fotos, o escríbanos por WhatsApp. Respondemos en 48 horas laborables.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Button href={`tel:${company.phoneClean}`} external variant="primary" size="md" style={{ display: 'flex', width: '100%' }}>Llamar al {company.phone}</Button>
              <Button href={`mailto:${company.email}`} external variant="outline" size="md" style={{ display: 'flex', width: '100%' }}>Escríbanos</Button>
              <a href={`https://wa.me/${waNumber}?text=${waMessage}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'none', borderRadius: '999px', fontWeight: 600 }}>WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Preguntas frecuentes</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
            Sus preguntas sobre el presupuesto
          </h2>
          {faq.map((item, i) => (
            <details key={i} style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
              <summary style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--dark)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                <span>{item.q}</span>
                <span style={{ color: 'var(--terra)', fontSize: '1.4rem', lineHeight: 1, flexShrink: 0 }}>+</span>
              </summary>
              <div style={{ fontSize: '0.9rem', color: 'var(--cream-muted)', lineHeight: 1.75, marginTop: '1rem' }}>{item.a}</div>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}
