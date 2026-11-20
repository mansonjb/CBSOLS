import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Moqueta para catamarán | Salón, camarotes, cascos La Rochelle',
  description: "Instalación de moqueta náutica para catamaranes en La Rochelle: Lagoon, Bali, Fountaine Pajot, Catana, Outremer. Polipropileno Bfl-s1, adhesivo de poliuretano, costuras soldadas en caliente.",
  alternates: {
    canonical: 'https://cbsols.fr/es/moquette-catamaran',
    languages: { 'fr-FR': 'https://cbsols.fr/moquette-catamaran', 'en': 'https://cbsols.fr/es/moquette-catamaran' },
  },
  openGraph: {
    title: 'Moqueta para catamarán | La Rochelle',
    description: "Especialista en moqueta náutica para catamaranes: salón, camarotes, dos cascos. Fabricación en taller, instalación en el muelle en Port des Minimes o La Flotte.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/moquette-catamaran.jpg', width: 1200, height: 630 }],
  },
}

const zones = [
  { title: 'Salón principal', desc: "La estancia central del catamarán, a pleno sol a través de los grandes ventanales, atravesada durante todo el día. Una moqueta de polipropileno de 1100 g/m² clasificada Bfl-s1, replanteada para ceñirse al faldón de la viga central y a las escaleras que bajan a cada casco." },
  { title: 'Camarotes de los armadores (cascos)', desc: "Camarotes situados por lo general a popa de cada casco, más húmedos que el salón (cerca de la línea de flotación, condensación acentuada). Una moqueta transpirable, una base de espuma de célula cerrada, nunca un fieltro absorbente." },
  { title: 'Camarotes de invitados y literas de proa', desc: "Espacios compactos, muchos ángulos, a menudo bajo escotillas de cubierta. Corte con plantilla, costuras soldadas en caliente, acabados cuidados en los umbrales." },
  { title: 'Pasillos y escalones', desc: "Zonas de circulación muy transitadas, a veces húmedas (al bajar de la bañera). Es posible una combinación de moqueta / PVC náutico soldado para las zonas húmedas inmediatas." },
]

const produits = [
  { name: 'Moqueta náutica de polipropileno 1100 g/m²', desc: "El estándar del catamarán de crucero. Impermeable a la humedad, de secado rápido, clasificada al fuego Bfl-s1. Tonos arena, gris y antracita: clásicos que aguantan el ritmo del chárter o de la familia." },
  { name: 'Moqueta de poliamida nylon tratada', desc: "Para los armadores que quieren un tacto más suave en el salón. Tratamiento ignífugo integrado, resistencia mejorada a los rayos UV. Conviene reservarla para embarcaciones bien ventiladas y climatizadas." },
  { name: 'Suelo de PVC náutico soldado para la cocina', desc: "Una cocina expuesta al agua, las salpicaduras y el calor. Una base de espuma de célula cerrada, costuras soldadas en caliente a 200 °C, estanqueidad total. Conforme a MED para el uso de chárter comercial." },
]

const process = [
  { step: 'Visita en el muelle', desc: "Un reconocimiento de ambos cascos + el salón, fotografías sistemáticas, una medición de humedad del soporte de madera o composite. Identificación de los puntos duros: faldón de la viga, pasos técnicos, escotillas." },
  { step: 'Plantilla y selección', desc: "Una plantilla precisa de cada zona. En paralelo, usted elige el material en el showroom de Villedoux o a partir de muestras que le enviamos." },
  { step: 'Presupuesto detallado', desc: "Un presupuesto valorado por zona (salón, camarote de babor, camarote de estribor, etc.). Usted decide si hacerlo todo o por etapas." },
  { step: 'Fabricación en taller', desc: "Corte en el taller a partir de la plantilla, premontaje, pruebas de ajuste. El barco no queda fuera de servicio durante esta fase (de 3 a 7 días según la superficie)." },
  { step: 'Instalación en el muelle', desc: "De 1 a 3 días en el barco según la superficie: Port des Minimes, La Pallice, La Flotte, Saint-Martin. Adhesivo de poliuretano náutico, soldadura en caliente, acabados, una entrega limpia." },
]

