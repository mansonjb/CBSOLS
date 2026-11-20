import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Castle, Home, Mail, MapPin, Stethoscope, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Revestimiento de suelo en La Roche-sur-Yon | Presupuesto gratuito en 48 h',
  description: 'Instalación de moqueta, vinilo y alfombras a medida en La Roche-sur-Yon. Oficinas y consultas, comercios del centro, residencias asistidas y residencias de mayores, casas señoriales por reformar. CB Sols lleva más de 28 años en el oficio, con desplazamiento organizado desde Villedoux.',
  alternates: {
    canonical: 'https://cbsols.fr/es/revetement-sol-la-roche-sur-yon',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-la-roche-sur-yon', en: 'https://cbsols.fr/en/revetement-sol-la-roche-sur-yon', es: 'https://cbsols.fr/es/revetement-sol-la-roche-sur-yon', },
  },
  keywords: ['revestimiento de suelo La Roche-sur-Yon', 'moqueta La Roche-sur-Yon', 'suelo de vinilo La Roche-sur-Yon', 'instalación de alfombras La Roche-sur-Yon', 'artesano de suelos La Roche-sur-Yon'],
  openGraph: {
    title: 'Revestimiento de suelo en La Roche-sur-Yon, la seriedad de la prefectura',
    description: 'Moqueta, vinilo y alfombras a medida en La Roche-sur-Yon. Oficinas, comercios, residencias asistidas, casas señoriales. CB Sols, más de 28 años de experiencia.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-la-roche-sur-yon.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Oficinas, consultas y profesiones liberales', desc: 'Recibe a sus clientes en una consulta del centro de La Roche-sur-Yon. Un suelo cuidado tranquiliza desde la sala de espera. Instalamos vinilo acústico en los espacios de trabajo y moqueta de lana en los despachos donde atiende. Acudimos cuando usted no está en consulta.' },
  { title: 'Comercios y boutiques del centro', desc: 'Dirige una boutique cerca de la place Napoléon o en una calle comercial. Instalamos de noche o el día de cierre, así que no pierde ni un día de venta. Un suelo resistente al tránsito, fácil de mantener y con un aspecto que realza sus productos.' },
  { title: 'Residencias asistidas y residencias de mayores', desc: 'Dirige una residencia asistida o una residencia medicalizada en La Roche-sur-Yon. Vinilo homogéneo Bfl-s1 en los pasillos, moqueta de lana en las habitaciones, antideslizante R10 en los baños. Aportamos los informes de reacción al fuego y la documentación de establecimiento abierto al público para la comisión de seguridad.' },
  { title: 'Casas señoriales y casas de ciudad por reformar', desc: 'Reforma una casa señorial en el centro de época napoleónica, a menudo sobre el plano pentagonal de la ciudad. El parqué antiguo es valioso. Instalamos una moqueta de lana o una alfombra a medida sin dañar la madera, con las juntas validadas con usted. Respetamos el carácter del lugar.' },
]

const exigences = [
  { title: 'Una visita agrupada y después una instalación programada', desc: 'La Roche-sur-Yon queda a una distancia considerable de nuestro taller. Por eso organizamos una visita de medición al inicio del proyecto y volvemos a instalar cuando la fabricación está terminada. No tiene que gestionar diez viajes de ida y vuelta, solo dos citas claras y un calendario cumplido.' },
  { title: 'Trabajamos cuando usted no trabaja', desc: 'En una oficina, una consulta o un comercio no podemos detener la actividad. Por eso venimos por la tarde, el fin de semana o el día de cierre. Usted reabre a la mañana siguiente con el suelo instalado y limpio. Ni un día de ingresos perdido.' },
  { title: 'Menos ruido, más calma', desc: 'En una oficina diáfana, una sala de espera o una consulta, el ruido cansa a todo el mundo. Una buena moqueta o un suelo de vinilo acústico reduce a la mitad el bullicio. Las conversaciones se oyen mejor y sus clientes esperan con tranquilidad. Se nota desde el primer día.' },
  { title: 'Respetamos el parqué antiguo', desc: 'Muchas casas señoriales del centro de La Roche-sur-Yon han conservado su parqué original. Instalamos sin clavar y sin pegados agresivos. Si dentro de diez años quiere retirar la moqueta, la madera de debajo estará intacta. Eso es respetar una buena casa.' },
  { title: 'De las normas nos ocupamos nosotros', desc: 'Residencia asistida, consulta, residencia, oficina abierta al público: existen reglas estrictas de seguridad contra incendios e higiene. Elegimos por usted los productos adecuados, aportamos los certificados y dialogamos con la oficina de control. No tiene que entender nada de las fichas técnicas.' },
  { title: 'Un único interlocutor de principio a fin', desc: 'En una obra ya tiene bastantes profesionales a los que seguir. Nosotros somos un único nombre en su agenda. Presupuesto, calendario, entrega, factura: todo pasa por la misma persona. Usted ahorra tiempo y siempre sabe con quién hablar.' },
]

