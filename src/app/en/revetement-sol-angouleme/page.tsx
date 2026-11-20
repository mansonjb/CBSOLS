import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Floor Covering Angoulême | Heritage and Commercial',
  description: 'Laying of carpet, vinyl and bespoke rugs in Angoulême. Townhouses of the plateau, comics-studio offices, gastronomic restaurants, Charente châteaux. CB Sols, over 28 years of know-how, regular travel from Villedoux.',
  alternates: {
    canonical: 'https://cbsols.fr/en/revetement-sol-angouleme',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-angouleme', en: 'https://cbsols.fr/en/revetement-sol-angouleme', es: 'https://cbsols.fr/es/revetement-sol-angouleme', },
  },
  keywords: ['floor covering Angoulême', 'carpet Angoulême', 'vinyl flooring Angoulême', 'rug laying Angoulême', 'flooring craftsman Angoulême', 'Charente château rug'],
  openGraph: {
    title: 'Floor covering in Angoulême, the elegance of the Charentes',
    description: 'Carpet, vinyl and bespoke rugs in Angoulême. Townhouses, comics studios, gastronomic restaurants, châteaux. CB Sols, over 28 years of know-how.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-angouleme.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Townhouses of the historic plateau', desc: 'You have a townhouse on the listed plateau. Woven wool carpet, a hand-sewn rug, precise joins on the old parquet. We approve every detail with you before laying. The heritage character stays intact.' },
  { title: 'Comics studios and publishers', desc: 'You are setting up a studio or a publishing house in Angoulême. Acoustic vinyl for the floors, carpet tiles in the offices, design finishes for the comics festival. The floor breathes the creative world.' },
  { title: 'Gastronomic and bistronomy restaurants', desc: 'You run a table in the centre or at the market halls. We come at night or on the closing day, you lose no service. A dense anti-stain carpet and careful acoustics.' },
  { title: 'Châteaux and country residences', desc: 'You renovate a family château or a Cognac-country manor. Bespoke rugs in the reception rooms, wool carpet in the master bedroom, joins on the original terracotta or parquet.' },
]

const exigences = [
  { title: 'The listed plateau, we respect it', desc: 'The Angoulême plateau is a conservation area: ramparts, cathedral, townhouses. We lay reversibly, without nailing, without aggressive gluing. The original parquet stays intact. Our passage is discreet, which is what is expected here.' },
  { title: 'The comics city, we speak its language', desc: 'Angoulême is also studios, the Comics Museum, the frescoes. For a creative studio or a loft, we offer design tiles, crisp plains, bold colours. For a classic lounge, we stay with sober wool. We match the material to the place, simply.' },
  { title: 'About two hours\' drive, and we are there', desc: 'Angoulême is 120 km from our workshop, about two hours via the A10 or the N141. It is very close. We pass through several times a month, we know the town. You call, we come to measure within the week, with no hidden travel surcharge.' },
  { title: 'We work with heritage trades', desc: 'On townhouses, you often have a cabinetmaker, a gilder, a decorative painter. We fit into the architect\'s schedule, we go in second-to-last so as not to damage the new carpet. You arbitrate nothing, we agree it among ourselves.' },
  { title: 'Less echo in large volumes', desc: 'The reception rooms are five metres to the ceiling, they resonate. A wool carpet on a felt underlay cuts half the echo. The room recovers its softness, conversations carry better. And the character of the place stays intact.' },
  { title: 'Tradition and contemporary, we know how to marry them', desc: 'Many projects here mix a classic lounge and a creative studio under the same roof. Wool carpet on one side, design tiles on the other, a precise join between the two. You keep your coherence, giving up neither the heritage nor the modernity.' },
]

