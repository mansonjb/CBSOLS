import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Mail, MapPin, Store, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Floor Covering in Cap Ferret | Bay Villas',
  description: 'Laying of carpet, vinyl and bespoke rugs for villas in Cap Ferret. Second homes, timber decks, feet in the sand. CB Sols high-end craftsman, over 28 years of experience.',
  alternates: {
    canonical: 'https://cbsols.fr/en/revetement-sol-cap-ferret',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-cap-ferret', en: 'https://cbsols.fr/en/revetement-sol-cap-ferret' },
  },
  keywords: ['floor covering Cap Ferret', 'villa carpet Cap Ferret', 'seaside flooring Arcachon Bay', 'cabin rug laying Cap Ferret', 'flooring craftsman Arcachon'],
  openGraph: {
    title: 'Floor covering in Cap Ferret, the art of the seaside',
    description: 'Carpet, vinyl and bespoke rugs for villas in Cap Ferret and on Arcachon Bay. CB Sols, over 28 years of know-how.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-cap-ferret.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Feet-in-the-sand family villas', desc: 'You spend the summer with the family facing the Bay. The sand gets in, we accept it. Wood-effect vinyl for the living rooms, wool carpet or a bespoke rug on the bedroom side. We lay outside July-August so as not to cut your holidays.' },
  { title: 'Renovated oyster cabins', desc: 'You bought an oyster house in L\'Herbe or Le Canon. The flooring works with the salt and the damp. We choose a reversible laying that brutalises nothing. The character of the building stays intact.' },
  { title: 'High-end second homes', desc: 'Your family house has a dedicated designer, often in Paris. We exchange by photos and samples. Wool carpet in the bedrooms, durable vinyl on the wet-zone side, rugs in the living rooms.' },
  { title: 'Boutique hotels facing the Bay', desc: 'You run a small hotel or guest rooms with a view. Everything must be public-building compliant and hold up against the salt. We choose fire-treated coverings, in a soft palette that sits with the place.' },
]

const exigences = [
  { title: 'The sand, we take it into account', desc: 'At Cap Ferret, the sand invites itself everywhere: into slippers, under furniture, into the hems. A standard covering wears twice as fast. We choose hard fibres that take the grain of sand day to day. You keep a clean floor for longer.' },
  { title: 'Salt and sun do not scare us', desc: 'The Bay air is laden with salt, the sun beats hard on the bay windows. We select UV-treated fibres and seaside-compatible adhesives. The floor keeps its colour and its hold, season after season. No nasty surprise after two summers.' },
  { title: 'A house shut for six months, we handle it', desc: 'Many villas stay closed out of season. The heat rises, the humidity varies, the floor works. We avoid slow adhesives and materials fragile to the swings. You open the house in June and everything is in place as on laying day.' },
  { title: 'We come outside July-August', desc: 'Summer at Cap Ferret is full, jammed, family life. We fit the jobs between September and June. The house is calm, and so are the tradespeople. You get your villa back ready for the season, without having seen a single roll of carpet.' },
  { title: 'Narrow lanes, we adapt', desc: 'In L\'Herbe, Le Canon, Piraillan, the truck does not reach the villa. We carry by hand, on wide trolleys, protecting the timber decks and the neighbouring cabins. The neighbourhood stays quiet, and so does your deck. We leave the place as we found it.' },
  { title: 'A single person, from quote to invoice', desc: 'On the Bay, you already juggle the caretaker, the gardener, the pool builder. We are a single name in your book. Quote, schedule, delivery, invoice: everything goes through the same person. You save time and peace of mind.' },
]

