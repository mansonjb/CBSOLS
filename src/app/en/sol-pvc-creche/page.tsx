import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { BookOpen, Building2, GraduationCap, Home, Mail, Pill, Stethoscope, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nursery & Daycare Vinyl Flooring | Early-Years Floors',
  description: 'Vinyl flooring laid in nurseries, micro-nurseries and childminder homes. Early-years-authority compliance, phthalate-free, A+ label, acoustic, antibacterial. CB Sols has supported early-years settings for over 28 years.',
  alternates: {
    canonical: 'https://cbsols.fr/en/sol-pvc-creche',
    languages: { 'fr-FR': 'https://cbsols.fr/sol-pvc-creche', en: 'https://cbsols.fr/en/sol-pvc-creche' },
  },
  openGraph: {
    title: 'Vinyl flooring in nurseries and daycare | Early-years floors',
    description: 'Compliant vinyl flooring in nurseries, micro-nurseries and childminder homes. Phthalate-free, A+ label, acoustic, R10/R11 slip, built-in antibacterial.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/sol-pvc-creche.jpg', width: 1200, height: 630 }],
  },
}

const cas = [
  { title: 'Baby room, 0-12 months', desc: 'Acoustic vinyl 3 to 4 mm with a significant impact-sound reduction, comfort under the motor-play cushions and the play mats. Phthalate-free, A+ label, built-in antibacterial. Babies crawl on it all day: it is the highest requirement of early-years laying.' },
  { title: 'Toddler and pre-school rooms', desc: 'Heterogeneous vinyl rated U4P3, R10 slip resistance, soft light-wood or pastel-plain décors. Laying in wide 2-metre sheets with heat welding, full watertightness, impeccable hygiene for the daily falls and spills.' },
  { title: 'Sleep rooms and bottle kitchen', desc: 'Acoustic vinyl to keep the nap-time calm, a smooth surface easy to disinfect in the bottle kitchen. Cove skirting integrated, antibacterial through the thickness, compliance with early-years-authority requirements on food-preparation surfaces.' },
  { title: 'Changing room and toilets', desc: 'R11 non-slip safety vinyl, cove skirting raised 10 cm, full heat welding. Resistance to disinfectants, a continuous surface with no dusty seams, washing with plenty of water possible. Strict early-years-authority compliance.' },
]

const produits = [
  { name: 'Early-years acoustic vinyl', desc: 'The reference for baby rooms and sleep rooms. A 17 to 22 dB impact-sound reduction, A+ label, a U3P3 or U4P3 rating by zone, free of previous-generation phthalates. Main ranges used: Gerflor Taralay Acoustic and Tarkett iQ Granit Acoustic.' },
  { name: 'Phthalate-free compact vinyl', desc: 'For the most demanding settings or those pursuing environmental certification. Sandable homogeneous compact, a 28-year life, A+ label. Main ranges used: Gerflor Mipolam Symbioz (bio-attributed) and Forbo Sphera (completely phthalate-free).' },
  { name: 'Safety vinyl for changing and toilets', desc: 'For the changing room, the toilets and the bottle kitchen. R11 slip resistance, anti-slip aggregates in the wear layer, matching cove skirting, early-years-authority compliance. Main ranges used: Gerflor Tarasafe Standard and Forbo Surestep.' },
]

const process = [
  { step: 'Visit and compliance', desc: 'A conversation with the director, the manager or the micro-nursery developer. A check of the departmental early-years-authority requirements (slight variations between departments). A survey of the areas, with the baby, changing, sleep and bottle-kitchen zones identified.' },
  { step: 'Dedicated product advice', desc: 'A showroom visit in Villedoux or samples on site. A choice between acoustic floors (baby rooms and sleep rooms), premium compact floors (circulation zones), safety floors (changing and toilets). Phthalate-free and A+ advice in every case.' },
  { step: 'Quote and schedule', desc: 'A detailed cost by zone, supply and laying, screed, cove skirting. For nurseries in operation, a schedule over the summer or year-end closures. For new openings, coordination with the developer and the other trades.' },
  { step: 'Preparation and laying', desc: 'Removal of the old covering if it is a renovation, self-levelling screed, bonding primer, rolling out of the 2-metre sheets, full-surface gluing, careful rolling, thermofusion heat welding. Cove skirting in changing, toilets, bottle kitchen.' },
  { step: 'Handover and compliance', desc: 'A check of each weld, a check of the cove skirting, a commissioning clean. The compliance file handed over: Bfl-s1 fire-rating reports, environmental declarations, A+ technical sheets, phthalate-free certificates. For the authority and the director.' },
]

