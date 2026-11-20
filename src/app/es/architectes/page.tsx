import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { ClientLogoCard } from '@/components/ClientLogoCard'
import { architectePartners } from '@/data/clients'

export const metadata: Metadata = {
  title: 'Arquitectos y prescriptores | CB Sols, su socio en revestimientos de suelo',
  description: 'CB Sols acompaña a arquitectos, decoradores y jefes de obra en Charente-Maritime. Fichas técnicas, gamas de color, seguimiento de proyecto específico. Presupuesto para prescriptores en 24 h.',
  alternates: {
    canonical: 'https://cbsols.fr/es/architectes',
    languages: { 'fr-FR': 'https://cbsols.fr/architectes', en: 'https://cbsols.fr/en/architectes', es: 'https://cbsols.fr/es/architectes', },
  },
}

const atouts = [
  { num: '01', title: 'Fichas técnicas completas', desc: 'Clasificaciones al fuego, acústica, resistencia química, formatos de instalación: todos los documentos que necesitan sus expedientes de obra terminada y sus pliegos de condiciones, disponibles bajo petición.' },
  { num: '02', title: 'Showroom con cita previa para prescriptores', desc: 'Una visita privada al showroom de Villedoux. Más de 500 muestras de EGE, Gerflor y objectflor para llevar. Asesoramiento técnico directamente de Valentin Prévoteau.' },
  { num: '03', title: 'Presupuesto en 24 h (frente a las 48 h habituales)', desc: 'Los expedientes de arquitectos se tratan de forma prioritaria. Envíe sus planos DXF/PDF y su pliego de condiciones: una respuesta valorada al día siguiente.' },
  { num: '04', title: 'Obras sin interrumpir la actividad', desc: 'CB Sols organiza las obras en locales ocupados, por fases y rotación para respetar el calendario de su cliente. Cero retrasos de entrega por nuestra parte.' },
  { num: '05', title: 'Seguimiento de proyecto específico', desc: 'Un único interlocutor desde el presupuesto hasta la entrega. Fotos de avance, partes de instalación, reservas resueltas dentro de los plazos contractuales.' },
  { num: '06', title: 'Garantía decenal + certificados', desc: 'Certificado decenal al día, seguro de responsabilidad civil profesional, certificados de conformidad de los productos: un expediente completo para su documentación de obra terminada en la entrega.' },
]

const process = [
  { step: 'Briefing', desc: 'Envíe sus planos, su programa y sus requisitos técnicos. CB Sols evalúa la viabilidad y le vuelve a llamar en un plazo de 4 h.' },
  { step: 'Propuesta', desc: 'Una selección de productos ajustada a su pliego de condiciones (clasificaciones, estética, presupuesto del cliente) con alternativas.' },
  { step: 'Presupuesto de prescripción', desc: 'Un presupuesto detallado y desglosado, compatible con su pliego de condiciones, con las fichas técnicas y las referencias normativas.' },
  { step: 'Obra', desc: 'Instalación a cargo del equipo de CB Sols, sin subcontratación. Calendario respetado, fotos de avance si lo desea.' },
  { step: 'Obra terminada', desc: 'Entrega del expediente completo de obra terminada: productos instalados, fichas técnicas, certificados, garantías.' },
]

const secteurs = [
  { label: 'Hoteles y turismo', desc: 'Îles de Ré y de Oléron, La Rochelle, Royan: hoteles de 2 a 5 estrellas, residencias, campings' },
  { label: 'Oficinas y comercios', desc: 'Espacios diáfanos, salas de reuniones, recepción: losetas acústicas, LVT, moqueta de obra' },
  { label: 'Clínicas y consultas', desc: 'Moquetas bacteriostáticas, vinilo homogéneo certificado, accesibilidad para personas con movilidad reducida' },
  { label: 'Restaurantes y restauración', desc: 'Cocinas profesionales R11 soldadas, comedores acústicos, espacios mixtos' },
  { label: 'Organismos y edificios públicos', desc: 'Licitaciones, clasificaciones al fuego, accesibilidad: expedientes conformes' },
]

