import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Castle, Home, Mail, MapPin, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Revestimiento de suelo en Bressuire | Presupuesto gratuito en 48 h',
  description: 'Colocación de moqueta, vinilo y alfombras a medida en Bressuire. Oficinas y despachos, comercios del centro, residencias de ancianos y residencias para mayores, casas de pueblo por renovar. CB Sols lleva más de 28 años en el oficio, desplazamientos organizados desde Villedoux.',
  alternates: {
    canonical: 'https://cbsols.fr/es/revetement-sol-bressuire',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-bressuire', en: 'https://cbsols.fr/en/revetement-sol-bressuire', es: 'https://cbsols.fr/es/revetement-sol-bressuire', },
  },
  keywords: ['revestimiento de suelo Bressuire', 'moqueta Bressuire', 'suelo de vinilo Bressuire', 'colocación de alfombras Bressuire', 'artesano del suelo Bressuire'],
  openGraph: {
    title: 'Revestimiento de suelo en Bressuire, la seriedad del Bocage',
    description: 'Moqueta, vinilo y alfombras a medida en Bressuire. Oficinas, comercios, residencias de ancianos, casas de pueblo. CB Sols, más de 28 años de experiencia.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-bressuire.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Oficinas y despachos de profesiones liberales', desc: 'Recibe a sus clientes en un despacho del centro de Bressuire. Un suelo cuidado tranquiliza ya desde la sala de espera. Colocamos vinilo acústico en los espacios de trabajo y moqueta de lana en los despachos donde recibe. Venimos cuando no está pasando consulta.' },
  { title: 'Comercios y boutiques del centro', desc: 'Dirige una boutique cerca de la place Notre-Dame o en una calle comercial. Colocamos de noche o el día de cierre, no pierde ningún día de actividad. Un suelo resistente al tránsito, fácil de mantener, y un aspecto que luce sus productos.' },
  { title: 'Residencias de ancianos y residencias para mayores', desc: 'Dirige una residencia de ancianos o una residencia medicalizada en el Bocage. Vinilo homogéneo Bfl-s1 en los pasillos, moqueta de lana en las habitaciones, antideslizante R10 en los baños. Aportamos los informes contra incendios y la documentación de edificio público para la comisión de seguridad.' },
  { title: 'Casas de pueblo en granito por renovar', desc: 'Renueva una casa burguesa de granito del Bocage de Bressuire. El parqué antiguo es valioso. Colocamos una moqueta de lana o una alfombra a medida sin dañar la madera, con juntas validadas con usted. Respetamos el carácter del lugar.' },
]

const exigences = [
  { title: 'Una visita agrupada, luego una colocación fijada', desc: 'Bressuire está a una buena distancia de nuestro taller. Por eso organizamos una visita de medición al inicio del proyecto, y luego volvemos a colocar una vez terminada la fabricación. No tiene que gestionar diez idas y vueltas, solo dos citas claras y un calendario cumplido.' },
  { title: 'Respetamos el parqué antiguo', desc: 'Muchas casas de pueblo de Bressuire han conservado su parqué original. Colocamos sin clavar, sin encolados agresivos. Si quiere retirar la moqueta dentro de diez años, la madera de debajo estará intacta. Eso es lo que significa respetar una casa noble.' },
  { title: 'Trabajamos cuando usted no trabaja', desc: 'En un comercio o un despacho, no podemos interrumpir la actividad. Por eso venimos por la tarde, el fin de semana o el día de cierre. Reabre a la mañana siguiente, el suelo colocado y limpio. Sin perder un día de ingresos.' },
  { title: 'Menos ruido, más calma', desc: 'En un espacio diáfano o una sala de espera, el ruido cansa a todo el mundo. Una buena moqueta o un suelo de vinilo acústico corta la mitad del bullicio. Las conversaciones se oyen mejor, sus clientes esperan con calma. Lo nota desde el primer día.' },
  { title: 'Las normativas, las gestionamos', desc: 'Residencia de ancianos, despacho, residencia: hay reglas estrictas de seguridad contra incendios e higiene. Elegimos los productos adecuados por usted, aportamos los certificados, dialogamos con la oficina de control. Usted no tiene que entender nada de las fichas técnicas.' },
  { title: 'Un único interlocutor, de principio a fin', desc: 'En una obra, ya tiene suficientes empresas a las que seguir. Nosotros somos un único nombre en su agenda. Presupuesto, calendario, entrega, factura: todo pasa por la misma persona. Gana tiempo y siempre sabe con quién hablar.' },
]

