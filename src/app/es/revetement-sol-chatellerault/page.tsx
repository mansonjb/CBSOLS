import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Home, Mail, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Revestimiento de suelo en Châtellerault | Presupuesto gratuito en 48 h',
  description: 'Colocación de moqueta, vinilo y alfombras a medida en Châtellerault. Oficinas y locales de oficina, comercios, despachos, organismos públicos, casas antiguas del centro. CB Sols lleva más de 28 años en el oficio, desplazamiento organizado desde Villedoux como visita agrupada y luego colocación fijada.',
  alternates: {
    canonical: 'https://cbsols.fr/es/revetement-sol-chatellerault',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-chatellerault', en: 'https://cbsols.fr/en/revetement-sol-chatellerault', es: 'https://cbsols.fr/es/revetement-sol-chatellerault', },
  },
  keywords: ['revestimiento de suelo Châtellerault', 'moqueta Châtellerault', 'suelo de vinilo Châtellerault', 'colocación de alfombras Châtellerault', 'artesano del suelo Châtellerault'],
  openGraph: {
    title: 'Revestimiento de suelo en Châtellerault, la seriedad del Châtelleraudais',
    description: 'Moqueta, vinilo y alfombras a medida en Châtellerault. Oficinas, comercios, despachos, organismos públicos, casas del centro. CB Sols, más de 28 años de experiencia.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-chatellerault.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Oficinas y locales de oficina', desc: 'Dirige una oficina, una sede local o espacios de oficina en Châtellerault. Un suelo cuidado realza la imagen, y el vinilo acústico cambia el confort diario. Colocamos fuera de horas punta, sus equipos encuentran un espacio listo al día siguiente. La visita de medición y luego la colocación agrupada cumplen el calendario.' },
  { title: 'Comercios y boutiques del centro', desc: 'Dirige una boutique o un comercio cerca del pont Henri-IV o en una calle comercial. Colocamos de noche o el día de cierre, no pierde ningún día de actividad. Un suelo resistente al tránsito, fácil de mantener, y un aspecto que luce sus productos.' },
  { title: 'Despachos y organismos públicos', desc: 'Recibe al público en un despacho, un bufete o un local de un organismo público. Vinilo homogéneo y moqueta acústica, conformes para edificio público, colocados con limpieza. Elegimos los productos adecuados, aportamos los certificados y los informes contra incendios, dialogamos con la oficina de control. Usted no tiene que entender nada de las fichas técnicas.' },
  { title: 'Casas antiguas del centro por renovar', desc: 'Renueva una casa antigua del centro de Châtellerault, a orillas del Vienne o en el barrio patrimonial. El parqué antiguo es valioso. Colocamos una moqueta de lana o una alfombra a medida sin dañar la madera, con juntas validadas con usted. Respetamos el carácter del lugar.' },
]

const exigences = [
  { title: 'Una visita agrupada, luego una colocación fijada', desc: 'Châtellerault está a una buena distancia de nuestro taller, unas dos horas por carretera. Por eso organizamos una visita de medición al inicio del proyecto, y luego volvemos a colocar una vez terminada la fabricación. No tiene que gestionar diez idas y vueltas, solo dos citas claras y un calendario cumplido.' },
  { title: 'Una organización pensada para la distancia', desc: 'En una obra a dos horas del taller, improvisar cuesta caro. Por eso lo preparamos todo por adelantado: medición con láser en la visita, premontaje en seco en Villedoux, materiales preparados antes de salir. El equipo llega in situ con un plan preciso, la colocación se hace de una vez, sin tiempos muertos.' },
  { title: 'Trabajamos cuando usted no trabaja', desc: 'En una oficina, un comercio o un despacho, no podemos interrumpir la actividad. Por eso venimos por la tarde, el fin de semana o el día de cierre. Reabre a la mañana siguiente, el suelo colocado y limpio. Sin perder un día de ingresos.' },
  { title: 'Menos ruido, más calma', desc: 'En un espacio diáfano, una sala de espera o el local de un organismo público, el ruido cansa a todo el mundo. Una buena moqueta o un suelo de vinilo acústico corta la mitad del bullicio. Las conversaciones se oyen mejor, sus visitantes esperan con calma. Lo nota desde el primer día.' },
  { title: 'Las normativas, las gestionamos', desc: 'Despacho, organismo público, local abierto al público: hay reglas estrictas de seguridad contra incendios e higiene. Elegimos los productos adecuados por usted, aportamos los certificados, dialogamos con la oficina de control. Usted no tiene que entender nada de las fichas técnicas.' },
  { title: 'Un único interlocutor, de principio a fin', desc: 'En una obra, ya tiene suficientes empresas a las que seguir. Nosotros somos un único nombre en su agenda. Presupuesto, calendario, entrega, factura: todo pasa por la misma persona. Gana tiempo y siempre sabe con quién hablar.' },
]

