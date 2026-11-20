import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Moqueta y revestimiento de suelo para casino | CB Sols',
  description: 'CB Sols acompaña a casinos y salas de juego en sus revestimientos de suelo: moqueta a medida, tráfico intensivo, acústica, conformidad para edificios de pública concurrencia y colocación por fases sin cerrar el establecimiento. La Rochelle y el oeste de Francia.',
  alternates: {
    canonical: 'https://cbsols.fr/es/revetement-sol-casino',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-casino', en: 'https://cbsols.fr/en/revetement-sol-casino', es: 'https://cbsols.fr/es/revetement-sol-casino', },
  },
  openGraph: {
    title: 'Moqueta y revestimiento de suelo para casino | CB Sols',
    description: 'Revestimiento de suelo para casinos: moqueta a medida, resistencia al tráfico, confort acústico, clasificación al fuego para pública concurrencia y obra por fases sin detener la actividad. CB Sols, artesano de La Rochelle.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-casino.jpg', width: 1200, height: 630 }],
  },
}

const piliers = [
  { title: 'Diseño a medida', desc: 'El suelo de un casino son varios cientos de metros cuadrados que participan directamente en la identidad del lugar. Moqueta tejida o impresa, un motivo dibujado para la casa, un logotipo integrado, una zonificación que separa los ambientes: tratamos el suelo como una pieza de arquitectura interior, no como un consumible extendido a toda prisa.' },
  { title: 'Resistencia al tráfico', desc: 'Una sala de juego funciona sin parar, los siete días de la semana, toda la noche. Paso repetido, mobiliario que se desplaza, colas que pisan el mismo punto. Seleccionamos revestimientos de uso intensivo preparados para este régimen, allí donde un suelo de consumo ya habría cedido en un año.' },
  { title: 'Confort acústico', desc: 'Máquinas, juegos electrónicos, conversaciones, música, bares, restaurante: un casino concentra fuentes sonoras. El suelo textil absorbe el ruido de pisadas e impactos y suaviza claramente el sonido de una sala concurrida. Es una de las razones reales para poner moqueta en un casino.' },
  { title: 'Continuidad de la actividad', desc: 'Cerrar para rehacer un suelo significa pérdida de ingresos cada noche. Dividimos la obra por zonas y ajustamos las intervenciones a las horas tranquilas para limitar al máximo el impacto en su actividad. Ahí es donde marcamos la verdadera diferencia.' },
]

const contraintes = [
  { title: 'Tráfico muy intensivo', desc: 'Las zonas de circulación y los alrededores de las máquinas soportan años de paso intenso. El revestimiento debe conservar su aspecto cuando el resto ya habría cedido. Apuntamos a las clasificaciones de uso más exigentes, ajustadas a cada zona.' },
  { title: 'Horario de apertura', desc: 'Un establecimiento abierto hasta las 3 o las 4 de la madrugada deja pocas ventanas para trabajar. El JOA de Châtelaillon-Plage, por ejemplo, abre los 7 días de la semana de 9.30 a 3 h, y hasta las 4 h los viernes, sábados y vísperas de festivo. El suelo debe colocarse en estas franjas estrechas.' },
  { title: 'Acústica', desc: 'El suelo textil reduce el ruido de pisadas e impactos y contribuye al confort de jugadores, personal y espacios de restauración. El rendimiento varía según la referencia: elegimos la construcción en función del sonido buscado, sala por sala.' },
  { title: 'Manchas y mantenimiento', desc: 'Bebidas, restauración, circulación continua: la facilidad de mantenimiento es lo primero. Desde la elección prevemos la facilidad de limpieza, la resistencia y la posibilidad de reemplazar una zona localizada sin rehacer todo el espacio.' },
  { title: 'Una imagen de gama alta', desc: 'El suelo es una gran superficie visual. Transmite el ambiente, delimita los espacios, guía la circulación, realza las mesas y las máquinas. Una identidad fuerte también se construye sobre el suelo, no solo sobre las paredes.' },
  { title: 'Normativa de pública concurrencia', desc: 'Un casino es un edificio de pública concurrencia. La reacción al fuego, la accesibilidad y las exigencias reglamentarias se estudian según el uso de cada sala. Integramos estos requisitos desde la recomendación, no como un apaño antes de la comisión de seguridad.' },
]

