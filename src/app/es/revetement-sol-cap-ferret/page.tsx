import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Mail, MapPin, Store, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Revestimiento de suelo en Cap Ferret | Villas de la bahía',
  description: 'Colocación de moqueta, vinilo y alfombras a medida para villas en Cap Ferret. Segundas residencias, terrazas de madera, pies en la arena. CB Sols artesano de alta gama, más de 28 años de experiencia.',
  alternates: {
    canonical: 'https://cbsols.fr/es/revetement-sol-cap-ferret',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-cap-ferret', en: 'https://cbsols.fr/en/revetement-sol-cap-ferret', es: 'https://cbsols.fr/es/revetement-sol-cap-ferret', },
  },
  keywords: ['revestimiento de suelo Cap Ferret', 'moqueta para villa Cap Ferret', 'suelo junto al mar bahía de Arcachon', 'colocación de alfombras cabaña Cap Ferret', 'artesano del suelo Arcachon'],
  openGraph: {
    title: 'Revestimiento de suelo en Cap Ferret, el arte del mar',
    description: 'Moqueta, vinilo y alfombras a medida para villas en Cap Ferret y en la bahía de Arcachon. CB Sols, más de 28 años de experiencia.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-cap-ferret.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Villas familiares con los pies en la arena', desc: 'Pasa el verano en familia frente a la bahía. La arena entra, lo aceptamos. Vinilo efecto madera para las salas de estar, moqueta de lana o una alfombra a medida en la zona de los dormitorios. Colocamos fuera de julio-agosto para no interrumpir sus vacaciones.' },
  { title: 'Cabañas ostrícolas renovadas', desc: 'Ha comprado una casa ostrícola en L\'Herbe o Le Canon. El revestimiento convive con la sal y la humedad. Elegimos una colocación reversible que no agrede nada. El carácter del edificio queda intacto.' },
  { title: 'Segundas residencias de alta gama', desc: 'Su casa familiar tiene un diseñador dedicado, a menudo en París. Nos comunicamos por fotos y muestras. Moqueta de lana en los dormitorios, vinilo duradero en la zona de agua, alfombras en las salas de estar.' },
  { title: 'Hoteles boutique frente a la bahía', desc: 'Dirige un pequeño hotel o habitaciones de huéspedes con vistas. Todo debe cumplir la normativa de edificio público y aguantar la sal. Elegimos revestimientos ignifugados, en una paleta suave que acompaña al lugar.' },
]

const exigences = [
  { title: 'La arena, la tenemos en cuenta', desc: 'En Cap Ferret, la arena se invita por todas partes: en las zapatillas, bajo los muebles, en los dobladillos. Un revestimiento estándar se desgasta el doble de rápido. Elegimos fibras duras que soportan el grano de arena del día a día. Conserva un suelo limpio durante más tiempo.' },
  { title: 'La sal y el sol no nos asustan', desc: 'El aire de la bahía está cargado de sal, el sol pega fuerte en los ventanales. Seleccionamos fibras con tratamiento UV y adhesivos compatibles con el ambiente marino. El suelo conserva su color y su tersura, temporada tras temporada. Sin mala sorpresa tras dos veranos.' },
  { title: 'Una casa cerrada seis meses, lo gestionamos', desc: 'Muchas villas permanecen cerradas fuera de temporada. El calor sube, la humedad varía, el suelo trabaja. Evitamos los adhesivos de fraguado lento y los materiales frágiles a los cambios. Abre la casa en junio y todo está en su sitio como el día de la colocación.' },
  { title: 'Venimos fuera de julio-agosto', desc: 'El verano en Cap Ferret está lleno, abarrotado, de vida familiar. Encajamos las obras entre septiembre y junio. La casa está tranquila, y los profesionales también. Recupera su villa lista para la temporada, sin haber visto pasar un solo rollo de moqueta.' },
  { title: 'Callejones estrechos, nos adaptamos', desc: 'En L\'Herbe, Le Canon, Piraillan, el camión no llega hasta la villa. Acarreamos a mano, en carretillas anchas, protegiendo las terrazas de madera y las cabañas vecinas. El vecindario queda tranquilo, y su terraza también. Dejamos el lugar como lo encontramos.' },
  { title: 'Una sola persona, del presupuesto a la factura', desc: 'En la bahía, ya hace malabares con el guarda, el jardinero, el constructor de piscinas. Nosotros somos un único nombre en su agenda. Presupuesto, calendario, entrega, factura: todo pasa por la misma persona. Gana tiempo y tranquilidad.' },
]

