import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Home, Mail, MapPin, Store, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Floor Covering in Les Sables-d\'Olonne | Free Quote within 48h',
  description: 'Laying of carpet, vinyl and bespoke rugs in Les Sables-d\'Olonne. Seafront villas, upmarket second homes, Remblai hotels and restaurants, ocean-view apartments. CB Sols has worked in the trade for over 28 years, travel organised from Villedoux.',
  alternates: {
    canonical: 'https://cbsols.fr/en/revetement-sol-les-sables-d-olonne',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-les-sables-d-olonne', en: 'https://cbsols.fr/en/revetement-sol-les-sables-d-olonne' },
  },
  keywords: ['floor covering Les Sables-d\'Olonne', 'carpet Les Sables-d\'Olonne', 'vinyl flooring Les Sables-d\'Olonne', 'seaside villa rug laying Vendée', 'flooring craftsman Les Sables-d\'Olonne'],
  openGraph: {
    title: 'Floor covering in Les Sables-d\'Olonne, the seaside spirit',
    description: 'Carpet, vinyl and bespoke rugs in Les Sables-d\'Olonne. Seafront villas, second homes, Remblai hotels and restaurants. CB Sols, over 28 years of know-how.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-les-sables-d-olonne.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Feet-in-the-sand villas and second homes', desc: 'You spend the summer facing the ocean, on the Remblai or towards La Chaume. The sand gets in, the salt invites itself. We lay wood-effect vinyl in the living rooms and wool carpet on the bedroom side. We come ideally outside July-August, so as not to cut your season.' },
  { title: 'Seafront hotels and restaurants', desc: 'You run a hotel or a restaurant on the Sables seafront. Everything must hold up against the summer traffic and stay public-building compliant. We choose fire-treated coverings, easy to maintain, in a palette that sits with the seaside feel. We phase the laying outside the tourist season.' },
  { title: 'Upmarket ocean-view apartments', desc: 'You have an apartment with a view over the Grande Plage or the port. You want a floor that enhances the property and takes seasonal lets. Wool carpet for comfort, durable vinyl on the wet-zone side, a bespoke rug in the living room. We work cleanly, in a co-ownership.' },
  { title: 'Shops and boutiques of the seaside centre', desc: 'You run a boutique near the Remblai or the market halls. We lay at night or on the closing day, you lose no trading day. A floor resistant to traffic and sand, easy to clean, in a look that shows off your products.' },
]

const exigences = [
  { title: 'Salt and sand, we take them into account', desc: 'At Les Sables-d\'Olonne, the air is laden with salt and the sand invites itself everywhere, in the entrances as under the furniture. A standard covering wears twice as fast. We select hard fibres, resistant vinyls and seaside-compatible adhesives. Your floor keeps its hold and its colour, season after season.' },
  { title: 'We come outside July-August', desc: 'Summer at Les Sables is full, jammed, the town lives to the rhythm of the Remblai and the beaches. We fit the jobs between September and June, when access is smooth and the villa calm. You get your property back ready for the season, without having seen a single roll of carpet during your holidays.' },
  { title: 'A house shut for six months, we handle it', desc: 'Many second homes stay closed out of season. The heat rises, the humidity varies, the floor works. We avoid slow adhesives and materials fragile to the swings. You open the house in June and everything is in place as on laying day.' },
  { title: 'We work when you are not working', desc: 'On a hotel, a restaurant or a shop by the sea, we cannot cut the activity in peak season. So we come in the evening, on the closing day or outside the tourist period. You reopen without having lost a day of revenue.' },
  { title: 'The standards, we handle them', desc: 'A hotel, a restaurant, a tourist residence: there are strict rules on fire safety. We choose the right products for you, we provide the certificates and fire reports, we dialogue with the inspection office. You have nothing to understand from the technical sheets.' },
  { title: 'A single contact, from quote to invoice', desc: 'On the coast, you already juggle the caretaker, the concierge, the managing agent. We are a single name in your book. Quote, schedule, delivery, invoice: everything goes through the same person. You save time and peace of mind.' },
]

