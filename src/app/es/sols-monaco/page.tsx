import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { Building2, Castle, Mail, MapPin, Sparkles, Store, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: "Suelos y moquetas de excepción en Mónaco | Instalación premium",
  description: 'Diseño, confección en taller e instalación de moqueta, alfombras a medida y suelos de alta gama para apartamentos premium, suites de hotel de lujo, yates y oficinas en Mónaco.',
  alternates: {
    canonical: 'https://cbsols.fr/es/sols-monaco',
    languages: { 'fr-FR': 'https://cbsols.fr/sols-monaco', en: 'https://cbsols.fr/en/sols-monaco', es: 'https://cbsols.fr/es/sols-monaco', },
  },
}

const usages = [
  { title: 'Apartamentos en el Principado', desc: 'Usted tiene un apartamento en el Carré d\'Or, en Monte-Carlo o en la Tour Odéon. Instalamos una moqueta de pura lana virgen o una alfombra a medida en sus salones y dormitorios. Casado de motivos aprobado de antemano, ajuste al milímetro contra la carpintería. Su arquitecto de interiores sigue siendo el interlocutor principal.' },
  { title: 'Suites de hoteles de lujo', desc: 'Usted gestiona una suite en el Hôtel de Paris, el Hermitage o el Métropole. Trabajamos en locales ocupados, en franjas horarias negociadas con su dirección técnica. Ninguna molestia para los huéspedes, todo limpio al final de cada jornada.' },
  { title: 'Yates de Port Hercule', desc: 'Usted tiene prevista una reforma en su yate. Instalamos en el salón, el camarote del armador y los pasillos. Lana ignifugada, polipropileno premium para las zonas expuestas. Coordinamos con el capitán y el arquitecto naval.' },
  { title: 'Oficinas y family offices', desc: 'Usted recibe a sus clientes en un despacho confidencial. El suelo marca el tono desde la entrada. Un acabado silencioso, un cuidado aislamiento acústico. Instalación en horas de menor actividad, su actividad no se detiene.' },
]

const exigences = [
  { title: 'Acceso y logística', desc: 'Entrega de camiones regulada en el Principado, franjas horarias precisas, aparcamiento restringido, montacargas que reservar. Nuestro equipo se anticipa y coordina con la conserjería del edificio, el administrador de fincas o la dirección técnica del hotel. Cada rollo llega listo para instalar.' },
  { title: 'Discreción total', desc: 'Firmamos un acuerdo de confidencialidad si lo pide. Ninguna foto difundida, ningún nombre mencionado. Es la norma por defecto, después de veintisiete años, no una opción que marcar. Su equipo y el nuestro trabajan con confianza.' },
  { title: 'Coordinación con los demás oficios', desc: 'En un proyecto de este nivel, usted ya cuenta con el arquitecto de interiores, el ebanista, el tapicero. Nos integramos en el calendario sin retrasos. Intervenimos en penúltimo lugar para evitar que otro oficio dañe la moqueta nueva.' },
  { title: 'Acabados al milímetro', desc: 'En Mónaco, el detalle cuenta. Trazado preciso, casado de motivos aprobado de antemano, perfiles Romus de latón cepillado o bronce patinado, juntas termosoldadas. Ningún perfil de aluminio estándar, jamás. Las transiciones casan con la carpintería de la estancia.' },
]

