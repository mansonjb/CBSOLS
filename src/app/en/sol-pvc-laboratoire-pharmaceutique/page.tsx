import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Baby, Building2, GraduationCap, Mail, Pill, Stethoscope, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pharmaceutical Laboratory Vinyl Flooring | Lab, Pharmacy, Cosmetics',
  description: 'Vinyl flooring laid for pharmaceutical labs, analysis labs, pharmacies and cosmetics labs. Seamless continuous finish, site rigour, validated by quality audits. CB Sols, over 28 years of know-how.',
  alternates: {
    canonical: 'https://cbsols.fr/en/sol-pvc-laboratoire-pharmaceutique',
    languages: { 'fr-FR': 'https://cbsols.fr/sol-pvc-laboratoire-pharmaceutique', en: 'https://cbsols.fr/en/sol-pvc-laboratoire-pharmaceutique' },
  },
  keywords: ['laboratory vinyl flooring', 'pharmacy flooring', 'cosmetics lab flooring', 'analysis lab flooring', 'pharmaceutical flooring'],
  openGraph: {
    title: 'Vinyl flooring for laboratories, rigour and finish',
    description: 'Vinyl flooring laid for pharmaceutical, cosmetics, analysis labs and pharmacies. Continuous finish, cove skirting, a rigorous site. CB Sols.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/sol-pvc-laboratoire-pharmaceutique.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Analysis laboratories', desc: 'You run a medical or food analysis lab. We lay heat-welded wide sheets in a light shade. The slightest soiling shows at once. The skirting rises into a cove 10 cm up. The quality audit passes without a hitch.' },
  { title: 'Retail pharmacies', desc: 'You run a pharmacy with sales, dispensing and storage. The floor takes the customers, the pallets and the daily cleaning. We choose a light shade in sales, a more marked one in the store. The range stays coherent from end to end.' },
  { title: 'Cosmetics laboratories', desc: 'You make cosmetics, you handle pigments and essential oils. The floor must hold without staining or yellowing. We lay a high-density matt-finish vinyl, in a light palette that shows off the cleanliness of your workshop.' },
  { title: 'Raw-materials store and buffer zones', desc: 'Your buffer zones see pallet trucks and light trolleys pass. We lay a vinyl that resists mechanically, in continuity with the production zone. The airlocks change shade to mark out the zones, with no extra floor markings.' },
]

const exigences = [
  { title: 'A one-piece floor, with no visible seam', desc: 'The sheets are laid in large widths, heat-welded, the welds levelled by hand. To the eye, the floor looks like a single piece. That is what makes a good impression during an audit. And day to day, no more seams where dirt could lodge.' },
  { title: 'The skirting rises into a rounded cove', desc: 'The vinyl rises up the wall, in a gentle curve, ten centimetres. No more right angle where dust builds up. The mop passes in a single move, with no dead corner. A discreet detail that shows at once during an audit visit.' },
  { title: 'Light floors to spot a drop', desc: 'We choose off-white, very light grey, soft beige. It is not just a question of looks. Your operators see a mark on the floor immediately, a deposit, something to clean up. It is a discreet working tool that supports your quality culture every day.' },
  { title: 'We come when production stops', desc: 'A lab is not stopped for us. We fit the work to your maintenance windows or technical shutdowns. Everything is prepared at Villedoux before we arrive. On site, we lay fast, we clean as we go. Your teams start again at the agreed time.' },
  { title: 'We give you the audit file', desc: 'We provide the technical sheets, the fire rating, the indoor-air rating, the certificates, the lot traceability. You file that in your quality dossier, ready for the next audit. You have nothing to compile yourself.' },
  { title: 'Your teams clean as usual', desc: 'No special protocol, no product to order from a catalogue. The floor cleans with what your team already uses: water, neutral detergent, disinfectant if needed. We leave a one-page sheet when we go. No training to organise.' },
]

const materiaux = [
  { name: 'Welded wide-sheet vinyl', desc: 'This is our standard in labs. Two-metre sheets, heat-welded to each other and to the skirting. The finish is impeccable, continuous, with no visible seam. The floor takes solvents, weak acids and common alcohols. An A+ indoor-air rating, cleanroom-compatible for most references. Gerflor Mipolam or Tarkett iQ Optima by need.' },
  { name: 'High-resistance vinyl for wet zones', desc: 'For the benches and washing zones where water and products run constantly, we raise the skirting to fifteen or twenty centimetres, sometimes up to the worktop. The surface is slightly textured for grip, but stays easy to clean. Forbo Surestep or Polyflor by configuration.' },
  { name: 'Non-slip floors for technical zones', desc: 'In technical rooms and the circulation zones between docks, slip resistance is a staff-safety matter. We choose references that really grip, without sacrificing ease of cleaning. Often more marked colours to visually mark out the circulation zones.' },
  { name: 'Threshold profiles and cove skirting', desc: 'This is what makes a lab-quality finish. The threshold profiles between airlocks and production zones are flush, they do not hamper the trolleys and pallet trucks. The cove skirting makes the continuous link between floor and wall over ten centimetres, with no angle or visible seam.' },
]

