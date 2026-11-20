import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Moqueta para jet privado | Reforma de cabina de aviación de negocios',
  description: 'Instalación de moqueta en jets privados y aeronaves de negocios. Reforma de cabina en cuero y alfombras a medida para Cessna Citation, Falcon, Gulfstream, Bombardier. Normas al fuego FAA / EASA. CB Sols, La Rochelle.',
  alternates: {
    canonical: 'https://cbsols.fr/es/moquette-jet-prive',
    languages: { 'fr-FR': 'https://cbsols.fr/moquette-jet-prive', en: 'https://cbsols.fr/en/moquette-jet-prive', es: 'https://cbsols.fr/es/moquette-jet-prive', },
  },
  openGraph: {
    title: 'Moqueta para jet privado | Reforma de cabina de aviación de negocios',
    description: 'Moqueta de aviación de negocios certificada según FAA Part 25 y EASA CS-25. Fabricación en taller, instalación en hangar. Falcon, Gulfstream, Bombardier, Citation.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/moquette-jet-prive.jpg', width: 1200, height: 630 }],
  },
}

const cas = [
  { title: 'Cabina principal', desc: 'Moqueta a superficie completa, replanteo milimétrico alrededor de los raíles de los asientos, las escotillas de inspección y los pasos técnicos. En una cabina ancha (Global, Falcon 8X, G650), una tejeduría continua sin costura visible a lo largo del pasillo.' },
  { title: 'Vestíbulo y office', desc: 'Una zona muy usada por la tripulación y el servicio en vuelo. Polipropileno de aviación o nylon ignífugo para resistir golpes, manchas de café y el tránsito constante de las rotaciones.' },
  { title: 'Corredor de cabina de mando y aseo', desc: 'Superficies pequeñas pero con las limitaciones al fuego más estrictas, dada la proximidad a las zonas técnicas. Materiales certificados según los ensayos más severos, trazabilidad completa para el expediente del operador.' },
  { title: 'Alfombras y pasillos extraíbles', desc: 'Pasillos principales, peldaños de escalera en los jets de cabina ancha, alfombrillas de entrada. Fabricación cosida a mano con dobladillos reforzados, fijación de velcro de aviación para una retirada rápida durante las inspecciones.' },
]

const produits = [
  { name: 'Lana virgen más fibra de aramida Nomex', desc: 'La mezcla de referencia para la aviación de negocios de gama alta. La lana aporta suavidad y tacto, el Nomex asegura la clasificación al fuego A-1 según FAA Part 25 §853. Un gramaje de 900 a 1200 g/m² por zona, tintes de baja toxicidad.' },
  { name: 'Polipropileno de aviación tratado', desc: 'Para las zonas de servicio intensivo, office y vestíbulo. Una fibra 100 % hidrófoba, de secado rápido, con retardante de llama integrado. Supera el ensayo de combustión vertical de 12 segundos y el ensayo de combustión a 60 grados exigidos por la FAA.' },
  { name: 'Alfombras a medida cosidas a mano', desc: 'Una fabricación complementaria para pasillos y alfombrillas de entrada. Tejeduría Axminster o Wilton sobre un respaldo composite no halogenado, dobladillos cosidos a mano, dimensiones ajustadas al milímetro sobre el trazado de la cabina.' },
]

const process = [
  { step: 'Visita al hangar', desc: 'Un levantamiento en papel vegetal en el hangar de mantenimiento, fotos de alta definición, una conversación con el jefe de cabina y el responsable de mantenimiento. Identificadas las limitaciones de calendario y la ventana de trabajo.' },
  { step: 'Elección del material', desc: 'Colores y fibras elegidos al ritmo del decorador o del diseñador de cabina. Las certificaciones al fuego requeridas validadas según la matrícula de la aeronave (FAA, EASA, registro offshore).' },
  { step: 'Expediente técnico', desc: 'Reunido el expediente de trazabilidad: fichas de materiales, informes de ensayo al fuego, declaraciones de conformidad, marcado de lote. El documento entregado al operador para su expediente de conformidad.' },
  { step: 'Fabricación en taller', desc: 'Corte y preparación en el taller de Villedoux. El replanteo probado en seco antes del transporte al hangar. Una precisión esencial para cumplir la ventana de mantenimiento.' },
  { step: 'Instalación en hangar', desc: 'Trabajo durante la parada programada, adhesivos de poliuretano de aviación sin disolvente, acabados en umbrales y escotillas. Una entrega limpia, lista para volar al día siguiente.' },
]

