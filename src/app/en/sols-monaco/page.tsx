import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { Building2, Castle, Mail, MapPin, Sparkles, Store, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: "Exceptional Floors & Carpet in Monaco | Premium Laying",
  description: 'Design, workshop making and laying of carpet, bespoke rugs and high-end floors for premium apartments, palace suites, yachts and offices in Monaco.',
  alternates: {
    canonical: 'https://cbsols.fr/en/sols-monaco',
    languages: { 'fr-FR': 'https://cbsols.fr/sols-monaco', en: 'https://cbsols.fr/en/sols-monaco', es: 'https://cbsols.fr/es/sols-monaco', },
  },
}

const usages = [
  { title: 'Apartments in the Principality', desc: 'You have an apartment in the Carré d\'Or, in Monte-Carlo or at the Tour Odéon. We lay a virgin-wool carpet or a bespoke rug in your reception rooms and bedrooms. Pattern matches approved upfront, millimetre fitting against the joinery. Your interior architect stays the main point of contact.' },
  { title: 'Palace suites', desc: 'You run a suite at the Hôtel de Paris, the Hermitage or the Métropole. We work in occupied premises, in time slots negotiated with your technical management. No nuisance for guests, everything cleaned at the end of each day.' },
  { title: 'Port Hercule yachts', desc: 'You have a refit planned on your yacht. We lay in the saloon, the owner\'s cabin and the companionways. Fire-treated wool, premium polypropylene for exposed zones. We coordinate with the captain and the naval architect.' },
  { title: 'Offices and family offices', desc: 'You receive clients in a confidential office. The floor sets the tone from the entrance. A hushed finish, careful acoustic insulation. Laying at off-peak hours, your activity does not stop.' },
]

const exigences = [
  { title: 'Access and logistics', desc: 'Regulated truck delivery in the Principality, precise time slots, restricted parking, service lifts to book. Our team anticipates and coordinates with the building concierge, the managing agent or the hotel\'s technical management. Every roll arrives ready to lay.' },
  { title: 'Total discretion', desc: 'We sign an NDA if you ask. No photo circulated, no name mentioned. It is the default rule, after twenty-seven years, not an option to tick. Your team and ours work in trust.' },
  { title: 'Coordination with the other trades', desc: 'On a project of this standard, you already have the interior architect, the cabinetmaker, the upholsterer. We fit into the schedule with no delay. We go in second-to-last to avoid another trade damaging the new carpet.' },
  { title: 'Millimetre finishes', desc: 'In Monaco, the detail counts. Precise setting-out, pattern matches approved upfront, brushed-brass or patinated-bronze Romus profiles, heat-welded joints. No standard aluminium profile, ever. The thresholds match the room\'s joinery.' },
]

const materiaux = [
  { name: 'Custom Axminster', desc: 'High-end British weave, bespoke motifs up to 36 colours, strict pattern matching. The reference for grand palace hotels and stately interiors. Factory lead time 8 to 12 weeks, to anticipate from the quote.' },
  { name: 'Woven Wilton', desc: 'Luxury-hotel quality, dense weave, 15 to 20-year life in careful private use. A firm feel, a noble ageing. Available plain, mottled or with a discreet geometric motif. Ideal for master bedrooms and libraries.' },
  { name: 'Reconstructed Aubusson and Savonnerie rugs', desc: 'For neo-classical interiors and heritage hotels. Reproduction of historic motifs in virgin wool, hand-sewn border, bespoke dimensions. Lead time 10 to 16 weeks depending on the motif complexity.' },
  { name: 'Silk and virgin-wool carpets', desc: 'For stately reception rooms. An exceptional feel, a subtle sheen, a stain treatment compatible with housekeeping. To reserve for moderate-traffic rooms of representation.' },
  { name: 'Fire-treated EGE Highline wool', desc: 'For palace suites and yachts. Compliant fire resistance, fire treatment at the fibre core, a wide palette of colours. The material takes intensive rhythms without losing its look.' },
  { name: 'Brushed-brass and patinated-bronze Romus profiles', desc: 'Finishes for thresholds, stair nosings and junctions between materials. Coordinated with the room\'s joinery and ironmongery. Bespoke profiles possible for projects with particular requirements.' },
]

