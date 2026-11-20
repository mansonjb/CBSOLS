import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { BookOpen, Building2, GraduationCap, Home, Mail, Pill, Stethoscope, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Suelo de PVC para guarderías | Suelos para la primera infancia',
  description: 'Suelo de PVC instalado en guarderías, microguarderías y hogares de asistentes maternales. Conformidad con la autoridad de primera infancia, sin ftalatos, etiqueta A+, acústico, antibacteriano. CB Sols acompaña a los centros de primera infancia desde hace más de 28 años.',
  alternates: {
    canonical: 'https://cbsols.fr/es/sol-pvc-creche',
    languages: { 'fr-FR': 'https://cbsols.fr/sol-pvc-creche', en: 'https://cbsols.fr/en/sol-pvc-creche', es: 'https://cbsols.fr/es/sol-pvc-creche', },
  },
  openGraph: {
    title: 'Suelo de PVC en guarderías | Suelos para la primera infancia',
    description: 'Suelo de PVC conforme en guarderías, microguarderías y hogares de asistentes maternales. Sin ftalatos, etiqueta A+, acústico, antideslizante R10/R11, antibacteriano integrado.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/sol-pvc-creche.jpg', width: 1200, height: 630 }],
  },
}

const cas = [
  { title: 'Sala de bebés, 0-12 meses', desc: 'Vinilo acústico de 3 a 4 mm con una reducción importante del ruido de impacto, confort bajo los cojines de psicomotricidad y las colchonetas de juego. Sin ftalatos, etiqueta A+, antibacteriano integrado. Los bebés gatean sobre él todo el día: es la exigencia más alta de la instalación para la primera infancia.' },
  { title: 'Salas de medianos y mayores', desc: 'Vinilo heterogéneo con clasificación U4P3, antideslizante R10, decorados de madera clara o tonos pastel suaves. Instalación en láminas anchas de 2 metros con termosoldadura, estanqueidad total, higiene impecable para las caídas y los derrames del día a día.' },
  { title: 'Salas de descanso y lactario', desc: 'Vinilo acústico para mantener la calma de la siesta, una superficie lisa fácil de desinfectar en el lactario. Zócalo sanitario integrado, antibacteriano en todo el espesor, conformidad con las exigencias de la autoridad de primera infancia sobre las superficies de preparación de alimentos.' },
  { title: 'Cambiador y aseos', desc: 'Vinilo de seguridad antideslizante R11, zócalo sanitario elevado 10 cm, termosoldadura completa. Resistencia a los desinfectantes, una superficie continua sin juntas que acumulen polvo, posibilidad de lavar a chorro de agua. Conformidad estricta con la autoridad de primera infancia.' },
]

const produits = [
  { name: 'Vinilo acústico para la primera infancia', desc: 'La referencia para las salas de bebés y de descanso. Una reducción del ruido de impacto de 17 a 22 dB, etiqueta A+, una clasificación U3P3 o U4P3 según la zona, sin ftalatos de generación anterior. Principales gamas utilizadas: Gerflor Taralay Acoustic y Tarkett iQ Granit Acoustic.' },
  { name: 'Vinilo compacto sin ftalatos', desc: 'Para los centros más exigentes o los que buscan una certificación medioambiental. Compacto homogéneo lijable, una vida útil de 28 años, etiqueta A+. Principales gamas utilizadas: Gerflor Mipolam Symbioz (de atribución biológica) y Forbo Sphera (completamente sin ftalatos).' },
  { name: 'Vinilo de seguridad para cambiador y aseos', desc: 'Para el cambiador, los aseos y el lactario. Antideslizante R11, agregados antideslizantes en la capa de uso, zócalo sanitario a juego, conformidad con la autoridad de primera infancia. Principales gamas utilizadas: Gerflor Tarasafe Standard y Forbo Surestep.' },
]

