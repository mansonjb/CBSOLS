import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Moqueta para castillo y casa señorial | Alfombras patrimoniales a medida',
  description: 'Instalación de moqueta y alfombras a medida en castillos, casas señoriales y palacetes urbanos. Cuidado del patrimonio y aprobación ABF. CB Sols atiende a propietarios y hoteleros de prestigio desde hace más de 28 años.',
  alternates: {
    canonical: 'https://cbsols.fr/es/moquette-chateau',
    languages: { 'fr-FR': 'https://cbsols.fr/moquette-chateau', en: 'https://cbsols.fr/en/moquette-chateau', es: 'https://cbsols.fr/es/moquette-chateau', },
  },
  openGraph: {
    title: 'Moqueta para castillo y casa señorial | Alfombras patrimoniales a medida',
    description: 'Fabricación e instalación de alfombras de gala a medida en castillos y casas señoriales. Aprobación ABF, motivos Aubusson y Savonnerie reconstruidos, escaleras monumentales.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/moquette-chateau.jpg', width: 1200, height: 630 }],
  },
}

const cas = [
  { title: 'Salones de recepción y galerías', desc: 'Una alfombra a medida cortada a las dimensiones exactas de la sala, motivos aprobados con el decorador o el conservador, colocada suelta sobre el parqué histórico. Los motivos de época perdidos pueden reconstruirse a partir de levantamientos o de fotografías de época.' },
  { title: 'Escaleras monumentales', desc: 'Una alfombra de gala para escalera en un tramo recto o de caracol, instalada peldaño a peldaño sobre escaleras de piedra de la Charente o de roble, perfiles de latón o bronce patinado, fijación discreta que respeta la madera o la piedra.' },
  { title: 'Suites de invitados y dormitorios', desc: 'Usted gestiona un castillo-hotel. Colocamos una moqueta de lana con tratamiento antimanchas, conforme a las exigencias al fuego de los edificios de pública concurrencia. La estancia conserva su carácter, el suelo soporta un servicio continuado. Quince años por delante.' },
  { title: 'Pasillos y corredores', desc: 'Tejemos en grandes longitudes, sin costura visible. El tránsito continuado no marca el pelo. El acabado se oculta discretamente a lo largo del rodapié antiguo, sin tocar la madera.' },
]

const produits = [
  { name: 'Alfombras Axminster o Wilton a medida', desc: 'Una tejeduría de gama alta, históricamente británica, ideal para salas de gala. El Axminster permite motivos complejos por metro, el Wilton ofrece un pelo de bucle denso de muy larga vida. Dimensiones de hasta 8 por 12 metros en una sola pieza.' },
  { name: 'Moqueta de lana para el castillo-hotel', desc: 'Lana virgen de tufting, tratamiento antimanchas y resistencia al fuego conforme para los edificios de pública concurrencia. Trabajamos con EGE, Brintons o Ulster Carpets. Colores y motivos ajustados a la identidad del local, colocación pie a pie posible en grandes superficies.' },
  { name: 'Fabricación de alfombras Aubusson y Savonnerie', desc: 'Reproducción a medida de motivos de época, en colaboración con talleres de tejeduría especializados. El Hereke turco también está disponible para pedidos de gran longitud. Los cartones se aprueban con el conservador o el arquitecto de interiores antes de arrancar la producción.' },
]

const process = [
  { step: 'Visita al lugar', desc: 'Un levantamiento preciso en papel vegetal, fotos, una medición de humedad del parqué o del soporte de piedra, un diagnóstico de los suelos. Una conversación con el propietario, el arquitecto del patrimonio o el decorador.' },
  { step: 'Aprobación ABF', desc: 'Si la propiedad está catalogada o inscrita como monumento histórico, reunimos el expediente para el Arquitecto de los Edificios de Francia. Materiales elegidos para ser compatibles estética y técnicamente, aprobados antes de cualquier pedido.' },
  { step: 'Elección del material', desc: 'Una elección en el showroom de Villedoux o muestras presentadas en el lugar. Los motivos reproducidos mostrados, los colores aprobados con el decorador o el conservador.' },
  { step: 'Fabricación en taller', desc: 'Corte en taller, o un pedido al tejedor asociado para las alfombras a medida. Un plazo de 6 a 16 semanas según la complejidad del motivo y la tejeduría elegida. Un seguimiento de producción enviado al cliente.' },
  { step: 'Instalación y acabados', desc: 'Colocación suelta sobre parqué antiguo con una base de fieltro reversible, colocación encolada reversible donde haga falta, perfiles en las escaleras. Ninguna perforación en el parqué histórico sin acuerdo explícito. Una entrega limpia.' },
]

