import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { ClientLogoCard } from '@/components/ClientLogoCard'
import { clientLogos, architectePartners } from '@/data/clients'
import { realisations } from '@/data/realisations'

export const metadata: Metadata = {
  title: 'Réalisations | Projets Moquette, Sol PVC & Tapis CB Sols',
  description:
    "Découvrez les réalisations de CB Sols : pose de moquette en hôtel, sol PVC en bureaux, tapis sur mesure en restaurant. Artisan revêtement de sol en Charente-Maritime.",
}

export default function RealisationsPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Portfolio</div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
            Nos réalisations
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', maxWidth: '560px', lineHeight: 1.7, margin: 0 }}>
            Hôtels, restaurants, bureaux, collectivités : chaque projet a ses contraintes, ses matériaux, son ambiance. Voici quelques-uns des espaces que CB Sols a transformés en Charente-Maritime.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem 6rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {realisations.map((project) => (
              <Link
                key={project.slug}
                href={`/realisations/${project.slug}`}
                style={{
                  backgroundColor: 'var(--project-card-bg)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '320px',
                  transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                className="project-card-link"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover', opacity: 0.65 }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,12,10,0.92) 0%, rgba(13,12,10,0.35) 55%, transparent 100%)', pointerEvents: 'none' }} />
                <div style={{ padding: '2rem', position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra-on-dark)', fontWeight: 700 }}>{project.sector}</span>
                    <span style={{ fontSize: '0.6rem', letterSpacing: '0.12em', color: 'var(--text-on-dark-muted)', whiteSpace: 'nowrap', fontWeight: 500 }}>
                      {project.year} · {project.location}
                    </span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-on-dark)', margin: '0 0 0.5rem', lineHeight: 1.3 }}>
                    {project.title}
                  </h2>
                  <div style={{ fontSize: '0.8rem', color: 'var(--terra-on-dark)', marginBottom: '0.75rem', letterSpacing: '0.04em', fontWeight: 600 }}>{project.type}</div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-on-dark)', margin: 0, lineHeight: 1.6, opacity: 0.85 }}>{project.description}</p>
                  <div style={{ fontSize: '0.65rem', color: 'var(--terra-on-dark)', marginTop: '1rem', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700 }}>
                    Voir le projet →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', marginBottom: '2rem' }}>
              Ces réalisations représentent une sélection de notre portfolio. Consultez-nous pour découvrir d'autres projets similaires au vôtre.
            </p>
            <Button href="/contact" variant="primary" size="md">Discuter de votre projet</Button>
          </div>
        </div>
      </section>

      {/* Clients / références */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-inv)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem' }}>Références professionnelles</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--text-on-dark)', margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>Ils nous ont fait confiance</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-on-dark-muted)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.6 }}>
              Hôtels, restaurants, architectes, collectivités : une sélection de clients qui nous ont confié leurs projets en Charente-Maritime.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
            {[...clientLogos, ...architectePartners].map(c => (
              <ClientLogoCard key={c.alt} client={c} />
            ))}
          </div>

          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(240,235,227,0.1)' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--terra)', lineHeight: 1, marginBottom: '0.5rem' }}>&ldquo;</div>
            <blockquote style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--text-on-dark)', lineHeight: 1.6, margin: '0 0 1.5rem', fontWeight: 300 }}>
              Valentin a su comprendre l&apos;atmosphère que nous voulions pour nos chambres. Le résultat est à la hauteur de nos attentes, et la pose a été impeccable, dans les délais.
            </blockquote>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-on-dark-faint)', letterSpacing: '0.08em' }}>Hôtellerie · Île de Ré</div>
          </div>
        </div>
      </section>
    </div>
  )
}
