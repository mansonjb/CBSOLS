import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Boat Carpet | Bespoke Marine Flooring, La Rochelle | CB Sols',
  description: "Marine carpet specialist in western France: catamarans, yachts, barges. IMO FTP, MED and Bfl-s1 compliant. Workshop-made, fitted dockside. Request a quote.",
  alternates: {
    canonical: 'https://cbsols.fr/en/moquette-bateau',
    languages: {
      'fr-FR': 'https://cbsols.fr/moquette-bateau',
      'en': 'https://cbsols.fr/en/moquette-bateau',
    },
  },
  openGraph: {
    title: 'Boat Carpet | Bespoke Marine Flooring | La Rochelle',
    description: "Bespoke boat carpet: catamarans, yachts, barges. IMO fire standards, salt humidity, marine polyurethane adhesives.",
    type: 'website',
    locale: 'en',
    images: [{ url: 'https://cbsols.fr/og/moquette-bateau.jpg', width: 1200, height: 630 }],
  },
}

const cases = [
  { title: 'Sailing or power catamaran', desc: "Two hulls, a central saloon exposed to sun and salt. We use 100% non-absorbent polypropylene carpet, with cutting adapted to the curves of the saloon and the central beam skirts. See our dedicated catamaran page." },
  { title: 'Motor yacht or luxury sailing yacht', desc: "Wide saloons, owner's cabins, premium finishes. A combination of fire-treated wool carpet and bespoke rugs, blended into the existing joinery and leatherwork. Tolerant of engine vibration." },
  { title: 'Liveaboard or commercial barge', desc: "Flat, apartment-like surfaces, strong river humidity but no salt. For restaurant and events barges, the inland-waterway public-venue fire rating applies (Bfl-s1 minimum)." },
  { title: 'Full refit of a leisure craft', desc: "We strip out the old flooring, often laid with standard acrylic adhesive that never holds on a boat. We treat the substrate, relay with a marine polyurethane adhesive and heat-weld the seams. The floor lasts." },
]

const products = [
  { name: '100% marine polypropylene carpet', desc: "A fibre that does not absorb water, dries fast and is unaffected by salt. Weight 800 to 1400 g/m². Bfl-s1 fire rating minimum, IMO FTP Code Part 5 certification available on request for commercial craft." },
  { name: 'Fire-treated virgin wool', desc: "For high-end yachts where looks come first. Flame-retardant treatment built into the fibre, M1 rating, a soft and warm finish. Sensitive to prolonged humidity, so best kept to well-ventilated saloons and cabins." },
  { name: 'Acoustic marine PVC flooring', desc: "For walkways, galleys and heads on board. Closed-cell foam backing (never felt), heat-welded seams, full watertightness. MED (Marine Equipment Directive) compatible." },
]

const process = [
  { step: 'Dockside survey', desc: "Templating on film, photos, substrate moisture reading, identification of the tricky points (manifold, curves, service runs). Discussion with the owner or skipper." },
  { step: 'Material selection', desc: "Chosen at our Villedoux showroom or from samples sent out. We confirm the fire ratings required by use (private leisure, charter, commercial)." },
  { step: 'Quote & scheduling', desc: "Detailed quote within 48 hours. Scheduling built around the boat's refit window or its dockside availability. No surprises on the final invoice." },
  { step: 'Workshop fabrication', desc: "Cutting and preparation in our Villedoux workshop from the templates. Millimetre precision to avoid any reworking on site. The layout is tested before transport." },
  { step: 'Dockside fitting', desc: "Final fit aboard the boat, marine polyurethane adhesive, heat-welded seams, finishes around thresholds and inspection hatches. Handed back clean." },
]

