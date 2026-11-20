import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Moqueta para barcaza | Barcazas vivienda y fluviales comerciales',
  description: "Instalación de moqueta para barcazas vivienda y barcazas fluviales comerciales (restaurante, eventos) en Charente-Maritime. Humedad fluvial, clasificación al fuego para pública concurrencia fluvial, superficies planas.",
  alternates: {
    canonical: 'https://cbsols.fr/es/moquette-peniche',
    languages: { 'fr-FR': 'https://cbsols.fr/moquette-peniche', 'en': 'https://cbsols.fr/es/moquette-peniche' },
  },
  openGraph: {
    title: 'Moqueta para barcaza | La Rochelle, Charente',
    description: "Suelos para barcazas vivienda y barcazas restaurante. Polipropileno, lana tratada, PVC náutico. Conforme a las clasificaciones al fuego de pública concurrencia fluvial.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/moquette-peniche.jpg', width: 1200, height: 630 }],
  },
}

const zones = [
  { title: 'Salón y espacio principal de vida', desc: "El corazón de una barcaza vivienda: amplio, diáfano, a veces con una estufa de leña o una cocina abierta. La superficie suele ser plana, el replanteo cercano a una instalación en plano, pero con una base adaptada a la humedad de la sentina." },
  { title: 'Camarotes y literas', desc: "Superficies pequeñas, muchos ángulos alrededor de las literas empotradas. El confort acústico es la prioridad: una barcaza transmite el sonido de un camarote a otro a través del casco de acero. Una moqueta gruesa, una base de espuma de célula cerrada." },
  { title: 'Baño y cocina', desc: "Zonas húmedas. Suelo de PVC náutico soldado en caliente, una junta estanca con las paredes, sin fieltro. En una barcaza, la condensación es intensa alrededor de la línea de flotación: ninguna tolerancia a las filtraciones." },
  { title: 'Barcaza comercial (restaurante, eventos)', desc: "Un caso especial: la clasificación al fuego de pública concurrencia fluvial es obligatoria, se recibe público, el uso es intensivo. Moqueta clasificada Bfl-s1 como mínimo, un expediente de seguridad del local que presentar a la comisión. Le acompañamos en la documentación de los materiales." },
]

const produits = [
  { name: 'Moqueta fluvial de polipropileno 1100 g/m²', desc: "El estándar de la barcaza vivienda. Impermeable a la humedad de la sentina, de secado rápido tras una filtración localizada, clasificada Bfl-s1. Una amplia gama de colores, una vida útil de 10 a 15 años en uso residencial en el muelle." },
  { name: 'Lana virgen tratada al fuego', desc: "Para barcazas vivienda de lujo sobre aguas tranquilas, con calefacción y ventilación. Un tacto cálido, un envejecimiento elegante. Más sensible a la humedad que el polipropileno: conviene reservarla para espacios realmente controlados." },
  { name: 'Suelo de PVC náutico soldado en caliente', desc: "Imprescindible en la cocina y el baño. Juntas soldadas a 200 °C, estanqueidad total, higiene. Para una barcaza restaurante: también en la cocina profesional, con una clasificación antideslizante R10-R11 donde haya zona de fregado." },
]

const process = [
  { step: 'Visita en el muelle', desc: "Un reconocimiento de cada estancia, fotografías, una medición de humedad del soporte (a menudo contrachapado náutico o tablero sobre viguetas). Un diagnóstico de cualquier filtración pasada." },
  { step: 'Caso de uso', desc: "Una conversación sobre el uso: residencia principal en el muelle, segunda vivienda, alquiler de corta duración, barcaza comercial de pública concurrencia. La normativa cambia radicalmente entre estos casos." },
  { step: 'Presupuesto y documentación', desc: "Presupuesto detallado en un plazo de 48 horas. Para la pública concurrencia fluvial, se aporta un expediente de materiales (certificados de ensayo al fuego, fichas técnicas) para la comisión de seguridad." },
  { step: 'Fabricación en taller', desc: "Corte en nuestro taller de Villedoux a partir de la plantilla. En una barcaza, las superficies son más regulares que en un barco: fabricación más rápida, pero mantenemos el rigor del replanteo náutico." },
  { step: 'Instalación en el muelle', desc: "Colocada en el muelle, con un adhesivo de poliuretano adaptado al medio fluvial y soldadura en caliente para los suelos de PVC. Como la barcaza es estable (sin balanceo), trabajamos en condiciones cómodas, cercanas a una obra en plano." },
]

