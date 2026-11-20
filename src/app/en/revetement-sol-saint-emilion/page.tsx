import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Building2, Castle, Home, Mail, MapPin, Store, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Floor Covering Saint-Émilion | Gironde Wine Châteaux',
  description: 'Laying of carpet, vinyl and bespoke rugs for the wine châteaux of Saint-Émilion and the Libournais grands crus. Reception cellars, tasting rooms, private suites. CB Sols, over 28 years of experience.',
  alternates: {
    canonical: 'https://cbsols.fr/en/revetement-sol-saint-emilion',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-saint-emilion', en: 'https://cbsols.fr/en/revetement-sol-saint-emilion', es: 'https://cbsols.fr/es/revetement-sol-saint-emilion', },
  },
  keywords: ['floor covering Saint-Émilion', 'wine château carpet', 'tasting cellar vinyl flooring', 'bespoke rug Libournais', 'flooring craftsman Gironde'],
  openGraph: {
    title: 'Floor covering in Saint-Émilion, the floor of the grands crus',
    description: 'Carpet, vinyl and bespoke rugs for wine châteaux in Saint-Émilion and the Libournais. CB Sols, over 28 years of know-how.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-saint-emilion.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Reception and tasting cellars', desc: 'Your cellar is the first impression you give a broker or a private client. Wool carpet to absorb the conversations. Stone-effect vinyl in the circulation. A bespoke rug in the reception lounge.' },
  { title: 'Estate dining rooms', desc: 'You receive at the estate table. We lay a wool carpet on a felt underlay for the acoustics. A bespoke rug under the ceremonial table. We come in the off-season, never during the harvest.' },
  { title: 'Guest suites in a wine château', desc: 'You welcome your visitors in premium guest rooms. Wool carpet in the bedrooms, wood-effect vinyl on the bathroom side, a bespoke rug in the private lounge. The tone is set the moment you open the door.' },
  { title: 'Offices and direct-sale shops', desc: 'You run an owner\'s office and a shop at the estate. Acoustic vinyl to work in peace, carpet tiles elsewhere. We match the palette to the antique furniture you already have.' },
]

const exigences = [
  { title: 'We respect the harvest calendar', desc: 'September-October: no disrupting the harvest. Winter and high summer are the good windows to work. We set everything well upstream with the cellar master. You lose not a day of production.' },
  { title: 'We keep the old terracotta', desc: 'Many châteaux have their original terracotta or stone tiles in the ceremonial rooms. We prefer a fine bespoke rug, laid reversibly, over a glued carpet. If you change your mind one day, the historic floor is intact.' },
  { title: 'Acoustics for tastings', desc: 'A tasting happens in a measured voice, with precise terms. A bare room resonates, it tires the guests and dilutes the message. A wool carpet or a large rug on a felt underlay transform the listening. The conversation gains in finesse.' },
  { title: 'Wine-tourism reception, the detail counts', desc: 'Your visitors pay for a complete experience: the glass, the light, the floor underfoot. A careful cellar underfoot tells the same story as the great wine in the glass. We match the material to the estate\'s discourse. It all makes sense.' },
  { title: 'Coordination with architect and estate manager', desc: 'On a grand cru there is often a Parisian architect and an estate manager on site. We fit into that team, we provide the technical sheets and certificates, we send samples to validate under the cellar light. You keep control, we follow.' },
  { title: 'We come from La Rochelle, fast', desc: 'The Libournais is two hours from our workshop. We come up regularly, we know the Saint-Émilion roads. You call, we come to measure within the week. No hidden travel surcharge, no middleman.' },
]

