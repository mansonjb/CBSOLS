import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Barge Carpet | Liveaboard & Commercial River Craft',
  description: "Carpet fitting for liveaboard barges and commercial river barges (restaurant, events) in Charente-Maritime. River damp, river public-venue fire rating, flat surfaces.",
  alternates: {
    canonical: 'https://cbsols.fr/en/moquette-peniche',
    languages: { 'fr-FR': 'https://cbsols.fr/moquette-peniche', 'en': 'https://cbsols.fr/en/moquette-peniche' },
  },
  openGraph: {
    title: 'Barge Carpet | La Rochelle, Charente',
    description: "Flooring for liveaboard and restaurant barges. Polypropylene, treated wool, marine PVC. Compliant with river public-venue fire ratings.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/moquette-peniche.jpg', width: 1200, height: 630 }],
  },
}

const zones = [
  { title: 'Saloon & main living space', desc: "The heart of a liveaboard barge: wide, open through, sometimes with a wood stove or an open kitchen. The surface is usually flat, the setting-out close to a flat fitting, but with an underlay suited to the damp of the bilge." },
  { title: 'Cabins & berths', desc: "Small surfaces, plenty of angles around the built-in berths. Acoustic comfort is the priority: a barge carries sound from one cabin to the next through the steel hull. A thick carpet, a closed-cell foam underlay." },
  { title: 'Bathroom & galley', desc: "Wet zones. Heat-welded marine PVC flooring, a watertight junction to the walls, no felt. On a barge, condensation is heavy around the waterline: no tolerance for seepage." },
  { title: 'Commercial barge (restaurant, events)', desc: "A special case: the river public-venue fire rating is mandatory, the public is received, use is intensive. Carpet rated Bfl-s1 minimum, a venue safety file to submit to the commission. We support you on the material documentation." },
]

const produits = [
  { name: 'River polypropylene carpet 1100 g/m²', desc: "The liveaboard-barge standard. Impervious to bilge damp, fast-drying after localised seepage, rated Bfl-s1. A wide colour range, a 10-15 year life in residential dockside use." },
  { name: 'Fire-treated virgin wool', desc: "For luxury liveaboard barges on calm water, heated and ventilated. A warm feel, graceful ageing. More sensitive to damp than polypropylene: best kept for truly controlled spaces." },
  { name: 'Heat-welded marine PVC flooring', desc: "Essential in the galley and bathroom. Seams welded at 200°C, full watertightness, hygiene. For a restaurant barge: also in the professional kitchen, with an R10-R11 non-slip rating where there is a wash-up area." },
]

const process = [
  { step: 'Dockside survey', desc: "A survey of every room, photographs, a moisture reading of the substrate (often marine plywood or board on joists). A diagnosis of any past seepage." },
  { step: 'Use case', desc: "A conversation about use: main residence at the quay, second home, short-term rental, commercial public-venue barge. The regulations change radically between these cases." },
  { step: 'Quote & documentation', desc: "Detailed quote within 48 hours. For river public venues, a material file (fire test certificates, data sheets) is supplied for the safety commission." },
  { step: 'Workshop fabrication', desc: "Cut in our Villedoux workshop from the template. On a barge, surfaces are more regular than on a boat: faster fabrication, but we keep the rigour of marine setting-out." },
  { step: 'Dockside fitting', desc: "Fitted at the quay, with a river-suited polyurethane adhesive and heat-welding for the PVC floors. As the barge is stable (no roll), we work in comfortable conditions close to a flat job." },
]

const faq = [
  { q: 'What is the difference between a liveaboard barge and a flat?', a: "Three main differences for the flooring. First, the ambient damp is higher (proximity to the water, condensation), even without salt. Second, the weight carried matters less than on a leisure boat (the barge is permanently at the quay): you can move up in weight and comfort. Third, the substrates are often less flat than a flat: local levelling is frequent, sometimes a full re-level." },
  { q: 'Does a residential barge need a specific fire rating?', a: "For a private residential barge at the quay, the regulations are less strict than for sea leisure (no IMO FTP). We still recommend Bfl-s1 as a safety measure: a fire on a barge is a real risk, and evacuation by a single gangway complicates everything. For a commercial barge (restaurant, function room, hotel), the river public-venue fire rating applies: Bfl-s1 minimum, with supporting documents to submit to the safety commission." },
  { q: 'Can you carpet the whole floor of a barge?', a: "No, and it is a common mistake. The galley and the bathroom must stay in welded marine PVC, watertight. The rest (saloon, cabins, companionways) can be carpeted. This split guarantees the longevity of the whole: carpet does not tolerate standing water, full stop." },
  { q: 'How do you manage bilge damp?', a: "Before any fitting, we check the substrate. If its moisture exceeds 4% (measured with a capacitive meter), we wait or install a vapour barrier. On an old steel barge, internal corrosion sometimes has to be treated before fitting: that is not our trade, but we coordinate with the marine joiner concerned." },
  { q: 'How long does fitting out a whole barge take?', a: "For a 25-30 metre liveaboard barge with 3-4 bedrooms, a saloon, a galley and a bathroom: reckon on 4 to 6 days in the workshop (fabrication) then 3 to 5 days on site. The timing depends heavily on the state of the substrate and on whether the old covering has to be lifted." },
  { q: 'Do you also do commercial barges (restaurant, events)?', a: "Yes. We have worked on restaurant and events barges. The logic changes: public venue, intensive use, safety files, a schedule set around the annual closure or the quiet periods. We supply all the material documentation for the river public-venue file." },
  { q: 'Do you work outside Charente-Maritime?', a: "For a barge, yes: we travel to the Charente, the Dordogne, Aquitaine and as far as the central canals for structured jobs. As a barge is a more predictable site than a boat at sea, the logistics are simpler. Quote on request with the travel costed." },
]

