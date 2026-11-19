import type { Metadata } from 'next'
import Link from 'next/link'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { BreadcrumbLD } from '@/components/BreadcrumbLD'

export const metadata: Metadata = {
  title: 'Professional Floor Cleaning | Rotowash Scrubbing CB Sols La Rochelle',
  description: 'Deep cleaning of all floor types (vinyl, lino, tiles, stone, polished concrete) with Rotowash mechanical scrubbing. Hotels, restaurants, offices and public bodies in La Rochelle, Île de Ré and Charente-Maritime.',
  alternates: {
    canonical: 'https://cbsols.fr/en/nettoyage-sols',
    languages: { 'fr-FR': 'https://cbsols.fr/nettoyage-sols', en: 'https://cbsols.fr/en/nettoyage-sols' },
  },
}

const supportedSurfaces = [
  { label: 'Sheet or tile vinyl', desc: 'Deep-cleans the grooves and joints, restores the original colour.' },
  { label: 'Lino & vinyl', desc: 'Removes layers of old wax and embedded dirt.' },
  { label: 'Tiles & joints', desc: 'Precise mechanical scrubbing that brings back the whiteness of the joints without damaging the glaze.' },
  { label: 'Natural stone', desc: 'Gentle stripping with suitable brushes, followed by a possible impregnation.' },
  { label: 'Bare & polished concrete', desc: 'Restores the original look, prepares for protective treatments.' },
  { label: 'Industrial floors', desc: 'Workshops, warehouses, garages: deep cleaning, controlled degreasing.' },
]

const reasons = [
  { title: 'Restoration without replacement', body: 'Before deciding to replace a floor, have it professionally cleaned. On vinyl or tiles over 5 years old, mechanical scrubbing recovers 70 to 90% of the original look, for 5 to 10 times less than a rip-out and re-lay.' },
  { title: 'Documented professional hygiene', body: 'For public buildings, hotels, restaurants and public bodies, periodic cleaning is documentable (a service certificate). Useful for hygiene checks, ISO standards, chain audits or pre-sale surveys.' },
  { title: 'Preserving the materials', body: 'A poorly cleaned floor wears faster: embedded dirt acts like sandpaper with every footfall. Professional mechanical scrubbing removes these abrasive particles and restores the covering’s original resistance.' },
  { title: 'Preparation before treatment', body: 'Applying a protective wax, metallising, a water-repellent impregnation on stone, re-varnishing: all these treatments require a floor deep-cleaned thoroughly. Rotowash scrubbing is the essential prior step.' },
]

const processSteps = [
  { num: '01', title: 'Substrate survey', body: 'Identifying the type of covering, its general state, the stains and specific zones (grease, product marks, trolley marks). A fastness test on a discreet area to validate the procedure.' },
  { num: '02', title: 'Vacuuming & pre-treatment', body: 'Prior mechanical vacuuming to remove all dry particles. Application of a neutral detergent suited to the covering, controlled dwell time (3 to 8 min by the nature of the soiling).' },
  { num: '03', title: 'Rotowash mechanical scrubbing', body: 'The Rotowash machine performs high-frequency rotary scrubbing with two counter-rotating rollers. This mechanical action extracts dirt in depth without damaging the material. A single pass covers 1 m² in about 30 to 45 seconds.' },
  { num: '04', title: 'Rinse with demineralised water', body: 'A final rinse with demineralised water to leave no detergent residue or limescale film. It is this rinse that ensures your floor does not re-soil twice as fast, and it is also what sets professional work apart from a DIY hire.' },
  { num: '05', title: 'Drying & finish', body: 'The Rotowash extracts the water used at the same time. The floor is dry in 30 to 60 minutes by ventilation. You can follow with a protective wax, metallising or a water-repellent treatment.' },
  { num: '06', title: 'Final inspection', body: 'A walk-round with you, validation of the treated zones. If a stain resists, a second targeted pass. Delivery of a detailed service sheet (useful for your records and internal checks).' },
]

const cas = [
  { secteur: 'Professional kitchen', freq: '1 to 2×/year', detail: 'Deep cleaning of heat-welded floors, coved joints, drain junctions. HACCP-compatible hygiene.' },
  { secteur: 'Dining rooms', freq: '2×/year', detail: 'Vinyl, tiles, varnished wood: restoring colours and removing old food stains.' },
  { secteur: 'Hotels, circulation', freq: '2 to 3×/year', detail: 'Wood-effect vinyl, marbled tiles, marble: restoring the shine and preparing for a protective wax.' },
  { secteur: 'Offices', freq: '1×/year', detail: 'Deep cleaning of vinyl floors, ideal in July-August to start the new term on a clean floor.' },
  { secteur: 'Shops & boutiques', freq: '1 to 2×/year', detail: 'Tiles, stone, polished concrete: gives retail spaces a new look, essential before events or openings.' },
  { secteur: 'Public bodies & buildings', freq: '2 to 4×/year', detail: 'Halls, corridors, changing rooms: deep cleaning with a service certificate for internal checks.' },
]

