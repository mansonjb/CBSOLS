import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Castle, Home, Mail, MapPin, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Revestimiento de suelo en Parthenay | Presupuesto gratuito en 48 h',
  description: 'Colocación de moqueta, vinilo y alfombras a medida en Parthenay. Casas antiguas del centro medieval, comercios, consultas, organismos públicos. CB Sols trabaja en el oficio desde hace más de 28 años con verdadera cautela sobre los soportes antiguos, con desplazamiento desde Villedoux.',
  alternates: {
    canonical: 'https://cbsols.fr/es/revetement-sol-parthenay',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-parthenay', en: 'https://cbsols.fr/en/revetement-sol-parthenay', es: 'https://cbsols.fr/es/revetement-sol-parthenay', },
  },
  keywords: ['revestimiento de suelo Parthenay', 'moqueta Parthenay', 'suelo de vinilo Parthenay', 'colocación de alfombras Parthenay', 'artesano de suelos Parthenay'],
  openGraph: {
    title: 'Revestimiento de suelo en Parthenay, respeto por el tejido antiguo',
    description: 'Moqueta, vinilo y alfombras a medida en Parthenay. Ciudad medieval, casas antiguas, comercios, organismos públicos. CB Sols, más de 28 años de experiencia.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-parthenay.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Casas antiguas del centro medieval', desc: 'Usted vive en una antigua casa de piedra cerca de la porte Saint-Jacques o en la rue de la Vau Saint-Jacques. El tejido es precioso y frágil. Colocamos de forma reversible, sin clavos ni colas agresivas, para respetar los suelos antiguos. Usted conserva el valor patrimonial del inmueble.' },
  { title: 'Comercios y boutiques del centro', desc: 'Usted dirige un comercio en la ciudad medieval o sus alrededores. Colocamos de noche o el día de cierre, así no pierde ni un día de actividad. Un suelo resistente al tránsito, fácil de mantener, y un aspecto que realza su boutique sin desvirtuar el lugar.' },
  { title: 'Consultas y profesiones liberales', desc: 'Usted recibe a sus clientes en una consulta de Parthenay. Un suelo cuidado tranquiliza ya desde la sala de espera. Colocamos vinilo acústico en los espacios de trabajo y moqueta de lana donde usted recibe. Venimos cuando usted no está atendiendo.' },
  { title: 'Organismos públicos y servicios públicos', desc: 'Usted gestiona un edificio municipal, un ayuntamiento, un equipamiento público. Elegimos suelos conformes con las exigencias de los edificios públicos, aportamos los informes de reacción al fuego y la documentación, y dialogamos con la oficina de inspección. Escalonamos las obras para no perturbar la atención al público.' },
]

const exigences = [
  { title: 'Cautela sobre los soportes antiguos', desc: 'El centro medieval de Parthenay conserva suelos antiguos: baldosas hexagonales de terracota, entarimados originales, soportes irregulares. Nunca colocamos a ciegas. Sondeamos el soporte, comprobamos la humedad, elegimos la capa de nivelación o la base adecuada. Ninguna mala sorpresa una vez terminada la colocación.' },
  { title: 'El sector protegido, lo respetamos', desc: 'Parthenay protege su patrimonio medieval. Algunas obras visibles desde la calle o que afectan al tejido catalogado exigen cautela. En un suelo interior, somos discretos y reversibles, y nos coordinamos con su arquitecto si el proyecto afecta a algo protegido.' },
  { title: 'Una colocación reversible que respeta el tejido', desc: 'En una casa antigua de piedra, colocamos sin clavar, sin encolados agresivos. Si dentro de diez años usted quiere retirar la moqueta, el suelo original quedará intacto. Eso es respetar un inmueble que ha atravesado los siglos.' },
  { title: 'Una visita agrupada y luego una colocación fijada', desc: 'Parthenay queda a una distancia considerable de nuestro taller. Por eso organizamos una visita de medición al inicio del proyecto y volvemos a colocar una vez terminada la fabricación. Usted no tiene que gestionar diez viajes de ida y vuelta, solo dos citas claras y un calendario cumplido.' },
  { title: 'Trabajamos cuando usted no trabaja', desc: 'En un comercio o una consulta, no podemos interrumpir la actividad. Por eso venimos por la tarde, el fin de semana o el día de cierre. Usted reabre a la mañana siguiente con el suelo colocado y limpio. Ni un día de facturación perdido.' },
  { title: 'Un único interlocutor, de principio a fin', desc: 'En una obra, usted ya tiene bastantes contratistas a los que seguir. Nosotros somos un único nombre en su agenda. Presupuesto, calendario, entrega, factura: todo pasa por la misma persona. Usted ahorra tiempo y siempre sabe con quién hablar.' },
]

