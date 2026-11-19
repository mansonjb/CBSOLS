import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Home, Mail, MapPin, Store, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Floor Covering Saint-Jean-de-Luz | Basque Country Villas',
  description: 'Laying of carpet, vinyl and bespoke rugs in Saint-Jean-de-Luz. Ocean-facing family villas, red-timbered Basque houses, bay boutique hotels, gastronomic restaurants. CB Sols, over 28 years of know-how, travel organised from Villedoux.',
  alternates: {
    canonical: 'https://cbsols.fr/en/revetement-sol-saint-jean-de-luz',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-saint-jean-de-luz', en: 'https://cbsols.fr/en/revetement-sol-saint-jean-de-luz' },
  },
  keywords: ['floor covering Saint-Jean-de-Luz', 'Basque Country carpet', 'bespoke rug Basque villa', 'flooring craftsman Saint-Jean-de-Luz', 'Basque Coast vinyl flooring'],
  openGraph: {
    title: 'Floor covering in Saint-Jean-de-Luz, the Basque soul',
    description: 'Carpet, vinyl and bespoke rugs in Saint-Jean-de-Luz. Family villas, Basque houses, boutique hotels. CB Sols, over 28 years of know-how.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-saint-jean-de-luz.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Ocean-facing family villas', desc: 'You have a villa at Sainte-Barbe or Erromardie, a wide view. We lay a wool carpet in the master bedroom and a bespoke rug in the lounge. We join cleanly onto the old parquet or the red terracotta.' },
  { title: 'Red-timbered Basque houses', desc: 'You live in a traditional etxe, with original chestnut parquet. The rooms are intimate, the staircases narrow. We lay in respect of the building, without distorting anything.' },
  { title: 'Bay boutique hotels', desc: 'You run a Relais & Châteaux or a guest house. We come in the low season, you keep your room nights. A dense anti-stain carpet, careful acoustics for the street-side rooms.' },
  { title: 'Gastronomic restaurants of the bay', desc: 'You have a table with a port or seafront view. We come at night or on the closing day. A wool carpet on a felt underlay for the acoustics, finishes worthy of a star.' },
]

const exigences = [
  { title: 'We respect the colours of the Basque Country', desc: 'Basque red, limewash white, half-timbering, terracotta: the Basque Country has its strong identity. Our colours sit with it without betraying it. The red returns on a ceremonial rug, the natural wools dialogue with the limewash. The feel stays coherent with the place.' },
  { title: 'The spray, we take it into account', desc: 'The Atlantic climate is laden with damp and salt. We select treated wools, supple vinyls, hand-sewn borders that hold over time. You keep a stable floor, a colour that does not dull. No fragile materials here, we know the ground.' },
  { title: 'The ocean view stays the star', desc: 'A Saint-Jean villa is built around the panorama. The floor must accompany without competing: sandy tones, warm beiges, off-whites. We take particular care over the terrace thresholds and the junctions to the bay windows. In the evening light, these details show.' },
  { title: 'Four hours\' drive, well organised', desc: 'Saint-Jean is 370 km from our workshop. When we come down, we come down with the full team, we sleep on site, we run the days together. Everything is pre-assembled at Villedoux before departure. On site, we lay fast, with no pointless shuttling.' },
  { title: 'We work as a team with the other trades', desc: 'On a Basque villa, there is often a carpenter, a lime mason, an ironworker. We fit into the architect\'s schedule, we go in second-to-last so as not to damage the new carpet. You arbitrate nothing, we agree it among ourselves.' },
  { title: 'Never in summer, planned from winter', desc: 'July and August are the season. We come between October and May. To deliver in July, we take the measurements from February-March: bespoke making needs time. You get the villa back ready for the holidays, without having seen a single roll pass.' },
]

