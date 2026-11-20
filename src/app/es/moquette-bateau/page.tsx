import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Moqueta para barco | Suelos náuticos a medida, La Rochelle | CB Sols',
  description: "Especialista en moqueta náutica en el oeste de Francia: catamaranes, yates, barcazas. Conforme a IMO FTP, MED y Bfl-s1. Fabricada en taller, instalada en el muelle. Pida presupuesto.",
  alternates: {
    canonical: 'https://cbsols.fr/es/moquette-bateau',
    languages: {
      'fr-FR': 'https://cbsols.fr/moquette-bateau',
      'en': 'https://cbsols.fr/es/moquette-bateau',
    },
  },
  openGraph: {
    title: 'Moqueta para barco | Suelos náuticos a medida | La Rochelle',
    description: "Moqueta para barco a medida: catamaranes, yates, barcazas. Normas al fuego IMO, humedad salina, adhesivos de poliuretano náuticos.",
    type: 'website',
    locale: 'es_ES',
    images: [{ url: 'https://cbsols.fr/og/moquette-bateau.jpg', width: 1200, height: 630 }],
  },
}

const cases = [
  { title: 'Catamarán a vela o a motor', desc: "Dos cascos, un salón central expuesto al sol y a la sal. Usamos moqueta de polipropileno 100 % no absorbente, con un corte adaptado a las curvas del salón y a los faldones de la viga central. Vea nuestra página dedicada al catamarán." },
  { title: 'Yate a motor o velero de lujo', desc: "Salones amplios, camarotes del armador, acabados premium. Una combinación de moqueta de lana tratada al fuego y alfombras a medida, integrada en la ebanistería y el cuero existentes. Tolerante a la vibración del motor." },
  { title: 'Barcaza vivienda o comercial', desc: "Superficies planas, parecidas a las de un piso, fuerte humedad fluvial pero sin sal. Para las barcazas restaurante y de eventos, se aplica la clasificación al fuego de pública concurrencia fluvial (Bfl-s1 como mínimo)." },
  { title: 'Reforma completa de una embarcación de recreo', desc: "Retiramos el suelo antiguo, a menudo colocado con adhesivo acrílico estándar que nunca aguanta en un barco. Tratamos el soporte, recolocamos con un adhesivo de poliuretano náutico y soldamos las costuras en caliente. El suelo dura." },
]

const products = [
  { name: 'Moqueta de polipropileno 100 % náutico', desc: "Una fibra que no absorbe agua, se seca rápido y no se ve afectada por la sal. Gramaje de 800 a 1400 g/m². Clasificación al fuego Bfl-s1 como mínimo, certificación IMO FTP Code Parte 5 disponible a petición para las embarcaciones comerciales." },
  { name: 'Lana virgen tratada al fuego', desc: "Para los yates de gama alta donde la estética va primero. Tratamiento ignífugo integrado en la fibra, clasificación M1, un acabado suave y cálido. Sensible a la humedad prolongada, así que conviene reservarla para salones y camarotes bien ventilados." },
  { name: 'Suelo de PVC náutico acústico', desc: "Para pasillos, cocinas y aseos a bordo. Respaldo de espuma de célula cerrada (nunca fieltro), costuras soldadas en caliente, estanqueidad total. Compatible con MED (Marine Equipment Directive)." },
]

const process = [
  { step: 'Visita en el muelle', desc: "Plantilla sobre film, fotos, medición de humedad del soporte, identificación de los puntos delicados (colector, curvas, pasos de servicio). Conversación con el armador o el patrón." },
  { step: 'Selección del material', desc: "Elegido en nuestro showroom de Villedoux o a partir de muestras que enviamos. Confirmamos las clasificaciones al fuego requeridas según el uso (recreo privado, chárter, comercial)." },
  { step: 'Presupuesto y planificación', desc: "Presupuesto detallado en un plazo de 48 horas. Planificación construida en torno a la ventana de reforma del barco o a su disponibilidad en el muelle. Sin sorpresas en la factura final." },
  { step: 'Fabricación en taller', desc: "Corte y preparación en nuestro taller de Villedoux a partir de las plantillas. Precisión milimétrica para evitar cualquier retoque sobre el terreno. El replanteo se prueba antes del transporte." },
  { step: 'Instalación en el muelle', desc: "Colocación final a bordo del barco, adhesivo de poliuretano náutico, costuras soldadas en caliente, acabados alrededor de umbrales y escotillas de inspección. Entregado limpio." },
]

