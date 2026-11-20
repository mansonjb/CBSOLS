import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Castle, Home, Mail, MapPin, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Floor Covering in Thouars | Free Quote within 48h',
  description: 'Laying of carpet, vinyl and bespoke rugs in Thouars. Characterful houses, shops, practices, public bodies, care homes. CB Sols has worked in the trade for over 28 years with mastered travel: a measuring visit then a grouped laying from Villedoux.',
  alternates: {
    canonical: 'https://cbsols.fr/en/revetement-sol-thouars',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-thouars', en: 'https://cbsols.fr/en/revetement-sol-thouars', es: 'https://cbsols.fr/es/revetement-sol-thouars', },
  },
  keywords: ['floor covering Thouars', 'carpet Thouars', 'vinyl flooring Thouars', 'rug laying Thouars', 'flooring craftsman Thouars'],
  openGraph: {
    title: 'Floor covering in Thouars, care for heritage',
    description: 'Carpet, vinyl and bespoke rugs in Thouars. A town of art and history, characterful houses, shops, public bodies, care homes. CB Sols, over 28 years of know-how.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-thouars.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Characterful houses and heritage', desc: 'You live in a characterful house near the château of the Dukes of La Trémoïlle, above the Thouet. The fabric deserves respect. We lay a wool carpet or a bespoke rug reversibly, without harming the old floors. We respect the character of the place without overdoing it.' },
  { title: 'Town-centre shops and boutiques', desc: 'You run a shop in this town of art and history. We lay at night or on the closing day, you lose no trading day. A floor resistant to traffic, easy to maintain, and a look that shows off your boutique in a heritage setting.' },
  { title: 'Practices, public bodies and services', desc: 'You receive the public in a practice, a town hall, a municipal building. We choose floors compliant with public-building requirements, we provide the fire reports and documentation, we phase the works so as not to disrupt the reception. A single contact from quote to delivery.' },
  { title: 'Care homes and senior residences', desc: 'You run a care home or a medicalised residence in Thouars. Homogeneous Bfl-s1 vinyl in the corridors, wool carpet in guest rooms, R10 non-slip in the bathrooms. We provide the public-building documentation and the fire reports for the safety commission.' },
]

const exigences = [
  { title: 'Travel organised, never improvised', desc: 'Thouars is about two hours from our workshop. We do not make the round trip lightly. We organise a measuring visit at the start of the project, then we come back to lay once the making is finished. The travel is mastered, the schedule announced, and everything is included in the quote.' },
  { title: 'A measuring visit, then a grouped laying', desc: 'Given the distance, we group the work. The visit serves to settle everything: measurements, substrates, colours, access. The laying is then done in one go, the team staying on site until delivery. You have no series of visits to coordinate, just two clear high points.' },
  { title: 'We respect the fabric and the old floors', desc: 'Thouars is a town of art and history, rich in characterful houses. We lay reversibly whenever possible: without nailing, without aggressive gluing. If you want to remove the carpet in ten years, the original floor will be intact. That is what respecting a heritage property means.' },
  { title: 'We work when you are not working', desc: 'On a shop or a practice, we cannot cut the activity. So we come in the evening, at the weekend or on the closing day. You reopen the next morning, the floor laid and cleaned. No day of revenue lost.' },
  { title: 'The standards, we handle them', desc: 'Care home, public body, practice: there are strict rules on fire safety and hygiene. We choose the right products for you, we provide the certificates, we dialogue with the inspection office. You have nothing to understand from the technical sheets.' },
  { title: 'A single contact, from start to finish', desc: 'On a job, you already have enough contractors to follow. We are a single name in your book. Quote, schedule, delivery, invoice: everything goes through the same person. You save time and you always know who to talk to.' },
]