const materiaux = [
  { name: 'Moqueta tejida de lana virgen', desc: 'Para los salones de las casas antiguas del centro medieval. La lana adquiere pátina con el tiempo y no se aplasta. Al tacto es firme, a la vista destaca. Elegimos con usted un liso o un motivo discreto para respetar la piedra y las carpinterías originales.' },
  { name: 'Alfombras a medida para suelos antiguos', desc: 'Cuando usted quiere vestir un entarimado o unas baldosas de terracota sin ocultarlos, la alfombra a medida cumple su función. Lana virgen, un ribete cosido a mano, dimensiones al centímetro. Podemos mantener un liso sobrio o reproducir un motivo discreto. Cuente con entre ocho y catorce semanas.' },
  { name: 'Vinilo acústico Gerflor y Tarkett', desc: 'Lo colocamos en las consultas y organismos públicos de Parthenay. La base absorbe el ruido de pasos y la atención se desarrolla con calma. La gama de colores es amplia y podemos adaptarnos a su identidad. El suelo dura quince años sin problema, a menudo veinte.' },
  { name: 'Vinilo efecto madera reversible', desc: 'A veces el suelo original ya no se puede salvar. En lugar de una retirada invasiva, proponemos un vinilo efecto madera de gran calidad, colocado de forma reversible. El resultado visual sigue siendo convincente y compatible con una reventa patrimonial. Incluso podemos colocarlo sobre suelo radiante.' },
  { name: 'Losetas de moqueta EGE y Forbo', desc: 'La elección adecuada para una consulta o un edificio público. Las losetas miden 50×50 cm. Si alguien derrama un café, sustituimos únicamente la loseta dañada. La base acústica suaviza la sala. Usted obtiene entre quince y veinte años de uso clásico en oficina.' },
  { name: 'Perfiles Romus de latón cepillado y aluminio', desc: 'En los umbrales y los remates de escalera, cuidamos el detalle. Coordinamos con sus herrajes existentes, algo que cuenta en una casa antigua. En obras algo exigentes, podemos encargar piezas a medida. Es el tipo de detalle que se nota en la entrega.' },
]

const marques = [
  { name: 'Gerflor', desc: 'El fabricante francés con sede en Lyon que conocemos a fondo. Sus vinilos Mipolam y Taralay son nuestra referencia versátil en consultas y organismos públicos. Gran variedad, acústica seria, mantenimiento sencillo.' },
  { name: 'Tarkett', desc: 'Para espacios de oficina y edificios públicos que requieren un verdadero confort acústico, apostamos por Tarkett iQ Granit. Envejece bien y tolera el tránsito regular de la atención al público.' },
  { name: 'Forbo', desc: 'Cuando el proyecto pide algo natural, miramos a Forbo. Su Marmoleum es un auténtico linóleo elaborado con aceite de lino. Las certificaciones medioambientales son sólidas y las destacamos a menudo en consultas y organismos públicos.' },
  { name: 'EGE Carpets', desc: 'El tejedor danés, nuestra referencia para una consulta o una sala de reuniones que quiera llamar la atención. Sus losetas ya incorporan la base acústica, lo que facilita la colocación y suaviza la sala.' },
  { name: 'objectflor', desc: 'Para comercios y boutiques del centro, sus lamas de vinilo efecto madera son una apuesta segura. El resultado es creíble, la colocación reversible es rápida y la resistencia al tránsito se mantiene con el tiempo.' },
  { name: 'Bostik', desc: 'Para adhesivos y capas de nivelación, trabajamos con Bostik. Son productos fiables que garantizan una colocación duradera, sobre todo en los soportes antiguos e irregulares de las casas medievales.' },
  { name: 'objectflor Expona', desc: 'Cuando un comercio quiere un suelo de diseño que destaque sin sacrificar resistencia, sus gamas Expona cumplen. Efecto madera, hormigón o piedra, la elección es amplia y el resultado de gama alta.' },
  { name: 'Romus', desc: 'Para los accesorios de acabado, perfiles y remates de escalera, Romus es nuestra referencia. Del latón cepillado al aluminio, siempre encontramos el acabado que encaja con un interior antiguo.' },
]