const faq = [
  { q: 'What early-years-authority requirements apply to a nursery floor?', a: 'The early-years-authority (PMI) requirements vary slightly from one department to another, but the common base is solid. The covering must be resilient to cushion the falls of the very young, washable and disinfectable, with no visible seam collecting bacteria, free of problematic-generation phthalates (DEHP, DBP, BBP banned). The fire rating must be Bfl-s1 as a minimum (type-R public building), the A+ VOC label is required for the quality of the air the babies breathe, R10 slip resistance in common zones and R11 in changing and toilets. For impact sound, a reduction above 15 dB is recommended in the rooms holding children in motor development. We systematically hand over the complete file to the director for the authority\'s inspection.' },
  { q: 'Phthalate-free: is it really important for a nursery?', a: 'Yes, it has become an essential standard of modern early-years settings. The phthalates DEHP, DBP and BBP were classified CMR (carcinogenic, mutagenic, toxic for reproduction) and were long ago replaced in contract vinyl floors by new-generation plasticisers compliant with the REACH regulation. To go further, some premium ranges remove phthalates entirely in favour of other plasticisers judged safer: Forbo Sphera is completely phthalate-free, Gerflor Mipolam Symbioz is bio-attributed and uses renewable raw materials, Tarkett iQ Granit is 100% recyclable in a closed loop. For a nursery, micro-nursery or childminder home, we systematically steer towards these ranges. The extra cost is moderate and the argument is strong with parents and the authority.' },
  { q: 'Why an acoustic floor in a nursery?', a: 'Impact sound (footsteps, dropped objects, toys, trolleys) is one of the main sources of acoustic fatigue for children and early-years staff. An acoustic vinyl of 3 to 4 mm includes a dense underlay that dampens this sound before it spreads. The best references (Gerflor Taralay Acoustic, Tarkett iQ Granit Acoustic, Forbo Sarlon Habitat) state reductions of 17 to 22 dB. In practice, it transforms the sound of a room and lets babies sleep better, toddlers concentrate better in activity, and staff tire less by the end of the day. For baby rooms and sleep rooms, it is our standard.' },
  { q: 'How does laying work in a nursery in operation?', a: 'Two configurations are possible. The nursery closes entirely for the work: we work over the summer closure (often 3 weeks in August) or the year-end one, a tight but managed schedule. The nursery stays partly open: we work room by room, in strict respect of the health protocol. Containment of the zone with sheeting, ventilation of the laying zone, commissioning after off-gassing (24 to 48 hours), restart of the room on a new floor. Close coordination with the director for the schedule, access, the children\'s safety. In over 28 years, CB Sols has laid in dozens of early-years settings with protocols approved by the departmental authorities.' },
  { q: 'What budget for nursery vinyl flooring per square metre laid?', a: 'The budget varies by product type and site complexity. For an early-years acoustic vinyl such as Gerflor Taralay Acoustic or Tarkett iQ Granit Acoustic, laid with screed and cove skirting, allow 60 to 85 euros excl. VAT per square metre all in. For a phthalate-free compact floor, Gerflor Mipolam Symbioz or Forbo Sphera, 75 to 110 euros excl. VAT. For an R11 safety floor in changing and toilets, 65 to 90 euros excl. VAT. Micro-nurseries (often 100 to 150 square metres in total) fall into budgets of 8,000 to 15,000 euros excl. VAT for the whole floor. Multi-room nurseries quickly reach 20,000 to 40,000 euros excl. VAT. A detailed quote item by item after the visit, with no surprise.' },
  { q: 'Which brands do you recommend for a new micro-nursery?', a: 'For a micro-nursery opening, we recommend a coherent combination. In the living rooms (babies, toddlers, pre-school): Gerflor Taralay Acoustic or Tarkett iQ Granit Acoustic, laid in wide heat-welded sheets, a light-wood or pastel-plain décor. In the sleep room: Forbo Sarlon Habitat or the same product as the room, for visual and acoustic continuity. In the changing room and toilets: Gerflor Tarasafe Standard or Forbo Surestep, R11 slip, cove skirting. In the bottle kitchen: a phthalate-free compact floor such as Forbo Sphera or Gerflor Mipolam Symbioz, a continuous disinfectable surface. This composition covers the authority\'s requirements and offers optimal acoustic and visual comfort.' },
  { q: 'Is a built-in antibacterial really effective in a nursery?', a: 'Modern early-years vinyl floors often include an antibacterial treatment in the wear layer, based on silver ions or stable antimicrobial molecules. Effectiveness is shown by laboratory tests to ISO 22196: a 99% reduction of common bacterial populations (E. coli, S. aureus) on the surface, alongside cleaning. It does not replace the disinfection protocol but reduces the bacterial pressure between two cleanings, which is appreciated in the changing room, bottle kitchen and motor-play zones. Even so, what matters most is the perfect heat weld, the well-raised cove skirting and a rigorous daily upkeep protocol. The floor does its part, the protocol does the rest.' },
]

