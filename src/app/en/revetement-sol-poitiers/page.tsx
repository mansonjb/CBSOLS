import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Floor Covering Poitiers | Laboratories, Universities, Offices',
  description: 'Laying of carpet, vinyl and bespoke rugs in Poitiers. University laboratories, medical practices in the teaching-hospital area, head offices, Futuroscope hotels, private schools. CB Sols, over 28 years of know-how, regular travel from Villedoux.',
  alternates: {
    canonical: 'https://cbsols.fr/en/revetement-sol-poitiers',
    languages: { 'fr-FR': 'https://cbsols.fr/revetement-sol-poitiers', en: 'https://cbsols.fr/en/revetement-sol-poitiers' },
  },
  keywords: ['floor covering Poitiers', 'laboratory vinyl flooring Poitiers', 'office carpet Poitiers', 'flooring craftsman Poitiers', 'medical-practice vinyl Poitiers'],
  openGraph: {
    title: 'Floor covering in Poitiers, academic rigour',
    description: 'Carpet, vinyl and bespoke rugs in Poitiers. Laboratories, teaching hospital, head offices, Futuroscope hotels. CB Sols, over 28 years of know-how.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-poitiers.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'University research laboratories', desc: 'You run a lab at the University or the CNRS. We lay a homogeneous vinyl resistant to chemicals. Heat-welded sheets, cove skirting. We come outside the handling hours.' },
  { title: 'Medical practices in the hospital area', desc: 'You are setting up a practice near the teaching hospital. Antibacterial vinyl rated Bfl-s1, that takes alcohol and chlorine. Skirting raised in the wet zones. We provide the health-authority documentation as standard.' },
  { title: 'Head offices and office floors', desc: 'You run a head office at Chasseneuil or in the centre. Acoustic carpet tiles, vinyl in the open plans, wool carpet for management. We phase it with your facility manager.' },
  { title: 'Futuroscope and city-centre hotels', desc: 'You run a business hotel or a boutique hotel. We come in the low season, you keep your room nights. A dense anti-stain carpet in the rooms, vinyl in the restaurant and wet zones.' },
]

const exigences = [
  { title: 'Laboratories, their constraints are familiar to us', desc: 'Acids, solvents, sensitive equipment: a lab floor must resist everything. We select technical vinyls, heat-welded, with no visible seam, easy to decontaminate. The certificates come with it. Your teams work calmly, the inspection office validates without reservation.' },
  { title: 'Health and school standards, we handle them', desc: 'Clinics, practices, schools: there are strict rules on fire safety and hygiene. We choose the right products for you, we provide the certificates, we dialogue with the inspection office. You have nothing to understand from the technical sheets.' },
  { title: 'About two hours\' drive, and we are there', desc: 'Poitiers is 150 km from our workshop, about two hours via the A10. It is very close. We pass through several times a month, we know the local jobs. You call, we come to measure within the week, with no hidden surcharge.' },
  { title: 'Public tenders, we follow the process', desc: 'On a university or hospital job, the contact is the technical or estates department. We set the reports, delivery notes and certificates to your procedures. You keep the traceability, we align with your rhythm. No administrative friction.' },
  { title: 'We come when you are not working', desc: 'Teaching hospital, school, offices: it does not stop. We come in the evening, at the weekend, between terms. We protect the sensitive equipment, we hand the zone back clean at the agreed time. You arrive on Monday, the floor is laid, the furniture in place. Not a day lost.' },
  { title: 'Less echo in lecture halls and open plans', desc: 'A big lecture hall or an open plan with hard walls resonates. Carpet tiles with an acoustic underlay or an acoustic vinyl cut half the hubbub. Conversations carry better, lectures are heard. Your teams feel it from the first day.' },
]

