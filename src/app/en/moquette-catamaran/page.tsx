import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Catamaran Carpet | Saloon, Cabins, Hulls La Rochelle',
  description: "Marine carpet fitting for catamarans in La Rochelle: Lagoon, Bali, Fountaine Pajot, Catana, Outremer. Bfl-s1 polypropylene, polyurethane adhesive, heat-welded seams.",
  alternates: {
    canonical: 'https://cbsols.fr/en/moquette-catamaran',
    languages: { 'fr-FR': 'https://cbsols.fr/moquette-catamaran', 'en': 'https://cbsols.fr/en/moquette-catamaran' },
  },
  openGraph: {
    title: 'Catamaran Carpet | La Rochelle',
    description: "Marine carpet specialist for catamarans: saloon, cabins, twin hulls. Workshop fabrication, dockside fitting at Port des Minimes or La Flotte.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/moquette-catamaran.jpg', width: 1200, height: 630 }],
  },
}

const zones = [
  { title: 'Main saloon', desc: "The central room of the catamaran, in full sun through the picture windows, crossed all day long. A 1100 g/m² polypropylene carpet rated Bfl-s1, set out to hug the central-beam valance and the stair runs down into each hull." },
  { title: "Owners' cabins (hulls)", desc: "Cabins usually set at the stern of each hull, damper than the saloon (close to the waterline, heightened condensation). A breathable carpet, a closed-cell foam underlay, never an absorbent felt." },
  { title: 'Guest cabins & forward berths', desc: "Compact spaces, plenty of angles, often beneath deck hatches. Template-cut, heat-welded seams, careful finishes at the thresholds." },
  { title: 'Companionways & steps', desc: "Heavily used circulation zones, sometimes wet (coming down from the cockpit). A carpet / welded marine PVC combination is possible for the immediate wet zones." },
]

const produits = [
  { name: 'Marine polypropylene carpet 1100 g/m²', desc: "The cruising-catamaran standard. Impervious to damp, fast-drying, fire-rated Bfl-s1. Sand, grey and anthracite shades: classics that stand up to the charter or family pace." },
  { name: 'Treated nylon polyamide carpet', desc: "For owners who want a softer feel in the saloon. Built-in flame-retardant treatment, improved UV resistance. Best kept for well-ventilated, air-conditioned craft." },
  { name: 'Welded marine PVC flooring for the galley', desc: "A galley exposed to water, splashes and heat. A closed-cell foam underlay, seams heat-welded at 200°C, full watertightness. MED-compliant for commercial charter use." },
]

const process = [
  { step: 'Dockside survey', desc: "A survey of both hulls + the saloon, systematic photographs, a moisture reading of the wood or composite substrate. Identification of the hard points: beam valance, technical runs, hatches." },
  { step: 'Template & selection', desc: "A precise template of each zone. In parallel, you choose the material in the Villedoux showroom or from samples sent to you." },
  { step: 'Detailed quote', desc: "A quote costed by zone (saloon, port cabin, starboard cabin, etc.). You decide whether to do it all or in stages." },
  { step: 'Workshop fabrication', desc: "Cut in the workshop from the template, pre-assembly, fit tests. The boat is not out of service during this phase (3 to 7 days depending on area)." },
  { step: 'Dockside fitting', desc: "1 to 3 days on the boat depending on area: Port des Minimes, La Pallice, La Flotte, Saint-Martin. Marine polyurethane adhesive, heat-welding, finishes, a clean handback." },
]

const refitSteps = [
  { n: '01', t: 'Dockside audit (D0)', d: "Inspection of the saloon, the four cabins and the companionways. Moisture reading of the composite substrate (capacitive meter, 4% threshold). Photos of every technical hatch, every valance, every bulkhead junction." },
  { n: '02', t: 'Template and setting-out (D0-D2)', d: "A kraft-paper template by zone, transferred onto the workshop plans. Setting-out the widths with the pile direction, the joins over the central beam and minimised offcuts all in mind." },
  { n: '03', t: 'Lifting the old covering (D3-D4)', d: "Removal of the old floor, scraping acrylic adhesive residue off the marine plywood or gel coat. A diagnosis of any seepage under the floor." },
  { n: '04', t: 'Substrate preparation (D4)', d: "Degreasing with isopropyl alcohol, light sanding, application of a polyester-compatible polyurethane primer. Drying 2 to 4 hours depending on temperature." },
  { n: '05', t: 'Workshop fabrication (D5-D10)', d: "Cutting the widths from the template, pre-assembly, dimensional check. Heat-welding the seams in the workshop on the large saloon pieces." },
  { n: '06', t: 'Dockside fitting (D11-D13)', d: "Gluing zone by zone, rolling with a heavy roller, refitting the inspection hatches. Heat-welding the remaining seams directly on the boat." },
  { n: '07', t: 'Finishes and thresholds (D13)', d: "Finishing joints at the bulkhead junctions, stainless-steel trims on the cabin thresholds, cleaning with a professional vacuum. No visible trace of adhesive." },
  { n: '08', t: 'Handover (D14)', d: "A visit with the owner or skipper. Handing over the material fire test certificates, a personalised care sheet, a 2-year fitting warranty. The boat is usable within 24h." },
]