const zones = [
  { zone: 'Sala de máquinas tragaperras', produit: 'Moqueta de uso intensivo o revestimiento en losetas', cle: 'Tráfico intensivo, acústica, sustitución localizada' },
  { zone: 'Sala de juegos de mesa', produit: 'Moqueta en rollo, textil de gama alta', cle: 'Imagen premium, confort, diseño a medida' },
  { zone: 'Recepción y entrada', produit: 'Felpudo a medida, revestimiento resistente', cle: 'Primera impresión, suciedad del exterior, accesibilidad' },
  { zone: 'Restaurante', produit: 'Textil de uso intensivo o PVC según concepto', cle: 'Manchas, mantenimiento, acústica, estética' },
  { zone: 'Bar', produit: 'Revestimiento de PVC resiliente', cle: 'Resistencia a líquidos, mantenimiento, seguridad' },
  { zone: 'Sala de espectáculos', produit: 'Moqueta de uso intensivo clasificada al fuego', cle: 'Acústica, pública concurrencia, tráfico elevado' },
  { zone: 'Pasillos y circulación', produit: 'Revestimiento en losetas o PVC compacto', cle: 'Resistencia muy alta, sustitución de losetas' },
  { zone: 'Back office y oficinas', produit: 'Losetas de moqueta acústica', cle: 'Durabilidad, mantenimiento, coste total' },
  { zone: 'Aseos', produit: 'PVC en lámina soldada, zócalo sanitario', cle: 'Entorno húmedo, limpieza frecuente' },
  { zone: 'Escaleras', produit: 'Revestimiento de uso intensivo con mamperlán', cle: 'Seguridad, resistencia, exigencias reglamentarias' },
]

const zonesDetail = [
  { title: 'Sala de máquinas tragaperras', desc: 'El corazón del casino, y el suelo que más sufre. Tráfico intenso, ruido permanente, equipos electrónicos por todas partes, vasos derramados. Aquí colocamos moqueta de uso intensivo, a menudo en losetas: cuando una zona se desgasta frente a una batería de máquinas, reemplazamos solo las losetas afectadas, no toda la sala.' },
  { title: 'Sala de juegos de mesa', desc: 'Aquí, la imagen premium marca las reglas. Confort bajo los pies, acústica mullida, diseño cuidado. Moqueta en rollo o textil de gama alta, un motivo coordinado con el mobiliario, juntas dominadas para un aspecto sin costuras alrededor de las mesas.' },
  { title: 'Recepción y entrada', desc: 'La primera impresión, y la línea de defensa contra la arena y el agua del exterior. Un felpudo empotrado a medida, una zona técnica que atrapa la suciedad, un revestimiento resistente al tráfico. Todo diseñado accesible, recorridos sin resalto de umbral.' },
  { title: 'Restaurante y bar', desc: 'Dos ambientes, dos lógicas. En el restaurante, textil de uso intensivo o PVC según el concepto, elegido para resistir las manchas y mantener la acústica. En el bar, prioridad a los revestimientos resilientes que resisten los líquidos y se limpian rápido, sin ser resbaladizos.' },
  { title: 'Circulación y pasillos', desc: 'La red que lo une todo, y que se desgasta de forma continua. Se exige una resistencia muy alta. Las losetas tienen un valor real aquí: una zona dañada se reemplaza localmente, sin inmovilizar un pasillo largo ni rehacer decenas de metros de una vez.' },
  { title: 'Back office y aseos', desc: 'Entre bastidores. Del lado de las oficinas, losetas acústicas para el confort de los equipos y un coste total dominado. Del lado de los aseos, PVC en lámina soldada subida en zócalo sanitario, sin recovecos donde se deposite la suciedad, pensado para la limpieza frecuente.' },
]

const dallesVsLes = {
  les: {
    title: 'Moqueta en rollo',
    quand: 'Prefiérala por la continuidad gráfica',
    points: [
      'Un aspecto homogéneo, sin interrupción del motivo',
      'Grandes composiciones y motivos complejos',
      'El aspecto premium de las salas de juegos de mesa',
      'Una personalización gráfica muy avanzada',
    ],
  },
  dalles: {
    title: 'Revestimiento en losetas',
    quand: 'Prefiéralo por el mantenimiento',
    points: [
      'Sustitución localizada de las zonas dañadas',
      'Intervención rápida, obra por fases',
      'Ideal en caso de manchas puntuales',
      'Fácil de mantener un stock de losetas de repuesto',
    ],
  },
}

