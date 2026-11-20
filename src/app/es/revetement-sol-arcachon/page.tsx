import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Castle, Mail, MapPin, Store, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Revestimiento de suelo en Arcachon | Colocación y presupuesto en 48 h',
  description: 'Colocación de moqueta, vinilo y alfombras a medida en Arcachon y alrededor de la bahía. Villas de la Ville d\'Hiver, Pereire y Le Moulleau, hoteles boutique frente a la bahía. CB Sols, más de 28 años de experiencia, desplazamiento desde La Rochelle.',
  alternates: {
    canonical: 'https://cbsols.fr/es/revetement-sol-arcachon',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-arcachon', en: 'https://cbsols.fr/en/revetement-sol-arcachon', es: 'https://cbsols.fr/es/revetement-sol-arcachon', },
  },
  keywords: ['revestimiento de suelo Arcachon', 'moqueta Arcachon', 'suelo de vinilo Arcachon', 'colocación de alfombras Arcachon', 'artesano del suelo bahía de Arcachon'],
  openGraph: {
    title: 'Revestimiento de suelo en Arcachon, el espíritu de la bahía',
    description: 'Moqueta, vinilo y alfombras a medida en Arcachon. Villas de la Ville d\'Hiver, hoteles boutique, restaurantes junto al mar. CB Sols, más de 28 años.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-arcachon.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Villas familiares de la Ville d\'Hiver y Pereire', desc: 'Tiene una villa protegida en la Ville d\'Hiver o Pereire. El parqué original y la carpintería del siglo XIX se mantienen en su sitio. Colocamos una moqueta de lana con un motivo discreto, o una alfombra a medida en el salón. Todo queda reversible.' },
  { title: 'Hoteles boutique frente a la bahía', desc: 'Dirige un hotel con encanto en Le Moulleau o frente al mar. Venimos en temporada baja, su actividad no se detiene. Una moqueta densa en las habitaciones, una alfombra estructurante en la recepción.' },
  { title: 'Restaurantes junto al mar', desc: 'Dirige una mesa de sal marina con vistas a la bahía. Colocamos de noche, no pierde ningún servicio. Una moqueta tejida antimanchas y una acústica cuidada, en una paleta que acompaña a la madera flotante.' },
  { title: 'Segundas residencias y villas contemporáneas', desc: 'Su casa de verano está en Le Pyla o L\'Aiguillon. La arena entra, las ventanas quedan abiertas. Vinilo efecto madera en las salas de estar, sisal o bucle en los dormitorios. Adaptamos los materiales a su forma de vida junto al mar.' },
]

const exigences = [
  { title: 'Respetamos la Ville d\'Hiver', desc: 'Chalés suizos, villas moriscas, casas neogóticas: la Ville d\'Hiver es un libro de historia posado sobre las dunas. Colocamos de forma reversible siempre que es posible. El parqué original queda intacto. Nuestro paso es discreto, que es lo que aquí se pide.' },
  { title: 'Pies descalzos, arena, sol', desc: 'En Le Moulleau, Le Pyla, Pereire, se vive descalzo, con los ventanales abiertos sobre la bahía. La arena entra, el sol pega fuerte. Elegimos suelos claros que captan la luz, materiales que no temen la humedad. Conserva la sensación de vacaciones todo el año.' },
  { title: 'Nunca en julio-agosto', desc: 'En verano en Arcachon, las calles están llenas, y las casas también. Evitamos esos dos meses. Las buenas ventanas: marzo-abril antes de la temporada, octubre-noviembre después. Recupera la casa lista para las vacaciones, sin haber visto pasar a un solo profesional.' },
  { title: 'Venimos con el equipo completo', desc: 'Arcachon está a dos horas y media de nuestro taller. Cuando subimos, subimos al completo, dormimos in situ y encadenamos las jornadas juntos. Los materiales se preparan en Villedoux antes de salir. In situ, colocamos rápido y bien.' },
  { title: 'El aire de la bahía no nos asusta', desc: 'La humedad marina hace que los suelos mal elegidos se abomben. Seleccionamos lanas tratadas, vinilos tejidos, vinilos efecto madera para las estancias expuestas. Conserva un suelo estable, verano e invierno. Sin juntas levantándose al cabo de un año.' },
  { title: 'Un único interlocutor, del presupuesto a la factura', desc: 'En una villa de la bahía, hace malabares con el arquitecto, el constructor de piscinas, el jardinero. Nosotros somos un único nombre más. Presupuesto, calendario, entrega, factura: todo pasa por la misma persona. Gana tiempo y tranquilidad.' },
]