const materiaux = [
  { name: 'High-end Bolon flocked vinyl', desc: 'Our material of choice for the Bay edge. The sand wipes off simply with water, the salt does not harm it. The natural shades (linen, sand, ecru) fit perfectly into a Cap villa. We lay it in entrances and corridors. Allow fifteen to twenty years in seasonal use, with immediate upkeep.' },
  { name: 'Gerflor Texline and Tarkett iQ Granit vinyl', desc: 'For bathrooms and utility rooms, we go for professional vinyl. A matt or driftwood-effect look, we heat-weld the sheets. So water gets through nowhere, neither in the seams nor under the skirting. It is exactly what is needed when the climate is damp all year.' },
  { name: 'Premium polyamide carpet, EGE and Forbo Flotex', desc: 'In bedrooms and libraries, we seek comfort underfoot. High-density polyamide is soft but resistant. The soft shades sit with the Bay feel. The Flotex washes outright with plenty of water, which is precious when children and guests stream through all summer.' },
  { name: 'Bespoke virgin-wool and natural-fibre rugs', desc: 'When you want to dress a lounge open to the Bay without weighing down the décor, the bespoke rug does the job. Sisal, seagrass or boucle virgin wool by your mood. A hand-sewn border, dimensions to the centimetre. Six to ten weeks\' making. We lay without gluing, it is fully reversible.' },
  { name: 'Vorwerk and Object Carpet floors for the suites', desc: 'For master suites and premium guest rooms, we go up a level. The feel is exceptional, as if you were walking on a felt underlay. If you let your villa in season, we take a range with a fire treatment. And between floors, the sound insulation is serious.' },
  { name: 'Brushed-brass and marine stainless Romus profiles', desc: 'For thresholds and stair nosings, we choose the material by the zone. On the passageways exposed to the salt, we go for 316L marine stainless steel, the same as on boats. Inside, patinated brushed brass sits with the bronze fittings of the renovated cabins. The detail counts.' },
]

const marques = [
  { name: 'Gerflor', desc: 'The Lyon-based French maker we know deeply. Their Texline is perfect for wet zones and seasonal spaces. It resists the sand and the damp year after year.' },
  { name: 'Forbo Flotex', desc: 'The textile floor that washes with plenty of water, which changes life in a family villa. When guests come weekend after weekend, you vacuum, and at worst you really wash.' },
  { name: 'Tarkett iQ Granit', desc: 'Professional vinyl par excellence. Very resistant, very matt. We heat-weld it for a continuous finish, with no visible seam. It is our standard on technical zones.' },
  { name: 'Polyflor', desc: 'The British maker of vinyl. Their ranges take the sand and resist UV, so they stand up to the south-facing bay windows open onto the Bay.' },
  { name: 'EGE Carpets', desc: 'The Dane, our reference for boutique hotels and high-end villa suites. Their Highline and Hospitality ranges set a tone at once.' },
  { name: 'Object Carpet', desc: 'The Germans, for master bedrooms and offices that want to step outside the classic codes. A contemporary design, perfect finishes.' },
  { name: 'Bolon', desc: 'The Swedish maker of flocked vinyl. It is our reference for the seaside. Resistance, looks, longevity, it all comes together. We find it on half the villas we fit out at the Cap.' },
  { name: 'Vorwerk', desc: 'The German maker of premium tufted carpet. A choice of soft natural shades, an exceptional feel. Perfect for a living room you want to turn into a cocoon.' },
]

const quartiers = [
  { nom: 'Cap Ferret village', detail: 'The historic heart of the Cap, near the lighthouse and the Bélisaire jetty. Family villas, boutique hotels, restaurants facing the Bay.' },
  { nom: 'L\'Herbe', detail: 'An emblematic oyster village, tightly packed cabins, the Algerian chapel. Cabins renovated into high-end residences.' },
  { nom: 'Le Canon', detail: 'A quiet village between L\'Herbe and Piraillan. Oyster cabins and family villas handed down over several generations.' },
  { nom: 'Piraillan', detail: 'A peaceful village, an oyster port, an authentic feel. Family houses and high-end second homes.' },
  { nom: 'Grand Piquey', detail: 'A family residential district, calm beaches on the Bay side. Heritage villas and properties handed down from generation to generation.' },
  { nom: 'Petit Piquey', detail: 'A confidential district, discreet family villas, direct access to the Bay. A clientele attached to the authenticity of the place.' },
  { nom: 'Claouey', detail: 'The northern entrance to the peninsula, an oyster port and second homes. A mix of old villas and high-end contemporary developments.' },
  { nom: 'Lège', detail: 'The gateway town to the peninsula, more mainland, but already in the Bay spirit. Family villas and second homes.' },
  { nom: 'Arès', detail: 'The east side of the Bay, a family and heritage feel. Old villas, waterfront properties, boutique hotels.' },
  { nom: 'Andernos-les-Bains', detail: 'A historic family resort of the Bay. Belle Époque villas, family residences, heritage hotels.' },
  { nom: 'Cassy', detail: 'A peaceful residential hamlet on the Lanton side. Discreet family villas, properties at the edge of the forest and the Bay.' },
  { nom: 'Taussat', detail: 'A confidential village between Cassy and Audenge. Old villas, direct Bay access, a preserved and residential feel.' },
]