const faq = [
  { q: '¿Cuál es la diferencia entre una barcaza vivienda y un piso?', a: "Tres diferencias principales para el suelo. Primera, la humedad ambiente es más alta (proximidad al agua, condensación), aunque no haya sal. Segunda, el peso soportado importa menos que en un barco de recreo (la barcaza está permanentemente en el muelle): se puede subir en gramaje y en confort. Tercera, los soportes suelen ser menos planos que en un piso: la nivelación local es frecuente, a veces una renivelación completa." },
  { q: '¿Una barcaza residencial necesita una clasificación al fuego específica?', a: "Para una barcaza residencial privada en el muelle, la normativa es menos estricta que para el recreo marítimo (sin IMO FTP). Aun así recomendamos Bfl-s1 por precaución: un incendio en una barcaza es un riesgo real, y la evacuación por una única pasarela lo complica todo. Para una barcaza comercial (restaurante, sala de eventos, hotel), se aplica la clasificación al fuego de pública concurrencia fluvial: Bfl-s1 como mínimo, con los documentos justificativos que presentar a la comisión de seguridad." },
  { q: '¿Se puede enmoquetar todo el suelo de una barcaza?', a: "No, y es un error frecuente. La cocina y el baño deben quedar en PVC náutico soldado, estanco. El resto (salón, camarotes, pasillos) puede enmoquetarse. Este reparto garantiza la longevidad del conjunto: la moqueta no tolera el agua estancada, sin excepción." },
  { q: '¿Cómo se gestiona la humedad de la sentina?', a: "Antes de cualquier instalación, comprobamos el soporte. Si su humedad supera el 4 % (medida con un higrómetro capacitivo), esperamos o instalamos una barrera de vapor. En una barcaza de acero antigua, a veces hay que tratar la corrosión interna antes de colocar: no es nuestro oficio, pero coordinamos con el carpintero de ribera correspondiente." },
  { q: '¿Cuánto tarda el acondicionamiento de una barcaza completa?', a: "Para una barcaza vivienda de 25-30 metros con 3-4 dormitorios, un salón, una cocina y un baño: cuente de 4 a 6 días en el taller (fabricación) y luego de 3 a 5 días en obra. El plazo depende mucho del estado del soporte y de si hay que levantar el revestimiento antiguo." },
  { q: '¿Trabajan también barcazas comerciales (restaurante, eventos)?', a: "Sí. Hemos trabajado en barcazas restaurante y de eventos. La lógica cambia: local de pública concurrencia, uso intensivo, expedientes de seguridad, un calendario fijado en torno al cierre anual o a los periodos tranquilos. Aportamos toda la documentación de materiales para el expediente de pública concurrencia fluvial." },
  { q: '¿Trabajan fuera de Charente-Maritime?', a: "Para una barcaza, sí: nos desplazamos a la Charente, la Dordoña, Aquitania y hasta los canales del centro para obras estructuradas. Como una barcaza es una obra más previsible que un barco en el mar, la logística es más sencilla. Presupuesto a petición con el desplazamiento valorado." },
]

