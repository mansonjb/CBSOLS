import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Castle, Home, Mail, MapPin, Store, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Revestimiento de suelo Bordeaux | Moqueta, vinilo, alfombras a medida',
  description: 'Colocación de moqueta, vinilo y alfombras a medida en Bordeaux. Casas señoriales del Triángulo de Oro, casas échoppe bordelesas, restaurantes gastronómicos. CB Sols lleva más de 28 años en el oficio, desplazamiento desde Villedoux.',
  alternates: {
    canonical: 'https://cbsols.fr/es/revetement-sol-bordeaux',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-bordeaux', en: 'https://cbsols.fr/en/revetement-sol-bordeaux', es: 'https://cbsols.fr/es/revetement-sol-bordeaux', },
  },
  keywords: ['revestimiento de suelo Bordeaux', 'moqueta Bordeaux', 'suelo de vinilo Bordeaux', 'colocación de alfombras Bordeaux', 'artesano del suelo Bordeaux'],
  openGraph: {
    title: 'Revestimiento de suelo en Bordeaux, la elegancia bordelesa',
    description: 'Moqueta, vinilo y alfombras a medida en Bordeaux. Casas señoriales, casas échoppe, restaurantes gastronómicos. CB Sols, más de 28 años de experiencia.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-bordeaux.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Casas señoriales del Triángulo de Oro', desc: 'Tiene una casa señorial en Les Chartrons o en el cours de l\'Intendance. Colocamos una moqueta de lana o una alfombra cosida a mano en sus salones de recepción. Empalmamos con limpieza sobre el parqué de roble original. Su decorador mantiene el control de principio a fin.' },
  { title: 'Casas échoppe bordelesas renovadas', desc: 'Renueva una casa échoppe de una sola planta en piedra de Burdeos. El parqué es frágil, los arquitectos del patrimonio lo miran todo. Proponemos soluciones reversibles, sin clavo ni cola agresiva. Conserva el valor patrimonial de la propiedad.' },
  { title: 'Restaurantes gastronómicos y con estrella Michelin', desc: 'Dirige una mesa con estrella en el centro. Venimos a colocar de noche, no pierde ningún servicio. Una moqueta densa antimanchas, una acústica cuidada para la conversación en la mesa.' },
  { title: 'Despachos de empresa y de profesiones liberales', desc: 'Recibe a sus clientes en Mériadeck o Pey-Berland. Un suelo cuidado marca el tono desde la entrada. Vinilo acústico en los espacios diáfanos, moqueta de lana para los despachos de dirección.' },
]

const exigences = [
  { title: 'Respetamos el parqué antiguo', desc: 'Las casas señoriales del Triángulo de Oro han conservado su parqué original. Colocamos sin clavar, sin encolados agresivos. Si quiere rehacerlo todo dentro de diez años, la madera de debajo estará intacta. Eso es lo que significa respetar una casa noble.' },
  { title: 'El centro peatonal, sabemos cómo', desc: 'Las calles del viejo Burdeos son estrechas, el tranvía circula por todas partes, el ayuntamiento quiere una franja horaria precisa. Gestionamos los permisos de aparcamiento y acarreamos los rollos a mano en los últimos metros. Usted no tiene que gestionar nada.' },
  { title: 'Doscientos kilómetros, una distancia dominada', desc: 'Burdeos está a dos horas de nuestro taller por la A10. Bajamos varias veces al mes, conocemos las obras locales. Usted llama, venimos a medir en la semana. Sin recargo de desplazamiento oculto.' },
  { title: 'Los Edificios de Francia, los conocemos', desc: 'En las fachadas protegidas, algunas obras pasan por el arquitecto del patrimonio. Documentamos la intervención, aportamos las fichas técnicas, dialogamos con el arquitecto. El expediente avanza con fluidez y usted no tiene que sumergirse en el papeleo.' },
  { title: 'Más calma en los grandes volúmenes', desc: 'Los salones de recepción tienen cinco metros de techo, resuenan. Una moqueta de lana sobre base de fieltro corta la mitad del eco. La estancia recupera su suavidad, las conversaciones se oyen mejor. Y conservamos el carácter del lugar.' },
  { title: 'Un único interlocutor, de principio a fin', desc: 'En una obra de prestigio, ya tiene al arquitecto, al ebanista, al pintor decorativo. Nosotros somos un único nombre que añadir. Presupuesto, calendario, entrega, factura: todo pasa por la misma persona. Gana tiempo.' },
]