const materiaux = [
  { name: 'Vinilo acústico Gerflor y Tarkett', desc: 'Lo instalamos mucho en las oficinas y consultas de La Roche-sur-Yon. La base absorbe el ruido de los pasos y sus clientes esperan con tranquilidad. La gama de colores es amplia y podemos adaptarla a su identidad. El suelo dura quince años sin problema, a menudo veinte.' },
  { name: 'Losetas de moqueta EGE y Forbo', desc: 'La elección acertada para una consulta, una administración o un despacho de dirección. Las losetas miden 50×50 cm. Si alguien derrama un café, sustituimos solo la loseta dañada. La base acústica suaviza la estancia. Obtiene de quince a veinte años en uso de oficina clásico.' },
  { name: 'Moqueta tejida de lana virgen', desc: 'Para los salones de las casas señoriales del centro de La Roche-sur-Yon. La lana coge pátina con el tiempo y no se aplasta. Al tacto es firme y a la vista destaca. Elegimos con usted un modelo liso o un motivo discreto que respete las carpinterías antiguas.' },
  { name: 'Vinilo homogéneo para residencias asistidas', desc: 'En los pasillos y las habitaciones de residencias asistidas apostamos por el vinilo homogéneo. Es el mismo material de arriba abajo, así que no hay capa de uso que se pueda atravesar. Soldamos las láminas en caliente y el agua no pasa por ningún sitio. Tiene por delante de veinte a veintiocho años, incluso con mucho tránsito.' },
  { name: 'Vinilo efecto madera para comercios', desc: 'Para una boutique o un comercio del centro, el vinilo efecto madera hace maravillas. El resultado visual es convincente, el suelo resiste el tránsito y se limpia en cinco minutos. Incluso podemos instalarlo sobre suelo radiante. La instalación es rápida y limpia.' },
  { name: 'Perfiles Romus de latón cepillado y aluminio', desc: 'En los umbrales y los cantos de escalón cuidamos el detalle. Coordinamos con sus herrajes existentes, algo que cuenta mucho en una casa antigua. En obras algo exigentes podemos encargar perfiles a medida. Es el tipo de detalle que se aprecia en la entrega.' },
]

const marques = [
  { name: 'Gerflor', desc: 'El fabricante francés con sede en Lyon que conocemos a fondo. Sus vinilos Mipolam y Taralay son nuestra referencia versátil en las oficinas y comercios de La Roche-sur-Yon. Una amplia gama, una acústica seria y un mantenimiento sencillo.' },
  { name: 'Tarkett', desc: 'Para consultas y espacios de oficina que exigen un verdadero confort acústico, apostamos por Tarkett iQ Granit. Envejece bien y sigue siendo nuestra referencia en suelos con tránsito regular.' },
  { name: 'Forbo', desc: 'Cuando el proyecto pide algo natural, miramos a Forbo. Su Marmoleum es un auténtico linóleo elaborado con aceite de linaza. Las certificaciones medioambientales son sólidas y las destacamos a menudo en residencias asistidas y consultas.' },
  { name: 'EGE Carpets', desc: 'El tejedor danés, nuestra referencia para un despacho de dirección que impone. Sus losetas ya llevan la base acústica integrada, lo que facilita la instalación. Las recomendamos para consultas y salas de reuniones.' },
  { name: 'objectflor', desc: 'Para comercios y boutiques del centro, sus lamas de vinilo efecto madera son una apuesta segura. El resultado es creíble, la instalación es rápida y la resistencia al tránsito se mantiene con el tiempo.' },
  { name: 'Bostik', desc: 'Para adhesivos y soleras trabajamos con Bostik. Son productos fiables que garantizan una instalación duradera, sobre todo en los soportes antiguos o irregulares de las casas señoriales.' },
  { name: 'objectflor Expona', desc: 'Cuando un comercio quiere un suelo de diseño que destaque sin sacrificar la resistencia, sus gamas Expona cumplen. Efecto madera, hormigón o piedra, la elección es amplia y el resultado, de gama alta.' },
  { name: 'Romus', desc: 'Para los accesorios de acabado, perfiles y cantos de escalón, Romus es nuestra referencia. Del latón cepillado al aluminio, siempre encontramos el acabado que encaja con su interior.' },
]