const faq = [
  { q: '¿Qué moqueta está certificada para un jet privado?', a: 'Una moqueta de aviación de negocios debe cumplir la FAA Part 25 §853 (interiores de cabina) o §855 (compartimentos de carga) según la zona de aplicación, así como la EASA CS-25.853 por el lado europeo. Los ensayos clave son la combustión vertical de 12 segundos (velocidad de propagación de la llama), la combustión a 60 grados para los elementos cercanos a las salidas, la densidad de humo ASTM E662 y la toxicidad Boeing BSS 7239. Trabajamos exclusivamente con fibras certificadas, lana más Nomex o polipropileno de aviación tratado, con informes de ensayo actualizados.' },
  { q: '¿Cuánto tarda una reforma completa de la moqueta de cabina?', a: 'Para un jet mediano como un Falcon 2000 o un Citation Latitude, la fabricación en taller lleva de 5 a 8 días tras la aprobación del trazado. La instalación en hangar se extiende de 2 a 4 días según la complejidad, idealmente durante un C-check o una pasada de pintura. En una cabina ancha como un Global 7500 o un G650, cuente de 10 a 14 días de taller y de 5 a 7 días de instalación.' },
  { q: '¿Trabajan en Le Bourget y los aeropuertos de negocios?', a: 'Sí. Nos desplazamos a Le Bourget, Cannes-Mandelieu, Niza Côte d\'Azur, Saint-Tropez La Môle, Annecy Meythet, Burdeos-Mérignac, Biarritz, y a La Rochelle Île de Ré para nuestra zona local. El equipo móvil se ajusta a la ventana de mantenimiento fijada por el operador o la base FBO. Para rotaciones cortas, también podemos recibir la aeronave en un hangar asociado cerca de nuestro taller.' },
  { q: '¿Cuál es la diferencia con una moqueta de automoción premium?', a: 'La automoción premium cumple normas al fuego del orden de la FMVSS 302 o la ISO 3795, bastante menos exigentes que la FAA Part 25. Los umbrales de toxicidad del humo y de propagación de la llama requeridos en aviación son unas tres veces más estrictos. Las fibras y los respaldos también difieren: en un jet se exige Nomex o polipropileno tratado con un respaldo composite no halogenado, mientras que la automoción admite bases de espuma clásicas.' },
  { q: '¿Cómo funciona la coordinación con el fabricante o el operador?', a: 'Nos ponemos en contacto de antemano con el jefe de cabina, el responsable de mantenimiento y, si hace falta, la oficina técnica del fabricante o el titular del STC (Supplemental Type Certificate). El expediente técnico se envía para aprobación antes de pedir el material. Para las reformas estadounidenses, aportamos elementos compatibles con una certificación ARSA. Para las reformas EASA, un expediente Part 21 Subpart J o un trabajo bajo la responsabilidad Part 145 del operador.' },
  { q: '¿Qué trazabilidad aportan para la conformidad?', a: 'Cada metro cuadrado queda trazado: número de lote del fabricante, informes de ensayo al fuego (combustión vertical de 12 segundos, combustión a 60 grados, ASTM E662, BSS 7239), ficha técnica firmada, declaración de conformidad de los materiales. El conjunto se entrega en formato digital y en papel al responsable de mantenimiento, listo para incorporarse al manual de la aeronave y al CAMO.' },
  { q: '¿Fabrican también las alfombras extraíbles complementarias?', a: 'Sí. Pasillos de corredor, alfombrillas de entrada, alfombras de escalera en los jets de cabina ancha, alfombras del corredor de la cabina de mando. Fabricación cosida a mano en el taller, dobladillos reforzados, fijación de velcro de aviación para facilitar la retirada durante las inspecciones o una limpieza en profundidad. Materiales y certificaciones idénticos a los de la moqueta de cabina.' },
]

