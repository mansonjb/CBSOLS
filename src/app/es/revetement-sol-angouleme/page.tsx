import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Revestimiento de suelo Angoulême | Patrimonio y comercio',
  description: 'Colocación de moqueta, vinilo y alfombras a medida en Angoulême. Casas señoriales de la meseta, oficinas de estudios de cómic, restaurantes gastronómicos, castillos de la Charente. CB Sols, más de 28 años de experiencia, desplazamientos regulares desde Villedoux.',
  alternates: {
    canonical: 'https://cbsols.fr/es/revetement-sol-angouleme',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-angouleme', en: 'https://cbsols.fr/en/revetement-sol-angouleme', es: 'https://cbsols.fr/es/revetement-sol-angouleme', },
  },
  keywords: ['revestimiento de suelo Angoulême', 'moqueta Angoulême', 'suelo de vinilo Angoulême', 'colocación de alfombras Angoulême', 'artesano del suelo Angoulême', 'alfombra para castillo de la Charente'],
  openGraph: {
    title: 'Revestimiento de suelo en Angoulême, la elegancia de las Charentes',
    description: 'Moqueta, vinilo y alfombras a medida en Angoulême. Casas señoriales, estudios de cómic, restaurantes gastronómicos, castillos. CB Sols, más de 28 años de experiencia.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-angouleme.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Casas señoriales de la meseta histórica', desc: 'Tiene una casa señorial en la meseta protegida. Moqueta de lana tejida, una alfombra cosida a mano, juntas precisas sobre el parqué antiguo. Validamos cada detalle con usted antes de colocar. El carácter patrimonial queda intacto.' },
  { title: 'Estudios de cómic y editoriales', desc: 'Está instalando un estudio o una editorial en Angoulême. Vinilo acústico para los suelos, losetas de moqueta en las oficinas, acabados de diseño para el festival del cómic. El suelo respira el universo creativo.' },
  { title: 'Restaurantes gastronómicos y bistronómicos', desc: 'Dirige una mesa en el centro o en el mercado cubierto. Venimos de noche o el día de cierre, no pierde ningún servicio. Una moqueta densa antimanchas y una acústica cuidada.' },
  { title: 'Castillos y residencias rurales', desc: 'Renueva un castillo familiar o una casona de la región del coñac. Alfombras a medida en los salones de recepción, moqueta de lana en el dormitorio principal, juntas sobre el barro cocido o el parqué original.' },
]

const exigences = [
  { title: 'La meseta protegida, la respetamos', desc: 'La meseta de Angoulême es una zona protegida: murallas, catedral, casas señoriales. Colocamos de forma reversible, sin clavar, sin encolados agresivos. El parqué original queda intacto. Nuestro paso es discreto, que es lo que aquí se espera.' },
  { title: 'La ciudad del cómic, hablamos su idioma', desc: 'Angoulême es también estudios, el Museo del Cómic, los frescos. Para un estudio creativo o un loft, proponemos losetas de diseño, lisos nítidos, colores atrevidos. Para un salón clásico, nos quedamos con la lana sobria. Adaptamos el material al lugar, sin complicaciones.' },
  { title: 'Unas dos horas de carretera, y estamos allí', desc: 'Angoulême está a 120 km de nuestro taller, unas dos horas por la A10 o la N141. Está muy cerca. Pasamos por allí varias veces al mes, conocemos la ciudad. Usted llama, venimos a medir en la semana, sin recargo de desplazamiento oculto.' },
  { title: 'Trabajamos con los oficios del patrimonio', desc: 'En las casas señoriales, a menudo hay un ebanista, un dorador, un pintor decorativo. Nos integramos en el calendario del arquitecto, entramos en penúltimo lugar para no dañar la nueva moqueta. Usted no arbitra nada, lo acordamos entre nosotros.' },
  { title: 'Menos eco en los grandes volúmenes', desc: 'Los salones de recepción tienen cinco metros de techo, resuenan. Una moqueta de lana sobre base de fieltro corta la mitad del eco. La estancia recupera su suavidad, las conversaciones se oyen mejor. Y el carácter del lugar queda intacto.' },
  { title: 'Tradición y contemporáneo, sabemos combinarlos', desc: 'Muchos proyectos de aquí mezclan un salón clásico y un estudio creativo bajo el mismo techo. Moqueta de lana por un lado, losetas de diseño por el otro, una junta precisa entre ambos. Conserva su coherencia, sin renunciar ni al patrimonio ni a la modernidad.' },
]

