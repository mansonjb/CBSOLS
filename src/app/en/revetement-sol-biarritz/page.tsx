import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Mail, MapPin, Sparkles, Store, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Floor Covering in Biarritz | Basque Coast Villas',
  description: 'Laying of carpet, vinyl and bespoke rugs in Biarritz and on the Basque Coast. Belle Époque villas, contemporary residences, Relais & Châteaux hotels. CB Sols, over 28 years of know-how, travel from La Rochelle.',
  alternates: {
    canonical: 'https://cbsols.fr/en/revetement-sol-biarritz',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-biarritz', en: 'https://cbsols.fr/en/revetement-sol-biarritz' },
  },
  keywords: ['floor covering Biarritz', 'villa carpet Biarritz', 'Basque Coast flooring', 'rug laying Biarritz', 'flooring craftsman Biarritz'],
  openGraph: {
    title: 'Floor covering in Biarritz, Basque elegance',
    description: 'Carpet, vinyl and bespoke rugs in Biarritz. Seafront Belle Époque villas, contemporary residences, exceptional hotels. CB Sols, over 28 years.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-biarritz.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Seafront Belle Époque villas', desc: 'You have a villa on the seafront? We lay a wool carpet or a hand-sewn rug without nailing a thing. We respect the original parquet and the woodwork. If you want to remove it in ten years, everything stays intact.' },
  { title: 'Prestige contemporary residences', desc: 'Your architect has delivered a brand-new villa facing the ocean. We choose light floors that catch the light. Sealed sisal or a boucle carpet in the bedrooms, a sober rug in the lounge. We validate each sample with the agency.' },
  { title: 'Relais & Châteaux and 5-star hotels', desc: 'You run a palace hotel or a Relais & Châteaux. We come at night or in the low season. High-density fire-treated carpet, hand-sewn rugs for the suites. Your guests never see the work.' },
  { title: 'Architects\' practices and exceptional offices', desc: 'You receive your clients in a city-centre office. A careful floor sets the tone from the entrance. Acoustic vinyl for the work spaces, wool carpet for reception. We set everything to your furniture.' },
]

const exigences = [
  { title: 'We respect the Belle Époque villas', desc: 'Biarritz keeps a rare heritage: Belle Époque, neo-Basque, modernism. Many villas have their original parquet. We lay reversibly, we match the colours to the existing woodwork. Our intervention stays discreet, which is how it is done here.' },
  { title: 'The ocean light, we test it on site', desc: 'The light of the Basque Coast changes everything. A wool seen in a showroom has nothing to do with the same laid facing the ocean. We bring the samples to your place, we look at them in the morning and the afternoon. You choose with no nasty surprise.' },
  { title: 'Salt and damp, we choose accordingly', desc: 'The Basque air is mild but laden. Bad floors cup after a single winter. We select treated fibres, seaside-compatible adhesives, stable underlays. You keep a clean, firm floor, winter after winter.' },
  { title: 'We come outside July-August', desc: 'Summer in Biarritz is packed. We fit the jobs between November and April, sometimes September-October. Projects are planned four to six months ahead. You get the villa back ready for the season, without having seen a single roll pass.' },
  { title: 'Three and a half hours\' drive', desc: 'Biarritz is 340 km from our workshop. When we come down, we come down with the full team and we sleep on site. The materials are prepared at Villedoux before departure. On site, we lay fast, with no pointless shuttling.' },
  { title: 'We dialogue with your architect', desc: 'Many projects go through agencies in Paris, London, Madrid. We adapt: samples sent to the agency, photos shared at each step, remote validations. Your architect keeps control, you follow transparently. Nobody is left aside.' },
]

const materiaux = [
  { name: 'Premium woven virgin-wool carpet', desc: 'Our top material for the reception rooms of Belle Époque villas. The wool takes a patina, does not crush, ages nobly. We choose with you a deep plain, a discreet marl or a bespoke motif to sit with the original woodwork and the Basque lime renders. Fifteen to twenty quiet years ahead of you.' },
  { name: 'High-end hospitality carpet', desc: 'For the Biarritz Relais & Châteaux and 5-star hotels, we go for ranges fire-treated at the fibre core. They pass fire safety without difficulty. The colour choice is wide, we line up with your décor. And they take intense service rhythms without losing their visual hold between two replacements.' },
  { name: 'Hand-sewn bespoke rugs', desc: 'For the lounges of exceptional villas and the palace suites, the bespoke rug makes all the difference. Dimensions to the centimetre, a hand-sewn border, a motif matched to your décor. Classic reproductions or contemporary creations, by the project. Allow ten to sixteen weeks\' making. It is what dresses an original parquet without masking it.' },
  { name: 'High-density vinyl for wet zones', desc: 'For bathrooms, fitness spaces and hotel spa zones, we heat-weld the sheets. The skirting rises into a rounded cove, so water gets through nowhere. The surface is slightly non-slip for your barefoot guests. And it takes the intensive cleaning of prestige establishments without flinching.' },
  { name: 'Sealed sisal for contemporary residences', desc: 'In a modern villa facing the ocean, sealed sisal brings the raw touch sought after. It fits perfectly into the Basque Coast spirit, the driftwood, the natural renders. Marled shades of sand, ecru, soft taupe. It resists classic family use and the sand brought back from the beach.' },
]