const quartiers = [
  { nom: 'Centro de la ciudad', detail: 'Place Napoléon, el plano pentagonal, calles comerciales. Comercios, consultas de profesiones liberales, administraciones y casas señoriales por reformar.' },
  { nom: 'Barrio de la estación', detail: 'Un polo de oficinas y de intercambio de transportes, con oficinas y profesiones liberales. Espacios de trabajo y locales de recepción por acondicionar.' },
  { nom: 'Les Pyramides', detail: 'Un barrio residencial y de servicios. Consultas, comunidades de propietarios y casas familiares en proceso de modernización.' },
  { nom: 'Le Bourg-sous-La-Roche', detail: 'Un antiguo pueblo integrado en la ciudad, con viviendas tradicionales y residenciales. Casas con carácter y proyectos de reforma.' },
  { nom: 'Polígono Acti-Sud', detail: 'Un polo de oficinas e industria al sur de la ciudad. Oficinas de empresa, salas de reuniones y espacios de recepción.' },
  { nom: 'Barrio de Vigne-aux-Roses', detail: 'Un sector residencial y de servicios. Urbanizaciones, casas familiares y pequeñas unidades de oficinas.' },
  { nom: 'Aubépin', detail: 'Un barrio residencial y local. Comunidades de propietarios, consultas y casas independientes por modernizar.' },
  { nom: 'Mouilleron-le-Captif', detail: 'Una localidad vecina en plena expansión, con zonas empresariales y viviendas recientes. Oficinas, comercios y residencias contemporáneas.' },
  { nom: 'La Roche-sur-Yon norte', detail: 'Barrios residenciales y urbanizaciones recientes. Una clientela de propietarios apegada a los acabados cuidados.' },
  { nom: 'Dompierre-sur-Yon', detail: 'Una localidad colindante, con viviendas independientes y pequeñas unidades de oficinas. Consultas y casas familiares.' },
  { nom: 'Aizenay', detail: 'Una localidad dinámica al noroeste de la aglomeración. Comercios, consultas y casas con carácter por reformar.' },
  { nom: 'La Ferrière', detail: 'Una localidad residencial de la aglomeración de La Roche-sur-Yon. Urbanizaciones, casas familiares y locales profesionales.' },
]

const process = [
  { step: 'Primer contacto', desc: 'Una llamada telefónica o un correo. Recogemos los puntos clave: tipo de proyecto (oficina, comercio, residencia asistida, casa señorial), superficie estimada, calendario deseado y posibles restricciones de establecimiento abierto al público. Definimos juntos los siguientes pasos y fijamos la fecha de la visita.' },
  { step: 'Visita a La Roche-sur-Yon', desc: 'Una visita organizada desde Villedoux, a unas 1h45 de trayecto. Medición con láser, revisión de las restricciones de acceso y fotos para coordinar colores y juntas. En comercios y consultas, identificamos las franjas de trabajo fuera de horas de actividad.' },
  { step: 'Elección de materiales', desc: 'El showroom de Villedoux o muestras enviadas directamente a La Roche-sur-Yon, a su domicilio o a la consulta. Validación final con la luz del lugar de instalación. Para residencias asistidas, entrega de las fichas técnicas requeridas, los informes de reacción al fuego y las certificaciones medioambientales.' },
  { step: 'Fabricación en el taller', desc: 'De 3 a 10 semanas según la gama: moqueta tejida, losetas, vinilo cortado, alfombras a medida. Premontaje en seco en el taller para validar el ajuste antes del transporte. Esta preparación previa es lo que nos permite mantener una instalación final rápida y cuidada en La Roche-sur-Yon.' },
  { step: 'Instalación en La Roche-sur-Yon', desc: 'Un equipo movilizado en obra, con alojamiento incluido en el presupuesto y un calendario ajustado a su disponibilidad o a la ventana de la obra. Posibilidad de trabajar por fases fuera de horas de actividad en comercios y consultas en funcionamiento. Limpieza completa en la entrega.' },
]