const materiaux = [
  { name: 'Woven virgin-wool carpet EGE', desc: 'Our favourite material for the reception rooms of the plateau townhouses and the bedrooms of Charente châteaux. The wool takes a patina, does not crush, ages nobly. We choose with you a deep plain or a discreet geometric motif to sit with the existing décor. Fifteen to twenty years ahead of you.' },
  { name: 'Bespoke reconstructed Brintons Aubusson rugs', desc: 'When you want to dress an old parquet without masking it, the bespoke rug makes all the difference. We reproduce a historic motif in virgin wool, a hand-sewn border, dimensions to the centimetre. Allow ten to sixteen weeks\' making. The result speaks for itself on arrival.' },
  { name: 'Design vinyl floors for creative studios', desc: 'For a comics studio, a publishing house or a creative agency in Angoulême, we choose design vinyls. Gerflor Texline or Forbo Flotex in contemporary motifs, a class-33 rating that takes intensive use. The look fits the visual world of the comics city. Fifteen to twenty quiet years ahead of you.' },
  { name: 'Homogeneous vinyl for print works and workshops', desc: 'In a print works or a graphic-production workshop, the floor takes a beating: inks, solvents, cleaning products. We go for homogeneous vinyl rated P3, heat-welded. As an option, we can take an antistatic version for zones with sensitive equipment. Twenty to twenty-eight years in intensive use.' },
  { name: 'EGE Highline and Hospitality carpets', desc: 'For the gastronomic restaurants and boutique hotels of the centre, we go for ranges fire-treated at the fibre core. They pass fire safety without difficulty. A wide colour choice to line up with your décor. And they take intense service rhythms without losing their visual hold.' },
  { name: 'Brushed-brass and patinated-bronze Romus profiles', desc: 'For the thresholds and stair nosings, we take care over the detail. We coordinate with the original ironmongery of the townhouses and châteaux. On particular heritage projects, we can have bespoke profiles made. It is the kind of thing you notice on delivery, and that makes the difference.' },
]

const marques = [
  { name: 'EGE Carpets', desc: 'The Dane, our reference for the plateau townhouses and the Charente gastronomic restaurants. Their Highline and Hospitality ranges set a tone at once.' },
  { name: 'Gerflor', desc: 'The Lyon-based French maker we know inside out. Their ranges fit out the creative studios, print works, restaurants and office floors of Angoulême. A huge choice, simple upkeep.' },
  { name: 'Forbo', desc: 'When the project calls for something natural, we look at Forbo. Their Marmoleum is a true linoleum made from linseed oil. The Flotex cover the creative agencies, and the healthcare range the medical practices.' },
  { name: 'Brintons', desc: 'The British Axminster, the aristocracy of carpet. Up to thirty-six colours on a motif. We call on it for the plateau townhouses and the ceremonial classic-spirit châteaux.' },
  { name: 'Tarkett', desc: 'For office floors that call for real acoustic comfort, we go for Tarkett iQ Granit. It ages well and stays our reference for hotel wet zones too.' },
  { name: 'Tisca Tiara', desc: 'The Swiss maker, the very top of the range. We bring them out for exceptional residential projects and the suites of Charente châteaux turned into Relais & Châteaux.' },
  { name: 'Object Carpet', desc: 'The Germans, for comics studios, publishers and design agencies. An assertive contemporary design, perfect finishes. Perfect for the Angoulême creative scene.' },
  { name: 'Bolon', desc: 'The Swedish maker of flocked vinyl. A contemporary look that takes intense traffic. We lay them in reception halls, design restaurants and the cultural spaces of Angoulême.' },
]

const quartiers = [
  { nom: 'Historic centre (the plateau)', detail: 'The Angoulême plateau, ramparts, town hall, Saint-Pierre cathedral, place du Mûrier. 18th and 19th-century townhouses, ceremonial buildings, gastronomic restaurants, prestige boutiques.' },
  { nom: 'Saint-Cybard', detail: 'A historic district below the plateau, on the banks of the Charente. Former paper mills converted into lofts, artists\' studios, trendy restaurants, an active comics cultural scene.' },
  { nom: 'Bel-Air-Grand-Font', detail: 'A residential district in urban renewal to the north. New builds, collective facilities, school and cultural amenities.' },
  { nom: 'Sillac-Grand-Font', detail: 'A north-east district, a residential and office mix with corporate headquarters and logistics platforms. Family homes and recent co-ownerships.' },
  { nom: 'La Madeleine', detail: 'A residential and commercial district to the east, a market and local shops, bourgeois co-ownerships, independent-profession practices.' },
  { nom: 'L\'Houmeau', detail: 'A historic district on the banks of the Charente, former paper mills and renovated workers\' houses. A creative cultural scene, restaurants and artists\' lofts.' },
  { nom: 'Soyaux', detail: 'A bordering town to the east, a mix of detached-housing and business zones. Corporate headquarters and recent co-ownerships.' },
  { nom: 'Ruelle-sur-Touvre', detail: 'A bordering town to the east, the Touvre valley, a residential and heritage-industrial mix (former arms factories). Fine properties and building restoration.' },
  { nom: 'Fléac', detail: 'A bordering town to the west on the banks of the Charente, high-end residential, family properties and independent-profession practices. A clientele attached to quality of execution.' },
  { nom: 'Saint-Yrieix-sur-Charente', detail: 'A bordering town to the north-west, a lake, residential and leisure facilities. Family homes and upmarket housing developments.' },
  { nom: 'Magnac-sur-Touvre', detail: 'A bordering town to the east, the Touvre valley, characterful residential and fine properties. Charente country heritage to preserve.' },
  { nom: 'Mornac', detail: 'A bordering town to the north-east, detached housing and family villas. A stable clientele attached to personalised advice and careful finishes.' },
]