const materiaux = [
  { name: 'Woven virgin-wool carpet', desc: 'For the lounges of the characterful houses of Thouars. The wool takes a patina as it ages, it does not crush. To the touch it is firm, to the eye it stands out. We choose with you a plain or a discreet motif to respect the stone and the original woodwork.' },
  { name: 'Bespoke rugs for old floors', desc: 'When you want to dress an old floorboard without masking it, the bespoke rug does the job. Virgin wool, a hand-sewn border, dimensions to the centimetre. We can stay on a sober plain or reproduce a discreet motif. Allow eight to fourteen weeks.' },
  { name: 'Gerflor and Tarkett acoustic vinyl', desc: 'We lay it in the practices and public bodies of Thouars. The underlay absorbs footstep noise, the reception is done in calm. The colour choice is wide, we can line up with your identity. The floor lasts fifteen years easily, often twenty.' },
  { name: 'Homogeneous vinyl for care homes', desc: 'On care-home corridors and rooms, we go for homogeneous vinyl. It is the same material top to bottom, so no wear layer to break through. We heat-weld the sheets, water gets through nowhere. Twenty to twenty-eight years ahead of you, even with heavy traffic.' },
  { name: 'Wood-effect vinyl for shops', desc: 'For a boutique or a shop, wood-effect vinyl works wonders. The visual result is convincing, the floor resists traffic and cleans in five minutes. Laid reversibly, it suits the old fabric. We can even lay it over underfloor heating.' },
  { name: 'Brushed brass and aluminium Romus profiles', desc: 'For the thresholds and stair nosings, we take care over the detail. We coordinate with your existing ironmongery, which counts on a characterful house. On slightly demanding jobs, we can have bespoke ones made. It is the kind of detail that shows on delivery.' },
]

const marques = [
  { name: 'Gerflor', desc: 'The Lyon-based French maker we know deeply. Their Mipolam and Taralay vinyls are our versatile reference on practices, shops and public bodies. A wide choice, serious acoustics, simple upkeep.' },
  { name: 'Tarkett', desc: 'For office spaces and public buildings that call for real acoustic comfort, we go for Tarkett iQ Granit. It ages well and tolerates the regular traffic of public reception.' },
  { name: 'Forbo', desc: 'When the project calls for something natural, we look at Forbo. Their Marmoleum is a true linoleum made from linseed oil. The environmental certifications are solid, we bring them out often in care homes and public bodies.' },
  { name: 'EGE Carpets', desc: 'The Danish weaver, our reference for a practice or a meeting room that commands attention. Their tiles already have the acoustic underlay built in, which makes the laying easier and softens the room.' },
  { name: 'objectflor', desc: 'For shops and boutiques, their wood-effect vinyl planks are a safe bet. The result is credible, the reversible laying goes fast, and the resistance to traffic holds over time.' },
  { name: 'Bostik', desc: 'For adhesives and screeds, we work with Bostik. They are reliable products that guarantee a durable laying, especially on the old substrates of the characterful houses.' },
  { name: 'objectflor Expona', desc: 'When a shop wants a design floor that stands out without sacrificing resistance, their Expona ranges do the job. Wood, concrete or stone effect, the choice is wide and the result high-end.' },
  { name: 'Romus', desc: 'For the finishing accessories, profiles and stair nosings, Romus is our reference. From brushed brass to aluminium, we always find the finish that sits with a characterful interior.' },
]

const quartiers = [
  { nom: 'Historic centre', detail: 'Around the château of the Dukes of La Trémoïlle, characterful houses overlooking the Thouet. Remarkable heritage, shops and residences to fit out with care.' },
  { nom: 'Castle district', detail: 'Old housing and master houses above the valley. Heritage renovation projects and upmarket residences.' },
  { nom: 'Banks of the Thouet', detail: 'Old houses and characterful housing along the river. Residential renovations attached to the original fabric.' },
  { nom: 'Shopping faubourgs', detail: 'Shopping streets and services of the wider centre. Shops, boutiques and independent-profession practices to modernise.' },
  { nom: 'Business park', detail: 'Trade, cooperatives and agri-food. Corporate offices, reception spaces and office premises.' },
  { nom: 'Residential districts', detail: 'Recent developments and family houses. A homeowner clientele attached to careful finishes and tailored advice.' },
  { nom: 'Sainte-Verge', detail: 'A northern bordering town, detached housing and town houses. Homeowners and small office units.' },
  { nom: 'Saint-Varent', detail: 'A Thouarsais village, old houses and characterful housing. Residential renovation projects and heritage housing.' },
  { nom: 'Saint-Jean-de-Thouars', detail: 'A neighbouring town with a residential setting, family houses and old housing. Renovations attached to the quality of execution.' },
  { nom: 'Louzy', detail: 'A bordering village, developments and renovated country houses. A residential clientele mindful of finishes.' },
  { nom: "Argenton-l'Église", detail: 'A Thouarsais town on the edge of the Maine-et-Loire. Family houses, residential renovations and old housing.' },
  { nom: 'Oiron', detail: 'A heritage village renowned for its château. Characterful houses and renovation projects attentive to the fabric.' },
]