const materiaux = [
  { name: 'Gerflor homogeneous laboratory vinyl', desc: 'For a chemistry or pharmacy lab, we go for homogeneous vinyl. It is the same material top to bottom, so no wear layer to break through. It takes acids and solvents, a P3 rating. We heat-weld the sheets and rise into a skirting. Twenty to twenty-eight years ahead of you in intensive use.' },
  { name: 'Tarkett medical-practice vinyl', desc: 'In a medical practice, the floor must take the daily bio-cleaning without flinching. Tarkett builds the antibacterial treatment through the thickness. A matt plain or stone-imitation look by your mood. It takes chlorinated and alcohol disinfectants, and upkeep is done in five minutes. Health-authority compliance, sheets provided.' },
  { name: 'Acoustic carpet tiles for open plans', desc: 'On office floors, 50×50 cm tiles are our standard. If someone spills their coffee, we replace just the damaged tile. The acoustic underlay cuts footstep and castor noise, your teams work in calm. Fifteen to twenty years in a classic office, a huge colour choice.' },
  { name: 'Forbo and Polyflor private-school vinyl', desc: 'For a private school, we look at Forbo Marmoleum (a true linoleum made from linseed oil, A+ VOC certified) or Polyflor for wet zones. Everything is rated Bfl-s1, resists children\'s traffic without difficulty. We provide the complete file for the type-R public-building safety commission.' },
  { name: 'Wilton wool carpet for directors\' offices', desc: 'For a boardroom or a presidency office, wool carpet sets the tone from the entrance. A dense weave, a firm feel, noble ageing. We choose with you a deep plain, a marl or a discreet geometric motif. It is the kind of detail that sets a representation space apart.' },
  { name: 'Brushed brass and aluminium Romus profiles', desc: 'The thresholds and stair nosings, we take care over them. We coordinate with your existing ironmongery, which counts on a heritage building. On demanding office jobs, we can have bespoke ones made. It is the kind of thing you notice on delivery, and that makes the difference.' },
]

const marques = [
  { name: 'Gerflor', desc: 'The Lyon-based French maker we know inside out. Their Mipolam and Taralay vinyls are our reference for university laboratories and the practices of the hospital area. A complete antistatic and antibacterial range.' },
  { name: 'Tarkett', desc: 'For open plans that call for real acoustic comfort, we go for Tarkett iQ Granit. It ages well and stays our reference on the office and medical floors of Poitiers.' },
  { name: 'Forbo', desc: 'When the project calls for something natural, we look at Forbo. Their Marmoleum is a true linoleum, made with linseed oil. The environmental certifications are solid, perfect for private schools and the hospital-area practices.' },
  { name: 'Polyflor', desc: 'The British maker of vinyl. R10 or R11 slip resistance by zone, resistance to hospital disinfectants. We bring them out in medical and educational settings without hesitation; their lifespan is exceptional.' },
  { name: 'EGE Carpets', desc: 'The Dane, our reference for directors\' offices and open plans. Their tiles have the acoustic underlay built in. The Hospitality range also fits out the Futuroscope and historic-centre hotels.' },
  { name: 'Object Carpet', desc: 'The Germans, for head offices and high-end business offices. A contemporary design, perfect finishes. When you want to step outside the classic office codes.' },
  { name: 'Brintons', desc: 'The British Axminster, the aristocracy of carpet. We call on it for the boutique hotels of the Poitiers historic centre and the prestige spaces.' },
  { name: 'Bolon', desc: 'The Swedish maker of flocked vinyl. A contemporary look that takes intense traffic. Perfect for office reception halls and the restaurants of Futuroscope hotels.' },
]

const quartiers = [
  { nom: 'Historic centre', detail: 'Place du Maréchal-Leclerc, rue Carnot, Notre-Dame-la-Grande, the Saint-Jean baptistery. Townhouses, bourgeois buildings, gastronomic restaurants, characterful boutiques.' },
  { nom: 'Pont-Neuf', detail: 'A district linked to the historic centre, 19th-century buildings and urban offices. Independent-profession practices, city-centre shops, bourgeois co-ownerships.' },
  { nom: 'Trois-Cités', detail: 'A western district on the banks of the Clain, a residential and collective-facilities mix. New builds, recent co-ownerships, educational and sports facilities.' },
  { nom: 'Beaulieu', detail: 'A north-east residential district with family houses and co-ownerships. Local medical practices, convenience shops, a stable residential clientele.' },
  { nom: 'Saint-Éloi', detail: 'The teaching-hospital plateau and the hospital area of Poitiers. Specialist medical practices, analysis laboratories, health-organisation head offices. A structuring medical hub.' },
  { nom: 'Bellejouanne', detail: 'A southern residential and commercial district. Family houses, new builds, private and state school facilities.' },
  { nom: 'University of Poitiers', detail: 'The historic Pont-Achard campus and the Sciences campus on the plateau. Research laboratories, lecture halls, university administrative buildings.' },
  { nom: 'Futuroscope (Chasseneuil)', detail: 'A major office and tourism hub. Business hotels, head offices, R&D platforms, training centres. Acoustic vinyl floors for open plans and carpet tiles for offices.' },
  { nom: 'Buxerolles', detail: 'A bordering town to the north, a high-end residential and business-zone mix. Family houses, bourgeois co-ownerships, independent-profession practices.' },
  { nom: 'Migné-Auxances', detail: 'A bordering town to the north-west, business zones and detached housing. Corporate headquarters and logistics platforms.' },
  { nom: 'Saint-Benoît', detail: 'A bordering town to the south, high-end residential with fine villas and family properties. A residential clientele attached to quality of execution.' },
  { nom: 'Vouneuil-sous-Biard', detail: 'A bordering town to the west, residential and facilities. Family houses, high-end housing projects, medical practices and independent professions.' },
]

