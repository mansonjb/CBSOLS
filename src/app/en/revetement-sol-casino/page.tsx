import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Casino Carpet & Floor Covering | CB Sols',
  description: 'CB Sols supports casinos and gaming venues with their floor coverings: bespoke carpet, intensive traffic, acoustics, public-building compliance and phased laying without closing the venue. La Rochelle and western France.',
  alternates: {
    canonical: 'https://cbsols.fr/en/revetement-sol-casino',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-casino', en: 'https://cbsols.fr/en/revetement-sol-casino' },
  },
  openGraph: {
    title: 'Casino Carpet & Floor Covering | CB Sols',
    description: 'Floor covering for casinos: bespoke carpet, traffic resistance, acoustic comfort, public-building fire rating and phased work without stopping trading. CB Sols, La Rochelle craftsman.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-casino.jpg', width: 1200, height: 630 }],
  },
}

const piliers = [
  { title: 'Bespoke design', desc: 'A casino floor is several hundred square metres that take a direct part in the identity of the place. Tufted or printed carpet, a motif drawn for the house, an integrated logo, zoning that separates the moods: we treat the floor as a piece of interior architecture, not as a consumable rolled out in a hurry.' },
  { title: 'Traffic resistance', desc: 'A gaming room runs non-stop, seven days a week, right through the night. Repeated passage, furniture being moved, queues treading the same spot. We select contract coverings built for this regime, where a consumer floor would already have given up within a year.' },
  { title: 'Acoustic comfort', desc: 'Machines, electronic games, conversations, music, bars, restaurant: a casino concentrates sound sources. The textile floor absorbs footstep and impact noise and clearly softens the sound of a busy room. It is one of the real reasons for carpet in a casino.' },
  { title: 'Continuity of trading', desc: 'Closing to redo a floor means lost revenue every night. We split the work into zones and fit the interventions to the quiet hours to limit the impact on your activity as far as possible. That is where we make the real difference.' },
]

const contraintes = [
  { title: 'Very intensive traffic', desc: 'Circulation zones and the surrounds of machines take years of tight passage. The covering must keep its look when the rest would have given up. We aim for the toughest usage ratings, matched to each zone.' },
  { title: 'Opening hours', desc: 'A venue open until 3 or 4 am leaves few windows to work in. The JOA in Châtelaillon-Plage, for example, opens 7 days a week from 9.30 am to 3 am, and until 4 am on Fridays, Saturdays and the eves of public holidays. The floor must be laid in these narrow slots.' },
  { title: 'Acoustics', desc: 'The textile floor cuts footstep and impact noise and contributes to the comfort of players, staff and catering spaces. Performance varies by reference: we choose the construction by the targeted sound, room by room.' },
  { title: 'Stains and upkeep', desc: 'Drinks, catering, continuous circulation: maintainability comes first. From the choice onwards we build in ease of cleaning, resistance and the ability to replace a localised zone without redoing the whole space.' },
  { title: 'A high-end image', desc: 'The floor is a major visual surface. It carries the mood, marks out the spaces, guides circulation, shows off the tables and machines. A strong identity is also built on the floor, not only on the walls.' },
  { title: 'Public-building regulation', desc: 'A casino is a public-access building. Reaction to fire, accessibility and regulatory constraints are studied by the use of each room. We build these requirements in from the recommendation, not as a catch-up before the safety commission.' },
]

