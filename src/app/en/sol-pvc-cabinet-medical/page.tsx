import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Baby, Building2, FlaskConical, GraduationCap, Home, Mail, Pill, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Medical-Practice Vinyl Flooring | Dental, Physio, Vet',
  description: 'Vinyl flooring laid for medical practices, dentists, physiotherapists, osteopaths and vets. Floors that are easy to disinfect, with a calm, welcoming feel. CB Sols has worked in the trade for over 28 years, workshop near La Rochelle.',
  alternates: {
    canonical: 'https://cbsols.fr/en/sol-pvc-cabinet-medical',
    languages: { 'fr-FR': 'https://cbsols.fr/sol-pvc-cabinet-medical', en: 'https://cbsols.fr/en/sol-pvc-cabinet-medical', es: 'https://cbsols.fr/es/sol-pvc-cabinet-medical', },
  },
  keywords: ['medical practice vinyl flooring', 'dental surgery flooring', 'physiotherapy flooring', 'veterinary flooring', 'waiting-room flooring'],
  openGraph: {
    title: 'Vinyl flooring for medical practices, cleanliness and calm',
    description: 'Vinyl flooring laid for health practices: dentist, physio, osteopath, vet. Easy to disinfect, welcoming, odour-free. CB Sols, over 28 years of know-how.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/sol-pvc-cabinet-medical.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: 'Welcoming waiting rooms', desc: 'This is the first room your patient sees. We choose a light acoustic vinyl, in a pastel or wood tone. The feel stays warm, the sound of footsteps fades. Useful in paediatrics, where the traffic is heavy.' },
  { title: 'Consultation rooms', desc: 'You want calm and a floor that is easy to clean. We lay a plain vinyl in a soft shade. Heat-welded seams make the laying watertight. You mop with diluted bleach without damaging a thing.' },
  { title: 'Treatment and procedure rooms', desc: 'For your technical procedures, we go up a level. The vinyl rises into a curved cove along the wall. No more sharp angle, no more trapped dust. The floor takes the disinfectants and the treatment trolleys.' },
  { title: 'Corridors and traffic zones', desc: 'Your circulation routes are the most heavily used. We lay a dense marled-pattern vinyl that tolerates marks. The shade stays continuous between rooms. The thresholds do not catch the chair castors.' },
]

const exigences = [
  { title: 'One wipe and it is clean', desc: 'The floor cleans with water, diluted bleach or the practice\'s usual detergent. No special product to order. The sheets are heat-welded, with no seam where bacteria could settle. Your cleaning team keeps its habits.' },
  { title: 'Less noise, more calm', desc: 'A calm practice reassures the patient. Acoustic vinyl cuts the sound of footsteps and the conversations that carry through walls. The waiting room becomes hushed, and so does the consultation. Your patients feel it the moment they sit down.' },
  { title: 'You reopen the very next day', desc: 'The floors we lay are rated A+ for indoor air quality. No lingering smell, no product evaporating for weeks. You close on Friday evening, you start again Monday morning. No risk for sensitive patients.' },
  { title: 'Chairs and trolleys, the floor holds', desc: 'Castors, chairs, treatment trolleys: they roll, they pivot, they concentrate loads. Professional vinyl takes it without denting or marking. You get fifteen quiet years, sometimes more. No floor overhaul mid-career.' },
  { title: 'A practice, not a hospital', desc: 'A light-wood look, soft concrete, sea green, earth, ochre: we choose welcoming palettes. The patient enters a soothing place, not a technical room. And it supports your image as an attentive practitioner. The detail counts.' },
  { title: 'We come when you close', desc: 'A practice cannot stay shut for a week. We fit the work to your holidays or the weekend. Friday evening to Monday morning is doable for many practices. Your patients see no difference, your consultations resume on time.' },
]

