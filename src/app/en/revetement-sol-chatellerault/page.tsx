import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Home, Mail, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Floor Covering in Châtellerault | Free Quote within 48h',
  description: 'Laying of carpet, vinyl and bespoke rugs in Châtellerault. Offices and office premises, shops, practices, public bodies, old houses of the centre. CB Sols has worked in the trade for over 28 years, travel organised from Villedoux as a grouped visit then a set laying.',
  alternates: {
    canonical: 'https://cbsols.fr/en/revetement-sol-chatellerault',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-chatellerault', en: 'https://cbsols.fr/en/revetement-sol-chatellerault' },
  },
  keywords: ['floor covering Châtellerault', 'carpet Châtellerault', 'vinyl flooring Châtellerault', 'rug laying Châtellerault', 'flooring craftsman Châtellerault'],
  openGraph: {
    title: 'Floor covering in Châtellerault, the seriousness of the Châtelleraudais',
    description: 'Carpet, vinyl and bespoke rugs in Châtellerault. Offices, shops, practices, public bodies, houses of the centre. CB Sols, over 28 years of know-how.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-chatellerault.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Offices and office premises', desc: 'You run an office, a local head office or office spaces in Châtellerault. A careful floor enhances the image, and acoustic vinyl changes the daily comfort. We lay in off-peak hours, your teams find a ready space the next day. The measuring visit then the grouped laying keep the schedule.' },
  { title: 'Town-centre shops and boutiques', desc: 'You run a boutique or a shop near the pont Henri-IV or in a shopping street. We lay at night or on the closing day, you lose no trading day. A floor resistant to traffic, easy to maintain, and a look that shows off your products.' },
  { title: 'Practices and public bodies', desc: 'You receive the public in a practice, a firm or a public-body premises. Homogeneous vinyl and acoustic carpet, public-building compliant, laid cleanly. We choose the right products, we provide the certificates and fire reports, we dialogue with the inspection office. You have nothing to understand from the technical sheets.' },
  { title: 'Old houses of the centre to renovate', desc: 'You renovate an old house of the Châtellerault centre, on the banks of the Vienne or in the heritage district. The old parquet is precious. We lay a wool carpet or a bespoke rug without harming the wood, joins validated with you. We respect the character of the place.' },
]

const exigences = [
  { title: 'A grouped visit, then a set laying', desc: 'Châtellerault is a fair distance from our workshop, about two hours by the road. So we organise a measuring visit at the start of the project, then we come back to lay once the making is finished. You have no ten round trips to manage, just two clear appointments and a schedule kept.' },
  { title: 'An organisation built for the distance', desc: 'On a job two hours from the workshop, improvisation costs dear. So we prepare everything upfront: laser measuring at the visit, dry pre-assembly at Villedoux, materials set before departure. The team arrives on site with a precise plan, the laying is done in one go, with no idle time.' },
  { title: 'We work when you are not working', desc: 'On an office, a shop or a practice, we cannot cut the activity. So we come in the evening, at the weekend or on the closing day. You reopen the next morning, the floor laid and cleaned. No day of revenue lost.' },
  { title: 'Less noise, more calm', desc: 'In an open plan, a waiting room or a public-body premises, the noise tires everyone. A good carpet or an acoustic vinyl floor cuts half the hubbub. Conversations carry better, your visitors wait in calm. You feel it from the first day.' },
  { title: 'The standards, we handle them', desc: 'Practice, public body, premises open to the public: there are strict rules on fire safety and hygiene. We choose the right products for you, we provide the certificates, we dialogue with the inspection office. You have nothing to understand from the technical sheets.' },
  { title: 'A single contact, from start to finish', desc: 'On a job, you already have enough contractors to follow. We are a single name in your book. Quote, schedule, delivery, invoice: everything goes through the same person. You save time and you always know who to talk to.' },
]