const materiaux = [
  { name: 'Moqueta de lana virgen tejida EGE', desc: 'Nuestro material preferido para los salones de recepción de las casas señoriales de la meseta y los dormitorios de los castillos de la Charente. La lana adquiere pátina, no se aplasta, envejece con nobleza. Elegimos con usted un liso profundo o un motivo geométrico discreto que encaje con la decoración existente. Quince a veinte años por delante.' },
  { name: 'Alfombras Brintons Aubusson reconstruidas a medida', desc: 'Cuando quiere vestir un parqué antiguo sin ocultarlo, la alfombra a medida marca la diferencia. Reproducimos un motivo histórico en lana virgen, un ribete cosido a mano, dimensiones al centímetro. Prevea de diez a dieciséis semanas de fabricación. El resultado habla por sí solo al llegar.' },
  { name: 'Suelos de vinilo de diseño para estudios creativos', desc: 'Para un estudio de cómic, una editorial o una agencia creativa en Angoulême, elegimos vinilos de diseño. Gerflor Texline o Forbo Flotex en motivos contemporáneos, una clasificación clase 33 que soporta un uso intensivo. El aspecto encaja con el universo visual de la ciudad del cómic. Quince a veinte años tranquilos por delante.' },
  { name: 'Vinilo homogéneo para imprentas y talleres', desc: 'En una imprenta o un taller de producción gráfica, el suelo sufre: tintas, disolventes, productos de limpieza. Optamos por vinilo homogéneo clasificado P3, soldado en caliente. Como opción, podemos elegir una versión antiestática para las zonas con equipos sensibles. Veinte a veintiocho años en uso intensivo.' },
  { name: 'Moquetas EGE Highline y Hospitality', desc: 'Para los restaurantes gastronómicos y los hoteles boutique del centro, optamos por gamas ignifugadas en el corazón de la fibra. Pasan la seguridad contra incendios sin dificultad. Una amplia gama de colores para alinearse con su decoración. Y soportan ritmos de servicio intensos sin perder su tersura visual.' },
  { name: 'Perfiles Romus de latón cepillado y bronce patinado', desc: 'Para los umbrales y los peldaños de escalera, cuidamos el detalle. Coordinamos con la herrería original de las casas señoriales y los castillos. En proyectos patrimoniales particulares, podemos encargar perfiles a medida. Es el tipo de detalle que se nota en la entrega, y que marca la diferencia.' },
]

const marques = [
  { name: 'EGE Carpets', desc: 'El danés, nuestra referencia para las casas señoriales de la meseta y los restaurantes gastronómicos de la Charente. Sus gamas Highline y Hospitality marcan el tono de inmediato.' },
  { name: 'Gerflor', desc: 'El fabricante francés de Lyon que conocemos a fondo. Sus gamas equipan los estudios creativos, imprentas, restaurantes y suelos de oficina de Angoulême. Una enorme variedad, un mantenimiento sencillo.' },
  { name: 'Forbo', desc: 'Cuando el proyecto pide algo natural, miramos hacia Forbo. Su Marmoleum es un auténtico linóleo elaborado con aceite de linaza. Los Flotex cubren las agencias creativas, y la gama sanitaria las consultas médicas.' },
  { name: 'Brintons', desc: 'El Axminster británico, la aristocracia de la moqueta. Hasta treinta y seis colores en un motivo. Recurrimos a él para las casas señoriales de la meseta y los castillos ceremoniales de espíritu clásico.' },
  { name: 'Tarkett', desc: 'Para los suelos de oficina que exigen un verdadero confort acústico, optamos por Tarkett iQ Granit. Envejece bien y sigue siendo nuestra referencia también para las zonas húmedas de hotel.' },
  { name: 'Tisca Tiara', desc: 'El fabricante suizo, lo más alto de gama. Lo sacamos para los proyectos residenciales excepcionales y las suites de castillos de la Charente convertidos en Relais & Châteaux.' },
  { name: 'Object Carpet', desc: 'Los alemanes, para estudios de cómic, editoriales y agencias de diseño. Un diseño contemporáneo asertivo, acabados perfectos. Perfectos para la escena creativa de Angoulême.' },
  { name: 'Bolon', desc: 'El fabricante sueco de vinilo tejido. Un aspecto contemporáneo que soporta un tránsito intenso. Los colocamos en vestíbulos de recepción, restaurantes de diseño y los espacios culturales de Angoulême.' },
]

