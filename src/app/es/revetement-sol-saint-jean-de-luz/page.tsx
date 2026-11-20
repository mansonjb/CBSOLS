import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Home, Mail, MapPin, Store, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Revestimiento de suelo en Saint-Jean-de-Luz | Villas del País Vasco',
  description: 'Instalación de moqueta, vinilo y alfombras a medida en Saint-Jean-de-Luz. Villas familiares frente al océano, casas vascas de entramado rojo, hoteles boutique de la bahía, restaurantes gastronómicos. CB Sols, más de 28 años de experiencia, desplazamiento organizado desde Villedoux.',
  alternates: {
    canonical: 'https://cbsols.fr/es/revetement-sol-saint-jean-de-luz',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-saint-jean-de-luz', en: 'https://cbsols.fr/en/revetement-sol-saint-jean-de-luz', es: 'https://cbsols.fr/es/revetement-sol-saint-jean-de-luz', },
  },
  keywords: ['revestimiento de suelo Saint-Jean-de-Luz', 'moqueta País Vasco', 'alfombra a medida villa vasca', 'artesano de suelos Saint-Jean-de-Luz', 'suelo de vinilo Costa Vasca'],
  openGraph: {
    title: 'Revestimiento de suelo en Saint-Jean-de-Luz, el alma vasca',
    description: 'Moqueta, vinilo y alfombras a medida en Saint-Jean-de-Luz. Villas familiares, casas vascas, hoteles boutique. CB Sols, más de 28 años de experiencia.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-saint-jean-de-luz.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Villas familiares frente al océano', desc: 'Tiene una villa en Sainte-Barbe o en Erromardie, con una vista amplia. Instalamos una moqueta de lana en el dormitorio principal y una alfombra a medida en el salón. Enlazamos de forma limpia con el parqué antiguo o con la terracota roja.' },
  { title: 'Casas vascas de entramado rojo', desc: 'Vive en una etxe tradicional, con parqué original de castaño. Las estancias son íntimas y las escaleras estrechas. Instalamos respetando el edificio, sin desfigurar nada.' },
  { title: 'Hoteles boutique de la bahía', desc: 'Dirige un Relais & Châteaux o una casa de huéspedes. Venimos en temporada baja y usted conserva sus noches de habitación. Moqueta densa antimanchas y acústica cuidada para las habitaciones que dan a la calle.' },
  { title: 'Restaurantes gastronómicos de la bahía', desc: 'Tiene una mesa con vistas al puerto o al paseo marítimo. Venimos de noche o el día de cierre. Moqueta de lana sobre una base de fieltro para la acústica, con acabados dignos de una estrella.' },
]

const exigences = [
  { title: 'Respetamos los colores del País Vasco', desc: 'Rojo vasco, blanco de cal, entramado de madera, terracota: el País Vasco tiene una identidad fuerte. Nuestros colores conviven con ella sin traicionarla. El rojo vuelve en una alfombra de gala, y las lanas naturales dialogan con la cal. La sensación sigue siendo coherente con el lugar.' },
  { title: 'La espuma del mar, la tenemos en cuenta', desc: 'El clima atlántico viene cargado de humedad y de sal. Seleccionamos lanas tratadas, vinilos flexibles y ribetes cosidos a mano que resisten con el tiempo. Usted conserva un suelo estable y un color que no se apaga. Aquí no hay materiales frágiles, conocemos el terreno.' },
  { title: 'La vista al océano sigue siendo la protagonista', desc: 'Una villa de Saint-Jean se construye alrededor del panorama. El suelo debe acompañar sin competir: tonos arena, beiges cálidos, blancos rotos. Cuidamos de manera especial los umbrales de las terrazas y los encuentros con los ventanales. Con la luz de la tarde, estos detalles se notan.' },
  { title: 'Cuatro horas de carretera, bien organizadas', desc: 'Saint-Jean está a 370 km de nuestro taller. Cuando bajamos, bajamos con todo el equipo, dormimos en el lugar y organizamos las jornadas juntos. Todo se premonta en Villedoux antes de la salida. En obra, instalamos rápido, sin idas y venidas inútiles.' },
  { title: 'Trabajamos en equipo con los demás oficios', desc: 'En una villa vasca suele haber un carpintero, un albañil de cal y un herrero. Nos integramos en el calendario del arquitecto y entramos en penúltimo lugar para no dañar la moqueta nueva. Usted no arbitra nada, lo acordamos entre nosotros.' },
  { title: 'Nunca en verano, planificado desde el invierno', desc: 'Julio y agosto son temporada alta. Venimos entre octubre y mayo. Para entregar en julio, tomamos las medidas en febrero o marzo: la fabricación a medida necesita tiempo. Usted recupera la villa lista para las vacaciones, sin haber visto pasar un solo rollo.' },
]