const specs = [
  { title: 'Normas al fuego de aviación', desc: 'FAA Part 25 §853 (interiores) o §855 (carga) por zona, EASA CS-25.853, clasificación A-1 (lana más Nomex), combustión vertical de 12 segundos, combustión a 60 grados para las zonas cercanas a las salidas, densidad de humo ASTM E662, toxicidad Boeing BSS 7239.' },
  { title: 'Peso limitado', desc: 'Cada kilo a bordo significa menos autonomía. La moqueta de aviación se mantiene en gramajes de 800 a 1200 g/m² como máximo, frente a los 2000 g/m² y más del ámbito náutico. Un respaldo de espuma ultrafino, sin excesos inútiles.' },
  { title: 'Materiales certificados', desc: 'Lana virgen más fibra de aramida Nomex para las cabinas premium, polipropileno de aviación tratado para las zonas de servicio. Un respaldo composite no halogenado, cinta de unión especial conforme a las exigencias de toxicidad del humo.' },
  { title: 'Trazabilidad completa', desc: 'Cada instalación va acompañada de un expediente de materiales completo: informes de ensayo, ficha técnica del fabricante, número de lote, declaración de conformidad. Para las reformas estadounidenses, elementos compatibles con ARSA. Para EASA, un expediente Part 21 o Part 145.' },
  { title: 'Adhesivos de aviación', desc: 'Adhesivos de poliuretano de aviación certificados, sin disolvente para que no ataquen el cuero Connolly o Edelman, la carpintería de raíz de arce, los chapados de madera preciosa. Aplicación dominada por nuestro equipo, ventilación del hangar respetada.' },
  { title: 'Instalación en una ventana programada', desc: 'Trabajamos exclusivamente durante las ventanas de mantenimiento fijadas por el operador. Un calendario ajustado, las normas del hangar respetadas, una limpieza absoluta, una entrega lista para volar.' },
]

const marques = [
  { name: 'Dassault Falcon', detail: '2000, 6X, 7X, 8X. Reformas de cabina al ritmo de la red de mantenimiento Dassault, expedientes de conformidad EASA.' },
  { name: 'Gulfstream', detail: 'G280, G500, G650, G700. Cabinas anchas para vuelos intercontinentales, replanteo ajustado a los largos pasillos centrales.' },
  { name: 'Bombardier', detail: 'Challenger 350 y 650, Global 6500 y 7500. La plataforma más ancha del mercado, fabricada en longitudes continuas.' },
  { name: 'Cessna Citation', detail: 'Mustang, XLS, Latitude, Longitude. Del light jet al super midsize, la gama más extendida de la aviación de negocios.' },
  { name: 'Embraer Phenom', detail: '100 y 300. Cabinas compactas, limitaciones de peso acentuadas, una elección de material a la altura.' },
  { name: 'Pilatus PC-24', detail: 'El superversátil, con acceso a aeropuertos cortos. Instalación ajustada a las rotaciones intensivas de chárter.' },
  { name: 'HondaJet', detail: 'Un light jet reciente, una cabina optimizada, una reforma de moqueta en contacto directo con la red de servicio de Honda Aircraft.' },
]

