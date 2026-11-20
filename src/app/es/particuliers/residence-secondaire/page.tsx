import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Segunda residencia Île de Ré, Oléron | Instalación de suelo llave en mano, fotos de avance',
  description: "Usted vive en París, Burdeos, Nantes: gestionamos a distancia las obras de su segunda residencia. Île de Ré, Île d'Oléron, La Rochelle. Fotos de avance, entrega llave en mano.",
  alternates: {
    canonical: 'https://cbsols.fr/es/particuliers/residence-secondaire',
    languages: { 'fr-FR': 'https://cbsols.fr/particuliers/residence-secondaire', en: 'https://cbsols.fr/en/particuliers/residence-secondaire', es: 'https://cbsols.fr/es/particuliers/residence-secondaire', },
  },
}

const cas = [
  { title: 'Île de Ré (Saint-Martin, Ars, La Couarde, Le Bois-Plage)', desc: 'Casas familiares, casas rehabilitadas, villas con vistas al mar: instalación de moqueta, vinilo para zonas húmedas, alfombras a medida. Una especialidad en la humedad costera (gestión de la sal, ventilación del soporte).' },
  { title: "Île d'Oléron y La Tremblade", desc: 'Segundas residencias y alquileres vacacionales. Instalación fuera de temporada (de octubre a marzo) para no penalizar la temporada de alquiler si usted alquila.' },
  { title: 'La Rochelle, Châtelaillon, Aytré', desc: 'Pisos junto al mar, casas de pueblo, residencias de alta gama. Respuesta rápida para siniestros o reformas urgentes.' },
  { title: 'Marismas de Charente, Brouage, Marennes', desc: 'Casas antiguas, parqués gastados, escaleras de piedra, suelos que rehacer por completo. Inspección del soporte y soluciones adaptadas al inmueble.' },
]

const livrable = [
  { num: '01', title: 'Una visita en su lugar', desc: 'Usted nos entrega las llaves, o un vecino/agente inmobiliario nos deja entrar. Medimos, fotografiamos, identificamos los condicionantes y le enviamos un informe detallado en 48 h.' },
  { num: '02', title: 'Presupuesto enviado por correo', desc: 'Un presupuesto detallado y desglosado con fotos del soporte, recomendaciones de producto, alternativas según el presupuesto. Aprobación a distancia por firma electrónica.' },
  { num: '03', title: 'Elección del material a distancia', desc: 'Muestras enviadas a su vivienda principal para su aprobación, o una cita en el showroom de Villedoux si pasa por Charente-Maritime. Es posible una videollamada sobre las gamas de color.' },
  { num: '04', title: 'Fotos de avance diarias', desc: 'Durante la obra, le enviamos fotos de principio y fin de jornada por WhatsApp o correo: preparación, soporte, primera instalación, acabados. Usted sigue la obra sin desplazarse.' },
  { num: '05', title: 'Entrega llave en mano', desc: 'Una obra limpia, escombros retirados, muebles recolocados si los habíamos movido. Usted descubre el resultado terminado en su próxima visita. Una visita de entrega juntos si es posible, si no, por videollamada.' },
  { num: '06', title: 'Posventa a distancia', desc: 'Para cualquier pregunta posterior a la instalación: una mancha que tratar, una junta que retocar, consejos de mantenimiento. Le acompañamos a distancia o volvemos al lugar durante su próxima estancia.' },
]

const garanties = [
  'Referencias verificadas de hoteleros y restauradores locales',
  'Fotos sistemáticas al principio y al final de cada jornada de trabajo',
  'Un informe escrito enviado tras cada etapa clave',
  'Seguro decenal + responsabilidad civil profesional al día, certificado facilitado con el presupuesto',
  'Pago por fases: anticipo / mitad de obra / entrega',
  'Ningún pago cobrado antes de que usted apruebe las fotos finales',
]

