import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Mail, MapPin, Store, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: "Revestimiento de suelo en la Île d'Yeu | Casas y hoteles, Vendée",
  description: "Colocación de moqueta, vinilo y alfombras a medida en la Île d'Yeu. Casas de pescadores en Port-Joinville, villas de la costa salvaje, hoteles boutique. Logística insular dominada por CB Sols, más de 28 años de experiencia.",
  alternates: {
    canonical: 'https://cbsols.fr/es/revetement-sol-ile-d-yeu',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-ile-d-yeu', en: 'https://cbsols.fr/en/revetement-sol-ile-d-yeu', es: 'https://cbsols.fr/es/revetement-sol-ile-d-yeu', },
  },
  keywords: ["revestimiento de suelo Île d'Yeu", 'moqueta casa insular Yeu', 'suelo pies en la arena Vendée', "artesano del suelo Île d'Yeu"],
  openGraph: {
    title: "Revestimiento de suelo en la Île d'Yeu, el encanto insular",
    description: "Moqueta, vinilo y alfombras a medida en la Île d'Yeu. Logística dominada desde Fromentine, trabajo fuera de temporada. CB Sols, más de 28 años.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-ile-d-yeu.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Casas de pescadores renovadas en Port-Joinville', desc: 'Tiene una casa de piedra blanca en el puerto. Las estancias son pequeñas, el parqué nunca está a nivel. Hacemos un mortero autonivelante y luego colocamos moqueta de bucle, sisal sellado o vinilo ligero según la estancia. Se conserva el espíritu de casa familiar.' },
  { title: 'Villas familiares en la costa salvaje', desc: 'Su villa da al páramo, entre la Pointe du But y la Anse des Vieilles. Vive descalzo todo el verano. Suelos claros, sisal natural, vinilo efecto madera, una alfombra encontrada en el salón. Todo se elige para la arena y la humedad.' },
  { title: 'Hoteles boutique y casas de huéspedes', desc: 'Dirige un pequeño hotel instalado en una antigua casa de capitán. Venimos en invierno, cuando la actividad se ralentiza. Moqueta de densidad controlada, tratamiento antimanchas, una paleta a juego con la piedra blanca.' },
  { title: 'Alquileres de temporada premium', desc: 'Su casa sale de alquiler cada semana en verano. El suelo debe soportar la rotación y mantenerse limpio. Vinilo efecto madera de alta densidad en las salas de estar, moqueta robusta en los dormitorios, umbrales reforzados para las maletas.' },
]

const exigences = [
  { title: 'El barco es asunto nuestro', desc: 'Una travesía de cuarenta minutos desde Fromentine, carga y pasajeros. Reservamos las salidas, cargamos a tiempo, recogemos el vehículo en Port-Joinville. Usted no toca nada. Los materiales llegan cuando hace falta, colocados la semana siguiente.' },
  { title: 'Fuera de temporada es lo ideal', desc: 'La isla está saturada de abril a septiembre: barcos llenos, alojamiento completo. Venimos entre octubre y marzo, con un pico en febrero-marzo. Planificamos de cuatro a seis meses antes. La casa está tranquila, el equipo trabaja bien, lo recupera todo para el verano.' },
  { title: 'Estancias pequeñas, preparamos al milímetro', desc: 'Las casas tradicionales tienen puertas estrechas, techos bajos, escaleras ajustadas. Hacemos los cortes en el taller antes de embarcar. Los rollos encajan al centímetro. Ganamos horas in situ y evitamos la mala sorpresa de una moqueta que no pasa.' },
  { title: 'Viento, sal y humedad, los conocemos', desc: 'El aire de Yeu está cargado de sal, el viento del oeste pega fuerte. Optamos por lanas tratadas, vinilos de alta densidad, adhesivos compatibles con el ambiente marino. Sus suelos se mantienen estables, invierno y verano. Sin juntas que se levanten tras una sola temporada.' },
  { title: 'Respetamos el alma de las casas de piedra', desc: 'Las casas blancas de la isla tienen una coherencia simple: piedra, cal, madera flotante. Proponemos materiales que acompañan esta paleta: suelos claros, fibras naturales, lisos suaves. Conserva el espíritu del lugar, sin rigidez, con su propio gusto.' },
  { title: 'Nos vamos con nuestros residuos', desc: 'En una isla, no dejamos un contenedor atrás cuando nos vamos. Recortes, embalajes, viejos revestimientos: todo vuelve en el barco con nosotros. Usted no tiene que organizar nada tras nuestra marcha. La casa está limpia, eso es todo.' },
]

