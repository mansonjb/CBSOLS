import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Revestimiento de suelo para aeropuertos y terminales | Tráfico intensivo, normas de pública concurrencia',
  description: 'Colocación y renovación de suelos para aeropuertos y terminales: vestíbulo, embarque, salas VIP, oficinas. PVC y moqueta clasificados Cfl-s1, accesibilidad, antideslizante. Trabajo en emplazamiento ocupado, trabajo nocturno. CB Sols, La Rochelle.',
  alternates: {
    canonical: 'https://cbsols.fr/es/revetement-sol-aeroport',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-aeroport', en: 'https://cbsols.fr/en/revetement-sol-aeroport', es: 'https://cbsols.fr/es/revetement-sol-aeroport', },
  },
  openGraph: {
    title: 'Revestimiento de suelo para aeropuertos y terminales | Tráfico intensivo, normas de pública concurrencia',
    description: 'Suelos técnicos para terminales: clasificados al fuego Cfl-s1, accesibilidad táctil, antideslizante, tráfico clase 34. Colocación por fases sin cerrar la terminal. CB Sols, artesano de La Rochelle.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-aeroport.jpg', width: 1200, height: 630 }],
  },
}

const zones = [
  { title: 'Vestíbulo de salidas y llegadas', desc: 'El punto de paso obligado. Suelas mojadas, ruedas de maletas, carros de equipaje: fluye sin parar desde el primer vuelo hasta el último. Un suelo que se raya aquí se nota desde lejos. Extendemos PVC compacto o LVT en clase 34, soldado en caliente para que ninguna junta se abra, y que se lava con una sola pasada de fregadora.' },
  { title: 'Sala de embarque y de espera', desc: 'Aquí la gente espera, sentada, de pie, a veces una hora. Lo que oye cuenta tanto como lo que ve. Losetas de moqueta que rompen el eco y dan calidez a la sala. Y si el suelo se desgasta frente a los asientos, cambiamos las losetas afectadas, no toda la sala.' },
  { title: 'Mostradores de facturación', desc: 'Una cola serpenteante, básculas, carros cargados girando en el mismo punto todo el día. Desgaste localizado pero brutal. Revestimiento anti-indentación bajo las zonas de carga, contrastes de suelo para canalizar el flujo, umbrales tratados para que nada se enganche.' },
  { title: 'Sala VIP y aviación de negocios', desc: 'El lugar donde el aeropuerto mima a sus mejores pasajeros. Dejamos lo puramente técnico para el material: moqueta de lana, alfombras a medida cosidas a mano en el taller, un replanteo sin costuras. Exactamente el gesto que ya dominamos en las cabinas de jet privado.' },
  { title: 'Oficinas del operador y administración', desc: 'Detrás de los mostradores, plantas enteras: operador, aerolíneas, seguridad. El espacio diáfano significa ruido. Losetas de moqueta acústica, colocadas planta por planta, de noche, sin cortar nunca el trabajo de los equipos.' },
  { title: 'Circulación, aseos y esclusas', desc: 'Entre bastidores, donde la higiene se juega de verdad. PVC en lámina soldada subido en zócalo sanitario, sin recovecos donde se deposite la suciedad. En las puertas, un felpudo empotrado detiene el agua y la arena antes de que entren en la terminal.' },
]

