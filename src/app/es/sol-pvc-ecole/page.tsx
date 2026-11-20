import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Baby, BookOpen, Building2, Mail, Pill, Stethoscope, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Suelo de PVC para colegios y escuelas infantiles | Instalación escolar',
  description: 'Suelo de PVC instalado en escuelas infantiles y colegios de primaria. Conformidad de pública concurrencia (Bfl-s1, U4P3, R10/R11), instalación durante las vacaciones escolares, licitaciones públicas. CB Sols acompaña a ayuntamientos y colegios privados desde hace más de 28 años.',
  alternates: {
    canonical: 'https://cbsols.fr/es/sol-pvc-ecole',
    languages: { 'fr-FR': 'https://cbsols.fr/sol-pvc-ecole', en: 'https://cbsols.fr/en/sol-pvc-ecole', es: 'https://cbsols.fr/es/sol-pvc-ecole', },
  },
  openGraph: {
    title: 'Suelo de PVC en escuelas infantiles y colegios de primaria',
    description: 'Suelo de PVC para aulas, salas de descanso de infantil, comedores escolares. Normas de pública concurrencia, etiqueta A+, instalación durante las vacaciones escolares.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/sol-pvc-ecole.jpg', width: 1200, height: 630 }],
  },
}

const cas = [
  { title: 'Aulas de infantil y primaria', desc: 'Vinilo en lámina ancha en toda la sala, termosoldado para una estanqueidad continua, una clasificación U4P3, antideslizante R10, un aspecto cálido. Instalación en láminas de 2 metros, un replanteo ajustado a la luz del día para evitar reflejos en los pupitres.' },
  { title: 'Salas de descanso de infantil', desc: 'Vinilo acústico de 3 a 4 mm con una reducción del ruido de impacto, confort bajo el paso del maestro durante la siesta. Colores suaves, formatos lisos o de madera discreta para mantener la calma visual. Termosoldadura para facilitar los incidentes de limpieza.' },
  { title: 'Patio cubierto y circulación', desc: 'Vinilo en lámina resistente al tránsito intenso de los recreos, una clasificación U4P3 al menos, antideslizante R10 incluso con los pies mojados, perfiles de umbral en las uniones con los suelos exteriores. Encolado a toda superficie sobre una solera de hormigón preparada.' },
  { title: 'Comedor escolar y autoservicio', desc: 'Vinilo compacto o heterogéneo, antideslizante R11 en la zona de servicio, resistencia a los carros y al tránsito de los picos. Zócalo sanitario elevado 10 cm para facilitar el lavado a chorro de agua y garantizar la higiene.' },
]

const produits = [
  { name: 'Vinilo heterogéneo en lámina', desc: 'La referencia para los colegios, con una capa de uso de 0,7 a 1 mm, una clasificación U4P3, antideslizante R10, una etiqueta A+, un tratamiento de superficie antimanchas. Instalación en láminas de 2 metros termosoldadas, una vida útil de 15 a 20 años en uso escolar. Principales gamas utilizadas: Gerflor Taralay Premium y Tarkett iQ Granit.' },
  { name: 'Vinilo compacto homogéneo', desc: 'Para las zonas más usadas: una capa de uso en todo el espesor, lijado de renovación posible tras 10 años. Ideal para la circulación principal y los comedores escolares. Gamas utilizadas: Tarkett iQ Optima y Gerflor Mipolam Symbioz.' },
  { name: 'Vinilo de seguridad antideslizante', desc: 'Para aseos, vestuarios, el entorno de las fuentes de agua. Antideslizante R11 o incluso R12, agregados antideslizantes en la capa de uso. Zócalo sanitario a juego. Gamas utilizadas: Gerflor Tarasafe Standard y Forbo Surestep.' },
]

