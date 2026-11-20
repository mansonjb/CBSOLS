import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { esServices } from './services/_data'
import { esSectors } from './secteurs/_data'
import { esCities } from './_lib/cities'
import { company } from '@/data/company'
import { HeroSlider } from '@/components/HeroSlider'
import { Button } from '@/components/Button'
import { ClientLogoCard } from '@/components/ClientLogoCard'
import { VideoTestimonialCompact } from '@/components/VideoTestimonialCompact'
import { getVimeoThumbnail } from '@/lib/vimeo'
import { clientLogos } from '@/data/clients'

export const metadata: Metadata = {
  title: 'CB Sols | Moqueta, PVC y alfombras a medida, La Rochelle',
  description:
    'Moqueta, suelo de PVC, alfombras a medida: CB Sols acompaña a particulares, hoteles y empresas de Charente-Maritime desde hace más de 28 años. Presupuesto gratis en 48 h.',
  alternates: {
    canonical: 'https://cbsols.fr/es',
    languages: { 'fr-FR': 'https://cbsols.fr', en: 'https://cbsols.fr/en', es: 'https://cbsols.fr/es', },
  },
}

const projects = [
  { title: 'Hôtel La Baronnie', type: 'Alfombra a medida', sector: 'Hostelería', surface: '20 m²', img: '/images/tapis-hotel-real.webp' },
  { title: 'Restaurante 3★', type: 'Moqueta de alta gama', sector: 'Restauración con estrella', surface: '220 m²', img: '/images/restaurant-etoile-real.webp' },
  { title: 'Golf de la Prée', type: 'Moqueta + PVC en vestuarios', sector: 'Deporte y ocio', surface: '600 m²', img: '/images/golf-real.webp' },
  { title: 'Bistrot Grande Terrasse', type: 'Moqueta acústica', sector: 'Restaurante', surface: '280 m²', img: '/images/bistrot-restaurant-real.webp' },
  { title: 'Oficinas en Charente-Maritime', type: 'Losetas de alta resistencia', sector: 'Comercial', surface: '170 m²', img: '/images/moquette-bureau-real.webp' },
  { title: 'Cocina profesional', type: 'PVC soldado en caliente', sector: 'Profesional y restauración', surface: '80 m²', img: '/images/cuisine-pro-real.webp' },
]

const brandPartners = [
  { name: 'EGE', src: '/images/brands/ege.webp' },
  { name: 'Gerflor', src: '/images/brands/gerflor.svg' },
  { name: 'objectflor', src: '/images/brands/objectflor.svg' },
  { name: 'Bostik', src: '/images/brands/bostik.svg' },
  { name: 'Romus', src: '/images/brands/romus.svg' },
]