const specs = [
  { title: 'Reacción al fuego', desc: 'Cfl-s1. Es la clasificación que exige un edificio de pública concurrencia de este tamaño, y la primera línea que lee la comisión de seguridad. Llegamos con los informes de clasificación y la trazabilidad de los lotes. No con promesas.' },
  { title: 'Accesibilidad', desc: 'Un aeropuerto debe poder recorrerse casi con los ojos cerrados. Bandas podotáctiles de aviso en los puntos sensibles, contraste visual de los recorridos, umbrales sin resalto. El suelo guía igual que la señalización.' },
  { title: 'Resistencia al deslizamiento', desc: 'El agua entra por las puertas, se acumula en las esclusas, cerca de los aseos. Un suelo resbaladizo ahí, con este volumen de gente, significa una caída segura. Ponemos la clasificación antideslizante adecuada donde hace falta, sin convertir el resto en papel de lija.' },
  { title: 'Tráfico intensivo', desc: 'No hablamos de una sala que recibe veinte personas al día. Una terminal son decenas de miles de pasos. Por eso, clase 33 o 34, el uso más exigente de la escala, el que conserva su aspecto cuando todo lo demás ya habría cedido.' },
  { title: 'Acústica', desc: 'Una terminal ya es un bullicio permanente. No hace falta añadirle un suelo duro que lo devuelve todo. La moqueta y las bases absorben el ruido de impactos en las salas de espera, las salas VIP y las oficinas. Decibelios ganados sin pensarlo.' },
  { title: 'Higiene', desc: 'El suelo de un aeropuerto se limpia de noche, rápido, todos los días. Por eso, ninguna junta abierta, ningún rincón muerto: láminas soldadas en caliente, zócalo sanitario, superficies que hacen eficaz la fregadora desde la primera pasada.' },
]

const produits = [
  { name: 'PVC compacto y LVT de alta densidad', desc: 'El caballo de batalla de las zonas que lo soportan todo: vestíbulo, circulación, mostradores. Una capa de uso gruesa, fuego Cfl-s1, tráfico clase 34, colocación soldada para una superficie de una sola pieza. Decorados de madera, hormigón o piedra: resiste como un suelo técnico y parece un buen suelo.' },
  { name: 'Losetas de moqueta de uso intensivo', desc: 'Para todo lo que debe ser cómodo y silencioso: embarque, salas VIP, oficinas. La ventaja de la loseta es la reparación. ¿Una zona se desgasta frente a los asientos? Reemplazamos veinte losetas en una noche, y al día siguiente nadie ve la diferencia.' },
  { name: 'Moqueta de lana y alfombras a medida', desc: 'La pieza central de las salas VIP. Lana auténtica, un tacto denso, alfombras cortadas al milímetro en el taller de Villedoux, dobladillos cosidos a mano. El mismo gesto que en una alfombra de cabina de avión de negocios, trasladado al suelo de la terminal.' },
  { name: 'Grandes felpudos', desc: 'La primera línea de defensa, empotrada en las entradas. Atrapa el agua, la arena y la grava antes de que rayen todo lo demás. Bien dimensionado, hace que cada uno de los suelos colocados detrás de él dure más.' },
]

const process = [
  { step: 'Inspección en servicio', desc: 'Venimos a ver el suelo en vivo, en pleno funcionamiento. Una inspección zona por zona, una conversación con el responsable técnico, una comprobación de los accesos y de las franjas realmente disponibles. Ahí es donde entendemos el trabajo real, no sobre un plano.' },
  { step: 'Estudio de productos y normas', desc: 'A cada zona su revestimiento, elegido según el tráfico, la clasificación al fuego Cfl-s1, la resistencia al deslizamiento y la accesibilidad. Reunimos el dossier técnico y los informes de clasificación junto con el presupuesto, nunca a posteriori.' },
  { step: 'Fases y planificación', desc: 'El quid de la cuestión. Dividimos la obra en zonas lo bastante pequeñas para no bloquear nunca un flujo, y ajustamos las intervenciones a las noches y las horas tranquilas. El planning se valida con el operador antes de tocar el primer metro cuadrado.' },
  { step: 'Coordinación de seguridad', desc: 'Zona restringida, reglas estrictas. Acreditaciones, autorizaciones, una escolta si hace falta, control del material que entra. Preparamos todo eso de antemano y nos alineamos con los demás oficios ya presentes. La seguridad no se negocia, la cumplimos.' },
  { step: 'Colocación por zonas', desc: 'Retirada, autonivelado, colocación soldada, acabados, limpieza. Cada zona se entrega limpia y operativa antes de la apertura, con la obra protegida para que los lotes siguientes no la dañen. Por la mañana es sencillo: nunca existimos.' },
  { step: 'Entrega y dossier', desc: 'Le entregamos el dossier completo: informes de clasificación al fuego, fichas técnicas, números de lote. Lo suficiente para pasar la comisión de seguridad sin buscar un papel, y conservar una trazabilidad limpia para el futuro.' },
]