const process = [
  { step: 'Visita a la obra', desc: 'Un estudio de las superficies, el estado del soporte existente, identificación de las restricciones (suelo radiante, cambios de nivel, posibles suelos con amianto), una conversación con el director o los servicios técnicos del ayuntamiento.' },
  { step: 'Presupuesto y calendario', desc: 'Un coste detallado por sala, suministro e instalación, recrecido, zócalos. Un calendario ajustado a las vacaciones escolares: principalmente julio-agosto, vacaciones de otoño para las obras pequeñas. Coordinación con los demás gremios.' },
  { step: 'Licitación pública', desc: 'Para los colegios públicos, la memoria técnica montada, fichas técnicas de producto, declaraciones ambientales, certificaciones medioambientales, un calendario detallado. Seguimiento administrativo hasta la adjudicación.' },
  { step: 'Preparación e instalación', desc: 'Retirada del revestimiento antiguo, recrecido autonivelante, imprimación de agarre, desenrollado de las láminas de 2 metros, encolado, pasada de rodillo, termosoldadura por termofusión entre láminas. Zócalo sanitario en zonas húmedas.' },
  { step: 'Recepción y mantenimiento', desc: 'Una revisión de las soldaduras, una revisión de los colores, una limpieza de puesta en servicio, las fichas de mantenimiento entregadas al personal técnico. Consejos de mantenimiento adaptados al tipo de revestimiento colocado.' },
]

