import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Mail, MapPin, Store, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: "Floor Covering on the Île d'Yeu | Houses and Hotels, Vendée",
  description: "Laying of carpet, vinyl and bespoke rugs on the Île d'Yeu. Fishermen's houses in Port-Joinville, wild-coast villas, boutique hotels. Island logistics mastered by CB Sols, over 28 years of know-how.",
  alternates: {
    canonical: 'https://cbsols.fr/en/revetement-sol-ile-d-yeu',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-ile-d-yeu', en: 'https://cbsols.fr/en/revetement-sol-ile-d-yeu', es: 'https://cbsols.fr/es/revetement-sol-ile-d-yeu', },
  },
  keywords: ["floor covering Île d'Yeu", 'carpet island house Yeu', 'feet-in-the-sand floor Vendée', "flooring craftsman Île d'Yeu"],
  openGraph: {
    title: "Floor covering on the Île d'Yeu, island charm",
    description: "Carpet, vinyl and bespoke rugs on the Île d'Yeu. Logistics mastered from Fromentine, off-season work. CB Sols, over 28 years.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-ile-d-yeu.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: "Renovated fishermen's houses in Port-Joinville", desc: 'You have a white-stone house at the port. The rooms are small, the parquet is never level. We screed, then we lay loop carpet, sealed sisal or light vinyl by room. The family-house spirit is kept.' },
  { title: 'Family villas on the wild coast', desc: 'Your villa looks out over the moor, between the Pointe du But and the Anse des Vieilles. You live barefoot all summer. Light floors, natural sisal, wood-effect vinyl, a found rug in the lounge. Everything is chosen for the sand and the damp.' },
  { title: "Boutique hotels and guest houses", desc: 'You run a small hotel set in a former captain\'s house. We come in winter, when the activity slows. Carpet of mastered density, stain treatment, a palette matched to the white stone.' },
  { title: 'Premium seasonal rentals', desc: 'Your house goes out on rental every week in summer. The floor must take the turnover and stay clean. High-density wood-effect vinyl in the living rooms, robust carpet in the bedrooms, reinforced thresholds for the suitcases.' },
]

const exigences = [
  { title: 'The boat is our business', desc: 'A forty-minute crossing from Fromentine, freight and passengers. We book the sailings, we load on time, we pick up the vehicle at Port-Joinville. You touch nothing. The materials arrive when needed, laid the following week.' },
  { title: 'Off-season is ideal', desc: 'The island is saturated from April to September: full boats, booked-up lodging. We come between October and March, with a peak in February-March. We plan four to six months ahead. The house is quiet, the team works well, you get everything back for the summer.' },
  { title: 'Small rooms, we prepare to the millimetre', desc: 'Traditional houses have narrow doors, low ceilings, tight staircases. We do the cuts in the workshop before boarding. The rolls fit to the centimetre. We save hours on site and avoid the nasty surprise of a carpet that will not go through.' },
  { title: 'Wind, salt and damp, we know them', desc: 'The Yeu air is laden with salt, the west wind beats down. We go for treated wools, high-density vinyls, seaside-compatible adhesives. Your floors stay stable, winter and summer. No joints lifting after a single season.' },
  { title: 'We respect the soul of the stone houses', desc: 'The white houses of the island have a simple coherence: stone, lime, driftwood. We propose materials that match this palette: light floors, natural fibres, soft plains. You keep the spirit of the place, without rigidity, with your own taste.' },
  { title: 'We leave with our waste', desc: 'On an island, we do not leave a skip behind when we go. Offcuts, packaging, old coverings: all go back on the boat with us. You have nothing to organise after our departure. The house is clean, that is all.' },
]

const materiaux = [
  { name: 'Sealed sisal and natural fibres', desc: 'Our flagship material for the island\'s family houses. Sand, ecru or soft taupe, sisal matches the island spirit and the local white stone perfectly. Once sealed, it takes the sand and the damp without flinching. We glue it over a felt underlay. Ten to fifteen years ahead of you in a second home.' },
  { name: 'Light wood-effect vinyl', desc: 'For the living rooms, kitchens and open verandas, wood-effect vinyl works wonders. Bleached-oak, washed-pine, driftwood imitations: you would be fooled. The upkeep takes five minutes, and the sand brought back from the beach slides off. Ideal for a seasonal rental where the floor takes a beating all summer.' },
  { name: 'Loop wool carpet for bedrooms', desc: 'In the master and children\'s bedrooms, loop wool changes life. Barefoot in the morning, the warmth is there. The sand lifts off with the vacuum, the durability is good, the upkeep simple. A wide choice of colours to match the woodwork and the lime renders of your house.' },
  { name: 'Bolon woven vinyl for entrances and lobbies', desc: 'On the beach-facing entrances of a house, Bolon is unbeatable. The sand, the damp of the west wind, the wet feet, it takes it all. We wash it down with water, by morning it is dry. A contemporary woven aesthetic that matches chic-marine renovations. It is an investment that lasts.' },
  { name: 'Bespoke rugs and found rugs', desc: 'To dress a family-house lounge without redoing everything, the bespoke rug is perfect. Dimensions to the room, a worked border, a motif matched to your decor. Allow eight to fourteen weeks of making. It is the ideal light renovation before a summer rental, without heavy works.' },
]