const materiaux = [
  { name: 'Moqueta de lana virgen tejida, Wilton y Axminster', desc: 'Nuestro material de referencia para los salones de recepción. La lana adquiere pátina, se densifica con el tiempo. Al tacto es firme. A la vista envejece con nobleza. La colocamos a menudo lisa o con un motivo geométrico discreto para respetar la carpintería. Prevea de quince a veinte años de tersura con facilidad.' },
  { name: 'Alfombras Hereke y Aubusson reconstruidas a medida', desc: 'Cuando quiere vestir un parqué antiguo sin ocultarlo, la alfombra a medida cumple. Reproducimos un motivo histórico en lana virgen, el ribete se cose a mano, las dimensiones se ajustan al centímetro a su estancia. Prevea de diez a dieciséis semanas de fabricación. El resultado habla por sí solo al llegar.' },
  { name: 'Moquetas EGE Highline y Hospitality', desc: 'La elección adecuada para un restaurante gastronómico o un hotel del centro. La fibra está ignifugada en su núcleo, por lo que cumple para el uso público. La gama de colores es amplia, podemos coordinar con su decoración existente. Y soporta un servicio intenso sin moverse entre dos reemplazos.' },
  { name: 'Suelos de vinilo Gerflor Mipolam y Tarkett iQ Granit', desc: 'Para los despachos de empresa y los espacios de oficina, es nuestro estándar. Un aspecto liso mate elegante, un verdadero rendimiento acústico, mantenimiento hecho en cinco minutos. Soldamos las láminas en caliente, no tiene ninguna junta visible. Quince años tranquilos por delante.' },
  { name: 'Vinilo efecto madera para casas échoppe renovadas', desc: 'A veces el parqué original ya no es recuperable. En lugar de una retirada invasiva, proponemos un vinilo efecto madera muy fino. El resultado visual sigue siendo convincente. La colocación es reversible y compatible con una reventa patrimonial. Incluso podemos colocarlo sobre suelo radiante.' },
  { name: 'Perfiles Romus de latón cepillado y bronce patinado', desc: 'Los umbrales y los peldaños de escalera, los cuidamos. Coordinamos el perfil con su herrería original, sus tiradores de bronce, su carpintería encerada. En obras realmente exigentes, podemos encargarlos a medida. Es este tipo de detalle el que marca la diferencia en la entrega.' },
]

const marques = [
  { name: 'EGE Carpets', desc: 'El tejedor danés es nuestra referencia para los salones de recepción de casas señoriales donde la moqueta debe marcar el tono. Lo encontramos a menudo en grandes casas y mesas con estrella; las gamas Highline y Hospitality soportan el uso intensivo a la perfección.' },
  { name: 'Brintons', desc: 'El Axminster británico es la aristocracia de la moqueta. Podemos tejer hasta treinta y seis colores en un motivo. Cuando quiere un salón de recepción que imponga, Brintons es la casa a la que recurrir.' },
  { name: 'Tarkett', desc: 'En un bufete de abogados o un espacio de oficina diáfano, optamos a menudo por Tarkett iQ Granit. La acústica es seria, envejece bien, y el acabado mate siempre causa su efecto.' },
  { name: 'Gerflor', desc: 'El fabricante francés de Lyon que conocemos a fondo. La gama de colores es amplia, sus imitaciones de madera son creíbles, y todo se coloca sobre suelo radiante. Es nuestra referencia versátil de vinilo.' },
  { name: 'Forbo', desc: 'Cuando el proyecto pide algo natural, miramos hacia Forbo. Su Marmoleum es un auténtico linóleo, elaborado con aceite de linaza. Es sano, es sólido, y encaja a la perfección con las consultas médicas.' },
  { name: 'Tisca Tiara', desc: 'El fabricante suizo, lo más alto de gama. Lo sacamos en proyectos residenciales excepcionales, o para vestir una suite de gran lujo. Cuando el presupuesto acompaña, el resultado no tiene rival.' },
  { name: 'Hereke', desc: 'Las alfombras turcas tejidas a mano, en seda o fina lana virgen. Las colocamos en las bibliotecas de las casas señoriales bordelesas, o en un salón donde quiere algo que transmitir.' },
  { name: 'Object Carpet', desc: 'Los alemanes, para el diseño contemporáneo. Cuando acondiciona una oficina de empresa de alta gama y quiere salirse de los códigos clásicos, sus gamas son perfectas.' },
]