export default function MoquettePenichePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/moquette-peniche#service',
        name: 'Carpet fitting for liveaboard and commercial barges',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: ['La Rochelle', 'Charente-Maritime', 'Charente', 'Dordogne'],
        serviceType: 'River flooring for residential and public-venue barges',
        description: 'Design and fitting of polypropylene carpet, treated wool and marine PVC flooring for barges. River public-venue fire compliance for commercial use.',
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
          { '@type': 'ListItem', position: 3, name: 'Barge carpet', item: 'https://cbsols.fr/en/moquette-peniche' },
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
            <Link href="/en/moquette-bateau" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>Boat carpet</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Barge carpet</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Barge carpet,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>living aboard and on the river.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Liveaboard barge, restaurant barge or events barge: carpet and marine PVC floors suited to river damp and the public-venue fire rating. 28 years of craft experience, jobs across Charente-Maritime, the Charente and beyond on quotation.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=moquette-peniche" variant="primary" size="md">Request a quote</Button>
                <Button href="/en/moquette-bateau" variant="outline" size="md">See the boat carpet page</Button>
              </div>
            </div>
            {/* TODO: ajouter photo intérieur péniche */}
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>What makes a barge different</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &laquo; A barge is neither quite a boat nor quite a flat. It is a damp flat that floats. The floor has to bridge those two worlds. &raquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Zones */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Which part of the barge?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Four spaces, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>four logics.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {zones.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Habitation vs commerciale */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Residential or commercial?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Two uses, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>two regulatory frameworks.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Residential barge</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 1rem' }}>Like a flat, only damper</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                Private use, no public reception. A lighter fire framework, but we recommend Bfl-s1 as a precaution. Freedom of materials: polypropylene, treated wool, marine PVC by zone. Acoustic and thermal comfort are the priority. You can fit softer, warmer carpets than on a sea leisure boat, since there is no salt and no roll.
              </p>
            </div>
            <div style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Commercial public-venue barge</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 1rem' }}>Restaurant, function room, floating hotel</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                The river public-venue fire rating is mandatory: Bfl-s1 minimum, fire test certificates supplied to the safety commission. Intensive use: 1400 g/m² minimum weight, forgiving darker colours. Fitting to be scheduled around the annual closure or a quiet week. We support you on the material file for the venue documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA inline après comparatif habitation vs commerciale */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A project in mind?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Residential or public venue, we know both.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Liveaboard barge, restaurant barge, floating hotel: a dockside visit and a material file prepared for the safety commission.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?source=moquette-peniche" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Spécificités péniche */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>What sets a barge apart</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Three differences from <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>sea leisure boating.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>No salt, but plenty of fresh water</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>The river atmosphere is less corrosive than the marine one (no salt), but the damp is just as high. Marine polyurethane adhesives work perfectly, and certain high-end indoor polyurethane adhesives certified for damp resistance can also be used.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Flat surfaces, stable substrates</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>A fitted-out barge usually has flat surfaces (marine plywood on joists, sometimes a parquet floor). The setting-out is close to a flat job. The upside: faster fabrication, finer finishes possible. The watch-point: test the substrate&apos;s moisture before fitting.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>No roll, weight not a constraint</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>A barge at the quay on calm water does not roll. That allows thicker, more comfortable carpets, with a more generous underlay, unthinkable on a sea leisure boat for reasons of weight and behaviour. It is a real gain for the comfort of life aboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Produits */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materials we fit on barges</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Three materials, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>combined by zone.</em>
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
        </div>
      </section>

      {/* Réglementation ERP fluvial */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>River public-venue regulations</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Commercial barge: <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>the safety commission wants certificates.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            For a restaurant barge, function room or floating hotel, the river public-venue rating requires full material traceability. Here are the documents the safety commission will ask for, and that we supply in the fitting file.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Bfl-s1 fire test certificate</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>A fire test report issued by an accredited laboratory (Efectis, LNE) to EN 13501-1. A mandatory document for any floor covering in a public venue. Valid for 5 years, to be renewed at a refurbishment.</p>
            </div>
            <div style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Manufacturer data sheet</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Product reference, fibre composition, weight, fire rating, use rating (UPEC, ISO durability). It proves the match between the commercial use and the material fitted.</p>
            </div>
            <div style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Fitting certificate</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>A document signed by the fitter certifying that the material was installed in line with the manufacturer&apos;s specifications (adhesive, underlay, substrate preparation). The fire test certificate has no value without this attestation.</p>
            </div>
            <div style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Ten-year & public liability cover</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>A certificate of the fitting firm&apos;s ten-year (décennale) and professional liability insurance. CB Sols supplies these as standard with the quote for any commercial barge, with no special request.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Préparation du support spécifique péniche */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>River substrate preparation</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Bilge damp, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>the floor&apos;s first enemy.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Substrate diagnosis</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>On a fitted-out barge, the existing floor is usually an 18-22 mm marine plywood deck on wooden or metal joists, sometimes a solid parquet on floating panels. First step: a tap survey with a mallet to find the hollow zones (a lifted joist, waterlogged plywood). A hollow zone rebuilt now costs less than a floor that collapses 18 months after fitting.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Residual moisture reading</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>A capacitive meter over 8 to 15 points per room, tolerance threshold 4% on wood, 2.5% CM on cement screed. Above that: a dehumidifier 48 to 72h before fitting. On an old steel barge, the damp sometimes comes from internal rust in the bottom, calling for a further diagnosis with a marine joiner.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Levelling and screeding</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Barge substrates are rarely flat to within 2 mm. A fibre-reinforced self-levelling screed, 3 to 8 mm thick depending on the variation. On an old re-fitted barge, we sometimes build on a raised access-floor system to neutralise the undulations of the steel hull. On difficult substrates, this preparation represents 15 to 25% of the total job budget.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Vapour barrier on critical zones</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Above water tanks, bathrooms and machine compartments, we systematically install a 200-micron polyethylene vapour barrier before the underlay. Without it, the damp from the technical compartment rises by capillarity and destroys the carpet within 2-3 years.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Citation milieu CTA */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &laquo; A barge is rarely flat and always damp. A dockside visit is a must before any pricing: without it, you are quoting blind. &raquo;
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?source=moquette-peniche-inline" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Charente-Maritime, Charente, Dordogne</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from survey to handover.</em>
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
            Barge carpet, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>technical answers.</em>
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

      {/* Entretien péniche */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Long-term care</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            On a barge, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>damp isn&apos;t seen, it&apos;s anticipated.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Routine vacuuming and cleaning</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Vacuum twice a week on a full-time liveaboard barge. On a restaurant barge, vacuum daily after service with a professional HEPA-filtration vacuum for the reception and dining zones.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Annual hot-water extraction</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Hot-water extraction cleaning once a year on a liveaboard barge, twice a year on a restaurant barge. A neutral rinse-free product, forced drying with a fan to avoid any moisture taking hold in the underlay.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Antimicrobial treatment</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>On a barge moored on calm water over winter (Saintes, Marans, the central canals), a preventive antimicrobial spray treatment every 2 years. It guards against mould forming under the floor, a real risk on insufficiently ventilated wooden substrates.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Watching the wet junctions</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>An annual visual check of the carpet / welded marine PVC junctions in wet zones (bathroom, galley). A junction that lifts or a seam that whitens signals seepage. A local repair is possible if caught early, a full redo if left to run.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA après FAQ */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A barge to fit out?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Quote within 48h, venue file included if needed.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Residential, restaurant, events: a dockside visit in Charente-Maritime, the Charente and beyond on quotation.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?source=moquette-peniche-faq" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>See also</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/en/moquette-bateau" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Boat carpet (hub) →</Link>
            <Link href="/en/moquette-catamaran" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Catamaran carpet →</Link>
            <Link href="/en/moquette-yacht" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Yacht carpet →</Link>
            <Link href="/en/services/pose-moquette" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Carpet fitting →</Link>
            <Link href="/en/services/tapis-sur-mesure" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Bespoke rugs →</Link>
            <Link href="/en/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Villedoux showroom →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Your barge, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>made new again.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A dockside visit, a quote within 48h. Residential or commercial, with the river public-venue file supported.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=moquette-peniche" variant="primary" size="md">Request a quote</Button>
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