const materiaux = [
  { name: 'Moqueta tejida EGE de lana virgen', desc: 'Nuestro material favorito para los dormitorios y salones de las villas de Saint-Jean. La lana adquiere una pátina con el clima atlántico, no se aplasta y envejece con nobleza. Elegimos con usted un tono arena, terracota o crudo, dentro de la paleta vasca. Tiene por delante entre quince y veinte años de tranquilidad.' },
  { name: 'Alfombras a medida Brintons de lana y seda', desc: 'Para un salón con vistas al océano o un hotel boutique de la bahía, la alfombra a medida marca toda la diferencia. Ribete cosido a mano, dimensiones al centímetro y un motivo acorde con la decoración vasca o contemporánea. Cuente con diez a dieciséis semanas de fabricación. Es lo que corona una vista ya excepcional.' },
  { name: 'Suelos marinos de vinilo flocado Bolon', desc: 'Para las entradas y las zonas de paso de las villas frente al mar, Bolon es nuestra referencia. La espuma, la humedad, la arena que se trae de la playa: lo aguanta todo. El aspecto flocado contemporáneo combina con las casas de arquitecto. Mantenimiento sencillo y entre quince y veinte años sin inmutarse con el clima atlántico.' },
  { name: 'Alfombras tejidas de alta costura Tisca Tiara', desc: 'Para una villa excepcional o una suite de Relais & Châteaux, subimos un nivel. El fabricante suizo es lo más alto de la gama. Lana virgen fina, motivos personalizables y un tejido de precisión poco común. Es el equivalente de la alta costura para el suelo. Cuando el proyecto lo justifica, el resultado es inigualable.' },
  { name: 'Moqueta de lana con motivo vasco o contemporánea', desc: 'Para un hotel boutique de Saint-Jean, podemos integrar un motivo geométrico discreto que evoque los dibujos tradicionales vascos. O quedarnos con un liso jaspeado en la paleta regional, a su elección. La clasificación Bfl-s1 cumple los requisitos para el uso hotelero público. Sus huéspedes perciben enseguida el cuidado puesto.' },
  { name: 'Perfiles Romus de latón envejecido y bronce patinado', desc: 'Para los umbrales y los encuentros entre parqué y moqueta, cuidamos el detalle. Coordinamos con la herrajería tradicional de las casas vascas. En obras patrimoniales exigentes, podemos encargar piezas a medida. Es el tipo de cosa que se nota en la entrega y que marca la diferencia.' },
]

