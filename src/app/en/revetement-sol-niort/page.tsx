import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Castle, Home, Mail, MapPin, Pill, Stethoscope, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Floor Covering Niort | Carpet, Vinyl, Bespoke Rugs',
  description: 'Laying of carpet, vinyl and bespoke rugs in Niort. Historic-centre townhouses, head offices and large office floors, market-hall restaurants, care homes. CB Sols has worked in the trade for over 28 years, regular travel from Villedoux.',
  alternates: {
    canonical: 'https://cbsols.fr/en/revetement-sol-niort',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-niort', en: 'https://cbsols.fr/en/revetement-sol-niort' },
  },
  keywords: ['floor covering Niort', 'carpet Niort', 'vinyl flooring Niort', 'rug laying Niort', 'flooring craftsman Niort', 'mutual-insurer office vinyl Niort'],
  openGraph: {
    title: 'Floor covering in Niort, the seriousness of the Deux-Sèvres',
    description: 'Carpet, vinyl and bespoke rugs in Niort. Mutual insurers, townhouses, restaurants, care homes. CB Sols, over 28 years of know-how.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-niort.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Historic-centre townhouses', desc: 'You have a bourgeois house towards Notre-Dame or La Brèche. Woven wool carpet, a hand-sewn rug, joins on the old parquet validated with you. We respect the character of the place without overdoing it.' },
  { title: 'Head offices and office floors', desc: 'You run a large office floor in Niort. Acoustic vinyl in the open plans, carpet tiles on the management side, wool carpet in the boardroom. We phase it with your general services.' },
  { title: 'Market-hall and centre restaurants', desc: 'You run a table near the market halls or place du Temple. We come at night or on the closing day, you lose no service. A dense anti-stain carpet and careful acoustics for conversation.' },
  { title: 'Care homes and senior residences', desc: 'You run a care home or a medicalised residence. Homogeneous Bfl-s1 vinyl in the corridors, wool carpet in guest rooms, R10 non-slip in the bathrooms. Public-building documentation and fire reports provided for the commission.' },
]

const exigences = [
  { title: 'Working when you are not working', desc: 'On large office floors, we cannot cut the activity. So we come in the evening and at the weekend. You arrive on Monday morning, the floor is laid, the furniture is in place. Not a day lost for your teams.' },
  { title: 'Less noise, more calm', desc: 'In an open plan, the ambient noise tires everyone. A good carpet or an acoustic vinyl floor cuts half the hubbub. Conversations carry better, concentration returns. Your teams feel it from the first day.' },
  { title: 'We respect the old parquet', desc: 'Many Niort townhouses have kept their original parquet. We lay without nailing, without aggressive gluing. If you want to remove the carpet in ten years, the parquet underneath will be intact. That is what respecting a fine house means.' },
  { title: 'One hour\'s drive, and we are at your place', desc: 'Niort is 80 km from our workshop, one hour via the N11. It is very close. We pass through several times a month, we know the local jobs. You call, we come to measure within the week.' },
  { title: 'The standards, we handle them', desc: 'Care home, clinic, school: there are strict rules on fire safety and hygiene. We choose the right products for you, we provide the certificates, we dialogue with the inspection office. You have nothing to understand from the technical sheets.' },
  { title: 'A single contact, from start to finish', desc: 'On a large job, you already have ten contractors to manage. We are a single name in your book. Quote, schedule, delivery, invoice: everything goes through the same person. You save time.' },
]