const faq = [
  { q: '¿Cuándo pueden colocar el suelo de PVC en un colegio sin interrumpir las clases?', a: 'La principal ventana sigue siendo las vacaciones de verano, de principios de julio a finales de agosto, para obras de varias aulas. Las vacaciones de otoño permiten encargarse de una o dos salas. Navidad y Semana Santa son más cortas pero utilizables para superficies pequeñas como una sala de descanso o una sala técnica. Siempre fijamos el calendario con el ayuntamiento o el director, incluyendo el tiempo de secado del recrecido, la instalación, la termosoldadura y la puesta en servicio. En más de 28 años de obras escolares, nunca hemos retrasado un inicio de curso. Valentin Prévoteau dirige cada calendario personalmente para garantizar la entrega a tiempo.' },
  { q: '¿Qué normas de pública concurrencia debe cumplir el suelo de PVC de un colegio?', a: 'Cuatro exigencias principales rigen la instalación en un colegio. La reacción al fuego debe ser Bfl-s1 al menos, acreditada por el acta de clasificación europea del fabricante. El uso debe corresponder a U4P3 mínimo para aulas y circulación, U4P4 para las zonas de mucho tránsito, U3P3 aceptable en zonas húmedas específicas. El antideslizante debe alcanzar R10 en seco y R11 en aseos, duchas y cocinas según la norma DIN 51130. Por último, la clasificación de COV debe ser A+ con una declaración ambiental disponible para la calidad del aire interior. Todas las marcas que colocamos cumplen estos criterios, y facilitamos sistemáticamente las actas en la fase de presupuesto.' },
  { q: '¿Qué presupuesto para un suelo de PVC escolar por metro cuadrado instalado?', a: 'El presupuesto varía según la calidad del producto, la complejidad del soporte y la superficie global. Para un vinilo heterogéneo en lámina como Gerflor Taralay Premium o Tarkett iQ Granit, instalado con recrecido y zócalo, cuente de 45 a 70 euros sin IVA por metro cuadrado todo incluido. Para un suelo compacto homogéneo para la circulación principal, de 60 a 95 euros sin IVA. Para un suelo de seguridad antideslizante en zona húmeda, de 55 a 80 euros sin IVA. Las grandes superficies en una misma obra permiten precios decrecientes. Facilitamos un presupuesto detallado partida por partida tras una visita a la obra, sin sorpresas.' },
  { q: '¿Cómo funciona una licitación pública para renovar los suelos de un colegio?', a: 'El ayuntamiento o la autoridad publica el pliego de licitación con las especificaciones, las condiciones, el cuadro de precios y un calendario previsional. Respondemos con una memoria técnica detallada: una presentación de la empresa, referencias similares en colegios comparables, fichas técnicas de producto con actas de clasificación al fuego, declaraciones ambientales, certificaciones medioambientales, un calendario de obra ajustado a las vacaciones escolares, el equipo asignado y los profesionales cualificados. Para los colegios públicos de Charente-Maritime y los departamentos vecinos, respondemos con regularidad a importes de 15 000 a 150 000 euros sin IVA. Un seguimiento administrativo riguroso hasta la adjudicación, y luego la ejecución respetando estrictamente el calendario.' },
  { q: '¿El suelo de PVC es realmente saludable para los niños en clase?', a: 'Los suelos de vinilo modernos que se colocan en los colegios tienen la clasificación A+ para las emisiones de COV, el mejor nivel de la clasificación francesa. Cuentan con una declaración ambiental verificada por un tercero. Los ftalatos problemáticos fueron sustituidos hace tiempo por plastificantes conformes con el reglamento REACH. Algunas gamas van más lejos: Tarkett iQ Granit, Gerflor Mipolam Symbioz y Forbo Sphera son 100 % reciclables, de atribución biológica o completamente sin ftalatos. Para un colegio nuevo o una renovación importante, recomendamos estas gamas premium. La instalación termosoldada por termofusión garantiza además una estanqueidad total entre láminas, sin juntas que acumulen polvo.' },
  { q: '¿Hay que retirar el suelo antiguo antes de colocar el nuevo vinilo?', a: 'En la mayoría de los casos sí, por rigor de instalación. Retirar el revestimiento antiguo permite recuperar un soporte sano, medir la planeidad real, tratar posibles defectos (humedad ascendente, fisuras, amianto). Si el suelo antiguo es un vinilo o linóleo en buen estado y perfectamente adherido, el recubrimiento sigue siendo posible con una imprimación específica, pero se pierden 2 o 3 mm de espesor de zócalo y se apilan dos capas frágiles. Si el revestimiento antiguo contiene amianto (vinilo colocado antes de 1997), un diagnóstico previo y la retirada por una empresa certificada son obligatorios. Acompañamos al ayuntamiento en estos pasos.' },
  { q: '¿Qué vida útil para un suelo de vinilo en una escuela infantil o colegio de primaria?', a: 'Con un producto U4P3 o U4P4 y un mantenimiento regular por el personal técnico, cuente de 15 a 20 años en un aula y en circulación normal. Las zonas de mucho tránsito como los patios y los comedores escolares se acercan más a los 15 años. Los suelos compactos homogéneos como Tarkett iQ Optima o Gerflor Mipolam Symbioz permiten el lijado y la renovación de superficie tras 10 a 12 años, lo que alarga la vida total a 28 años. Un mantenimiento adecuado es decisivo: limpieza diaria con fregadora-secadora y un producto neutro, nueva capa cada 2 años para los suelos con película. Entregamos una ficha de mantenimiento personalizada en cada entrega.' },
]

const specs = [
  { title: 'Reacción al fuego Bfl-s1', desc: 'Una clasificación europea obligatoria para cualquier edificio de pública concurrencia de tipo R (establecimientos de enseñanza). El acta la facilita el fabricante y se adjunta al expediente de recepción. Solo colocamos productos con clasificación Bfl-s1 o superior en un colegio.' },
  { title: 'Clasificación UPEC U4P3 mínimo', desc: 'Para aulas y circulación común. U4P4 recomendado para las zonas de mucho tránsito (patios, comedores). U3P3 tolerado solo en zonas húmedas específicas. Garantiza la resistencia al desgaste, al punzonado y al agua.' },
  { title: 'Antideslizante R10 y R11', desc: 'R10 mínimo en aulas y circulación según DIN 51130. R11 obligatorio en aseos, vestuarios, comedores escolares y zonas expuestas a la humedad. Una seguridad imprescindible para los niños.' },
  { title: 'Clasificación A+ de COV', desc: 'El mejor nivel de la clasificación francesa de emisiones de compuestos orgánicos volátiles. Una declaración ambiental verificada por un tercero. Imprescindible para la calidad del aire interior en un colegio que acoge niños.' },
  { title: 'Instalación en lámina termosoldada', desc: 'Láminas de 2 metros de ancho desenrolladas sobre la sala, termosoldadura por termofusión entre láminas con un cordón de PVC. Estanqueidad total, ninguna junta que acumule polvo, higiene impecable. La firma de una instalación profesional.' },
  { title: 'Calendario de vacaciones escolares', desc: 'Obras ajustadas principalmente a julio-agosto, vacaciones de otoño para las superficies pequeñas. Coordinación con los servicios técnicos del ayuntamiento, una garantía de puesta en servicio antes del inicio de curso. Nunca hemos fallado un inicio de curso en más de 28 años.' },
]