const materiaux = [
  { name: 'Axminster a medida', desc: 'Tejido británico de alta gama, motivos a medida de hasta 36 colores, casado estricto. La referencia para los grandes hoteles de lujo y los interiores señoriales. Plazo de fábrica de 8 a 12 semanas, que hay que anticipar desde el presupuesto.' },
  { name: 'Wilton tejido', desc: 'Calidad de hotel de lujo, tejido denso, vida de 15 a 20 años con un uso privado cuidadoso. Un tacto firme, un envejecimiento noble. Disponible liso, jaspeado o con un discreto motivo geométrico. Ideal para dormitorios principales y bibliotecas.' },
  { name: 'Alfombras Aubusson y Savonnerie reconstruidas', desc: 'Para interiores neoclásicos y hoteles con historia. Reproducción de motivos históricos en pura lana virgen, cenefa cosida a mano, dimensiones a medida. Plazo de 10 a 16 semanas según la complejidad del motivo.' },
  { name: 'Alfombras de seda y pura lana virgen', desc: 'Para salones señoriales. Un tacto excepcional, un brillo sutil, un tratamiento antimanchas compatible con el servicio de limpieza. Reservadas para estancias de representación de tránsito moderado.' },
  { name: 'Lana EGE Highline ignifugada', desc: 'Para suites de hoteles de lujo y yates. Resistencia al fuego conforme, tratamiento ignífugo en el núcleo de la fibra, una amplia paleta de colores. El material soporta ritmos intensivos sin perder su aspecto.' },
  { name: 'Perfiles Romus de latón cepillado y bronce patinado', desc: 'Acabados para transiciones, mamperlanes y uniones entre materiales. Coordinados con la carpintería y la herrajería de la estancia. Perfiles a medida posibles para proyectos con requisitos particulares.' },
]

const quartiers = [
  { nom: "Carré d'Or", detail: 'El epicentro del lujo monegasco, apartamentos premium y casas señoriales. El corazón de nuestro trabajo en el Principado.' },
  { nom: 'Monte-Carlo', detail: 'Casino, Hôtel de Paris, Hôtel Hermitage, One Monte-Carlo. Suites de hoteles de lujo, residencias de excepción, despachos ejecutivos.' },
  { nom: 'Larvotto', detail: 'Primera línea de mar, edificios modernos y residencias nuevas de alta gama. Vistas al Mediterráneo, marcados requisitos acústicos.' },
  { nom: 'Fontvieille', detail: 'El puerto deportivo, residencias de prestigio y el Port de Fontvieille. Apartamentos con vistas al puerto y yates amarrados.' },
  { nom: 'La Condamine', detail: 'Port Hercule y residencias clásicas. Reformas de yates, apartamentos con carácter junto al puerto.' },
  { nom: 'Tour Odéon', detail: 'Apartamentos premium en altura, penthouse, dúplex. Estrictas limitaciones de acceso por montacargas.' },
  { nom: 'Beausoleil', detail: 'El municipio fronterizo del lado francés. Residencias de alta gama con vistas al Principado.' },
  { nom: "Cap-d'Ail", detail: 'El lado francés inmediato. Villas, propiedades frente al mar, acceso directo a Mónaco.' },
  { nom: 'Èze y Roquebrune-Cap-Martin', detail: 'Residencias señoriales a las puertas de Mónaco. Propiedades con historia, fincas privadas, requisitos patrimoniales.' },
]

const process = [
  { step: 'Primer contacto', desc: 'Una llamada o un correo para reunir los puntos clave: tipo de proyecto, superficie estimada, calendario, nivel de confidencialidad esperado. Un acuerdo de confidencialidad firmado si se solicita antes de cualquier visita.' },
  { step: 'Visita a Mónaco', desc: 'Una visita organizada en un plazo de 1 a 2 semanas. Medición por láser o plantilla según la configuración, estudio de las limitaciones de acceso del edificio, fotos para coordinar los colores de la carpintería.' },
  { step: 'Elección del material', desc: 'El showroom de Villedoux o muestras enviadas directamente a Mónaco, al arquitecto de interiores o al yate. Validación final con la luz del lugar, nunca en un showroom.' },
  { step: 'Confección en taller', desc: 'De 3 a 10 semanas según la gama: Axminster a medida, Wilton, seda, lana. Premontaje en seco en el taller de La Rochelle para validar el ajuste antes del transporte al Principado.' },
  { step: 'Instalación en Mónaco', desc: 'Un equipo desplazado al lugar, alojamiento incluido en el presupuesto, un calendario fijado según la disponibilidad del cliente. Una limpieza completa en la entrega, acabados revisados con el arquitecto o el cliente.' },
]

