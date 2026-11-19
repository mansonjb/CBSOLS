import type { Metadata } from 'next'
import Link from 'next/link'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { BreadcrumbLD } from '@/components/BreadcrumbLD'

export const metadata: Metadata = {
  title: 'Professional Carpet Cleaning | CB Sols La Rochelle',
  description: 'Carpet cleaning by hot-water extraction in La Rochelle, Île de Ré and Charente-Maritime. Hotels, offices, restaurants, private homes. Free quote, work with no interruption to activity.',
  alternates: {
    canonical: 'https://cbsols.fr/en/nettoyage-moquettes',
    languages: { 'fr-FR': 'https://cbsols.fr/nettoyage-moquettes', en: 'https://cbsols.fr/en/nettoyage-moquettes' },
  },
}

const reasons = [
  { title: 'Preserve the lifespan', body: 'A regularly cleaned carpet lasts 12 to 15 years in a rating-33 office, against 5 to 7 years without upkeep. Embedded dirt mechanically wears the fibres with every footfall, like sandpaper.' },
  { title: 'Restore the colours', body: 'Dulling is not wear, it is a micrometric layer of dust on the fibres. Professional hot-water extraction restores 80 to 95% of the original brightness, sometimes on 10-year-old carpets.' },
  { title: 'Improve air quality', body: 'A carpet stores 4 to 8 times its weight in dust, allergens and skin flakes. A vacuum only extracts the surface. Hot-water extraction pulls out the deep particles, a direct benefit for offices and hotels.' },
  { title: 'Remove odours and stains', body: 'Coffee, wine, pet urine, food marks: our pre-treatment products tailored to each type of stain, followed by high-pressure extraction, remove what no home cleaning can.' },
  { title: 'Professional hygiene compliance', body: 'In hotels, catering, healthcare and public bodies, periodic cleaning is documentable (a service certificate), useful for hygiene checks, ISO standards and chain audits.' },
  { title: 'Prepare for intensive use', body: 'Before the hotel high season, after a professional event, at the start of the school year for schools: a deep clean restores the carpet’s full resistance for the use to come.' },
]

const processSteps = [
  { num: '01', title: 'Survey and preparation', body: 'Inspection of the zones, identification of stubborn stains (wine, ink, grease), a colour-fastness test on a discreet area. Prior mechanical vacuuming to remove dry particles.' },
  { num: '02', title: 'Targeted pre-treatment', body: 'Application of specific stain removers by type of stain. A controlled dwell time (5 to 15 min). Light brushing to penetrate the fibres without damaging them.' },
  { num: '03', title: 'Low-pressure injection-extraction', body: 'Our professional injector-extractor sprays a detergent solution at controlled pressure (9 bar maximum) and controlled temperature (20 °C maximum). Too much heat degrades the fibres and fixes some stains: low temperature maximises cleaning efficiency. The machine extracts the solution instantly, drawing out the suspended dirt.' },
  { num: '04', title: 'Rinse with demineralised water', body: 'A second pass with demineralised water to remove all product residue. Demineralised water avoids limescale rings and post-cleaning dulling. Without this step, the carpet re-soils twice as fast, this is what sets a professional clean apart from a hired machine.' },
  { num: '05', title: 'Brushing and drying', body: 'Brushing the fibres in the direction of the pile to lift the yarn, followed by active drying (2 to 4 h of ventilation). The room is usable again within half a day for most projects.' },
  { num: '06', title: 'Final inspection', body: 'Visual and touch validation with you. If a stain resists, a second targeted pass. Delivery of a summary service sheet (useful for your records and checks).' },
]

const frequences = [
  { secteur: 'Hotels, bedrooms', freq: '1 to 2 times a year', detail: 'After each high season + a spring clean. Spot stain treatment between passes based on housekeeping feedback.' },
  { secteur: 'Hotels, corridors and halls', freq: '2 to 4 times a year', detail: 'Intensive traffic, frequent food stains. A quarterly schedule secures the carpet’s lifespan.' },
  { secteur: 'Offices and open-plan', freq: 'Once a year', detail: 'Ideally in July-August on public holidays or during closures. Possible in occupied premises.' },
  { secteur: 'Restaurants, dining-room carpet', freq: '2 to 3 times a year', detail: 'Wine, coffee, splashes: the frequency depends on the type of service. Spot stain treatment included in our annual contracts.' },
  { secteur: 'Healthcare establishments', freq: '2 to 4 times a year', detail: 'Hygiene is a priority. We work in zones, with no closure of the service. Products compatible with RABC standards.' },
  { secteur: 'High-end residential', freq: 'Every 12 to 24 months', detail: 'Second homes on Île de Ré: a clean before high season protects your carpet all year.' },
]

