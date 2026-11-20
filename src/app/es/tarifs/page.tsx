import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Tarifas | Por qué no publicamos una lista de precios',
  description: 'En CB Sols cada proyecto es a medida: superficie, material, soporte, acceso, condicionantes locales. En lugar de una lista engañosa, ofrecemos un presupuesto gratuito y real en 48 h.',
  alternates: {
    canonical: 'https://cbsols.fr/es/tarifs',
    languages: { 'fr-FR': 'https://cbsols.fr/tarifs', en: 'https://cbsols.fr/en/tarifs', es: 'https://cbsols.fr/es/tarifs', },
  },
}

const reasons = [
  { title: 'Cada proyecto tiene sus condicionantes', body: 'El vinilo en la cocina de un restaurante (rodapiés en media caña, termosoldadura, norma EN 13845) no tiene nada que ver con un LVT instalado en una oficina. Aplicar una única horquilla sería engañoso.' },
  { title: 'El soporte determina el 30% del precio', body: 'Una nivelación con fibras sobre un parqué antiguo, un soporte húmedo, una solera deteriorada: estas preparaciones invisibles pueden duplicar la partida de instalación. Imposible de presupuestar sin ver el soporte.' },
  { title: 'Los materiales tienen 20 niveles de gama', body: 'Moqueta de oficina de entrada de gama: 30 €/m² instalada. Moqueta EGE Contract a medida para una suite de hotel de 5★: 150 €/m² instalada. El mismo servicio, 7 veces la diferencia. Una horquilla media no tendría sentido.' },
  { title: 'La superficie cambia el precio por m²', body: '50 m² en un piso urbano frente a 800 m² en el vestíbulo de un hotel: la tarifa por metro cuadrado puede variar un 30%. El desplazamiento, la logística y la movilización del equipo son proporcionales al tamaño del proyecto.' },
  { title: 'El acceso influye en los plazos', body: 'Una planta alta sin ascensor, una entrega peatonal en el centro, el horario de una tienda, la instalación en un hotel ocupado: estos condicionantes añaden horas y equipo. Imposible de presupuestar en teoría.' },
  { title: 'Preferimos la honestidad al reclamo', body: 'Muchas webs muestran «desde 15 €/m²» para atraer. Una vez en el lugar, el presupuesto final se triplica. Rechazamos ese mecanismo. Un presupuesto de CB Sols es siempre el precio real, sin sorpresas.' },
]

const steps = [
  { num: '01', title: 'Primer contacto', body: 'Teléfono, WhatsApp o formulario. Usted describe su espacio, su uso, sus expectativas.' },
  { num: '02', title: 'Visita técnica gratuita', body: 'Nos desplazamos al lugar para medir, inspeccionar el soporte, identificar los condicionantes. Gratuita y sin compromiso.' },
  { num: '03', title: 'Selección en el showroom', body: 'Usted viene a Villedoux para elegir los materiales entre más de 500 muestras. Le orientamos según su uso y su presupuesto.' },
  { num: '04', title: 'Presupuesto detallado en 48 h', body: 'Mediciones, suministro, preparación del soporte, instalación, mano de obra, IVA: todo legible línea a línea. Ningún importe a tanto alzado opaco.' },
]

const garanties = [
  { title: 'Desplazamiento y presupuesto gratuitos', desc: "En cualquier punto de Charente-Maritime, la Île de Ré y la Île d'Oléron. Sin compromiso." },
  { title: 'Precio firme y definitivo', desc: 'La cifra del presupuesto es la cifra de la factura. Ningún suplemento sorpresa a mitad de la obra.' },
  { title: 'Desglose legible', desc: 'Suministro, instalación, preparación del soporte, IVA: cada partida está desglosada. Usted sabe exactamente qué está pagando.' },
  { title: 'Pago al final', desc: 'Un anticipo del 30%, el saldo en la entrega tras la aprobación.' },
  { title: 'Garantía decenal', desc: 'Todas nuestras instalaciones están cubiertas. Certificados facilitados bajo petición.' },
]

const postes = [
  { num: '01', title: 'El desmontaje', body: 'Varía según el tipo de revestimiento y su peso. Un suelo laminado es un residuo pesado, más costoso de desechar por m² que la moqueta. Retirada al vertedero incluida, certificado de reciclaje disponible.' },
  { num: '02', title: 'La barrera antihumedad', body: 'Obligatoria en plantas bajas sin lámina de polietileno bajo la solera, cámara sanitaria o sótano ventilado. Su presencia o ausencia debe indicarse de forma explícita; sin ella, la garantía decenal queda comprometida.' },
  { num: '03', title: 'La nivelación', body: 'Obligatoria en casi todos los proyectos de reforma. P3 estándar para soportes de hormigón, con fibras (más cara) sobre soportes de madera o para grandes espesores. Es lo que marca la diferencia entre un suelo que dura 15 años y uno que se marca al cabo de 6 meses.' },
  { num: '04', title: 'El suministro', body: 'El precio varía según el tipo (vinilo en lámina/loseta/lama, losetas de moqueta o rollo), la marca y la cantidad, cuanto mayor, más barato por m². Recibimos el material, comprobamos cantidades y colores (lotes del fabricante) y cortamos en el taller.' },
  { num: '05', title: 'La instalación', body: 'Varía según el revestimiento, la cantidad, el tipo de instalación (recta, en espiga o con incrustaciones curvas), las dificultades de acceso y el aparcamiento. Una instalación sencilla y una técnica son un mundo aparte en cuanto a tiempo invertido.' },
  { num: '06', title: 'Accesorios y accesibilidad', body: 'Mamperlanes y perfiles de transición según el material elegido: latón (alta gama), aluminio (estándar), acero inoxidable cepillado. Para edificios públicos, accesibilidad para personas con movilidad reducida con botones táctiles obligatorios.' },
]

