import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Revestimiento de suelo Poitiers | Laboratorios, universidades, oficinas',
  description: 'Colocación de moqueta, vinilo y alfombras a medida en Poitiers. Laboratorios universitarios, consultas médicas en el entorno hospitalario-universitario, sedes sociales, hoteles de Futuroscope, colegios privados. CB Sols, más de 28 años de experiencia, desplazamientos regulares desde Villedoux.',
  alternates: {
    canonical: 'https://cbsols.fr/es/revetement-sol-poitiers',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-poitiers', en: 'https://cbsols.fr/en/revetement-sol-poitiers', es: 'https://cbsols.fr/es/revetement-sol-poitiers', },
  },
  keywords: ['revestimiento de suelo Poitiers', 'suelo de vinilo para laboratorio Poitiers', 'moqueta para oficinas Poitiers', 'instalador de suelos Poitiers', 'vinilo para consulta médica Poitiers'],
  openGraph: {
    title: 'Revestimiento de suelo en Poitiers, rigor académico',
    description: 'Moqueta, vinilo y alfombras a medida en Poitiers. Laboratorios, hospital universitario, sedes sociales, hoteles de Futuroscope. CB Sols, más de 28 años de experiencia.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-poitiers.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Laboratorios de investigación universitarios', desc: 'Usted dirige un laboratorio en la Universidad o en el CNRS. Colocamos un vinilo homogéneo resistente a los productos químicos. Láminas soldadas en caliente, zócalos redondeados. Acudimos fuera de las horas de manipulación.' },
  { title: 'Consultas médicas del entorno hospitalario', desc: 'Está instalando una consulta cerca del hospital universitario. Vinilo antibacteriano clasificado Bfl-s1, que soporta el alcohol y el cloro. Zócalo elevado en las zonas húmedas. Entregamos de serie la documentación para las autoridades sanitarias.' },
  { title: 'Sedes sociales y plantas de oficinas', desc: 'Usted dirige una sede social en Chasseneuil o en el centro. Losetas de moqueta acústicas, vinilo en los espacios diáfanos, moqueta de lana para la dirección. Lo escalonamos con su responsable de mantenimiento.' },
  { title: 'Hoteles de Futuroscope y del centro', desc: 'Usted gestiona un hotel de negocios o un hotel boutique. Acudimos en temporada baja, usted conserva sus noches de habitación. Una moqueta densa antimanchas en las habitaciones, vinilo en el restaurante y las zonas húmedas.' },
]

const exigences = [
  { title: 'Los laboratorios, conocemos sus exigencias', desc: 'Ácidos, disolventes, equipos sensibles: el suelo de un laboratorio debe resistirlo todo. Seleccionamos vinilos técnicos, soldados en caliente, sin junta visible, fáciles de descontaminar. Los certificados van incluidos. Sus equipos trabajan con tranquilidad, la oficina de control lo valida sin reservas.' },
  { title: 'Las normas sanitarias y escolares, las dominamos', desc: 'Clínicas, consultas, colegios: hay reglas estrictas sobre seguridad contra incendios e higiene. Elegimos los productos adecuados por usted, entregamos los certificados, dialogamos con la oficina de control. No tiene nada que descifrar en las fichas técnicas.' },
  { title: 'Unas dos horas de trayecto, y estamos ahí', desc: 'Poitiers está a 150 km de nuestro taller, unas dos horas por la A10. Está muy cerca. Pasamos varias veces al mes, conocemos los trabajos de la zona. Usted llama, acudimos a tomar medidas en la semana, sin recargo oculto.' },
  { title: 'Licitaciones públicas, seguimos el procedimiento', desc: 'En una obra universitaria u hospitalaria, el interlocutor es el servicio técnico o patrimonial. Adaptamos los informes, albaranes y certificados a sus procedimientos. Usted conserva la trazabilidad, nos ajustamos a su ritmo. Sin fricción administrativa.' },
  { title: 'Acudimos cuando usted no trabaja', desc: 'Hospital universitario, colegio, oficinas: no se detiene. Acudimos por la tarde, el fin de semana, entre periodos lectivos. Protegemos los equipos sensibles, devolvemos la zona limpia a la hora acordada. Usted llega el lunes, el suelo está colocado, el mobiliario en su sitio. Ni un día perdido.' },
  { title: 'Menos eco en aulas magnas y espacios diáfanos', desc: 'Una gran aula magna o un espacio diáfano con paredes duras resuena. Las losetas de moqueta con base acústica o un vinilo acústico reducen a la mitad el bullicio. Las conversaciones se oyen mejor, las clases se siguen bien. Sus equipos lo notan desde el primer día.' },
]

