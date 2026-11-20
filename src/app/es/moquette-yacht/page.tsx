import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Moqueta para yate y velero de lujo | La Rochelle',
  description: "Moqueta y alfombras a medida instaladas en yates a motor y veleros de lujo: Sunseeker, Princess, Beneteau, Jeanneau. Lana tratada al fuego, acabados premium, control de la vibración del motor.",
  alternates: {
    canonical: 'https://cbsols.fr/es/moquette-yacht',
    languages: { 'fr-FR': 'https://cbsols.fr/moquette-yacht', 'en': 'https://cbsols.fr/es/moquette-yacht' },
  },
  openGraph: {
    title: 'Moqueta para yate | La Rochelle',
    description: "Suelos para yates a motor y veleros de lujo: salón, camarote del armador, pasillo. Lana tratada al fuego, alfombras a medida, integración con la ebanistería.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/moquette-yacht.jpg', width: 1200, height: 630 }],
  },
}

const zones = [
  { title: 'Salón principal', desc: "Es la pieza estrella, con sus cueros y su fina ebanistería. Instalamos una lana virgen tratada al fuego, o una poliamida de gama alta. El color se iguala con la madera ya presente. El acabado es suave, el tacto cuidadosamente medido." },
  { title: 'Camarote del armador', desc: "El detalle que distingue a un buen yate. Una moqueta gruesa de 1200-1600 g/m² con una alfombra a medida al pie de la cama, integrada en los armarios y las mesillas. El confort acústico es la prioridad." },
  { title: 'Pasillos y descansillos', desc: "Zonas de tránsito expuestas a la vibración del motor. Una base fina de espuma de célula cerrada, un adhesivo de poliuretano elástico, costuras invisibles. La moqueta tiene que absorber el movimiento sin ondularse." },
  { title: 'Cuarto de derrota y mesa de cartas', desc: "Un espacio técnico sujeto a una exigencia estética. Una moqueta sobria combinada con una alfombra a medida, integrada con los equipos de navegación." },
]

const produits = [
  { name: 'Lana virgen tratada al fuego', desc: "La referencia para los interiores de yate. Una fibra natural con el tratamiento ignífugo integrado en el núcleo (no en la superficie), clasificada M1 y Bfl-s1. Un tacto premium, un envejecimiento elegante, una amplia paleta de colores. Conviene reservarla para espacios ventilados y climatizados." },
  { name: 'Polipropileno premium 1400 g/m²', desc: "Para yates de chárter o embarcaciones expuestas a la humedad (veleros de crucero de altura). Impermeable al agua, resistente a los rayos UV, con el mismo resultado visual que la lana en tonos más oscuros." },
  { name: 'Alfombras náuticas a medida', desc: "Para vestir un salón, delimitar una zona (delante de un sofá, al pie de una cama) o añadir un detalle de alta costura. Fabricadas en nuestro taller de Villedoux, bordes cosidos a mano, respaldo antideslizante adaptado a un barco." },
]

const process = [
  { step: 'Visita en el muelle', desc: "Mediciones precisas, fotografías de la ebanistería y los acabados existentes para igualar el color, una medición de humedad, identificación de los pasos técnicos (sentina del motor, sala de máquinas)." },
  { step: 'Coordinación del interiorismo', desc: "Selección en el showroom, con su interiorista o decorador cuando proceda. Pruebas de muestras bajo la propia iluminación del barco. Clasificación al fuego confirmada según el uso privado o de chárter comercial." },
  { step: 'Presupuesto y confidencialidad', desc: "Presupuesto detallado en un plazo de 48 horas. Toda obra de yate que aceptamos queda cubierta por la discreción: ninguna comunicación sin el consentimiento escrito del armador." },
  { step: 'Fabricación en taller', desc: "Corte con plantilla en nuestro taller de Villedoux. Alfombras a medida fabricadas en paralelo. Pruebas de ajuste antes del transporte." },
  { step: 'Instalación en el muelle o en dique seco', desc: "Colocación final: Port des Minimes, La Pallice, o en dique seco para las grandes reformas. Adhesivo de poliuretano náutico, costuras soldadas en caliente, acabados en los umbrales, una limpieza completa en la entrega." },
]

