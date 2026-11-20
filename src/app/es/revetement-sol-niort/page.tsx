import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Castle, Home, Mail, MapPin, Pill, Stethoscope, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Revestimiento de suelo en Niort | Moqueta, vinilo, alfombras a medida',
  description: 'Instalación de moqueta, vinilo y alfombras a medida en Niort. Casas señoriales del centro histórico, sedes sociales y grandes plantas de oficinas, restaurantes junto a las antiguas lonjas, residencias de mayores. CB Sols lleva más de 28 años en el oficio y se desplaza con regularidad desde Villedoux.',
  alternates: {
    canonical: 'https://cbsols.fr/es/revetement-sol-niort',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-niort', en: 'https://cbsols.fr/en/revetement-sol-niort', es: 'https://cbsols.fr/es/revetement-sol-niort', },
  },
  keywords: ['revestimiento de suelo Niort', 'moqueta Niort', 'suelo de vinilo Niort', 'instalación de alfombras Niort', 'artesano de suelos Niort', 'vinilo para oficinas de mutuas Niort'],
  openGraph: {
    title: 'Revestimiento de suelo en Niort, la seriedad de Deux-Sèvres',
    description: 'Moqueta, vinilo y alfombras a medida en Niort. Mutuas de seguros, casas señoriales, restaurantes, residencias de mayores. CB Sols, más de 28 años de experiencia.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-niort.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Casas señoriales del centro histórico', desc: 'Tiene una casa burguesa cerca de Notre-Dame o de La Brèche. Moqueta de lana tejida, una alfombra cosida a mano, uniones sobre el parqué antiguo validadas con usted. Respetamos el carácter del lugar sin excesos.' },
  { title: 'Sedes sociales y plantas de oficinas', desc: 'Gestiona una gran planta de oficinas en Niort. Vinilo acústico en los espacios abiertos, losetas de moqueta en la zona de dirección, moqueta de lana en la sala de juntas. Lo planificamos por fases con sus servicios generales.' },
  { title: 'Restaurantes del centro y de las lonjas', desc: 'Regenta un restaurante cerca de las lonjas o de la place du Temple. Venimos de noche o el día de cierre, y no pierde ni un servicio. Una moqueta densa antimanchas y una acústica cuidada para la conversación.' },
  { title: 'Residencias de mayores y residencias asistidas', desc: 'Dirige una residencia de mayores o una residencia medicalizada. Vinilo homogéneo Bfl-s1 en los pasillos, moqueta de lana en las habitaciones, antideslizante R10 en los baños. Documentación de establecimientos abiertos al público e informes de reacción al fuego entregados para la comisión.' },
]

const exigences = [
  { title: 'Trabajar cuando usted no trabaja', desc: 'En las grandes plantas de oficinas no se puede interrumpir la actividad. Por eso venimos por la tarde y el fin de semana. Usted llega el lunes por la mañana, el suelo está instalado y los muebles en su sitio. Ni un día perdido para sus equipos.' },
  { title: 'Menos ruido, más calma', desc: 'En un espacio abierto, el ruido ambiente cansa a todo el mundo. Una buena moqueta o un suelo de vinilo acústico reduce a la mitad el bullicio. Las conversaciones se oyen mejor y vuelve la concentración. Sus equipos lo notan desde el primer día.' },
  { title: 'Respetamos el parqué antiguo', desc: 'Muchas casas señoriales de Niort conservan su parqué original. Instalamos sin clavar y sin encolados agresivos. Si dentro de diez años quiere retirar la moqueta, el parqué de debajo estará intacto. Eso es respetar una casa bonita.' },
  { title: 'A una hora de camino, estamos en su casa', desc: 'Niort está a 80 km de nuestro taller, a una hora por la N11. Está muy cerca. Pasamos varias veces al mes y conocemos las obras de la zona. Usted llama y nosotros vamos a medir esa misma semana.' },
  { title: 'La normativa, nos ocupamos nosotros', desc: 'Residencia, clínica, colegio: hay normas estrictas de seguridad contra incendios y de higiene. Elegimos los productos adecuados por usted, aportamos los certificados y dialogamos con la oficina de control. No tiene que descifrar las fichas técnicas.' },
  { title: 'Un único interlocutor, de principio a fin', desc: 'En una obra grande ya tiene diez contratistas que coordinar. Nosotros somos un solo nombre en su agenda. Presupuesto, calendario, entrega, factura: todo pasa por la misma persona. Usted gana tiempo.' },
]

