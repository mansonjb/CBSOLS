import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Yacht & Luxury Sailboat Carpet | La Rochelle',
  description: "Bespoke carpet and rugs fitted in motor yachts and luxury sailboats: Sunseeker, Princess, Beneteau, Jeanneau. Fire-treated wool, premium finishes, engine vibration control.",
  alternates: {
    canonical: 'https://cbsols.fr/en/moquette-yacht',
    languages: { 'fr-FR': 'https://cbsols.fr/moquette-yacht', 'en': 'https://cbsols.fr/en/moquette-yacht' },
  },
  openGraph: {
    title: 'Yacht Carpet | La Rochelle',
    description: "Flooring for motor yachts and luxury sailboats: saloon, owner's cabin, companionway. Fire-treated wool, bespoke rugs, joinery integration.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/moquette-yacht.jpg', width: 1200, height: 630 }],
  },
}

const zones = [
  { title: 'Main saloon', desc: "This is the showpiece, with its leathers and fine joinery. We fit a fire-treated virgin wool, or a high-end polyamide. The colour is matched to the timber already in place. The finish is soft, the feel carefully judged." },
  { title: "Owner's cabin", desc: "The detail that sets a fine yacht apart. A thick 1200-1600 g/m² carpet with a bespoke rug at the foot of the bed, integrated into the wardrobes and bedside units. Acoustic comfort is the priority." },
  { title: 'Companionways & landings', desc: "Transit zones exposed to engine vibration. A thin closed-cell foam underlay, an elastic polyurethane adhesive, invisible seams. The carpet has to absorb movement without rippling." },
  { title: "Chart room & captain's desk", desc: "A technical space held to an aesthetic standard. A restrained carpet combined with a bespoke rug, integrated with the navigation equipment." },
]

const produits = [
  { name: 'Fire-treated virgin wool', desc: "The benchmark for yacht interiors. A natural fibre with the flame-retardant treatment built into the core (not the surface), rated M1 and Bfl-s1. A premium feel, graceful ageing, a wide colour palette. Best kept for ventilated, air-conditioned spaces." },
  { name: 'Premium polypropylene 1400 g/m²', desc: "For charter yachts or craft exposed to damp (offshore cruising sailboats). Impervious to water, UV-resistant, with the same visual rendering as wool in darker shades." },
  { name: 'Bespoke marine rugs', desc: "To dress a saloon, mark out a zone (in front of a sofa, at the foot of a bed) or add a couture detail. Made in our Villedoux workshop, hand-stitched borders, non-slip backing suited to a boat." },
]

const process = [
  { step: 'Dockside survey', desc: "Precise measurements, photographs of the existing joinery and finishes for colour matching, a moisture reading, identification of the technical runs (engine bilge, machine room)." },
  { step: 'Interior coordination', desc: "Selection in the showroom, with your interior designer or decorator where relevant. Sample tests under the boat's own lighting. Fire rating confirmed according to private or commercial charter use." },
  { step: 'Quote & confidentiality', desc: "Detailed quote within 48 hours. Every yacht job we take on is covered by discretion: no communication without the owner's written consent." },
  { step: 'Workshop fabrication', desc: "Template-cut in our Villedoux workshop. Bespoke rugs made in parallel. Fit tests before transport." },
  { step: 'Dockside or dry-dock fitting', desc: "Final fit: Port des Minimes, La Pallice, or in dry dock for major refits. Marine polyurethane adhesive, heat-welded seams, finishes at the thresholds, a full clean on handover." },
]

const faq = [
  { q: 'Which yacht makes have you fitted out?', a: "Without naming owners, we have worked on Sunseeker, Princess and Azimut motor yachts, and on Beneteau Oceanis, Jeanneau Sun Odyssey and Hanse high-end cruising sailboats. The method changes with the type, and so does the setting-out: a Sunseeker 60 has nothing in common with an Oceanis 51." },
  { q: 'Is wool really suited to a boat?', a: "Yes, on two conditions. First, the boat must be permanently air-conditioned and ventilated (a motor yacht, or a large cruising sailboat with controlled ventilation). Second, the flame-retardant treatment has to be in the core of the fibre, not on the surface, otherwise it wears off within two years. Wool brings a feel and a richness no synthetic fibre has yet matched. But on a damp racer-cruiser, we switch to premium polypropylene." },
  { q: 'How do you manage coordination with the other trades?', a: "A yacht refit often involves a cabinetmaker, an upholsterer, a painter and an electrician. We schedule our work last or next to last, so another trade doesn't set its toolboxes down on the new carpet. We work on shared sites on good terms with the craftsmen familiar with the La Rochelle marine sector." },
  { q: 'Do you also make the bespoke saloon rugs?', a: "Yes, and often: carpet plus a bespoke rug form a single ensemble. The rug is made in our Villedoux workshop to your exact dimensions, with hand-stitched borders and a marine non-slip backing. On request we can also add a discreet monogram of the boat's name or the owner's initials." },
  { q: 'How long does it last on a yacht?', a: "On a well-maintained seasonal private yacht, expect 8 to 12 years for a treated wool carpet. On a yacht in permanent use (lived aboard), 5 to 7 years. Bespoke rugs are replaced more often (3 to 6 years), as they are the zones of visible wear." },
  { q: 'Do you work in complete confidentiality?', a: "Yes, by default. No photo published without consent, no name disclosed, no mention in our communications. It is an obvious requirement in this segment, and we have respected it strictly for more than 28 years." },
  { q: 'What is a rough cost for a full floor refit on a 50-foot yacht?', a: "Impossible to price without a visit. The spread runs from 1 to 5 depending on the material chosen (polypropylene vs premium wool), the complexity of the curves, lifting the old covering, and integration with the joinery. As an order of magnitude, a full floor refit on a 50-foot yacht in treated wool plus bespoke rugs generally falls between €12,000 and €35,000 incl. VAT." },
]