const quartiers = [
  { nom: 'Centro medieval', detail: 'Porte Saint-Jacques, rue de la Vau Saint-Jacques, el castillo. Casas antiguas de piedra, sector protegido, comercios con carácter que acondicionar con cautela.' },
  { nom: 'Barrio de Saint-Laurent', detail: 'Viviendas antiguas y casas de ciudad, comercios locales. Proyectos de renovación patrimonial y residencias ligadas al tejido original.' },
  { nom: 'Alrededores del mercado de ganado', detail: 'El barrio histórico del célebre mercado de ganado. Comercios, servicios y locales de actividad que modernizar.' },
  { nom: 'Arrabales residenciales', detail: 'Urbanizaciones recientes y casas familiares. Una clientela de propietarios apegada a los acabados cuidados y al asesoramiento a medida.' },
  { nom: 'Barrio de la estación', detail: 'Viviendas unifamiliares y pequeñas unidades de oficinas. Consultas, copropiedades y casas unifamiliares en proceso de modernización.' },
  { nom: 'Châtillon-sur-Thouet', detail: 'Un municipio colindante, zonas de actividad y viviendas residenciales. Oficinas de empresa, comercios y casas familiares.' },
  { nom: 'Pompaire', detail: 'Un pueblo residencial a las puertas de Parthenay. Urbanizaciones, casas rurales renovadas y proyectos con carácter.' },
  { nom: 'Le Tallud', detail: 'Un municipio vecino de entorno rural y verde. Casas familiares, longères renovadas y viviendas antiguas que acondicionar con esmero.' },
  { nom: 'Secondigny', detail: 'Un pueblo de la Gâtine, casas antiguas de piedra y viviendas patrimoniales. Proyectos de renovación residencial y restauración de edificios.' },
  { nom: 'Ménigoute', detail: 'Un pequeño pueblo de la Gâtine, casas con carácter y viviendas antiguas. Una clientela residencial atenta a respetar el tejido original.' },
  { nom: 'Saint-Aubin-le-Cloud', detail: 'Un municipio colindante, viviendas unifamiliares y casas de ciudad. Propietarios apegados a los acabados y al asesoramiento.' },
  { nom: 'Vasles', detail: 'Un pueblo de la Gâtine entre Parthenay y Poitiers. Casas familiares, renovaciones residenciales y viviendas antiguas.' },
]

const process = [
  { step: 'Primer contacto', desc: 'Una llamada o un correo electrónico. Recogemos los puntos clave: tipo de proyecto (casa antigua, comercio, consulta, organismo público), superficie estimada, calendario deseado y posibles condicionantes patrimoniales o de edificio público. Definimos juntos los siguientes pasos y fijamos la fecha de la visita.' },
  { step: 'Visita a Parthenay', desc: 'Una visita organizada desde Villedoux, a unas 1 h 45 min en coche. Medición láser, sondeo de los soportes antiguos, comprobación de la humedad y fotos para coordinar colores y juntas. En un tejido antiguo, este reconocimiento es decisivo para evitar cualquier mala sorpresa.' },
  { step: 'Elección de materiales', desc: 'El showroom de Villedoux o muestras enviadas directamente a Parthenay, a su domicilio o a la consulta. Validación final bajo la luz del lugar de colocación. Para los organismos públicos, entrega de las fichas técnicas requeridas, los informes de reacción al fuego y las certificaciones medioambientales.' },
  { step: 'Fabricación en taller', desc: 'De 3 a 10 semanas según la gama: moqueta tejida, losetas, vinilo cortado, alfombras a medida. Premontaje en seco en el taller para validar el ajuste antes del transporte. Esta preparación previa es lo que nos permite mantener una colocación final rápida y cuidadosa en Parthenay.' },
  { step: 'Colocación en Parthenay', desc: 'Un equipo movilizado en obra, alojamiento incluido en el presupuesto y un calendario fijado según su disponibilidad o la ventana de la obra. Colocación reversible sobre el tejido antiguo, con escalonamiento fuera de horas de actividad posible para comercios y consultas. Limpieza completa en la entrega.' },
]

