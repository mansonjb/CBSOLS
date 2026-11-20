import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Baby, Building2, GraduationCap, Mail, Pill, Stethoscope, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Suelo de PVC para laboratorios farmacéuticos | Laboratorio, farmacia, cosmética',
  description: 'Suelo de PVC instalado para laboratorios farmacéuticos, laboratorios de análisis, farmacias y laboratorios de cosmética. Acabado continuo sin juntas, rigor de obra, validado por auditorías de calidad. CB Sols, más de 28 años de saber hacer.',
  alternates: {
    canonical: 'https://cbsols.fr/es/sol-pvc-laboratoire-pharmaceutique',
    languages: { 'fr-FR': 'https://cbsols.fr/sol-pvc-laboratoire-pharmaceutique', en: 'https://cbsols.fr/en/sol-pvc-laboratoire-pharmaceutique', es: 'https://cbsols.fr/es/sol-pvc-laboratoire-pharmaceutique', },
  },
  keywords: ['suelo de PVC para laboratorio', 'suelo para farmacia', 'suelo para laboratorio de cosmética', 'suelo para laboratorio de análisis', 'suelo farmacéutico'],
  openGraph: {
    title: 'Suelo de PVC para laboratorios, rigor y acabado',
    description: 'Suelo de PVC instalado para laboratorios farmacéuticos, de cosmética, de análisis y farmacias. Acabado continuo, zócalo sanitario, una obra rigurosa. CB Sols.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/sol-pvc-laboratoire-pharmaceutique.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Laboratorios de análisis', desc: 'Usted dirige un laboratorio de análisis médicos o agroalimentarios. Colocamos láminas anchas termosoldadas en un tono claro. La más mínima suciedad se ve al instante. El zócalo asciende formando una media caña 10 cm. La auditoría de calidad pasa sin contratiempos.' },
  { title: 'Farmacias de dispensación', desc: 'Usted dirige una farmacia con venta, dispensación y almacén. El suelo soporta a los clientes, los palés y la limpieza diaria. Elegimos un tono claro en la venta, uno más marcado en el almacén. La gama se mantiene coherente de principio a fin.' },
  { title: 'Laboratorios de cosmética', desc: 'Usted fabrica cosméticos, manipula pigmentos y aceites esenciales. El suelo debe aguantar sin mancharse ni amarillear. Colocamos un vinilo de alta densidad con acabado mate, en una paleta clara que realza la limpieza de su taller.' },
  { title: 'Almacén de materias primas y zonas tampón', desc: 'Sus zonas tampón ven pasar transpaletas y carros ligeros. Colocamos un vinilo que resiste mecánicamente, en continuidad con la zona de producción. Las esclusas cambian de tono para delimitar las zonas, sin señalización adicional en el suelo.' },
]

const exigences = [
  { title: 'Un suelo de una sola pieza, sin junta visible', desc: 'Las láminas se colocan en grandes anchos, termosoldadas, las soldaduras niveladas a mano. A la vista, el suelo parece una sola pieza. Eso es lo que causa buena impresión durante una auditoría. Y en el día a día, ya no hay juntas donde pueda alojarse la suciedad.' },
  { title: 'El zócalo asciende formando una media caña redondeada', desc: 'El vinilo sube por la pared, en una curva suave, diez centímetros. Se acabó el ángulo recto donde se acumula el polvo. La fregona pasa de un solo movimiento, sin esquina muerta. Un detalle discreto que se nota al instante durante una visita de auditoría.' },
  { title: 'Suelos claros para detectar una gota', desc: 'Elegimos blanco roto, gris muy claro, beige suave. No es solo una cuestión de aspecto. Sus operarios ven de inmediato una marca en el suelo, un depósito, algo que limpiar. Es una herramienta de trabajo discreta que apoya su cultura de la calidad cada día.' },
  { title: 'Venimos cuando la producción se detiene', desc: 'Un laboratorio no se para por nosotros. Ajustamos la obra a sus ventanas de mantenimiento o paradas técnicas. Todo se prepara en Villedoux antes de llegar. In situ, colocamos rápido, limpiamos sobre la marcha. Sus equipos vuelven a empezar a la hora acordada.' },
  { title: 'Le entregamos el expediente de auditoría', desc: 'Facilitamos las fichas técnicas, la clasificación al fuego, la clasificación de aire interior, los certificados, la trazabilidad de lotes. Usted lo archiva en su dosier de calidad, listo para la próxima auditoría. No tiene que recopilar nada por su cuenta.' },
  { title: 'Sus equipos limpian como siempre', desc: 'Ningún protocolo especial, ningún producto que pedir de un catálogo. El suelo se limpia con lo que su equipo ya usa: agua, detergente neutro, desinfectante si hace falta. Dejamos una ficha de una página al irnos. Ninguna formación que organizar.' },
]