const materiaux = [
  { name: 'Woven virgin-wool EGE carpet', desc: 'Our favourite material for the bedrooms and lounges of Saint-Jean villas. The wool takes a patina in the Atlantic climate, does not crush, ages nobly. We choose with you a sandy, terracotta or ecru shade, in the Basque palette. Fifteen to twenty quiet years ahead of you.' },
  { name: 'Bespoke wool and silk Brintons rugs', desc: 'For an ocean-view lounge or a bay boutique hotel, the bespoke rug makes all the difference. A hand-sewn border, dimensions to the centimetre, a motif matched to the Basque or contemporary décor. Allow ten to sixteen weeks\' making. It is what crowns an already exceptional view.' },
  { name: 'Bolon flocked-vinyl seaside floors', desc: 'For the entrances and traffic zones of seafront villas, Bolon is our reference. The spray, the damp, the sand brought back from the beach: it takes it. The contemporary flocked look sits with architect-designed houses. Simple upkeep, fifteen to twenty years in the Atlantic climate without flinching.' },
  { name: 'Tisca Tiara haute-couture woven rugs', desc: 'For an exceptional villa or a Relais & Châteaux suite, we go up a level. The Swiss maker is the very top of the range. Fine virgin wool, personalisable motifs, a weave of rare precision. It is the equivalent of haute couture for the floor. When the project justifies it, the result is unmatched.' },
  { name: 'Basque-motif or contemporary wool carpet', desc: 'For a Saint-Jean boutique hotel, we can integrate a discreet geometric motif that echoes the traditional Basque patterns. Or stay with a marled plain in the regional palette, by your choice. The Bfl-s1 rating is compliant with public hotel use. Your guests feel the care taken at once.' },
  { name: 'Aged-brass and patinated-bronze Romus profiles', desc: 'For the thresholds and the junctions between parquet and carpet, we take care over the detail. We coordinate with the traditional ironmongery of Basque houses. On demanding heritage jobs, we can have bespoke ones made. It is the kind of thing you notice on delivery, and that makes the difference.' },
]

const marques = [
  { name: 'EGE Carpets', desc: 'The Dane, our reference for Saint-Jean family villas and the boutique hotels of the Basque Coast. Their Highline and Hospitality ranges set a tone at once.' },
  { name: 'Brintons', desc: 'The British Axminster, the aristocracy of carpet. Up to thirty-six colours on a motif. We call on it for the great villas of the Basque Country and ceremonial interiors.' },
  { name: 'Bolon', desc: 'The Swedish maker of flocked vinyl, our reference for seafront villas. It takes the spray and the damp without flinching. Ideal for the bay hotels.' },
  { name: 'Tisca Tiara', desc: 'The Swiss maker, the very top of the range. We bring them out for exceptional residential projects and Relais & Châteaux suites of the Basque Country. Unmatched when the budget follows.' },
  { name: 'Gerflor', desc: 'The Lyon-based French maker we know deeply. Their Mipolam and Texline ranges resist the Atlantic damp without difficulty. Underfloor-heating compatible, simple upkeep.' },
  { name: 'Forbo', desc: 'When the project calls for something natural, we look at Forbo. Their Marmoleum is a true linoleum made from linseed oil. Ideal for eco-responsible villas and restored Basque houses.' },
  { name: 'Object Carpet', desc: 'The Germans, for architect-designed villas and boutique hotels with a pared-back look. An assertive contemporary design, perfect finishes.' },
  { name: 'Hereke', desc: 'The Turkish hand-woven rugs, in silk or fine virgin wool. We lay them in the libraries and lounges of great classic-spirit family villas. The kind of object that is handed down.' },
]