const process = [
  { step: 'Visita y auditoría', desc: 'Venimos a ver el suelo en vivo: soportes, superficies, flujos, zonas de desgaste, limitaciones técnicas y, sobre todo, el horario de actividad. Ahí es donde entendemos el trabajo real.' },
  { step: 'Recomendación', desc: 'A cada zona su revestimiento, elegido según el tráfico, la clasificación al fuego, la acústica y el diseño. Reunimos el dossier técnico junto con el presupuesto.' },
  { step: 'Muestras y diseño', desc: 'Validación de las texturas, colores, motivos y cualquier personalización. El suelo se decide sobre una muestra, no sobre una foto de catálogo.' },
  { step: 'Plan de fases', desc: 'Una división por zonas, un orden de trabajo, horarios, tiempos de parada. El planning se fija con sus equipos antes de tocar el primer metro cuadrado.' },
  { step: 'Preparación del soporte', desc: 'Cualquier retirada, preparación, autonivelado si procede, tratamiento del soporte. Un buen suelo empieza por un soporte limpio y sano.' },
  { step: 'Colocación', desc: 'Realizada por los equipos de CB Sols. Colocación soldada, replanteo, subidas de zócalo, acabados. Cada zona se entrega limpia y operativa.' },
  { step: 'Entrega', desc: 'Comprobaciones, acabados, los documentos técnicos que necesita el proyecto. Le entregamos lo necesario para registrar la obra y pasar las inspecciones con tranquilidad.' },
  { step: 'Mantenimiento y conservación', desc: 'Limpieza, mantenimiento, sustitución localizada, intervención puntual. Seguimos siendo su interlocutor en el tiempo, no solo el día de la colocación.' },
]

const cibles = [
  { nom: 'Dirección del establecimiento', detail: 'Director del casino, responsable del establecimiento: el interlocutor que valora el impacto de una obra en la actividad tanto como el aspecto final.' },
  { nom: 'Responsables técnicos y de obra', detail: 'Responsable técnico, de mantenimiento o de obra: quien quiere lo concreto sobre el fuego, la accesibilidad y las fases, no un discurso comercial.' },
  { nom: 'Direcciones inmobiliarias de grupos', detail: 'La dirección inmobiliaria y de obras de un grupo multisede: la necesidad de un instalador fiable, capaz de mantener un pliego homogéneo de un establecimiento a otro.' },
  { nom: 'Arquitectos y jefes de proyecto', detail: 'Arquitecto, arquitecto de interiores, jefe de proyecto, contratista general: un instalador que entiende el plano, respeta el replanteo y entrega el dossier técnico esperado.' },
]

const preuves = [
  { nom: 'Hôtel La Baronnie', detail: 'Una alfombra a medida para un hotel con carácter. El gesto exacto de la moqueta personalizada: dibujo, fabricación en el taller, un acabado cuidado.' },
  { nom: 'Restaurante con estrella Michelin, La Rochelle', detail: 'La moqueta de un restaurante gastronómico. Una exigencia de imagen premium, acústica mullida y mantenimiento en un entorno de restauración.' },
  { nom: 'Bistrot de la Grande Terrasse', detail: 'Moqueta colocada en un local de pública concurrencia con mucho tráfico. Una exigencia de tráfico y de durabilidad en el tiempo.' },
  { nom: 'Golf de la Prée', detail: 'Moquetas y suelos de un club deportivo abierto al público. Coordinación de zonas y ambientes en un mismo emplazamiento.' },
]

const essentiel = [
  'CB Sols coloca y renueva suelos de casino: sala de máquinas tragaperras, juegos de mesa, recepción, restaurante, bar, circulación y back office.',
  'La moqueta sigue siendo el producto estrella, pero cada zona recibe el revestimiento adecuado: moqueta de uso intensivo, losetas, textil de gama alta, PVC resiliente o una alfombra a medida.',
  'Moqueta a medida posible: un motivo dibujado para la casa, un logotipo integrado, zonificación y coordinación con el mobiliario.',
  'Clasificación al fuego, accesibilidad y exigencias de pública concurrencia integradas desde la elección del revestimiento, según el uso de cada sala.',
  'Obra organizada por zonas y en horas de menor actividad para limitar al máximo el impacto en la actividad del establecimiento.',
  'Una empresa con sede en Villedoux, cerca de La Rochelle. Trabajamos en Charente-Maritime, Vendée, Nouvelle-Aquitaine y, más ampliamente, por todo el oeste de Francia según el proyecto.',
]