const materiaux = [
  { name: 'Virgin-wool Wilton and custom Axminster carpet', desc: 'Our top material for reception rooms and Relais & Châteaux guest suites. The British Axminster allows up to thirty-six colours in a single motif. So we can integrate your family crest or a house drawing. Allow eight to twelve weeks in custom, four to eight weeks for a classic Wilton.' },
  { name: 'EGE Hospitality carpet, Bfl-s1 rated', desc: 'For a tasting cellar or a room that receives the public, you need a carpet that passes fire safety. EGE Hospitality is fire-treated at the fibre core, so rated Bfl-s1. A wide colour choice to line up with your signage. And it takes the rhythms of the primeurs in April and the harvest in September.' },
  { name: 'Tarkett iQ Granit Acoustic and Forbo Coral vinyl', desc: 'For cellar circulation and the entrances of cellars open to the public, we go for professional vinyl. The acoustic insulation goes up to nineteen decibels. A matt plain or stone-effect look, we match your architecture. We heat-weld the sheets, the finish is continuous, upkeep is done in five minutes.' },
  { name: 'Reconstructed Hereke and Aubusson rugs', desc: 'For a reception room or a château library, the bespoke rug does the job. We reproduce a historic motif in virgin wool, a hand-sewn border, dimensions to the centimetre. We can slip in a discreet wine detail, a vine leaf or a stylised bunch. Allow ten to sixteen weeks\' weaving.' },
  { name: 'High-end Bolon flocked vinyl', desc: 'For contemporary wine-tourism spaces and direct-sale shops, Bolon ticks every box. The natural shades sit with the stone and wood of the estate. The Swedish flocked vinyl takes intensive use. And the floor ages nobly over twenty years, without ever marking.' },
  { name: 'Brushed-brass and patinated-bronze Romus profiles', desc: 'The thresholds and stair nosings, we take care over them. We coordinate with the château\'s original ironmongery and the bronze fittings of the ceremonial doors. On particular heritage projects, we can have the vintage or the estate\'s initial engraved on the profile. It is this kind of detail that leaves a mark.' },
]

const marques = [
  { name: 'EGE Hospitality', desc: 'The Dane is our reference for the grands crus and Relais & Châteaux. Their Highline and Hospitality ranges pass fire safety without difficulty, and they set a tone at once.' },
  { name: 'Brintons', desc: 'The British Axminster, the aristocracy of carpet. Up to thirty-six colours on a motif. When you want to integrate a crest or a house drawing into the weave, we call Brintons.' },
  { name: 'Tisca Tiara', desc: 'The Swiss maker, the very top of the range. We bring them out for palace suites and Relais & Châteaux guest rooms. When the budget follows, the result is unmatched.' },
  { name: 'Tarkett iQ Granit Acoustic', desc: 'Professional vinyl par excellence, with acoustic insulation up to nineteen decibels. Our standard for tasting cellars and reception lounges that call for calm.' },
  { name: 'Forbo', desc: 'When the project calls for something natural, we look at Forbo. Their Marmoleum is a true linoleum made from linseed oil. The Coral are perfect for high-traffic wine-tourism entrances.' },
  { name: 'Bolon', desc: 'The Swedish maker of flocked vinyl. A contemporary look found in modern cellars and direct-sale shops. Allow twenty years of hold easily.' },
  { name: 'Object Carpet', desc: 'The Germans, for estate offices and family boardrooms. A contemporary design, perfect finishes. When you want to step outside the classic codes.' },
  { name: 'Hereke', desc: 'The Turkish hand-woven rugs, in silk or fine virgin wool. We lay them in the libraries and reception rooms of historic châteaux. It is the kind of object that is handed down.' },
]

const quartiers = [
  { nom: 'Saint-Émilion village', detail: 'A UNESCO-listed medieval town. Châteaux at the heart of the appellation, direct-sale shops, hotels and gastronomic restaurants.' },
  { nom: 'Premiers Grands Crus Classés A', detail: 'Cheval Blanc, Ausone, Pavie, Angélus. Emblematic estates with absolute requirements. Reception cellars and guest suites.' },
  { nom: 'Pomerol', detail: 'The neighbouring appellation, estates of the very highest renown. Family châteaux, tasting rooms, estate offices.' },
  { nom: 'Lalande-de-Pomerol', detail: 'A satellite appellation of Pomerol. Family properties in full wine-tourism development.' },
  { nom: 'Castillon-la-Bataille', detail: 'Côtes-de-Castillon, a rising appellation. Family estates and properties in wine-tourism restructuring.' },
  { nom: 'Saint-Christophe-des-Bardes', detail: 'A satellite town of Saint-Émilion. Family châteaux, discreet grand-cru properties.' },
  { nom: 'Saint-Étienne-de-Lisse', detail: 'A town of the Saint-Émilion appellation. Family estates, listed heritage properties.' },
  { nom: 'Saint-Hippolyte', detail: 'A historic town of the appellation. Family châteaux and grand-cru heritage estates.' },
  { nom: 'Vignonet', detail: 'A town of the appellation plain. Family estates, grand-cru-classified wine properties.' },
  { nom: 'Libourne', detail: 'The sub-prefecture, the administrative centre of the Libournais. Offices and head offices of the great trading houses.' },
  { nom: 'Fronsac', detail: 'A neighbouring appellation, in full development. Family estates and properties with strong wine-tourism potential.' },
  { nom: 'Côtes-de-Bourg', detail: 'An appellation to the north of the Libournais. Family estates and properties in premium wine-tourism development.' },
]

