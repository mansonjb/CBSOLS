import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Private-Jet Carpet | Business-Aviation Cabin Refit',
  description: 'Carpet laying on private jets and business aircraft. Leather cabin refit and bespoke rugs for Cessna Citation, Falcon, Gulfstream, Bombardier. FAA / EASA fire standards. CB Sols, La Rochelle.',
  alternates: {
    canonical: 'https://cbsols.fr/en/moquette-jet-prive',
    languages: { 'fr-FR': 'https://cbsols.fr/moquette-jet-prive', en: 'https://cbsols.fr/en/moquette-jet-prive' },
  },
  openGraph: {
    title: 'Private-Jet Carpet | Business-Aviation Cabin Refit',
    description: 'Business-aviation carpet certified to FAA Part 25 and EASA CS-25. Workshop making, hangar laying. Falcon, Gulfstream, Bombardier, Citation.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/moquette-jet-prive.jpg', width: 1200, height: 630 }],
  },
}

const cas = [
  { title: 'Main cabin', desc: 'Full-surface carpet, millimetre setting-out around the seat rails, inspection hatches and technical passages. On a wide cabin (Global, Falcon 8X, G650), a continuous weave with no visible seam along the aisle.' },
  { title: 'Vestibule and galley', desc: 'A zone heavily used by the crew and in-flight service. Aviation polypropylene or fire-retardant nylon for resistance to knocks, coffee stains and the constant traffic of rotations.' },
  { title: 'Cockpit corridor and lavatory', desc: 'Small surfaces but the strictest fire constraints, given the proximity to technical zones. Materials certified to the most severe tests, full traceability for the operator\'s file.' },
  { title: 'Removable rugs and runners', desc: 'Main corridors, stair steps on wide-cabin jets, entry mats. Hand-sewn making with reinforced hems, aviation Velcro fixing for quick removal during inspections.' },
]

const produits = [
  { name: 'Virgin wool plus Nomex aramid fibre', desc: 'The reference blend for high-end business aviation. The wool brings softness and feel, the Nomex ensures the A-1 fire rating to FAA Part 25 §853. A weight of 900 to 1200 g/m² by zone, low-toxicity dyes.' },
  { name: 'Treated aviation polypropylene', desc: 'For the intensive service zones, galley and vestibule. A 100% hydrophobic fibre, fast drying, built-in fire retardant. It passes the 12-second vertical burn test and the 60-degree burn test required by the FAA.' },
  { name: 'Hand-sewn bespoke rugs', desc: 'A complementary making for runners and entry mats. Axminster or Wilton weave on a non-halogenated composite backing, hand-sewn hems, dimensions adjusted to the millimetre on the cabin tracing.' },
]

const process = [
  { step: 'Hangar visit', desc: 'A survey on tracing paper in the maintenance hangar, high-definition photos, a conversation with the cabin chief and the maintenance manager. The schedule constraints and the work window identified.' },
  { step: 'Material choice', desc: 'Colours and fibres chosen in step with the decorator or cabin designer. The required fire certifications validated by the aircraft\'s registration (FAA, EASA, offshore registry).' },
  { step: 'Technical file', desc: 'The traceability file assembled: material sheets, fire-test reports, declarations of conformity, lot marking. The document handed to the operator for its conformity file.' },
  { step: 'Workshop making', desc: 'Cutting and preparation at the Villedoux workshop. The setting-out dry-tested before transport to the hangar. A precision essential to meet the maintenance window.' },
  { step: 'Hangar laying', desc: 'Work during the scheduled stop, solvent-free aviation polyurethane adhesives, finishes on thresholds and hatches. A clean handover, ready to fly the next day.' },
]

const faq = [
  { q: 'Which carpet is certified for a private jet?', a: 'A business-aviation carpet must meet FAA Part 25 §853 (cabin interiors) or §855 (cargo compartments) by application zone, as well as EASA CS-25.853 on the European side. The key tests are the 12-second vertical burn (flame spread rate), the 60-degree burn for items near exits, the ASTM E662 smoke density and the Boeing BSS 7239 toxicity. We work exclusively with certified fibres, wool plus Nomex or treated aviation polypropylene, with up-to-date test reports.' },
  { q: 'How long for a full cabin carpet refit?', a: 'For a midsize jet such as a Falcon 2000 or Citation Latitude, the workshop making takes 5 to 8 days after the tracing is approved. The hangar laying runs over 2 to 4 days by complexity, ideally during a C-check or a paint pass. On a wide cabin such as a Global 7500 or G650, allow 10 to 14 days of workshop time and 5 to 7 days of laying.' },
  { q: 'Do you work at Le Bourget and the business airports?', a: 'Yes. We travel to Le Bourget, Cannes-Mandelieu, Nice Côte d\'Azur, Saint-Tropez La Môle, Annecy Meythet, Bordeaux-Mérignac, Biarritz, and to La Rochelle Île de Ré for our local area. The mobile team fits the maintenance window set by the operator or the FBO base. For short rotations, we can also receive the aircraft in a partner hangar near our workshop.' },
  { q: 'What is the difference from a premium automotive carpet?', a: 'Premium automotive meets fire standards in the order of FMVSS 302 or ISO 3795, significantly less demanding than FAA Part 25. The smoke-toxicity and flame-spread thresholds required in aviation are about three times stricter. The fibres and backings differ too: in a jet, Nomex or treated polypropylene with a non-halogenated composite backing is required, where automotive allows classic foam underlays.' },
  { q: 'How does coordination with the manufacturer or operator work?', a: 'We liaise upfront with the cabin chief, the maintenance manager and, if needed, the design office of the manufacturer or the STC (Supplemental Type Certificate) holder. The technical file is sent for approval before the material is ordered. For US refits, we provide items compatible with an ARSA certification. For EASA refits, a Part 21 Subpart J file or work under the operator\'s Part 145 responsibility.' },
  { q: 'What traceability do you provide for conformity?', a: 'Every square metre is traced: manufacturer lot number, fire-test reports (12-second vertical burn, 60-degree burn, ASTM E662, BSS 7239), signed technical sheet, materials declaration of conformity. The whole is handed over in digital and paper form to the maintenance manager, ready to go into the aircraft manual and the CAMO.' },
  { q: 'Do you also make the complementary removable rugs?', a: 'Yes. Corridor runners, entry mats, stair runners on wide-cabin jets, cockpit-corridor rugs. Hand-sewn making at the workshop, reinforced hems, aviation Velcro fixing to make removal easier during inspections or a deep clean. Materials and certifications identical to the cabin carpet.' },
]

