import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Castle, Home, Mail, MapPin, Store, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Floor Covering Bordeaux | Carpet, Vinyl, Bespoke Rugs',
  description: 'Laying of carpet, vinyl and bespoke rugs in Bordeaux. Townhouses of the Golden Triangle, Bordeaux échoppe houses, gastronomic restaurants. CB Sols has worked in the trade for over 28 years, travel from Villedoux.',
  alternates: {
    canonical: 'https://cbsols.fr/en/revetement-sol-bordeaux',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-bordeaux', en: 'https://cbsols.fr/en/revetement-sol-bordeaux', es: 'https://cbsols.fr/es/revetement-sol-bordeaux', },
  },
  keywords: ['floor covering Bordeaux', 'carpet Bordeaux', 'vinyl flooring Bordeaux', 'rug laying Bordeaux', 'flooring craftsman Bordeaux'],
  openGraph: {
    title: 'Floor covering in Bordeaux, Bordeaux elegance',
    description: 'Carpet, vinyl and bespoke rugs in Bordeaux. Townhouses, échoppe houses, gastronomic restaurants. CB Sols, over 28 years of know-how.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-bordeaux.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Townhouses of the Golden Triangle', desc: 'You have a townhouse in Les Chartrons or on the cours de l\'Intendance. We lay a wool carpet or a hand-sewn rug in your reception rooms. We join cleanly onto the original oak parquet. Your decorator keeps control from start to finish.' },
  { title: 'Renovated Bordeaux échoppe houses', desc: 'You renovate a single-storey échoppe house in Bordeaux stone. The parquet is fragile, the heritage architects look at everything. We offer reversible solutions, with no nail or aggressive glue. You keep the heritage value of the property.' },
  { title: 'Gastronomic and Michelin-starred restaurants', desc: 'You run a starred table in the centre. We come to lay at night, you lose no service. A dense anti-stain carpet, careful acoustics for conversation at the table.' },
  { title: 'Business and independent-profession practices', desc: 'You receive your clients at Mériadeck or Pey-Berland. A careful floor sets the tone from the entrance. Acoustic vinyl in the open plans, wool carpet for the directors\' offices.' },
]

const exigences = [
  { title: 'We respect the old parquet', desc: 'The townhouses of the Golden Triangle have kept their original parquet. We lay without nailing, without aggressive gluing. If you want to redo everything in ten years, the wood underneath will be intact. That is what respecting a fine house means.' },
  { title: 'The pedestrian centre, we know how', desc: 'The streets of old Bordeaux are narrow, the tram runs everywhere, the council wants a precise slot. We handle the parking permits and carry the rolls by hand over the last metres. You have nothing to manage.' },
  { title: 'Two hundred kilometres, a mastered distance', desc: 'Bordeaux is two hours from our workshop via the A10. We come down several times a month, we know the local jobs. You call, we come to measure within the week. No hidden travel surcharge.' },
  { title: 'The Buildings of France, we know them', desc: 'On listed façades, some work goes before the heritage architect. We document the intervention, we provide the technical sheets, we dialogue with the architect. The file moves forward smoothly and you do not have to dive into the paperwork.' },
  { title: 'More calm in large volumes', desc: 'The reception rooms are five metres to the ceiling, they resonate. A wool carpet on a felt underlay cuts half the echo. The room recovers its softness, conversations carry better. And we keep the character of the place.' },
  { title: 'A single contact, from start to finish', desc: 'On a prestige job, you already have the architect, the cabinetmaker, the decorative painter. We are a single name to add. Quote, schedule, delivery, invoice: everything goes through the same person. You save time.' },
]