const materiaux = [
  { name: 'Vinilo homogéneo Gerflor para laboratorio', desc: 'Para un laboratorio de química o farmacia, optamos por el vinilo homogéneo. Es el mismo material de arriba abajo, por lo que no hay capa de uso que se pueda desgastar. Soporta ácidos y disolventes, una clasificación P3. Soldamos las láminas en caliente y las subimos en zócalo. Veinte a veintiocho años por delante en uso intensivo.' },
  { name: 'Vinilo Tarkett para consulta médica', desc: 'En una consulta médica, el suelo debe soportar la biolimpieza diaria sin inmutarse. Tarkett integra el tratamiento antibacteriano en todo el espesor. Un acabado mate liso o imitación piedra según su gusto. Soporta los desinfectantes clorados y con alcohol, y el mantenimiento se hace en cinco minutos. Conformidad para las autoridades sanitarias, fichas incluidas.' },
  { name: 'Losetas de moqueta acústicas para espacios diáfanos', desc: 'En las plantas de oficinas, las losetas de 50×50 cm son nuestro estándar. Si alguien derrama su café, sustituimos solo la loseta dañada. La base acústica reduce el ruido de pisadas y de ruedas, sus equipos trabajan en calma. Quince a veinte años en una oficina clásica, una enorme gama de colores.' },
  { name: 'Vinilo Forbo y Polyflor para colegios privados', desc: 'Para un colegio privado, miramos Forbo Marmoleum (un verdadero linóleo hecho con aceite de linaza, certificado COV A+) o Polyflor para las zonas húmedas. Todo está clasificado Bfl-s1, resiste el tránsito de los niños sin dificultad. Entregamos el expediente completo para la comisión de seguridad de los ERP de tipo R.' },
  { name: 'Moqueta de lana Wilton para despachos de dirección', desc: 'Para una sala de consejo o un despacho de presidencia, la moqueta de lana marca el tono desde la entrada. Un tejido denso, un tacto firme, un envejecimiento noble. Elegimos con usted un liso profundo, un jaspeado o un motivo geométrico discreto. Es el tipo de detalle que distingue un espacio de representación.' },
  { name: 'Perfiles Romus de latón cepillado y aluminio', desc: 'Los umbrales y los mamperlanes de escalera, los cuidamos. Nos coordinamos con su herrajería existente, que cuenta en un edificio con historia. En obras de oficinas exigentes, podemos encargarlos a medida. Es el tipo de cosa que se nota en la entrega, y que marca la diferencia.' },
]

const marques = [
  { name: 'Gerflor', desc: 'El fabricante francés de Lyon que conocemos al dedillo. Sus vinilos Mipolam y Taralay son nuestra referencia para los laboratorios universitarios y las consultas del entorno hospitalario. Una gama completa antiestática y antibacteriana.' },
  { name: 'Tarkett', desc: 'Para los espacios diáfanos que exigen un verdadero confort acústico, optamos por el Tarkett iQ Granit. Envejece bien y sigue siendo nuestra referencia en las plantas de oficinas y médicas de Poitiers.' },
  { name: 'Forbo', desc: 'Cuando el proyecto pide algo natural, miramos Forbo. Su Marmoleum es un verdadero linóleo, hecho con aceite de linaza. Las certificaciones medioambientales son sólidas, perfectas para los colegios privados y las consultas del entorno hospitalario.' },
  { name: 'Polyflor', desc: 'El fabricante británico de vinilo. Resistencia al deslizamiento R10 o R11 según la zona, resistencia a los desinfectantes hospitalarios. Los recomendamos en entornos médicos y educativos sin dudar; su vida útil es excepcional.' },
  { name: 'EGE Carpets', desc: 'El danés, nuestra referencia para los despachos de dirección y los espacios diáfanos. Sus losetas llevan la base acústica integrada. La gama Hospitality también equipa los hoteles de Futuroscope y del centro histórico.' },
  { name: 'Object Carpet', desc: 'Los alemanes, para sedes sociales y oficinas de negocios de alta gama. Un diseño contemporáneo, acabados perfectos. Cuando quiere salirse de los códigos clásicos de la oficina.' },
  { name: 'Brintons', desc: 'El Axminster británico, la aristocracia de la moqueta. Recurrimos a él para los hoteles boutique del centro histórico de Poitiers y los espacios de prestigio.' },
  { name: 'Bolon', desc: 'El fabricante sueco de vinilo tejido. Un aspecto contemporáneo que soporta un tránsito intenso. Perfecto para los vestíbulos de recepción de oficinas y los restaurantes de los hoteles de Futuroscope.' },
]

