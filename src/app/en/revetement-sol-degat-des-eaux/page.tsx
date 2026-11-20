import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Floor Covering After Water Damage | Insurance Quote',
  description: 'Floor damaged by a water leak: swollen parquet, carpet, vinyl or laminate to redo. CB Sols works after drying, costs the repair and provides the detailed quote your insurer expects. La Rochelle and Charente-Maritime.',
  alternates: {
    canonical: 'https://cbsols.fr/en/revetement-sol-degat-des-eaux',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-degat-des-eaux', en: 'https://cbsols.fr/en/revetement-sol-degat-des-eaux', es: 'https://cbsols.fr/es/revetement-sol-degat-des-eaux', },
  },
  openGraph: {
    title: 'Floor Covering After Water Damage | Insurance Quote | CB Sols',
    description: 'Floor repair after a claim: parquet, carpet, vinyl, laminate. A site visit, a moisture reading, a costed quote for the loss adjuster and the insurer. CB Sols, La Rochelle flooring craftsman.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-degat-des-eaux.jpg', width: 1200, height: 630 }],
  },
}

const piliers = [
  { title: 'The quote your insurer expects', desc: 'A loss adjuster will not settle for a scribbled amount. They need a detailed quote: areas, type of original covering, substrate preparation, removal, supply and laying, line by line. We are used to this formalism. We write a clear, costed and defensible quote, which you pass on as it is to your insurer or the appointed adjuster.' },
  { title: 'We work after drying', desc: 'Laying a floor back over a substrate that is still damp condemns it in advance: blisters, lifting, mould that comes back. We measure the moisture level of the substrate before any re-laying, and we wait until it is sound. That is the difference between a repair that holds and a second claim in six months.' },
  { title: 'Every covering, not just one', desc: 'Swollen parquet, lifting laminate, soaked carpet, lifted vinyl, cupped lino: each material reacts differently to water. We remove, we diagnose the substrate, and we re-lay the right covering, like-for-like or as an upgrade by your choice and the insurer\'s.' },
  { title: 'Craftsmen, not a hotline', desc: `Over 28 years of laying behind us and a workshop twenty minutes from La Rochelle. We come to see the job, we work carefully, we hand back a clean, finished floor. You have a single contact, Valentin, from survey to handover.` },
]

const symptomes = [
  { title: 'Parquet and laminate that swell', desc: 'Wood and laminate panels absorb water, swell and lift at the joints. Once cupped, a laminate does not come back down: it is replaced. A solid parquet can sometimes be sanded and restored, but only after full drying and a diagnosis.' },
  { title: 'Soaked carpet and smells', desc: 'A water-logged carpet dries badly, especially with its underlay. Beyond a few hours, the risks of mould and persistent smell become serious. By the immersion time and the nature of the substrate, we decide between a deep clean and replacement.' },
  { title: 'Lifted vinyl and lino', desc: 'Water seeps under the sheets or tiles, attacks the adhesive and makes the covering blister. Vinyl can sometimes be re-laid if the substrate is sound, but often removal and re-laying are needed to start again on a clean base.' },
  { title: 'Substrate and screed still damp', desc: 'The real issue is often invisible: the screed or slab has taken water. Re-laying over it too soon means redoing the claim. We measure the residual moisture and wait for a sound substrate before re-laying anything.' },
  { title: 'Skirting, thresholds and joins', desc: 'Water does not stop at the covering. Warped skirting, lifted threshold bars, joins between rooms to redo: a clean repair goes through these finishes, often forgotten in hasty quotes.' },
  { title: 'A job to cost, not to improvise', desc: 'Each claim is different: area affected, age of the floor, type of laying, state of the substrate. That is why a serious quote goes through a visit. We look, we measure, we cost accurately, for you and for the insurer.' },
]