const materiaux = [
  { name: 'Gerflor and Tarkett acoustic vinyl', desc: 'We lay a lot of it in the offices and office premises of Châtellerault. The underlay absorbs footstep noise, your teams work in calm. The colour choice is wide, we can line up with your identity. The floor lasts fifteen years easily, often twenty.' },
  { name: 'EGE and Forbo carpet tiles', desc: 'The right choice for an office, a practice or a public body. The tiles are 50×50 cm. If someone spills a coffee, we replace just the damaged tile. The acoustic underlay softens the room. You get fifteen to twenty years in classic office use.' },
  { name: 'Woven virgin-wool carpet', desc: 'For the lounges of the old houses of the Châtellerault centre. The wool takes a patina as it ages, it does not crush. To the touch it is firm, to the eye it stands out. We choose with you a plain or a discreet motif to respect the old woodwork.' },
  { name: 'Homogeneous vinyl for public bodies', desc: 'On corridors and premises open to the public, we go for homogeneous vinyl. It is the same material top to bottom, so no wear layer to break through. We heat-weld the sheets, water gets through nowhere. Twenty to twenty-eight years ahead of you, even with heavy traffic.' },
  { name: 'Wood-effect vinyl for shops', desc: 'For a boutique or a town-centre shop, wood-effect vinyl works wonders. The visual result is convincing, the floor resists traffic and cleans in five minutes. We can even lay it over underfloor heating. The laying is fast and clean.' },
  { name: 'Brushed brass and aluminium Romus profiles', desc: 'For the thresholds and stair nosings, we take care over the detail. We coordinate with your existing ironmongery, which counts on an old house. On slightly demanding jobs, we can have bespoke ones made. It is the kind of detail that shows on delivery.' },
]

const marques = [
  { name: 'Gerflor', desc: 'The Lyon-based French maker we know deeply. Their Mipolam and Taralay vinyls are our versatile reference on the offices and shops of Châtellerault. A wide choice, serious acoustics, simple upkeep.' },
  { name: 'Tarkett', desc: 'For offices and office spaces that call for real acoustic comfort, we go for Tarkett iQ Granit. It ages well and stays our reference on floors under regular traffic.' },
  { name: 'Forbo', desc: 'When the project calls for something natural, we look at Forbo. Their Marmoleum is a true linoleum made from linseed oil. The environmental certifications are solid, we bring them out often in public bodies and practices.' },
  { name: 'EGE Carpets', desc: 'The Danish weaver, our reference for a director\'s office that commands attention. Their tiles already have the acoustic underlay built in, which makes the laying easier. We recommend them for offices and meeting rooms.' },
  { name: 'objectflor', desc: 'For town-centre shops and boutiques, their wood-effect vinyl planks are a safe bet. The result is credible, the laying goes fast, and the resistance to traffic holds over time.' },
  { name: 'Bostik', desc: 'For adhesives and screeds, we work with Bostik. They are reliable products that guarantee a durable laying, especially on the old or irregular substrates of the centre\'s houses.' },
  { name: 'objectflor Expona', desc: 'When a shop wants a design floor that stands out without sacrificing resistance, their Expona ranges do the job. Wood, concrete or stone effect, the choice is wide and the result high-end.' },
  { name: 'Romus', desc: 'For the finishing accessories, profiles and stair nosings, Romus is our reference. From brushed brass to aluminium, we always find the finish that sits with your interior.' },
]

const quartiers = [
  { nom: 'Town centre', detail: 'Pont Henri-IV, the banks of the Vienne, shopping streets. Shops, practices, office premises and old houses of the centre to renovate.' },
  { nom: 'La Manu district', detail: 'A former arms manufactory turned cultural and office hub. Offices, reception spaces and activity premises to fit out.' },
  { nom: 'Châteauneuf', detail: 'The right bank of the Vienne, old and residential housing. Characterful houses and heritage renovation projects.' },
  { nom: 'Ozon', detail: 'A residential and services district. Co-ownerships, practices and family houses being modernised.' },
  { nom: 'Lac', detail: 'A residential sector near the lake. Developments, family houses and small office units.' },
  { nom: 'Northern industrial zone', detail: 'An industrial and office hub to the north of the town, an automotive and mechanical heritage. Corporate offices and reception spaces.' },
  { nom: 'Targé', detail: 'A residential district built into the town. Family houses, developments and local premises.' },
  { nom: 'Naintré', detail: 'A neighbouring town to the south, business zones and detached housing. Offices, shops and family houses.' },
  { nom: 'Cenon-sur-Vienne', detail: 'A bordering town on the banks of the Vienne. Residential housing and small retail units to fit out.' },
  { nom: 'Antran', detail: 'A village of the northern Châtelleraudais. Characterful houses, residential renovations and old housing.' },
  { nom: 'Availles-en-Châtellerault', detail: 'A residential town of the agglomeration. Developments, family houses and local premises.' },
  { nom: 'Vouneuil-sur-Vienne', detail: 'A heritage village on the banks of the Vienne. Old houses, renovation projects and residential housing.' },
]