const materiaux = [
  { name: 'Gerflor and Tarkett acoustic vinyl', desc: 'We lay a lot of it on large office floors. The underlay absorbs footstep and castor noise, your teams work in calm. A wide colour choice, we can line up with your brand palette. The floor lasts fifteen years easily, often twenty.' },
  { name: 'EGE and Forbo carpet tiles', desc: 'The right choice for a director\'s office or a boardroom. The tiles are 50×50 cm. If someone spills their coffee, we replace just the damaged tile. The acoustic underlay softens the room. You get fifteen to twenty years in a classic office.' },
  { name: 'Woven virgin-wool Wilton carpet', desc: 'For the reception rooms of the historic-centre townhouses. The wool takes a patina as it ages, it does not crush. To the touch it is firm, to the eye it stands out. We choose with you a plain or a discreet geometric motif to respect the woodwork.' },
  { name: 'Homogeneous vinyl for care homes', desc: 'On care-home corridors and rooms, we go for homogeneous vinyl. It is the same material top to bottom, so no wear layer to break through. We heat-weld the sheets, water gets through nowhere. Twenty to twenty-eight years ahead of you, even with heavy traffic.' },
  { name: 'Bespoke rugs for directors\' offices', desc: 'When you want to set the tone from the entrance of a presidency office, the bespoke rug does the job. Virgin wool, a hand-sewn border, dimensions to the centimetre. We can reproduce a house motif or stay with a ceremonial plain. Allow eight to fourteen weeks.' },
  { name: 'Brushed brass and aluminium Romus profiles', desc: 'For the thresholds and stair nosings, we take care over the detail. We coordinate with your existing ironmongery, which counts on a historic building. On slightly demanding office jobs, we can have bespoke ones made. It is the kind of detail that shows on delivery.' },
]

const marques = [
  { name: 'Gerflor', desc: 'The Lyon-based French maker we know deeply. Their Mipolam and Taralay vinyls are our versatile reference on large office floors. A wide choice, serious acoustics, simple upkeep.' },
  { name: 'Tarkett', desc: 'For open plans that call for real acoustic comfort, we go for Tarkett iQ Granit. It ages well and stays our reference on the high-end office floors of Niort.' },
  { name: 'Forbo', desc: 'When the project calls for something natural, we look at Forbo. Their Marmoleum is a true linoleum made from linseed oil. The environmental certifications are solid, we bring them out often in care homes.' },
  { name: 'EGE Carpets', desc: 'The Danish weaver, our reference for a director\'s office that commands attention. Their tiles already have the acoustic underlay built in, which makes the laying easier. We recommend them for boardrooms.' },
  { name: 'Brintons', desc: 'The British Axminster, the aristocracy of carpet. When you want a reception room in a centre townhouse, we call Brintons. The personalisable motif changes everything.' },
  { name: 'Object Carpet', desc: 'The Germans, for contemporary design. When a business office wants to step outside the classic codes and make a statement, their ranges do the job.' },
  { name: 'Bolon', desc: 'The Swedish flocked-vinyl floors are design that holds. We lay them in the halls of head offices and in some restaurants where the look counts as much as the resistance.' },
  { name: 'Polyflor', desc: 'The British maker, for the health-and-social sector. R10 or R11 slip resistance by zone, resistance to disinfection products. We bring them out in care homes and clinics without hesitation.' },
]

const quartiers = [
  { nom: 'Historic centre', detail: 'The keep, Notre-Dame, the listed market halls, place de la Brèche, rue Victor-Hugo. Townhouses, 19th-century bourgeois buildings, characterful restaurants and boutiques.' },
  { nom: 'Saint-Liguaire', detail: 'A southern district with a detached-housing and office mix. Independent-profession practices, bourgeois co-ownerships, high-end residential projects.' },
  { nom: 'Souché', detail: 'A north-east residential and commercial district. Family houses, private school facilities, medical practices.' },
  { nom: 'Sainte-Pezenne', detail: 'A green residential district, family villas and recent co-ownerships. A residential clientele attached to quality of execution and careful finishes.' },
  { nom: 'Le Clou Bouchet', detail: 'A district in urban renewal, new builds and collective facilities. Vinyl flooring for authorities, co-ownership halls and common areas.' },
  { nom: 'Bessines', detail: 'A bordering town to the south, a business zone and developing office floors. Head offices and office logistics platforms.' },
  { nom: 'Chauray', detail: 'The heart of the office hub with head offices and major office buildings. Open plans, boardrooms, directors\' offices of the big mutual insurers.' },
  { nom: 'Magné', detail: 'The gateway to the Marais Poitevin, a residential and tourism mix. Country houses, charming guest lodges, gastronomic restaurants of the "Green Venice".' },
  { nom: 'Coulon (Marais Poitevin)', detail: 'The capital of the Marais Poitevin, boutique hotels, gastronomic restaurants, renovated boatman\'s houses. Characterful residential projects and high-end tourist accommodation.' },
  { nom: 'Frontenay-Rohan-Rohan', detail: 'A historic town to the south-west of Niort, a château and old houses. Heritage residential projects and old-building restoration.' },
  { nom: 'Aiffres', detail: 'A residential town to the south, recent developments and family houses. A homeowner clientele attached to quality finishes and personalised advice.' },
  { nom: 'Vouillé', detail: 'A bordering town to the south, a detached-housing and business-zone mix. Independent-profession practices and small office units.' },
]

