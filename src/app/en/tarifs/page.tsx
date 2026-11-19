import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Pricing | Why We Don’t Publish a Price Grid',
  description: 'At CB Sols every project is bespoke: area, material, substrate, access, local constraints. Rather than a misleading grid, we provide a real free quote within 48h.',
  alternates: {
    canonical: 'https://cbsols.fr/en/tarifs',
    languages: { 'fr-FR': 'https://cbsols.fr/tarifs', en: 'https://cbsols.fr/en/tarifs' },
  },
}

const reasons = [
  { title: 'Every project has its constraints', body: 'Vinyl in a restaurant kitchen (coved skirtings, heat welding, standard EN 13845) has nothing in common with LVT laid in an office. Applying one bracket would be misleading.' },
  { title: 'The substrate drives 30% of the price', body: 'A fibre-reinforced compound over an old wood floor, a damp substrate, a failing screed: these invisible preparations can double the laying item. Impossible to cost without seeing the substrate.' },
  { title: 'Materials have 20 range levels', body: 'Entry-level office carpet: 30 €/m² fitted. Bespoke EGE Contract carpet for a 5★ hotel suite: 150 €/m² fitted. Same service, 7× the gap. An average bracket would make no sense.' },
  { title: 'Area changes the price per m²', body: '50 m² in a city flat vs 800 m² in a hotel hall: the rate per square metre can vary by 30%. Travel, logistics and team mobilisation are proportional to the size of the project.' },
  { title: 'Access affects timescales', body: 'An upper floor with no lift, pedestrian city-centre delivery, shop hours, laying in an occupied hotel: these constraints add hours and equipment. Impossible to price in theory.' },
  { title: 'We prefer honesty to clickbait', body: 'Many sites show “from 15 €/m²” to attract. Once on site, the final quote triples. We refuse that mechanism. A CB Sols quote is always the real price, no surprises.' },
]

const steps = [
  { num: '01', title: 'First exchange', body: 'Phone, WhatsApp or form. You describe your space, its use, your expectations.' },
  { num: '02', title: 'Free technical visit', body: 'We come on site to measure, survey the substrate, identify the constraints. Free, no obligation.' },
  { num: '03', title: 'Showroom selection', body: 'You come to Villedoux to choose the materials from 500+ samples. We guide you by your use and budget.' },
  { num: '04', title: 'Detailed quote within 48h', body: 'Measurements, supply, substrate preparation, laying, labour, VAT: all readable line by line. No opaque lump sum.' },
]

const garanties = [
  { title: 'Free travel and quote', desc: "Anywhere in Charente-Maritime, Île de Ré and Île d'Oléron. With no obligation." },
  { title: 'Firm, final price', desc: 'The quote figure is the invoice figure. No surprise supplement halfway through the project.' },
  { title: 'Readable detail', desc: 'Supply, laying, substrate preparation, VAT: each item is itemised. You know exactly what you are paying for.' },
  { title: 'Payment at the end', desc: 'A 30% deposit, the balance on handover after approval.' },
  { title: 'Ten-year guarantee', desc: 'All our installations are covered. Certificates provided on request.' },
]

const postes = [
  { num: '01', title: 'The removal', body: 'Varies by the type of covering and its weight. A laminate floor is a heavy waste, more costly per m² to dispose of than carpet. Tip disposal included, recycling certificate available.' },
  { num: '02', title: 'The anti-damp barrier', body: 'Mandatory on ground floors with no polythene under the screed, a crawl space or ventilated cellar. Its presence or not must be explicit; without it, the ten-year guarantee is compromised.' },
  { num: '03', title: 'The levelling compound', body: 'Mandatory in almost all renovation projects. Standard P3 for concrete substrates, fibre-reinforced (more expensive) on wood substrates or for heavy thicknesses. What makes the difference between a floor that lasts 15 years and one that marks within 6 months.' },
  { num: '04', title: 'The supply', body: 'The price varies with the type (sheet/tile/plank vinyl, carpet tiles or broadloom), the brand, and the quantity, the larger the cheaper per m². We receive the material, check quantities and colours (manufacturer batches), cut in the workshop.' },
  { num: '05', title: 'The laying', body: 'Varies by the covering, the quantity, the type of laying (straight vs herringbone vs curved inlay), the access difficulties and parking. A simple laying and a technical one are a world apart in time spent.' },
  { num: '06', title: 'Accessories & accessibility', body: 'Stair nosings and threshold bars by the chosen material: brass (high-end), aluminium (standard), brushed stainless steel. For public buildings, reduced-mobility accessibility with mandatory tactile studs.' },
]