const marques = [
  { name: 'EGE Carpets', desc: 'The Dane, our reference for the Relais & Châteaux and 5-star hotels of the Basque Coast. Their Highline and Hospitality ranges set a tone from the entrance.' },
  { name: 'Brintons', desc: 'The British Axminster, the aristocracy of carpet. Up to thirty-six colours on a motif. We call on it for the Biarritz Belle Époque villas and the great heritage interiors.' },
  { name: 'Tisca Tiara', desc: 'The Swiss maker, the very top of the range. We bring them out for exceptional family villas and the suites of Basque palace hotels. When the budget follows, the result is unmatched.' },
  { name: 'Forbo', desc: 'When the project calls for something natural, we look at Forbo. Their Marmoleum is a true linoleum, their Surestep take the hotel wet zones without flinching.' },
  { name: 'Object Carpet', desc: 'The Germans, for the Basque architects\' practices and the signature residences of the Atalaye plateau. An assertive contemporary design, perfect finishes.' },
  { name: 'Bolon', desc: 'The Swedish maker of flocked vinyl, our reference for contemporary oceanfront interiors. Washable, robust, a dense palette. Ideal for modern villas and sea-view restaurants.' },
  { name: 'Hereke', desc: 'The Turkish hand-woven rugs, silk or virgin wool. We lay them in the libraries and lounges of historic Belle Époque villas. It is the kind of object that is handed down.' },
  { name: 'Gerflor', desc: 'The Lyon-based French maker we know inside out. Their Mipolam and Texline are our all-rounder for architects\' offices and the wet zones of hotels and villas.' },
]

const quartiers = [
  { nom: 'Côte des Basques', detail: 'The historic Biarritz seafront, Belle Époque villas facing the ocean, 19th-century bourgeois buildings. An exceptional view over the bay, a preserved architectural heritage.' },
  { nom: 'Le Phare', detail: 'Pointe Saint-Martin, the Atalaye plateau, ocean-facing residences. A mix of restored old villas and contemporary architect-designed developments.' },
  { nom: 'Impérial', detail: 'The district of the Hôtel du Palais, historic palace hotels, Second Empire and Belle Époque villas. The heart of Biarritz seaside history, the maximum requirement to respect the building.' },
  { nom: 'Saint-Charles', detail: 'A quiet, bourgeois residential district, family villas, gardens and pine woods. A clientele attached to quality of execution and the discretion of the intervention.' },
  { nom: 'Aguiléra', detail: 'A residential plateau, 1930s and contemporary villas, international schools and family residences. Recent high-end developments in the heart of the pine wood.' },
  { nom: 'Bibi Beaurivage', detail: 'A seaside district between Côte des Basques and Bidart, sea-facing villas, contemporary residences with a panoramic view over the ocean.' },
  { nom: 'Anglet', detail: 'A bordering town to the north, Chiberta, La Chambre d\'Amour. Family villas in the pine wood, seaside hotels, historic golf and tennis clubs.' },
  { nom: 'Bidart', detail: 'An authentic village to the south, cliffs and beaches, neo-Basque villas facing the ocean, boutique hotels and prestige contemporary residences.' },
  { nom: 'Guéthary', detail: 'A small preserved Basque port, historic family villas, a village feel. Rare and demanding residential projects.' },
  { nom: 'Saint-Jean-de-Luz', detail: 'The bay of Saint-Jean, the fishing port, the listed old town. Family villas, charming sea-facing hotels, prestige second homes.' },
  { nom: 'Ciboure', detail: 'Across the bay, the port of Socoa, traditional Basque houses, family villas on the hillsides facing Saint-Jean-de-Luz.' },
  { nom: 'Hendaye', detail: 'The southern tip of the French Basque Country, an immense beach, Belle Époque villas, contemporary residences facing the ocean and the Spanish border.' },
]

