import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Suelo de vinilo para el hogar para particulares | Baño, cocina, lavadero',
  description: 'Suelo de vinilo de alta gama para el hogar para particulares: baño, cocina, lavadero, sótano, garaje acondicionado. 100% impermeable, marcas Gerflor y objectflor. Presupuesto a medida.',
  alternates: {
    canonical: 'https://cbsols.fr/es/particuliers/sol-pvc-maison',
    languages: { 'fr-FR': 'https://cbsols.fr/particuliers/sol-pvc-maison', en: 'https://cbsols.fr/en/particuliers/sol-pvc-maison', es: 'https://cbsols.fr/es/particuliers/sol-pvc-maison', },
  },
}

const cas = [
  { title: 'Baño y ducha', desc: 'Vinilo en lámina de diseño o lamas de vinilo: 100% impermeable, sin juntas que se ennegrezcan, cálido para los pies descalzos, antideslizante R10 o R11 según el uso.' },
  { title: 'Cocina abierta o cerrada', desc: 'Imitación madera, hormigón pulido o piedra, en lamas LVT de alta resistencia. Máxima higiene, limpieza fácil, vida útil de 15-20 años.' },
  { title: 'Lavadero, despensa, sótano', desc: 'Resiste la humedad, los productos de limpieza, la vibración de la lavadora. Una vez instalado, se olvida de él.' },
  { title: 'Garaje acondicionado, taller doméstico', desc: 'Vinilo industrial resistente a las ruedas, las manchas de aceite, los cambios de temperatura. Ideal para un gimnasio en casa, un taller o un espacio de bricolaje.' },
]

const produits = [
  { name: 'Gerflor Taralay Premium', desc: 'Vinilo en lámina termosoldado, clasificación U4P3, antideslizante R10. La solución para zonas húmedas y zonas de mucho tránsito.' },
  { name: 'objectflor LVT (lamas y losetas)', desc: 'Imitaciones de madera, piedra y hormigón de muy alta calidad. Instalación suelta o encolada según el proyecto.' },
  { name: 'Gerflor Insight y Creation', desc: 'Lamas LVT premium para salones. Un aspecto de parqué sin las limitaciones de la madera (humedad, mantenimiento).' },
]

const process = [
  { step: 'Visita', desc: 'Una evaluación del soporte actual (baldosa, solera de hormigón, linóleo antiguo), la toma de medidas, la identificación de los condicionantes.' },
  { step: 'Showroom', desc: 'La elección del producto en el showroom: lamas colocadas en plano, comparación de vetas, la prueba del tacto con los pies descalzos.' },
  { step: 'Presupuesto', desc: 'Presupuesto en 48 h, nivelación incluida. Un desglose claro: producto, preparación del soporte, instalación, acabados.' },
  { step: 'Instalación', desc: 'Preparación del soporte, nivelación P3 o con fibras según sea necesario, encolado o instalación suelta, termosoldadura para las zonas húmedas.' },
  { step: 'Entrega', desc: 'Una visita con usted, una revisión de las soldaduras y los acabados, entrega de los certificados de los productos y consejos de mantenimiento.' },
]

const faq = [
  { q: '¿El vinilo es un producto de alta gama?', a: "El vinilo de entrada de gama es mediocre, es el que se encuentra en las tiendas de bricolaje. Las gamas profesionales que instalamos (Gerflor Taralay, objectflor LVT) están a otro nivel: de 5 a 8 mm de grosor, una capa de uso de 0,55 a 0,8 mm, una vida útil de 15 a 28 años. A la vista y al tacto, no tiene nada que ver con el linóleo de gama baja." },
  { q: '¿Se puede instalar vinilo sobre baldosa existente?', a: 'Sí, en la mayoría de los casos. La baldosa debe estar plana, limpia y estable. Casi siempre hace falta una nivelación de superficie para neutralizar las juntas (de lo contrario, se marcan a través del vinilo). Lo evaluamos en la visita.' },
  { q: '¿El vinilo en un baño es realmente impermeable?', a: 'Sí, siempre que se use vinilo en lámina (rollos) con juntas termosoldadas. Las lamas LVT no son adecuadas para una ducha de obra. Le orientamos hacia el producto adecuado para su configuración.' },
  { q: '¿Compatibilidad con el suelo radiante?', a: 'Sí, la mayoría de los vinilos profesionales son compatibles con el suelo radiante (baja resistencia térmica). Hay que comprobarlo en la ficha del producto: solo instalamos productos validados.' },
  { q: '¿Cuánto cuesta el vinilo para un baño de 8 m²?', a: 'A modo orientativo, cuente entre 60 y 130 €/m² instalado para un vinilo de alta gama para zonas húmedas (producto + nivelación + instalación + soldadura). El presupuesto preciso es gratuito tras una visita.' },
]

export default function SolPvcMaisonPageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <Link href="/es/particuliers" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>Para particulares</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Suelo de vinilo para el hogar</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Suelo de vinilo para el hogar<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>100% impermeable.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Baño, cocina, lavadero, sótano, garaje acondicionado: instalamos las gamas Gerflor y objectflor que también colocamos en las cocinas profesionales. Impermeable, bonito, duradero. Nada de vinilo de descuento, ninguna instalación apresurada.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/es/contact?from=sol-pvc-maison" variant="primary" size="md">Solicitar un presupuesto</Button>
                <Button href="/es/showroom" variant="outline" size="md">Visita al showroom</Button>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/particuliers/photo-2.jpg" alt="Suelo de vinilo imitación madera en una cocina abierta" style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>¿Para qué estancia?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cuatro estancias en las que el vinilo <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>sencillamente funciona.</em>
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
            Las marcas que también instalamos <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>en cocinas profesionales.</em>
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
            Vinilo para el hogar, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>respuestas honestas.</em>
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
            ¿Un suelo impermeable <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>que dure?</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Un presupuesto a medida, gratuito, tras una visita. Charente-Maritime, Île de Ré, Île d&apos;Oléron.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/es/contact?from=sol-pvc-maison" variant="primary" size="md">Solicitar un presupuesto</Button>
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