const materiaux = [
  { name: 'Vinilo tejido Bolon de alta gama', desc: 'Nuestro material de elección para el borde de la bahía. La arena se retira simplemente con agua, la sal no lo daña. Los tonos naturales (lino, arena, crudo) encajan a la perfección en una villa del Cap. Lo colocamos en entradas y pasillos. Prevea de quince a veinte años en uso de temporada, con un mantenimiento inmediato.' },
  { name: 'Vinilo Gerflor Texline y Tarkett iQ Granit', desc: 'Para baños y lavaderos, optamos por vinilo profesional. Un aspecto mate o efecto madera flotante, soldamos las láminas en caliente. Así el agua no se cuela por ningún sitio, ni en las juntas ni bajo el rodapié. Es exactamente lo que se necesita cuando el clima es húmedo todo el año.' },
  { name: 'Moqueta de poliamida premium, EGE y Forbo Flotex', desc: 'En dormitorios y bibliotecas, buscamos el confort bajo los pies. La poliamida de alta densidad es suave pero resistente. Los tonos suaves acompañan al ambiente de la bahía. El Flotex se lava directamente con abundante agua, lo que es precioso cuando niños e invitados desfilan todo el verano.' },
  { name: 'Alfombras a medida de lana virgen y fibras naturales', desc: 'Cuando quiere vestir un salón abierto a la bahía sin recargar la decoración, la alfombra a medida cumple. Sisal, fibra de mar o lana virgen de bucle según su gusto. Un ribete cosido a mano, dimensiones al centímetro. Seis a diez semanas de fabricación. Colocamos sin encolar, es totalmente reversible.' },
  { name: 'Suelos Vorwerk y Object Carpet para las suites', desc: 'Para las suites principales y las habitaciones de huéspedes premium, subimos un nivel. El tacto es excepcional, como si caminara sobre una base de fieltro. Si alquila su villa en temporada, elegimos una gama con tratamiento ignífugo. Y entre plantas, el aislamiento acústico es serio.' },
  { name: 'Perfiles Romus de latón cepillado y acero inoxidable marino', desc: 'Para umbrales y peldaños de escalera, elegimos el material según la zona. En los pasos expuestos a la sal, optamos por acero inoxidable marino 316L, el mismo que en los barcos. En el interior, el latón cepillado patinado acompaña a los herrajes de bronce de las cabañas renovadas. El detalle cuenta.' },
]

const marques = [
  { name: 'Gerflor', desc: 'El fabricante francés de Lyon que conocemos a fondo. Su Texline es perfecto para zonas húmedas y espacios de temporada. Resiste la arena y la humedad año tras año.' },
  { name: 'Forbo Flotex', desc: 'El suelo textil que se lava con abundante agua, lo que cambia la vida en una villa familiar. Cuando los invitados vienen fin de semana tras fin de semana, pasa la aspiradora y, en el peor de los casos, lava de verdad.' },
  { name: 'Tarkett iQ Granit', desc: 'El vinilo profesional por excelencia. Muy resistente, muy mate. Lo soldamos en caliente para un acabado continuo, sin junta visible. Es nuestro estándar en zonas técnicas.' },
  { name: 'Polyflor', desc: 'El fabricante británico de vinilo. Sus gamas soportan la arena y resisten los UV, por lo que aguantan los ventanales orientados al sur abiertos a la bahía.' },
  { name: 'EGE Carpets', desc: 'El danés, nuestra referencia para hoteles boutique y suites de villa de alta gama. Sus gamas Highline y Hospitality marcan el tono de inmediato.' },
  { name: 'Object Carpet', desc: 'Los alemanes, para dormitorios principales y despachos que quieren salirse de los códigos clásicos. Un diseño contemporáneo, acabados perfectos.' },
  { name: 'Bolon', desc: 'El fabricante sueco de vinilo tejido. Es nuestra referencia para el mar. Resistencia, aspecto, longevidad, todo se reúne. Lo encontramos en la mitad de las villas que acondicionamos en el Cap.' },
  { name: 'Vorwerk', desc: 'El fabricante alemán de moqueta tufting premium. Una gama de tonos naturales suaves, un tacto excepcional. Perfecto para una sala de estar que quiere convertir en un refugio.' },
]

