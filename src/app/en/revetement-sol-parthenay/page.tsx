import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Castle, Home, Mail, MapPin, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Floor Covering in Parthenay | Free Quote within 48h',
  description: 'Laying of carpet, vinyl and bespoke rugs in Parthenay. Old houses of the medieval centre, shops, practices, public bodies. CB Sols has worked in the trade for over 28 years with real caution on old substrates, travel from Villedoux.',
  alternates: {
    canonical: 'https://cbsols.fr/en/revetement-sol-parthenay',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-parthenay', en: 'https://cbsols.fr/en/revetement-sol-parthenay' },
  },
  keywords: ['floor covering Parthenay', 'carpet Parthenay', 'vinyl flooring Parthenay', 'rug laying Parthenay', 'flooring craftsman Parthenay'],
  openGraph: {
    title: 'Floor covering in Parthenay, respect for the old fabric',
    description: 'Carpet, vinyl and bespoke rugs in Parthenay. Medieval town, old houses, shops, public bodies. CB Sols, over 28 years of know-how.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-parthenay.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Old houses of the medieval centre', desc: 'You live in an old stone house near the porte Saint-Jacques or on the rue de la Vau Saint-Jacques. The fabric is precious and fragile. We lay reversibly, without nail or aggressive glue, to respect the old floors. You keep the heritage value of the property.' },
  { title: 'Town-centre shops and boutiques', desc: 'You run a shop in the medieval town or its surroundings. We lay at night or on the closing day, you lose no trading day. A floor resistant to traffic, easy to maintain, and a look that shows off your boutique without spoiling the place.' },
  { title: 'Practices and independent professions', desc: 'You receive your clients in a Parthenay practice. A careful floor reassures from the waiting room. We lay acoustic vinyl in the work spaces and wool carpet where you receive. We come when you are not consulting.' },
  { title: 'Public bodies and public services', desc: 'You run a municipal building, a town hall, a public facility. We choose floors compliant with public-building requirements, we provide the fire reports and documentation, we dialogue with the inspection office. We phase the works so as not to disrupt the reception of the public.' },
]

const exigences = [
  { title: 'Caution on old substrates', desc: 'The medieval centre of Parthenay keeps old floors: hexagonal terracotta tiles, original floorboards, irregular substrates. We never lay blind. We sound the substrate, we check the damp, we choose the right screed or underlay. No nasty surprise once the laying is finished.' },
  { title: 'The protected sector, we respect it', desc: 'Parthenay protects its medieval heritage. Some works visible from the street or touching the listed fabric call for caution. On an interior floor, we stay discreet and reversible, and we line up with your architect if the project touches something protected.' },
  { title: 'A reversible laying that respects the fabric', desc: 'In an old stone house, we lay without nailing, without aggressive gluing. If you want to remove the carpet in ten years, the original floor will be intact. That is what respecting a property that has crossed the centuries means.' },
  { title: 'A grouped visit, then a set laying', desc: 'Parthenay is a fair distance from our workshop. So we organise a measuring visit at the start of the project, then we come back to lay once the making is finished. You have no ten round trips to manage, just two clear appointments and a schedule kept.' },
  { title: 'We work when you are not working', desc: 'On a shop or a practice, we cannot cut the activity. So we come in the evening, at the weekend or on the closing day. You reopen the next morning, the floor laid and cleaned. No day of revenue lost.' },
  { title: 'A single contact, from start to finish', desc: 'On a job, you already have enough contractors to follow. We are a single name in your book. Quote, schedule, delivery, invoice: everything goes through the same person. You save time and you always know who to talk to.' },
]

const materiaux = [
  { name: 'Woven virgin-wool carpet', desc: 'For the lounges of the old houses of the medieval centre. The wool takes a patina as it ages, it does not crush. To the touch it is firm, to the eye it stands out. We choose with you a plain or a discreet motif to respect the stone and the original woodwork.' },
  { name: 'Bespoke rugs for old floors', desc: 'When you want to dress a floorboard or terracotta tiles without masking them, the bespoke rug does the job. Virgin wool, a hand-sewn border, dimensions to the centimetre. We can stay on a sober plain or reproduce a discreet motif. Allow eight to fourteen weeks.' },
  { name: 'Gerflor and Tarkett acoustic vinyl', desc: 'We lay it in the practices and public bodies of Parthenay. The underlay absorbs footstep noise, the reception is done in calm. The colour choice is wide, we can line up with your identity. The floor lasts fifteen years easily, often twenty.' },
  { name: 'Reversible wood-effect vinyl', desc: 'Sometimes the original floor can no longer be saved. Rather than an invasive removal, we propose a fine-quality wood-effect vinyl, laid reversibly. The visual result stays convincing, compatible with a heritage resale. We can even lay it over underfloor heating.' },
  { name: 'EGE and Forbo carpet tiles', desc: 'The right choice for a practice or a public building. The tiles are 50×50 cm. If someone spills a coffee, we replace just the damaged tile. The acoustic underlay softens the room. You get fifteen to twenty years in classic office use.' },
  { name: 'Brushed brass and aluminium Romus profiles', desc: 'For the thresholds and stair nosings, we take care over the detail. We coordinate with your existing ironmongery, which counts on an old house. On slightly demanding jobs, we can have bespoke ones made. It is the kind of detail that shows on delivery.' },
]