const process = [
  { step: 'First contact', desc: 'A phone call or email. Gathering the key points: project type (office, townhouse, care home, restaurant), estimated area, desired schedule, any public-building constraints. For office tenders, we collect the complete tender documents.' },
  { step: 'Visit to Niort', desc: 'A visit organised within 1 to 2 weeks from Villedoux. Laser measuring, a survey of the access constraints, photos to coordinate colours and joins. For office floors, identification of the possible off-peak work phases.' },
  { step: 'Material choice', desc: 'The Villedoux showroom or samples sent directly to Niort, to the client\'s head office or the architect. Final validation under the laying venue\'s light. For the mutual insurers, transmission of the required technical sheets, fire reports and environmental certifications.' },
  { step: 'Workshop making', desc: '3 to 10 weeks by range: custom Axminster carpet, Wilton, tiles, cut vinyl. Dry pre-assembly in the workshop to validate the fit before transport. This upfront preparation is what lets us keep a fast, careful final laying in Niort.' },
  { step: 'Laying in Niort', desc: 'A team mobilised on site, accommodation included in the quote, a schedule set to your availability or the site window. Coordination with general services or the concierge. Off-peak phasing possible for head offices in operation. A full clean on delivery.' },
]

const faq = [
  { q: 'Do you really come to Niort from La Rochelle?', a: 'Yes, and often. Niort is 80 km away, one hour via the N11. It is very close. We pass through several times a month, we know the local jobs. We organise the measuring visit at the start of the project, then we come back to lay at the end. Accommodation and travel are included in the quote. On large jobs, the team stays on site until delivery.' },
  { q: 'Do you work on the big head offices of the business hub?', a: 'Yes, it is even one of our natural grounds. General services have precise requirements: a formal tender, complete technical sheets, fire reports, a firm schedule with off-peak phasing. We are equipped for it: an up-to-date tender file, complete material documentation, a well-oiled site process. We dialogue directly with your facility manager.' },
  { q: 'Do you work in the townhouses of the centre?', a: 'Of course. The Niort centre around the keep and La Brèche concentrates magnificent 19th-century buildings. We work there with your interior architect, and whenever possible we lay reversibly. If you want to redo everything in ten years, the parquet underneath will be intact. Bespoke rugs and woven wool carpets find their natural setting there.' },
  { q: 'How does it work on a care home on the public-building side?', a: 'Care homes fall under the type-J public-building regulation. It needs Bfl-s1 or Cfl-s1 by zone, products that take bio-cleaning, clear maintenance sheets. We choose the right products for you. We provide all the fire reports and certificates for the safety commission. And we plan zone by zone so as not to disrupt the residents\' lives.' },
  { q: 'Do you work on the restaurants of the centre?', a: 'Yes. The acoustics make all the difference at the table, and a wool carpet on a felt underlay cuts half the reverberation. Your guests have a better evening. We lay at night or on the closing day, you lose no service. We protect the kitchens, we clean everything, in the morning the room is ready.' },
  { q: 'How long does a vinyl floor last on an office floor?', a: 'Allow fifteen to twenty years easily, sometimes more. A homogeneous vinyl ages well because it has no wear layer to break through, it is the same material top to bottom. On very busy zones (reception, corridors), we take a class-34 rating, which tolerates castors better. A professional clean once a year is enough to keep the first-day look.' },
  { q: 'Can you lay in off-peak hours on a head office in operation?', a: 'Yes, it is even the norm. We organise the work in the evening or at the weekend by the phasing set with your general services. We pre-assemble as much as possible at the Villedoux workshop, so the on-site laying goes fast. We protect your workstations and IT furniture before starting. On Monday morning, your teams start again as normal, the floor laid and cleaned.' },
]

