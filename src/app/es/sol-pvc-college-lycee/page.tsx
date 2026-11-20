import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Baby, Building2, GraduationCap, Mail, Pill, Stethoscope, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Suelo de PVC para institutos | Secundaria y bachillerato',
  description: 'Suelo de PVC instalado en institutos de secundaria y bachillerato: aulas, laboratorios de ciencias, bibliotecas, talleres. Conformidad de pública concurrencia (tipo R), láminas anchas termosoldadas, licitaciones de educación pública. CB Sols, más de 28 años de experiencia.',
  alternates: {
    canonical: 'https://cbsols.fr/es/sol-pvc-college-lycee',
    languages: { 'fr-FR': 'https://cbsols.fr/sol-pvc-college-lycee', en: 'https://cbsols.fr/en/sol-pvc-college-lycee', es: 'https://cbsols.fr/es/sol-pvc-college-lycee', },
  },
  openGraph: {
    title: 'Suelo de PVC en institutos de secundaria y bachillerato',
    description: 'Suelo de PVC en láminas anchas termosoldadas en institutos de secundaria y bachillerato: aulas, laboratorios, bibliotecas, talleres técnicos. Licitaciones de educación pública.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/sol-pvc-college-lycee.jpg', width: 1200, height: 630 }],
  },
}

const cas = [
  { title: 'Aulas generales', desc: 'Vinilo en lámina ancha de 2 metros, termosoldado entre láminas, una clasificación U4P3 y antideslizante R10. Un replanteo ajustado a la orientación de los pupitres. Instalación durante las vacaciones escolares, en toda una planta si hace falta, de 30 a 200 metros cuadrados por sala.' },
  { title: 'Laboratorios de ciencias', desc: 'Vinilo compacto o heterogéneo con resistencia química reforzada: ácidos débiles, bases, disolventes comunes usados en las prácticas de física-química y biología. Zócalo sanitario elevado, termosoldadura completa, U4P3 mínimo. Recomendaciones: Tarkett iQ Granit o Gerflor Mipolam Esprit.' },
  { title: 'Bibliotecas y salas de estudio', desc: 'Vinilo acústico reforzado para reducir el ruido ambiental y favorecer la concentración. Un suelo de madera o un tono liso discreto. Instalación en lámina sobre una gran superficie abierta, umbrales integrados con los pasillos y las escaleras existentes.' },
  { title: 'Talleres técnicos y formación profesional', desc: 'Vinilo compacto U4P4 para talleres de madera, metalistería y electricidad. Resistencia al punzonado de los carros, los bancos pesados, las herramientas caídas. Antideslizante R10 en seco, zonas de corte con suelo de seguridad R11 donde hay salpicaduras.' },
]

const produits = [
  { name: 'Vinilo heterogéneo en lámina ancha', desc: 'Instalación en láminas de 2 metros termosoldadas, la técnica distintiva de los edificios escolares de calidad. Estanqueidad total entre láminas, ninguna junta que acumule polvo, una vida útil de 15 a 20 años. Principales referencias: Tarkett iQ Granit y Gerflor Taralay Impression Compact.' },
  { name: 'Vinilo compacto homogéneo premium', desc: 'Para las zonas más usadas: talleres de formación profesional, circulación principal, vestíbulos de entrada. Una capa de uso en todo el espesor, lijado de renovación posible, una garantía comercial de hasta 30 años. Principales referencias: Gerflor Mipolam Esprit y Forbo Sphera Element.' },
  { name: 'Vinilo de seguridad antideslizante', desc: 'Para los aseos de los institutos, los vestuarios del gimnasio, las zonas húmedas de laboratorio. Antideslizante R11 o R12, agregados antideslizantes integrados. Principales referencias: Altro XpressLay (instalación sin cola para una renovación rápida) y Polyflor Polysafe Quattro.' },
]

const process = [
  { step: 'Visita y estudio', desc: 'Una medición precisa in situ, planta por planta, con identificación de las restricciones (suelos con amianto en los edificios de los años 70-80, suelo radiante, cambios de nivel). Una conversación con el responsable o los servicios técnicos de la región o del departamento.' },
  { step: 'Memoria técnica', desc: 'Para las licitaciones de educación pública, el expediente completo montado: referencias, fichas de producto, actas de clasificación al fuego, declaraciones ambientales, certificaciones, calendario, equipo. Una respuesta cuidada es decisiva en las puntuaciones técnicas.' },
  { step: 'Coordinación de obra', desc: 'El calendario ajustado a las vacaciones escolares: verano para las grandes obras (200 a 2000 m²), vacaciones de otoño para las superficies pequeñas. Coordinación con las demás empresas de la obra global si se trata de una renovación importante.' },
  { step: 'Instalación en lámina ancha', desc: 'Retirada del revestimiento antiguo, recrecido autonivelante, imprimación, desenrollado de las láminas de 2 metros, encolado a toda superficie, pasada cuidadosa de rodillo, termosoldadura por termofusión entre láminas. Zócalo sanitario en zonas húmedas.' },
  { step: 'Recepción', desc: 'Una revisión de cada soldadura con un punzón, una revisión de las uniones de zócalos y umbrales, una limpieza de puesta en servicio, las actas y declaraciones ambientales entregadas a los responsables, instrucciones de mantenimiento al personal técnico.' },
]