const faq = [
  { q: '¿Realmente vienen a Parthenay desde La Rochelle?', a: 'Sí. Parthenay está a unos 130 km, alrededor de 1 h 45 min por carretera. Organizamos la visita de medición al inicio del proyecto y volvemos a colocar una vez terminada la fabricación. El alojamiento y los desplazamientos están incluidos en el presupuesto. En obras de mayor envergadura, el equipo se queda en el lugar hasta la entrega. Usted no tiene que coordinar una serie de viajes de ida y vuelta, solo dos citas claras.' },
  { q: '¿Trabajan en las casas antiguas del centro medieval?', a: 'Por supuesto, es incluso un terreno donde nuestra cautela marca la diferencia. El centro de Parthenay conserva hermosas casas de piedra, con suelos antiguos frágiles. Siempre sondeamos el soporte antes de colocar, comprobamos la humedad y elegimos la base adecuada. Y colocamos de forma reversible siempre que es posible: si dentro de diez años usted quiere rehacerlo todo, el suelo original estará intacto.' },
  { q: '¿Cómo gestionan los condicionantes del sector protegido?', a: 'Parthenay protege su patrimonio medieval y nosotros lo respetamos. En un suelo interior, casi nunca se consulta directamente al arquitecto de los Bâtiments de France. Pero somos discretos y reversibles, documentamos la obra por costumbre y, si el proyecto afecta a algo visible o protegido, nos coordinamos con su arquitecto. Usted tiene un expediente limpio de principio a fin.' },
  { q: '¿Toman precauciones sobre los soportes antiguos?', a: 'Siempre. Es incluso el corazón del oficio en tejido antiguo. Nunca colocamos a ciegas: sondeamos el entarimado o las baldosas de terracota, medimos la humedad y revisamos la planimetría. Según lo que encontramos, elegimos la capa de nivelación, la base y el adhesivo reversible adecuados. Este reconocimiento previo es lo que evita ampollas y desprendimientos una vez terminada la colocación.' },
  { q: '¿Trabajan en los comercios del centro?', a: 'Sí. Para una boutique o un comercio, el suelo debe realzar sus productos, resistir el tránsito y respetar el carácter del lugar. Colocamos de noche o el día de cierre, así no pierde ni un día de actividad. Protegemos lo existente, limpiamos todo en la entrega y a la mañana siguiente usted reabre en un espacio listo para recibir a sus clientes.' },
  { q: '¿Cuánto dura un suelo de vinilo en una consulta o un organismo público?', a: 'Cuente con quince a veinte años sin problema, a veces más. Un vinilo homogéneo envejece bien porque no tiene capa de desgaste que se pueda traspasar, es el mismo material de arriba abajo. En zonas de mucho tránsito, como la recepción de un ayuntamiento, recomendamos una clasificación de clase 34, que tolera mejor el tránsito. Basta una limpieza profesional una vez al año para conservar el aspecto del primer día.' },
  { q: '¿Trabajan con los organismos públicos de Parthenay?', a: 'Sí. Ayuntamiento, equipamiento público, edificio municipal: estas obras exigen suelos conformes con las exigencias de los edificios públicos, fichas técnicas completas, informes de reacción al fuego y un escalonamiento que respete la atención al público. Estamos equipados para ello: documentación actualizada, diálogo con la oficina de inspección y un calendario ajustado a sus ventanas de obra. Podemos trabajar fuera de horas de actividad para no interrumpir el servicio.' },
]