const faq = [
  { q: '¿Qué moqueta elegir para un casino?', a: 'No hay una única moqueta de casino, sino un revestimiento ajustado a cada zona. En la sala de máquinas y la circulación preferimos una moqueta de uso intensivo muy resistente, a menudo en losetas para poder reemplazar localmente. En los juegos de mesa buscamos la imagen premium con moqueta en rollo o un textil de gama alta. La elección se hace según el tráfico, la clasificación al fuego de la zona, la acústica buscada y el diseño. Decidimos tras una visita al emplazamiento, no a partir de un catálogo.' },
  { q: '¿Por qué se usa moqueta en los casinos?', a: 'Por tres razones concretas. Primero la acústica: un casino concentra máquinas, juegos electrónicos, conversaciones, música y restauración, y el suelo textil absorbe parte del ruido de pisadas e impactos. Después el confort y la imagen: la moqueta transmite el ambiente, delimita los espacios y realza las mesas y las máquinas. Por último la personalización: permite integrar un motivo o un logotipo propio del establecimiento. La moqueta no es una elección estética gratuita, es una elección funcional.' },
  { q: '¿Losetas o moqueta en rollo para un casino?', a: 'Ambas tienen su caso, según el objetivo. La moqueta en rollo da un aspecto homogéneo, sin interrupción del motivo, ideal para grandes composiciones gráficas y el aspecto premium de los juegos de mesa. Las losetas brillan en el mantenimiento: una zona dañada o manchada se reemplaza localmente, sin rehacer cientos de metros cuadrados, lo que es valioso en un establecimiento en actividad. A menudo combinamos ambas en un mismo emplazamiento: rollos donde prima el diseño, losetas donde prima el mantenimiento.' },
  { q: '¿Se puede crear una moqueta a medida para un casino?', a: 'Sí. La moqueta se presta a la personalización: un motivo dibujado a medida, colores coordinados con el mobiliario, una zonificación que separa los ambientes, la repetición de un dibujo sobre grandes superficies. Algunas gamas de uso intensivo ofrecen soluciones de personalización dedicadas. Siempre validamos el resultado sobre una muestra antes de lanzar la producción, para evitar sorpresas desagradables en la colocación.' },
  { q: '¿Se puede integrar el logotipo del casino en la moqueta?', a: 'Sí, según la técnica y la gama elegidas, es posible integrar un logotipo o un motivo de marca en la moqueta, tanto en la recepción como en las salas. Es un punto a resolver desde la recomendación, porque condiciona la elección del producto y el replanteo. Estudiamos la viabilidad y el resultado antes de comprometerle.' },
  { q: '¿Cómo se reduce el ruido en una sala de máquinas tragaperras?', a: 'El suelo textil es una de las palancas. Una moqueta de uso intensivo absorbe parte del ruido de pisadas e impactos y suaviza el sonido de una sala saturada de fuentes. Por ejemplo, una referencia como la Balsan Top Design 1300 declara un aislamiento al ruido de impacto de 30 dB (ΔLw) y una absorción acústica al ruido aéreo de 0,25 (αw). Estos valores son propios de esa referencia: elegimos la construcción según el nivel de confort acústico buscado.' },
  { q: '¿Qué revestimiento elegir para una sala de máquinas tragaperras?', a: 'Una moqueta de uso intensivo preparada para el tráfico intensivo, muy a menudo en losetas. Las losetas permiten reemplazar una zona desgastada frente a una batería de máquinas sin tocar el resto de la sala, y gestionar las manchas localmente. También seleccionamos las características técnicas útiles para este entorno, como las propiedades antiestáticas, según el pliego del establecimiento.' },
  { q: '¿Qué revestimiento elegir para los juegos de mesa?', a: 'Aquí, la imagen y el confort son lo primero. Nos orientamos hacia la moqueta en rollo o un revestimiento textil de gama alta, con un motivo a medida posible y juntas dominadas alrededor de las mesas. La acústica mullida y el aspecto premium cuentan tanto como la resistencia, porque es una zona de alto valor de imagen.' },
  { q: '¿Qué suelo elegir para el restaurante y el bar de un casino?', a: 'Depende del concepto. En el restaurante, un textil de uso intensivo o un PVC según el ambiente, elegido para resistir las manchas, mantener la acústica y seguir siendo atractivo. En el bar, a menudo preferimos un revestimiento resiliente que resiste los líquidos, se limpia rápido y es seguro bajo los pies. La elección correcta se hace según el concepto del lugar y su nivel de actividad.' },
  { q: '¿Qué clasificación al fuego prever para una moqueta de casino?', a: 'No hay una única respuesta válida en todas partes. Un casino es un edificio de pública concurrencia, y el nivel de reacción al fuego exigido depende de la zona, la configuración, el soporte y el uso de la sala, según la normativa de seguridad de pública concurrencia. Una moqueta de uso intensivo como la Balsan Top Design 1300 tiene, por ejemplo, una clasificación Bfl-s1. Estudiamos la exigencia aplicable proyecto por proyecto y seleccionamos un producto que la cumpla, con el informe de clasificación en mano.' },
  { q: '¿Se puede cambiar la moqueta de un casino sin cerrar el establecimiento?', a: 'Ese es todo el reto, y nuestro método está pensado para ello. Un casino abre con horarios muy largos, a veces hasta las 3 o las 4 de la madrugada, y un cierre total resulta costoso. Dividimos la obra por zonas y ajustamos las intervenciones a las franjas tranquilas, por rotación, para limitar el impacto al máximo. No prometemos cero cierre en todos los casos, pero estudiamos la planificación por fases que menos perturbe su actividad.' },
  { q: '¿Se puede colocar la moqueta de noche?', a: 'Sí. La retirada, la preparación y la colocación pueden organizarse en horas de menor actividad y por zonas, para mantener la actividad del establecimiento todo lo posible. El horario nocturno se fija con sus equipos de antemano, zona por zona, de modo que una superficie se entregue limpia y operativa antes de la reapertura.' },
  { q: '¿Cómo se mantiene una moqueta de casino?', a: 'Con un plan de mantenimiento: limpieza periódica, tratamiento rápido de las manchas y sustitución localizada cuando una zona se desgasta, sobre todo si el suelo está colocado en losetas. Mantener un stock de losetas de repuesto del mismo lote permite actuar rápido sin diferencia de color. Un mantenimiento regular alarga claramente la vida del revestimiento.' },
  { q: '¿Cuál es la vida útil de una moqueta profesional en un casino?', a: 'No hay una única cifra honesta que dar. La vida útil depende del tráfico de la zona, de la construcción del revestimiento, de su ubicación, de su mantenimiento y de la capacidad de reemplazar localmente las partes desgastadas. Un pasillo muy transitado no envejece como un salón de juegos de mesa. Precisamente por eso razonamos por zonas y mantenemos el mantenimiento en el circuito, en lugar de indicar un plazo fijo.' },
]