const materiaux = [
  { name: 'Vinilo en lámina ancha soldada', desc: 'Es nuestro estándar en laboratorios. Láminas de dos metros, termosoldadas entre sí y al zócalo. El acabado es impecable, continuo, sin junta visible. El suelo soporta disolventes, ácidos débiles y alcoholes comunes. Una clasificación A+ de aire interior, compatible con salas limpias en la mayoría de las referencias. Gerflor Mipolam o Tarkett iQ Optima según la necesidad.' },
  { name: 'Vinilo de alta resistencia para zonas húmedas', desc: 'Para los bancos y las zonas de lavado donde el agua y los productos corren constantemente, subimos el zócalo a quince o veinte centímetros, a veces hasta la encimera. La superficie está ligeramente texturada para el agarre, pero sigue siendo fácil de limpiar. Forbo Surestep o Polyflor según la configuración.' },
  { name: 'Suelos antideslizantes para zonas técnicas', desc: 'En las salas técnicas y las zonas de circulación entre muelles, el antideslizante es una cuestión de seguridad del personal. Elegimos referencias que agarran de verdad, sin sacrificar la facilidad de limpieza. A menudo colores más marcados para delimitar visualmente las zonas de circulación.' },
  { name: 'Perfiles de umbral y zócalo sanitario', desc: 'Es lo que da un acabado de calidad de laboratorio. Los perfiles de umbral entre esclusas y zonas de producción quedan enrasados, no entorpecen los carros ni las transpaletas. El zócalo sanitario hace la unión continua entre suelo y pared a lo largo de diez centímetros, sin ángulo ni junta visible.' },
]

const marques = [
  { name: 'Gerflor', desc: 'El fabricante francés con sede en Lyon que conocemos a fondo. Su Mipolam equipa la mitad de los centros de producción farmacéutica y cosmética franceses. Un acabado mate, una paleta clara ampliada.' },
  { name: 'Tarkett', desc: 'Sus iQ Optima e iQ Granit equipan laboratorios por toda Europa. Resistencia química probada, larga durabilidad, trazabilidad completa del producto para sus auditorías.' },
  { name: 'Forbo', desc: 'Cuando el proyecto pide algo natural o para zonas húmedas, miramos hacia Forbo. Su Surestep soporta las zonas de lavado, su Sphera cubre las zonas limpias. Una gama completa, referencias sólidas.' },
  { name: 'Polyflor', desc: 'El fabricante británico de vinilo de alta densidad. Buen rendimiento químico y mecánico, un amplio catálogo. Lo sacamos para los entornos técnicos más exigentes.' },
  { name: 'Altro', desc: 'El fabricante británico especializado en suelos técnicos para farmacia y alimentación. Sus suelos antideslizantes de gama alta duran en el tiempo sin degradarse.' },
  { name: 'Romus', desc: 'Nuestro proveedor de perfiles y zócalos sanitarios. Imprescindible para una instalación cuidada de laboratorio. Su gama es amplia, siempre encontramos lo que necesita cada configuración.' },
  { name: 'Sika', desc: 'Nuestros adhesivos e imprimaciones técnicos. Los elegimos por su compatibilidad con los productos químicos de laboratorio y su resistencia en el tiempo a la limpieza repetida.' },
  { name: 'Wakol', desc: 'El fabricante alemán de adhesivos y resinas para suelos técnicos. Lo sacamos en soportes difíciles y en obras con un plazo ajustado. Soluciones probadas, que nunca nos han fallado.' },
]

