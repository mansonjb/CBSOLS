import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Mail, MapPin, Sparkles, Store, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Revestimiento de suelo en Biarritz | Villas de la Costa Vasca',
  description: 'Colocación de moqueta, vinilo y alfombras a medida en Biarritz y en la Costa Vasca. Villas de la Belle Époque, residencias contemporáneas, hoteles Relais & Châteaux. CB Sols, más de 28 años de experiencia, desplazamiento desde La Rochelle.',
  alternates: {
    canonical: 'https://cbsols.fr/es/revetement-sol-biarritz',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-biarritz', en: 'https://cbsols.fr/en/revetement-sol-biarritz', es: 'https://cbsols.fr/es/revetement-sol-biarritz', },
  },
  keywords: ['revestimiento de suelo Biarritz', 'moqueta para villa Biarritz', 'suelo Costa Vasca', 'colocación de alfombras Biarritz', 'artesano del suelo Biarritz'],
  openGraph: {
    title: 'Revestimiento de suelo en Biarritz, la elegancia vasca',
    description: 'Moqueta, vinilo y alfombras a medida en Biarritz. Villas de la Belle Époque frente al mar, residencias contemporáneas, hoteles excepcionales. CB Sols, más de 28 años.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-biarritz.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Villas de la Belle Époque frente al mar', desc: '¿Tiene una villa en primera línea de mar? Colocamos una moqueta de lana o una alfombra cosida a mano sin clavar nada. Respetamos el parqué original y la carpintería. Si quiere retirarla dentro de diez años, todo queda intacto.' },
  { title: 'Residencias contemporáneas de prestigio', desc: 'Su arquitecto ha entregado una villa nueva de cara al océano. Elegimos suelos claros que captan la luz. Sisal sellado o una moqueta de bucle en los dormitorios, una alfombra sobria en el salón. Validamos cada muestra con el despacho.' },
  { title: 'Relais & Châteaux y hoteles de 5 estrellas', desc: 'Dirige un hotel de gran lujo o un Relais & Châteaux. Venimos de noche o en temporada baja. Moqueta ignifugada de alta densidad, alfombras cosidas a mano para las suites. Sus huéspedes nunca ven la obra.' },
  { title: 'Despachos de arquitectos y oficinas excepcionales', desc: 'Recibe a sus clientes en una oficina del centro. Un suelo cuidado marca el tono desde la entrada. Vinilo acústico para los espacios de trabajo, moqueta de lana para la recepción. Lo ajustamos todo a su mobiliario.' },
]

const exigences = [
  { title: 'Respetamos las villas de la Belle Époque', desc: 'Biarritz conserva un patrimonio raro: Belle Époque, neovasco, modernismo. Muchas villas conservan su parqué original. Colocamos de forma reversible, combinamos los colores con la carpintería existente. Nuestra intervención queda discreta, que es como se hace aquí.' },
  { title: 'La luz del océano, la probamos in situ', desc: 'La luz de la Costa Vasca lo cambia todo. Una lana vista en un showroom no tiene nada que ver con la misma colocada de cara al océano. Llevamos las muestras a su casa, las miramos por la mañana y por la tarde. Usted elige sin ninguna mala sorpresa.' },
  { title: 'Sal y humedad, elegimos en consecuencia', desc: 'El aire vasco es suave pero cargado. Los suelos mal elegidos se abomban tras un solo invierno. Seleccionamos fibras tratadas, adhesivos compatibles con el ambiente marino, bases estables. Conserva un suelo limpio y firme, invierno tras invierno.' },
  { title: 'Venimos fuera de julio-agosto', desc: 'El verano en Biarritz está abarrotado. Encajamos las obras entre noviembre y abril, a veces septiembre-octubre. Los proyectos se planifican de cuatro a seis meses antes. Recupera la villa lista para la temporada, sin haber visto pasar un solo rollo.' },
  { title: 'Tres horas y media de carretera', desc: 'Biarritz está a 340 km de nuestro taller. Cuando bajamos, bajamos con el equipo completo y dormimos in situ. Los materiales se preparan en Villedoux antes de salir. In situ, colocamos rápido, sin desplazamientos inútiles.' },
  { title: 'Dialogamos con su arquitecto', desc: 'Muchos proyectos pasan por despachos de París, Londres, Madrid. Nos adaptamos: muestras enviadas al despacho, fotos compartidas en cada etapa, validaciones a distancia. Su arquitecto mantiene el control, usted sigue el proceso con transparencia. Nadie queda al margen.' },
]