const process = [
  { step: 'Visita y conformidad', desc: 'Una conversación con la directora, la responsable o el promotor de la microguardería. Una revisión de las exigencias departamentales de la autoridad de primera infancia (ligeras variaciones entre departamentos). Un estudio de las superficies, con las zonas de bebés, cambiador, descanso y lactario identificadas.' },
  { step: 'Consejo de producto específico', desc: 'Una visita al showroom de Villedoux o muestras in situ. Una elección entre suelos acústicos (salas de bebés y de descanso), suelos compactos premium (zonas de circulación), suelos de seguridad (cambiador y aseos). Consejo sin ftalatos y A+ en todos los casos.' },
  { step: 'Presupuesto y calendario', desc: 'Un coste detallado por zona, suministro e instalación, recrecido, zócalo sanitario. Para guarderías en funcionamiento, un calendario durante los cierres de verano o de fin de año. Para aperturas nuevas, coordinación con el promotor y los demás gremios.' },
  { step: 'Preparación e instalación', desc: 'Retirada del revestimiento antiguo si es una renovación, recrecido autonivelante, imprimación de agarre, desenrollado de las láminas de 2 metros, encolado a toda superficie, pasada cuidadosa de rodillo, termosoldadura por termofusión. Zócalo sanitario en cambiador, aseos, lactario.' },
  { step: 'Recepción y conformidad', desc: 'Una revisión de cada soldadura, una revisión del zócalo sanitario, una limpieza de puesta en servicio. El expediente de conformidad entregado: actas de clasificación al fuego Bfl-s1, declaraciones ambientales, fichas técnicas A+, certificados sin ftalatos. Para la autoridad y la dirección.' },
]