const refitSteps = [
  { n: '01', t: 'Auditoría en el muelle (D0)', d: "Inspección del salón, los cuatro camarotes y los pasillos. Medición de humedad del soporte de composite (higrómetro capacitivo, umbral del 4 %). Fotos de cada escotilla técnica, cada faldón, cada junta de mamparo." },
  { n: '02', t: 'Plantilla y replanteo (D0-D2)', d: "Una plantilla de papel kraft por zona, trasladada a los planos del taller. Replanteo de los anchos teniendo en cuenta el sentido del pelo, las uniones sobre la viga central y los retales minimizados." },
  { n: '03', t: 'Levantamiento del revestimiento antiguo (D3-D4)', d: "Retirada del suelo antiguo, raspado de los restos de adhesivo acrílico del contrachapado náutico o del gel coat. Un diagnóstico de cualquier filtración bajo el suelo." },
  { n: '04', t: 'Preparación del soporte (D4)', d: "Desengrasado con alcohol isopropílico, lijado ligero, aplicación de una imprimación de poliuretano compatible con el poliéster. Secado de 2 a 4 horas según la temperatura." },
  { n: '05', t: 'Fabricación en taller (D5-D10)', d: "Corte de los anchos a partir de la plantilla, premontaje, comprobación dimensional. Soldadura en caliente de las costuras en el taller en las grandes piezas del salón." },
  { n: '06', t: 'Instalación en el muelle (D11-D13)', d: "Encolado zona por zona, apisonado con un rodillo pesado, recolocación de las escotillas de inspección. Soldadura en caliente de las costuras restantes directamente en el barco." },
  { n: '07', t: 'Acabados y umbrales (D13)', d: "Juntas de acabado en las uniones de mamparo, perfiles de acero inoxidable en los umbrales de los camarotes, limpieza con un aspirador profesional. Ningún rastro visible de adhesivo." },
  { n: '08', t: 'Entrega (D14)', d: "Una visita con el armador o el patrón. Entrega de los certificados de ensayo al fuego de los materiales, una ficha de cuidado personalizada, una garantía de instalación de 2 años. El barco es utilizable en 24 h." },
]

const faq = [
  { q: '¿Qué modelos de catamarán han acondicionado ya?', a: "Trabajamos con regularidad en Lagoon (380, 42, 46, 50), Bali (4.2, 4.6, 5.4), Fountaine Pajot (Astrea, Saona, Elba), así como Catana y Outremer para el crucero de altura. Cada modelo tiene sus particularidades: la viga central del Lagoon es distinta de un Bali diáfano, y el replanteo cambia por completo." },
  { q: '¿Hay que levantar la moqueta antigua antes de colocar?', a: "Sí, siempre. Levantarla nos permite inspeccionar el soporte, comprobar que no haya habido filtraciones ni moho, y tratarlo si hace falta. Colocar sobre la moqueta antigua es un atajo que se paga 18 meses después. Incluimos el levantamiento en el presupuesto, sin recargo." },
  { q: '¿Cuánto tarda la instalación en un Lagoon 42 o equivalente?', a: "Para un catamarán de 12-14 metros con salón + 4 camarotes + pasillos, cuente de 5 a 7 días en el taller (fabricación) y luego de 2 a 3 días en el muelle para la instalación. El barco es utilizable desde la tarde del último día de instalación (el adhesivo de poliuretano cura en 24 h)." },
  { q: '¿La moqueta es compatible con un uso intensivo de chárter?', a: "Sí, siempre que se suba en gramaje (de 1100 a 1400 g/m²) y se elija un tono oscuro indulgente. Para las flotas de chárter de La Rochelle, ofrecemos ciclos de cuidado (inyección-extracción en caliente) cada 2 años para proteger la inversión." },
  { q: '¿Qué ocurre con una fuga de agua localizada?', a: "Esa es la ventaja del polipropileno: se seca en 24-48 h al aire con un ventilador, sin deformarse. Si la zona está demasiado dañada (agua estancada bajo el suelo durante semanas), podemos sustituir solo el ancho afectado. Ese es todo el sentido del replanteo por zona." },
  { q: '¿Acondicionan también catamaranes nuevos salidos directamente del astillero?', a: "Sí. Varios armadores nos confían el suelo de su catamarán nuevo en la entrega, para sustituir la moqueta original (a menudo instalada para cumplir un pliego genérico, no óptima para el uso que le van a dar)." },
  { q: '¿Trabajan fuera de la temporada de verano?', a: "De hecho, lo preferimos. La temporada alta (mayo-septiembre) es difícil para los armadores que usan su barco. Realizamos la mayoría de nuestras obras de catamarán entre octubre y abril, junto al invernaje o a la parada técnica anual." },
]