const faqItems = [
  { q: 'Which floor types can the Rotowash clean?', a: 'Virtually all hard floors: sheet or tile vinyl, lino, vinyl, tiles and joints, natural stone, marble, bare or polished concrete, epoxy industrial floors. It does not suit carpet (for that, see our carpet-cleaning service by hot-water extraction).' },
  { q: 'How long before you can walk on it again?', a: 'The Rotowash extracts the water as it scrubs. The floor is usable 30 minutes to 1 hour after the work. For professional projects, we always adapt our schedule to your operating constraints.' },
  { q: 'Does mechanical scrubbing damage the floor?', a: 'No, provided the right brushes are used. The brushes are matched to each type of covering: soft for stone and marble, medium for vinyl and lino, hard for tiles and concrete. The discreet-area test systematically validates the procedure.' },
  { q: 'Why rinse with demineralised water?', a: 'Tap water contains limescale which, on drying, leaves a white film and re-fixes dust particles. Demineralised water evaporates cleanly and leaves a truly clean floor that stays clean longer.' },
  { q: 'How much does a Rotowash clean cost?', a: 'The rate depends on the area, the floor type, the initial state and the access. As a guide, allow 5 to 12 € ex-VAT/m² for a simple clean over a large area, 10 to 18 € ex-VAT/m² for a deep restoration on a small complex area. Free quote after a visit.' },
  { q: 'Can you work without interrupting activity?', a: 'Yes. For shops and restaurants, we work outside opening hours. For hotels, by zone. For offices, outside operating hours. The fast drying (30 to 60 min) makes this uninterrupted work easy.' },
  { q: 'Do you offer annual contracts?', a: 'Yes. For hotels, restaurants, offices and shops, we offer periodic maintenance contracts with a fixed schedule (1 to 4 visits a year), negotiated rates and priority response in an emergency (a stain, a client event).' },
  { q: 'What is the difference from a classic cleaning company?', a: 'A classic cleaning company does the daily work: vacuuming, flat mopping. The Rotowash is a deep, periodic intervention that cleans in depth what daily cleaning cannot reach. The two are complementary, not competitors.' },
]

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Professional floor cleaning by Rotowash scrubbing',
  description: 'Deep cleaning of all floor types (vinyl, lino, tiles, stone, polished concrete) with Rotowash mechanical scrubbing. La Rochelle, Île de Ré, Charente-Maritime.',
  serviceType: 'Floor-covering cleaning and upkeep',
  areaServed: { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
  provider: {
    '@type': 'LocalBusiness',
    name: company.legalName,
    telephone: company.phoneClean,
    email: company.email,
    address: { '@type': 'PostalAddress', streetAddress: company.address.street, addressLocality: company.address.city, postalCode: company.address.zip, addressCountry: 'FR' },
    geo: { '@type': 'GeoCoordinates', latitude: company.geo.lat, longitude: company.geo.lng },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '41', bestRating: '5' },
  },
}