const quartiers = [
  { nom: 'Pueblo de Cap Ferret', detail: 'El corazón histórico del Cap, cerca del faro y del embarcadero de Bélisaire. Villas familiares, hoteles boutique, restaurantes frente a la bahía.' },
  { nom: 'L\'Herbe', detail: 'Un emblemático pueblo ostrícola, cabañas apretadas, la capilla argelina. Cabañas renovadas en residencias de alta gama.' },
  { nom: 'Le Canon', detail: 'Un pueblo tranquilo entre L\'Herbe y Piraillan. Cabañas ostrícolas y villas familiares transmitidas a lo largo de varias generaciones.' },
  { nom: 'Piraillan', detail: 'Un pueblo apacible, un puerto ostrícola, un ambiente auténtico. Viviendas familiares y segundas residencias de alta gama.' },
  { nom: 'Grand Piquey', detail: 'Un barrio residencial familiar, playas tranquilas en la zona de la bahía. Villas patrimoniales y propiedades transmitidas de generación en generación.' },
  { nom: 'Petit Piquey', detail: 'Un barrio confidencial, villas familiares discretas, acceso directo a la bahía. Una clientela apegada a la autenticidad del lugar.' },
  { nom: 'Claouey', detail: 'La entrada norte de la península, un puerto ostrícola y segundas residencias. Una mezcla de villas antiguas y promociones contemporáneas de alta gama.' },
  { nom: 'Lège', detail: 'La ciudad de acceso a la península, más continental, pero ya con espíritu de bahía. Villas familiares y segundas residencias.' },
  { nom: 'Arès', detail: 'El lado este de la bahía, un ambiente familiar y patrimonial. Villas antiguas, propiedades frente al agua, hoteles boutique.' },
  { nom: 'Andernos-les-Bains', detail: 'Una estación balnearia familiar histórica de la bahía. Villas de la Belle Époque, residencias familiares, hoteles patrimoniales.' },
  { nom: 'Cassy', detail: 'Una aldea residencial apacible en la zona de Lanton. Villas familiares discretas, propiedades al borde del bosque y de la bahía.' },
  { nom: 'Taussat', detail: 'Un pueblo confidencial entre Cassy y Audenge. Villas antiguas, acceso directo a la bahía, un ambiente preservado y residencial.' },
]

const process = [
  { step: 'Primer contacto', desc: 'Una llamada o un correo. Recopilación de los puntos clave: tipo de propiedad (villa, cabaña renovada, hotel), superficie estimada, calendario deseado, período de uso (temporada, fuera de temporada, alquiler). Si el proyecto lo dirige un arquitecto o decorador, contactamos directamente con él.' },
  { step: 'Visita a Cap Ferret', desc: 'Una visita organizada en un plazo de 2 a 3 semanas, idealmente fuera de julio-agosto. Medición con láser, un estudio de los condicionantes de acceso (callejones, arena, terrazas de madera), fotos de las terrazas exteriores y las especies de madera existentes para coordinar los colores. Gastos incluidos en el presupuesto si se confirma la obra.' },
  { step: 'Elección del material', desc: 'El showroom de Villedoux o muestras enviadas directamente a Cap Ferret, a su dirección o a la del arquitecto. Validación final bajo la luz del lugar, nunca en un showroom: la luz de la bahía transforma los colores, sobre todo las lanas de brillo suave y las fibras naturales.' },
  { step: 'Fabricación en el taller de La Rochelle', desc: '3 a 10 semanas según la gama: Bolon, Wilton, poliamida, vinilo cortado, alfombras a medida. Premontaje en seco en el taller para validar el ajuste antes del transporte. Esta preparación previa es lo que nos permite mantener una colocación final de 2 a 5 días en Cap Ferret.' },
  { step: 'Colocación en Cap Ferret', desc: 'Un equipo movilizado in situ, alojamiento incluido en el presupuesto, un calendario fijado según su disponibilidad y la apertura/cierre de temporada. Coordinación con el guarda de su villa o su conserjería local. Una limpieza completa, acabados revisados con usted o su decorador.' },
]