const faq = [
  { q: '¿En qué marcas de yate han trabajado?', a: "Sin nombrar a los armadores, hemos trabajado en yates a motor Sunseeker, Princess y Azimut, y en veleros de crucero de gama alta Beneteau Oceanis, Jeanneau Sun Odyssey y Hanse. El método cambia con el tipo, y también el replanteo: un Sunseeker 60 no tiene nada en común con un Oceanis 51." },
  { q: '¿La lana es realmente adecuada para un barco?', a: "Sí, con dos condiciones. Primera, el barco debe estar permanentemente climatizado y ventilado (un yate a motor, o un gran velero de crucero con ventilación controlada). Segunda, el tratamiento ignífugo tiene que estar en el núcleo de la fibra, no en la superficie, de lo contrario se desgasta en dos años. La lana aporta un tacto y una riqueza que ninguna fibra sintética ha igualado todavía. Pero en un crucero-regata húmedo, pasamos al polipropileno premium." },
  { q: '¿Cómo gestionan la coordinación con los demás oficios?', a: "Una reforma de yate suele implicar a un ebanista, un tapicero, un pintor y un electricista. Programamos nuestro trabajo el último o el penúltimo, para que otro oficio no deje sus cajas de herramientas sobre la moqueta nueva. Trabajamos en obras compartidas en buenos términos con los artesanos familiarizados con el sector náutico de La Rochelle." },
  { q: '¿Fabrican también las alfombras a medida del salón?', a: "Sí, y a menudo: la moqueta y una alfombra a medida forman un único conjunto. La alfombra se fabrica en nuestro taller de Villedoux a sus dimensiones exactas, con bordes cosidos a mano y un respaldo antideslizante náutico. A petición, también podemos añadir un monograma discreto del nombre del barco o las iniciales del armador." },
  { q: '¿Cuánto dura en un yate?', a: "En un yate privado de temporada bien mantenido, cuente de 8 a 12 años para una moqueta de lana tratada. En un yate de uso permanente (habitado a bordo), de 5 a 7 años. Las alfombras a medida se sustituyen con más frecuencia (de 3 a 6 años), ya que son las zonas de desgaste visible." },
  { q: '¿Trabajan con total confidencialidad?', a: "Sí, por defecto. Ninguna foto publicada sin consentimiento, ningún nombre revelado, ninguna mención en nuestras comunicaciones. Es una exigencia evidente en este segmento, y la respetamos estrictamente desde hace más de 28 años." },
  { q: '¿Cuál es un coste aproximado de una reforma completa del suelo en un yate de 50 pies?', a: "Imposible de valorar sin una visita. La horquilla va de 1 a 5 según el material elegido (polipropileno frente a lana premium), la complejidad de las curvas, el levantamiento del revestimiento antiguo y la integración con la ebanistería. Como orden de magnitud, una reforma completa del suelo en un yate de 50 pies en lana tratada más alfombras a medida se sitúa por lo general entre 12.000 € y 35.000 € IVA incluido." },
]