const quartiers = [
  { nom: 'Triángulo de Oro', detail: 'El corazón del lujo bordelés entre cours Clemenceau, cours de l\'Intendance y allées de Tourny. Casas señoriales, boutiques de lujo, sedes sociales.' },
  { nom: 'Les Chartrons', detail: 'El barrio histórico del comercio del vino, casas échoppe y casas señoriales de comerciantes. Patrimonio del siglo XVIII que preservar, una escena activa de arquitectura de interiores.' },
  { nom: 'Saint-Pierre', detail: 'El viejo Burdeos, catalogado por la UNESCO, calles peatonales, edificios ceremoniales. Restaurantes gastronómicos, boutiques de alta gama, residencias con carácter.' },
  { nom: 'Saint-Michel', detail: 'Un barrio en plena transformación, antiguos almacenes convertidos en lofts, cafés de diseño. Proyectos residenciales y de oficinas creativas.' },
  { nom: 'Les Capucins', detail: 'El barrio del mercado central y de la gastronomía popular. Restaurantes, bistrós de chefs, casas échoppe renovadas en viviendas de alta gama.' },
  { nom: 'Quinconces', detail: 'Una vasta explanada y los edificios burgueses del siglo XIX de alrededor. Consultas de profesiones liberales, sedes de empresas, apartamentos ceremoniales.' },
  { nom: 'Pey-Berland', detail: 'El barrio de la catedral y del ayuntamiento. Edificios de oficinas de alta gama, bufetes de abogados, profesiones liberales.' },
  { nom: 'Caudéran', detail: 'Un barrio residencial burgués, villas familiares, parques privados. Una clientela residencial selecta apegada a la calidad de ejecución.' },
  { nom: 'Bordeaux Lac', detail: 'Un polo moderno de oficinas, sedes sociales, hoteles de negocios. Suelos de vinilo acústico para los espacios diáfanos y losetas de moqueta para los despachos de dirección.' },
  { nom: 'Bègles', detail: 'Un municipio limítrofe al sur, una mezcla de residencial antiguo y obra nueva. Casas échoppe renovadas y viviendas familiares en modernización.' },
  { nom: 'Talence', detail: 'Residencias universitarias y de estudiantes, pero también barrios residenciales de alta gama. Viviendas familiares, copropiedades burguesas, consultas médicas.' },
  { nom: 'Pessac', detail: 'Urbanizaciones de viviendas unifamiliares, facultades y clínicas privadas. Proyectos residenciales de alta gama y consultas de profesiones liberales en plena expansión.' },
]

const process = [
  { step: 'Primer contacto', desc: 'Una llamada o un correo. Recopilación de los puntos clave: tipo de proyecto, superficie estimada, calendario deseado, posibles condicionantes patrimoniales. Si el proyecto lo dirige un arquitecto de interiores, contactamos directamente con su despacho para organizar los siguientes pasos.' },
  { step: 'Visita a Bordeaux', desc: 'Una visita organizada en un plazo de 1 a 2 semanas. Medición con láser o con papel de calco según la configuración, un estudio de los condicionantes de acceso del edificio, fotos para coordinar los colores con la carpintería y el parqué existentes. Gastos incluidos en el presupuesto si se confirma la obra.' },
  { step: 'Elección del material', desc: 'El showroom de Villedoux o muestras enviadas directamente a Bordeaux, a su dirección o a la del arquitecto. Validación final bajo la luz del lugar, nunca en un showroom: la luz atlántica de Burdeos transforma los colores, sobre todo las lanas de brillo sedoso.' },
  { step: 'Fabricación en el taller de La Rochelle', desc: '3 a 10 semanas según la gama: Axminster a medida, Wilton, seda, lana virgen, vinilo cortado. Premontaje en seco en el taller para validar el ajuste antes del transporte. Esta preparación previa es lo que nos permite mantener una colocación final de 2 a 5 días en Bordeaux.' },
  { step: 'Colocación en Bordeaux', desc: 'Un equipo movilizado in situ, alojamiento incluido en el presupuesto, un calendario fijado según su disponibilidad o la ventana de obra. Coordinación con el conserje o el administrador de la finca. Una limpieza completa en la entrega, acabados revisados con usted o con el arquitecto.' },
]