const quartiers = [
  { nom: "Carré d'Or", detail: 'The epicentre of Monaco luxury, premium apartments and townhouses. The heart of our Principality work.' },
  { nom: 'Monte-Carlo', detail: 'Casino, Hôtel de Paris, Hôtel Hermitage, One Monte-Carlo. Palace suites, exceptional residences, executive offices.' },
  { nom: 'Larvotto', detail: 'Seafront, modern buildings and high-end new residences. Mediterranean views, marked acoustic requirements.' },
  { nom: 'Fontvieille', detail: 'The marina, prestige residences and the Port de Fontvieille. Harbour-view apartments and yachts at the quay.' },
  { nom: 'La Condamine', detail: 'Port Hercule and classic residences. Yacht refits, characterful harbour-side apartments.' },
  { nom: 'Tour Odéon', detail: 'Premium high-rise apartments, penthouse, duplex. Strict service-lift access constraints.' },
  { nom: 'Beausoleil', detail: 'The bordering town on the French side. High-end residences overlooking the Principality.' },
  { nom: "Cap-d'Ail", detail: 'The immediate French side. Villas, seafront properties, direct access to Monaco.' },
  { nom: 'Eze and Roquebrune-Cap-Martin', detail: 'Stately residences at the gates of Monaco. Heritage properties, private grounds, historic requirements.' },
]

const process = [
  { step: 'First contact', desc: 'A call or email, gathering the key points: project type, estimated area, timeline, expected confidentiality level. An NDA signed if requested before any visit.' },
  { step: 'Visit to Monaco', desc: 'A visit organised within 1 to 2 weeks. Laser or template measurement by configuration, survey of building access constraints, photos to coordinate joinery colours.' },
  { step: 'Material choice', desc: 'The Villedoux showroom or samples sent directly to Monaco, to the interior architect or on the yacht. Final validation under the venue\'s light, never in a showroom.' },
  { step: 'Workshop making', desc: '3 to 10 weeks by range: custom Axminster, Wilton, silk, wool. Dry pre-assembly in the La Rochelle workshop to validate the fit before transport to the Principality.' },
  { step: 'Laying in Monaco', desc: 'A team mobilised on site, accommodation included in the quote, a schedule set to the client\'s availability. A full clean on delivery, finishes checked with the architect or client.' },
]

const faq = [
  { q: 'How does a Monaco project work when your workshop is in La Rochelle?', a: 'Our workshop stays in Villedoux, near La Rochelle, where the making is done. For Monaco, we organise the team\'s travel in two stages: a measuring visit at the start of the project, then the laying at the end. Accommodation and logistics are included in the quote. The rolls arrive ready to lay, set out to the millimetre, which cuts the on-site time to 2 to 6 days by area.' },
  { q: 'Do you travel out for measuring visits?', a: 'Yes, always. No Monaco project is quoted without a prior visit. Principality apartments have too many specifics: multiple levels, gentle curves, integration with existing joinery, acoustic constraints. The visit takes half a day to a day by area, costs included in the quote if the project is confirmed.' },
  { q: 'Do you work in occupied premises in hotel suites?', a: 'Yes, it is even common in palaces. The work is organised in stages: one or two suites a day, time slots negotiated with the hotel\'s technical management, service lifts booked, offcuts carted away at the end of each day. No nuisance for guests in neighbouring suites, the non-negotiable condition of a successful hotel project.' },
  { q: 'What lead times for a bespoke Axminster rug?', a: 'Allow 8 to 12 weeks\' factory lead time for a custom Axminster, the motif to be approved upfront on a colour swatch. For a woven Wilton, 4 to 8 weeks. For a reconstructed Savonnerie rug, 10 to 16 weeks by complexity. These add to the workshop making and the laying. A complete Carré d\'Or apartment project is planned over 4 to 6 months from signing to delivery, more if the Axminster motif needs several proof rounds.' },
  { q: 'Do you sign a non-disclosure agreement (NDA)?', a: 'Yes, without difficulty. Discretion is the default rule on all our Monaco projects. We sign the NDA provided by the client, their lawyer or their family office. No photo is circulated without written agreement, no name is shared, no reference is used in our communications. Our team is trained in confidentiality.' },
  { q: 'How is material delivery to Monaco handled?', a: 'The Principality imposes strict traffic and parking rules for trucks. Our deliveries are organised with the building concierge or the hotel\'s technical management: a precise slot, a booked service lift, protection of common floors and walls. The rolls are stored on site or in a secure local depot if the apartment is not yet available.' },
  { q: 'Do you work with local interior architects?', a: 'Yes, regularly. We fit into the design teams already in place, with the interior architect as the main point of contact for the material choices and the setting-out. Samples are sent directly to their agency for validation under the project\'s reference light. We provide the technical sheets, fire certificates and material traceability needed for premium project files.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Service', '@id': 'https://cbsols.fr/en/sols-monaco#service', name: "Exceptional floors and carpet in Monaco", provider: { '@id': 'https://cbsols.fr/#localbusiness' }, areaServed: [{ '@type': 'Country', name: 'Monaco' }, { '@type': 'City', name: 'Monaco' }, { '@type': 'City', name: 'Beausoleil' }, { '@type': 'City', name: 'Roquebrune-Cap-Martin' }, { '@type': 'City', name: "Cap-d'Ail" }], serviceType: 'Laying of carpet, bespoke rugs and high-end floor coverings in the Principality of Monaco', description: 'Design, workshop making and laying of carpet, bespoke rugs and high-end floors for premium apartments, palace suites, yachts and offices in Monaco.' },
    { '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' }, { '@type': 'ListItem', position: 2, name: 'Monaco floors', item: 'https://cbsols.fr/en/sols-monaco' }] },
  ],
}