const process = [
  { step: 'First contact', desc: 'A phone call or email. Gathering the key points: project type (characterful house, shop, practice, public body, care home), estimated area, desired schedule, any heritage or public-building constraints. We frame the next steps together and set the visit date.' },
  { step: 'Visit to Thouars', desc: 'A visit organised from Villedoux, about 2h\' drive. Laser measuring, sounding of the old substrates, a survey of the access, photos to coordinate colours and joins. Given the distance, this visit serves to settle everything in one go to prepare a grouped laying.' },
  { step: 'Material choice', desc: 'The Villedoux showroom or samples sent directly to Thouars, to your home or the practice. Final validation under the laying venue\'s light. For care homes and public bodies, transmission of the required technical sheets, fire reports and environmental certifications.' },
  { step: 'Workshop making', desc: '3 to 10 weeks by range: woven carpet, tiles, cut vinyl, bespoke rugs. Dry pre-assembly in the workshop to validate the fit before transport. This upfront preparation is what lets us keep a fast, careful grouped laying in Thouars.' },
  { step: 'Laying in Thouars', desc: 'A team mobilised on site, accommodation included in the quote, a schedule set to your availability or the site window. A grouped laying in one go, the team stays until delivery. Off-peak phasing possible for shops and practices. A full clean at the end.' },
]

const faq = [
  { q: 'Do you really come to Thouars from La Rochelle?', a: 'Yes. Thouars is about 150 km, around 2h by the road. Given the distance, we organise the work cleanly: a measuring visit at the start of the project to settle everything, then we come back to lay in one go once the making is finished. The team stays on site until delivery. Accommodation and travel are included in the quote. You have no series of round trips to coordinate.' },
  { q: 'How do you handle the distance to Thouars?', a: 'By organisation. We do not multiply the visits: a measuring visit that serves to survey everything, then a grouped laying. During the visit, we take the measurements, we sound the substrates, we settle the colours and the access. The laying is then done in one go, the team staying on site. The travel is mastered and costed in the quote, with no hidden surcharge.' },
  { q: 'Do you work on the characterful houses of the centre?', a: 'Of course. Thouars is a town of art and history, rich in characterful houses around the château of the Dukes of La Trémoïlle. We work there reversibly whenever possible: we lay without nailing, without aggressive gluing. If you want to redo everything in ten years, the original floor will be intact. Wool carpets and bespoke rugs find their place there.' },
  { q: 'How does it work on a care home on the public-building side?', a: 'Care homes fall under the type-J public-building regulation. It needs Bfl-s1 or Cfl-s1 by zone, products that take bio-cleaning, clear maintenance sheets. We choose the right products for you. We provide all the fire reports and certificates for the safety commission. And we plan zone by zone so as not to disrupt the residents\' lives.' },
  { q: 'Do you work on the town-centre shops?', a: 'Yes. For a boutique or a shop, the floor must enhance your products, resist traffic and respect the character of the place. We lay at night or on the closing day, you lose no trading day. We protect the existing, we clean everything on delivery, and the next morning you reopen in a space ready to welcome your customers.' },
  { q: 'How long does a vinyl floor last in a shop or a public body?', a: 'Allow fifteen to twenty years easily, sometimes more. A homogeneous vinyl ages well because it has no wear layer to break through, it is the same material top to bottom. On very busy zones such as a reception or a shop entrance, we take a class-34 rating, which tolerates traffic better. A professional clean once a year is enough to keep the first-day look.' },
  { q: 'Do you work with the public bodies of Thouars?', a: 'Yes. Town hall, public facility, municipal building: these jobs call for floors compliant with public-building requirements, complete technical sheets, fire reports and a phasing that respects the reception of the public. We are equipped for that: up-to-date documentation, dialogue with the inspection office, a schedule set to your work windows. Given the distance, we organise a grouped laying to limit the trips.' },
]