const marques = [
  { name: 'Gerflor Taralay Premium', detail: 'La referencia para los colegios franceses desde hace 30 años. Heterogéneo U4P3, R10, Bfl-s1, A+. Excelente durabilidad, una amplia gama de colores de madera y lisos.' },
  { name: 'Tarkett iQ Granit', detail: 'Vinilo compacto homogéneo, lijable, una vida útil de 28 años. U4P3, Bfl-s1, A+. Muy utilizado en circulación y comedores escolares por su robustez.' },
  { name: 'Forbo Surestep', detail: 'Un suelo de seguridad antideslizante R11, agregados antideslizantes en la capa de uso. Ideal para aseos, vestuarios, entornos de fuentes.' },
  { name: 'Tarkett Acczent Excellence', detail: 'Acústico heterogéneo 70 dB o compacto. U4P3, Bfl-s1, A+. Decorados de madera realistas apreciados en las escuelas infantiles por su efecto tranquilizador.' },
  { name: 'Gerflor Mipolam Symbioz', detail: 'Compacto homogéneo de atribución biológica, 100 % reciclable. Un fuerte enfoque medioambiental, etiqueta A+. La solución premium para colegios medioambientales.' },
  { name: 'Polyflor Polysafe', detail: 'La gama de seguridad británica R11/R12, muy utilizada en comedores escolares y zonas húmedas. Una garantía antideslizante de 15 años.' },
  { name: 'Forbo Sphera', detail: 'Compacto homogéneo sin ftalatos, 100 % reciclable, A+. La referencia ecorresponsable para colegios certificados.' },
  { name: 'Tarkett iQ Optima', detail: 'Compacto homogéneo premium, una garantía comercial de 30 años en uso común. Lijado de renovación posible varias veces.' },
]

const lieux = [
  { nom: 'Escuelas públicas municipales', detail: 'El ayuntamiento como cliente, una licitación pública, una respuesta a licitación, una memoria técnica y un calendario de vacaciones escolares.' },
  { nom: 'Colegios privados concertados', detail: 'Una decisión directa del director o del organismo de gestión. Un presupuesto privado, un calendario ajustado al calendario escolar del centro.' },
  { nom: 'Agrupaciones escolares intermunicipales', detail: 'Agrupaciones repartidas en varios municipios. Coordinación con un organismo intermunicipal o una comunidad de municipios.' },
  { nom: 'Colegios bilingües e internacionales', detail: 'A veces calendarios escolares desfasados. Un pliego reforzado en aspecto y normas medioambientales.' },
  { nom: 'Escuelas Montessori y alternativas', detail: 'Una exigencia de materiales naturales y calidad del aire. Orientación hacia Forbo Sphera, Gerflor Mipolam Symbioz o linóleo natural.' },
  { nom: 'Internados de primaria', detail: 'Salas de descanso con vinilo acústico, salas de estudio, aseos y duchas. Obras principalmente en julio-agosto.' },
  { nom: 'Comedores escolares y autoservicio', detail: 'Suelos compactos o de seguridad R11, zócalo sanitario, resistencia a los carros, higiene APPCC. A menudo una obra prioritaria de verano.' },
  { nom: 'Centros de ocio extraescolar', detail: 'Salas de actividades compartidas con el colegio, a veces colocadas en continuidad con las aulas para un acabado homogéneo.' },
  { nom: 'Acogida extraescolar y guarderías', detail: 'Espacios usados por la mañana y por la tarde, suelos acústicos recomendados para el confort del personal y los niños.' },
  { nom: 'Colegios en Charente-Maritime', detail: 'La Rochelle, Rochefort, Saintes, Royan, Aytré, Surgères, Marennes, Aigrefeuille. Desplazamiento gratuito, intervención rápida.' },
  { nom: 'Colegios en Deux-Sèvres y Vendée', detail: 'Niort, Fontenay-le-Comte, La Roche-sur-Yon. Licitaciones públicas habituales, un equipo listo para grandes obras de verano.' },
  { nom: 'Colegios en la Île de Ré y la Île d\'Oléron', detail: 'Logística insular dominada, entregas coordinadas con los puentes y las mareas para las obras de verano.' },
]

