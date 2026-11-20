import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Baby, Building2, FlaskConical, GraduationCap, Home, Mail, Pill, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Suelo de PVC para consultas médicas | Dental, fisio, veterinaria',
  description: 'Suelo de PVC instalado para consultas médicas, dentistas, fisioterapeutas, osteópatas y veterinarios. Suelos fáciles de desinfectar, con una sensación tranquila y acogedora. CB Sols trabaja el oficio desde hace más de 28 años, taller cerca de La Rochelle.',
  alternates: {
    canonical: 'https://cbsols.fr/es/sol-pvc-cabinet-medical',
    languages: { 'fr-FR': 'https://cbsols.fr/sol-pvc-cabinet-medical', en: 'https://cbsols.fr/en/sol-pvc-cabinet-medical', es: 'https://cbsols.fr/es/sol-pvc-cabinet-medical', },
  },
  keywords: ['suelo de PVC para consulta médica', 'suelo para clínica dental', 'suelo para fisioterapia', 'suelo para veterinaria', 'suelo para sala de espera'],
  openGraph: {
    title: 'Suelo de PVC para consultas médicas, limpieza y calma',
    description: 'Suelo de PVC instalado para consultas de salud: dentista, fisio, osteópata, veterinario. Fácil de desinfectar, acogedor, sin olores. CB Sols, más de 28 años de saber hacer.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/sol-pvc-cabinet-medical.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Salas de espera acogedoras', desc: 'Es la primera sala que ve su paciente. Elegimos un vinilo acústico claro, en un tono pastel o madera. La sensación se mantiene cálida, el ruido de los pasos se atenúa. Útil en pediatría, donde el tránsito es intenso.' },
  { title: 'Salas de consulta', desc: 'Usted quiere calma y un suelo fácil de limpiar. Colocamos un vinilo liso en un tono suave. Las juntas termosoldadas hacen la instalación estanca. Friega con lejía diluida sin dañar nada.' },
  { title: 'Salas de cura y de procedimientos', desc: 'Para sus procedimientos técnicos, subimos un nivel. El vinilo asciende formando una media caña curvada a lo largo de la pared. Se acabaron los ángulos vivos, se acabó el polvo atrapado. El suelo soporta los desinfectantes y los carros de cura.' },
  { title: 'Pasillos y zonas de circulación', desc: 'Sus recorridos de circulación son los más usados. Colocamos un vinilo denso con dibujo jaspeado que tolera las marcas. El tono se mantiene continuo entre salas. Los umbrales no enganchan las ruedas de las sillas.' },
]

const exigences = [
  { title: 'Una pasada y queda limpio', desc: 'El suelo se limpia con agua, lejía diluida o el detergente habitual de la consulta. Ningún producto especial que pedir. Las láminas están termosoldadas, sin junta donde puedan instalarse las bacterias. Su equipo de limpieza conserva sus costumbres.' },
  { title: 'Menos ruido, más calma', desc: 'Una consulta tranquila tranquiliza al paciente. El vinilo acústico reduce el ruido de los pasos y de las conversaciones que atraviesan las paredes. La sala de espera se vuelve silenciosa, y la consulta también. Sus pacientes lo notan en cuanto se sientan.' },
  { title: 'Reabre al día siguiente', desc: 'Los suelos que colocamos tienen la clasificación A+ para la calidad del aire interior. Ningún olor persistente, ningún producto que se evapore durante semanas. Cierra el viernes por la tarde, vuelve a empezar el lunes por la mañana. Ningún riesgo para los pacientes sensibles.' },
  { title: 'Sillas y carros, el suelo aguanta', desc: 'Ruedas, sillas, carros de cura: ruedan, pivotan, concentran cargas. El vinilo profesional lo soporta sin abollarse ni marcarse. Obtiene quince años tranquilos, a veces más. Ninguna renovación de suelo a media carrera.' },
  { title: 'Una consulta, no un hospital', desc: 'Un aspecto de madera clara, hormigón suave, verde mar, tierra, ocre: elegimos paletas acogedoras. El paciente entra en un lugar sosegado, no en una sala técnica. Y refuerza su imagen de profesional atento. El detalle cuenta.' },
  { title: 'Venimos cuando usted cierra', desc: 'Una consulta no puede quedar cerrada una semana. Ajustamos la obra a sus vacaciones o al fin de semana. Del viernes por la tarde al lunes por la mañana es factible en muchas consultas. Sus pacientes no notan ninguna diferencia, sus consultas se reanudan a tiempo.' },
]