const quartiers = [
  { nom: 'Centro histórico', detail: 'Place du Maréchal-Leclerc, rue Carnot, Notre-Dame-la-Grande, el baptisterio de Saint-Jean. Casas señoriales, edificios burgueses, restaurantes gastronómicos, comercios con carácter.' },
  { nom: 'Pont-Neuf', detail: 'Un barrio ligado al centro histórico, edificios del siglo XIX y oficinas urbanas. Consultas de profesiones liberales, comercios del centro, comunidades de propietarios burguesas.' },
  { nom: 'Trois-Cités', detail: 'Un barrio del oeste a orillas del Clain, una mezcla residencial y de equipamientos colectivos. Obra nueva, comunidades recientes, equipamientos educativos y deportivos.' },
  { nom: 'Beaulieu', detail: 'Un barrio residencial del noreste con casas familiares y comunidades de propietarios. Consultas médicas de barrio, comercios de proximidad, una clientela residencial estable.' },
  { nom: 'Saint-Éloi', detail: 'La meseta del hospital universitario y el entorno hospitalario de Poitiers. Consultas médicas especializadas, laboratorios de análisis, sedes de organismos sanitarios. Un polo médico estructurante.' },
  { nom: 'Bellejouanne', detail: 'Un barrio residencial y comercial del sur. Casas familiares, obra nueva, equipamientos escolares privados y públicos.' },
  { nom: 'Universidad de Poitiers', detail: 'El campus histórico de Pont-Achard y el campus de Ciencias en la meseta. Laboratorios de investigación, aulas magnas, edificios administrativos universitarios.' },
  { nom: 'Futuroscope (Chasseneuil)', detail: 'Un importante polo de oficinas y turismo. Hoteles de negocios, sedes sociales, plataformas de I+D, centros de formación. Suelos de vinilo acústico para espacios diáfanos y losetas de moqueta para oficinas.' },
  { nom: 'Buxerolles', detail: 'Una localidad limítrofe al norte, una mezcla residencial de alta gama y zona de negocios. Casas familiares, comunidades burguesas, consultas de profesiones liberales.' },
  { nom: 'Migné-Auxances', detail: 'Una localidad limítrofe al noroeste, zonas de negocios y vivienda unifamiliar. Sedes de empresas y plataformas logísticas.' },
  { nom: 'Saint-Benoît', detail: 'Una localidad limítrofe al sur, residencial de alta gama con villas elegantes y propiedades familiares. Una clientela residencial apegada a la calidad de ejecución.' },
  { nom: 'Vouneuil-sous-Biard', detail: 'Una localidad limítrofe al oeste, residencial y de equipamientos. Casas familiares, promociones de alta gama, consultas médicas y profesiones liberales.' },
]

const process = [
  { step: 'Primer contacto', desc: 'Una llamada telefónica o un correo. Recogida de los puntos clave: tipo de proyecto (laboratorio, consulta médica, oficina, hotel, colegio), superficie estimada, calendario deseado, posibles exigencias de ERP. Para las licitaciones públicas universitarias, recogida del expediente completo de la licitación.' },
  { step: 'Visita a Poitiers', desc: 'Una visita organizada en 1 a 2 semanas desde Villedoux. Medición láser, un estudio de las restricciones de acceso y de las zonas controladas, fotos para coordinar colores y juntas. Para los laboratorios, identificación de las zonas ATEX o de las exigencias antiestáticas.' },
  { step: 'Elección del material', desc: 'El showroom de Villedoux o muestras enviadas directamente a Poitiers, al responsable patrimonial o al arquitecto. Validación final bajo la luz del lugar de colocación. Transmisión de las fichas técnicas, informes de reacción al fuego, certificaciones sanitarias y fichas de mantenimiento adaptadas al protocolo.' },
  { step: 'Fabricación en taller', desc: '3 a 10 semanas según la gama: vinilo cortado, losetas de moqueta, moqueta Wilton o Axminster a medida. Premontaje en seco en el taller para validar el ajuste antes del transporte. Esta preparación es lo que nos permite mantener una colocación final rápida y cuidada en Poitiers.' },
  { step: 'Colocación en Poitiers', desc: 'Un equipo movilizado en obra, alojamiento incluido en el presupuesto, un calendario fijado según su disponibilidad, el periodo de vacaciones o la ventana de obra. Coordinación con los servicios técnicos o el responsable de la plataforma. Escalonamiento en horas valle. Una limpieza completa en la entrega.' },
]

