import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Free Floor Covering Quote | Reply Within 48h',
  description: 'Request your free, no-obligation floor covering quote: carpet, vinyl, bespoke rugs. Reply within 48h in Charente-Maritime. CB Sols, over 28 years of experience.',
  alternates: {
    canonical: 'https://cbsols.fr/en/devis-revetement-sol',
    languages: { 'fr-FR': 'https://cbsols.fr/devis-revetement-sol', en: 'https://cbsols.fr/en/devis-revetement-sol' },
  },
}

const waNumber = company.phoneClean.replace('+', '')
const waMessage = encodeURIComponent('Hello CB Sols, I would like a quote for my project.')

const reassurances = [
  { title: '100% free', desc: 'Visit and costing included' },
  { title: 'Reply within 48h', desc: 'A single point of contact' },
  { title: 'No obligation', desc: 'You stay free to decide' },
]

const etapes = [
  { step: 'You describe your project', desc: 'Floor type, room concerned, approximate area, your town. It takes two minutes, and a doubt about the area is not a problem, that is what we are here for.' },
  { step: 'We talk and measure', desc: 'A call to pin down the need, then an on-site visit when it helps. We check the substrate, take exact measurements, and advise you on the right material.' },
  { step: 'You receive your quote', desc: 'A clear document within 48 hours, itemised line by line. You take your time to think. You are free to accept or not, with no pushy chasing.' },
]

const inclus = [
  'The supply of the chosen covering, brand and range stated',
  'Substrate preparation, levelling compound included if needed',
  'Laying by us, never subcontracted',
  'The finishes, skirtings, threshold bars and junctions',
  'Carting away and cleaning the site at the end of the laying',
  'The ten-year structural guarantee and our commitment to the finish',
]

const faq = [
  { q: 'Is the quote really free?', a: 'Yes, entirely. Studying your project, the on-site visit and the detailed costing cost you nothing and commit you to nothing. You only pay if you decide to entrust the work to us.' },
  { q: 'How long before I get a reply?', a: 'We commit to getting back to you within 48 working hours of your request. In practice, a first contact often happens the next day to frame the need and arrange a visit if useful. The detailed quote reaches you within the two days following our exchange or visit. If your project is urgent, tell us and we do our best to speed up. You are never left without news: if we need a detail, we call you rather than letting your request sit.' },
  { q: 'Do you always have to travel out?', a: 'Not always. For a simple, well-described project, carpet in a bedroom for example, we can often draw up a first costing remotely, from your measurements and a few photos. However, as soon as the substrate is uncertain, the area large or the finishes delicate, a visit remains the guarantee of a fair quote. It is free and with no obligation. Often ten minutes on site avoid a nasty surprise mid-project.' },
  { q: 'Do you work in my town?', a: "We work across the whole of Charente-Maritime, from La Rochelle to Royan via Rochefort, Saintes, Île de Ré and Île d'Oléron. We also regularly travel beyond, across Nouvelle-Aquitaine, for private or professional projects. If you are in doubt about your town, call us or state it in the form: we will tell you frankly whether the travel makes sense for your project. We prefer to be honest upfront rather than leave you hoping for work we could not do properly." },
  { q: 'Am I committed if I accept the quote?', a: 'Accepting the quote simply confirms you want to start the work on the stated terms. Until you have signed it, you are committed to nothing, and even after the visit you remain perfectly free. Once signed, the quote acts as a contract: it fixes the price, the services and the agreed timescales, which protects you as much as us. No figure that changes along the way, no service added without your agreement. That is precisely the role of a detailed quote.' },
  { q: 'Can you cost laying over an existing floor?', a: 'Yes, and it is very common. In many cases, a new covering can be laid directly over tiles, an old wood floor or an existing carpet, provided the substrate is sound and stable. This avoids the cost and noise of a removal. It all depends on the real state of the existing floor: a tile that sounds hollow, a wood floor that moves or a carpet soaked with damp change things. That is exactly what we check at the visit, to tell you what is feasible and what will last. The quote always states the chosen solution.' },
  { q: 'Does the quote include removing the old floor?', a: 'When removal is needed, it appears clearly in the quote, with its detailed cost and the carting away of rubble. When we can lay directly over the existing floor, that line disappears and you see the saving at once. Our principle is simple: you must understand every item on the invoice, removal included. No vague lump sum, no surprise on the day. If after opening the site we find a serious hidden issue under the old floor, we warn you and confirm together before going further.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://cbsols.fr/en/devis-revetement-sol#service',
      name: 'Free floor covering quote',
      provider: { '@id': 'https://cbsols.fr/#localbusiness' },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
        { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        { '@type': 'Country', name: 'France' },
      ],
      serviceType: 'Floor-covering quotation and costing',
      description: 'A free, no-obligation quote for laying floor coverings: carpet, vinyl, bespoke rugs. On-site visit, detailed line-by-line costing, reply within 48 hours in Charente-Maritime.',
    },
    { '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
        { '@type': 'ListItem', position: 2, name: 'Floor covering quote', item: 'https://cbsols.fr/en/devis-revetement-sol' },
      ],
    },
  ],
}

export default function DevisRevetementSolPageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ padding: '5rem 2rem 3.5rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(44, 85, 48, 0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '920px', margin: '0 auto', position: 'relative' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Free quote</div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Your floor covering quote,<br />
            <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>free, within 48h.</em>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--cream-muted)', lineHeight: 1.7, maxWidth: '680px', marginBottom: '2rem' }}>
            Carpet, vinyl flooring, bespoke rugs: request your free, no-obligation quote. On-site visit, detailed line-by-line costing, over 28 years of experience in Charente-Maritime.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {reassurances.map((r) => (
              <div key={r.title} style={{ minWidth: '160px' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--terra)' }}>{r.title}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '2rem' }}>How it works</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem' }}>
            {etapes.map((e, i) => (
              <div key={e.step} style={{ borderTop: '2px solid var(--terra)', paddingTop: '1.5rem' }}>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--terra)', fontWeight: 700, marginBottom: '0.75rem' }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.75rem', fontFamily: 'var(--font-sans)' }}>{e.step}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.7 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>What the quote includes</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {inclus.map((it) => (
                <li key={it} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--dark-2)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--terra)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '14px', padding: '2rem', borderLeft: '3px solid var(--terra)' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem', fontWeight: 700 }}>Request your quote</div>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, margin: '0 0 1.75rem' }}>
              Call us, email your plans or a few photos, or message us on WhatsApp. We reply within 48 working hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Button href={`tel:${company.phoneClean}`} external variant="primary" size="md" style={{ display: 'flex', width: '100%' }}>Call {company.phone}</Button>
              <Button href={`mailto:${company.email}`} external variant="outline" size="md" style={{ display: 'flex', width: '100%' }}>Email us</Button>
              <a href={`https://wa.me/${waNumber}?text=${waMessage}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.875rem 2rem', border: '1.5px solid var(--border-strong)', color: 'var(--dark-2)', fontSize: '0.82rem', textDecoration: 'none', borderRadius: '999px', fontWeight: 600 }}>WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Frequently asked questions</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
            Your questions about the quote
          </h2>
          {faq.map((item, i) => (
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
    </div>
  )
}