const faqItems = [
  { q: 'How long before you can walk on it again?', a: 'With active drying (ventilation), the carpet is usable in 2 to 4 hours. Without ventilation, allow 6 to 12 hours. We always adapt our work to your activity schedule.' },
  { q: 'Does cleaning damage the carpet?', a: 'No, provided the right equipment and products are used. The opposite is true: not cleaning a professional carpet damages it far faster (abrasive particles wear the fibres with every footfall). We always test colour-fastness before a full treatment.' },
  { q: 'What is the difference from a hired consumer machine?', a: 'Three major differences: (1) control of the technical parameters, 9 bar maximum pressure and 20 °C maximum temperature, where consumer hire machines heat the water and apply random pressures that degrade the fibres; (2) systematic rinsing with demineralised water (forgotten in 90% of DIY hires, and tap water leaves limescale rings); (3) products matched to the fibre type (wool, polyamide, polypropylene react differently).' },
  { q: 'Can you work without closing my hotel or office?', a: 'Yes. For hotels, we work room by room as they free up, or floor by floor in low season. For offices, we work in occupied premises outside operating hours. No loss of activity.' },
  { q: 'How much does professional carpet cleaning cost?', a: 'The rate depends on the area, the initial state, the fibre type and the access. As a guide, allow 4 to 8 € ex-VAT/m² for a simple office clean, 6 to 12 € ex-VAT/m² for premium hotel carpet with deep stain treatment. Free quote after a visit.' },
  { q: 'Do you guarantee the result?', a: 'We guarantee the maximum extraction possible given the age and state of the carpet. Some very old stains (ink dried for 5 years, burns) never come out 100%. We identify these cases upfront, no nasty surprises.' },
  { q: 'Do you offer annual contracts?', a: 'Yes, for hotels, restaurants and offices we offer annual contracts with a fixed schedule (1 to 4 visits/year), negotiated rates, priority response in an emergency (a stain, an event). Ask us for a bespoke proposal.' },
  { q: 'Do you work on bespoke rugs?', a: 'Yes, we also clean our own bespoke rugs and those of other makers. Large rugs can be treated on site; precious rugs (wool, silk) can be taken to the workshop for specific treatment.' },
]

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Professional carpet cleaning',
  description: 'Hot-water-extraction carpet cleaning for hotels, offices, catering and premium residential. La Rochelle, Île de Ré, Charente-Maritime.',
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