const process = [
  { step: 'First contact', desc: 'A phone call or email. Gathering the key points: nature of the project (cellar, tasting room, suites, offices), estimated area, the estate\'s wine calendar, the possible work window. Direct contact with the estate manager or the château\'s wine-tourism director.' },
  { step: 'Visit to the estate', desc: 'A visit organised within 2 to 3 weeks, set to the wine calendar. Laser measuring, a survey of the heritage and wine-tourism constraints, photos of the existing woodwork and materials, a conversation with the estate manager on the possible work windows.' },
  { step: 'Material choice', desc: 'The Villedoux showroom or samples sent directly to the château, to the wine-tourism director or the interior architect. Final validation under the light of the cellar or reception room, never in a showroom. The light of cellars transforms the colours.' },
  { step: 'La Rochelle workshop making', desc: '3 to 16 weeks by range: custom Axminster (crest integration possible), Wilton, virgin wool, cut vinyl, bespoke Hereke rugs. Dry pre-assembly in the workshop to validate the fit before transport. The upfront preparation is essential to keep a final laying of 2 to 5 days at the estate.' },
  { step: 'Laying at the château', desc: 'A team mobilised on site, accommodation included in the quote, a schedule set to the wine window. Coordination with the estate manager, the cellar master and the wine-tourism director. A full clean, finishes checked with the client or their architect.' },
]

const faq = [
  { q: 'Do you really come to Saint-Émilion from La Rochelle?', a: 'Yes, it is well within our range. Saint-Émilion is 2h15 by motorway. We come to measure once, then we come back to lay. Accommodation is included in the quote. We set the work to the estate\'s wine calendar, not ours. The ideal window is January to March, sometimes July-August. We plan with your estate manager, never blind.' },
  { q: 'Why does the wine calendar change everything?', a: 'A château lives to the rhythm of the vines. In September-October, the harvest mobilises everyone, laying is impossible. Vinification occupies the cellars until December. In April, the primeurs bring brokers and journalists from around the world. Bottling takes the summer. The real windows are narrow. We plan six to twelve months ahead to set a calm period for you.' },
  { q: 'Do you work on the Premiers Grands Crus Classés A?', a: 'Yes, and that is where our twenty-seven years of the trade make full sense. Cheval Blanc, Ausone, Pavie, Angélus: that level of prestige imposes absolute requirements. Total discretion, an NDA if you ask, millimetre finishes, coordination with your Parisian or international interior architect. We have the documentation and the method to enter these files without a hitch.' },
  { q: 'Can you integrate the estate\'s crest into the carpet?', a: 'Yes, it is even a ground we love. A custom Axminster allows up to thirty-six colours in a single motif. That is more than enough to reproduce a crest, a stylised vine leaf or a monogram. We validate the motif on a cartoon, sometimes with one or two proof rounds to adjust the shades. On a hand-woven Aubusson rug, the fineness is even higher, with ten to sixteen weeks\' weaving.' },
  { q: 'Which materials for a tasting cellar?', a: 'A cellar receives the public, so it needs a Bfl-s1 rating as a minimum. Our typical combination is a fire-treated EGE Hospitality wool carpet in the tasting zone for the acoustics and comfort. And a Tarkett or Forbo Coral vinyl floor in the circulation for resistance and quick upkeep. You have the wine-tourism experience, and the safety file is squared away.' },
  { q: 'Do you work with the grand-cru interior architects?', a: 'Regularly. The grands crus often work with reputed Parisian or Bordeaux firms, sometimes international designers for the contemporary spaces. We work as subcontractors of their specification; the architect stays the main contact. We send the samples to their agency for validation, and we provide all the technical documentation: material sheets, fire reports, traceability, laying drawings.' },
  { q: 'How long does a floor last in a wine château?', a: 'Fifteen to twenty years easily, well chosen and well laid. A wool Wilton in a ceremonial dining room in moderate use lasts twenty years, taking a patina. A Tarkett vinyl in a high-traffic cellar lasts fifteen years with an annual professional clean. A Hereke rug in a lounge is handed down from generation to generation, like your wines. The secret is to put the right material in the right place.' },
]

export default function RevetementSolSaintEmilionPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/revetement-sol-saint-emilion#service',
        name: 'Floor covering in Saint-Émilion and the Libournais',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Saint-Émilion' },
          { '@type': 'City', name: 'Libourne' },
          { '@type': 'City', name: 'Pomerol' },
          { '@type': 'AdministrativeArea', name: 'Gironde' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Laying of carpet, vinyl and bespoke rugs for wine châteaux of Saint-Émilion and the Libournais',
        description: 'Design, workshop making and laying of carpet, vinyl and bespoke rugs for reception cellars, tasting rooms, guest suites and estate offices of the wine châteaux of Saint-Émilion, Pomerol and the Libournais.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Floor covering in Saint-Émilion', item: 'https://cbsols.fr/en/revetement-sol-saint-emilion' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="saint-emilion" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Floor covering Saint-Émilion</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Floor covering in Saint-Émilion,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>the floor of the grands crus.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Laying of carpet, vinyl and bespoke rugs for the wine châteaux of Saint-Émilion, Pomerol and the Libournais. Reception cellars, tasting rooms, Relais & Châteaux guest suites. A La Rochelle workshop, work set to the wine calendar.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=saint-emilion" variant="primary" size="md">Request a quote</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>We travel to you</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Working in a grand cru is entering a house where every detail counts, from the glass to the light of the cellar. The floor must be up to it. That is exactly what CB Sols has done for over 28 years.&rdquo;
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
            Four settings, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>one and the same wine-tourism excellence.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A project in a château?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              A visit to the estate, a costed quote.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Direct contact with your estate manager, your wine-tourism director or your architect. A visit organised outside the harvest and primeurs windows, a detailed quote within a week.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/en/contact?source=saint-emilion-cta1" variant="primary" size="md">Request a quote</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Saint-Émilion specifics</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six requirements <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>specific to wine châteaux.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Working in a Libournais grand cru is like no other job. The wine calendar, the heritage, the wine-tourism requirement dictate a specific method that we apply systematically.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materials and know-how for the châteaux</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            The product families <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>we bring to the grand cru.</em>
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
              &ldquo;In a grand cru, we welcome clients from the ends of the earth who will tell the estate\'s story for years. The cellar, the lounge, the rug under the ceremonial table: it all plays a part in that first impression. It is a privilege to lay a floor in these houses.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, owner of CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?source=saint-emilion-citation" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>A visit set to the wine calendar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Partner makers</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Eight reference houses <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>for your grand-cru projects.</em>
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

      {/* Appellations */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Appellations and towns where we work</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            The whole Libournais, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from Pomerol to the Côtes-de-Bourg.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Our team travels across the whole of the Libournais, from the most prestigious appellations to the satellite properties in full premium wine-tourism development.
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
            A call to set the wine window.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Twenty minutes on the phone are enough to clarify the possible ranges, identify the work window compatible with your wine calendar, and a budget order of magnitude.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?source=saint-emilion-cta2" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from Villedoux to Saint-Émilion.</em>
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
            Floor covering in Saint-Émilion, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>concrete answers.</em>
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
            Straight through to the owner. No hotline. Clear advice, an honest order of magnitude, planning matched to your wine calendar.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="See also"
        sectionSubtitle="Our know-how covers other worlds that may interest you. Take your time to browse, ask your questions, we will answer them."
        items={[
          { href: '/en/revetement-sol-bordeaux', title: 'Floor covering Bordeaux', teaser: 'Townhouses, échoppe lofts, stone houses. Floors that dialogue with the architecture.', icon: MapPin },
          { href: '/en/revetement-sol-arcachon', title: 'Floor covering Arcachon', teaser: 'Bay houses and dune villas. Floors that take the sand, the light and daily life.', icon: MapPin },
          { href: '/en/revetement-sol-cap-ferret', title: 'Floor covering Cap Ferret', teaser: 'Oyster cabins, feet-in-the-sand villas. The discretion of a know-how that barely shows.', icon: Waves },
          { href: '/en/moquette-chateau', title: 'Château carpet', teaser: 'Reception rooms, monumental staircases, guest rooms. A wool that lasts half a century.', icon: Castle },
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
            Your château <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>in the right hands.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A visit to the estate, set to your wine calendar. A detailed quote, finishes worthy of the grand cru, guaranteed discretion. Over 28 years of know-how at the service of Saint-Émilion and the Libournais.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=saint-emilion-final" variant="primary" size="md">Request a quote</Button>
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
