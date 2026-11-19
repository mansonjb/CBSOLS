import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Château & Manor Carpet | Bespoke Heritage Rugs',
  description: 'Laying of carpet and bespoke rugs in châteaux, manor houses and townhouses. Heritage care and ABF approval. CB Sols has served prestige owners and hoteliers for over 28 years.',
  alternates: {
    canonical: 'https://cbsols.fr/en/moquette-chateau',
    languages: { 'fr-FR': 'https://cbsols.fr/moquette-chateau', en: 'https://cbsols.fr/en/moquette-chateau' },
  },
  openGraph: {
    title: 'Château & Manor Carpet | Bespoke Heritage Rugs',
    description: 'Making and laying of bespoke ceremonial rugs in châteaux and manor houses. ABF approval, reconstructed Aubusson and Savonnerie motifs, monumental staircases.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/moquette-chateau.jpg', width: 1200, height: 630 }],
  },
}

const cas = [
  { title: 'Reception rooms and galleries', desc: 'A bespoke rug cut to the exact dimensions of the room, motifs approved with the decorator or the curator, laid loose over historic parquet. Lost period motifs can be reconstructed from surveys or period photographs.' },
  { title: 'Monumental staircases', desc: 'A ceremonial stair runner on a straight or winding flight, fitted step by step over Charente-stone or oak staircases, brass or patinated-bronze profiles, discreet fixing that spares the wood or the stone.' },
  { title: 'Guest suites and bedrooms', desc: 'You run a château-hotel. We lay a stain-treated wool carpet, compliant with the fire requirements for public-access buildings. The room keeps its character, the floor takes sustained service. Fifteen years ahead of you.' },
  { title: 'Corridors and passageways', desc: 'We weave in long lengths, with no visible seam. Sustained traffic does not mark the pile. The finish tucks discreetly along the old skirting, without touching the wood.' },
]

const produits = [
  { name: 'Bespoke Axminster or Wilton rugs', desc: 'A high-end, historically British weave, ideal for ceremonial rooms. Axminster allows complex motifs by the metre, Wilton offers a dense looped pile of very long life. Dimensions up to 8 by 12 metres in a single piece.' },
  { name: 'Wool carpet for the château-hotel', desc: 'Tufted virgin wool, stain treatment and fire resistance compliant for public-access buildings. We work with EGE, Brintons or Ulster Carpets. Colours and motifs set to the venue\'s identity, foot-by-foot laying possible over large areas.' },
  { name: 'Aubusson and Savonnerie rug making', desc: 'Bespoke reproduction of period motifs, in partnership with specialist weaving workshops. Turkish Hereke is also available for long orders. The cartoons are approved with the curator or the interior architect before production starts.' },
]

const process = [
  { step: 'Site visit', desc: 'A precise survey on tracing paper, photos, a moisture reading of the parquet or stone substrate, a diagnosis of the floors. A conversation with the owner, the heritage architect or the decorator.' },
  { step: 'ABF approval', desc: 'If the property is listed or registered as a historic monument, we assemble the file for the Architect of the Buildings of France. Materials chosen to be aesthetically and technically compatible, approved before any order.' },
  { step: 'Material choice', desc: 'A choice at the Villedoux showroom or samples presented on site. The reproduced motifs shown, the colours approved with the decorator or the curator.' },
  { step: 'Workshop making', desc: 'Workshop cutting, or an order placed with the partner weaver for bespoke rugs. A 6 to 16-week lead time by motif complexity and chosen weave. A production tracker sent to the client.' },
  { step: 'Laying and finishes', desc: 'Loose laying over old parquet with a reversible felt underlay, reversible glued laying where needed, profiles on staircases. No drilling into historic parquet without explicit agreement. A clean handover.' },
]