const materiaux = [
  { name: 'Sisal sellado y fibras naturales', desc: 'Nuestro material estrella para las casas familiares de la isla. Arena, crudo o topo suave, el sisal acompaña a la perfección el espíritu insular y la piedra blanca local. Una vez sellado, soporta la arena y la humedad sin inmutarse. Lo encolamos sobre una base de fieltro. Diez a quince años por delante en una segunda residencia.' },
  { name: 'Vinilo efecto madera clara', desc: 'Para las salas de estar, cocinas y galerías abiertas, el vinilo efecto madera hace maravillas. Imitaciones de roble blanqueado, pino lavado, madera flotante: se confunde con la real. El mantenimiento lleva cinco minutos, y la arena traída de la playa se desliza. Ideal para un alquiler de temporada donde el suelo sufre todo el verano.' },
  { name: 'Moqueta de lana de bucle para dormitorios', desc: 'En los dormitorios principales e infantiles, la lana de bucle cambia la vida. Descalzo por la mañana, el calor está ahí. La arena se levanta con la aspiradora, la durabilidad es buena, el mantenimiento sencillo. Una amplia gama de colores a juego con la carpintería y los revocos de cal de su casa.' },
  { name: 'Vinilo tejido Bolon para entradas y vestíbulos', desc: 'En las entradas de una casa que dan a la playa, Bolon es imbatible. La arena, la humedad del viento del oeste, los pies mojados, lo soporta todo. Lo lavamos con agua, por la mañana está seco. Una estética tejida contemporánea que acompaña las renovaciones chic marineras. Es una inversión que dura.' },
  { name: 'Alfombras a medida y alfombras encontradas', desc: 'Para vestir el salón de una casa familiar sin rehacerlo todo, la alfombra a medida es perfecta. Dimensiones ajustadas a la estancia, un ribete trabajado, un motivo adaptado a su decoración. Prevea de ocho a catorce semanas de fabricación. Es la renovación ligera ideal antes de un alquiler de verano, sin obras pesadas.' },
]

const marques = [
  { name: 'Bolon', desc: 'El fabricante sueco de vinilo tejido, nuestra referencia para los interiores contemporáneos junto al mar. Lavable con agua, robusto, una paleta densa. Lo colocamos en la mitad de las obras de la isla.' },
  { name: 'Gerflor', desc: 'El fabricante francés de Lyon que conocemos de memoria. Sus imitaciones de madera y mineral son perfectas para renovar una casa de pescador o acondicionar un alquiler de temporada.' },
  { name: 'Forbo', desc: 'Cuando el proyecto pide algo natural, miramos hacia Forbo. Su Marmoleum es un auténtico linóleo elaborado con aceite de linaza. Ideal para villas familiares y casas con carácter.' },
  { name: 'EGE Carpets', desc: 'El fabricante danés, nuestra referencia para los hoteles boutique y las casas de huéspedes de prestigio de la isla. Su gama Hospitality marca el tono desde la entrada.' },
  { name: 'Brintons', desc: 'El Axminster británico, la aristocracia de la moqueta. Recurrimos a él para las renovaciones patrimoniales de las grandes casas de notables de Port-Joinville.' },
  { name: 'Object Carpet', desc: 'El fabricante alemán, para renovaciones de autor y alquileres premium. Un diseño contemporáneo asertivo, acabados perfectos. Ideal cuando quiere romper con los códigos clásicos del mar.' },
  { name: 'Tisca Tiara', desc: 'El fabricante suizo, esto es lo más alto de gama. Lo sacamos para las villas familiares excepcionales de la costa salvaje. Cuando el presupuesto acompaña, el resultado no tiene rival.' },
  { name: 'Romus', desc: 'Nuestro proveedor de perfiles y peldaños de escalera. Imprescindible para las escaleras estrechas de las casas insulares y para vestir con limpieza los umbrales con arena.' },
]