const faq = [
  { q: '¿Cómo funciona un proyecto en Mónaco si su taller está en La Rochelle?', a: 'Nuestro taller permanece en Villedoux, cerca de La Rochelle, donde se realiza la confección. Para Mónaco, organizamos el desplazamiento del equipo en dos etapas: una visita de medición al inicio del proyecto y, después, la instalación al final. El alojamiento y la logística están incluidos en el presupuesto. Los rollos llegan listos para instalar, trazados al milímetro, lo que reduce el tiempo in situ a entre 2 y 6 días según la superficie.' },
  { q: '¿Se desplazan para las visitas de medición?', a: 'Sí, siempre. Ningún proyecto en Mónaco se presupuesta sin una visita previa. Los apartamentos del Principado tienen demasiadas particularidades: varios niveles, curvas suaves, integración con la carpintería existente, condicionantes acústicos. La visita lleva de medio día a un día según la superficie, con los costes incluidos en el presupuesto si el proyecto se confirma.' },
  { q: '¿Trabajan en locales ocupados en las suites de hotel?', a: 'Sí, es incluso habitual en los hoteles de lujo. El trabajo se organiza por etapas: una o dos suites al día, franjas horarias negociadas con la dirección técnica del hotel, montacargas reservados, recortes retirados al final de cada jornada. Ninguna molestia para los huéspedes de las suites contiguas, la condición innegociable de un proyecto hotelero logrado.' },
  { q: '¿Qué plazos para una alfombra Axminster a medida?', a: 'Cuente con un plazo de fábrica de 8 a 12 semanas para un Axminster a medida, con el motivo que hay que aprobar de antemano sobre una muestra de color. Para un Wilton tejido, de 4 a 8 semanas. Para una alfombra Savonnerie reconstruida, de 10 a 16 semanas según la complejidad. A esto se suman la confección en taller y la instalación. Un proyecto completo de apartamento en el Carré d\'Or se planifica a lo largo de 4 a 6 meses desde la firma hasta la entrega, más si el motivo Axminster necesita varias rondas de prueba.' },
  { q: '¿Firman un acuerdo de confidencialidad (NDA)?', a: 'Sí, sin problema. La discreción es la norma por defecto en todos nuestros proyectos en Mónaco. Firmamos el acuerdo de confidencialidad facilitado por el cliente, su abogado o su family office. Ninguna foto se difunde sin acuerdo por escrito, ningún nombre se comparte, ninguna referencia se utiliza en nuestra comunicación. Nuestro equipo está formado en confidencialidad.' },
  { q: '¿Cómo se gestiona la entrega del material a Mónaco?', a: 'El Principado impone normas estrictas de circulación y aparcamiento para los camiones. Nuestras entregas se organizan con la conserjería del edificio o la dirección técnica del hotel: una franja precisa, un montacargas reservado, protección de los suelos y las paredes comunes. Los rollos se almacenan in situ o en un depósito local seguro si el apartamento aún no está disponible.' },
  { q: '¿Trabajan con arquitectos de interiores locales?', a: 'Sí, con regularidad. Nos integramos en los equipos de diseño ya establecidos, con el arquitecto de interiores como interlocutor principal para la elección de los materiales y el trazado. Las muestras se envían directamente a su estudio para la validación con la luz de referencia del proyecto. Facilitamos las fichas técnicas, los certificados de resistencia al fuego y la trazabilidad de los materiales necesarios para los expedientes de proyectos premium.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', '@id': 'https://cbsols.fr/es/sols-monaco#service', name: "Suelos y moquetas de excepción en Mónaco", provider: { '@id': 'https://cbsols.fr/#localbusiness' }, areaServed: [{ '@type': 'Country', name: 'Monaco' }, { '@type': 'City', name: 'Monaco' }, { '@type': 'City', name: 'Beausoleil' }, { '@type': 'City', name: 'Roquebrune-Cap-Martin' }, { '@type': 'City', name: "Cap-d'Ail" }], serviceType: 'Instalación de moqueta, alfombras a medida y revestimientos de suelo de alta gama en el Principado de Mónaco', description: 'Diseño, confección en taller e instalación de moqueta, alfombras a medida y suelos de alta gama para apartamentos premium, suites de hoteles de lujo, yates y oficinas en Mónaco.' },
    { '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' }, { '@type': 'ListItem', position: 2, name: 'Suelos en Mónaco', item: 'https://cbsols.fr/es/sols-monaco' }] },
  ],
}