const faq = [
  { q: 'How does a project in an ABF-listed building work?', a: 'If the property is listed or registered as a historic monument, any visible work must receive the prior agreement of the Architect of the Buildings of France. We assemble the file with the owner or the heritage architect: a description of the materials, samples, photographs, proposed motifs and colours. The review takes one to three months depending on the regional heritage authority. Once the agreement is obtained, we start the making. For properties that are only registered, the procedure is more flexible but we apply the same rigour.' },
  { q: 'Can you reproduce an old Aubusson or Savonnerie motif?', a: 'Yes, in partnership with weaving workshops. From an existing rug to restore, an archive photograph or a drawing, we have a weaving cartoon made that is approved with the curator, the decorator or the owner before production starts. Lead times of 12 to 24 weeks for complex motifs. For very large areas, Turkish Hereke offers a high-quality alternative, often with shorter lead times.' },
  { q: 'Which carpet for a Relais & Châteaux heritage hotel?', a: 'For a prestige heritage hotel, we generally combine two logics. In the ceremonial spaces open to guests (lounges, library, smoking room), a bespoke rug or a grand-classic wool carpet, aesthetics first. In the suites and corridors, contract carpet in tufted virgin wool, Cfl-s1 fire rating as a minimum, a stain treatment compatible with hotel service, a 10 to 15-year life with regular upkeep. The reference makers for this kind of project are EGE, Brintons, Ulster Carpets and Tisca Tiara.' },
  { q: 'How do you lay carpet without damaging old parquet?', a: 'We systematically avoid nailing and drilling on historic parquet in solid oak, herringbone or Versailles panels. Three techniques, by case. Loose laying over a thick felt underlay, fully reversible, ideal for ceremonial rugs. Reversible glued laying with specific adhesives that lift away without leaving a trace, used for contract carpet in suites. Laying on gripper rods fixed to removable battens along the skirting, to preserve the parquet left visible in the centre. A prior diagnosis in every case: the wood moisture level, the flatness, an insect treatment if needed.' },
  { q: 'Do you restore family carpets or rugs?', a: 'Yes. Re-fixing the hems, local reweaving on small worn areas, a deep dry clean, mechanical dusting on old backings. For pieces of very high value, we direct clients to specialist antique-textile restorers we work with regularly. A free prior diagnosis at the showroom or on site.' },
  { q: 'Do you work with heritage architects?', a: 'Regularly. Heritage architects, specialist interior architects, decorators of prestige residences, curators. We provide the technical items their files need: material sheets, annotated samples, laying specifications, detailed quotes by lot. Our role is to execute the specifier\'s vision precisely, bringing the trade\'s technical expertise.' },
  { q: 'What lead times for a bespoke ceremonial rug?', a: 'For an Axminster or Wilton rug woven to the exact dimensions of a room, allow 8 to 16 weeks\' making by the weaver and the motif complexity. For an Aubusson or Savonnerie reproduction, 12 to 24 weeks. For a contract carpet laid foot by foot over a large area, 3 to 6 weeks\' material lead time then laying in 1 to 3 days by area. We plan in step with the other trades on site.' },
]

const specs = [
  { title: 'ABF file', desc: 'On a listed or registered property, any visible element goes before the Architect of the Buildings of France. We build the file with you. The review takes one to three months depending on the regional heritage authority, and we start the making once the agreement is obtained.' },
  { title: 'Nail-free underlays', desc: 'On historic flooring in solid oak, herringbone or Versailles parquet, we avoid all drilling. A reversible glued system or loose laying over a felt underlay, to preserve the old wood entirely.' },
  { title: 'Bespoke ceremonial rugs', desc: 'Reconstruction of old motifs such as Aubusson or Savonnerie, Axminster or Wilton weave, dimensions matched to the room up to 8 by 12 metres in a single piece. Cartoons approved with the decorator or the curator before production starts.' },
  { title: 'Monumental stair runner', desc: 'Charente-stone staircases, grand oak staircases, step-by-step fitting on a straight or winding flight, brass or patinated-bronze profiles, discreet fixing that respects the substrate.' },
  { title: 'Restoration of old pieces', desc: 'Re-fixing, local reweaving on small worn areas, a deep dry clean, mechanical dusting on fragile backings. Referral to specialist textile restorers for museum pieces.' },
  { title: 'Prior floor diagnosis', desc: 'Before any laying, a check of the flatness and a reading of the wood moisture level, essential in an old residence. A preventive insect treatment if needed. No laying over a doubtful substrate, we take the time to prepare it properly.' },
]

