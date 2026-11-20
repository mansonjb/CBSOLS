import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Castle, Home, Mail, MapPin, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Revestimiento de suelo en Thouars | Presupuesto gratuito en 48 h',
  description: 'Instalación de moqueta, vinilo y alfombras a medida en Thouars. Casas con carácter, comercios, consultas, organismos públicos, residencias de mayores. CB Sols lleva más de 28 años en el oficio y controla los desplazamientos: una visita de medición y después una instalación agrupada desde Villedoux.',
  alternates: {
    canonical: 'https://cbsols.fr/es/revetement-sol-thouars',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-thouars', en: 'https://cbsols.fr/en/revetement-sol-thouars', es: 'https://cbsols.fr/es/revetement-sol-thouars', },
  },
  keywords: ['revestimiento de suelo Thouars', 'moqueta Thouars', 'suelo de vinilo Thouars', 'instalación de alfombras Thouars', 'artesano de suelos Thouars'],
  openGraph: {
    title: 'Revestimiento de suelo en Thouars, cuidado del patrimonio',
    description: 'Moqueta, vinilo y alfombras a medida en Thouars. Una ciudad de arte e historia, casas con carácter, comercios, organismos públicos, residencias de mayores. CB Sols, más de 28 años de experiencia.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-thouars.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Casas con carácter y patrimonio', desc: 'Vives en una casa con carácter cerca del castillo de los duques de La Trémoïlle, sobre el Thouet. La construcción merece respeto. Instalamos una moqueta de lana o una alfombra a medida de forma reversible, sin dañar los suelos antiguos. Respetamos el carácter del lugar sin excedernos.' },
  { title: 'Comercios y boutiques del centro', desc: 'Diriges un comercio en esta ciudad de arte e historia. Instalamos de noche o el día de cierre, así no pierdes ningún día de venta. Un suelo resistente al tránsito, fácil de mantener, y un aspecto que realza tu boutique en un entorno patrimonial.' },
  { title: 'Consultas, organismos públicos y servicios', desc: 'Recibes público en una consulta, un ayuntamiento, un edificio municipal. Elegimos suelos conformes con las exigencias de los establecimientos abiertos al público, aportamos los informes de reacción al fuego y la documentación, y escalonamos las obras para no perturbar la atención. Un único interlocutor del presupuesto a la entrega.' },
  { title: 'Residencias de mayores y residencias senior', desc: 'Diriges una residencia de mayores o una residencia medicalizada en Thouars. Vinilo homogéneo Bfl-s1 en los pasillos, moqueta de lana en las habitaciones de huéspedes, antideslizante R10 en los baños. Aportamos la documentación para establecimientos abiertos al público y los informes de reacción al fuego para la comisión de seguridad.' },
]

const exigences = [
  { title: 'Desplazamientos organizados, nunca improvisados', desc: 'Thouars está a unas dos horas de nuestro taller. No hacemos el viaje de ida y vuelta a la ligera. Organizamos una visita de medición al inicio del proyecto y volvemos a instalar una vez terminada la fabricación. El desplazamiento está controlado, el calendario anunciado y todo va incluido en el presupuesto.' },
  { title: 'Una visita de medición y después una instalación agrupada', desc: 'Dada la distancia, agrupamos el trabajo. La visita sirve para dejarlo todo resuelto: medidas, soportes, colores, accesos. La instalación se hace después de una sola vez, y el equipo se queda en la obra hasta la entrega. No tienes que coordinar una serie de visitas, solo dos momentos clave bien claros.' },
  { title: 'Respetamos la construcción y los suelos antiguos', desc: 'Thouars es una ciudad de arte e historia, rica en casas con carácter. Instalamos de forma reversible siempre que es posible: sin clavar, sin pegados agresivos. Si dentro de diez años quieres retirar la moqueta, el suelo original estará intacto. Eso es respetar un inmueble patrimonial.' },
  { title: 'Trabajamos cuando tú no trabajas', desc: 'En un comercio o una consulta no podemos detener la actividad. Por eso venimos por la tarde, el fin de semana o el día de cierre. Reabres a la mañana siguiente con el suelo instalado y limpio. Ningún día de ingresos perdido.' },
  { title: 'Las normas, nos encargamos nosotros', desc: 'Residencia de mayores, organismo público, consulta: hay normas estrictas de seguridad contra incendios e higiene. Elegimos por ti los productos adecuados, aportamos los certificados y dialogamos con la oficina de inspección. No tienes que entender nada de las fichas técnicas.' },
  { title: 'Un único interlocutor, de principio a fin', desc: 'En una obra ya tienes bastantes contratistas a los que seguir. Nosotros somos un solo nombre en tu agenda. Presupuesto, calendario, entrega, factura: todo pasa por la misma persona. Ahorras tiempo y siempre sabes con quién hablar.' },
]

