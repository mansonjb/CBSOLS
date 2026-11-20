import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Home, Mail, MapPin, Store, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Revestimiento de suelo en Les Sables-d\'Olonne | Presupuesto gratuito en 48 h',
  description: 'Instalación de moqueta, vinilo y alfombras a medida en Les Sables-d\'Olonne. Villas frente al mar, segundas residencias de alto nivel, hoteles y restaurantes del Remblai, apartamentos con vistas al océano. CB Sols lleva más de 28 años en el oficio y se desplaza desde Villedoux.',
  alternates: {
    canonical: 'https://cbsols.fr/es/revetement-sol-les-sables-d-olonne',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-les-sables-d-olonne', en: 'https://cbsols.fr/en/revetement-sol-les-sables-d-olonne', es: 'https://cbsols.fr/es/revetement-sol-les-sables-d-olonne', },
  },
  keywords: ['revestimiento de suelo Les Sables-d\'Olonne', 'moqueta Les Sables-d\'Olonne', 'suelo de vinilo Les Sables-d\'Olonne', 'instalación de alfombras en villas de playa Vendée', 'artesano de suelos Les Sables-d\'Olonne'],
  openGraph: {
    title: 'Revestimiento de suelo en Les Sables-d\'Olonne, el espíritu del mar',
    description: 'Moqueta, vinilo y alfombras a medida en Les Sables-d\'Olonne. Villas frente al mar, segundas residencias, hoteles y restaurantes del Remblai. CB Sols, más de 28 años de experiencia.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-les-sables-d-olonne.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Villas con los pies en la arena y segundas residencias', desc: 'Pasa el verano frente al océano, en el Remblai o hacia La Chaume. La arena se cuela y la sal se instala sin pedir permiso. Instalamos vinilo efecto madera en los salones y moqueta de lana en los dormitorios. Lo ideal es que vayamos fuera de julio y agosto, para no interrumpir su temporada.' },
  { title: 'Hoteles y restaurantes frente al mar', desc: 'Usted dirige un hotel o un restaurante en el paseo marítimo de Les Sables. Todo debe resistir el tránsito del verano y cumplir la normativa de establecimientos abiertos al público. Elegimos revestimientos con tratamiento ignífugo, fáciles de mantener, en una paleta acorde con el ambiente marinero. Escalonamos la instalación fuera de la temporada turística.' },
  { title: 'Apartamentos de alto nivel con vistas al océano', desc: 'Tiene un apartamento con vistas a la Grande Plage o al puerto. Quiere un suelo que revalorice el inmueble y soporte los alquileres de temporada. Moqueta de lana para el confort, vinilo duradero en las zonas húmedas y una alfombra a medida en el salón. Trabajamos con limpieza, en el marco de una comunidad de propietarios.' },
  { title: 'Comercios y boutiques del centro marinero', desc: 'Usted lleva una boutique cerca del Remblai o de los mercados cubiertos. Instalamos de noche o el día de cierre, y no pierde ni un día de venta. Un suelo resistente al tránsito y a la arena, fácil de limpiar, con un aspecto que realza sus productos.' },
]

