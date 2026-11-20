import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Castle, Home, Mail, MapPin, Stethoscope, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Floor Covering in La Roche-sur-Yon | Free Quote within 48h',
  description: 'Laying of carpet, vinyl and bespoke rugs in La Roche-sur-Yon. Offices and practices, town-centre shops, care homes and senior residences, bourgeois houses to renovate. CB Sols has worked in the trade for over 28 years, travel organised from Villedoux.',
  alternates: {
    canonical: 'https://cbsols.fr/en/revetement-sol-la-roche-sur-yon',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-la-roche-sur-yon', en: 'https://cbsols.fr/en/revetement-sol-la-roche-sur-yon', es: 'https://cbsols.fr/es/revetement-sol-la-roche-sur-yon', },
  },
  keywords: ['floor covering La Roche-sur-Yon', 'carpet La Roche-sur-Yon', 'vinyl flooring La Roche-sur-Yon', 'rug laying La Roche-sur-Yon', 'flooring craftsman La Roche-sur-Yon'],
  openGraph: {
    title: 'Floor covering in La Roche-sur-Yon, the seriousness of the prefecture',
    description: 'Carpet, vinyl and bespoke rugs in La Roche-sur-Yon. Offices, shops, care homes, bourgeois houses. CB Sols, over 28 years of know-how.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-la-roche-sur-yon.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Offices, practices and independent professions', desc: 'You receive your clients in a practice in the centre of La Roche-sur-Yon. A careful floor reassures from the waiting room. We lay acoustic vinyl in the work spaces and wool carpet in the offices where you receive. We come when you are not consulting.' },
  { title: 'Town-centre shops and boutiques', desc: 'You run a boutique near place Napoléon or in a shopping street. We lay at night or on the closing day, you lose no trading day. A floor resistant to traffic, easy to maintain, and a look that shows off your products.' },
  { title: 'Care homes and senior residences', desc: 'You run a care home or a medicalised residence in La Roche-sur-Yon. Homogeneous Bfl-s1 vinyl in the corridors, wool carpet in guest rooms, R10 non-slip in the bathrooms. We provide the fire reports and public-building documentation for the safety commission.' },
  { title: 'Bourgeois and town houses to renovate', desc: 'You renovate a bourgeois house in the Napoleon-era centre, often on the town\'s pentagonal plan. The old parquet is precious. We lay a wool carpet or a bespoke rug without harming the wood, joins validated with you. We respect the character of the place.' },
]

const exigences = [
  { title: 'A grouped visit, then a set laying', desc: 'La Roche-sur-Yon is a fair distance from our workshop. So we organise a measuring visit at the start of the project, then we come back to lay once the making is finished. You have no ten round trips to manage, just two clear appointments and a schedule kept.' },
  { title: 'We work when you are not working', desc: 'On an office, a practice or a shop, we cannot cut the activity. So we come in the evening, at the weekend or on the closing day. You reopen the next morning, the floor laid and cleaned. No day of revenue lost.' },
  { title: 'Less noise, more calm', desc: 'In an open plan, a waiting room or a practice, the noise tires everyone. A good carpet or an acoustic vinyl floor cuts half the hubbub. Conversations carry better, your clients wait in calm. You feel it from the first day.' },
  { title: 'We respect the old parquet', desc: 'Many bourgeois houses of the La Roche-sur-Yon centre have kept their original parquet. We lay without nailing, without aggressive gluing. If you want to remove the carpet in ten years, the wood underneath will be intact. That is what respecting a fine house means.' },
  { title: 'The standards, we handle them', desc: 'Care home, practice, residence, office open to the public: there are strict rules on fire safety and hygiene. We choose the right products for you, we provide the certificates, we dialogue with the inspection office. You have nothing to understand from the technical sheets.' },
  { title: 'A single contact, from start to finish', desc: 'On a job, you already have enough contractors to follow. We are a single name in your book. Quote, schedule, delivery, invoice: everything goes through the same person. You save time and you always know who to talk to.' },
]