const materiaux = [
  { name: 'Moqueta tejida de lana virgen', desc: 'Para los salones de las casas con carácter de Thouars. La lana adquiere pátina con los años y no se aplasta. Al tacto es firme, a la vista destaca. Elegimos contigo un liso o un motivo discreto que respete la piedra y las carpinterías originales.' },
  { name: 'Alfombras a medida para suelos antiguos', desc: 'Cuando quieres vestir un entarimado antiguo sin ocultarlo, la alfombra a medida cumple su función. Lana virgen, cenefa cosida a mano, dimensiones al centímetro. Podemos quedarnos en un liso sobrio o reproducir un motivo discreto. Cuenta con ocho a catorce semanas.' },
  { name: 'Vinilo acústico Gerflor y Tarkett', desc: 'Lo instalamos en las consultas y organismos públicos de Thouars. La capa inferior absorbe el ruido de pasos y la atención se desarrolla con calma. La gama de colores es amplia y podemos adaptarla a tu identidad. El suelo dura quince años sin problema, a menudo veinte.' },
  { name: 'Vinilo homogéneo para residencias de mayores', desc: 'En los pasillos y habitaciones de las residencias de mayores optamos por el vinilo homogéneo. Es el mismo material de arriba abajo, así que no hay capa de desgaste que atravesar. Soldamos en caliente las láminas y el agua no se cuela por ningún sitio. Tienes por delante de veinte a veintiocho años, incluso con mucho tránsito.' },
  { name: 'Vinilo efecto madera para comercios', desc: 'Para una boutique o un comercio, el vinilo efecto madera hace maravillas. El resultado visual es convincente, el suelo resiste el tránsito y se limpia en cinco minutos. Instalado de forma reversible, encaja con la construcción antigua. Incluso podemos instalarlo sobre suelo radiante.' },
  { name: 'Perfiles Romus de latón cepillado y aluminio', desc: 'En los umbrales y los cantos de escalón cuidamos el detalle. Coordinamos con tu herrajería existente, algo que cuenta en una casa con carácter. En obras algo exigentes podemos encargar perfiles a medida. Es el tipo de detalle que se nota en la entrega.' },
]

const marques = [
  { name: 'Gerflor', desc: 'El fabricante francés de Lyon que conocemos a fondo. Sus vinilos Mipolam y Taralay son nuestra referencia versátil en consultas, comercios y organismos públicos. Amplia gama, acústica seria, mantenimiento sencillo.' },
  { name: 'Tarkett', desc: 'Para espacios de oficinas y edificios públicos que requieren un verdadero confort acústico, optamos por Tarkett iQ Granit. Envejece bien y tolera el tránsito regular de la atención al público.' },
  { name: 'Forbo', desc: 'Cuando el proyecto pide algo natural, miramos a Forbo. Su Marmoleum es un auténtico linóleo fabricado con aceite de linaza. Las certificaciones medioambientales son sólidas y las destacamos a menudo en residencias de mayores y organismos públicos.' },
  { name: 'EGE Carpets', desc: 'El tejedor danés, nuestra referencia para una consulta o una sala de reuniones que impone. Sus losetas ya llevan la base acústica integrada, lo que facilita la instalación y suaviza el ambiente de la sala.' },
  { name: 'objectflor', desc: 'Para comercios y boutiques, sus lamas de vinilo efecto madera son una apuesta segura. El resultado es creíble, la instalación reversible es rápida y la resistencia al tránsito se mantiene con el tiempo.' },
  { name: 'Bostik', desc: 'Para adhesivos y soleras trabajamos con Bostik. Son productos fiables que garantizan una instalación duradera, sobre todo en los soportes antiguos de las casas con carácter.' },
  { name: 'objectflor Expona', desc: 'Cuando un comercio quiere un suelo de diseño que destaque sin sacrificar resistencia, sus gamas Expona cumplen. Efecto madera, hormigón o piedra, la elección es amplia y el resultado de alta gama.' },
  { name: 'Romus', desc: 'Para los accesorios de acabado, perfiles y cantos de escalón, Romus es nuestra referencia. Del latón cepillado al aluminio, siempre encontramos el acabado que encaja en un interior con carácter.' },
]