const marques = [
  { name: 'Gerflor', desc: 'The Lyon-based French maker we know deeply. Their Mipolam and Taralay vinyls are our versatile reference on practices and public bodies. A wide choice, serious acoustics, simple upkeep.' },
  { name: 'Tarkett', desc: 'For office spaces and public buildings that call for real acoustic comfort, we go for Tarkett iQ Granit. It ages well and tolerates the regular traffic of public reception.' },
  { name: 'Forbo', desc: 'When the project calls for something natural, we look at Forbo. Their Marmoleum is a true linoleum made from linseed oil. The environmental certifications are solid, we bring them out often in practices and public bodies.' },
  { name: 'EGE Carpets', desc: 'The Danish weaver, our reference for a practice or a meeting room that commands attention. Their tiles already have the acoustic underlay built in, which makes the laying easier and softens the room.' },
  { name: 'objectflor', desc: 'For town-centre shops and boutiques, their wood-effect vinyl planks are a safe bet. The result is credible, the reversible laying goes fast, and the resistance to traffic holds over time.' },
  { name: 'Bostik', desc: 'For adhesives and screeds, we work with Bostik. They are reliable products that guarantee a durable laying, especially on the old and irregular substrates of the medieval houses.' },
  { name: 'objectflor Expona', desc: 'When a shop wants a design floor that stands out without sacrificing resistance, their Expona ranges do the job. Wood, concrete or stone effect, the choice is wide and the result high-end.' },
  { name: 'Romus', desc: 'For the finishing accessories, profiles and stair nosings, Romus is our reference. From brushed brass to aluminium, we always find the finish that sits with an old interior.' },
]

const quartiers = [
  { nom: 'Medieval centre', detail: 'Porte Saint-Jacques, rue de la Vau Saint-Jacques, the castle. Old stone houses, a protected sector, characterful shops to fit out with caution.' },
  { nom: 'Saint-Laurent district', detail: 'Old housing and town houses, local shops. Heritage renovation projects and residences attached to the original fabric.' },
  { nom: 'Around the livestock market', detail: 'The historic district of the famous livestock market. Shops, services and activity premises to modernise.' },
  { nom: 'Residential faubourgs', detail: 'Recent developments and family houses. A homeowner clientele attached to careful finishes and tailored advice.' },
  { nom: 'Station district', detail: 'Detached housing and small office units. Practices, co-ownerships and detached houses being modernised.' },
  { nom: 'Châtillon-sur-Thouet', detail: 'A bordering town, business zones and residential housing. Corporate offices, shops and family houses.' },
  { nom: 'Pompaire', detail: 'A residential village at the gates of Parthenay. Developments, renovated country houses and characterful projects.' },
  { nom: 'Le Tallud', detail: 'A neighbouring town with a green rural setting. Family houses, renovated longères and old housing to fit out with care.' },
  { nom: 'Secondigny', detail: 'A village of the Gâtine, old stone houses and heritage housing. Residential renovation and building-restoration projects.' },
  { nom: 'Ménigoute', detail: 'A small Gâtine village, characterful houses and old housing. A residential clientele mindful of respecting the fabric.' },
  { nom: 'Saint-Aubin-le-Cloud', detail: 'A bordering town, detached housing and town houses. Homeowners attached to finishes and advice.' },
  { nom: 'Vasles', detail: 'A Gâtine village between Parthenay and Poitiers. Family houses, residential renovations and old housing.' },
]

const process = [
  { step: 'First contact', desc: 'A phone call or email. Gathering the key points: project type (old house, shop, practice, public body), estimated area, desired schedule, any heritage or public-building constraints. We frame the next steps together and set the visit date.' },
  { step: 'Visit to Parthenay', desc: 'A visit organised from Villedoux, about 1h45\' drive. Laser measuring, sounding of the old substrates, a damp check, photos to coordinate colours and joins. On old fabric, this survey is decisive to avoid any nasty surprise.' },
  { step: 'Material choice', desc: 'The Villedoux showroom or samples sent directly to Parthenay, to your home or the practice. Final validation under the laying venue\'s light. For public bodies, transmission of the required technical sheets, fire reports and environmental certifications.' },
  { step: 'Workshop making', desc: '3 to 10 weeks by range: woven carpet, tiles, cut vinyl, bespoke rugs. Dry pre-assembly in the workshop to validate the fit before transport. This upfront preparation is what lets us keep a fast, careful final laying in Parthenay.' },
  { step: 'Laying in Parthenay', desc: 'A team mobilised on site, accommodation included in the quote, a schedule set to your availability or the site window. A reversible laying on the old fabric, off-peak phasing possible for shops and practices. A full clean on delivery.' },
]