const materiaux = [
  { name: 'Gerflor and Tarkett acoustic vinyl', desc: 'We lay a lot of it in the offices and practices of La Roche-sur-Yon. The underlay absorbs footstep noise, your clients wait in calm. The colour choice is wide, we can line up with your identity. The floor lasts fifteen years easily, often twenty.' },
  { name: 'EGE and Forbo carpet tiles', desc: 'The right choice for a practice, an administration or a director\'s office. The tiles are 50×50 cm. If someone spills a coffee, we replace just the damaged tile. The acoustic underlay softens the room. You get fifteen to twenty years in classic office use.' },
  { name: 'Woven virgin-wool carpet', desc: 'For the lounges of the bourgeois houses of the La Roche-sur-Yon centre. The wool takes a patina as it ages, it does not crush. To the touch it is firm, to the eye it stands out. We choose with you a plain or a discreet motif to respect the old woodwork.' },
  { name: 'Homogeneous vinyl for care homes', desc: 'On care-home corridors and rooms, we go for homogeneous vinyl. It is the same material top to bottom, so no wear layer to break through. We heat-weld the sheets, water gets through nowhere. Twenty to twenty-eight years ahead of you, even with heavy traffic.' },
  { name: 'Wood-effect vinyl for shops', desc: 'For a boutique or a town-centre shop, wood-effect vinyl works wonders. The visual result is convincing, the floor resists traffic and cleans in five minutes. We can even lay it over underfloor heating. The laying is fast and clean.' },
  { name: 'Brushed brass and aluminium Romus profiles', desc: 'For the thresholds and stair nosings, we take care over the detail. We coordinate with your existing ironmongery, which counts on an old house. On slightly demanding jobs, we can have bespoke ones made. It is the kind of detail that shows on delivery.' },
]

const marques = [
  { name: 'Gerflor', desc: 'The Lyon-based French maker we know deeply. Their Mipolam and Taralay vinyls are our versatile reference on the offices and shops of La Roche-sur-Yon. A wide choice, serious acoustics, simple upkeep.' },
  { name: 'Tarkett', desc: 'For practices and office spaces that call for real acoustic comfort, we go for Tarkett iQ Granit. It ages well and stays our reference on floors under regular traffic.' },
  { name: 'Forbo', desc: 'When the project calls for something natural, we look at Forbo. Their Marmoleum is a true linoleum made from linseed oil. The environmental certifications are solid, we bring them out often in care homes and practices.' },
  { name: 'EGE Carpets', desc: 'The Danish weaver, our reference for a director\'s office that commands attention. Their tiles already have the acoustic underlay built in, which makes the laying easier. We recommend them for practices and meeting rooms.' },
  { name: 'objectflor', desc: 'For town-centre shops and boutiques, their wood-effect vinyl planks are a safe bet. The result is credible, the laying goes fast, and the resistance to traffic holds over time.' },
  { name: 'Bostik', desc: 'For adhesives and screeds, we work with Bostik. They are reliable products that guarantee a durable laying, especially on the old or irregular substrates of bourgeois houses.' },
  { name: 'objectflor Expona', desc: 'When a shop wants a design floor that stands out without sacrificing resistance, their Expona ranges do the job. Wood, concrete or stone effect, the choice is wide and the result high-end.' },
  { name: 'Romus', desc: 'For the finishing accessories, profiles and stair nosings, Romus is our reference. From brushed brass to aluminium, we always find the finish that sits with your interior.' },
]

const quartiers = [
  { nom: 'Town centre', detail: 'Place Napoléon, the pentagonal plan, shopping streets. Shops, independent-profession practices, administrations and bourgeois houses to renovate.' },
  { nom: 'Station district', detail: 'An office and interchange hub, offices and independent professions. Work spaces and reception premises to fit out.' },
  { nom: 'Les Pyramides', detail: 'A residential and services district. Practices, co-ownerships and family houses being modernised.' },
  { nom: 'Le Bourg-sous-La-Roche', detail: 'A former village merged into the town, traditional and residential housing. Characterful houses and renovation projects.' },
  { nom: 'Acti-Sud business park', detail: 'An office and industrial hub to the south of the town. Corporate offices, meeting rooms and reception spaces.' },
  { nom: 'Vigne-aux-Roses district', detail: 'A residential and services sector. Developments, family houses and small office units.' },
  { nom: 'Aubépin', detail: 'A residential, local district. Co-ownerships, practices and detached houses to modernise.' },
  { nom: 'Mouilleron-le-Captif', detail: 'A booming neighbouring town, business zones and recent housing. Offices, shops and contemporary residences.' },
  { nom: 'La Roche-sur-Yon north', detail: 'Residential districts and recent developments. A homeowner clientele attached to careful finishes.' },
  { nom: 'Dompierre-sur-Yon', detail: 'A bordering town, detached housing and small office units. Practices and family houses.' },
  { nom: 'Aizenay', detail: 'A dynamic town to the north-west of the agglomeration. Shops, practices and characterful houses to renovate.' },
  { nom: 'La Ferrière', detail: 'A residential town of the La Roche-sur-Yon agglomeration. Developments, family houses and business premises.' },
]