const specs = [
  { title: 'Free of problematic phthalates', desc: 'The CMR phthalates (DEHP, DBP, BBP) are banned. To go further, completely phthalate-free ranges: Forbo Sphera, or bio-attributed plasticisers: Gerflor Mipolam Symbioz. An essential standard for early-years settings.' },
  { title: 'A+ VOC label and declaration', desc: 'Volatile-organic-compound emissions ≤ 100 µg/m³ after 28 days (the French A+ standard). A third-party-verified environmental declaration. Essential for the quality of the air breathed by babies and young children in motor development.' },
  { title: 'Acoustics > 15 dB gain', desc: 'Acoustic floors 3 to 4 mm with an impact-sound reduction above 15 dB, ideally 17 to 22 dB. The standard for baby rooms, sleep rooms and motor-play zones. Comfort for the children and the staff.' },
  { title: 'R10 and R11 slip resistance', desc: 'R10 minimum in circulation zones and living rooms, R11 compulsory in the changing room, toilets and bottle kitchen to DIN 51130. Anti-slip aggregates in the wear layer for wet zones.' },
  { title: 'Built-in antibacterial', desc: 'An antibacterial treatment based on silver ions or antimicrobial molecules in the wear layer, effectiveness tested to ISO 22196. Reduction of the bacterial pressure between two cleanings in changing and bottle kitchen.' },
  { title: 'Heat welds and cove skirting', desc: 'Laying in 2-metre sheets with thermofusion heat welding between sheets. Cove skirting raised 10 cm in changing, toilets and bottle kitchen. Full watertightness, impeccable hygiene, authority compliance.' },
]

const marques = [
  { name: 'Gerflor Taralay Acoustic', detail: 'Heterogeneous acoustic, 19 dB reduction, U3P3, A+, phthalate-free. The reference for baby rooms and sleep rooms in French nurseries.' },
  { name: 'Tarkett iQ Granit Acoustic', detail: 'Homogeneous acoustic compact, sandable, 28-year life. A 17 dB reduction, built-in antibacterial, A+ label.' },
  { name: 'Forbo Sarlon Habitat', detail: 'Heterogeneous acoustic, 19 dB, a wide range of soft décors. Very much used in micro-nurseries for its value.' },
  { name: 'Gerflor Mipolam Symbioz', detail: 'Bio-attributed homogeneous compact, 100% recyclable, phthalate-free. The premium solution for environmental nurseries.' },
  { name: 'Tarkett Acczent Excellence Acoustic', detail: 'Contract heterogeneous, 19 dB reduction, a U4P3 rating. Realistic wood décors appreciated in toddler and pre-school rooms.' },
  { name: 'Polyflor Acoustix', detail: 'The British acoustic range with R11 non-slip safety. Ideal for changing rooms and wet zones in a nursery.' },
  { name: 'Forbo Sphera', detail: 'Completely phthalate-free homogeneous compact, 100% recyclable, A+. The reference choice for eco-responsible micro-nurseries.' },
  { name: 'Gerflor Tarasafe Standard', detail: 'An R11 safety floor for changing and toilets, anti-slip aggregates, built-in antibacterial. Matching cove skirting.' },
]