const clients = [
  { nom: 'Aeropuertos regionales', detail: 'Nuestro objetivo principal. Terminales a escala humana que renovamos por tramos, sin cerrar nunca todo. El formato exacto donde nuestro método por fases marca la diferencia.' },
  { nom: 'Aviación de negocios y FBO', detail: 'Terminales privadas, salas de recepción, hangares. El nivel de exigencia de un cliente que viaja en jet, que ya conocemos por nuestro trabajo en cabinas.' },
  { nom: 'Aeroclubes y aeródromos', detail: 'Club house, sala de briefing, recepción. Trabajos cortos, un único interlocutor, una agilidad que los grandes gigantes no pueden ofrecer.' },
  { nom: 'Salas VIP', detail: 'Salas de aerolínea, espacios de tarjeta de fidelidad. Aquí, hablan el material y el silencio: lana, alfombras a medida, juntas invisibles.' },
  { nom: 'Zonas comerciales de la terminal', detail: 'Comercios, restauración, servicios, tanto en zona pública como en zona restringida. Suelos que soportan el tráfico sin romper el ambiente, colocados a las horas que convienen al operador.' },
  { nom: 'Oficinas y locales del operador', detail: 'Plantas de administración, seguridad, back office. Losetas acústicas colocadas planta por planta, de noche, para que nadie pierda un día de trabajo.' },
]

const aeroports = [
  { nom: 'La Rochelle Île de Ré', detail: 'Nuestro aeropuerto local, a veinte minutos del taller de Villedoux. Vuelos a Londres, Lyon o Oporto, con un pico de afluencia en verano.' },
  { nom: 'Poitiers Biard', detail: 'El aeropuerto de Vienne, líneas regulares y chárter. Una terminal compacta, ideal para renovar por tramos.' },
  { nom: 'Angoulême Cognac', detail: 'El aeropuerto de Charente, tráfico de negocios y de ocio, a menos de dos horas de nuestra base.' },
  { nom: 'Bordeaux Mérignac', detail: 'Uno de los mayores aeropuertos regionales de Francia: vestíbulos, salas VIP y oficinas, obras planificadas con antelación.' },
  { nom: 'Nantes Atlantique', detail: 'El gran aeropuerto del oeste, afluencia muy alta. Zonas públicas y de oficinas por renovar sin cierre.' },
  { nom: 'Limoges Bellegarde', detail: 'El aeropuerto del Limousin, líneas nacionales e internacionales, una terminal por modernizar zona por zona.' },
  { nom: 'Brive Vallée de la Dordogne', detail: 'Un aeropuerto reciente de Corrèze, tráfico regular. Superficies públicas, sala de embarque y sala VIP.' },
  { nom: 'Tours Val de Loire', detail: 'El aeropuerto de Tours, low cost y aviación de negocios. Un vestíbulo y una zona de embarque con mucho tráfico.' },
  { nom: 'Bergerac Dordogne Périgord', detail: 'El aeropuerto del Périgord, muy concurrido en verano con visitantes británicos. Una terminal con fuerte tráfico estacional.' },
  { nom: 'Rennes Saint-Jacques', detail: 'El aeropuerto bretón en crecimiento, una terminal ampliada, grandes zonas de oficinas y salas VIP.' },
  { nom: 'Clermont-Ferrand Auvergne', detail: 'El aeropuerto de Auvernia en el centro de Francia, tráfico de negocios sostenido, salas VIP y oficinas del operador.' },
  { nom: 'Pau Pyrénées', detail: 'El aeropuerto del Béarn, tráfico de negocios y de montaña, vestíbulos y salas VIP por mantener todo el año.' },
]