const faq = [
  { q: '¿De verdad vienen a Cap Ferret desde La Rochelle?', a: 'Sí, sin dificultad. El Cap está a 2,5 horas de nuestro taller por autopista. Dominamos esta distancia desde hace veintisiete años con las obras de Ré y Oléron; la lógica es exactamente la misma. Venimos a medir una vez, y luego volvemos a colocar. El alojamiento está incluido en el presupuesto. Evitamos julio y agosto, lo encajamos en mayo-junio antes de la apertura o en septiembre-octubre después del cierre.' },
  { q: '¿Qué revestimiento elegir para una villa con los pies en la arena?', a: 'La arena se invita por todas partes, es el enemigo número uno de un suelo en el Cap. En entradas y pasillos, optamos por vinilo tejido Bolon o Gerflor Texline. El mantenimiento se hace con agua, el material envejece bien frente a la sal. En dormitorios y bibliotecas, donde quiere suavidad bajo los pies, colocamos poliamida de alta densidad o lana tratada. Resolvemos el equilibrio con usted en la visita.' },
  { q: '¿Qué materiales resisten de verdad la humedad de la bahía?', a: 'La humedad salina plantea dos problemas: ataca las fibras naturales y daña los adhesivos estándar. Respondemos en tres frentes. Primero, elegimos fibras sintéticas en las zonas expuestas (poliamida de alta densidad, polipropileno marino, Bolon). Luego, utilizamos adhesivos compatibles con el ambiente marino. Y para las villas cerradas seis meses al año, evitamos las bases que almacenan humedad.' },
  { q: '¿Trabajan en las cabañas ostrícolas renovadas?', a: 'Sí, y nos encanta. Las cabañas de L\'Herbe, Le Canon o Piraillan tienen un alma propia, hecha de sal, madera trabajada, estructuras a la vista. Trabajamos allí en modo delicado: colocación suelta, fibras naturales, una alfombra a medida en lugar de una moqueta encolada. La idea es que el suelo desaparezca en favor del lugar. No que compita con él.' },
  { q: '¿Por qué evitan julio y agosto?', a: 'Porque es una pesadilla logística. El tráfico está saturado, las entregas se atascan, las familias están in situ o la villa se alquila a precios máximos. Preferimos encajarlo en mayo-junio antes de la apertura, o septiembre-octubre después del cierre. En esos períodos, el acceso es fluido, los profesionales locales están libres, y su villa se entrega limpia para la temporada que llega.' },
  { q: '¿Cuánto dura un suelo en el borde de la bahía?', a: 'De quince a veinte años, bien elegido y bien colocado. Un Bolon en la entrada de una villa familiar dura veinte años en uso de temporada. Un vinilo Gerflor en un baño dura quince años tranquilos. Una moqueta de poliamida premium en un dormitorio, de doce a quince años según el uso. Nuestro saber hacer viene de veintisiete años de obras atlánticas; conocemos las trampas del mar.' },
  { q: '¿Trabajan con los decoradores y arquitectos de la bahía?', a: 'Con regularidad. La clientela del Cap trabaja a menudo con decoradores parisinos o bordeleses. Trabajamos como subcontratistas de su pliego de condiciones; el arquitecto sigue siendo el interlocutor principal. Enviamos las muestras a su despacho para validación bajo su luz de referencia. Y aportamos toda la documentación técnica para su expediente de obra.' },
]