const parType = [
  { title: 'Solid parquet', desc: 'After full drying, a solid parquet can sometimes be saved by sanding and restoration. If the boards have moved too much, we replace the affected zones or the whole. We decide after seeing and measuring, never blind.' },
  { title: 'Laminate and floating parquet', desc: 'Laminate takes water badly: as soon as it swells at the joints, it is replaced. We remove, we check the underlay and the substrate, we dry, then we re-lay a new floor, like-for-like or in a more moisture-resistant range if you wish.' },
  { title: 'Carpet', desc: 'By the time spent under water and the type of laying, we weigh up between a thorough injection-extraction clean and replacement. A carpet on a soaked underlay is rarely recoverable. On tiles, we can sometimes replace only the affected zone.' },
  { title: 'Vinyl and lino', desc: 'We remove the lifted sheets or tiles, treat the substrate, dry it, then re-lay a resilient covering. It is the chance to move to a vinyl better suited to wet rooms, welded and raised into a skirting, if the configuration allows.' },
  { title: 'Resilient floor in a wet room', desc: 'Bathroom, utility room, kitchen: after a claim, we favour solutions designed for water, with cove skirting raises and welded joints. Fewer recesses, less moisture pickup, a floor that ages better.' },
  { title: 'Substrate preparation', desc: 'Before any re-laying: removal of the old floor, scraping off the adhesive, screed if needed, a moisture check. A fine floor starts with a sound, flat substrate. It is the invisible part that decides whether the repair will hold over time.' },
]

const etapes = [
  { phase: 'Reporting the claim', qui: 'You, to your insurer', cle: 'Generally within 5 working days. We help with the quote if needed.' },
  { phase: 'Leak search', qui: 'Insurer or plumber', cle: 'Essential before re-laying: the cause must be dealt with.' },
  { phase: 'Substrate drying', qui: 'Natural or dehumidifiers', cle: 'From a few days to several weeks by the scale.' },
  { phase: 'CB Sols visit and quote', qui: 'Valentin, on site', cle: 'Survey, moisture reading, detailed quote for the insurer.' },
  { phase: 'Loss adjuster visit', qui: 'Appointed adjuster', cle: 'Above a certain amount, by your policy.' },
  { phase: 'Settlement agreement', qui: 'You and the insurer', cle: 'The quote is the basis for costing the indemnity.' },
  { phase: 'Removal and preparation', qui: 'CB Sols', cle: 'Old floor, adhesive, screed, final substrate check.' },
  { phase: 'Re-laying the covering', qui: 'CB Sols', cle: 'Laying, finishes, skirting, thresholds. The room handed back clean and finished.' },
]

const process = [
  { step: 'First contact', desc: 'You call us or use the form. We quickly grasp the situation: room affected, type of floor, where the insurance file stands.' },
  { step: 'Site visit', desc: 'We come to see the damaged floor: areas, substrate, type of laying, extent of the damage. Nothing replaces the eye on the ground to cost accurately.' },
  { step: 'Moisture reading', desc: 'We check the residual moisture of the substrate. If it is still damp, we say so, and we wait. Re-laying too early is preparing the next claim.' },
  { step: 'Detailed quote', desc: 'We write a clear, line-by-line quote, designed for the adjuster and the insurer: removal, preparation, supply, laying, finishes.' },
  { step: 'Dialogue with the insurer', desc: 'We adapt the quote to the adjuster\'s requests if needed, we clarify, we justify. We are used to this dialogue.' },
  { step: 'Substrate preparation', desc: 'Removal of the old covering, scraping, screed, substrate treatment. The base must be sound and flat before re-laying.' },
  { step: 'Careful re-laying', desc: 'Laying by our teams, like-for-like or as an upgrade by the agreement: parquet, laminate, carpet, vinyl. Skirting and thresholds redone.' },
  { step: 'Handover', desc: 'We hand you back a clean, finished room, ready to live in. And the documents useful to close the file calmly.' },
]

const cibles = [
  { nom: 'Homeowners', detail: 'Your house or flat has taken water. You want a floor redone cleanly and a quote the insurer accepts without argument. We handle both.' },
  { nom: 'Managing agents and freeholders', detail: 'Water damage between floors, common parts affected: a reliable contact, who hands over a conventional quote, dialogues with the adjuster and works cleanly in an occupied site.' },
  { nom: 'Managers and landlords', detail: 'A let home damaged, a reinstatement between two tenants: a fast repair, a clear quote and coordination with the insurer so a property is not left empty too long.' },
  { nom: 'Shops and offices', detail: 'A flooded professional unit: we fit the work to limit the downtime, we cost for the insurer, and we re-lay a floor suited to the traffic of your establishment.' },
]