const conseils = [
  { num: '01', title: 'Lectura del programa', desc: 'Hotel de 4★, restaurante gastronómico, consulta médica, oficina diáfana: cada tipología tiene sus exigencias normativas (Bfl-s1, R10/R11, acústica). Leemos su programa y detectamos desde el principio las obligaciones que orientan las elecciones.' },
  { num: '02', title: 'Selección de materiales', desc: 'Tres propuestas ordenadas por uso, estética y presupuesto, con sus límites indicados. Nunca imponemos una única referencia: su cliente debe poder decidir con pleno conocimiento de causa.' },
  { num: '03', title: 'Acústica y confort', desc: 'Cuantificamos el impacto acústico esperado (reducción del ruido en dB según la moqueta) y el confort térmico. Útil para defender la moqueta frente a un suelo duro en las decisiones del cliente.' },
  { num: '04', title: 'Durabilidad y mantenimiento', desc: 'Coste total de propiedad a 10 años (instalación + mantenimiento periódico + sustitución), no solo el precio de compra. Presentamos las ventajas e inconvenientes entre durabilidad y presupuesto inicial.' },
  { num: '05', title: 'Compatibilidad del soporte', desc: 'Una visita técnica antes del expediente de licitación para comprobar la planeidad, la humedad residual y el tipo de soporte. Identificamos los trabajos previos necesarios (nivelación, imprimación, base amortiguadora).' },
  { num: '06', title: 'Fases de la obra', desc: 'Instalación en locales ocupados, etapas por zonas, horas de menor afluencia: proponemos una planificación por fases compatible con su calendario de explotación y el de su cliente.' },
]

