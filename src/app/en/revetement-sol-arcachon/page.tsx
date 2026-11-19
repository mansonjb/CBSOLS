import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Castle, Mail, MapPin, Store, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Floor Covering in Arcachon | Laying & Quote within 48h',
  description: 'Laying of carpet, vinyl and bespoke rugs in Arcachon and around the Bay. Ville d\'Hiver, Pereire and Le Moulleau villas, boutique hotels facing the Bay. CB Sols, over 28 years of know-how, travel from La Rochelle.',
  alternates: {
    canonical: 'https://cbsols.fr/en/revetement-sol-arcachon',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-arcachon', en: 'https://cbsols.fr/en/revetement-sol-arcachon' },
  },
  keywords: ['floor covering Arcachon', 'carpet Arcachon', 'vinyl flooring Arcachon', 'rug laying Arcachon', 'flooring craftsman Arcachon Bay'],
  openGraph: {
    title: 'Floor covering in Arcachon, the spirit of the Bay',
    description: 'Carpet, vinyl and bespoke rugs in Arcachon. Ville d\'Hiver villas, boutique hotels, seaside restaurants. CB Sols, over 28 years.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-arcachon.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Ville d\'Hiver and Pereire family villas', desc: 'You have a listed villa in Ville d\'Hiver or Pereire. The original parquet and the 19th-century woodwork stay in place. We lay a wool carpet with a discreet motif, or a bespoke rug in the lounge. Everything stays reversible.' },
  { title: 'Boutique hotels facing the Bay', desc: 'You run a charming hotel in Le Moulleau or facing the sea. We come in the low season, your operation does not stop. A dense carpet in the rooms, a structuring rug in the hall.' },
  { title: 'Seaside restaurants', desc: 'You run a sea-salt table with a Bay view. We lay at night, you lose no service. A woven anti-stain carpet and careful acoustics, in a palette that sits with the driftwood.' },
  { title: 'Second homes and contemporary villas', desc: 'Your summer house is at Le Pyla or L\'Aiguillon. The sand gets in, the windows stay open. Wood-effect vinyl in the living rooms, sisal or boucle in the bedrooms. We adapt the materials to your seaside way of life.' },
]

const exigences = [
  { title: 'We respect Ville d\'Hiver', desc: 'Swiss chalets, Moorish villas, neo-Gothic houses: Ville d\'Hiver is a history book laid on the dunes. We lay reversibly whenever possible. The original parquet stays intact. Our passage is discreet, which is what is asked here.' },
  { title: 'Bare feet, sand, sun', desc: 'At Le Moulleau, Le Pyla, Pereire, life is lived barefoot, with bay windows open on the Bay. The sand gets in, the sun beats down. We choose light floors that catch the light, materials that do not fear the damp. You keep the holiday feeling all year.' },
  { title: 'Never in July-August', desc: 'In summer at Arcachon, the streets are full, and so are the houses. We avoid those two months. The good slots: March-April before the season, October-November after. You get the house back ready for the holidays, without having seen a single tradesperson pass.' },
  { title: 'We come with the full team', desc: 'Arcachon is two and a half hours from our workshop. When we come up, we come up in full, we sleep on site, and we run the days together. The materials are prepared at Villedoux before departure. On site, we lay fast and well.' },
  { title: 'The Bay air does not scare us', desc: 'Marine damp makes badly chosen floors cup. We select treated wools, flocked vinyls, wood-effect vinyls for the exposed rooms. You keep a stable floor, summer and winter. No seams lifting after a year.' },
  { title: 'A single contact, from quote to invoice', desc: 'On a Bay villa, you juggle the architect, the pool builder, the gardener. We are a single extra name. Quote, schedule, delivery, invoice: everything goes through the same person. You save time and peace of mind.' },
]