const faq = [
  { q: '¿Qué exigencias de pública concurrencia se aplican al suelo de PVC en un instituto de secundaria o bachillerato?', a: 'Los institutos de secundaria y bachillerato se clasifican como tipo R (establecimientos de enseñanza) en la clasificación francesa de pública concurrencia. Las principales exigencias son: una clasificación al fuego Bfl-s1 como mínimo (un acta europea es obligatoria), una clasificación UPEC de U4P3 mínimo para aulas y circulación, U4P4 recomendado para las zonas de mucho tránsito como vestíbulos y talleres, antideslizante R10 en seco y R11 en aseos, vestuarios y zonas húmedas según DIN 51130, una etiqueta A+ para las emisiones de COV con una declaración ambiental verificada. Para los laboratorios se exige además resistencia química a ácidos débiles, bases y disolventes comunes. Facilitamos todas las actas y declaraciones en la fase de presupuesto y montamos el expediente reglamentario completo para la recepción.' },
  { q: '¿Por qué colocar vinilo en lámina ancha de 2 metros en lugar de baldosas?', a: 'Colocar láminas anchas de 2 metros con termosoldadura por termofusión es la firma de los edificios escolares de calidad. Tres razones. Estanqueidad: la termosoldadura crea una continuidad perfecta entre láminas, sin juntas. El polvo, el agua y los líquidos nunca pasan bajo el revestimiento. Higiene: ninguna junta vertical de baldosa que se obstruya con los años, una limpieza sencilla con fregadora-secadora. Durabilidad: ninguna esquina de baldosa que se levante tras unos años de tránsito intenso. Un suelo de vinilo en lámina bien colocado dura de 15 a 20 años sin obras importantes. El sobrecoste inicial se absorbe ampliamente a lo largo de la vida útil. Es la técnica que aplicamos sistemáticamente en institutos y centros de secundaria.' },
  { q: '¿Cuánto se tarda en responder a una licitación de educación pública?', a: 'Al recibir el pliego de licitación, analizamos las especificaciones y el cuadro de precios en 48 horas para confirmar nuestro interés y nuestra capacidad de responder a tiempo. Podemos solicitar una visita a la obra si se ofrece, lo que permite presupuestar con precisión. La memoria técnica requiere de 5 a 10 días de redacción cuidadosa para un expediente completo: empresa, equipo, referencias similares en institutos y centros de secundaria, fichas técnicas de los productos propuestos, actas de clasificación al fuego, declaraciones ambientales, certificaciones, un calendario detallado durante las vacaciones escolares, medidas de calidad y seguridad. Para las grandes licitaciones regionales, recurrimos a nuestro catálogo de referencias construido a lo largo de más de 28 años de instalación en las administraciones educativas.' },
  { q: 'Una obra reciente en un instituto: ¿cómo transcurre de verdad?', a: 'En una obra de 200 metros cuadrados en un instituto, instalada en lámina ancha durante las vacaciones de otoño, la secuencia típica es la siguiente. Lunes: llega el equipo, se retira el revestimiento antiguo, diagnóstico del soporte. Martes: recrecido autonivelante, imprimación de agarre, secado. Miércoles: instalación de la lámina a toda superficie, encolado, pasada de rodillo. Jueves: termosoldadura entre láminas, zócalos, acabados de umbral. Viernes: limpieza de puesta en servicio, revisiones, recepción con el responsable. Unas vacaciones de otoño de unos 10 días, y el equipo siempre termina antes de tiempo para absorber los imprevistos. Este calendario ajustado es nuestro estándar. En más de 28 años, nunca hemos retrasado el inicio de curso.' },
  { q: '¿Los suelos de vinilo modernos plantean un problema de salud en un instituto?', a: 'Los suelos de vinilo profesionales que se colocan hoy en los institutos tienen la clasificación A+ para las emisiones de compuestos orgánicos volátiles, el mejor nivel de la clasificación francesa. Las antiguas generaciones que contenían ftalatos problemáticos (DEHP, DBP, BBP) fueron sustituidas hace tiempo por plastificantes conformes con el reglamento REACH. Algunas gamas van considerablemente más lejos: Gerflor Mipolam Symbioz es de atribución biológica, Forbo Sphera está completamente libre de ftalatos, Tarkett iQ Granit es 100 % reciclable en circuito cerrado. Para los institutos que buscan una certificación medioambiental o de edificio ejemplar, estas gamas premium son las referencias. Orientamos sistemáticamente hacia estos productos para las licitaciones que indican una exigencia medioambiental.' },
  { q: '¿Cómo tratan un suelo con amianto hallado bajo el revestimiento antiguo?', a: 'Muchos institutos de secundaria y bachillerato construidos entre 1950 y 1997 contienen baldosas o adhesivos de vinilo con amianto. Un diagnóstico de amianto antes de la obra es obligatorio y debe facilitarlo el cliente antes de cualquier intervención. Si se confirma la presencia, hay dos opciones. La retirada por una empresa certificada en subsección 3 o 4, con confinamiento y eliminación por un circuito homologado, seguida de una nueva instalación sobre el soporte tratado. El recubrimiento, permitido en condiciones estrictas (el suelo antiguo perfectamente adherido, una ficha de prevención del amianto, un seguimiento de trazabilidad), con una imprimación específica y una nueva instalación encima. Coordinamos con las empresas certificadas en amianto de nuestra red e integramos estas fases en el calendario global.' },
  { q: '¿Qué vida útil esperar de un suelo de vinilo en un instituto?', a: 'Con un producto U4P3 o U4P4 instalado en láminas termosoldadas, cuente de 15 a 20 años en un aula y en circulación. Las zonas de mucho tránsito como los vestíbulos de entrada y los talleres de formación profesional rondan los 12 a 15 años. Los suelos compactos homogéneos como Gerflor Mipolam Esprit o Polyflor XL permiten una renovación por lijado de superficie tras 10 a 12 años, lo que alarga la vida total a 28 o incluso 30 años. El mantenimiento regular por el personal técnico es decisivo: limpieza diaria con fregadora-secadora y un producto neutro, nueva capa cada 2 o 3 años para los suelos con película. Entregamos una ficha de mantenimiento personalizada y acompañamos al personal técnico durante los primeros meses.' },
]