const materiaux = [
  { name: 'Moqueta de lana virgen tejida para la Ville d\'Hiver', desc: 'Nuestro material de referencia en las villas de la Belle Époque. La lana adquiere pátina, no se aplasta. Al tacto es firme, a la vista resalta. Elegimos con usted un liso profundo o un motivo geométrico del siglo XIX que encaje con la carpintería original. Prevea de quince a veinte años de tersura con facilidad.' },
  { name: 'Sisal y fibras naturales', desc: 'Para una villa contemporánea vuelta hacia la bahía, el sisal aporta el toque crudo que se busca. Un tono jaspeado arena o topo suave, exactamente en el espíritu costero de Arcachon. Lo elegimos con tratamiento antimanchas y sellado; soporta el uso familiar sin inmutarse. Buena relación calidad-precio en grandes superficies.' },
  { name: 'Vinilo tejido Bolon para pies en la arena', desc: 'Cuando su villa se abre a la playa, Bolon lo soporta todo. La arena, la humedad de la bahía, los pies mojados descalzos: aguanta. Lo lavamos con abundante agua y por la mañana está seco. Un aspecto tejido contemporáneo, y una enorme gama de colores para coordinar con la madera flotante y el azul de la bahía.' },
  { name: 'Vinilo efecto madera clara', desc: 'Para las residencias modernas de Le Pyla y Pereire, el vinilo efecto madera cumple. La imitación de roble blanqueado o pino lavado es creíble, se confunde con la real. El mantenimiento se hace en cinco minutos, y el suelo resiste la arena traída de la playa. Ideal para un alquiler de temporada premium que debe mantenerse impecable.' },
  { name: 'Alfombras a medida cosidas a mano', desc: 'Cuando quiere vestir un parqué original sin ocultarlo, la alfombra a medida marca la diferencia. Dimensiones ajustadas a la estancia, un ribete cosido a mano, un motivo adaptado a su decoración. Prevea de ocho a dieciséis semanas de fabricación. Es lo que transforma un salón de la Ville d\'Hiver.' },
]

const marques = [
  { name: 'Bolon', desc: 'El fabricante sueco de vinilo tejido, nuestra referencia para villas y restaurantes frente a la bahía. Lavable con abundante agua, robusto, una paleta densa. Lo colocamos en la mitad de las obras del Cap.' },
  { name: 'EGE Carpets', desc: 'El danés, nuestra referencia para los hoteles boutique de Le Moulleau y Pereire. Sus gamas Highline y Hospitality marcan el tono desde la entrada.' },
  { name: 'Brintons', desc: 'El Axminster británico, la aristocracia de la moqueta. Recurrimos a él para las villas de la Belle Époque de la Ville d\'Hiver, donde quiere un salón de recepción que deje huella.' },
  { name: 'Tisca Tiara', desc: 'El fabricante suizo, lo más alto de gama. Lo sacamos en villas familiares excepcionales y en las suites de los hoteles boutique de Arcachon. Cuando el presupuesto acompaña, el resultado no tiene rival.' },
  { name: 'Forbo', desc: 'Cuando el proyecto pide algo natural, miramos hacia Forbo. Su Marmoleum es un auténtico linóleo elaborado con aceite de linaza. Ideal para zonas húmedas y segundas residencias.' },
  { name: 'Gerflor', desc: 'El fabricante francés de Lyon que conocemos a fondo. Sus imitaciones de madera y mineral son perfectas para residencias contemporáneas y alquileres de temporada. Una enorme variedad, un mantenimiento sencillo.' },
  { name: 'Object Carpet', desc: 'Los alemanes, para las residencias de autor de Le Pyla. Un diseño contemporáneo asertivo, acabados perfectos. Cuando quiere salirse de los códigos clásicos del mar.' },
  { name: 'Romus', desc: 'Nuestro proveedor de perfiles. Latón cepillado, bronce, acero inoxidable marino. Elegimos el acabado según la zona y el ambiente. Es lo que marca la diferencia en la entrega.' },
]