export default function MoquettePenichePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/moquette-peniche#service',
        name: 'Instalación de moqueta para barcazas vivienda y comerciales',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: ['La Rochelle', 'Charente-Maritime', 'Charente', 'Dordogne'],
        serviceType: 'Suelos fluviales para barcazas residenciales y de pública concurrencia',
        description: 'Diseño e instalación de moqueta de polipropileno, lana tratada y suelos de PVC náutico para barcazas. Conformidad al fuego de pública concurrencia fluvial para uso comercial.',
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
          { '@type': 'ListItem', position: 3, name: 'Moqueta para barcaza', item: 'https://cbsols.fr/es/moquette-peniche' },
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
            <Link href="/es/moquette-bateau" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>Moqueta para barco</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Moqueta para barcaza</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Moqueta para barcaza,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>vivir a bordo y en el río.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Barcaza vivienda, barcaza restaurante o barcaza de eventos: moqueta y suelos de PVC náutico adaptados a la humedad fluvial y a la clasificación al fuego de pública concurrencia. 28 años de experiencia artesanal, obras por toda Charente-Maritime, la Charente y más allá bajo presupuesto.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=moquette-peniche" variant="primary" size="md">Pedir presupuesto</Button>
                <Button href="/es/moquette-bateau" variant="outline" size="md">Ver la página de moqueta para barco</Button>
              </div>
            </div>
            {/* TODO: ajouter photo intérieur péniche */}
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Lo que hace diferente a una barcaza</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &laquo; Una barcaza no es del todo un barco ni del todo un piso. Es un piso húmedo que flota. El suelo tiene que unir esos dos mundos. &raquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Zones */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>¿Qué parte de la barcaza?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cuatro espacios, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>cuatro lógicas.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {zones.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Habitation vs commerciale */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>¿Residencial o comercial?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Dos usos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>dos marcos normativos.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Barcaza residencial</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 1rem' }}>Como un piso, solo que más húmedo</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                Uso privado, sin recepción de público. Un marco al fuego más ligero, pero recomendamos Bfl-s1 por precaución. Libertad de materiales: polipropileno, lana tratada, PVC náutico por zona. El confort acústico y térmico es la prioridad. Puede colocar moquetas más suaves y cálidas que en un barco de recreo marítimo, ya que no hay sal ni balanceo.
              </p>
            </div>
            <div style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Barcaza comercial de pública concurrencia</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 1rem' }}>Restaurante, sala de eventos, hotel flotante</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                La clasificación al fuego de pública concurrencia fluvial es obligatoria: Bfl-s1 como mínimo, certificados de ensayo al fuego aportados a la comisión de seguridad. Uso intensivo: 1400 g/m² de gramaje mínimo, colores oscuros más indulgentes. Instalación que programar en torno al cierre anual o a una semana tranquila. Le acompañamos en el expediente de materiales para la documentación del local.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA inline après comparatif habitation vs commerciale */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Tiene un proyecto en mente?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Residencial o de pública concurrencia, dominamos ambos.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Barcaza vivienda, barcaza restaurante, hotel flotante: una visita en el muelle y un expediente de materiales preparado para la comisión de seguridad.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?source=moquette-peniche" variant="primary" size="md">Pedir presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Spécificités péniche */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Lo que distingue a una barcaza</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Tres diferencias con la <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>navegación de recreo marítima.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Sin sal, pero con mucha agua dulce</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>El ambiente fluvial es menos corrosivo que el marino (sin sal), pero la humedad es igual de alta. Los adhesivos de poliuretano náuticos funcionan a la perfección, y ciertos adhesivos de poliuretano de interior de gama alta certificados resistentes a la humedad también pueden usarse.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Superficies planas, soportes estables</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Una barcaza acondicionada suele tener superficies planas (contrachapado náutico sobre viguetas, a veces un parqué). El replanteo es cercano a una obra en plano. La ventaja: fabricación más rápida, acabados más finos posibles. El punto de atención: comprobar la humedad del soporte antes de colocar.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Sin balanceo, el peso no es una limitación</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Una barcaza amarrada en el muelle sobre aguas tranquilas no cabecea. Eso permite moquetas más gruesas y cómodas, con una base más generosa, impensable en un barco de recreo marítimo por motivos de peso y de comportamiento. Es una verdadera ganancia para el confort de vida a bordo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Produits */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materiales que instalamos en barcazas</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Tres materiales, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>combinados por zona.</em>
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
        </div>
      </section>

      {/* Réglementation ERP fluvial */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Normativa de pública concurrencia fluvial</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Barcaza comercial: <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>la comisión de seguridad quiere certificados.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Para una barcaza restaurante, sala de eventos u hotel flotante, la clasificación de pública concurrencia fluvial exige una trazabilidad completa de los materiales. Estos son los documentos que pedirá la comisión de seguridad, y que aportamos en el expediente de instalación.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Certificado de ensayo al fuego Bfl-s1</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Un informe de ensayo al fuego emitido por un laboratorio acreditado (Efectis, LNE) según la norma EN 13501-1. Un documento obligatorio para cualquier revestimiento de suelo en un local de pública concurrencia. Válido durante 5 años, a renovar en una reforma.</p>
            </div>
            <div style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Ficha técnica del fabricante</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Referencia del producto, composición de la fibra, gramaje, clasificación al fuego, clasificación de uso (UPEC, durabilidad ISO). Demuestra la correspondencia entre el uso comercial y el material instalado.</p>
            </div>
            <div style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Certificado de instalación</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Un documento firmado por el instalador que certifica que el material se colocó conforme a las especificaciones del fabricante (adhesivo, base, preparación del soporte). El certificado de ensayo al fuego no tiene valor sin esta acreditación.</p>
            </div>
            <div style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Garantía decenal y responsabilidad civil</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Un certificado del seguro decenal (décennale) y de responsabilidad civil profesional de la empresa instaladora. CB Sols los aporta de serie con el presupuesto de cualquier barcaza comercial, sin necesidad de petición especial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Préparation du support spécifique péniche */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Preparación del soporte fluvial</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            La humedad de la sentina, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>el primer enemigo del suelo.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Diagnóstico del soporte</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>En una barcaza acondicionada, el suelo existente suele ser un entablado de contrachapado náutico de 18-22 mm sobre viguetas de madera o metal, a veces un parqué macizo sobre paneles flotantes. Primer paso: un reconocimiento a golpe de maza para localizar las zonas huecas (una vigueta levantada, contrachapado empapado). Una zona hueca reconstruida ahora cuesta menos que un suelo que se hunde 18 meses después de la instalación.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Medición de humedad residual</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Un higrómetro capacitivo en 8 a 15 puntos por estancia, umbral de tolerancia del 4 % en madera, 2,5 % CM en recrecido de cemento. Por encima: un deshumidificador 48 a 72 h antes de la instalación. En una barcaza de acero antigua, la humedad a veces procede del óxido interno del fondo, lo que exige un diagnóstico adicional con un carpintero de ribera.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Nivelación y recrecido</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Los soportes de barcaza rara vez son planos con una tolerancia de 2 mm. Un recrecido autonivelante reforzado con fibra, de 3 a 8 mm de espesor según la variación. En una barcaza antigua reacondicionada, a veces montamos sobre un sistema de suelo técnico elevado para neutralizar las ondulaciones del casco de acero. En soportes difíciles, esta preparación representa del 15 al 25 % del presupuesto total de la obra.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Barrera de vapor en zonas críticas</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Sobre los depósitos de agua, baños y compartimentos de máquinas, instalamos sistemáticamente una barrera de vapor de polietileno de 200 micras antes de la base. Sin ella, la humedad del compartimento técnico asciende por capilaridad y destruye la moqueta en 2-3 años.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Citation milieu CTA */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &laquo; Una barcaza rara vez es plana y siempre es húmeda. Una visita en el muelle es imprescindible antes de cualquier precio: sin ella, se presupuesta a ciegas. &raquo;
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?source=moquette-peniche-inline" variant="primary" size="md">Reservar una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Charente-Maritime, Charente, Dordoña</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro enfoque</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco pasos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de la visita a la entrega.</em>
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
            Moqueta para barcaza, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas técnicas.</em>
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

      {/* Entretien péniche */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Cuidado a largo plazo</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            En una barcaza, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>la humedad no se ve, se anticipa.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Aspirado y limpieza de rutina</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Aspire dos veces por semana en una barcaza vivienda habitada a tiempo completo. En una barcaza restaurante, aspire a diario tras el servicio con un aspirador profesional de filtración HEPA para las zonas de recepción y de comedor.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Inyección-extracción anual en caliente</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Limpieza por inyección-extracción en caliente una vez al año en una barcaza vivienda, dos veces al año en una barcaza restaurante. Un producto neutro sin aclarado, secado forzado con ventilador para evitar que la humedad arraigue en la base.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Tratamiento antimicrobiano</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>En una barcaza amarrada sobre aguas tranquilas durante el invierno (Saintes, Marans, los canales del centro), un tratamiento antimicrobiano preventivo en spray cada 2 años. Protege contra la formación de moho bajo el suelo, un riesgo real en soportes de madera insuficientemente ventilados.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Vigilar las juntas húmedas</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Una revisión visual anual de las juntas moqueta / PVC náutico soldado en las zonas húmedas (baño, cocina). Una junta que se levanta o una costura que blanquea señala una filtración. Una reparación local es posible si se detecta a tiempo, una renovación completa si se deja avanzar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA après FAQ */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Una barcaza que acondicionar?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Presupuesto en 48 h, con expediente del local incluido si hace falta.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Residencial, restaurante, eventos: una visita en el muelle en Charente-Maritime, la Charente y más allá bajo presupuesto.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?source=moquette-peniche-faq" variant="primary" size="md">Pedir presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Ver también</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/es/moquette-bateau" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moqueta para barco (hub) →</Link>
            <Link href="/es/moquette-catamaran" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moqueta para catamarán →</Link>
            <Link href="/es/moquette-yacht" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moqueta para yate →</Link>
            <Link href="/es/services/pose-moquette" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Instalación de moqueta →</Link>
            <Link href="/es/services/tapis-sur-mesure" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Alfombras a medida →</Link>
            <Link href="/es/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom de Villedoux →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Su barcaza, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>como nueva.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita en el muelle, un presupuesto en 48 h. Residencial o comercial, con el expediente de pública concurrencia fluvial acompañado.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=moquette-peniche" variant="primary" size="md">Pedir presupuesto</Button>
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