const marques = [
  { name: 'Bolon', desc: 'The Swedish woven-vinyl maker, our reference for contemporary seaside interiors. Washable with water, robust, a dense palette. We lay it on half of the island jobs.' },
  { name: 'Gerflor', desc: 'The Lyon-based French maker we know by heart. Their wood and mineral imitations are perfect to renovate a fisherman\'s house or fit out a seasonal rental.' },
  { name: 'Forbo', desc: 'When the project calls for something natural, we look at Forbo. Their Marmoleum is a true linoleum made from linseed oil. Ideal for family villas and characterful houses.' },
  { name: 'EGE Carpets', desc: 'The Danish maker, our reference for the island\'s boutique hotels and prestige guest houses. Their Hospitality range sets a tone from the entrance.' },
  { name: 'Brintons', desc: 'The British Axminster, the aristocracy of carpet. We call on it for the heritage renovations of the great notable houses of Port-Joinville.' },
  { name: 'Object Carpet', desc: 'The German maker, for signature renovations and premium rentals. An assertive contemporary design, perfect finishes. Ideal when you want to break from the classic seaside codes.' },
  { name: 'Tisca Tiara', desc: 'The Swiss maker, this is the very top of the range. We bring them out for the exceptional family villas of the wild coast. When the budget follows, the result is without equal.' },
  { name: 'Romus', desc: 'Our supplier of profiles and stair nosings. Essential for the narrow staircases of the island houses and to dress the sanded thresholds cleanly.' },
]

const quartiers = [
  { nom: 'Port-Joinville', detail: 'The island\'s capital, a fishing and marina port, historic notable houses, hotels and restaurants. The heart of island activity and the arrival logistics for materials.' },
  { nom: 'Saint-Sauveur', detail: 'The central village of the island, a Romanesque church, traditional white-stone houses. Calm and heritage, family homes and guest houses.' },
  { nom: 'La Meule', detail: 'A small wild port in the south-west, preserved coves, fishermen\'s houses renovated into charming residences. An exceptional setting and a demand for authenticity.' },
  { nom: 'Pointe du But', detail: 'The western tip of the island, a lighthouse and wild moor. Contemporary family villas facing the ocean, a way of life against the elements.' },
  { nom: 'Port de la Meule', detail: 'A sheltered mooring in the south, fishermen\'s huts, briny restaurants. Renovated family houses with direct access to the neighbouring coves.' },
  { nom: 'Plage des Sabias', detail: 'A north-west beach, coves of golden sand. Overlooking family villas, prestige second homes, a panoramic view of the ocean.' },
  { nom: 'Vieux Château', detail: 'A spectacular medieval fortress on the southern cliff. A few houses and villas in the immediate surroundings, a listed and preserved sector.' },
  { nom: 'Wild coast', detail: 'The whole south and west of the island, moor, coves, cliffs. Isolated villas and contemporary residences facing the ocean, a demand for logistical self-sufficiency.' },
  { nom: 'Anse des Vieilles', detail: 'A sheltered golden-sand beach, the south-east coast. Family villas and second homes among the maritime pines, an Atlantic-Mediterranean mood.' },
  { nom: 'Port de Ker Châlon', detail: 'A north-east mooring, traditional houses, historic oyster farming. Renovated family residences and heritage programmes.' },
  { nom: 'Quai de la Chapelle', detail: 'The port front of Port-Joinville, 19th-century buildings, restaurants, hotels with a view over the port. The heart of island social life.' },
  { nom: 'Plage des Soux', detail: 'A north family beach, easy access, villas and sea-facing residences. A calm, residential seaside district favoured by families.' },
]