const quartiers = [
  { nom: 'Ville d\'Hiver', detail: 'El barrio histórico de Arcachon, catalogado como notable. Villas de la Belle Époque sobre las dunas, parqué original, carpintería del siglo XIX. Un terreno de trabajo patrimonial exigente.' },
  { nom: 'Pereire', detail: 'El paseo marítimo entre la playa de Pereire y la avenue du Général Leclerc. Villas familiares, residencias contemporáneas, hoteles boutique con vistas a la bahía.' },
  { nom: 'Le Moulleau', detail: 'Un pueblo costero al sur de Arcachon. La iglesia Notre-Dame, hoteles con encanto, restaurantes de sal marina, villas con vistas a la bahía. Un ambiente de casa familiar.' },
  { nom: 'Les Abatilles', detail: 'Un barrio residencial de Arcachon, villas familiares en el pinar, calma y discreción. Manantiales termales históricos y hoteles de prestigio.' },
  { nom: 'L\'Aiguillon', detail: 'El barrio norte de Arcachon, un puerto deportivo y paseo marítimo. Residencias contemporáneas, hoteles junto al puerto deportivo, restaurantes frente al puerto.' },
  { nom: 'Eyrac', detail: 'El paseo marítimo central de Arcachon, entre los embarcaderos Thiers y Legallais. Edificios burgueses, apartamentos con vistas al mar, restaurantes de playa.' },
  { nom: 'Le Pyla', detail: 'La Teste-de-Buch, al pie de la Duna. Villas contemporáneas de autor, segundas residencias de prestigio, una vista excepcional sobre la bahía.' },
  { nom: 'Centro de Arcachon', detail: 'Boulevard de la Plage, avenue Gambetta, Notre-Dame. Edificios del siglo XIX, apartamentos familiares, comercios históricos de la estación balnearia.' },
  { nom: 'La Teste-de-Buch', detail: 'Una ciudad histórica del sur de la bahía, residencias familiares, casas ostrícolas renovadas, nuevas promociones residenciales al borde del pinar.' },
  { nom: 'Gujan-Mestras', detail: 'La capital ostrícola de la bahía, puertos históricos, cabañas renovadas, casas de pescadores rehabilitadas en residencias con encanto.' },
  { nom: 'Le Teich', detail: 'La orilla sur de la bahía, la reserva de aves, residencias contemporáneas lindando con la reserva, hoteles de naturaleza y eco-lodges familiares.' },
  { nom: 'Lanton', detail: 'La orilla noreste de la bahía, pueblos ostrícolas, casas familiares, nuevas promociones residenciales frente a la bahía y el pinar.' },
]

const process = [
  { step: 'Primer contacto', desc: 'Una llamada o un correo. Recopilación de los puntos clave del proyecto en Arcachon: tipo de propiedad, superficies, calendario deseado, contexto (segunda residencia, alquiler, hotel, restaurante). Si el proyecto lo dirige un arquitecto de interiores, contactamos directamente con su despacho para organizar los siguientes pasos.' },
  { step: 'Visita a la bahía', desc: 'Una visita organizada en un plazo de 2 a 3 semanas. Medición, un estudio de los condicionantes de acceso, fotos para coordinar los colores con la carpintería y el parqué. Muestras presentadas directamente en la propiedad bajo la luz de la bahía, que transforma la percepción de los tonos.' },
  { step: 'Elección del material y presupuesto', desc: 'Un presupuesto detallado en una semana. Validación final de los colores, las posibles alfombras a medida, los rodapiés y perfiles. El material se encarga tras la confirmación, plazo de fábrica de 3 a 10 semanas según la gama elegida.' },
  { step: 'Fabricación en el taller de Villedoux', desc: 'Precorte y premontaje de los materiales en La Rochelle. Una comprobación en seco de las dimensiones antes del transporte. Esta preparación previa es lo que nos permite mantener una colocación final de 3 a 7 días en Arcachon, sin idas y vueltas inútiles por la carretera Burdeos-La Rochelle.' },
  { step: 'Colocación en Arcachon', desc: 'Un equipo movilizado in situ, alojamiento incluido. Un calendario fijado según su disponibilidad o la ventana de obra acordada, idealmente fuera de julio-agosto. Coordinación con el conserje o el administrador si es una copropiedad. Una limpieza completa en la entrega, acabados revisados con usted.' },
]

