import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { ClientLogoCard } from '@/components/ClientLogoCard'
import { clientLogos, architectePartners } from '@/data/clients'
import { esRealisations } from '../_lib/realisations'

export const metadata: Metadata = {
  title: 'Proyectos | Trabajos de moqueta, vinílico y alfombras de CB Sols',
  description:
    'Descubra los proyectos de CB Sols: moqueta de hotel, vinílico de oficina, alfombras a medida de restaurante, proyectos residenciales para clientes particulares exigentes. Artesano de revestimientos de suelo en Charente-Maritime.',
  alternates: {
    canonical: 'https://cbsols.fr/es/realisations',
    languages: { 'fr-FR': 'https://cbsols.fr/realisations', en: 'https://cbsols.fr/en/realisations', es: 'https://cbsols.fr/es/realisations', },
  },
}

export default function RealisationsPageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Portafolio</div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
            Nuestros proyectos
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', maxWidth: '560px', lineHeight: 1.7, margin: 0 }}>
            Hoteles, restaurantes, oficinas, organismos públicos, viviendas particulares: cada proyecto tiene sus limitaciones, sus materiales, su ambiente. Estos son algunos de los espacios que CB Sols ha transformado en Charente-Maritime.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem 6rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {esRealisations.map((project) => (
              <Link key={project.slug} href={`/es/realisations/${project.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <article className="service-card" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s' }}>
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', overflow: 'hidden' }}>
                    <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  </div>
                  <div style={{ padding: '1.5rem 1.5rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', flexGrow: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '0.75rem' }}>
                      <span style={{ fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700 }}>{project.sector}</span>
                      <span style={{ fontSize: '0.6rem', letterSpacing: '0.1em', color: 'var(--muted)', whiteSpace: 'nowrap' }}>
                        {project.year} · {project.location}
                      </span>
                    </div>
                    <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--dark)', margin: 0, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                      {project.title}
                    </h2>
                    <div style={{ fontSize: '0.78rem', color: 'var(--terra)', fontStyle: 'italic', fontFamily: 'var(--font-serif)', fontWeight: 300 }}>{project.type}</div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--muted)', margin: 0, lineHeight: 1.65, flexGrow: 1 }}>{project.description}</p>
                    <div style={{ fontSize: '0.62rem', color: 'var(--terra)', marginTop: '0.5rem', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700 }}>
                      Ver el proyecto →
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', marginBottom: '2rem' }}>
              Estos proyectos son una selección de nuestro portafolio. Póngase en contacto para descubrir más proyectos parecidos al suyo.
            </p>
            <Button href="/es/contact" variant="primary" size="md">Hablar de su proyecto</Button>
          </div>
        </div>
      </section>

      {/* Clients / references */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-inv)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem' }}>Referencias profesionales</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--text-on-dark)', margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>Confían en nosotros</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-on-dark-muted)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.6 }}>
              Hoteles, restaurantes, arquitectos, organismos públicos: una selección de clientes que nos han confiado sus proyectos en Charente-Maritime.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
            {[...clientLogos, ...architectePartners].map((c) => (
              <ClientLogoCard key={c.alt} client={c} />
            ))}
          </div>

          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(240,235,227,0.1)' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--terra)', lineHeight: 1, marginBottom: '0.5rem' }}>&ldquo;</div>
            <blockquote style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--text-on-dark)', lineHeight: 1.6, margin: '0 0 1.5rem', fontWeight: 300 }}>
              Valentin entendió el ambiente que queríamos para nuestras habitaciones. El resultado está a la altura de nuestras expectativas, y la colocación fue impecable y puntual.
            </blockquote>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-on-dark-faint)', letterSpacing: '0.08em' }}>Hostelería · Île de Ré</div>
          </div>
        </div>
      </section>
    </div>
  )
}
