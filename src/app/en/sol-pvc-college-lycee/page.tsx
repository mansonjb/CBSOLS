import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Baby, Building2, GraduationCap, Mail, Pill, Stethoscope, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Secondary-School Vinyl Flooring | Colleges & High Schools',
  description: 'Vinyl flooring laid in middle and high schools: classrooms, science labs, libraries, workshops. Public-building (type R) compliance, heat-welded wide sheets, public education tenders. CB Sols, over 28 years of experience.',
  alternates: {
    canonical: 'https://cbsols.fr/en/sol-pvc-college-lycee',
    languages: { 'fr-FR': 'https://cbsols.fr/sol-pvc-college-lycee', en: 'https://cbsols.fr/en/sol-pvc-college-lycee' },
  },
  openGraph: {
    title: 'Vinyl flooring in middle and high schools',
    description: 'Heat-welded wide-sheet vinyl flooring in middle and high schools: classrooms, labs, libraries, technical workshops. Public education tenders.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/sol-pvc-college-lycee.jpg', width: 1200, height: 630 }],
  },
}

const cas = [
  { title: 'General classrooms', desc: 'Wide 2-metre sheet vinyl, heat-welded between sheets, a U4P3 rating and R10 slip resistance. A setting-out matched to the orientation of the desks. Laying during the school holidays over a whole floor if needed, 30 to 200 square metres per room.' },
  { title: 'Science labs', desc: 'Compact or heterogeneous vinyl with heightened chemical resistance: weak acids, bases, common solvents used in physics-chemistry and biology practicals. Cove skirting raised, full heat welding, U4P3 minimum. Recommendations: Tarkett iQ Granit or Gerflor Mipolam Esprit.' },
  { title: 'Libraries and study rooms', desc: 'Enhanced acoustic vinyl to cut ambient noise and support concentration. A wood or discreet plain floor. Sheet laying over a large open area, thresholds integrated with the existing corridors and staircases.' },
  { title: 'Technical workshops and vocational schools', desc: 'Compact U4P4 vinyl for wood, metalwork and electrical workshops. Resistance to the indenting of trolleys, heavy benches, dropped tools. R10 dry slip resistance, cutting zones with R11 safety flooring where there is splash.' },
]

const produits = [
  { name: 'Heterogeneous wide-sheet vinyl', desc: 'Laying in 2-metre heat-welded sheets, the signature technique of quality school buildings. Full watertightness between sheets, no seams collecting dust, a 15 to 20-year life. Main references: Tarkett iQ Granit and Gerflor Taralay Impression Compact.' },
  { name: 'Premium homogeneous compact vinyl', desc: 'For the most heavily used zones: vocational-school workshops, main circulation, entrance halls. A wear layer through the thickness, renovation sanding possible, a commercial warranty up to 30 years. Main references: Gerflor Mipolam Esprit and Forbo Sphera Element.' },
  { name: 'Safety and non-slip vinyl', desc: 'For high-school toilets, gym changing rooms, wet laboratory zones. R11 or R12 slip resistance, built-in anti-slip aggregates. Main references: Altro XpressLay (glue-free laying for fast renovation) and Polyflor Polysafe Quattro.' },
]

const process = [
  { step: 'Visit and survey', desc: 'A precise measure on site, floor by floor, with identification of the constraints (asbestos floors in 1970s-80s buildings, underfloor heating, level changes). A conversation with the manager or the technical services of the region or department.' },
  { step: 'Technical submission', desc: 'For public education tenders, the full file assembled: references, product sheets, fire-rating reports, environmental declarations, certifications, schedule, team. A careful response is decisive on the technical scores.' },
  { step: 'Site coordination', desc: 'The schedule fitted to the school holidays: summer for the big jobs (200 to 2000 m²), October half-term for small areas. Coordination with the other firms on the overall site if it is a heavy renovation.' },
  { step: 'Wide-sheet laying', desc: 'Removal of the old covering, self-levelling screed, primer, rolling out of the 2-metre sheets, full-surface gluing, careful rolling, thermofusion heat welding between sheets. Cove skirting in wet zones.' },
  { step: 'Handover', desc: 'A check of each weld with a point, a check of the skirting and threshold junctions, a commissioning clean, the reports and environmental declarations handed to the managers, maintenance instructions to the technical staff.' },
]