const materiaux = [
  { name: 'Vinilo acústico Gerflor y Tarkett', desc: 'Lo instalamos mucho en grandes plantas de oficinas. La base absorbe el ruido de pasos y de ruedas de sillas, y sus equipos trabajan con calma. Una amplia gama de colores nos permite ajustarnos a la paleta de su marca. El suelo dura quince años con facilidad, a menudo veinte.' },
  { name: 'Losetas de moqueta EGE y Forbo', desc: 'La elección acertada para un despacho de dirección o una sala de juntas. Las losetas miden 50×50 cm. Si alguien derrama el café, sustituimos solo la loseta dañada. La base acústica suaviza la sala. En una oficina clásica, cuente con quince a veinte años.' },
  { name: 'Moqueta Wilton tejida de lana virgen', desc: 'Para los salones de recepción de las casas señoriales del centro histórico. La lana adquiere pátina con el tiempo y no se aplasta. Al tacto es firme y a la vista se distingue. Elegimos con usted un liso o un discreto motivo geométrico que respete las carpinterías.' },
  { name: 'Vinilo homogéneo para residencias de mayores', desc: 'En los pasillos y habitaciones de las residencias optamos por el vinilo homogéneo. Es el mismo material de arriba abajo, así que no hay capa de desgaste que se pueda atravesar. Soldamos en caliente las láminas y el agua no se cuela por ningún sitio. Tiene veinte a veintiocho años por delante, incluso con mucho tránsito.' },
  { name: 'Alfombras a medida para despachos de dirección', desc: 'Cuando quiere marcar el tono desde la entrada de un despacho de presidencia, la alfombra a medida cumple su papel. Lana virgen, un ribete cosido a mano, dimensiones al centímetro. Podemos reproducir un motivo de la casa o quedarnos con un liso de ceremonia. Cuente con ocho a catorce semanas.' },
  { name: 'Perfiles Romus de latón cepillado y aluminio', desc: 'En los umbrales y en los cantos de escalón cuidamos el detalle. Coordinamos con sus herrajes existentes, algo que cuenta en un edificio histórico. En obras de oficinas algo exigentes, podemos encargar perfiles a medida. Es el tipo de detalle que se nota en la entrega.' },
]

const marques = [
  { name: 'Gerflor', desc: 'El fabricante francés con sede en Lyon que conocemos a fondo. Sus vinilos Mipolam y Taralay son nuestra referencia polivalente en grandes plantas de oficinas. Amplia gama, acústica seria y mantenimiento sencillo.' },
  { name: 'Tarkett', desc: 'Para espacios abiertos que exigen un verdadero confort acústico, elegimos Tarkett iQ Granit. Envejece bien y sigue siendo nuestra referencia en las plantas de oficinas de gama alta de Niort.' },
  { name: 'Forbo', desc: 'Cuando el proyecto pide algo natural, miramos a Forbo. Su Marmoleum es un auténtico linóleo fabricado con aceite de linaza. Las certificaciones medioambientales son sólidas y las presentamos a menudo en residencias de mayores.' },
  { name: 'EGE Carpets', desc: 'El tejedor danés, nuestra referencia para un despacho de dirección que impone. Sus losetas ya llevan la base acústica integrada, lo que facilita la instalación. Las recomendamos para salas de juntas.' },
  { name: 'Brintons', desc: 'El Axminster británico, la aristocracia de la moqueta. Cuando quiere un salón de recepción en una casa señorial del centro, recurrimos a Brintons. El motivo personalizable lo cambia todo.' },
  { name: 'Object Carpet', desc: 'Los alemanes, para el diseño contemporáneo. Cuando una oficina de empresa quiere salirse de los códigos clásicos y marcar una declaración de intenciones, sus gamas cumplen.' },
  { name: 'Bolon', desc: 'Los suelos suecos de vinilo flocado son diseño que aguanta. Los instalamos en los vestíbulos de sedes sociales y en algunos restaurantes donde el aspecto cuenta tanto como la resistencia.' },
  { name: 'Polyflor', desc: 'El fabricante británico, para el sector sanitario y social. Resistencia al deslizamiento R10 o R11 según la zona y resistencia a los productos de desinfección. Los proponemos sin dudar en residencias de mayores y clínicas.' },
]