const process = [
  { step: 'First contact', desc: 'A phone call or email. Gathering the key points: type of property (villa, renovated cabin, hotel), estimated area, desired schedule, period of use (season, off-season, let). If the project is led by an architect or decorator, we contact them directly.' },
  { step: 'Visit to Cap Ferret', desc: 'A visit organised within 2 to 3 weeks, ideally outside July-August. Laser measuring, a survey of the access constraints (lanes, sand, timber decks), photos of the outdoor decks and the existing wood species to coordinate colours. Costs included in the quote if the job is confirmed.' },
  { step: 'Material choice', desc: 'The Villedoux showroom or samples sent directly to Cap Ferret, to your address or the architect\'s. Final validation under the venue\'s light, never in a showroom: the Bay light transforms the colours, especially the soft-sheen wools and natural fibres.' },
  { step: 'La Rochelle workshop making', desc: '3 to 10 weeks by range: Bolon, Wilton, polyamide, cut vinyl, bespoke rugs. Dry pre-assembly in the workshop to validate the fit before transport. This upfront preparation is what lets us keep a final laying of 2 to 5 days at Cap Ferret.' },
  { step: 'Laying at Cap Ferret', desc: 'A team mobilised on site, accommodation included in the quote, a schedule set to your availability and the season opening/closing. Coordination with your villa caretaker or your local concierge. A full clean, finishes checked with you or your decorator.' },
]

const faq = [
  { q: 'Do you really come to Cap Ferret from La Rochelle?', a: 'Yes, with no difficulty. The Cap is 2.5 hours from our workshop by motorway. We have mastered this distance for twenty-seven years with the Ré and Oléron jobs; the logic is exactly the same. We come to measure once, then we come back to lay. Accommodation is included in the quote. We avoid July and August, we fit it in May-June before the opening or in September-October after the closing.' },
  { q: 'Which covering to choose for a feet-in-the-sand villa?', a: 'The sand invites itself everywhere, it is the number-one enemy of a floor at the Cap. In entrances and corridors, we go for Bolon flocked vinyl or Gerflor Texline. Upkeep is done with water, the material ages well against the salt. In bedrooms and libraries, where you want softness underfoot, we put back high-density polyamide or treated wool. We settle the trade-off with you at the visit.' },
  { q: 'Which materials really resist the Bay damp?', a: 'Saline damp poses two problems: it attacks natural fibres, and it harms standard adhesives. We respond on three fronts. First, we choose synthetic fibres on the exposed zones (high-density polyamide, marine polypropylene, Bolon). Then, we use seaside-compatible adhesives. And for villas closed six months a year, we avoid underlays that store damp.' },
  { q: 'Do you work on renovated oyster cabins?', a: 'Yes, and we love it. The cabins of L\'Herbe, Le Canon or Piraillan have a soul of their own, made of salt, worked wood, exposed frames. We work there in a delicate mode: loose laying, natural fibres, a bespoke rug rather than a glued carpet. The idea is that the floor disappears in favour of the place. Not that it competes with it.' },
  { q: 'Why do you avoid July and August?', a: 'Because it is a logistical nightmare. The traffic is saturated, deliveries jam, the families are on site or the villa is let at peak rates. We prefer to fit it in May-June before the opening, or September-October after the closing. In those periods, access is smooth, the local tradespeople are free, and your villa is delivered clean for the coming season.' },
  { q: 'How long does a floor last on the Bay edge?', a: 'Fifteen to twenty years, well chosen and well laid. A Bolon in a family-villa entrance lasts twenty years in seasonal use. A Gerflor vinyl in a bathroom lasts fifteen quiet years. A premium polyamide carpet in a bedroom, twelve to fifteen years by use. Our know-how comes from twenty-seven years of Atlantic jobs; we know the seaside traps.' },
  { q: 'Do you work with the Bay decorators and architects?', a: 'Regularly. The Cap clientele often works with Parisian or Bordeaux decorators. We work as subcontractors of their specification; the architect stays the main contact. We send the samples to their agency for validation under their reference light. And we provide all the technical documentation for their site file.' },
]