const faq = [
  { q: '¿De verdad vienen a Arcachon desde La Rochelle?', a: 'Sí, y a menudo. Arcachon está a 250 km, es decir, de 2,5 a 3 horas por carretera. Bajamos dentro del flujo de nuestras obras del Cap, Burdeos y Saint-Émilion. Organizamos la visita de medición al inicio del proyecto, y luego volvemos a colocar al final. El alojamiento está incluido en el presupuesto. En una gran obra, el equipo se queda in situ hasta la entrega.' },
  { q: '¿Trabajan en las villas de la Ville d\'Hiver?', a: 'Sí, es donde más disfrutamos. La Ville d\'Hiver concentra villas de la Belle Époque, chalés suizos, caprichos moriscos de una calidad asombrosa. El parqué y la carpintería del siglo XIX exigen respeto. Siempre que es posible colocamos de forma reversible, sin clavar, sin encolados agresivos. Las alfombras a medida y las moquetas Brintons encajan ahí de forma natural.' },
  { q: '¿Cuándo es mejor trabajar en Arcachon?', a: 'De octubre a abril, fuera de la temporada turística. Es el período en el que los propietarios están menos presentes y la bahía respira. Para hoteles y restaurantes, apuntamos al cierre anual, generalmente entre mediados de noviembre y mediados de marzo. Evitamos julio y agosto, es una pesadilla logística. Las mejores ventanas se fijan de cuatro a seis meses antes, sobre todo con una alfombra a medida en el lote.' },
  { q: '¿Qué material para una villa frente a la bahía?', a: 'Depende del uso. En una villa de la Belle Époque vuelta hacia la bahía, la moqueta de lana sobre base de fieltro sigue siendo la referencia para salones y dormitorios. En una villa contemporánea con acceso directo a la playa, el sisal sellado o el Bolon cumplen: soportan la arena y la humedad. Para habitaciones de invitados y galerías, el vinilo efecto madera clara es perfecto. Validamos siempre bajo la luz de la bahía, nunca en un showroom.' },
  { q: '¿Trabajan con arquitectos de interiores?', a: 'Con regularidad, es incluso una de nuestras formas de trabajar preferidas. La escena arquitectónica de la bahía está activa entre Burdeos, el Cap y Arcachon. Trabajamos como subcontratistas de su pliego de condiciones; el arquitecto sigue siendo el interlocutor principal. Enviamos las muestras a su despacho para validación, y aportamos toda la documentación técnica para su expediente de obra.' },
  { q: '¿Cuánto cuesta renovar el suelo de una villa?', a: 'Muy variable según la superficie y la gama. Para darle un orden de magnitud: una villa familiar de 200 m² totalmente en moqueta de lana con algunas alfombras a medida son de 30.000 a 60.000 euros todo incluido, desplazamiento y colocación comprendidos. Un proyecto más modesto baja. Un hotel boutique sube en proporción. Siempre presupuestamos tras una visita, con un presupuesto detallado estancia por estancia, para que tenga el desglose claro.' },
  { q: '¿También colocan alfombras a medida?', a: 'Sí, es una parte importante del oficio, y un terreno especialmente pertinente en Arcachon. Alfombras cosidas a mano, dimensiones al centímetro, un motivo adaptado a su decoración. Reproducciones Aubusson o Hereke para la Ville d\'Hiver, creaciones lisas contemporáneas para las villas modernas de Le Pyla. Prevea de ocho a dieciséis semanas de fabricación. Es a menudo lo que transforma un salón, sobre todo cuando se trata de vestir un parqué original sin ocultarlo.' },
]