const materiaux = [
  { name: 'Woven virgin-wool carpet, Wilton and Axminster', desc: 'Our reference material for reception rooms. The wool takes a patina, densifies with time. To the touch, it is firm. To the eye, it ages nobly. We often lay it plain or with a discreet geometric motif to respect the woodwork. Allow fifteen to twenty years of hold easily.' },
  { name: 'Bespoke reconstructed Hereke and Aubusson rugs', desc: 'When you want to dress an old parquet without masking it, the bespoke rug does the job. We reproduce a historic motif in virgin wool, the border is hand-sewn, the dimensions are set to the centimetre to your room. Allow ten to sixteen weeks\' making. The result speaks for itself on arrival.' },
  { name: 'EGE Highline and Hospitality carpets', desc: 'The right choice for a gastronomic restaurant or a city-centre hotel. The fibre is fire-treated through its core, so compliant with public use. The colour choice is wide, we can coordinate with your existing décor. And it takes intense service without moving between two replacements.' },
  { name: 'Gerflor Mipolam and Tarkett iQ Granit vinyl floors', desc: 'For business practices and office spaces, it is our standard. An elegant matt plain look, real acoustic performance, upkeep done in five minutes. We heat-weld the sheets, you have no visible seam. Fifteen quiet years ahead of you.' },
  { name: 'Wood-effect vinyl for renovated échoppe houses', desc: 'Sometimes the original parquet is no longer recoverable. Rather than an invasive removal, we offer a very fine wood-effect vinyl. The visual result stays convincing. The laying is reversible and compatible with a heritage resale. We can even lay it over underfloor heating.' },
  { name: 'Brushed-brass and patinated-bronze Romus profiles', desc: 'The thresholds and stair nosings, we take care over them. We coordinate the profile with your original ironmongery, your bronze handles, your waxed woodwork. On truly demanding jobs, we can have bespoke ones made. It is this kind of detail that makes the difference on delivery.' },
]

const marques = [
  { name: 'EGE Carpets', desc: 'The Danish weaver is our reference for townhouse reception rooms where the carpet must set a tone. We find it often in large houses and starred tables; the Highline and Hospitality ranges take intensive use perfectly.' },
  { name: 'Brintons', desc: 'The British Axminster is the aristocracy of carpet. We can weave up to thirty-six colours on a motif. When you want a reception room that commands attention, Brintons is the house to call on.' },
  { name: 'Tarkett', desc: 'In a law firm or an office open plan, we often go for Tarkett iQ Granit. The acoustics are serious, it ages well, and the matt finish always has its effect.' },
  { name: 'Gerflor', desc: 'The Lyon-based French maker we know deeply. The colour choice is wide, their wood imitations are credible, and it all lays over underfloor heating. It is our versatile vinyl reference.' },
  { name: 'Forbo', desc: 'When the project calls for something natural, we look at Forbo. Their Marmoleum is a true linoleum, made with linseed oil. It is healthy, it is solid, and it suits medical practices perfectly.' },
  { name: 'Tisca Tiara', desc: 'The Swiss maker, the very top of the range. We bring them out on exceptional residential projects, or to dress a palace suite. When the budget follows, the result is unmatched.' },
  { name: 'Hereke', desc: 'The Turkish hand-woven rugs, in silk or fine virgin wool. We lay them in the libraries of Bordeaux townhouses, or in a lounge where you want something to hand down.' },
  { name: 'Object Carpet', desc: 'The Germans, for contemporary design. When you fit out a high-end business office and want to step outside the classic codes, their ranges are perfect.' },
]

const quartiers = [
  { nom: 'Golden Triangle', detail: 'The heart of Bordeaux luxury between cours Clemenceau, cours de l\'Intendance and allées de Tourny. Townhouses, luxury boutiques, head offices.' },
  { nom: 'Les Chartrons', detail: 'The historic wine-trade district, échoppe houses and merchants\' townhouses. 18th-century heritage to preserve, an active interior-architecture scene.' },
  { nom: 'Saint-Pierre', detail: 'Old Bordeaux, UNESCO-listed, pedestrian streets, ceremonial buildings. Gastronomic restaurants, high-end boutiques, characterful residences.' },
  { nom: 'Saint-Michel', detail: 'A district in full change, former warehouses converted into lofts, design cafés. Residential and creative-office projects.' },
  { nom: 'Les Capucins', detail: 'The district of the central market and popular gastronomy. Restaurants, chefs\' bistros, échoppe houses renovated into high-end homes.' },
  { nom: 'Quinconces', detail: 'A vast esplanade and the surrounding 19th-century bourgeois buildings. Independent-profession practices, corporate headquarters, ceremonial apartments.' },
  { nom: 'Pey-Berland', detail: 'The district of the cathedral and the town hall. High-end office buildings, law firms, independent professions.' },
  { nom: 'Caudéran', detail: 'A bourgeois residential district, family villas, private parks. A fine residential clientele attached to quality of execution.' },
  { nom: 'Bordeaux Lac', detail: 'A modern office hub, head offices, business hotels. Acoustic vinyl floors for open plans and carpet tiles for directors\' offices.' },
  { nom: 'Bègles', detail: 'A bordering town to the south, a mix of old residential and new builds. Renovated échoppe houses and family homes being modernised.' },
  { nom: 'Talence', detail: 'University and student residences, but also high-end residential districts. Family houses, bourgeois co-ownerships, medical practices.' },
  { nom: 'Pessac', detail: 'Detached-housing estates, faculties and private clinics. High-end residential projects and independent-profession practices in full growth.' },
]

