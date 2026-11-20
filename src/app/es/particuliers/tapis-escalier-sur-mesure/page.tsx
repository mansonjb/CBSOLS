import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Alfombras y escaleras a medida | Instalación artesanal La Rochelle, Île de Ré',
  description: 'Instalación de alfombras a medida para escaleras de madera o piedra, entradas, salones. Confección e instalación artesanal, marcas EGE y Romus (perfiles). Un saber hacer que practicamos desde hace más de 28 años para hoteles con encanto y casas familiares.',
  alternates: {
    canonical: 'https://cbsols.fr/es/particuliers/tapis-escalier-sur-mesure',
    languages: { 'fr-FR': 'https://cbsols.fr/particuliers/tapis-escalier-sur-mesure', en: 'https://cbsols.fr/en/particuliers/tapis-escalier-sur-mesure', es: 'https://cbsols.fr/es/particuliers/tapis-escalier-sur-mesure', },
  },
}

const cas = [
  { title: 'Escalera de madera', desc: 'Una alfombra a medida cortada e instalada peldaño a peldaño, una contrahuella tensada, perfiles Romus de latón o acero inoxidable para el mamperlán. Protege la madera, amortigua el ruido, aporta carácter.' },
  { title: 'Escalera de piedra u hormigón', desc: 'Instalación encolada con contrahuellas vestidas. Ideal en una segunda residencia o casa antigua donde la escalera es fría y ruidosa. Un acabado de hotel con encanto.' },
  { title: 'Entrada y recibidor', desc: 'Una alfombra a medida cortada a las dimensiones exactas de su entrada, con el borde sobrehilado o cenefa tejida. Es posible un motivo a medida en la colección EGE Custom.' },
  { title: 'Salón, biblioteca, dormitorio', desc: 'Una gran alfombra a medida para delimitar un espacio, suavizar un salón, crear una zona de lectura. Corte, acabado y entrega a domicilio.' },
]

const produits = [
  { name: 'EGE Axminster Custom', desc: 'La gama tejida de alta gama de la danesa EGE: motivos a medida, hasta 24 colores, calidad de hotel de lujo. Un plazo de 6 a 10 semanas, pero el resultado es incomparable.' },
  { name: 'EGE Highline / Cantana', desc: 'Gamas tufted de prestigio para cortar en alfombras a medida. Más rápidas de producir (3-5 semanas), una gama de colores muy amplia.' },
  { name: 'Perfiles Romus', desc: 'Mamperlanes de latón, acero inoxidable o aluminio. Elección del acabado (pulido, cepillado, envejecido) en el showroom para armonizar con el estilo de su hogar.' },
]

const process = [
  { step: 'Visita', desc: 'Medición precisa de la escalera (cada peldaño, contrahuella, rellano intermedio), del hueco de escalera, y una conversación sobre el estilo buscado.' },
  { step: 'Showroom', desc: 'Selección del material y de los perfiles en condiciones reales. Comparación de varias gamas y colores con luz natural.' },
  { step: 'Presupuesto', desc: 'Un presupuesto detallado: material por m², perfiles, confección a medida, instalación. El plazo de fabricación se indica al realizar el pedido.' },
  { step: 'Confección', desc: 'Corte y confección en fábrica o en el taller (según la gama). Un plazo de 3 a 10 semanas según el producto elegido.' },
  { step: 'Instalación', desc: 'Instalación peldaño a peldaño con el adhesivo adecuado, tensado preciso de las contrahuellas, fijación de los perfiles.' },
]

const faq = [
  { q: '¿Cuál es el plazo para una alfombra de escalera a medida?', a: 'Cuente de 4 a 12 semanas entre el pedido y la instalación, según la gama: 3-5 semanas para la tufted EGE Highline, 6-10 semanas para la Axminster Custom, más 1 o 2 días de instalación. Indicamos un plazo preciso en el presupuesto.' },
  { q: '¿Cuánto cuesta una alfombra de escalera a medida?', a: 'Muy variable según la gama y el número de peldaños. A modo orientativo: una escalera recta estándar de 14 peldaños en EGE Highline parte de unos 1.800-2.500 €, perfiles e instalación incluidos. Una escalera de caracol en Axminster Custom sube rápidamente a 4.000-6.000 €. Un presupuesto preciso tras una visita.' },
  { q: '¿Se puede instalar una alfombra sobre una escalera antigua (de madera, piedra)?', a: 'Sí, casi siempre. El soporte debe ser estable y estar limpio. En una escalera de piedra hace falta una imprimación de adherencia. En madera antigua, se comprueba la fijeza de los peldaños. En todos los casos, lo evaluamos en la visita.' },
  { q: '¿La alfombra daña la madera de la escalera?', a: 'No, al contrario: la protege del desgaste y los golpes. En un desmontaje posterior, el adhesivo se retira limpiamente (sobre madera barnizada o pintada). Sobre madera sin tratar, pueden quedar restos residuales. Siempre lo advertimos.' },
  { q: '¿Por qué pocos artesanos hacen este trabajo?', a: 'Porque es exigente: medición precisa, confección a medida, instalación meticulosa peldaño a peldaño. Es un saber hacer que se está perdiendo en las cadenas nacionales. Lo practicamos desde hace más de 28 años, principalmente para hoteles y casas familiares.' },
]

export default function TapisEscalierPageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <Link href="/es/particuliers" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>Para particulares</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Alfombras y escaleras a medida</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Alfombras y<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>escaleras a medida.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Vestir una escalera de madera o piedra, crear una entrada que destaque, suavizar un salón: un saber hacer artesanal poco común que practicamos desde hace más de 28 años para los hoteles con encanto y las casas familiares de la región.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=tapis-escalier" variant="primary" size="md">Solicitar un presupuesto</Button>
                <Button href="/es/showroom" variant="outline" size="md">Visita al showroom</Button>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/tapis-hotel-baronnie.webp" alt="Alfombra a medida para una escalera" style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>¿Para qué proyecto?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cuatro lugares donde una alfombra a medida <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>marca la diferencia.</em>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Lo que confeccionamos e instalamos</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Materiales y perfiles <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de calidad.</em>
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
            Alfombras a medida, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas honestas.</em>
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
            ¿Una escalera digna de <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>su hogar?</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Un presupuesto a medida, gratuito, tras una visita. Charente-Maritime, Île de Ré, Île d&apos;Oléron.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=tapis-escalier" variant="primary" size="md">Solicitar un presupuesto</Button>
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