const faq = [
  { q: '¿Cómo se desarrolla un proyecto en un edificio catalogado por la ABF?', a: 'Si la propiedad está catalogada o inscrita como monumento histórico, cualquier trabajo visible debe recibir el acuerdo previo del Arquitecto de los Edificios de Francia. Reunimos el expediente con el propietario o el arquitecto del patrimonio: una descripción de los materiales, muestras, fotografías, motivos y colores propuestos. La revisión tarda de uno a tres meses según la autoridad regional del patrimonio. Una vez obtenido el acuerdo, arrancamos la fabricación. Para las propiedades solo inscritas, el procedimiento es más flexible pero aplicamos el mismo rigor.' },
  { q: '¿Pueden reproducir un motivo Aubusson o Savonnerie antiguo?', a: 'Sí, en colaboración con talleres de tejeduría. A partir de una alfombra existente que restaurar, de una fotografía de archivo o de un dibujo, mandamos elaborar un cartón de tejeduría que se aprueba con el conservador, el decorador o el propietario antes de arrancar la producción. Plazos de 12 a 24 semanas para motivos complejos. Para superficies muy grandes, el Hereke turco ofrece una alternativa de alta calidad, a menudo con plazos más cortos.' },
  { q: '¿Qué moqueta para un hotel patrimonial Relais & Châteaux?', a: 'Para un hotel patrimonial de prestigio, por lo general combinamos dos lógicas. En los espacios de gala abiertos a los huéspedes (salones, biblioteca, sala de fumar), una alfombra a medida o una moqueta de lana de gran clásico, la estética primero. En las suites y los pasillos, moqueta de contract en lana virgen de tufting, clasificación al fuego Cfl-s1 como mínimo, un tratamiento antimanchas compatible con el servicio hotelero, una vida de 10 a 15 años con un mantenimiento regular. Los fabricantes de referencia para este tipo de proyecto son EGE, Brintons, Ulster Carpets y Tisca Tiara.' },
  { q: '¿Cómo colocan la moqueta sin dañar el parqué antiguo?', a: 'Evitamos sistemáticamente el clavado y la perforación en el parqué histórico de roble macizo, en espiga o de paneles Versalles. Tres técnicas, según el caso. La colocación suelta sobre una base gruesa de fieltro, totalmente reversible, ideal para las alfombras de gala. La colocación encolada reversible con adhesivos específicos que se despegan sin dejar rastro, empleada para la moqueta de contract en las suites. La colocación sobre tiras perimetrales (gripper) fijadas a listones extraíbles a lo largo del rodapié, para preservar el parqué que queda a la vista en el centro. Un diagnóstico previo en todos los casos: el nivel de humedad de la madera, la planimetría, un tratamiento contra insectos si hace falta.' },
  { q: '¿Restauran alfombras o tapices de familia?', a: 'Sí. Fijación de los dobladillos, retejido local en pequeñas zonas desgastadas, una limpieza en seco en profundidad, desempolvado mecánico sobre respaldos antiguos. Para piezas de muy alto valor, orientamos a los clientes hacia restauradores especializados en textiles antiguos con los que trabajamos con regularidad. Un diagnóstico previo gratuito en el showroom o en el lugar.' },
  { q: '¿Trabajan con arquitectos del patrimonio?', a: 'Con regularidad. Arquitectos del patrimonio, arquitectos de interiores especializados, decoradores de residencias de prestigio, conservadores. Proporcionamos los elementos técnicos que necesitan sus expedientes: fichas de materiales, muestras anotadas, pliegos de colocación, presupuestos detallados por lote. Nuestro papel es ejecutar con precisión la visión del prescriptor, aportando la pericia técnica del oficio.' },
  { q: '¿Qué plazos para una alfombra de gala a medida?', a: 'Para una alfombra Axminster o Wilton tejida a las dimensiones exactas de una sala, cuente de 8 a 16 semanas de fabricación según el tejedor y la complejidad del motivo. Para una reproducción Aubusson o Savonnerie, de 12 a 24 semanas. Para una moqueta de contract colocada pie a pie en una gran superficie, de 3 a 6 semanas de plazo de material y luego la colocación en 1 a 3 días según la superficie. Planificamos al ritmo de los demás oficios en la obra.' },
]