const exigences = [
  { title: 'La sal y la arena, las tenemos en cuenta', desc: 'En Les Sables-d\'Olonne el aire está cargado de sal y la arena se cuela por todas partes, en las entradas y bajo los muebles. Un revestimiento estándar se desgasta el doble de rápido. Seleccionamos fibras duras, vinilos resistentes y adhesivos compatibles con el ambiente marino. Su suelo conserva su agarre y su color, temporada tras temporada.' },
  { title: 'Vamos fuera de julio y agosto', desc: 'El verano en Les Sables está lleno a rebosar, la ciudad vive al ritmo del Remblai y de las playas. Programamos las obras entre septiembre y junio, cuando el acceso es fluido y la villa está tranquila. Recupera su vivienda lista para la temporada, sin haber visto un solo rollo de moqueta durante sus vacaciones.' },
  { title: 'Una casa cerrada seis meses, nos encargamos', desc: 'Muchas segundas residencias permanecen cerradas fuera de temporada. El calor sube, la humedad varía, el suelo trabaja. Evitamos los adhesivos lentos y los materiales frágiles ante los cambios bruscos. Usted abre la casa en junio y todo está en su sitio como el día de la instalación.' },
  { title: 'Trabajamos cuando usted no trabaja', desc: 'En un hotel, un restaurante o un comercio junto al mar no podemos interrumpir la actividad en plena temporada. Por eso venimos por la tarde, el día de cierre o fuera del periodo turístico. Usted reabre sin haber perdido un solo día de ingresos.' },
  { title: 'Las normativas, nos ocupamos nosotros', desc: 'Un hotel, un restaurante, una residencia turística: hay normas estrictas de seguridad contra incendios. Elegimos los productos adecuados por usted, entregamos los certificados y los informes de reacción al fuego, y dialogamos con la oficina de inspección. No tiene nada que descifrar en las fichas técnicas.' },
  { title: 'Un único interlocutor, del presupuesto a la factura', desc: 'En la costa ya hace malabares con el vigilante, el conserje y el administrador de fincas. Nosotros somos un solo nombre en su agenda. Presupuesto, calendario, entrega y factura: todo pasa por la misma persona. Gana tiempo y tranquilidad.' },
]

const materiaux = [
  { name: 'Vinilo efecto madera Gerflor y Tarkett', desc: 'Nuestro material de referencia para los salones orientados al océano. El resultado visual es convincente, el suelo resiste la arena y el tránsito del verano, y se limpia en cinco minutos. Incluso podemos instalarlo sobre suelo radiante. Cuente fácilmente con quince a veinte años en uso estacional.' },
  { name: 'Vinilo homogéneo para zonas húmedas', desc: 'Para baños, lavaderos y rincones de cocina elegimos vinilo homogéneo o Forbo. Soldamos las láminas en caliente, de modo que el agua no se cuela por ninguna parte, ni en las juntas ni bajo el zócalo. Es justo lo que hace falta cuando el clima es húmedo todo el año.' },
  { name: 'Moqueta de lana virgen y poliamida premium', desc: 'En dormitorios y suites buscamos el confort bajo los pies. La lana virgen adquiere pátina sin aplastarse, y la poliamida de alta densidad sigue siendo suave y resistente. Los tonos naturales, lino, arena y crudo, combinan con el ambiente marinero. De doce a veinte años según la gama y el uso.' },
  { name: 'Vinilo Bfl-s1 para hoteles y restaurantes', desc: 'En establecimientos abiertos al público elegimos vinilo clasificado al fuego, resistente a un tránsito intenso. El material soporta el ir y venir del verano, se limpia con facilidad y cumple los requisitos de los edificios públicos. Entregamos los informes de reacción al fuego para la comisión de seguridad.' },
  { name: 'Alfombras a medida de lana y fibras naturales', desc: 'Para vestir un salón abierto al océano sin recargar la decoración, la alfombra a medida cumple su función. Sisal, seagrass o lana virgen bouclé según su estilo. Un ribete cosido a mano, dimensiones al centímetro. La instalamos sin pegar, es totalmente reversible.' },
  { name: 'Perfiles Romus de latón cepillado y acero inoxidable marino', desc: 'Para umbrales y cantoneras de escalera elegimos el material según la zona. En los pasos expuestos a la sal optamos por acero inoxidable marino, el mismo que se usa en los barcos. En el interior, el latón cepillado con pátina combina con los interiores marineros. El detalle cuenta.' },
]