const marques = [
  { name: 'Gerflor', desc: 'The Lyon-based French maker we know inside out. Their Mipolam fits out half the French pharmaceutical and cosmetics production sites. A matt finish, an extended light palette.' },
  { name: 'Tarkett', desc: 'Their iQ Optima and iQ Granit fit out laboratories across Europe. Proven chemical resistance, long durability, complete product traceability for your audits.' },
  { name: 'Forbo', desc: 'When the project calls for something natural or for wet zones, we look at Forbo. Their Surestep takes the washing zones, their Sphera covers the clean zones. A complete range, solid references.' },
  { name: 'Polyflor', desc: 'The British maker of high-density vinyl. Good chemical and mechanical performance, a wide catalogue. We bring them out for the most demanding technical environments.' },
  { name: 'Altro', desc: 'The British maker specialised in technical floors for pharma and food. Their high-end non-slip floors last over time without degrading.' },
  { name: 'Romus', desc: 'Our supplier of profiles and cove skirting. Essential for a careful lab laying. Their range is wide, we always find what each configuration needs.' },
  { name: 'Sika', desc: 'Our technical adhesives and primers. We choose them for their compatibility with lab chemicals and their resistance over time to repeated cleaning.' },
  { name: 'Wakol', desc: 'The German maker of adhesives and resins for technical floors. We bring them out on difficult substrates and on sites with a tight deadline. Proven solutions, never let down.' },
]

const quartiers = [
  { nom: 'Medical analysis laboratories', detail: 'Pre-analytical, biology, haematology, biochemistry, microbiology. A light welded-sheet floor, cove skirting, a continuous finish between the benches and the circulation zones.' },
  { nom: 'Food analysis laboratories', detail: 'Food microbiology, quality control, sensory. A floor easy to wash, compatible with food products passing through, visual legibility of any splashes.' },
  { nom: 'Environmental analysis laboratories', detail: 'Water, soil, air, pollutants. A varied technical space, light and marked floors by zone, robustness for samples and field equipment passing through.' },
  { nom: 'Retail pharmacies', detail: 'Sales area, counter, back office, compounding, store. Visual continuity between spaces, a light welcoming palette for the sales zone.' },
  { nom: 'Cosmetics formulation labs', detail: 'Weighing, mixing, heating, samples. Floors resistant to pigments, essential oils and alcohols, a matt finish that does not mark.' },
  { nom: 'Cosmetics packaging labs', detail: 'Filling lines, labelling, boxing. A floor durable under trolleys and pallets, a light non-slip for operator safety.' },
  { nom: 'Quality-control laboratories', detail: 'Sampling, physico-chemical analysis, batch-release validation. A light floor for visual reading, an impeccable finish for client audits.' },
  { nom: 'Raw-materials store', detail: 'Receipt, quarantine, storage, sampling. A floor resistant to pallets and pallet trucks, a shade transition with the airlocks.' },
  { nom: 'Transfer airlocks and changing rooms', detail: 'Gowning, de-gowning, hand washing. A non-slip floor, watertight skirting, a light palette to visually mark the transition to the clean zone.' },
  { nom: 'Pharmaceutical production zones', detail: 'Manufacture, forming, primary packaging. A continuous floor in large sheets, cove skirting, a light palette, resistance to the zone\'s cleaning products.' },
  { nom: 'Research and development labs', detail: 'Benches, open offices, prototyping spaces. A floor that combines the rigour of technical spaces and the acoustic comfort of thinking zones.' },
  { nom: 'Pharmacies with a robot', detail: 'Sales area, robot zone, dispensing. A perfectly flat floor for the robot to move, durable under rolling and visually continuous with the customer zone.' },
]