const materiaux = [
  { name: 'Woven virgin-wool carpet for Ville d\'Hiver', desc: 'Our reference material in Belle Époque villas. The wool takes a patina, it does not crush. To the touch it is firm, to the eye it stands out. We choose with you a deep plain or a 19th-century geometric motif to sit with the original woodwork. Allow fifteen to twenty years of hold easily.' },
  { name: 'Sisal and natural fibres', desc: 'For a contemporary villa turned towards the Bay, sisal brings the raw touch sought after. A marled shade of sand or soft taupe, exactly in the Arcachon seaside spirit. We take it anti-stain treated and sealed; it takes family use without flinching. Good value on large areas.' },
  { name: 'Bolon flocked vinyl for feet-in-the-sand', desc: 'When your villa opens onto the beach, Bolon does it all. The sand, the Bay damp, wet bare feet: it takes it. We wash it with plenty of water and in the morning it is dry. A contemporary flocked look, and a huge choice of colours to coordinate with the driftwood and the blue of the Bay.' },
  { name: 'Light wood-effect vinyl', desc: 'For the modern residences of Le Pyla and Pereire, wood-effect vinyl does the job. The bleached-oak or washed-pine imitation is credible, you would be fooled. Upkeep is done in five minutes, and the floor holds up against the sand brought back from the beach. Ideal for a premium seasonal let that must stay spotless.' },
  { name: 'Hand-sewn bespoke rugs', desc: 'When you want to dress an original parquet without masking it, the bespoke rug makes all the difference. Dimensions set to the room, a hand-sewn border, a motif matched to your décor. Allow eight to sixteen weeks\' making. It is what transforms a Ville d\'Hiver lounge.' },
]

const marques = [
  { name: 'Bolon', desc: 'The Swedish maker of flocked vinyl, our reference for villas and restaurants facing the Bay. Washable with plenty of water, robust, a dense palette. We lay it on half the Cap jobs.' },
  { name: 'EGE Carpets', desc: 'The Dane, our reference for the boutique hotels of Le Moulleau and Pereire. Their Highline and Hospitality ranges set a tone from the entrance.' },
  { name: 'Brintons', desc: 'The British Axminster, the aristocracy of carpet. We call on it for the Belle Époque villas of Ville d\'Hiver, where you want a reception room that makes a mark.' },
  { name: 'Tisca Tiara', desc: 'The Swiss maker, the very top of the range. We bring them out on exceptional family villas and the suites of Arcachon boutique hotels. When the budget follows, the result is unmatched.' },
  { name: 'Forbo', desc: 'When the project calls for something natural, we look at Forbo. Their Marmoleum is a true linoleum made from linseed oil. Ideal for wet zones and second homes.' },
  { name: 'Gerflor', desc: 'The Lyon-based French maker we know inside out. Their wood and mineral imitations are perfect for contemporary residences and seasonal lets. A huge choice, simple upkeep.' },
  { name: 'Object Carpet', desc: 'The Germans, for the architect-designed residences of Le Pyla. An assertive contemporary design, perfect finishes. When you want to step outside the classic seaside codes.' },
  { name: 'Romus', desc: 'Our supplier of profiles. Brushed brass, bronze, marine stainless steel. We choose the finish by the zone and the mood. It is what makes the difference on delivery.' },
]

const quartiers = [
  { nom: 'Ville d\'Hiver', detail: 'The historic district of Arcachon, listed as remarkable. Belle Époque villas on the dunes, original parquet, 19th-century woodwork. A demanding heritage working ground.' },
  { nom: 'Pereire', detail: 'The seafront between Pereire beach and avenue du Général Leclerc. Family villas, contemporary residences, boutique hotels with a view over the Bay.' },
  { nom: 'Le Moulleau', detail: 'A seaside village to the south of Arcachon. The Notre-Dame church, charming hotels, sea-salt restaurants, villas overlooking the Bay. A family-house feel.' },
  { nom: 'Les Abatilles', detail: 'An Arcachon residential district, family villas in the pine wood, calm and discretion. Historic thermal springs and prestige hotels.' },
  { nom: 'L\'Aiguillon', detail: 'The northern district of Arcachon, a marina and seafront. Contemporary residences, hotels with a marina, restaurants facing the port.' },
  { nom: 'Eyrac', detail: 'The central seafront of Arcachon, between the Thiers and Legallais piers. Bourgeois buildings, sea-view apartments, beach restaurants.' },
  { nom: 'Le Pyla', detail: 'La Teste-de-Buch, at the foot of the Dune. Contemporary architect-designed villas, prestige second homes, an exceptional view over the Bay.' },
  { nom: 'Arcachon town centre', detail: 'Boulevard de la Plage, avenue Gambetta, Notre-Dame. 19th-century buildings, family apartments, historic resort shops.' },
  { nom: 'La Teste-de-Buch', detail: 'A historic town of the southern Bay, family residences, renovated oyster houses, new residential developments at the edge of the pine wood.' },
  { nom: 'Gujan-Mestras', detail: 'The oyster capital of the Bay, historic ports, renovated cabins, fishermen\'s houses rehabilitated into charming residences.' },
  { nom: 'Le Teich', detail: 'The south shore of the Bay, the bird reserve, contemporary residences bordering the reserve, nature hotels and family eco-lodges.' },
  { nom: 'Lanton', detail: 'The north-east shore of the Bay, oyster-farming villages, family houses, new residential developments facing the Bay and the pine wood.' },
]