const faq = [
  { q: 'Do you really come to Parthenay from La Rochelle?', a: 'Yes. Parthenay is about 130 km, around 1h45 by the road. We organise the measuring visit at the start of the project, then we come back to lay once the making is finished. Accommodation and travel are included in the quote. On larger jobs, the team stays on site until delivery. You have no series of round trips to coordinate, just two clear appointments.' },
  { q: 'Do you work in the old houses of the medieval centre?', a: 'Of course, it is even a ground where our caution makes the difference. The centre of Parthenay keeps fine stone houses, with fragile old floors. We always sound the substrate before laying, we check the damp, we choose the right underlay. And we lay reversibly whenever possible: if you want to redo everything in ten years, the original floor will be intact.' },
  { q: 'How do you handle the constraints of the protected sector?', a: 'Parthenay protects its medieval heritage, and we respect that. On an interior floor, the Bâtiments de France architect is almost never consulted directly. But we stay discreet and reversible, we document the work out of habit, and if the project touches something visible or protected, we line up with your architect. You have a clean file from start to finish.' },
  { q: 'Do you take precautions on old substrates?', a: 'Always. It is even the heart of the trade on old fabric. We never lay blind: we sound the floorboard or the terracotta tiles, we measure the damp, we look at the flatness. According to what we find, we choose the right screed, the right underlay, the right reversible adhesive. This upfront survey is what avoids blisters and detachments once the laying is finished.' },
  { q: 'Do you work on the town-centre shops?', a: 'Yes. For a boutique or a shop, the floor must enhance your products, resist traffic and respect the character of the place. We lay at night or on the closing day, you lose no trading day. We protect the existing, we clean everything on delivery, and the next morning you reopen in a space ready to welcome your customers.' },
  { q: 'How long does a vinyl floor last in a practice or a public body?', a: 'Allow fifteen to twenty years easily, sometimes more. A homogeneous vinyl ages well because it has no wear layer to break through, it is the same material top to bottom. On very busy zones such as a town-hall reception, we take a class-34 rating, which tolerates traffic better. A professional clean once a year is enough to keep the first-day look.' },
  { q: 'Do you work with the public bodies of Parthenay?', a: 'Yes. Town hall, public facility, municipal building: these jobs call for floors compliant with public-building requirements, complete technical sheets, fire reports and a phasing that respects the reception of the public. We are equipped for that: up-to-date documentation, dialogue with the inspection office, a schedule set to your work windows. We can work in off-peak hours so as not to cut the service.' },
]

export default function RevetementSolParthenayPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/revetement-sol-parthenay#service',
        name: 'Floor covering in Parthenay',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Parthenay' },
          { '@type': 'AdministrativeArea', name: 'Deux-Sèvres' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Laying of carpet, vinyl and bespoke rugs in Parthenay and the Deux-Sèvres',
        description: 'Design, workshop making and laying of carpet, vinyl and bespoke rugs for old houses, shops, practices and public bodies in Parthenay, with particular attention to old substrates.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Floor covering in Parthenay', item: 'https://cbsols.fr/en/revetement-sol-parthenay' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="parthenay" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Floor covering Parthenay</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Floor covering in Parthenay,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>respect for the old fabric.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Laying of carpet, vinyl and bespoke rugs in Parthenay. Old houses of the medieval centre, shops, practices, public bodies. A workshop based near La Rochelle, travel organised with real caution on the old substrates and the constraints of the protected sector.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=parthenay" variant="primary" size="md">Request a quote</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>We travel to you</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;A house of the medieval centre of Parthenay is not treated like a new floor. We sound the substrate, we lay reversibly, we respect what the fabric has already crossed. That is the trade CB Sols has practised for over 28 years.&rdquo;
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A project in Parthenay?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              A site visit, a costed quote.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Direct contact with you, your architect or your establishment manager. A measuring visit and a sounding of the substrates, a detailed quote within 48 hours.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/en/contact?source=parthenay-cta1" variant="primary" size="md">Request a quote</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Parthenay specifics</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six requirements <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>specific to Parthenay projects.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Working in Parthenay is not reproducing a standard job. The medieval town calls for real caution on the old fabric. Here are the six points on which we structure our method from the first visit.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materials and ranges for Parthenay</div>
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
              &ldquo;On an old floorboard or terracotta tiles of the medieval centre, we never lay blind. We sound, we check the damp, we choose the right answer. It is this caution that avoids the nasty surprises.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, owner of CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?source=parthenay-citation" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>A site visit in Parthenay</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Partner makers</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Eight reference houses <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>for your Parthenay projects.</em>
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
            Parthenay and the Gâtine, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>out to the neighbouring towns.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Our team travels across Parthenay and the whole of the Gâtine, as well as the neighbouring towns, where the heritage residential, retail and public projects are concentrated.
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
            Twenty minutes on the phone are enough to clarify the possible ranges, the precautions on the old fabric, a realistic schedule and a budget order of magnitude for your Parthenay job.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?source=parthenay-cta2" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from Villedoux to Parthenay.</em>
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
            Floor covering in Parthenay, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>concrete answers.</em>
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
            Your Parthenay project <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>in the right hands.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A site visit in Parthenay. A detailed quote within 48 hours, careful finishes, a reversible laying and respect for the old fabric. CB Sols, over 28 years of know-how at the service of projects in the Deux-Sèvres.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=parthenay-final" variant="primary" size="md">Request a quote</Button>
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