const quartiers = [
  { nom: 'Port-Joinville', detail: 'La capital de la isla, un puerto pesquero y deportivo, casas de notables históricas, hoteles y restaurantes. El corazón de la actividad insular y la logística de llegada de los materiales.' },
  { nom: 'Saint-Sauveur', detail: 'El pueblo central de la isla, una iglesia románica, casas tradicionales de piedra blanca. Calma y patrimonio, viviendas familiares y casas de huéspedes.' },
  { nom: 'La Meule', detail: 'Un pequeño puerto salvaje en el suroeste, calas preservadas, casas de pescadores renovadas en residencias con encanto. Un entorno excepcional y una exigencia de autenticidad.' },
  { nom: 'Pointe du But', detail: 'El extremo oeste de la isla, un faro y un páramo salvaje. Villas familiares contemporáneas de cara al océano, una forma de vida frente a los elementos.' },
  { nom: 'Port de la Meule', detail: 'Un fondeadero resguardado en el sur, chozas de pescadores, restaurantes marineros. Casas familiares renovadas con acceso directo a las calas vecinas.' },
  { nom: 'Plage des Sabias', detail: 'Una playa del noroeste, calas de arena dorada. Villas familiares que la dominan, segundas residencias de prestigio, una vista panorámica del océano.' },
  { nom: 'Vieux Château', detail: 'Una espectacular fortaleza medieval sobre el acantilado sur. Algunas casas y villas en el entorno inmediato, un sector catalogado y preservado.' },
  { nom: 'Costa salvaje', detail: 'Todo el sur y el oeste de la isla, páramo, calas, acantilados. Villas aisladas y residencias contemporáneas de cara al océano, una exigencia de autosuficiencia logística.' },
  { nom: 'Anse des Vieilles', detail: 'Una playa resguardada de arena dorada, la costa sureste. Villas familiares y segundas residencias entre los pinos marítimos, un ambiente atlántico-mediterráneo.' },
  { nom: 'Port de Ker Châlon', detail: 'Un fondeadero del noreste, casas tradicionales, ostricultura histórica. Residencias familiares renovadas y programas patrimoniales.' },
  { nom: 'Quai de la Chapelle', detail: 'El frente portuario de Port-Joinville, edificios del siglo XIX, restaurantes, hoteles con vistas al puerto. El corazón de la vida social insular.' },
  { nom: 'Plage des Soux', detail: 'Una playa familiar del norte, acceso fácil, villas y residencias de cara al mar. Un barrio costero tranquilo y residencial preferido por las familias.' },
]

const process = [
  { step: 'Primer contacto', desc: 'Una llamada o un correo. Recopilación de los puntos clave del proyecto insular: tipo de propiedad, superficies, calendario deseado, uso (vivienda principal, segunda residencia, alquiler, hotel). Una conversación sobre la ventana de trabajo fuera de temporada que mejor convenga.' },
  { step: 'Visita a Port-Joinville', desc: 'Una visita organizada en un plazo de 3 a 5 semanas, travesía incluida. Medición precisa, un estudio de los condicionantes de acceso de la casa, fotos para coordinar los colores. Muestras presentadas in situ bajo la luz insular, validación en varios momentos si es posible.' },
  { step: 'Presupuesto y logística de carga', desc: 'Un presupuesto detallado en una semana, que incluye la partida de logística de la travesía de carga y el alojamiento del equipo. Validación de los colores, las alfombras a medida, los umbrales. El pedido se cursa tras la confirmación, un plazo de fábrica de 3 a 12 semanas según la gama.' },
  { step: 'Fabricación en el taller de Villedoux', desc: 'Precorte y premontaje de los materiales en La Rochelle. Marcado preciso de los cortes para pasar los huecos de puerta de las casas tradicionales. Esta preparación previa es crucial para las obras insulares donde cada manipulación in situ resulta costosa.' },
  { step: 'Travesía y colocación en Yeu', desc: 'Materiales y herramientas embarcados en Fromentine en la travesía de carga programada. El equipo cruza como pasajero la víspera, con alojamiento en Port-Joinville. Colocación en 4 a 8 días según el proyecto, residuos devueltos en la travesía de vuelta, acabados revisados con usted antes de la marcha.' },
]