export default function RevetementSolNiortPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/revetement-sol-niort#service',
        name: 'Floor covering in Niort',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Niort' },
          { '@type': 'AdministrativeArea', name: 'Deux-Sèvres' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Laying of carpet, vinyl and bespoke rugs in Niort and the Deux-Sèvres',
        description: 'Design, workshop making and laying of carpet, vinyl and bespoke rugs for mutual-insurer head offices, townhouses, restaurants, care homes and office establishments in Niort.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Floor covering in Niort', item: 'https://cbsols.fr/en/revetement-sol-niort' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="niort" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Floor covering Niort</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Floor covering in Niort,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>the seriousness of the Deux-Sèvres.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Laying of carpet, vinyl and bespoke rugs in Niort. Large head offices and office floors, historic-centre townhouses, market-hall restaurants, care homes and medicalised residences. A workshop based near La Rochelle, travel to Niort organised each month.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=niort" variant="primary" size="md">Request a quote</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>We travel to you</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Niort is serious ground. The general services of the mutual insurers do not joke about technical sheets and deadlines. CB Sols has had the documentation, the method and the team to meet these standards for over 28 years.&rdquo;
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A project in Niort?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              A site visit, a costed quote.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Direct contact with the general services, the facility manager or with you. A visit organised within 1 to 2 weeks, a detailed quote within a week.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/en/contact?source=niort-cta1" variant="primary" size="md">Request a quote</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Niort specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Niort specifics</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six requirements <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>specific to Niort projects.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Working in Niort is not reproducing a standard job. Here are the six points on which we structure our method from the first visit, to meet the office requirements and keep the schedule.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materials and ranges for Niort</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            The product families <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>we bring to the Deux-Sèvres.</em>
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
              &ldquo;An office floor in Niort is precisely what CB Sols knows how to do. The documentation, the phasing, respecting the operating hours, and the impeccable finish at daybreak.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, owner of CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?source=niort-citation" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>A site visit in Niort</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Partner makers</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Eight reference houses <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>for your Niort projects.</em>
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
            Niort and its agglomeration, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>out to the Marais Poitevin.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Our team travels across the whole of the Niort agglomeration as well as the bordering towns, where the heritage residential, office and health-and-social projects are concentrated.
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
            Twenty minutes on the phone are enough to clarify the possible ranges, a realistic schedule and a budget order of magnitude for your Niort job.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?source=niort-cta2" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from Villedoux to Niort.</em>
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
            Floor covering in Niort, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>concrete answers.</em>
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
        sectionSubtitle="Our know-how covers other worlds that may interest you. Take your time to browse, ask your questions, we will answer them."
        items={[
          { href: '/en/revetement-sol-bordeaux', title: 'Floor covering Bordeaux', teaser: 'Townhouses, échoppe lofts, stone houses. Floors that dialogue with the architecture.', icon: MapPin },
          { href: '/en/revetement-sol-saint-emilion', title: 'Floor covering Saint-Émilion', teaser: 'Châteaux, wine cellars and master houses. Floors chosen for character and the patina of time.', icon: Castle },
          { href: '/en/sol-pvc-cabinet-medical', title: 'Medical-practice vinyl flooring', teaser: 'A floor that reassures your patients from the waiting room and makes your daily cleaning easier.', icon: Stethoscope },
          { href: '/en/sol-pvc-pharmacie', title: 'Pharmacy vinyl flooring', teaser: 'Daily hygiene, health-authority compliance, night laying. Twenty years of wear in a pharmacy that never closes.', icon: Pill },
          { href: '/en/architectes', title: 'For architects', teaser: 'Material documentation, annotated samples, detailed quotes. Our role is to serve your vision.', icon: Building2 },
          { href: '/en/particuliers', title: 'For homeowners', teaser: 'Carpet, vinyl flooring, bespoke rugs: our know-how at the service of your home.', icon: Home },
          { href: '/en/showroom', title: 'Villedoux showroom', teaser: 'Come to see and touch the materials. By appointment, in Villedoux near La Rochelle.', icon: Store },
          { href: '/en/contact', title: 'Contact us', teaser: 'A question, a project, a quote within 48 hours. The owner answers you directly.', icon: Mail },
        ]}
      />

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Your Niort project <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>in the right hands.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A site visit in Niort. A detailed quote, premium finishes, respect for the office and heritage constraints. CB Sols, over 28 years of know-how at the service of exceptional projects in the Deux-Sèvres.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=niort-final" variant="primary" size="md">Request a quote</Button>
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
