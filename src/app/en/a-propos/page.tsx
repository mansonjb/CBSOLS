import type { Metadata } from 'next'
import Link from 'next/link'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Our story | CB Sols, floor-laying craftsman in La Rochelle since 1998',
  description:
    'Meet Valentin Prévoteau, owner of CB Sols (founded in 1998). He joined as an apprentice in 2008 and took over in 2023. Ten-year insurance, 500+ projects in Charente-Maritime.',
  alternates: {
    canonical: 'https://cbsols.fr/en/a-propos',
    languages: { 'fr-FR': 'https://cbsols.fr/a-propos', en: 'https://cbsols.fr/en/a-propos', es: 'https://cbsols.fr/es/a-propos', },
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Valentin Prévoteau',
  jobTitle: 'Floor-covering craftsman and fitter',
  description: 'Owner of CB Sols since 2023 (firm founded in 1998), Valentin Prévoteau specialises in laying professional carpet, vinyl flooring and bespoke rugs in Charente-Maritime.',
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
    'Professional carpet',
    'Heterogeneous vinyl flooring',
    'LVT (Luxury Vinyl Tile)',
    'Bespoke rugs',
    'Hotel floor covering',
    'Public-building floor covering',
    'Acoustic carpet',
    'Professional-kitchen vinyl flooring',
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'Ten-year structural liability insurance' },
  ],
}

export default function AProposPageEn() {
  const credentials = [
    { label: 'Ten-year guarantee', desc: 'Valid ten-year structural liability insurance', icon: '✓' },
    { label: 'Over 28 years of experience', desc: 'Founded in 1998, 500+ projects delivered in Charente-Maritime', icon: '✓' },
  ]

  const stats = [
    { value: 'over 28', label: 'years of experience', sub: 'since 1998' },
    { value: '500+', label: 'projects completed', sub: 'private & professional' },
    { value: '49', label: 'towns covered', sub: 'Charente-Maritime' },
    { value: '4.9/5', label: 'client satisfaction', sub: '41 verified reviews' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <div style={{ paddingTop: '72px' }}>

        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(44, 85, 48, 0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Our story</div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              Over 28 years in the service<br />
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>of your floors.</em>
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '600px', lineHeight: 1.75, margin: 0 }}>
              CB Sols was born in 1998 in Villedoux, out of a passion for fine materials and work done well. In over 28 years, we have laid floors in hundreds of spaces across Charente-Maritime, from hotel bedrooms to the university lecture theatre, from family homes to the Michelin-starred restaurant.
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
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>The craftsman behind every project</div>
                <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
                  Valentin Prévoteau
                </h2>
                <blockquote style={{ margin: '0 0 1.5rem', padding: '1.5rem', borderLeft: '3px solid var(--terra)', backgroundColor: 'rgba(44, 85, 48, 0.05)' }}>
                  <p style={{ fontSize: '1.1rem', color: 'var(--dark)', lineHeight: 1.8, margin: 0, fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>
                    &ldquo;A floor is the foundation of any space. Well chosen and well laid, it lasts for decades and transforms a place.&rdquo;
                  </p>
                </blockquote>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  Valentin joined CB Sols in 2008 as an apprentice, learned the trade on the ground, project after project, then took over the running of the firm in 2023. Trained in laying over concrete, tile and existing wood substrates, he is as comfortable with the contract carpet of large hotels as with public-body kitchen vinyl or the bespoke rugs of reception spaces.
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  What sets CB Sols apart is this personal presence: when you call <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra)', textDecoration: 'none', fontWeight: 600 }}>{company.phone}</a>, it is Valentin who answers. When a project starts, he is the one there. No middleman, no anonymous subcontractor.
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.8 }}>
                  This closeness to the client, this intimate knowledge of the ground and the materials, is what sets CB Sols apart from the big national chains, and why hoteliers, campsite managers and project managers come back project after project.
                </p>
              </div>

              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Timeline</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {[
                    { year: '1998', label: 'The firm is founded', desc: 'CB Sols is launched, with its first floor-covering projects in Charente-Maritime.' },
                    { year: '2003', label: 'First professional contracts', desc: 'First contracts with hoteliers and professionals on Île de Ré and in the La Rochelle area.' },
                    { year: '2008', label: 'Valentin Prévoteau arrives', desc: 'Valentin joins the firm as an apprentice and learns the trade directly on projects.' },
                    { year: '2012', label: 'Official partnerships', desc: 'Dealerships with benchmark brands such as objectflor, EGE and Gerflor: access to contract ranges and manufacturer after-sales support.' },
                    { year: '2013', label: 'New workshop in Villedoux', desc: 'A new workshop is set up in Villedoux to store materials, samples and laying tools.' },
                    { year: '2023', label: 'Taken over by Valentin Prévoteau', desc: 'After fifteen years in the firm, Valentin takes over the running of CB Sols and becomes its director.' },
                    { year: '2024', label: 'Showroom in Villedoux', desc: 'A dedicated showroom opens in Villedoux: over 500 samples to see by appointment.' },
                    { year: 'Today', label: '500+ projects', desc: "La Rochelle, Île de Ré, Île d'Oléron, Rochefort, Saintes and the whole of Charente-Maritime." },
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
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Our commitment</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              Trust <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>is earned.</em>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--dark-2)', lineHeight: 1.85, maxWidth: '760px', margin: '0 0 2rem' }}>
              Craftsmanship is a choice. The choice to take the time to do it right, to go back over a detail until it is true, to refuse the compromise when it is not needed. At CB Sols, excellence is not a slogan: it is the daily stance. We measure three times to cut once, we set out a motif to the millimetre, we redo a junction that is not perfect, because it is what we would expect in our own homes.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--dark-2)', lineHeight: 1.85, maxWidth: '760px', margin: '0 0 3rem' }}>
              We owe that care to the clients who trust us, hoteliers, restaurateurs, architects, private clients, and we owe it too to the craftsmen who have done this trade with us for twenty-seven years. A well-laid floor is invisible. That is exactly what work done well is.
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
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem' }}>Verified client reviews</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              What our clients say on Google
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
              <span>Read the 41 reviews on Google →</span>
            </a>
          </div>
        </section>

        {/* Brands */}
        <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our partner brands</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {company.brands.map((b) => (
                <span key={b} style={{ padding: '0.625rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--dark-2)', letterSpacing: '0.06em', fontWeight: 500 }}>{b}</span>
              ))}
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '1.5rem', lineHeight: 1.65, maxWidth: '560px' }}>
              These partnerships give CB Sols access to the full professional ranges, manufacturer guarantees and technical support: direct benefits for your projects.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Your project</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
              Let&apos;s talk about your project
            </h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.1rem', color: 'var(--muted)', margin: '0 0 2.5rem' }}>
              Valentin answers personally, free quote within 48h
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact" variant="primary" size="md">Request a quote</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-block', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'none', borderRadius: '999px' }}>
                {company.phone}
              </a>
              <Link href="/en/showroom" style={{ display: 'inline-block', padding: '0.875rem 2rem', border: '1.5px solid var(--border)', color: 'var(--muted)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '999px' }}>
                Visit the showroom
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
