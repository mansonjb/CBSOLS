import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Baby, BookOpen, Building2, Mail, Pill, Stethoscope, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Primary & Nursery School Vinyl Flooring | School Laying',
  description: 'Vinyl flooring laid in nursery and primary schools. Public-building compliance (Bfl-s1, U4P3, R10/R11), laying during the school holidays, public tenders. CB Sols has supported town halls and private schools for over 28 years.',
  alternates: {
    canonical: 'https://cbsols.fr/en/sol-pvc-ecole',
    languages: { 'fr-FR': 'https://cbsols.fr/sol-pvc-ecole', en: 'https://cbsols.fr/en/sol-pvc-ecole' },
  },
  openGraph: {
    title: 'Vinyl flooring in nursery and primary schools',
    description: 'Vinyl flooring for classrooms, nursery sleep rooms, school canteens. Public-building standards, A+ label, laying during the school holidays.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/sol-pvc-ecole.jpg', width: 1200, height: 630 }],
  },
}

const cas = [
  { title: 'Nursery and primary classrooms', desc: 'Wide-sheet vinyl across the whole room, heat-welded for a continuous watertightness, a U4P3 rating, R10 slip resistance, a warm look. Laying in 2-metre sheets, a setting-out matched to the daylight to avoid reflections on the desks.' },
  { title: 'Nursery sleep rooms', desc: 'Acoustic vinyl 3 to 4 mm with an impact-sound reduction, comfort under the teacher\'s step during the nap. Soft colours, plain or discreet-wood formats to keep the visual calm. Heat welding to make cleaning incidents easier.' },
  { title: 'Covered playground and circulation', desc: 'Sheet vinyl resistant to the intense traffic of break times, a U4P3 rating at least, R10 slip resistance even with wet feet, threshold profiles at the junctions with the outdoor floors. Full-surface gluing on a prepared concrete slab.' },
  { title: 'School canteen and self-service', desc: 'Compact or heterogeneous vinyl, R11 slip resistance in the serving zone, resistance to trolleys and peak traffic. Cove skirting raised 10 cm to make washing with plenty of water easier and guarantee hygiene.' },
]

const produits = [
  { name: 'Heterogeneous sheet vinyl', desc: 'The reference for schools, with a 0.7 to 1 mm wear layer, a U4P3 rating, R10 slip resistance, an A+ label, an anti-stain surface treatment. Laying in heat-welded 2-metre sheets, a 15 to 20-year life in school use. Main ranges used: Gerflor Taralay Premium and Tarkett iQ Granit.' },
  { name: 'Homogeneous compact vinyl', desc: 'For the most heavily used zones: a wear layer through the thickness, renovation sanding possible after 10 years. Ideal for main circulation and school canteens. Ranges used: Tarkett iQ Optima and Gerflor Mipolam Symbioz.' },
  { name: 'Non-slip safety vinyl', desc: 'For toilets, changing rooms, the surrounds of water fountains. R11 or even R12 slip resistance, anti-slip aggregates in the wear layer. Matching cove skirting. Ranges used: Gerflor Tarasafe Standard and Forbo Surestep.' },
]

const process = [
  { step: 'Site visit', desc: 'A survey of the areas, the state of the existing substrate, identification of the constraints (underfloor heating, level changes, any asbestos floors), a conversation with the head teacher or the town hall\'s technical services.' },
  { step: 'Quote and schedule', desc: 'A detailed cost by room, supply and laying, screed, skirting. A schedule fitted to the school holidays: mainly July-August, October half-term for small jobs. Coordination with the other trades.' },
  { step: 'Public tender', desc: 'For state schools, the technical submission assembled, product technical sheets, environmental declarations, environmental certifications, a detailed schedule. Administrative follow-up through to award.' },
  { step: 'Preparation and laying', desc: 'Removal of the old covering, self-levelling screed, bonding primer, rolling out of the 2-metre sheets, gluing, rolling, thermofusion heat welding between sheets. Cove skirting in wet zones.' },
  { step: 'Handover and upkeep', desc: 'A check of the welds, a check of the colours, a commissioning clean, the maintenance sheets handed to the technical staff. Upkeep advice matched to the type of covering laid.' },
]