const materiaux = [
  { name: 'Vinilo acústico Gerflor y Tarkett', desc: 'Colocamos mucho en las oficinas y locales de oficina de Châtellerault. La base absorbe el ruido de los pasos, sus equipos trabajan con calma. La gama de colores es amplia, podemos alinearnos con su identidad. El suelo dura quince años con facilidad, a menudo veinte.' },
  { name: 'Losetas de moqueta EGE y Forbo', desc: 'La elección adecuada para una oficina, un despacho o un organismo público. Las losetas son de 50×50 cm. Si alguien derrama un café, reemplazamos solo la loseta dañada. La base acústica suaviza la estancia. Obtiene de quince a veinte años en uso de oficina clásico.' },
  { name: 'Moqueta de lana virgen tejida', desc: 'Para los salones de las casas antiguas del centro de Châtellerault. La lana adquiere pátina al envejecer, no se aplasta. Al tacto es firme, a la vista resalta. Elegimos con usted un liso o un motivo discreto para respetar la carpintería antigua.' },
  { name: 'Vinilo homogéneo para organismos públicos', desc: 'En los pasillos y locales abiertos al público, optamos por vinilo homogéneo. Es el mismo material de arriba abajo, así que no hay capa de uso que se desgaste. Soldamos las láminas en caliente, el agua no se cuela por ningún sitio. Veinte a veintiocho años por delante, incluso con tránsito intenso.' },
  { name: 'Vinilo efecto madera para comercios', desc: 'Para una boutique o un comercio del centro, el vinilo efecto madera hace maravillas. El resultado visual es convincente, el suelo resiste el tránsito y se limpia en cinco minutos. Incluso podemos colocarlo sobre suelo radiante. La colocación es rápida y limpia.' },
  { name: 'Perfiles Romus de latón cepillado y aluminio', desc: 'Para los umbrales y los peldaños de escalera, cuidamos el detalle. Coordinamos con su herrería existente, que cuenta en una casa antigua. En obras algo exigentes, podemos encargarlos a medida. Es el tipo de detalle que se nota en la entrega.' },
]

const marques = [
  { name: 'Gerflor', desc: 'El fabricante francés de Lyon que conocemos a fondo. Sus vinilos Mipolam y Taralay son nuestra referencia versátil en las oficinas y comercios de Châtellerault. Una amplia variedad, una acústica seria, un mantenimiento sencillo.' },
  { name: 'Tarkett', desc: 'Para las oficinas y espacios de oficina que exigen un verdadero confort acústico, optamos por Tarkett iQ Granit. Envejece bien y sigue siendo nuestra referencia en suelos con tránsito regular.' },
  { name: 'Forbo', desc: 'Cuando el proyecto pide algo natural, miramos hacia Forbo. Su Marmoleum es un auténtico linóleo elaborado con aceite de linaza. Las certificaciones medioambientales son sólidas, lo sacamos a menudo en organismos públicos y despachos.' },
  { name: 'EGE Carpets', desc: 'El tejedor danés, nuestra referencia para una oficina de dirección que imponga. Sus losetas ya llevan la base acústica integrada, lo que facilita la colocación. Las recomendamos para oficinas y salas de reuniones.' },
  { name: 'objectflor', desc: 'Para los comercios y boutiques del centro, sus lamas de vinilo efecto madera son una apuesta segura. El resultado es creíble, la colocación va rápida, y la resistencia al tránsito aguanta con el tiempo.' },
  { name: 'Bostik', desc: 'Para adhesivos y morteros, trabajamos con Bostik. Son productos fiables que garantizan una colocación duradera, sobre todo en los soportes antiguos o irregulares de las casas del centro.' },
  { name: 'objectflor Expona', desc: 'Cuando un comercio quiere un suelo de diseño que destaque sin sacrificar la resistencia, sus gamas Expona cumplen. Efecto madera, hormigón o piedra, la elección es amplia y el resultado de alta gama.' },
  { name: 'Romus', desc: 'Para los accesorios de acabado, perfiles y peldaños de escalera, Romus es nuestra referencia. Del latón cepillado al aluminio, siempre encontramos el acabado que encaja con su interior.' },
]