const specs = [
  { title: 'Expediente ABF', desc: 'En una propiedad catalogada o inscrita, cualquier elemento visible pasa ante el Arquitecto de los Edificios de Francia. Construimos el expediente con usted. La revisión tarda de uno a tres meses según la autoridad regional del patrimonio, y arrancamos la fabricación una vez obtenido el acuerdo.' },
  { title: 'Bases sin clavos', desc: 'En los suelos históricos de parqué de roble macizo, en espiga o Versalles, evitamos toda perforación. Un sistema encolado reversible o una colocación suelta sobre una base de fieltro, para preservar por completo la madera antigua.' },
  { title: 'Alfombras de gala a medida', desc: 'Reconstrucción de motivos antiguos como Aubusson o Savonnerie, tejeduría Axminster o Wilton, dimensiones ajustadas a la sala de hasta 8 por 12 metros en una sola pieza. Cartones aprobados con el decorador o el conservador antes de arrancar la producción.' },
  { title: 'Alfombra de gala para escalera monumental', desc: 'Escaleras de piedra de la Charente, grandes escaleras de roble, instalación peldaño a peldaño en un tramo recto o de caracol, perfiles de latón o bronce patinado, fijación discreta que respeta el soporte.' },
  { title: 'Restauración de piezas antiguas', desc: 'Refijación, retejido local en pequeñas zonas desgastadas, una limpieza en seco en profundidad, desempolvado mecánico sobre respaldos frágiles. Derivación a restauradores textiles especializados para las piezas de museo.' },
  { title: 'Diagnóstico previo de los suelos', desc: 'Antes de cualquier colocación, una comprobación de la planimetría y una medición del nivel de humedad de la madera, esencial en una residencia antigua. Un tratamiento preventivo contra insectos si hace falta. Ninguna colocación sobre un soporte dudoso, nos tomamos el tiempo de prepararlo como es debido.' },
]

const marques = [
  { name: 'EGE', detail: 'El tejedor danés para hoteles y residencias con carácter. Un aspecto clásico que sigue siendo compatible con las exigencias de los edificios de pública concurrencia.' },
  { name: 'Brintons', detail: 'El histórico Axminster británico, motivos clásicos o heráldicos. Una referencia mundial en la hostelería de lujo, y el material envejece con nobleza.' },
  { name: 'Ulster Carpets', detail: 'Tejedurías irlandesas de gama alta para grandes residencias. Más de veinte años de desgaste en uso normal.' },
  { name: 'Tisca Tiara', detail: 'Un fabricante suizo, gamas de contract y residenciales. Los acabados suaves conviven con la carpintería antigua sin contraste agresivo.' },
  { name: 'Axminster Carpets', detail: 'Una tejeduría con motivo por metro, ideal para reconstruir salas de gala. Una tradición inglesa desde 1755.' },
  { name: 'Wilton Carpets', detail: 'Un pelo de bucle denso, una vida de 15 a 28 años, adaptable como moqueta de contract o como alfombra a medida.' },
  { name: 'Talleres Aubusson y Savonnerie', detail: 'Tejedores asociados para la reproducción a medida de motivos históricos, aprobación del cartón con el conservador.' },
  { name: 'Hereke turco', detail: 'Una alternativa de calidad para grandes superficies, a menudo con plazos más cortos, motivos orientales u occidentales bajo pedido.' },
]