const faq = [
  { q: '¿De verdad vienen a Yeu desde La Rochelle?', a: 'Sí, con regularidad. La Île d\'Yeu está a dos horas por carretera hasta Fromentine, y luego una travesía de cuarenta minutos hasta Port-Joinville. La tratamos en la continuidad de Ré y Oléron, es exactamente la misma lógica insular. Nos encargamos de toda la logística: travesías de pasajeros y de carga, el alojamiento del equipo, un vehículo in situ, e incluso la devolución de los residuos al continente. Usted no organiza nada por su parte.' },
  { q: '¿Cómo funciona la carga de los materiales?', a: 'Eso es justo lo que preparamos por adelantado, y lo cambia todo entre una obra tranquila y una improvisada. Los rollos, los adhesivos, las herramientas se embarcan en Fromentine en la travesía de carga de la Compagnie Vendéenne o la Régie Yeu Continent. Reservamos las franjas de tres a cuatro semanas antes, sobre todo al inicio y al final de la obra. Al llegar, un vehículo alquilado in situ hace el último kilómetro. Todo está incluido en el presupuesto.' },
  { q: '¿Cuándo es mejor trabajar en Yeu?', a: 'De octubre a marzo, fuera de la temporada turística. Los propietarios están menos presentes, los hoteles cierran, las travesías no están saturadas. Para los alquileres de temporada, apuntamos con firmeza a la temporada baja para entregar antes de Pascua. Evitamos de abril a septiembre, es un infierno logístico. Las mejores ventanas se fijan de cuatro a seis meses antes, sobre todo con una alfombra a medida o un gran proyecto.' },
  { q: '¿Qué material para una casa familiar en Yeu?', a: 'Depende de la estancia. Para las salas de estar y galerías, optamos por vinilo efecto madera o sisal sellado: soportan la arena y los pies descalzos del verano. En los dormitorios, la moqueta de lana de bucle aporta el calor de la mañana. En las entradas que dan a la playa, Bolon es imbatible, se lava con agua. Validamos siempre las elecciones bajo la luz insular, nunca en un showroom.' },
  { q: '¿Trabajan en las estrechas casas de pescadores?', a: 'Es incluso donde destacamos. Las casas tradicionales de Port-Joinville tienen puertas estrechas y escaleras ajustadas. Preparamos los cortes por adelantado en el taller, a veces en varias piezas que pasan los huecos y luego se unen de forma invisible in situ. Es esta preparación la que marca la diferencia. En las escaleras estrechas, proponemos también soluciones de colocación que evitan subir grandes piezas de una vez.' },
  { q: '¿Gestionan los residuos de la obra?', a: 'Sí, todo vuelve con nosotros en la travesía de regreso. Recogemos, embalamos, cargamos. No tiene ningún contenedor que organizar, ningún punto limpio local que encontrar, ninguna retirada que gestionar. Está incluido en el servicio insular, como en Ré u Oléron. Una obra insular bien preparada se mide también por lo que nos llevamos de vuelta.' },
  { q: '¿También colocan alfombras a medida en Yeu?', a: 'Sí, y es especialmente pertinente en las casas familiares. Alfombras cosidas a mano, dimensiones al centímetro, un ribete trabajado, un motivo adaptado a su decoración. Sisales encontrados, lanas lisas en tonos cálidos, creaciones contemporáneas para la costa salvaje. Es a menudo lo que transforma el salón de una casa renovada, sin ocultar el suelo. Prevea de ocho a catorce semanas de fabricación, para encajar en el calendario de la obra.' },
]

export default function RevetementSolIleDYeuPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/revetement-sol-ile-d-yeu#service',
        name: "Revestimiento de suelo en la Île d'Yeu",
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: "L'Île-d'Yeu" },
          { '@type': 'AdministrativeArea', name: 'Vendée' },
          { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
        ],
        serviceType: "Colocación de moqueta, vinilo y alfombras a medida en la Île d'Yeu",
        description: "Diseño, fabricación en taller y colocación de moqueta, vinilo y alfombras a medida para casas de pescadores, villas de la costa salvaje, hoteles boutique y alquileres de temporada premium en la Île d'Yeu. Logística de carga desde Fromentine totalmente gestionada.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: "Revestimiento de suelo en la Île d'Yeu", item: 'https://cbsols.fr/es/revetement-sol-ile-d-yeu' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="ile-d-yeu" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revestimiento de suelo Île d&apos;Yeu</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revestimiento de suelo en la Île d&apos;Yeu,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>el encanto insular.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Colocación de moqueta, vinilo y alfombras a medida en la Île d&apos;Yeu. Casas de pescadores de Port-Joinville, villas de la costa salvaje, hoteles boutique y alquileres de temporada premium. Logística de carga desde Fromentine totalmente gestionada por nosotros. CB Sols lleva más de 28 años en el oficio.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=ile-d-yeu" variant="primary" size="md">Solicitar un presupuesto</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Logística insular integrada</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;En Yeu, el oficio empieza en Fromentine. Planificamos las salidas de carga, cruzamos con el equipo, nos llevamos los residuos de vuelta. Es lo que CB Sols hace en las islas desde hace más de 28 años.&rdquo;
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
            Cuatro escenarios, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>un mismo enfoque insular.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un proyecto en Yeu?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Una visita a la isla, un presupuesto todo incluido.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Logística de carga, alojamiento, devolución de residuos: todo está incluido. Una visita organizada en un plazo de 3 a 5 semanas, un presupuesto detallado en una semana.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/es/contact?from=ile-d-yeu-cta1" variant="primary" size="md">Solicitar un presupuesto</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Particularidades insulares</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Seis exigencias <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propias de los proyectos de Yeu.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Trabajar en una isla no es reproducir una obra del continente. Aquí están los seis puntos sobre los que estructuramos nuestro método, de la planificación de la carga a la devolución de los residuos.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materiales para Yeu</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Las familias de productos <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que llevamos a la isla.</em>
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
              &ldquo;Una casa de pescador en Port-Joinville se prepara en el taller como una obra de precisión. Llegamos con los materiales listos, colocamos rápido, nos vamos con los residuos. Es la promesa insular.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, propietario de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?from=ile-d-yeu-citation" variant="primary" size="md">Pedir una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Una visita a domicilio en la isla</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Fabricantes asociados</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Ocho casas de referencia <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>para sus proyectos en la Vendée.</em>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Lugares y pueblos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            La Île d&apos;Yeu, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Port-Joinville a la costa salvaje.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Nuestro equipo se desplaza por toda la isla, desde el puerto y los pueblos hasta las calas salvajes del sur, donde se concentran las casas familiares y las renovaciones patrimoniales.
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
            Veinte minutos por teléfono para aclarar las gamas posibles, la ventana de trabajo y el presupuesto todo incluido.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=ile-d-yeu-cta2" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro método</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco etapas, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux a Port-Joinville.</em>
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
            Revestimiento de suelo en Yeu, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas concretas.</em>
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
            Directamente con el propietario. Sin línea de atención. Un consejo claro, un orden de magnitud honesto, un siguiente paso solo si el proyecto tiene sentido.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="Ver también"
        sectionSubtitle="Nuestra experiencia abarca otros mundos que pueden interesarle. Tómese su tiempo para explorar, haga sus preguntas, que las responderemos."
        items={[
          { href: '/es/ile-de-re', title: 'Île de Ré', teaser: 'Nuestro terreno natural. Logística dominada, materiales elegidos para el aire marino, equipos acostumbrados al transbordador.', icon: Waves },
          { href: '/es/ile-doleron', title: "Île d'Oléron", teaser: 'Casas de pescadores, villas modernas, segundas residencias. El mismo rigor, en la isla vecina.', icon: Waves },
          { href: '/es/revetement-sol-cap-ferret', title: 'Revestimiento de suelo Cap Ferret', teaser: 'Cabañas ostrícolas, villas con los pies en la arena. La discreción de un saber hacer que apenas se nota.', icon: Waves },
          { href: '/es/revetement-sol-arcachon', title: 'Revestimiento de suelo Arcachon', teaser: 'Casas de la bahía y villas de las dunas. Suelos que soportan la arena, la luz y la vida diaria.', icon: MapPin },
          { href: '/es/moquette-bateau', title: 'Moqueta náutica', teaser: 'Suelos náuticos a medida: confort a bordo, antideslizante, resistencia a la sal y a la luz.', icon: Waves },
          { href: '/es/architectes', title: 'Para arquitectos', teaser: 'Documentación de materiales, muestras anotadas, presupuestos detallados. Nuestro papel es servir a su visión.', icon: Building2 },
          { href: '/es/showroom', title: 'Showroom de Villedoux', teaser: 'Venga a ver y tocar los materiales. Con cita previa, en Villedoux cerca de La Rochelle.', icon: Store },
          { href: '/es/contact', title: 'Contáctenos', teaser: 'Una pregunta, un proyecto, un presupuesto en 48 horas. El propietario le responde directamente.', icon: Mail },
        ]}
      />

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Su proyecto en Yeu <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>con total tranquilidad.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita de obra en Port-Joinville. Un presupuesto todo incluido (carga, alojamiento, devolución de residuos), acabados cuidados, trabajo fuera de temporada. Más de 28 años de experiencia de CB Sols al servicio de las islas del Gran Oeste.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=ile-d-yeu-final" variant="primary" size="md">Solicitar un presupuesto</Button>
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