const faq = [
  { q: '¿Qué norma de fuego se aplica al suelo de un aeropuerto?', a: 'Una terminal es un edificio de pública concurrencia de gran aforo: el suelo debe estar clasificado al fuego según la norma EN 13501-1, en la práctica Cfl-s1 en las zonas de circulación y públicas, es decir, difícilmente inflamable y con baja emisión de humo. En concreto, solo colocamos productos que tengan este informe de clasificación en vigor, y conservamos la trazabilidad de los lotes. Es precisamente el dossier que exige la comisión de seguridad, y somos nosotros quienes se lo proporcionamos, listo para presentar.' },
  { q: '¿Pueden trabajar sin cerrar la terminal?', a: 'Sí, es todo el método. Nunca pedimos que la terminal cierre. La obra se divide en zonas y se programa de noche o en horas tranquilas, fuera de los picos de vuelos. Una zona se retira, se prepara, se coloca y se vuelve a lavar en la misma franja, y después se entrega al público antes de la reapertura. El pasajero del día siguiente camina sobre un suelo nuevo sin haber visto la sombra de una obra.' },
  { q: '¿Cómo gestionan el acceso a la zona restringida y la seguridad?', a: 'Al pie de la letra. Según la zona, pasa por acreditaciones temporales, autorizaciones, a veces una escolta de un agente del operador, y el control de todo el material que entra. Resolvemos estos trámites con sus equipos antes de empezar, y ajustamos nuestra presencia a la de los demás contratistas. La seguridad de un aeropuerto no se negocia: la cumplimos, y forma parte del oficio.' },
  { q: '¿Qué revestimiento para un vestíbulo de muy alto tráfico?', a: 'Un PVC compacto o un LVT de alta densidad, en tráfico clase 34 y fuego Cfl-s1, colocado en láminas soldadas en caliente. Obtenemos una superficie continua y estanca, sin juntas donde se enganche la suciedad, capaz de soportar decenas de miles de pasos, ruedas y carros al día sin marcarse. Es también el suelo más rentable a largo plazo: se limpia rápido y rara vez se reemplaza.' },
  { q: '¿El suelo es accesible para personas con movilidad reducida?', a: 'Sí, y se piensa desde la inspección. Contraste visual de los recorridos, bandas podotáctiles de aviso en los puntos singulares como el inicio de una escalera o un cambio de dirección, umbrales sin resalto más allá de la normativa. El suelo trabaja con la señalización para guiar a las personas con visión reducida y facilitar el paso de las sillas de ruedas.' },
  { q: '¿Qué revestimientos para las salas VIP y las salas de espera?', a: 'Todo se reduce al confort y al silencio. En la sala de espera, colocamos losetas de moqueta acústica de uso intensivo; en las salas VIP de prestigio, moqueta de lana y alfombras a medida fabricadas en el taller. El formato de loseta tiene una ventaja real: cuando una zona se desgasta frente a los asientos, reemplazamos justo lo necesario, sin rehacer todo el espacio ni cerrarlo mucho tiempo.' },
  { q: '¿Cuáles son los plazos en este tipo de obra?', a: 'Depende de la superficie y, sobre todo, de las fases que permita la operación. El suelo de una sala VIP o de una oficina se resuelve en unas noches. Un vestíbulo completo se planifica por tramos a lo largo de varias intervenciones. No anunciamos un plazo sacado de la nada: lo construimos tras la inspección, ajustado a sus franjas, con una vuelta al servicio limpia en cada paso.' },
]

const essentiel = [
  'CB Sols coloca y renueva suelos de aeropuertos y terminales: vestíbulo, embarque, salas VIP, mostradores y oficinas.',
  'Revestimientos clasificados al fuego Cfl-s1 (norma EN 13501-1), antideslizantes y accesibles con bandas podotáctiles de aviso.',
  'Suelos en tráfico clase 33 y 34, el uso más intensivo de la escala, para soportar decenas de miles de pasos.',
  'Trabajo en emplazamiento ocupado: trabajo nocturno y en horas tranquilas, zona por zona, sin cerrar nunca la terminal.',
  'Productos colocados: PVC compacto y LVT, losetas de moqueta, moqueta de lana y alfombras a medida, felpudos.',
  'Un taller en Villedoux, cerca de La Rochelle. Trabajamos en Charente-Maritime, Vendée y Nouvelle-Aquitaine, presupuesto gratis tras la inspección.',
]