export default function TarifsPageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(44, 85, 48, 0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '920px', margin: '0 auto', position: 'relative' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Pricing</div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Why we don&apos;t publish<br />
            <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>a price grid.</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--cream-muted)', lineHeight: 1.7, maxWidth: '680px', marginBottom: '2rem' }}>
            At CB Sols, every project is handled <strong style={{ color: 'var(--dark)' }}>individually</strong>, whether for a private client or a professional. Showing a generic bracket would be imprecise at best, misleading at worst. We prefer to take the time to understand your project before costing it.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.7, maxWidth: '680px', marginBottom: '1.25rem' }}>
            Our commitment: a <strong style={{ color: 'var(--dark)' }}>detailed, free quote within 48h</strong>, with no hidden costs or post-signature revision.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--cream-muted)', lineHeight: 1.7, maxWidth: '680px', marginBottom: '2.5rem', fontStyle: 'italic' }}>
            To help you <strong style={{ color: 'var(--dark)', fontStyle: 'normal' }}>budget in advance</strong>, our <Link href="/en/guide" style={{ color: 'var(--terra)', textDecoration: 'underline' }}>costed guides</Link> give the market brackets item by item (laying, levelling compound, supply). They are teaching benchmarks, not our price grid: your real price comes from the quote.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button href="/en/contact" variant="primary" size="lg">Request my quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'none', borderRadius: '999px', fontWeight: 500 }}>
              {company.phone}
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Our approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15, maxWidth: '720px' }}>
            Six reasons a bespoke quote is fairer.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {reasons.map((r, i) => (
              <div key={r.title} style={{ padding: '2rem', backgroundColor: 'var(--bg)', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)' }}>
                <div style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontSize: '1.5rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)', lineHeight: 1, marginBottom: '1rem' }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', lineHeight: 1.3 }}>{r.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Our quoting approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
            How we cost a project.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem' }}>
            {steps.map((step) => (
              <div key={step.num} style={{ borderTop: '2px solid var(--terra)', paddingTop: '1.5rem' }}>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--terra)', fontWeight: 700, marginBottom: '0.75rem' }}>{step.num}</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.75rem', fontFamily: 'var(--font-sans)' }}>{step.title}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.7 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>What you are certain to get</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
            Our pricing commitments.
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {garanties.map((g) => (
              <li key={g.title} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '1.25rem 1.5rem', backgroundColor: 'var(--bg)', border: '1px solid var(--border)' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--terra)', marginTop: '0.5rem', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.3rem' }}>{g.title}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{g.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>The 6 items of a serious quote</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
            What should a <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>floor-laying quote contain?</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', maxWidth: '720px', lineHeight: 1.7, marginBottom: '3rem' }}>
            Our quotes follow the guidance of the <strong style={{ color: 'var(--dark)' }}>DTU 53.12</strong>, the national reference for good practice in laying glued floor coverings. Each item is itemised so you can compare rationally and understand where your money goes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {postes.map((p) => (
              <div key={p.num} style={{ padding: '1.75rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)', borderRadius: '8px' }}>
                <div style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontSize: '1.4rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)', lineHeight: 1, marginBottom: '0.75rem' }}>{p.num}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.6rem', lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--cream-muted)', lineHeight: 1.7, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem', padding: '2rem 2.25rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--terra)', borderRadius: '10px', display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'center' }} className="no-subcontract-card">
            <div>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.5rem', fontWeight: 700 }}>The human factor</div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.6rem', letterSpacing: '-0.01em' }}>
                A team of qualified floor-layers. No subcontractor.
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--cream-muted)', lineHeight: 1.7, margin: 0, maxWidth: '640px' }}>
                Every CB Sols project is laid by our own team, supervised by Valentin Prévoteau. This continuity guarantees compliance with the original specification, with schedules, and the fast clearing of snags. A firm that subcontracts can show a lower price; the gap pays the subcontractor and the intermediary margin.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href="/en/guide/comprendre-un-devis-pose-de-sol" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.95rem 1.75rem', border: '1.5px solid var(--terra)', color: 'var(--terra)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 700, borderRadius: '999px' }}>
              Read the full guide: how to decode a quote →
            </Link>
          </div>
        </div>
      </section>

      <style>{`@media (max-width: 720px) { .no-subcontract-card { grid-template-columns: 1fr !important; } }`}</style>

      <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 100%, rgba(44, 85, 48, 0.1) 0%, transparent 60%)' }} />
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
            Let&apos;s talk about <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>your project.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Describe your space to us. We get back to you within 48h with a precise quote, no surprises.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href={`/en/contact?from=tarifs`} variant="primary" size="lg">Request a quote</Button>
            <Button href="/en/showroom" variant="outline" size="md">Visit the showroom</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