export default function TarifsPageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(44, 85, 48, 0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '920px', margin: '0 auto', position: 'relative' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Tarifas</div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Por qué no publicamos<br />
            <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>una lista de precios.</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--cream-muted)', lineHeight: 1.7, maxWidth: '680px', marginBottom: '2rem' }}>
            En CB Sols, cada proyecto se trata de forma <strong style={{ color: 'var(--dark)' }}>individual</strong>, tanto para un particular como para un profesional. Mostrar una horquilla genérica sería impreciso en el mejor de los casos y engañoso en el peor. Preferimos tomarnos el tiempo de entender su proyecto antes de presupuestarlo.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.7, maxWidth: '680px', marginBottom: '1.25rem' }}>
            Nuestro compromiso: un <strong style={{ color: 'var(--dark)' }}>presupuesto detallado y gratuito en 48 h</strong>, sin costes ocultos ni revisión posterior a la firma.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--cream-muted)', lineHeight: 1.7, maxWidth: '680px', marginBottom: '2.5rem', fontStyle: 'italic' }}>
            Para ayudarle a <strong style={{ color: 'var(--dark)', fontStyle: 'normal' }}>presupuestar por adelantado</strong>, nuestras <Link href="/es/guide" style={{ color: 'var(--terra)', textDecoration: 'underline' }}>guías con precios</Link> ofrecen las horquillas del mercado partida por partida (instalación, nivelación, suministro). Son referencias orientativas, no nuestra lista de precios: su precio real sale del presupuesto.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button href="/es/contact" variant="primary" size="lg">Pedir mi presupuesto</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'none', borderRadius: '999px', fontWeight: 500 }}>
              {company.phone}
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nuestro enfoque</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15, maxWidth: '720px' }}>
            Seis razones por las que un presupuesto a medida es más justo.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {reasons.map((r, i) => (
              <div key={r.title} style={{ padding: '2rem', backgroundColor: 'var(--bg)', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)' }}>
                <div style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontSize: '1.5rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)', lineHeight: 1, marginBottom: '1rem' }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', lineHeight: 1.3 }}>{r.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nuestra forma de presupuestar</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
            Cómo presupuestamos un proyecto.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem' }}>
            {steps.map((step) => (
              <div key={step.num} style={{ borderTop: '2px solid var(--terra)', paddingTop: '1.5rem' }}>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--terra)', fontWeight: 700, marginBottom: '0.75rem' }}>{step.num}</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.75rem', fontFamily: 'var(--font-sans)' }}>{step.title}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.7 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Lo que tiene garantizado</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
            Nuestros compromisos en materia de tarifas.
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {garanties.map((g) => (
              <li key={g.title} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '1.25rem 1.5rem', backgroundColor: 'var(--bg)', border: '1px solid var(--border)' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--terra)', marginTop: '0.5rem', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.3rem' }}>{g.title}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{g.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Las 6 partidas de un presupuesto serio</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
            ¿Qué debe contener un <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>presupuesto de instalación de suelo?</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', maxWidth: '720px', lineHeight: 1.7, marginBottom: '3rem' }}>
            Nuestros presupuestos siguen las pautas del <strong style={{ color: 'var(--dark)' }}>DTU 53.12</strong>, la referencia nacional francesa de buenas prácticas en la instalación de revestimientos de suelo encolados. Cada partida está desglosada para que pueda comparar con criterio y entender adónde va su dinero.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {postes.map((p) => (
              <div key={p.num} style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)', borderRadius: '8px' }}>
                <div style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontSize: '1.4rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)', lineHeight: 1, marginBottom: '0.75rem' }}>{p.num}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.6rem', lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--cream-muted)', lineHeight: 1.7, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem', padding: '2rem 2.25rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)', borderRadius: '10px', display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'center' }} className="no-subcontract-card">
            <div>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem', fontWeight: 700 }}>El factor humano</div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.6rem', letterSpacing: '-0.01em' }}>
                Un equipo de instaladores cualificados. Sin subcontratistas.
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--cream-muted)', lineHeight: 1.7, margin: 0, maxWidth: '640px' }}>
                Cada proyecto de CB Sols lo instala nuestro propio equipo, supervisado por Valentin Prévoteau. Esta continuidad garantiza el cumplimiento del pliego de condiciones original, de los plazos, y la rápida resolución de las reservas. Una empresa que subcontrata puede mostrar un precio más bajo; la diferencia paga al subcontratista y el margen del intermediario.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href="/es/guide/comprendre-un-devis-pose-de-sol" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.95rem 1.75rem', border: '1.5px solid var(--terra)', color: 'var(--terra)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 700, borderRadius: '999px' }}>
              Leer la guía completa: cómo descifrar un presupuesto →
            </Link>
          </div>
        </div>
      </section>

      <style>{`@media (max-width: 720px) { .no-subcontract-card { grid-template-columns: 1fr !important; } }`}</style>

      <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 100%, rgba(44, 85, 48, 0.1) 0%, transparent 60%)' }} />
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
            Hablemos de <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>su proyecto.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Descríbanos su espacio. Le respondemos en 48 h con un presupuesto preciso, sin sorpresas.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href={`/es/contact?from=tarifs`} variant="primary" size="lg">Solicitar un presupuesto</Button>
            <Button href="/es/showroom" variant="outline" size="md">Visitar el showroom</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