const materiaux = [
  { name: 'Vinilo acústico Gerflor y Tarkett', desc: 'Colocamos mucho en las oficinas y despachos de Bressuire. La base absorbe el ruido de los pasos, sus clientes esperan con calma. La gama de colores es amplia, podemos alinearnos con su identidad. El suelo dura quince años con facilidad, a menudo veinte.' },
  { name: 'Losetas de moqueta EGE y Forbo', desc: 'La elección adecuada para un despacho o una oficina de dirección. Las losetas son de 50×50 cm. Si alguien derrama un café, reemplazamos solo la loseta dañada. La base acústica suaviza la estancia. Obtiene de quince a veinte años en uso de oficina clásico.' },
  { name: 'Moqueta de lana virgen tejida', desc: 'Para los salones de las casas de pueblo de granito del centro. La lana adquiere pátina al envejecer, no se aplasta. Al tacto es firme, a la vista resalta. Elegimos con usted un liso o un motivo discreto para respetar la carpintería antigua.' },
  { name: 'Vinilo homogéneo para residencias de ancianos', desc: 'En los pasillos y habitaciones de residencias de ancianos, optamos por vinilo homogéneo. Es el mismo material de arriba abajo, así que no hay capa de uso que se desgaste. Soldamos las láminas en caliente, el agua no se cuela por ningún sitio. Veinte a veintiocho años por delante, incluso con tránsito intenso.' },
  { name: 'Vinilo efecto madera para comercios', desc: 'Para una boutique o un comercio del centro, el vinilo efecto madera hace maravillas. El resultado visual es convincente, el suelo resiste el tránsito y se limpia en cinco minutos. Incluso podemos colocarlo sobre suelo radiante. La colocación es rápida y limpia.' },
  { name: 'Perfiles Romus de latón cepillado y aluminio', desc: 'Para los umbrales y los peldaños de escalera, cuidamos el detalle. Coordinamos con su herrería existente, que cuenta en una casa antigua. En obras algo exigentes, podemos encargarlos a medida. Es el tipo de detalle que se nota en la entrega.' },
]

const marques = [
  { name: 'Gerflor', desc: 'El fabricante francés de Lyon que conocemos a fondo. Sus vinilos Mipolam y Taralay son nuestra referencia versátil en las oficinas y comercios de Bressuire. Una amplia variedad, una acústica seria, un mantenimiento sencillo.' },
  { name: 'Tarkett', desc: 'Para los despachos y espacios de oficina que exigen un verdadero confort acústico, optamos por Tarkett iQ Granit. Envejece bien y sigue siendo nuestra referencia en suelos con tránsito regular.' },
  { name: 'Forbo', desc: 'Cuando el proyecto pide algo natural, miramos hacia Forbo. Su Marmoleum es un auténtico linóleo elaborado con aceite de linaza. Las certificaciones medioambientales son sólidas, lo sacamos a menudo en residencias de ancianos y despachos.' },
  { name: 'EGE Carpets', desc: 'El tejedor danés, nuestra referencia para una oficina de dirección que imponga. Sus losetas ya llevan la base acústica integrada, lo que facilita la colocación. Las recomendamos para despachos y salas de reuniones.' },
  { name: 'objectflor', desc: 'Para los comercios y boutiques del centro, sus lamas de vinilo efecto madera son una apuesta segura. El resultado es creíble, la colocación va rápida, y la resistencia al tránsito aguanta con el tiempo.' },
  { name: 'Bostik', desc: 'Para adhesivos y morteros, trabajamos con Bostik. Son productos fiables que garantizan una colocación duradera, sobre todo en los soportes antiguos o irregulares de las casas de pueblo.' },
  { name: 'objectflor Expona', desc: 'Cuando un comercio quiere un suelo de diseño que destaque sin sacrificar la resistencia, sus gamas Expona cumplen. Efecto madera, hormigón o piedra, la elección es amplia y el resultado de alta gama.' },
  { name: 'Romus', desc: 'Para los accesorios de acabado, perfiles y peldaños de escalera, Romus es nuestra referencia. Del latón cepillado al aluminio, siempre encontramos el acabado que encaja con su interior.' },
]

