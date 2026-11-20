import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Revestimiento de suelo tras daños por agua | Presupuesto para el seguro',
  description: 'Suelo dañado por una fuga de agua: parqué hinchado, moqueta, PVC o laminado por rehacer. CB Sols interviene tras el secado, presupuesta la reparación y entrega el presupuesto detallado que espera su aseguradora. La Rochelle y Charente-Maritime.',
  alternates: {
    canonical: 'https://cbsols.fr/es/revetement-sol-degat-des-eaux',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-degat-des-eaux', en: 'https://cbsols.fr/en/revetement-sol-degat-des-eaux', es: 'https://cbsols.fr/es/revetement-sol-degat-des-eaux', },
  },
  openGraph: {
    title: 'Revestimiento de suelo tras daños por agua | Presupuesto para el seguro | CB Sols',
    description: 'Reparación del suelo tras un siniestro: parqué, moqueta, PVC, laminado. Una visita al emplazamiento, una medición de humedad, un presupuesto detallado para el perito y la aseguradora. CB Sols, artesano del suelo en La Rochelle.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-degat-des-eaux.jpg', width: 1200, height: 630 }],
  },
}

const piliers = [
  { title: 'El presupuesto que espera su aseguradora', desc: 'Un perito no se conforma con una cifra garabateada. Necesita un presupuesto detallado: superficies, tipo de revestimiento original, preparación del soporte, retirada, suministro y colocación, línea por línea. Estamos acostumbrados a este formalismo. Redactamos un presupuesto claro, presupuestado y defendible, que usted traslada tal cual a su aseguradora o al perito designado.' },
  { title: 'Intervenimos tras el secado', desc: 'Volver a colocar un suelo sobre un soporte todavía húmedo lo condena de antemano: ampollas, despegues, moho que vuelve. Medimos el nivel de humedad del soporte antes de cualquier recolocación, y esperamos a que esté sano. Esa es la diferencia entre una reparación que aguanta y un segundo siniestro en seis meses.' },
  { title: 'Todos los revestimientos, no solo uno', desc: 'Parqué hinchado, laminado despegado, moqueta empapada, PVC levantado, linóleo abombado: cada material reacciona de forma distinta al agua. Retiramos, diagnosticamos el soporte y volvemos a colocar el revestimiento adecuado, idéntico al original o mejorado según su elección y la de la aseguradora.' },
  { title: 'Artesanos, no una centralita', desc: `Más de 28 años de colocación a nuestras espaldas y un taller a veinte minutos de La Rochelle. Venimos a ver el trabajo, trabajamos con cuidado y entregamos un suelo limpio y terminado. Tiene un único interlocutor, Valentin, de la inspección a la entrega.` },
]

const symptomes = [
  { title: 'Parqué y laminado que se hinchan', desc: 'La madera y los paneles de laminado absorben agua, se hinchan y se levantan por las juntas. Una vez abombado, un laminado no vuelve a bajar: se reemplaza. Un parqué macizo a veces puede lijarse y restaurarse, pero solo tras un secado completo y un diagnóstico.' },
  { title: 'Moqueta empapada y olores', desc: 'Una moqueta encharcada se seca mal, sobre todo con su base. Pasadas unas horas, los riesgos de moho y de olor persistente se vuelven serios. Según el tiempo de inmersión y la naturaleza del soporte, decidimos entre una limpieza en profundidad y la sustitución.' },
  { title: 'PVC y linóleo levantados', desc: 'El agua se cuela bajo las láminas o losetas, ataca el adhesivo y hace que el revestimiento se ampolle. El PVC a veces puede recolocarse si el soporte está sano, pero a menudo hace falta retirarlo y volver a colocarlo para empezar de nuevo sobre una base limpia.' },
  { title: 'Soporte y solera todavía húmedos', desc: 'El verdadero problema suele ser invisible: la solera o el forjado han cogido agua. Volver a colocar encima demasiado pronto significa repetir el siniestro. Medimos la humedad residual y esperamos a un soporte sano antes de recolocar nada.' },
  { title: 'Zócalos, umbrales y juntas', desc: 'El agua no se detiene en el revestimiento. Zócalos deformados, perfiles de umbral levantados, juntas entre estancias por rehacer: una reparación limpia pasa por estos acabados, a menudo olvidados en los presupuestos apresurados.' },
  { title: 'Un trabajo que presupuestar, no que improvisar', desc: 'Cada siniestro es diferente: superficie afectada, antigüedad del suelo, tipo de colocación, estado del soporte. Por eso un presupuesto serio pasa por una visita. Observamos, medimos, presupuestamos con precisión, para usted y para la aseguradora.' },
]