const materiaux = [
  { name: 'Acoustic sheet vinyl', desc: 'Our most-laid solution in medical practices. Two-metre sheets, heat-welded to each other. The skirting rises into a rounded cove ten centimetres up the wall. So the surface is continuous, with no seam where dust could lodge. The acoustic layer softens the waiting room. Fifteen to twenty years ahead of you, by traffic.' },
  { name: 'Wood-effect and mineral vinyl', desc: 'When you want a warmer feel, we go for a light-wood-effect vinyl, bleached oak or polished concrete. At eye level, you would be fooled. The laying stays continuous, so the hygiene is the same as with a plain vinyl. Ideal for waiting rooms and soft-medicine or physio practices.' },
  { name: 'Loose-lay or click vinyl tiles', desc: 'If you rent, or if you want to refresh quickly, tiles are perfect. We lay them without glue, so they can be lifted. If someone spills something and damages a tile, we replace just that one. Keep them for dry zones: office, reception, waiting room. Very good value.' },
  { name: 'Carpet and rugs for psychologists and therapists', desc: 'In psychology, gentle osteopathy, sophrology or art therapy, carpet makes full sense again. It soothes, it welcomes, it changes the relationship to the place. We offer anti-dust-mite treated wool, or loose-lay textile tiles we replace one at a time if needed. Your patients feel the difference at once.' },
  { name: 'Cove skirting and threshold profiles', desc: 'This is the detail that makes all the difference on a medical floor. The rounded skirting removes the right angle between floor and wall, so dust no longer builds up in the corners. The mop reaches everywhere. The threshold profiles are chosen so they do not catch the castors of chairs and trolleys.' },
]

const marques = [
  { name: 'Gerflor', desc: 'The Lyon-based French maker we know inside out. Their Mipolam Symbioz is everywhere in healthcare. A Bfl-s1 fire rating, A+ for indoor air: our all-rounder.' },
  { name: 'Tarkett', desc: 'Their iQ Granit and iQ Optima fit out half the French hospitals. Very good durability, a huge colour choice. A safe bet in a town practice.' },
  { name: 'Forbo', desc: 'When the project calls for something natural, we look at Forbo. Their Marmoleum is a true linoleum made from linseed oil. Ideal for practices attached to a bio-sourced origin.' },
  { name: 'Polyflor', desc: 'The British maker of high-density vinyl. Their wood and concrete effects are visually remarkable. The right compromise between looks and technical performance.' },
  { name: 'Object Carpet', desc: 'The Germans, for therapists\' practices and reception spaces aiming at a residential feel. An assertive contemporary design, perfect finishes.' },
  { name: 'Forbo Flotex', desc: 'The flocked vinyl that washes with plenty of water. Halfway between carpet and vinyl. The warmth of textile without giving up hygiene, ideal when you want softness underfoot.' },
  { name: 'Romus', desc: 'Our supplier of profiles and skirting. Essential for a careful medical laying. Their range is wide, we always find what each configuration needs.' },
  { name: 'Sika and Bostik', desc: 'Our references for technical adhesives and preparation primers. We choose them for their indoor-air compatibility and their resistance to repeated cleaning. No residual smell.' },
]

const quartiers = [
  { nom: 'Dental surgeries', detail: 'Waiting room, reception, treatment rooms fitted with chairs. Welded acoustic sheet vinyl, cove skirting, a light palette that enhances the daylight.' },
  { nom: 'GP practices', detail: 'Consultation office, examination room, reception. A floor easy to maintain between two patients, a neutral professional feel, a continuous finish with no visible seams.' },
  { nom: 'Physiotherapy practices', detail: 'Rehabilitation room, exercise area, treatment booth. A floor resistant to castors, to gym mats laid on the ground, and to long sessions with regular traffic.' },
  { nom: 'Osteopathy practices', detail: 'Treatment table, office, reception. Often a warm feel, a light-wood or soft-mineral effect, sometimes carpet in the patient relaxation spaces.' },
  { nom: 'Veterinary practices', detail: 'Waiting room, consultation room, surgery room, hospitalisation. A non-slip, washable floor, resistant to claws and to the disinfectants used in veterinary practice.' },
  { nom: 'Ophthalmology practices', detail: 'An often busy waiting room, technical examination rooms, reception. A light, neutral, acoustic floor to absorb the noise of heavy traffic.' },
  { nom: 'Dermatology practices', detail: 'Consultation office, treatment room, reception. A floor easy to clean between two patients, a soft soothing palette to reassure before skin examinations.' },
  { nom: 'Midwife practices', detail: 'A welcoming waiting room, examination room, feeding space. A soft, warm feel, a comfortable floor for infants laid on the ground during consultations.' },
  { nom: 'Orthodontic practices', detail: 'A waiting room for teenagers and children, multiple treatment rooms. A cheerful floor without being childish, resistant to intensive traffic, acoustic to limit the hubbub.' },
  { nom: 'Paediatric practices', detail: 'A family reception, a waiting playroom, an examination room. A light-wood effect or soft colours, a comfortable floor for children on the ground, easily washable.' },
  { nom: 'Psychology and psychotherapy practices', detail: 'The therapist\'s office, a discreet waiting room. Carpet or a thick rug finds its full meaning here: warmth, intimacy, acoustic insulation from the neighbouring rooms.' },
  { nom: 'Multi-professional health centres', detail: 'Several practices, shared reception spaces, a meeting room. Visual consistency between spaces, implicit wayfinding through shade variations, robustness for the traffic of several patient streams.' },
]