const quartiers = [
  { nom: 'Historic centre', detail: 'Rue Gambetta, place Louis-XIV, the fishing port. Red-timbered Basque houses, townhouses, prestige boutiques, gastronomic restaurants of the bay.' },
  { nom: 'Sainte-Barbe', detail: 'A residential district on the hill, a view over the bay. Characterful family villas, architect-designed houses, prestige co-ownerships with a fine ocean aspect.' },
  { nom: 'Acotz district', detail: 'A northern seafront district, ocean-facing family villas, high-end detached-housing estates. A residential clientele attached to quality of execution and the view.' },
  { nom: 'Erromardie', detail: 'A seaside district to the north, a family beach, luxury campsites and holiday villas. Handed-down family holiday homes and upmarket co-ownerships.' },
  { nom: 'Lafitenia', detail: 'A surf district on the north coast, a legendary spot, contemporary architect-designed villas with a direct ocean view. High-end residential projects and holiday residences.' },
  { nom: 'Mayarco beach', detail: 'A preserved cove to the north, isolated villas and discreet family properties. A demanding clientele seeking confidentiality and absolute quality of execution.' },
  { nom: 'Socoa', detail: 'A port district facing Saint-Jean-de-Luz on the Ciboure side. Renovated fishermen\'s houses, seafood restaurants, the Socoa fort and historic heritage.' },
  { nom: 'Ciboure', detail: 'The twin town on the west side of the bay. Traditional Basque houses, cobbled lanes, a marina, fish restaurants and architectural heritage to preserve.' },
  { nom: 'Hendaye', detail: 'A border town to the south, a long family beach, Art Deco villas and Basque houses. Varied residential projects, from the border studio to the large family villa.' },
  { nom: 'Guéthary', detail: 'A chic Basque village between Saint-Jean-de-Luz and Biarritz. Architect-designed villas, restored Basque houses, a discreet and refined feel. A demanding international clientele.' },
  { nom: 'Bidart', detail: 'A coastal town to the north, cliffs and beaches, family villas and high-end tourist residences. An upmarket residential and hotel mix.' },
  { nom: 'Saint-Pée-sur-Nivelle', detail: 'A town of the Basque hinterland, traditional Basque houses, restored farms, country projects. Authentic building to preserve with respect for the local heritage.' },
]

const process = [
  { step: 'First contact', desc: 'A phone call or email. Gathering the key points: project type (family villa, Basque house, boutique hotel, restaurant), estimated area, desired schedule, seasonal constraints. For projects led by a Basque interior architect, direct contact with their agency.' },
  { step: 'Visit to Saint-Jean-de-Luz', desc: 'A visit organised within 2 to 3 weeks from Villedoux. Laser measuring, a survey of the access constraints, photos to coordinate colours with the woodwork, the Basque terracotta or the ocean bay windows. Costs included in the quote if the job is confirmed.' },
  { step: 'Material choice', desc: 'The Villedoux showroom or samples sent directly to Saint-Jean-de-Luz, to your address or the architect\'s. Final validation under the venue\'s Atlantic light, never in a showroom: the Saint-Jean light transforms the colours, especially the warm wools and the terracotta.' },
  { step: 'La Rochelle workshop making', desc: '3 to 16 weeks by range: custom Axminster, Wilton, silk, virgin wool, cut vinyl, bespoke rugs. Dry pre-assembly in the workshop to validate the fit before transport. This preparation is what allows a fast final laying in Saint-Jean-de-Luz despite the distance.' },
  { step: 'Laying in Saint-Jean-de-Luz', desc: 'A team mobilised on site with accommodation included in the quote, a schedule set to your availability or the hotel low season. Coordination with the concierge or the project manager. A full clean on delivery, finishes checked with you or the architect.' },
]