const faq = [
  { q: 'What fire standards apply to marine floor coverings?', a: "For private leisure craft, the European Bfl-s1 rating (reaction to fire plus low smoke emission) is the recommended minimum baseline. For commercial craft (charter, passenger vessels), you must comply with the IMO FTP Code (International Maritime Organization, Fire Test Procedures) Part 5, as well as the MED 2014/90/EU directive (Marine Equipment Directive). We supply the material certificates with every fit." },
  { q: 'Why not use a standard indoor carpet on a boat?', a: "Three technical reasons. First, fibres such as untreated wool or standard polyamide absorb ambient humidity (80-95% on a boat) and eventually grow mould under the floor. Second, indoor acrylic adhesives do not hold up to temperature swings and the salt-laden atmosphere. Third, the indoor Cfl-s1 fire rating falls short of marine requirements. The result at 18 months: lifting, odour, damage to the substrate." },
  { q: 'Which material for which boat?', a: "100% polypropylene for wet areas, salt-exposed zones, or heavily used spaces (sailing catamaran, cruising yacht). Fire-treated wool for the ventilated, air-conditioned saloons of motor yachts. Welded marine PVC for galleys, heads and gangways. On a boat, you often combine two or three materials depending on the zone." },
  { q: 'Does the boat have to be lifted out of the water for the fit?', a: "No, in most cases. The fit is done dockside, over 1 to 3 days depending on the surface area. We coordinate the work with the marina (La Pallice, Port des Minimes, La Flotte, Saint-Martin) or the yard. For a full refit involving stripping out the old flooring and treating the substrate, the boat may be out of the water (dry dock, boat hoist)." },
  { q: 'How long does a properly fitted marine carpet last?', a: "On a leisure craft used seasonally (June to September), a marine polypropylene carpet fitted by the book lasts 8 to 12 years. On a yacht in permanent use, expect 5 to 8 years depending on how often it is lived in. The failures we come across rarely come from wear. They almost always come from a poorly prepared initial fit, with the wrong adhesive or an absorbent underlay." },
  { q: 'Do you work in ports beyond La Rochelle?', a: "Yes. Our workshop is in Villedoux, 10 minutes from La Pallice and Port des Minimes. We regularly work in Rochefort, Royan, La Flotte, Saint-Martin-de-Ré, Boyardville and Marennes. By quote, we travel as far as Arcachon, Les Sables-d'Olonne or southern Brittany for larger craft." },
  { q: 'Do you have references in the marine sector?', a: "Our 28-plus years of experience at CB Sols include work on catamarans from the Lagoon and Bali fleets in La Rochelle, several private yachts at Port des Minimes, and liveaboard barges on the Charente. Project details remain confidential out of respect for the owners, but we can share references on a serious enquiry." },
]

const comparison = [
  { type: 'Catamaran', surfaces: 'Central saloon + 4 cabins, mostly flat surfaces', enjeu: 'Salt humidity, ventilation between hulls, sun exposure', materiau: '100% polypropylene, Bfl-s1' },
  { type: 'Motor / luxury sailing yacht', surfaces: 'Saloon, owner cabin, gangways, curved surfaces', enjeu: 'Engine vibration, premium finishes, aesthetics', materiau: 'Fire-treated virgin wool + bespoke rugs' },
  { type: 'Barge', surfaces: 'Apartment-style space, wide saloons, flat surfaces', enjeu: 'Strong river humidity, weight not an issue, public-venue rules if commercial', materiau: 'Polypropylene or wool by use, welded PVC in wet areas' },
]

const glossary = [
  { term: 'Bfl-s1', def: "European reaction-to-fire rating for floor coverings (EN 13501-1): B = very low contribution to fire, fl = floor, s1 = low smoke emission. The minimum baseline for leisure craft." },
  { term: 'IMO FTP Code 2010', def: 'International Maritime Organization, Fire Test Procedures. The worldwide reference for marine fire testing. Part 5 deals specifically with floor coverings on passenger and commercial vessels.' },
  { term: 'MED / Wheelmark', def: "Marine Equipment Directive 2014/90/EU. The ship's-wheel mark applied to materials approved for commercial navigation in Europe. Mandatory for professional charter and on-board events." },
  { term: 'ISO 9239-1', def: "The radiant-panel test that measures the critical flame-spread flux of a floor covering. The higher the kW/m² value, the more the material resists." },
  { term: 'M0-M4 rating', def: "The former French reaction-to-fire classification (M0 non-combustible, M4 easily flammable). Still quoted in inland-waterway public-venue files. Rough equivalence: M1 ≈ Bfl-s1, M2 ≈ Cfl-s1." },
  { term: 'FRP', def: 'Fibre Reinforced Polymer. The polyester/glass-fibre composite that makes up 90% of modern leisure hulls. A non-porous substrate that requires a specific primer before bonding.' },
  { term: 'Tufting', def: "A manufacturing process where needles punch the fibre into a primary backing, then fix it with latex or a secondary backing. Most contract and marine carpets are tufted." },
  { term: 'Axminster / Wilton', def: "High-end weaves, historically British. Axminster = pattern by the metre, ideal for yachts with a large saloon. Wilton = dense looped velvet, 15 to 28 years of service life." },
  { term: 'Polypropylene (PP)', def: "A 100% hydrophobic synthetic fibre (moisture regain < 0.05%). Unaffected by salt, dries within hours. The reference fibre in the marine world." },
  { term: 'Polyamide 6.6 (PA 6.6)', def: "A technical nylon, more abrasion-resistant than PP but with 4-5% moisture regain. Reserved for ventilated saloons and air-conditioned spaces." },
  { term: 'Heat welding', def: "A seam-sealing technique for marine PVC floors: a thermofusible cord is inserted into a groove then melted at 200°C with a welding iron. The seam becomes continuous and watertight." },
  { term: 'Two-part PU adhesive', def: "A two-component polyurethane adhesive (resin + hardener) with a 30 to 60 minute pot life. It holds through temperature swings (-20 to +80°C), stays elastic and resists salt. The marine reference." },
]