const process = [
  { step: 'First contact', desc: 'A phone call or email. Gathering the key points of the Basque project: type of property, areas, desired schedule, context (residence, hotel, practice). If the project is led by an interior architect in Paris, London or Madrid, we contact their agency directly.' },
  { step: 'Basque Coast visit', desc: 'A visit organised within 3 to 4 weeks. Measuring, a survey of the villa or hotel access constraints, photos to coordinate colours with the original woodwork. Samples presented on site under the Atlantic light, at several moments of the day.' },
  { step: 'Material choice and quote', desc: 'A detailed quote within a week. Final validation of the colours, bespoke rugs, skirting and profiles. Any exchanges with the project\'s architecture agency for remote validation. The order placed on confirmation, factory lead time 3 to 12 weeks by range.' },
  { step: 'Villedoux workshop making', desc: 'Pre-cutting and pre-assembly of the materials at La Rochelle. A dry check of the dimensions before transport. This upfront preparation is what lets us keep a final laying of 4 to 8 days in Biarritz, with no pointless round trips on the road.' },
  { step: 'Laying in Biarritz', desc: 'A team mobilised on site, accommodation included. A schedule set to your availability or the site window, ideally outside the summer season. Coordination with the hotel concierge or the villa caretaker. A full clean on delivery, finishes checked with you or the architect.' },
]

const faq = [
  { q: 'Do you really come to Biarritz from La Rochelle?', a: 'Yes, on the projects that justify it. Biarritz is 340 km away, or 3.5 to 4 hours\' drive. We come down for the heritage villas, the Relais & Châteaux, the architect-designed residences. The full team travels and stays on site for the duration of the job, accommodation included. We prepare everything upfront at the workshop, so the on-site laying goes fast: four to eight days for a family villa, after one or two preparatory visits.' },
  { q: 'Do you work in the Biarritz Belle Époque villas?', a: 'Yes, that is where we take a lot of pleasure. The Côte des Basques, the Impérial and the Atalaye keep a superb heritage of Belle Époque and neo-Basque villas. The parquet, the woodwork, the Art Deco ironwork call for respect. Whenever possible we lay reversibly, without nailing, without aggressive gluing. We coordinate with your heritage architect, whether in France or abroad.' },
  { q: 'Do you work in the prestige hotels of the coast?', a: 'Yes, it is an important part of our activity here. The Basque Coast concentrates Relais & Châteaux, historic palace hotels and high-end boutique hotels. We lay at night or during the seasonal closures so as not to disrupt the operation. EGE Highline and Hospitality are our main references, fire-treated at the fibre core. We hand the material traceability and fire reports directly to the director for their file.' },
  { q: 'When is it best to work in Biarritz?', a: 'From November to April, out of season. For family villas, it is the period when the owners are less present. For hotels and restaurants, it is the annual closure or the low season, generally between mid-November and late February. We avoid July and August, and the big Basque festival periods when the coast is saturated. The good slots are planned four to six months ahead, especially with a bespoke rug in the lot.' },
  { q: 'Do you work with Parisian or international architects?', a: 'Frequently. The prestige Biarritz projects are often specified by agencies based in Paris, London, Madrid or New York. We adapt to the remote way of working: we send the samples to their agency, we share detailed photos at each step, we validate the choices before launching the making. And we provide all the technical documentation for their premium site file.' },
  { q: 'How do you handle the marine damp?', a: 'The Basque air is laden with damp and salt, it calls for attention. We steer towards water-repellent-treated virgin wools, Bolon that does not cup, high-density vinyl for rooms exposed to the spray. The adhesives and underlays are chosen for their marine hold. On front-line villas, we sometimes reinforce the substrate preparation with a prior anti-damp treatment.' },
  { q: 'Do you also lay bespoke rugs in Biarritz?', a: 'Yes, it is an important part of the trade on the Basque Coast. Hand-sewn rugs, dimensions to the centimetre, a worked border, a motif matched to the décor. Aubusson or Hereke reproductions for Belle Époque interiors, contemporary creations for architect-designed villas. Allow ten to sixteen weeks\' making. It is often what transforms a lounge, especially when dressing an original parquet without masking it.' },
]