const materiaux = [
  { name: 'Moqueta de lana virgen tejida premium', desc: 'Nuestro mejor material para los salones de recepción de las villas de la Belle Époque. La lana adquiere pátina, no se aplasta, envejece con nobleza. Elegimos con usted un liso profundo, un jaspeado discreto o un motivo a medida que encaje con la carpintería original y los revocos de cal vasca. Quince a veinte años tranquilos por delante.' },
  { name: 'Moqueta hospitality de alta gama', desc: 'Para los Relais & Châteaux y los hoteles de 5 estrellas de Biarritz, optamos por gamas ignifugadas en el corazón de la fibra. Pasan la seguridad contra incendios sin dificultad. La gama de colores es amplia, nos alineamos con su decoración. Y soportan ritmos de servicio intensos sin perder su tersura visual entre dos reemplazos.' },
  { name: 'Alfombras a medida cosidas a mano', desc: 'Para los salones de las villas excepcionales y las suites de gran lujo, la alfombra a medida marca la diferencia. Dimensiones al centímetro, un ribete cosido a mano, un motivo adaptado a su decoración. Reproducciones clásicas o creaciones contemporáneas, según el proyecto. Prevea de diez a dieciséis semanas de fabricación. Es lo que viste un parqué original sin ocultarlo.' },
  { name: 'Vinilo de alta densidad para zonas húmedas', desc: 'Para baños, espacios de fitness y zonas de spa de hotel, soldamos las láminas en caliente. El rodapié sube en una media caña redondeada, de modo que el agua no se cuela por ningún sitio. La superficie es ligeramente antideslizante para sus huéspedes descalzos. Y soporta la limpieza intensiva de los establecimientos de prestigio sin inmutarse.' },
  { name: 'Sisal sellado para residencias contemporáneas', desc: 'En una villa moderna de cara al océano, el sisal sellado aporta el toque crudo que se busca. Encaja a la perfección en el espíritu de la Costa Vasca, la madera flotante, los revocos naturales. Tonos jaspeados arena, crudo, topo suave. Resiste el uso familiar clásico y la arena traída de la playa.' },
]

const marques = [
  { name: 'EGE Carpets', desc: 'El danés, nuestra referencia para los Relais & Châteaux y los hoteles de 5 estrellas de la Costa Vasca. Sus gamas Highline y Hospitality marcan el tono desde la entrada.' },
  { name: 'Brintons', desc: 'El Axminster británico, la aristocracia de la moqueta. Hasta treinta y seis colores en un motivo. Recurrimos a él para las villas de la Belle Époque de Biarritz y los grandes interiores patrimoniales.' },
  { name: 'Tisca Tiara', desc: 'El fabricante suizo, lo más alto de gama. Lo sacamos para villas familiares excepcionales y las suites de los hoteles de gran lujo vascos. Cuando el presupuesto acompaña, el resultado no tiene rival.' },
  { name: 'Forbo', desc: 'Cuando el proyecto pide algo natural, miramos hacia Forbo. Su Marmoleum es un auténtico linóleo, sus Surestep soportan las zonas húmedas de hotel sin inmutarse.' },
  { name: 'Object Carpet', desc: 'Los alemanes, para los despachos de arquitectos vascos y las residencias de autor de la meseta de la Atalaye. Un diseño contemporáneo asertivo, acabados perfectos.' },
  { name: 'Bolon', desc: 'El fabricante sueco de vinilo tejido, nuestra referencia para los interiores contemporáneos frente al océano. Lavable, robusto, una paleta densa. Ideal para villas modernas y restaurantes con vistas al mar.' },
  { name: 'Hereke', desc: 'Las alfombras turcas tejidas a mano, en seda o lana virgen. Las colocamos en las bibliotecas y salones de las villas históricas de la Belle Époque. Es el tipo de objeto que se transmite de generación en generación.' },
  { name: 'Gerflor', desc: 'El fabricante francés de Lyon que conocemos a fondo. Sus Mipolam y Texline son nuestro todoterreno para oficinas de arquitectos y las zonas húmedas de hoteles y villas.' },
]

