import type { Metadata } from 'next'
import Link from 'next/link'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { BreadcrumbLD } from '@/components/BreadcrumbLD'

export const metadata: Metadata = {
  title: 'Limpieza profesional de moquetas | CB Sols La Rochelle',
  description: 'Limpieza de moquetas por inyección-extracción en La Rochelle, Île de Ré y Charente-Maritime. Hoteles, oficinas, restaurantes, viviendas particulares. Presupuesto gratuito, obras sin interrumpir la actividad.',
  alternates: {
    canonical: 'https://cbsols.fr/es/nettoyage-moquettes',
    languages: { 'fr-FR': 'https://cbsols.fr/nettoyage-moquettes', en: 'https://cbsols.fr/en/nettoyage-moquettes', es: 'https://cbsols.fr/es/nettoyage-moquettes', },
  },
}

const reasons = [
  { title: 'Preservar la vida útil', body: 'Una moqueta limpiada con regularidad dura de 12 a 15 años en una oficina de clase 33, frente a los 5 a 7 años sin mantenimiento. La suciedad incrustada desgasta mecánicamente las fibras con cada pisada, como una lija.' },
  { title: 'Recuperar los colores', body: 'El apagamiento no es desgaste, es una capa micrométrica de polvo sobre las fibras. La inyección-extracción profesional recupera entre el 80 y el 95% del brillo original, a veces en moquetas de 10 años.' },
  { title: 'Mejorar la calidad del aire', body: 'Una moqueta acumula de 4 a 8 veces su peso en polvo, alérgenos y escamas de piel. Un aspirador solo extrae la superficie. La inyección-extracción saca las partículas profundas, una ventaja directa para oficinas y hoteles.' },
  { title: 'Eliminar olores y manchas', body: 'Café, vino, orina de mascotas, restos de comida: nuestros productos de pretratamiento adaptados a cada tipo de mancha, seguidos de una extracción a alta presión, eliminan lo que ninguna limpieza doméstica puede.' },
  { title: 'Cumplimiento de la higiene profesional', body: 'En hoteles, restauración, sanidad y organismos públicos, la limpieza periódica es documentable (un certificado de prestación), útil para los controles de higiene, las normas ISO y las auditorías de cadena.' },
  { title: 'Preparar un uso intensivo', body: 'Antes de la temporada alta hotelera, después de un evento profesional, al inicio del curso en los colegios: una limpieza en profundidad devuelve a la moqueta toda su resistencia para el uso venidero.' },
]

const processSteps = [
  { num: '01', title: 'Inspección y preparación', body: 'Inspección de las zonas, identificación de las manchas rebeldes (vino, tinta, grasa), una prueba de solidez del color en una zona discreta. Aspirado mecánico previo para retirar las partículas secas.' },
  { num: '02', title: 'Pretratamiento localizado', body: 'Aplicación de quitamanchas específicos según el tipo de mancha. Un tiempo de actuación controlado (de 5 a 15 min). Un cepillado ligero para penetrar en las fibras sin dañarlas.' },
  { num: '03', title: 'Inyección-extracción a baja presión', body: 'Nuestra máquina de inyección-extracción profesional pulveriza una solución detergente a presión controlada (9 bar como máximo) y temperatura controlada (20 °C como máximo). Un calor excesivo degrada las fibras y fija algunas manchas: una temperatura baja maximiza la eficacia de la limpieza. La máquina extrae la solución al instante, arrastrando la suciedad en suspensión.' },
  { num: '04', title: 'Aclarado con agua desmineralizada', body: 'Una segunda pasada con agua desmineralizada para retirar todos los residuos de producto. El agua desmineralizada evita los cercos de cal y el apagamiento posterior a la limpieza. Sin este paso, la moqueta se vuelve a ensuciar el doble de rápido, y eso es lo que distingue una limpieza profesional de una máquina de alquiler.' },
  { num: '05', title: 'Cepillado y secado', body: 'Cepillado de las fibras en el sentido del pelo para levantar el hilo, seguido de un secado activo (de 2 a 4 h de ventilación). La estancia vuelve a ser utilizable en medio día en la mayoría de los proyectos.' },
  { num: '06', title: 'Inspección final', body: 'Validación visual y al tacto con usted. Si una mancha resiste, una segunda pasada localizada. Entrega de una ficha resumen de la prestación (útil para sus registros y controles).' },
]