const materiaux = [
  { name: 'Gerflor and Tarkett wood-effect vinyl', desc: 'Our material of choice for the ocean-facing living rooms. The visual result is convincing, the floor resists the sand and the summer traffic, and cleans in five minutes. We can even lay it over underfloor heating. Allow fifteen to twenty years easily in seasonal use.' },
  { name: 'Homogeneous vinyl for wet zones', desc: 'For bathrooms, utility rooms and kitchen corners, we go for homogeneous vinyl or Forbo. We heat-weld the sheets, so water gets through nowhere, neither in the seams nor under the skirting. It is exactly what is needed when the climate is damp all year.' },
  { name: 'Virgin-wool and premium polyamide carpet', desc: 'In bedrooms and suites, we seek comfort underfoot. Virgin wool takes a patina without crushing, high-density polyamide stays soft and resistant. The natural shades, linen, sand, ecru, sit with a seaside feel. Twelve to twenty years by the range and the use.' },
  { name: 'Bfl-s1 vinyl for hotels and restaurants', desc: 'On public-access establishments, we go for fire-rated vinyl, resistant to intense traffic. The material takes the summer to-and-fro, cleans easily and meets the public-building requirements. We provide the fire reports for the safety commission.' },
  { name: 'Bespoke wool and natural-fibre rugs', desc: 'To dress a lounge open to the ocean without weighing down the décor, the bespoke rug does the job. Sisal, seagrass or boucle virgin wool by your mood. A hand-sewn border, dimensions to the centimetre. We lay without gluing, it is fully reversible.' },
  { name: 'Brushed-brass and marine-stainless Romus profiles', desc: 'For thresholds and stair nosings, we choose the material by the zone. On the passageways exposed to the salt, we go for marine stainless steel, the same as on boats. Inside, patinated brushed brass sits with seaside interiors. The detail counts.' },
]

const marques = [
  { name: 'Gerflor', desc: 'The Lyon-based French maker we know deeply. Their wood-effect vinyls and the Texline range are perfect for the living rooms and wet zones of the seaside. They resist the sand and the damp year after year.' },
  { name: 'Tarkett', desc: 'For spaces that call for real acoustic comfort, we go for Tarkett iQ Granit. It ages well and stays our reference on floors under regular traffic, hotels and tourist residences included.' },
  { name: 'Forbo', desc: 'When the project calls for something natural, we look at Forbo. Their Marmoleum is a true linoleum made from linseed oil, and their Flotex washes with plenty of water, which changes life in a coastal family villa.' },
  { name: 'EGE Carpets', desc: 'The Danish weaver, our reference for boutique hotels and high-end seafront villa suites. Their tiles already have the acoustic underlay built in, which makes the laying easier.' },
  { name: 'objectflor', desc: 'For shops and living rooms, their wood-effect vinyl planks are a safe bet. The result is credible, the laying goes fast, and the resistance to sand and traffic holds over time.' },
  { name: 'Bostik', desc: 'For adhesives and screeds, we work with Bostik. They are reliable products, seaside-compatible, that guarantee a durable laying even on substrates subject to saline damp.' },
  { name: 'objectflor Expona', desc: 'When a hotel or a shop wants a design floor that stands out without sacrificing resistance, their Expona ranges do the job. Wood, concrete or stone effect, the choice is wide and the result high-end.' },
  { name: 'Romus', desc: 'For the finishing accessories, profiles and stair nosings, Romus is our reference. From brushed brass to marine stainless steel, we always find the finish that sits with a seaside interior.' },
]

const quartiers = [
  { nom: 'Le Remblai', detail: 'The emblematic seafront, facing the Grande Plage. Ocean-view apartments, upmarket residences, hotels and restaurants to fit out.' },
  { nom: 'La Chaume', detail: 'A former fishermen\'s district, on the other side of the channel. Characterful houses, family villas and traditional dwellings to renovate.' },
  { nom: 'The town centre', detail: 'Market halls, shopping streets, the marina. Shops, practices and centre apartments to fit out and modernise.' },
  { nom: 'La Rudelière', detail: 'A residential district near the beaches. Family villas and second homes attached to careful finishes.' },
  { nom: 'The station district', detail: 'Town dwellings and small office units. Practices, co-ownerships and houses being modernised.' },
  { nom: 'Olonne-sur-Mer', detail: 'A neighbouring town merged into Les Sables-d\'Olonne. Developments, family houses and office business zones.' },
  { nom: 'Château-d\'Olonne', detail: 'A residential and seaside sector to the south of the town. Upmarket villas, second homes and contemporary developments.' },
  { nom: 'La Pironnière', detail: 'A district near the southern beaches, a calm and residential feel. Family villas and oceanfront second homes.' },
  { nom: 'Les Roches Noires', detail: 'A seaside sector on the beach edge. Sea-view apartments, upmarket residences and seafront hotels.' },
  { nom: 'The port', detail: 'A fishing and marina port, the start of the Vendée Globe. Restaurants, shops and business premises linked to sailing.' },
  { nom: 'Talmont-Saint-Hilaire', detail: 'A neighbouring coastal town, resorts and seaside villages. Second homes and family villas by the sea.' },
  { nom: 'Les Sables south and beaches', detail: 'Residential districts near the southern Sables beaches. A clientele attached to authenticity and the oceanic setting.' },
]