const quartiers = [
  { nom: 'Côte des Basques', detail: 'El paseo marítimo histórico de Biarritz, villas de la Belle Époque de cara al océano, edificios burgueses del siglo XIX. Una vista excepcional sobre la bahía, un patrimonio arquitectónico preservado.' },
  { nom: 'Le Phare', detail: 'Pointe Saint-Martin, la meseta de la Atalaye, residencias de cara al océano. Una mezcla de villas antiguas restauradas y promociones contemporáneas de autor.' },
  { nom: 'Impérial', detail: 'El barrio del Hôtel du Palais, hoteles de gran lujo históricos, villas del Segundo Imperio y de la Belle Époque. El corazón de la historia balnearia de Biarritz, la máxima exigencia para respetar el edificio.' },
  { nom: 'Saint-Charles', detail: 'Un barrio residencial tranquilo y burgués, villas familiares, jardines y pinares. Una clientela apegada a la calidad de ejecución y a la discreción de la intervención.' },
  { nom: 'Aguiléra', detail: 'Una meseta residencial, villas de los años 1930 y contemporáneas, escuelas internacionales y residencias familiares. Promociones de alta gama recientes en pleno pinar.' },
  { nom: 'Bibi Beaurivage', detail: 'Un barrio costero entre la Côte des Basques y Bidart, villas de cara al mar, residencias contemporáneas con vista panorámica sobre el océano.' },
  { nom: 'Anglet', detail: 'Un municipio limítrofe al norte, Chiberta, La Chambre d\'Amour. Villas familiares en el pinar, hoteles junto al mar, clubes históricos de golf y de tenis.' },
  { nom: 'Bidart', detail: 'Un pueblo auténtico al sur, acantilados y playas, villas neovascas de cara al océano, hoteles boutique y residencias contemporáneas de prestigio.' },
  { nom: 'Guéthary', detail: 'Un pequeño puerto vasco preservado, villas familiares históricas, un ambiente de pueblo. Proyectos residenciales raros y exigentes.' },
  { nom: 'Saint-Jean-de-Luz', detail: 'La bahía de Saint-Jean, el puerto pesquero, el casco antiguo protegido. Villas familiares, hoteles con encanto de cara al mar, segundas residencias de prestigio.' },
  { nom: 'Ciboure', detail: 'Al otro lado de la bahía, el puerto de Socoa, casas vascas tradicionales, villas familiares en las laderas frente a Saint-Jean-de-Luz.' },
  { nom: 'Hendaye', detail: 'El extremo sur del País Vasco francés, una inmensa playa, villas de la Belle Époque, residencias contemporáneas de cara al océano y a la frontera española.' },
]

const process = [
  { step: 'Primer contacto', desc: 'Una llamada o un correo. Recopilación de los puntos clave del proyecto vasco: tipo de propiedad, superficies, calendario deseado, contexto (residencia, hotel, despacho). Si el proyecto lo dirige un arquitecto de interiores en París, Londres o Madrid, contactamos directamente con su despacho.' },
  { step: 'Visita a la Costa Vasca', desc: 'Una visita organizada en un plazo de 3 a 4 semanas. Medición, un estudio de los condicionantes de acceso de la villa o del hotel, fotos para coordinar los colores con la carpintería original. Muestras presentadas in situ bajo la luz atlántica, en varios momentos del día.' },
  { step: 'Elección del material y presupuesto', desc: 'Un presupuesto detallado en una semana. Validación final de los colores, las alfombras a medida, los rodapiés y perfiles. Los posibles intercambios con el despacho de arquitectura del proyecto para validación a distancia. El pedido se cursa tras la confirmación, plazo de fábrica de 3 a 12 semanas según la gama.' },
  { step: 'Fabricación en el taller de Villedoux', desc: 'Precorte y premontaje de los materiales en La Rochelle. Una comprobación en seco de las dimensiones antes del transporte. Esta preparación previa es lo que nos permite mantener una colocación final de 4 a 8 días en Biarritz, sin idas y vueltas inútiles por carretera.' },
  { step: 'Colocación en Biarritz', desc: 'Un equipo movilizado in situ, alojamiento incluido. Un calendario fijado según su disponibilidad o la ventana de obra, idealmente fuera de la temporada de verano. Coordinación con el conserje del hotel o el guarda de la villa. Una limpieza completa en la entrega, acabados revisados con usted o con el arquitecto.' },
]