const aeroports = [
  { nom: 'París Le Bourget', detail: 'El principal aeropuerto de negocios de Europa. Trabajo en los FBO Universal Aviation, Signature y Advanced Air Support.' },
  { nom: 'Cannes-Mandelieu', detail: 'El hub histórico de la Riviera de la aviación de negocios. Reformas durante el final de temporada.' },
  { nom: 'Niza Côte d\'Azur', detail: 'La terminal de aviación de negocios Sky Valet. Coordinación con los operadores y jefes de cabina de la Riviera.' },
  { nom: 'Saint-Tropez La Môle', detail: 'La base aérea de los armadores de yates. Trabajos puntuales fuera de temporada.' },
  { nom: 'Annecy Meythet', detail: 'Tránsito alpino premium. Hangares asociados para paradas técnicas cortas.' },
  { nom: 'Burdeos-Mérignac', detail: 'Una base de aviación de negocios y un centro de mantenimiento Dassault Falcon. Coordinación con los talleres Sogerma y Dassault Aviation.' },
  { nom: 'Biarritz País Vasco', detail: 'Un hub para la costa vasca y el norte de España. Reformas posibles en un hangar asociado local.' },
  { nom: 'La Rochelle Île de Ré', detail: 'Nuestro aeropuerto local, a 20 minutos del taller de Villedoux. Instalación rápida en hangar.' },
  { nom: 'Cognac Châteaubernard', detail: 'Una base regional de helicópteros y aviación de negocios. Trabajo en aeronaves con base en la Charente.' },
  { nom: 'Lyon-Bron', detail: 'El aeropuerto de negocios de Lyon, el segundo de Francia por volumen. Hangares FBO disponibles para reformas programadas.' },
]