const materiaux = [
  { name: 'Vinilo acústico en lámina', desc: 'Nuestra solución más colocada en consultas médicas. Láminas de dos metros, termosoldadas entre sí. El zócalo asciende formando una media caña redondeada diez centímetros por la pared. Así la superficie es continua, sin junta donde pueda alojarse el polvo. La capa acústica suaviza la sala de espera. De quince a veinte años por delante, según el tránsito.' },
  { name: 'Vinilo efecto madera y mineral', desc: 'Cuando se busca una sensación más cálida, apostamos por un vinilo con efecto madera clara, roble blanqueado u hormigón pulido. A la altura de los ojos, engaña. La instalación sigue siendo continua, así que la higiene es la misma que con un vinilo liso. Ideal para salas de espera y consultas de medicina suave o fisioterapia.' },
  { name: 'Baldosas de vinilo en colocación libre o clic', desc: 'Si alquila, o si quiere refrescar rápido, las baldosas son perfectas. Las colocamos sin cola, de modo que pueden levantarse. Si alguien derrama algo y daña una baldosa, sustituimos solo esa. Resérvelas para las zonas secas: despacho, recepción, sala de espera. Muy buena relación calidad-precio.' },
  { name: 'Moqueta y alfombras para psicólogos y terapeutas', desc: 'En psicología, osteopatía suave, sofrología o arteterapia, la moqueta recupera todo su sentido. Sosiega, acoge, cambia la relación con el lugar. Ofrecemos lana con tratamiento antiácaros, o baldosas textiles en colocación libre que sustituimos una a una si hace falta. Sus pacientes notan la diferencia de inmediato.' },
  { name: 'Zócalos sanitarios y perfiles de umbral', desc: 'Es el detalle que marca toda la diferencia en un suelo médico. El zócalo redondeado elimina el ángulo recto entre suelo y pared, de modo que el polvo ya no se acumula en las esquinas. La fregona llega a todas partes. Los perfiles de umbral se eligen para que no enganchen las ruedas de las sillas y los carros.' },
]

const marques = [
  { name: 'Gerflor', desc: 'El fabricante francés con sede en Lyon que conocemos a fondo. Su Mipolam Symbioz está por todas partes en el sector sanitario. Una clasificación al fuego Bfl-s1, A+ para el aire interior: nuestro todoterreno.' },
  { name: 'Tarkett', desc: 'Sus iQ Granit e iQ Optima equipan la mitad de los hospitales franceses. Muy buena durabilidad, una enorme elección de colores. Una apuesta segura en una consulta de ciudad.' },
  { name: 'Forbo', desc: 'Cuando el proyecto pide algo natural, miramos hacia Forbo. Su Marmoleum es un auténtico linóleo elaborado a partir de aceite de linaza. Ideal para consultas apegadas a un origen de base biológica.' },
  { name: 'Polyflor', desc: 'El fabricante británico de vinilo de alta densidad. Sus efectos madera y hormigón son visualmente notables. El compromiso justo entre aspecto y rendimiento técnico.' },
  { name: 'Object Carpet', desc: 'Los alemanes, para consultas de terapeutas y espacios de recepción que buscan una sensación residencial. Un diseño contemporáneo con carácter, acabados perfectos.' },
  { name: 'Forbo Flotex', desc: 'El vinilo flocado que se lava a chorro de agua. A medio camino entre moqueta y vinilo. La calidez del textil sin renunciar a la higiene, ideal cuando se busca suavidad bajo los pies.' },
  { name: 'Romus', desc: 'Nuestro proveedor de perfiles y zócalos. Imprescindible para una instalación médica cuidada. Su gama es amplia, siempre encontramos lo que necesita cada configuración.' },
  { name: 'Sika y Bostik', desc: 'Nuestras referencias de adhesivos técnicos e imprimaciones de preparación. Los elegimos por su compatibilidad con el aire interior y su resistencia a la limpieza repetida. Ningún olor residual.' },
]