const quartiers = [
  { nom: 'Centro histórico', detail: 'Alrededor del castillo de los duques de La Trémoïlle, casas con carácter sobre el Thouet. Patrimonio notable, comercios y viviendas que acondicionar con esmero.' },
  { nom: 'Barrio del castillo', detail: 'Viviendas antiguas y casas señoriales sobre el valle. Proyectos de rehabilitación patrimonial y residencias de alto nivel.' },
  { nom: 'Orillas del Thouet', detail: 'Casas antiguas y viviendas con carácter a lo largo del río. Reformas residenciales respetuosas con la construcción original.' },
  { nom: 'Arrabales comerciales', detail: 'Calles comerciales y servicios del centro ampliado. Comercios, boutiques y consultas de profesiones liberales que modernizar.' },
  { nom: 'Parque empresarial', detail: 'Comercio, cooperativas y agroalimentario. Oficinas de empresa, espacios de recepción y locales de oficinas.' },
  { nom: 'Barrios residenciales', detail: 'Urbanizaciones recientes y casas familiares. Una clientela de propietarios que valora los acabados cuidados y el asesoramiento a medida.' },
  { nom: 'Sainte-Verge', detail: 'Un municipio limítrofe al norte, viviendas unifamiliares y casas de pueblo. Propietarios y pequeñas unidades de oficinas.' },
  { nom: 'Saint-Varent', detail: 'Un pueblo del Thouarsais, casas antiguas y viviendas con carácter. Proyectos de reforma residencial y vivienda patrimonial.' },
  { nom: 'Saint-Jean-de-Thouars', detail: 'Un municipio vecino de entorno residencial, casas familiares y viviendas antiguas. Reformas atentas a la calidad de ejecución.' },
  { nom: 'Louzy', detail: 'Un pueblo limítrofe, urbanizaciones y casas rurales renovadas. Una clientela residencial atenta a los acabados.' },
  { nom: "Argenton-l'Église", detail: 'Un municipio del Thouarsais en el límite con Maine-et-Loire. Casas familiares, reformas residenciales y viviendas antiguas.' },
  { nom: 'Oiron', detail: 'Un pueblo patrimonial famoso por su castillo. Casas con carácter y proyectos de reforma atentos a la construcción.' },
]

const process = [
  { step: 'Primer contacto', desc: 'Una llamada telefónica o un correo. Recopilamos los puntos clave: tipo de proyecto (casa con carácter, comercio, consulta, organismo público, residencia de mayores), superficie estimada, calendario deseado, posibles condicionantes patrimoniales o de establecimiento abierto al público. Definimos juntos los siguientes pasos y fijamos la fecha de la visita.' },
  { step: 'Visita a Thouars', desc: 'Una visita organizada desde Villedoux, a unas 2 h de coche. Medición láser, sondeo de los soportes antiguos, levantamiento de los accesos, fotos para coordinar colores y encuentros. Dada la distancia, esta visita sirve para dejarlo todo resuelto de una vez y preparar una instalación agrupada.' },
  { step: 'Elección del material', desc: 'El showroom de Villedoux o muestras enviadas directamente a Thouars, a tu domicilio o a la consulta. Validación final con la luz del lugar de instalación. Para residencias de mayores y organismos públicos, entrega de las fichas técnicas requeridas, los informes de reacción al fuego y las certificaciones medioambientales.' },
  { step: 'Fabricación en taller', desc: 'De 3 a 10 semanas según la gama: moqueta tejida, losetas, vinilo cortado, alfombras a medida. Premontaje en seco en el taller para validar el ajuste antes del transporte. Esta preparación previa es lo que nos permite mantener en Thouars una instalación agrupada, rápida y cuidada.' },
  { step: 'Instalación en Thouars', desc: 'Un equipo movilizado en la obra, alojamiento incluido en el presupuesto, un calendario adaptado a tu disponibilidad o a la ventana de la obra. Una instalación agrupada de una sola vez, y el equipo se queda hasta la entrega. Escalonamiento fuera de horas punta posible para comercios y consultas. Una limpieza completa al final.' },
]