const quartiers = [
  { nom: 'Centro histórico', detail: 'El torreón, Notre-Dame, las lonjas protegidas, la place de la Brèche, la rue Victor-Hugo. Casas señoriales, edificios burgueses del siglo XIX, restaurantes y tiendas con carácter.' },
  { nom: 'Saint-Liguaire', detail: 'Un barrio del sur con una mezcla de viviendas unifamiliares y oficinas. Despachos de profesiones liberales, comunidades de propietarios burguesas, proyectos residenciales de gama alta.' },
  { nom: 'Souché', detail: 'Un barrio residencial y comercial del noreste. Casas familiares, instalaciones de colegios privados, consultas médicas.' },
  { nom: 'Sainte-Pezenne', detail: 'Un barrio residencial y verde, con chalés familiares y comunidades de propietarios recientes. Una clientela residencial que valora la calidad de ejecución y los acabados cuidados.' },
  { nom: 'Le Clou Bouchet', detail: 'Un barrio en renovación urbana, con obra nueva y equipamientos colectivos. Suelos de vinilo para administraciones, vestíbulos de comunidades de propietarios y zonas comunes.' },
  { nom: 'Bessines', detail: 'Un municipio limítrofe al sur, con zona de actividad económica y plantas de oficinas en desarrollo. Sedes sociales y plataformas logísticas de oficinas.' },
  { nom: 'Chauray', detail: 'El corazón del polo de oficinas, con sedes sociales y grandes edificios de oficinas. Espacios abiertos, salas de juntas y despachos de dirección de las grandes mutuas de seguros.' },
  { nom: 'Magné', detail: 'La puerta de entrada al Marais Poitevin, con una mezcla residencial y turística. Casas de campo, alojamientos con encanto, restaurantes gastronómicos de la "Venecia Verde".' },
  { nom: 'Coulon (Marais Poitevin)', detail: 'La capital del Marais Poitevin, con hoteles boutique, restaurantes gastronómicos y casas de barqueros renovadas. Proyectos residenciales con carácter y alojamientos turísticos de gama alta.' },
  { nom: 'Frontenay-Rohan-Rohan', detail: 'Un municipio histórico al suroeste de Niort, con castillo y casas antiguas. Proyectos residenciales patrimoniales y restauración de edificios antiguos.' },
  { nom: 'Aiffres', detail: 'Un municipio residencial al sur, con urbanizaciones recientes y casas familiares. Una clientela de propietarios que valora los acabados de calidad y el asesoramiento personalizado.' },
  { nom: 'Vouillé', detail: 'Un municipio limítrofe al sur, con una mezcla de viviendas unifamiliares y zona de actividad económica. Despachos de profesiones liberales y pequeñas unidades de oficinas.' },
]

const process = [
  { step: 'Primer contacto', desc: 'Una llamada telefónica o un correo. Recopilamos los puntos clave: tipo de proyecto (oficina, casa señorial, residencia de mayores, restaurante), superficie estimada, calendario deseado y posibles condicionantes de establecimiento abierto al público. En licitaciones de oficinas, recogemos el pliego completo.' },
  { step: 'Visita a Niort', desc: 'Una visita organizada en 1 o 2 semanas desde Villedoux. Medición con láser, revisión de las restricciones de acceso y fotos para coordinar colores y uniones. En plantas de oficinas, identificación de las posibles fases de trabajo fuera del horario laboral.' },
  { step: 'Elección del material', desc: 'El showroom de Villedoux o muestras enviadas directamente a Niort, a la sede social del cliente o al arquitecto. Validación final con la luz del lugar de instalación. Para las mutuas de seguros, envío de las fichas técnicas, los informes de reacción al fuego y las certificaciones medioambientales exigidas.' },
  { step: 'Fabricación en el taller', desc: 'De 3 a 10 semanas según la gama: moqueta Axminster a medida, Wilton, losetas, vinilo cortado. Premontaje en seco en el taller para validar el ajuste antes del transporte. Esta preparación previa es la que nos permite hacer una instalación final rápida y cuidada en Niort.' },
  { step: 'Instalación en Niort', desc: 'Un equipo desplazado a la obra, con alojamiento incluido en el presupuesto y un calendario ajustado a su disponibilidad o a la ventana de obra. Coordinación con los servicios generales o con el conserje. Planificación fuera del horario laboral posible para sedes sociales en funcionamiento. Limpieza completa en la entrega.' },
]

