import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Airport & Terminal Floor Covering | Heavy Traffic, Public-Building Standards',
  description: 'Laying and renovation of floors for airports and terminals: hall, boarding, lounges, offices. Vinyl and carpet rated Cfl-s1, accessibility, non-slip. Work in an occupied site, night work. CB Sols, La Rochelle.',
  alternates: {
    canonical: 'https://cbsols.fr/en/revetement-sol-aeroport',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-aeroport', en: 'https://cbsols.fr/en/revetement-sol-aeroport' },
  },
  openGraph: {
    title: 'Airport & Terminal Floor Covering | Heavy Traffic, Public-Building Standards',
    description: 'Technical floors for terminals: fire-rated Cfl-s1, tactile accessibility, non-slip, class-34 traffic. Phased laying without closing the terminal. CB Sols, La Rochelle craftsman.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-aeroport.jpg', width: 1200, height: 630 }],
  },
}

const zones = [
  { title: 'Departure and arrival hall', desc: 'The compulsory crossing point. Wet soles, suitcase wheels, baggage trolleys: it streams past from the first flight to the last. A floor that scratches here shows from afar. We roll out compact vinyl or LVT in class 34, heat-welded so no seam opens, and that washes with a single pass of a scrubber-drier.' },
  { title: 'Boarding and waiting lounge', desc: 'People wait here, seated, standing, sometimes an hour. What they hear counts as much as what they see. Carpet tiles that break the echo and warm the room. And if the floor tires in front of the seats, we change the tiles concerned, not the whole room.' },
  { title: 'Check-in desks', desc: 'A snaking queue, scales, loaded trolleys turning in the same spot all day. Localised but brutal wear. Anti-indent covering under the load zones, floor contrasts to channel the flow, thresholds treated so nothing catches.' },
  { title: 'VIP lounge and business aviation', desc: 'The place where the airport pampers its best passengers. We leave the purely technical for the material: wool carpet, bespoke rugs hand-sewn at the workshop, a seamless setting-out. Exactly the gesture we already master on private-jet cabins.' },
  { title: 'Operator offices and admin', desc: 'Behind the desks, whole floors: operator, airlines, security. Open plan means noise. Acoustic carpet tiles, laid one floor at a time, at night, without ever cutting the teams\' work.' },
  { title: 'Circulation, toilets and airlocks', desc: 'The backstage, where hygiene really plays out. Welded sheet vinyl raised into a cove skirting, with no recess where dirt settles. At the doors, a recessed entrance mat stops the water and sand before they get into the terminal.' },
]

const specs = [
  { title: 'Reaction to fire', desc: 'Cfl-s1. It is the rating a public building of this size demands, and the first line the safety commission reads. We arrive with the rating reports and the lot traceability. Not with promises.' },
  { title: 'Accessibility', desc: 'An airport must be crossed almost with the eyes closed. Tactile warning strips at the sensitive points, visual contrast of the routes, thresholds with no step. The floor guides just as the signage does.' },
  { title: 'Slip resistance', desc: 'Water comes in through the doors, pools at the airlocks, near the toilets. A slippery floor there, on this volume of people, means a fall for sure. We put the right slip rating where it is needed, without turning the rest into sandpaper.' },
  { title: 'Intensive traffic', desc: 'We are not talking about a lounge that sees twenty people a day. A terminal is tens of thousands of passages. So class 33 or 34, the toughest use on the scale, the one that keeps its look when all the rest would already have given up.' },
  { title: 'Acoustics', desc: 'A terminal is already a permanent hubbub. No need to add to it with a hard floor that throws everything back. Carpet and underlays swallow the impact noise in the waiting rooms, the lounges and the offices. Decibels gained without thinking about it.' },
  { title: 'Hygiene', desc: 'An airport floor is cleaned at night, fast, every day. So no open seam, no dead corner: heat-welded sheets, cove skirting, surfaces that make the scrubber-drier effective from the first pass.' },
]

const produits = [
  { name: 'Compact vinyl and high-density LVT', desc: 'The workhorse of the zones that take everything: hall, circulation, desks. A thick wear layer, Cfl-s1 fire, class-34 traffic, welded laying for a one-piece surface. Wood, concrete or stone décors: it resists like a technical floor and looks like a fine floor.' },
  { name: 'Contract carpet tiles', desc: 'For everything that must be comfortable and quiet: boarding, lounges, offices. The advantage of the tile is repair. A zone wears in front of the seats? We replace twenty tiles in one night, and the next day nobody sees the difference.' },
  { name: 'Wool carpet and bespoke rugs', desc: 'The centrepiece of VIP lounges. True wool, a dense feel, rugs cut to the millimetre at the Villedoux workshop, hand-sewn hems. The same gesture as on a business-aircraft cabin rug, transposed to the terminal floor.' },
  { name: 'Large entrance mats', desc: 'The first line of defence, recessed at the entrances. It catches the water, the sand and the grit before they scratch all the rest. Well sized, it makes each of the floors laid behind it last.' },
]