const faq = [
  { q: '¿De verdad vienen a Biarritz desde La Rochelle?', a: 'Sí, en los proyectos que lo justifican. Biarritz está a 340 km, es decir, de 3,5 a 4 horas de carretera. Bajamos para las villas patrimoniales, los Relais & Châteaux, las residencias de autor. El equipo completo se desplaza y se queda in situ mientras dura la obra, alojamiento incluido. Lo preparamos todo por adelantado en el taller, de modo que la colocación in situ va rápido: de cuatro a ocho días para una villa familiar, tras una o dos visitas preparatorias.' },
  { q: '¿Trabajan en las villas de la Belle Époque de Biarritz?', a: 'Sí, es donde más disfrutamos. La Côte des Basques, el Impérial y la Atalaye conservan un soberbio patrimonio de villas de la Belle Époque y neovascas. El parqué, la carpintería, la herrería Art Déco exigen respeto. Siempre que es posible colocamos de forma reversible, sin clavar, sin encolados agresivos. Coordinamos con su arquitecto del patrimonio, ya sea en Francia o en el extranjero.' },
  { q: '¿Trabajan en los hoteles de prestigio de la costa?', a: 'Sí, es una parte importante de nuestra actividad aquí. La Costa Vasca concentra Relais & Châteaux, hoteles de gran lujo históricos y hoteles boutique de alta gama. Colocamos de noche o durante los cierres de temporada para no perturbar la actividad. EGE Highline y Hospitality son nuestras referencias principales, ignifugadas en el corazón de la fibra. Entregamos la trazabilidad de los materiales y los informes contra incendios directamente al director para su expediente.' },
  { q: '¿Cuándo es mejor trabajar en Biarritz?', a: 'De noviembre a abril, fuera de temporada. Para las villas familiares, es el período en el que los propietarios están menos presentes. Para hoteles y restaurantes, es el cierre anual o la temporada baja, generalmente entre mediados de noviembre y finales de febrero. Evitamos julio y agosto, y los grandes períodos de fiestas vascas cuando la costa está saturada. Las buenas ventanas se planifican de cuatro a seis meses antes, sobre todo con una alfombra a medida en el lote.' },
  { q: '¿Trabajan con arquitectos parisinos o internacionales?', a: 'Con frecuencia. Los proyectos de prestigio de Biarritz los especifican a menudo despachos con sede en París, Londres, Madrid o Nueva York. Nos adaptamos a la forma de trabajar a distancia: enviamos las muestras a su despacho, compartimos fotos detalladas en cada etapa, validamos las elecciones antes de lanzar la fabricación. Y aportamos toda la documentación técnica para su expediente de obra premium.' },
  { q: '¿Cómo gestionan la humedad marina?', a: 'El aire vasco está cargado de humedad y sal, requiere atención. Nos orientamos hacia lanas vírgenes con tratamiento hidrófugo, Bolon que no se abomba, vinilo de alta densidad para las estancias expuestas a la salpicadura. Los adhesivos y las bases se eligen por su resistencia al ambiente marino. En las villas de primera línea, a veces reforzamos la preparación del soporte con un tratamiento antihumedad previo.' },
  { q: '¿También colocan alfombras a medida en Biarritz?', a: 'Sí, es una parte importante del oficio en la Costa Vasca. Alfombras cosidas a mano, dimensiones al centímetro, un ribete trabajado, un motivo adaptado a la decoración. Reproducciones Aubusson o Hereke para los interiores de la Belle Époque, creaciones contemporáneas para las villas de autor. Prevea de diez a dieciséis semanas de fabricación. Es a menudo lo que transforma un salón, sobre todo cuando se trata de vestir un parqué original sin ocultarlo.' },
]