export default function RevetementSolCapFerretPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/revetement-sol-cap-ferret#service',
        name: 'Floor covering in Cap Ferret and Arcachon Bay',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Cap Ferret' },
          { '@type': 'City', name: 'Lège-Cap-Ferret' },
          { '@type': 'City', name: 'Arès' },
          { '@type': 'City', name: 'Andernos-les-Bains' },
          { '@type': 'AdministrativeArea', name: 'Gironde' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Laying of carpet, vinyl and bespoke rugs for villas of Cap Ferret and Arcachon Bay',
        description: 'Design, workshop making and laying of carpet, vinyl and bespoke rugs for family villas, renovated oyster cabins, second homes and boutique hotels of Cap Ferret and Arcachon Bay.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Floor covering in Cap Ferret', item: 'https://cbsols.fr/en/revetement-sol-cap-ferret' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="cap-ferret" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Floor covering Cap Ferret</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Floor covering in Cap Ferret,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>the art of the seaside.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Laying of carpet, vinyl and bespoke rugs for villas of Cap Ferret and Arcachon Bay. Feet-in-the-sand family residences, renovated oyster cabins, boutique hotels facing the Bay. A La Rochelle workshop, seasonal work organised.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=cap-ferret" variant="primary" size="md">Request a quote</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>We travel to you</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;The sand invites itself everywhere at Cap Ferret. Choosing the right fibre is what makes a floor last ten years or twenty. For over 28 years, CB Sols has worked by the Atlantic, and the Bay speaks the same language.&rdquo;
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
            Four settings, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>one and the same understanding of the Bay.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A project on the Bay?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              An off-season visit, a costed quote.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Direct contact with your interior architect, your family decorator or with you. A visit organised outside July-August, a detailed quote within a week.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/en/contact?source=cap-ferret-cta1" variant="primary" size="md">Request a quote</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Cap Ferret specifics</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six constraints <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>specific to the Bay edge.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Working at Cap Ferret is not an ordinary job. The marine climate, the seasonality, the sand and the villa access dictate a specific method, which we apply systematically.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materials and know-how for Cap Ferret</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            The product families <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>we bring to the Bay.</em>
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
              &ldquo;A Cap villa lives in season and shuts for the rest of the year. The floor must accept that cycle, take the salt, resist the sand. It is a trade of patience and good choices from the start.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, owner of CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?source=cap-ferret-citation" variant="primary" size="md">Book an appointment</Button>
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

      {/* Villages */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Villages and towns where we work</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            The whole peninsula, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>and the north Bay.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Our team travels across the whole of the Cap Ferret peninsula and the north Bay, where the family villas and high-end second homes of the Bay are concentrated.
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
            Twenty minutes on the phone are enough to clarify the possible ranges, a realistic schedule (outside July-August) and a budget order of magnitude for your Bay villa.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?source=cap-ferret-cta2" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from Villedoux to Cap Ferret.</em>
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
            Floor covering in Cap Ferret, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>concrete answers.</em>
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
            Straight through to the owner. No hotline. Clear advice, an honest order of magnitude, a realistic schedule that takes the Bay seasonality into account.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="See also"
        sectionSubtitle="Our know-how covers other worlds that may interest you. Take your time to browse, ask your questions, we will answer them."
        items={[
          { href: '/en/revetement-sol-arcachon', title: 'Floor covering Arcachon', teaser: 'Bay houses and dune villas. Floors that take the sand, the light and daily life.', icon: MapPin },
          { href: '/en/revetement-sol-bordeaux', title: 'Floor covering Bordeaux', teaser: 'Townhouses, échoppe lofts, stone houses. Floors that dialogue with the architecture.', icon: MapPin },
          { href: '/en/revetement-sol-biarritz', title: 'Floor covering Biarritz', teaser: 'Basque Coast villas. Floors that resist the salt, the sand and the ocean light.', icon: MapPin },
          { href: '/en/revetement-sol-ile-d-yeu', title: 'Floor covering Île d\'Yeu', teaser: 'Island logistics, ferry, a tight schedule. Our experience of island projects.', icon: Waves },
          { href: '/en/moquette-bateau', title: 'Boat carpet', teaser: 'Bespoke marine floors: comfort aboard, non-slip, resistance to salt and light.', icon: Waves },
          { href: '/en/architectes', title: 'For architects', teaser: 'Material documentation, annotated samples, detailed quotes. Our role is to serve your vision.', icon: Building2 },
          { href: '/en/showroom', title: 'Villedoux showroom', teaser: 'Come to see and touch the materials. By appointment, in Villedoux near La Rochelle.', icon: Store },
          { href: '/en/contact', title: 'Contact us', teaser: 'A question, a project, a quote within 48 hours. The owner answers you directly.', icon: Mail },
        ]}
      />

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Your Cap villa <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>in expert hands.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            An off-season visit at Cap Ferret. A detailed quote, materials suited to the seaside, careful finishes. Over 28 years of Atlantic know-how at the service of Arcachon Bay.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=cap-ferret-final" variant="primary" size="md">Request a quote</Button>
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