const process = [
  { step: 'Survey in operation', desc: 'We come to see the floor alive, in full operation. A survey zone by zone, a conversation with the technical manager, a check of the access and the slots really available. That is where we understand the real job, not on a plan.' },
  { step: 'Products and standards study', desc: 'To each zone its covering, chosen on traffic, the Cfl-s1 fire rating, the slip resistance and accessibility. We assemble the technical file and the rating reports alongside the quote, never after the fact.' },
  { step: 'Phasing and schedule', desc: 'The crux. We split the work into zones small enough never to block a flow, and we fit the interventions to the nights and quiet hours. The schedule is approved with the operator before we touch the first square metre.' },
  { step: 'Security coordination', desc: 'Restricted zone, strict rules. Badges, clearances, an escort if needed, control of the equipment that comes in. We prepare all that upfront and align with the other trades already present. Security is not negotiated, we comply.' },
  { step: 'Laying by zones', desc: 'Removal, screed, welded laying, finishes, cleaning. Each zone leaves clean and operational before opening, the works protected so the following lots do not damage them. In the morning, it is simple: we never existed.' },
  { step: 'Handover and file', desc: 'We hand you the complete file: fire-rating reports, technical sheets, lot numbers. Enough to pass the safety commission without searching for a paper, and keep a clean traceability for the future.' },
]

const clients = [
  { nom: 'Regional airports', detail: 'Our core target. Human-scale terminals we renovate in tranches, without ever closing everything. The exact format where our phasing method makes the difference.' },
  { nom: 'Business aviation and FBOs', detail: 'Private terminals, reception lounges, hangars. The level of demand of a client who travels by jet, which we already know from our work on cabins.' },
  { nom: 'Flying clubs and aerodromes', detail: 'Clubhouse, briefing room, reception. Short jobs, a single contact, a responsiveness the big giants cannot offer.' },
  { nom: 'VIP lounges', detail: 'Airline lounges, loyalty-card spaces. Here, it is the material and the quiet that speak: wool, bespoke rugs, invisible joins.' },
  { nom: 'Terminal retail zones', detail: 'Shops, catering, services, landside as airside. Floors that take the traffic without breaking the mood, laid at the hours that suit the operator.' },
  { nom: 'Operator offices and premises', detail: 'Admin floors, security, back office. Acoustic tiles laid floor by floor, at night, so nobody loses a working day.' },
]

const aeroports = [
  { nom: 'La Rochelle Île de Ré', detail: 'Our local airport, twenty minutes from the Villedoux workshop. Flights to London, Lyon or Porto, with a footfall peak in summer.' },
  { nom: 'Poitiers Biard', detail: 'The Vienne airport, scheduled and charter lines. A compact terminal, ideal to renovate in tranches.' },
  { nom: 'Angoulême Cognac', detail: 'The Charente airport, business and leisure traffic, less than two hours from our base.' },
  { nom: 'Bordeaux Mérignac', detail: 'One of the largest regional airports in France: halls, lounges and offices, jobs planned in advance.' },
  { nom: 'Nantes Atlantique', detail: 'The big airport of the west, very high footfall. Public and office zones to renovate without closure.' },
  { nom: 'Limoges Bellegarde', detail: 'The Limousin airport, national and international lines, a terminal to modernise zone by zone.' },
  { nom: 'Brive Vallée de la Dordogne', detail: 'A recent Corrèze airport, regular traffic. Public surfaces, boarding lounge and lounge.' },
  { nom: 'Tours Val de Loire', detail: 'The Tours airport, low-cost and business aviation. A high-traffic hall and boarding area.' },
  { nom: 'Bergerac Dordogne Périgord', detail: 'The Périgord airport, very busy in summer with British visitors. A terminal with heavy seasonal traffic.' },
  { nom: 'Rennes Saint-Jacques', detail: 'The Breton airport in growth, an extended terminal, major office and lounge zones.' },
  { nom: 'Clermont-Ferrand Auvergne', detail: 'The Auvergne airport at the centre of France, sustained business traffic, lounges and operator offices.' },
  { nom: 'Pau Pyrénées', detail: 'The Béarn airport, business and mountain traffic, halls and lounges to maintain all year.' },
]