const process = [
  { step: 'First contact', desc: 'A phone call or email. Gathering the key points: project type (office, shop, practice, public body, old house), estimated area, desired schedule, any public-building constraints. We frame the next steps together and set the visit date.' },
  { step: 'Visit to Châtellerault', desc: 'A visit organised from Villedoux, about 2h\' drive. Laser measuring, a survey of the access constraints, photos to coordinate colours and joins. Given the distance, we prepare a complete visit so as to come back only once, on the day of the grouped laying.' },
  { step: 'Material choice', desc: 'The Villedoux showroom or samples sent directly to Châtellerault, to your home or the office. Final validation under the laying venue\'s light. For public bodies and practices, transmission of the required technical sheets, fire reports and environmental certifications.' },
  { step: 'Workshop making', desc: '3 to 10 weeks by range: woven carpet, tiles, cut vinyl, bespoke rugs. Dry pre-assembly in the workshop to validate the fit before transport. This upfront preparation is what lets us keep a fast, grouped final laying in Châtellerault.' },
  { step: 'Laying in Châtellerault', desc: 'A team mobilised on site, accommodation included in the quote, a schedule set to your availability or the site window. A grouped laying to limit the trips, off-peak phasing possible for shops and offices in operation. A full clean on delivery.' },
]

const faq = [
  { q: 'Do you really come to Châtellerault from La Rochelle?', a: 'Yes. Châtellerault is about 160 km, around 2h by the road. Given the distance, we get organised: a complete measuring visit at the start of the project, then a grouped laying once the making is finished. We prepare everything upfront at the workshop so as to come back only once. Accommodation and travel are included in the quote. You have no series of round trips to coordinate, just two clear appointments.' },
  { q: 'How do you organise a job at that distance?', a: 'That is the whole point. Two hours from the workshop, we cannot afford to improvise. We take the laser measurements at the visit, we pre-assemble as much as possible dry at Villedoux, we set the materials before leaving. The team arrives in Châtellerault with a precise plan and lays in one go, with no idle time. This method, we have applied it for over 28 years on all our distant jobs.' },
  { q: 'Do you work on offices and office premises?', a: 'Yes, it is one of our natural grounds. Châtellerault concentrates office space, practices and premises inherited from its industrial past. It calls for a careful floor and clean work. We lay acoustic vinyl in the work spaces and carpet tiles in the offices. We come in off-peak hours, your teams find a ready space the next day.' },
  { q: 'Do you work on the town-centre shops?', a: 'Yes. For a boutique or a shop near the pont Henri-IV or in a shopping street, the floor must enhance your products and resist traffic. We lay at night or on the closing day, you lose no trading day. We protect the existing, we clean everything on delivery, and the next morning you reopen in a space ready to welcome your customers.' },
  { q: 'Do you work on public bodies and practices?', a: 'Of course. A public-body premises, a practice, a firm that receives the public fall under the public-building regulation. It needs fire-rated products that take intensive upkeep, with clear certificates. We choose the right products for you, we provide all the fire reports for the safety commission, and we plan the work so as not to disrupt the reception of the public.' },
  { q: 'Do you work on the old houses of the centre?', a: 'Of course. The centre of Châtellerault and the banks of the Vienne concentrate fine old houses, often with their original parquet. We work there reversibly whenever possible: we lay without nailing, without aggressive gluing. If you want to redo everything in ten years, the wood underneath will be intact. Wool carpets and bespoke rugs find their place there.' },
  { q: 'How long does a vinyl floor last on an office or a shop?', a: 'Allow fifteen to twenty years easily, sometimes more. A homogeneous vinyl ages well because it has no wear layer to break through, it is the same material top to bottom. On very busy zones such as a reception or a shop entrance, we take a class-34 rating, which tolerates traffic better. A professional clean once a year is enough to keep the first-day look.' },
]

export default function RevetementSolChatelleraultPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/revetement-sol-chatellerault#service',
        name: 'Floor covering in Châtellerault',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Châtellerault' },
          { '@type': 'AdministrativeArea', name: 'Vienne' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Laying of carpet, vinyl and bespoke rugs in Châtellerault and the Vienne',
        description: 'Design, workshop making and laying of carpet, vinyl and bespoke rugs for offices, office premises, shops, practices, public bodies and old houses in Châtellerault.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Floor covering in Châtellerault', item: 'https://cbsols.fr/en/revetement-sol-chatellerault' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="chatellerault" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Floor covering Châtellerault</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Floor covering in Châtellerault,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>the seriousness of the Châtelleraudais.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Laying of carpet, vinyl and bespoke rugs in Châtellerault. Offices and office premises, town-centre shops, practices and public bodies, old houses on the banks of the Vienne. A workshop based near La Rochelle, travel organised as a grouped visit then a set laying.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=chatellerault" variant="primary" size="md">Request a quote</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>We travel to you</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Châtellerault is two hours from the workshop. The distance is no fear when the organisation is square: a measuring visit, then a grouped laying. That is the method CB Sols has applied for over 28 years on its distant jobs.&rdquo;
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A project in Châtellerault?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              A site visit, a costed quote.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Direct contact with you, your establishment manager or your architect. A measuring visit organised and grouped, a detailed quote within 48 hours.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/en/contact?source=chatellerault-cta1" variant="primary" size="md">Request a quote</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Châtellerault specifics</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six requirements <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>specific to Châtellerault projects.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Working in Châtellerault, two hours from our workshop, is not reproducing a local job. Here are the six points on which we structure our method from the first visit, to keep the schedule and master the travel.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materials and ranges for Châtellerault</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            The product families <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>we bring to the Vienne.</em>
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
              &ldquo;An office, a public body, a shop, an old house on the banks of the Vienne: each has its constraints. We take them seriously from the first visit, and we keep the schedule we announce, even two hours away by road.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, owner of CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?source=chatellerault-citation" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>A site visit in Châtellerault</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Partner makers</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Eight reference houses <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>for your Châtellerault projects.</em>
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
            Châtellerault and the Châtelleraudais, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>out to the neighbouring towns.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Our team travels across Châtellerault and the whole of the Châtelleraudais, as well as the neighbouring towns, where the office, retail, public and residential projects are concentrated.
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
            Twenty minutes on the phone are enough to clarify the possible ranges, a realistic schedule and a budget order of magnitude for your Châtellerault job.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?source=chatellerault-cta2" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from Villedoux to Châtellerault.</em>
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
            Floor covering in Châtellerault, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>concrete answers.</em>
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
          { href: '/en/revetement-sol-poitiers', title: 'Floor covering Poitiers', teaser: 'Prefecture of the Vienne, office space and heritage. Our know-how in the heart of the Poitou.', icon: MapPin },
          { href: '/en/revetement-sol-niort', title: 'Floor covering Niort', teaser: 'Head offices, town houses, care homes. Our know-how in the heart of the Deux-Sèvres.', icon: MapPin },
          { href: '/en/services', title: 'Our services', teaser: 'Carpet, vinyl flooring, bespoke rugs, cleaning. Our whole trade at the service of your project.', icon: Building2 },
          { href: '/en/particuliers', title: 'For homeowners', teaser: 'Carpet, vinyl flooring, bespoke rugs: our know-how at the service of your home.', icon: Home },
          { href: '/en/realisations', title: 'Our projects', teaser: 'Discover our recent jobs in pictures. The result, the finishes, the detail that counts.', icon: Building2 },
          { href: '/en/contact', title: 'Contact us', teaser: 'A question, a project, a quote within 48 hours. The owner answers you directly.', icon: Mail },
        ]}
      />

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Your Châtellerault project <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>in the right hands.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A site visit in Châtellerault. A detailed quote within 48 hours, careful finishes, mastered travel and a schedule kept. CB Sols, over 28 years of know-how at the service of projects in the Vienne.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=chatellerault-final" variant="primary" size="md">Request a quote</Button>
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