const marques = [
  { name: 'Gerflor', desc: 'El fabricante francés de Lyon que conocemos a fondo. Sus vinilos efecto madera y la gama Texline son perfectos para los salones y las zonas húmedas del litoral. Resisten la arena y la humedad año tras año.' },
  { name: 'Tarkett', desc: 'Para espacios que exigen un verdadero confort acústico, elegimos Tarkett iQ Granit. Envejece bien y sigue siendo nuestra referencia en suelos con tránsito regular, incluidos hoteles y residencias turísticas.' },
  { name: 'Forbo', desc: 'Cuando el proyecto pide algo natural, miramos hacia Forbo. Su Marmoleum es un auténtico linóleo hecho con aceite de linaza, y su Flotex se lava con abundante agua, lo que cambia la vida en una villa familiar de la costa.' },
  { name: 'EGE Carpets', desc: 'El tejedor danés, nuestra referencia para hoteles boutique y suites de villas de alto nivel frente al mar. Sus losetas ya llevan incorporada la base acústica, lo que facilita la instalación.' },
  { name: 'objectflor', desc: 'Para comercios y salones, sus lamas de vinilo efecto madera son una apuesta segura. El resultado es creíble, la instalación es rápida y la resistencia a la arena y al tránsito se mantiene con el tiempo.' },
  { name: 'Bostik', desc: 'Para adhesivos y soleras trabajamos con Bostik. Son productos fiables, compatibles con el ambiente marino, que garantizan una instalación duradera incluso sobre soportes expuestos a la humedad salina.' },
  { name: 'objectflor Expona', desc: 'Cuando un hotel o un comercio quiere un suelo de diseño que destaque sin sacrificar la resistencia, sus gamas Expona cumplen. Efecto madera, hormigón o piedra, la elección es amplia y el resultado de gama alta.' },
  { name: 'Romus', desc: 'Para los accesorios de acabado, perfiles y cantoneras de escalera, Romus es nuestra referencia. Del latón cepillado al acero inoxidable marino, siempre encontramos el acabado que combina con un interior marinero.' },
]

const quartiers = [
  { nom: 'Le Remblai', detail: 'El emblemático paseo marítimo, frente a la Grande Plage. Apartamentos con vistas al océano, residencias de alto nivel, hoteles y restaurantes por acondicionar.' },
  { nom: 'La Chaume', detail: 'Un antiguo barrio de pescadores, al otro lado del canal. Casas con carácter, villas familiares y viviendas tradicionales por renovar.' },
  { nom: 'El centro de la ciudad', detail: 'Mercados cubiertos, calles comerciales, el puerto deportivo. Comercios, consultas y apartamentos del centro por acondicionar y modernizar.' },
  { nom: 'La Rudelière', detail: 'Un barrio residencial cerca de las playas. Villas familiares y segundas residencias que cuidan los acabados.' },
  { nom: 'El barrio de la estación', detail: 'Viviendas urbanas y pequeñas unidades de oficinas. Consultas, comunidades de propietarios y casas en proceso de modernización.' },
  { nom: 'Olonne-sur-Mer', detail: 'Una localidad vecina fusionada con Les Sables-d\'Olonne. Urbanizaciones, casas familiares y zonas de actividad empresarial.' },
  { nom: 'Château-d\'Olonne', detail: 'Un sector residencial y costero al sur de la ciudad. Villas de alto nivel, segundas residencias y urbanizaciones contemporáneas.' },
  { nom: 'La Pironnière', detail: 'Un barrio cerca de las playas del sur, de ambiente tranquilo y residencial. Villas familiares y segundas residencias frente al océano.' },
  { nom: 'Les Roches Noires', detail: 'Un sector marinero al borde de la playa. Apartamentos con vistas al mar, residencias de alto nivel y hoteles frente al mar.' },
  { nom: 'El puerto', detail: 'Un puerto pesquero y deportivo, punto de salida de la Vendée Globe. Restaurantes, comercios y locales profesionales vinculados a la navegación.' },
  { nom: 'Talmont-Saint-Hilaire', detail: 'Una localidad costera vecina, con estaciones balnearias y pueblos marineros. Segundas residencias y villas familiares junto al mar.' },
  { nom: 'Sur de Les Sables y playas', detail: 'Barrios residenciales cerca de las playas del sur de Les Sables. Una clientela apegada a la autenticidad y al entorno oceánico.' },
]