const faq = [
  { q: 'Which fire standard applies to an airport floor?', a: 'A terminal is a large-capacity public building: the floor must be fire-rated to the EN 13501-1 standard, in practice Cfl-s1 in circulation and public zones, meaning hardly flammable and with low smoke emission. In concrete terms, we only lay products that have this up-to-date rating report, and we keep the lot traceability. It is precisely the file the safety commission demands, and we are the ones who provide it to you, ready to present.' },
  { q: 'Can you work without closing the terminal?', a: 'Yes, it is the whole method. We never ask for the terminal to close. The work is split into zones and scheduled at night or in quiet hours, outside the flight peaks. A zone is removed, prepared, laid and re-washed in the same window, then handed back to the public before reopening. The next day\'s passenger walks on a new floor without having seen the shadow of a job.' },
  { q: 'How do you handle restricted-zone access and security?', a: 'To the letter. By the zone, it goes through temporary badges, clearances, sometimes an escort by an operator\'s agent, and the control of all the equipment that comes in. We settle these formalities with your teams before starting, and we fit our presence to that of the other contractors. An airport\'s security is not negotiated: we comply, and it is part of the trade.' },
  { q: 'Which covering for a very high-traffic hall?', a: 'A compact vinyl or a high-density LVT, in class-34 traffic and Cfl-s1 fire, laid in heat-welded sheets. We get a continuous, watertight surface, with no seam where grime catches, able to take tens of thousands of passages, wheels and trolleys a day without marking. It is also the most cost-effective floor over time: it cleans fast and is rarely replaced.' },
  { q: 'Is the floor accessible to people with reduced mobility?', a: 'Yes, and it is thought through from the survey. Visual contrast of the routes, tactile warning strips at the singular points such as the top of a staircase or a change of direction, thresholds with no step beyond the regulation. The floor works with the signage to guide partially sighted people and ease the passage of wheelchairs.' },
  { q: 'Which coverings for VIP lounges and waiting rooms?', a: 'It all comes down to comfort and quiet. In the waiting room, we lay acoustic contract carpet tiles; in the prestige lounges, wool carpet and bespoke rugs made at the workshop. The tile format has a real advantage: when a zone tires in front of the seats, we replace just what is needed, without redoing the whole space or closing it for long.' },
  { q: 'What are the lead times on this kind of job?', a: 'It depends on the area and above all on the phasing the operation allows. A lounge or an office floor is handled in a few nights. A complete hall is planned in tranches over several interventions. We do not announce a lead time out of thin air: we build it after the survey, fitted to your slots, with a clean return to service at each step.' },
]

const essentiel = [
  'CB Sols lays and renovates airport and terminal floors: hall, boarding, lounges, desks and offices.',
  'Coverings fire-rated Cfl-s1 (EN 13501-1 standard), non-slip and accessible with tactile warning strips.',
  'Floors in class 33 and 34 traffic, the most intensive use on the scale, to take tens of thousands of passages.',
  'Work in an occupied site: night work and quiet hours, zone by zone, without ever closing the terminal.',
  'Products laid: compact vinyl and LVT, carpet tiles, wool carpet and bespoke rugs, entrance mats.',
  'A workshop in Villedoux near La Rochelle. Work in Charente-Maritime, Vendée and Nouvelle-Aquitaine, free quote after survey.',
]

const tableRows = [
  { zone: 'Departure and arrival hall', produit: 'Compact vinyl or high-density LVT', cle: 'Cfl-s1 fire, class-34 traffic, heat-welded sheets' },
  { zone: 'Boarding lounge', produit: 'Contract carpet tiles', cle: 'Acoustic comfort, repairable tile by tile' },
  { zone: 'Check-in desks', produit: 'Anti-indent vinyl', cle: 'Resists trolleys, guiding contrasts' },
  { zone: 'VIP lounge', produit: 'Wool carpet, bespoke rugs', cle: 'Comfort, quiet, high-end finish' },
  { zone: 'Operator offices', produit: 'Acoustic carpet tiles', cle: 'Open-plan noise absorption' },
  { zone: 'Airlocks and toilets', produit: 'Welded sheet vinyl, entrance mats', cle: 'Hygiene, slip resistance, cove skirting' },
]