export default function RevetementSolThouarsPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/revetement-sol-thouars#service',
        name: 'Floor covering in Thouars',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Thouars' },
          { '@type': 'AdministrativeArea', name: 'Deux-Sèvres' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Laying of carpet, vinyl and bespoke rugs in Thouars and the Deux-Sèvres',
        description: 'Design, workshop making and laying of carpet, vinyl and bespoke rugs for characterful houses, shops, practices, public bodies and care homes in Thouars, with travel organised as a grouped laying.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Floor covering in Thouars', item: 'https://cbsols.fr/en/revetement-sol-thouars' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="thouars" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Floor covering Thouars</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Floor covering in Thouars,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>care for heritage.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Laying of carpet, vinyl and bespoke rugs in Thouars. Characterful houses, shops, practices, public bodies, care homes. A workshop based near La Rochelle, mastered travel: a measuring visit, then a grouped laying through to delivery.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=thouars" variant="primary" size="md">Request a quote</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>We travel to you</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Thouars is two hours away, but that does not stop us. We get organised: a visit to settle everything, then a grouped laying in one go. It is this method that lets CB Sols work far away, seriously, for over 28 years.&rdquo;
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
            Four settings, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>one and the same heritage rigour.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A project in Thouars?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              A site visit, a costed quote.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Direct contact with you, your architect or your establishment manager. A measuring visit to settle everything, a detailed quote within 48 hours.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/en/contact?source=thouars-cta1" variant="primary" size="md">Request a quote</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Thouars specifics</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six requirements <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>specific to Thouars projects.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Working in Thouars is not reproducing a standard job. The distance calls for real organisation and the heritage asks for respect. Here are the six points on which we structure our method from the first visit.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materials and ranges for Thouars</div>
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
              &ldquo;A characterful house overlooking the Thouet is treated with respect. We lay reversibly, we respect the old floors, and we organise the job to come once and do it well.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, owner of CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?source=thouars-citation" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>A site visit in Thouars</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Partner makers</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Eight reference houses <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>for your Thouars projects.</em>
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
            Thouars and the Thouarsais, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>out to the neighbouring towns.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Our team travels across Thouars and the whole of the Thouarsais, as well as the neighbouring towns, where the heritage residential, retail and health-and-social projects are concentrated.
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
            Twenty minutes on the phone are enough to clarify the possible ranges, the organisation of the travel, a realistic schedule and a budget order of magnitude for your Thouars job.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?source=thouars-cta2" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from Villedoux to Thouars.</em>
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
            Floor covering in Thouars, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>concrete answers.</em>
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
          { href: '/en/revetement-sol-niort', title: 'Floor covering Niort', teaser: 'Head offices, town houses, care homes. Our know-how in the heart of the Deux-Sèvres.', icon: MapPin },
          { href: '/en/services', title: 'Our services', teaser: 'Carpet, vinyl flooring, bespoke rugs, cleaning. Our whole trade at the service of your project.', icon: Building2 },
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
            Your Thouars project <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>in the right hands.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A site visit in Thouars. A detailed quote within 48 hours, careful finishes, a grouped laying and mastered travel. CB Sols, over 28 years of know-how at the service of projects in the Deux-Sèvres.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=thouars-final" variant="primary" size="md">Request a quote</Button>
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