const lieux = [
  { nom: 'Municipal nurseries', detail: 'The town hall or social-action centre as client, a public tender or adapted-procedure contract. A tender response with an early-years technical submission.' },
  { nom: 'Charity and parent-run nurseries', detail: 'A board as decision-maker, a schedule over the summer closures. Advice on product choices and respect for the authority\'s requirements.' },
  { nom: 'Workplace nurseries', detail: 'A developer or nursery group (Babilou, Crèche Attitude, People&Baby). An often reinforced brief, frequent environmental certification.' },
  { nom: 'Private micro-nurseries', detail: 'Set up by an independent operator, a capacity of 10 or 12 children. Complete support from the product choice to the authority compliance.' },
  { nom: 'Childminder homes (MAM)', detail: 'Settings with a maximum of 4 childminders, premises of 80 to 150 m². A similar authority brief, an adjusted budget.' },
  { nom: 'Childminder relay centres', detail: 'Itinerant drop-in venues for childminders. Play rooms with acoustic floors, a flexible authority compliance.' },
  { nom: 'Drop-in nurseries', detail: 'Occasional care for children aged 0-6, multi-purpose rooms with acoustic and safety changing floors. Often part of social centres.' },
  { nom: "Children's gardens", detail: 'Settings for children aged 2-6, a nursery-to-school transition. Contract vinyl floors with playful décors but compliant with type-R public buildings.' },
  { nom: 'Multi-care settings', detail: 'Combined nursery and drop-in rooms, large capacities. Run by a major group or an authority.' },
  { nom: 'Nurseries in Charente-Maritime', detail: 'La Rochelle, Rochefort, Saintes, Royan, Aytré, Surgères, Marennes. Free travel, regular work.' },
  { nom: 'Micro-nurseries in Deux-Sèvres and Vendée', detail: 'Niort, Fontenay-le-Comte, La Roche-sur-Yon. A growing market, support for independent operators.' },
  { nom: 'Nurseries on Île de Ré and Île d\'Oléron', detail: 'Seasonal and permanent settings. Mastered island logistics, a schedule fitted to the low tourist season.' },
]