const quartiers = [
  { nom: 'Centro', detail: 'Pont Henri-IV, las orillas del Vienne, calles comerciales. Comercios, despachos, locales de oficina y casas antiguas del centro por renovar.' },
  { nom: 'Barrio de La Manu', detail: 'Una antigua fábrica de armas convertida en polo cultural y de oficinas. Oficinas, espacios de recepción y locales de actividad por acondicionar.' },
  { nom: 'Châteauneuf', detail: 'La orilla derecha del Vienne, viviendas antiguas y residenciales. Casas con carácter y proyectos de renovación patrimonial.' },
  { nom: 'Ozon', detail: 'Un barrio residencial y de servicios. Copropiedades, despachos y viviendas familiares en modernización.' },
  { nom: 'Lac', detail: 'Un sector residencial cerca del lago. Promociones, viviendas familiares y pequeñas unidades de oficina.' },
  { nom: 'Zona industrial norte', detail: 'Un polo industrial y de oficinas al norte de la ciudad, un patrimonio del automóvil y la mecánica. Oficinas de empresa y espacios de recepción.' },
  { nom: 'Targé', detail: 'Un barrio residencial integrado en la ciudad. Viviendas familiares, promociones y locales de proximidad.' },
  { nom: 'Naintré', detail: 'Un municipio vecino al sur, polígonos de actividad y viviendas unifamiliares. Oficinas, comercios y viviendas familiares.' },
  { nom: 'Cenon-sur-Vienne', detail: 'Un municipio limítrofe a orillas del Vienne. Viviendas residenciales y pequeños locales comerciales por acondicionar.' },
  { nom: 'Antran', detail: 'Un pueblo del norte del Châtelleraudais. Casas con carácter, renovaciones residenciales y viviendas antiguas.' },
  { nom: 'Availles-en-Châtellerault', detail: 'Una ciudad residencial de la aglomeración. Promociones, viviendas familiares y locales de proximidad.' },
  { nom: 'Vouneuil-sur-Vienne', detail: 'Un pueblo patrimonial a orillas del Vienne. Casas antiguas, proyectos de renovación y viviendas residenciales.' },
]

const process = [
  { step: 'Primer contacto', desc: 'Una llamada o un correo. Recopilación de los puntos clave: tipo de proyecto (oficina, comercio, despacho, organismo público, casa antigua), superficie estimada, calendario deseado, posibles condicionantes de edificio público. Enmarcamos los siguientes pasos juntos y fijamos la fecha de la visita.' },
  { step: 'Visita a Châtellerault', desc: 'Una visita organizada desde Villedoux, a aproximadamente 2h de carretera. Medición con láser, un estudio de los condicionantes de acceso, fotos para coordinar los colores y las juntas. Dada la distancia, preparamos una visita completa para volver solo una vez, el día de la colocación agrupada.' },
  { step: 'Elección del material', desc: 'El showroom de Villedoux o muestras enviadas directamente a Châtellerault, a su domicilio o a la oficina. Validación final bajo la luz del lugar de colocación. Para organismos públicos y despachos, transmisión de las fichas técnicas requeridas, informes contra incendios y certificaciones medioambientales.' },
  { step: 'Fabricación en taller', desc: '3 a 10 semanas según la gama: moqueta tejida, losetas, vinilo cortado, alfombras a medida. Premontaje en seco en el taller para validar el ajuste antes del transporte. Esta preparación previa es lo que nos permite mantener una colocación final rápida y agrupada en Châtellerault.' },
  { step: 'Colocación en Châtellerault', desc: 'Un equipo movilizado in situ, alojamiento incluido en el presupuesto, un calendario fijado según su disponibilidad o la ventana de obra. Una colocación agrupada para limitar los desplazamientos, faseado fuera de horas punta posible para comercios y oficinas en funcionamiento. Una limpieza completa en la entrega.' },
]