const process = [
  { step: 'First contact', desc: 'A phone call or email to frame the project: lab type, areas concerned, zones to renovate, desired schedule, production constraints. We identify straight away whether the work can fit a technical shutdown or whether a specific closure is needed.' },
  { step: 'Technical visit', desc: 'A visit on site within 1 to 2 weeks. Precise measuring, a check of the substrate, a survey of access constraints (changing rooms, airlocks, goods lifts), photos for the workshop preparation. Samples shown on site under your reference light.' },
  { step: 'Quote and quality file', desc: 'A detailed quote within a week with a precise schedule. We attach as standard the product technical sheets, the fire rating, the A+ indoor-air rating, and the certificates useful to your quality file. Final approval of the colours and confirmation of the airlocks and transition zones.' },
  { step: 'Villedoux workshop preparation', desc: 'Pre-cutting of the sheets, marking of the cuts for the benches, technical supplies and equipment feet. This upfront preparation is what lets us keep the tight deadline once on site, with no improvisation. A 2 to 5-week lead time by the chosen range.' },
  { step: 'Laying in your laboratory', desc: 'Work in the agreed window. A team in clean dress, dedicated shoes, a schedule fitted to your constraints. Removal, levelling if needed, sheet laying, heat welds, skirting, finishes, cleaning. Final documentation handed to your quality manager.' },
]

const faq = [
  { q: 'Are your floors compatible with a lab environment?', a: 'Yes, that is exactly what we offer. The ranges we lay in labs are designed for this use: a continuous finish in heat-welded sheets, rounded cove skirting, a light palette for visual reading, resistance to cleaning and disinfection products. Gerflor Mipolam, Tarkett iQ Optima and Forbo Surestep are our main references, all rated A+ for indoor air. We provide technical sheets and certificates for your quality file.' },
  { q: 'How long to renovate a laboratory?', a: 'It depends on the area and the technical nature of the space. For a lab of 200 to 400 m², allow five to ten days on site, to fit a technical shutdown or an annual closure. Upfront, allow one to two weeks for the visit and the quote, then three to six weeks\' making. We pre-assemble at the workshop to minimise the time on site. On very large labs, we can also spread the work zone by zone over several weekends.' },
  { q: 'How do you finish the welds between sheets?', a: 'It is a point of visual quality where we put all our attention. Once the sheets are laid and glued, we machine-rout the joints, lay the heat-weld cord (soft PVC coloured to the floor\'s shade), then level it by hand with a special blade as soon as the cord has cooled. The result is a continuous surface where the weld cannot be made out. That is what sets it apart from a standard office floor.' },
  { q: 'What documents for the quality file?', a: 'We hand over a complete traceability file at the end of the job: technical sheets, fire rating, A+ indoor-air rating, European conformity certificates, lot numbers by zone, a laying drawing with sheet orientation, before and after photos. The file goes straight into your internal or client audits, with no extra preparation. We also provide the adhesive safety sheets, and an end-of-job report signed by our team leader and your site manager.' },
  { q: 'Can you lay while the lab is running?', a: 'In most cases, yes. We work zone by zone with clear marking between the work area and the active area. The overall job takes longer, but a full stop of production is avoided. We organise the transitions over breaks or at the end of the day. We arrive in dedicated shoes that we change at the airlock if the zone requires it. On the most sensitive laboratories, it remains simpler to aim for a technical shutdown.' },
  { q: 'How long does a vinyl floor last in a lab?', a: 'Allow fifteen to twenty years easily, with normal daily upkeep and a good visual hold over the whole period. In a classic analysis lab with moderate traffic, we regularly exceed twenty years. In a cosmetics or pharmaceutical production zone with pallets and trolleys, it is more like fifteen. The heat weld between the sheets does not degrade over time; it is the covering itself that eventually marks.' },
  { q: 'Do you work outside Charente-Maritime?', a: 'Yes, very regularly. The workshop is in Villedoux near La Rochelle, and we work across the whole of western France and beyond for this kind of job, which demands real expertise. We have references in Nantes, Bordeaux, Niort, Poitiers, Angoulême, Tours, and further by project. Travel and accommodation are included in the quote beyond two hours\' drive. We plan over eight to fourteen weeks, which is comfortable for arranging everything remotely.' },
]