const process = [
  { step: 'First contact', desc: 'A phone call or email. Gathering the key points: project type (plateau townhouse, Charente château, comics studio, restaurant, office), estimated area, desired schedule, any heritage constraints. For projects led by an interior architect, direct contact with their agency.' },
  { step: 'Visit to Angoulême', desc: 'A visit organised within 1 to 2 weeks from Villedoux. Laser measuring, a survey of the plateau access constraints, photos to coordinate colours with the existing woodwork and parquet. Costs included in the quote if the job is confirmed.' },
  { step: 'Material choice', desc: 'The Villedoux showroom or samples sent directly to Angoulême, to your address or the architect\'s. Final validation under the venue\'s light, never in a showroom: the Charente light transforms the colours, especially the silky-sheen wools of the reception rooms.' },
  { step: 'La Rochelle workshop making', desc: '3 to 16 weeks by range: custom Axminster, Wilton, silk, virgin wool, cut vinyl, bespoke rugs. Dry pre-assembly in the workshop to validate the fit before transport. This preparation is what lets us keep a final laying of 2 to 5 days in Angoulême.' },
  { step: 'Laying in Angoulême', desc: 'A team mobilised on site, accommodation included in the quote, a schedule set to your availability or the site window. Coordination with the concierge, the managing agent or the project manager. A full clean on delivery, finishes checked with you or the architect.' },
]

const faq = [
  { q: 'Do you really come to Angoulême from La Rochelle?', a: 'Yes, and often. Angoulême is 120 km away, less than two hours via the A10 or the N141. It is very close. We pass through regularly, in the flow of our south-west jobs. We come to measure at the start of the project, then we come back to lay at the end. Accommodation is included in the quote. On large jobs of the plateau or the Charente countryside, the team stays on site until delivery.' },
  { q: 'Do you work in the plateau townhouses?', a: 'Yes, it is one of our favourite grounds. The plateau concentrates 18th and 19th-century townhouses of stunning quality. The old parquet and original woodwork call for respect. Whenever possible we lay reversibly, without nailing, without aggressive gluing. Reconstructed Aubusson bespoke rugs find their natural setting there. We coordinate with your interior architect when there is one.' },
  { q: 'Do you work on comics studios and the creative industry?', a: 'Yes, and it is a ground we particularly enjoy. Angoulême, the French capital of comics, concentrates studios, publishers, animation schools (EMCA), video-game studios. The requirements are precise: design vinyls for the open plans, acoustic carpet tiles for the workrooms. We work with Forbo Flotex, Object Carpet and Bolon to fit the visual world of this ecosystem unique in France.' },
  { q: 'Do you work on the châteaux of the Charente countryside?', a: 'Yes, it is one of our historic grounds. Around Cognac, Jarnac, the Touvre valley, we work on family châteaux, restored fortified houses, wine-growing manors. We coordinate with your interior architect, your decorator or the heritage curator. Ceremonial wool carpets, bespoke Aubusson rugs, precise joins on original parquet and terracotta. Discretion and respect for the place, that is our mark.' },
  { q: 'How does it work in a conservation area on the plateau?', a: 'On an interior floor, the heritage architect is rarely consulted directly. But we document everything anyway, out of habit: material sheets, fire reports, before and after photos. You have a clean file if you sell the property later, or if the heritage architect comes back on another matter. When the project touches something visible from the street or the ramparts, we align with your heritage architect.' },
  { q: 'Do you work during the International Comics Festival?', a: 'We avoid the last fortnight of January, it is complete ferment on the plateau. Hotels, restaurants, cultural spaces are saturated, access is complicated. We plan the jobs upstream (October to December) or downstream (March-April). For structures exhibiting during the festival, we offer laying brought forward by several weeks, with a technical check before opening.' },
  { q: 'How long does a wool carpet last in a château?', a: 'Allow fifteen to twenty years easily, in private or semi-public use. Virgin wool takes a patina, densifies instead of crushing, it keeps its visual hold for a long time. On vestibules and monumental staircases, we choose rather a tightly woven wool with a discreet geometric motif, which resists traffic better. A professional clean once a year is enough, ideally at the end of the event season.' },
]

export default function RevetementSolAngoulemePageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/revetement-sol-angouleme#service',
        name: 'Floor covering in Angoulême',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Angoulême' },
          { '@type': 'AdministrativeArea', name: 'Charente' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Laying of carpet, vinyl and bespoke rugs in Angoulême and the Charente',
        description: 'Design, workshop making and laying of carpet, vinyl and bespoke rugs for plateau townhouses, comics studios, gastronomic restaurants and Charente châteaux in Angoulême.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Floor covering in Angoulême', item: 'https://cbsols.fr/en/revetement-sol-angouleme' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Floor covering Angoulême</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Floor covering in Angoulême,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>the elegance of the Charentes.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Laying of carpet, vinyl and bespoke rugs in Angoulême. Townhouses of the historic plateau, print-works and comics-studio offices, gastronomic restaurants, châteaux and fine country residences. A workshop based in La Rochelle, travel to Angoulême organised each month.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=angouleme" variant="primary" size="md">Request a quote</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>We travel to you</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Angoulême is a town where the heritage of the plateau dialogues with the contemporary creation of comics. A rich, demanding ground, where CB Sols has known how to combine tradition and modernity for over 28 years.&rdquo;
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
            Four settings, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from heritage to contemporary.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A project in Angoulême?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              A site visit, a costed quote.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Direct contact with your interior architect, your decorator or with you. A visit organised within 1 to 2 weeks, a detailed quote within a week.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/en/contact?source=angouleme-cta1" variant="primary" size="md">Request a quote</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Angoulême specifics</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six requirements <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>specific to Angoulême projects.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Working in Angoulême is not reproducing a standard job. Here are the six points on which we structure our method from the first visit, to respect the heritage of the plateau and support contemporary creation.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materials and ranges for Angoulême</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            The product families <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>we bring to the Charente.</em>
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
              &ldquo;Angoulême is knowing how to play the ceremonial carpet in a plateau townhouse in the morning, and the design tile for a comics studio in Saint-Cybard in the afternoon. CB Sols is exactly that versatility.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, owner of CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?source=angouleme-citation" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>A site visit in Angoulême</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Partner makers</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Eight reference houses <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>for your Angoulême projects.</em>
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
            Angoulême and Greater Angoulême, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>out to the Charente valleys.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Our team travels across the whole of Greater Angoulême as well as the towns of the surrounding Charente countryside, where the heritage residential, creative-office and family-château projects are concentrated.
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
            Twenty minutes on the phone are enough to clarify the possible ranges, a realistic schedule and a budget order of magnitude for your Angoulême job.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?source=angouleme-cta2" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from Villedoux to Angoulême.</em>
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
            Floor covering in Angoulême, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>concrete answers.</em>
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

      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>See also</div>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Our know-how covers the Charentes, Charente-Maritime and beyond, on every exceptional heritage and creative ground.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/en/revetement-sol-la-rochelle" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Floor covering La Rochelle →</Link>
            <Link href="/en/moquette-chateau" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Château carpet →</Link>
            <Link href="/en/revetement-sol-bordeaux" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Floor covering Bordeaux →</Link>
            <Link href="/en/architectes" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Interior architects →</Link>
            <Link href="/en/particuliers" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>For homeowners →</Link>
            <Link href="/en/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Villedoux showroom →</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Your Angoulême project <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>in the right hands.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A site visit in Angoulême. A detailed quote, premium finishes, respect for the heritage of the plateau and support for contemporary creation. CB Sols, over 28 years of know-how at the service of exceptional projects in the Charente.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=angouleme-final" variant="primary" size="md">Request a quote</Button>
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