const faq = [
  { q: '¿Qué normas al fuego se aplican a los revestimientos de suelo náuticos?', a: "Para las embarcaciones de recreo privadas, la clasificación europea Bfl-s1 (reacción al fuego más baja emisión de humo) es la base mínima recomendada. Para las embarcaciones comerciales (chárter, buques de pasaje), hay que cumplir el IMO FTP Code (Organización Marítima Internacional, Fire Test Procedures) Parte 5, así como la directiva MED 2014/90/UE (Marine Equipment Directive). Aportamos los certificados de los materiales con cada instalación." },
  { q: '¿Por qué no usar una moqueta de interior estándar en un barco?', a: "Tres razones técnicas. Primera, fibras como la lana sin tratar o la poliamida estándar absorben la humedad ambiente (80-95 % en un barco) y acaban generando moho bajo el suelo. Segunda, los adhesivos acrílicos de interior no resisten los cambios de temperatura ni la atmósfera cargada de sal. Tercera, la clasificación al fuego de interior Cfl-s1 se queda corta frente a las exigencias náuticas. El resultado a los 18 meses: levantamiento, olor, daños en el soporte." },
  { q: '¿Qué material para qué barco?', a: "Polipropileno 100 % para las zonas húmedas, las expuestas a la sal o los espacios de uso intenso (catamarán de vela, yate de crucero). Lana tratada al fuego para los salones ventilados y climatizados de los yates a motor. PVC náutico soldado para cocinas, aseos y pasillos. En un barco, a menudo se combinan dos o tres materiales según la zona." },
  { q: '¿Hay que sacar el barco del agua para la instalación?', a: "No, en la mayoría de los casos. La instalación se hace en el muelle, en 1 a 3 días según la superficie. Coordinamos el trabajo con el puerto deportivo (La Pallice, Port des Minimes, La Flotte, Saint-Martin) o el astillero. Para una reforma completa que implica retirar el suelo antiguo y tratar el soporte, el barco puede estar fuera del agua (dique seco, travelift)." },
  { q: '¿Cuánto dura una moqueta náutica bien instalada?', a: "En una embarcación de recreo de uso estacional (de junio a septiembre), una moqueta de polipropileno náutico instalada como es debido dura de 8 a 12 años. En un yate de uso permanente, cuente de 5 a 8 años según la frecuencia con que se habite. Los fallos que encontramos rara vez vienen del desgaste. Casi siempre vienen de una instalación inicial mal preparada, con el adhesivo equivocado o una base absorbente." },
  { q: '¿Trabajan en puertos más allá de La Rochelle?', a: "Sí. Nuestro taller está en Villedoux, a 10 minutos de La Pallice y Port des Minimes. Trabajamos con regularidad en Rochefort, Royan, La Flotte, Saint-Martin-de-Ré, Boyardville y Marennes. Bajo presupuesto, nos desplazamos hasta Arcachon, Les Sables-d'Olonne o el sur de Bretaña para embarcaciones más grandes." },
  { q: '¿Tienen referencias en el sector náutico?', a: "Nuestros más de 28 años de experiencia en CB Sols incluyen trabajos en catamaranes de las flotas Lagoon y Bali de La Rochelle, varios yates privados en Port des Minimes y barcazas vivienda en la Charente. Los detalles de los proyectos se mantienen confidenciales por respeto a los armadores, pero podemos compartir referencias ante una consulta seria." },
]

const comparison = [
  { type: 'Catamarán', surfaces: 'Salón central + 4 camarotes, superficies mayormente planas', enjeu: 'Humedad salina, ventilación entre cascos, exposición al sol', materiau: 'Polipropileno 100 %, Bfl-s1' },
  { type: 'Yate a motor / velero de lujo', surfaces: 'Salón, camarote del armador, pasillos, superficies curvas', enjeu: 'Vibración del motor, acabados premium, estética', materiau: 'Lana virgen tratada al fuego + alfombras a medida' },
  { type: 'Barcaza', surfaces: 'Espacio tipo piso, salones amplios, superficies planas', enjeu: 'Fuerte humedad fluvial, el peso no es un problema, normas de pública concurrencia si es comercial', materiau: 'Polipropileno o lana según el uso, PVC soldado en zonas húmedas' },
]

