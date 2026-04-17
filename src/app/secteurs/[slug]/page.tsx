import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { sectors, getSectorBySlug } from '@/data/sectors'
import { services, getServiceBySlug } from '@/data/services'
import { company } from '@/data/company'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const sector = getSectorBySlug(slug)
  if (!sector) return {}
  return {
    title: `Revêtement Sol ${sector.name} — CB Sols`,
    description: `CB Sols, partenaire revêtement de sol pour ${sector.name.toLowerCase()} en Charente-Maritime. ${sector.tagline}. Devis gratuit, intervention rapide.`,
    alternates: { canonical: `https://cbsols.fr/secteurs/${slug}` },
  }
}

export default async function SecteurPage({ params }: Props) {
  const { slug } = await params
  const sector = getSectorBySlug(slug)
  if (!sector) notFound()

  const recommendedServicesData = sector.recommendedServices
    .map((s) => getServiceBySlug(s))
    .filter(Boolean)

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(196,113,74,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem' }}>
            <Link href="/secteurs" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>Professionnels</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>{sector.name}</span>
          </div>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{sector.icon}</div>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 400, color: 'var(--cream)', margin: '0 0 0.75rem', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            {sector.name}
          </h1>
          <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--terra)', margin: '0 0 1.5rem', fontFamily: 'var(--font-playfair, Georgia, serif)' }}>
            {sector.tagline}
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', maxWidth: '600px', lineHeight: 1.7, margin: '0 0 2.5rem' }}>
            {sector.description}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500 }}>
              Devis professionnel
            </Link>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-block', padding: '1rem 2rem', border: '1px solid var(--border-hover)', color: 'var(--cream-muted)', fontSize: '0.82rem', textDecoration: 'none' }}>
              {company.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Challenges + Solutions */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Vos contraintes</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {sector.challenges.map((c, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
                    <div style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.25rem', color: 'var(--terra)', opacity: 0.5, lineHeight: 1, flexShrink: 0 }}>0{i + 1}</div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--cream-muted)', lineHeight: 1.5 }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Nos réponses</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {sector.solutions.map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '24px', height: '24px', backgroundColor: 'rgba(196,113,74,0.15)', border: '1px solid rgba(196,113,74,0.3)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--terra)', borderRadius: '50%' }} />
                    </div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--cream)', lineHeight: 1.6 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services recommandés */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '2rem' }}>Services recommandés pour {sector.name}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1px', backgroundColor: 'var(--border)' }}>
            {recommendedServicesData.map((service) => service && (
              <Link key={service.slug} href={`/services/${service.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', transition: 'background-color 0.2s' }}>
                  <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--cream)', margin: '0 0 0.75rem' }}>{service.name}</h3>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '0 0 1.25rem', lineHeight: 1.6 }}>{service.description}</p>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--terra)' }}>Découvrir →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Références */}
      <section style={{ padding: '4rem 2rem 6rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Quelques références</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {sector.referencesExamples.map((ref) => (
              <div key={ref} style={{ padding: '1.5rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--terra)', marginBottom: '0.875rem' }} />
                <p style={{ fontSize: '0.85rem', color: 'var(--cream-muted)', margin: 0, lineHeight: 1.6 }}>{ref}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500 }}>
              Obtenir un devis pro
            </Link>
            <Link href="/secteurs" style={{ display: 'inline-block', padding: '1rem 2rem', border: '1px solid var(--border-hover)', color: 'var(--cream-muted)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Tous les secteurs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
