import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Particulares | CB Sols, instalador de suelos de alta gama La Rochelle, Île de Ré',
  description: "El artesano que instala la moqueta de los hoteles de 5★ de la región también trabaja en viviendas particulares: vivienda principal, segunda residencia, escalera a medida, reforma estancia por estancia. Presupuesto a medida, nunca una lista de precios por m².",
  alternates: {
    canonical: 'https://cbsols.fr/es/particuliers',
    languages: { 'fr-FR': 'https://cbsols.fr/particuliers', en: 'https://cbsols.fr/en/particuliers', es: 'https://cbsols.fr/es/particuliers', },
  },
}

const filtres = [
  { title: 'Sin lista de precios por m²', desc: 'Cada proyecto es distinto: superficie, soporte, condicionantes, acceso. Nos desplazamos, miramos, presupuestamos. El presupuesto es gratuito, detallado y sin compromiso.' },
  { title: 'El tipo de proyectos que aceptamos', desc: 'Suite principal, habitación infantil, biblioteca, vestidor, una planta entera, una escalera de madera o piedra a medida, vivienda principal o segunda residencia, una casa antigua que reformar.' },
]

const cas = [
  { img: '/images/moquette-chambre.webp', title: 'Vivienda principal', desc: 'Moqueta en los dormitorios, vinilo en las zonas húmedas, una escalera a medida: su hogar merece el mismo rigor de instalación que los hoteles que equipamos.', href: '/es/particuliers/moquette-maison' },
  { img: '/images/particuliers/photo-1.jpg', title: "Segunda residencia (Île de Ré, Oléron)", desc: 'Usted vive en París, Burdeos, Nantes: gestionamos el proyecto en su ausencia, con fotos de avance y entrega llave en mano. Una especialidad en las casas de la Île de Ré.', href: '/es/particuliers/residence-secondaire' },
  { img: '/images/particuliers/photo-2.jpg', title: 'Reforma estancia por estancia', desc: 'Un suelo que rehacer en la cocina, el baño, un dormitorio, un vestidor: trabajamos en proyectos concretos sin imponer una reforma completa.', href: '/es/particuliers/sol-pvc-maison' },
  { img: '/images/tapis-hotel.webp', title: 'Proyecto puntual: escalera, entrada, salón', desc: 'Una alfombra a medida para vestir una escalera de madera o piedra, una entrada que realzar, un salón que suavizar: un trabajo muy solicitado, pocos artesanos capaces de hacerlo de forma limpia.', href: '/es/particuliers/tapis-escalier-sur-mesure' },
]

const pourquoi = [
  { num: '01', title: 'Valentin responde', desc: 'Cuando usted llama al ' + company.phone + ', es el artesano quien responde. No una centralita, no un comercial: la persona que instalará su suelo.' },
  { num: '02', title: 'Sin subcontratación', desc: 'El equipo de CB Sols instala cada proyecto por sí mismo. Ningún intermediario, ningún equipo desconocido en su casa.' },
  { num: '03', title: 'Showroom en Villedoux', desc: 'Más de 500 muestras que ver con cita previa. Usted toca, compara y elige en condiciones reales antes de comprometerse.' },
  { num: '04', title: 'Más de 28 años, marcas de referencia', desc: 'Distribuidor autorizado de EGE, Gerflor, objectflor, Bostik y Romus desde 2012. El mismo saber hacer técnico que para los proyectos hoteleros de alta gama.' },
  { num: '05', title: 'Presupuesto a medida, gratuito', desc: 'Una visita a su domicilio, una evaluación del soporte, consejos sobre los productos adecuados a su uso y su presupuesto. Presupuesto detallado en 48 h.' },
  { num: '06', title: 'Garantía decenal', desc: 'Certificado decenal al día, seguro de responsabilidad civil profesional, certificados de conformidad de los productos entregados al final del proyecto. Total tranquilidad.' },
]

const services = [
  { href: '/es/particuliers/moquette-maison', label: 'Moqueta para el hogar', desc: 'Dormitorio, suite principal, planta, vestidor: calidad de hotel en casa.' },
  { href: '/es/particuliers/sol-pvc-maison', label: 'Vinilo para zonas húmedas', desc: 'Baño, cocina, lavadero, sótano: 100% impermeable.' },
  { href: '/es/particuliers/tapis-escalier-sur-mesure', label: 'Alfombras y escaleras a medida', desc: 'Vista una escalera de madera o piedra, cree una entrada, suavice un salón.' },
  { href: '/es/particuliers/residence-secondaire', label: 'Segunda residencia', desc: 'Île de Ré, Oléron, La Rochelle: proyecto gestionado a distancia, fotos de avance.' },
]