export default function RevetementSolBiarritzPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/revetement-sol-biarritz#service',
        name: 'Floor covering in Biarritz',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Biarritz' },
          { '@type': 'AdministrativeArea', name: 'Pyrénées-Atlantiques' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Laying of carpet, vinyl and bespoke rugs in Biarritz and the Basque Coast',
        description: 'Design, workshop making and laying of carpet, vinyl and bespoke rugs for Belle Époque villas, Relais & Châteaux hotels, contemporary residences and architects\' practices in Biarritz, Anglet, Bidart, Saint-Jean-de-Luz.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Floor covering in Biarritz', item: 'https://cbsols.fr/en/revetement-sol-biarritz' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="biarritz" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Floor covering Biarritz</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Floor covering in Biarritz,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>Basque elegance.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Laying of carpet, vinyl and bespoke rugs in Biarritz and on the Basque Coast. Seafront Belle Époque villas, contemporary residences, Relais & Châteaux hotels, architects\' practices. A workshop based near La Rochelle, travel organised for prestige projects.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=biarritz" variant="primary" size="md">Request a quote</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Prestige projects</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Biarritz is the Belle Époque demand facing the ocean. A Côte des Basques villa or a Relais & Châteaux suite: it is the same care for detail that CB Sols has brought for over 28 years.&rdquo;
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
            Four settings, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>one and the same Basque demand.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A project in Biarritz?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              A site visit, a costed quote.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Direct contact with you or your architect. A visit organised within 3 to 4 weeks, a detailed quote within a week.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/en/contact?from=biarritz-cta1" variant="primary" size="md">Request a quote</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Basque Coast specifics</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six requirements <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>specific to Basque projects.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Working in Biarritz and on the Basque Coast calls for a method of its own. Here are the six points on which we structure our approach, from the choice of materials to the international coordination.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materials and ranges for Biarritz</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            The product families <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>we bring to the Basque Country.</em>
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
              &ldquo;A Belle Époque villa facing the ocean is a parquet to respect, a light to understand, a marine salt to anticipate. Three trades we have practised for over 28 years.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, owner of CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?from=biarritz-citation" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>A home visit in Biarritz</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Partner makers</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Eight reference houses <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>for your Basque projects.</em>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Basque Coast districts and towns</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Biarritz and the Basque Coast, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from Anglet to Hendaye.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Our team travels across the whole of the Basque Coast, from the historic districts of Biarritz to the southern border villages, where the prestige residential and hotel projects are concentrated.
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
            Twenty minutes on the phone to clarify the possible ranges, the schedule and a budget order of magnitude for your Basque job.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=biarritz-cta2" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from Villedoux to Biarritz.</em>
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
            Floor covering in Biarritz, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>concrete answers.</em>
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
            Straight through to the owner. No hotline. Clear advice, a next step only if the project makes sense for you as for us.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="See also"
        sectionSubtitle="Our know-how covers other worlds that may interest you. Take your time to browse, ask your questions, we will answer them."
        items={[
          { href: '/en/revetement-sol-saint-jean-de-luz', title: 'Floor covering Saint-Jean-de-Luz', teaser: 'Basque houses and seaside villas. The comfort of a floor built to resist the salt.', icon: MapPin },
          { href: '/en/revetement-sol-arcachon', title: 'Floor covering Arcachon', teaser: 'Bay houses and dune villas. Floors that take the sand, the light and daily life.', icon: MapPin },
          { href: '/en/revetement-sol-cap-ferret', title: 'Floor covering Cap Ferret', teaser: 'Oyster cabins, feet-in-the-sand villas. The discretion of a know-how that barely shows.', icon: Waves },
          { href: '/en/revetement-sol-bordeaux', title: 'Floor covering Bordeaux', teaser: 'Townhouses, échoppe lofts, stone houses. Floors that dialogue with the architecture.', icon: MapPin },
          { href: '/en/sols-monaco', title: 'Monaco floors', teaser: 'Yachts, apartments and villas. The level of demand and discretion an international clientele expects.', icon: Sparkles },
          { href: '/en/architectes', title: 'For architects', teaser: 'Material documentation, annotated samples, detailed quotes. Our role is to serve your vision.', icon: Building2 },
          { href: '/en/showroom', title: 'Villedoux showroom', teaser: 'Come to see and touch the materials. By appointment, in Villedoux near La Rochelle.', icon: Store },
          { href: '/en/contact', title: 'Contact us', teaser: 'A question, a project, a quote within 48 hours. The owner answers you directly.', icon: Mail },
        ]}
      />

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Your Biarritz project <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>in the right hands.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A site visit in Biarritz. A detailed quote, premium finishes, respect for the Basque heritage and the Atlantic light. Over 28 years of CB Sols know-how at the service of the Basque Coast.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=biarritz-final" variant="primary" size="md">Request a quote</Button>
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