const zones = [
  { zone: 'Slot-machine hall', produit: 'Contract carpet or tile covering', cle: 'Intensive traffic, acoustics, localised replacement' },
  { zone: 'Table-games room', produit: 'Sheet carpet, high-end textile', cle: 'Premium image, comfort, bespoke design' },
  { zone: 'Reception and entrance', produit: 'Bespoke entrance mat, resistant covering', cle: 'First impression, outdoor soiling, accessibility' },
  { zone: 'Restaurant', produit: 'Contract textile or vinyl by concept', cle: 'Stains, upkeep, acoustics, looks' },
  { zone: 'Bar', produit: 'Resilient vinyl covering', cle: 'Resistance to liquids, upkeep, safety' },
  { zone: 'Show room', produit: 'Fire-rated contract carpet', cle: 'Acoustics, public building, heavy traffic' },
  { zone: 'Corridors and circulation', produit: 'Tile covering or compact vinyl', cle: 'Very high resistance, tile replacement' },
  { zone: 'Back office and offices', produit: 'Acoustic carpet tiles', cle: 'Durability, maintenance, total cost' },
  { zone: 'Toilets', produit: 'Welded sheet vinyl, skirting cove', cle: 'Wet environment, frequent cleaning' },
  { zone: 'Staircases', produit: 'Contract covering with stair nosing', cle: 'Safety, resistance, regulatory requirements' },
]

const zonesDetail = [
  { title: 'Slot-machine hall', desc: 'The beating heart, and the floor that takes the most. Tight traffic, permanent noise, electronic equipment everywhere, spilled glasses. We lay contract carpet here, often in tiles: when a zone tires in front of a bank of machines, we replace only the tiles concerned, not the whole hall.' },
  { title: 'Table-games room', desc: 'Here, the premium image sets the rules. Comfort underfoot, hushed acoustics, careful design. Sheet carpet or high-end textile, a motif coordinated with the furniture, mastered joins for a seamless look around the tables.' },
  { title: 'Reception and entrance', desc: 'The first impression, and the line of defence against the sand and water from outside. A recessed bespoke entrance mat, a technical zone that traps the soiling, a covering resistant to traffic. All designed accessible, routes with no threshold step.' },
  { title: 'Restaurant and bar', desc: 'Two moods, two logics. In the restaurant, contract textile or vinyl by the concept, chosen to take stains and keep the acoustics. At the bar, priority to resilient coverings that resist liquids and clean fast, without being slippery.' },
  { title: 'Circulation and corridors', desc: 'The network that links everything, and that wears continuously. Very high resistance required. Tiles have real value here: a damaged zone is replaced locally, without immobilising a long corridor or redoing dozens of metres at once.' },
  { title: 'Back office and toilets', desc: 'The backstage. On the office side, acoustic tiles for the teams\' comfort and a mastered total cost. On the toilet side, welded sheet vinyl raised into a cove skirting, with no recess where dirt settles, built for frequent cleaning.' },
]

const dallesVsLes = {
  les: {
    title: 'Sheet carpet',
    quand: 'Favour it for graphic continuity',
    points: [
      'A homogeneous look, with no break in the motif',
      'Large compositions and complex motifs',
      'The premium look of table-games rooms',
      'Very advanced graphic personalisation',
    ],
  },
  dalles: {
    title: 'Tile covering',
    quand: 'Favour it for maintenance',
    points: [
      'Localised replacement of damaged zones',
      'Fast intervention, phased work',
      'Ideal in case of occasional stains',
      'Easy to keep a stock of spare tiles',
    ],
  },
}

const process = [
  { step: 'Visit and audit', desc: 'We come to see the floor alive: substrates, areas, flows, wear zones, technical constraints and above all the trading hours. That is where we understand the real job.' },
  { step: 'Recommendation', desc: 'To each zone its covering, chosen on traffic, fire rating, acoustics and design. We assemble the technical file alongside the quote.' },
  { step: 'Samples and design', desc: 'Approval of the textures, colours, motifs and any personalisation. The floor is decided on a sample, not on a catalogue photo.' },
  { step: 'Phasing plan', desc: 'A split into zones, an order of work, hours, downtime. The schedule is set with your teams before we touch the first square metre.' },
  { step: 'Substrate preparation', desc: 'Any removal, preparation, screed as needed, substrate treatment. A fine floor starts with a clean, sound substrate.' },
  { step: 'Laying', desc: 'Carried out by the CB Sols teams. Welded laying, setting-out, skirting raises, finishes. Each zone leaves clean and operational.' },
  { step: 'Handover', desc: 'Checks, finishes, the technical documents needed by the project. We hand you what you need to record the works and pass the inspections calmly.' },
  { step: 'Upkeep and maintenance', desc: 'Cleaning, maintenance, localised replacement, occasional intervention. We stay your point of contact over time, not only on laying day.' },
]

