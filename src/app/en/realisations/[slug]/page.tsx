import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { enRealisations, getEnRealisationBySlug } from '../../_lib/realisations'
import { Button } from '@/components/Button'
import { BreadcrumbLD } from '@/components/BreadcrumbLD'
import { VideoTestimonial } from '@/components/VideoTestimonial'
import { company } from '@/data/company'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return enRealisations.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const r = getEnRealisationBySlug(slug)
  if (!r) return {}
  return {
    title: `${r.title} | CB Sols Project`,
    description: r.description,
    alternates: {
      canonical: `https://cbsols.fr/en/realisations/${slug}`,
      languages: {
        'fr-FR': `https://cbsols.fr/realisations/${slug}`,
        en: `https://cbsols.fr/en/realisations/${slug}`,
      },
    },
    openGraph: { title: r.title, description: r.description, images: [{ url: r.image }] },
  }
}

export default async function RealisationDetailPageEn({ params }: Props) {
  const { slug } = await params
  const r = getEnRealisationBySlug(slug)
  if (!r) notFound()

  const related = enRealisations
    .filter((x) => x.slug !== r.slug)
    .sort((a, b) => {
      const aMatch = a.sector === r.sector ? 1 : 0
      const bMatch = b.sector === r.sector ? 1 : 0
      if (aMatch !== bMatch) return bMatch - aMatch
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    .slice(0, 3)

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: r.title,
    description: r.description,
    image: `https://cbsols.fr${r.image}`,
    datePublished: r.date,
    dateModified: r.date,
    author: { '@type': 'Organization', name: company.legalName, url: 'https://cbsols.fr' },
    publisher: {
      '@type': 'Organization',
      name: company.legalName,
      logo: { '@type': 'ImageObject', url: 'https://cbsols.fr/images/logo-cbsols.png' },
    },
    locationCreated: { '@type': 'Place', name: r.location },
  }

  return (
    <>
      <BreadcrumbLD
        items={[
          { name: 'CB Sols', url: 'https://cbsols.fr/en' },
          { name: 'Projects', url: 'https://cbsols.fr/en/realisations' },
          { name: r.title, url: `https://cbsols.fr/en/realisations/${slug}` },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

      <article style={{ paddingTop: '72px' }}>
        {/* Hero image */}
        <section style={{ position: 'relative', height: 'clamp(380px, 60vh, 580px)', overflow: 'hidden' }}>
          <Image src={r.image} alt={r.title} fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(13,12,10,0.35) 0%, rgba(13,12,10,0.15) 50%, rgba(13,12,10,0.85) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end' }}>
            <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '3rem 2rem 2.5rem' }}>
              <nav aria-label="Breadcrumb" style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)', textDecoration: 'none' }}>CB Sols</Link>
                <span style={{ color: 'var(--text-on-dark-faint)' }}>/</span>
                <Link href="/en/realisations" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)', textDecoration: 'none' }}>Projects</Link>
                <span style={{ color: 'var(--text-on-dark-faint)' }}>/</span>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra-on-dark)', fontWeight: 700 }}>Project</span>
              </nav>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', padding: '0.5rem 1rem', backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: '999px', backdropFilter: 'blur(4px)', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--terra)' }} />
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700 }}>
                  {r.sector} · {r.year}
                </span>
              </div>

              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, color: 'var(--text-on-dark)', margin: '0 0 0.75rem', letterSpacing: '-0.025em', lineHeight: 1.05, maxWidth: '900px', textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
                {r.title}
              </h1>

              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(1.05rem, 1.6vw, 1.3rem)', color: 'var(--terra-on-dark)', margin: 0, textShadow: '0 1px 6px rgba(0,0,0,0.3)' }}>
                {r.type}
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: '2.5rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem 2rem' }}>
            <Stat label="Location" value={r.location} />
            <Stat label="Year" value={r.year} />
            {r.client && <Stat label="Client" value={r.client} />}
            <Stat label="Type of work" value={r.type} />
            {r.surface && <Stat label="Area" value={r.surface} />}
          </div>
        </section>

        {/* Body */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem', fontWeight: 600 }}>The project</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              Our work
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {r.body.map((paragraph, i) => (
                <p key={i} style={{ fontSize: '1rem', color: 'var(--dark-2)', lineHeight: 1.8, margin: 0 }}>
                  {paragraph}
                </p>
              ))}
            </div>

            {r.clientLink && (
              <div style={{ marginTop: '2.5rem', padding: '1.5rem 1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.4rem', fontWeight: 700 }}>
                    See the client
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--dark)' }}>
                    {r.clientLink.label}
                  </div>
                </div>
                <a href={r.clientLink.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.7rem 1.4rem', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, borderRadius: '999px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                  Visit the website →
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Video testimonial */}
        {r.video && (
          <section style={{ padding: '4rem 2rem 1rem', borderTop: '1px solid var(--border)' }}>
            <div style={{ maxWidth: '960px', margin: '0 auto' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem', fontWeight: 600 }}>The client’s view</div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                They say it <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>better than we can.</em>
              </h2>
              <figure style={{ margin: 0 }}>
                <div style={{ maxWidth: '420px', margin: '0 auto', borderRadius: '14px', overflow: 'hidden', backgroundColor: 'var(--dark)', border: '1px solid var(--border)' }}>
                  <video controls playsInline preload="none" poster={r.video.poster} style={{ display: 'block', width: '100%', height: 'auto' }}>
                    <source src={r.video.src} type="video/mp4" />
                  </video>
                </div>
                {r.video.caption && (
                  <figcaption style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: '0.9rem', textAlign: 'center', fontStyle: 'italic' }}>{r.video.caption}</figcaption>
                )}
              </figure>
            </div>
          </section>
        )}

        {/* Gallery */}
        {r.gallery && r.gallery.length > 0 && (
          <section style={{ padding: '4rem 2rem 5rem', borderTop: '1px solid var(--border)' }}>
            <div style={{ maxWidth: '960px', margin: '0 auto' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem', fontWeight: 600 }}>Gallery</div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                Photos of the <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>project.</em>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {r.gallery.map((photo, i) => (
                  <figure key={i} style={{ margin: 0 }}>
                    <div style={{ position: 'relative', width: '100%', borderRadius: '14px', overflow: 'hidden', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={photo.src} alt={photo.caption || `${r.title} – photo ${i + 1}`} loading="lazy" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                    {photo.caption && (
                      <figcaption style={{ marginTop: '0.85rem', fontSize: '0.82rem', color: 'var(--muted)', fontStyle: 'italic', fontFamily: 'var(--font-serif)', fontWeight: 400, lineHeight: 1.6, textAlign: 'center' }}>
                        {photo.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Client video testimonial (AXA La Rochelle project) */}
        {slug === 'pose-sols-cabinet-axa-la-rochelle' && (
          <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
            <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700, marginBottom: '1rem', textAlign: 'center' }}>
                The client speaks
              </div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.025em', lineHeight: 1.15, textAlign: 'center' }}>
                David Labarrère, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>his view.</em>
              </h2>
              <VideoTestimonial
                vimeoId="1201719634"
                name="David Labarrère"
                role="General agent"
                company="AXA Moiroud-Labarrère"
                quote="Our office welcomes clients every day; the floor is part of the image we project. CB Sols was able to propose a covering that holds up and shows the premises off."
                projectInfo="Insurance office, La Rochelle"
              />
            </div>
          </section>
        )}

        {/* CTA */}
        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              A similar <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>project?</em>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Tell us about your space and your constraints. We study every project individually.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href={`/en/contact?from=realisation-${slug}`} variant="primary" size="lg">Request a quote</Button>
              <Button href="/en/showroom" variant="outline" size="md">Visit the showroom</Button>
            </div>
          </div>
        </section>

        {/* Related projects */}
        {related.length > 0 && (
          <section style={{ padding: '5rem 2rem 6rem', borderTop: '1px solid var(--border)' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Other projects</div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.5vw, 1.85rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.02em' }}>
                Also worth a look
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {related.map((p) => (
                  <Link key={p.slug} href={`/en/realisations/${p.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    <article className="service-card" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s' }}>
                      <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', overflow: 'hidden' }}>
                        <Image src={p.image} alt={p.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
                      </div>
                      <div style={{ padding: '1.5rem 1.5rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flexGrow: 1 }}>
                        <div style={{ fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700 }}>{p.sector} · {p.year}</div>
                        <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', margin: 0, lineHeight: 1.3, letterSpacing: '-0.01em' }}>{p.title}</h3>
                        <p style={{ fontSize: '0.85rem', color: 'var(--muted)', margin: 0, lineHeight: 1.65, flexGrow: 1 }}>{p.description.length > 100 ? p.description.slice(0, 100) + '…' : p.description}</p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/en/realisations" style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--terra)', textDecoration: 'none', fontWeight: 600 }}>
                  See all projects →
                </Link>
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>
        {label}
      </div>
      <div style={{ fontSize: '0.92rem', color: 'var(--dark)', fontWeight: 600, lineHeight: 1.3 }}>
        {value}
      </div>
    </div>
  )
}
