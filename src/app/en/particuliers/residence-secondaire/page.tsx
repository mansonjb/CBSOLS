import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Second Home Île de Ré, Oléron | Turnkey Floor Laying, Progress Photos',
  description: "You live in Paris, Bordeaux, Nantes: we manage your second-home works remotely. Île de Ré, Île d'Oléron, La Rochelle. Progress photos, turnkey delivery.",
  alternates: {
    canonical: 'https://cbsols.fr/en/particuliers/residence-secondaire',
    languages: { 'fr-FR': 'https://cbsols.fr/particuliers/residence-secondaire', en: 'https://cbsols.fr/en/particuliers/residence-secondaire' },
  },
}

const cas = [
  { title: 'Île de Ré (Saint-Martin, Ars, La Couarde, Le Bois-Plage)', desc: 'Family houses, renovated longhouses, sea-view villas: carpet laying, wet-room vinyl, bespoke rugs. A speciality in coastal damp (managing salt, ventilating the substrate).' },
  { title: "Île d'Oléron & La Tremblade", desc: 'Second homes and holiday lets. Off-season laying (October to March) so the letting season is not penalised if you rent out.' },
  { title: 'La Rochelle, Châtelaillon, Aytré', desc: 'Seaside flats, town houses, high-end residences. Fast response for claims or urgent renovations.' },
  { title: 'Charente marshes, Brouage, Marennes', desc: 'Old houses, tired wood floors, stone staircases, floors to redo entirely. Substrate survey and solutions suited to the building.' },
]

const livrable = [
  { num: '01', title: 'A visit in your place', desc: 'You give us the keys, or a neighbour/estate agent lets us in. We measure, photograph, identify the constraints and send you a detailed report within 48h.' },
  { num: '02', title: 'Quote sent by email', desc: 'A detailed itemised quote with photos of the substrate, product recommendations, alternatives by budget. Remote approval by electronic signature.' },
  { num: '03', title: 'Remote material choice', desc: 'Samples sent to your main home for approval, or a showroom appointment in Villedoux if you pass through Charente-Maritime. A video call over the colour ranges is possible.' },
  { num: '04', title: 'Daily progress photos', desc: 'During the project, we send you start- and end-of-day photos by WhatsApp or email: preparation, substrate, first laying, finishes. You follow along without travelling.' },
  { num: '05', title: 'Turnkey delivery', desc: 'A clean project, rubble carted away, furniture put back if we had moved it. You discover the finished result on your next visit. A handover visit together if possible, otherwise by video call.' },
  { num: '06', title: 'Remote after-sales', desc: 'For any post-laying question: a stain to treat, a joint to touch up, upkeep advice. We support you remotely or come back on site during your next stay.' },
]

const garanties = [
  'Verified references from local hoteliers and restaurateurs',
  'Systematic photos at the start and end of each working day',
  'A written report sent after each key stage',
  'Ten-year + professional liability insurance up to date, certificate provided at the quote',
  'Staged payment: deposit / mid-project / handover',
  'No payment taken before you approve the final photos',
]

const faq = [
  { q: 'Do you take the keys in our absence?', a: 'Yes, we do it regularly. Either you hand us a set of keys on a previous visit, or a trusted neighbour, a caretaker or your estate agent lets us in. We work by progressive trust: for a first project, we prefer a local intermediary on site on the first day.' },
  { q: 'How do I approve the material choice without coming to the showroom?', a: 'Three options. (1) You come to the Villedoux showroom on a trip to Charente-Maritime. (2) We send you physical samples to your main home. (3) A video call over the colour ranges in natural light. For premium projects, option 1 or 2 is always preferable.' },
  { q: 'What is the most common payment method?', a: 'A deposit on order (30%), an interim payment at mid-project (40%), the balance on handover after you approve the final photos (30%). Bank transfer, cheque or secure online payment. No remote card payment, ever.' },
  { q: 'Do you work off-season so the letting is not penalised?', a: 'Yes, it is even the preferred period for let second homes. We schedule projects between October and March (outside school holidays if the house is let at half-term/Christmas/February). Work over 2 consecutive weekends is possible if the window is tight.' },
  { q: 'And if I want to be present for part of the project?', a: 'No problem, it is even welcome for the start and the handover. Many of our clients come for a weekend at the start (approving the material in situ) and another at delivery. The rest is handled remotely.' },
  { q: 'Which estate agencies / concierge services do you work with?', a: "We are recommended by several agencies and concierge services on Île de Ré and in La Rochelle. On request, we can put you directly in touch with a previous client who lives outside the region." },
]

export default function ResidenceSecondairePageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <Link href="/en/particuliers" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>For homeowners</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Second home</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span style={{ display: 'inline-block', padding: '0.3rem 0.875rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(44, 85, 48, 0.08)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', borderRadius: '999px', marginBottom: '1.25rem' }}>
                Île de Ré, Oléron, La Rochelle speciality
              </span>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Your second home,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>managed in your absence.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                You live in Paris, Nantes, Bordeaux, Lyon: your house on Île de Ré, Oléron or in La Rochelle needs a new floor. We manage the project from A to Z, regular progress photos, turnkey delivery. You discover the result on your next visit.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=residence-secondaire" variant="primary" size="md">Request a quote</Button>
                <Button href="/en/showroom" variant="outline" size="md">Showroom visit</Button>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/particuliers/photo-4.jpg" alt="Second home with wood flooring and terrazzo" style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Where we work</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            The whole Charente <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>coast.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {cas.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em', lineHeight: 1.35 }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our turnkey approach</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Six steps <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>without travelling.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {livrable.map((p) => (
              <div key={p.num} style={{ padding: '1.75rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)', borderRadius: '10px', borderLeft: '3px solid var(--terra)' }}>
                <div style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontSize: '1.25rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)', lineHeight: 1, marginBottom: '0.75rem' }}>{p.num}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.6rem', letterSpacing: '-0.01em' }}>{p.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Guarantees for remote clients</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.03em' }}>
            Entrusting your home <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>with full confidence.</em>
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {garanties.map((g, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start', fontSize: '0.95rem', color: 'var(--dark-2)', lineHeight: 1.65, padding: '0.5rem 0', borderBottom: i < garanties.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <span style={{ color: 'var(--terra)', fontWeight: 700, flexShrink: 0, fontSize: '1.1rem' }}>✓</span>
                {g}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Remote clients’ frequently asked questions</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Your real questions, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>our honest answers.</em>
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

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Your house is waiting, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>leave it to us.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A free quote after an on-site visit. Île de Ré, Île d&apos;Oléron, La Rochelle, the whole of Charente-Maritime.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=residence-secondaire" variant="primary" size="md">Request a quote</Button>
            <Button href="/en/showroom" variant="outline" size="md">Showroom visit</Button>
          </div>
          <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.6)' }}>
            Or call Valentin: <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.phone}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