export default function RevetementSolArcachonPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/revetement-sol-arcachon#service',
        name: 'Revestimiento de suelo en Arcachon',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Arcachon' },
          { '@type': 'AdministrativeArea', name: 'Gironde' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Colocación de moqueta, vinilo y alfombras a medida en Arcachon y alrededor de la bahía',
        description: 'Diseño, fabricación en taller y colocación de moqueta, vinilo y alfombras a medida para villas de la Belle Époque de la Ville d\'Hiver, hoteles boutique frente a la bahía, restaurantes de sal marina y residencias contemporáneas en Arcachon, Le Moulleau, Le Pyla.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Revestimiento de suelo en Arcachon', item: 'https://cbsols.fr/es/revetement-sol-arcachon' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="arcachon" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revestimiento de suelo Arcachon</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revestimiento de suelo en Arcachon,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>el espíritu de la bahía.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Colocación de moqueta, vinilo y alfombras a medida en Arcachon y alrededor de la bahía. Villas de la Belle Époque de la Ville d&apos;Hiver, hoteles boutique de Le Moulleau, restaurantes de sal marina, residencias contemporáneas de Le Pyla. Un taller con sede cerca de La Rochelle, desplazamientos regulares por la Gironda.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=arcachon" variant="primary" size="md">Solicitar un presupuesto</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nos desplazamos hasta usted</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Arcachon es la Belle Époque al encuentro de la casa de playa. Vestir una villa de la Ville d&apos;Hiver o una residencia de Le Pyla es exactamente lo que CB Sols hace desde hace más de 28 años, con el mismo esmero por el patrimonio y el detalle.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, propietario de CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project type */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Para qué tipo de proyecto</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cuatro escenarios, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>una misma exigencia junto al mar.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un proyecto en Arcachon?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Una visita de obra, un presupuesto detallado.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Contacto directo con usted o su arquitecto de interiores. Una visita organizada en un plazo de 2 a 3 semanas, un presupuesto detallado en una semana.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/es/contact?from=arcachon-cta1" variant="primary" size="md">Solicitar un presupuesto</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Particularidades de Arcachon</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Seis exigencias <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propias de los proyectos de la bahía.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Trabajar en Arcachon no es reproducir una obra estándar. Aquí están los seis puntos sobre los que estructuramos nuestro método desde la primera visita, para respetar a la vez el patrimonio y el espíritu costero.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materiales y gamas para Arcachon</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Las familias de productos <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que llevamos a la bahía.</em>
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

      {/* Quote */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &ldquo;Una villa de la Ville d&apos;Hiver no se trata como un alquiler de temporada. Respetamos el parqué, combinamos la moqueta con la carpintería, colocamos una alfombra que se levanta sin dañar. El detalle patrimonial lo vemos desde la primera visita.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, propietario de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?from=arcachon-citation" variant="primary" size="md">Pedir una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Una visita a domicilio en la bahía</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Fabricantes asociados</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Ocho casas de referencia <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>para sus proyectos en Arcachon.</em>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Barrios y municipios de la bahía</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Arcachon y la bahía, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Le Pyla a Lanton.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Nuestro equipo se desplaza por toda la bahía de Arcachon, desde los barrios históricos de la estación balnearia hasta los pueblos ostrícolas, donde se concentran los proyectos residenciales de alta gama y los establecimientos con encanto.
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
            Veinte minutos por teléfono bastan para aclarar las gamas posibles, un calendario realista y un orden de magnitud de presupuesto para su obra en Arcachon.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=arcachon-cta2" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro método</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco etapas, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux a Arcachon.</em>
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
            Revestimiento de suelo en Arcachon, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas concretas.</em>
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
            Directamente con el propietario. Sin centralita, sin línea de atención. Un consejo claro, un orden de magnitud honesto, un siguiente paso solo si el proyecto tiene sentido.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="Ver también"
        sectionSubtitle="Nuestra experiencia abarca otros mundos que pueden interesarle. Tómese su tiempo para explorar, haga sus preguntas, que las responderemos."
        items={[
          { href: '/es/revetement-sol-cap-ferret', title: 'Revestimiento de suelo Cap Ferret', teaser: 'Cabañas ostrícolas, villas con los pies en la arena. La discreción de un saber hacer que apenas se nota.', icon: Waves },
          { href: '/es/revetement-sol-bordeaux', title: 'Revestimiento de suelo Bordeaux', teaser: 'Casas señoriales, lofts échoppe, casas de piedra. Suelos que dialogan con la arquitectura.', icon: MapPin },
          { href: '/es/revetement-sol-biarritz', title: 'Revestimiento de suelo Biarritz', teaser: 'Villas de la Costa Vasca. Suelos que resisten la sal, la arena y la luz del océano.', icon: MapPin },
          { href: '/es/revetement-sol-saint-emilion', title: 'Revestimiento de suelo Saint-Émilion', teaser: 'Castillos, bodegas y casas señoriales. Suelos elegidos por su carácter y la pátina del tiempo.', icon: Castle },
          { href: '/es/moquette-bateau', title: 'Moqueta náutica', teaser: 'Suelos marinos a medida: confort a bordo, antideslizante, resistencia a la sal y a la luz.', icon: Waves },
          { href: '/es/architectes', title: 'Para arquitectos', teaser: 'Documentación de materiales, muestras anotadas, presupuestos detallados. Nuestro papel es servir a su visión.', icon: Building2 },
          { href: '/es/showroom', title: 'Showroom de Villedoux', teaser: 'Venga a ver y tocar los materiales. Con cita previa, en Villedoux cerca de La Rochelle.', icon: Store },
          { href: '/es/contact', title: 'Contáctenos', teaser: 'Una pregunta, un proyecto, un presupuesto en 48 horas. El propietario le responde directamente.', icon: Mail },
        ]}
      />

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Su proyecto en Arcachon <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>en buenas manos.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita de obra en Arcachon. Un presupuesto detallado, acabados premium, respeto por el patrimonio de la Belle Époque y el espíritu costero contemporáneo. Más de 28 años de experiencia de CB Sols al servicio de la bahía.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=arcachon-final" variant="primary" size="md">Solicitar un presupuesto</Button>
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