const process = [
  { step: 'First contact', desc: 'A phone call or email. Gathering the key points of the Arcachon project: type of property, areas, desired schedule, context (second home, let, hotel, restaurant). If the project is led by an interior architect, we contact their agency directly to set up the next steps.' },
  { step: 'Bay visit', desc: 'A visit organised within 2 to 3 weeks. Measuring, a survey of the access constraints, photos to coordinate colours with the woodwork and parquet. Samples presented directly in the property under the Bay light, which transforms the perception of shades.' },
  { step: 'Material choice and quote', desc: 'A detailed quote within a week. Final validation of the colours, any bespoke rugs, the skirting and profiles. The material ordered on confirmation, factory lead time 3 to 10 weeks by the chosen range.' },
  { step: 'Villedoux workshop making', desc: 'Pre-cutting and pre-assembly of the materials at La Rochelle. A dry check of the dimensions before transport. This upfront preparation is what lets us keep a final laying of 3 to 7 days in Arcachon, with no pointless round trips on the Bordeaux-La Rochelle road.' },
  { step: 'Laying in Arcachon', desc: 'A team mobilised on site, accommodation included. A schedule set to your availability or the agreed site window, ideally outside July-August. Coordination with the concierge or the managing agent if a co-ownership. A full clean on delivery, finishes checked with you.' },
]

const faq = [
  { q: 'Do you really come to Arcachon from La Rochelle?', a: 'Yes, and often. Arcachon is 250 km away, or 2.5 to 3 hours by the route. We come down in the flow of our Cap, Bordeaux and Saint-Émilion jobs. We organise the measuring visit at the start of the project, then we come back to lay at the end. Accommodation is included in the quote. On a large job, the team stays on site until delivery.' },
  { q: 'Do you work in the villas of Ville d\'Hiver?', a: 'Yes, that is where we take the most pleasure. Ville d\'Hiver concentrates Belle Époque villas, Swiss chalets, Moorish follies of stunning quality. The parquet and 19th-century woodwork call for respect. Whenever possible we lay reversibly, without nailing, without aggressive gluing. Bespoke rugs and Brintons carpets fit into that naturally.' },
  { q: 'When is it best to work in Arcachon?', a: 'From October to April, out of the tourist season. It is the period when the owners are less present and the Bay breathes. For hotels and restaurants, we aim for the annual closure, generally between mid-November and mid-March. We avoid July and August, it is a logistical nightmare. The best slots are set four to six months ahead, especially with a bespoke rug in the lot.' },
  { q: 'Which material for a villa facing the Bay?', a: 'It depends on the use. In a Belle Époque villa turned towards the Bay, wool carpet on a felt underlay stays the reference for lounges and bedrooms. In a contemporary villa with direct beach access, sealed sisal or Bolon do the job: they take the sand and the damp. For guest rooms and verandas, light wood-effect vinyl is perfect. We always validate under the Bay light, never in a showroom.' },
  { q: 'Do you work with interior architects?', a: 'Regularly, it is even one of our favourite ways of working. The Bay architecture scene is active between Bordeaux, the Cap and Arcachon. We work as subcontractors of their specification; the architect stays the main contact. We send the samples to their agency for validation, and we provide all the technical documentation for their site file.' },
  { q: 'How much does a villa floor renovation cost?', a: 'Very variable by area and range. To give you an order of magnitude: a 200 m² family villa entirely in wool carpet with a few bespoke rugs is 30,000 to 60,000 euros all in, travel and laying included. A more modest project goes lower. A boutique hotel climbs in proportion. We always cost after a visit, with a detailed quote room by room, so you have the breakdown clear.' },
  { q: 'Do you also lay bespoke rugs?', a: 'Yes, it is an important part of the trade, and a particularly relevant ground in Arcachon. Hand-sewn rugs, dimensions to the centimetre, a motif matched to your décor. Aubusson or Hereke reproductions for Ville d\'Hiver, contemporary plain creations for the modern villas of Le Pyla. Allow eight to sixteen weeks\' making. It is often what transforms a lounge, especially when dressing an original parquet without masking it.' },
]