const frequences = [
  { secteur: 'Hoteles, habitaciones', freq: '1 a 2 veces al año', detail: 'Después de cada temporada alta + una limpieza de primavera. Tratamiento localizado de manchas entre pasadas según las indicaciones de limpieza de habitaciones.' },
  { secteur: 'Hoteles, pasillos y vestíbulos', freq: '2 a 4 veces al año', detail: 'Tránsito intensivo, manchas de comida frecuentes. Una planificación trimestral asegura la vida útil de la moqueta.' },
  { secteur: 'Oficinas y espacios diáfanos', freq: 'Una vez al año', detail: 'Idealmente en julio-agosto en días festivos o durante los cierres. Posible en locales ocupados.' },
  { secteur: 'Restaurantes, moqueta de comedor', freq: '2 a 3 veces al año', detail: 'Vino, café, salpicaduras: la frecuencia depende del tipo de servicio. Tratamiento localizado de manchas incluido en nuestros contratos anuales.' },
  { secteur: 'Establecimientos sanitarios', freq: '2 a 4 veces al año', detail: 'La higiene es prioritaria. Trabajamos por zonas, sin cerrar el servicio. Productos compatibles con las normas RABC.' },
  { secteur: 'Residencial de alta gama', freq: 'Cada 12 a 24 meses', detail: 'Segundas residencias en la Île de Ré: una limpieza antes de la temporada alta protege su moqueta todo el año.' },
]

const faqItems = [
  { q: '¿Cuánto tarda en poder pisarse de nuevo?', a: 'Con secado activo (ventilación), la moqueta es utilizable en 2 a 4 horas. Sin ventilación, cuente con 6 a 12 horas. Siempre adaptamos nuestro trabajo a su calendario de actividad.' },
  { q: '¿La limpieza daña la moqueta?', a: 'No, siempre que se usen el equipo y los productos adecuados. Es más bien al contrario: no limpiar una moqueta profesional la daña mucho más rápido (las partículas abrasivas desgastan las fibras con cada pisada). Siempre probamos la solidez del color antes de un tratamiento completo.' },
  { q: '¿Cuál es la diferencia con una máquina de alquiler de uso doméstico?', a: 'Tres diferencias principales: (1) el control de los parámetros técnicos, 9 bar de presión máxima y 20 °C de temperatura máxima, mientras que las máquinas de alquiler domésticas calientan el agua y aplican presiones aleatorias que degradan las fibras; (2) el aclarado sistemático con agua desmineralizada (olvidado en el 90% de los alquileres de bricolaje, y el agua del grifo deja cercos de cal); (3) productos ajustados al tipo de fibra (lana, poliamida y polipropileno reaccionan de forma distinta).' },
  { q: '¿Pueden trabajar sin cerrar mi hotel o mi oficina?', a: 'Sí. En hoteles, trabajamos habitación por habitación a medida que se liberan, o planta por planta en temporada baja. En oficinas, trabajamos en locales ocupados fuera del horario de actividad. Ninguna pérdida de actividad.' },
  { q: '¿Cuánto cuesta la limpieza profesional de moqueta?', a: 'La tarifa depende de la superficie, el estado inicial, el tipo de fibra y el acceso. A modo orientativo, cuente con 4 a 8 € sin IVA/m² para una limpieza sencilla de oficina, y 6 a 12 € sin IVA/m² para moqueta premium de hotel con tratamiento de manchas en profundidad. Presupuesto gratuito tras una visita.' },
  { q: '¿Garantizan el resultado?', a: 'Garantizamos la máxima extracción posible según la edad y el estado de la moqueta. Algunas manchas muy antiguas (tinta seca desde hace 5 años, quemaduras) nunca salen al 100%. Identificamos estos casos de entrada, sin disgustos.' },
  { q: '¿Ofrecen contratos anuales?', a: 'Sí, para hoteles, restaurantes y oficinas ofrecemos contratos anuales con una planificación fija (1 a 4 visitas/año), tarifas negociadas y respuesta prioritaria en caso de urgencia (una mancha, un evento). Pídanos una propuesta a medida.' },
  { q: '¿Trabajan con alfombras a medida?', a: 'Sí, también limpiamos nuestras propias alfombras a medida y las de otros fabricantes. Las alfombras grandes pueden tratarse in situ; las alfombras delicadas (lana, seda) pueden llevarse al taller para un tratamiento específico.' },
]

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Limpieza profesional de moquetas',
  description: 'Limpieza de moquetas por inyección-extracción para hoteles, oficinas, restauración y residencial premium. La Rochelle, Île de Ré, Charente-Maritime.',
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