const specs = [
  { title: 'Aviation fire standards', desc: 'FAA Part 25 §853 (interiors) or §855 (cargo) by zone, EASA CS-25.853, A-1 rating (wool plus Nomex), 12-second vertical burn, 60-degree burn for zones near exits, ASTM E662 smoke density, Boeing BSS 7239 toxicity.' },
  { title: 'Limited weight', desc: 'Every kilo aboard means less range. Aviation carpet stays at weights of 800 to 1200 g/m² at most, against 2000 g/m² and more in marine. An ultra-thin foam backing, without useless excess.' },
  { title: 'Certified materials', desc: 'Virgin wool plus Nomex aramid fibre for premium cabins, treated aviation polypropylene for service zones. A non-halogenated composite backing, special binding tape compliant with smoke-toxicity requirements.' },
  { title: 'Full traceability', desc: 'Every laying comes with a complete materials file: test reports, manufacturer technical sheet, lot number, declaration of conformity. For US refits, ARSA-compatible items. For EASA, a Part 21 or Part 145 file.' },
  { title: 'Aviation adhesives', desc: 'Certified aviation polyurethane adhesives, solvent-free so they do not attack the Connolly or Edelman leather, the maple-burl woodwork, the precious-wood veneers. Application mastered by our team, hangar ventilation respected.' },
  { title: 'Laying in a scheduled window', desc: 'We work exclusively during the maintenance windows set by the operator. A tight schedule, hangar rules respected, absolute cleanliness, a handover ready to fly.' },
]

const marques = [
  { name: 'Dassault Falcon', detail: '2000, 6X, 7X, 8X. Cabin refits in step with the Dassault maintenance network, EASA conformity files.' },
  { name: 'Gulfstream', detail: 'G280, G500, G650, G700. Wide cabins for intercontinental flights, setting-out matched to the long central aisles.' },
  { name: 'Bombardier', detail: 'Challenger 350 and 650, Global 6500 and 7500. The widest platform on the market, made in continuous lengths.' },
  { name: 'Cessna Citation', detail: 'Mustang, XLS, Latitude, Longitude. From light jet to super midsize, the most widespread range in business aviation.' },
  { name: 'Embraer Phenom', detail: '100 and 300. Compact cabins, heightened weight constraints, a material choice to match.' },
  { name: 'Pilatus PC-24', detail: 'The super-versatile, with short-airport access. Laying fitted to intensive charter rotations.' },
  { name: 'HondaJet', detail: 'A recent light jet, an optimised cabin, a carpet refit in direct contact with the Honda Aircraft service network.' },
]

const aeroports = [
  { nom: 'Paris Le Bourget', detail: 'Europe\'s leading business airport. Work at the Universal Aviation, Signature and Advanced Air Support FBOs.' },
  { nom: 'Cannes-Mandelieu', detail: 'The historic Riviera hub of business aviation. Refits during the late season.' },
  { nom: 'Nice Côte d\'Azur', detail: 'The Sky Valet business-aviation terminal. Coordination with the Riviera operators and cabin chiefs.' },
  { nom: 'Saint-Tropez La Môle', detail: 'The air base of yacht owners. Targeted work in the off-season.' },
  { nom: 'Annecy Meythet', detail: 'Premium Alpine transit. Partner hangars for short technical stops.' },
  { nom: 'Bordeaux-Mérignac', detail: 'A business-aviation base and a Dassault Falcon maintenance site. Coordination with the Sogerma and Dassault Aviation workshops.' },
  { nom: 'Biarritz Basque Country', detail: 'A hub for the Basque coast and northern Spain. Refits possible in a local partner hangar.' },
  { nom: 'La Rochelle Île de Ré', detail: 'Our local airport, 20 minutes from the Villedoux workshop. Fast hangar laying.' },
  { nom: 'Cognac Châteaubernard', detail: 'A regional helicopter and business-aviation base. Work on units based in the Charente.' },
  { nom: 'Lyon-Bron', detail: 'The Lyon business airport, France\'s second by volume. FBO hangars available for scheduled refits.' },
]