const lieux = [
  { nom: 'Castillos del Valle del Loira', detail: 'Turena, Indre-et-Loire, Maine-et-Loire. Residencias catalogadas y hoteles patrimoniales del Valle del Loira.' },
  { nom: 'Castillos de Cognac y Saintonge', detail: 'Charente y Charente-Maritime, justo al lado de nuestro taller. Desplazamientos rápidos, viaje gratuito.' },
  { nom: 'Palacetes urbanos de La Rochelle', detail: 'El centro histórico, residencias de los siglos XVII y XVIII, reformas interiores bajo limitación patrimonial.' },
  { nom: 'Residencias de la zona de Burdeos', detail: 'Los viñedos del Médoc, Saint-Émilion, Pessac-Léognan. Castillos vinícolas y propiedades familiares.' },
  { nom: 'Castillos del Périgord y el Quercy', detail: 'Dordoña, Lot, Tarn-et-Garonne. Casas señoriales de piedra clara y residencias fortificadas.' },
  { nom: 'Casas señoriales normandas', detail: 'Calvados, Eure, Orne. Casas de entramado de madera y residencias de la Côte Fleurie.' },
  { nom: 'Castillos-hoteles Relais & Châteaux', detail: 'Por toda Francia. Coordinación con los equipos de gestión y mantenimiento para los trabajos fuera de temporada.' },
  { nom: 'Castillos vinícolas', detail: 'Champaña, Borgoña, Provenza, Languedoc. Fincas de prestigio abiertas a la hospitalidad privada.' },
  { nom: 'Casas señoriales bretonas', detail: 'La costa sur, el Golfo de Morbihan, la Cornouaille. Residencias de granito con un fuerte carácter arquitectónico.' },
  { nom: 'Palacetes parisinos', detail: 'Reformas completas al ritmo de los arquitectos de interiores, trabajos en una ventana de tiempo corta.' },
  { nom: 'Residencias catalogadas de Île-de-France', detail: 'Yvelines, Essonne, Seine-et-Marne. Castillos y casas señoriales cerca de la capital.' },
  { nom: 'Hoteles patrimoniales de 5 estrellas', detail: 'Establecimientos históricos en el centro de las ciudades, reformas de suites y espacios comunes bajo la limitación de los edificios de pública concurrencia.' },
]