const process = [
  { step: 'First contact', desc: 'A phone call or email. Gathering the key points: type of property (villa, apartment, hotel, restaurant, shop), estimated area, desired schedule, period of use (season, off-season, let). If the project is led by an architect or decorator, we contact them directly.' },
  { step: 'Visit to Les Sables-d\'Olonne', desc: 'A visit organised from Villedoux, about 1h45\' drive, ideally outside July-August. Laser measuring, a survey of the access and co-ownership constraints, photos to coordinate colours. For hotels, restaurants and shops, we identify the off-season work windows.' },
  { step: 'Material choice', desc: 'The Villedoux showroom or samples sent directly to Les Sables-d\'Olonne, to your home or the establishment. Final validation under the venue\'s light: the ocean light transforms the colours. For public buildings, transmission of the required technical sheets, fire reports and certifications.' },
  { step: 'Workshop making', desc: '3 to 10 weeks by range: woven carpet, tiles, cut vinyl, bespoke rugs. Dry pre-assembly in the workshop to validate the fit before transport. This upfront preparation is what lets us keep a fast, careful final laying in Les Sables-d\'Olonne.' },
  { step: 'Laying in Les Sables-d\'Olonne', desc: 'A team mobilised on site, accommodation included in the quote, a schedule set to your availability and the season opening or closing. Off-season phasing for establishments in operation. Coordination with your local concierge. A full clean on delivery.' },
]

const faq = [
  { q: 'Do you really come to Les Sables-d\'Olonne from La Rochelle?', a: 'Yes, with no difficulty. Les Sables-d\'Olonne is about 120 km, around 1h45 by the road. We have mastered this distance for over 28 years with the Ré, Oléron and whole Atlantic-front jobs; the logic is the same. We come to measure once, then we come back to lay. Accommodation and travel are included in the quote. We avoid July and August, we fit it in spring or autumn.' },
  { q: 'Which covering to choose for a feet-in-the-sand villa?', a: 'The sand and the salt are the number-one enemies of a floor by the ocean. In the living rooms and entrances, we go for wood-effect or homogeneous vinyl: upkeep is done with water, the material ages well against the salt. In the bedrooms, where you want softness underfoot, we put back virgin wool or high-density polyamide. We settle the trade-off with you at the visit.' },
  { q: 'Do you work on the hotels and restaurants of the Remblai?', a: 'Yes, it is one of our natural grounds. A seafront hotel or restaurant calls for public-building-compliant floors, resistant to the summer traffic and easy to maintain. We choose fire-treated Bfl-s1 coverings, we lay outside the tourist season so as not to cut the activity, and we provide all the fire reports for the safety commission. You reopen ready for the season.' },
  { q: 'Why do you avoid July and August in Les Sables-d\'Olonne?', a: 'Because it is a logistical nightmare in peak season. The town is saturated, deliveries jam, the villas are occupied or let at peak rates, the hotels and restaurants run flat out. We prefer to fit it in spring before the opening, or in autumn after the closing. In those periods, access is smooth and your property is delivered clean for the coming season.' },
  { q: 'Do you work in apartments and co-ownerships on the seafront?', a: 'Yes, regularly. An ocean-view apartment calls for clean work that respects the common parts. We protect the lift, the landings and the corridors, we respect the co-ownership rules\' hours, we remove the waste as we go. Wool carpet for comfort, durable vinyl on the wet-zone side, a bespoke rug in the living room. Your neighbours barely notice us.' },
  { q: 'How long does a floor last by the ocean?', a: 'Fifteen to twenty years, well chosen and well laid. A wood-effect vinyl in a living room lasts twenty years easily in seasonal use. A homogeneous vinyl in a bathroom lasts fifteen quiet years. A premium wool or polyamide carpet in a bedroom, twelve to fifteen years by use. Our know-how comes from over 28 years of Atlantic jobs; we know the seaside traps.' },
  { q: 'Can you lay in off-peak hours on a shop or restaurant in operation?', a: 'Yes, it is even the norm on this kind of job. We organise the work in the evening, on the closing day or outside the tourist period. We pre-assemble as much as possible at the Villedoux workshop, so the on-site laying goes fast. We protect your shelving, your furniture and your room before starting. The next day, you reopen as normal, the floor laid and cleaned.' },
]

export default function RevetementSolLesSablesDOlonnePageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/revetement-sol-les-sables-d-olonne#service',
        name: 'Floor covering in Les Sables-d\'Olonne',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Les Sables-d\'Olonne' },
          { '@type': 'AdministrativeArea', name: 'Vendée' },
          { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
        ],
        serviceType: 'Laying of carpet, vinyl and bespoke rugs in Les Sables-d\'Olonne and coastal Vendée',
        description: 'Design, workshop making and laying of carpet, vinyl and bespoke rugs for seafront villas, second homes, hotels, restaurants and upmarket apartments in Les Sables-d\'Olonne.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Floor covering in Les Sables-d\'Olonne', item: 'https://cbsols.fr/en/revetement-sol-les-sables-d-olonne' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="les-sables-d-olonne" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Floor covering Les Sables-d&apos;Olonne</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Floor covering in Les Sables-d&apos;Olonne,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>the seaside spirit.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Laying of carpet, vinyl and bespoke rugs in Les Sables-d&apos;Olonne. Seafront villas, upmarket second homes, Remblai hotels and restaurants, ocean-view apartments. A workshop based near La Rochelle, seasonal work organised outside July-August.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=les-sables-d-olonne" variant="primary" size="md">Request a quote</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>We travel to you</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Salt and sand invite themselves everywhere at Les Sables. Choosing the right fibre is what makes a floor last ten years or twenty. For over 28 years, CB Sols has worked by the Atlantic; coastal Vendée speaks the same language.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project type */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>For which kind of project</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Four settings, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>one and the same understanding of the coast.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {usages.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline #1 */}
      <section style={{ padding: '3rem 2rem' }}>
        <div style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A project in Les Sables-d&apos;Olonne?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              An off-season visit, a costed quote.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Direct contact with you, your interior architect or your concierge. A measuring visit organised outside July-August, a detailed quote within 48 hours.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/en/contact?source=les-sables-d-olonne-cta1" variant="primary" size="md">Request a quote</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Les Sables-d&apos;Olonne specifics</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six constraints <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>specific to the ocean edge.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Working in Les Sables-d&apos;Olonne is not an ordinary job. The marine climate, the tourist seasonality, the sand and the access dictate a specific method, which we apply systematically.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {exigences.map((e, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>{e.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materials and know-how for Les Sables-d&apos;Olonne</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            The product families <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>we bring to coastal Vendée.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {materiaux.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '1.5rem 0', borderBottom: i < materiaux.length - 1 ? '1px solid var(--border)' : 'none' }}>
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

      {/* Mid quote */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &ldquo;A Sables villa lives in season and shuts for the rest of the year. The floor must accept that cycle, take the salt, resist the sand. It is a trade of patience and good choices from the start.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, owner of CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?source=les-sables-d-olonne-citation" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>An off-season visit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Partner makers</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Eight reference houses <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>that stand up to the seaside.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {marques.map((m, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{m.name}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Districts */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Districts and towns where we work</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Les Sables and the coast, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>out to the neighbouring towns.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Our team travels across Les Sables-d&apos;Olonne and the whole Vendée coast, where the family villas, second homes and seaside hotels are concentrated.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {quartiers.map((q, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{q.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{q.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline #2 */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A project in mind?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            A call to clear the ground.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Twenty minutes on the phone are enough to clarify the possible ranges, a realistic schedule (outside July-August) and a budget order of magnitude for your Sables property.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?source=les-sables-d-olonne-cta2" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from Villedoux to Les Sables-d&apos;Olonne.</em>
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
            Floor covering in Les Sables-d&apos;Olonne, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>concrete answers.</em>
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
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            One more question? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>Call Valentin.</em>
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Straight through to the owner. No hotline. Clear advice, an honest order of magnitude, a realistic schedule that takes the coastal-Vendée seasonality into account.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="See also"
        sectionSubtitle="Our know-how covers other towns and worlds that may interest you. Take your time to browse, ask your questions, we will answer them."
        items={[
          { href: '/en/ile-de-re', title: 'Île de Ré', teaser: 'Village houses and coastal villas. Floors that take the salt, the sand and daily life.', icon: Waves },
          { href: '/en/revetement-sol-cap-ferret', title: 'Floor covering Cap Ferret', teaser: 'Arcachon Bay villas. Floors that resist the salt, the sand and the ocean light.', icon: MapPin },
          { href: '/en/particuliers', title: 'For homeowners', teaser: 'Carpet, vinyl flooring, bespoke rugs: our know-how at the service of your home.', icon: Home },
          { href: '/en/secteurs', title: 'Our sectors', teaser: 'Offices, healthcare, hospitality, retail. Solutions designed for each type of establishment.', icon: Building2 },
          { href: '/en/realisations', title: 'Our projects', teaser: 'Discover our recent jobs in pictures. The result, the finishes, the detail that counts.', icon: Store },
          { href: '/en/contact', title: 'Contact us', teaser: 'A question, a project, a quote within 48 hours. The owner answers you directly.', icon: Mail },
        ]}
      />

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Your Sables property <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>in expert hands.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            An off-season visit in Les Sables-d&apos;Olonne. A detailed quote within 48 hours, materials suited to the seaside, careful finishes. Over 28 years of Atlantic know-how at the service of coastal Vendée.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=les-sables-d-olonne-final" variant="primary" size="md">Request a quote</Button>
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