export default function MoquetteJetPrivePageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/moquette-jet-prive#service',
        name: 'Private-jet and business-aviation carpet',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'Country', name: 'France' },
          { '@type': 'Place', name: 'Paris Le Bourget Airport' },
          { '@type': 'Place', name: 'Cannes-Mandelieu Airport' },
          { '@type': 'Place', name: 'Nice Côte d\'Azur Airport' },
          { '@type': 'Place', name: 'Bordeaux-Mérignac Airport' },
          { '@type': 'Place', name: 'La Rochelle Île de Ré Airport' },
        ],
        serviceType: 'Carpet laying and bespoke rug making for private jets and business aircraft',
        description: 'Cabin, vestibule, galley and runner refit for private jets. Materials certified to FAA Part 25 and EASA CS-25, full traceability, hangar work during maintenance windows.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Private-jet carpet', item: 'https://cbsols.fr/en/moquette-jet-prive' },
        ],
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Private-jet carpet</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Private-jet carpet,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>laid in the hangar.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Cabin, vestibule, galley, runners: carpet refit and bespoke rugs for Cessna Citation, Falcon, Gulfstream, Bombardier. Materials certified to FAA Part 25 and EASA CS-25, a full traceability file, work during maintenance windows. Over 28 years of craft experience.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=moquette-jet-prive" variant="primary" size="md">Request a quote</Button>
                <Button href="/en/showroom" variant="outline" size="md">See the showroom</Button>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>The detail that changes everything</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;An impeccable seam, a true setting-out: that is what signs a high-end finish. In a jet cabin, every millimetre shows.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>For which zone of the cabin</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Four zones, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>four approaches.</em>
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A cabin refit in preparation?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Each cabin calls for its own tracing.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Falcon, Gulfstream, Bombardier or Citation: Valentin Prévoteau travels to the hangar to survey and quote accurately.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=moquette-jet-prive" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Technical specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>The craft of aviation carpet</div>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materials we lay in the cabin</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Three families, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>one standard.</em>
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
            On the supplier side, we work with the makers specialised in aviation: technical Irish and British wools, Nomex blends to the manufacturer\'s specification, European composite backings compliant with FAA and EASA. No standard material repurposed, no consumer brand dressed up as aviation: the traceability stands up before the manufacturer and the operator.
          </p>
        </div>
      </section>

      {/* Mid quote + CTA */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &ldquo;In aviation, the visible detail counts as much as the technical report behind it. That balance is what defines the craft.&rdquo;
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?from=moquette-jet-prive-inline" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>A hangar visit across all the French business-aviation hubs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Jet brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>The manufacturers we work on</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Seven ranges, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from light jet to wide cabin.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Light, midsize, super midsize, wide cabin, ultra long range: each platform has its own constraints of setting-out, weight and certification. Our approach stays the same, adjusted to the aircraft\'s technical sheet.
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

      {/* Business airports */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Where we work</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            The finest business airports <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>in France.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            A workshop based in Villedoux, a mobile team set up to work at the main French business-aviation hubs. For complete projects, we coordinate the work during scheduled maintenance windows.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {aeroports.map((p, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{p.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline 2 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A maintenance window to use?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            We fit the laying to your schedule.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            A C-check stop, a paint pass, an FBO transit: describe the window and we adapt to it.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=moquette-jet-prive-mid" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach, from visit to laying</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>fitted to your maintenance.</em>
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
            Aviation carpet, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>technical answers.</em>
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
            Describe your aircraft, we reply within 48 hours.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Manufacturer, model, registration, FBO base, maintenance window: these five items are enough to start a useful conversation.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=moquette-jet-prive-faq" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* See also */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>See also</div>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '1.5rem' }}>
            CB Sols is also a specialist in marine carpet and laying in châteaux, manor houses and townhouses. Three worlds, one and the same demand for finish.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/en/moquette-chateau" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Château carpet →</Link>
            <Link href="/en/moquette-bateau" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Boat carpet →</Link>
            <Link href="/en/moquette-yacht" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Yacht carpet →</Link>
            <Link href="/en/moquette-catamaran" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Catamaran carpet →</Link>
            <Link href="/en/moquette-peniche" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Barge carpet →</Link>
            <Link href="/en/services/pose-moquette" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Carpet laying →</Link>
            <Link href="/en/services/tapis-sur-mesure" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Bespoke rugs →</Link>
            <Link href="/en/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Villedoux showroom →</Link>
          </div>
        </div>
      </section>

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            An aircraft to fit out? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Let us talk.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A hangar visit at Le Bourget, Cannes, Nice, Bordeaux, La Rochelle and all the French business-aviation hubs. A bespoke quote after a precise survey.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=moquette-jet-prive" variant="primary" size="md">Request a quote</Button>
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