const faq = [
  { q: '¿Qué exigencias de la autoridad de primera infancia se aplican al suelo de una guardería?', a: 'Las exigencias de la autoridad de primera infancia (PMI) varían ligeramente de un departamento a otro, pero la base común es sólida. El revestimiento debe ser resiliente para amortiguar las caídas de los más pequeños, lavable y desinfectable, sin junta visible que acumule bacterias, sin ftalatos de generación problemática (DEHP, DBP, BBP prohibidos). La clasificación al fuego debe ser Bfl-s1 como mínimo (edificio de pública concurrencia de tipo R), la etiqueta A+ de COV es obligatoria para la calidad del aire que respiran los bebés, antideslizante R10 en zonas comunes y R11 en cambiador y aseos. Para el ruido de impacto, se recomienda una reducción superior a 15 dB en las salas que acogen a niños en desarrollo motor. Entregamos sistemáticamente el expediente completo a la dirección para la inspección de la autoridad.' },
  { q: 'Sin ftalatos: ¿es realmente importante para una guardería?', a: 'Sí, se ha convertido en un estándar imprescindible de los centros modernos de primera infancia. Los ftalatos DEHP, DBP y BBP fueron clasificados como CMR (cancerígenos, mutágenos, tóxicos para la reproducción) y hace tiempo que fueron sustituidos en los suelos de vinilo profesional por plastificantes de nueva generación conformes con el reglamento REACH. Para ir más lejos, algunas gamas premium eliminan por completo los ftalatos en favor de otros plastificantes considerados más seguros: Forbo Sphera está completamente libre de ftalatos, Gerflor Mipolam Symbioz es de atribución biológica y usa materias primas renovables, Tarkett iQ Granit es 100 % reciclable en circuito cerrado. Para una guardería, microguardería u hogar de asistentes maternales, orientamos sistemáticamente hacia estas gamas. El sobrecoste es moderado y el argumento es potente ante los padres y la autoridad.' },
  { q: '¿Por qué un suelo acústico en una guardería?', a: 'El ruido de impacto (pasos, objetos caídos, juguetes, carros) es una de las principales fuentes de fatiga acústica para los niños y el personal de primera infancia. Un vinilo acústico de 3 a 4 mm incluye una capa inferior densa que amortigua ese ruido antes de que se propague. Las mejores referencias (Gerflor Taralay Acoustic, Tarkett iQ Granit Acoustic, Forbo Sarlon Habitat) indican reducciones de 17 a 22 dB. En la práctica, transforma el sonido de una sala y permite que los bebés duerman mejor, que los medianos se concentren mejor en la actividad, y que el personal se canse menos al final del día. Para las salas de bebés y de descanso, es nuestro estándar.' },
  { q: '¿Cómo funciona la instalación en una guardería en funcionamiento?', a: 'Son posibles dos configuraciones. La guardería cierra por completo para la obra: trabajamos durante el cierre de verano (a menudo 3 semanas en agosto) o el de fin de año, un calendario ajustado pero gestionado. La guardería permanece parcialmente abierta: trabajamos sala por sala, respetando estrictamente el protocolo sanitario. Confinamiento de la zona con lonas, ventilación de la zona de instalación, puesta en servicio tras la emisión de gases (24 a 48 horas), reinicio de la sala sobre un suelo nuevo. Coordinación estrecha con la dirección para el calendario, el acceso, la seguridad de los niños. En más de 28 años, CB Sols ha instalado en decenas de centros de primera infancia con protocolos aprobados por las autoridades departamentales.' },
  { q: '¿Qué presupuesto para un suelo de PVC de guardería por metro cuadrado instalado?', a: 'El presupuesto varía según el tipo de producto y la complejidad de la obra. Para un vinilo acústico de primera infancia como Gerflor Taralay Acoustic o Tarkett iQ Granit Acoustic, instalado con recrecido y zócalo sanitario, cuente de 60 a 85 euros sin IVA por metro cuadrado todo incluido. Para un suelo compacto sin ftalatos, Gerflor Mipolam Symbioz o Forbo Sphera, de 75 a 110 euros sin IVA. Para un suelo de seguridad R11 en cambiador y aseos, de 65 a 90 euros sin IVA. Las microguarderías (a menudo de 100 a 150 metros cuadrados en total) entran en presupuestos de 8000 a 15 000 euros sin IVA para todo el suelo. Las guarderías de varias salas alcanzan rápidamente los 20 000 a 40 000 euros sin IVA. Un presupuesto detallado partida por partida tras la visita, sin sorpresas.' },
  { q: '¿Qué marcas recomiendan para una microguardería nueva?', a: 'Para la apertura de una microguardería, recomendamos una combinación coherente. En las salas de vida (bebés, medianos, mayores): Gerflor Taralay Acoustic o Tarkett iQ Granit Acoustic, instalado en láminas anchas termosoldadas, un decorado de madera clara o tono pastel. En la sala de descanso: Forbo Sarlon Habitat o el mismo producto que la sala, para una continuidad visual y acústica. En el cambiador y los aseos: Gerflor Tarasafe Standard o Forbo Surestep, antideslizante R11, zócalo sanitario. En el lactario: un suelo compacto sin ftalatos como Forbo Sphera o Gerflor Mipolam Symbioz, una superficie continua y desinfectable. Esta composición cubre las exigencias de la autoridad y ofrece un confort acústico y visual óptimo.' },
  { q: '¿Es realmente eficaz un antibacteriano integrado en una guardería?', a: 'Los suelos de vinilo modernos para la primera infancia incluyen a menudo un tratamiento antibacteriano en la capa de uso, a base de iones de plata o de moléculas antimicrobianas estables. La eficacia se demuestra mediante ensayos de laboratorio según la norma ISO 22196: una reducción del 99 % de las poblaciones bacterianas comunes (E. coli, S. aureus) en la superficie, junto con la limpieza. No sustituye el protocolo de desinfección, pero reduce la presión bacteriana entre dos limpiezas, lo cual se agradece en el cambiador, el lactario y las zonas de psicomotricidad. Aun así, lo que más importa es la soldadura perfecta, el zócalo sanitario bien elevado y un protocolo de mantenimiento diario riguroso. El suelo hace su parte, el protocolo hace el resto.' },
]