const parType = [
  { title: 'Parqué macizo', desc: 'Tras un secado completo, un parqué macizo a veces puede salvarse mediante lijado y restauración. Si las tablas se han movido demasiado, reemplazamos las zonas afectadas o el conjunto. Decidimos tras ver y medir, nunca a ciegas.' },
  { title: 'Laminado y parqué flotante', desc: 'El laminado soporta mal el agua: en cuanto se hincha por las juntas, se reemplaza. Retiramos, comprobamos la base y el soporte, secamos, y después volvemos a colocar un suelo nuevo, idéntico al original o en una gama más resistente a la humedad si lo desea.' },
  { title: 'Moqueta', desc: 'Según el tiempo bajo el agua y el tipo de colocación, valoramos entre una limpieza a fondo por inyección-extracción y la sustitución. Una moqueta sobre una base empapada rara vez es recuperable. En losetas, a veces podemos reemplazar solo la zona afectada.' },
  { title: 'PVC y linóleo', desc: 'Retiramos las láminas o losetas levantadas, tratamos el soporte, lo secamos y después volvemos a colocar un revestimiento resiliente. Es la ocasión de pasar a un PVC más adecuado para zonas húmedas, soldado y subido en zócalo, si la configuración lo permite.' },
  { title: 'Suelo resiliente en zona húmeda', desc: 'Baño, cuarto de servicio, cocina: tras un siniestro, preferimos soluciones pensadas para el agua, con subidas de zócalo sanitario y juntas soldadas. Menos recovecos, menos absorción de humedad, un suelo que envejece mejor.' },
  { title: 'Preparación del soporte', desc: 'Antes de cualquier recolocación: retirada del suelo antiguo, raspado del adhesivo, autonivelado si procede, comprobación de la humedad. Un buen suelo empieza por un soporte sano y plano. Es la parte invisible la que decide si la reparación aguantará con el tiempo.' },
]

const etapes = [
  { phase: 'Declaración del siniestro', qui: 'Usted, a su aseguradora', cle: 'Por lo general en un plazo de 5 días hábiles. Le ayudamos con el presupuesto si hace falta.' },
  { phase: 'Búsqueda de la fuga', qui: 'Aseguradora o fontanero', cle: 'Imprescindible antes de recolocar: hay que resolver la causa.' },
  { phase: 'Secado del soporte', qui: 'Natural o con deshumidificadores', cle: 'De unos días a varias semanas según la magnitud.' },
  { phase: 'Visita y presupuesto de CB Sols', qui: 'Valentin, en el emplazamiento', cle: 'Inspección, medición de humedad, presupuesto detallado para la aseguradora.' },
  { phase: 'Visita del perito', qui: 'Perito designado', cle: 'Por encima de cierto importe, según su póliza.' },
  { phase: 'Acuerdo de indemnización', qui: 'Usted y la aseguradora', cle: 'El presupuesto es la base para calcular la indemnización.' },
  { phase: 'Retirada y preparación', qui: 'CB Sols', cle: 'Suelo antiguo, adhesivo, autonivelado, comprobación final del soporte.' },
  { phase: 'Recolocación del revestimiento', qui: 'CB Sols', cle: 'Colocación, acabados, zócalos, umbrales. La estancia entregada limpia y terminada.' },
]