const marques = [
  { name: 'EGE', detail: 'The Danish weaver for characterful hotels and residences. A classic look that stays compatible with public-access-building requirements.' },
  { name: 'Brintons', detail: 'The historic British Axminster, classic or heraldic motifs. A world reference in luxury hospitality, and the material ages nobly.' },
  { name: 'Ulster Carpets', detail: 'High-end Irish weaves for large residences. Over twenty years of wear in normal use.' },
  { name: 'Tisca Tiara', detail: 'A Swiss maker, contract and residential ranges. The soft finishes sit with old woodwork without aggressive contrast.' },
  { name: 'Axminster Carpets', detail: 'A motif weave by the metre, ideal for reconstructing ceremonial rooms. An English tradition since 1755.' },
  { name: 'Wilton Carpets', detail: 'A dense looped pile, a 15 to 28-year life, adaptable as contract carpet or a bespoke rug.' },
  { name: 'Aubusson and Savonnerie workshops', detail: 'Partner weavers for the bespoke reproduction of historic motifs, cartoon approval with the curator.' },
  { name: 'Turkish Hereke', detail: 'A quality alternative for large areas, often shorter lead times, oriental or western motifs to order.' },
]

const lieux = [
  { nom: 'Loire Valley châteaux', detail: 'Touraine, Indre-et-Loire, Maine-et-Loire. Listed residences and heritage hotels of the Loire Valley.' },
  { nom: 'Cognac and Saintonge châteaux', detail: 'Charente and Charente-Maritime, right next to our workshop. Fast call-outs, free travel.' },
  { nom: 'La Rochelle townhouses', detail: 'The historic centre, 17th and 18th-century residences, interior refits under heritage constraint.' },
  { nom: 'Bordeaux-area residences', detail: 'The Médoc vineyards, Saint-Émilion, Pessac-Léognan. Wine châteaux and family properties.' },
  { nom: 'Périgord and Quercy châteaux', detail: 'Dordogne, Lot, Tarn-et-Garonne. Pale-stone manor houses and fortified residences.' },
  { nom: 'Norman manor houses', detail: 'Calvados, Eure, Orne. Timber-framed manors and residences of the Côte Fleurie.' },
  { nom: 'Relais & Châteaux château-hotels', detail: 'Across France. Coordination with management and maintenance teams for off-season work.' },
  { nom: 'Wine châteaux', detail: 'Champagne, Burgundy, Provence, Languedoc. Prestige estates open to private hospitality.' },
  { nom: 'Breton manor houses', detail: 'The south coast, the Gulf of Morbihan, Cornouaille. Granite residences with strong architectural character.' },
  { nom: 'Parisian townhouses', detail: 'Full refits in step with interior architects, work within a short window.' },
  { nom: 'Listed Île-de-France residences', detail: 'Yvelines, Essonne, Seine-et-Marne. Châteaux and manor houses near the capital.' },
  { nom: '5-star heritage hotels', detail: 'Historic city-centre establishments, refits of suites and common spaces under public-access-building constraint.' },
]