const process = [
  { step: 'First contact', desc: 'A phone call to frame the project: number of rooms, estimated area, the practice\'s speciality, a possible closing schedule. We identify straight away whether the renovation can be spread over several weekends or whether a holiday week is needed.' },
  { step: 'Practice visit', desc: 'A visit on site within 1 to 2 weeks. Measuring, a check of the existing substrate, a survey of access and handling constraints. Samples shown directly in your practice, under your working light, to choose the final shade.' },
  { step: 'Quote and material choice', desc: 'A detailed quote within a week: areas by room, the range proposed, skirting, thresholds, the work duration, a schedule. Final approval of the colours, skirting and profiles. The material ordered on agreement, factory lead time 2 to 5 weeks by range.' },
  { step: 'Workshop preparation', desc: 'Cutting and pre-assembly of the sheets at the Villedoux workshop. A check of the dimensions, marking of the cuts for the chair passages, the floor sockets and any water supplies. This upfront preparation cuts the time spent in your practice.' },
  { step: 'Laying in your practice', desc: 'Work in the agreed closing window: a long weekend, holidays, a week off. Removal of the old floor, levelling if needed, laying of the sheets, heat welds, skirting, finishes, cleaning. The practice handed back ready to reopen on the day consultations resume.' },
]

const faq = [
  { q: 'Which floor for a treatment room?', a: 'We go for professional vinyl in two-metre sheets, heat-welded to each other. The skirting rises into a rounded cove ten centimetres up. The surface is continuous, with no seam where dust could lodge. On colour, we take a slightly marled light shade, so you spot a mark to wipe immediately. Gerflor Mipolam or Tarkett iQ Granit are our usual choices. Fifteen years ahead of you easily.' },
  { q: 'Is vinyl flooring easy to disinfect?', a: 'Yes, it is even one of its main qualities. You clean with water, diluted bleach, or the usual disinfectant detergent of a health establishment. No special product to order. The heat welds make the surface continuous, with no gap. The rounded skirting makes mopping the corners easier. Your standard daily cleaning protocol is enough to keep a spotless practice.' },
  { q: 'How long to renovate a practice?', a: 'It depends on the area and the state of the existing floor. For a practice of 80 to 120 m², allow two to four days on site. We fit it to a usual closure: a long weekend, school holidays, annual leave. Upfront, allow one to two weeks for the visit and the quote, then two to five weeks\' making. We pre-assemble at the workshop to minimise the time in your practice.' },
  { q: 'Can you lay without closing the practice?', a: 'Possible, by organising the work room by room over several weeks, with clear marking between the work zone and the active zone. The overall job takes longer, but the closure is avoided. The result works well on a multi-professional centre. For a smaller practice, it is often simpler and cheaper to close two to four days over a holiday. We choose the best strategy together at the visit.' },
  { q: 'Which floor for a veterinary practice?', a: 'A vet is a brief of its own. You need a non-slip floor for panicked or anaesthetised animals, washable with plenty of water, resistant to dog and cat claws, and able to take disinfectants harsher than in a human practice. We go for Forbo Surestep or Gerflor Tarasafe. Welded sheet laying with a skirting cove is near-compulsory in surgery and hospitalisation. The health inspection then passes without reservation.' },
  { q: 'Do vinyl floors give off smells?', a: 'The professional ranges we lay are rated A+ for indoor air, the best French rating. You will have a faint new smell on the day of laying, which clears in 24 to 48 hours with normal ventilation. No volatile compound for weeks, no discomfort for sensitive patients. The adhesive and primer are also chosen from very-low-emission references, we make no compromise there.' },
  { q: 'Do you work outside Charente-Maritime?', a: 'Yes, regularly. The workshop is in Villedoux near La Rochelle, and we work across the whole of western France: Vendée, Deux-Sèvres, Charente, Vienne, Gironde and beyond. We have laid in practices in Nantes, Bordeaux, Niort, Poitiers, Angoulême, La Roche-sur-Yon. Travel and accommodation are included in the quote beyond two hours\' drive. We plan over six to ten weeks, which is comfortable for arranging everything remotely.' },
]

export default function SolPvcCabinetMedicalPageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/sol-pvc-cabinet-medical#service',
        name: 'Vinyl flooring for medical practices',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
          { '@type': 'Country', name: 'France' },
        ],
        serviceType: 'Vinyl flooring laid in medical, dental, physio and veterinary practices',
        description: 'Professional vinyl flooring laid for medical practices: dentist, GP, physio, osteopath, vet, ophthalmologist, midwife. Heat welds, cove skirting, A+ indoor-air rating.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Medical-practice vinyl flooring', item: 'https://cbsols.fr/en/sol-pvc-cabinet-medical' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="cabinet-medical" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Medical-practice vinyl flooring</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Vinyl flooring for medical practices,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>cleanliness and calm.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Professional vinyl flooring laid for health practices: dentist, GP, physio, osteopath, vet, ophthalmologist, midwife, paediatrician. Floors easy to disinfect, acoustic, welcoming. CB Sols has worked in the trade for over 28 years, workshop in Villedoux near La Rochelle.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=sol-pvc-cabinet-medical" variant="primary" size="md">Request a quote</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Work without a long closure</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;We work during the practice\'s closure: a long Saturday, a week of holidays. The practitioner reopens on Monday on a clean, calm, odour-free floor. That is what CB Sols has done for over 28 years.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, owner of CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Which zone */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>For which zones of the practice</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Four zones, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>four floor choices.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A practice to renovate?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              A site visit, a costed quote.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Samples shown in your practice, under your light. A detailed quote within a week, a schedule fitted to your closures.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/en/contact?from=sol-pvc-cabinet-medical-cta1" variant="primary" size="md">Request a quote</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>What a medical floor must do</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six requirements <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>specific to health practices.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            A medical practice is not a standard office. Here are the six points on which we systematically steer the choice of floor and its laying, staying accessible, without drowning the practitioner in technical jargon.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Product families</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            The floors <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>we lay in practices.</em>
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
              &ldquo;A medical practice is a floor that must reassure the patient and make the practitioner\'s life easier. Calm, clean, welcoming, odour-free. The rest is technique we keep to ourselves.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, owner of CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?from=sol-pvc-cabinet-medical-citation" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>A visit directly in your practice</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Partner brands</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Eight trusted references <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>for healthcare.</em>
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

      {/* Specialities */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Specialities we work in</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Twelve specialities, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>floor choices to match.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Each medical speciality has its uses, its constraints and its relationship to the patient. Here is how we adapt the floors to the practices we renovate regularly.
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
            A call to frame the project.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Twenty minutes on the phone to clarify the possible ranges, a realistic schedule and a budget order of magnitude for your practice.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=sol-pvc-cabinet-medical-cta2" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from first contact to reopening.</em>
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
            Vinyl in a medical practice, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>concrete answers.</em>
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
            Straight through to the owner. Clear advice, no jargon, an honest order of magnitude, a next step only if the project makes sense for you.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="See also"
        sectionSubtitle="Our know-how covers other worlds that may interest you. Take your time to browse, ask your questions, we will answer them."
        items={[
          { href: '/en/sol-pvc-pharmacie', title: 'Pharmacy vinyl flooring', teaser: 'Daily hygiene, health-authority compliance, night laying. Twenty years of wear in a pharmacy that never closes.', icon: Pill },
          { href: '/en/sol-pvc-laboratoire-pharmaceutique', title: 'Laboratory vinyl flooring', teaser: 'The finish rigour a quality audit demands. Heat welds, light floors, cove skirting.', icon: FlaskConical },
          { href: '/en/sol-pvc-creche', title: 'Nursery vinyl flooring', teaser: 'Phthalate-free, antibacterial, certified for early years. Peace of mind for parents and staff.', icon: Baby },
          { href: '/en/sol-pvc-ecole', title: 'School vinyl flooring', teaser: 'Calmed acoustics, quick upkeep, fifteen-year durability in a classroom that never stops.', icon: GraduationCap },
          { href: '/en/particuliers', title: 'For homeowners', teaser: 'Carpet, vinyl flooring, bespoke rugs: our know-how at the service of your home.', icon: Home },
          { href: '/en/architectes', title: 'For architects', teaser: 'Material documentation, annotated samples, detailed quotes. Our role is to serve your vision.', icon: Building2 },
          { href: '/en/showroom', title: 'Villedoux showroom', teaser: 'Come to see and touch the materials. By appointment, in Villedoux near La Rochelle.', icon: Store },
          { href: '/en/contact', title: 'Contact us', teaser: 'A question, a project, a quote within 48 hours. The owner answers you directly.', icon: Mail },
        ]}
      />

      {/* Final dark CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Your practice renovated <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>without the headache.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A site visit in your practice. A detailed quote, an A+-rated floor, laying during your closure, an odour-free reopening. Over 28 years of CB Sols know-how at the service of health practitioners.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=sol-pvc-cabinet-medical-final" variant="primary" size="md">Request a quote</Button>
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