export default function MoquetteCatamaranPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/moquette-catamaran#service',
        name: 'Instalación de moqueta para catamaranes',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: ['La Rochelle', 'Île de Ré', 'Port des Minimes', 'La Pallice', 'Charente-Maritime'],
        serviceType: 'Moqueta náutica para catamaranes a vela y a motor',
        description: 'Diseño, fabricación en taller e instalación en el muelle de moqueta náutica para catamaranes: salón, camarotes, cascos. Conforme a Bfl-s1 e IMO FTP.',
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
          { '@type': 'ListItem', position: 3, name: 'Moqueta para catamarán', item: 'https://cbsols.fr/es/moquette-catamaran' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Moqueta para catamarán</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Moqueta para catamarán,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>dos cascos, un solo estándar.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Salón, camarotes, pasillos: diseño e instalación para catamaranes de crucero, de chárter y de armador privado. Lagoon, Bali, Fountaine Pajot, Catana, Outremer. 28 años de experiencia artesanal, instalación en Port des Minimes y en todos los puertos de la Charente.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=moquette-catamaran" variant="primary" size="md">Pedir presupuesto</Button>
                <Button href="/es/moquette-bateau" variant="outline" size="md">Ver la página de moqueta para barco</Button>
              </div>
            </div>
            {/* TODO: ajouter photo carré catamaran */}
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Lo que exige un catamarán</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &laquo; En un catamarán, la humedad no viene solo del mar. Viene del salón, que respira por dos cascos. Por eso nunca colocamos fieltro. &raquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Zones */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>¿Qué parte del catamarán?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cuatro zonas, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>cuatro tratamientos.</em>
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

      {/* Spécificités catamaran */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Por qué un catamarán necesita un enfoque dedicado</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Tres particularidades que no encontrará en <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>un monocasco.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>El salón central expuesto</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>El salón de un catamarán moderno (Lagoon 42, Bali 4.6, Saona 47) es un gran salón acristalado casi panorámico. Allí el suelo recibe pleno sol de 6 a 10 horas al día. Las fibras de lana mal tratadas pierden su color en dos temporadas. El polipropileno teñido en masa y estable a los rayos UV es la base de partida.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Ventilación entre los cascos</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>El salón central está aislado térmicamente, pero los cascos se mantienen más frescos: el aire circula constantemente y arrastra condensación. Bajo una moqueta mal colocada (fieltro absorbente), el agua se estanca entre el soporte y la fibra. El moho se descubre al levantarla. La respuesta: una espuma de célula cerrada y un adhesivo que &laquo; respira &raquo; sin dejar pasar el agua.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>El faldón de la viga central</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>En la mayoría de los catamaranes de serie, el salón tiene una viga transversal revestida con un faldón: es el paso técnico entre los dos cascos. El replanteo tiene que ceñirse a ella sin estirar la fibra. Un error frecuente: un único ancho recortado a lo bruto, que se levanta al cabo de un año. La respuesta: dos o tres anchos, una costura soldada en caliente, un solape en garganta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA inline après spécificités */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Tiene un proyecto en mente?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Hablémoslo directamente.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Cada catamarán tiene sus limitaciones. Valentin Prévoteau se desplaza a Port des Minimes o a La Flotte para tomar las medidas.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?source=moquette-catamaran" variant="primary" size="md">Pedir presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Marques de catamaran */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Catamaranes que acondicionamos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Un buen conocimiento de <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>los planos de cubierta.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {['Lagoon', 'Bali Catamarans', 'Fountaine Pajot', 'Catana', 'Outremer', 'Nautitech'].map((m) => (
              <div key={m} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)' }}>{m}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.4rem' }}>Crucero, chárter, armadores privados</div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px' }}>
            La mayor parte de la flota de chárter de La Rochelle está compuesta por Lagoon y Bali. Conocemos las distribuciones del salón, las posiciones de las escotillas técnicas, los pasos de cable bajo los pasillos. En un Outremer o un Catana construidos para el crucero de larga distancia, la exigencia de peso y rendimiento cambia las cosas: pasamos a gramajes más ligeros y favorecemos los tonos muy claros para limitar la acumulación de calor.
          </p>
        </div>
      </section>

      {/* Produits */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materiales que instalamos en catamaranes</div>
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

      {/* Citation milieu CTA */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &laquo; En un Lagoon 42 o un Bali 4.6, puedo adivinar el replanteo antes incluso de subir a bordo. Pero siempre lo confirmo sobre el terreno. Nada sustituye a una visita en el muelle. &raquo;
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?source=moquette-catamaran-inline" variant="primary" size="md">Reservar una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro enfoque</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            De la visita en el muelle <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>a la entrega.</em>
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

      {/* Étude de cas : refit catamaran 45' */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Tipo de obra: reforma completa, catamarán de 45 pies</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Ocho pasos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>catorce días de principio a fin.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Para un Lagoon 45 o equivalente (salón de 22 m² + cuatro camarotes de 8 a 10 m² + pasillos), este es el desarrollo típico de una reforma completa. La duración varía según el estado del soporte, el levantamiento que haya que hacer y el material elegido. Superficie total tratada: en torno a 75 a 90 m².
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {refitSteps.map((s) => (
              <div key={s.n} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{s.n}. {s.t}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Préparation du support */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Preparación del soporte</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            En un catamarán, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>todo se decide antes del adhesivo.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Gel coat y contrachapado náutico</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>El suelo de un catamarán moderno combina dos soportes: gel coat de poliéster en las zonas del salón y contrachapado náutico multicapa en los camarotes. Cada uno exige una preparación distinta. Sobre gel coat: un lijado suave con abrasivo de grano 180, desengrasado con alcohol isopropílico para neutralizar los restos de cera desmoldeante. Sobre contrachapado: una comprobación de humedad (umbral del 4 %), tratando una zona húmeda con un deshumidificador 24 h antes de la instalación si hace falta.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Imprimación de adherencia para poliéster</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Un adhesivo de poliuretano no se adhiere directamente a un gel coat pulido. Aplicamos una imprimación específica para poliéster (normalmente a base de epoxi modificado) con rodillo, en dos pasadas cruzadas. Tiempo de secado entre pasadas: 2 horas a 20 °C. Espera antes de encolar: de 4 a 6 horas. Este paso, a menudo omitido por los instaladores no especialistas, es la causa número uno de levantamiento a los 18 meses.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Escotillas de inspección y pasos técnicos</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Cada catamarán tiene sus escotillas: acceso a sentinas, baterías, grifos de fondo, potabilizadoras. Las retiramos sistemáticamente antes de colocar, replanteamos el revestimiento sobre ellas y luego recortamos limpiamente con cúter sobre el terreno con una junta de acabado. Una escotilla reenmarcada con un perfil de acero inoxidable a medida queda invisible. Es la marca de un trabajo cuidado.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Juntas de dilatación y curvas</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>En las zonas donde la cubierta se calienta al sol (salón de estribor, delante de los grandes ventanales), dejamos una junta de dilatación de 2 a 3 mm en el perímetro, disimulada por el rodapié o el acabado de la pared. Para las curvas complejas (entrada del pasillo, colector), fabricamos en varios anchos con una costura soldada en caliente en garganta, más discreta que un único ancho estirado que siempre acaba notándose.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Entretien et durée de vie */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Cuidado a largo plazo</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Diez años de moqueta <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>también significa el cuidado adecuado.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Aspirado semanal</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Un aspirador de cepillo rotativo, filtración HEPA. En un catamarán en uso, la sal cristaliza en las fibras después de cada navegación: sin un aspirado regular, abrasiona la fibra por fricción al pisar. Un aspirado a fondo por semana de uso basta para duplicar la vida útil efectiva del revestimiento.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Limpieza en profundidad anual</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Una vez al año, al inicio o al final de la temporada, una limpieza por inyección-extracción en caliente con un producto neutro sin aclarado. En el polipropileno náutico, la técnica es segura (la fibra no absorbe agua). En la lana tratada, prefiera un champú en seco que no altere el tratamiento ignífugo. Secar a plena ventilación durante 24 a 48 h.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Invernaje y antimoho</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Para un catamarán invernado cerrado (octubre-marzo), un tratamiento antimicrobiano en spray y la apertura de las escotillas de los camarotes para una ventilación forzada con un deshumidificador. Colocar alfombrillas absorbentes extraíbles delante de los pasillos interiores: recogen el agua de lluvia que entra por la capota y protegen la moqueta del salón.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Preguntas frecuentes</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Moqueta para catamarán, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas precisas.</em>
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un catamarán que acondicionar?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Presupuesto en 48 h desde la visita en el muelle.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Modelo, puerto base, estado del suelo actual: tres datos bastan para concertar una visita.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?source=moquette-catamaran-faq" variant="primary" size="md">Pedir presupuesto</Button>
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
            <Link href="/es/moquette-yacht" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moqueta para yate →</Link>
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
            Su catamarán <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>merece algo mejor.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita gratuita en el muelle. Port des Minimes, La Pallice, La Flotte, Saint-Martin-de-Ré.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=moquette-catamaran" variant="primary" size="md">Pedir presupuesto</Button>
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