const faq = [
  { q: '¿Qué tipo de proyectos aceptan?', a: "Una habitación infantil, una vivienda principal o una segunda residencia, una biblioteca, una suite principal, una planta entera, una escalera a medida, una casa antigua que reformar, un proyecto en el que el material importa de verdad: ese es nuestro terreno." },
  { q: '¿Se desplazan a la Île de Ré?', a: "Sí, es incluso una de nuestras zonas principales. Equipamos a hoteleros, restauradores, casas de huéspedes y segundas residencias por toda la isla. El desplazamiento está incluido para los proyectos en la Île de Ré, la Île d'Oléron, La Rochelle y toda Charente-Maritime." },
  { q: '¿Hacen proyectos pequeños (una sola estancia)?', a: "Sí. Una suite principal, una habitación infantil, una habitación de invitados, un vestidor, una escalera, una entrada, un baño, una biblioteca o un salón: trabajamos en proyectos concretos sin imponer una reforma completa." },
  { q: '¿Cuánto tiempo pasa entre el presupuesto y la instalación?', a: "Cuente con 2 a 6 semanas según la disponibilidad del material elegido (gamas EGE, Gerflor, objectflor pedidas por proyecto) y nuestra agenda. Para urgencias (un siniestro, una mudanza prevista), siempre hacemos todo lo posible por acelerar las cosas." },
  { q: '¿Por qué no muestran un precio por m²?', a: "Porque el mismo producto instalado sobre un soporte firme o sobre una baldosa que necesita nivelación, en una estancia cuadrada o en una en forma de L, en La Rochelle o en la Île de Ré, no cuesta lo mismo. Mostrar un precio por m² estandarizado sería deshonesto o inexacto. Preferimos ir a ver y presupuestarlo con criterio." },
  { q: '¿Trabajan en una casa ocupada?', a: "Sí, trabajamos en locales ocupados, por fases si hace falta (estancia por estancia, planta por planta). Protegemos los muebles, movemos lo que se puede mover y dejamos una obra limpia al final de la jornada." },
]

export default function ParticuliersPageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 30%, rgba(44, 85, 48, 0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Para particulares</span>
          </div>
          <span style={{ display: 'inline-block', padding: '0.3rem 0.875rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(44, 85, 48, 0.08)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', borderRadius: '999px', marginBottom: '1.5rem' }}>
            Para proyectos particulares
          </span>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
            El nivel de los hoteles de 5★<br />
            <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>en su casa.</em>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', maxWidth: '680px', lineHeight: 1.75, marginBottom: '2rem' }}>
            El mismo artesano que instala la moqueta de los hoteles y restaurantes con estrella de la región puede instalar la suya. Con una condición: que el proyecto tenga sentido. Un material noble, un presupuesto a medida, una visita a su domicilio antes de cualquier valoración.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--dark-2)', maxWidth: '680px', lineHeight: 1.75, marginBottom: '2.5rem', fontStyle: 'italic' }}>
            Sin lista de precios por m², sin precio prefabricado: vamos a ver, entendemos su proyecto y lo presupuestamos en consecuencia.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button href="/es/contact?from=particuliers" variant="primary" size="md">Solicitar un presupuesto a medida</Button>
            <Button href="/es/showroom" variant="outline" size="md">Reservar una visita al showroom</Button>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro posicionamiento</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Dos principios <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que marcan el marco.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {filtres.map((f, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)', borderLeft: '3px solid var(--terra)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', lineHeight: 1.3, letterSpacing: '-0.01em' }}>{f.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Casos de uso</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            ¿Para qué <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>tipo de proyecto?</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {cas.map((c) => (
              <Link key={c.title} href={c.href} style={{ textDecoration: 'none', display: 'block' }}>
                <div className="service-card" style={{ border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', backgroundColor: 'var(--bg-card)', height: '100%', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s, box-shadow 0.2s' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.title} style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }} />
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', flexGrow: 1 }}>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', margin: 0, letterSpacing: '-0.01em' }}>{c.title}</h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0, flexGrow: 1 }}>{c.desc}</p>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', marginTop: '0.5rem' }}>Explorar →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Por qué un artesano y no una cadena</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Seis <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>diferencias concretas.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.25rem' }}>
            {pourquoi.map((p) => (
              <div key={p.num} style={{ padding: '1.75rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)', borderRadius: '10px', borderLeft: '3px solid var(--terra)' }}>
                <div style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontSize: '1.25rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)', lineHeight: 1, marginBottom: '0.75rem' }}>{p.num}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.6rem', letterSpacing: '-0.01em' }}>{p.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Servicios específicos para particulares</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cuatro servicios <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>para su hogar.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {services.map((s, i) => (
              <Link key={s.href} href={s.href} style={{ textDecoration: 'none' }}>
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', padding: '1.5rem 0', borderBottom: i < services.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--border-strong)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--terra)' }}>{i + 1}</span>
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.25rem' }}>{s.label}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</div>
                  </div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', flexShrink: 0 }}>→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Preguntas frecuentes de los particulares</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Sus preguntas, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>nuestras respuestas honestas.</em>
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

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Su proyecto merece <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>una visita de verdad.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Un presupuesto a medida, gratuito y sin compromiso. Una visita a domicilio en La Rochelle, la Île de Ré, la Île d&apos;Oléron y toda Charente-Maritime.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=particuliers" variant="primary" size="md">Solicitar un presupuesto</Button>
            <Button href="/es/showroom" variant="outline" size="md">Reservar una visita al showroom</Button>
          </div>
          <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.6)' }}>
            O llame a Valentin directamente: <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.phone}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
