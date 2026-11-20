import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { ClientLogoCard } from '@/components/ClientLogoCard'
import { clientLogos, architectePartners } from '@/data/clients'
import { enRealisations } from '../_lib/realisations'

export const metadata: Metadata = {
  title: 'Projects | CB Sols Carpet, Vinyl & Rug Work',
  description:
    'Discover CB Sols’ projects: hotel carpet, office vinyl, bespoke restaurant rugs, residential projects for demanding private clients. Floor-covering craftsman in Charente-Maritime.',
  alternates: {
    canonical: 'https://cbsols.fr/en/realisations',
    languages: { 'fr-FR': 'https://cbsols.fr/realisations', en: 'https://cbsols.fr/en/realisations', es: 'https://cbsols.fr/es/realisations', },
  },
}

export default function RealisationsPageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Portfolio</div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
            Our projects
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', maxWidth: '560px', lineHeight: 1.7, margin: 0 }}>
            Hotels, restaurants, offices, public bodies, private homes: each project has its constraints, its materials, its atmosphere. Here are some of the spaces CB Sols has transformed in Charente-Maritime.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem 6rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {enRealisations.map((project) => (
              <Link key={project.slug} href={`/en/realisations/${project.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
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
                      See the project →
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', marginBottom: '2rem' }}>
              These projects are a selection from our portfolio. Get in touch to discover more projects similar to yours.
            </p>
            <Button href="/en/contact" variant="primary" size="md">Discuss your project</Button>
          </div>
        </div>
      </section>

      {/* Clients / references */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-inv)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem' }}>Professional references</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--text-on-dark)', margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>They trust us</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-on-dark-muted)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.6 }}>
              Hotels, restaurants, architects, public bodies: a selection of clients who have entrusted their projects to us in Charente-Maritime.
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
              Valentin understood the atmosphere we wanted for our rooms. The result lives up to our expectations, and the fitting was impeccable and on time.
            </blockquote>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-on-dark-faint)', letterSpacing: '0.08em' }}>Hospitality · Île de Ré</div>
          </div>
        </div>
      </section>
    </div>
  )
}
