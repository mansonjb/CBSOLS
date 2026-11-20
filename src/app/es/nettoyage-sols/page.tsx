import type { Metadata } from 'next'
import Link from 'next/link'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { BreadcrumbLD } from '@/components/BreadcrumbLD'

export const metadata: Metadata = {
  title: 'Limpieza profesional de suelos | Fregado Rotowash CB Sols La Rochelle',
  description: 'Limpieza en profundidad de todo tipo de suelos (vinilo, linóleo, baldosa, piedra, hormigón pulido) con fregado mecánico Rotowash. Hoteles, restaurantes, oficinas y organismos públicos en La Rochelle, Île de Ré y Charente-Maritime.',
  alternates: {
    canonical: 'https://cbsols.fr/es/nettoyage-sols',
    languages: { 'fr-FR': 'https://cbsols.fr/nettoyage-sols', en: 'https://cbsols.fr/en/nettoyage-sols', es: 'https://cbsols.fr/es/nettoyage-sols', },
  },
}

const supportedSurfaces = [
  { label: 'Vinilo en lámina o loseta', desc: 'Limpia en profundidad las ranuras y las juntas, recupera el color original.' },
  { label: 'Linóleo y vinilo', desc: 'Retira las capas de cera antigua y la suciedad incrustada.' },
  { label: 'Baldosa y juntas', desc: 'Un fregado mecánico preciso que devuelve la blancura a las juntas sin dañar el esmalte.' },
  { label: 'Piedra natural', desc: 'Decapado suave con cepillos adecuados, seguido de una posible impregnación.' },
  { label: 'Hormigón visto y pulido', desc: 'Recupera el aspecto original, prepara para los tratamientos de protección.' },
  { label: 'Suelos industriales', desc: 'Talleres, almacenes, garajes: limpieza en profundidad, desengrase controlado.' },
]

const reasons = [
  { title: 'Rehabilitar sin sustituir', body: 'Antes de decidir sustituir un suelo, mándelo limpiar profesionalmente. En vinilo o baldosa de más de 5 años, el fregado mecánico recupera entre el 70 y el 90% del aspecto original, por entre 5 y 10 veces menos que un arranque y una reinstalación.' },
  { title: 'Higiene profesional documentada', body: 'Para edificios públicos, hoteles, restaurantes y organismos públicos, la limpieza periódica es documentable (un certificado de prestación). Útil para los controles de higiene, las normas ISO, las auditorías de cadena o los informes previos a una venta.' },
  { title: 'Preservar los materiales', body: 'Un suelo mal limpiado se desgasta más rápido: la suciedad incrustada actúa como una lija con cada pisada. El fregado mecánico profesional retira esas partículas abrasivas y devuelve al revestimiento su resistencia original.' },
  { title: 'Preparación antes del tratamiento', body: 'Aplicar una cera de protección, metalizar, una impregnación hidrófuga sobre piedra, revarnizar: todos estos tratamientos exigen un suelo limpiado a fondo. El fregado Rotowash es el paso previo imprescindible.' },
]

const processSteps = [
  { num: '01', title: 'Inspección del soporte', body: 'Identificación del tipo de revestimiento, su estado general, las manchas y las zonas específicas (grasa, marcas de producto, marcas de carros). Una prueba de solidez en una zona discreta para validar el procedimiento.' },
  { num: '02', title: 'Aspirado y pretratamiento', body: 'Aspirado mecánico previo para retirar todas las partículas secas. Aplicación de un detergente neutro adaptado al revestimiento, tiempo de actuación controlado (de 3 a 8 min según la naturaleza de la suciedad).' },
  { num: '03', title: 'Fregado mecánico Rotowash', body: 'La máquina Rotowash realiza un fregado rotativo de alta frecuencia con dos rodillos contrarrotantes. Esta acción mecánica extrae la suciedad en profundidad sin dañar el material. Una sola pasada cubre 1 m² en unos 30 a 45 segundos.' },
  { num: '04', title: 'Aclarado con agua desmineralizada', body: 'Un aclarado final con agua desmineralizada para no dejar ningún residuo de detergente ni película de cal. Es este aclarado el que garantiza que su suelo no se vuelva a ensuciar el doble de rápido, y es también lo que distingue el trabajo profesional de un alquiler de bricolaje.' },
  { num: '05', title: 'Secado y acabado', body: 'El Rotowash extrae el agua utilizada al mismo tiempo. El suelo queda seco en 30 a 60 minutos por ventilación. Puede continuar con una cera de protección, un metalizado o un tratamiento hidrófugo.' },
  { num: '06', title: 'Inspección final', body: 'Un recorrido con usted, validación de las zonas tratadas. Si una mancha resiste, una segunda pasada localizada. Entrega de una ficha de prestación detallada (útil para sus registros y controles internos).' },
]