const faq = [
  { q: 'When can you lay vinyl flooring in a school without interrupting teaching?', a: 'The main window remains the summer holidays, from early July to late August, for jobs of several classrooms. The October half-term lets us handle one or two rooms. Christmas and Easter are shorter but usable for small areas such as a sleep room or a technical room. We always set the schedule with the town hall or the head teacher, building in the screed drying time, the laying, the heat welding and the commissioning. In over 28 years of school jobs, we have never delayed a start of term. Valentin Prévoteau leads each schedule personally to guarantee on-time delivery.' },
  { q: 'What public-building standards must a school vinyl floor meet?', a: 'Four main requirements govern laying in a school. The reaction to fire must be Bfl-s1 at least, attested by the manufacturer\'s European rating report. The use must correspond to U4P3 minimum for classrooms and circulation, U4P4 for very busy zones, U3P3 acceptable in specific wet zones. The slip resistance must reach R10 in dry zones and R11 in toilets, showers and kitchens to the DIN 51130 standard. Finally, the VOC rating must be A+ with an environmental declaration available for the indoor air quality. All the brands we lay meet these criteria, and we systematically provide the reports at the quote stage.' },
  { q: 'What budget for school vinyl flooring per square metre laid?', a: 'The budget varies by product quality, substrate complexity and overall area. For a heterogeneous sheet vinyl such as Gerflor Taralay Premium or Tarkett iQ Granit, laid with screed and skirting, allow 45 to 70 euros excl. VAT per square metre all in. For a homogeneous compact floor for main circulation, 60 to 95 euros excl. VAT. For a non-slip safety floor in a wet zone, 55 to 80 euros excl. VAT. Large areas on a single site allow decreasing prices. We provide a detailed quote item by item after a site visit, with no surprise.' },
  { q: 'How does a public tender for renovating a school\'s floors work?', a: 'The town hall or authority publishes tender documents with the specification, the terms, the price schedule and a provisional schedule. We respond with a detailed technical submission: a presentation of the company, similar references on comparable schools, product technical sheets with fire-rating reports, environmental declarations, environmental certifications, a site schedule fitted to the school holidays, the team assigned and qualified tradespeople. For state schools in Charente-Maritime and neighbouring departments, we respond regularly on amounts from 15,000 to 150,000 euros excl. VAT. Rigorous administrative follow-up through to award, then execution in strict respect of the schedule.' },
  { q: 'Is vinyl flooring really healthy for children in class?', a: 'The modern vinyl floors laid in schools are rated A+ for VOC emissions, the best level of the French classification. They hold a third-party-verified environmental declaration. The problematic phthalates were long ago replaced by plasticisers compliant with the REACH regulation. Some ranges go further: Tarkett iQ Granit, Gerflor Mipolam Symbioz and Forbo Sphera are 100% recyclable, bio-attributed or phthalate-free entirely. For a new school or a major renovation, we recommend these premium ranges. Thermofusion heat-welded laying also guarantees full watertightness between sheets, with no dusty seams.' },
  { q: 'Must the old floor be removed before laying new vinyl?', a: 'In most cases yes, for laying rigour. Removing the old covering lets us recover a sound substrate, measure the real flatness, treat any defects (rising damp, cracks, asbestos). If the old floor is a vinyl or linoleum in good condition and perfectly adhered, over-covering remains possible with a specific primer, but you lose 2 to 3 mm of skirting thickness and you stack two fragile layers. If the old covering contains asbestos (vinyl laid before 1997), a prior survey and removal by a certified firm are compulsory. We support the town hall through these steps.' },
  { q: 'What lifespan for a vinyl floor in a nursery or primary school?', a: 'With a U4P3 or U4P4 product and regular upkeep by the technical staff, allow 15 to 20 years in a classroom and normal circulation. Very busy zones such as playgrounds and school canteens are closer to 15 years. Homogeneous compact floors such as Tarkett iQ Optima or Gerflor Mipolam Symbioz allow sanding and surface renovation after 10 to 12 years, extending the total life to 28 years. Suitable upkeep is decisive: daily cleaning with a scrubber-drier and a neutral product, re-coating every 2 years for film-forming floors. We hand over a personalised maintenance sheet at each delivery.' },
]

const specs = [
  { title: 'Bfl-s1 reaction to fire', desc: 'A European rating compulsory for any type-R public building (teaching establishments). The report is provided by the manufacturer and attached to the handover file. We only lay products rated Bfl-s1 or above in a school.' },
  { title: 'UPEC rating U4P3 minimum', desc: 'For classrooms and common circulation. U4P4 recommended for very busy zones (playgrounds, canteens). U3P3 tolerated only in specific wet zones. Guarantees resistance to wear, indenting and water.' },
  { title: 'R10 and R11 slip resistance', desc: 'R10 minimum in classrooms and circulation to DIN 51130. R11 compulsory in toilets, changing rooms, school canteens and zones exposed to damp. Essential safety for children.' },
  { title: 'A+ VOC rating', desc: 'The best level of the French classification of volatile-organic-compound emissions. A third-party-verified environmental declaration. Essential for the indoor air quality in a school holding children.' },
  { title: 'Heat-welded sheet laying', desc: '2-metre-wide sheets rolled out over the room, thermofusion heat welding between sheets with a PVC cord. Full watertightness, no dusty seams, impeccable hygiene. The signature of a professional laying.' },
  { title: 'School-holiday schedule', desc: 'Jobs fitted mainly to July-August, October half-term for small areas. Coordination with the town hall\'s technical services, a guarantee of commissioning before term. We have never missed a start of term in over 28 years.' },
]