export default function MoquetteJetPrivePageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/moquette-jet-prive#service',
        name: 'Moqueta para jet privado y aviación de negocios',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'Country', name: 'France' },
          { '@type': 'Place', name: 'Paris Le Bourget Airport' },
          { '@type': 'Place', name: 'Cannes-Mandelieu Airport' },
          { '@type': 'Place', name: 'Nice Côte d\'Azur Airport' },
          { '@type': 'Place', name: 'Bordeaux-Mérignac Airport' },
          { '@type': 'Place', name: 'La Rochelle Île de Ré Airport' },
        ],
        serviceType: 'Instalación de moqueta y fabricación de alfombras a medida para jets privados y aeronaves de negocios',
        description: 'Reforma de cabina, vestíbulo, office y pasillos para jets privados. Materiales certificados según FAA Part 25 y EASA CS-25, trazabilidad completa, trabajo en hangar durante las ventanas de mantenimiento.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Moqueta para jet privado', item: 'https://cbsols.fr/es/moquette-jet-prive' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Moqueta para jet privado</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Moqueta para jet privado,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>instalada en el hangar.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Cabina, vestíbulo, office, pasillos: reforma de moqueta y alfombras a medida para Cessna Citation, Falcon, Gulfstream, Bombardier. Materiales certificados según FAA Part 25 y EASA CS-25, un expediente de trazabilidad completo, trabajo durante las ventanas de mantenimiento. Más de 28 años de experiencia artesanal.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=moquette-jet-prive" variant="primary" size="md">Pedir presupuesto</Button>
                <Button href="/es/showroom" variant="outline" size="md">Ver el showroom</Button>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>El detalle que lo cambia todo</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Una costura impecable, un replanteo exacto: eso es lo que firma un acabado de gama alta. En la cabina de un jet, cada milímetro se nota.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Para qué zona de la cabina</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cuatro zonas, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>cuatro enfoques.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {cas.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline 1 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Una reforma de cabina en preparación?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Cada cabina pide su propio trazado.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Falcon, Gulfstream, Bombardier o Citation: Valentin Prévoteau se desplaza al hangar para levantar y presupuestar con precisión.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=moquette-jet-prive" variant="primary" size="md">Pedir presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Technical specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>El oficio de la moqueta de aviación</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Seis exigencias que estructuran <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>nuestro enfoque.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {specs.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{i + 1}. {s.title}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materiales que colocamos en la cabina</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Tres familias, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>un estándar.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {produits.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '1.5rem 0', borderBottom: i < produits.length - 1 ? '1px solid var(--border)' : 'none' }}>
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
          <p style={{ marginTop: '2.5rem', fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px' }}>
            Por el lado de los proveedores, trabajamos con los fabricantes especializados en aviación: lanas técnicas irlandesas y británicas, mezclas de Nomex según el pliego del fabricante, respaldos composite europeos conformes a FAA y EASA. Ningún material estándar reconvertido, ninguna marca de consumo disfrazada de aviación: la trazabilidad resiste ante el fabricante y el operador.
          </p>
        </div>
      </section>

      {/* Mid quote + CTA */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &ldquo;En aviación, el detalle visible cuenta tanto como el informe técnico que lo respalda. Ese equilibrio es lo que define el oficio.&rdquo;
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?from=moquette-jet-prive-inline" variant="primary" size="md">Reservar una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Una visita al hangar en todos los hubs de aviación de negocios franceses</span>
            </div>
          </div>
        </div>
      </section>

      {/* Jet brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Los fabricantes en los que trabajamos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Siete gamas, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>del light jet a la cabina ancha.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Light, midsize, super midsize, cabina ancha, ultra long range: cada plataforma tiene sus propias limitaciones de replanteo, peso y certificación. Nuestro enfoque sigue siendo el mismo, ajustado a la ficha técnica de la aeronave.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {marques.map((m, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra)', marginBottom: '0.5rem' }}>{m.name}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business airports */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Dónde trabajamos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Los mejores aeropuertos de negocios <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Francia.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Un taller con base en Villedoux, un equipo móvil preparado para trabajar en los principales hubs de aviación de negocios franceses. Para los proyectos completos, coordinamos el trabajo durante las ventanas de mantenimiento programadas.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {aeroports.map((p, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{p.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline 2 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Una ventana de mantenimiento que aprovechar?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Ajustamos la instalación a su calendario.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Una parada de C-check, una pasada de pintura, un tránsito FBO: describa la ventana y nos adaptamos a ella.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=moquette-jet-prive-mid" variant="primary" size="md">Pedir presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro enfoque, de la visita a la instalación</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco pasos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>ajustados a su mantenimiento.</em>
          </h2>
          <div data-flow="steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0' }}>
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

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Preguntas frecuentes</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Moqueta de aviación, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas técnicas.</em>
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

      {/* CTA after FAQ */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Una pregunta aún sin respuesta?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Descríbanos su aeronave, respondemos en 48 horas.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Fabricante, modelo, matrícula, base FBO, ventana de mantenimiento: estos cinco datos bastan para empezar una conversación útil.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=moquette-jet-prive-faq" variant="primary" size="md">Pedir presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* See also */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Ver también</div>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '1.5rem' }}>
            CB Sols es también especialista en moqueta náutica y en la colocación en castillos, casas señoriales y palacetes urbanos. Tres mundos, una misma exigencia de acabado.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/es/moquette-chateau" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moqueta para castillo →</Link>
            <Link href="/es/moquette-bateau" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moqueta para barco →</Link>
            <Link href="/es/moquette-yacht" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moqueta para yate →</Link>
            <Link href="/es/moquette-catamaran" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moqueta para catamarán →</Link>
            <Link href="/es/moquette-peniche" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moqueta para barcaza →</Link>
            <Link href="/es/services/pose-moquette" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Instalación de moqueta →</Link>
            <Link href="/es/services/tapis-sur-mesure" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Alfombras a medida →</Link>
            <Link href="/es/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom de Villedoux →</Link>
          </div>
        </div>
      </section>

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            ¿Una aeronave que acondicionar? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Hablemos.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita al hangar en Le Bourget, Cannes, Niza, Burdeos, La Rochelle y todos los hubs de aviación de negocios franceses. Un presupuesto a medida tras un levantamiento preciso.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=moquette-jet-prive" variant="primary" size="md">Pedir presupuesto</Button>
            <Button href="/es/showroom" variant="outline" size="md">Cita en el showroom</Button>
          </div>
          <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.6)' }}>
            O <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.phone}</a> · <a href={`mailto:${company.email}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.email}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