const faq = [
  { q: '¿De verdad venís a Thouars desde La Rochelle?', a: 'Sí. Thouars está a unos 150 km, alrededor de 2 h por carretera. Dada la distancia, organizamos el trabajo con rigor: una visita de medición al inicio del proyecto para dejarlo todo resuelto y después volvemos a instalar de una sola vez una vez terminada la fabricación. El equipo se queda en la obra hasta la entrega. El alojamiento y los desplazamientos van incluidos en el presupuesto. No tienes que coordinar una serie de viajes de ida y vuelta.' },
  { q: '¿Cómo gestionáis la distancia hasta Thouars?', a: 'Con organización. No multiplicamos las visitas: una visita de medición que sirve para levantar todo y después una instalación agrupada. Durante la visita tomamos las medidas, sondeamos los soportes y resolvemos los colores y los accesos. La instalación se hace después de una sola vez, y el equipo se queda en la obra. El desplazamiento está controlado y valorado en el presupuesto, sin recargo oculto.' },
  { q: '¿Trabajáis en las casas con carácter del centro?', a: 'Por supuesto. Thouars es una ciudad de arte e historia, rica en casas con carácter alrededor del castillo de los duques de La Trémoïlle. Trabajamos allí de forma reversible siempre que es posible: instalamos sin clavar, sin pegados agresivos. Si dentro de diez años quieres rehacerlo todo, el suelo original estará intacto. Las moquetas de lana y las alfombras a medida encuentran allí su lugar.' },
  { q: '¿Cómo funciona en una residencia de mayores en cuanto a la normativa de establecimientos abiertos al público?', a: 'Las residencias de mayores se rigen por la normativa de establecimientos abiertos al público de tipo J. Hace falta Bfl-s1 o Cfl-s1 según la zona, productos que soporten la limpieza biológica y fichas de mantenimiento claras. Elegimos por ti los productos adecuados. Aportamos todos los informes de reacción al fuego y certificados para la comisión de seguridad. Y planificamos zona por zona para no perturbar la vida de los residentes.' },
  { q: '¿Trabajáis en los comercios del centro de la ciudad?', a: 'Sí. Para una boutique o un comercio, el suelo debe realzar tus productos, resistir el tránsito y respetar el carácter del lugar. Instalamos de noche o el día de cierre, así no pierdes ningún día de venta. Protegemos lo existente, limpiamos todo en la entrega y a la mañana siguiente reabres en un espacio listo para recibir a tus clientes.' },
  { q: '¿Cuánto dura un suelo de vinilo en un comercio o un organismo público?', a: 'Cuenta con quince a veinte años sin problema, a veces más. Un vinilo homogéneo envejece bien porque no tiene capa de desgaste que atravesar, es el mismo material de arriba abajo. En zonas muy transitadas, como una recepción o la entrada de un comercio, optamos por una clasificación de clase 34, que tolera mejor el tránsito. Una limpieza profesional al año basta para conservar el aspecto del primer día.' },
  { q: '¿Trabajáis con los organismos públicos de Thouars?', a: 'Sí. Ayuntamiento, equipamiento público, edificio municipal: estas obras exigen suelos conformes con las normas de establecimientos abiertos al público, fichas técnicas completas, informes de reacción al fuego y un escalonamiento que respete la atención al público. Estamos equipados para ello: documentación al día, diálogo con la oficina de inspección, un calendario adaptado a tus ventanas de obra. Dada la distancia, organizamos una instalación agrupada para limitar los viajes.' },
]