const faq = [
  { q: '¿Vienen de verdad a Niort desde La Rochelle?', a: 'Sí, y a menudo. Niort está a 80 km, a una hora por la N11. Está muy cerca. Pasamos varias veces al mes y conocemos las obras de la zona. Organizamos la visita de medición al inicio del proyecto y volvemos a instalar al final. El alojamiento y el desplazamiento están incluidos en el presupuesto. En obras grandes, el equipo se queda en la obra hasta la entrega.' },
  { q: '¿Trabajan en las grandes sedes sociales del polo empresarial?', a: 'Sí, es incluso uno de nuestros terrenos naturales. Los servicios generales tienen exigencias precisas: licitación formal, fichas técnicas completas, informes de reacción al fuego y un calendario firme con trabajos fuera del horario laboral. Estamos preparados: un expediente de licitación al día, documentación completa de los materiales y un proceso de obra bien engrasado. Dialogamos directamente con su responsable de instalaciones.' },
  { q: '¿Trabajan en las casas señoriales del centro?', a: 'Por supuesto. El centro de Niort, alrededor del torreón y de La Brèche, concentra magníficos edificios del siglo XIX. Trabajamos allí con su arquitecto de interiores y, siempre que es posible, instalamos de forma reversible. Si dentro de diez años quiere rehacerlo todo, el parqué de debajo estará intacto. Las alfombras a medida y las moquetas de lana tejida encuentran allí su marco natural.' },
  { q: '¿Cómo funciona en una residencia de mayores en cuanto a la normativa de establecimientos abiertos al público?', a: 'Las residencias de mayores se rigen por la normativa de establecimientos abiertos al público de tipo J. Hacen falta productos Bfl-s1 o Cfl-s1 según la zona, que admitan la limpieza biológica, y fichas de mantenimiento claras. Elegimos los productos adecuados por usted. Aportamos todos los informes de reacción al fuego y los certificados para la comisión de seguridad. Y planificamos zona por zona para no alterar la vida de los residentes.' },
  { q: '¿Trabajan en los restaurantes del centro?', a: 'Sí. La acústica marca la diferencia en la mesa, y una moqueta de lana sobre una base de fieltro reduce a la mitad la reverberación. Sus clientes pasan mejor la velada. Instalamos de noche o el día de cierre, y no pierde ningún servicio. Protegemos las cocinas, lo limpiamos todo y por la mañana la sala está lista.' },
  { q: '¿Cuánto dura un suelo de vinilo en una planta de oficinas?', a: 'Cuente con quince a veinte años con facilidad, a veces más. Un vinilo homogéneo envejece bien porque no tiene capa de desgaste que se pueda atravesar, es el mismo material de arriba abajo. En zonas de mucho tránsito (recepción, pasillos), elegimos una clasificación de clase 34, que tolera mejor las ruedas de sillas. Una limpieza profesional al año basta para mantener el aspecto del primer día.' },
  { q: '¿Pueden instalar fuera del horario laboral en una sede social en funcionamiento?', a: 'Sí, es incluso lo habitual. Organizamos los trabajos por la tarde o el fin de semana según las fases acordadas con sus servicios generales. Premontamos todo lo posible en el taller de Villedoux, de modo que la instalación en obra va rápida. Protegemos sus puestos de trabajo y el mobiliario informático antes de empezar. El lunes por la mañana, sus equipos retoman la actividad con normalidad, con el suelo instalado y limpio.' },
]