const specs = [
  { title: 'Sin ftalatos problemáticos', desc: 'Los ftalatos CMR (DEHP, DBP, BBP) están prohibidos. Para ir más lejos, gamas completamente sin ftalatos: Forbo Sphera, o plastificantes de atribución biológica: Gerflor Mipolam Symbioz. Un estándar imprescindible para los centros de primera infancia.' },
  { title: 'Etiqueta y declaración A+ de COV', desc: 'Emisiones de compuestos orgánicos volátiles ≤ 100 µg/m³ después de 28 días (el estándar francés A+). Una declaración ambiental verificada por un tercero. Imprescindible para la calidad del aire que respiran los bebés y los niños pequeños en desarrollo motor.' },
  { title: 'Acústica > 15 dB de ganancia', desc: 'Suelos acústicos de 3 a 4 mm con una reducción del ruido de impacto superior a 15 dB, idealmente de 17 a 22 dB. El estándar para las salas de bebés, de descanso y de psicomotricidad. Confort para los niños y el personal.' },
  { title: 'Antideslizante R10 y R11', desc: 'R10 mínimo en zonas de circulación y salas de vida, R11 obligatorio en el cambiador, los aseos y el lactario según DIN 51130. Agregados antideslizantes en la capa de uso para las zonas húmedas.' },
  { title: 'Antibacteriano integrado', desc: 'Un tratamiento antibacteriano a base de iones de plata o de moléculas antimicrobianas en la capa de uso, eficacia probada según ISO 22196. Reducción de la presión bacteriana entre dos limpiezas en el cambiador y el lactario.' },
  { title: 'Termosoldaduras y zócalo sanitario', desc: 'Instalación en láminas de 2 metros con termosoldadura por termofusión entre láminas. Zócalo sanitario elevado 10 cm en cambiador, aseos y lactario. Estanqueidad total, higiene impecable, conformidad con la autoridad.' },
]

const marques = [
  { name: 'Gerflor Taralay Acoustic', detail: 'Acústico heterogéneo, 19 dB de reducción, U3P3, A+, sin ftalatos. La referencia para las salas de bebés y de descanso en las guarderías francesas.' },
  { name: 'Tarkett iQ Granit Acoustic', detail: 'Compacto acústico homogéneo, lijable, vida útil de 28 años. Una reducción de 17 dB, antibacteriano integrado, etiqueta A+.' },
  { name: 'Forbo Sarlon Habitat', detail: 'Acústico heterogéneo, 19 dB, una amplia gama de decorados suaves. Muy utilizado en microguarderías por su buena relación calidad-precio.' },
  { name: 'Gerflor Mipolam Symbioz', detail: 'Compacto homogéneo de atribución biológica, 100 % reciclable, sin ftalatos. La solución premium para guarderías medioambientales.' },
  { name: 'Tarkett Acczent Excellence Acoustic', detail: 'Heterogéneo profesional, 19 dB de reducción, una clasificación U4P3. Decorados de madera realistas apreciados en las salas de medianos y mayores.' },
  { name: 'Polyflor Acoustix', detail: 'La gama acústica británica con seguridad antideslizante R11. Ideal para cambiadores y zonas húmedas en una guardería.' },
  { name: 'Forbo Sphera', detail: 'Compacto homogéneo completamente sin ftalatos, 100 % reciclable, A+. La elección de referencia para microguarderías ecorresponsables.' },
  { name: 'Gerflor Tarasafe Standard', detail: 'Un suelo de seguridad R11 para cambiador y aseos, agregados antideslizantes, antibacteriano integrado. Zócalo sanitario a juego.' },
]

