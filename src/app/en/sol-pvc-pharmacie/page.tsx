import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyQuoteButton } from '../_components/StickyQuoteButton'
import { Baby, Building2, FlaskConical, GraduationCap, Home, Mail, Stethoscope, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pharmacy Vinyl Flooring | Hygiene, Compliance and Durability',
  description: 'Caring for your pharmacy floor protects your image and makes your team\'s daily work easier. CB Sols supports you, quote within 48h.',
  alternates: {
    canonical: 'https://cbsols.fr/en/sol-pvc-pharmacie',
    languages: { 'fr-FR': 'https://cbsols.fr/sol-pvc-pharmacie', en: 'https://cbsols.fr/en/sol-pvc-pharmacie', es: 'https://cbsols.fr/es/sol-pvc-pharmacie', },
  },
  keywords: ['pharmacy vinyl flooring', 'pharmacy floor covering', 'pharmacy hygiene floor', 'pharmacy lab flooring', 'health-authority compliance', 'pharmacy floor laying', 'easy-clean pharmacy floor'],
  openGraph: {
    title: 'Vinyl flooring for pharmacies, built to last',
    description: 'Vinyl flooring laid in pharmacies: daily hygiene, health-authority compliance, night work to avoid closing. CB Sols, over 28 years of know-how near La Rochelle.',
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/sol-pvc-pharmacie.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  {
    title: 'The sales area',
    desc: 'This is the first impression the patient gets as they push your door open. The pharmacist spends eight hours a day there, the customer less than a minute, but they keep an image of it. The floor must absorb the rattle of shopping-trolley wheels, take the repeated passage of hundreds of people, and keep its shine ten years later. On the waiting zone, we gladly add a little acoustic carpet to soften the feel and calm the air.',
  },
  {
    title: 'The dispensary and the robot',
    desc: 'A technical zone, sometimes a wet zone. The floor must be watertight to resist the products handled each day, from a simple spilled syrup to a bottle of disinfectant. The seams between sheets are heat-welded, at over four hundred degrees, so no drop can seep in. The light colour helps you spot a dropped tablet or a leaking bottle immediately. You see everything, you clean everything.',
  },
  {
    title: 'The store and storage',
    desc: 'Trolleys passing through, full pallets, daily deliveries. The floor takes a beating in this room, little visited but hard-working. We choose a class-34 rating, a thick homogeneous vinyl that forgives the knocks of pallet trucks and can be stripped twice a year without harm. The shade is deliberately neutral, to avoid marking a trace after each knock. Twenty years ahead of you, with no worry.',
  },
  {
    title: 'Patient and staff toilets',
    desc: 'R10 non-slip at least in the approach zone, a rounded skirting cove raised all around for easy daily cleaning, a colour chosen so it does not stain visibly. We can also handle the tea point and the staff changing room in the same coherence, which gives a homogeneous reading of the back office and makes the evening cleaning easier. No seam where mould could settle.',
  },
]

const exigences = [
  {
    title: 'The pharmacy does not close',
    desc: 'We work at night, on Sundays or over long weekends. You pull down your shutter at 7 pm on Saturday, we work through the night, and at 8.30 am on Monday you open as normal. The robot, the automated dispensers, the touchscreens at the counter: we protect everything under sheeting, we vacuum at the end, we leave with our waste. Not a square metre lost to trading, not a notice to put on the door. Your patients do not even know we were there.',
  },
  {
    title: 'Hygiene is our daily trade',
    desc: 'Homogeneous vinyl cleans like your counter, with no special constraint. No seams clogging over the months, no wear layer flaking after five years, the material is dense from top to bottom. Your teams apply their usual protocol, water and neutral detergent, the floor keeps up without flinching. The health-authority inspectors who pass through see careful, compliant, durable work. You gain peace of mind.',
  },
  {
    title: 'Wet zones without risk',
    desc: 'Toilets, dispensary, tea point, changing room. We raise the vinyl into a rounded cove skirting eight to ten centimetres all around the room, we heat-weld the sheets to each other. Result: water seeps in nowhere, neither under the floor nor behind the walls. You avoid the classic trap of mould hidden behind a badly laid timber skirting, which ends up smelling and staining the plasterboard two years later. An invisible detail, but a decisive one.',
  },
  {
    title: 'Acoustic comfort',
    desc: 'An acoustic vinyl floor cuts the noise of footsteps and trolley wheels by 19 to 21 decibels by range. That is almost half the ambient noise gone. Your patients put their question more calmly at the counter, your team finishes the day less tired, the general feel of the place settles. In a very busy town-centre pharmacy, this simple change of floor transforms the perception of the room. Your customers come back because they feel good there.',
  },
  {
    title: 'Compliance, we handle it for you',
    desc: 'A Bfl-s1 or Cfl-s1 fire rating by the public-building category of your pharmacy, R10 non-slip in circulation zones and R11 around water points, an A+ label for indoor air quality. We provide all the certificates to attach to the file, we deal directly with the health authority or the inspection office if needed. You deal with nothing on this administrative side, which we know well after twenty-seven years of laying in regulated settings.',
  },
  {
    title: 'Choosing a floor that lasts fifteen years',
    desc: 'We commit on the material, on the laying, on the finish. CB Sols has worked in vinyl flooring for twenty-seven years; we have seen jobs cross two decades without moving a millimetre. No blistering, no yellowing, no seam opening up. You invest once, you live easy for a long time, you focus your energy on the pharmacy and not on the building. That is what we call a worthwhile investment.',
  },
]

const materiaux = [
  {
    name: 'Homogeneous wide-sheet vinyl',
    desc: 'Gerflor Mipolam Symbioz or Tarkett iQ Granit. The reference of the modern pharmacy and of any health establishment that takes hygiene seriously. Invisible heat welds between the sheets, a very wide colour palette, from a bright light that enlarges the sales area to a contemporary colour that enhances the pharmacy\'s brand. Twenty to twenty-eight years ahead of you, daily upkeep with water and neutral detergent. It is our default choice for 80% of the pharmacies we renovate.',
  },
  {
    name: 'Acoustic sheet vinyl',
    desc: 'Gerflor Taralay Acoustic or Tarkett Acczent Excellence Acoustic. To cut the noise of trolley wheels and footsteps in the sales area of a very busy pharmacy. The acoustic underlay is built into the covering, which greatly simplifies the laying, and the sound result is immediate from the first hour of opening. Particularly suited to town-centre pharmacies and health-hub pharmacies where footfall is dense.',
  },
  {
    name: 'LVT vinyl planks',
    desc: 'Forbo Allura or Gerflor Senso Lock. A warm look with a light-wood effect, a natural-stone effect or a polished-concrete effect, to give a more upmarket character to the reception zone and the orthopaedics advice corner. Perfectly compatible with the sustained traffic of a modern pharmacy, a fifteen-year life, the option to replace a single plank if ever it is damaged by dropped equipment. A very good compromise between appearance and performance.',
  },
  {
    name: 'Acoustic carpet tiles',
    desc: 'EGE Highline or Forbo Tessera. For the waiting corner, the owner\'s office, the team meeting room or the staff break room. Brings immediate visual and acoustic comfort, a 50 by 50 centimetre format so a single tile can be replaced if needed, for example after a coffee stain. Well suited to the back office and the spaces that do not receive the public, where you want a feeling of softness.',
  },
  {
    name: 'Transition profiles and skirting',
    desc: 'Romus in brushed brass, brushed stainless steel or anodised aluminium. These are the details that finish a laying and that make the difference between correct work and careful work. A rounded cove skirting for all wet zones, straight profiles perfectly fitted for the thresholds between two different materials, for example at the transition between the carpet of the waiting corner and the vinyl of the sales area. You do not notice them, which is exactly what we are after.',
  },
]

const marques = [
  { name: 'Gerflor', desc: 'The French maker of resilient floors, based near Lyon. We work their Mipolam and Taralay ranges in more than eight pharmacies out of ten. Solid, well documented for health-authority files, with contemporary colours found in recent pharmacies.' },
  { name: 'Tarkett', desc: 'The historic Swedish maker of professional vinyl. Their iQ Granit and iQ Optima fit out half the French health establishments. Very good durability, a huge colour choice, clear technical sheets. A safe bet in a pharmacy.' },
  { name: 'Forbo', desc: 'When the project calls for something natural, we look at Forbo. Their Marmoleum is a true linoleum made from linseed oil, bio-sourced, perfect for pharmacies that value a green approach with their patients. A slightly more technical laying, a unique result.' },
  { name: 'Polyflor', desc: 'The British maker of high-density vinyl. Their wood and concrete effects are visually remarkable, sometimes more convincing than their continental rivals. The right compromise between premium looks and technical performance in the sales area.' },
  { name: 'EGE', desc: 'The Danish weaver for carpet. When you want character in the waiting space, their Highline and ReForm ranges give a strong visual signature. We gladly lay them in the owner\'s office or the meeting room.' },
  { name: 'Object Carpet', desc: 'The Germans, for pharmacies aiming at a residential feel in the waiting room or the paediatric advice corner. An assertive contemporary design, perfect finishes, a very wide colour palette. More expensive, but the effect is immediate.' },
  { name: 'Romus', desc: 'Our supplier of profiles and skirting. Essential for a careful laying in a regulated setting. Their range is wide, we always find the profile that suits each threshold configuration, each transition, each finishing detail.' },
  { name: 'Altro', desc: 'The British maker of high-performance non-slip flooring. We bring it out for patient toilets and wet dispensaries where safety comes before looks. An R11 or R12 rating guaranteed, certified for the health sector.' },
]

const lieux = [
  { nom: 'Historic town-centre pharmacy', detail: 'A vintage floor to redo, sometimes heritage-architect constraints, difficult access for the equipment. We work at night so as not to cut the district\'s trading. A contemporary vinyl that dialogues with the original woodwork.' },
  { nom: 'Residential-district pharmacy', detail: 'A neighbourhood pharmacy, a loyal clientele, a stable team. The owner knows each patient. The floor must enhance this bond with no brutal visual break. A soft palette, a warm feel, fifteen quiet years.' },
  { nom: 'Retail-park pharmacy', detail: 'A more generous area, dense Saturday flow, often a robot present. Homogeneous wide-sheet vinyl, heat welds, a class-34 rating compulsory. Night laying fitted to the retail park\'s closing.' },
  { nom: 'Seaside pharmacy', detail: 'A strong seasonality, sand and salt tracked in on soles in summer, a July-August peak. A floor resistant to abrasion, light shades that take the sea light, laying ideally scheduled in January or February.' },
  { nom: 'Rural and village pharmacy', detail: 'An ageing clientele, sometimes unsteady on foot. R10 non-slip across the whole sales area, rounded skirting, a visual contrast between floor and wall for partially sighted patients. A visit and quote at your place at no cost.' },
  { nom: 'Health-hub pharmacy', detail: 'A platform with doctors, physios, self-employed nurses. Visual coherence wanted between the practices and the pharmacy. Contemporary vinyl with careful transitions, an acoustic floor to calm the shared hall, health-authority compliance guaranteed.' },
  { nom: 'Hospital pharmacy', detail: 'A regulated establishment, a public tender or a direct order by case. A very precise technical brief, fire rating, material traceability, PEFC or A+ certificates. We handle the administrative file end to end.' },
  { nom: 'University pharmacy', detail: 'A student and hospital-staff public, very sustained daytime traffic. High-density vinyl, acoustic to manage the hubbub, a timeless shade that does not date. Laying during the university holidays.' },
  { nom: 'Pharmacy with a robot and heavy automation', detail: 'The robot weighs several hundred kilos and stays in place during the work. We build around it, we protect its base structure, we cut to the millimetre. Night laying over three or four nights by area.' },
  { nom: 'Pharmacy with an orthopaedics or medical-equipment space', detail: 'The orthopaedics aisle calls for a floor that enhances the products on show, sometimes a wood effect to warm the advice corner. The rolling medical equipment demands a floor resistant to castors and the feet of chairs on demonstration.' },
  { nom: 'Pharmacy being renovated by a young owner-buyer', detail: 'A recent takeover, a wish to modernise without tearing everything out. We propose an intelligent compromise between keeping the existing and a new visual signature. An honest quote so as not to weigh down the first years of trading.' },
  { nom: 'Pharmacy in creation, a new fit-out project', detail: 'New-build or a shell unit to fit out. We dialogue with the interior architect from the study phase, we choose the range in coherence with the fit-out furniture chosen by the pharmacist. Everything is ready for the opening.' },
]

const process = [
  {
    step: 'First contact',
    desc: 'You call us or send an email with a few words about your pharmacy: approximate area, current floor, desired schedule, particular constraints such as a robot. We talk for about twenty minutes on the phone to frame the project and identify the laying window that will not disrupt your trading. If it feels right, we book the visit. If we feel it is not for us, we tell you plainly and point you elsewhere.',
  },
  {
    step: 'Free visit to your pharmacy',
    desc: 'A visit on site within one to two weeks, ideally at the start or end of the day so as not to hamper the rush. Precise measuring, a check of the existing substrate, a survey of the access and handling constraints for the robot and the automated dispensers. We bring samples you look at directly in your pharmacy, under your working light, to choose a shade that will really work in your place. No commitment at this stage.',
  },
  {
    step: 'Detailed quote within 48 hours',
    desc: 'You receive by email a line-by-line quote, with no jargon, with the range proposed, the detail of the areas by room, the skirting, the profiles, the provisional work duration and the laying window fitted to your closure. We attach the fire-rating, A+ and non-slip certificates, ready to go into your health-authority file. You compare calmly, you ask your questions, we adjust together if needed before approval.',
  },
  {
    step: 'Full laying over 1 to 3 nights',
    desc: 'Work in the agreed window, generally from Saturday evening to Monday morning for a pharmacy of 100 to 150 square metres. Removal of the old floor, levelling if needed, laying of the sheets, heat welds, rounded cove skirting, threshold profiles, a full clean. The robot and the automated dispensers stay in place, protected and boxed around. At 8.30 am on Monday, your shutter rises on a new, clean floor, ready for the first patient.',
  },
  {
    step: 'Joint handover and warranty',
    desc: 'We go round the finished job together, we check each weld, each skirting, each threshold. You sign the handover report with or without reservation. We leave you an end-of-job file with all the certificates, the daily upkeep guide matched to the range laid, and our direct contact details for any question. A ten-year warranty on the laying, a manufacturer warranty on the material, generally ten to fifteen years by the ranges chosen.',
  },
]

const faq = [
  {
    q: 'How long does it take to redo a pharmacy floor?',
    a: 'It all depends on the area and the state of the existing floor. For a pharmacy of 80 to 120 square metres, allow two to three nights on site, generally from Saturday evening to Monday morning. For a larger pharmacy of 200 square metres with a robot, more like three to four nights, sometimes spread over two weekends. We size it precisely at the visit. Ahead of the job, allow about two weeks between the initial call and the signed quote, then two to five weeks\' manufacturing lead time at the supplier by the chosen range. Most of our jobs run within a total window of six to eight weeks between your first call and the reopening on the new floor. This schedule gives you time to warn your team, organise your stock orders so you are not caught out on the Monday morning, and possibly communicate to your regular patients about the coming renovation.',
  },
  {
    q: 'Do you really have to close the pharmacy?',
    a: 'No, and that is precisely our speciality. The great majority of the pharmacies we renovate stay open for the whole duration of the work, because we work at night or over the weekend during your usual closing hours. You lower your shutter at 7 pm on Saturday, our team arrives around 8 pm, and at 8.30 am on Monday you open as normal on a finished floor. No loss of trading, no notice to stick on the window, no patient redirected. If the area is larger or the existing floor calls for a big screed, we can spread the work over two successive weekends without interrupting the week. In the particular case of a pharmacy heavily constrained by a fixed robot and heavy automated dispensers, we plan a longer night window, for example from Friday evening to Monday morning over a long weekend. The rule for us is zero days closed.',
  },
  {
    q: 'What is the average budget for 100 square metres?',
    a: 'To give an honest order of magnitude, allow between 6,000 and 9,000 euros excl. VAT for 100 square metres in homogeneous vinyl laid in welded sheets with cove skirting, night work included. The range varies by three main factors: the vinyl range chosen, because a high-end acoustic Mipolam Symbioz costs more than a standard iQ Granit, the state of the existing substrate, because a floor needing a big screed adds three to five euros per square metre, and the access complexity, notably if we must build around a robot or remove old tiling. If you add acoustic carpet in the waiting corner and the owner\'s office, allow an extra 50 to 80 euros per square metre of carpet laid. We cost everything precisely in the quote within 48 hours after the visit. No surprise during the job, that is our commitment.',
  },
  {
    q: 'Is vinyl flooring really compatible with health-authority standards?',
    a: 'Yes, completely, and it is even the most used solution in the modern pharmacy for precisely this reason. The ranges we lay combine the ratings expected in a fifth-category public building: Bfl-s1 or Cfl-s1 for fire resistance, R10 or R11 for non-slip by zone, an A+ label for indoor air quality, a class-34 rating for intensive commercial use. We provide all the manufacturer certificates to attach straight to your compliance file or to present in case of a health-authority inspection. If the inspection office has sharp technical questions, we deal directly with it on your behalf. Over the more than 28 years of laying in the health sector that CB Sols has behind it, never has a handover been refused for a floor-compliance defect. It is a point on which you can rely on us without worry.',
  },
  {
    q: 'How do you maintain the floor day to day without damaging it?',
    a: 'Day to day, it is very simple. In the morning before opening, a microfibre broom or a vacuum to remove the dust and coarse dirt tracked in on soles. In the evening after closing, a pass with a damp mop and a neutral detergent diluted to the dose given by the manufacturer, a pH-neutral type or a professional equivalent. No need for a special pharmacy product, your usual detergent is enough. Avoid detergents that are too acidic or too alkaline, which over time dull the look of the vinyl. Once a year, plan a stripping and re-coating by a professional cleaning firm, allow two to three euros per square metre, which gives the floor back its original shine for the following twelve months. With this simple protocol, your fifteen to twenty years of lifespan are assured. We leave you an upkeep guide matched to the range laid on handover day.',
  },
  {
    q: 'Can you lay vinyl flooring over existing tiling?',
    a: 'Yes, in the great majority of cases, and it is even an excellent way to avoid the cost and noise of a removal. Several conditions to check first. The tiling must be well adhered to the substrate, with no tile sounding hollow when tapped. The joints must be in good condition, without excessive hollowing. The overall flatness must be correct, with no bump or dip above a few millimetres. If these conditions are met, we apply a specific bonding primer, followed by a fibred self-levelling screed of two to three millimetres that erases the tile joints and gives a perfectly flat surface. Once dry in 24 to 48 hours, we lay the vinyl over it as on a new floor. A saving of time and noise for your neighbours. If the tiling is in poor condition, we remove it, it is safer. The visit will decide.',
  },
  {
    q: 'How long does a vinyl floor last in a pharmacy?',
    a: 'With a professional range laid correctly, allow fifteen to twenty years on average in a pharmacy, and up to twenty-eight years for high-end homogeneous vinyls maintained to the standard protocol. This lifespan varies by three factors. Traffic first: a town-centre pharmacy with 400 customers a day wears faster than a rural pharmacy with 80 customers. The material next: a class-34 homogeneous vinyl lasts longer than a low-end compact vinyl. Upkeep finally: respecting the daily protocol and the annual re-coating really extends the life of the floor by several years. Our oldest jobs, laid in 2002, are still in service in 2026 without having moved. You invest today, you will only ask yourself the question again in the next decade. That is the moral contract we make with you in signing the quote.',
  },
]

export default function SolPvcPharmaciePageEn() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/en/sol-pvc-pharmacie#service',
        name: 'Vinyl flooring for pharmacies',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
          { '@type': 'Country', name: 'France' },
        ],
        serviceType: 'Vinyl flooring laid in pharmacies',
        description: 'Professional vinyl flooring laid for pharmacies: sales area, dispensary, robot, toilets. Heat welds, cove skirting, A+ indoor-air rating, health-authority compliance, night work to avoid closing.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr/en' },
          { '@type': 'ListItem', position: 2, name: 'Pharmacy vinyl flooring', item: 'https://cbsols.fr/en/sol-pvc-pharmacie' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyQuoteButton from="pharmacie" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Pharmacy vinyl flooring</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Pharmacy vinyl flooring,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>built to last.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Professional vinyl flooring laid for your pharmacy: sales area, dispensary, robot, store, toilets. Floors easy to clean, health-authority compliant, acoustic. Night work so your pharmacy never closes. CB Sols has worked in the trade for over 28 years, workshop in Villedoux near La Rochelle.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=pharmacie" variant="primary" size="md">Request a quote</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Over 28 years of laying in the health sector</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                &ldquo;When you lay a floor in a pharmacy, you lay it for fifteen years of public service. Every detail counts, because it is the floor patients walk on when they are fragile, and the floor your team looks at hundreds of times a day. We have learned to do it clean, durable, beautiful.&rdquo;
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, owner of CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>For which zones of the pharmacy</div>
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

      {/* CTA inline 1 */}
      <section style={{ padding: '3rem 2rem' }}>
        <div style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A pharmacy to renovate?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              A site visit, a quote within 48h.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Samples shown in your pharmacy, under your working light. A detailed quote within 48 hours, a schedule fitted to your closures so no trading day is lost.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/en/contact?from=pharmacie" variant="primary" size="md">Request a quote</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifics */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>What a pharmacy floor must do</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six requirements <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>specific to the pharmacy.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            A pharmacy is neither an office nor a classic retail shop. Here are the six points on which we systematically steer the choice of floor and the laying method, without drowning the owner-pharmacist in technical jargon.
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
            The floors <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>we lay in pharmacies.</em>
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
              &ldquo;Today\'s pharmacy has nothing to do with the one of twenty years ago. The robot, the automated dispensers, the screens, the modern shelving: the floor must fit this modernity while staying accessible, hygienic and durable. Our role is to help you choose the right material for the next twenty years.&rdquo;
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, owner of CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/en/contact?from=pharmacie" variant="primary" size="md">Book an appointment</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>A visit directly in your pharmacy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Partner brands</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Eight references <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>for your pharmacy.</em>
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

      {/* Pharmacy profiles */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pharmacy profiles</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Twelve pharmacy profiles, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>floor choices to match.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Each pharmacy has its rhythm, its clientele, its architecture. Here is how we adapt the floor choice to the pharmacy profiles we renovate regularly in Charente-Maritime and beyond.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {lieux.map((q, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{q.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{q.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline 2 */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>A project in mind?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            A call to frame the project.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Twenty minutes on the phone to clarify the possible ranges, a realistic schedule around your trading, and an honest budget order of magnitude for your pharmacy.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=pharmacie" variant="primary" size="md">Request a quote</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>from the call to reopening.</em>
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
            Vinyl in a pharmacy, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>concrete answers.</em>
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
            Straight through to the owner. Clear advice, no jargon, an honest order of magnitude, a next step only if the project truly makes sense for you and your pharmacy.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <RelatedCards
        sectionTitle="See also"
        sectionSubtitle="Our know-how covers other worlds that may interest you. Take your time to browse, ask your questions, we will answer them."
        items={[
          { href: '/en/sol-pvc-cabinet-medical', title: 'Medical-practice vinyl flooring', teaser: 'A floor that reassures your patients from the waiting room and makes your daily cleaning easier.', icon: Stethoscope },
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
            Your pharmacy renovated <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>without a single day closed.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A site visit in your pharmacy. A quote within 48 hours, an A+-rated floor, health-authority compliance, night laying, an odour-free reopening. Over 28 years of CB Sols know-how at the service of owner-pharmacists.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=pharmacie" variant="primary" size="md">Request a quote</Button>
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