const cibles = [
  { nom: 'Venue management', detail: 'Casino director, venue manager: the contact who weighs the impact of a job on trading as much as the final look.' },
  { nom: 'Technical and works managers', detail: 'Technical, maintenance or works manager: the one who wants the concrete on fire, accessibility and phasing, not a sales pitch.' },
  { nom: 'Group property departments', detail: 'The property and works department of a multi-site group: a need for a reliable installer, able to hold a homogeneous brief from one venue to the next.' },
  { nom: 'Architects and project managers', detail: 'Architect, interior architect, project manager, general contractor: an installer who understands the drawing, respects the setting-out and delivers the expected technical file.' },
]

const preuves = [
  { nom: 'Hôtel La Baronnie', detail: 'A bespoke rug for a characterful hotel. The exact gesture of custom carpet: drawing, making in the workshop, a careful finish.' },
  { nom: 'Michelin-starred restaurant, La Rochelle', detail: 'The carpet of a gastronomic restaurant. A demand for a premium image, hushed acoustics and upkeep in a catering environment.' },
  { nom: 'Bistro de la Grande Terrasse', detail: 'Carpet laid in a high-traffic public-access venue. A constraint of traffic and of holding up over time.' },
  { nom: 'Golf de la Prée', detail: 'Carpets and floors of a sports club open to the public. Coordination of zones and moods on a single site.' },
]

const essentiel = [
  'CB Sols lays and renovates casino floors: slot-machine hall, table games, reception, restaurant, bar, circulation and back office.',
  'Carpet stays the hero product, but each zone gets the right covering: contract carpet, tiles, high-end textile, resilient vinyl or a bespoke rug.',
  'Bespoke carpet possible: a motif drawn for the house, an integrated logo, zoning and coordination with the furniture.',
  'Fire rating, accessibility and public-building constraints built in from the choice of covering, by the use of each room.',
  'Work organised by zones and in off-peak hours to limit the impact on the venue\'s trading as far as possible.',
  'A firm based in Villedoux near La Rochelle. Work in Charente-Maritime, Vendée, Nouvelle-Aquitaine and more widely across western France by project.',
]