const ports = [
  { nom: 'Monaco', detail: 'Port Hercule and Port de Fontvieille. Work on owners\' yachts and premium charter craft.', href: '/en/sols-monaco' },
  { nom: 'Cannes', detail: 'Vieux-Port and Port Canto. Winter refits during the between-season lay-ups.' },
  { nom: 'Saint-Tropez', detail: 'Port Saint-Tropez. Coordination with local cabinetmakers and trimmers on full finishing projects.' },
  { nom: 'Antibes', detail: "Port Vauban, Europe's leading superyacht harbour. Workshop fabrication and dockside fitting on a tight schedule." },
  { nom: 'Nice', detail: 'Port Lympia. Private leisure craft and coastal cruising motor yachts.' },
  { nom: 'Hyères and Porquerolles', detail: 'Port de la Capte and Port d\'Hyères. Sailing bases and access to the Îles d\'Or.' },
  { nom: 'Marseille', detail: 'Vieux-Port, Estaque, Pointe Rouge. Cruising yacht and charter catamaran refits.' },
  { nom: 'La Rochelle, our base', detail: 'Port des Minimes, the largest marina on the Atlantic coast. Workshop in Villedoux, 10 minutes away.' },
  { nom: 'Saint-Malo', detail: 'Port des Sablons. Channel leisure craft and large cruising yachts.' },
  { nom: 'Deauville and Trouville', detail: 'Port-Deauville. Work on yachts and craft wintered in Normandy.' },
  { nom: 'Lorient', detail: 'Larmor-Plage marina. Southern Brittany, a historic racing and cruising base.' },
  { nom: 'Arcachon', detail: 'Arcachon marina. The bay and the southern Atlantic coast.' },
]