const faq = [
  { q: 'Do you really come to Saint-Jean-de-Luz from La Rochelle?', a: 'Yes, on the projects that justify it. Saint-Jean-de-Luz is 370 km away, four hours via the A10 then the A63. We organise a long trip, the team stays on site until delivery, accommodation included. The distance demands an impeccable workshop preparation. Everything is dry pre-assembled before departure, so the on-site laying goes fast. We work regularly on the Basque Coast, we know the constraints.' },
  { q: 'Do you work on the family villas of the Basque Country?', a: 'Yes, it is one of our favourite grounds on the coast. Sainte-Barbe, Acotz, Erromardie, Lafitenia concentrate a heritage of villas handed down from generation to generation. The old parquet, the Basque terracotta, the ocean view call for us to accompany them without competing. We work with your interior architect. Bespoke rugs and wool carpets in the Basque palette find their natural setting there.' },
  { q: 'How do you handle the Atlantic climate and the spray?', a: 'The salt spray and the Atlantic damp impose real rigour on the choice of materials. We set aside what works in a dry climate and take moth- and damp-treated wool, vinyl with a high plasticiser content that keeps its suppleness, rugs with a hand-sewn border that does not move. And we take particular care over the junctions to the bay windows and terraces to avoid any infiltration.' },
  { q: 'How long for a bespoke rug?', a: 'Allow ten to sixteen weeks for a custom Brintons Axminster with a motif validated on a cartoon. Eight to fourteen weeks for a haute-couture Tisca Tiara. Eight to fourteen for a Hereke with a hand-sewn border. Add the workshop making and the on-site laying. A complete villa project is planned over four to six months, to anticipate if the family arrives in July.' },
  { q: 'Do you work on the gastronomic restaurants of the bay?', a: 'Yes. On the fishing port, in the historic centre or on the Ciboure side, the acoustics make all the difference at the table. A wool carpet on a felt underlay cuts half the reverberation. Your guests have a better evening. We lay at night or on the closing day, you lose no service. We protect the kitchens, we clean everything, in the morning the room is ready.' },
  { q: 'Do you work in the traditional Basque houses?', a: 'Yes, and with great respect for the building. An etxe at Saint-Pée, a town house in Ciboure, a restored farm in the hinterland: each has its soul, original chestnut parquet, red terracotta, narrow staircases, intimate rooms. We stay in the regional tradition: a sandy palette, terracotta, discreet motifs. No question of imposing a choice that would betray the house.' },
  { q: 'How long does a wool carpet last on the seafront?', a: 'Allow fifteen to twenty years easily, even in the Atlantic climate. Virgin wool tolerates the ambient damp well, it absorbs and releases it without altering. Synthetics, by contrast, can deform. On vestibules and staircases, we choose rather a tightly woven wool with a discreet motif, which resists traffic better. A professional clean at the end of the season before the winter shutdown is enough to keep the first-day look.' },
]

export default function RevetementSolSaintJeanDeLuzPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/revetement-sol-saint-jean-de-luz#service',
        name: 'Floor covering in Saint-Jean-de-Luz',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Saint-Jean-de-Luz' },
          { '@type': 'AdministrativeArea', name: 'Pyrénées-Atlantiques' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Laying of carpet, vinyl and bespoke rugs in Saint-Jean-de-Luz and the Basque Coast',
        description: 'Design, workshop making and laying of carpet, vinyl and bespoke rugs for ocean-facing family villas, traditional Basque houses, boutique hotels and gastronomic restaurants in Saint-Jean-de-Luz.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Floor covering in Saint-Jean-de-Luz', item: 'https://cbsols.fr/en/revetement-sol-saint-jean-de-luz' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="saint-jean-de-luz" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Floor covering Saint-Jean-de-Luz</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Floor covering in Saint-Jean-de-Luz,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>the Basque soul.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Laying of carpet, vinyl and bespoke rugs in Saint-Jean-de-Luz. Ocean-facing family villas, red-timbered Basque houses, bay boutique hotels, gastronomic restaurants. A workshop based in La Rochelle, travel organised on the Basque Coast for prestige projects.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=saint-jean-de-luz" variant="primary" size="md">Request a quote</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>We travel to you</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Saint-Jean-de-Luz is a unique light, a strong tradition, and families who have handed down their villas for three generations. CB Sols supports these projects in respect of the Basque spirit, for over 28 years.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>For which kind of project</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Four settings, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>one and the same loyalty to the Basque spirit.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A project in Saint-Jean-de-Luz?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              A site visit, a costed quote.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Direct contact with your interior architect, your Basque decorator or with you. A visit organised within 2 to 3 weeks, a detailed quote within a week.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/en/contact?source=saint-jean-de-luz-cta1" variant="primary" size="md">Request a quote</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Basque Country specifics</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six requirements <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>specific to Saint-Jean projects.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Working in Saint-Jean-de-Luz is not reproducing a standard job. Here are the six points on which we structure our method from the first visit, to respect the Basque tradition and keep the seasonal schedule.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materials and ranges for Saint-Jean-de-Luz</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            The product families <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>we bring to the Basque Coast.</em>
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
              &ldquo;A Saint-Jean villa is approached through the Atlantic light and the Basque tradition. A carpet that sits with the red terracotta, a rug that answers the ocean view, impeccable finishes in the evening light.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, owner of CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?source=saint-jean-de-luz-citation" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>A site visit in Saint-Jean-de-Luz</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Partner makers</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Eight reference houses <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>for your Saint-Jean projects.</em>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Districts and towns where we work</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Saint-Jean-de-Luz and the Basque Coast, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from Bidart to Hendaye.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Our team travels across the whole of the Basque Coast as well as the hinterland, where the exceptional residential projects and the prestige boutique hotels are concentrated.
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
            Twenty minutes on the phone are enough to clarify the possible ranges, a realistic schedule and a budget order of magnitude for your Saint-Jean job.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?source=saint-jean-de-luz-cta2" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from Villedoux to Saint-Jean-de-Luz.</em>
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
            Floor covering in Saint-Jean-de-Luz, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>concrete answers.</em>
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
            Straight through to the owner. No hotline, no switchboard. Clear advice, an honest order of magnitude, a next step only if the project makes sense for you as for us.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="See also"
        sectionSubtitle="Our know-how covers other worlds that may interest you. Take your time to browse, ask your questions, we will answer them."
        items={[
          { href: '/en/revetement-sol-biarritz', title: 'Floor covering Biarritz', teaser: 'Basque Coast villas. Floors that resist the salt, the sand and the ocean light.', icon: MapPin },
          { href: '/en/revetement-sol-arcachon', title: 'Floor covering Arcachon', teaser: 'Bay houses and dune villas. Floors that take the sand, the light and daily life.', icon: MapPin },
          { href: '/en/revetement-sol-cap-ferret', title: 'Floor covering Cap Ferret', teaser: 'Oyster cabins, feet-in-the-sand villas. The discretion of a know-how that barely shows.', icon: Waves },
          { href: '/en/revetement-sol-bordeaux', title: 'Floor covering Bordeaux', teaser: 'Townhouses, échoppe lofts, stone houses. Floors that dialogue with the architecture.', icon: MapPin },
          { href: '/en/architectes', title: 'For architects', teaser: 'Material documentation, annotated samples, detailed quotes. Our role is to serve your vision.', icon: Building2 },
          { href: '/en/particuliers', title: 'For homeowners', teaser: 'Carpet, vinyl flooring, bespoke rugs: our know-how at the service of your home.', icon: Home },
          { href: '/en/showroom', title: 'Villedoux showroom', teaser: 'Come to see and touch the materials. By appointment, in Villedoux near La Rochelle.', icon: Store },
          { href: '/en/contact', title: 'Contact us', teaser: 'A question, a project, a quote within 48 hours. The owner answers you directly.', icon: Mail },
        ]}
      />

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Your Saint-Jean project <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>in the right hands.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A site visit in Saint-Jean-de-Luz. A detailed quote, premium finishes, respect for the Basque tradition. CB Sols, over 28 years of know-how at the service of exceptional projects on the Basque Coast.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=saint-jean-de-luz-final" variant="primary" size="md">Request a quote</Button>
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