const faq = [
  { q: 'Which catamaran models have you already fitted out?', a: "We work regularly on Lagoon (380, 42, 46, 50), Bali (4.2, 4.6, 5.4), Fountaine Pajot (Astrea, Saona, Elba), as well as Catana and Outremer for offshore cruising. Each model has its specifics: the Lagoon central beam is different from an open-plan Bali, and the setting-out changes completely." },
  { q: 'Does the old carpet have to be lifted before fitting?', a: "Yes, always. Lifting it lets us inspect the substrate, check there has been no seepage or mould, and treat it if needed. Fitting over old carpet is a shortcut you pay for 18 months later. We include the lift in the quote, with no overcharge." },
  { q: 'How long does fitting take on a Lagoon 42 or equivalent?', a: "For a 12-14 metre catamaran with saloon + 4 cabins + companionways, reckon on 5 to 7 days in the workshop (fabrication) then 2 to 3 days at the quay for fitting. The boat is usable from the evening of the last fitting day (polyurethane adhesive cures in 24h)." },
  { q: 'Is carpet compatible with intensive charter use?', a: "Yes, provided you move up in weight (1100 to 1400 g/m²) and choose a forgiving darker shade. For charter fleets in La Rochelle, we offer care cycles (hot-water extraction) every 2 years to protect the investment." },
  { q: 'What happens with a localised water leak?', a: "That is the advantage of polypropylene: it dries in 24-48h in the air with a fan, without distorting. If the zone is too far gone (stagnant water under the floor for weeks), we can replace only the width concerned. That is the whole point of setting out by zone." },
  { q: 'Do you also fit new catamarans straight from the yard?', a: "Yes. Several owners entrust us with the flooring of their new catamaran on delivery, to replace the original carpet (often fitted to meet a generic specification, not optimal for the use they will put it to)." },
  { q: 'Do you work outside the summer season?', a: "We prefer it, in fact. The high season (May-September) is difficult for owner-users. We do the majority of our catamaran jobs between October and April, alongside the lay-up or the annual technical stop." },
]