const faq = [
  { q: 'Which carpet to choose for a casino?', a: 'There is no single casino carpet, but a covering matched to each zone. In the machine hall and circulation, we favour a very resistant contract carpet, often in tiles so we can replace locally. In the table games, we seek the premium image with sheet carpet or a high-end textile. The choice is made on traffic, the zone\'s fire rating, the targeted acoustics and the design. We decide after a site visit, not from a catalogue.' },
  { q: 'Why is carpet used in casinos?', a: 'For three concrete reasons. First acoustics: a casino concentrates machines, electronic games, conversations, music and catering, and the textile floor absorbs part of the footstep and impact noise. Then comfort and image: the carpet carries the mood, marks out the spaces and shows off the tables and machines. Finally personalisation: it lets you integrate a motif or a logo specific to the venue. Carpet is not a gratuitous aesthetic choice, it is a functional one.' },
  { q: 'Tiles or sheet carpet for a casino?', a: 'Both have their case, by the objective. Sheet carpet gives a homogeneous look, with no break in the motif, ideal for large graphic compositions and the premium look of table games. Tiles shine on maintenance: a damaged or stained zone is replaced locally, without redoing hundreds of square metres, which is precious in a trading venue. Often, we combine the two on a single site: sheets where design comes first, tiles where maintenance comes first.' },
  { q: 'Can a bespoke carpet be created for a casino?', a: 'Yes. Carpet lends itself to personalisation: a bespoke drawn motif, colours coordinated with the furniture, zoning that separates the moods, the repetition of a drawing over large areas. Some contract ranges offer dedicated personalisation solutions. We always approve the result on a sample before launching production, to avoid nasty surprises at laying.' },
  { q: 'Can the casino\'s logo be integrated into the carpet?', a: 'Yes, by the technique and range chosen, it is possible to integrate a logo or a brand motif into the carpet, in reception as in the rooms. It is a point to settle from the recommendation, because it drives the choice of product and the setting-out. We study the feasibility and the result before committing you.' },
  { q: 'How do you cut the noise in a slot-machine hall?', a: 'The textile floor is one of the levers. A contract carpet absorbs part of the footstep and impact noise and softens the sound of a room saturated with sources. For example, a reference such as the Balsan Top Design 1300 states an impact-sound insulation of 30 dB (ΔLw) and an airborne-sound absorption of 0.25 (αw). These values are specific to that reference: we choose the construction by the level of acoustic comfort sought.' },
  { q: 'Which covering to choose for a slot-machine hall?', a: 'A contract carpet built for intensive traffic, very often in tiles. Tiles let us replace a worn zone in front of a bank of machines without touching the rest of the hall, and manage stains locally. We also select the technical features useful to this environment, such as antistatic properties, by the venue\'s brief.' },
  { q: 'Which covering to choose for the table games?', a: 'Here, image and comfort come first. We steer towards sheet carpet or a high-end textile covering, with a bespoke motif possible and mastered joins around the tables. The hushed acoustics and the premium look count as much as the resistance, because it is a zone of high image value.' },
  { q: 'Which floor to choose for a casino\'s restaurant and bar?', a: 'It depends on the concept. In the restaurant, a contract textile or a vinyl by the mood, chosen to take stains, keep the acoustics and stay attractive. At the bar, we often favour a resilient covering that resists liquids, cleans fast and stays safe underfoot. The right choice is made by the concept of the place and its level of trading.' },
  { q: 'What fire rating to plan for a casino carpet?', a: 'There is no single answer valid everywhere. A casino is a public-access building, and the level of reaction to fire required depends on the zone, the configuration, the substrate and the use of the room, by the public-building safety regulation. A contract carpet such as the Balsan Top Design 1300 holds, for example, a Bfl-s1 rating. We study the applicable requirement project by project and select a product that meets it, rating report in hand.' },
  { q: 'Can a casino\'s carpet be changed without closing the venue?', a: 'That is the whole challenge, and our method is built for it. A casino opens on very long hours, sometimes until 3 or 4 am, and a full closure is costly. We split the work into zones and fit the interventions to the quiet slots, in rotation, to limit the impact as far as possible. We do not promise zero closure in every case, but we study the phasing that disrupts your trading the least.' },
  { q: 'Can the carpet be laid at night?', a: 'Yes. Removal, preparation and laying can be organised in off-peak hours and by zones, to keep the venue\'s activity going as much as possible. The night schedule is set with your teams upfront, zone by zone, so a surface is handed back clean and operational before reopening.' },
  { q: 'How do you maintain a casino carpet?', a: 'With an upkeep plan: periodic cleaning, fast treatment of stains, and localised replacement when a zone tires, especially if the floor is laid in tiles. Keeping a stock of spare tiles of the same batch lets us act fast with no colour difference. Regular upkeep clearly extends the covering\'s life.' },
  { q: 'What is the lifespan of a professional carpet in a casino?', a: 'There is no single honest figure to give. The lifespan depends on the zone\'s traffic, the covering\'s construction, its location, its upkeep and the ability to replace worn parts locally. A very busy corridor does not age like a table-games lounge. That is precisely why we reason by zone and keep maintenance in the loop, rather than stating a fixed interval.' },
]