export default function SolPvcLaboratoirePharmaceutiquePageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/sol-pvc-laboratoire-pharmaceutique#service',
        name: 'Vinyl flooring for pharmaceutical laboratories',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
          { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
          { '@type': 'Country', name: 'France' },
        ],
        serviceType: 'Vinyl flooring laid in pharmaceutical, cosmetics and analysis labs, and pharmacies',
        description: 'Professional vinyl flooring laid for laboratories: pharmaceutical, cosmetics, medical and food analysis, retail pharmacies. Continuous welded-sheet finish, cove skirting, quality documentation.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Pharmaceutical laboratory vinyl flooring', item: 'https://cbsols.fr/en/sol-pvc-laboratoire-pharmaceutique' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="laboratoire-pharmaceutique" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Laboratory vinyl flooring</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Vinyl flooring for laboratories,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>rigour and finish.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Professional vinyl flooring laid for pharmaceutical, cosmetics and analysis labs, and for retail pharmacies. A continuous finish in welded wide sheets, cove skirting, quality documentation provided. CB Sols has worked in the trade for over 28 years, workshop in Villedoux near La Rochelle.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=sol-pvc-laboratoire-pharmaceutique" variant="primary" size="md">Request a quote</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Quality documentation</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;A lab floor is first an impeccable finish and a solid quality file. We lay in large widths, we weld clean, and we hand over the full traceability. CB Sols has done this for over 28 years.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, owner of CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Which type of lab */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>For which type of laboratory</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Four settings, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>one and the same laying rigour.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {usages.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline #1 */}
      <section style={{ padding: '3rem 2rem' }}>
        <div style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A laboratory to renovate?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              A technical visit, a costed quote.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Samples and measurements taken on site. A detailed quote within a week, a schedule fitted to your technical shutdowns or annual closures.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/en/contact?from=sol-pvc-laboratoire-pharmaceutique-cta1" variant="primary" size="md">Request a quote</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>What a lab floor must do</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six requirements <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>specific to laboratories.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Working in a laboratory means respecting a rigour of site, finish and documentation. Here are the six points that structure our method from the first visit, without needless jargon.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {exigences.map((e, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>{e.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Product families</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            The floors <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>we lay in laboratories.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {materiaux.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '1.5rem 0', borderBottom: i < materiaux.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--terra)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#fff' }}>{i + 1}</span>
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.4rem' }}>{p.name}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid quote */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &ldquo;In a lab, what counts is what is seen and what is measured: a continuous finish, clean skirting, a complete quality file. We deliver the three together.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, owner of CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?from=sol-pvc-laboratoire-pharmaceutique-citation" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>A technical visit on site</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Partner brands</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Eight references <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>for your lab projects.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {marques.map((m, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{m.name}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Zones and lab types</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Twelve contexts, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>floor choices to match.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            By zone of the laboratory, the constraints are not the same. Here is how we adapt the floors to the spaces we renovate regularly.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {quartiers.map((q, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{q.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{q.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline #2 */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A project in mind?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            A call to frame the project.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Twenty minutes on the phone to clarify the possible ranges, a realistic schedule and a budget order of magnitude for your laboratory.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=sol-pvc-laboratoire-pharmaceutique-cta2" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from first contact to delivery.</em>
          </h2>
          <div data-flow="steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0' }}>
            {process.map((p, i) => (
              <div key={i} style={{ padding: '1.75rem', borderRight: i < process.length - 1 ? '1px solid var(--border)' : 'none' }}>
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

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Frequently asked questions</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Vinyl in a laboratory, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>concrete answers.</em>
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

      {/* CTA after FAQ */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            One more question? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>Call Valentin.</em>
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Straight through to the owner. Clear advice, a next step only if the project makes sense for you as for us.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="See also"
        sectionSubtitle="Our know-how covers other worlds that may interest you. Take your time to browse, ask your questions, we will answer them."
        items={[
          { href: '/en/sol-pvc-pharmacie', title: 'Pharmacy vinyl flooring', teaser: 'Daily hygiene, health-authority compliance, night laying. Twenty years of wear in a pharmacy that never closes.', icon: Pill },
          { href: '/en/sol-pvc-cabinet-medical', title: 'Medical-practice vinyl flooring', teaser: 'A floor that reassures your patients from the waiting room and makes your daily cleaning easier.', icon: Stethoscope },
          { href: '/en/sol-pvc-creche', title: 'Nursery vinyl flooring', teaser: 'Phthalate-free, antibacterial, certified for early years. Peace of mind for parents and staff.', icon: Baby },
          { href: '/en/sol-pvc-ecole', title: 'School vinyl flooring', teaser: 'Calmed acoustics, quick upkeep, fifteen-year durability in a classroom that never stops.', icon: GraduationCap },
          { href: '/en/architectes', title: 'For architects', teaser: 'Material documentation, annotated samples, detailed quotes. Our role is to serve your vision.', icon: Building2 },
          { href: '/en/showroom', title: 'Villedoux showroom', teaser: 'Come to see and touch the materials. By appointment, in Villedoux near La Rochelle.', icon: Store },
          { href: '/en/contact', title: 'Contact us', teaser: 'A question, a project, a quote within 48 hours. The owner answers you directly.', icon: Mail },
        ]}
      />

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Your laboratory renovated <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>by the book.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A technical visit on site. A detailed quote, a continuous finish in large welded sheets, cove skirting, a quality file provided. Over 28 years of CB Sols know-how for laboratories and pharmacies.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=sol-pvc-laboratoire-pharmaceutique-final" variant="primary" size="md">Request a quote</Button>
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