const marques = [
  { name: 'Gerflor Taralay Premium', detail: 'The reference for French schools for 30 years. Heterogeneous U4P3, R10, Bfl-s1, A+. Excellent durability, a wide range of wood and plain colours.' },
  { name: 'Tarkett iQ Granit', detail: 'Homogeneous compact vinyl, sandable, a 28-year life. U4P3, Bfl-s1, A+. Very much used in circulation and school canteens for its robustness.' },
  { name: 'Forbo Surestep', detail: 'An R11 non-slip safety floor, anti-slip aggregates in the wear layer. Ideal for toilets, changing rooms, fountain surrounds.' },
  { name: 'Tarkett Acczent Excellence', detail: 'Acoustic heterogeneous 70 dB or compact. U4P3, Bfl-s1, A+. Realistic wood décors appreciated in nursery schools for their reassuring effect.' },
  { name: 'Gerflor Mipolam Symbioz', detail: 'Bio-attributed homogeneous compact, 100% recyclable. A strong environmental approach, A+ label. The premium solution for environmental schools.' },
  { name: 'Polyflor Polysafe', detail: 'The British R11/R12 safety range, very much used in school canteens and wet zones. A 15-year slip-resistance warranty.' },
  { name: 'Forbo Sphera', detail: 'Phthalate-free homogeneous compact, 100% recyclable, A+. The eco-responsible reference for certified schools.' },
  { name: 'Tarkett iQ Optima', detail: 'Premium homogeneous compact, a 30-year commercial warranty in common use. Renovation sanding possible several times.' },
]

const lieux = [
  { nom: 'State council-run schools', detail: 'The town hall as client, a public tender, a tender response, a technical submission and a school-holiday schedule.' },
  { nom: 'Private schools under contract', detail: 'A direct decision by the head or the management body. A private quote, a schedule fitted to the establishment\'s school calendar.' },
  { nom: 'Inter-communal school groupings', detail: 'Groupings spread over several towns. Coordination with an inter-communal body or a community of communes.' },
  { nom: 'Bilingual and international schools', detail: 'Sometimes offset school calendars. A brief reinforced on looks and environmental standards.' },
  { nom: 'Montessori and alternative schools', detail: 'A requirement for natural materials and air quality. Steering towards Forbo Sphera, Gerflor Mipolam Symbioz or natural linoleum.' },
  { nom: 'Primary boarding houses', detail: 'Sleep rooms with acoustic vinyl, study rooms, toilets and showers. Jobs mainly in July-August.' },
  { nom: 'School canteens and self-service', detail: 'Compact or R11 safety floors, cove skirting, trolley resistance, HACCP hygiene. Often a priority summer job.' },
  { nom: 'After-school leisure centres', detail: 'Activity rooms shared with the school, sometimes laid continuously with the classrooms for a homogeneous finish.' },
  { nom: 'Wraparound care and nurseries', detail: 'Spaces used morning and evening, acoustic floors recommended for the comfort of staff and children.' },
  { nom: 'Schools in Charente-Maritime', detail: 'La Rochelle, Rochefort, Saintes, Royan, Aytré, Surgères, Marennes, Aigrefeuille. Free travel, fast call-out.' },
  { nom: 'Schools in Deux-Sèvres and Vendée', detail: 'Niort, Fontenay-le-Comte, La Roche-sur-Yon. Regular public tenders, a team ready for large summer sites.' },
  { nom: 'Schools on Île de Ré and Île d\'Oléron', detail: 'Mastered island logistics, deliveries coordinated with the bridges and tides for summer jobs.' },
]