export default function RevetementSolArcachonPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/revetement-sol-arcachon#service',
        name: 'Floor covering in Arcachon',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Arcachon' },
          { '@type': 'AdministrativeArea', name: 'Gironde' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Laying of carpet, vinyl and bespoke rugs in Arcachon and around the Bay',
        description: 'Design, workshop making and laying of carpet, vinyl and bespoke rugs for Ville d\'Hiver Belle Époque villas, boutique hotels facing the Bay, sea-salt restaurants and contemporary residences in Arcachon, Le Moulleau, Le Pyla.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Floor covering in Arcachon', item: 'https://cbsols.fr/en/revetement-sol-arcachon' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="arcachon" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Floor covering Arcachon</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Floor covering in Arcachon,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>the spirit of the Bay.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Laying of carpet, vinyl and bespoke rugs in Arcachon and around the Bay. Belle Époque villas of Ville d&apos;Hiver, Le Moulleau boutique hotels, sea-salt restaurants, contemporary residences of Le Pyla. A workshop based near La Rochelle, regular travel in the Gironde.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=arcachon" variant="primary" size="md">Request a quote</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>We travel to you</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Arcachon is the Belle Époque meeting the beach house. Dressing a Ville d&apos;Hiver villa or a Le Pyla residence is exactly what CB Sols has done for over 28 years, with the same care for the heritage and the detail.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, owner of CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project type */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>For which kind of project</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Four settings, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>one and the same seaside demand.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A project in Arcachon?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              A site visit, a costed quote.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Direct contact with you or your interior architect. A visit organised within 2 to 3 weeks, a detailed quote within a week.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/en/contact?from=arcachon-cta1" variant="primary" size="md">Request a quote</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Arcachon specifics</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six requirements <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>specific to Bay projects.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Working in Arcachon is not reproducing a standard job. Here are the six points on which we structure our method from the first visit, to respect both the heritage and the seaside spirit.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materials and ranges for Arcachon</div>
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

      {/* Quote */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &ldquo;A Ville d&apos;Hiver villa is not handled like a seasonal let. We respect the parquet, we match the carpet to the woodwork, we lay a rug that lifts away without damage. The heritage detail, we see it from the first visit.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, owner of CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?from=arcachon-citation" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>A home visit on the Bay</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Partner makers</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Eight reference houses <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>for your Arcachon projects.</em>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Bay districts and towns</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Arcachon and the Bay, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from Le Pyla to Lanton.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Our team travels across the whole of Arcachon Bay, from the historic districts of the resort to the oyster-farming towns, where the high-end residential projects and the charming establishments are concentrated.
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
            Twenty minutes on the phone are enough to clarify the possible ranges, a realistic schedule and a budget order of magnitude for your Arcachon job.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=arcachon-cta2" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from Villedoux to Arcachon.</em>
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
            Floor covering in Arcachon, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>concrete answers.</em>
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
            Straight through to the owner. No hotline, no switchboard. Clear advice, an honest order of magnitude, a next step only if the project makes sense.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="See also"
        sectionSubtitle="Our know-how covers other worlds that may interest you. Take your time to browse, ask your questions, we will answer them."
        items={[
          { href: '/en/revetement-sol-cap-ferret', title: 'Floor covering Cap Ferret', teaser: 'Oyster cabins, feet-in-the-sand villas. The discretion of a know-how that barely shows.', icon: Waves },
          { href: '/en/revetement-sol-bordeaux', title: 'Floor covering Bordeaux', teaser: 'Townhouses, échoppe lofts, stone houses. Floors that dialogue with the architecture.', icon: MapPin },
          { href: '/en/revetement-sol-biarritz', title: 'Floor covering Biarritz', teaser: 'Basque Coast villas. Floors that resist the salt, the sand and the ocean light.', icon: MapPin },
          { href: '/en/revetement-sol-saint-emilion', title: 'Floor covering Saint-Émilion', teaser: 'Châteaux, wine cellars and master houses. Floors chosen for character and the patina of time.', icon: Castle },
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
            Your Arcachon project <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>in the right hands.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A site visit in Arcachon. A detailed quote, premium finishes, respect for the Belle Époque heritage and the contemporary seaside spirit. Over 28 years of CB Sols know-how at the service of the Bay.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=arcachon-final" variant="primary" size="md">Request a quote</Button>
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