const faq = [
  { q: 'What public-building requirements apply to vinyl flooring in a middle or high school?', a: 'Middle and high schools fall under type R (teaching establishments) in the French public-building classification. The main requirements are: a Bfl-s1 fire rating as a minimum (a European report is compulsory), a UPEC rating of U4P3 minimum for classrooms and circulation, U4P4 recommended for high-traffic zones such as halls and workshops, R10 slip resistance in dry zones and R11 in toilets, changing rooms and wet zones to DIN 51130, an A+ label for VOC emissions with a verified environmental declaration. For laboratories, chemical resistance to weak acids, bases and common solvents is required on top. We provide all the reports and declarations at the quote stage and assemble the complete regulatory file for handover.' },
  { q: 'Why lay wide 2-metre sheet vinyl rather than tiles?', a: 'Laying wide 2-metre sheets with thermofusion heat welding is the signature of quality school buildings. Three reasons. Watertightness: the heat weld creates a perfect continuity between sheets, with no seams. Dust, water and liquids never get under the covering. Hygiene: no vertical tile seam that clogs over the years, simple cleaning with a scrubber-drier. Durability: no tile corner lifting after a few years of intense traffic. A well-laid sheet vinyl floor lasts 15 to 20 years with no major work. The initial extra cost is largely absorbed over the lifespan. It is the technique we systematically apply in high schools and colleges.' },
  { q: 'How long to respond to a public education tender?', a: 'On receiving the tender documents, we analyse the specification and the price schedule within 48 hours to confirm our interest and our capacity to respond on time. We may request a site visit if one is offered, which lets us quote accurately. The technical submission takes 5 to 10 days of careful writing for a complete file: company, team, similar references in high schools or colleges, technical sheets of the proposed products, fire-rating reports, environmental declarations, certifications, a detailed schedule over the school holidays, quality and safety measures. For large regional tenders, we draw on our catalogue of references built over more than 28 years of laying in education authorities.' },
  { q: 'A recent high-school job: how does it actually go?', a: 'On a 200-square-metre high-school job laid in wide sheets over the October half-term, the typical sequence is as follows. Monday: team arrives, old covering removed, substrate diagnosis. Tuesday: self-levelling screed, bonding primer, drying. Wednesday: full-surface sheet laying, gluing, rolling. Thursday: heat welding between sheets, skirting, threshold finishes. Friday: commissioning clean, checks, handover with the manager. An October break of about 10 days, and the team always finishes early to absorb the unexpected. This tight schedule is our standard. In over 28 years, we have never delayed a start of term.' },
  { q: 'Do modern vinyl floors pose a health problem in a high school?', a: 'The contract vinyl floors laid in high schools today are rated A+ for volatile-organic-compound emissions, the best level of the French classification. The old generations containing problematic phthalates (DEHP, DBP, BBP) were long ago replaced by plasticisers compliant with the REACH regulation. Some ranges go considerably further: Gerflor Mipolam Symbioz is bio-attributed, Forbo Sphera is completely phthalate-free, Tarkett iQ Granit is 100% recyclable in a closed loop. For high schools pursuing environmental or exemplary-building certification, these premium ranges are the references. We systematically steer towards these products for tenders stating an environmental requirement.' },
  { q: 'How do you deal with an asbestos floor found under the old covering?', a: 'Many middle and high schools built between 1950 and 1997 contain asbestos vinyl tiles or adhesives. An asbestos survey before work is compulsory and must be provided by the client before any intervention. If presence is confirmed, there are two options. Removal by a firm certified under sub-section 3 or 4, with containment and disposal through an approved channel, followed by a new laying on the treated substrate. Over-covering, allowed under strict conditions (the old floor perfectly adhered, an asbestos prevention sheet, traceability tracking), with a specific primer and a new laying over the top. We coordinate with the certified asbestos firms in our network and build these phases into the overall schedule.' },
  { q: 'What lifespan to expect from a vinyl floor in a high school?', a: 'With a U4P3 or U4P4 product laid in heat-welded sheets, allow 15 to 20 years in a classroom and circulation. The very busy zones such as entrance halls and vocational-school workshops run around 12 to 15 years. Homogeneous compact floors such as Gerflor Mipolam Esprit or Polyflor XL allow renovation by surface sanding after 10 to 12 years, extending the total life to 28 or even 30. Regular upkeep by the technical staff is decisive: daily cleaning with a scrubber-drier and a neutral product, re-coating every 2 to 3 years for film-forming floors. We hand over a personalised maintenance sheet and support the technical staff over the first months.' },
]