const quartiers = [
  { nom: 'Laboratorios de análisis médicos', detail: 'Preanalítica, biología, hematología, bioquímica, microbiología. Un suelo claro en lámina soldada, zócalo sanitario, un acabado continuo entre los bancos y las zonas de circulación.' },
  { nom: 'Laboratorios de análisis agroalimentarios', detail: 'Microbiología alimentaria, control de calidad, sensorial. Un suelo fácil de lavar, compatible con los productos alimentarios que circulan, legibilidad visual de las salpicaduras.' },
  { nom: 'Laboratorios de análisis ambientales', detail: 'Agua, suelo, aire, contaminantes. Un espacio técnico variado, suelos claros y marcados por zona, robustez para el paso de muestras y equipos de campo.' },
  { nom: 'Farmacias de dispensación', detail: 'Zona de venta, mostrador, trastienda, preparación, almacén. Continuidad visual entre espacios, una paleta clara y acogedora para la zona de venta.' },
  { nom: 'Laboratorios de formulación cosmética', detail: 'Pesaje, mezcla, calentamiento, muestras. Suelos resistentes a los pigmentos, los aceites esenciales y los alcoholes, un acabado mate que no marca.' },
  { nom: 'Laboratorios de acondicionamiento cosmético', detail: 'Líneas de llenado, etiquetado, encajado. Un suelo duradero bajo carros y palés, un antideslizante claro para la seguridad del operario.' },
  { nom: 'Laboratorios de control de calidad', detail: 'Muestreo, análisis físico-químico, validación de liberación de lotes. Un suelo claro para la lectura visual, un acabado impecable para las auditorías de clientes.' },
  { nom: 'Almacén de materias primas', detail: 'Recepción, cuarentena, almacenamiento, muestreo. Un suelo resistente a palés y transpaletas, una transición de tono con las esclusas.' },
  { nom: 'Esclusas de transferencia y vestuarios', detail: 'Vestido, desvestido, lavado de manos. Un suelo antideslizante, zócalo estanco, una paleta clara para marcar visualmente la transición a la zona limpia.' },
  { nom: 'Zonas de producción farmacéutica', detail: 'Fabricación, formado, acondicionamiento primario. Un suelo continuo en grandes láminas, zócalo sanitario, una paleta clara, resistencia a los productos de limpieza de la zona.' },
  { nom: 'Laboratorios de investigación y desarrollo', detail: 'Bancos, despachos abiertos, espacios de prototipado. Un suelo que combina el rigor de los espacios técnicos y el confort acústico de las zonas de reflexión.' },
  { nom: 'Farmacias con robot', detail: 'Zona de venta, zona del robot, dispensación. Un suelo perfectamente plano para que el robot se desplace, duradero bajo el rodamiento y visualmente continuo con la zona de clientes.' },
]

const process = [
  { step: 'Primer contacto', desc: 'Una llamada telefónica o un correo para encuadrar el proyecto: tipo de laboratorio, superficies afectadas, zonas que renovar, calendario deseado, restricciones de producción. Identificamos de inmediato si la obra puede encajar en una parada técnica o si hace falta un cierre específico.' },
  { step: 'Visita técnica', desc: 'Una visita in situ en 1 a 2 semanas. Medición precisa, comprobación del soporte, estudio de las restricciones de acceso (vestuarios, esclusas, montacargas), fotos para la preparación en taller. Muestras presentadas in situ bajo su luz de referencia.' },
  { step: 'Presupuesto y expediente de calidad', desc: 'Un presupuesto detallado en una semana con un calendario preciso. Adjuntamos de serie las fichas técnicas de producto, la clasificación al fuego, la clasificación A+ de aire interior y los certificados útiles para su expediente de calidad. Aprobación final de los colores y confirmación de las esclusas y zonas de transición.' },
  { step: 'Preparación en el taller de Villedoux', desc: 'Precorte de las láminas, marcado de los cortes para los bancos, suministros técnicos y patas de equipos. Esta preparación previa es lo que nos permite mantener el plazo ajustado una vez in situ, sin improvisación. Un plazo de 2 a 5 semanas según la gama elegida.' },
  { step: 'Instalación en su laboratorio', desc: 'Obra en la ventana acordada. Un equipo con ropa limpia, calzado específico, un calendario ajustado a sus restricciones. Retirada, nivelación si hace falta, colocación de láminas, termosoldaduras, zócalos, acabados, limpieza. Documentación final entregada a su responsable de calidad.' },
]