export default function MoquetteChateauPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/moquette-chateau#service',
        name: 'Moqueta y alfombras a medida para castillos, casas señoriales y palacetes urbanos',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'Country', name: 'France' },
          { '@type': 'Place', name: 'Loire Valley' },
          { '@type': 'Place', name: 'Charente-Maritime' },
          { '@type': 'Place', name: 'Bordeaux area' },
          { '@type': 'Place', name: 'Périgord' },
          { '@type': 'Place', name: 'Île-de-France' },
        ],
        serviceType: 'Instalación de moqueta y fabricación de alfombras a medida para propiedades patrimoniales, aprobación ABF, restauración',
        description: 'Fabricación e instalación de alfombras a medida y moqueta de contract para castillos, casas señoriales, palacetes urbanos y castillos-hoteles. Reproducción de motivos Aubusson y Savonnerie, aprobación ABF, cuidado del parqué histórico.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Moqueta para castillo', item: 'https://cbsols.fr/es/moquette-chateau' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Moqueta para castillo</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Moqueta para castillo,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>el patrimonio respetado.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Salones de recepción, escaleras monumentales, suites de castillo-hotel: alfombras a medida y moqueta de contract para el patrimonio privado y hotelero francés. Aprobación ABF, reproducción de motivos Aubusson y Savonnerie, colocación reversible sobre parqué histórico. Más de 28 años de experiencia artesanal.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=moquette-chateau" variant="primary" size="md">Pedir presupuesto</Button>
                <Button href="/es/showroom" variant="outline" size="md">Ver el showroom</Button>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>El detalle que lo cambia todo</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Sobre un parqué en espiga que ha durado tres siglos, el acierto es, ante todo, no dañar nada. El respeto por el lugar guía todo lo demás.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Para qué estancia del castillo</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cuatro escenarios, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>cuatro enfoques.</em>
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un proyecto de restauración?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Cada residencia pide su propia respuesta.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Castillo, casa señorial, palacete urbano: Valentin Prévoteau se desplaza para la visita previa y el levantamiento del soporte.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=moquette-chateau" variant="primary" size="md">Pedir presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Technical specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>El oficio de la colocación en edificios patrimoniales</div>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Alfombras y moquetas que colocamos en edificios patrimoniales</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Tres familias, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>un nivel de exigencia.</em>
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
            Trabajamos con los fabricantes europeos especializados en patrimonio: EGE para los castillos-hoteles, Brintons y Ulster Carpets para el Axminster a medida, Tisca Tiara para los acabados suaves. Para los motivos antiguos, recurrimos a talleres Aubusson o Savonnerie. Y el Hereke turco sigue siendo una buena alternativa en superficies muy grandes, a menudo con plazos más cortos.
          </p>
        </div>
      </section>

      {/* Mid quote + CTA */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &ldquo;Una costura impecable, un replanteo exacto: eso es lo que firma un acabado de gama alta. En una residencia antigua, es también lo que se transmite.&rdquo;
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?from=moquette-chateau-inline" variant="primary" size="md">Reservar una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Una visita previa en todos los casos, viaje gratuito en Charente-Maritime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Fabricantes asociados</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Ocho referencias, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>del contract al hecho a medida.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Tejedores europeos especializados en contract y patrimonio, talleres de tejeduría franceses para las reproducciones históricas, subcontratación Hereke para las grandes superficies. El material adecuado en el lugar adecuado.
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

      {/* Places and residences */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Dónde trabajamos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Algunas residencias y hoteles <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de prestigio.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Trabajamos en todo el patrimonio privado y hotelero francés, en contacto estrecho con arquitectos del patrimonio, conservadores y decoradores de interiores. Una visita previa en todos los casos, aprobación ABF si hace falta, un presupuesto detallado tras el levantamiento.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {lieux.map((l, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{l.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{l.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline 2 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un expediente ABF que presentar?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Reunimos el expediente de materiales con usted.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Muestras, pliegos, motivos, fichas técnicas: todo lo necesario para defender el proyecto ante la autoridad del patrimonio.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=moquette-chateau-mid" variant="primary" size="md">Pedir presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro enfoque, de la visita a la colocación</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco pasos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>del vegetal al acabado.</em>
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
            Moqueta patrimonial, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas detalladas.</em>
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
            Descríbanos su residencia, respondemos en 48 horas.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Tipo de propiedad, cualquier estatus patrimonial, las estancias afectadas, motivos o limitaciones: con eso basta para empezar una conversación útil.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=moquette-chateau-faq" variant="primary" size="md">Pedir presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* See also */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Ver también</div>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '1.5rem' }}>
            CB Sols es también especialista en moqueta náutica y de aviación de negocios. Tres mundos de exigencia compartida, una misma precisión de acabado.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/es/moquette-jet-prive" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moqueta para jet privado →</Link>
            <Link href="/es/moquette-bateau" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moqueta para barco →</Link>
            <Link href="/es/moquette-yacht" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moqueta para yate →</Link>
            <Link href="/es/moquette-catamaran" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moqueta para catamarán →</Link>
            <Link href="/es/moquette-peniche" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moqueta para barcaza →</Link>
            <Link href="/es/services/tapis-sur-mesure" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Alfombras a medida →</Link>
            <Link href="/es/services/pose-moquette" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Instalación de moqueta →</Link>
            <Link href="/es/particuliers" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Para particulares →</Link>
            <Link href="/es/architectes" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Para arquitectos →</Link>
            <Link href="/es/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom de Villedoux →</Link>
          </div>
        </div>
      </section>

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            ¿Una residencia que acondicionar? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Hablemos.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita previa en un castillo, una casa señorial o un palacete urbano. Un expediente ABF si hace falta, un presupuesto detallado tras el levantamiento.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=moquette-chateau" variant="primary" size="md">Pedir presupuesto</Button>
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