const quartiers = [
  { nom: 'Clínicas dentales', detail: 'Sala de espera, recepción, salas de cura equipadas con sillones. Vinilo acústico en lámina soldada, zócalo sanitario, una paleta clara que realza la luz del día.' },
  { nom: 'Consultas de medicina general', detail: 'Despacho de consulta, sala de exploración, recepción. Un suelo fácil de mantener entre dos pacientes, una sensación profesional neutra, un acabado continuo sin juntas visibles.' },
  { nom: 'Consultas de fisioterapia', detail: 'Sala de rehabilitación, zona de ejercicio, cabina de cura. Un suelo resistente a las ruedas, a las colchonetas de gimnasia sobre el suelo y a las sesiones largas con tránsito regular.' },
  { nom: 'Consultas de osteopatía', detail: 'Camilla de cura, despacho, recepción. A menudo una sensación cálida, un efecto madera clara o mineral suave, a veces moqueta en los espacios de relajación del paciente.' },
  { nom: 'Consultas veterinarias', detail: 'Sala de espera, sala de consulta, sala de cirugía, hospitalización. Un suelo antideslizante, lavable, resistente a las garras y a los desinfectantes usados en la práctica veterinaria.' },
  { nom: 'Consultas de oftalmología', detail: 'Una sala de espera a menudo concurrida, salas de exploración técnica, recepción. Un suelo claro, neutro, acústico para absorber el ruido del tránsito intenso.' },
  { nom: 'Consultas de dermatología', detail: 'Despacho de consulta, sala de cura, recepción. Un suelo fácil de limpiar entre dos pacientes, una paleta suave y sosegada para tranquilizar antes de las exploraciones cutáneas.' },
  { nom: 'Consultas de matronas', detail: 'Una sala de espera acogedora, sala de exploración, espacio de lactancia. Una sensación suave y cálida, un suelo cómodo para los bebés colocados en el suelo durante las consultas.' },
  { nom: 'Consultas de ortodoncia', detail: 'Una sala de espera para adolescentes y niños, varias salas de cura. Un suelo alegre sin ser infantil, resistente al tránsito intensivo, acústico para limitar el bullicio.' },
  { nom: 'Consultas de pediatría', detail: 'Una recepción familiar, una zona de juego en la espera, una sala de exploración. Un efecto madera clara o colores suaves, un suelo cómodo para los niños en el suelo, fácilmente lavable.' },
  { nom: 'Consultas de psicología y psicoterapia', detail: 'El despacho del terapeuta, una sala de espera discreta. La moqueta o una alfombra gruesa recupera aquí todo su sentido: calidez, intimidad, aislamiento acústico de las salas contiguas.' },
  { nom: 'Centros de salud multiprofesionales', detail: 'Varias consultas, espacios de recepción compartidos, una sala de reuniones. Coherencia visual entre espacios, una señalización implícita mediante variaciones de tono, robustez para el tránsito de varios flujos de pacientes.' },
]

const process = [
  { step: 'Primer contacto', desc: 'Una llamada telefónica para encuadrar el proyecto: número de salas, superficie estimada, la especialidad de la consulta, un posible calendario de cierre. Identificamos de inmediato si la renovación puede repartirse en varios fines de semana o si hace falta una semana de vacaciones.' },
  { step: 'Visita a la consulta', desc: 'Una visita in situ en 1 a 2 semanas. Medición, comprobación del soporte existente, estudio de las restricciones de acceso y manipulación. Muestras presentadas directamente en su consulta, bajo su luz de trabajo, para elegir el tono final.' },
  { step: 'Presupuesto y elección del material', desc: 'Un presupuesto detallado en una semana: superficies por sala, la gama propuesta, zócalos, umbrales, la duración de la obra, un calendario. Aprobación final de los colores, zócalos y perfiles. El material se pide con el acuerdo, plazo de fábrica de 2 a 5 semanas según la gama.' },
  { step: 'Preparación en taller', desc: 'Corte y premontaje de las láminas en el taller de Villedoux. Una comprobación de las dimensiones, marcado de los cortes para los pasos de sillones, las tomas de suelo y las posibles acometidas de agua. Esta preparación previa reduce el tiempo que pasamos en su consulta.' },
  { step: 'Instalación en su consulta', desc: 'Obra en la ventana de cierre acordada: un puente largo, vacaciones, una semana libre. Retirada del suelo antiguo, nivelación si hace falta, colocación de las láminas, termosoldaduras, zócalos, acabados, limpieza. La consulta devuelta lista para reabrir el día en que se reanudan las consultas.' },
]