const faq = [
  { q: '¿De verdad vienen a Bordeaux desde La Rochelle?', a: 'Sí, y a menudo. Burdeos está a dos horas por la A10. Bajamos varias veces al mes. Organizamos la visita de medición al inicio del proyecto, y luego volvemos a colocar al final. El alojamiento y el desplazamiento están incluidos en el presupuesto, sin sorpresa. En las grandes obras, el equipo se queda in situ hasta el final.' },
  { q: '¿Trabajan en las casas señoriales del Triángulo de Oro?', a: 'Es incluso uno de nuestros terrenos preferidos. Las casas señoriales de los siglos XVIII y XIX han conservado su parqué, su carpintería, su alma. Trabajamos allí con su arquitecto de interiores, y siempre que es posible colocamos de forma reversible. Si quiere rehacerlo todo dentro de diez años, el parqué de debajo estará intacto. Eso es lo que llamamos respetar una casa noble.' },
  { q: '¿Cómo funciona con los Edificios de Francia?', a: 'En un suelo interior, al arquitecto del patrimonio casi nunca se le consulta directamente. Pero documentamos todo de todos modos, por costumbre: fichas de material, informes contra incendios, fotos de antes y después. Dispone de un expediente limpio si vende la propiedad más adelante, o si el arquitecto del patrimonio vuelve por otro asunto. Cuando el proyecto afecta a algo visible desde la calle, nos alineamos con su arquitecto.' },
  { q: '¿Cuánto tarda una alfombra a medida?', a: 'Prevea de diez a dieciséis semanas para una Aubusson o Savonnerie reconstruida, según la complejidad del motivo. De ocho a catorce semanas para una Hereke de lana virgen con ribete cosido a mano. Para un Axminster a medida, de ocho a doce semanas. Añada la fabricación en taller y la colocación en Bordeaux. Un salón de recepción completo se planifica a lo largo de cuatro a seis meses, a veces más si el motivo necesita varias pruebas.' },
  { q: '¿Trabajan en los restaurantes gastronómicos de Bordeaux?', a: 'Sí, es un terreno donde se nos espera. La acústica marca la diferencia en la mesa, y una moqueta de lana sobre base de fieltro corta la mitad de la reverberación. Colocamos de noche o el día de cierre, no pierde ningún servicio. Protegemos las cocinas, lo limpiamos todo en la entrega, y por la mañana la sala está lista.' },
  { q: '¿Cuánto dura una moqueta de lana?', a: 'Prevea de quince a veinte años con facilidad en una casa señorial de uso privado. La lana envejece bien: adquiere pátina, se densifica en lugar de aplastarse. En vestíbulos y escaleras, elegimos más bien una lana tejida apretada con un motivo discreto, que tolera mejor las marcas del tránsito. Una limpieza profesional una vez al año basta para mantener el aspecto del primer día.' },
  { q: '¿Trabajan con arquitectos de interiores de Bordeaux?', a: 'Con regularidad, sí. La escena arquitectónica está activa alrededor de los Bassins à flot, Darwin, Les Chartrons. Trabajamos como subcontratistas de su pliego de condiciones; el arquitecto sigue siendo el interlocutor principal para la elección de los materiales. Enviamos las muestras a su despacho para validación bajo la luz del proyecto. Y aportamos todos los documentos técnicos para su expediente de obra.' },
]

