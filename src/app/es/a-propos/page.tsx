import type { Metadata } from 'next'
import Link from 'next/link'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Nuestra historia | CB Sols, artesano instalador de suelos en La Rochelle desde 1998',
  description:
    'Conozca a Valentin Prévoteau, propietario de CB Sols (fundada en 1998). Entró como aprendiz en 2008 y tomó las riendas en 2023. Seguro decenal, más de 500 proyectos en Charente-Maritime.',
  alternates: {
    canonical: 'https://cbsols.fr/es/a-propos',
    languages: { 'fr-FR': 'https://cbsols.fr/a-propos', en: 'https://cbsols.fr/en/a-propos', es: 'https://cbsols.fr/es/a-propos', },
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Valentin Prévoteau',
  jobTitle: 'Artesano e instalador de revestimientos de suelo',
  description: 'Propietario de CB Sols desde 2023 (empresa fundada en 1998), Valentin Prévoteau está especializado en la instalación de moqueta profesional, suelos de vinilo y alfombras a medida en Charente-Maritime.',
  worksFor: {
    '@type': 'LocalBusiness',
    name: company.legalName,
    url: 'https://cbsols.fr',
    telephone: company.phoneClean,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      postalCode: company.address.zip,
      addressCountry: 'FR',
    },
  },
  knowsAbout: [
    'Moqueta profesional',
    'Suelo de vinilo heterogéneo',
    'LVT (lamas de vinilo de lujo)',
    'Alfombras a medida',
    'Revestimiento de suelo para hoteles',
    'Revestimiento de suelo para edificios públicos',
    'Moqueta acústica',
    'Suelo de vinilo para cocinas profesionales',
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'Seguro de responsabilidad civil decenal' },
  ],
}