export default function MoquetteChateauPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/moquette-chateau#service',
        name: 'Carpet and bespoke rugs for châteaux, manor houses and townhouses',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'Country', name: 'France' },
          { '@type': 'Place', name: 'Loire Valley' },
          { '@type': 'Place', name: 'Charente-Maritime' },
          { '@type': 'Place', name: 'Bordeaux area' },
          { '@type': 'Place', name: 'Périgord' },
          { '@type': 'Place', name: 'Île-de-France' },
        ],
        serviceType: 'Carpet laying and bespoke rug making for heritage properties, ABF approval, restoration',
        description: 'Making and laying of bespoke rugs and contract carpet for châteaux, manor houses, townhouses and château-hotels. Reproduction of Aubusson and Savonnerie motifs, ABF approval, care for historic parquet.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Château carpet', item: 'https://cbsols.fr/en/moquette-chateau' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Château carpet</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Château carpet,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>heritage respected.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Reception rooms, monumental staircases, château-hotel suites: bespoke rugs and contract carpet for French private and hospitality heritage. ABF approval, reproduction of Aubusson and Savonnerie motifs, reversible laying over historic parquet. Over 28 years of craft experience.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=moquette-chateau" variant="primary" size="md">Request a quote</Button>
                <Button href="/en/showroom" variant="outline" size="md">See the showroom</Button>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>The detail that changes everything</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;On a herringbone parquet that has lasted three centuries, the right move is first to damage nothing. Respect for the place guides all the rest.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>For which room of the château</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Four settings, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>four approaches.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {cas.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline 1 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A restoration project?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Each residence calls for its own answer.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Château, manor house, townhouse: Valentin Prévoteau travels out for the prior visit and the survey of the substrate.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=moquette-chateau" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Technical specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>The craft of laying in heritage buildings</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Six requirements that structure <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>our approach.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {specs.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{i + 1}. {s.title}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Rugs and carpets we lay in heritage buildings</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Three families, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>one level of demand.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {produits.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '1.5rem 0', borderBottom: i < produits.length - 1 ? '1px solid var(--border)' : 'none' }}>
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
          <p style={{ marginTop: '2.5rem', fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px' }}>
            We work with the European makers specialised in heritage: EGE for château-hotels, Brintons and Ulster Carpets for bespoke Axminster, Tisca Tiara for soft finishes. For old motifs, we go through Aubusson or Savonnerie workshops. And Turkish Hereke remains a good alternative on very large areas, often with shorter lead times.
          </p>
        </div>
      </section>

      {/* Mid quote + CTA */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              &ldquo;An impeccable seam, a true setting-out: that is what signs a high-end finish. In an old residence, it is also what is handed down.&rdquo;
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?from=moquette-chateau-inline" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>A prior visit in every case, free travel in Charente-Maritime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Partner makers</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Eight references, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from contract to bespoke.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            European weavers specialised in contract and heritage, French weaving workshops for historic reproductions, Hereke subcontracting for large areas. The right material in the right place.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {marques.map((m, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra)', marginBottom: '0.5rem' }}>{m.name}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Places and residences */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Where we work</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            A few residences and hotels <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>of prestige.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            We work across the whole of French private and hospitality heritage, in close contact with heritage architects, curators and interior decorators. A prior visit in every case, ABF approval if needed, a detailed quote after survey.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {lieux.map((l, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{l.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{l.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline 2 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>An ABF file to submit?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            We assemble the materials file with you.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Samples, specifications, motifs, technical sheets: everything needed to defend the project before the heritage authority.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=moquette-chateau-mid" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach, from visit to laying</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from the tracing to the finish.</em>
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
            Heritage carpet, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>detailed answers.</em>
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A question still unanswered?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Describe your residence, we reply within 48 hours.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Property type, any heritage status, the rooms concerned, motifs or constraints: these are enough to start a useful conversation.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=moquette-chateau-faq" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* See also */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>See also</div>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '1.5rem' }}>
            CB Sols is also a specialist in marine and business-aviation carpet. Three worlds of shared demand, one and the same precision of finish.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/en/moquette-jet-prive" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Private-jet carpet →</Link>
            <Link href="/en/moquette-bateau" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Boat carpet →</Link>
            <Link href="/en/moquette-yacht" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Yacht carpet →</Link>
            <Link href="/en/moquette-catamaran" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Catamaran carpet →</Link>
            <Link href="/en/moquette-peniche" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Barge carpet →</Link>
            <Link href="/en/services/tapis-sur-mesure" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Bespoke rugs →</Link>
            <Link href="/en/services/pose-moquette" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Carpet laying →</Link>
            <Link href="/en/particuliers" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>For homeowners →</Link>
            <Link href="/en/architectes" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>For architects →</Link>
            <Link href="/en/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Villedoux showroom →</Link>
          </div>
        </div>
      </section>

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            A residence to fit out? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Let us talk.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A prior visit in a château, manor house or townhouse. An ABF file if needed, a detailed quote after survey.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=moquette-chateau" variant="primary" size="md">Request a quote</Button>
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