export default function MoquetteCatamaranPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/moquette-catamaran#service',
        name: 'Carpet fitting for catamarans',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: ['La Rochelle', 'Île de Ré', 'Port des Minimes', 'La Pallice', 'Charente-Maritime'],
        serviceType: 'Marine carpet for sail and power catamarans',
        description: 'Design, workshop fabrication and dockside fitting of marine carpet for catamarans: saloon, cabins, hulls. Compliant with Bfl-s1 and IMO FTP.',
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
          { '@type': 'ListItem', position: 3, name: 'Catamaran carpet', item: 'https://cbsols.fr/en/moquette-catamaran' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Catamaran carpet</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Catamaran carpet,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>two hulls, one standard.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Saloon, cabins, companionways: design and fitting for cruising, charter and private-owner catamarans. Lagoon, Bali, Fountaine Pajot, Catana, Outremer. 28 years of craft experience, fitting at Port des Minimes and in every Charente port.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=moquette-catamaran" variant="primary" size="md">Request a quote</Button>
                <Button href="/en/moquette-bateau" variant="outline" size="md">See the boat carpet page</Button>
              </div>
            </div>
            {/* TODO: ajouter photo carré catamaran */}
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>What a catamaran demands</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &laquo; On a catamaran, the damp doesn&apos;t come from the sea alone. It comes from the saloon, breathing for two hulls. That is why we never lay felt. &raquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Zones */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Which part of the catamaran?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Four zones, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>four treatments.</em>
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

      {/* Spécificités catamaran */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Why a catamaran needs a dedicated approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Three particulars you won&apos;t find on <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>a monohull.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>The exposed central saloon</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>The saloon of a modern catamaran (Lagoon 42, Bali 4.6, Saona 47) is a large, almost panoramic glazed lounge. The floor there takes full sun 6 to 10 hours a day. Poorly treated wool fibres lose their colour within two seasons. Solution-dyed, UV-stable polypropylene is the baseline.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Ventilation between the hulls</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>The central saloon is thermally insulated, but the hulls stay cooler: air circulates constantly and brings condensation. Under a badly laid carpet (absorbent felt), water stagnates between substrate and fibre. You find the mould when you lift it. The answer: a closed-cell foam and an adhesive that &laquo; breathes &raquo; without letting water through.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>The central-beam valance</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>On most production catamarans, the saloon has a transverse beam dressed with a valance: it is the technical crossing between the two hulls. The setting-out has to hug it without stretching the fibre. A common mistake: a single width hacked to fit, which lifts after a year. The answer: two or three widths, a heat-welded seam, a coved overlap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA inline après spécificités */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A project in mind?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Let&apos;s talk it through directly.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Every catamaran has its constraints. Valentin Prévoteau comes to Port des Minimes or La Flotte to take the measurements.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?source=moquette-catamaran" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Marques de catamaran */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Catamarans we fit out</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            A fine knowledge of <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>deck plans.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {['Lagoon', 'Bali Catamarans', 'Fountaine Pajot', 'Catana', 'Outremer', 'Nautitech'].map((m) => (
              <div key={m} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)' }}>{m}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.4rem' }}>Cruising, charter, private owners</div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px' }}>
            Most of the charter fleet in La Rochelle is made up of Lagoon and Bali. We know the saloon layouts, the positions of the technical hatches, the cable runs under the companionways. On an Outremer or a Catana built for long-distance cruising, the demand for weight and performance changes things: we move to lighter weights and favour very pale shades to limit heat build-up.
          </p>
        </div>
      </section>

      {/* Produits */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materials we fit on catamarans</div>
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

      {/* Citation milieu CTA */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &laquo; On a Lagoon 42 or a Bali 4.6, I can guess the setting-out before I even step aboard. But I always confirm it on site. Nothing replaces a dockside visit. &raquo;
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?source=moquette-catamaran-inline" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            From dockside survey <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>to handback.</em>
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

      {/* Étude de cas : refit catamaran 45' */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Job type: full refit, 45-foot catamaran</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Eight steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>fourteen days end to end.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            For a Lagoon 45 or equivalent (22 m² saloon + four 8 to 10 m² cabins + companionways), here is the typical run of a full refit. The duration varies with the state of the substrate, the lifting to be done and the material chosen. Total area treated: around 75 to 90 m².
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {refitSteps.map((s) => (
              <div key={s.n} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{s.n}. {s.t}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Préparation du support */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Substrate preparation</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            On a catamaran, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>it&apos;s all decided before the glue.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Gel coat and marine plywood</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>The floor of a modern catamaran combines two substrates: polyester gel coat in the saloon zones and multi-ply marine plywood in the cabins. Each calls for a different preparation. On gel coat: a gentle sanding with 180-grit abrasive, degreasing with isopropyl alcohol to neutralise the mould-release wax residue. On plywood: a moisture check (4% threshold), treating a damp zone with a dehumidifier 24h before fitting if needed.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Polyester bonding primer</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>A polyurethane adhesive does not bond directly to a polished gel coat. We apply a specific polyester primer (usually modified-epoxy based) with a roller, in two crossed passes. Drying time between passes: 2 hours at 20°C. Wait before gluing: 4 to 6 hours. This step, often skipped by non-specialist fitters, is the number-one cause of lifting at 18 months.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Inspection hatches and technical runs</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Every catamaran has its hatches: access to bilges, batteries, seacocks, watermakers. We systematically remove them before fitting, set the covering out over them, then re-cut cleanly with a knife on site with a finishing joint. A hatch re-framed with a bespoke stainless trim becomes invisible. It is the hallmark of a carefully done job.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Expansion gaps and curves</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>In the zones where the deck heats in the sun (starboard saloon, in front of the picture windows), we leave a 2 to 3 mm expansion gap around the edge, masked by the skirting or the wall finish. For complex curves (companionway entry, manifold), we fabricate in several widths with a coved heat-welded seam, more discreet than a single stretched width that always ends up showing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Entretien et durée de vie */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Long-term care</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Ten years of carpet <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>also means the right care.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Weekly vacuuming</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>A rotating-brush vacuum, HEPA filtration. On a catamaran in use, salt crystallises in the fibres after every sail: without regular vacuuming, it abrades the fibre by friction underfoot. One thorough vacuum per week of use is enough to double the effective life of the covering.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Annual deep clean</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Once a year, at the start or end of the season, a hot-water extraction clean with a neutral rinse-free product. On marine polypropylene, the technique is safe (the fibre does not take up water). On treated wool, prefer a dry shampoo that does not alter the flame-retardant treatment. Dry at full ventilation for 24 to 48h.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Lay-up and anti-mould</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>For a catamaran laid up closed (October-March), an antimicrobial spray treatment and opening the cabin hatches for forced ventilation with a dehumidifier. Laying removable absorbent mats in front of the interior companionways: they catch the rainwater that comes in through the sprayhood and protect the saloon carpet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Frequently asked questions</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Catamaran carpet, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>precise answers.</em>
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

      {/* CTA après FAQ */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A catamaran to fit out?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Quote within 48h of the dockside visit.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Model, home port, state of the current floor: three pieces of information are enough to set up a visit.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?source=moquette-catamaran-faq" variant="primary" size="md">Request a quote</Button>
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
            <Link href="/en/moquette-yacht" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Yacht carpet →</Link>
            <Link href="/en/moquette-peniche" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Barge carpet →</Link>
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
            Your catamaran <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>deserves better.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A free dockside visit. Port des Minimes, La Pallice, La Flotte, Saint-Martin-de-Ré.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=moquette-catamaran" variant="primary" size="md">Request a quote</Button>
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