export default function RevetementSolParthenayPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/revetement-sol-parthenay#service',
        name: 'Revestimiento de suelo en Parthenay',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Parthenay' },
          { '@type': 'AdministrativeArea', name: 'Deux-Sèvres' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Colocación de moqueta, vinilo y alfombras a medida en Parthenay y en Deux-Sèvres',
        description: 'Diseño, fabricación en taller y colocación de moqueta, vinilo y alfombras a medida para casas antiguas, comercios, consultas y organismos públicos en Parthenay, con especial atención a los soportes antiguos.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Revestimiento de suelo en Parthenay', item: 'https://cbsols.fr/es/revetement-sol-parthenay' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="parthenay" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revestimiento de suelo Parthenay</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revestimiento de suelo en Parthenay,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>respeto por el tejido antiguo.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Colocación de moqueta, vinilo y alfombras a medida en Parthenay. Casas antiguas del centro medieval, comercios, consultas, organismos públicos. Un taller situado cerca de La Rochelle, con desplazamiento organizado y verdadera cautela sobre los soportes antiguos y los condicionantes del sector protegido.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=parthenay" variant="primary" size="md">Solicitar un presupuesto</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nos desplazamos hasta usted</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Una casa del centro medieval de Parthenay no se trata como un suelo nuevo. Sondeamos el soporte, colocamos de forma reversible, respetamos lo que el tejido ya ha atravesado. Ese es el oficio que CB Sols practica desde hace más de 28 años.&rdquo;
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
            Cuatro contextos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>un mismo rigor patrimonial.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un proyecto en Parthenay?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Una visita a obra, un presupuesto detallado.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Contacto directo con usted, su arquitecto o el responsable de su establecimiento. Una visita de medición y un sondeo de los soportes, y un presupuesto detallado en 48 horas.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/es/contact?source=parthenay-cta1" variant="primary" size="md">Solicitar un presupuesto</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Particularidades de Parthenay</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Seis exigencias <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propias de los proyectos de Parthenay.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Trabajar en Parthenay no es reproducir una obra estándar. La ciudad medieval exige una verdadera cautela sobre el tejido antiguo. Estos son los seis puntos en los que estructuramos nuestro método desde la primera visita.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materiales y gamas para Parthenay</div>
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
              &ldquo;Sobre un entarimado antiguo o unas baldosas de terracota del centro medieval, nunca colocamos a ciegas. Sondeamos, comprobamos la humedad, elegimos la respuesta adecuada. Esta cautela es lo que evita las malas sorpresas.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, propietario de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?source=parthenay-citation" variant="primary" size="md">Pedir una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Una visita a obra en Parthenay</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Fabricantes asociados</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Ocho casas de referencia <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>para sus proyectos en Parthenay.</em>
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
            Parthenay y la Gâtine, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>hasta los municipios vecinos.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Nuestro equipo se desplaza por Parthenay y por toda la Gâtine, así como por los municipios vecinos, donde se concentran los proyectos patrimoniales residenciales, comerciales y públicos.
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
            Veinte minutos por teléfono bastan para aclarar las gamas posibles, las precauciones sobre el tejido antiguo, un calendario realista y un orden de magnitud presupuestario para su obra en Parthenay.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?source=parthenay-cta2" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro método</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco etapas, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux a Parthenay.</em>
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
            Revestimiento de suelo en Parthenay, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas concretas.</em>
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
            Directamente con el propietario. Sin línea de atención, sin centralita. Un consejo claro, un orden de magnitud honesto y un siguiente paso solo si el proyecto tiene sentido para usted y también para nosotros.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="Ver también"
        sectionSubtitle="Nuestra experiencia abarca otras ciudades y ámbitos que pueden interesarle. Tómese su tiempo para explorar, plantee sus preguntas, le responderemos."
        items={[
          { href: '/es/revetement-sol-niort', title: 'Revestimiento de suelo Niort', teaser: 'Sedes sociales, casas de ciudad, residencias de mayores. Nuestra experiencia en el corazón de Deux-Sèvres.', icon: MapPin },
          { href: '/es/services', title: 'Nuestros servicios', teaser: 'Moqueta, suelo de vinilo, alfombras a medida, limpieza. Todo nuestro oficio al servicio de su proyecto.', icon: Building2 },
          { href: '/es/particuliers', title: 'Para particulares', teaser: 'Moqueta, suelo de vinilo, alfombras a medida: nuestra experiencia al servicio de su hogar.', icon: Home },
          { href: '/es/secteurs', title: 'Nuestros sectores', teaser: 'Oficinas, sanidad, hostelería, comercio. Soluciones pensadas para cada tipo de establecimiento.', icon: Castle },
          { href: '/es/realisations', title: 'Nuestras realizaciones', teaser: 'Descubra en imágenes nuestras obras recientes. El resultado, los acabados, el detalle que cuenta.', icon: Store },
          { href: '/es/contact', title: 'Contáctenos', teaser: 'Una pregunta, un proyecto, un presupuesto en 48 horas. El propietario le responde directamente.', icon: Mail },
        ]}
      />

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Su proyecto en Parthenay <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>en buenas manos.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita a obra en Parthenay. Un presupuesto detallado en 48 horas, acabados cuidados, una colocación reversible y respeto por el tejido antiguo. CB Sols, más de 28 años de experiencia al servicio de los proyectos en Deux-Sèvres.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=parthenay-final" variant="primary" size="md">Solicitar un presupuesto</Button>
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