const quartiers = [
  { nom: 'Centro histórico (la meseta)', detail: 'La meseta de Angoulême, murallas, ayuntamiento, catedral de Saint-Pierre, place du Mûrier. Casas señoriales de los siglos XVIII y XIX, edificios ceremoniales, restaurantes gastronómicos, boutiques de prestigio.' },
  { nom: 'Saint-Cybard', detail: 'Un barrio histórico al pie de la meseta, a orillas de la Charente. Antiguas papeleras convertidas en lofts, estudios de artistas, restaurantes de moda, una activa escena cultural del cómic.' },
  { nom: 'Bel-Air-Grand-Font', detail: 'Un barrio residencial en renovación urbana al norte. Obra nueva, equipamientos colectivos, dotaciones escolares y culturales.' },
  { nom: 'Sillac-Grand-Font', detail: 'Un barrio al noreste, una mezcla residencial y de oficinas con sedes de empresas y plataformas logísticas. Viviendas familiares y copropiedades recientes.' },
  { nom: 'La Madeleine', detail: 'Un barrio residencial y comercial al este, un mercado y comercios de proximidad, copropiedades burguesas, consultas de profesiones liberales.' },
  { nom: "L'Houmeau", detail: 'Un barrio histórico a orillas de la Charente, antiguas papeleras y casas obreras renovadas. Una escena cultural creativa, restaurantes y lofts de artistas.' },
  { nom: 'Soyaux', detail: 'Un municipio limítrofe al este, una mezcla de viviendas unifamiliares y zonas de actividad. Sedes de empresas y copropiedades recientes.' },
  { nom: 'Ruelle-sur-Touvre', detail: 'Un municipio limítrofe al este, el valle del Touvre, una mezcla residencial y de patrimonio industrial (antiguas fábricas de armas). Fincas selectas y restauración de edificios.' },
  { nom: 'Fléac', detail: 'Un municipio limítrofe al oeste a orillas de la Charente, residencial de alta gama, fincas familiares y consultas de profesiones liberales. Una clientela apegada a la calidad de ejecución.' },
  { nom: 'Saint-Yrieix-sur-Charente', detail: 'Un municipio limítrofe al noroeste, un lago, dotaciones residenciales y de ocio. Viviendas familiares y urbanizaciones de nivel.' },
  { nom: 'Magnac-sur-Touvre', detail: 'Un municipio limítrofe al este, el valle del Touvre, residencial con carácter y fincas selectas. Patrimonio rural de la Charente que preservar.' },
  { nom: 'Mornac', detail: 'Un municipio limítrofe al noreste, viviendas unifamiliares y chalés familiares. Una clientela estable apegada al asesoramiento personalizado y a los acabados cuidados.' },
]

const process = [
  { step: 'Primer contacto', desc: 'Una llamada o un correo. Recopilación de los puntos clave: tipo de proyecto (casa señorial de la meseta, castillo de la Charente, estudio de cómic, restaurante, oficina), superficie estimada, calendario deseado, posibles condicionantes patrimoniales. Para los proyectos dirigidos por un arquitecto de interiores, contacto directo con su despacho.' },
  { step: 'Visita a Angoulême', desc: 'Una visita organizada en un plazo de 1 a 2 semanas desde Villedoux. Medición con láser, un estudio de los condicionantes de acceso de la meseta, fotos para coordinar los colores con la carpintería y el parqué existentes. Gastos incluidos en el presupuesto si se confirma la obra.' },
  { step: 'Elección del material', desc: 'El showroom de Villedoux o muestras enviadas directamente a Angoulême, a su dirección o a la del arquitecto. Validación final bajo la luz del lugar, nunca en un showroom: la luz de la Charente transforma los colores, sobre todo las lanas de brillo sedoso de los salones de recepción.' },
  { step: 'Fabricación en el taller de La Rochelle', desc: '3 a 16 semanas según la gama: Axminster a medida, Wilton, seda, lana virgen, vinilo cortado, alfombras a medida. Premontaje en seco en el taller para validar el ajuste antes del transporte. Esta preparación es lo que nos permite mantener una colocación final de 2 a 5 días en Angoulême.' },
  { step: 'Colocación en Angoulême', desc: 'Un equipo movilizado in situ, alojamiento incluido en el presupuesto, un calendario fijado según su disponibilidad o la ventana de obra. Coordinación con el conserje, el administrador de la finca o el jefe de obra. Una limpieza completa en la entrega, acabados revisados con usted o con el arquitecto.' },
]