export default function SolsMonacoPageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Suelos en Mónaco</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Suelos de excepción<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>en Mónaco.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Trabajo de precisión y acabados de muy alta gama. Un taller con sede en La Rochelle, desplazamientos organizados para proyectos premium en el Principado: apartamentos del Carré d&apos;Or, suites de hoteles de lujo, yates de Port Hercule, oficinas de empresa.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=sols-monaco" variant="primary" size="md">Solicitar un presupuesto</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nos desplazamos hasta usted</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Un proyecto en Mónaco exige una preparación impecable y una ejecución sin fallos. Es justo el terreno donde nuestro saber hacer da lo mejor de sí.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Para qué tipo de proyecto</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cuatro escenarios, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>una misma exigencia de acabado.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {usages.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Particularidades de Mónaco</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Cuatro exigencias <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propias de los proyectos en Mónaco.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Trabajar en el Principado no es trasladar un proyecto estándar. Estos son los cuatro puntos en torno a los cuales estructuramos nuestro método desde la primera visita.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {exigences.map((e, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>{e.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materiales y saber hacer para Mónaco</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Las gamas que llevamos <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>al Principado.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {materiaux.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '1.5rem 0', borderBottom: i < materiaux.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--terra)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#fff' }}>{i + 1}</span>
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.4rem' }}>{p.name}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro enfoque</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco pasos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux al Principado.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0' }}>
            {process.map((p, i) => (
              <div key={i} style={{ padding: '1.75rem', borderRight: i < process.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#fff' }}>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{p.step}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Barrios y lugares que cubrimos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Todo el Principado, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>y sus municipios fronterizos.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Nuestro equipo se desplaza por todo el Principado y los municipios fronterizos del lado francés, donde se concentran los proyectos premium de la Côte d&apos;Azur.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {quartiers.map((q, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{q.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{q.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Preguntas frecuentes</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Suelos en Mónaco, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas concretas.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faq.map((f, i) => (
              <details key={i} style={{ border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', padding: '1.25rem 1.5rem' }}>
                <summary style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--dark)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <span>{f.q}</span>
                  <span style={{ color: 'var(--terra)', fontSize: '1.2rem', flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.75, margin: '1rem 0 0' }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedCards
        sectionTitle="Ver también"
        sectionSubtitle="Nuestro saber hacer abarca otros mundos que pueden interesarle. Tómese su tiempo para explorar, haga sus preguntas, las responderemos."
        items={[
          { href: '/es/moquette-yacht', title: 'Moqueta para yates', teaser: 'Suelos a medida para yates: lanas marinas, caucho, instalación nocturna en puerto. Un nivel sin concesiones.', icon: Waves },
          { href: '/es/moquette-jet-prive', title: 'Moqueta para jet privado', teaser: 'Suelos para aviones de empresa: certificaciones aeronáuticas, lanas técnicas, acabado de alta costura.', icon: Sparkles },
          { href: '/es/moquette-chateau', title: 'Moqueta para castillos', teaser: 'Salones, escaleras monumentales, habitaciones de invitados. Una lana que dura medio siglo.', icon: Castle },
          { href: '/es/architectes', title: 'Para arquitectos', teaser: 'Documentación de materiales, muestras anotadas, presupuestos detallados. Nuestro papel es servir a su visión.', icon: Building2 },
          { href: '/es/showroom', title: 'Showroom de Villedoux', teaser: 'Venga a ver y tocar los materiales. Con cita previa, en Villedoux cerca de La Rochelle.', icon: Store },
          { href: '/es/contact', title: 'Contáctenos', teaser: 'Una pregunta, un proyecto, un presupuesto en 48 horas. El propietario le responde directamente.', icon: Mail },
        ]}
      />

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Su proyecto en Mónaco <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>en manos expertas.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita confidencial en el Principado. Un presupuesto detallado, acabados premium, discreción garantizada. Más de 28 años de saber hacer al servicio de proyectos de excepción.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=sols-monaco" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