const garanties = [
  { title: 'Artesano certificado', desc: 'Más de 500 proyectos realizados desde 1998 en Charente-Maritime.', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9,12 11,14 15,10"/></svg> },
  { title: 'Más de 28 años de experiencia', desc: "Fundada en 1998. Más de 500 proyectos en La Rochelle, Île de Ré y toda Charente-Maritime.", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg> },
  { title: 'Presupuesto gratis en 48 h', desc: 'Desplazamiento y mediciones incluidos. Precio transparente, sin compromiso.', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg> },
  { title: 'Trabajo en locales ocupados', desc: 'Soluciones para profesionales en activo: colocación por rotación, por zonas o en horas de menor actividad.', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
]

const processSteps = [
  { num: '01', title: 'Contacto y cita', desc: 'Llámenos o rellene el formulario. Respuesta en 24 h, cita concertada.' },
  { num: '02', title: 'Visita y presupuesto', desc: 'Desplazamiento gratuito por toda Charente-Maritime. Mediciones precisas y presupuesto en 48 h.' },
  { num: '03', title: 'Elección del material', desc: 'Showroom en Villedoux con más de 500 muestras EGE, Gerflor, objectflor, Bostik y Romus. Muestras para llevar a casa y confirmar.' },
  { num: '04', title: 'Colocación y entrega', desc: 'Solo artesanos de CB Sols, sin subcontratación. Garantía decenal estructural.' },
]

const homeFaqs = [
  { q: '¿El presupuesto es realmente gratis, incluso para una superficie pequeña?', a: 'Sí, sin superficie mínima y sin compromiso. CB Sols se desplaza de forma gratuita por toda Charente-Maritime para medir, evaluar el estado del soporte y entregar un presupuesto detallado en 48 h. Tanto para 15 m² como para 1500 m².' },
  { q: '¿Se puede colocar moqueta sin cerrar el hotel o la oficina?', a: 'Sí. CB Sols trabaja por rotación en los hoteles (habitación por habitación según se liberan) y en locales ocupados en las oficinas. La gran mayoría de los proyectos profesionales se realizan sin interrumpir un solo día de actividad.' },
  { q: '¿Cuál es la diferencia entre moqueta de uso intensivo y residencial?', a: 'La moqueta de uso intensivo está clasificada 32-33 según la norma EN 1307, certificada Bfl-s1 (fuego) y ensayada para cientos de miles de pisadas. Es la única opción legal en un hotel, oficinas o un edificio de pública concurrencia. CB Sols solo coloca moqueta de uso intensivo en los proyectos profesionales.' },
  { q: '¿CB Sols subcontrata la colocación?', a: 'No. La colocación la realiza siempre el equipo de CB Sols, sin subcontratación. Valentin Prévoteau supervisa personalmente los proyectos. La garantía de un resultado impecable y un único interlocutor, del presupuesto a la entrega.' },
  { q: "¿CB Sols trabaja en Île de Ré y en Île d'Oléron?", a: 'Sí, con regularidad. CB Sols ha equipado hoteles, campings y residencias en ambas islas desde hace más de 28 años. Las limitaciones insulares (logística, humedad, estacionalidad) se integran por completo en nuestros presupuestos y plazos.' },
]

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default async function HomeEn() {
  const paprecThumb = await getVimeoThumbnail('1201721934')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }} />
      {/* HERO */}
      <section style={{ paddingTop: '72px', backgroundColor: 'var(--bg)', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', minHeight: 'calc(100vh - 72px)', paddingTop: '3rem', paddingBottom: '4rem' }} className="hero-grid">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1.125rem', border: '1px solid var(--border-mid)', borderRadius: '999px', marginBottom: '2.5rem' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--dark-2)', fontWeight: 500 }}>Más de 500 proyectos realizados</span>
              </div>
              <h1 style={{ fontSize: 'clamp(3rem, 5.5vw, 6.5rem)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: '0 0 2rem', fontWeight: 800, color: 'var(--dark)' }}>
                <span style={{ fontFamily: 'var(--font-sans, system-ui, sans-serif)', fontWeight: 800, display: 'block' }}>El suelo que</span>
                <span style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontWeight: 300, fontStyle: 'italic', display: 'block' }}>define</span>
                <span style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontWeight: 300, fontStyle: 'italic', color: 'var(--terra)', display: 'block' }}>su espacio.</span>
              </h1>
              <p style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)', color: 'var(--dark-2)', lineHeight: 1.7, maxWidth: '440px', margin: '0 0 2.5rem' }}>
                Moqueta, suelo de PVC, alfombras a medida: CB Sols acompaña a particulares, hoteles y empresas de Charente-Maritime desde hace <strong>más de 28 años</strong>.
              </p>
              <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
                <Link href="/es/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', padding: '0.875rem 2rem', backgroundColor: 'var(--btn-inv-bg)', color: 'var(--btn-inv-text)', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, borderRadius: '999px' }}>
                  Presupuesto gratis
                  <span style={{ width: '26px', height: '26px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </Link>
                <Button href="/es/realisations" variant="outline" size="md">Proyectos</Button>
              </div>
              <div style={{ display: 'flex', gap: '0', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', flexWrap: 'wrap' }}>
                {[{ v: 'más de 28', l: 'años de experiencia' }, { v: '500+', l: 'proyectos realizados' }, { v: '49', l: 'localidades cubiertas' }, { v: '4,9/5', l: 'valoración en Google' }].map((s) => (
                  <div key={s.v} style={{ flex: '1 1 auto', minWidth: '100px', paddingRight: '2rem' }}>
                    <div style={{ fontFamily: 'var(--font-sans, system-ui)', fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.v}</div>
                    <div style={{ fontSize: '0.62rem', color: 'var(--muted)', letterSpacing: '0.06em', marginTop: '0.4rem' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative' }} className="hero-photo-col">
              <div style={{ borderRadius: '24px', overflow: 'hidden', aspectRatio: '3/4', position: 'relative', maxHeight: '680px' }}>
                <HeroSlider />
              </div>
              <div style={{ position: 'absolute', top: '1.5rem', right: '-1rem', backgroundColor: 'var(--bg-inv)', color: 'var(--text-on-dark-muted)', borderRadius: '999px', padding: '0.5rem 1rem', fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                La Rochelle · Île de Ré · 17
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ backgroundColor: 'var(--bg-inv)', padding: '0.75rem 0', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="marquee-track" style={{ display: 'flex', gap: '0', whiteSpace: 'nowrap' }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ display: 'inline-flex', gap: '2.5rem', paddingRight: '2.5rem', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-on-dark-faint)', flexShrink: 0 }}>
              {['Moqueta', 'Suelo de PVC', 'Alfombras a medida', 'La Rochelle', 'Île de Ré', 'Charente-Maritime', 'Colocación profesional', 'Presupuesto en 48 h', 'Artesano certificado', 'Showroom en Villedoux'].map((t) => (
                <span key={t}>{t} <span style={{ color: 'var(--terra)' }}>·</span></span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* GUARANTEES */}
      <section style={{ backgroundColor: 'var(--bg-inv)', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }} className="garanties-grid">
          {garanties.map((g, i) => (
            <div key={g.title} style={{ padding: '2rem 2.5rem', borderRight: i < garanties.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }} className="garantie-item">
              <div style={{ color: 'var(--terra)', marginBottom: '1.25rem' }}>{g.icon}</div>
              <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.05rem', fontWeight: 400, color: 'var(--text-on-dark)', marginBottom: '0.625rem' }}>{g.title}</div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-on-dark-faint)', lineHeight: 1.65, margin: 0 }}>{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BRANDS */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-alt)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <div style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.6rem', fontWeight: 700 }}>Marcas elegidas con cuidado</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
              Cinco socios elegidos por su experiencia en todo tipo de usos.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {brandPartners.map((b) => (
              <div key={b.name} className="brand-logo" aria-label={b.name}>
                <Image src={b.src} alt={b.name} width={110} height={28} sizes="110px" style={{ height: '28px', width: 'auto', maxWidth: '110px', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-inv)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', textAlign: 'center' }}>Referencias</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--text-on-dark)', margin: '0 0 2.5rem', textAlign: 'center', letterSpacing: '-0.02em' }}>Confían en nosotros</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {clientLogos.map((c) => (
              <ClientLogoCard key={c.alt} client={c} />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section style={{ padding: '8rem 0 6rem', backgroundColor: 'var(--bg)', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto 3rem', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 500 }}>Portfolio</p>
            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 800, color: 'var(--dark)', lineHeight: 0.95, letterSpacing: '-0.04em', margin: 0 }}>
              Nuestros<br /><em style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>proyectos</em>
            </h2>
          </div>
          <Button href="/es/realisations" variant="outline" size="md">Ver todos →</Button>
        </div>
        <div style={{ display: 'flex', gap: '1.25rem', overflowX: 'auto', paddingLeft: 'max(2rem, calc((100vw - 1320px) / 2))', paddingRight: '2rem', paddingBottom: '1rem', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', msOverflowStyle: 'none', scrollbarWidth: 'none' }} className="projects-scroll">
          {projects.map((p) => (
            <Link key={p.title} href="/es/realisations" style={{ textDecoration: 'none', flexShrink: 0, width: 'clamp(260px, 28vw, 360px)', scrollSnapAlign: 'start', display: 'block' }}>
              <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', aspectRatio: '3/4', backgroundColor: 'var(--bg-alt)' }}>
                <Image src={p.img} alt={p.title} fill style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} sizes="360px" className="project-img" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,12,10,0.85) 0%, rgba(13,12,10,0.1) 55%, transparent 100%)' }} />
                <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem' }}>
                  <span style={{ fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', backgroundColor: 'rgba(255,255,255,0.92)', padding: '0.35rem 0.875rem', borderRadius: '999px', color: '#1A1916', fontWeight: 600 }}>
                    {p.sector}
                  </span>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem 1.75rem' }}>
                  <div style={{ fontSize: '0.65rem', color: 'var(--terra-on-dark)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.4rem', fontWeight: 700 }}>{p.surface} · {p.type}</div>
                  <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.25rem', color: 'var(--text-on-dark)', fontWeight: 500, lineHeight: 1.2 }}>{p.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--bg-alt)', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 500 }}>Experiencia</p>
              <h2 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 800, color: 'var(--dark)', lineHeight: 0.95, letterSpacing: '-0.04em', margin: 0 }}>
                Nuestras<br /><em style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontStyle: 'italic', fontWeight: 300 }}>especialidades</em>
              </h2>
            </div>
            <Button href="/es/services" variant="outline" size="md">Todos los servicios →</Button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {esServices.map((service, i) => (
              <Link key={service.slug} href={`/es/services/${service.slug}`} style={{ textDecoration: 'none' }}>
                <div className="service-card" style={{ backgroundColor: 'var(--bg-card)', padding: '2.25rem', borderRadius: '16px', height: '100%', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 1px 3px rgba(26,25,22,0.06)' }}>
                  <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '3rem', color: 'var(--terra)', opacity: 0.15, fontWeight: 700, lineHeight: 1, marginBottom: '1.5rem' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.15rem', fontWeight: 400, color: 'var(--dark)', marginBottom: '0.875rem', lineHeight: 1.3 }}>{service.name}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.75rem' }}>{service.description}</p>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 600 }}>Explorar →</div>
                </div>
              </Link>
            ))}
            {[
              { href: '/es/solutions/moquette-bureau', name: 'Moqueta para oficinas', description: 'Moqueta acústica para oficinas y espacios diáfanos: confort sonoro, una imagen cuidada, tráfico intensivo controlado.' },
              { href: '/es/moquette-bateau', name: 'Moqueta náutica', description: 'Colocación y fabricación de moqueta náutica a medida para barcos, yates y gabarras. Corte y acabados precisos.' },
            ].map((service, j) => (
              <Link key={service.href} href={service.href} style={{ textDecoration: 'none' }}>
                <div className="service-card" style={{ backgroundColor: 'var(--bg-card)', padding: '2.25rem', borderRadius: '16px', height: '100%', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 1px 3px rgba(26,25,22,0.06)' }}>
                  <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '3rem', color: 'var(--terra)', opacity: 0.15, fontWeight: 700, lineHeight: 1, marginBottom: '1.5rem' }}>
                    {String(esServices.length + j + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.15rem', fontWeight: 400, color: 'var(--dark)', marginBottom: '0.875rem', lineHeight: 1.3 }}>{service.name}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.75rem' }}>{service.description}</p>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 600 }}>Explorar →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section style={{ padding: '0', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', backgroundColor: 'var(--bg-inv)' }} className="materials-grid">
          {[
            { img: '/images/moquette-bureau.webp', label: 'Moqueta', caption: 'Lana y sintética: hoteles, oficinas, residencial', href: '/es/services/pose-moquette', brand: 'EGE' },
            { img: '/images/cuisine-pro.webp', label: 'PVC y LVT', caption: 'Lamas, losetas, lámina soldada: zonas húmedas incluidas', href: '/es/services/sol-pvc-lames-dalles', brand: 'Gerflor · objectflor' },
            { img: '/images/motif-tapis-hotel.webp', label: 'Alfombras a medida', caption: 'Motivo exclusivo, forma libre, colores personalizados', href: '/es/services/tapis-sur-mesure', brand: 'EGE · Taller a medida' },
          ].map((mat) => (
            <Link key={mat.label} href={mat.href} style={{ textDecoration: 'none', display: 'block', position: 'relative', overflow: 'hidden', aspectRatio: '4/5' }} className="material-tile">
              <Image src={mat.img} alt={mat.label} fill style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }} sizes="33vw" className="project-img" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,25,22,0.92) 0%, rgba(26,25,22,0.15) 55%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem 2rem 2.5rem' }}>
                <div style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem', fontWeight: 600 }}>{mat.brand}</div>
                <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.5rem', fontWeight: 400, color: 'var(--text-on-dark)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>{mat.label}</h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-on-dark-muted)', margin: 0, lineHeight: 1.5 }}>{mat.caption}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* METHOD */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--bg)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 800, color: 'var(--dark)', lineHeight: 0.95, letterSpacing: '-0.04em', margin: 0 }}>
              Nuestro<br /><em style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>método</em>
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '380px', margin: 0 }}>
              Del primer contacto a la entrega del proyecto: acompañamiento completo, sin subcontratación.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', position: 'relative' }} className="process-grid">
            <div style={{ position: 'absolute', top: '44px', left: '44px', right: '44px', height: '1px', backgroundColor: 'var(--border-mid)' }} className="process-line" />
            {processSteps.map((step) => (
              <div key={step.num} style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: '88px', height: '88px', borderRadius: '50%', border: '1.5px solid var(--terra)', backgroundColor: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.4rem', fontWeight: 400, color: 'var(--terra)' }}>{step.num}</span>
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.05rem', fontWeight: 400, color: 'var(--dark)', marginBottom: '0.75rem', lineHeight: 1.25 }}>{step.title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO TESTIMONIAL (Paprec) */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700, marginBottom: '1rem' }}>
            Habla el cliente
          </div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Jérôme Buffereau, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>Paprec La Rochelle.</em>
          </h2>
          <div className="paprec-inline" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            <div style={{ flexShrink: 0 }}>
              <VideoTestimonialCompact vimeoId="1201721934" name="Jérôme Buffereau" thumbnailUrl={paprecThumb ?? undefined} />
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--dark)', lineHeight: 1.55, margin: '0 0 1.5rem', borderLeft: '2px solid var(--terra)', paddingLeft: '1.1rem' }}>
                &ldquo;En un emplazamiento industrial quieres un suelo que aguante, que se limpie con facilidad y que se coloque rápido. CB Sols cumplió las tres cosas sin pasarse del plazo.&rdquo;
              </p>
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--dark)', fontSize: '0.95rem' }}>Jérôme Buffereau</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: '0.15rem' }}>Director de la sede, Paprec Sud-Ouest, La Rochelle</div>
              <Link href="/es/temoignages" style={{ display: 'inline-block', marginTop: '1.5rem', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--terra)', textDecoration: 'none', fontWeight: 600 }}>
                Ver todos los testimonios en vídeo →
              </Link>
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 720px) { .paprec-inline { flex-direction: column !important; gap: 1.5rem !important; align-items: stretch !important; } }`}</style>
      </section>

      {/* VALENTIN */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--bg-inv)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontWeight: 800, color: 'var(--text-on-dark)', letterSpacing: '-0.03em', lineHeight: 1.0, margin: '0 0 1.5rem' }}>
              Nuestra<br />
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--text-on-dark)' }}>historia.</em>
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-on-dark-muted)', lineHeight: 1.8, maxWidth: '480px', marginBottom: '2rem' }}>
              Propietario, colocador, único interlocutor. Cuando llama a CB Sols, es él quien responde, no un comercial ni un subcontratista. Se incorporó a la empresa en 2008 y la asumió en 2023, con cientos de proyectos por toda Charente-Maritime.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
              {['Garantía decenal', 'Seguro profesional', 'Socio EGE', 'Socio Gerflor'].map((c) => (
                <span key={c} style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)', padding: '0.3rem 0.875rem', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '999px' }}>{c}</span>
              ))}
            </div>
            <Link href="/es/a-propos" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', border: '1.5px solid rgba(44, 85, 48, 0.6)', color: 'var(--terra)', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, borderRadius: '999px', transition: 'all 0.2s' }}>
              Descubrir el taller →
            </Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '380px' }}>
              <div style={{ aspectRatio: '4/5', backgroundColor: 'rgba(44, 85, 48, 0.08)', border: '1px solid rgba(44, 85, 48, 0.2)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                  <div style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontSize: '3rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)', lineHeight: 1, marginBottom: '1rem' }}>VP</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-on-dark)', letterSpacing: '-0.02em' }}>Valentin Prévoteau</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-on-dark-faint)', marginTop: '0.4rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>Artesano colocador de suelos · CB Sols</div>
                  <div style={{ marginTop: '2rem', padding: '1.25rem', backgroundColor: 'rgba(44, 85, 48, 0.1)', borderRadius: '10px', borderLeft: '2px solid var(--terra)' }}>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-on-dark-muted)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.7, margin: 0 }}>
                      &ldquo;Un suelo bien colocado es discreto y dura décadas. Un suelo mal colocado se nota enseguida.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ position: 'absolute', top: '-12px', right: '-12px', padding: '0.5rem 0.875rem', backgroundColor: 'var(--terra)', borderRadius: '999px', fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', fontWeight: 600 }}>
                500+ proyectos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'start' }} className="b2b-grid">
            <div style={{ position: 'sticky', top: '96px' }}>
              <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.875rem', fontWeight: 500 }}>Para empresas</p>
              <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 800, color: 'var(--dark)', marginBottom: '1.25rem', lineHeight: 1.0, letterSpacing: '-0.03em' }}>
                Por sector<br /><em style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontStyle: 'italic', fontWeight: 300 }}>de actividad</em>
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2rem' }}>
                Hotel, restaurante, oficina o camping: cada sector tiene sus normas. CB Sols las conoce todas.
              </p>
              <Link href="/es/secteurs" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', padding: '0.875rem 1.75rem', backgroundColor: 'var(--btn-inv-bg)', color: 'var(--btn-inv-text)', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600, borderRadius: '999px' }}>
                Soluciones profesionales →
              </Link>
            </div>
            <div>
              {esSectors.map((s, i) => (
                <Link key={s.slug} href={`/es/secteurs/${s.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
                    <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '2rem', color: 'var(--border-strong)', fontWeight: 700, lineHeight: 1, flexShrink: 0, width: '44px' }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.25rem' }}>{s.name}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--muted)', fontStyle: 'italic' }}>{s.tagline}</div>
                    </div>
                    <div style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--terra)', flexShrink: 0, fontWeight: 600 }}>Ver →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 500 }}>Zona de intervención</p>
              <h2 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 800, color: 'var(--dark)', lineHeight: 0.95, letterSpacing: '-0.04em', margin: 0 }}>
                Trabajamos<br /><em style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>en todas partes.</em>
              </h2>
            </div>
            <Button href="/es/zones" variant="outline" size="md">49 localidades →</Button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {[
              { zone: 'la-rochelle', label: 'La Rochelle y alrededores', desc: 'La Rochelle, Aytré, Lagord, Villedoux, Puilboreau…', href: '/es/revetement-sol-la-rochelle' },
              { zone: 'ile-de-re', label: 'Île de Ré', desc: 'Saint-Martin, La Flotte, Rivedoux, Ars-en-Ré…', href: '/es/revetement-sol-saint-martin-de-re' },
              { zone: 'ile-doleron', label: "Île d'Oléron", desc: 'Saint-Pierre, Saint-Georges, Le Château…', href: '/es/revetement-sol-saint-pierre-doleron' },
              { zone: 'charente-maritime', label: 'Charente-Maritime', desc: 'Rochefort, Saintes, Royan, Jonzac, Saujon…', href: '/es/zones' },
            ].map((z) => (
              <Link key={z.zone} href={z.href} style={{ textDecoration: 'none', display: 'block' }}>
                <div className="service-card" style={{ backgroundColor: 'var(--bg-card)', borderRadius: '16px', padding: '2rem', height: '100%', transition: 'transform 0.2s' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(44, 85, 48, 0.1)', marginBottom: '1.25rem' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--terra)" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>{z.label}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1rem' }}>{z.desc}</div>
                  <div style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>{esCities.filter((c) => c.zone === z.zone).length} localidades →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWROOM */}
      <section style={{ padding: '0', backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="showroom-grid">
          <div style={{ position: 'relative', minHeight: '520px', overflow: 'hidden', backgroundColor: 'var(--bg-alt)' }}>
            <Image src="/images/projects/pose-moquettes-sols-maison-de-maitre/10.jpg" alt="Detalle de un suelo de madera geométrico colocado por CB Sols, motivo de rombos en roble" fill style={{ objectFit: 'cover' }} sizes="50vw" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '5rem 4rem' }}>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem', fontWeight: 500 }}>Showroom · Con cita previa</p>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 400, color: 'var(--dark)', marginBottom: '1.25rem', lineHeight: 1.1 }}>
              Venga a tocar, a ver, <em style={{ color: 'var(--terra)', fontStyle: 'italic' }}>a elegir.</em>
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '0.875rem', maxWidth: '400px' }}>
              Más de 500 muestras en Villedoux, a 10 min de La Rochelle. El asesoramiento de Valentin Prévoteau.
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '2.5rem' }}>8 rue des Merises, 17230 Villedoux</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/es/showroom" variant="primary" size="md">Pedir cita</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.875rem 1.5rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.875rem', textDecoration: 'none', fontWeight: 500, borderRadius: '999px' }}>
                {company.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'start' }} className="b2b-grid">
            <div style={{ position: 'sticky', top: '96px' }}>
              <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.875rem', fontWeight: 500 }}>Preguntas frecuentes</p>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: 'var(--dark)', marginBottom: '1.25rem', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
                Lo que nos preguntan<br /><em style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>nuestros clientes.</em>
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2rem' }}>
                Respuestas claras, sin rodeos. Para profundizar, consulte nuestras guías.
              </p>
              <Button href="/es/guide/choisir-sa-moquette" variant="outline" size="md">Ver todas las guías →</Button>
            </div>
            <div>
              {homeFaqs.map((item, i) => (
                <div key={i} style={{ padding: '1.75rem 0', borderBottom: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.875rem', letterSpacing: '-0.02em', lineHeight: 1.3 }}>{item.q}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>{item.a}</p>
                </div>
              ))}
              <div style={{ paddingTop: '1.5rem' }}>
                <Link href="/es/faq/devis-revetement-sol-gratuit" style={{ fontSize: '0.75rem', color: 'var(--terra)', textDecoration: 'none', letterSpacing: '0.06em' }}>
                  Todas las preguntas frecuentes →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--bg-inv)', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <Image src="/images/logo-cbsols.png" alt="CB Sols" width={52} height={49} style={{ margin: '0 auto 2rem', opacity: 0.45 }} />
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 800, color: 'var(--text-on-dark)', marginBottom: '1.25rem', lineHeight: 1.0, letterSpacing: '-0.03em' }}>
            Su proyecto merece<br /><em style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>un artesano que escucha.</em>
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-on-dark-faint)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Presupuesto gratis en 48 h. La Rochelle, Île de Ré, Charente-Maritime.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="/es/contact" variant="primary" size="lg">
              Pedir un presupuesto
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '1rem 2rem', border: '1.5px solid rgba(240,235,227,0.2)', color: 'var(--text-on-dark-muted)', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 500, borderRadius: '999px' }}>
              {company.phone}
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        .marquee-track { animation: marquee 28s linear infinite; }
        .projects-scroll::-webkit-scrollbar { display: none; }
        @media (max-width: 900px) {
          .b2b-grid { grid-template-columns: 1fr !important; }
          .showroom-grid { grid-template-columns: 1fr !important; }
          .materials-grid { grid-template-columns: 1fr !important; }
          .garanties-grid { grid-template-columns: repeat(2,1fr) !important; }
          .garantie-item { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08); }
          .process-grid { grid-template-columns: repeat(2,1fr) !important; gap: 2rem !important; }
          .process-line { display: none !important; }
        }
        @media (max-width: 600px) {
          .garanties-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: 1fr !important; }
        }
        .service-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(26,25,22,0.1) !important; }
        .brand-logo:hover { opacity: 0.9 !important; }
        a:hover { color: var(--terra) !important; }
      `}</style>
    </>
  )
}