export default function NettoyageSolsPageEn() {
  return (
    <>
      <BreadcrumbLD
        items={[
          { name: 'CB Sols', url: 'https://cbsols.fr/en' },
          { name: 'Services', url: 'https://cbsols.fr/en/services' },
          { name: 'Floor cleaning', url: 'https://cbsols.fr/en/nettoyage-sols' },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div style={{ paddingTop: '72px' }}>
        <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(44, 85, 48, 0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
            <nav aria-label="Breadcrumb" style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>CB Sols</Link>
              <span style={{ color: 'var(--border-hover)' }}>/</span>
              <Link href="/en/services" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}>Services</Link>
              <span style={{ color: 'var(--border-hover)' }}>/</span>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Floor cleaning</span>
            </nav>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.75rem', padding: '0.35rem 0.9rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(44,85,48,0.08)', borderRadius: '999px' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'inline-block' }} />
              <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 600 }}>Service · Rotowash mechanical scrubbing</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0, maxWidth: '900px' }}>
              Floor cleaning<br />
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>all coverings.</em>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--cream-muted)', maxWidth: '720px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Vinyl, lino, tiles, natural stone, polished concrete, industrial floors: restore the original look instead of replacing. Our Rotowash mechanical scrubbing deep-cleans what no daily cleaning reaches. Work in Charente-Maritime, Île de Ré and Île d&apos;Oléron.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/en/contact?service=nettoyage-sols" variant="primary" size="lg">Request a quote</Button>
              <Button href={`tel:${company.phoneClean}`} external variant="outline" size="md">{company.phone}</Button>
            </div>
          </div>
        </section>

        <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
            {[
              { val: '70-90%', label: 'Of the original look restored' },
              { val: '5 to 10×', label: 'Cheaper than a rip-out/re-lay' },
              { val: '30-60 min', label: 'Of drying' },
              { val: 'All floors', label: 'Vinyl · stone · tiles · concrete' },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', fontWeight: 800, color: 'var(--terra)', lineHeight: 1, marginBottom: '0.5rem' }}>{s.val}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.08em', lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Why clean</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.15, maxWidth: '720px' }}>
              Restore rather than replace.
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', margin: '0 0 3rem', maxWidth: '640px', lineHeight: 1.7 }}>
              Professional mechanical scrubbing is not a luxury, it is an economic decision. Four concrete reasons to schedule it.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {reasons.map((r, i) => (
                <div key={r.title} style={{ padding: '2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)' }}>
                  <div style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontSize: '1.5rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)', lineHeight: 1, marginBottom: '1rem' }}>{String(i + 1).padStart(2, '0')}</div>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', lineHeight: 1.3 }}>{r.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Surfaces treated</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15, maxWidth: '720px' }}>
              Every hard floor, from the most delicate to the most exposed.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {supportedSurfaces.map((s) => (
                <div key={s.label} style={{ padding: '1.5rem', backgroundColor: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px' }}>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.5rem', letterSpacing: '-0.01em' }}>{s.label}</h3>
                  <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              ))}
            </div>
            <p style={{ marginTop: '2.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '720px', fontStyle: 'italic' }}>
              For <strong style={{ color: 'var(--dark)', fontStyle: 'normal' }}>carpet</strong>, see our dedicated <Link href="/en/nettoyage-moquettes" style={{ color: 'var(--terra)', textDecoration: 'underline' }}>hot-water-extraction cleaning</Link> service; the technique is different (water injected then extracted vs mechanical scrubbing).
            </p>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Our method</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              Rotowash scrubbing <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>in six steps.</em>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', margin: '0 0 3rem', maxWidth: '720px', lineHeight: 1.7 }}>
              The Rotowash machine combines rotary mechanical scrubbing, washing and extraction at once. A typical 100 m² job takes 2 to 3 hours, from survey to drying.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {processSteps.map((step) => (
                <div key={step.num} style={{ borderTop: '2px solid var(--terra)', paddingTop: '1.5rem' }}>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--terra)', fontWeight: 700, marginBottom: '0.75rem' }}>{step.num}</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem', fontFamily: 'var(--font-sans)', lineHeight: 1.3 }}>{step.title}</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.7 }}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Use cases</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15, maxWidth: '720px' }}>
              When to schedule scrubbing by activity?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {cas.map((c, i) => (
                <div key={c.secteur} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', padding: '1.75rem 0', borderBottom: i < cas.length - 1 ? '1px solid var(--border)' : 'none', alignItems: 'start' }}>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.4rem', fontFamily: 'var(--font-sans)' }}>{c.secteur}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{c.detail}</div>
                  </div>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700, padding: '0.5rem 1rem', border: '1px solid rgba(44,85,48,0.3)', borderRadius: '999px', whiteSpace: 'nowrap', flexShrink: 0 }}>{c.freq}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '3rem 2rem' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.02em' }}>
              A floor to clean? Tell us about it.
            </h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/en/contact?service=nettoyage-sols" variant="primary" size="md">Request a quote</Button>
              <Button href={`tel:${company.phoneClean}`} external variant="outline" size="md">{company.phone}</Button>
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Frequently asked questions</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              FAQ, floor cleaning
            </h2>
            {faqItems.map((item, i) => (
              <details key={i} style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
                <summary style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--dark)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <span>{item.q}</span>
                  <span style={{ color: 'var(--terra)', fontSize: '1.4rem', lineHeight: 1, flexShrink: 0 }}>+</span>
                </summary>
                <div style={{ fontSize: '0.9rem', color: 'var(--cream-muted)', lineHeight: 1.75, marginTop: '1rem' }}>{item.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 100%, rgba(44, 85, 48, 0.1) 0%, transparent 60%)' }} />
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              A floor to <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>bring back to new?</em>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Tell us the floor type, the area and its general state. We get back to you within 48h with a precise costing.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/en/contact?service=nettoyage-sols" variant="primary" size="lg">Request a quote</Button>
              <Button href="/en/nettoyage-moquettes" variant="outline" size="md">Carpet cleaning</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