export default function AProposPageEn() {
  const credentials = [
    { label: 'Garantía decenal', desc: 'Seguro de responsabilidad civil decenal en vigor', icon: '✓' },
    { label: 'Más de 28 años de experiencia', desc: 'Fundada en 1998, más de 500 proyectos realizados en Charente-Maritime', icon: '✓' },
  ]

  const stats = [
    { value: 'más de 28', label: 'años de experiencia', sub: 'desde 1998' },
    { value: '500+', label: 'proyectos realizados', sub: 'particulares y profesionales' },
    { value: '49', label: 'municipios cubiertos', sub: 'Charente-Maritime' },
    { value: '4.9/5', label: 'satisfacción de los clientes', sub: '41 reseñas verificadas' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <div style={{ paddingTop: '72px' }}>

        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(44, 85, 48, 0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nuestra historia</div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              Más de 28 años al servicio<br />
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>de sus suelos.</em>
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '600px', lineHeight: 1.75, margin: 0 }}>
              CB Sols nació en 1998 en Villedoux, de la pasión por los materiales nobles y el trabajo bien hecho. En más de 28 años, hemos instalado suelos en cientos de espacios por toda Charente-Maritime, desde habitaciones de hotel hasta el aula magna de la universidad, desde viviendas familiares hasta el restaurante con estrella Michelin.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: '3.5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--terra)', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--dark)', marginTop: '0.5rem' }}>{s.label}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '0.2rem' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Valentin */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'start' }}>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>El artesano detrás de cada proyecto</div>
                <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
                  Valentin Prévoteau
                </h2>
                <blockquote style={{ margin: '0 0 1.5rem', padding: '1.5rem', borderLeft: '3px solid var(--terra)', backgroundColor: 'rgba(44, 85, 48, 0.05)' }}>
                  <p style={{ fontSize: '1.1rem', color: 'var(--dark)', lineHeight: 1.8, margin: 0, fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>
                    &ldquo;Un suelo es la base de cualquier espacio. Bien elegido y bien instalado, dura décadas y transforma un lugar.&rdquo;
                  </p>
                </blockquote>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  Valentin se incorporó a CB Sols en 2008 como aprendiz, aprendió el oficio sobre el terreno, proyecto tras proyecto, y después asumió la dirección de la empresa en 2023. Formado en la instalación sobre hormigón, baldosa y soportes de madera existentes, se maneja con la misma soltura con la moqueta de obra de los grandes hoteles que con el vinilo de cocina para organismos públicos o las alfombras a medida de los espacios de recepción.
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  Lo que distingue a CB Sols es esta presencia personal: cuando usted llama al <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra)', textDecoration: 'none', fontWeight: 600 }}>{company.phone}</a>, es Valentin quien responde. Cuando empieza un proyecto, es él quien está allí. Sin intermediarios, sin subcontratistas anónimos.
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.8 }}>
                  Esta cercanía con el cliente, este conocimiento íntimo del terreno y de los materiales, es lo que distingue a CB Sols de las grandes cadenas nacionales, y por lo que hoteleros, gestores de campings y jefes de obra vuelven proyecto tras proyecto.
                </p>
              </div>

              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Cronología</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {[
                    { year: '1998', label: 'Se funda la empresa', desc: 'Nace CB Sols, con sus primeros proyectos de revestimiento de suelo en Charente-Maritime.' },
                    { year: '2003', label: 'Primeros contratos profesionales', desc: 'Primeros contratos con hoteleros y profesionales en la Île de Ré y en la zona de La Rochelle.' },
                    { year: '2008', label: 'Llega Valentin Prévoteau', desc: 'Valentin se incorpora a la empresa como aprendiz y aprende el oficio directamente en los proyectos.' },
                    { year: '2012', label: 'Colaboraciones oficiales', desc: 'Acuerdos de distribución con marcas de referencia como objectflor, EGE y Gerflor: acceso a las gamas de obra y al servicio posventa del fabricante.' },
                    { year: '2013', label: 'Nuevo taller en Villedoux', desc: 'Se instala un nuevo taller en Villedoux para almacenar materiales, muestras y herramientas de instalación.' },
                    { year: '2023', label: 'Relevo a cargo de Valentin Prévoteau', desc: 'Tras quince años en la empresa, Valentin asume la dirección de CB Sols y se convierte en su director.' },
                    { year: '2024', label: 'Showroom en Villedoux', desc: 'Abre un showroom específico en Villedoux: más de 500 muestras que ver con cita previa.' },
                    { year: 'Hoy', label: 'Más de 500 proyectos', desc: "La Rochelle, Île de Ré, Île d'Oléron, Rochefort, Saintes y toda Charente-Maritime." },
                  ].map((item, i, arr) => (
                    <div key={item.year} style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: '1.25rem', padding: '1.5rem 0', borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--terra)', fontWeight: 700, paddingTop: '0.1rem' }}>{item.year}</div>
                      <div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--dark)', fontWeight: 600, marginBottom: '0.3rem' }}>{item.label}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.65 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Craft commitment */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nuestro compromiso</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              La confianza <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>se gana.</em>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--dark-2)', lineHeight: 1.85, maxWidth: '760px', margin: '0 0 2rem' }}>
              La artesanía es una elección. La elección de tomarse el tiempo de hacerlo bien, de volver sobre un detalle hasta que quede perfecto, de rechazar el compromiso cuando no hace falta. En CB Sols, la excelencia no es un eslogan: es la actitud de cada día. Medimos tres veces para cortar una sola, trazamos un motivo al milímetro, rehacemos una unión que no es perfecta, porque es lo que esperaríamos en nuestra propia casa.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--dark-2)', lineHeight: 1.85, maxWidth: '760px', margin: '0 0 3rem' }}>
              Debemos ese cuidado a los clientes que confían en nosotros, hoteleros, restauradores, arquitectos, particulares, y se lo debemos también a los artesanos que llevan veintisiete años ejerciendo este oficio con nosotros. Un suelo bien instalado es invisible. Eso es exactamente el trabajo bien hecho.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {credentials.map((c) => (
                <div key={c.label} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'rgba(44, 85, 48, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--terra)', fontWeight: 700, fontSize: '0.8rem' }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.3rem' }}>{c.label}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.6 }}>{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Google reviews */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem' }}>Reseñas verificadas de clientes</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              Lo que dicen nuestros clientes en Google
            </h2>
            <a
              href="https://share.google/86MXB40I3QuKofiI4"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.75rem', border: '1.5px solid var(--terra)', color: 'var(--terra)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 700, borderRadius: '999px' }}
            >
              <span style={{ fontSize: '1rem', fontWeight: 800 }}>4.9</span>
              <span style={{ display: 'inline-flex', gap: 1 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBC04" stroke="none">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                  </svg>
                ))}
              </span>
              <span>Lea las 41 reseñas en Google →</span>
            </a>
          </div>
        </section>

        {/* Brands */}
        <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nuestras marcas colaboradoras</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {company.brands.map((b) => (
                <span key={b} style={{ padding: '0.625rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--dark-2)', letterSpacing: '0.06em', fontWeight: 500 }}>{b}</span>
              ))}
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '1.5rem', lineHeight: 1.65, maxWidth: '560px' }}>
              Estas colaboraciones dan a CB Sols acceso a las gamas profesionales completas, a las garantías del fabricante y al soporte técnico: ventajas directas para sus proyectos.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Su proyecto</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
              Hablemos de su proyecto
            </h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.1rem', color: 'var(--muted)', margin: '0 0 2.5rem' }}>
              Valentin responde en persona, presupuesto gratuito en 48 h
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact" variant="primary" size="md">Solicitar un presupuesto</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-block', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'none', borderRadius: '999px' }}>
                {company.phone}
              </a>
              <Link href="/es/showroom" style={{ display: 'inline-block', padding: '0.875rem 2rem', border: '1.5px solid var(--border)', color: 'var(--muted)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '999px' }}>
                Visitar el showroom
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