const process = [
  { step: 'First contact', desc: 'A phone call or email. Gathering the key points: project type, estimated area, desired schedule, any heritage constraints. If the project is led by an interior architect, we contact their agency directly to set up the next steps.' },
  { step: 'Visit to Bordeaux', desc: 'A visit organised within 1 to 2 weeks. Laser or tracing-paper measuring by configuration, a survey of the building access constraints, photos to coordinate colours with the existing woodwork and parquet. Costs included in the quote if the job is confirmed.' },
  { step: 'Material choice', desc: 'The Villedoux showroom or samples sent directly to Bordeaux, to your address or the architect\'s. Final validation under the venue\'s light, never in a showroom: the Bordeaux Atlantic light transforms the colours, especially the silky-sheen wools.' },
  { step: 'La Rochelle workshop making', desc: '3 to 10 weeks by range: custom Axminster, Wilton, silk, virgin wool, cut vinyl. Dry pre-assembly in the workshop to validate the fit before transport. This upfront preparation is what lets us keep a final laying of 2 to 5 days in Bordeaux.' },
  { step: 'Laying in Bordeaux', desc: 'A team mobilised on site, accommodation included in the quote, a schedule set to your availability or the site window. Coordination with the concierge or the managing agent. A full clean on delivery, finishes checked with you or the architect.' },
]

const faq = [
  { q: 'Do you really come to Bordeaux from La Rochelle?', a: 'Yes, and often. Bordeaux is two hours via the A10. We come down several times a month. We organise the measuring visit at the start of the project, then we come back to lay at the end. Accommodation and travel are included in the quote, no surprise. On large jobs, the team stays on site until the finish.' },
  { q: 'Do you work in the townhouses of the Golden Triangle?', a: 'It is even one of our favourite grounds. The 18th and 19th-century townhouses have kept their parquet, their woodwork, their soul. We work there with your interior architect, and whenever possible we lay reversibly. If you want to redo everything in ten years, the parquet underneath will be intact. That is what we call respecting a fine house.' },
  { q: 'How does it work with the Buildings of France?', a: 'On an interior floor, the heritage architect is almost never consulted directly. But we document everything anyway, out of habit: material sheets, fire reports, before and after photos. You have a clean file if you sell the property later, or if the heritage architect comes back on another matter. When the project touches something visible from the street, we align with your architect.' },
  { q: 'How long for a bespoke rug?', a: 'Allow ten to sixteen weeks for a reconstructed Aubusson or Savonnerie, by the complexity of the motif. Eight to fourteen weeks for a virgin-wool Hereke with a hand-sewn border. For a custom Axminster, eight to twelve weeks. Add the workshop making and the laying in Bordeaux. A complete reception room is planned over four to six months, sometimes more if the motif needs several proofs.' },
  { q: 'Do you work in Bordeaux gastronomic restaurants?', a: 'Yes, it is a ground where we are expected. The acoustics make all the difference at the table, and a wool carpet on a felt underlay cuts half the reverberation. We lay at night or on the closing day, you lose no service. We protect the kitchens, we clean everything on delivery, and in the morning the room is ready.' },
  { q: 'How long does a wool carpet last?', a: 'Allow fifteen to twenty years easily in a townhouse in private use. Wool ages well: it takes a patina, densifies instead of crushing. On vestibules and staircases, we choose rather a tightly woven wool with a discreet motif, which tolerates traffic marks better. A professional clean once a year is enough to keep the first-day look.' },
  { q: 'Do you work with Bordeaux interior architects?', a: 'Regularly, yes. The architecture scene is active around the Bassins à flot, Darwin, Les Chartrons. We work as subcontractors of their specification; the architect stays the main contact for the material choices. We send the samples to their agency for validation under the project\'s light. And we provide all the technical documents for their site file.' },
]