const marques = [
  { name: 'EGE Carpets', desc: 'El fabricante danés, nuestra referencia para las villas familiares de Saint-Jean y los hoteles boutique de la Costa Vasca. Sus gamas Highline y Hospitality marcan el tono de inmediato.' },
  { name: 'Brintons', desc: 'El Axminster británico, la aristocracia de la moqueta. Hasta treinta y seis colores en un mismo motivo. Recurrimos a él para las grandes villas del País Vasco y los interiores de gala.' },
  { name: 'Bolon', desc: 'El fabricante sueco de vinilo flocado, nuestra referencia para las villas frente al mar. Aguanta la espuma y la humedad sin inmutarse. Ideal para los hoteles de la bahía.' },
  { name: 'Tisca Tiara', desc: 'El fabricante suizo, lo más alto de la gama. Lo sacamos para proyectos residenciales excepcionales y suites de Relais & Châteaux del País Vasco. Inigualable cuando el presupuesto acompaña.' },
  { name: 'Gerflor', desc: 'El fabricante francés de Lyon, que conocemos a fondo. Sus gamas Mipolam y Texline resisten sin dificultad la humedad atlántica. Compatibles con suelo radiante y de mantenimiento sencillo.' },
  { name: 'Forbo', desc: 'Cuando el proyecto pide algo natural, miramos hacia Forbo. Su Marmoleum es un auténtico linóleo elaborado con aceite de lino. Ideal para villas ecorresponsables y casas vascas restauradas.' },
  { name: 'Object Carpet', desc: 'Los alemanes, para villas de arquitecto y hoteles boutique de estilo depurado. Un diseño contemporáneo con carácter y acabados perfectos.' },
  { name: 'Hereke', desc: 'Las alfombras turcas tejidas a mano, en seda o en lana virgen fina. Las instalamos en las bibliotecas y salones de grandes villas familiares de espíritu clásico. De esos objetos que se transmiten de generación en generación.' },
]

const quartiers = [
  { nom: 'Centro histórico', detail: 'Rue Gambetta, place Louis-XIV, el puerto pesquero. Casas vascas de entramado rojo, casas señoriales, boutiques de prestigio y restaurantes gastronómicos de la bahía.' },
  { nom: 'Sainte-Barbe', detail: 'Barrio residencial en la colina, con vistas a la bahía. Villas familiares con carácter, casas de arquitecto y copropiedades de prestigio con una bonita orientación al océano.' },
  { nom: 'Barrio de Acotz', detail: 'Barrio frente al mar al norte, villas familiares frente al océano y urbanizaciones de viviendas unifamiliares de alto nivel. Una clientela residencial apegada a la calidad de ejecución y a la vista.' },
  { nom: 'Erromardie', detail: 'Barrio costero al norte, playa familiar, campings de lujo y villas de vacaciones. Segundas residencias familiares transmitidas de generación en generación y copropiedades de categoría.' },
  { nom: 'Lafitenia', detail: 'Barrio de surf en la costa norte, un spot legendario, villas contemporáneas de arquitecto con vista directa al océano. Proyectos residenciales de alto nivel y residencias de vacaciones.' },
  { nom: 'Playa de Mayarco', detail: 'Una cala preservada al norte, villas aisladas y propiedades familiares discretas. Una clientela exigente que busca confidencialidad y una calidad de ejecución absoluta.' },
  { nom: 'Socoa', detail: 'Barrio portuario frente a Saint-Jean-de-Luz, del lado de Ciboure. Casas de pescadores renovadas, restaurantes de marisco, el fuerte de Socoa y patrimonio histórico.' },
  { nom: 'Ciboure', detail: 'La ciudad gemela en el lado oeste de la bahía. Casas vascas tradicionales, callejuelas empedradas, un puerto deportivo, restaurantes de pescado y un patrimonio arquitectónico que preservar.' },
  { nom: 'Hendaye', detail: 'Ciudad fronteriza al sur, con una larga playa familiar, villas Art Déco y casas vascas. Proyectos residenciales variados, desde el estudio fronterizo hasta la gran villa familiar.' },
  { nom: 'Guéthary', detail: 'Elegante pueblo vasco entre Saint-Jean-de-Luz y Biarritz. Villas de arquitecto, casas vascas restauradas y un ambiente discreto y refinado. Una clientela internacional exigente.' },
  { nom: 'Bidart', detail: 'Localidad costera al norte, con acantilados y playas, villas familiares y residencias turísticas de alto nivel. Una mezcla residencial y hotelera de categoría.' },
  { nom: 'Saint-Pée-sur-Nivelle', detail: 'Localidad del interior vasco, casas vascas tradicionales, granjas restauradas y proyectos rurales. Edificación auténtica que preservar con respeto al patrimonio local.' },
]