const process = [
  { step: 'First contact', desc: 'A phone call or email. Gathering the key points: project type (office, shop, care home, bourgeois house), estimated area, desired schedule, any public-building constraints. We frame the next steps together and set the visit date.' },
  { step: 'Visit to La Roche-sur-Yon', desc: 'A visit organised from Villedoux, about 1h45\' drive. Laser measuring, a survey of the access constraints, photos to coordinate colours and joins. For shops and practices, we identify the off-peak work windows.' },
  { step: 'Material choice', desc: 'The Villedoux showroom or samples sent directly to La Roche-sur-Yon, to your home or the practice. Final validation under the laying venue\'s light. For care homes, transmission of the required technical sheets, fire reports and environmental certifications.' },
  { step: 'Workshop making', desc: '3 to 10 weeks by range: woven carpet, tiles, cut vinyl, bespoke rugs. Dry pre-assembly in the workshop to validate the fit before transport. This upfront preparation is what lets us keep a fast, careful final laying in La Roche-sur-Yon.' },
  { step: 'Laying in La Roche-sur-Yon', desc: 'A team mobilised on site, accommodation included in the quote, a schedule set to your availability or the site window. Off-peak phasing possible for shops and practices in operation. A full clean on delivery.' },
]

const faq = [
  { q: 'Do you really come to La Roche-sur-Yon from La Rochelle?', a: 'Yes. La Roche-sur-Yon is about 140 km, around 1h45 by the road. We organise the measuring visit at the start of the project, then we come back to lay once the making is finished. Accommodation and travel are included in the quote. On larger jobs, the team stays on site until delivery. You have no series of round trips to coordinate, just two clear appointments.' },
  { q: 'Do you work on the offices and practices of the prefecture?', a: 'Yes, it is one of our natural grounds. La Roche-sur-Yon concentrates administrations, independent-profession practices and corporate offices. It calls for a careful floor and clean work. We lay acoustic vinyl in the work spaces and wool carpet where you receive. We come when you are not consulting, you reopen the next day in a neat setting.' },
  { q: 'How does it work on a care home on the public-building side?', a: 'Care homes fall under the type-J public-building regulation. It needs Bfl-s1 or Cfl-s1 by zone, products that take bio-cleaning, clear maintenance sheets. We choose the right products for you. We provide all the fire reports and certificates for the safety commission. And we plan zone by zone so as not to disrupt the residents\' lives.' },
  { q: 'Do you work on the bourgeois houses of the centre?', a: 'Of course. The centre of La Roche-sur-Yon, a Napoleon-era town on a pentagonal plan, concentrates fine bourgeois houses, often with their original parquet. We work there reversibly whenever possible: we lay without nailing, without aggressive gluing. If you want to redo everything in ten years, the wood underneath will be intact. Wool carpets and bespoke rugs find their place there.' },
  { q: 'Do you work on the town-centre shops?', a: 'Yes. For a boutique or a shop, the floor must enhance your products and resist traffic. We lay at night or on the closing day, you lose no trading day. We protect the existing, we clean everything on delivery, and the next morning you reopen in a space ready to welcome your customers.' },
  { q: 'How long does a vinyl floor last on an office or a shop?', a: 'Allow fifteen to twenty years easily, sometimes more. A homogeneous vinyl ages well because it has no wear layer to break through, it is the same material top to bottom. On very busy zones such as a reception or a shop entrance, we take a class-34 rating, which tolerates traffic better. A professional clean once a year is enough to keep the first-day look.' },
  { q: 'Can you lay in off-peak hours on an office or a shop in operation?', a: 'Yes, it is even the norm on this kind of job. We organise the work in the evening, at the weekend or on the closing day, by your rhythm. We pre-assemble as much as possible at the Villedoux workshop, so the on-site laying goes fast. We protect your furniture and workstations before starting. The next day, you start again as normal, the floor laid and cleaned.' },
]

export default function RevetementSolLaRocheSurYonPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/revetement-sol-la-roche-sur-yon#service',
        name: 'Floor covering in La Roche-sur-Yon',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'La Roche-sur-Yon' },
          { '@type': 'AdministrativeArea', name: 'Vendée' },
          { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
        ],
        serviceType: 'Laying of carpet, vinyl and bespoke rugs in La Roche-sur-Yon and the Vendée',
        description: 'Design, workshop making and laying of carpet, vinyl and bespoke rugs for offices, practices, shops, care homes and bourgeois houses in La Roche-sur-Yon.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Floor covering in La Roche-sur-Yon', item: 'https://cbsols.fr/en/revetement-sol-la-roche-sur-yon' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="la-roche-sur-yon" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Floor covering La Roche-sur-Yon</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Floor covering in La Roche-sur-Yon,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>the seriousness of the prefecture.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Laying of carpet, vinyl and bespoke rugs in La Roche-sur-Yon. Offices and independent-profession practices, town-centre shops, care homes and senior residences, bourgeois houses to renovate. A workshop based near La Rochelle, travel organised as a grouped visit then a set laying.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=la-roche-sur-yon" variant="primary" size="md">Request a quote</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>We travel to you</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;La Roche-sur-Yon is a town of offices, practices and administrations. We come with a simple method: a measuring visit, then a grouped laying. The travel is mastered and the schedule kept, as CB Sols has done for over 28 years.&rdquo;
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
            Four settings, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>one and the same rigour of execution.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A project in La Roche-sur-Yon?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              A site visit, a costed quote.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Direct contact with you, your establishment manager or your architect. A measuring visit organised quickly, a detailed quote within 48 hours.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/en/contact?source=la-roche-sur-yon-cta1" variant="primary" size="md">Request a quote</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>La Roche-sur-Yon specifics</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six requirements <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>specific to La Roche-sur-Yon projects.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Working in La Roche-sur-Yon is not reproducing a standard job. Here are the six points on which we structure our method from the first visit, to keep the schedule and master the travel.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materials and ranges for La Roche-sur-Yon</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            The product families <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>we bring to the Vendée.</em>
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
              &ldquo;A practice, an administration, a care home, a bourgeois house of the centre: each has its constraints. We take them seriously from the first visit, and we keep the schedule we announce.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, owner of CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?source=la-roche-sur-yon-citation" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>A site visit in La Roche-sur-Yon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Partner makers</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Eight reference houses <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>for your La Roche-sur-Yon projects.</em>
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
            La Roche-sur-Yon and its agglomeration, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>out to the neighbouring towns.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Our team travels across La Roche-sur-Yon and the whole of its agglomeration, as well as the neighbouring towns, where the office, retail, health-and-social and residential projects are concentrated.
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
            Twenty minutes on the phone are enough to clarify the possible ranges, a realistic schedule and a budget order of magnitude for your La Roche-sur-Yon job.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?source=la-roche-sur-yon-cta2" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from Villedoux to La Roche-sur-Yon.</em>
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
            Floor covering in La Roche-sur-Yon, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>concrete answers.</em>
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
            Straight through to the owner. No hotline, no switchboard. Clear advice, an honest order of magnitude, a next step only if the project makes sense for you as for us.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="See also"
        sectionSubtitle="Our know-how covers other towns and worlds that may interest you. Take your time to browse, ask your questions, we will answer them."
        items={[
          { href: '/en/ile-de-re', title: 'Île de Ré', teaser: 'Village houses and coastal villas. Floors that take the salt, the sand and daily life.', icon: MapPin },
          { href: '/en/revetement-sol-cap-ferret', title: 'Floor covering Cap Ferret', teaser: 'Arcachon Bay villas. Floors that resist the salt, the sand and the ocean light.', icon: MapPin },
          { href: '/en/particuliers', title: 'For homeowners', teaser: 'Carpet, vinyl flooring, bespoke rugs: our know-how at the service of your home.', icon: Home },
          { href: '/en/secteurs', title: 'Our sectors', teaser: 'Offices, healthcare, hospitality, retail. Solutions designed for each type of establishment.', icon: Castle },
          { href: '/en/realisations', title: 'Our projects', teaser: 'Discover our recent jobs in pictures. The result, the finishes, the detail that counts.', icon: Store },
          { href: '/en/contact', title: 'Contact us', teaser: 'A question, a project, a quote within 48 hours. The owner answers you directly.', icon: Mail },
        ]}
      />

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Your La Roche-sur-Yon project <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>in the right hands.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A site visit in La Roche-sur-Yon. A detailed quote within 48 hours, careful finishes, mastered travel and a schedule kept. CB Sols, over 28 years of know-how at the service of projects in the Vendée.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=la-roche-sur-yon-final" variant="primary" size="md">Request a quote</Button>
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