const faq = [
  { q: '¿Qué suelo para una sala de cura?', a: 'Apostamos por vinilo profesional en láminas de dos metros, termosoldadas entre sí. El zócalo asciende formando una media caña redondeada diez centímetros. La superficie es continua, sin junta donde pueda alojarse el polvo. En cuanto al color, elegimos un tono claro ligeramente jaspeado, para detectar de inmediato una marca que limpiar. Gerflor Mipolam o Tarkett iQ Granit son nuestras elecciones habituales. Quince años por delante con facilidad.' },
  { q: '¿El suelo de PVC es fácil de desinfectar?', a: 'Sí, es incluso una de sus principales cualidades. Se limpia con agua, lejía diluida o el detergente desinfectante habitual de un establecimiento sanitario. Ningún producto especial que pedir. Las termosoldaduras hacen la superficie continua, sin intersticios. El zócalo redondeado facilita la limpieza de las esquinas. Su protocolo diario de limpieza estándar basta para mantener una consulta impecable.' },
  { q: '¿Cuánto se tarda en renovar una consulta?', a: 'Depende de la superficie y del estado del suelo existente. Para una consulta de 80 a 120 m², cuente de dos a cuatro días in situ. Lo ajustamos a un cierre habitual: un puente largo, las vacaciones escolares, las vacaciones anuales. Antes, cuente una o dos semanas para la visita y el presupuesto, y luego de dos a cinco semanas de fabricación. Premontamos en el taller para minimizar el tiempo en su consulta.' },
  { q: '¿Pueden instalar sin cerrar la consulta?', a: 'Posible, organizando la obra sala por sala a lo largo de varias semanas, con un marcado claro entre la zona de obra y la zona activa. La obra global lleva más tiempo, pero se evita el cierre. El resultado funciona bien en un centro multiprofesional. Para una consulta más pequeña, a menudo es más sencillo y más económico cerrar de dos a cuatro días durante unas vacaciones. Elegimos juntos la mejor estrategia en la visita.' },
  { q: '¿Qué suelo para una consulta veterinaria?', a: 'Un veterinario es un pliego aparte. Se necesita un suelo antideslizante para animales en pánico o anestesiados, lavable a chorro de agua, resistente a las garras de perros y gatos, y capaz de soportar desinfectantes más agresivos que en una consulta humana. Apostamos por Forbo Surestep o Gerflor Tarasafe. La instalación en lámina soldada con media caña de zócalo es casi obligatoria en cirugía y hospitalización. La inspección sanitaria pasa entonces sin reservas.' },
  { q: '¿Los suelos de vinilo desprenden olores?', a: 'Las gamas profesionales que colocamos tienen la clasificación A+ para el aire interior, la mejor clasificación francesa. Tendrá un leve olor a nuevo el día de la instalación, que desaparece en 24 a 48 horas con una ventilación normal. Ningún compuesto volátil durante semanas, ninguna molestia para los pacientes sensibles. El adhesivo y la imprimación también se eligen entre referencias de muy baja emisión, ahí no hacemos ninguna concesión.' },
  { q: '¿Trabajan fuera de Charente-Maritime?', a: 'Sí, con regularidad. El taller está en Villedoux cerca de La Rochelle, y trabajamos en todo el oeste de Francia: Vendée, Deux-Sèvres, Charente, Vienne, Gironde y más allá. Hemos instalado en consultas de Nantes, Burdeos, Niort, Poitiers, Angulema, La Roche-sur-Yon. El desplazamiento y el alojamiento se incluyen en el presupuesto más allá de dos horas de trayecto. Planificamos a lo largo de seis a diez semanas, lo cual es cómodo para organizarlo todo a distancia.' },
]

export default function SolPvcCabinetMedicalPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/sol-pvc-cabinet-medical#service',
        name: 'Suelo de PVC para consultas médicas',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
          { '@type': 'Country', name: 'France' },
        ],
        serviceType: 'Suelo de PVC instalado en consultas médicas, dentales, de fisioterapia y veterinarias',
        description: 'Suelo de PVC profesional instalado para consultas médicas: dentista, médico de cabecera, fisio, osteópata, veterinario, oftalmólogo, matrona. Termosoldaduras, zócalo sanitario, clasificación A+ de aire interior.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Suelo de PVC para consultas médicas', item: 'https://cbsols.fr/es/sol-pvc-cabinet-medical' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="cabinet-medical" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Suelo de PVC para consultas médicas</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Suelo de PVC para consultas médicas,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>limpieza y calma.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Suelo de PVC profesional instalado para consultas de salud: dentista, médico de cabecera, fisio, osteópata, veterinario, oftalmólogo, matrona, pediatra. Suelos fáciles de desinfectar, acústicos, acogedores. CB Sols trabaja el oficio desde hace más de 28 años, taller en Villedoux cerca de La Rochelle.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=sol-pvc-cabinet-medical" variant="primary" size="md">Solicitar un presupuesto</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Trabajar sin un cierre largo</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Trabajamos durante el cierre de la consulta: un sábado largo, una semana de vacaciones. El profesional reabre el lunes sobre un suelo limpio, tranquilo, sin olores. Eso es lo que CB Sols hace desde hace más de 28 años.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, titular de CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Which zone */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Para qué zonas de la consulta</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cuatro zonas, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>cuatro elecciones de suelo.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Una consulta que renovar?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Una visita in situ, un presupuesto detallado.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Muestras presentadas en su consulta, bajo su luz. Un presupuesto detallado en una semana, un calendario ajustado a sus cierres.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/es/contact?from=sol-pvc-cabinet-medical-cta1" variant="primary" size="md">Solicitar un presupuesto</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Lo que debe cumplir un suelo médico</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Seis exigencias <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propias de las consultas de salud.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Una consulta médica no es un despacho estándar. Estos son los seis puntos sobre los que orientamos sistemáticamente la elección del suelo y su instalación, de forma accesible, sin ahogar al profesional en jerga técnica.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Familias de productos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Los suelos <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que colocamos en consultas.</em>
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
              &ldquo;Una consulta médica es un suelo que debe tranquilizar al paciente y facilitar la vida del profesional. Tranquilo, limpio, acogedor, sin olores. El resto es técnica que nos guardamos para nosotros.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, titular de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?from=sol-pvc-cabinet-medical-citation" variant="primary" size="md">Concertar una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Una visita directamente en su consulta</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Marcas colaboradoras</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Ocho referencias de confianza <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>para el sector sanitario.</em>
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

      {/* Specialities */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Especialidades en las que trabajamos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Doce especialidades, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>elecciones de suelo a juego.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Cada especialidad médica tiene sus usos, sus restricciones y su relación con el paciente. Así adaptamos los suelos a las consultas que renovamos con regularidad.
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un proyecto en mente?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Una llamada para encuadrar el proyecto.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Veinte minutos por teléfono para aclarar las gamas posibles, un calendario realista y un orden de magnitud del presupuesto para su consulta.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=sol-pvc-cabinet-medical-cta2" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro método</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco etapas, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>del primer contacto a la reapertura.</em>
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
            El vinilo en una consulta médica, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas concretas.</em>
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
            Directamente con el titular. Consejo claro, sin jerga, un orden de magnitud honesto, un siguiente paso solo si el proyecto tiene sentido para usted.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="Ver también"
        sectionSubtitle="Nuestro saber hacer abarca otros mundos que pueden interesarle. Tómese su tiempo para explorar, plantee sus preguntas, las responderemos."
        items={[
          { href: '/es/sol-pvc-pharmacie', title: 'Suelo de PVC para farmacias', teaser: 'Higiene diaria, conformidad sanitaria, instalación nocturna. Veinte años de uso en una farmacia que no cierra nunca.', icon: Pill },
          { href: '/es/sol-pvc-laboratoire-pharmaceutique', title: 'Suelo de PVC para laboratorios', teaser: 'El rigor de acabado que exige una auditoría de calidad. Termosoldaduras, suelos claros, zócalo sanitario.', icon: FlaskConical },
          { href: '/es/sol-pvc-creche', title: 'Suelo de PVC para guarderías', teaser: 'Sin ftalatos, antibacteriano, certificado para la primera infancia. Tranquilidad para padres y personal.', icon: Baby },
          { href: '/es/sol-pvc-ecole', title: 'Suelo de PVC para colegios', teaser: 'Acústica calmada, mantenimiento rápido, durabilidad de quince años en un aula que no para.', icon: GraduationCap },
          { href: '/es/particuliers', title: 'Para particulares', teaser: 'Moqueta, suelo de PVC, alfombras a medida: nuestro saber hacer al servicio de su hogar.', icon: Home },
          { href: '/es/architectes', title: 'Para arquitectos', teaser: 'Documentación de materiales, muestras anotadas, presupuestos detallados. Nuestro papel es servir su visión.', icon: Building2 },
          { href: '/es/showroom', title: 'Showroom de Villedoux', teaser: 'Venga a ver y tocar los materiales. Con cita previa, en Villedoux cerca de La Rochelle.', icon: Store },
          { href: '/es/contact', title: 'Contáctenos', teaser: 'Una pregunta, un proyecto, un presupuesto en 48 horas. El titular le responde directamente.', icon: Mail },
        ]}
      />

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Su consulta renovada <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>sin complicaciones.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita in situ en su consulta. Un presupuesto detallado, un suelo con clasificación A+, instalación durante su cierre, una reapertura sin olores. Más de 28 años de saber hacer de CB Sols al servicio de los profesionales de la salud.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=sol-pvc-cabinet-medical-final" variant="primary" size="md">Solicitar un presupuesto</Button>
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