const quartiers = [
  { nom: 'Centro', detail: 'Place Notre-Dame, calles comerciales, el castillo de Bressuire. Comercios, despachos de profesiones liberales, casas burguesas de granito por renovar.' },
  { nom: 'Barrio del castillo', detail: 'Alrededor de las ruinas medievales, casas con carácter y viviendas antiguas. Proyectos de renovación patrimonial y residencias de nivel.' },
  { nom: 'Polígono de actividad del Bocage', detail: 'Cooperativas, agroalimentaria, plataformas logísticas. Oficinas de empresa, salas de reuniones y espacios de recepción por acondicionar.' },
  { nom: 'Barrios residenciales del norte', detail: 'Promociones recientes y viviendas familiares. Una clientela de particulares apegada a los acabados cuidados y al asesoramiento a medida.' },
  { nom: 'Arrabales del sur', detail: 'Viviendas unifamiliares y pequeñas unidades de oficina. Despachos, copropiedades y casas unifamiliares en modernización.' },
  { nom: 'Cerizay', detail: 'Un polo industrial y agroalimentario al norte de Bressuire. Oficinas de empresa, espacios de recepción y locales de oficina.' },
  { nom: 'Mauléon', detail: 'Una ciudad dinámica en el límite de los Deux-Sèvres y la Vendée. Comercios, despachos y casas con carácter por renovar.' },
  { nom: 'Argentonnay', detail: 'Un pueblo patrimonial y casas antiguas de piedra. Proyectos de renovación residencial y restauración de edificios antiguos.' },
  { nom: 'Nueil-les-Aubiers', detail: 'Una ciudad residencial y artesanal del Bocage. Promociones, viviendas familiares y pequeños locales comerciales.' },
  { nom: 'La Forêt-sur-Sèvre', detail: 'Un entorno rural verde, casas de campo y antiguas longères renovadas. Proyectos residenciales con carácter apegados a la calidad de ejecución.' },
  { nom: 'Boismé', detail: 'Un municipio limítrofe, viviendas unifamiliares y casas de pueblo. Una clientela residencial atenta a los acabados y al asesoramiento.' },
  { nom: 'Chiché', detail: 'Un pequeño pueblo del Bocage entre Bressuire y Parthenay. Viviendas familiares, renovaciones residenciales y viviendas antiguas.' },
]

const process = [
  { step: 'Primer contacto', desc: 'Una llamada o un correo. Recopilación de los puntos clave: tipo de proyecto (oficina, comercio, residencia de ancianos, casa de pueblo), superficie estimada, calendario deseado, posibles condicionantes de edificio público. Enmarcamos los siguientes pasos juntos y fijamos la fecha de la visita.' },
  { step: 'Visita a Bressuire', desc: 'Una visita organizada desde Villedoux, a aproximadamente 1h30 de carretera. Medición con láser, un estudio de los condicionantes de acceso, fotos para coordinar los colores y las juntas. Para comercios y despachos, identificamos las ventanas de trabajo fuera de horas punta.' },
  { step: 'Elección del material', desc: 'El showroom de Villedoux o muestras enviadas directamente a Bressuire, a su domicilio o al despacho. Validación final bajo la luz del lugar de colocación. Para las residencias de ancianos, transmisión de las fichas técnicas requeridas, informes contra incendios y certificaciones medioambientales.' },
  { step: 'Fabricación en taller', desc: '3 a 10 semanas según la gama: moqueta tejida, losetas, vinilo cortado, alfombras a medida. Premontaje en seco en el taller para validar el ajuste antes del transporte. Esta preparación previa es lo que nos permite mantener una colocación final rápida y cuidada en Bressuire.' },
  { step: 'Colocación en Bressuire', desc: 'Un equipo movilizado in situ, alojamiento incluido en el presupuesto, un calendario fijado según su disponibilidad o la ventana de obra. Faseado fuera de horas punta posible para comercios y despachos en funcionamiento. Una limpieza completa en la entrega.' },
]