const cas = [
  { secteur: 'Cocina profesional', freq: '1 a 2×/año', detail: 'Limpieza en profundidad de suelos termosoldados, juntas en media caña, uniones con los sumideros. Higiene compatible con APPCC.' },
  { secteur: 'Comedores', freq: '2×/año', detail: 'Vinilo, baldosa, madera barnizada: recuperar los colores y eliminar las manchas antiguas de comida.' },
  { secteur: 'Hoteles, zonas de paso', freq: '2 a 3×/año', detail: 'Vinilo imitación madera, baldosa jaspeada, mármol: recuperar el brillo y preparar para una cera de protección.' },
  { secteur: 'Oficinas', freq: '1×/año', detail: 'Limpieza en profundidad de suelos de vinilo, ideal en julio-agosto para empezar el curso con un suelo limpio.' },
  { secteur: 'Tiendas y comercios', freq: '1 a 2×/año', detail: 'Baldosa, piedra, hormigón pulido: da un aspecto renovado a los espacios comerciales, imprescindible antes de eventos o aperturas.' },
  { secteur: 'Organismos y edificios públicos', freq: '2 a 4×/año', detail: 'Vestíbulos, pasillos, vestuarios: limpieza en profundidad con certificado de prestación para los controles internos.' },
]

const faqItems = [
  { q: '¿Qué tipos de suelo puede limpiar el Rotowash?', a: 'Prácticamente todos los suelos duros: vinilo en lámina o loseta, linóleo, vinilo, baldosa y juntas, piedra natural, mármol, hormigón visto o pulido, suelos industriales de resina epoxi. No es adecuado para la moqueta (para eso, consulte nuestro servicio de limpieza de moquetas por inyección-extracción).' },
  { q: '¿Cuánto tarda en poder pisarse de nuevo?', a: 'El Rotowash extrae el agua a medida que friega. El suelo es utilizable de 30 minutos a 1 hora después del trabajo. Para proyectos profesionales, siempre adaptamos nuestro calendario a sus limitaciones de explotación.' },
  { q: '¿El fregado mecánico daña el suelo?', a: 'No, siempre que se usen los cepillos adecuados. Los cepillos se ajustan a cada tipo de revestimiento: blandos para la piedra y el mármol, medios para el vinilo y el linóleo, duros para la baldosa y el hormigón. La prueba en una zona discreta valida sistemáticamente el procedimiento.' },
  { q: '¿Por qué aclarar con agua desmineralizada?', a: 'El agua del grifo contiene cal que, al secarse, deja una película blanca y vuelve a fijar las partículas de polvo. El agua desmineralizada se evapora limpiamente y deja un suelo realmente limpio que se mantiene limpio más tiempo.' },
  { q: '¿Cuánto cuesta una limpieza con Rotowash?', a: 'La tarifa depende de la superficie, el tipo de suelo, el estado inicial y el acceso. A modo orientativo, cuente con 5 a 12 € sin IVA/m² para una limpieza sencilla sobre una superficie grande, y 10 a 18 € sin IVA/m² para una rehabilitación en profundidad sobre una superficie pequeña y compleja. Presupuesto gratuito tras una visita.' },
  { q: '¿Pueden trabajar sin interrumpir la actividad?', a: 'Sí. En tiendas y restaurantes, trabajamos fuera del horario de apertura. En hoteles, por zonas. En oficinas, fuera del horario de actividad. El secado rápido (30 a 60 min) facilita este trabajo sin interrupciones.' },
  { q: '¿Ofrecen contratos anuales?', a: 'Sí. Para hoteles, restaurantes, oficinas y tiendas, ofrecemos contratos de mantenimiento periódico con una planificación fija (1 a 4 visitas al año), tarifas negociadas y respuesta prioritaria en caso de urgencia (una mancha, un evento de cliente).' },
  { q: '¿Cuál es la diferencia con una empresa de limpieza clásica?', a: 'Una empresa de limpieza clásica se encarga del trabajo diario: aspirado, fregado con mopa. El Rotowash es una intervención periódica y en profundidad que limpia lo que la limpieza diaria no puede alcanzar. Las dos son complementarias, no competidoras.' },
]

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Limpieza profesional de suelos por fregado Rotowash',
  description: 'Limpieza en profundidad de todo tipo de suelos (vinilo, linóleo, baldosa, piedra, hormigón pulido) con fregado mecánico Rotowash. La Rochelle, Île de Ré, Charente-Maritime.',
  serviceType: 'Limpieza y mantenimiento de revestimientos de suelo',
  areaServed: { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
  provider: {
    '@type': 'LocalBusiness',
    name: company.legalName,
    telephone: company.phoneClean,
    email: company.email,
    address: { '@type': 'PostalAddress', streetAddress: company.address.street, addressLocality: company.address.city, postalCode: company.address.zip, addressCountry: 'FR' },
    geo: { '@type': 'GeoCoordinates', latitude: company.geo.lat, longitude: company.geo.lng },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '41', bestRating: '5' },
  },
}