const faq = [
  { q: '¿Realmente acuden a Poitiers desde La Rochelle?', a: 'Sí, y a menudo. Poitiers está a 150 km, a menos de dos horas por la A10. Está muy cerca. Pasamos con regularidad, conocemos los trabajos de la zona. Acudimos a tomar medidas al principio del proyecto, y luego volvemos a colocar al final. El alojamiento está incluido en el presupuesto. En grandes obras universitarias u hospitalarias, el equipo permanece en obra hasta la entrega.' },
  { q: '¿Trabajan en los laboratorios de la Universidad y el CNRS?', a: 'Sí, es uno de nuestros terrenos naturales. Los laboratorios de química y farmacia exigen requisitos precisos: resistencia química P3, una clasificación Bfl-s1, antiestático en las salas con equipos sensibles, láminas soldadas en caliente, zócalo elevado. Optamos por Gerflor Mipolam o Polyflor, y entregamos toda la documentación técnica para su servicio patrimonial y la comisión de seguridad.' },
  { q: '¿Trabajan en las consultas del entorno hospitalario de Saint-Éloi?', a: 'Por supuesto. La meseta de Saint-Éloi concentra un importante polo médico. Los suelos de consulta se rigen por la normativa de ERP de tipo U: una clasificación Bfl-s1, resistencia a los desinfectantes clorados y con alcohol, una superficie descontaminable, zócalo elevado en las zonas húmedas. Entregamos todos los informes de reacción al fuego y las fichas sanitarias. La colocación se fija en horas valle para no perturbar las consultas.' },
  { q: '¿Cómo funciona para los colegios privados en el aspecto de ERP?', a: 'Los colegios privados se rigen por la normativa de ERP de tipo R, una clasificación Bfl-s1 obligatoria en circulaciones y aulas. Seleccionamos Forbo Marmoleum (un linóleo natural certificado COV A+) o Polyflor para las zonas húmedas. La colocación se fija en un periodo de vacaciones (octubre, Navidad, febrero, Semana Santa o las vacaciones de verano) para entregar el centro de cara al inicio del curso. Un expediente completo entregado para la comisión de seguridad.' },
  { q: '¿Trabajan en los hoteles de Futuroscope?', a: 'Sí. Futuroscope concentra un importante polo de hoteles de negocios. Las exigencias son precisas: una moqueta antimanchas de alta densidad, aislamiento acústico de las habitaciones, vinilo para las zonas húmedas y los restaurantes. Colocamos habitación por habitación en rotación, sin bloquear la explotación. Una limpieza completa en la entrega, una entrega operativa a la hora acordada con el director de operaciones.' },
  { q: '¿Cuánto dura un suelo de vinilo en un laboratorio universitario?', a: 'Veinte a veintiocho años sin problema, a veces más. El vinilo homogéneo envejece bien porque no tiene capa de uso que se pueda desgastar, es el mismo material de arriba abajo. La resistencia química P3 soporta el contacto ocasional con ácidos y disolventes comunes. Una limpieza profesional anual y una biolimpieza diaria según su protocolo bastan para conservar el aspecto del primer día.' },
  { q: '¿Pueden trabajar en horas valle en un hospital universitario o una universidad?', a: 'Sí, es incluso la norma. Organizamos el trabajo por la tarde, el fin de semana o en un periodo de vacaciones según el escalonamiento fijado con su servicio patrimonial. Premontamos lo máximo posible en el taller, para que la colocación en obra sea rápida. Protegemos sistemáticamente los equipos sensibles, el mobiliario informático y el material de laboratorio antes de empezar. A la hora acordada, el espacio queda limpio y operativo.' },
]