const faq = [
  { q: '¿De verdad vienen a La Roche-sur-Yon desde La Rochelle?', a: 'Sí. La Roche-sur-Yon queda a unos 140 km, alrededor de 1h45 por carretera. Organizamos la visita de medición al inicio del proyecto y volvemos a instalar cuando la fabricación está terminada. El alojamiento y los desplazamientos están incluidos en el presupuesto. En obras más grandes, el equipo se queda en el lugar hasta la entrega. No tiene que coordinar una serie de viajes de ida y vuelta, solo dos citas claras.' },
  { q: '¿Trabajan en las oficinas y consultas de la prefectura?', a: 'Sí, es uno de nuestros terrenos naturales. La Roche-sur-Yon concentra administraciones, consultas de profesiones liberales y oficinas de empresa. Eso exige un suelo cuidado y un trabajo limpio. Instalamos vinilo acústico en los espacios de trabajo y moqueta de lana donde usted recibe. Venimos cuando no está en consulta y usted reabre al día siguiente en un entorno impecable.' },
  { q: '¿Cómo funciona en una residencia asistida en cuanto a la normativa de establecimientos abiertos al público?', a: 'Las residencias asistidas están sujetas a la normativa de establecimientos abiertos al público de tipo J. Se necesita Bfl-s1 o Cfl-s1 según la zona, productos que soporten la limpieza biológica y fichas de mantenimiento claras. Elegimos por usted los productos adecuados. Aportamos todos los informes de reacción al fuego y los certificados para la comisión de seguridad. Y planificamos zona por zona para no alterar la vida de los residentes.' },
  { q: '¿Trabajan en las casas señoriales del centro?', a: 'Por supuesto. El centro de La Roche-sur-Yon, una ciudad de época napoleónica con plano pentagonal, concentra bellas casas señoriales, a menudo con su parqué original. Allí trabajamos de forma reversible siempre que es posible: instalamos sin clavar y sin pegados agresivos. Si dentro de diez años quiere rehacerlo todo, la madera de debajo estará intacta. Las moquetas de lana y las alfombras a medida encuentran allí su lugar.' },
  { q: '¿Trabajan en los comercios del centro?', a: 'Sí. Para una boutique o un comercio, el suelo debe realzar sus productos y resistir el tránsito. Instalamos de noche o el día de cierre, así que no pierde ni un día de venta. Protegemos lo existente, limpiamos todo en la entrega y a la mañana siguiente usted reabre en un espacio listo para recibir a sus clientes.' },
  { q: '¿Cuánto dura un suelo de vinilo en una oficina o un comercio?', a: 'Cuente con quince a veinte años sin problema, a veces más. Un vinilo homogéneo envejece bien porque no tiene capa de uso que se pueda atravesar, es el mismo material de arriba abajo. En zonas con mucho tránsito, como una recepción o la entrada de un comercio, elegimos una clasificación de clase 34, que tolera mejor el tránsito. Una limpieza profesional al año basta para mantener el aspecto del primer día.' },
  { q: '¿Pueden instalar fuera de horas de actividad en una oficina o un comercio en funcionamiento?', a: 'Sí, es incluso lo habitual en este tipo de obras. Organizamos el trabajo por la tarde, el fin de semana o el día de cierre, según su ritmo. Premontamos todo lo posible en el taller de Villedoux, de modo que la instalación en obra sea rápida. Protegemos su mobiliario y sus puestos de trabajo antes de empezar. Al día siguiente usted retoma la actividad con normalidad, con el suelo instalado y limpio.' },
]

export default function RevetementSolLaRocheSurYonPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/revetement-sol-la-roche-sur-yon#service',
        name: 'Revestimiento de suelo en La Roche-sur-Yon',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'La Roche-sur-Yon' },
          { '@type': 'AdministrativeArea', name: 'Vendée' },
          { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
        ],
        serviceType: 'Instalación de moqueta, vinilo y alfombras a medida en La Roche-sur-Yon y Vendée',
        description: 'Diseño, fabricación en taller e instalación de moqueta, vinilo y alfombras a medida para oficinas, consultas, comercios, residencias asistidas y casas señoriales en La Roche-sur-Yon.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Revestimiento de suelo en La Roche-sur-Yon', item: 'https://cbsols.fr/es/revetement-sol-la-roche-sur-yon' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="la-roche-sur-yon" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revestimiento de suelo La Roche-sur-Yon</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revestimiento de suelo en La Roche-sur-Yon,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>la seriedad de la prefectura.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Instalación de moqueta, vinilo y alfombras a medida en La Roche-sur-Yon. Oficinas y consultas de profesiones liberales, comercios del centro, residencias asistidas y residencias de mayores, casas señoriales por reformar. Un taller situado cerca de La Rochelle, con desplazamiento organizado en una visita agrupada y después una instalación programada.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=la-roche-sur-yon" variant="primary" size="md">Solicitar un presupuesto</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nos desplazamos hasta usted</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;La Roche-sur-Yon es una ciudad de oficinas, consultas y administraciones. Venimos con un método sencillo: una visita de medición y después una instalación agrupada. El desplazamiento está controlado y el calendario se cumple, como CB Sols lleva haciendo más de 28 años.&rdquo;
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un proyecto en La Roche-sur-Yon?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Una visita a obra, un presupuesto detallado.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Contacto directo con usted, con el responsable de su establecimiento o con su arquitecto. Una visita de medición organizada con rapidez y un presupuesto detallado en 48 horas.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/es/contact?source=la-roche-sur-yon-cta1" variant="primary" size="md">Solicitar un presupuesto</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Particularidades de La Roche-sur-Yon</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Seis exigencias <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propias de los proyectos en La Roche-sur-Yon.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Trabajar en La Roche-sur-Yon no es repetir una obra estándar. Estos son los seis puntos sobre los que estructuramos nuestro método desde la primera visita, para cumplir el calendario y controlar el desplazamiento.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materiales y gamas para La Roche-sur-Yon</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Las familias de productos <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que llevamos a Vendée.</em>
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
              &ldquo;Una consulta, una administración, una residencia asistida, una casa señorial del centro: cada una tiene sus restricciones. Las tomamos en serio desde la primera visita y cumplimos el calendario que anunciamos.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, propietario de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?source=la-roche-sur-yon-citation" variant="primary" size="md">Pedir una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Una visita a obra en La Roche-sur-Yon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Fabricantes asociados</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Ocho casas de referencia <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>para sus proyectos en La Roche-sur-Yon.</em>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Barrios y localidades donde trabajamos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            La Roche-sur-Yon y su aglomeración, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>hasta las localidades vecinas.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Nuestro equipo se desplaza por La Roche-sur-Yon y toda su aglomeración, así como por las localidades vecinas, donde se concentran los proyectos de oficinas, comercio, salud y acción social, y vivienda.
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
            Veinte minutos por teléfono bastan para aclarar las gamas posibles, un calendario realista y un orden de magnitud del presupuesto para su obra en La Roche-sur-Yon.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?source=la-roche-sur-yon-cta2" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro método</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco pasos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux a La Roche-sur-Yon.</em>
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
            Revestimiento de suelo en La Roche-sur-Yon, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas concretas.</em>
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
            Contacto directo con el propietario. Sin línea de atención, sin centralita. Un consejo claro, un orden de magnitud honesto y un siguiente paso solo si el proyecto tiene sentido para usted y para nosotros.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="Ver también"
        sectionSubtitle="Nuestra experiencia abarca otras localidades y ámbitos que pueden interesarle. Tómese su tiempo para explorar y plantear sus preguntas, le responderemos."
        items={[
          { href: '/es/ile-de-re', title: 'Île de Ré', teaser: 'Casas de pueblo y villas costeras. Suelos que aguantan la sal, la arena y la vida diaria.', icon: MapPin },
          { href: '/es/revetement-sol-cap-ferret', title: 'Revestimiento de suelo Cap Ferret', teaser: 'Villas de la bahía de Arcachon. Suelos que resisten la sal, la arena y la luz del océano.', icon: MapPin },
          { href: '/es/particuliers', title: 'Para particulares', teaser: 'Moqueta, suelo de vinilo, alfombras a medida: nuestra experiencia al servicio de su hogar.', icon: Home },
          { href: '/es/secteurs', title: 'Nuestros sectores', teaser: 'Oficinas, salud, hostelería, comercio. Soluciones pensadas para cada tipo de establecimiento.', icon: Castle },
          { href: '/es/realisations', title: 'Nuestras realizaciones', teaser: 'Descubra nuestras obras recientes en imágenes. El resultado, los acabados, el detalle que cuenta.', icon: Store },
          { href: '/es/contact', title: 'Contáctenos', teaser: 'Una pregunta, un proyecto, un presupuesto en 48 horas. El propietario le responde directamente.', icon: Mail },
        ]}
      />

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Su proyecto en La Roche-sur-Yon <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>en buenas manos.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita a obra en La Roche-sur-Yon. Un presupuesto detallado en 48 horas, acabados cuidados, desplazamiento controlado y un calendario cumplido. CB Sols, más de 28 años de experiencia al servicio de los proyectos en Vendée.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=la-roche-sur-yon-final" variant="primary" size="md">Solicitar un presupuesto</Button>
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