const process = [
  { step: 'First contact', desc: 'A call or email. Gathering the key points of the island project: property type, areas, desired schedule, use (main home, second home, rental, hotel). A discussion of the off-season work window that will suit best.' },
  { step: 'Visit to Port-Joinville', desc: 'A visit organised within 3 to 5 weeks, crossing included. Precise measuring, a survey of the house access constraints, photos to coordinate colours. Samples presented on site under the island light, validation at several moments if possible.' },
  { step: 'Quote and freight logistics', desc: 'A detailed quote within a week, including the freight-crossing logistics item and the team\'s accommodation. Validation of the colours, the bespoke rugs, the thresholds. The order placed on confirmation, a factory lead time of 3 to 12 weeks by range.' },
  { step: 'Making at the Villedoux workshop', desc: 'Pre-cutting and pre-assembly of the materials in La Rochelle. Precise marking of the cuts to pass the door openings of the traditional houses. This upfront preparation is crucial for island jobs where every handling on site is costly.' },
  { step: 'Crossing and laying on Yeu', desc: 'Materials and tools boarded at Fromentine on the scheduled freight crossing. The team crosses as passengers the day before, lodging in Port-Joinville. Laying in 4 to 8 days by project, waste taken back on the return crossing, finishes checked with you before departure.' },
]

const faq = [
  { q: 'Do you really come to Yeu from La Rochelle?', a: 'Yes, regularly. The Île d\'Yeu is two hours by road to Fromentine, then a forty-minute crossing to Port-Joinville. We treat it in the continuity of Ré and Oléron, it is exactly the same island logic. We take charge of all the logistics: passenger and freight crossings, the team\'s accommodation, a vehicle on site, and even the return of waste to the mainland. You organise nothing on your side.' },
  { q: 'How does it work for the freight of the materials?', a: 'That is exactly what we prepare upfront, and it changes everything between a calm job and an improvised one. The rolls, the adhesives, the tools are boarded at Fromentine on the freight crossing of the Compagnie Vendéenne or the Régie Yeu Continent. We book the slots three to four weeks ahead, especially at the start and the end of the job. On arrival, a vehicle hired on site does the last kilometre. Everything is included in the quote.' },
  { q: 'When is it best to work on Yeu?', a: 'From October to March, off the tourist season. Owners are less present, the hotels close, the crossings are not saturated. For seasonal rentals, we aim firmly at the low season to deliver before Easter. We avoid April to September, it is logistical hell. The best slots are set four to six months ahead, especially with a bespoke rug or a large project.' },
  { q: 'Which material for a family house on Yeu?', a: 'It depends on the room. For the living rooms and verandas, we go for wood-effect vinyl or sealed sisal: they take the sand and the bare feet of summer. In the bedrooms, loop wool carpet brings the morning warmth. On the beach-facing entrances, Bolon is unbeatable, it washes down with water. We always validate the choices under the island light, never in a showroom.' },
  { q: 'Do you work in the narrow fishermen\'s houses?', a: 'That is even where we excel. The traditional houses of Port-Joinville have narrow doors and tight staircases. We prepare the cuts upfront in the workshop, sometimes in several pieces that pass the openings then join invisibly on site. It is this preparation that makes the difference. On narrow staircases, we also propose laying solutions that avoid carrying up large pieces in one go.' },
  { q: 'Do you handle the site waste?', a: 'Yes, everything goes back with us on the return crossing. We gather, we pack, we load. You have no skip to organise, no local tip to find, no removal to manage. It is included in the island service, as on Ré or Oléron. A well-prepared island job is also measured by what we take back with us.' },
  { q: 'Do you also lay bespoke rugs on Yeu?', a: 'Yes, and it is particularly relevant on family houses. Hand-sewn rugs, dimensions to the centimetre, a worked border, a motif matched to your decor. Found sisals, plain wools in warm tones, contemporary creations for the wild coast. It is often what transforms a renovated-house lounge, without masking the floor. Allow eight to fourteen weeks of making, to fit into the job schedule.' },
]

export default function RevetementSolIleDYeuPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/revetement-sol-ile-d-yeu#service',
        name: "Floor covering on the Île d'Yeu",
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: "L'Île-d'Yeu" },
          { '@type': 'AdministrativeArea', name: 'Vendée' },
          { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
        ],
        serviceType: "Laying of carpet, vinyl and bespoke rugs on the Île d'Yeu",
        description: "Design, workshop making and laying of carpet, vinyl and bespoke rugs for fishermen's houses, wild-coast villas, boutique hotels and premium seasonal rentals on the Île d'Yeu. Freight logistics from Fromentine entirely handled.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: "Floor covering on the Île d'Yeu", item: 'https://cbsols.fr/en/revetement-sol-ile-d-yeu' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="ile-d-yeu" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Floor covering Île d&apos;Yeu</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Floor covering on the Île d&apos;Yeu,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>island charm.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Laying of carpet, vinyl and bespoke rugs on the Île d&apos;Yeu. Fishermen&apos;s houses of Port-Joinville, wild-coast villas, boutique hotels and premium seasonal rentals. Freight logistics from Fromentine entirely handled by us. CB Sols has worked in the trade for over 28 years.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=ile-d-yeu" variant="primary" size="md">Request a quote</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Integrated island logistics</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;On Yeu, the trade begins at Fromentine. We plan the freight sailings, we cross with the team, we take the waste back. That is what CB Sols has done on the islands for over 28 years.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, owner of CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>For which kind of project</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Four settings, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>one and the same island approach.</em>
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

      <section style={{ padding: '3rem 2rem' }}>
        <div style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A project on Yeu?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              A visit to the island, an all-inclusive quote.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Freight logistics, accommodation, waste return: everything is included. A visit organised within 3 to 5 weeks, a detailed quote within a week.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/en/contact?from=ile-d-yeu-cta1" variant="primary" size="md">Request a quote</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Island specifics</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six requirements <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>specific to Yeu projects.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Working on an island is not reproducing a mainland job. Here are the six points on which we structure our method, from the freight planning to the return of the waste.
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

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materials for Yeu</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            The product families <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>we carry across to the island.</em>
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

      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &ldquo;A fisherman&apos;s house in Port-Joinville is prepared in the workshop like a precision job. We arrive with the materials ready, we lay fast, we leave with the waste. That is the island promise.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, owner of CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?from=ile-d-yeu-citation" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>A home visit on the island</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Partner makers</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Eight reference houses <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>for your Vendée projects.</em>
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

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Places and villages</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            The Île d&apos;Yeu, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from Port-Joinville to the wild coast.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Our team travels across the whole island, from the port and the villages to the wild coves of the south, where the family houses and the heritage renovations are concentrated.
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

      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A project in mind?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            A call to clear the ground.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Twenty minutes on the phone to clarify the possible ranges, the work window and the all-inclusive budget.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=ile-d-yeu-cta2" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from Villedoux to Port-Joinville.</em>
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

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Frequently asked questions</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Floor covering on Yeu, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>concrete answers.</em>
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

      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            One more question? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>Call Valentin.</em>
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Straight through to the owner. No hotline. Clear advice, an honest order of magnitude, a next step only if the project makes sense.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="See also"
        sectionSubtitle="Our know-how covers other worlds that may interest you. Take your time to browse, ask your questions, we will answer them."
        items={[
          { href: '/en/ile-de-re', title: 'Île de Ré', teaser: 'Our natural ground. Mastered logistics, materials chosen for the sea air, teams used to the ferry.', icon: Waves },
          { href: '/en/ile-doleron', title: "Île d'Oléron", teaser: 'Fishermen\'s houses, modern villas, second homes. The same rigour, on the neighbouring island.', icon: Waves },
          { href: '/en/revetement-sol-cap-ferret', title: 'Floor covering Cap Ferret', teaser: 'Oyster cabins, feet-in-the-sand villas. The discretion of a know-how that barely shows.', icon: Waves },
          { href: '/en/revetement-sol-arcachon', title: 'Floor covering Arcachon', teaser: 'Bay houses and dune villas. Floors that take the sand, the light and daily life.', icon: MapPin },
          { href: '/en/moquette-bateau', title: 'Boat carpet', teaser: 'Bespoke nautical floors: comfort on board, non-slip, resistance to salt and light.', icon: Waves },
          { href: '/en/architectes', title: 'For architects', teaser: 'Material documentation, annotated samples, detailed quotes. Our role is to serve your vision.', icon: Building2 },
          { href: '/en/showroom', title: 'Villedoux showroom', teaser: 'Come to see and touch the materials. By appointment, in Villedoux near La Rochelle.', icon: Store },
          { href: '/en/contact', title: 'Contact us', teaser: 'A question, a project, a quote within 48 hours. The owner answers you directly.', icon: Mail },
        ]}
      />

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Your project on Yeu <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>with complete peace of mind.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A site visit in Port-Joinville. An all-inclusive quote (freight, accommodation, waste return), careful finishes, off-season work. Over 28 years of CB Sols know-how at the service of the islands of the Grand Ouest.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=ile-d-yeu-final" variant="primary" size="md">Request a quote</Button>
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