const faq = [
  { q: '¿Sus suelos son compatibles con un entorno de laboratorio?', a: 'Sí, es exactamente lo que ofrecemos. Las gamas que colocamos en laboratorios están diseñadas para este uso: un acabado continuo en láminas termosoldadas, zócalo sanitario redondeado, una paleta clara para la lectura visual, resistencia a los productos de limpieza y desinfección. Gerflor Mipolam, Tarkett iQ Optima y Forbo Surestep son nuestras principales referencias, todas con clasificación A+ para el aire interior. Facilitamos fichas técnicas y certificados para su expediente de calidad.' },
  { q: '¿Cuánto se tarda en renovar un laboratorio?', a: 'Depende de la superficie y del carácter técnico del espacio. Para un laboratorio de 200 a 400 m², cuente de cinco a diez días in situ, para encajar en una parada técnica o un cierre anual. Antes, cuente una o dos semanas para la visita y el presupuesto, y luego de tres a seis semanas de fabricación. Premontamos en el taller para minimizar el tiempo in situ. En laboratorios muy grandes, también podemos repartir la obra zona por zona a lo largo de varios fines de semana.' },
  { q: '¿Cómo rematan las soldaduras entre láminas?', a: 'Es un punto de calidad visual en el que ponemos toda nuestra atención. Una vez colocadas y encoladas las láminas, fresamos las juntas a máquina, colocamos el cordón de termosoldadura (PVC blando coloreado al tono del suelo), y luego lo nivelamos a mano con una cuchilla especial en cuanto el cordón se ha enfriado. El resultado es una superficie continua donde no se distingue la soldadura. Eso es lo que lo distingue de un suelo de oficina estándar.' },
  { q: '¿Qué documentos para el expediente de calidad?', a: 'Entregamos un expediente de trazabilidad completo al final de la obra: fichas técnicas, clasificación al fuego, clasificación A+ de aire interior, certificados de conformidad europea, números de lote por zona, un plano de instalación con la orientación de las láminas, fotos del antes y el después. El expediente entra directamente en sus auditorías internas o de clientes, sin preparación adicional. También facilitamos las fichas de seguridad del adhesivo, y un acta de fin de obra firmada por nuestro jefe de equipo y su responsable de obra.' },
  { q: '¿Pueden instalar con el laboratorio en funcionamiento?', a: 'En la mayoría de los casos, sí. Trabajamos zona por zona con un marcado claro entre la zona de obra y la zona activa. La obra global lleva más tiempo, pero se evita una parada total de la producción. Organizamos las transiciones durante las pausas o al final del día. Llegamos con calzado específico que cambiamos en la esclusa si la zona lo requiere. En los laboratorios más sensibles, sigue siendo más sencillo apuntar a una parada técnica.' },
  { q: '¿Cuánto dura un suelo de vinilo en un laboratorio?', a: 'Cuente de quince a veinte años con facilidad, con un mantenimiento diario normal y una buena conservación visual durante todo el periodo. En un laboratorio de análisis clásico con tránsito moderado, superamos con regularidad los veinte años. En una zona de producción cosmética o farmacéutica con palés y carros, es más bien quince. La termosoldadura entre las láminas no se degrada con el tiempo; es el propio revestimiento el que acaba marcándose.' },
  { q: '¿Trabajan fuera de Charente-Maritime?', a: 'Sí, con mucha regularidad. El taller está en Villedoux cerca de La Rochelle, y trabajamos en todo el oeste de Francia y más allá para este tipo de obra, que exige una verdadera experiencia. Tenemos referencias en Nantes, Burdeos, Niort, Poitiers, Angulema, Tours, y más lejos según el proyecto. El desplazamiento y el alojamiento se incluyen en el presupuesto más allá de dos horas de trayecto. Planificamos a lo largo de ocho a catorce semanas, lo cual es cómodo para organizarlo todo a distancia.' },
]