const specs = [
  { title: 'Bfl-s1 fire rating compulsory', desc: 'The European standard EN 13501-1, a rating report provided by the manufacturer. Compulsory for any type-R public building, attached to the handover file. No product laid in a high school falls below this rating.' },
  { title: 'UPEC rating U4P3 to U4P4', desc: 'U4P3 for classrooms and circulation, U4P4 for halls, school catering, vocational-school workshops. Ensures resistance to wear, indenting and sustained traffic over the life of the building.' },
  { title: 'R10 and R11 slip resistance', desc: 'R10 minimum in dry zones to DIN 51130, R11 in toilets, changing rooms, showers, chemistry labs. For wet or splash workshops, a dedicated R11/R12 safety floor.' },
  { title: 'Laboratory chemical resistance', desc: 'For physics-chemistry and biology practicals, a requirement for resistance to weak acids, bases and common solvents. Specific ranges such as Tarkett iQ Granit or Gerflor Mipolam Esprit with a dense watertight wear layer.' },
  { title: 'Wide-sheet laying', desc: '2-metre-wide sheets, thermofusion heat welding between sheets. Full watertightness, impeccable hygiene, maximum durability. The signature technique of quality high-school and college laying.' },
  { title: 'School-holiday schedule', desc: 'Summer for the big tenders (500 to 2000 m²), October half-term for intermediate areas, Easter for the remainder. Mandatory coordination with the manager and the other trades.' },
]

const marques = [
  { name: 'Tarkett iQ Granit', detail: 'Premium homogeneous compact, a commercial warranty up to 30 years, sandable. The reference for science labs and main circulation in high schools.' },
  { name: 'Gerflor Taralay Impression Compact', detail: 'Heterogeneous U4P3, R10, a wide range of wood and plain décors. Excellent durability, a recurring public-tender choice in middle and high schools.' },
  { name: 'Forbo Eternal', detail: 'Contract heterogeneous U4P3, an A+ rating, a verified environmental declaration. Particularly suited to classrooms and secondary-school halls.' },
  { name: 'Polyflor Polysafe Quattro', detail: 'A high-end R12 safety floor, a 15-year slip-resistance warranty. For gym changing rooms, toilets, the edges of wet zones.' },
  { name: 'Tarkett Acczent Excellence 70', detail: 'Acoustic heterogeneous with a 19 dB impact-sound reduction. Ideal for libraries, study rooms, high-school boarding houses.' },
  { name: 'Gerflor Mipolam Esprit', detail: 'Homogeneous compact with reinforced chemical resistance, essential in chemistry and biology labs. A+, a verified environmental declaration.' },
  { name: 'Forbo Sphera Element', detail: 'Phthalate-free homogeneous compact, 100% recyclable, an A+ label. The eco-responsible reference for environmental or demonstrator high schools.' },
  { name: 'Altro XpressLay', detail: 'A glue-free safety floor, ideal for fast renovation in a short break. R11 slip resistance, a Bfl-s1 rating, immediate commissioning.' },
]

const lieux = [
  { nom: 'State middle schools in Charente-Maritime', detail: 'The departmental council as client, regular public tenders, work across the whole department.' },
  { nom: 'State high schools in Nouvelle-Aquitaine', detail: 'The regional council as client, multi-year contracts for floor maintenance and renovation across the education authority.' },
  { nom: 'Vocational and technical high schools', detail: 'Production workshops, practical rooms, technical halls. Reinforced requirements on resistance and slip.' },
  { nom: 'Agricultural high schools', detail: 'Boarding houses, classrooms, workshops, catering. Tenders run by the ministry of agriculture or the region.' },
  { nom: 'Private middle and high schools under contract', detail: 'The management body as client, a faster decision than in a public tender, a schedule fitted to the establishment\'s calendar.' },
  { nom: 'High-school boarding houses', detail: 'Rooms, toilets, circulation, evening study rooms. Acoustic floors recommended for rest comfort.' },
  { nom: 'Libraries and documentation centres', detail: 'Documentation centres, acoustic floors to cut noise and support concentration. Open areas of 100 to 300 m².' },
  { nom: 'High-school canteens', detail: 'Rooms of over 300 seats, compact or R11 safety floors, cove skirting, HACCP resistance.' },
  { nom: 'High schools in Charente-Maritime', detail: 'La Rochelle, Rochefort, Saintes, Saint-Jean-d\'Angély, Royan. Free travel, regular work.' },
  { nom: 'Middle schools in Deux-Sèvres and Vendée', detail: 'Niort, Parthenay, Fontenay-le-Comte, La Roche-sur-Yon. Departmental-council tenders.' },
  { nom: 'Environmental-certification establishments', detail: 'Demonstrator buildings or exemplary renovations: Gerflor Mipolam Symbioz, Forbo Sphera, Tarkett iQ Optima.' },
  { nom: 'University labs and libraries', detail: 'Universities of La Rochelle, Poitiers, Limoges. Specifics close to a high school, tenders run by the estate services.' },
]

export default function SolPvcCollegeLyceePageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/sol-pvc-college-lycee#service',
        name: 'Vinyl flooring laid in middle and high schools',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'Country', name: 'France' },
          { '@type': 'Place', name: 'Nouvelle-Aquitaine' },
          { '@type': 'Place', name: 'Charente-Maritime' },
          { '@type': 'Place', name: 'Deux-Sèvres' },
          { '@type': 'Place', name: 'Vendée' },
        ],
        serviceType: 'Vinyl flooring laid in middle and high schools, heat-welded wide sheets, public-building compliance, public education tenders',
        description: 'Supply and laying of heat-welded wide-sheet vinyl flooring in middle and high schools. Classrooms, labs, libraries, technical workshops, boarding houses. Complete type-R public-building compliance.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Secondary-school vinyl flooring', item: 'https://cbsols.fr/en/sol-pvc-college-lycee' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="college-lycee" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Secondary-school vinyl flooring</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Vinyl flooring in middle and high schools,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>robustness under traffic.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Classrooms, science labs, libraries, technical workshops, boarding houses: wide 2-metre sheet vinyl, thermofusion heat-welded. Complete type-R public-building compliance, public education tenders, a school-holiday schedule. Over 28 years of craft experience.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=sol-pvc-college-lycee" variant="primary" size="md">Request a quote</Button>
                <Button href="/en/showroom" variant="outline" size="md">See the showroom</Button>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>The signature of a real school laying</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;A high school means laying in heat-welded 2-metre sheets, full stop. No tiles lifting after five years. That is the basis of a floor that lasts 20 years.&rdquo;
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A public tender under way?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            We respond with a careful technical submission.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Region or department: Valentin Prévoteau leads the response personally, reports and environmental declarations to hand.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=sol-pvc-college-lycee" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Technical specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>The type-R public-building requirements</div>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>The vinyl floors we lay in secondary schools</div>
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
            For regional and departmental tenders, we work exclusively with manufacturers that hold a verified environmental declaration, European fire-rating reports and logistics networks able to deliver to large summer sites. A recent example: a 200-square-metre high school laid in sheets over the October break, delivered two days early.
          </p>
        </div>
      </section>

      {/* Mid quote + CTA */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &ldquo;When we hand back a high school the day before term, you should be able to run a finger over the weld and feel nothing. That is the finish we sign off on.&rdquo;
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?from=sol-pvc-college-lycee-inline" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>A prior site visit, study of the tender documents and a school-holiday schedule</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Brands and type-R references</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Eight references, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from robust contract to safety.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            The major European makers of floor coverings for education authorities. Every product holds the Bfl-s1 fire-rating reports, the right UPEC rating, verified environmental declarations and the A+ VOC label.
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
            Every context <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>of secondary education.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            CB Sols responds to the public tenders of departmental and regional councils, works on vocational and agricultural high schools, and supports private establishments under contract. Complete expertise in type-R education buildings.
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A lab or workshop to fit out?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Chemical resistance and R11 slip, we know it well.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Tarkett iQ Granit, Gerflor Mipolam Esprit, Polyflor safety floors: we steer by the precise need of the room.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=sol-pvc-college-lycee-mid" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach, from tender to handover</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from response to start of term.</em>
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
            Vinyl in middle and high schools, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>detailed answers.</em>
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
            Describe your establishment, we reply within 48 hours.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Type of establishment, areas, schedule, any asbestos constraints: these are enough to start a useful conversation.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=sol-pvc-college-lycee-faq" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      <RelatedCards
        sectionTitle="See also"
        sectionSubtitle="Our know-how covers other worlds that may interest you. Take your time to browse, ask your questions, we will answer them."
        items={[
          { href: '/en/sol-pvc-ecole', title: 'School vinyl flooring', teaser: 'Calmed acoustics, quick upkeep, fifteen-year durability in a classroom that never stops.', icon: GraduationCap },
          { href: '/en/sol-pvc-creche', title: 'Nursery vinyl flooring', teaser: 'Phthalate-free, antibacterial, certified for early years. Peace of mind for parents and staff.', icon: Baby },
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
            A high school to renovate? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Let us talk tenders.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Tender response, technical submission, school-holiday schedule: we support the authorities through the whole public education tender process.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=sol-pvc-college-lycee" variant="primary" size="md">Request a quote</Button>
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