const tableRows = [
  { zone: 'Vestíbulo de salidas y llegadas', produit: 'PVC compacto o LVT de alta densidad', cle: 'Fuego Cfl-s1, tráfico clase 34, láminas soldadas en caliente' },
  { zone: 'Sala de embarque', produit: 'Losetas de moqueta de uso intensivo', cle: 'Confort acústico, reparable loseta a loseta' },
  { zone: 'Mostradores de facturación', produit: 'PVC anti-indentación', cle: 'Resiste los carros, contrastes de guiado' },
  { zone: 'Sala VIP', produit: 'Moqueta de lana, alfombras a medida', cle: 'Confort, silencio, acabado de gama alta' },
  { zone: 'Oficinas del operador', produit: 'Losetas de moqueta acústica', cle: 'Absorción del ruido de espacio diáfano' },
  { zone: 'Esclusas y aseos', produit: 'PVC en lámina soldada, felpudos', cle: 'Higiene, resistencia al deslizamiento, zócalo sanitario' },
]

export default function RevetementSolAeroportPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/revetement-sol-aeroport#service',
        name: 'Revestimiento de suelo para aeropuertos y terminales',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'Country', name: 'France' },
          { '@type': 'Place', name: 'La Rochelle Île de Ré Airport' },
          { '@type': 'Place', name: 'Poitiers Biard Airport' },
          { '@type': 'Place', name: 'Angoulême Cognac Airport' },
          { '@type': 'Place', name: 'Bordeaux Mérignac Airport' },
        ],
        serviceType: 'Colocación y renovación de suelos de PVC, LVT y moqueta para terminales',
        description: 'Revestimiento de suelo para vestíbulos, salas de embarque, salas VIP, mostradores y oficinas de un aeropuerto. Productos clasificados Cfl-s1, accesibilidad táctil, antideslizante, tráfico clase 34. Trabajo en emplazamiento ocupado, trabajo nocturno por fases.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Revestimiento de suelo para aeropuertos', item: 'https://cbsols.fr/es/revetement-sol-aeroport' },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'Renovar el suelo de un aeropuerto sin cerrar la terminal',
        description: 'El método CB Sols para colocar un revestimiento de suelo de terminal en un emplazamiento ocupado, de la inspección a la entrega del dossier de conformidad.',
        step: process.map((p, i) => ({ '@type': 'HowToStep', position: i + 1, name: p.step, text: p.desc })),
      },
      {
        '@type': 'WebPage',
        '@id': 'https://cbsols.fr/es/revetement-sol-aeroport#webpage',
        url: 'https://cbsols.fr/es/revetement-sol-aeroport',
        name: 'Revestimiento de suelo para aeropuertos y terminales',
        description: 'Guía y servicio CB Sols: suelos de PVC, LVT y moqueta para vestíbulos, salas VIP y oficinas de aeropuerto, clasificados Cfl-s1, accesibles y antideslizantes, colocados sin cerrar la terminal.',
        dateModified: '2026-09-14',
        inLanguage: 'es',
        isPartOf: { '@id': 'https://cbsols.fr/#website' },
        about: { '@id': 'https://cbsols.fr/es/revetement-sol-aeroport#service' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revestimiento de suelo para aeropuertos</span>
          </div>
          <div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              El suelo de un aeropuerto,{' '}
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>colocado sin cerrar la terminal.</em>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '900px' }}>
              No se cierra un aeropuerto para rehacer un suelo. Así que hacemos lo contrario: avanzamos mientras duerme. Zona por zona, de noche o en horas tranquilas, el revestimiento antiguo se va, el soporte se rehace, el suelo nuevo se coloca y se lava antes del primer vuelo. Vestíbulo, embarque, mostradores, salas VIP, oficinas: cada espacio tiene su revestimiento, clasificado al fuego, accesible, construido para un tráfico que pocos lugares conocen. Detrás de todo ello, más de 28 años de oficio y un taller a veinte minutos de La Rochelle.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/es/contact?from=revetement-sol-aeroport" variant="primary" size="md">Pedir un presupuesto</Button>
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

      {/* Zones */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Una terminal no es una única superficie</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Seis espacios, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>seis maneras de desgastar un suelo.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {zones.map((c, i) => (
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>De un vistazo</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.03em' }}>
            El revestimiento adecuado, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>zona por zona.</em>
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: '640px' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Zona</th>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revestimiento recomendado</th>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Norma y punto clave</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((r, i) => (
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

      {/* CTA inline 1 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un proyecto de renovación en preparación?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Nos desplazamos a ver el suelo y lo presupuestamos.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Vestíbulo, sala VIP, oficinas o sala técnica: Valentin acude al emplazamiento, observa lo que hay que hacer, le aconseja sobre el revestimiento adecuado y le entrega un presupuesto preciso, sin compromiso.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=revetement-sol-aeroport" variant="primary" size="md">Pedir un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Technical specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Lo que un suelo de terminal debe soportar</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em' }}>
            El pliego, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>sin adornos.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {specs.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{i + 1}. {s.title}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Lo que extendemos, y por qué</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cuatro materiales, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>cada uno en su lugar.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {produits.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '1.5rem 0', borderBottom: i < produits.length - 1 ? '1px solid var(--border)' : 'none' }}>
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
          <p style={{ marginTop: '2.5rem', fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7 }}>
            Trabajamos con los fabricantes que saben hacer uso intensivo: Gerflor, Tarkett, objectflor, egeCarpets. Ningún suelo de consumo repintado con los colores del aeropuerto. Cada producto se elige por su ficha técnica y su informe de clasificación, porque es ese documento, y no el precio gancho, el que pasa la comisión de seguridad.
          </p>
        </div>
      </section>

      {/* Client types */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Con quién hablamos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Del campo del aeroclub <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>a la sala de primera clase.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Cada emplazamiento tiene sus limitaciones de seguridad, de explotación y de imagen. El método no cambia, se ajusta a la configuración y al público de la terminal.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {clients.map((m, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra)', marginBottom: '0.5rem' }}>{m.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional airports */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestra zona</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Aeropuertos regionales, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>del oeste de Francia al centro del país.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Un taller en Villedoux, cerca de La Rochelle. Trabajamos en los aeropuertos regionales del oeste de Francia y del centro del país, con la logística que impone cada emplazamiento: material, fases, desplazamiento de los equipos. La lista no es exhaustiva en absoluto; si su terminal está incluida, venimos a verla.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {aeroports.map((p, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{p.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline 2 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Una ventana de actividad que aprovechar?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Dénos la franja y ajustamos la colocación a ella.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Noches, horas tranquilas, temporada baja: díganos cuándo la terminal está calmada, nos organizamos a su alrededor.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=revetement-sol-aeroport-mid" variant="primary" size="md">Pedir un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>De la primera visita al primer vuelo</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Seis pasos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>ajustados a sus horarios.</em>
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
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Las preguntas que de verdad nos hacen</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Suelos de aeropuerto, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>las respuestas de un artesano.</em>
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
            CB Sols trabaja allí donde el suelo sufre y se aplican las normas de pública concurrencia: cine, administración pública, hotel, cabina de avión de negocios. Las mismas exigencias, el mismo cuidado por el detalle.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            <Link href="/es/moquette-jet-prive" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moqueta para jet privado →</Link>
            <Link href="/es/secteurs/collectivites" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Sector público →</Link>
            <Link href="/es/secteurs/hotellerie" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Hostelería →</Link>
            <Link href="/es/services/sol-pvc-les" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Suelo de PVC en lámina →</Link>
            <Link href="/es/services/tapis-de-proprete" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Felpudos →</Link>
            <Link href="/es/services/pose-moquette" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Colocación de moqueta →</Link>
            <Link href="/es/guide/moquette-acoustique" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moqueta acústica →</Link>
            <Link href="/es/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom de Villedoux →</Link>
          </div>
        </div>
      </section>

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            ¿Un suelo de terminal por rehacer? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Hablemos de verdad.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '640px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita al emplazamiento en Charente-Maritime, Vendée y Nouvelle-Aquitaine. Un presupuesto a medida tras una inspección, con unas fases pensadas para su actividad, no para nuestra comodidad.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=revetement-sol-aeroport" variant="primary" size="md">Pedir un presupuesto</Button>
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