const process = [
  { step: 'Primer contacto', desc: 'Una llamada o un correo electrónico. Recogemos los puntos clave: tipo de inmueble (villa, apartamento, hotel, restaurante, comercio), superficie estimada, calendario deseado, periodo de uso (temporada, fuera de temporada, alquiler). Si el proyecto lo dirige un arquitecto o decorador, nos ponemos en contacto directamente con él.' },
  { step: 'Visita a Les Sables-d\'Olonne', desc: 'Una visita organizada desde Villedoux, a unas 1 h 45 min en coche, idealmente fuera de julio y agosto. Medición con láser, revisión de los accesos y de las restricciones de la comunidad de propietarios, fotos para coordinar los colores. En hoteles, restaurantes y comercios identificamos las ventanas de obra fuera de temporada.' },
  { step: 'Elección de materiales', desc: 'El showroom de Villedoux o muestras enviadas directamente a Les Sables-d\'Olonne, a su domicilio o al establecimiento. Validación final bajo la luz del lugar: la luz del océano transforma los colores. Para edificios públicos, entrega de las fichas técnicas, informes de reacción al fuego y certificaciones requeridos.' },
  { step: 'Fabricación en el taller', desc: 'De 3 a 10 semanas según la gama: moqueta tejida, losetas, vinilo cortado, alfombras a medida. Premontaje en seco en el taller para validar el ajuste antes del transporte. Esta preparación previa es lo que nos permite mantener una instalación final rápida y cuidadosa en Les Sables-d\'Olonne.' },
  { step: 'Instalación en Les Sables-d\'Olonne', desc: 'Un equipo movilizado en la obra, alojamiento incluido en el presupuesto, un calendario ajustado a su disponibilidad y a la apertura o cierre de la temporada. Escalonamiento fuera de temporada para los establecimientos en funcionamiento. Coordinación con su conserje local. Limpieza completa a la entrega.' },
]

const faq = [
  { q: '¿De verdad vienen a Les Sables-d\'Olonne desde La Rochelle?', a: 'Sí, sin ninguna dificultad. Les Sables-d\'Olonne está a unos 120 km, alrededor de 1 h 45 min por carretera. Llevamos más de 28 años dominando esta distancia con obras en Ré, Oléron y todo el frente atlántico; la lógica es la misma. Vamos a medir una vez y después volvemos a instalar. El alojamiento y el desplazamiento están incluidos en el presupuesto. Evitamos julio y agosto, programamos en primavera u otoño.' },
  { q: '¿Qué revestimiento elegir para una villa con los pies en la arena?', a: 'La arena y la sal son los enemigos número uno de un suelo junto al océano. En salones y entradas optamos por vinilo efecto madera u homogéneo: el mantenimiento se hace con agua y el material envejece bien frente a la sal. En los dormitorios, donde se busca suavidad bajo los pies, volvemos a la lana virgen o a la poliamida de alta densidad. Decidimos juntos este equilibrio durante la visita.' },
  { q: '¿Trabajan en los hoteles y restaurantes del Remblai?', a: 'Sí, es uno de nuestros terrenos naturales. Un hotel o restaurante frente al mar necesita suelos conformes a la normativa de edificios públicos, resistentes al tránsito del verano y fáciles de mantener. Elegimos revestimientos Bfl-s1 con tratamiento ignífugo, instalamos fuera de la temporada turística para no interrumpir la actividad y entregamos todos los informes de reacción al fuego para la comisión de seguridad. Usted reabre listo para la temporada.' },
  { q: '¿Por qué evitan julio y agosto en Les Sables-d\'Olonne?', a: 'Porque en plena temporada es una pesadilla logística. La ciudad está saturada, las entregas se atascan, las villas están ocupadas o alquiladas a tarifas de temporada alta y los hoteles y restaurantes van a tope. Preferimos programar en primavera antes de la apertura, o en otoño después del cierre. En esos periodos el acceso es fluido y su inmueble se entrega limpio para la temporada siguiente.' },
  { q: '¿Trabajan en apartamentos y comunidades de propietarios frente al mar?', a: 'Sí, con regularidad. Un apartamento con vistas al océano exige un trabajo limpio que respete las zonas comunes. Protegemos el ascensor, los descansillos y los pasillos, respetamos los horarios del reglamento de la comunidad y retiramos los residuos a medida que avanzamos. Moqueta de lana para el confort, vinilo duradero en las zonas húmedas y una alfombra a medida en el salón. Sus vecinos apenas se enteran de que estamos.' },
  { q: '¿Cuánto dura un suelo junto al océano?', a: 'De quince a veinte años, bien elegido y bien instalado. Un vinilo efecto madera en un salón dura fácilmente veinte años en uso estacional. Un vinilo homogéneo en un baño dura quince años sin problemas. Una moqueta premium de lana o poliamida en un dormitorio, de doce a quince años según el uso. Nuestra experiencia viene de más de 28 años de obras en el Atlántico; conocemos las trampas del litoral.' },
  { q: '¿Pueden instalar fuera del horario de apertura en un comercio o restaurante en funcionamiento?', a: 'Sí, incluso es lo habitual en este tipo de obras. Organizamos los trabajos por la tarde, el día de cierre o fuera del periodo turístico. Premontamos todo lo posible en el taller de Villedoux, para que la instalación en obra sea rápida. Protegemos sus estanterías, su mobiliario y su local antes de empezar. Al día siguiente reabre con normalidad, con el suelo instalado y limpio.' },
]

export default function RevetementSolLesSablesDOlonnePageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/revetement-sol-les-sables-d-olonne#service',
        name: 'Revestimiento de suelo en Les Sables-d\'Olonne',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Les Sables-d\'Olonne' },
          { '@type': 'AdministrativeArea', name: 'Vendée' },
          { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
        ],
        serviceType: 'Instalación de moqueta, vinilo y alfombras a medida en Les Sables-d\'Olonne y en el litoral de la Vendée',
        description: 'Diseño, fabricación en taller e instalación de moqueta, vinilo y alfombras a medida para villas frente al mar, segundas residencias, hoteles, restaurantes y apartamentos de alto nivel en Les Sables-d\'Olonne.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Revestimiento de suelo en Les Sables-d\'Olonne', item: 'https://cbsols.fr/es/revetement-sol-les-sables-d-olonne' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="les-sables-d-olonne" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revestimiento de suelo Les Sables-d&apos;Olonne</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revestimiento de suelo en Les Sables-d&apos;Olonne,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>el espíritu del mar.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Instalación de moqueta, vinilo y alfombras a medida en Les Sables-d&apos;Olonne. Villas frente al mar, segundas residencias de alto nivel, hoteles y restaurantes del Remblai, apartamentos con vistas al océano. Un taller cerca de La Rochelle y obras de temporada organizadas fuera de julio y agosto.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=les-sables-d-olonne" variant="primary" size="md">Solicitar un presupuesto</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nos desplazamos hasta usted</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;En Les Sables la sal y la arena se cuelan por todas partes. Elegir la fibra adecuada es lo que hace que un suelo dure diez años o veinte. Desde hace más de 28 años, CB Sols trabaja junto al Atlántico; el litoral de la Vendée habla el mismo idioma.&rdquo;
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
            Cuatro entornos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>una misma comprensión de la costa.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Tiene un proyecto en Les Sables-d&apos;Olonne?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Una visita fuera de temporada, un presupuesto detallado.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Contacto directo con usted, con su arquitecto de interiores o con su conserje. Una visita de medición organizada fuera de julio y agosto y un presupuesto detallado en 48 horas.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/es/contact?source=les-sables-d-olonne-cta1" variant="primary" size="md">Solicitar un presupuesto</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Particularidades de Les Sables-d&apos;Olonne</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Seis condicionantes <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propios de la orilla del océano.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Trabajar en Les Sables-d&apos;Olonne no es una obra cualquiera. El clima marino, la estacionalidad turística, la arena y los accesos exigen un método específico, que aplicamos de forma sistemática.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materiales y experiencia para Les Sables-d&apos;Olonne</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Las familias de productos <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que llevamos al litoral de la Vendée.</em>
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
              &ldquo;Una villa de Les Sables vive en temporada y se cierra el resto del año. El suelo debe aceptar ese ciclo, soportar la sal y resistir la arena. Es un oficio de paciencia y de buenas decisiones desde el principio.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, propietario de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?source=les-sables-d-olonne-citation" variant="primary" size="md">Pedir una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Una visita fuera de temporada</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Fabricantes socios</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Ocho casas de referencia <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que resisten el ambiente marino.</em>
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
            Les Sables y la costa, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>hasta las localidades vecinas.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Nuestro equipo se desplaza por Les Sables-d&apos;Olonne y por toda la costa de la Vendée, donde se concentran las villas familiares, las segundas residencias y los hoteles marineros.
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
            Una llamada para despejar el camino.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Veinte minutos por teléfono bastan para aclarar las gamas posibles, un calendario realista (fuera de julio y agosto) y un orden de magnitud del presupuesto para su inmueble en Les Sables.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?source=les-sables-d-olonne-cta2" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestra forma de trabajar</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco pasos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux a Les Sables-d&apos;Olonne.</em>
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
            Revestimiento de suelo en Les Sables-d&apos;Olonne, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas concretas.</em>
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
            ¿Alguna pregunta más? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>Llame a Valentin.</em>
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Directamente con el propietario. Sin centralita. Consejos claros, un orden de magnitud honesto y un calendario realista que tiene en cuenta la estacionalidad del litoral de la Vendée.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="Ver también"
        sectionSubtitle="Nuestra experiencia abarca otras localidades y ámbitos que pueden interesarle. Tómese su tiempo para explorar, haga sus preguntas y le responderemos."
        items={[
          { href: '/es/ile-de-re', title: 'Île de Ré', teaser: 'Casas de pueblo y villas costeras. Suelos que soportan la sal, la arena y el día a día.', icon: Waves },
          { href: '/es/revetement-sol-cap-ferret', title: 'Revestimiento de suelo Cap Ferret', teaser: 'Villas de la bahía de Arcachon. Suelos que resisten la sal, la arena y la luz del océano.', icon: MapPin },
          { href: '/es/particuliers', title: 'Para particulares', teaser: 'Moqueta, suelo de vinilo, alfombras a medida: nuestra experiencia al servicio de su hogar.', icon: Home },
          { href: '/es/secteurs', title: 'Nuestros sectores', teaser: 'Oficinas, sanidad, hostelería, comercio. Soluciones pensadas para cada tipo de establecimiento.', icon: Building2 },
          { href: '/es/realisations', title: 'Nuestras obras', teaser: 'Descubra nuestras obras recientes en imágenes. El resultado, los acabados, el detalle que cuenta.', icon: Store },
          { href: '/es/contact', title: 'Contacto', teaser: 'Una pregunta, un proyecto, un presupuesto en 48 horas. El propietario le responde directamente.', icon: Mail },
        ]}
      />

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Su inmueble de Les Sables <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>en manos expertas.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita fuera de temporada en Les Sables-d&apos;Olonne. Un presupuesto detallado en 48 horas, materiales adaptados al ambiente marino y acabados cuidados. Más de 28 años de experiencia atlántica al servicio del litoral de la Vendée.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=les-sables-d-olonne-final" variant="primary" size="md">Solicitar un presupuesto</Button>
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