export default function RevetementSolThouarsPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/revetement-sol-thouars#service',
        name: 'Revestimiento de suelo en Thouars',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Thouars' },
          { '@type': 'AdministrativeArea', name: 'Deux-Sèvres' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Instalación de moqueta, vinilo y alfombras a medida en Thouars y en Deux-Sèvres',
        description: 'Diseño, fabricación en taller e instalación de moqueta, vinilo y alfombras a medida para casas con carácter, comercios, consultas, organismos públicos y residencias de mayores en Thouars, con desplazamientos organizados en forma de instalación agrupada.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Revestimiento de suelo en Thouars', item: 'https://cbsols.fr/es/revetement-sol-thouars' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="thouars" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revestimiento de suelo Thouars</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revestimiento de suelo en Thouars,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>cuidado del patrimonio.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Instalación de moqueta, vinilo y alfombras a medida en Thouars. Casas con carácter, comercios, consultas, organismos públicos, residencias de mayores. Un taller situado cerca de La Rochelle, desplazamientos controlados: una visita de medición y después una instalación agrupada hasta la entrega.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=thouars" variant="primary" size="md">Solicitar un presupuesto</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nos desplazamos hasta ti</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Thouars está a dos horas, pero eso no nos detiene. Nos organizamos: una visita para dejarlo todo resuelto y después una instalación agrupada de una sola vez. Es este método el que permite a CB Sols trabajar lejos, con seriedad, desde hace más de 28 años.&rdquo;
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
            Cuatro entornos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>un mismo rigor patrimonial.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un proyecto en Thouars?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Una visita a obra, un presupuesto detallado.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Contacto directo contigo, con tu arquitecto o con el responsable de tu establecimiento. Una visita de medición para dejarlo todo resuelto, un presupuesto detallado en 48 horas.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/es/contact?source=thouars-cta1" variant="primary" size="md">Solicitar un presupuesto</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Particularidades de Thouars</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Seis exigencias <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propias de los proyectos en Thouars.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Trabajar en Thouars no es repetir una obra estándar. La distancia exige una verdadera organización y el patrimonio pide respeto. Estos son los seis puntos sobre los que estructuramos nuestro método desde la primera visita.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materiales y gamas para Thouars</div>
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
              &ldquo;Una casa con carácter sobre el Thouet se trata con respeto. Instalamos de forma reversible, respetamos los suelos antiguos y organizamos la obra para venir una sola vez y hacerlo bien.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, propietario de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?source=thouars-citation" variant="primary" size="md">Pedir una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Una visita a obra en Thouars</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Fabricantes asociados</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Ocho casas de referencia <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>para tus proyectos en Thouars.</em>
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
            Thouars y el Thouarsais, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>hasta los municipios vecinos.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Nuestro equipo se desplaza por Thouars y por todo el Thouarsais, así como a los municipios vecinos, donde se concentran los proyectos residenciales patrimoniales, comerciales y sociosanitarios.
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un proyecto en mente?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Una llamada para despejar el terreno.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Veinte minutos por teléfono bastan para aclarar las gamas posibles, la organización del desplazamiento, un calendario realista y un orden de magnitud del presupuesto para tu obra en Thouars.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?source=thouars-cta2" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro método</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco etapas, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux a Thouars.</em>
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
            Revestimiento de suelo en Thouars, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas concretas.</em>
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
            ¿Otra pregunta? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>Llama a Valentin.</em>
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Hablas directamente con el propietario. Sin línea de atención, sin centralita. Un consejo claro, un orden de magnitud honesto y un siguiente paso solo si el proyecto tiene sentido para ti y para nosotros.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="Ver también"
        sectionSubtitle="Nuestra experiencia abarca otras ciudades y ámbitos que pueden interesarte. Tómate tu tiempo para explorar, haznos tus preguntas y te responderemos."
        items={[
          { href: '/es/revetement-sol-niort', title: 'Revestimiento de suelo Niort', teaser: 'Sedes sociales, casas de ciudad, residencias de mayores. Nuestra experiencia en el corazón de Deux-Sèvres.', icon: MapPin },
          { href: '/es/services', title: 'Nuestros servicios', teaser: 'Moqueta, suelo de vinilo, alfombras a medida, limpieza. Todo nuestro oficio al servicio de tu proyecto.', icon: Building2 },
          { href: '/es/particuliers', title: 'Para particulares', teaser: 'Moqueta, suelo de vinilo, alfombras a medida: nuestra experiencia al servicio de tu hogar.', icon: Home },
          { href: '/es/secteurs', title: 'Nuestros sectores', teaser: 'Oficinas, salud, hostelería, comercio. Soluciones pensadas para cada tipo de establecimiento.', icon: Castle },
          { href: '/es/realisations', title: 'Nuestros proyectos', teaser: 'Descubre en imágenes nuestras obras recientes. El resultado, los acabados, el detalle que cuenta.', icon: Store },
          { href: '/es/contact', title: 'Contáctanos', teaser: 'Una pregunta, un proyecto, un presupuesto en 48 horas. El propietario te responde directamente.', icon: Mail },
        ]}
      />

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Tu proyecto en Thouars <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>en buenas manos.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita a obra en Thouars. Un presupuesto detallado en 48 horas, acabados cuidados, una instalación agrupada y desplazamientos controlados. CB Sols, más de 28 años de experiencia al servicio de los proyectos en Deux-Sèvres.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=thouars-final" variant="primary" size="md">Solicitar un presupuesto</Button>
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