export default function RevetementSolPoitiersPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/revetement-sol-poitiers#service',
        name: 'Revestimiento de suelo en Poitiers',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Poitiers' },
          { '@type': 'AdministrativeArea', name: 'Vienne' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Colocación de moqueta, vinilo y alfombras a medida en Poitiers y la Vienne',
        description: 'Diseño, fabricación en taller y colocación de moqueta, vinilo y alfombras a medida para laboratorios universitarios, consultas médicas del entorno hospitalario, sedes sociales, hoteles de Futuroscope y colegios privados en Poitiers.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Revestimiento de suelo en Poitiers', item: 'https://cbsols.fr/es/revetement-sol-poitiers' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revestimiento de suelo Poitiers</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revestimiento de suelo en Poitiers,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>rigor académico.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Colocación de moqueta, vinilo y alfombras a medida en Poitiers. Laboratorios de investigación universitarios, consultas médicas del entorno hospitalario, sedes sociales, hoteles de Futuroscope, colegios privados. Un taller con sede en La Rochelle, desplazamientos a Poitiers organizados cada mes.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=poitiers" variant="primary" size="md">Solicitar un presupuesto</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nos desplazamos hasta usted</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Poitiers es una ciudad del saber: universidades, investigación, un hospital universitario. Las exigencias técnicas no perdonan lo aproximado. CB Sols tiene la documentación y el método para cumplir estas normas desde hace más de 28 años.&rdquo;
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
            Cuatro entornos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>una misma exigencia técnica.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un proyecto en Poitiers?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Una visita a obra, un presupuesto detallado.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Contacto directo con el servicio patrimonial, el responsable de la plataforma o con usted. Una visita organizada en 1 a 2 semanas, un presupuesto detallado en una semana.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/es/contact?source=poitiers-cta1" variant="primary" size="md">Solicitar un presupuesto</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Particularidades de Poitiers</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Seis exigencias <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propias de los proyectos de Poitiers.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Trabajar en Poitiers no es reproducir una obra estándar. Aquí están los seis puntos sobre los que estructuramos nuestro método desde la primera visita, para cumplir las exigencias técnicas y mantener el calendario.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materiales y gamas para Poitiers</div>
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

      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &ldquo;Un laboratorio universitario no se improvisa. Resistencia química, antiestático, soldaduras perfectas, documentación impecable. CB Sols ejerce este oficio desde hace más de 28 años; es su columna vertebral técnica.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, propietario de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?source=poitiers-citation" variant="primary" size="md">Pedir una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Una visita a obra en Poitiers</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Fabricantes asociados</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Ocho casas de referencia <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>para sus proyectos de Poitiers.</em>
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
            Poitiers y Grand Poitiers, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>hasta Futuroscope.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Nuestro equipo recorre todo el Grand Poitiers así como las localidades limítrofes, donde se concentran los polos universitario, hospitalario, de oficinas y residencial de alta gama.
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un proyecto en mente?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Una llamada para despejar el terreno.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Veinte minutos por teléfono bastan para aclarar las gamas posibles, un calendario realista y un orden de magnitud de presupuesto para su obra de Poitiers.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?source=poitiers-cta2" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro método</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco pasos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux a Poitiers.</em>
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
            Revestimiento de suelo en Poitiers, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas concretas.</em>
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
            Directamente con el propietario. Sin centralita, sin línea de atención. Consejos claros, un orden de magnitud honesto, un siguiente paso solo si el proyecto tiene sentido tanto para usted como para nosotros.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Ver también</div>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Nuestro saber hacer abarca la Vienne, la Charente-Maritime y más allá, en todo terreno técnico excepcional.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/es/sol-pvc-laboratoire-pharmaceutique" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Suelo de vinilo para laboratorio →</Link>
            <Link href="/es/sol-pvc-cabinet-medical" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Suelo de vinilo para consulta médica →</Link>
            <Link href="/es/revetement-sol-la-rochelle" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Revestimiento de suelo La Rochelle →</Link>
            <Link href="/es/architectes" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Arquitectos de interiores →</Link>
            <Link href="/es/particuliers" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Para particulares →</Link>
            <Link href="/es/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom de Villedoux →</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Su proyecto de Poitiers <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>en buenas manos.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita a obra en Poitiers. Un presupuesto detallado, acabados prémium, una conformidad técnica impecable. CB Sols, más de 28 años de experiencia al servicio de los laboratorios, las oficinas y el sector sanitario y social de Poitiers.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=poitiers-final" variant="primary" size="md">Solicitar un presupuesto</Button>
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