const essentiel = [
  'CB Sols reinstates floors damaged by water: parquet, laminate, carpet, vinyl and lino, for homeowners and professionals.',
  'We work after the substrate has dried: the moisture level is measured before any re-laying, to avoid a second claim (blisters, lifting, mould).',
  'We write a detailed, line-by-line quote, designed to be passed to your insurer or the appointed adjuster.',
  'The site visit is essential: each claim differs by the area, the age of the floor, the type of laying and the state of the substrate.',
  'By the agreement with the insurer, the covering is re-laid like-for-like or in a range better suited to moisture.',
  'A firm based in Villedoux near La Rochelle. Work in Charente-Maritime, on Île de Ré, Île d\'Oléron and the La Rochelle area.',
]

const faq = [
  { q: 'My insurer asks me for a floor quote, do you do it?', a: 'Yes, it is one of our most frequent jobs. We travel out to see the damaged floor, we survey the areas and the type of covering, we measure the state of the substrate, then we write a detailed quote: removal, preparation, supply, laying, finishes, line by line. It is exactly the document a loss adjuster or a claims handler expects. You pass it on as it is to your insurer.' },
  { q: 'Must the floor be dry before redoing it?', a: 'Yes, and it is a point on which we do not compromise. Re-laying a covering over a screed or slab still damp condemns the new floor: blisters, lifting, mould coming back from underneath. We measure the residual moisture of the substrate before any re-laying. If it is still too damp, we tell you and we wait, with dehumidifiers if needed. Drying can take from a few days to several weeks by the scale of the damage.' },
  { q: 'How long does it take to dry a substrate after water damage?', a: 'There is no single honest figure to give. It depends on the amount of water, the nature of the substrate, the ventilation of the room and whether dehumidifiers are used. A light infiltration can dry in a few days, a water-logged slab take several weeks. Rather than announce a fixed time, we measure the moisture on site and re-lay when the substrate is really sound. It is the only reliable method.' },
  { q: 'Is a parquet swollen by water necessarily to be changed?', a: 'Not always. A solid parquet can sometimes be recovered after full drying, by sanding and restoration, if the boards have not moved too much. A laminate or floating parquet that has swollen at the joints, on the other hand, does not come back down: it is replaced. We decide after seeing the floor and measuring the substrate, never remotely from a photo.' },
  { q: 'Can a carpet be recovered after water damage?', a: 'It depends on the time spent under water and the type of laying. A carpet briefly wet on the surface can sometimes be saved by a deep injection-extraction clean and fast drying. A carpet water-logged with its underlay, or left damp several days, is rarely recoverable: the risks of mould and persistent smell are too high. On a tile laying, we can sometimes replace only the affected zone.' },
  { q: 'What is the IRSI convention and does it concern me?', a: 'The IRSI convention is an agreement between insurers that organises the handling of water and fire damage up to 5,000 euros excl. VAT of damage per affected unit, mainly in collective buildings and co-ownerships. Below a certain amount, the insurer often indemnifies without an expert visit; above it, a single adjuster is generally appointed. The exact rules, thresholds and excess depend on your policy. Our role is simple and constant: to give you a costed, defensible repair quote, whatever the indemnity framework.' },
  { q: 'What is depreciation and how does it affect the reimbursement?', a: 'Depreciation is the loss of value of an item linked to its age and wear. Many policies apply a depreciation coefficient to an old floor: the insurer then does not reimburse the full price of a new floor. Some policies offer a "new-for-old" cover that reduces or cancels this abatement. It is a point to check in your policy. A clear, detailed quote precisely helps the adjuster cost correctly and limit nasty surprises.' },
  { q: 'Must I do the leak search before calling you?', a: 'The leak search and the repair of the cause are essential before any re-laying: no point redoing a floor if the water comes back. It is often the insurer who organises this search, sometimes a plumber. You can perfectly contact us in parallel: we come to do the survey and the quote while the substrate dries, so as not to lose time on the file.' },
  { q: 'Do you work in co-ownerships and let homes?', a: 'Yes. We work for homeowners as well as for managing agents, co-ownerships, landlords and managers. Water damage between floors, common parts, a home to reinstate between two tenants: we provide a conventional quote, we dialogue with the adjuster and we work cleanly, including when the premises stay occupied.' },
  { q: 'Can you re-lay a different covering from the original?', a: 'Yes, by your choice and the agreement with the insurer. A claim is sometimes the chance to move to a better-suited covering, for example a resilient, welded vinyl in a room exposed to water, in place of a fragile laminate. The insurer generally indemnifies on the basis of the original floor; any difference up to a higher range remains at your expense. We explain clearly what is covered and what is not.' },
  { q: 'Is a visit compulsory or is a quote from a photo enough?', a: 'The visit is essential for a serious quote. A photo does not tell the real state of the substrate, its moisture level, the type of original laying, nor the exact extent of the damage to the skirting and joins. Costing blind risks a wrong quote, refused by the adjuster or insufficient to really reinstate the floor. We prefer to come and see: it is free and with no commitment.' },
  { q: 'Do you work directly with insurers and adjusters?', a: 'We are used to the dialogue with adjusters and claims handlers. We write quotes in the right format, we adjust them if the adjuster asks for clarification, we justify the items. We do not replace your insurer and we do not handle your file for you, but we provide the technical item everyone needs: a clear, reliable repair quote.' },
  { q: 'How much does a floor repair cost after water damage?', a: 'Impossible to give a single price: it all depends on the area affected, the covering, the state of the substrate and the preparation needed. It is precisely the role of the quote, drawn up after a visit. In the context of water damage, this repair is generally covered by the insurer, subject to your policy, the excess and any depreciation. We cost the real figure, you see clearly, and so does the insurer.' },
  { q: 'In which area do you work for water damage?', a: 'CB Sols is based in Villedoux, near La Rochelle, and works in Charente-Maritime, on Île de Ré, Île d\'Oléron, as well as in Rochefort, Saintes, Royan and the La Rochelle area. For a more distant job, let us talk: we study it by the scale of the project.' },
]

export default function RevetementSolDegatDesEauxPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/revetement-sol-degat-des-eaux#service',
        name: 'Floor covering repair after water damage',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
          { '@type': 'Place', name: 'La Rochelle' },
          { '@type': 'Place', name: 'Île de Ré' },
          { '@type': 'Place', name: "Île d'Oléron" },
        ],
        serviceType: 'Reinstatement and replacement of flooring after water-damage claim, quote for insurer',
        description: 'Floor repair after water damage: parquet, laminate, carpet, vinyl and lino. Work after substrate drying, moisture reading, detailed quote for the insurer and adjuster, careful removal and re-laying.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Floor covering after water damage', item: 'https://cbsols.fr/en/revetement-sol-degat-des-eaux' },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'Redoing a floor after water damage',
        description: 'The CB Sols method for reinstating a damaged floor, from reporting the claim to re-laying the covering.',
        step: process.map((p, i) => ({ '@type': 'HowToStep', position: i + 1, name: p.step, text: p.desc })),
      },
      {
        '@type': 'WebPage',
        '@id': 'https://cbsols.fr/en/revetement-sol-degat-des-eaux#webpage',
        url: 'https://cbsols.fr/en/revetement-sol-degat-des-eaux',
        name: 'Floor covering after water damage',
        description: 'CB Sols service: floor repair after water damage, a detailed quote for the insurer, work after the substrate has dried, in Charente-Maritime and the La Rochelle area.',
        dateModified: '2026-10-20',
        inLanguage: 'en',
        isPartOf: { '@id': 'https://cbsols.fr/#website' },
        about: { '@id': 'https://cbsols.fr/en/revetement-sol-degat-des-eaux#service' },
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Floor after water damage</span>
          </div>
          <div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              How do you redo a floor{' '}
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>damaged by water?</em>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '900px' }}>
              Swelling parquet, soaked carpet, blistering vinyl, lifting laminate: after water damage, the temptation is to redo everything fast. That is the mistake. The real issue is the substrate underneath, often still damp. Re-laying too soon is preparing the next claim. Our trade here is to come and see, to measure, to tell you the truth about what is recoverable, and to write the detailed quote your insurer expects. Behind all that, over 28 years of laying and a workshop twenty minutes from La Rochelle.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/en/contact?from=revetement-sol-degat-des-eaux" variant="primary" size="md">Request an insurance quote</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* The essentials */}
      <section style={{ padding: '3.5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>The essentials in brief</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '0.9rem 2.5rem' }}>
            {essentiel.map((t, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.95rem', color: 'var(--dark)', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--terra)', fontWeight: 800, flexShrink: 0, marginTop: '0.05rem' }}>•</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 pillars */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Why go through us</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            The right quote, the right timing, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>and a floor that holds.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {piliers.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What water does */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>What water really does to a floor</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            The visible damage, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>and the one you do not see.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {symptomes.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{i + 1}. {s.title}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By covering type (cards) */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Each material reacts differently</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Repair or replace? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>It is decided on site.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '820px' }}>
            A parquet, a carpet and a vinyl floor do not behave the same way faced with water. Some are recovered after drying, others are replaced. We diagnose material by material, substrate included, before deciding.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {parType.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The quote / working with insurer */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our real role in your file</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', maxWidth: '900px' }}>
            We provide the quote <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>the insurer and the adjuster expect.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem', maxWidth: '900px' }}>
            In a water-damage file, the floor repair is very often covered by the insurer, subject to your policy, the excess and any depreciation. But to cost the indemnity, everyone needs the same thing: a clear, detailed repair quote. That is precisely what we produce. Removal of the old floor, substrate preparation, supply, laying, skirting and finishes: each item is costed, legible by an adjuster as by a claims handler.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, margin: '0 0 2.5rem', maxWidth: '900px' }}>
            We are used to this dialogue. If the adjuster asks for a clarification, we bring it. If an item must be justified, we justify it. We do not handle your file for you and we do not replace your insurer, but we give you the technical item that moves the settlement forward. And whatever the framework, IRSI convention or common law, the principle stays the same: a fair quote protects your interests.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              { t: 'A quote in the right format', d: 'Detailed, costed line by line, with the areas and the type of covering. The document an adjuster can read and validate with no back-and-forth.' },
              { t: 'The dialogue with the adjuster', d: 'We adjust, we clarify, we justify the items if asked. We speak the same technical language.' },
              { t: 'The truth about depreciation', d: 'We explain what counts as new, what may take a depreciation abatement, and why. No false promise.' },
              { t: 'Like-for-like or better', d: 'Re-laying the same floor, or a move to a range better suited to moisture. We tell you what is covered and what is at your expense.' },
            ].map((b, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra)', marginBottom: '0.6rem' }}>{b.t}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{b.d}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2rem', padding: '1.25rem 1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--dark)' }}>Good to know:</strong> the IRSI convention governs, between insurers, the handling of water damage up to 5,000 euros excl. VAT of damage per unit, mainly in buildings and co-ownerships. The expertise thresholds, the excess and depreciation depend on your policy. This page gives a general marker and does not replace your insurer\'s advice.
          </p>
        </div>
      </section>

      {/* CTA inline 1 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A claim to get costed?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            We come to see the floor and cost it for the insurer.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Valentin travels out, looks at the damaged floor, measures the state of the substrate and hands you a detailed quote, ready to pass to your insurer. A free visit with no commitment.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=revetement-sol-degat-des-eaux" variant="primary" size="md">Request my visit</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Drying / moisture (dark) */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra-on-dark)', marginBottom: '1.5rem' }}>The point we never neglect</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.9rem, 3.4vw, 3rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', maxWidth: '960px' }}>
            We never re-lay <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>over a damp substrate.</em>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(248, 245, 238, 0.78)', maxWidth: '900px', margin: '0 0 2.5rem', lineHeight: 1.8 }}>
            It is the most costly mistake after water damage: redoing the floor too fast, over a screed that still has water in it. A few months later, the new covering blisters, lifts, or the mould comes back from underneath. And then the insurer does not pay again. We prefer to measure, to wait as long as it takes, and to re-lay over a substrate that is really sound. It is less spectacular than a 48-hour job, but it is what makes a redone floor last ten years instead of six months.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { t: 'Moisture reading', d: 'We check the residual moisture of the substrate before any re-laying decision. A figure, not an impression.' },
              { t: 'The drying time', d: 'From a few days to several weeks by the damage. We do the quote in the meantime so as not to lose the file.' },
              { t: 'Substrate treatment', d: 'Scraping off the old adhesive, screed, levelling. The base conditions all the rest.' },
              { t: 'Re-laying when it is sound', d: 'We re-lay only when the substrate is ready. No convenience laying over a floor that will re-damage.' },
            ].map((b, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid rgba(248, 245, 238, 0.15)', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra-on-dark)', marginBottom: '0.6rem' }}>{b.t}</div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.7)', lineHeight: 1.65, margin: 0 }}>{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps table */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>The file, step by step</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            As a marker, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>how a file unfolds.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '820px' }}>
            Nothing fixed here: the order and the timings vary by your insurer, the scale of the claim and your policy. It is just an idea of the path. The steps that concern us are the visit, the quote, the preparation and the re-laying.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: '640px' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Step</th>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Who handles it</th>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Note</th>
                </tr>
              </thead>
              <tbody>
                {etapes.map((r, i) => (
                  <tr key={i}>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--border)', fontWeight: 700, color: 'var(--dark)' }}>{r.phase}</td>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--dark)' }}>{r.qui}</td>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--muted)' }}>{r.cle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>From the first call to the room handed back</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Eight steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from the claim to the re-laying.</em>
          </h2>
          <div data-flow="steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {process.map((p, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#fff' }}>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{p.step}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Targets */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Who we talk to</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.03em' }}>
            Homeowners, co-ownerships, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>professionals: we handle all three.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: '1.25rem' }}>
            {cibles.map((m, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra)', marginBottom: '0.5rem' }}>{m.nom}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Know-how / honest proof */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Why trust us</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', maxWidth: '900px' }}>
            Flooring craftsmen, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>not passing installers.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem', maxWidth: '900px' }}>
            CB Sols is over 28 years of floor-covering laying in Charente-Maritime: parquet, carpet, vinyl and lino, for homeowners as well as in hotels, restaurants, shops and public-access venues. Substrate preparation, moisture diagnosis, clean removal and careful re-laying are our daily work. It is exactly this know-how that we bring to water damage.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, margin: 0, maxWidth: '900px' }}>
            We do not subcontract the laying to teams we do not know. You have a single contact, Valentin, from survey to handover. And a workshop in Villedoux, twenty minutes from La Rochelle, where we also make bespoke rugs and carpets. A craftsman\'s work, from the quote to the last skirting join.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/en/realisations" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--terra)', textDecoration: 'none' }}>See our projects →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>The questions we are asked</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Water damage and floors, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>a craftsman&apos;s answers.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faq.map((f, i) => (
              <details key={i} style={{ border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', padding: '1.25rem 1.5rem' }}>
                <summary style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--dark)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <span>{f.q}</span>
                  <span style={{ color: 'var(--terra)', fontSize: '1.2rem', flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.75, margin: '1rem 0 0' }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* See also */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>See also</div>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            A claim is often the chance to start again on a better-suited floor. Discover our laying, upkeep and quote services.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            <Link href="/en/devis-revetement-sol" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Floor-covering quote →</Link>
            <Link href="/en/nettoyage-moquettes" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Carpet cleaning →</Link>
            <Link href="/en/nettoyage-sols" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Floor cleaning →</Link>
            <Link href="/en/particuliers" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>For homeowners →</Link>
            <Link href="/en/realisations" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Our projects →</Link>
            <Link href="/en/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Villedoux showroom →</Link>
          </div>
        </div>
      </section>

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Has water damage spoiled your floors? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>We take care of it.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '680px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            We come to see the damaged floor, we measure the state of the substrate, and we hand you a detailed quote ready for your insurer. Then we re-lay a clean floor, when the substrate is sound. Work in La Rochelle, in Charente-Maritime, on Île de Ré and Île d&apos;Oléron.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=revetement-sol-degat-des-eaux" variant="primary" size="md">Request an insurance quote</Button>
            <Button href="/en/showroom" variant="outline" size="md">Showroom appointment</Button>
          </div>
          <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.6)' }}>
            Or <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.phone}</a> · <a href={`mailto:${company.email}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.email}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