const lieux = [
  { nom: 'Guarderías municipales', detail: 'El ayuntamiento o el centro de acción social como cliente, un concurso público o un contrato de procedimiento adaptado. Una respuesta a licitación con una memoria técnica de primera infancia.' },
  { nom: 'Guarderías asociativas y gestionadas por padres', detail: 'Una junta directiva como decisora, un calendario durante los cierres de verano. Consejo sobre la elección de productos y respeto de las exigencias de la autoridad.' },
  { nom: 'Guarderías de empresa', detail: 'Un promotor o grupo de guarderías (Babilou, Crèche Attitude, People&Baby). Un pliego a menudo reforzado, certificación medioambiental frecuente.' },
  { nom: 'Microguarderías privadas', detail: 'Creadas por un operador independiente, una capacidad de 10 o 12 niños. Un acompañamiento completo desde la elección del producto hasta la conformidad con la autoridad.' },
  { nom: 'Hogares de asistentes maternales (MAM)', detail: 'Centros con un máximo de 4 asistentes maternales, locales de 80 a 150 m². Un pliego de autoridad similar, un presupuesto ajustado.' },
  { nom: 'Centros de relevo de asistentes maternales', detail: 'Espacios de acogida itinerantes para asistentes maternales. Salas de juego con suelos acústicos, una conformidad de autoridad flexible.' },
  { nom: 'Ludotecas de acogida', detail: 'Acogida ocasional de niños de 0-6 años, salas polivalentes con suelos acústicos y cambiadores de seguridad. A menudo integradas en centros sociales.' },
  { nom: 'Jardines de infancia', detail: 'Centros para niños de 2-6 años, una transición de la guardería al colegio. Suelos de vinilo profesionales con decorados lúdicos pero conformes con los edificios de pública concurrencia de tipo R.' },
  { nom: 'Centros multiacogida', detail: 'Guardería y salas de acogida combinadas, grandes capacidades. Gestionados por un gran grupo o una autoridad.' },
  { nom: 'Guarderías en Charente-Maritime', detail: 'La Rochelle, Rochefort, Saintes, Royan, Aytré, Surgères, Marennes. Desplazamiento gratuito, trabajo habitual.' },
  { nom: 'Microguarderías en Deux-Sèvres y Vendée', detail: 'Niort, Fontenay-le-Comte, La Roche-sur-Yon. Un mercado en crecimiento, apoyo a operadores independientes.' },
  { nom: 'Guarderías en la Île de Ré y la Île d\'Oléron', detail: 'Centros de temporada y permanentes. Logística insular dominada, un calendario ajustado a la temporada turística baja.' },
]