export default function SolPvcCrechePageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/sol-pvc-creche#service',
        name: 'Vinyl flooring laid in nurseries, micro-nurseries and childminder homes',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'Country', name: 'France' },
          { '@type': 'Place', name: 'Nouvelle-Aquitaine' },
          { '@type': 'Place', name: 'Charente-Maritime' },
          { '@type': 'Place', name: 'Deux-Sèvres' },
          { '@type': 'Place', name: 'Vendée' },
        ],
        serviceType: 'Vinyl flooring laid in nurseries, micro-nurseries and childminder homes, early-years-authority compliance, phthalate-free, A+ label, acoustic',
        description: 'Supply and laying of vinyl flooring for early-years settings: nursery, micro-nursery, childminder home. Authority compliance, phthalate-free, A+ label, acoustic floor, built-in antibacterial, cove skirting.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Nursery vinyl flooring', item: 'https://cbsols.fr/en/sol-pvc-creche' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="creche" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Nursery vinyl flooring</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Nursery vinyl flooring,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>softness and compliance.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Nursery, micro-nursery, childminder home: acoustic, phthalate-free, A+-label vinyl floors, cove skirting in changing and toilets. Authority compliance, built-in antibacterial, thermofusion heat welding. For the babies who crawl on it every day. Over 28 years of craft experience.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=sol-pvc-creche" variant="primary" size="md">Request a quote</Button>
                <Button href="/en/showroom" variant="outline" size="md">See the showroom</Button>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>The responsibility of an early-years floor</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;When I lay a nursery floor, I know babies will crawl on it every day. Phthalate-free, A+ label, a perfect weld: that is not negotiable, it is the basics.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>For which part of the nursery</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Four spaces, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>four requirements.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {cas.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline 1 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A micro-nursery in the works?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            We steer you to the right compliant products.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Independent operator or group: Valentin Prévoteau supports the authority compliance from the moment the premises are surveyed.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=sol-pvc-creche" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Technical specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>The requirements of early years</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Six requirements that structure <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>our approach.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {specs.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{i + 1}. {s.title}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>The vinyl floors we lay in early-years settings</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Three families, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>one level of demand.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {produits.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '1.5rem 0', borderBottom: i < produits.length - 1 ? '1px solid var(--border)' : 'none' }}>
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
          <p style={{ marginTop: '2.5rem', fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px' }}>
            For early-years settings, we work exclusively with makers that hold dedicated ranges: Gerflor (Taralay Acoustic, Mipolam Symbioz, Tarasafe), Tarkett (iQ Granit Acoustic, Acczent Excellence Acoustic), Forbo (Sarlon Habitat, Sphera, Surestep), Polyflor (Acoustix). Each product is selected for its authority compliance, its A+ label and the absence of problematic phthalates.
          </p>
        </div>
      </section>

      {/* Mid quote + CTA */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &ldquo;A well-raised cove skirting in a changing room is what lets the director wash with plenty of water without worry. The detail that changes daily life.&rdquo;
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?from=sol-pvc-creche-inline" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>A prior visit in every case, support with authority compliance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Brands and early-years references</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Eight references, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>all authority-compliant.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            European makers offering dedicated early-years ranges: acoustic, phthalate-free, A+ label, built-in antibacterial. Each reference is tested in a real setting before we recommend it.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {marques.map((m, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra)', marginBottom: '0.5rem' }}>{m.name}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Places */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Where we work</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Every context <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>of early years.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            CB Sols works for municipal, charity and workplace nurseries, private micro-nurseries, childminder homes and all early-years care settings. Rigorous authority compliance, administrative support where needed.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {lieux.map((l, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{l.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{l.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline 2 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>An authority inspection to prepare for?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            A complete compliance file handed to the director.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Fire-rating reports, environmental declarations, phthalate-free certificates, A+ sheets: everything the authority needs.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=sol-pvc-creche-mid" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach, from visit to compliance handover</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from advice to the compliance file.</em>
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
            Early-years vinyl flooring, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>detailed answers.</em>
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A question still unanswered?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Describe your setting, we reply within 48 hours.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Type of setting, capacity, rooms, closing schedule: these are enough to start a useful conversation.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=sol-pvc-creche-faq" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      <RelatedCards
        sectionTitle="See also"
        sectionSubtitle="Our know-how covers other worlds that may interest you. Take your time to browse, ask your questions, we will answer them."
        items={[
          { href: '/en/sol-pvc-ecole', title: 'School vinyl flooring', teaser: 'Calmed acoustics, quick upkeep, fifteen-year durability in a classroom that never stops.', icon: GraduationCap },
          { href: '/en/sol-pvc-college-lycee', title: 'Secondary-school vinyl flooring', teaser: 'A floor that takes a thousand passes a day, resists shoes and keeps its look over time.', icon: BookOpen },
          { href: '/en/sol-pvc-cabinet-medical', title: 'Medical-practice vinyl flooring', teaser: 'A floor that reassures your patients from the waiting room and makes your daily cleaning easier.', icon: Stethoscope },
          { href: '/en/sol-pvc-pharmacie', title: 'Pharmacy vinyl flooring', teaser: 'Daily hygiene, health-authority compliance, night laying. Twenty years of wear in a pharmacy that never closes.', icon: Pill },
          { href: '/en/particuliers', title: 'For homeowners', teaser: 'Carpet, vinyl flooring, bespoke rugs: our know-how at the service of your home.', icon: Home },
          { href: '/en/architectes', title: 'For architects', teaser: 'Material documentation, annotated samples, detailed quotes. Our role is to serve your vision.', icon: Building2 },
          { href: '/en/showroom', title: 'Villedoux showroom', teaser: 'Come to see and touch the materials. By appointment, in Villedoux near La Rochelle.', icon: Store },
          { href: '/en/contact', title: 'Contact us', teaser: 'A question, a project, a quote within 48 hours. The owner answers you directly.', icon: Mail },
        ]}
      />

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            A nursery to fit out? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Let us talk compliance.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A prior visit, compliant-product advice, a schedule over closures. For the babies who crawl on it every day, we make no compromise.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=sol-pvc-creche" variant="primary" size="md">Request a quote</Button>
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