export default function SolPvcEcolePageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/sol-pvc-ecole#service',
        name: 'Suelo de PVC instalado en escuelas infantiles y colegios de primaria',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'Country', name: 'France' },
          { '@type': 'Place', name: 'Charente-Maritime' },
          { '@type': 'Place', name: 'Deux-Sèvres' },
          { '@type': 'Place', name: 'Vendée' },
        ],
        serviceType: 'Suelo de PVC instalado en escuelas infantiles y colegios de primaria, conformidad de pública concurrencia, licitaciones públicas',
        description: 'Suministro e instalación de suelo de PVC en lámina ancha en escuelas infantiles y colegios de primaria, conformidad de pública concurrencia de tipo R Bfl-s1 U4P3 R10/R11, etiqueta A+, instalación durante las vacaciones escolares.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Suelo de PVC para colegios', item: 'https://cbsols.fr/es/sol-pvc-ecole' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="ecole" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Suelo de PVC para colegios</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Suelo de PVC para colegios,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>el suelo que dura una generación.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Aulas de infantil y primaria, salas de descanso, patios, comedores escolares: vinilo en lámina ancha termosoldado, conformidad de pública concurrencia de tipo R Bfl-s1, una clasificación U4P3, antideslizante R10/R11, etiqueta A+. Instalación durante las vacaciones escolares, ayuntamientos y colegios privados acompañados. Más de 28 años de experiencia artesanal.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=sol-pvc-ecole" variant="primary" size="md">Solicitar un presupuesto</Button>
                <Button href="/es/showroom" variant="outline" size="md">Ver el showroom</Button>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>La regla de oro de los colegios</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Un colegio se renueva en julio-agosto, y punto. En más de 28 años, CB Sols nunca ha fallado un inicio de curso. Es la primera promesa que hacemos al director o al ayuntamiento, y no es negociable.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Para qué parte del colegio</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cuatro espacios, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>cuatro soluciones.</em>
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Una obra que planificar?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Planifiquemos juntos las vacaciones de verano.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Ayuntamiento o dirección del colegio: Valentin Prévoteau se desplaza para la visita previa y la valoración detallada.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=sol-pvc-ecole" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Technical specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Las exigencias de pública concurrencia en los colegios</div>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Los suelos de vinilo que colocamos en los colegios</div>
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
            Trabajamos con los grandes fabricantes de suelo de PVC para las administraciones: Gerflor, Tarkett, Forbo, Polyflor. Cada referencia se selecciona por su adecuación al uso escolar, sus clasificaciones de pública concurrencia y la disponibilidad de su declaración ambiental. Para los colegios con certificación medioambiental o un fuerte enfoque medioambiental, ofrecemos gamas de atribución biológica o 100 % reciclables.
          </p>
        </div>
      </section>

      {/* Mid quote + CTA */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &ldquo;Una termosoldadura limpia, un recrecido que no se ve, un zócalo sanitario bien elevado: son los detalles que mantienen el suelo de un colegio durante veinte años sin problemas.&rdquo;
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?from=sol-pvc-ecole-inline" variant="primary" size="md">Concertar una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Una visita previa en todos los casos, desplazamiento gratuito en Charente-Maritime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Marcas y referencias de pública concurrencia</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Ocho referencias, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>todas conformes de tipo R.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Fabricantes europeos especializados en revestimientos de suelo para las administraciones. Cada producto mostrado cuenta con las actas de clasificación al fuego Bfl-s1, la clasificación UPEC adecuada, una declaración ambiental verificada y la etiqueta A+ para las emisiones de COV.
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
            Todos los contextos de centro <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de la enseñanza primaria.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            CB Sols trabaja para escuelas públicas por licitación, colegios privados por acuerdo directo, agrupaciones escolares, internados y los centros de acogida extraescolar asociados. Una visita previa en todos los casos, una memoria técnica cuidada, un calendario de vacaciones escolares.
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Una licitación pública que preparar?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Memoria técnica, actas, declaraciones: lo tenemos todo a mano.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Un expediente de respuesta completo, referencias de colegios similares, un calendario de vacaciones escolares detallado.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=sol-pvc-ecole-mid" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro método, de la visita al inicio de curso</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco etapas, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>del presupuesto a la entrega.</em>
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
            El vinilo en los colegios, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas detalladas.</em>
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
            Describa su colegio, le respondemos en 48 horas.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Tipo de centro, superficies, restricciones de calendario: con eso basta para empezar una conversación útil.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=sol-pvc-ecole-faq" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      <RelatedCards
        sectionTitle="Ver también"
        sectionSubtitle="Nuestro saber hacer abarca otros mundos que pueden interesarle. Tómese su tiempo para explorar, plantee sus preguntas, las responderemos."
        items={[
          { href: '/es/sol-pvc-creche', title: 'Suelo de PVC para guarderías', teaser: 'Sin ftalatos, antibacteriano, certificado para la primera infancia. Tranquilidad para padres y personal.', icon: Baby },
          { href: '/es/sol-pvc-college-lycee', title: 'Suelo de PVC para institutos', teaser: 'Un suelo que soporta mil pasos al día, resiste los zapatos y conserva su aspecto con el tiempo.', icon: BookOpen },
          { href: '/es/sol-pvc-cabinet-medical', title: 'Suelo de PVC para consultas médicas', teaser: 'Un suelo que tranquiliza a sus pacientes desde la sala de espera y facilita su limpieza diaria.', icon: Stethoscope },
          { href: '/es/sol-pvc-pharmacie', title: 'Suelo de PVC para farmacias', teaser: 'Higiene diaria, conformidad sanitaria, instalación nocturna. Veinte años de uso en una farmacia que no cierra nunca.', icon: Pill },
          { href: '/es/architectes', title: 'Para arquitectos', teaser: 'Documentación de materiales, muestras anotadas, presupuestos detallados. Nuestro papel es servir su visión.', icon: Building2 },
          { href: '/es/showroom', title: 'Showroom de Villedoux', teaser: 'Venga a ver y tocar los materiales. Con cita previa, en Villedoux cerca de La Rochelle.', icon: Store },
          { href: '/es/contact', title: 'Contáctenos', teaser: 'Una pregunta, un proyecto, un presupuesto en 48 horas. El titular le responde directamente.', icon: Mail },
        ]}
      />

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            ¿Un colegio que renovar? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Hablemos de calendario.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita previa a la obra, un expediente completo de pública concurrencia, un calendario ajustado a las vacaciones escolares. El inicio de curso se prepara antes de que termine el anterior.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=sol-pvc-ecole" variant="primary" size="md">Solicitar un presupuesto</Button>
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