const process = [
  { step: 'First contact', desc: 'A phone call or email. Gathering the key points: project type (laboratory, medical practice, office, hotel, school), estimated area, desired schedule, any public-building constraints. For university public tenders, collecting the complete tender documents.' },
  { step: 'Visit to Poitiers', desc: 'A visit organised within 1 to 2 weeks from Villedoux. Laser measuring, a survey of the access constraints and controlled zones, photos to coordinate colours and joins. For laboratories, identification of ATEX zones or antistatic constraints.' },
  { step: 'Material choice', desc: 'The Villedoux showroom or samples sent directly to Poitiers, to the estates manager or the architect. Final validation under the laying venue\'s light. Transmission of the technical sheets, fire reports, health certifications and maintenance sheets matched to the protocol.' },
  { step: 'Workshop making', desc: '3 to 10 weeks by range: cut vinyl, carpet tiles, Wilton or custom Axminster carpet. Dry pre-assembly in the workshop to validate the fit before transport. This preparation is what lets us keep a fast, careful final laying in Poitiers.' },
  { step: 'Laying in Poitiers', desc: 'A team mobilised on site, accommodation included in the quote, a schedule set to your availability, the term break or the site window. Coordination with the technical services or the platform manager. Phasing in off-peak hours. A full clean on delivery.' },
]

const faq = [
  { q: 'Do you really come to Poitiers from La Rochelle?', a: 'Yes, and often. Poitiers is 150 km away, less than two hours via the A10. It is very close. We pass through regularly, we know the local jobs. We come to measure at the start of the project, then we come back to lay at the end. Accommodation is included in the quote. On large university or hospital jobs, the team stays on site until delivery.' },
  { q: 'Do you work on the University and CNRS laboratories?', a: 'Yes, it is one of our natural grounds. Chemistry and pharmacy labs call for precise requirements: P3 chemical resistance, a Bfl-s1 rating, antistatic in rooms with sensitive equipment, heat-welded sheets, raised skirting. We go for Gerflor Mipolam or Polyflor, and we provide all the technical documentation for your estates department and the safety commission.' },
  { q: 'Do you work on the hospital-area practices in Saint-Éloi?', a: 'Of course. The Saint-Éloi plateau concentrates a major medical hub. Practice floors fall under the type-U public-building regulation: a Bfl-s1 rating, resistance to chlorinated and alcohol disinfectants, a decontaminable surface, skirting raised in the wet zones. We provide all the fire reports and health sheets. The laying is set in off-peak hours so as not to disrupt consultations.' },
  { q: 'How does it work for private schools on the public-building side?', a: 'Private schools fall under the type-R public-building regulation, a Bfl-s1 rating compulsory on circulation and classrooms. We select Forbo Marmoleum (a natural A+-VOC-certified linoleum) or Polyflor for wet zones. The laying is set in a term break (October, Christmas, February, Easter or the summer holidays) to deliver the establishment for the start of term. A complete file provided for the safety commission.' },
  { q: 'Do you work on the Futuroscope hotels?', a: 'Yes. Futuroscope concentrates a major business-hotel hub. The requirements are precise: a high-density anti-stain carpet, room acoustic insulation, vinyl for wet zones and restaurants. We lay room by room in rotation, without blocking the operation. A full clean on delivery, an operational handover at the time agreed with the operations director.' },
  { q: 'How long does a vinyl floor last in a university lab?', a: 'Twenty to twenty-eight years easily, sometimes more. Homogeneous vinyl ages well because it has no wear layer to break through, it is the same material top to bottom. The P3 chemical resistance takes occasional contact with common acids and solvents. An annual professional clean and a daily bio-clean to your protocol are enough to keep the first-day look.' },
  { q: 'Can you work in off-peak hours on a teaching hospital or university?', a: 'Yes, it is even the norm. We organise the work in the evening, at the weekend or in a term break by the phasing set with your estates department. We pre-assemble as much as possible at the workshop, so the on-site laying goes fast. We systematically protect the sensitive equipment, the IT furniture and the lab equipment before starting. At the agreed time, the space is cleaned and operational.' },
]