export default function RevetementSolBordeauxPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/revetement-sol-bordeaux#service',
        name: 'Floor covering in Bordeaux',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Bordeaux' },
          { '@type': 'AdministrativeArea', name: 'Gironde' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Laying of carpet, vinyl and bespoke rugs in Bordeaux and the Gironde',
        description: 'Design, workshop making and laying of carpet, vinyl and bespoke rugs for townhouses, gastronomic restaurants, business practices and characterful residences in Bordeaux.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Floor covering in Bordeaux', item: 'https://cbsols.fr/en/revetement-sol-bordeaux' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="bordeaux" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Floor covering Bordeaux</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Floor covering in Bordeaux,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>Bordeaux elegance.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Laying of carpet, vinyl and bespoke rugs in Bordeaux. Townhouses of the Golden Triangle, renovated échoppe houses, gastronomic restaurants, business practices. A workshop based in La Rochelle, travel to Bordeaux organised regularly.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=bordeaux" variant="primary" size="md">Request a quote</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>We travel to you</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Bordeaux is a heritage city reachable from La Rochelle in two hours. Respecting an old échoppe parquet or dressing a Chartrons reception room is exactly the trade CB Sols has done for over 28 years.&rdquo;
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
            Four settings, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>one and the same heritage demand.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A project in Bordeaux?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              A site visit, a costed quote.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Direct contact with your interior architect, your decorator or with you. A visit organised within 1 to 2 weeks, a detailed quote within a week.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/en/contact?source=bordeaux-cta1" variant="primary" size="md">Request a quote</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Bordeaux specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Bordeaux specifics</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six requirements <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>specific to Bordeaux projects.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Working in Bordeaux is not reproducing a standard job. Here are the six points on which we structure our method from the first visit, to respect the heritage and keep the schedule.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materials and ranges for Bordeaux</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            The product families <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>we bring to the Gironde.</em>
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
              &ldquo;A 19th-century Bordeaux échoppe parquet is not handled like a new floor. We lay a carpet that lifts away cleanly, that does not mark the wood, that respects what the house has already known.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, owner of CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?source=bordeaux-citation" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>A home visit in Bordeaux</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Partner makers</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Eight reference houses <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>for your Bordeaux projects.</em>
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
            Bordeaux and its metropolis, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>out to Pessac and Talence.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Our team travels across the whole of Bordeaux Métropole as well as the bordering towns of the first ring, where the high-end residential and office projects are concentrated.
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
            Twenty minutes on the phone are enough to clarify the possible ranges, a realistic schedule and a budget order of magnitude for your Bordeaux job.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?source=bordeaux-cta2" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from Villedoux to Bordeaux.</em>
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
            Floor covering in Bordeaux, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>concrete answers.</em>
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
          { href: '/en/revetement-sol-arcachon', title: 'Floor covering Arcachon', teaser: 'Bay houses and dune villas. Floors that take the sand, the light and daily life.', icon: MapPin },
          { href: '/en/revetement-sol-cap-ferret', title: 'Floor covering Cap Ferret', teaser: 'Oyster cabins, feet-in-the-sand villas. The discretion of a know-how that barely shows.', icon: Waves },
          { href: '/en/revetement-sol-saint-emilion', title: 'Floor covering Saint-Émilion', teaser: 'Châteaux, wine cellars and master houses. Floors chosen for character and the patina of time.', icon: Castle },
          { href: '/en/revetement-sol-biarritz', title: 'Floor covering Biarritz', teaser: 'Basque Coast villas. Floors that resist the salt, the sand and the ocean light.', icon: MapPin },
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
            Your Bordeaux project <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>in the right hands.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A site visit in Bordeaux. A detailed quote, premium finishes, respect for the heritage. Over 28 years of know-how at the service of exceptional projects in the Gironde.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=bordeaux-final" variant="primary" size="md">Request a quote</Button>
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