export default function SolPvcEcolePageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/sol-pvc-ecole#service',
        name: 'Vinyl flooring laid in nursery and primary schools',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'Country', name: 'France' },
          { '@type': 'Place', name: 'Charente-Maritime' },
          { '@type': 'Place', name: 'Deux-Sèvres' },
          { '@type': 'Place', name: 'Vendée' },
        ],
        serviceType: 'Vinyl flooring laid in nursery and primary schools, public-building compliance, public tenders',
        description: 'Supply and laying of wide-sheet vinyl flooring in nursery and primary schools, type-R public-building compliance Bfl-s1 U4P3 R10/R11, A+ label, laying during the school holidays.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'School vinyl flooring', item: 'https://cbsols.fr/en/sol-pvc-ecole' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="ecole" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>School vinyl flooring</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                School vinyl flooring,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>the floor that lasts a generation.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Nursery and primary classrooms, sleep rooms, playgrounds, school canteens: heat-welded wide-sheet vinyl, type-R public-building compliance Bfl-s1, a U4P3 rating, R10/R11 slip resistance, A+ label. Laying during the school holidays, town halls and private schools supported. Over 28 years of craft experience.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=sol-pvc-ecole" variant="primary" size="md">Request a quote</Button>
                <Button href="/en/showroom" variant="outline" size="md">See the showroom</Button>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>The golden rule of schools</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;A school is renovated in July-August, full stop. In over 28 years, CB Sols has never missed a start of term. It is the first promise we make to the head or the town hall, and it is non-negotiable.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>For which part of the school</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Four spaces, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>four solutions.</em>
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A job to plan?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Let us plan the summer holidays together.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Town hall or school management: Valentin Prévoteau travels out for the prior visit and the detailed costing.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=sol-pvc-ecole" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Technical specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>The public-building requirements in schools</div>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>The vinyl floors we lay in schools</div>
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
            We work with the major makers of vinyl flooring for authorities: Gerflor, Tarkett, Forbo, Polyflor. Each reference is selected for its fit with school use, its public-building ratings, and the availability of its environmental declaration. For schools with environmental certification or a strong environmental approach, we offer bio-attributed or 100%-recyclable ranges.
          </p>
        </div>
      </section>

      {/* Mid quote + CTA */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &ldquo;A clean heat weld, a screed you cannot see, well-raised cove skirting: these are the details that keep a school\'s floor for twenty years without trouble.&rdquo;
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?from=sol-pvc-ecole-inline" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>A prior visit in every case, free travel in Charente-Maritime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Brands and public-building references</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Eight references, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>all type-R compliant.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            European makers specialised in floor coverings for authorities. Each product shown holds the Bfl-s1 fire-rating reports, the right UPEC rating, a verified environmental declaration and the A+ label for VOC emissions.
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
            Every establishment context <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>of primary education.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            CB Sols works for state schools under tender, private schools by direct agreement, school groupings, boarding houses and the associated wraparound-care settings. A prior visit in every case, a careful technical submission, a school-holiday schedule.
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A public tender to prepare for?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Technical submission, reports, declarations: we have it all to hand.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            A complete response file, references of similar schools, a detailed school-holiday schedule.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=sol-pvc-ecole-mid" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach, from visit to start of term</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from quote to delivery.</em>
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
            Vinyl in schools, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>detailed answers.</em>
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
            Describe your school, we reply within 48 hours.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Type of establishment, areas, calendar constraints: these are enough to start a useful conversation.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=sol-pvc-ecole-faq" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      <RelatedCards
        sectionTitle="See also"
        sectionSubtitle="Our know-how covers other worlds that may interest you. Take your time to browse, ask your questions, we will answer them."
        items={[
          { href: '/en/sol-pvc-creche', title: 'Nursery vinyl flooring', teaser: 'Phthalate-free, antibacterial, certified for early years. Peace of mind for parents and staff.', icon: Baby },
          { href: '/en/sol-pvc-college-lycee', title: 'Secondary-school vinyl flooring', teaser: 'A floor that takes a thousand passes a day, resists shoes and keeps its look over time.', icon: BookOpen },
          { href: '/en/sol-pvc-cabinet-medical', title: 'Medical-practice vinyl flooring', teaser: 'A floor that reassures your patients from the waiting room and makes your daily cleaning easier.', icon: Stethoscope },
          { href: '/en/sol-pvc-pharmacie', title: 'Pharmacy vinyl flooring', teaser: 'Daily hygiene, health-authority compliance, night laying. Twenty years of wear in a pharmacy that never closes.', icon: Pill },
          { href: '/en/architectes', title: 'For architects', teaser: 'Material documentation, annotated samples, detailed quotes. Our role is to serve your vision.', icon: Building2 },
          { href: '/en/showroom', title: 'Villedoux showroom', teaser: 'Come to see and touch the materials. By appointment, in Villedoux near La Rochelle.', icon: Store },
          { href: '/en/contact', title: 'Contact us', teaser: 'A question, a project, a quote within 48 hours. The owner answers you directly.', icon: Mail },
        ]}
      />

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            A school to renovate? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Let us talk calendar.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A prior site visit, a complete public-building file, a schedule fitted to the school holidays. The start of term is prepared before the end of the last one.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=sol-pvc-ecole" variant="primary" size="md">Request a quote</Button>
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