const specs = [
  { title: 'Clasificación al fuego Bfl-s1 obligatoria', desc: 'La norma europea EN 13501-1, un acta de clasificación facilitada por el fabricante. Obligatoria para cualquier edificio de pública concurrencia de tipo R, adjunta al expediente de recepción. Ningún producto colocado en un instituto baja de esta clasificación.' },
  { title: 'Clasificación UPEC U4P3 a U4P4', desc: 'U4P3 para aulas y circulación, U4P4 para vestíbulos, comedor escolar, talleres de formación profesional. Garantiza la resistencia al desgaste, al punzonado y al tránsito sostenido durante la vida del edificio.' },
  { title: 'Antideslizante R10 y R11', desc: 'R10 mínimo en zonas secas según DIN 51130, R11 en aseos, vestuarios, duchas, laboratorios de química. Para talleres húmedos o con salpicaduras, un suelo de seguridad R11/R12 específico.' },
  { title: 'Resistencia química de laboratorio', desc: 'Para las prácticas de física-química y biología, una exigencia de resistencia a ácidos débiles, bases y disolventes comunes. Gamas específicas como Tarkett iQ Granit o Gerflor Mipolam Esprit con una capa de uso densa y estanca.' },
  { title: 'Instalación en lámina ancha', desc: 'Láminas de 2 metros de ancho, termosoldadura por termofusión entre láminas. Estanqueidad total, higiene impecable, durabilidad máxima. La técnica distintiva de una instalación de calidad en institutos y centros de secundaria.' },
  { title: 'Calendario de vacaciones escolares', desc: 'Verano para las grandes licitaciones (500 a 2000 m²), vacaciones de otoño para las superficies intermedias, Semana Santa para el resto. Coordinación obligatoria con el responsable y los demás gremios.' },
]