export default function NettoyageMoquettesPageEn() {
  return (
    <>
      <BreadcrumbLD
        items={[
          { name: 'CB Sols', url: 'https://cbsols.fr/es' },
          { name: 'Servicios', url: 'https://cbsols.fr/es/services' },
          { name: 'Limpieza de moquetas', url: 'https://cbsols.fr/es/nettoyage-moquettes' },
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
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Limpieza de moquetas</span>
            </nav>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.75rem', padding: '0.35rem 0.9rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(44, 85, 48, 0.08)', borderRadius: '999px' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'inline-block' }} />
              <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 600 }}>Servicio · Mantenimiento profesional</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0, maxWidth: '900px' }}>
              Limpieza de moquetas<br />
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>por inyección-extracción.</em>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--cream-muted)', maxWidth: '700px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Devolver la vida a una moqueta profesional en lugar de sustituirla. Un trabajo periódico preserva la fibra, recupera los colores, elimina el 95% de los alérgenos y prolonga la vida de su revestimiento entre un 30 y un 50%. Trabajamos en La Rochelle, en la Île de Ré, la Île d&apos;Oléron y toda Charente-Maritime.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/es/contact?service=nettoyage" variant="primary" size="lg">Solicitar un presupuesto</Button>
              <Button href={`tel:${company.phoneClean}`} external variant="outline" size="md">{company.phone}</Button>
            </div>
          </div>
        </section>

        <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '2rem' }}>
            {[
              { val: '×2', label: 'Vida útil de la moqueta' },
              { val: '95%', label: 'De alérgenos extraídos' },
              { val: '9 bar', label: 'Presión máx., protege las fibras' },
              { val: '20 °C', label: 'Temperatura máx., eficacia óptima' },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', lineHeight: 1, marginBottom: '0.5rem' }}>{s.val}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.08em', lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Por qué limpiar</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.15, maxWidth: '720px' }}>
              Una moqueta limpia dura el doble.
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', margin: '0 0 3rem', maxWidth: '640px', lineHeight: 1.7 }}>
              La limpieza periódica no es un lujo, es una medida de conservación. Seis razones concretas para programarla.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
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
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nuestro método</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              La inyección-extracción <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>en seis pasos.</em>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', margin: '0 0 3rem', maxWidth: '720px', lineHeight: 1.7 }}>
              Un trabajo tipo de 100 m² lleva de 3 a 4 horas, desde la inspección hasta el secado. Esto es exactamente lo que hacemos en cada pasada.
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

        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Frecuencias recomendadas</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15, maxWidth: '720px' }}>
              ¿Cada cuánto limpiar según la actividad?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {frequences.map((f, i) => (
                <div key={f.secteur} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', padding: '1.75rem 0', borderBottom: i < frequences.length - 1 ? '1px solid var(--border)' : 'none', alignItems: 'start' }}>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.4rem', fontFamily: 'var(--font-sans)' }}>{f.secteur}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{f.detail}</div>
                  </div>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700, padding: '0.5rem 1rem', border: '1px solid rgba(44, 85, 48, 0.3)', borderRadius: '999px', whiteSpace: 'nowrap', flexShrink: 0 }}>{f.freq}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inline CTA (EN) */}
        <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.02em' }}>
              ¿Una moqueta que limpiar? Cuéntenoslo.
            </h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/es/contact?service=nettoyage" variant="primary" size="md">Solicitar un presupuesto</Button>
              <Button href={`tel:${company.phoneClean}`} external variant="outline" size="md">{company.phone}</Button>
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Contrato anual</div>
                <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                  Por qué planificar el mantenimiento <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>en lugar de sufrirlo.</em>
                </h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  Para hoteles, restaurantes y oficinas, ofrecemos contratos de mantenimiento anuales con una planificación fija (1 a 4 visitas al año), tarifas negociadas y respuesta prioritaria en caso de urgencia (una mancha, un evento de cliente).
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Este enfoque es de tres a cinco veces más barato que una sustitución completa, y preserva la garantía del fabricante de su revestimiento.
                </p>
                <Button href="/es/contact?service=nettoyage-contrat" variant="primary" size="md">Solicitar una propuesta</Button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { label: 'Planificación anual fija', desc: 'Usted sabe cuándo venimos, sin nada que reclamar.' },
                  { label: 'Tarifa negociada', desc: 'Entre un 15 y un 25% por debajo de la tarifa puntual.' },
                  { label: 'Tratamiento de manchas urgente incluido', desc: '¿Una mancha tras un evento? Acudimos en 48 h.' },
                  { label: 'Certificado de prestación', desc: 'Un documento con fecha para sus auditorías de higiene y de cadena.' },
                ].map((item) => (
                  <div key={item.label} style={{ padding: '1.25rem 1.5rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)', borderLeft: '3px solid var(--terra)' }}>
                    <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.4rem', fontFamily: 'var(--font-sans)' }}>{item.label}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Preguntas frecuentes</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              FAQ, limpieza de moquetas
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

        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Ir más allá</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              ¿Sustituir en lugar de mantener?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {[
                { href: '/es/services/pose-moquette', title: 'Instalación de moqueta nueva', desc: 'EGE: selección en el showroom, instalada por nuestro equipo.' },
                { href: '/es/solutions/moquette-hotel', title: 'Moqueta para hoteles', desc: 'Soluciones específicas para habitaciones, pasillos y zonas comunes.' },
                { href: '/es/guide/entretien-moquette-professionnelle', title: 'Guía de cuidado de la moqueta', desc: 'Aspirado, manchas, frecuencias, productos: la guía completa.' },
                { href: '/es/realisations', title: 'Ver nuestros proyectos', desc: 'Hôtel La Baronnie, restaurante de 3★, Golf de la Prée.' },
              ].map((c) => (
                <Link key={c.href} href={c.href} style={{ textDecoration: 'none', display: 'block' }}>
                  <article style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem', transition: 'transform 0.2s, box-shadow 0.2s' }} className="service-card">
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: 0, lineHeight: 1.3 }}>{c.title}</h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6, flex: 1 }}>{c.desc}</p>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700, marginTop: '0.5rem' }}>Ver →</div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 100%, rgba(44, 85, 48, 0.1) 0%, transparent 60%)' }} />
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              ¿Una moqueta a la que <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>devolver la vida?</em>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Indíquenos la superficie, el uso y cuánto hace desde la última limpieza. Le respondemos en 48 h con una valoración precisa y una planificación propuesta.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/es/contact?service=nettoyage" variant="primary" size="lg">Solicitar un presupuesto</Button>
              <Button href="/es/showroom" variant="outline" size="md">Visitar el showroom</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