const process = [
  { step: 'Primer contacto', desc: 'Nos llama o usa el formulario. Entendemos rápido la situación: estancia afectada, tipo de suelo, en qué punto está el expediente del seguro.' },
  { step: 'Visita al emplazamiento', desc: 'Venimos a ver el suelo dañado: superficies, soporte, tipo de colocación, alcance de los daños. Nada sustituye al ojo sobre el terreno para presupuestar con precisión.' },
  { step: 'Medición de humedad', desc: 'Comprobamos la humedad residual del soporte. Si todavía está húmedo, lo decimos, y esperamos. Recolocar demasiado pronto es preparar el próximo siniestro.' },
  { step: 'Presupuesto detallado', desc: 'Redactamos un presupuesto claro, línea por línea, pensado para el perito y la aseguradora: retirada, preparación, suministro, colocación, acabados.' },
  { step: 'Diálogo con la aseguradora', desc: 'Adaptamos el presupuesto a las peticiones del perito si hace falta, aclaramos, justificamos. Estamos acostumbrados a este diálogo.' },
  { step: 'Preparación del soporte', desc: 'Retirada del revestimiento antiguo, raspado, autonivelado, tratamiento del soporte. La base debe estar sana y plana antes de recolocar.' },
  { step: 'Recolocación cuidada', desc: 'Colocación por nuestros equipos, idéntica al original o mejorada según el acuerdo: parqué, laminado, moqueta, PVC. Zócalos y umbrales rehechos.' },
  { step: 'Entrega', desc: 'Le entregamos una estancia limpia y terminada, lista para vivir en ella. Y los documentos útiles para cerrar el expediente con tranquilidad.' },
]

const cibles = [
  { nom: 'Particulares', detail: 'Su casa o piso ha cogido agua. Quiere un suelo rehecho con limpieza y un presupuesto que la aseguradora acepte sin discutir. Nos encargamos de ambas cosas.' },
  { nom: 'Administradores de fincas y propietarios', detail: 'Daños por agua entre plantas, zonas comunes afectadas: un interlocutor fiable, que entrega un presupuesto convencional, dialoga con el perito y trabaja con limpieza en un emplazamiento ocupado.' },
  { nom: 'Gestores y arrendadores', detail: 'Una vivienda en alquiler dañada, una reparación entre dos inquilinos: una reparación rápida, un presupuesto claro y coordinación con la aseguradora para que una vivienda no quede vacía demasiado tiempo.' },
  { nom: 'Comercios y oficinas', detail: 'Un local profesional inundado: ajustamos la obra para limitar el tiempo de parada, presupuestamos para la aseguradora y volvemos a colocar un suelo adecuado al tráfico de su establecimiento.' },
]

const essentiel = [
  'CB Sols rehace los suelos dañados por el agua: parqué, laminado, moqueta, PVC y linóleo, para particulares y profesionales.',
  'Intervenimos después de que el soporte se haya secado: el nivel de humedad se mide antes de cualquier recolocación, para evitar un segundo siniestro (ampollas, despegues, moho).',
  'Redactamos un presupuesto detallado, línea por línea, pensado para trasladarlo a su aseguradora o al perito designado.',
  'La visita al emplazamiento es imprescindible: cada siniestro difiere según la superficie, la antigüedad del suelo, el tipo de colocación y el estado del soporte.',
  'Según el acuerdo con la aseguradora, el revestimiento se vuelve a colocar idéntico al original o en una gama más adecuada para la humedad.',
  'Una empresa con sede en Villedoux, cerca de La Rochelle. Trabajamos en Charente-Maritime, en Île de Ré, Île d\'Oléron y la zona de La Rochelle.',
]