const marques = [
  { name: 'Tarkett iQ Granit', detail: 'Compacto homogéneo premium, una garantía comercial de hasta 30 años, lijable. La referencia para laboratorios de ciencias y circulación principal en institutos.' },
  { name: 'Gerflor Taralay Impression Compact', detail: 'Heterogéneo U4P3, R10, una amplia gama de decorados de madera y lisos. Excelente durabilidad, una elección recurrente en licitaciones públicas de institutos y centros de secundaria.' },
  { name: 'Forbo Eternal', detail: 'Heterogéneo profesional U4P3, una clasificación A+, una declaración ambiental verificada. Especialmente adecuado para aulas y vestíbulos de secundaria.' },
  { name: 'Polyflor Polysafe Quattro', detail: 'Un suelo de seguridad R12 de gama alta, una garantía antideslizante de 15 años. Para vestuarios de gimnasio, aseos, bordes de zonas húmedas.' },
  { name: 'Tarkett Acczent Excellence 70', detail: 'Acústico heterogéneo con una reducción del ruido de impacto de 19 dB. Ideal para bibliotecas, salas de estudio, internados de instituto.' },
  { name: 'Gerflor Mipolam Esprit', detail: 'Compacto homogéneo con resistencia química reforzada, imprescindible en laboratorios de química y biología. A+, una declaración ambiental verificada.' },
  { name: 'Forbo Sphera Element', detail: 'Compacto homogéneo sin ftalatos, 100 % reciclable, una etiqueta A+. La referencia ecorresponsable para institutos medioambientales o demostradores.' },
  { name: 'Altro XpressLay', detail: 'Un suelo de seguridad sin cola, ideal para una renovación rápida en un periodo de vacaciones corto. Antideslizante R11, una clasificación Bfl-s1, puesta en servicio inmediata.' },
]

const lieux = [
  { nom: 'Institutos de secundaria públicos en Charente-Maritime', detail: 'El consejo departamental como cliente, licitaciones públicas habituales, trabajo en todo el departamento.' },
  { nom: 'Institutos de bachillerato públicos en Nouvelle-Aquitaine', detail: 'El consejo regional como cliente, contratos plurianuales para el mantenimiento y la renovación de suelos en toda la administración educativa.' },
  { nom: 'Institutos profesionales y técnicos', detail: 'Talleres de producción, salas de prácticas, naves técnicas. Exigencias reforzadas en resistencia y antideslizante.' },
  { nom: 'Institutos agrícolas', detail: 'Internados, aulas, talleres, restauración. Licitaciones gestionadas por el ministerio de agricultura o la región.' },
  { nom: 'Institutos privados concertados', detail: 'El organismo de gestión como cliente, una decisión más rápida que en una licitación pública, un calendario ajustado al calendario del centro.' },
  { nom: 'Internados de instituto', detail: 'Habitaciones, aseos, circulación, salas de estudio nocturno. Suelos acústicos recomendados para el confort de descanso.' },
  { nom: 'Bibliotecas y centros de documentación', detail: 'Centros de documentación, suelos acústicos para reducir el ruido y favorecer la concentración. Superficies abiertas de 100 a 300 m².' },
  { nom: 'Comedores de instituto', detail: 'Salas de más de 300 plazas, suelos compactos o de seguridad R11, zócalo sanitario, resistencia APPCC.' },
  { nom: 'Institutos de bachillerato en Charente-Maritime', detail: 'La Rochelle, Rochefort, Saintes, Saint-Jean-d\'Angély, Royan. Desplazamiento gratuito, trabajo habitual.' },
  { nom: 'Institutos de secundaria en Deux-Sèvres y Vendée', detail: 'Niort, Parthenay, Fontenay-le-Comte, La Roche-sur-Yon. Licitaciones del consejo departamental.' },
  { nom: 'Centros con certificación medioambiental', detail: 'Edificios demostradores o renovaciones ejemplares: Gerflor Mipolam Symbioz, Forbo Sphera, Tarkett iQ Optima.' },
  { nom: 'Laboratorios y bibliotecas universitarias', detail: 'Universidades de La Rochelle, Poitiers, Limoges. Particularidades cercanas a las de un instituto, licitaciones gestionadas por los servicios de patrimonio.' },
]

export default function SolPvcCollegeLyceePageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/sol-pvc-college-lycee#service',
        name: 'Suelo de PVC instalado en institutos de secundaria y bachillerato',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'Country', name: 'France' },
          { '@type': 'Place', name: 'Nouvelle-Aquitaine' },
          { '@type': 'Place', name: 'Charente-Maritime' },
          { '@type': 'Place', name: 'Deux-Sèvres' },
          { '@type': 'Place', name: 'Vendée' },
        ],
        serviceType: 'Suelo de PVC instalado en institutos de secundaria y bachillerato, láminas anchas termosoldadas, conformidad de pública concurrencia, licitaciones de educación pública',
        description: 'Suministro e instalación de suelo de PVC en láminas anchas termosoldadas en institutos de secundaria y bachillerato. Aulas, laboratorios, bibliotecas, talleres técnicos, internados. Conformidad completa de pública concurrencia de tipo R.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Suelo de PVC para institutos', item: 'https://cbsols.fr/es/sol-pvc-college-lycee' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="college-lycee" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Suelo de PVC para institutos</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Suelo de PVC en institutos de secundaria y bachillerato,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>robustez bajo el tránsito.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Aulas, laboratorios de ciencias, bibliotecas, talleres técnicos, internados: vinilo en lámina ancha de 2 metros, termosoldado por termofusión. Conformidad completa de pública concurrencia de tipo R, licitaciones de educación pública, un calendario de vacaciones escolares. Más de 28 años de experiencia artesanal.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=sol-pvc-college-lycee" variant="primary" size="md">Solicitar un presupuesto</Button>
                <Button href="/es/showroom" variant="outline" size="md">Ver el showroom</Button>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>La firma de una verdadera instalación escolar</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Un instituto significa instalar en láminas termosoldadas de 2 metros, y punto. Ninguna baldosa que se levante tras cinco años. Esa es la base de un suelo que dura 20 años.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Para qué parte del centro</div>
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Una licitación pública en curso?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Respondemos con una memoria técnica cuidada.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Región o departamento: Valentin Prévoteau dirige la respuesta personalmente, con las actas y declaraciones ambientales a mano.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=sol-pvc-college-lycee" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Technical specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Las exigencias de pública concurrencia de tipo R</div>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Los suelos de vinilo que colocamos en secundaria</div>
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
            Para las licitaciones regionales y departamentales, trabajamos exclusivamente con fabricantes que disponen de una declaración ambiental verificada, actas europeas de clasificación al fuego y redes logísticas capaces de abastecer grandes obras de verano. Un ejemplo reciente: un instituto de 200 metros cuadrados instalado en lámina durante las vacaciones de otoño, entregado dos días antes de plazo.
          </p>
        </div>
      </section>

      {/* Mid quote + CTA */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &ldquo;Cuando devolvemos un instituto el día antes del inicio de curso, se debe poder pasar un dedo por la soldadura y no notar nada. Ese es el acabado que firmamos.&rdquo;
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?from=sol-pvc-college-lycee-inline" variant="primary" size="md">Concertar una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Una visita previa a la obra, estudio del pliego de licitación y un calendario de vacaciones escolares</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Marcas y referencias de tipo R</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Ocho referencias, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>del profesional robusto a la seguridad.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Los grandes fabricantes europeos de revestimientos de suelo para las administraciones educativas. Cada producto cuenta con las actas de clasificación al fuego Bfl-s1, la clasificación UPEC adecuada, declaraciones ambientales verificadas y la etiqueta A+ de COV.
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
            Todos los contextos <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de la enseñanza secundaria.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            CB Sols responde a las licitaciones públicas de los consejos departamentales y regionales, trabaja en institutos profesionales y agrícolas, y acompaña a los centros privados concertados. Experiencia completa en edificios educativos de tipo R.
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un laboratorio o taller que acondicionar?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Resistencia química y antideslizante R11, lo conocemos bien.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Tarkett iQ Granit, Gerflor Mipolam Esprit, suelos de seguridad Polyflor: orientamos según la necesidad precisa de la sala.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=sol-pvc-college-lycee-mid" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro método, de la licitación a la recepción</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco etapas, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de la respuesta al inicio de curso.</em>
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
            El vinilo en secundaria y bachillerato, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas detalladas.</em>
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
            Tipo de centro, superficies, calendario, posibles restricciones de amianto: con eso basta para empezar una conversación útil.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=sol-pvc-college-lycee-faq" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      <RelatedCards
        sectionTitle="Ver también"
        sectionSubtitle="Nuestro saber hacer abarca otros mundos que pueden interesarle. Tómese su tiempo para explorar, plantee sus preguntas, las responderemos."
        items={[
          { href: '/es/sol-pvc-ecole', title: 'Suelo de PVC para colegios', teaser: 'Acústica calmada, mantenimiento rápido, durabilidad de quince años en un aula que no para.', icon: GraduationCap },
          { href: '/es/sol-pvc-creche', title: 'Suelo de PVC para guarderías', teaser: 'Sin ftalatos, antibacteriano, certificado para la primera infancia. Tranquilidad para padres y personal.', icon: Baby },
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
            ¿Un instituto que renovar? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Hablemos de licitaciones.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Respuesta a la licitación, memoria técnica, calendario de vacaciones escolares: acompañamos a las administraciones durante todo el proceso de licitación de educación pública.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=sol-pvc-college-lycee" variant="primary" size="md">Solicitar un presupuesto</Button>
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