export default function SolsMonacoPageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Monaco floors</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Exceptional floors<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>in Monaco.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Precision work and very high-end finishes. A workshop based in La Rochelle, travel organised for premium projects in the Principality: Carré d&apos;Or apartments, palace suites, Port Hercule yachts, business offices.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=sols-monaco" variant="primary" size="md">Request a quote</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>We travel to you</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;A Monaco project calls for impeccable preparation and flawless execution. It is exactly the ground where our know-how comes into its own.&rdquo;
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
            Four settings, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>one demand for finish.</em>
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

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Monaco specifics</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Four requirements <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>specific to Monaco projects.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Working in the Principality is not a standard project transposed. Here are the four points on which we structure our method from the first visit.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materials and know-how for Monaco</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            The ranges we bring <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>to the Principality.</em>
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

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from Villedoux to the Principality.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0' }}>
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
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Districts and places we cover</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            The whole Principality, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>and its bordering towns.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Our team mobilises across the whole Principality and the bordering towns on the French side, where the premium projects of the Côte d&apos;Azur are concentrated.
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

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Frequently asked questions</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Monaco floors, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>concrete answers.</em>
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

      <RelatedCards
        sectionTitle="See also"
        sectionSubtitle="Our know-how covers other worlds that may interest you. Take your time to browse, ask your questions, we will answer them."
        items={[
          { href: '/en/moquette-yacht', title: 'Yacht carpet', teaser: 'Bespoke yacht floors: marine wools, rubber, night laying in port. A no-compromise standard.', icon: Waves },
          { href: '/en/moquette-jet-prive', title: 'Private-jet carpet', teaser: 'Business-aircraft floors: aviation certifications, technical wools, couture finish.', icon: Sparkles },
          { href: '/en/moquette-chateau', title: 'Château carpet', teaser: 'Reception rooms, monumental staircases, guest rooms. A wool that lasts half a century.', icon: Castle },
          { href: '/en/architectes', title: 'For architects', teaser: 'Material documentation, annotated samples, detailed quotes. Our role is to serve your vision.', icon: Building2 },
          { href: '/en/showroom', title: 'Villedoux showroom', teaser: 'Come to see and touch the materials. By appointment, in Villedoux near La Rochelle.', icon: Store },
          { href: '/en/contact', title: 'Contact us', teaser: 'A question, a project, a quote within 48 hours. The owner answers you directly.', icon: Mail },
        ]}
      />

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Your Monaco project <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>in expert hands.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A confidential visit in the Principality. A detailed quote, premium finishes, guaranteed discretion. Over 28 years of know-how in the service of exceptional projects.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=sols-monaco" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