export default function NettoyageMoquettesPageEn() {
  return (
    <>
      <BreadcrumbLD
        items={[
          { name: 'CB Sols', url: 'https://cbsols.fr/en' },
          { name: 'Services', url: 'https://cbsols.fr/en/services' },
          { name: 'Carpet cleaning', url: 'https://cbsols.fr/en/nettoyage-moquettes' },
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
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Carpet cleaning</span>
            </nav>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.75rem', padding: '0.35rem 0.9rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(44, 85, 48, 0.08)', borderRadius: '999px' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'inline-block' }} />
              <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 600 }}>Service · Professional upkeep</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0, maxWidth: '900px' }}>
              Carpet cleaning<br />
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>by hot-water extraction.</em>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--cream-muted)', maxWidth: '700px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Restoring a professional carpet rather than replacing it. Periodic work preserves the fibre, restores the colours, removes 95% of allergens and extends your covering’s life by 30 to 50%. We work in La Rochelle, on Île de Ré, Île d&apos;Oléron and the whole of Charente-Maritime.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/en/contact?service=nettoyage" variant="primary" size="lg">Request a quote</Button>
              <Button href={`tel:${company.phoneClean}`} external variant="outline" size="md">{company.phone}</Button>
            </div>
          </div>
        </section>

        <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '2rem' }}>
            {[
              { val: '×2', label: 'Carpet lifespan' },
              { val: '95%', label: 'Of allergens extracted' },
              { val: '9 bar', label: 'Max pressure, protects the fibres' },
              { val: '20 °C', label: 'Max temperature, optimal efficiency' },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', lineHeight: 1, marginBottom: '0.5rem' }}>{s.val}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.08em', lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Why clean</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.15, maxWidth: '720px' }}>
              A cleaned carpet lasts twice as long.
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', margin: '0 0 3rem', maxWidth: '640px', lineHeight: 1.7 }}>
              Periodic cleaning is not a luxury, it is a conservation measure. Six concrete reasons to schedule it.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
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
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Our method</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              Hot-water extraction <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>in six steps.</em>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', margin: '0 0 3rem', maxWidth: '720px', lineHeight: 1.7 }}>
              A typical 100 m² job takes 3 to 4 hours, from survey to drying. Here is exactly what we do on each pass.
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

        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Recommended frequencies</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15, maxWidth: '720px' }}>
              How often to clean by activity?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {frequences.map((f, i) => (
                <div key={f.secteur} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', padding: '1.75rem 0', borderBottom: i < frequences.length - 1 ? '1px solid var(--border)' : 'none', alignItems: 'start' }}>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.4rem', fontFamily: 'var(--font-sans)' }}>{f.secteur}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{f.detail}</div>
                  </div>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700, padding: '0.5rem 1rem', border: '1px solid rgba(44, 85, 48, 0.3)', borderRadius: '999px', whiteSpace: 'nowrap', flexShrink: 0 }}>{f.freq}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inline CTA (EN) */}
        <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.02em' }}>
              A carpet to clean? Tell us about it.
            </h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/en/contact?service=nettoyage" variant="primary" size="md">Request a quote</Button>
              <Button href={`tel:${company.phoneClean}`} external variant="outline" size="md">{company.phone}</Button>
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Annual contract</div>
                <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                  Why plan the upkeep <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>rather than endure it.</em>
                </h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  For hotels, restaurants and offices, we offer annual maintenance contracts with a fixed schedule (1 to 4 visits a year), negotiated rates and priority response in an emergency (a stain, a client event).
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                  This approach is three to five times cheaper than a full replacement, and it preserves your covering’s manufacturer guarantee.
                </p>
                <Button href="/en/contact?service=nettoyage-contrat" variant="primary" size="md">Request a proposal</Button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { label: 'Fixed annual schedule', desc: 'You know when we come, no chasing to do.' },
                  { label: 'Negotiated rate', desc: '15 to 25% below the one-off rate.' },
                  { label: 'Emergency stain treatment included', desc: 'A stain after an event? We come within 48h.' },
                  { label: 'Service certificate', desc: 'A time-stamped document for your hygiene and chain audits.' },
                ].map((item) => (
                  <div key={item.label} style={{ padding: '1.25rem 1.5rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)', borderLeft: '3px solid var(--terra)' }}>
                    <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.4rem', fontFamily: 'var(--font-sans)' }}>{item.label}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Frequently asked questions</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              FAQ, carpet cleaning
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

        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Go further</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              Replacing rather than maintaining?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {[
                { href: '/en/services/pose-moquette', title: 'New carpet laying', desc: 'EGE: selection in the showroom, laid by our team.' },
                { href: '/en/solutions/moquette-hotel', title: 'Hotel carpet', desc: 'Dedicated solutions for bedrooms, corridors, common areas.' },
                { href: '/en/guide/entretien-moquette-professionnelle', title: 'Carpet care guide', desc: 'Vacuuming, stains, frequencies, products: the complete guide.' },
                { href: '/en/realisations', title: 'See our projects', desc: 'Hôtel La Baronnie, 3★ restaurant, Golf de la Prée…' },
              ].map((c) => (
                <Link key={c.href} href={c.href} style={{ textDecoration: 'none', display: 'block' }}>
                  <article style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem', transition: 'transform 0.2s, box-shadow 0.2s' }} className="service-card">
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: 0, lineHeight: 1.3 }}>{c.title}</h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6, flex: 1 }}>{c.desc}</p>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700, marginTop: '0.5rem' }}>View →</div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 100%, rgba(44, 85, 48, 0.1) 0%, transparent 60%)' }} />
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              A carpet to <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>bring back to life?</em>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Tell us the area, the use and how long since the last clean. We get back to you within 48h with a precise costing and a proposed schedule.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/en/contact?service=nettoyage" variant="primary" size="lg">Request a quote</Button>
              <Button href="/en/showroom" variant="outline" size="md">Visit the showroom</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
