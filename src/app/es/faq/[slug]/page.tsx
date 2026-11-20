import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { esFaqs, getEsFaqBySlug } from '../../_lib/faqs'
import { company } from '@/data/company'
import { BreadcrumbLD } from '@/components/BreadcrumbLD'
import { Button } from '@/components/Button'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return esFaqs.map((f) => ({ slug: f.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const faq = getEsFaqBySlug(slug)
  if (!faq) return {}
  return {
    title: faq.metaTitle,
    description: faq.metaDescription,
    alternates: {
      canonical: `https://cbsols.fr/es/faq/${slug}`,
      languages: {
        'fr-FR': `https://cbsols.fr/faq/${slug}`, en: `https://cbsols.fr/en/faq/${slug}`, es: `https://cbsols.fr/es/faq/${slug}`,
      },
    },
  }
}

export default async function FaqPageEn({ params }: Props) {
  const { slug } = await params
  const faq = getEsFaqBySlug(slug)
  if (!faq) notFound()

  const otherFaqs = esFaqs.filter((f) => faq.relatedFaqs.includes(f.slug))

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.shortAnswer },
      },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: faq.question,
    description: faq.metaDescription,
    datePublished: faq.datePublished ?? '2025-10-01',
    dateModified: faq.dateModified ?? '2026-03-15',
    author: { '@type': 'Organization', name: company.legalName },
    publisher: { '@type': 'Organization', name: company.legalName },
  }

  return (
    <>
      <BreadcrumbLD
        items={[
          { name: 'CB Sols', url: 'https://cbsols.fr/es' },
          { name: 'FAQ', url: 'https://cbsols.fr/es/faq' },
          { name: faq.question, url: `https://cbsols.fr/es/faq/${slug}` },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div style={{ paddingTop: '72px' }}>

        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 30%, rgba(44, 85, 48, 0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <Link href="/es" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
              <span style={{ color: 'var(--border-hover)' }}>→</span>
              <Link href="/es/faq" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)', textDecoration: 'none' }}>FAQ</Link>
            </div>

            <span style={{ display: 'inline-block', padding: '0.3rem 0.875rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(44, 85, 48, 0.08)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', borderRadius: '999px', marginBottom: '1.5rem' }}>
              {faq.category}
            </span>

            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              {faq.question}
            </h1>

            <div style={{ padding: '1.5rem 2rem', backgroundColor: 'rgba(44, 85, 48, 0.06)', border: '1px solid rgba(44, 85, 48, 0.2)', borderRadius: '12px', borderLeft: '3px solid var(--terra)' }}>
              <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem' }}>Respuesta breve</div>
              <p style={{ fontSize: '1rem', color: 'var(--dark-2)', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                {faq.shortAnswer}
              </p>
            </div>
          </div>
        </section>

        {/* Detailed sections */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
              {faq.sections.map((section, i) => (
                <div key={i}>
                  <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
                    {section.title}
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {section.body.split('\n\n').map((para, j) => (
                      <p key={j} style={{ fontSize: '0.925rem', color: 'var(--dark-2)', lineHeight: 1.8, margin: 0, whiteSpace: 'pre-line' }}>
                        {para}
                      </p>
                    ))}
                  </div>
                  {i < faq.sections.length - 1 && (
                    <div style={{ marginTop: '3rem', height: '1px', backgroundColor: 'var(--border)' }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related FAQs */}
        {otherFaqs.length > 0 && (
          <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Preguntas relacionadas</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {otherFaqs.map((f) => (
                  <Link key={f.slug} href={`/es/faq/${f.slug}`} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.125rem 0', borderBottom: '1px solid var(--border)' }}>
                    <div>
                      <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.3rem' }}>{f.category}</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--dark)' }}>{f.question}</div>
                    </div>
                    <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)', flexShrink: 0, marginLeft: '1rem' }}>Leer →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Su proyecto</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
              ¿Una pregunta sobre su proyecto?
            </h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.1rem', color: 'var(--muted)', margin: '0 0 2.5rem' }}>
              CB Sols responde en 24 h, presupuesto gratuito en 48 h
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button href="/es/contact" variant="primary" size="md">Presupuesto gratuito</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-block', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'none', borderRadius: '999px' }}>
                {company.phone}
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