const glossary = [
  { term: 'Bfl-s1', def: "Clasificación europea de reacción al fuego para los revestimientos de suelo (EN 13501-1): B = contribución muy baja al fuego, fl = suelo (floor), s1 = baja emisión de humo. La base mínima para las embarcaciones de recreo." },
  { term: 'IMO FTP Code 2010', def: 'Organización Marítima Internacional, Fire Test Procedures. La referencia mundial para los ensayos al fuego náuticos. La Parte 5 trata específicamente de los revestimientos de suelo en buques de pasaje y comerciales.' },
  { term: 'MED / Wheelmark', def: "Marine Equipment Directive 2014/90/UE. La marca de rueda de timón aplicada a los materiales aprobados para la navegación comercial en Europa. Obligatoria para el chárter profesional y los eventos a bordo." },
  { term: 'ISO 9239-1', def: "El ensayo del panel radiante que mide el flujo crítico de propagación de la llama de un revestimiento de suelo. Cuanto mayor es el valor en kW/m², más resiste el material." },
  { term: 'Clasificación M0-M4', def: "La antigua clasificación francesa de reacción al fuego (M0 no combustible, M4 fácilmente inflamable). Todavía se cita en los expedientes de pública concurrencia fluvial. Equivalencia aproximada: M1 ≈ Bfl-s1, M2 ≈ Cfl-s1." },
  { term: 'FRP', def: 'Fibre Reinforced Polymer. El composite de poliéster/fibra de vidrio que compone el 90 % de los cascos de recreo modernos. Un soporte no poroso que exige una imprimación específica antes del encolado.' },
  { term: 'Tufting', def: "Un proceso de fabricación en el que unas agujas insertan la fibra en un soporte primario y luego la fijan con látex o un respaldo secundario. La mayoría de las moquetas de contract y náuticas son de tufting." },
  { term: 'Axminster / Wilton', def: "Tejedurías de gama alta, históricamente británicas. Axminster = dibujo por metro, ideal para yates con un gran salón. Wilton = terciopelo de bucle denso, de 15 a 28 años de vida útil." },
  { term: 'Polipropileno (PP)', def: "Una fibra sintética 100 % hidrófoba (recuperación de humedad < 0,05 %). No se ve afectada por la sal, se seca en pocas horas. La fibra de referencia en el mundo náutico." },
  { term: 'Poliamida 6.6 (PA 6.6)', def: "Un nylon técnico, más resistente a la abrasión que el PP pero con un 4-5 % de recuperación de humedad. Reservado para salones ventilados y espacios climatizados." },
  { term: 'Soldadura en caliente', def: "Una técnica de sellado de costuras para los suelos de PVC náutico: se inserta un cordón termofusible en una ranura y luego se funde a 200 °C con un soldador. La costura se vuelve continua y estanca." },
  { term: 'Adhesivo PU bicomponente', def: "Un adhesivo de poliuretano de dos componentes (resina + endurecedor) con una vida útil de 30 a 60 minutos. Aguanta los cambios de temperatura (-20 a +80 °C), se mantiene elástico y resiste la sal. La referencia náutica." },
]

const ports = [
  { nom: 'Mónaco', detail: 'Port Hercule y Port de Fontvieille. Trabajo en yates de armadores y embarcaciones de chárter premium.', href: '/es/sols-monaco' },
  { nom: 'Cannes', detail: 'Vieux-Port y Port Canto. Reformas de invierno durante los invernajes de entretemporada.' },
  { nom: 'Saint-Tropez', detail: 'Port Saint-Tropez. Coordinación con ebanistas y tapiceros locales en proyectos de acabado completo.' },
  { nom: 'Antibes', detail: "Port Vauban, el principal puerto de superyates de Europa. Fabricación en taller e instalación en el muelle con un calendario ajustado." },
  { nom: 'Niza', detail: 'Port Lympia. Embarcaciones de recreo privadas y yates a motor de crucero costero.' },
  { nom: 'Hyères y Porquerolles', detail: 'Port de la Capte y Port d\'Hyères. Bases de vela y acceso a las Îles d\'Or.' },
  { nom: 'Marsella', detail: 'Vieux-Port, Estaque, Pointe Rouge. Reformas de yates de crucero y catamaranes de chárter.' },
  { nom: 'La Rochelle, nuestra base', detail: 'Port des Minimes, el mayor puerto deportivo de la costa atlántica. Taller en Villedoux, a 10 minutos.' },
  { nom: 'Saint-Malo', detail: 'Port des Sablons. Embarcaciones de recreo del Canal de la Mancha y grandes yates de crucero.' },
  { nom: 'Deauville y Trouville', detail: 'Port-Deauville. Trabajo en yates y embarcaciones invernados en Normandía.' },
  { nom: 'Lorient', detail: 'Puerto deportivo de Larmor-Plage. El sur de Bretaña, una base histórica de regata y crucero.' },
  { nom: 'Arcachon', detail: 'Puerto deportivo de Arcachon. La bahía y la costa atlántica del sur.' },
]