const faq = [
  { q: '¿De verdad vienen a Angoulême desde La Rochelle?', a: 'Sí, y a menudo. Angoulême está a 120 km, menos de dos horas por la A10 o la N141. Está muy cerca. Pasamos por allí con regularidad, dentro del flujo de nuestras obras del suroeste. Venimos a medir al inicio del proyecto, y luego volvemos a colocar al final. El alojamiento está incluido en el presupuesto. En las grandes obras de la meseta o del campo de la Charente, el equipo se queda in situ hasta la entrega.' },
  { q: '¿Trabajan en las casas señoriales de la meseta?', a: 'Sí, es uno de nuestros terrenos preferidos. La meseta concentra casas señoriales de los siglos XVIII y XIX de una calidad asombrosa. El parqué antiguo y la carpintería original exigen respeto. Siempre que es posible colocamos de forma reversible, sin clavar, sin encolados agresivos. Las alfombras Aubusson reconstruidas a medida encuentran allí su marco natural. Coordinamos con su arquitecto de interiores cuando lo hay.' },
  { q: '¿Trabajan con estudios de cómic y la industria creativa?', a: 'Sí, y es un terreno que disfrutamos especialmente. Angoulême, la capital francesa del cómic, concentra estudios, editoriales, escuelas de animación (EMCA), estudios de videojuegos. Las exigencias son precisas: vinilos de diseño para los espacios diáfanos, losetas de moqueta acústicas para las salas de trabajo. Trabajamos con Forbo Flotex, Object Carpet y Bolon para encajar con el universo visual de este ecosistema único en Francia.' },
  { q: '¿Trabajan en los castillos del campo de la Charente?', a: 'Sí, es uno de nuestros terrenos históricos. Alrededor de Cognac, Jarnac, el valle del Touvre, trabajamos en castillos familiares, casas fortificadas restauradas, casonas vinícolas. Coordinamos con su arquitecto de interiores, su decorador o el conservador del patrimonio. Moquetas de lana ceremoniales, alfombras Aubusson a medida, juntas precisas sobre parqué y barro cocido original. Discreción y respeto por el lugar, esa es nuestra marca.' },
  { q: '¿Cómo funciona en una zona protegida de la meseta?', a: 'En un suelo interior, al arquitecto del patrimonio rara vez se le consulta directamente. Pero documentamos todo de todos modos, por costumbre: fichas de material, informes contra incendios, fotos de antes y después. Dispone de un expediente limpio si vende la propiedad más adelante, o si el arquitecto del patrimonio vuelve por otro asunto. Cuando el proyecto afecta a algo visible desde la calle o las murallas, nos alineamos con su arquitecto del patrimonio.' },
  { q: '¿Trabajan durante el Festival Internacional del Cómic?', a: 'Evitamos la última quincena de enero, es una efervescencia total en la meseta. Hoteles, restaurantes, espacios culturales están saturados, el acceso es complicado. Planificamos las obras antes (de octubre a diciembre) o después (marzo-abril). Para las estructuras que exponen durante el festival, ofrecemos una colocación adelantada varias semanas, con una revisión técnica antes de la apertura.' },
  { q: '¿Cuánto dura una moqueta de lana en un castillo?', a: 'Prevea de quince a veinte años con facilidad, en uso privado o semipúblico. La lana virgen adquiere pátina, se densifica en lugar de aplastarse, conserva su tersura visual durante mucho tiempo. En vestíbulos y escaleras monumentales, elegimos más bien una lana tejida apretada con un motivo geométrico discreto, que resiste mejor el tránsito. Una limpieza profesional una vez al año es suficiente, idealmente al final de la temporada de eventos.' },
]

export default function RevetementSolAngoulemePageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/revetement-sol-angouleme#service',
        name: 'Revestimiento de suelo en Angoulême',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Angoulême' },
          { '@type': 'AdministrativeArea', name: 'Charente' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Colocación de moqueta, vinilo y alfombras a medida en Angoulême y la Charente',
        description: 'Diseño, fabricación en taller y colocación de moqueta, vinilo y alfombras a medida para casas señoriales de la meseta, estudios de cómic, restaurantes gastronómicos y castillos de la Charente en Angoulême.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Revestimiento de suelo en Angoulême', item: 'https://cbsols.fr/es/revetement-sol-angouleme' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revestimiento de suelo Angoulême</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revestimiento de suelo en Angoulême,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>la elegancia de las Charentes.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Colocación de moqueta, vinilo y alfombras a medida en Angoulême. Casas señoriales de la meseta histórica, imprentas y oficinas de estudios de cómic, restaurantes gastronómicos, castillos y bellas residencias rurales. Un taller con sede en La Rochelle, desplazamientos a Angoulême organizados cada mes.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=angouleme" variant="primary" size="md">Solicitar un presupuesto</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nos desplazamos hasta usted</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Angoulême es una ciudad donde el patrimonio de la meseta dialoga con la creación contemporánea del cómic. Un terreno rico y exigente, donde CB Sols ha sabido combinar tradición y modernidad durante más de 28 años.&rdquo;
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
            Cuatro escenarios, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>del patrimonio a lo contemporáneo.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un proyecto en Angoulême?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Una visita de obra, un presupuesto detallado.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Contacto directo con su arquitecto de interiores, su decorador o con usted. Una visita organizada en un plazo de 1 a 2 semanas, un presupuesto detallado en una semana.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/es/contact?source=angouleme-cta1" variant="primary" size="md">Solicitar un presupuesto</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Particularidades de Angoulême</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Seis exigencias <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propias de los proyectos de Angoulême.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Trabajar en Angoulême no es reproducir una obra estándar. Aquí están los seis puntos sobre los que estructuramos nuestro método desde la primera visita, para respetar el patrimonio de la meseta y acompañar la creación contemporánea.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materiales y gamas para Angoulême</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Las familias de productos <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que llevamos a la Charente.</em>
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
              &ldquo;Angoulême es saber jugar la moqueta ceremonial en una casa señorial de la meseta por la mañana, y la loseta de diseño para un estudio de cómic en Saint-Cybard por la tarde. CB Sols es exactamente esa versatilidad.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, propietario de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?source=angouleme-citation" variant="primary" size="md">Pedir una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Una visita de obra en Angoulême</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Fabricantes asociados</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Ocho casas de referencia <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>para sus proyectos en Angoulême.</em>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Barrios y municipios donde trabajamos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Angoulême y el Gran Angoulême, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>hasta los valles de la Charente.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Nuestro equipo se desplaza por todo el Gran Angoulême, así como por los municipios del campo circundante de la Charente, donde se concentran los proyectos residenciales patrimoniales, de oficinas creativas y de castillos familiares.
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
            Veinte minutos por teléfono bastan para aclarar las gamas posibles, un calendario realista y un orden de magnitud de presupuesto para su obra en Angoulême.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?source=angouleme-cta2" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro método</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco etapas, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux a Angoulême.</em>
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
            Revestimiento de suelo en Angoulême, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas concretas.</em>
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
            Directamente con el propietario. Sin centralita, sin línea de atención. Un consejo claro, un orden de magnitud honesto, un siguiente paso solo si el proyecto tiene sentido para usted como para nosotros.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Ver también</div>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Nuestra experiencia abarca las Charentes, Charente-Maritime y más allá, en todo terreno patrimonial y creativo excepcional.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/es/revetement-sol-la-rochelle" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Revestimiento de suelo La Rochelle →</Link>
            <Link href="/es/moquette-chateau" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moqueta para castillo →</Link>
            <Link href="/es/revetement-sol-bordeaux" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Revestimiento de suelo Bordeaux →</Link>
            <Link href="/es/architectes" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Arquitectos de interiores →</Link>
            <Link href="/es/particuliers" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Para particulares →</Link>
            <Link href="/es/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom de Villedoux →</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Su proyecto en Angoulême <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>en buenas manos.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita de obra en Angoulême. Un presupuesto detallado, acabados premium, respeto por el patrimonio de la meseta y apoyo a la creación contemporánea. CB Sols, más de 28 años de experiencia al servicio de proyectos excepcionales en la Charente.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=angouleme-final" variant="primary" size="md">Solicitar un presupuesto</Button>
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
