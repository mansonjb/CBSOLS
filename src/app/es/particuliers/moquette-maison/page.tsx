import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Moqueta para el hogar para particulares | Instalación cuidada La Rochelle, Île de Ré',
  description: 'Instalación de moqueta de alta gama para particulares: dormitorio, suite principal, planta, vestidor. Marcas EGE, Gerflor. La misma calidad que para los hoteles de 5★. Presupuesto a medida.',
  alternates: {
    canonical: 'https://cbsols.fr/es/particuliers/moquette-maison',
    languages: { 'fr-FR': 'https://cbsols.fr/particuliers/moquette-maison', en: 'https://cbsols.fr/en/particuliers/moquette-maison', es: 'https://cbsols.fr/es/particuliers/moquette-maison', },
  },
}

const cas = [
  { title: 'Suite principal', desc: 'Confort acústico, calidez bajo los pies, estética de alta gama. Moqueta EGE de clase 33, peso superior a 1100 g/m²: la misma que en las habitaciones de hoteles premium.' },
  { title: "Habitaciones infantiles y vestidor", desc: 'Confort, seguridad (sin resbalones), mantenimiento sencillo. Colores y motivos elegidos en el showroom para armonizar con su interior.' },
  { title: 'Una planta entera', desc: 'Instalación continua en el rellano, el pasillo y los dormitorios para lograr coherencia visual. Ajuste preciso en las transiciones de las puertas y los rodapiés existentes.' },
  { title: 'Biblioteca, despacho, salón suavizado', desc: 'Moqueta acústica de alta densidad para absorber el sonido y crear un ambiente silencioso. Ideal en un salón o un espacio de lectura.' },
]

const produits = [
  { name: 'EGE Hospitality', desc: 'La referencia danesa en moqueta de hotel de alta gama. Peso de 910 a 2000 g/m², clasificación al fuego Bfl-s1, vida útil de 10 a 15 años.' },
  { name: 'EGE Highline y Reform', desc: 'Colecciones de diseño para interiores residenciales de alta gama. Colores contemporáneos, motivos personalizables.' },
]

const process = [
  { step: 'Visita e inspección', desc: 'Nos desplazamos a medir, examinar el soporte existente (parqué, baldosa, revestimiento antiguo) y hablar de su proyecto en condiciones reales.' },
  { step: 'Showroom', desc: 'Usted viene a Villedoux a elegir el material entre más de 500 muestras. Prueba de color con distintas luces, comparación de pesos.' },
  { step: 'Presupuesto detallado', desc: 'Presupuesto en 48 h: producto, m² instalados, preparación del soporte, posible desmontaje, garantía. Sin sorpresas al final.' },
  { step: 'Instalación', desc: 'Preparación del soporte (nivelación si hace falta), instalación a cargo del equipo de CB Sols. Sin subcontratación.' },
  { step: 'Entrega', desc: 'Una visita de entrega con usted, entrega de los certificados de los productos y del certificado decenal. Consejos de mantenimiento personalizados.' },
]

const faq = [
  { q: '¿Se puede instalar moqueta sobre parqué o baldosa?', a: 'Sí, con condiciones. El soporte debe estar plano (tolerancia de 2 mm bajo una regla de 2 m), limpio y estable. Sobre baldosa, casi siempre hace falta una nivelación de superficie para neutralizar las juntas. Lo evaluamos en la visita.' },
  { q: '¿La moqueta es compatible con el suelo radiante?', a: 'Sí, siempre que elija un producto certificado como compatible con suelo radiante (la resistencia térmica debe ser inferior a 0,15 m².K/W). Le indicamos las gamas adecuadas en el showroom.' },
  { q: "¿Cuál es la vida útil de una moqueta de alta gama en una vivienda particular?", a: 'La moqueta de obra (la misma que instalamos para los hoteleros) colocada en una vivienda particular dura de 12 a 20 años según el uso. Una moqueta residencial de gama baja: de 3 a 5 años. Por eso solo instalamos moqueta de obra.' },
  { q: '¿Es higiénico tener moqueta en un dormitorio?', a: 'Sí. La moqueta es hoy el único revestimiento de suelo que impide que el polvo, y por tanto los alérgenos, se dispersen en el aire. Un aspirado semanal y una limpieza por inyección-extracción cada 2 o 3 años bastan para mantener una higiene impecable.' },
  { q: '¿Cuánto cuesta instalar moqueta en un dormitorio de 15 m²?', a: 'Imposible de presupuestar sin verlo: todo depende de la marca y la gama elegidas, del soporte que haya que preparar y del acceso. A modo orientativo, cuente entre 50 y 110 €/m² instalado para una moqueta de obra de alta gama. El presupuesto es gratuito y preciso.' },
]

export default function MoquetteMaisonPageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <Link href="/es/particuliers" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>Para particulares</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Moqueta para el hogar</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Moqueta para el hogar<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>calidad de hotel.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Dormitorio, suite principal, planta entera, vestidor, biblioteca: en las viviendas particulares instalamos la misma moqueta de obra que en el hotel de 5★ de al lado. Marca EGE. Nada de entrada de gama. Ningún atajo.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=moquette-maison" variant="primary" size="md">Solicitar un presupuesto</Button>
                <Button href="/es/showroom" variant="outline" size="md">Visita al showroom</Button>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/moquette-chambre-bleu.webp" alt="Moqueta instalada en un dormitorio" style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>¿Para qué estancia?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cuatro estancias en las que la moqueta <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>lo cambia todo.</em>
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

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Productos que instalamos para particulares</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Las marcas que también instalamos <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>para los hoteleros.</em>
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
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestro enfoque, del presupuesto a la instalación</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinco pasos, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>sin sorpresas.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0' }}>
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

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Preguntas frecuentes</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Moqueta para el hogar, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas honestas.</em>
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
            ¿Listo para <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>pasarse a la moqueta?</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Un presupuesto a medida, gratuito, tras una visita. Charente-Maritime, Île de Ré, Île d&apos;Oléron.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=moquette-maison" variant="primary" size="md">Solicitar un presupuesto</Button>
            <Button href="/es/showroom" variant="outline" size="md">Visita al showroom</Button>
          </div>
          <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.6)' }}>
            O <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.phone}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