export default function RevetementSolCasinoPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/revetement-sol-casino#service',
        name: 'Floor covering and carpet for casinos',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'Country', name: 'France' },
          { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
          { '@type': 'AdministrativeArea', name: 'Vendée' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Laying and renovation of carpet and floor covering for casinos and gaming venues',
        description: 'Floor covering for casinos: bespoke carpet, tiles, high-end textile and resilient vinyl for the machine hall, table games, reception, restaurant, bar and circulation. Intensive traffic, acoustics, public-building fire rating and phased laying without stopping trading.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Casino floor covering', item: 'https://cbsols.fr/en/revetement-sol-casino' },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'Renovating a casino floor without stopping trading',
        description: 'The CB Sols method for laying a casino floor covering in an occupied site, from survey to upkeep.',
        step: process.map((p, i) => ({ '@type': 'HowToStep', position: i + 1, name: p.step, text: p.desc })),
      },
      {
        '@type': 'WebPage',
        '@id': 'https://cbsols.fr/en/revetement-sol-casino#webpage',
        url: 'https://cbsols.fr/en/revetement-sol-casino',
        name: 'Floor covering and carpet for casinos',
        description: 'CB Sols service: bespoke carpet and floor covering for casinos, matched to intensive traffic, acoustics and public-building constraints, laid in phases without closing the venue.',
        dateModified: '2026-09-22',
        inLanguage: 'en',
        isPartOf: { '@id': 'https://cbsols.fr/#website' },
        about: { '@id': 'https://cbsols.fr/en/revetement-sol-casino#service' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Casino floor covering</span>
          </div>
          <div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              A casino floor{' '}
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>is not redone like any other.</em>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '900px' }}>
              A casino is not a single homogeneous surface. It is a machine hall that runs non-stop, table games that want premium, a reception that takes the sand from outside, a restaurant, a bar, circulation that never stops. Each space has its covering, chosen on traffic, acoustics, fire rating and image. Our real trade here is not to roll out a carpet: it is to redo your floors without closing the venue. Behind all that, over 28 years of laying and a workshop twenty minutes from La Rochelle.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/en/contact?from=revetement-sol-casino" variant="primary" size="md">Study your project</Button>
              <Button href="/en/showroom" variant="outline" size="md">See the showroom</Button>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Four requirements, at the same time</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Resistance, design, quiet, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>continuity of trading.</em>
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

      {/* Constraints */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>What a casino floor must take</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            The six constraints <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>of a casino floor.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {contraintes.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{i + 1}. {s.title}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones (cards) */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>One solution per space</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            We do not offer a casino carpet. <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>We study each zone.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '820px' }}>
            A casino splits into spaces that have neither the same use, nor the same traffic, nor the same image requirement. We select the covering matched to each, rather than imposing the same product everywhere.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {zonesDetail.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick-reference table */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Some leads by zone</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            As an example, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>what we might consider.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '820px' }}>
            Nothing fixed here: these are common leads, to give an idea. The real choice is set by your project, your constraints and your budget, after a site visit.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: '640px' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Zone</th>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Possible lead</th>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Key point</th>
                </tr>
              </thead>
              <tbody>
                {zones.map((r, i) => (
                  <tr key={i}>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--border)', fontWeight: 700, color: 'var(--dark)' }}>{r.zone}</td>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--dark)' }}>{r.produit}</td>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--muted)' }}>{r.cle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tiles vs sheets */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>The choice that always comes up</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Tiles or sheet carpet? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>It depends on the zone.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '820px' }}>
            Neither is better in absolute terms. The choice depends on the project, the substrate, the design sought, the use of the zone and your maintenance strategy. Often, we combine the two on a single site.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {[dallesVsLes.les, dallesVsLes.dalles].map((col, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.4rem', letterSpacing: '-0.02em' }}>{col.title}</h3>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>{col.quand}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {col.points.map((p, j) => (
                    <li key={j} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--terra)', fontWeight: 800, flexShrink: 0 }}>→</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2rem', padding: '1.25rem 1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-alt)', fontSize: '0.9rem', color: 'var(--dark)', lineHeight: 1.7 }}>
            <strong>The argument that counts:</strong> a damaged zone need not force the replacement of several hundred square metres. With well-chosen tiles, we replace what is damaged, and nothing more.
          </p>
        </div>
      </section>

      {/* CTA inline 1 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A renovation project in preparation?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            We travel out to see the floor and quote it.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '540px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Plans, photos and areas are enough for a first analysis. Valentin comes on site, looks at each zone, advises you on the right covering and the phasing, and hands you a precise quote, with no commitment.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=revetement-sol-casino" variant="primary" size="md">Study my project</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Upkeep / shampooing */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>We do not only lay</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            We maintain the floors too, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>not only on laying day.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            A casino carpet tires where the traffic is heaviest, and stains where people drink. Rather than wait for the replacement, we offer an upkeep service: shampooing, injection-extraction, stain removal, restoration of the zones that have marked. A maintained floor lasts far longer than one left to live with nothing done.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '1.5rem' }}>
            {[
              { t: 'Carpet shampooing', d: 'Deep cleaning of the fibres, by shampooing or injection-extraction, to revive the colour and remove what the vacuum does not take. As an occasional job or a regular pass.' },
              { t: 'Stain removal and restoration', d: 'Treatment of drink stains and the most marked zones, before they become ingrained. We often recover a zone we thought fit to replace.' },
              { t: 'Upkeep contract', d: 'A planned pass at the frequency that suits you, with priority on the high-traffic zones. The floor stays presentable all year, without thinking about it.' },
              { t: 'Localised replacement', d: 'When a tiled zone is truly worn, we replace just what is needed. By keeping a stock of the same batch, the shade stays matched.' },
            ].map((b, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra)', marginBottom: '0.6rem' }}>{b.t}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{b.d}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=revetement-sol-casino-entretien" variant="primary" size="md">Request an upkeep quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Bespoke */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>The floor as a signature</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', maxWidth: '900px' }}>
            Several hundred square metres <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>that carry the identity of the place.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem', maxWidth: '900px' }}>
            In a casino, the floor is one of the largest visual surfaces of the venue. It takes a direct part in the identity of the place. Carpet lends itself to real design work: a bespoke drawn motif, colours coordinated with the furniture, an integrated logo, zoning that separates the moods, the repetition of a drawing over large compositions.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, margin: 0, maxWidth: '900px' }}>
            We always approve the result on a sample before launching production. Some contract ranges offer dedicated personalisation solutions and list casino applications. It is the same gesture as our bespoke hotel rugs, transposed to the scale of a gaming room: the floor becomes a component of the interior architecture, not a neutral background.
          </p>
        </div>
      </section>

      {/* Dark: stays open */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra-on-dark)', marginBottom: '1.5rem' }}>The argument that changes everything</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.9rem, 3.4vw, 3rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', maxWidth: '960px' }}>
            Your casino stays open. <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>We work around you.</em>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(248, 245, 238, 0.78)', maxWidth: '900px', margin: '0 0 2.5rem', lineHeight: 1.8 }}>
            A casino opens on very long hours, sometimes until 3 or 4 am. Closing the venue entirely to redo the floors is a heavy economic and operational constraint. We do not ask that of you. We split the work into zones and fit the interventions to the quiet slots, in rotation, to limit the impact on trading as far as possible. Removal, preparation and laying can be organised in off-peak hours, zone by zone, to keep the activity going as much as possible. We do not promise zero closure in every case, but we build the phasing that disrupts your revenue the least.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { t: 'Work by zones', d: 'The job advances surface by surface, never all at once. A finished zone is handed back before we start the next.' },
              { t: 'Off-peak hours', d: 'Nights and quiet hours. Tell us when the room is calm, we fit the laying to that slot.' },
              { t: 'Coordination with your teams', d: 'The schedule is approved with you upfront, aligning with trading and the other contractors.' },
              { t: 'Fast return to service', d: 'Each finished zone leaves clean and operational, ready to reopen to the public.' },
            ].map((b, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid rgba(248, 245, 238, 0.15)', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra-on-dark)', marginBottom: '0.6rem' }}>{b.t}</div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.7)', lineHeight: 1.65, margin: 0 }}>{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fire / public building / accessibility */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Public building, fire, accessibility</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', maxWidth: '900px' }}>
            Regulation is studied, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>not recited.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem', maxWidth: '900px' }}>
            A casino is a public-access building. We avoid shortcuts of the kind &ldquo;a casino carpet must necessarily be Bfl-s1&rdquo;: it is too simplistic and false by space. The safety regulation sets different levels of reaction to fire by the nature of the venue, the zone, the configuration, the substrate and the use of the room. Fire rating, accessibility and public-building constraints are built in from the choice of covering, and we select the solutions by the use of the spaces and the technical requirements of the project.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, margin: 0, maxWidth: '900px' }}>
            On accessibility, we take care over the continuity of routes, the joins between materials, the absence of a threshold step, the entrance mats and the grip. Without a blanket promise of compliance without knowing the context: each project has its own study. The reference official texts are the safety regulation against fire and panic in public-access buildings.
          </p>
        </div>
      </section>

      {/* CTA inline 2 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A trading window to seize?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Give us the slot, we fit the laying to it.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Nights, days of lower footfall, room rotation: tell us when the venue breathes, we organise the work around you.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=revetement-sol-casino-mid" variant="primary" size="md">Talk about your project</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>From visit to upkeep</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Eight steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>fitted to your trading.</em>
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
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Who we talk to</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.03em' }}>
            A contact <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>who speaks your language.</em>
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

      {/* Proof */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>What we have already laid</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            We do not claim to have redone fifty casinos. <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>We already master their constraints.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '900px' }}>
            Hotels, starred restaurants, public-access venues, bespoke carpet, trading sites: these are exactly the technical constraints a casino shares. Here are a few projects where we have already met them.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {preuves.map((m, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.5rem' }}>{m.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{m.detail}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/en/realisations" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--terra)', textDecoration: 'none' }}>See all our projects →</Link>
          </div>
        </div>
      </section>

      {/* Coverage area */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our patch</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', maxWidth: '900px' }}>
            The Atlantic coast <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>and western France.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, margin: 0, maxWidth: '900px' }}>
            Based in Villedoux near La Rochelle, CB Sols supports venues in Charente-Maritime, Vendée, Nouvelle-Aquitaine and more widely across western France by project. The Atlantic coast counts many casinos, from Châtelaillon-Plage and Fouras to Royan, by way of Les Sables-d&apos;Olonne, Saint-Jean-de-Monts, Saint-Brevin, Pornic and La Baule. All venues for which a regional installer, responsive and versed in public-building constraints, changes the game against the big national generalists.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>The questions we are asked</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Casino floors, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>a craftsman&apos;s answers.</em>
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
            CB Sols works wherever the floor takes a beating and public-building standards apply: hotel, authority, airport, business-aircraft cabin. The same requirements, the same care for detail.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            <Link href="/en/revetement-sol-aeroport" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Airport floor covering →</Link>
            <Link href="/en/moquette-jet-prive" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Private-jet carpet →</Link>
            <Link href="/en/secteurs/hotellerie" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Hospitality →</Link>
            <Link href="/en/secteurs/collectivites" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Public sector →</Link>
            <Link href="/en/services/pose-moquette" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Carpet laying →</Link>
            <Link href="/en/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Villedoux showroom →</Link>
          </div>
        </div>
      </section>

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Planning a casino renovation? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Let us talk for real.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '680px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Plans, photos and areas already allow a first analysis. We study with you the coverings, the technical constraints and the phasing to limit the impact of the work on your trading. A site survey in Charente-Maritime, Vendée and Nouvelle-Aquitaine.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=revetement-sol-casino" variant="primary" size="md">Study my project</Button>
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