export default function RevetementSolNiortPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/revetement-sol-niort#service',
        name: 'Revestimiento de suelo en Niort',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Niort' },
          { '@type': 'AdministrativeArea', name: 'Deux-Sèvres' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Instalación de moqueta, vinilo y alfombras a medida en Niort y en Deux-Sèvres',
        description: 'Diseño, fabricación en taller e instalación de moqueta, vinilo y alfombras a medida para sedes sociales de mutuas de seguros, casas señoriales, restaurantes, residencias de mayores y establecimientos de oficinas en Niort.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Revestimiento de suelo en Niort', item: 'https://cbsols.fr/es/revetement-sol-niort' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="niort" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revestimiento de suelo en Niort</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revestimiento de suelo en Niort,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>la seriedad de Deux-Sèvres.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Instalación de moqueta, vinilo y alfombras a medida en Niort. Grandes sedes sociales y plantas de oficinas, casas señoriales del centro histórico, restaurantes junto a las lonjas, residencias de mayores y residencias medicalizadas. Un taller situado cerca de La Rochelle y desplazamientos a Niort organizados cada mes.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=niort" variant="primary" size="md">Solicitar un presupuesto</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nos desplazamos a su casa</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Niort es un terreno serio. Los servicios generales de las mutuas de seguros no bromean con las fichas técnicas ni con los plazos. CB Sols cuenta desde hace más de 28 años con la documentación, el método y el equipo para cumplir estas exigencias.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project type */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Para qué tipo de proyecto</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cuatro entornos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>un mismo rigor de ejecución.</em>
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

      {/* CTA inline #1 */}
      <section style={{ padding: '3rem 2rem' }}>
        <div style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un proyecto en Niort?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Una visita a obra, un presupuesto detallado.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Contacto directo con los servicios generales, con el responsable de instalaciones o con usted. Una visita organizada en 1 o 2 semanas y un presupuesto detallado en una semana.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/es/contact?source=niort-cta1" variant="primary" size="md">Solicitar un presupuesto</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Niort specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Particularidades de Niort</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Seis exigencias <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propias de los proyectos de Niort.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Trabajar en Niort no es repetir una obra estándar. Estos son los seis puntos en los que estructuramos nuestro método desde la primera visita, para cumplir las exigencias de las oficinas y respetar el calendario.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {exigences.map((e, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>{e.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materiales y gamas para Niort</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Las familias de productos <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que llevamos a Deux-Sèvres.</em>
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

      {/* Mid quote */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &ldquo;Una planta de oficinas en Niort es justo lo que CB Sols sabe hacer. La documentación, la planificación por fases, el respeto de los horarios de funcionamiento y un acabado impecable al amanecer.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, propietario de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?source=niort-citation" variant="primary" size="md">Pedir una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Una visita a obra en Niort</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Fabricantes asociados</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Ocho casas de referencia <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>para sus proyectos en Niort.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {marques.map((m, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{m.name}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Districts */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Barrios y municipios donde trabajamos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Niort y su área metropolitana, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>hasta el Marais Poitevin.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Nuestro equipo se desplaza por toda el área metropolitana de Niort y por los municipios limítrofes, donde se concentran los proyectos residenciales patrimoniales, de oficinas y del sector sanitario y social.
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

      {/* CTA inline #2 */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Tiene un proyecto en mente?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Una llamada para despejar el terreno.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Veinte minutos por teléfono bastan para aclarar las gamas posibles, un calendario realista y un orden de magnitud del presupuesto para su obra en Niort.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?source=niort-cta2" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro método</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco pasos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux a Niort.</em>
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
            Revestimiento de suelo en Niort, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas concretas.</em>
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
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            ¿Otra pregunta? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>Llame a Valentin.</em>
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Directamente con el propietario. Sin línea de atención ni centralita. Un consejo claro, un orden de magnitud honesto y un siguiente paso solo si el proyecto tiene sentido para usted y para nosotros.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="Ver también"
        sectionSubtitle="Nuestra experiencia abarca otros mundos que pueden interesarle. Tómese su tiempo para explorar, hágannos sus preguntas y les responderemos."
        items={[
          { href: '/es/revetement-sol-bordeaux', title: 'Revestimiento de suelo en Burdeos', teaser: 'Casas señoriales, lofts en échoppes, casas de piedra. Suelos que dialogan con la arquitectura.', icon: MapPin },
          { href: '/es/revetement-sol-saint-emilion', title: 'Revestimiento de suelo en Saint-Émilion', teaser: 'Castillos, bodegas y casas señoriales. Suelos elegidos por su carácter y por la pátina del tiempo.', icon: Castle },
          { href: '/es/sol-pvc-cabinet-medical', title: 'Suelo de vinilo para consultas médicas', teaser: 'Un suelo que tranquiliza a sus pacientes desde la sala de espera y facilita su limpieza diaria.', icon: Stethoscope },
          { href: '/es/sol-pvc-pharmacie', title: 'Suelo de vinilo para farmacias', teaser: 'Higiene diaria, cumplimiento de la normativa sanitaria, instalación nocturna. Veinte años de resistencia en una farmacia que nunca cierra.', icon: Pill },
          { href: '/es/architectes', title: 'Para arquitectos', teaser: 'Documentación de materiales, muestras anotadas, presupuestos detallados. Nuestro papel es servir a su visión.', icon: Building2 },
          { href: '/es/particuliers', title: 'Para particulares', teaser: 'Moqueta, suelo de vinilo, alfombras a medida: nuestra experiencia al servicio de su hogar.', icon: Home },
          { href: '/es/showroom', title: 'Showroom de Villedoux', teaser: 'Venga a ver y tocar los materiales. Con cita previa, en Villedoux, cerca de La Rochelle.', icon: Store },
          { href: '/es/contact', title: 'Contacto', teaser: 'Una pregunta, un proyecto, un presupuesto en 48 horas. El propietario le responde directamente.', icon: Mail },
        ]}
      />

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Su proyecto en Niort <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>en buenas manos.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita a obra en Niort. Un presupuesto detallado, acabados de primer nivel y respeto por las exigencias de las oficinas y del patrimonio. CB Sols, más de 28 años de experiencia al servicio de proyectos excepcionales en Deux-Sèvres.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=niort-final" variant="primary" size="md">Solicitar un presupuesto</Button>
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