export default function MoquetteYachtPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/moquette-yacht#service',
        name: 'Bespoke carpet and rug fitting for yachts and luxury sailboats',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: ['La Rochelle', 'Île de Ré', 'Port des Minimes', 'La Pallice', 'Charente-Maritime'],
        serviceType: 'Premium marine flooring for motor yachts and luxury sailboats',
        description: 'Design, workshop fabrication and discreet fitting of fire-treated wool carpet and bespoke rugs for yachts. Compliant with Bfl-s1, M1 and IMO FTP.',
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
          { '@type': 'ListItem', position: 3, name: 'Yacht carpet', item: 'https://cbsols.fr/en/moquette-yacht' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Yacht carpet</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Yacht carpet,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>a premium floor, held to standard.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Saloon, owner&apos;s cabin, companionways: fire-treated wool carpet and bespoke rugs for motor yachts and luxury sailboats. Sunseeker, Princess, Beneteau Oceanis, Jeanneau. Complete confidentiality, finishes integrated with the joinery.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=moquette-yacht" variant="primary" size="md">Request a quote</Button>
                <Button href="/en/moquette-bateau" variant="outline" size="md">See the boat carpet page</Button>
              </div>
            </div>
            {/* TODO: ajouter photo salon yacht */}
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>The yacht standard</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &laquo; A yacht shows in its details. The floor is one of them. A flawless stitch, a true setting-out: that is what signs off a high-end finish. &raquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Zones */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Which part of the yacht?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Four spaces, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>four levels of exacting work.</em>
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

      {/* Spécificités yacht */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>What sets a yacht apart</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Three demands you won&apos;t find <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>in standard leisure boating.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Curved surfaces & a full hull</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>On a motor yacht (Sunseeker, Princess, Azimut), the hull is not flat: the living spaces follow gentle curves. Setting out in straight widths is impossible. We template-cut on board, fabricate to the millimetre in the workshop, and keep the seams invisible. On a luxury sailboat it is harder still: the chines call for work entirely by hand.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Engine vibration & noise</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>On a motor yacht, the zones above the machine bilge vibrate. A carpet laid over a rigid underlay ends up rippling. The answer: an elastic closed-cell foam and a two-part polyurethane adhesive that absorbs the movement. The carpet also does real acoustic work: 5 to 8 dB less, depending on the weight.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Integrated finishes</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>A high-end yacht combines precious wood (teak, mahogany), leather, polished metal and marquetry. The flooring has to blend in without a break: bespoke thresholds, hand-stitched finishes, colours coordinated with the timber. Never a standard aluminium trim. We work with the ship&apos;s cabinetmaker or the interior designer where there is one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA inline après spécificités */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A project in mind?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Guaranteed discretion, a costed quote.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            A confidential dockside visit, a direct conversation with the captain or the interior designer. No communication without written consent.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?source=moquette-yacht" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Marques yacht */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Yachts we fit out</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Power or sail, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>the same finishing standard.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              { m: 'Sunseeker', s: 'Motor yachts 50-100 feet' },
              { m: 'Princess', s: 'Motor cruising yachts' },
              { m: 'Azimut', s: 'Italian motor yachts' },
              { m: 'Beneteau Oceanis', s: 'Premium cruising sailboats' },
              { m: 'Jeanneau Sun Odyssey', s: 'High-end sailboats' },
              { m: 'Hanse', s: 'German sailboats' },
            ].map((m) => (
              <div key={m.m} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)' }}>{m.m}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.4rem' }}>{m.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produits */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materials we fit on yachts</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Three families of material, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>one shared standard.</em>
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

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>discretion included.</em>
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

      {/* Calepinage et confection */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Setting-out and workshop fabrication</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            The dockside fitting lasts only three days. <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>Everything is prepared beforehand.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Template measuring</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>On a yacht with a full hull, measuring with a tape is useless: every bulkhead curves, every threshold follows the line of the deck. We work from a heavy kraft-paper template, laid down and then traced by hand with a marine marker, reference by reference. On recent yachts (Sunseeker, Princess) a laser template backs up the manual one for the large saloon areas. Target precision: 1 to 2 mm.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Fabrication in our Villedoux workshop</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Every template is transferred onto the rolls in the workshop. Cut with a circular blade or a knife depending on the angles. A dry pre-assembly lets us test the fit on the workshop floor before transport. On a full 50-foot refit, 4 to 7 days in the workshop for a final fit of 2-3 days aboard. That is what keeps a tight schedule when the owner only frees the boat for a single week.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Offcuts and pattern matching</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>On a patterned virgin wool (figured Wilton, custom Axminster), managing the offcuts changes the bill: a strict pattern match can force 15 to 25% extra waste. Rigorous setting-out keeps losses down. On a custom wool ordered to final size, no offcut is possible: every measuring error means restarting an order with a 6 to 12 week factory lead time.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Matching bespoke rugs</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>For the main saloons, a bespoke rug cut from the same fibre as the surrounding carpet, with a hand-stitched border (cotton braid or leather) and a boat-suited non-slip backing. A discreet monogram or the boat&apos;s crest can be worked into the tufting. Fabrication 3 to 5 weeks depending on dimensions and border complexity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quatre exigences spécifiques au yacht */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach to premium bespoke work</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Four demands <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>specific to a yacht.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Working within the constraints of the high end calls for the right toolbox. Here is what makes fitting a yacht distinctive, and how we handle it on every job.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Marine polyurethane adhesives</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>We work exclusively with two-part PU adhesives certified for marine use, formulated to stay elastic in a saline environment and under temperature swings. Their material cost is 4 to 6 times that of an indoor acrylic adhesive, but it is the condition for a fit that holds for 10 years aboard.</p>
            </div>
            <div style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Suitable underlays</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>On a yacht, the underlay matters as much as the carpet. We use marine-specific closed-cell foams, which do not store condensation against the substrate. The covering breathes, the wood stays dry, the whole assembly stays sound over time.</p>
            </div>
            <div style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Fire rating and traceability</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>We fit materials whose fire test certificates are supplied on request: Bfl-s1 for private leisure use, IMO FTP part 5 for commercial charter. This material traceability is expected by insurers such as Pantaenius or Generali Yacht, and we document it on every job.</p>
            </div>
            <div style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Setting out the curves</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>On a yacht, straight floors do not exist. Our method rests on the kraft-paper template, the millimetre-accurate workshop cut and the coved seam weld. These skills demand the habit of contract and marine workshops, and that is what CB Sols has practised for more than 28 years.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Délais et planification */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Timing and planning</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            From first call to handover, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>reckon on 6 to 14 weeks.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              { etape: 'Quote', delai: '5 days', detail: 'Dockside visit within a week of contact. Costed quote 48h after the visit, material confirmed in the showroom.' },
              { etape: 'Material order', delai: '1-2 weeks', detail: 'Polypropylene in supplier stock; custom wool or Axminster on order, 6-12 weeks depending on the factory.' },
              { etape: 'Workshop fabrication', delai: '3-8 weeks', detail: 'According to area and complexity. A full 50-foot yacht refit = 5-7 weeks in the workshop, alongside the bespoke rug order.' },
              { etape: 'Dockside fitting', delai: '2-5 days', detail: 'According to area. Scheduled around the boat’s availability, ideally off-season (October-April) with the boat ashore.' },
            ].map((p) => (
              <div key={p.etape} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{p.etape}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '0.6rem' }}>{p.delai}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{p.detail}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px' }}>
            Ideal window: October to April, boat laid up ashore or in dry dock. Easier access, no seasonal pressure, and the chance to coordinate with the cabinetmaker, upholsterer and painter on a single shared site.
          </p>
        </div>
      </section>

      {/* Citation milieu CTA */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &laquo; A yacht can&apos;t be priced over the phone. You have to come aboard, feel the atmosphere, read the joinery. The quote only comes after that. &raquo;
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?source=moquette-yacht-inline" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Complete confidentiality by default</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Frequently asked questions</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Yacht carpet, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>honest answers.</em>
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A refit under consideration?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            A confidential conversation, no commitment.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            A 20-minute conversation is enough to clarify the material options, a realistic schedule and a budget order of magnitude.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?source=moquette-yacht-faq" variant="primary" size="md">Request a quote</Button>
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
            <Link href="/en/sols-monaco" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Flooring in Monaco (Port Hercule) →</Link>
            <Link href="/en/moquette-catamaran" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Catamaran carpet →</Link>
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
            Your yacht <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>in expert hands.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A confidential dockside visit. A detailed quote, premium finishes, guaranteed discretion.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=moquette-yacht" variant="primary" size="md">Request a quote</Button>
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