export default function BoatCarpetEnPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/moquette-bateau#service',
        name: 'Boat carpet and marine floor coverings',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: ['La Rochelle', 'Île de Ré', 'Île d\'Oléron', 'Monaco', 'Cannes', 'Antibes', 'Saint-Tropez', 'Marseille', 'Nice', 'Saint-Malo', 'France'],
        serviceType: 'Fitting of marine carpet and PVC flooring for boats, yachts, catamarans and barges',
        description: 'Design, workshop fabrication and dockside fitting of boat carpet and marine floor coverings compliant with IMO FTP and MED standards. Work across France and in Monaco.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Boat carpet', item: 'https://cbsols.fr/en/moquette-bateau' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Boat carpet</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Boat carpet,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>fitted dockside.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Catamaran, yacht, barge: we fabricate in our Villedoux workshop and fit dockside in La Rochelle, La Flotte and Rochefort. Materials compliant with IMO FTP and MED, marine polyurethane adhesives, heat-welded seams. 28-plus years of craftsmanship.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact" variant="primary" size="md">Request a quote</Button>
                <Button href="/en/showroom" variant="outline" size="md">See the showroom</Button>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>The detail that changes everything</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;An indoor carpet laid with acrylic adhesive lasts 18 months on a boat. A properly fitted marine carpet lasts 10 years. The difference is not the textile, it is everything underneath the textile.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Which type of boat?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Four cases, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>four approaches.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {cases.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline CTA */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A project in mind?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Every boat calls for its own answer.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Catamaran, yacht or barge: Valentin Prévoteau comes dockside to take the measurements and price it right.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Why a marine floor is different */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Why a marine floor is not an indoor floor</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Six constraints a living-room carpet <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>never meets.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { t: '1. Permanent salt humidity', d: "Air on board swings between 80 and 95% relative humidity. Salt settles on the surface then migrates into the fibres. On an unsuitable covering, mould appears under the floor within 12 to 18 months. Polypropylene absorbs next to nothing." },
              { t: '2. Strict fire standards', d: "In a fire on board, evacuation takes time. The IMO FTP Code sets limits on smoke toxicity and spread rate. For private leisure craft, Bfl-s1 is the baseline. For charter and commercial use, IMO Part 5 certification is mandatory." },
              { t: '3. Restricted weight', d: "On a leisure craft, every kilo aboard affects the waterline, fuel use and behaviour at sea. We favour carpets of 800-1100 g/m², without a heavy felt underlay but with a fine closed-cell foam." },
              { t: '4. Curved surfaces', d: "Rounded hull, manifold, complex cabin shapes: fitting straight standard lengths is impossible. Templating on film, millimetre workshop cutting, heat-welded seams to prevent any water ingress." },
              { t: '5. Marine polyurethane adhesive', d: "A standard indoor acrylic adhesive dries, shrinks with temperature swings and gives way under salt. We use only marine-certified single or two-part polyurethane adhesives, compliant with ISO 9239." },
              { t: '6. Vibration and temperature', d: "Engine vibration, thermal expansion between a cool bilge and a sun-heated deck: a marine floor has to absorb all this without lifting. Closed-cell foam backing, an elastic adhesive, flexible seams. That is also why the work is done in the workshop then adjusted dockside, never improvised." },
            ].map((x, i) => (
              <div key={i}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{x.t}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Quick comparison</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Catamaran, yacht, barge, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>an overview.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {comparison.map((t, i) => (
              <div key={i} style={{ borderLeft: '3px solid var(--terra)', padding: '1.5rem 1.5rem 1.5rem 2rem', marginBottom: '1rem', backgroundColor: 'var(--bg-card)', borderRadius: '0 8px 8px 0' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem' }}>{t.type}</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  <div><div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--terra)', marginBottom: '0.3rem' }}>Areas</div><div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>{t.surfaces}</div></div>
                  <div><div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--terra)', marginBottom: '0.3rem' }}>Key challenge</div><div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>{t.enjeu}</div></div>
                  <div><div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--terra)', marginBottom: '0.3rem' }}>Recommended material</div><div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>{t.materiau}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materials we fit in the marine environment</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Three families of material, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>one single standard.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {products.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '1.5rem 0', borderBottom: i < products.length - 1 ? '1px solid var(--border)' : 'none' }}>
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
            On the brand side, we work with the European contract and marine specialists: Bolon (Sweden, woven vinyl floors), Roberts Marine, as well as the contract ranges from EGE and Gerflor that can be adapted to the marine world with additional certification. No mainstream entry-level product pushed beyond its intended use: we see too many boats redone three times in five years for exactly that reason.
          </p>
        </div>
      </section>

      {/* Mid-page quote */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &ldquo;Every boat is different. No template is ever reused. A dockside visit is a must before any serious pricing.&rdquo;
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact" variant="primary" size="md">Book a visit</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Free call-out in the Charente ports</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical glossary */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Marine glossary</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Twelve terms <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>to know before any quote.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Marine vocabulary can feel opaque. Here are the standards, fibres and techniques we routinely cite in a quote or an inland-waterway public-venue file. They are also the questions any serious safety commission will ask.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {glossary.map((g, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra)', marginBottom: '0.5rem' }}>{g.term}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{g.def}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ports */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Where we work</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            The finest ports in France <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>and Monaco.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Our workshop is based in Villedoux, near La Rochelle. We travel across France and as far as Monaco for premium projects. Call-outs are organised by project, with a mobile team for high-end work outside our home area.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {ports.map((p, i) => {
              const hasHref = 'href' in p && typeof p.href === 'string'
              return (
                <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>
                    {hasHref ? (
                      <Link href={(p as { href: string }).href} style={{ color: 'var(--terra)', textDecoration: 'none' }}>{p.nom} →</Link>
                    ) : p.nom}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{p.detail}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our method, from survey to fit</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>the fit scheduled around you.</em>
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
            Boat carpet, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>technical answers.</em>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/en/moquette-catamaran" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Catamaran carpet →</Link>
            <Link href="/en/moquette-yacht" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Yacht carpet →</Link>
            <Link href="/en/moquette-peniche" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Barge carpet →</Link>
            <Link href="/en/realisations/pose-moquette-sur-mesure-catamaran" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Catamaran case study →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            A boat to fit out? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Let&apos;s talk.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Dockside visits in the ports of La Rochelle, Île de Ré and Rochefort. A bespoke quote after a precise survey.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact" variant="primary" size="md">Request a quote</Button>
            <Button href="/en/showroom" variant="outline" size="md">Showroom visit</Button>
          </div>
          <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.6)' }}>
            Or <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.phone}</a> · <a href={`mailto:${company.email}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.email}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