const faq = [
  { q: '¿De verdad vienen a Bressuire desde La Rochelle?', a: 'Sí. Bressuire está a unos 110 km, alrededor de 1h30 por carretera. Organizamos la visita de medición al inicio del proyecto, y luego volvemos a colocar una vez terminada la fabricación. El alojamiento y el desplazamiento están incluidos en el presupuesto. En las obras más grandes, el equipo se queda in situ hasta la entrega. No tiene que coordinar una serie de idas y vueltas, solo dos citas claras.' },
  { q: '¿Trabajan en las oficinas y despachos del centro?', a: 'Sí, es uno de nuestros terrenos naturales. Un despacho de profesión liberal, una oficina de empresa, exige un suelo cuidado y un trabajo limpio. Colocamos vinilo acústico en los espacios de trabajo y moqueta de lana donde recibe. Venimos cuando no está pasando consulta, reabre al día siguiente en un entorno impecable.' },
  { q: '¿Trabajan en las casas de pueblo de granito?', a: 'Por supuesto. El centro de Bressuire y el Bocage concentran bellas casas burguesas de granito, a menudo con su parqué original. Trabajamos allí de forma reversible siempre que es posible: colocamos sin clavar, sin encolados agresivos. Si quiere rehacerlo todo dentro de diez años, la madera de debajo estará intacta. Las moquetas de lana y las alfombras a medida encuentran allí su sitio.' },
  { q: '¿Cómo funciona en una residencia de ancianos en cuanto a edificio público?', a: 'Las residencias de ancianos están reguladas como edificios públicos de tipo J. Requiere Bfl-s1 o Cfl-s1 por zona, productos que soporten la biolimpieza, fichas de mantenimiento claras. Elegimos los productos adecuados por usted. Aportamos todos los informes contra incendios y certificados para la comisión de seguridad. Y planificamos zona por zona para no perturbar la vida de los residentes.' },
  { q: '¿Trabajan en los comercios del centro?', a: 'Sí. Para una boutique o un comercio, el suelo debe realzar sus productos y resistir el tránsito. Colocamos de noche o el día de cierre, no pierde ningún día de actividad. Protegemos lo existente, lo limpiamos todo en la entrega, y a la mañana siguiente reabre en un espacio listo para recibir a sus clientes.' },
  { q: '¿Cuánto dura un suelo de vinilo en una oficina o un comercio?', a: 'Prevea de quince a veinte años con facilidad, a veces más. Un vinilo homogéneo envejece bien porque no tiene capa de uso que se desgaste, es el mismo material de arriba abajo. En las zonas muy transitadas como una recepción o una entrada de comercio, elegimos una clasificación clase 34, que tolera mejor el tránsito. Una limpieza profesional una vez al año basta para mantener el aspecto del primer día.' },
  { q: '¿Pueden colocar fuera de horas punta en un comercio en funcionamiento?', a: 'Sí, es incluso la norma en este tipo de obra. Organizamos el trabajo por la tarde, el fin de semana o el día de cierre, según su ritmo. Premontamos todo lo posible en el taller de Villedoux, de modo que la colocación in situ va rápido. Protegemos sus estanterías y mobiliario antes de empezar. Al día siguiente, retoma la actividad con normalidad, el suelo colocado y limpio.' },
]