export default function SolPvcLaboratoirePharmaceutiquePageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/es/sol-pvc-laboratoire-pharmaceutique#service',
        name: 'Suelo de PVC para laboratorios farmacéuticos',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
          { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
          { '@type': 'Country', name: 'France' },
        ],
        serviceType: 'Suelo de PVC instalado en laboratorios farmacéuticos, de cosmética y de análisis, y en farmacias',
        description: 'Suelo de PVC profesional instalado para laboratorios: farmacéuticos, de cosmética, de análisis médicos y agroalimentarios, farmacias de dispensación. Acabado continuo en lámina soldada, zócalo sanitario, documentación de calidad.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/es' },
          { '@type': 'ListItem', position: 2, name: 'Suelo de PVC para laboratorios farmacéuticos', item: 'https://cbsols.fr/es/sol-pvc-laboratoire-pharmaceutique' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="laboratoire-pharmaceutique" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Suelo de PVC para laboratorios</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Suelo de PVC para laboratorios,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>rigor y acabado.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Suelo de PVC profesional instalado para laboratorios farmacéuticos, de cosmética y de análisis, y para farmacias de dispensación. Un acabado continuo en láminas anchas soldadas, zócalo sanitario, documentación de calidad facilitada. CB Sols trabaja el oficio desde hace más de 28 años, taller en Villedoux cerca de La Rochelle.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=sol-pvc-laboratoire-pharmaceutique" variant="primary" size="md">Solicitar un presupuesto</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Documentación de calidad</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;El suelo de un laboratorio es ante todo un acabado impecable y un expediente de calidad sólido. Colocamos en grandes anchos, soldamos limpio y entregamos la trazabilidad completa. CB Sols lo hace desde hace más de 28 años.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, titular de CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Which type of lab */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Para qué tipo de laboratorio</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cuatro entornos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>un mismo rigor de instalación.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>¿Un laboratorio que renovar?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Una visita técnica, un presupuesto detallado.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Muestras y mediciones tomadas in situ. Un presupuesto detallado en una semana, un calendario ajustado a sus paradas técnicas o cierres anuales.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/es/contact?from=sol-pvc-laboratoire-pharmaceutique-cta1" variant="primary" size="md">Solicitar un presupuesto</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Lo que debe cumplir un suelo de laboratorio</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Seis exigencias <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propias de los laboratorios.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Trabajar en un laboratorio significa respetar un rigor de obra, de acabado y de documentación. Estos son los seis puntos que estructuran nuestro método desde la primera visita, sin jerga innecesaria.
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
            Los suelos <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que colocamos en laboratorios.</em>
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
              &ldquo;En un laboratorio, lo que cuenta es lo que se ve y lo que se mide: un acabado continuo, un zócalo limpio, un expediente de calidad completo. Entregamos los tres juntos.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, titular de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact?from=sol-pvc-laboratoire-pharmaceutique-citation" variant="primary" size="md">Concertar una cita</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Una visita técnica in situ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Marcas colaboradoras</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Ocho referencias <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>para sus proyectos de laboratorio.</em>
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

      {/* Zones */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Zonas y tipos de laboratorio</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Doce contextos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>elecciones de suelo a juego.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Según la zona del laboratorio, las restricciones no son las mismas. Así adaptamos los suelos a los espacios que renovamos con regularidad.
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
            Veinte minutos por teléfono para aclarar las gamas posibles, un calendario realista y un orden de magnitud del presupuesto para su laboratorio.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=sol-pvc-laboratoire-pharmaceutique-cta2" variant="primary" size="md">Solicitar un presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro método</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco etapas, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>del primer contacto a la entrega.</em>
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
            El vinilo en un laboratorio, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas concretas.</em>
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
            Directamente con el titular. Consejo claro, un siguiente paso solo si el proyecto tiene sentido para usted como para nosotros.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="Ver también"
        sectionSubtitle="Nuestro saber hacer abarca otros mundos que pueden interesarle. Tómese su tiempo para explorar, plantee sus preguntas, las responderemos."
        items={[
          { href: '/es/sol-pvc-pharmacie', title: 'Suelo de PVC para farmacias', teaser: 'Higiene diaria, conformidad sanitaria, instalación nocturna. Veinte años de uso en una farmacia que no cierra nunca.', icon: Pill },
          { href: '/es/sol-pvc-cabinet-medical', title: 'Suelo de PVC para consultas médicas', teaser: 'Un suelo que tranquiliza a sus pacientes desde la sala de espera y facilita su limpieza diaria.', icon: Stethoscope },
          { href: '/es/sol-pvc-creche', title: 'Suelo de PVC para guarderías', teaser: 'Sin ftalatos, antibacteriano, certificado para la primera infancia. Tranquilidad para padres y personal.', icon: Baby },
          { href: '/es/sol-pvc-ecole', title: 'Suelo de PVC para colegios', teaser: 'Acústica calmada, mantenimiento rápido, durabilidad de quince años en un aula que no para.', icon: GraduationCap },
          { href: '/es/architectes', title: 'Para arquitectos', teaser: 'Documentación de materiales, muestras anotadas, presupuestos detallados. Nuestro papel es servir su visión.', icon: Building2 },
          { href: '/es/showroom', title: 'Showroom de Villedoux', teaser: 'Venga a ver y tocar los materiales. Con cita previa, en Villedoux cerca de La Rochelle.', icon: Store },
          { href: '/es/contact', title: 'Contáctenos', teaser: 'Una pregunta, un proyecto, un presupuesto en 48 horas. El titular le responde directamente.', icon: Mail },
        ]}
      />

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Su laboratorio renovado <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>como es debido.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Una visita técnica in situ. Un presupuesto detallado, un acabado continuo en grandes láminas soldadas, zócalo sanitario, un expediente de calidad facilitado. Más de 28 años de saber hacer de CB Sols para laboratorios y farmacias.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=sol-pvc-laboratoire-pharmaceutique-final" variant="primary" size="md">Solicitar un presupuesto</Button>
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