const faq = [
  { q: 'Mi aseguradora me pide un presupuesto de suelo, ¿lo hacen?', a: 'Sí, es uno de nuestros trabajos más frecuentes. Nos desplazamos a ver el suelo dañado, medimos las superficies y el tipo de revestimiento, medimos el estado del soporte, y después redactamos un presupuesto detallado: retirada, preparación, suministro, colocación, acabados, línea por línea. Es exactamente el documento que espera un perito o un gestor de siniestros. Usted lo traslada tal cual a su aseguradora.' },
  { q: '¿El suelo debe estar seco antes de rehacerlo?', a: 'Sí, y es un punto en el que no transigimos. Volver a colocar un revestimiento sobre una solera o un forjado todavía húmedo condena el nuevo suelo: ampollas, despegues, moho que vuelve desde abajo. Medimos la humedad residual del soporte antes de cualquier recolocación. Si todavía está demasiado húmedo, se lo decimos y esperamos, con deshumidificadores si hace falta. El secado puede llevar de unos días a varias semanas según la magnitud de los daños.' },
  { q: '¿Cuánto tarda en secarse un soporte tras unos daños por agua?', a: 'No hay una única cifra honesta que dar. Depende de la cantidad de agua, de la naturaleza del soporte, de la ventilación de la estancia y de si se usan deshumidificadores. Una infiltración ligera puede secarse en unos días, un forjado encharcado tardar varias semanas. En lugar de anunciar un plazo fijo, medimos la humedad en el emplazamiento y recolocamos cuando el soporte está realmente sano. Es el único método fiable.' },
  { q: '¿Un parqué hinchado por el agua hay que cambiarlo necesariamente?', a: 'No siempre. Un parqué macizo a veces puede recuperarse tras un secado completo, mediante lijado y restauración, si las tablas no se han movido demasiado. Un laminado o un parqué flotante que se ha hinchado por las juntas, en cambio, no vuelve a bajar: se reemplaza. Decidimos tras ver el suelo y medir el soporte, nunca a distancia a partir de una foto.' },
  { q: '¿Se puede recuperar una moqueta tras unos daños por agua?', a: 'Depende del tiempo pasado bajo el agua y del tipo de colocación. Una moqueta mojada brevemente en superficie a veces puede salvarse con una limpieza a fondo por inyección-extracción y un secado rápido. Una moqueta encharcada con su base, o dejada húmeda varios días, rara vez es recuperable: los riesgos de moho y de olor persistente son demasiado altos. En una colocación por losetas, a veces podemos reemplazar solo la zona afectada.' },
  { q: '¿Qué es el convenio IRSI y me concierne?', a: 'El convenio IRSI es un acuerdo entre aseguradoras que organiza la gestión de los daños por agua y por fuego hasta 5000 euros sin IVA de daños por unidad afectada, principalmente en edificios colectivos y comunidades de propietarios. Por debajo de cierto importe, la aseguradora suele indemnizar sin visita de perito; por encima, por lo general se designa un único perito. Las reglas exactas, los umbrales y la franquicia dependen de su póliza. Nuestro papel es sencillo y constante: darle un presupuesto de reparación presupuestado y defendible, sea cual sea el marco de indemnización.' },
  { q: '¿Qué es la depreciación y cómo afecta al reembolso?', a: 'La depreciación es la pérdida de valor de un bien ligada a su antigüedad y desgaste. Muchas pólizas aplican un coeficiente de depreciación a un suelo antiguo: la aseguradora no reembolsa entonces el precio completo de un suelo nuevo. Algunas pólizas ofrecen una cobertura de "valor a nuevo" que reduce o anula esta reducción. Es un punto a comprobar en su póliza. Un presupuesto claro y detallado ayuda precisamente al perito a presupuestar correctamente y a limitar las sorpresas desagradables.' },
  { q: '¿Debo hacer la búsqueda de la fuga antes de llamarles?', a: 'La búsqueda de la fuga y la reparación de la causa son imprescindibles antes de cualquier recolocación: de nada sirve rehacer un suelo si el agua vuelve. A menudo es la aseguradora quien organiza esta búsqueda, a veces un fontanero. Puede contactarnos perfectamente en paralelo: venimos a hacer la inspección y el presupuesto mientras el soporte se seca, para no perder tiempo en el expediente.' },
  { q: '¿Trabajan en comunidades de propietarios y viviendas en alquiler?', a: 'Sí. Trabajamos tanto para particulares como para administradores de fincas, comunidades de propietarios, arrendadores y gestores. Daños por agua entre plantas, zonas comunes, una vivienda por rehacer entre dos inquilinos: entregamos un presupuesto convencional, dialogamos con el perito y trabajamos con limpieza, incluso cuando el local sigue ocupado.' },
  { q: '¿Pueden colocar un revestimiento distinto del original?', a: 'Sí, según su elección y el acuerdo con la aseguradora. Un siniestro es a veces la ocasión de pasar a un revestimiento más adecuado, por ejemplo un PVC resiliente y soldado en una estancia expuesta al agua, en lugar de un laminado frágil. La aseguradora suele indemnizar sobre la base del suelo original; cualquier diferencia hacia una gama superior queda a su cargo. Le explicamos con claridad qué está cubierto y qué no.' },
  { q: '¿Es obligatoria una visita o basta con un presupuesto a partir de una foto?', a: 'La visita es imprescindible para un presupuesto serio. Una foto no revela el estado real del soporte, su nivel de humedad, el tipo de colocación original, ni el alcance exacto de los daños en los zócalos y las juntas. Presupuestar a ciegas arriesga un presupuesto erróneo, rechazado por el perito o insuficiente para rehacer de verdad el suelo. Preferimos ir a verlo: es gratis y sin compromiso.' },
  { q: '¿Trabajan directamente con aseguradoras y peritos?', a: 'Estamos acostumbrados al diálogo con peritos y gestores de siniestros. Redactamos presupuestos en el formato adecuado, los ajustamos si el perito pide una aclaración, justificamos las partidas. No sustituimos a su aseguradora y no gestionamos su expediente por usted, pero aportamos el elemento técnico que todos necesitan: un presupuesto de reparación claro y fiable.' },
  { q: '¿Cuánto cuesta reparar un suelo tras unos daños por agua?', a: 'Imposible dar un precio único: todo depende de la superficie afectada, del revestimiento, del estado del soporte y de la preparación necesaria. Es precisamente el papel del presupuesto, elaborado tras una visita. En el contexto de unos daños por agua, esta reparación suele estar cubierta por la aseguradora, con sujeción a su póliza, la franquicia y cualquier depreciación. Presupuestamos la cifra real, usted lo ve con claridad, y la aseguradora también.' },
  { q: '¿En qué zona trabajan para daños por agua?', a: 'CB Sols tiene su sede en Villedoux, cerca de La Rochelle, y trabaja en Charente-Maritime, en Île de Ré, Île d\'Oléron, así como en Rochefort, Saintes, Royan y la zona de La Rochelle. Para un trabajo más lejano, hablemos: lo estudiamos según la magnitud del proyecto.' },
]

export default function RevetementSolDegatDesEauxPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/revetement-sol-degat-des-eaux#service',
        name: 'Reparación de revestimiento de suelo tras daños por agua',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
          { '@type': 'Place', name: 'La Rochelle' },
          { '@type': 'Place', name: 'Île de Ré' },
          { '@type': 'Place', name: "Île d'Oléron" },
        ],
        serviceType: 'Rehabilitación y sustitución de suelos tras un siniestro por daños por agua, presupuesto para la aseguradora',
        description: 'Reparación del suelo tras daños por agua: parqué, laminado, moqueta, PVC y linóleo. Intervención tras el secado del soporte, medición de humedad, presupuesto detallado para la aseguradora y el perito, retirada y recolocación cuidadas.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Revestimiento de suelo tras daños por agua', item: 'https://cbsols.fr/es/revetement-sol-degat-des-eaux' },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'Rehacer un suelo tras unos daños por agua',
        description: 'El método CB Sols para rehacer un suelo dañado, de la declaración del siniestro a la recolocación del revestimiento.',
        step: process.map((p, i) => ({ '@type': 'HowToStep', position: i + 1, name: p.step, text: p.desc })),
      },
      {
        '@type': 'WebPage',
        '@id': 'https://cbsols.fr/es/revetement-sol-degat-des-eaux#webpage',
        url: 'https://cbsols.fr/es/revetement-sol-degat-des-eaux',
        name: 'Revestimiento de suelo tras daños por agua',
        description: 'Servicio CB Sols: reparación del suelo tras daños por agua, un presupuesto detallado para la aseguradora, intervención tras el secado del soporte, en Charente-Maritime y la zona de La Rochelle.',
        dateModified: '2026-10-20',
        inLanguage: 'es',
        isPartOf: { '@id': 'https://cbsols.fr/#website' },
        about: { '@id': 'https://cbsols.fr/es/revetement-sol-degat-des-eaux#service' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Suelo tras daños por agua</span>
          </div>
          <div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              ¿Cómo se rehace un suelo{' '}
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>dañado por el agua?</em>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '900px' }}>
              Parqué que se hincha, moqueta empapada, PVC que se ampolla, laminado que se despega: tras unos daños por agua, la tentación es rehacerlo todo rápido. Ese es el error. El verdadero problema es el soporte de debajo, a menudo todavía húmedo. Recolocar demasiado pronto es preparar el próximo siniestro. Nuestro oficio aquí es venir a ver, medir, decirle la verdad sobre lo que es recuperable, y redactar el presupuesto detallado que espera su aseguradora. Detrás de todo ello, más de 28 años de colocación y un taller a veinte minutos de La Rochelle.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/es/contact?from=revetement-sol-degat-des-eaux" variant="primary" size="md">Pedir un presupuesto para el seguro</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* The essentials */}
      <section style={{ padding: '3.5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>Lo esencial en resumen</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '0.9rem 2.5rem' }}>
            {essentiel.map((t, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.95rem', color: 'var(--dark)', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--terra)', fontWeight: 800, flexShrink: 0, marginTop: '0.05rem' }}>•</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 pillars */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Por qué contar con nosotros</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            El presupuesto adecuado, el momento adecuado, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>y un suelo que aguanta.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {piliers.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What water does */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Lo que el agua le hace de verdad a un suelo</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            El daño visible, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>y el que no se ve.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {symptomes.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{i + 1}. {s.title}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By covering type (cards) */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Cada material reacciona de forma distinta</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            ¿Reparar o reemplazar? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>Se decide en el emplazamiento.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '820px' }}>
            Un parqué, una moqueta y un suelo de PVC no se comportan igual frente al agua. Algunos se recuperan tras el secado, otros se reemplazan. Diagnosticamos material por material, soporte incluido, antes de decidir.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {parType.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The quote / working with insurer */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro verdadero papel en su expediente</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', maxWidth: '900px' }}>
            Entregamos el presupuesto <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que esperan la aseguradora y el perito.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem', maxWidth: '900px' }}>
            En un expediente de daños por agua, la reparación del suelo suele estar cubierta por la aseguradora, con sujeción a su póliza, la franquicia y cualquier depreciación. Pero para presupuestar la indemnización, todos necesitan lo mismo: un presupuesto de reparación claro y detallado. Es exactamente lo que producimos. Retirada del suelo antiguo, preparación del soporte, suministro, colocación, zócalos y acabados: cada partida está presupuestada, legible tanto por un perito como por un gestor de siniestros.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, margin: '0 0 2.5rem', maxWidth: '900px' }}>
            Estamos acostumbrados a este diálogo. Si el perito pide una aclaración, la aportamos. Si hay que justificar una partida, la justificamos. No gestionamos su expediente por usted y no sustituimos a su aseguradora, pero le damos el elemento técnico que hace avanzar la indemnización. Y sea cual sea el marco, convenio IRSI o derecho común, el principio sigue siendo el mismo: un presupuesto justo protege sus intereses.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              { t: 'Un presupuesto en el formato adecuado', d: 'Detallado, presupuestado línea por línea, con las superficies y el tipo de revestimiento. El documento que un perito puede leer y validar sin idas y venidas.' },
              { t: 'El diálogo con el perito', d: 'Ajustamos, aclaramos, justificamos las partidas si nos lo piden. Hablamos el mismo lenguaje técnico.' },
              { t: 'La verdad sobre la depreciación', d: 'Explicamos qué cuenta como nuevo, qué puede llevar una reducción por depreciación, y por qué. Sin falsas promesas.' },
              { t: 'Idéntico al original o mejor', d: 'Volver a colocar el mismo suelo, o pasar a una gama más adecuada para la humedad. Le decimos qué está cubierto y qué queda a su cargo.' },
            ].map((b, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra)', marginBottom: '0.6rem' }}>{b.t}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{b.d}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2rem', padding: '1.25rem 1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--dark)' }}>Bueno saberlo:</strong> el convenio IRSI regula, entre aseguradoras, la gestión de los daños por agua hasta 5000 euros sin IVA de daños por unidad, principalmente en edificios y comunidades de propietarios. Los umbrales de peritaje, la franquicia y la depreciación dependen de su póliza. Esta página da una referencia general y no sustituye el asesoramiento de su aseguradora.
          </p>
        </div>
      </section>

      {/* CTA inline 1 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un siniestro que presupuestar?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Venimos a ver el suelo y a presupuestarlo para la aseguradora.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Valentin se desplaza, observa el suelo dañado, mide el estado del soporte y le entrega un presupuesto detallado, listo para trasladar a su aseguradora. Una visita gratuita y sin compromiso.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=revetement-sol-degat-des-eaux" variant="primary" size="md">Pedir mi visita</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Drying / moisture (dark) */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra-on-dark)', marginBottom: '1.5rem' }}>El punto que nunca descuidamos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.9rem, 3.4vw, 3rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', maxWidth: '960px' }}>
            Nunca recolocamos <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>sobre un soporte húmedo.</em>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(248, 245, 238, 0.78)', maxWidth: '900px', margin: '0 0 2.5rem', lineHeight: 1.8 }}>
            Es el error más costoso tras unos daños por agua: rehacer el suelo demasiado rápido, sobre una solera que todavía tiene agua dentro. Unos meses después, el nuevo revestimiento se ampolla, se despega, o el moho vuelve desde abajo. Y entonces la aseguradora no vuelve a pagar. Preferimos medir, esperar lo que haga falta, y recolocar sobre un soporte realmente sano. Es menos espectacular que un trabajo de 48 horas, pero es lo que hace que un suelo rehecho dure diez años en lugar de seis meses.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { t: 'Medición de humedad', d: 'Comprobamos la humedad residual del soporte antes de cualquier decisión de recolocación. Una cifra, no una impresión.' },
              { t: 'El tiempo de secado', d: 'De unos días a varias semanas según los daños. Hacemos el presupuesto mientras tanto para no perder el expediente.' },
              { t: 'Tratamiento del soporte', d: 'Raspado del adhesivo antiguo, autonivelado, nivelación. La base condiciona todo lo demás.' },
              { t: 'Recolocar cuando está sano', d: 'Solo recolocamos cuando el soporte está listo. Sin colocaciones por comodidad sobre un suelo que volverá a dañarse.' },
            ].map((b, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid rgba(248, 245, 238, 0.15)', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra-on-dark)', marginBottom: '0.6rem' }}>{b.t}</div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.7)', lineHeight: 1.65, margin: 0 }}>{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps table */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>El expediente, paso a paso</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            A modo de referencia, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>cómo se desarrolla un expediente.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '820px' }}>
            Nada fijo aquí: el orden y los plazos varían según su aseguradora, la magnitud del siniestro y su póliza. Es solo una idea del recorrido. Los pasos que nos conciernen son la visita, el presupuesto, la preparación y la recolocación.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: '640px' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Paso</th>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Quién se encarga</th>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Nota</th>
                </tr>
              </thead>
              <tbody>
                {etapes.map((r, i) => (
                  <tr key={i}>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--border)', fontWeight: 700, color: 'var(--dark)' }}>{r.phase}</td>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--dark)' }}>{r.qui}</td>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--muted)' }}>{r.cle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>De la primera llamada a la estancia entregada</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Ocho pasos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>del siniestro a la recolocación.</em>
          </h2>
          <div data-flow="steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {process.map((p, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
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

      {/* Targets */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Con quién hablamos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.03em' }}>
            Particulares, comunidades, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>profesionales: nos encargamos de los tres.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: '1.25rem' }}>
            {cibles.map((m, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra)', marginBottom: '0.5rem' }}>{m.nom}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Know-how / honest proof */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Por qué confiar en nosotros</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', maxWidth: '900px' }}>
            Artesanos del suelo, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>no instaladores de paso.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem', maxWidth: '900px' }}>
            CB Sols son más de 28 años de colocación de revestimientos de suelo en Charente-Maritime: parqué, moqueta, PVC y linóleo, tanto para particulares como en hoteles, restaurantes, comercios y locales de pública concurrencia. La preparación del soporte, el diagnóstico de humedad, la retirada limpia y la recolocación cuidada son nuestro trabajo diario. Es exactamente este saber hacer lo que aportamos a los daños por agua.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, margin: 0, maxWidth: '900px' }}>
            No subcontratamos la colocación a equipos que no conocemos. Tiene un único interlocutor, Valentin, de la inspección a la entrega. Y un taller en Villedoux, a veinte minutos de La Rochelle, donde también fabricamos alfombras y moquetas a medida. Un trabajo de artesano, del presupuesto a la última junta de zócalo.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/es/realisations" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--terra)', textDecoration: 'none' }}>Ver nuestros proyectos →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Las preguntas que nos hacen</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Daños por agua y suelos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>las respuestas de un artesano.</em>
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

      {/* See also */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Ver también</div>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Un siniestro es a menudo la ocasión de empezar de nuevo sobre un suelo más adecuado. Descubra nuestros servicios de colocación, mantenimiento y presupuesto.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            <Link href="/es/devis-revetement-sol" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Presupuesto de revestimiento de suelo →</Link>
            <Link href="/es/nettoyage-moquettes" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Limpieza de moquetas →</Link>
            <Link href="/es/nettoyage-sols" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Limpieza de suelos →</Link>
            <Link href="/es/particuliers" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Para particulares →</Link>
            <Link href="/es/realisations" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Nuestros proyectos →</Link>
            <Link href="/es/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom de Villedoux →</Link>
          </div>
        </div>
      </section>

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            ¿Unos daños por agua han estropeado sus suelos? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Nos encargamos.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '680px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Venimos a ver el suelo dañado, medimos el estado del soporte, y le entregamos un presupuesto detallado listo para su aseguradora. Después recolocamos un suelo limpio, cuando el soporte está sano. Trabajamos en La Rochelle, en Charente-Maritime, en Île de Ré e Île d&apos;Oléron.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=revetement-sol-degat-des-eaux" variant="primary" size="md">Pedir un presupuesto para el seguro</Button>
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