export default function RevetementSolBiarritzPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/revetement-sol-biarritz#service',
        name: 'Revestimiento de suelo en Biarritz',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Biarritz' },
          { '@type': 'AdministrativeArea', name: 'Pyrénées-Atlantiques' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Colocación de moqueta, vinilo y alfombras a medida en Biarritz y la Costa Vasca',
        description: 'Diseño, fabricación en taller y colocación de moqueta, vinilo y alfombras a medida para villas de la Belle Époque, hoteles Relais & Châteaux, residencias contemporáneas y despachos de arquitectos en Biarritz, Anglet, Bidart, Saint-Jean-de-Luz.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Revestimiento de suelo en Biarritz', item: 'https://cbsols.fr/es/revetement-sol-biarritz' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="biarritz" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revestimiento de suelo Biarritz</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revestimiento de suelo en Biarritz,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>la elegancia vasca.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Colocación de moqueta, vinilo y alfombras a medida en Biarritz y en la Costa Vasca. Villas de la Belle Époque frente al mar, residencias contemporáneas, hoteles Relais & Châteaux, despachos de arquitectos. Un taller con sede cerca de La Rochelle, desplazamientos organizados para proyectos de prestigio.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=biarritz" variant="primary" size="md">Solicitar un presupuesto</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Proyectos de prestigio</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Biarritz es la exigencia de la Belle Époque frente al océano. Una villa de la Côte des Basques o una suite de Relais & Châteaux: es el mismo esmero por el detalle que CB Sols aporta desde hace más de 28 años.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, propietario de CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Para qué tipo de proyecto</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cuatro escenarios, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>una misma exigencia vasca.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un proyecto en Biarritz?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Una visita de obra, un presupuesto detallado.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Contacto directo con usted o su arquitecto. Una visita organizada en un plazo de 3 a 4 semanas, un presupuesto detallado en una semana.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/es/contact?from=biarritz-cta1" variant="primary" size="md">Solicitar un presupuesto</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Particularidades de la Costa Vasca</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Seis exigencias <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propias de los proyectos vascos.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Trabajar en Biarritz y en la Costa Vasca exige un método propio. Aquí están los seis puntos sobre los que estructuramos nuestro enfoque, de la elección de los materiales a la coordinación internacional.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materiales y gamas para Biarritz</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Las familias de productos <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que llevamos al País Vasco.</em>
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
              &ldquo;Una villa de la Belle Époque de cara al océano es un parqué que respetar, una luz que entender, una sal marina que anticipar. Tres oficios que practicamos desde hace más de 28 años.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, propietario de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?from=biarritz-citation" variant="primary" size="md">Pedir una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Una visita a domicilio en Biarritz</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Fabricantes asociados</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Ocho casas de referencia <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>para sus proyectos vascos.</em>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Barrios y municipios de la Costa Vasca</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Biarritz y la Costa Vasca, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Anglet a Hendaye.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Nuestro equipo se desplaza por toda la Costa Vasca, desde los barrios históricos de Biarritz hasta los pueblos fronterizos del sur, donde se concentran los proyectos residenciales y hoteleros de prestigio.
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
            Veinte minutos por teléfono para aclarar las gamas posibles, el calendario y un orden de magnitud de presupuesto para su obra vasca.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=biarritz-cta2" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro método</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco etapas, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux a Biarritz.</em>
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
            Revestimiento de suelo en Biarritz, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas concretas.</em>
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
            Directamente con el propietario. Sin línea de atención. Un consejo claro, un siguiente paso solo si el proyecto tiene sentido para usted como para nosotros.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="Ver también"
        sectionSubtitle="Nuestra experiencia abarca otros mundos que pueden interesarle. Tómese su tiempo para explorar, haga sus preguntas, que las responderemos."
        items={[
          { href: '/es/revetement-sol-saint-jean-de-luz', title: 'Revestimiento de suelo Saint-Jean-de-Luz', teaser: 'Casas vascas y villas junto al mar. El confort de un suelo pensado para resistir la sal.', icon: MapPin },
          { href: '/es/revetement-sol-arcachon', title: 'Revestimiento de suelo Arcachon', teaser: 'Casas de la bahía y villas de las dunas. Suelos que soportan la arena, la luz y la vida diaria.', icon: MapPin },
          { href: '/es/revetement-sol-cap-ferret', title: 'Revestimiento de suelo Cap Ferret', teaser: 'Cabañas ostrícolas, villas con los pies en la arena. La discreción de un saber hacer que apenas se nota.', icon: Waves },
          { href: '/es/revetement-sol-bordeaux', title: 'Revestimiento de suelo Bordeaux', teaser: 'Casas señoriales, lofts échoppe, casas de piedra. Suelos que dialogan con la arquitectura.', icon: MapPin },
          { href: '/es/sols-monaco', title: 'Suelos en Mónaco', teaser: 'Yates, apartamentos y villas. El nivel de exigencia y discreción que espera una clientela internacional.', icon: Sparkles },
          { href: '/es/architectes', title: 'Para arquitectos', teaser: 'Documentación de materiales, muestras anotadas, presupuestos detallados. Nuestro papel es servir a su visión.', icon: Building2 },
          { href: '/es/showroom', title: 'Showroom de Villedoux', teaser: 'Venga a ver y tocar los materiales. Con cita previa, en Villedoux cerca de La Rochelle.', icon: Store },
          { href: '/es/contact', title: 'Contáctenos', teaser: 'Una pregunta, un proyecto, un presupuesto en 48 horas. El propietario le responde directamente.', icon: Mail },
        ]}
      />

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Su proyecto en Biarritz <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>en buenas manos.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita de obra en Biarritz. Un presupuesto detallado, acabados premium, respeto por el patrimonio vasco y la luz atlántica. Más de 28 años de experiencia de CB Sols al servicio de la Costa Vasca.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=biarritz-final" variant="primary" size="md">Solicitar un presupuesto</Button>
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