export default function RevetementSolBordeauxPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/revetement-sol-bordeaux#service',
        name: 'Revestimiento de suelo en Bordeaux',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Bordeaux' },
          { '@type': 'AdministrativeArea', name: 'Gironde' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Colocación de moqueta, vinilo y alfombras a medida en Bordeaux y la Gironda',
        description: 'Diseño, fabricación en taller y colocación de moqueta, vinilo y alfombras a medida para casas señoriales, restaurantes gastronómicos, despachos de empresa y residencias con carácter en Bordeaux.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Revestimiento de suelo en Bordeaux', item: 'https://cbsols.fr/es/revetement-sol-bordeaux' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="bordeaux" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revestimiento de suelo Bordeaux</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revestimiento de suelo en Bordeaux,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>la elegancia bordelesa.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Colocación de moqueta, vinilo y alfombras a medida en Bordeaux. Casas señoriales del Triángulo de Oro, casas échoppe renovadas, restaurantes gastronómicos, despachos de empresa. Un taller con sede en La Rochelle, desplazamientos a Bordeaux organizados con regularidad.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=bordeaux" variant="primary" size="md">Solicitar un presupuesto</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nos desplazamos hasta usted</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Burdeos es una ciudad patrimonial a la que se llega desde La Rochelle en dos horas. Respetar el parqué de una antigua échoppe o vestir un salón de recepción de Les Chartrons es exactamente el oficio que CB Sols ejerce desde hace más de 28 años.&rdquo;
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
            Cuatro escenarios, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>una misma exigencia patrimonial.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un proyecto en Bordeaux?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Una visita de obra, un presupuesto detallado.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Contacto directo con su arquitecto de interiores, su decorador o con usted. Una visita organizada en un plazo de 1 a 2 semanas, un presupuesto detallado en una semana.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/es/contact?source=bordeaux-cta1" variant="primary" size="md">Solicitar un presupuesto</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Bordeaux specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Particularidades de Bordeaux</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Seis exigencias <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propias de los proyectos de Bordeaux.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Trabajar en Bordeaux no es reproducir una obra estándar. Aquí están los seis puntos sobre los que estructuramos nuestro método desde la primera visita, para respetar el patrimonio y cumplir el calendario.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materiales y gamas para Bordeaux</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Las familias de productos <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que llevamos a la Gironda.</em>
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
              &ldquo;El parqué de una échoppe bordelesa del siglo XIX no se trata como un suelo nuevo. Colocamos una moqueta que se levanta con limpieza, que no marca la madera, que respeta lo que la casa ya ha vivido.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, propietario de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?source=bordeaux-citation" variant="primary" size="md">Pedir una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Una visita a domicilio en Bordeaux</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Fabricantes asociados</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Ocho casas de referencia <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>para sus proyectos en Bordeaux.</em>
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
            Bordeaux y su metrópoli, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>hasta Pessac y Talence.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Nuestro equipo se desplaza por toda Bordeaux Métropole, así como por los municipios limítrofes de la primera corona, donde se concentran los proyectos residenciales y de oficinas de alta gama.
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
            Veinte minutos por teléfono bastan para aclarar las gamas posibles, un calendario realista y un orden de magnitud de presupuesto para su obra en Bordeaux.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?source=bordeaux-cta2" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro método</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco etapas, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux a Bordeaux.</em>
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
            Revestimiento de suelo en Bordeaux, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas concretas.</em>
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
            ¿Una pregunta más? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>Llame a Valentin.</em>
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Directamente con el propietario. Sin centralita, sin línea de atención. Un consejo claro, un orden de magnitud honesto, un siguiente paso solo si el proyecto tiene sentido para usted como para nosotros.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="Ver también"
        sectionSubtitle="Nuestra experiencia abarca otros mundos que pueden interesarle. Tómese su tiempo para explorar, haga sus preguntas, que las responderemos."
        items={[
          { href: '/es/revetement-sol-arcachon', title: 'Revestimiento de suelo Arcachon', teaser: 'Casas de la bahía y villas de las dunas. Suelos que soportan la arena, la luz y la vida diaria.', icon: MapPin },
          { href: '/es/revetement-sol-cap-ferret', title: 'Revestimiento de suelo Cap Ferret', teaser: 'Cabañas ostrícolas, villas con los pies en la arena. La discreción de un saber hacer que apenas se nota.', icon: Waves },
          { href: '/es/revetement-sol-saint-emilion', title: 'Revestimiento de suelo Saint-Émilion', teaser: 'Castillos, bodegas y casas señoriales. Suelos elegidos por su carácter y la pátina del tiempo.', icon: Castle },
          { href: '/es/revetement-sol-biarritz', title: 'Revestimiento de suelo Biarritz', teaser: 'Villas de la Costa Vasca. Suelos que resisten la sal, la arena y la luz del océano.', icon: MapPin },
          { href: '/es/architectes', title: 'Para arquitectos', teaser: 'Documentación de materiales, muestras anotadas, presupuestos detallados. Nuestro papel es servir a su visión.', icon: Building2 },
          { href: '/es/particuliers', title: 'Para particulares', teaser: 'Moqueta, suelo de vinilo, alfombras a medida: nuestro saber hacer al servicio de su hogar.', icon: Home },
          { href: '/es/showroom', title: 'Showroom de Villedoux', teaser: 'Venga a ver y tocar los materiales. Con cita previa, en Villedoux cerca de La Rochelle.', icon: Store },
          { href: '/es/contact', title: 'Contáctenos', teaser: 'Una pregunta, un proyecto, un presupuesto en 48 horas. El propietario le responde directamente.', icon: Mail },
        ]}
      />

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Su proyecto en Bordeaux <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>en buenas manos.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita de obra en Bordeaux. Un presupuesto detallado, acabados premium, respeto por el patrimonio. Más de 28 años de experiencia al servicio de proyectos excepcionales en la Gironda.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=bordeaux-final" variant="primary" size="md">Solicitar un presupuesto</Button>
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