export default function RevetementSolCapFerretPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/revetement-sol-cap-ferret#service',
        name: 'Revestimiento de suelo en Cap Ferret y la bahía de Arcachon',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Cap Ferret' },
          { '@type': 'City', name: 'Lège-Cap-Ferret' },
          { '@type': 'City', name: 'Arès' },
          { '@type': 'City', name: 'Andernos-les-Bains' },
          { '@type': 'AdministrativeArea', name: 'Gironde' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Colocación de moqueta, vinilo y alfombras a medida para villas de Cap Ferret y la bahía de Arcachon',
        description: 'Diseño, fabricación en taller y colocación de moqueta, vinilo y alfombras a medida para villas familiares, cabañas ostrícolas renovadas, segundas residencias y hoteles boutique de Cap Ferret y la bahía de Arcachon.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Revestimiento de suelo en Cap Ferret', item: 'https://cbsols.fr/es/revetement-sol-cap-ferret' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="cap-ferret" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revestimiento de suelo Cap Ferret</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revestimiento de suelo en Cap Ferret,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>el arte del mar.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Colocación de moqueta, vinilo y alfombras a medida para villas de Cap Ferret y la bahía de Arcachon. Residencias familiares con los pies en la arena, cabañas ostrícolas renovadas, hoteles boutique frente a la bahía. Un taller en La Rochelle, trabajo de temporada organizado.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=cap-ferret" variant="primary" size="md">Solicitar un presupuesto</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nos desplazamos hasta usted</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;La arena se invita por todas partes en Cap Ferret. Elegir la fibra adecuada es lo que hace que un suelo dure diez años o veinte. Desde hace más de 28 años, CB Sols trabaja junto al Atlántico, y la bahía habla el mismo idioma.&rdquo;
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
            Cuatro escenarios, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>una misma comprensión de la bahía.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un proyecto en la bahía?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Una visita fuera de temporada, un presupuesto detallado.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Contacto directo con su arquitecto de interiores, su decorador familiar o con usted. Una visita organizada fuera de julio-agosto, un presupuesto detallado en una semana.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/es/contact?source=cap-ferret-cta1" variant="primary" size="md">Solicitar un presupuesto</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Particularidades de Cap Ferret</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Seis condicionantes <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propios del borde de la bahía.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Trabajar en Cap Ferret no es una obra corriente. El clima marino, la estacionalidad, la arena y el acceso a la villa dictan un método específico, que aplicamos de forma sistemática.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materiales y saber hacer para Cap Ferret</div>
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

      {/* Mid quote */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &ldquo;Una villa del Cap vive en temporada y se cierra el resto del año. El suelo debe aceptar ese ciclo, soportar la sal, resistir la arena. Es un oficio de paciencia y de buenas decisiones desde el principio.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, propietario de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?source=cap-ferret-citation" variant="primary" size="md">Pedir una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Una visita fuera de temporada</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Fabricantes asociados</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Ocho casas de referencia <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que aguantan el mar.</em>
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

      {/* Villages */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pueblos y municipios donde trabajamos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Toda la península, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>y el norte de la bahía.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Nuestro equipo se desplaza por toda la península de Cap Ferret y el norte de la bahía, donde se concentran las villas familiares y las segundas residencias de alta gama de la bahía.
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
            Veinte minutos por teléfono bastan para aclarar las gamas posibles, un calendario realista (fuera de julio-agosto) y un orden de magnitud de presupuesto para su villa de la bahía.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?source=cap-ferret-cta2" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro método</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco etapas, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux a Cap Ferret.</em>
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
            Revestimiento de suelo en Cap Ferret, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas concretas.</em>
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
            Directamente con el propietario. Sin línea de atención. Un consejo claro, un orden de magnitud honesto, un calendario realista que tiene en cuenta la estacionalidad de la bahía.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="Ver también"
        sectionSubtitle="Nuestra experiencia abarca otros mundos que pueden interesarle. Tómese su tiempo para explorar, haga sus preguntas, que las responderemos."
        items={[
          { href: '/es/revetement-sol-arcachon', title: 'Revestimiento de suelo Arcachon', teaser: 'Casas de la bahía y villas de las dunas. Suelos que soportan la arena, la luz y la vida diaria.', icon: MapPin },
          { href: '/es/revetement-sol-bordeaux', title: 'Revestimiento de suelo Bordeaux', teaser: 'Casas señoriales, lofts échoppe, casas de piedra. Suelos que dialogan con la arquitectura.', icon: MapPin },
          { href: '/es/revetement-sol-biarritz', title: 'Revestimiento de suelo Biarritz', teaser: 'Villas de la Costa Vasca. Suelos que resisten la sal, la arena y la luz del océano.', icon: MapPin },
          { href: '/es/revetement-sol-ile-d-yeu', title: 'Revestimiento de suelo Île d\'Yeu', teaser: 'Logística insular, transbordador, un calendario ajustado. Nuestra experiencia en proyectos insulares.', icon: Waves },
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
            Su villa del Cap <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>en manos expertas.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita fuera de temporada en Cap Ferret. Un presupuesto detallado, materiales adaptados al mar, acabados cuidados. Más de 28 años de experiencia atlántica al servicio de la bahía de Arcachon.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=cap-ferret-final" variant="primary" size="md">Solicitar un presupuesto</Button>
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