const faq = [
  { q: '¿De verdad vienen a Châtellerault desde La Rochelle?', a: 'Sí. Châtellerault está a unos 160 km, alrededor de 2h por carretera. Dada la distancia, nos organizamos: una visita de medición completa al inicio del proyecto, y luego una colocación agrupada una vez terminada la fabricación. Lo preparamos todo por adelantado en el taller para volver solo una vez. El alojamiento y el desplazamiento están incluidos en el presupuesto. No tiene que coordinar una serie de idas y vueltas, solo dos citas claras.' },
  { q: '¿Cómo organizan una obra a esa distancia?', a: 'Ese es el quid de la cuestión. A dos horas del taller, no podemos permitirnos improvisar. Tomamos las medidas con láser en la visita, premontamos en seco todo lo posible en Villedoux, preparamos los materiales antes de salir. El equipo llega a Châtellerault con un plan preciso y coloca de una vez, sin tiempos muertos. Este método lo aplicamos desde hace más de 28 años en todas nuestras obras lejanas.' },
  { q: '¿Trabajan en oficinas y locales de oficina?', a: 'Sí, es uno de nuestros terrenos naturales. Châtellerault concentra espacio de oficina, despachos y locales heredados de su pasado industrial. Exige un suelo cuidado y un trabajo limpio. Colocamos vinilo acústico en los espacios de trabajo y losetas de moqueta en las oficinas. Venimos fuera de horas punta, sus equipos encuentran un espacio listo al día siguiente.' },
  { q: '¿Trabajan en los comercios del centro?', a: 'Sí. Para una boutique o un comercio cerca del pont Henri-IV o en una calle comercial, el suelo debe realzar sus productos y resistir el tránsito. Colocamos de noche o el día de cierre, no pierde ningún día de actividad. Protegemos lo existente, lo limpiamos todo en la entrega, y a la mañana siguiente reabre en un espacio listo para recibir a sus clientes.' },
  { q: '¿Trabajan en organismos públicos y despachos?', a: 'Por supuesto. El local de un organismo público, un despacho, un bufete que recibe al público están regulados como edificios públicos. Requiere productos con clasificación de fuego que soporten un mantenimiento intensivo, con certificados claros. Elegimos los productos adecuados por usted, aportamos todos los informes contra incendios para la comisión de seguridad, y planificamos el trabajo para no perturbar la atención al público.' },
  { q: '¿Trabajan en las casas antiguas del centro?', a: 'Por supuesto. El centro de Châtellerault y las orillas del Vienne concentran bellas casas antiguas, a menudo con su parqué original. Trabajamos allí de forma reversible siempre que es posible: colocamos sin clavar, sin encolados agresivos. Si quiere rehacerlo todo dentro de diez años, la madera de debajo estará intacta. Las moquetas de lana y las alfombras a medida encuentran allí su sitio.' },
  { q: '¿Cuánto dura un suelo de vinilo en una oficina o un comercio?', a: 'Prevea de quince a veinte años con facilidad, a veces más. Un vinilo homogéneo envejece bien porque no tiene capa de uso que se desgaste, es el mismo material de arriba abajo. En las zonas muy transitadas como una recepción o una entrada de comercio, elegimos una clasificación clase 34, que tolera mejor el tránsito. Una limpieza profesional una vez al año basta para mantener el aspecto del primer día.' },
]

export default function RevetementSolChatelleraultPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/revetement-sol-chatellerault#service',
        name: 'Revestimiento de suelo en Châtellerault',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Châtellerault' },
          { '@type': 'AdministrativeArea', name: 'Vienne' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Colocación de moqueta, vinilo y alfombras a medida en Châtellerault y la Vienne',
        description: 'Diseño, fabricación en taller y colocación de moqueta, vinilo y alfombras a medida para oficinas, locales de oficina, comercios, despachos, organismos públicos y casas antiguas en Châtellerault.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Revestimiento de suelo en Châtellerault', item: 'https://cbsols.fr/es/revetement-sol-chatellerault' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="chatellerault" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revestimiento de suelo Châtellerault</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revestimiento de suelo en Châtellerault,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>la seriedad del Châtelleraudais.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Colocación de moqueta, vinilo y alfombras a medida en Châtellerault. Oficinas y locales de oficina, comercios del centro, despachos y organismos públicos, casas antiguas a orillas del Vienne. Un taller con sede cerca de La Rochelle, desplazamiento organizado como visita agrupada y luego colocación fijada.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=chatellerault" variant="primary" size="md">Solicitar un presupuesto</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nos desplazamos hasta usted</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Châtellerault está a dos horas del taller. La distancia no da miedo cuando la organización es impecable: una visita de medición, y luego una colocación agrupada. Es el método que CB Sols aplica desde hace más de 28 años en sus obras lejanas.&rdquo;
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un proyecto en Châtellerault?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Una visita de obra, un presupuesto detallado.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Contacto directo con usted, el responsable de su establecimiento o su arquitecto. Una visita de medición organizada y agrupada, un presupuesto detallado en 48 horas.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/es/contact?source=chatellerault-cta1" variant="primary" size="md">Solicitar un presupuesto</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Particularidades de Châtellerault</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Seis exigencias <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propias de los proyectos de Châtellerault.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Trabajar en Châtellerault, a dos horas de nuestro taller, no es reproducir una obra local. Aquí están los seis puntos sobre los que estructuramos nuestro método desde la primera visita, para cumplir el calendario y dominar el desplazamiento.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materiales y gamas para Châtellerault</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Las familias de productos <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que llevamos a la Vienne.</em>
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
              &ldquo;Una oficina, un organismo público, un comercio, una casa antigua a orillas del Vienne: cada uno tiene sus condicionantes. Los tomamos en serio desde la primera visita, y cumplimos el calendario que anunciamos, incluso a dos horas por carretera.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, propietario de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?source=chatellerault-citation" variant="primary" size="md">Pedir una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Una visita de obra en Châtellerault</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Fabricantes asociados</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Ocho casas de referencia <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>para sus proyectos en Châtellerault.</em>
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
            Châtellerault y el Châtelleraudais, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>hasta los municipios vecinos.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Nuestro equipo se desplaza por Châtellerault y por todo el Châtelleraudais, así como por los municipios vecinos, donde se concentran los proyectos de oficina, comerciales, públicos y residenciales.
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
            Veinte minutos por teléfono bastan para aclarar las gamas posibles, un calendario realista y un orden de magnitud de presupuesto para su obra en Châtellerault.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?source=chatellerault-cta2" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro método</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco etapas, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux a Châtellerault.</em>
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
            Revestimiento de suelo en Châtellerault, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas concretas.</em>
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
          { href: '/es/revetement-sol-poitiers', title: 'Revestimiento de suelo Poitiers', teaser: 'Prefectura de la Vienne, espacio de oficina y patrimonio. Nuestro saber hacer en el corazón del Poitou.', icon: MapPin },
          { href: '/es/revetement-sol-niort', title: 'Revestimiento de suelo Niort', teaser: 'Sedes sociales, casas de pueblo, residencias de ancianos. Nuestro saber hacer en el corazón de los Deux-Sèvres.', icon: MapPin },
          { href: '/es/services', title: 'Nuestros servicios', teaser: 'Moqueta, suelo de vinilo, alfombras a medida, limpieza. Todo nuestro oficio al servicio de su proyecto.', icon: Building2 },
          { href: '/es/particuliers', title: 'Para particulares', teaser: 'Moqueta, suelo de vinilo, alfombras a medida: nuestro saber hacer al servicio de su hogar.', icon: Home },
          { href: '/es/realisations', title: 'Nuestras realizaciones', teaser: 'Descubra en imágenes nuestras obras recientes. El resultado, los acabados, el detalle que cuenta.', icon: Building2 },
          { href: '/es/contact', title: 'Contáctenos', teaser: 'Una pregunta, un proyecto, un presupuesto en 48 horas. El propietario le responde directamente.', icon: Mail },
        ]}
      />

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Su proyecto en Châtellerault <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>en buenas manos.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita de obra en Châtellerault. Un presupuesto detallado en 48 horas, acabados cuidados, desplazamiento dominado y un calendario cumplido. CB Sols, más de 28 años de experiencia al servicio de los proyectos en la Vienne.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=chatellerault-final" variant="primary" size="md">Solicitar un presupuesto</Button>
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