export default function BoatCarpetEnPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/moquette-bateau#service',
        name: 'Moqueta para barco y revestimientos de suelo náuticos',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: ['La Rochelle', 'Île de Ré', 'Île d\'Oléron', 'Monaco', 'Cannes', 'Antibes', 'Saint-Tropez', 'Marseille', 'Nice', 'Saint-Malo', 'France'],
        serviceType: 'Instalación de moqueta náutica y suelos de PVC para barcos, yates, catamaranes y barcazas',
        description: 'Diseño, fabricación en taller e instalación en el muelle de moqueta para barco y revestimientos de suelo náuticos conformes a las normas IMO FTP y MED. Trabajo por toda Francia y en Mónaco.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Moqueta para barco', item: 'https://cbsols.fr/es/moquette-bateau' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Moqueta para barco</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Moqueta para barco,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>instalada en el muelle.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Catamarán, yate, barcaza: fabricamos en nuestro taller de Villedoux e instalamos en el muelle en La Rochelle, La Flotte y Rochefort. Materiales conformes a IMO FTP y MED, adhesivos de poliuretano náuticos, costuras soldadas en caliente. Más de 28 años de artesanía.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact" variant="primary" size="md">Pedir presupuesto</Button>
                <Button href="/es/showroom" variant="outline" size="md">Ver el showroom</Button>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>El detalle que lo cambia todo</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Una moqueta de interior colocada con adhesivo acrílico dura 18 meses en un barco. Una moqueta náutica bien instalada dura 10 años. La diferencia no es el textil, es todo lo que hay debajo del textil.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>¿Qué tipo de barco?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cuatro casos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>cuatro enfoques.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {cases.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline CTA */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Tiene un proyecto en mente?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Cada barco pide su propia respuesta.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Catamarán, yate o barcaza: Valentin Prévoteau se desplaza al muelle para tomar las medidas y presupuestar con precisión.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact" variant="primary" size="md">Pedir presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Why a marine floor is different */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Por qué un suelo náutico no es un suelo de interior</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Seis limitaciones que una moqueta de salón <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>nunca afronta.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { t: '1. Humedad salina permanente', d: "El aire a bordo oscila entre el 80 y el 95 % de humedad relativa. La sal se deposita en la superficie y luego migra al interior de las fibras. En un revestimiento inadecuado, el moho aparece bajo el suelo en 12 a 18 meses. El polipropileno no absorbe casi nada." },
              { t: '2. Normas al fuego estrictas', d: "En un incendio a bordo, la evacuación lleva tiempo. El IMO FTP Code fija límites a la toxicidad del humo y a la velocidad de propagación. Para las embarcaciones de recreo privadas, Bfl-s1 es la base. Para el chárter y el uso comercial, la certificación IMO Parte 5 es obligatoria." },
              { t: '3. Peso restringido', d: "En una embarcación de recreo, cada kilo a bordo afecta a la línea de flotación, al consumo de combustible y al comportamiento en el mar. Favorecemos moquetas de 800-1100 g/m², sin una base pesada de fieltro pero con una fina espuma de célula cerrada." },
              { t: '4. Superficies curvas', d: "Casco redondeado, colector, formas complejas de cabina: colocar anchos rectos estándar es imposible. Plantilla sobre film, corte milimétrico en taller, costuras soldadas en caliente para impedir cualquier entrada de agua." },
              { t: '5. Adhesivo de poliuretano náutico', d: "Un adhesivo acrílico de interior estándar se seca, se contrae con los cambios de temperatura y cede ante la sal. Usamos únicamente adhesivos de poliuretano mono o bicomponente certificados para uso náutico, conformes a la ISO 9239." },
              { t: '6. Vibración y temperatura', d: "Vibración del motor, dilatación térmica entre una sentina fresca y una cubierta calentada por el sol: un suelo náutico tiene que absorber todo esto sin levantarse. Respaldo de espuma de célula cerrada, un adhesivo elástico, costuras flexibles. Por eso también el trabajo se hace en el taller y luego se ajusta en el muelle, nunca improvisado." },
            ].map((x, i) => (
              <div key={i}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{x.t}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Comparativa rápida</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Catamarán, yate, barcaza, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>una panorámica.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {comparison.map((t, i) => (
              <div key={i} style={{ borderLeft: '3px solid var(--terra)', padding: '1.5rem 1.5rem 1.5rem 2rem', marginBottom: '1rem', backgroundColor: 'var(--bg-card)', borderRadius: '0 8px 8px 0' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem' }}>{t.type}</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  <div><div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--terra)', marginBottom: '0.3rem' }}>Zonas</div><div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>{t.surfaces}</div></div>
                  <div><div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--terra)', marginBottom: '0.3rem' }}>Reto clave</div><div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>{t.enjeu}</div></div>
                  <div><div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--terra)', marginBottom: '0.3rem' }}>Material recomendado</div><div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>{t.materiau}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materiales que instalamos en el entorno náutico</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Tres familias de material, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>un solo estándar.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {products.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '1.5rem 0', borderBottom: i < products.length - 1 ? '1px solid var(--border)' : 'none' }}>
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
            Por el lado de las marcas, trabajamos con los especialistas europeos de contract y náuticos: Bolon (Suecia, suelos de vinilo tejido), Roberts Marine, así como las gamas de contract de EGE y Gerflor que pueden adaptarse al mundo náutico con una certificación adicional. Ningún producto de gama de entrada generalista llevado más allá de su uso previsto: vemos demasiados barcos rehechos tres veces en cinco años precisamente por eso.
          </p>
        </div>
      </section>

      {/* Mid-page quote */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &ldquo;Cada barco es diferente. Ninguna plantilla se reutiliza nunca. Una visita en el muelle es imprescindible antes de cualquier precio serio.&rdquo;
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact" variant="primary" size="md">Reservar una visita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Desplazamiento gratuito en los puertos de la Charente</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical glossary */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Glosario náutico</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Doce términos <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que conocer antes de cualquier presupuesto.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            El vocabulario náutico puede resultar opaco. Estas son las normas, fibras y técnicas que citamos habitualmente en un presupuesto o en un expediente de pública concurrencia fluvial. Son también las preguntas que hará cualquier comisión de seguridad seria.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {glossary.map((g, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra)', marginBottom: '0.5rem' }}>{g.term}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{g.def}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ports */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Dónde trabajamos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Los mejores puertos de Francia <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>y Mónaco.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Nuestro taller tiene su base en Villedoux, cerca de La Rochelle. Nos desplazamos por toda Francia y hasta Mónaco para los proyectos premium. Los desplazamientos se organizan por proyecto, con un equipo móvil para los trabajos de gama alta fuera de nuestra zona local.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {ports.map((p, i) => {
              const hasHref = 'href' in p && typeof p.href === 'string'
              return (
                <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>
                    {hasHref ? (
                      <Link href={(p as { href: string }).href} style={{ color: 'var(--terra)', textDecoration: 'none' }}>{p.nom} →</Link>
                    ) : p.nom}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{p.detail}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro método, de la visita a la instalación</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco pasos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>la instalación programada en torno a usted.</em>
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
            Moqueta para barco, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas técnicas.</em>
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

      {/* See also */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Ver también</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/es/moquette-catamaran" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moqueta para catamarán →</Link>
            <Link href="/es/moquette-yacht" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moqueta para yate →</Link>
            <Link href="/es/moquette-peniche" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moqueta para barcaza →</Link>
            <Link href="/es/realisations/pose-moquette-sur-mesure-catamaran" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Caso práctico de catamarán →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            ¿Un barco que acondicionar? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Hablemos.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visitas en el muelle en los puertos de La Rochelle, Île de Ré y Rochefort. Un presupuesto a medida tras un levantamiento preciso.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact" variant="primary" size="md">Pedir presupuesto</Button>
            <Button href="/es/showroom" variant="outline" size="md">Visitar el showroom</Button>
          </div>
          <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.6)' }}>
            O <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.phone}</a> · <a href={`mailto:${company.email}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.email}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