export default function SolPvcCrechePageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/sol-pvc-creche#service',
        name: 'Suelo de PVC instalado en guarderías, microguarderías y hogares de asistentes maternales',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'Country', name: 'France' },
          { '@type': 'Place', name: 'Nouvelle-Aquitaine' },
          { '@type': 'Place', name: 'Charente-Maritime' },
          { '@type': 'Place', name: 'Deux-Sèvres' },
          { '@type': 'Place', name: 'Vendée' },
        ],
        serviceType: 'Suelo de PVC instalado en guarderías, microguarderías y hogares de asistentes maternales, conformidad con la autoridad de primera infancia, sin ftalatos, etiqueta A+, acústico',
        description: 'Suministro e instalación de suelo de PVC para centros de primera infancia: guardería, microguardería, hogar de asistentes maternales. Conformidad con la autoridad, sin ftalatos, etiqueta A+, suelo acústico, antibacteriano integrado, zócalo sanitario.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Suelo de PVC para guarderías', item: 'https://cbsols.fr/es/sol-pvc-creche' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="creche" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Suelo de PVC para guarderías</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Suelo de PVC para guarderías,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>suavidad y conformidad.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Guardería, microguardería, hogar de asistentes maternales: suelos de vinilo acústicos, sin ftalatos, con etiqueta A+, zócalo sanitario en cambiador y aseos. Conformidad con la autoridad, antibacteriano integrado, termosoldadura por termofusión. Para los bebés que gatean sobre él cada día. Más de 28 años de experiencia artesanal.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=sol-pvc-creche" variant="primary" size="md">Solicitar un presupuesto</Button>
                <Button href="/es/showroom" variant="outline" size="md">Ver el showroom</Button>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>La responsabilidad de un suelo para la primera infancia</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Cuando coloco el suelo de una guardería, sé que los bebés gatearán sobre él cada día. Sin ftalatos, etiqueta A+, una soldadura perfecta: eso no es negociable, es lo básico.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Para qué parte de la guardería</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cuatro espacios, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>cuatro exigencias.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {cas.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline 1 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Una microguardería en marcha?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Le orientamos hacia los productos conformes adecuados.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Operador independiente o grupo: Valentin Prévoteau acompaña la conformidad con la autoridad desde el momento en que se estudian los locales.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=sol-pvc-creche" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Technical specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Las exigencias de la primera infancia</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Seis exigencias que estructuran <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>nuestro método.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Los suelos de vinilo que colocamos en los centros de primera infancia</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Tres familias, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>un mismo nivel de exigencia.</em>
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
          <p style={{ marginTop: '2.5rem', fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px' }}>
            Para los centros de primera infancia, trabajamos exclusivamente con fabricantes que disponen de gamas específicas: Gerflor (Taralay Acoustic, Mipolam Symbioz, Tarasafe), Tarkett (iQ Granit Acoustic, Acczent Excellence Acoustic), Forbo (Sarlon Habitat, Sphera, Surestep), Polyflor (Acoustix). Cada producto se selecciona por su conformidad con la autoridad, su etiqueta A+ y la ausencia de ftalatos problemáticos.
          </p>
        </div>
      </section>

      {/* Mid quote + CTA */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &ldquo;Un zócalo sanitario bien elevado en un cambiador es lo que permite a la dirección lavar a chorro de agua sin preocupaciones. El detalle que cambia el día a día.&rdquo;
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?from=sol-pvc-creche-inline" variant="primary" size="md">Concertar una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Una visita previa en todos los casos, acompañamiento en la conformidad con la autoridad</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Marcas y referencias de primera infancia</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Ocho referencias, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>todas conformes con la autoridad.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Fabricantes europeos que ofrecen gamas específicas para la primera infancia: acústicas, sin ftalatos, con etiqueta A+, antibacteriano integrado. Cada referencia se prueba en un entorno real antes de recomendarla.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {marques.map((m, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra)', marginBottom: '0.5rem' }}>{m.name}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Places */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Dónde trabajamos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Todos los contextos <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de la primera infancia.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            CB Sols trabaja para guarderías municipales, asociativas y de empresa, microguarderías privadas, hogares de asistentes maternales y todos los centros de acogida de la primera infancia. Conformidad rigurosa con la autoridad, apoyo administrativo cuando hace falta.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {lieux.map((l, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{l.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{l.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline 2 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Una inspección de la autoridad que preparar?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Un expediente de conformidad completo entregado a la dirección.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Actas de clasificación al fuego, declaraciones ambientales, certificados sin ftalatos, fichas A+: todo lo que necesita la autoridad.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=sol-pvc-creche-mid" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro método, de la visita a la entrega de la conformidad</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco etapas, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>del consejo al expediente de conformidad.</em>
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
            Suelo de PVC para la primera infancia, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas detalladas.</em>
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Una pregunta sin responder?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Describa su centro, le respondemos en 48 horas.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Tipo de centro, capacidad, salas, calendario de cierre: con eso basta para empezar una conversación útil.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=sol-pvc-creche-faq" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      <RelatedCards
        sectionTitle="Ver también"
        sectionSubtitle="Nuestro saber hacer abarca otros mundos que pueden interesarle. Tómese su tiempo para explorar, plantee sus preguntas, las responderemos."
        items={[
          { href: '/es/sol-pvc-ecole', title: 'Suelo de PVC para colegios', teaser: 'Acústica calmada, mantenimiento rápido, durabilidad de quince años en un aula que no para.', icon: GraduationCap },
          { href: '/es/sol-pvc-college-lycee', title: 'Suelo de PVC para institutos', teaser: 'Un suelo que soporta mil pasos al día, resiste los zapatos y conserva su aspecto con el tiempo.', icon: BookOpen },
          { href: '/es/sol-pvc-cabinet-medical', title: 'Suelo de PVC para consultas médicas', teaser: 'Un suelo que tranquiliza a sus pacientes desde la sala de espera y facilita su limpieza diaria.', icon: Stethoscope },
          { href: '/es/sol-pvc-pharmacie', title: 'Suelo de PVC para farmacias', teaser: 'Higiene diaria, conformidad sanitaria, instalación nocturna. Veinte años de uso en una farmacia que no cierra nunca.', icon: Pill },
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
            ¿Una guardería que acondicionar? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Hablemos de conformidad.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita previa, consejo de productos conformes, un calendario durante los cierres. Para los bebés que gatean sobre él cada día, no hacemos ninguna concesión.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=sol-pvc-creche" variant="primary" size="md">Solicitar un presupuesto</Button>
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