const faq = [
  { q: '¿Recogen las llaves en nuestra ausencia?', a: 'Sí, lo hacemos con regularidad. O bien usted nos entrega un juego de llaves en una visita anterior, o un vecino de confianza, un conserje o su agente inmobiliario nos deja entrar. Trabajamos con confianza progresiva: para un primer proyecto, preferimos un intermediario local in situ el primer día.' },
  { q: '¿Cómo apruebo la elección del material sin venir al showroom?', a: 'Tres opciones. (1) Usted viene al showroom de Villedoux en un viaje a Charente-Maritime. (2) Le enviamos muestras físicas a su vivienda principal. (3) Una videollamada sobre las gamas de color con luz natural. Para los proyectos premium, la opción 1 o 2 es siempre preferible.' },
  { q: '¿Cuál es la forma de pago más habitual?', a: 'Un anticipo al realizar el pedido (30%), un pago intermedio a mitad de obra (40%), el saldo en la entrega después de que usted apruebe las fotos finales (30%). Transferencia bancaria, cheque o pago seguro en línea. Ningún pago con tarjeta a distancia, jamás.' },
  { q: '¿Trabajan fuera de temporada para no penalizar el alquiler?', a: 'Sí, es incluso el periodo preferido para las segundas residencias en alquiler. Programamos las obras entre octubre y marzo (fuera de las vacaciones escolares si la casa se alquila en las vacaciones de otoño/Navidad/febrero). Es posible trabajar durante 2 fines de semana consecutivos si la ventana es ajustada.' },
  { q: '¿Y si quiero estar presente en parte de la obra?', a: 'Ningún problema, es incluso bienvenido para el inicio y la entrega. Muchos de nuestros clientes vienen un fin de semana al principio (para aprobar el material in situ) y otro en la entrega. El resto se gestiona a distancia.' },
  { q: '¿Con qué agencias inmobiliarias / servicios de conserjería trabajan?', a: "Nos recomiendan varias agencias y servicios de conserjería en la Île de Ré y en La Rochelle. Bajo petición, podemos ponerle directamente en contacto con un cliente anterior que vive fuera de la región." },
]

export default function ResidenceSecondairePageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <Link href="/es/particuliers" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>Para particulares</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Segunda residencia</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span style={{ display: 'inline-block', padding: '0.3rem 0.875rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(44, 85, 48, 0.08)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', borderRadius: '999px', marginBottom: '1.25rem' }}>
                Especialidad Île de Ré, Oléron, La Rochelle
              </span>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Su segunda residencia,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>gestionada en su ausencia.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Usted vive en París, Nantes, Burdeos, Lyon: su casa en la Île de Ré, en Oléron o en La Rochelle necesita un suelo nuevo. Gestionamos el proyecto de la A a la Z, con fotos de avance periódicas y entrega llave en mano. Usted descubre el resultado en su próxima visita.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=residence-secondaire" variant="primary" size="md">Solicitar un presupuesto</Button>
                <Button href="/es/showroom" variant="outline" size="md">Visita al showroom</Button>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/particuliers/photo-4.jpg" alt="Segunda residencia con parqué y terrazo" style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Dónde trabajamos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Toda la costa <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Charente.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {cas.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em', lineHeight: 1.35 }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro enfoque llave en mano</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Seis pasos <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>sin desplazarse.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {livrable.map((p) => (
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
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Garantías para clientes a distancia</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.03em' }}>
            Confiarnos su hogar <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>con total tranquilidad.</em>
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {garanties.map((g, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start', fontSize: '0.95rem', color: 'var(--dark-2)', lineHeight: 1.65, padding: '0.5rem 0', borderBottom: i < garanties.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <span style={{ color: 'var(--terra)', fontWeight: 700, flexShrink: 0, fontSize: '1.1rem' }}>✓</span>
                {g}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Preguntas frecuentes de los clientes a distancia</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Sus preguntas reales, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>nuestras respuestas honestas.</em>
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
            Su casa le espera, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>déjelo en nuestras manos.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Un presupuesto gratuito tras una visita in situ. Île de Ré, Île d&apos;Oléron, La Rochelle, toda Charente-Maritime.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=residence-secondaire" variant="primary" size="md">Solicitar un presupuesto</Button>
            <Button href="/es/showroom" variant="outline" size="md">Visita al showroom</Button>
          </div>
          <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.6)' }}>
            O llame a Valentin: <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.phone}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