const process = [
  { step: 'Primer contacto', desc: 'Una llamada telefónica o un correo electrónico. Recopilamos los puntos clave: tipo de proyecto (villa familiar, casa vasca, hotel boutique, restaurante), superficie estimada, calendario deseado y limitaciones estacionales. En los proyectos dirigidos por un arquitecto de interiores vasco, contacto directo con su estudio.' },
  { step: 'Visita a Saint-Jean-de-Luz', desc: 'Una visita organizada en un plazo de 2 a 3 semanas desde Villedoux. Medición con láser, revisión de las limitaciones de acceso y fotos para coordinar los colores con la carpintería, la terracota vasca o los ventanales sobre el océano. Los costes están incluidos en el presupuesto si se confirma la obra.' },
  { step: 'Elección de materiales', desc: 'El showroom de Villedoux o muestras enviadas directamente a Saint-Jean-de-Luz, a su dirección o a la del arquitecto. Validación final bajo la luz atlántica del lugar, nunca en un showroom: la luz de Saint-Jean transforma los colores, en especial las lanas cálidas y la terracota.' },
  { step: 'Fabricación en el taller de La Rochelle', desc: 'De 3 a 16 semanas según la gama: Axminster a medida, Wilton, seda, lana virgen, vinilo cortado, alfombras a medida. Premontaje en seco en el taller para validar el ajuste antes del transporte. Esta preparación es lo que permite una instalación final rápida en Saint-Jean-de-Luz pese a la distancia.' },
  { step: 'Instalación en Saint-Jean-de-Luz', desc: 'Un equipo movilizado en el lugar con alojamiento incluido en el presupuesto, un calendario fijado según su disponibilidad o la temporada baja del hotel. Coordinación con el conserje o con el director de obra. Limpieza completa en la entrega y acabados revisados con usted o con el arquitecto.' },
]

const faq = [
  { q: '¿Vienen realmente a Saint-Jean-de-Luz desde La Rochelle?', a: 'Sí, en los proyectos que lo justifican. Saint-Jean-de-Luz está a 370 km, cuatro horas por la A10 y luego la A63. Organizamos un desplazamiento largo, el equipo permanece en el lugar hasta la entrega y el alojamiento está incluido. La distancia exige una preparación impecable en el taller. Todo se premonta en seco antes de la salida, de modo que la instalación en obra es rápida. Trabajamos con regularidad en la Costa Vasca y conocemos sus limitaciones.' },
  { q: '¿Trabajan en las villas familiares del País Vasco?', a: 'Sí, es uno de nuestros terrenos favoritos de la costa. Sainte-Barbe, Acotz, Erromardie y Lafitenia concentran un patrimonio de villas transmitidas de generación en generación. El parqué antiguo, la terracota vasca y la vista al océano nos piden acompañarlos sin competir. Trabajamos con su arquitecto de interiores. Las alfombras a medida y las moquetas de lana en la paleta vasca encuentran allí su marco natural.' },
  { q: '¿Cómo gestionan el clima atlántico y la espuma del mar?', a: 'La espuma salina y la humedad atlántica imponen un verdadero rigor en la elección de materiales. Dejamos de lado lo que funciona en un clima seco y optamos por lana tratada contra polillas y humedad, vinilo con alto contenido en plastificante que conserva su flexibilidad y alfombras con ribete cosido a mano que no se mueve. Además, cuidamos de manera especial los encuentros con los ventanales y las terrazas para evitar cualquier filtración.' },
  { q: '¿Cuánto tarda una alfombra a medida?', a: 'Cuente con diez a dieciséis semanas para un Axminster Brintons a medida con un motivo validado sobre cartón. De ocho a catorce semanas para una Tisca Tiara de alta costura. De ocho a catorce para una Hereke con ribete cosido a mano. A ello se suman la fabricación en taller y la instalación en obra. Un proyecto completo de villa se planifica en cuatro a seis meses, con antelación si la familia llega en julio.' },
  { q: '¿Trabajan en los restaurantes gastronómicos de la bahía?', a: 'Sí. En el puerto pesquero, en el centro histórico o del lado de Ciboure, la acústica marca toda la diferencia en la mesa. Una moqueta de lana sobre una base de fieltro reduce a la mitad la reverberación. Sus clientes disfrutan mejor de la velada. Instalamos de noche o el día de cierre, y usted no pierde ningún servicio. Protegemos las cocinas, lo limpiamos todo y por la mañana la sala está lista.' },
  { q: '¿Trabajan en las casas vascas tradicionales?', a: 'Sí, y con mucho respeto por el edificio. Una etxe en Saint-Pée, una casa de pueblo en Ciboure, una granja restaurada en el interior: cada una tiene su alma, parqué original de castaño, terracota roja, escaleras estrechas y estancias íntimas. Nos mantenemos en la tradición regional: paleta arena, terracota y motivos discretos. Ni se plantea imponer una elección que traicione la casa.' },
  { q: '¿Cuánto dura una moqueta de lana frente al mar?', a: 'Cuente con quince a veinte años sin problema, incluso con el clima atlántico. La lana virgen tolera bien la humedad ambiental, la absorbe y la libera sin alterarse. Los sintéticos, en cambio, pueden deformarse. En vestíbulos y escaleras, elegimos más bien una lana de tejido tupido con un motivo discreto, que resiste mejor el paso. Basta una limpieza profesional al final de la temporada, antes del cierre invernal, para conservar el aspecto del primer día.' },
]

export default function RevetementSolSaintJeanDeLuzPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/revetement-sol-saint-jean-de-luz#service',
        name: 'Revestimiento de suelo en Saint-Jean-de-Luz',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Saint-Jean-de-Luz' },
          { '@type': 'AdministrativeArea', name: 'Pyrénées-Atlantiques' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Instalación de moqueta, vinilo y alfombras a medida en Saint-Jean-de-Luz y la Costa Vasca',
        description: 'Diseño, fabricación en taller e instalación de moqueta, vinilo y alfombras a medida para villas familiares frente al océano, casas vascas tradicionales, hoteles boutique y restaurantes gastronómicos en Saint-Jean-de-Luz.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Revestimiento de suelo en Saint-Jean-de-Luz', item: 'https://cbsols.fr/es/revetement-sol-saint-jean-de-luz' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="saint-jean-de-luz" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revestimiento de suelo Saint-Jean-de-Luz</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revestimiento de suelo en Saint-Jean-de-Luz,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>el alma vasca.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Instalación de moqueta, vinilo y alfombras a medida en Saint-Jean-de-Luz. Villas familiares frente al océano, casas vascas de entramado rojo, hoteles boutique de la bahía, restaurantes gastronómicos. Un taller con sede en La Rochelle y desplazamiento organizado a la Costa Vasca para proyectos de prestigio.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=saint-jean-de-luz" variant="primary" size="md">Solicitar un presupuesto</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nos desplazamos hasta usted</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Saint-Jean-de-Luz es una luz única, una tradición fuerte y familias que llevan tres generaciones transmitiéndose sus villas. CB Sols acompaña estos proyectos respetando el espíritu vasco, desde hace más de 28 años.&rdquo;
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
            Cuatro escenarios, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>una misma fidelidad al espíritu vasco.</em>
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

      <section style={{ padding: '3rem 2rem' }}>
        <div style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Tiene un proyecto en Saint-Jean-de-Luz?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Una visita a obra, un presupuesto detallado.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Contacto directo con su arquitecto de interiores, su decorador vasco o con usted. Una visita organizada en un plazo de 2 a 3 semanas y un presupuesto detallado en una semana.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/es/contact?source=saint-jean-de-luz-cta1" variant="primary" size="md">Solicitar un presupuesto</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Particularidades del País Vasco</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Seis exigencias <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propias de los proyectos de Saint-Jean.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Trabajar en Saint-Jean-de-Luz no es reproducir una obra estándar. Estos son los seis puntos sobre los que estructuramos nuestro método desde la primera visita, para respetar la tradición vasca y cumplir el calendario estacional.
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

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materiales y gamas para Saint-Jean-de-Luz</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Las familias de productos <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que llevamos a la Costa Vasca.</em>
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

      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &ldquo;A una villa de Saint-Jean se llega por la luz atlántica y la tradición vasca. Una moqueta que combine con la terracota roja, una alfombra que responda a la vista al océano, acabados impecables bajo la luz de la tarde.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, propietario de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?source=saint-jean-de-luz-citation" variant="primary" size="md">Pedir una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Una visita a obra en Saint-Jean-de-Luz</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Fabricantes asociados</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Ocho casas de referencia <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>para sus proyectos en Saint-Jean.</em>
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

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Barrios y localidades donde trabajamos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Saint-Jean-de-Luz y la Costa Vasca, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Bidart a Hendaye.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Nuestro equipo se desplaza por toda la Costa Vasca y por el interior, donde se concentran los proyectos residenciales excepcionales y los hoteles boutique de prestigio.
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

      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Tiene un proyecto en mente?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Una llamada para despejar el terreno.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Veinte minutos por teléfono bastan para aclarar las gamas posibles, un calendario realista y un orden de magnitud del presupuesto para su obra en Saint-Jean.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?source=saint-jean-de-luz-cta2" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro método</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco pasos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux a Saint-Jean-de-Luz.</em>
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

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Preguntas frecuentes</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Revestimiento de suelo en Saint-Jean-de-Luz, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas concretas.</em>
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

      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            ¿Una pregunta más? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>Llame a Valentin.</em>
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Directo con el propietario. Sin línea de atención ni centralita. Consejos claros, un orden de magnitud honesto y un siguiente paso solo si el proyecto tiene sentido para usted y para nosotros.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="Ver también"
        sectionSubtitle="Nuestra experiencia abarca otros mundos que pueden interesarle. Tómese su tiempo para explorar, hacer sus preguntas y le responderemos."
        items={[
          { href: '/es/revetement-sol-biarritz', title: 'Revestimiento de suelo Biarritz', teaser: 'Villas de la Costa Vasca. Suelos que resisten la sal, la arena y la luz del océano.', icon: MapPin },
          { href: '/es/revetement-sol-arcachon', title: 'Revestimiento de suelo Arcachon', teaser: 'Casas de la bahía y villas de las dunas. Suelos que aguantan la arena, la luz y el día a día.', icon: MapPin },
          { href: '/es/revetement-sol-cap-ferret', title: 'Revestimiento de suelo Cap Ferret', teaser: 'Cabañas de ostricultores y villas con los pies en la arena. La discreción de una experiencia que apenas se nota.', icon: Waves },
          { href: '/es/revetement-sol-bordeaux', title: 'Revestimiento de suelo Burdeos', teaser: 'Casas señoriales, lofts en échoppes y casas de piedra. Suelos que dialogan con la arquitectura.', icon: MapPin },
          { href: '/es/architectes', title: 'Para arquitectos', teaser: 'Documentación de materiales, muestras anotadas y presupuestos detallados. Nuestro papel es servir a su visión.', icon: Building2 },
          { href: '/es/particuliers', title: 'Para particulares', teaser: 'Moqueta, suelos de vinilo y alfombras a medida: nuestra experiencia al servicio de su hogar.', icon: Home },
          { href: '/es/showroom', title: 'Showroom de Villedoux', teaser: 'Venga a ver y tocar los materiales. Con cita previa, en Villedoux, cerca de La Rochelle.', icon: Store },
          { href: '/es/contact', title: 'Contáctenos', teaser: 'Una pregunta, un proyecto, un presupuesto en 48 horas. El propietario le responde directamente.', icon: Mail },
        ]}
      />

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Su proyecto en Saint-Jean <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>en buenas manos.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita a obra en Saint-Jean-de-Luz. Un presupuesto detallado, acabados de primera calidad y respeto por la tradición vasca. CB Sols, más de 28 años de experiencia al servicio de proyectos excepcionales en la Costa Vasca.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=saint-jean-de-luz-final" variant="primary" size="md">Solicitar un presupuesto</Button>
            <Button href="/es/showroom" variant="outline" size="md">Cita en el showroom</Button>
          </div>
          <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.6)' }}>
            O bien <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.phone}</a> · <a href={`mailto:${company.email}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.email}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