export default function ArchitectesPageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 30%, rgba(44, 85, 48, 0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Prescriptores</span>
          </div>
          <span style={{ display: 'inline-block', padding: '0.3rem 0.875rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(44, 85, 48, 0.08)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', borderRadius: '999px', marginBottom: '1.5rem' }}>
            Arquitectos · Decoradores · Jefes de obra
          </span>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
            CB Sols,{' '}
            <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>su socio en revestimientos de suelo.</em>
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '620px', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Usted prescribe los materiales, CB Sols los instala. Presupuesto en 24 h, fichas técnicas completas, obras sin interrumpir la actividad. Un único interlocutor técnico desde su briefing hasta el expediente de obra terminada.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button href="/es/contact?from=architectes" variant="primary" size="md">Contactar con CB Sols</Button>
            <Button href="/es/showroom" variant="outline" size="md">Visitar el showroom</Button>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Lo que CB Sols aporta a los prescriptores</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Un socio <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que le facilita el trabajo</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.5rem' }}>
            {atouts.map((a) => (
              <div key={a.num} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>{a.num}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>{a.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-alt)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Proceso para prescriptores</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Del briefing a la obra terminada
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0' }}>
            {process.map((p, i) => (
              <div key={i} style={{ padding: '1.75rem', borderRight: i < process.length - 1 ? '1px solid var(--border)' : 'none', position: 'relative' }}>
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

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Sectores en los que trabajamos</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {secteurs.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '1.375rem 0', borderBottom: '1px solid var(--border)' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid var(--border-strong)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px' }}>
                  <span style={{ fontSize: '0.62rem', fontWeight: 700, color: 'var(--muted)' }}>{i + 1}</span>
                </div>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.25rem' }}>{s.label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem', maxWidth: '760px' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Asesoramiento ajustado al proyecto</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              Le ayudamos a <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>tomar las decisiones correctas.</em>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', lineHeight: 1.75 }}>
              Prescribir un revestimiento es equilibrar acústica, durabilidad, estética, normativa, presupuesto y plazos. Nuestro papel como socio técnico: descifrar esas disyuntivas con usted y proponer la solución que se sostiene en todos los ejes, incluidos los que el cliente aún no ve.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
            {conseils.map((c) => (
              <div key={c.num} style={{ padding: '1.75rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)', borderRadius: '10px', borderLeft: '3px solid var(--terra)' }}>
                <div style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontSize: '1.25rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)', lineHeight: 1, marginBottom: '0.75rem' }}>{c.num}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.6rem', lineHeight: 1.3, letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--cream-muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'start', padding: '2.5rem 0 0', borderTop: '1px solid var(--border)' }}>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Entregables habituales</div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.01em' }}>
                Lo que recibe en la fase de asesoramiento
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {[
                  'Una nota de posicionamiento: de 2 a 3 referencias argumentadas por espacio',
                  'Fichas técnicas del fabricante (datos de seguridad, clasificaciones al fuego, certificaciones)',
                  'Muestras físicas enviadas al estudio o al showroom',
                  'Una estimación presupuestaria orientativa por m² instalado',
                  'Un dictamen sobre la compatibilidad con el soporte existente',
                  'Recomendaciones realistas de fases y plazos',
                ].map((it) => (
                  <li key={it} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.85rem', color: 'var(--dark-2)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--terra)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ padding: '2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', borderLeft: '3px solid var(--terra)' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Cómo empieza</div>
              <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {[
                  { t: 'Briefing por correo o teléfono', d: 'Programa, planos (DXF, PDF), requisitos del cliente, presupuesto objetivo.' },
                  { t: 'Análisis en 4 horas laborables', d: 'Recibe nuestras primeras preguntas técnicas y la confirmación de que el proyecto entra en nuestro ámbito.' },
                  { t: 'Nota de asesoramiento en 5 días', d: 'Una selección argumentada + alternativas. Usted mantiene el control del pliego de condiciones final.' },
                  { t: 'Presupuesto valorado bajo petición', d: 'Una vez que el cliente ha decidido, lo valoramos en detalle (compatible con el pliego de condiciones).' },
                ].map((s, i) => (
                  <li key={s.t} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                    <span style={{ width: 26, height: 26, borderRadius: '50%', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.7rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      {i + 1}
                    </span>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.2rem' }}>{s.t}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{s.d}</div>
                    </div>
                  </li>
                ))}
              </ol>
              <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)' }}>
                <Button href="/es/contact?from=architectes-conseil" variant="primary" size="md">
                  Iniciar un briefing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-inv)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem' }}>Nos prescriben</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--text-on-dark)', margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>
              Arquitectos y estudios colaboradores
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-on-dark-muted)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
              Varios estudios de arquitectura de interiores de Charente-Maritime nos confían sus proyectos con regularidad. A continuación, una selección.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem', justifyContent: 'center' }}>
            {architectePartners.map((p) => (
              <ClientLogoCard key={p.alt} client={p} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Programa de colaboración</div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
                Una relación <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>a largo plazo.</em>
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.8 }}>
                Trabajamos con un pequeño círculo de arquitectos y oficinas técnicas de Charente-Maritime. Nuestro objetivo: convertirnos en su socio habitual en revestimientos de suelo, no en un subcontratista puntual.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { title: 'Condiciones de precio negociadas', desc: 'Márgenes reducidos para sus proyectos profesionales recurrentes. Condiciones acordadas de forma personalizada.' },
                { title: 'Condiciones de pago adaptadas', desc: 'Facturación a 30 o 45 días según el volumen. Compatibles con sus ciclos de cliente.' },
                { title: 'Showroom específico con cita previa', desc: 'Franjas privadas para sus reuniones con clientes. Podemos recibir a sus posibles clientes directamente.' },
              ].map((item) => (
                <div key={item.title} style={{ padding: '1.25rem 1.5rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)', borderLeft: '3px solid var(--terra)' }}>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.4rem', fontFamily: 'var(--font-sans)' }}>{item.title}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Contacto para prescriptores</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Hablemos de su proyecto
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
            <strong style={{ color: 'var(--dark-2)' }}>Valentin Prévoteau</strong>, {company.phone}
          </p>
          <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginBottom: '2.5rem' }}>
            Respuesta en 4 h los días laborables. Envíe los planos y el pliego de condiciones a{' '}
            <a href={`mailto:${company.email}`} style={{ color: 'var(--terra)', textDecoration: 'none' }}>{company.email}</a>
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="/es/contact?from=architectes" variant="primary" size="md">Enviar un briefing</Button>
            <Button href={`tel:${company.phoneClean}`} external variant="outline" size="md">{company.phone}</Button>
          </div>
        </div>
      </section>

    </div>
  )
}