export default function RevetementSolBressuirePageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/revetement-sol-bressuire#service',
        name: 'Revestimiento de suelo en Bressuire',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Bressuire' },
          { '@type': 'AdministrativeArea', name: 'Deux-Sèvres' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Colocación de moqueta, vinilo y alfombras a medida en Bressuire y los Deux-Sèvres',
        description: 'Diseño, fabricación en taller y colocación de moqueta, vinilo y alfombras a medida para oficinas, despachos, comercios, residencias de ancianos y casas de pueblo en Bressuire.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Revestimiento de suelo en Bressuire', item: 'https://cbsols.fr/es/revetement-sol-bressuire' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="bressuire" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revestimiento de suelo Bressuire</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revestimiento de suelo en Bressuire,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>la seriedad del Bocage.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Colocación de moqueta, vinilo y alfombras a medida en Bressuire. Oficinas y despachos de profesiones liberales, comercios del centro, residencias de ancianos y residencias para mayores, casas de pueblo de granito por renovar. Un taller con sede cerca de La Rochelle, desplazamiento organizado como visita agrupada y luego colocación fijada.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=bressuire" variant="primary" size="md">Solicitar un presupuesto</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nos desplazamos hasta usted</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Bressuire y el Bocage son una tierra de trabajo serio. Venimos con un método sencillo: una visita de medición, y luego una colocación agrupada. El desplazamiento está dominado y el calendario se cumple, como CB Sols lo hace desde hace más de 28 años.&rdquo;
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
            Cuatro escenarios, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>un mismo rigor de ejecución.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un proyecto en Bressuire?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Una visita de obra, un presupuesto detallado.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Contacto directo con usted, el responsable de su establecimiento o su arquitecto. Una visita de medición organizada con rapidez, un presupuesto detallado en 48 horas.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/es/contact?source=bressuire-cta1" variant="primary" size="md">Solicitar un presupuesto</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Particularidades de Bressuire</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Seis exigencias <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propias de los proyectos de Bressuire.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Trabajar en Bressuire no es reproducir una obra estándar. Aquí están los seis puntos sobre los que estructuramos nuestro método desde la primera visita, para cumplir el calendario y dominar el desplazamiento.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materiales y gamas para Bressuire</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Las familias de productos <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que llevamos a los Deux-Sèvres.</em>
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
              &ldquo;Una casa de pueblo de granito, un despacho, una residencia de ancianos del Bocage: cada uno tiene sus condicionantes. Los tomamos en serio desde la primera visita, y cumplimos el calendario que anunciamos.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, propietario de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?source=bressuire-citation" variant="primary" size="md">Pedir una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Una visita de obra en Bressuire</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Fabricantes asociados</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Ocho casas de referencia <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>para sus proyectos en Bressuire.</em>
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
            Bressuire y el Bocage, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>hasta los municipios vecinos.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Nuestro equipo se desplaza por Bressuire y por todo el Bocage de Bressuire, así como por los municipios vecinos, donde se concentran los proyectos residenciales, comerciales y sociosanitarios.
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
            Veinte minutos por teléfono bastan para aclarar las gamas posibles, un calendario realista y un orden de magnitud de presupuesto para su obra en Bressuire.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?source=bressuire-cta2" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro método</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco etapas, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux a Bressuire.</em>
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
            Revestimiento de suelo en Bressuire, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas concretas.</em>
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
        sectionSubtitle="Nuestra experiencia abarca otras ciudades y mundos que pueden interesarle. Tómese su tiempo para explorar, haga sus preguntas, que las responderemos."
        items={[
          { href: '/es/revetement-sol-niort', title: 'Revestimiento de suelo Niort', teaser: 'Sedes sociales, casas de pueblo, residencias de ancianos. Nuestro saber hacer en el corazón de los Deux-Sèvres.', icon: MapPin },
          { href: '/es/services', title: 'Nuestros servicios', teaser: 'Moqueta, suelo de vinilo, alfombras a medida, limpieza. Todo nuestro oficio al servicio de su proyecto.', icon: Building2 },
          { href: '/es/particuliers', title: 'Para particulares', teaser: 'Moqueta, suelo de vinilo, alfombras a medida: nuestro saber hacer al servicio de su hogar.', icon: Home },
          { href: '/es/secteurs', title: 'Nuestros sectores', teaser: 'Oficinas, salud, hostelería, comercio. Soluciones pensadas para cada tipo de establecimiento.', icon: Castle },
          { href: '/es/realisations', title: 'Nuestras realizaciones', teaser: 'Descubra en imágenes nuestras obras recientes. El resultado, los acabados, el detalle que cuenta.', icon: Store },
          { href: '/es/contact', title: 'Contáctenos', teaser: 'Una pregunta, un proyecto, un presupuesto en 48 horas. El propietario le responde directamente.', icon: Mail },
        ]}
      />

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Su proyecto en Bressuire <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>en buenas manos.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita de obra en Bressuire. Un presupuesto detallado en 48 horas, acabados cuidados, desplazamiento dominado y un calendario cumplido. CB Sols, más de 28 años de experiencia al servicio de los proyectos en los Deux-Sèvres.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=bressuire-final" variant="primary" size="md">Solicitar un presupuesto</Button>
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