export default function MoquetteYachtPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/moquette-yacht#service',
        name: 'Instalación de moqueta y alfombras a medida para yates y veleros de lujo',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: ['La Rochelle', 'Île de Ré', 'Port des Minimes', 'La Pallice', 'Charente-Maritime'],
        serviceType: 'Suelos náuticos premium para yates a motor y veleros de lujo',
        description: 'Diseño, fabricación en taller e instalación discreta de moqueta de lana tratada al fuego y alfombras a medida para yates. Conforme a Bfl-s1, M1 e IMO FTP.',
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
          { '@type': 'ListItem', position: 3, name: 'Moqueta para yate', item: 'https://cbsols.fr/es/moquette-yacht' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Moqueta para yate</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Moqueta para yate,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>un suelo premium, a la altura.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Salón, camarote del armador, pasillos: moqueta de lana tratada al fuego y alfombras a medida para yates a motor y veleros de lujo. Sunseeker, Princess, Beneteau Oceanis, Jeanneau. Confidencialidad total, acabados integrados con la ebanistería.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=moquette-yacht" variant="primary" size="md">Pedir presupuesto</Button>
                <Button href="/es/moquette-bateau" variant="outline" size="md">Ver la página de moqueta para barco</Button>
              </div>
            </div>
            {/* TODO: ajouter photo salon yacht */}
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>El estándar del yate</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &laquo; Un yate se nota en sus detalles. El suelo es uno de ellos. Una costura impecable, un replanteo exacto: eso es lo que firma un acabado de gama alta. &raquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Zones */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>¿Qué parte del yate?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cuatro espacios, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>cuatro niveles de exigencia.</em>
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

      {/* Spécificités yacht */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Lo que distingue a un yate</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Tres exigencias que no encontrará <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>en la navegación de recreo estándar.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Superficies curvas y casco completo</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>En un yate a motor (Sunseeker, Princess, Azimut), el casco no es plano: los espacios de vida siguen curvas suaves. El replanteo en anchos rectos es imposible. Hacemos la plantilla a bordo, fabricamos al milímetro en el taller y mantenemos las costuras invisibles. En un velero de lujo es aún más difícil: los pantoques obligan a trabajar por completo a mano.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Vibración y ruido del motor</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>En un yate a motor, las zonas situadas sobre la sentina de máquinas vibran. Una moqueta colocada sobre una base rígida acaba ondulándose. La respuesta: una espuma elástica de célula cerrada y un adhesivo de poliuretano bicomponente que absorbe el movimiento. La moqueta también hace un verdadero trabajo acústico: de 5 a 8 dB menos, según el gramaje.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Acabados integrados</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Un yate de gama alta combina madera preciosa (teca, caoba), cuero, metal pulido y marquetería. El suelo tiene que integrarse sin ruptura: umbrales a medida, acabados cosidos a mano, colores coordinados con la madera. Nunca un perfil de aluminio estándar. Trabajamos con el ebanista del barco o con el interiorista cuando lo hay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA inline après spécificités */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Tiene un proyecto en mente?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Discreción garantizada, un presupuesto valorado.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Una visita confidencial en el muelle, una conversación directa con el capitán o el interiorista. Ninguna comunicación sin consentimiento escrito.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?source=moquette-yacht" variant="primary" size="md">Pedir presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Marques yacht */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Yates que acondicionamos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            A motor o a vela, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>el mismo estándar de acabado.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              { m: 'Sunseeker', s: 'Yates a motor de 50-100 pies' },
              { m: 'Princess', s: 'Yates a motor de crucero' },
              { m: 'Azimut', s: 'Yates a motor italianos' },
              { m: 'Beneteau Oceanis', s: 'Veleros de crucero premium' },
              { m: 'Jeanneau Sun Odyssey', s: 'Veleros de gama alta' },
              { m: 'Hanse', s: 'Veleros alemanes' },
            ].map((m) => (
              <div key={m.m} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)' }}>{m.m}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.4rem' }}>{m.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produits */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materiales que instalamos en yates</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Tres familias de material, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>un estándar compartido.</em>
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

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro enfoque</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco pasos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>discreción incluida.</em>
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

      {/* Calepinage et confection */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Replanteo y fabricación en taller</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            La instalación en el muelle solo dura tres días. <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>Todo se prepara de antemano.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Medición con plantilla</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>En un yate de casco completo, medir con una cinta métrica es inútil: cada mamparo se curva, cada umbral sigue la línea de la cubierta. Trabajamos a partir de una plantilla de papel kraft grueso, extendida y luego trazada a mano con un rotulador náutico, referencia por referencia. En yates recientes (Sunseeker, Princess), una plantilla láser respalda a la manual para las grandes superficies del salón. Precisión objetivo: 1 a 2 mm.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Fabricación en nuestro taller de Villedoux</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Cada plantilla se traslada a los rollos en el taller. Corte con cuchilla circular o con cúter según los ángulos. Un premontaje en seco nos permite probar el ajuste sobre el suelo del taller antes del transporte. En una reforma completa de 50 pies, de 4 a 7 días en el taller para una colocación final de 2-3 días a bordo. Eso es lo que mantiene un calendario ajustado cuando el armador solo libera el barco una única semana.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Retales y casado de dibujo</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>En una lana virgen con dibujo (Wilton figurado, Axminster personalizado), la gestión de los retales cambia la factura: un casado estricto del dibujo puede obligar a un 15 a 25 % más de desperdicio. Un replanteo riguroso reduce las pérdidas. En una lana a medida pedida a su tamaño final, no es posible ningún retal: cualquier error de medición implica reiniciar un pedido con un plazo de fábrica de 6 a 12 semanas.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Alfombras a medida a juego</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Para los salones principales, una alfombra a medida cortada de la misma fibra que la moqueta que la rodea, con un borde cosido a mano (trenza de algodón o cuero) y un respaldo antideslizante adaptado al barco. Un monograma discreto o el escudo del barco pueden integrarse en el tufting. Fabricación de 3 a 5 semanas según dimensiones y complejidad del borde.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quatre exigences spécifiques au yacht */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro enfoque del trabajo a medida premium</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Cuatro exigencias <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propias de un yate.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Trabajar dentro de las limitaciones de la gama alta exige la caja de herramientas adecuada. Esto es lo que hace distintiva la instalación de un yate, y cómo lo gestionamos en cada obra.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Adhesivos de poliuretano náuticos</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Trabajamos exclusivamente con adhesivos de PU bicomponente certificados para uso náutico, formulados para mantenerse elásticos en un ambiente salino y bajo cambios de temperatura. Su coste de material es de 4 a 6 veces el de un adhesivo acrílico de interior, pero es la condición para una colocación que aguante 10 años a bordo.</p>
            </div>
            <div style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Bases adecuadas</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>En un yate, la base importa tanto como la moqueta. Usamos espumas de célula cerrada específicas para uso náutico, que no acumulan condensación contra el soporte. El revestimiento respira, la madera se mantiene seca, el conjunto se conserva sano con el tiempo.</p>
            </div>
            <div style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Clasificación al fuego y trazabilidad</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Instalamos materiales cuyos certificados de ensayo al fuego se aportan a petición: Bfl-s1 para uso privado de recreo, IMO FTP parte 5 para chárter comercial. Esta trazabilidad de materiales es exigida por aseguradoras como Pantaenius o Generali Yacht, y la documentamos en cada obra.</p>
            </div>
            <div style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Replanteo de las curvas</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>En un yate, los suelos rectos no existen. Nuestro método se apoya en la plantilla de papel kraft, el corte en taller con precisión milimétrica y la soldadura de la costura en garganta. Estas destrezas exigen el hábito de los talleres de contract y náuticos, y eso es lo que CB Sols practica desde hace más de 28 años.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Délais et planification */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Plazos y planificación</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            De la primera llamada a la entrega, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>cuente de 6 a 14 semanas.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              { etape: 'Presupuesto', delai: '5 días', detail: 'Visita en el muelle en la semana siguiente al contacto. Presupuesto valorado 48 h después de la visita, material confirmado en el showroom.' },
              { etape: 'Pedido del material', delai: '1-2 semanas', detail: 'Polipropileno en stock del proveedor; lana a medida o Axminster bajo pedido, de 6 a 12 semanas según la fábrica.' },
              { etape: 'Fabricación en taller', delai: '3-8 semanas', detail: 'Según la superficie y la complejidad. Una reforma completa de un yate de 50 pies = 5-7 semanas en el taller, junto al pedido de la alfombra a medida.' },
              { etape: 'Instalación en el muelle', delai: '2-5 días', detail: 'Según la superficie. Programada en torno a la disponibilidad del barco, idealmente fuera de temporada (octubre-abril) con el barco en tierra.' },
            ].map((p) => (
              <div key={p.etape} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{p.etape}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '0.6rem' }}>{p.delai}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{p.detail}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px' }}>
            Ventana ideal: de octubre a abril, barco varado en tierra o en dique seco. Acceso más fácil, sin presión de temporada, y la posibilidad de coordinar con el ebanista, el tapicero y el pintor en una única obra compartida.
          </p>
        </div>
      </section>

      {/* Citation milieu CTA */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &laquo; Un yate no se puede presupuestar por teléfono. Hay que subir a bordo, sentir el ambiente, leer la ebanistería. El presupuesto solo llega después de eso. &raquo;
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?source=moquette-yacht-inline" variant="primary" size="md">Reservar una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Confidencialidad total por defecto</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Preguntas frecuentes</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Moqueta para yate, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas honestas.</em>
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

      {/* CTA après FAQ */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Una reforma en estudio?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Una conversación confidencial, sin compromiso.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Una conversación de 20 minutos basta para aclarar las opciones de material, un calendario realista y un orden de magnitud del presupuesto.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?source=moquette-yacht-faq" variant="primary" size="md">Pedir presupuesto</Button>
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
            <Link href="/es/sols-monaco" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Suelos en Mónaco (Port Hercule) →</Link>
            <Link href="/es/moquette-catamaran" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moqueta para catamarán →</Link>
            <Link href="/es/moquette-peniche" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moqueta para barcaza →</Link>
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
            Su yate <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>en manos expertas.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita confidencial en el muelle. Un presupuesto detallado, acabados premium, discreción garantizada.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=moquette-yacht" variant="primary" size="md">Pedir presupuesto</Button>
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