export default function RevetementSolCasinoPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/revetement-sol-casino#service',
        name: 'Revestimiento de suelo y moqueta para casinos',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'Country', name: 'France' },
          { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
          { '@type': 'AdministrativeArea', name: 'Vendée' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Colocación y renovación de moqueta y revestimiento de suelo para casinos y salas de juego',
        description: 'Revestimiento de suelo para casinos: moqueta a medida, losetas, textil de gama alta y PVC resiliente para la sala de máquinas, los juegos de mesa, la recepción, el restaurante, el bar y la circulación. Tráfico intensivo, acústica, clasificación al fuego para pública concurrencia y colocación por fases sin detener la actividad.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Revestimiento de suelo para casino', item: 'https://cbsols.fr/es/revetement-sol-casino' },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'Renovar el suelo de un casino sin detener la actividad',
        description: 'El método CB Sols para colocar un revestimiento de suelo de casino en un emplazamiento en uso, de la inspección al mantenimiento.',
        step: process.map((p, i) => ({ '@type': 'HowToStep', position: i + 1, name: p.step, text: p.desc })),
      },
      {
        '@type': 'WebPage',
        '@id': 'https://cbsols.fr/es/revetement-sol-casino#webpage',
        url: 'https://cbsols.fr/es/revetement-sol-casino',
        name: 'Revestimiento de suelo y moqueta para casinos',
        description: 'Servicio CB Sols: moqueta a medida y revestimiento de suelo para casinos, ajustado al tráfico intensivo, la acústica y las limitaciones de pública concurrencia, colocado por fases sin cerrar el establecimiento.',
        dateModified: '2026-09-22',
        inLanguage: 'es',
        isPartOf: { '@id': 'https://cbsols.fr/#website' },
        about: { '@id': 'https://cbsols.fr/es/revetement-sol-casino#service' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revestimiento de suelo para casino</span>
          </div>
          <div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              El suelo de un casino{' '}
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>no se rehace como cualquier otro.</em>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '900px' }}>
              Un casino no es una única superficie homogénea. Es una sala de máquinas que funciona sin parar, unos juegos de mesa que quieren premium, una recepción que recibe la arena del exterior, un restaurante, un bar, una circulación que nunca para. Cada espacio tiene su revestimiento, elegido según el tráfico, la acústica, la clasificación al fuego y la imagen. Nuestro verdadero oficio aquí no es extender una moqueta: es rehacer sus suelos sin cerrar el establecimiento. Detrás de todo ello, más de 28 años de colocación y un taller a veinte minutos de La Rochelle.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/es/contact?from=revetement-sol-casino" variant="primary" size="md">Estudiar su proyecto</Button>
              <Button href="/es/showroom" variant="outline" size="md">Ver el showroom</Button>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Cuatro exigencias, al mismo tiempo</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Resistencia, diseño, silencio, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>continuidad de la actividad.</em>
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

      {/* Constraints */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Lo que un suelo de casino debe soportar</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Las seis exigencias <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de un suelo de casino.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {contraintes.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{i + 1}. {s.title}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones (cards) */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Una solución por espacio</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            No ofrecemos una moqueta de casino. <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>Estudiamos cada zona.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '820px' }}>
            Un casino se divide en espacios que no tienen ni el mismo uso, ni el mismo tráfico, ni la misma exigencia de imagen. Seleccionamos el revestimiento ajustado a cada uno, en lugar de imponer el mismo producto en todas partes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {zonesDetail.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick-reference table */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Algunas pautas por zona</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            A modo de ejemplo, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>lo que podríamos plantear.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '820px' }}>
            Nada fijo aquí: son pautas habituales, para dar una idea. La elección real la fijan su proyecto, sus limitaciones y su presupuesto, tras una visita al emplazamiento.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: '640px' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Zona</th>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Pauta posible</th>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Punto clave</th>
                </tr>
              </thead>
              <tbody>
                {zones.map((r, i) => (
                  <tr key={i}>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--border)', fontWeight: 700, color: 'var(--dark)' }}>{r.zone}</td>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--dark)' }}>{r.produit}</td>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--muted)' }}>{r.cle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tiles vs sheets */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>La elección que siempre surge</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            ¿Losetas o moqueta en rollo? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>Depende de la zona.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '820px' }}>
            Ninguna es mejor en términos absolutos. La elección depende del proyecto, del soporte, del diseño buscado, del uso de la zona y de su estrategia de mantenimiento. A menudo combinamos ambas en un mismo emplazamiento.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {[dallesVsLes.les, dallesVsLes.dalles].map((col, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.4rem', letterSpacing: '-0.02em' }}>{col.title}</h3>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>{col.quand}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {col.points.map((p, j) => (
                    <li key={j} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--terra)', fontWeight: 800, flexShrink: 0 }}>→</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2rem', padding: '1.25rem 1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-alt)', fontSize: '0.9rem', color: 'var(--dark)', lineHeight: 1.7 }}>
            <strong>El argumento que cuenta:</strong> una zona dañada no tiene por qué obligar a reemplazar varios cientos de metros cuadrados. Con unas losetas bien elegidas, reemplazamos lo que está dañado, y nada más.
          </p>
        </div>
      </section>

      {/* CTA inline 1 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un proyecto de renovación en preparación?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Nos desplazamos a ver el suelo y lo presupuestamos.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '540px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Los planos, las fotos y las superficies bastan para un primer análisis. Valentin acude al emplazamiento, observa cada zona, le aconseja sobre el revestimiento adecuado y las fases, y le entrega un presupuesto preciso, sin compromiso.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=revetement-sol-casino" variant="primary" size="md">Estudiar mi proyecto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Upkeep / shampooing */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>No solo colocamos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            También mantenemos los suelos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>no solo el día de la colocación.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Una moqueta de casino se desgasta donde el tráfico es más intenso, y se mancha donde se bebe. En lugar de esperar a la sustitución, ofrecemos un servicio de mantenimiento: lavado con champú, inyección-extracción, quitamanchas, recuperación de las zonas marcadas. Un suelo mantenido dura mucho más que uno abandonado a su suerte.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '1.5rem' }}>
            {[
              { t: 'Lavado de moqueta con champú', d: 'Limpieza en profundidad de las fibras, con champú o inyección-extracción, para revivir el color y retirar lo que la aspiradora no se lleva. Como trabajo puntual o pasada regular.' },
              { t: 'Quitamanchas y recuperación', d: 'Tratamiento de las manchas de bebida y de las zonas más marcadas, antes de que se incrusten. A menudo recuperamos una zona que creíamos apta para reemplazar.' },
              { t: 'Contrato de mantenimiento', d: 'Una pasada programada a la frecuencia que le convenga, con prioridad en las zonas de mucho tráfico. El suelo se mantiene presentable todo el año, sin pensar en ello.' },
              { t: 'Sustitución localizada', d: 'Cuando una zona en losetas está realmente desgastada, reemplazamos justo lo necesario. Al mantener un stock del mismo lote, el tono se mantiene igualado.' },
            ].map((b, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra)', marginBottom: '0.6rem' }}>{b.t}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{b.d}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=revetement-sol-casino-entretien" variant="primary" size="md">Pedir un presupuesto de mantenimiento</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Bespoke */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>El suelo como firma</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', maxWidth: '900px' }}>
            Varios cientos de metros cuadrados <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que transmiten la identidad del lugar.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem', maxWidth: '900px' }}>
            En un casino, el suelo es una de las mayores superficies visuales del establecimiento. Participa directamente en la identidad del lugar. La moqueta se presta a un verdadero trabajo de diseño: un motivo dibujado a medida, colores coordinados con el mobiliario, un logotipo integrado, una zonificación que separa los ambientes, la repetición de un dibujo sobre grandes composiciones.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, margin: 0, maxWidth: '900px' }}>
            Siempre validamos el resultado sobre una muestra antes de lanzar la producción. Algunas gamas de uso intensivo ofrecen soluciones de personalización dedicadas y mencionan aplicaciones para casino. Es el mismo gesto que nuestras alfombras de hotel a medida, trasladado a la escala de una sala de juego: el suelo se convierte en un componente de la arquitectura interior, no en un fondo neutro.
          </p>
        </div>
      </section>

      {/* Dark: stays open */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra-on-dark)', marginBottom: '1.5rem' }}>El argumento que lo cambia todo</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.9rem, 3.4vw, 3rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', maxWidth: '960px' }}>
            Su casino sigue abierto. <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Trabajamos a su alrededor.</em>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(248, 245, 238, 0.78)', maxWidth: '900px', margin: '0 0 2.5rem', lineHeight: 1.8 }}>
            Un casino abre con horarios muy largos, a veces hasta las 3 o las 4 de la madrugada. Cerrar el establecimiento por completo para rehacer los suelos es una limitación económica y operativa pesada. No se lo pedimos. Dividimos la obra por zonas y ajustamos las intervenciones a las franjas tranquilas, por rotación, para limitar al máximo el impacto en la actividad. La retirada, la preparación y la colocación pueden organizarse en horas de menor actividad, zona por zona, para mantener la actividad todo lo posible. No prometemos cero cierre en todos los casos, pero construimos la planificación por fases que menos perturbe sus ingresos.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { t: 'Obra por zonas', d: 'El trabajo avanza superficie a superficie, nunca todo a la vez. Una zona terminada se entrega antes de empezar la siguiente.' },
              { t: 'Horas de menor actividad', d: 'Noches y horas tranquilas. Díganos cuándo la sala está calmada, ajustamos la colocación a esa franja.' },
              { t: 'Coordinación con sus equipos', d: 'El planning se valida con usted de antemano, alineándolo con la actividad y con los demás oficios.' },
              { t: 'Vuelta rápida al servicio', d: 'Cada zona terminada se entrega limpia y operativa, lista para reabrir al público.' },
            ].map((b, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid rgba(248, 245, 238, 0.15)', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra-on-dark)', marginBottom: '0.6rem' }}>{b.t}</div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.7)', lineHeight: 1.65, margin: 0 }}>{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fire / public building / accessibility */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pública concurrencia, fuego, accesibilidad</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', maxWidth: '900px' }}>
            La normativa se estudia, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>no se recita.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem', maxWidth: '900px' }}>
            Un casino es un edificio de pública concurrencia. Evitamos los atajos del tipo &ldquo;una moqueta de casino debe ser necesariamente Bfl-s1&rdquo;: es demasiado simplista y falso según el espacio. La normativa de seguridad fija niveles distintos de reacción al fuego según la naturaleza del establecimiento, la zona, la configuración, el soporte y el uso de la sala. La clasificación al fuego, la accesibilidad y las limitaciones de pública concurrencia se integran desde la elección del revestimiento, y seleccionamos las soluciones según el uso de los espacios y las exigencias técnicas del proyecto.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, margin: 0, maxWidth: '900px' }}>
            En cuanto a la accesibilidad, cuidamos la continuidad de los recorridos, las juntas entre materiales, la ausencia de resalto de umbral, los felpudos y la adherencia. Sin una promesa general de conformidad sin conocer el contexto: cada proyecto tiene su propio estudio. Los textos oficiales de referencia son la normativa de seguridad contra incendios y pánico en los edificios de pública concurrencia.
          </p>
        </div>
      </section>

      {/* CTA inline 2 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Una ventana de actividad que aprovechar?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Dénos la franja y ajustamos la colocación a ella.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Noches, días de menor afluencia, rotación de salas: díganos cuándo respira el establecimiento, organizamos la obra a su alrededor.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=revetement-sol-casino-mid" variant="primary" size="md">Hablar de su proyecto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>De la visita al mantenimiento</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Ocho pasos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>ajustados a su actividad.</em>
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
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Con quién hablamos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.03em' }}>
            Un interlocutor <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que habla su idioma.</em>
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

      {/* Proof */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Lo que ya hemos colocado</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            No presumimos de haber rehecho cincuenta casinos. <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>Ya dominamos sus exigencias.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '900px' }}>
            Hoteles, restaurantes con estrella, locales de pública concurrencia, moqueta a medida, emplazamientos en actividad: son exactamente las exigencias técnicas que comparte un casino. Estos son algunos proyectos en los que ya las hemos cumplido.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {preuves.map((m, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.5rem' }}>{m.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{m.detail}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/es/realisations" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--terra)', textDecoration: 'none' }}>Ver todos nuestros proyectos →</Link>
          </div>
        </div>
      </section>

      {/* Coverage area */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestra zona</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', maxWidth: '900px' }}>
            La costa atlántica <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>y el oeste de Francia.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, margin: 0, maxWidth: '900px' }}>
            Con sede en Villedoux, cerca de La Rochelle, CB Sols acompaña a establecimientos de Charente-Maritime, Vendée, Nouvelle-Aquitaine y, más ampliamente, por todo el oeste de Francia según el proyecto. La costa atlántica cuenta con muchos casinos, de Châtelaillon-Plage y Fouras a Royan, pasando por Les Sables-d&apos;Olonne, Saint-Jean-de-Monts, Saint-Brevin, Pornic y La Baule. Todos ellos establecimientos para los que un instalador regional, ágil y versado en las limitaciones de pública concurrencia, cambia las reglas del juego frente a los grandes generalistas nacionales.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Las preguntas que nos hacen</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Suelos de casino, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>las respuestas de un artesano.</em>
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
            CB Sols trabaja allí donde el suelo sufre y se aplican las normas de pública concurrencia: hotel, administración pública, aeropuerto, cabina de avión de negocios. Las mismas exigencias, el mismo cuidado por el detalle.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            <Link href="/es/revetement-sol-aeroport" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Revestimiento de suelo para aeropuertos →</Link>
            <Link href="/es/moquette-jet-prive" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moqueta para jet privado →</Link>
            <Link href="/es/secteurs/hotellerie" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Hostelería →</Link>
            <Link href="/es/secteurs/collectivites" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Sector público →</Link>
            <Link href="/es/services/pose-moquette" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Colocación de moqueta →</Link>
            <Link href="/es/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom de Villedoux →</Link>
          </div>
        </div>
      </section>

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            ¿Planifica la renovación de un casino? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Hablemos de verdad.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '680px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Los planos, las fotos y las superficies ya permiten un primer análisis. Estudiamos con usted los revestimientos, las limitaciones técnicas y las fases para limitar el impacto de la obra en su actividad. Una visita al emplazamiento en Charente-Maritime, Vendée y Nouvelle-Aquitaine.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=revetement-sol-casino" variant="primary" size="md">Estudiar mi proyecto</Button>
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