export default function RevetementSolPoitiersPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/revetement-sol-poitiers#service',
        name: 'Floor covering in Poitiers',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Poitiers' },
          { '@type': 'AdministrativeArea', name: 'Vienne' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: 'Laying of carpet, vinyl and bespoke rugs in Poitiers and the Vienne',
        description: 'Design, workshop making and laying of carpet, vinyl and bespoke rugs for university laboratories, hospital-area medical practices, head offices, Futuroscope hotels and private schools in Poitiers.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Floor covering in Poitiers', item: 'https://cbsols.fr/en/revetement-sol-poitiers' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Floor covering Poitiers</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Floor covering in Poitiers,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>academic rigour.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Laying of carpet, vinyl and bespoke rugs in Poitiers. University research laboratories, hospital-area medical practices, head offices, Futuroscope hotels, private schools. A workshop based in La Rochelle, travel to Poitiers organised each month.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=poitiers" variant="primary" size="md">Request a quote</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>We travel to you</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;Poitiers is a city of knowledge: universities, research, a teaching hospital. The technical requirements do not forgive the approximate. CB Sols has had the documentation and the method to meet these standards for over 28 years.&rdquo;
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
            Four settings, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>one and the same technical demand.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A project in Poitiers?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              A site visit, a costed quote.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Direct contact with the estates department, the platform manager or with you. A visit organised within 1 to 2 weeks, a detailed quote within a week.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/en/contact?source=poitiers-cta1" variant="primary" size="md">Request a quote</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Poitiers specifics</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six requirements <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>specific to Poitiers projects.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Working in Poitiers is not reproducing a standard job. Here are the six points on which we structure our method from the first visit, to meet the technical requirements and keep the schedule.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Materials and ranges for Poitiers</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            The product families <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>we bring to the Vienne.</em>
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
              &ldquo;A university laboratory is not improvised. Chemical resistance, antistatic, perfect welds, impeccable documentation. CB Sols has done this trade for over 28 years; it is its technical backbone.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, owner of CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?source=poitiers-citation" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>A site visit in Poitiers</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Partner makers</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Eight reference houses <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>for your Poitiers projects.</em>
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
            Poitiers and Greater Poitiers, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>out to Futuroscope.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Our team travels across the whole of Greater Poitiers as well as the bordering towns, where the university, hospital, office and high-end residential hubs are concentrated.
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
            Twenty minutes on the phone are enough to clarify the possible ranges, a realistic schedule and a budget order of magnitude for your Poitiers job.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?source=poitiers-cta2" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from Villedoux to Poitiers.</em>
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
            Floor covering in Poitiers, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>concrete answers.</em>
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
            Our know-how covers the Vienne, Charente-Maritime and beyond, on every exceptional technical ground.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/en/sol-pvc-laboratoire-pharmaceutique" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Laboratory vinyl flooring →</Link>
            <Link href="/en/sol-pvc-cabinet-medical" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Medical-practice vinyl flooring →</Link>
            <Link href="/en/revetement-sol-la-rochelle" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Floor covering La Rochelle →</Link>
            <Link href="/en/architectes" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Interior architects →</Link>
            <Link href="/en/particuliers" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>For homeowners →</Link>
            <Link href="/en/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Villedoux showroom →</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Your Poitiers project <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>in the right hands.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A site visit in Poitiers. A detailed quote, premium finishes, impeccable technical compliance. CB Sols, over 28 years of know-how at the service of the laboratories, offices and health-and-social sector of Poitiers.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=poitiers-final" variant="primary" size="md">Request a quote</Button>
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