export default function NettoyageSolsPageEn() {
  return (
    <>
      <BreadcrumbLD
        items={[
          { name: 'CB Sols', url: 'https://cbsols.fr/es' },
          { name: 'Servicios', url: 'https://cbsols.fr/es/services' },
          { name: 'Limpieza de suelos', url: 'https://cbsols.fr/es/nettoyage-sols' },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div style={{ paddingTop: '72px' }}>
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(44, 85, 48, 0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
            <nav aria-label="Breadcrumb" style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>CB Sols</Link>
              <span style={{ color: 'var(--border-hover)' }}>/</span>
              <Link href="/es/services" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>Servicios</Link>
              <span style={{ color: 'var(--border-hover)' }}>/</span>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Limpieza de suelos</span>
            </nav>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.75rem', padding: '0.35rem 0.9rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(44,85,48,0.08)', borderRadius: '999px' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'inline-block' }} />
              <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 600 }}>Servicio · Fregado mecánico Rotowash</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0, maxWidth: '900px' }}>
              Limpieza de suelos<br />
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>todos los revestimientos.</em>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--cream-muted)', maxWidth: '720px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Vinilo, linóleo, baldosa, piedra natural, hormigón pulido, suelos industriales: recupere el aspecto original en lugar de sustituir. Nuestro fregado mecánico Rotowash limpia en profundidad lo que ninguna limpieza diaria alcanza. Trabajamos en Charente-Maritime, la Île de Ré y la Île d&apos;Oléron.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/es/contact?service=nettoyage-sols" variant="primary" size="lg">Solicitar un presupuesto</Button>
              <Button href={`tel:${company.phoneClean}`} external variant="outline" size="md">{company.phone}</Button>
            </div>
          </div>
        </section>

        <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
            {[
              { val: '70-90%', label: 'Del aspecto original recuperado' },
              { val: '5 a 10×', label: 'Más barato que arrancar/reinstalar' },
              { val: '30-60 min', label: 'De secado' },
              { val: 'Todos los suelos', label: 'Vinilo · piedra · baldosa · hormigón' },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', fontWeight: 800, color: 'var(--terra)', lineHeight: 1, marginBottom: '0.5rem' }}>{s.val}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.08em', lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Por qué limpiar</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.15, maxWidth: '720px' }}>
              Rehabilitar en lugar de sustituir.
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', margin: '0 0 3rem', maxWidth: '640px', lineHeight: 1.7 }}>
              El fregado mecánico profesional no es un lujo, es una decisión económica. Cuatro razones concretas para programarlo.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {reasons.map((r, i) => (
                <div key={r.title} style={{ padding: '2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)' }}>
                  <div style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontSize: '1.5rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)', lineHeight: 1, marginBottom: '1rem' }}>{String(i + 1).padStart(2, '0')}</div>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', lineHeight: 1.3 }}>{r.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Superficies tratadas</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15, maxWidth: '720px' }}>
              Todos los suelos duros, del más delicado al más expuesto.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {supportedSurfaces.map((s) => (
                <div key={s.label} style={{ padding: '1.5rem', backgroundColor: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px' }}>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.5rem', letterSpacing: '-0.01em' }}>{s.label}</h3>
                  <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              ))}
            </div>
            <p style={{ marginTop: '2.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '720px', fontStyle: 'italic' }}>
              Para la <strong style={{ color: 'var(--dark)', fontStyle: 'normal' }}>moqueta</strong>, consulte nuestro servicio específico de <Link href="/es/nettoyage-moquettes" style={{ color: 'var(--terra)', textDecoration: 'underline' }}>limpieza por inyección-extracción</Link>; la técnica es distinta (agua inyectada y luego extraída, frente al fregado mecánico).
            </p>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nuestro método</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              El fregado Rotowash <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>en seis pasos.</em>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', margin: '0 0 3rem', maxWidth: '720px', lineHeight: 1.7 }}>
              La máquina Rotowash combina a la vez el fregado mecánico rotativo, el lavado y la extracción. Un trabajo tipo de 100 m² lleva de 2 a 3 horas, desde la inspección hasta el secado.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {processSteps.map((step) => (
                <div key={step.num} style={{ borderTop: '2px solid var(--terra)', paddingTop: '1.5rem' }}>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--terra)', fontWeight: 700, marginBottom: '0.75rem' }}>{step.num}</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem', fontFamily: 'var(--font-sans)', lineHeight: 1.3 }}>{step.title}</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.7 }}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Casos de uso</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15, maxWidth: '720px' }}>
              ¿Cuándo programar el fregado según la actividad?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {cas.map((c, i) => (
                <div key={c.secteur} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', padding: '1.75rem 0', borderBottom: i < cas.length - 1 ? '1px solid var(--border)' : 'none', alignItems: 'start' }}>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.4rem', fontFamily: 'var(--font-sans)' }}>{c.secteur}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{c.detail}</div>
                  </div>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700, padding: '0.5rem 1rem', border: '1px solid rgba(44,85,48,0.3)', borderRadius: '999px', whiteSpace: 'nowrap', flexShrink: 0 }}>{c.freq}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '3rem 2rem' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.02em' }}>
              ¿Un suelo que limpiar? Cuéntenoslo.
            </h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/es/contact?service=nettoyage-sols" variant="primary" size="md">Solicitar un presupuesto</Button>
              <Button href={`tel:${company.phoneClean}`} external variant="outline" size="md">{company.phone}</Button>
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Preguntas frecuentes</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              FAQ, limpieza de suelos
            </h2>
            {faqItems.map((item, i) => (
              <details key={i} style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
                <summary style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--dark)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <span>{item.q}</span>
                  <span style={{ color: 'var(--terra)', fontSize: '1.4rem', lineHeight: 1, flexShrink: 0 }}>+</span>
                </summary>
                <div style={{ fontSize: '0.9rem', color: 'var(--cream-muted)', lineHeight: 1.75, marginTop: '1rem' }}>{item.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 100%, rgba(44, 85, 48, 0.1) 0%, transparent 60%)' }} />
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              ¿Un suelo que <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>dejar como nuevo?</em>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Indíquenos el tipo de suelo, la superficie y su estado general. Le respondemos en 48 h con una valoración precisa.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/es/contact?service=nettoyage-sols" variant="primary" size="lg">Solicitar un presupuesto</Button>
              <Button href="/es/nettoyage-moquettes" variant="outline" size="md">Limpieza de moquetas</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