export default function RevetementSolAeroportPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/revetement-sol-aeroport#service',
        name: 'Floor covering for airports and terminals',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'Country', name: 'France' },
          { '@type': 'Place', name: 'La Rochelle Île de Ré Airport' },
          { '@type': 'Place', name: 'Poitiers Biard Airport' },
          { '@type': 'Place', name: 'Angoulême Cognac Airport' },
          { '@type': 'Place', name: 'Bordeaux Mérignac Airport' },
        ],
        serviceType: 'Laying and renovation of vinyl, LVT and carpet flooring for terminals',
        description: 'Floor covering for halls, boarding lounges, lounges, desks and offices of an airport. Products rated Cfl-s1, tactile accessibility, non-slip, class-34 traffic. Work in an occupied site, phased night work.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Airport floor covering', item: 'https://cbsols.fr/en/revetement-sol-aeroport' },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'Renovating an airport floor without closing the terminal',
        description: 'The CB Sols method for laying a terminal floor covering in an occupied site, from survey to the handover of the compliance file.',
        step: process.map((p, i) => ({ '@type': 'HowToStep', position: i + 1, name: p.step, text: p.desc })),
      },
      {
        '@type': 'WebPage',
        '@id': 'https://cbsols.fr/en/revetement-sol-aeroport#webpage',
        url: 'https://cbsols.fr/en/revetement-sol-aeroport',
        name: 'Floor covering for airports and terminals',
        description: 'CB Sols guide and service: vinyl, LVT and carpet flooring for airport halls, lounges and offices, rated Cfl-s1, accessible and non-slip, laid without closing the terminal.',
        dateModified: '2026-09-14',
        inLanguage: 'en',
        isPartOf: { '@id': 'https://cbsols.fr/#website' },
        about: { '@id': 'https://cbsols.fr/en/revetement-sol-aeroport#service' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Airport floor covering</span>
          </div>
          <div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              An airport floor,{' '}
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>laid without closing the terminal.</em>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '900px' }}>
              You do not close an airport to redo a floor. So we do the opposite: we advance while it sleeps. Zone by zone, at night or in quiet hours, the old covering goes, the substrate is reworked, the new floor is laid and washed before the first flight. Hall, boarding, desks, lounge, offices: each space has its covering, fire-rated, accessible, built for a traffic few places know. Behind all that, over 28 years of the trade and a workshop twenty minutes from La Rochelle.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/en/contact?from=revetement-sol-aeroport" variant="primary" size="md">Request a quote</Button>
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

      {/* Zones */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>A terminal is not a single surface</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Six spaces, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>six ways to wear a floor.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
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

      {/* Quick-reference table */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>At a glance</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.03em' }}>
            The right covering, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>zone by zone.</em>
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: '640px' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Zone</th>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Recommended covering</th>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Standard and key point</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((r, i) => (
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

      {/* CTA inline 1 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A renovation project in preparation?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            We travel out to see the floor and quote it.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Hall, lounge, offices or technical room: Valentin comes on site, looks at what needs doing, advises you on the right covering and hands you a precise quote, with no commitment.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=revetement-sol-aeroport" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Technical specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>What a terminal floor must take</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em' }}>
            The brief, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>with no spin.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>What we roll out, and why</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Four materials, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>each in its place.</em>
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
          <p style={{ marginTop: '2.5rem', fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7 }}>
            We work with the makers that know how to do contract: Gerflor, Tarkett, objectflor, egeCarpets. No consumer floor repainted in the airport\'s colours. Each product is chosen on its technical sheet and its rating report, because it is that document, not the loss-leader price, that passes the safety commission.
          </p>
        </div>
      </section>

      {/* Client types */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Who we talk to</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            From the flying-club field <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>to the first-class lounge.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Each site has its security, operating and image constraints. The method does not change, it adjusts to the configuration and the public of the terminal.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {clients.map((m, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra)', marginBottom: '0.5rem' }}>{m.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional airports */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our patch</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Regional airports, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from western France to the centre of the country.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            A workshop in Villedoux, near La Rochelle. We work on the regional airports of western France and the centre of the country, with the logistics each site imposes: equipment, phasing, moving the teams. The list is not exhaustive at all; if your terminal is concerned, we come to see it.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A trading window to seize?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Give us the slot, we fit the laying to it.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Nights, quiet hours, off-season: tell us when the terminal is calm, we organise around you.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=revetement-sol-aeroport-mid" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>From the first visit to the first flight</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Six steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>fitted to your hours.</em>
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
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>The questions we are really asked</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Airport floors, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>a craftsman&apos;s answers.</em>
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
            CB Sols works wherever the floor takes a beating and public-building standards apply: cinema, authority, hotel, business-aircraft cabin. The same requirements, the same care for detail.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            <Link href="/en/moquette-jet-prive" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Private-jet carpet →</Link>
            <Link href="/en/secteurs/collectivites" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Public sector →</Link>
            <Link href="/en/secteurs/hotellerie" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Hospitality →</Link>
            <Link href="/en/services/sol-pvc-les" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Sheet vinyl flooring →</Link>
            <Link href="/en/services/tapis-de-proprete" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Entrance mats →</Link>
            <Link href="/en/services/pose-moquette" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Carpet laying →</Link>
            <Link href="/en/guide/moquette-acoustique" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Acoustic carpet →</Link>
            <Link href="/en/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Villedoux showroom →</Link>
          </div>
        </div>
      </section>

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            A terminal floor to redo? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Let us talk for real.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '640px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A site survey in Charente-Maritime, Vendée and Nouvelle-Aquitaine. A bespoke quote after a survey, with a phasing thought for your trading, not for our comfort.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=revetement-sol-aeroport" variant="primary" size="md">Request a quote</Button>
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
