import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Private Clients | CB Sols, High-End Floor-Layer La Rochelle, Île de Ré',
  description: "The craftsman who lays the carpet of the region's 5★ hotels also works in private homes: main residence, second home, bespoke staircase, room-by-room renovation. Bespoke quote, never a price-per-m² grid.",
  alternates: {
    canonical: 'https://cbsols.fr/en/particuliers',
    languages: { 'fr-FR': 'https://cbsols.fr/particuliers', en: 'https://cbsols.fr/en/particuliers', es: 'https://cbsols.fr/es/particuliers', },
  },
}

const filtres = [
  { title: 'No price-per-m² grid', desc: 'Every project is different: area, substrate, constraints, access. We travel out, we look, we cost. The quote is free, detailed and with no obligation.' },
  { title: 'The kind of projects we take on', desc: 'Master suite, children’s room, library, dressing room, a whole floor, a bespoke wood or stone staircase, main or second home, an old house to renovate.' },
]

const cas = [
  { img: '/images/moquette-chambre.webp', title: 'Main residence', desc: 'Carpet in the bedrooms, vinyl in the wet rooms, a bespoke staircase: your home deserves the same rigour of laying as the hotels we equip.', href: '/en/particuliers/moquette-maison' },
  { img: '/images/particuliers/photo-1.jpg', title: "Second home (Île de Ré, Oléron)", desc: 'You live in Paris, Bordeaux, Nantes: we handle the project in your absence, progress photos, turnkey delivery. A speciality in Île de Ré houses.', href: '/en/particuliers/residence-secondaire' },
  { img: '/images/particuliers/photo-2.jpg', title: 'Room-by-room renovation', desc: 'A floor to redo in the kitchen, the bathroom, a bedroom, a dressing room: we work on targeted projects without imposing a full renovation.', href: '/en/particuliers/sol-pvc-maison' },
  { img: '/images/tapis-hotel.webp', title: 'One-off project: staircase, entrance, living room', desc: 'A bespoke rug to dress a wood or stone staircase, an entrance to set off, a living room to soften: much-requested work, few craftsmen able to do it cleanly.', href: '/en/particuliers/tapis-escalier-sur-mesure' },
]

const pourquoi = [
  { num: '01', title: 'Valentin answers', desc: 'When you call ' + company.phone + ', it is the craftsman who answers. Not a switchboard, not a salesperson: the person who will lay your floor.' },
  { num: '02', title: 'No subcontracting', desc: 'The CB Sols team lays every project itself. No middleman, no unknown crew in your home.' },
  { num: '03', title: 'Showroom in Villedoux', desc: 'Over 500 samples to see by appointment. You touch, you compare, you choose in real conditions before committing.' },
  { num: '04', title: 'Over 28 years, benchmark brands', desc: 'Approved dealer for EGE, Gerflor, objectflor, Bostik, Romus since 2012. The same technical know-how as for high-end hotel projects.' },
  { num: '05', title: 'Bespoke quote, free', desc: 'A visit to your home, an assessment of the substrate, advice on the products suited to your use and budget. Detailed quote within 48h.' },
  { num: '06', title: 'Ten-year guarantee', desc: 'Up-to-date ten-year certificate, professional liability insurance, product compliance certificates given at the end of the project. Total peace of mind.' },
]

const services = [
  { href: '/en/particuliers/moquette-maison', label: 'Carpet for the home', desc: 'Bedroom, master suite, floor, dressing room — hotel quality at home.' },
  { href: '/en/particuliers/sol-pvc-maison', label: 'Vinyl for wet rooms', desc: 'Bathroom, kitchen, utility room, basement — 100% waterproof.' },
  { href: '/en/particuliers/tapis-escalier-sur-mesure', label: 'Bespoke rugs & staircases', desc: 'Dress a wood or stone staircase, create an entrance, soften a living room.' },
  { href: '/en/particuliers/residence-secondaire', label: 'Second home', desc: 'Île de Ré, Oléron, La Rochelle: project managed remotely, progress photos.' },
]

const faq = [
  { q: 'What kinds of project do you take on?', a: "A child's room, a main or second home, a library, a master suite, a whole floor, a bespoke staircase, an old house to renovate, a project where the material really matters: that is our ground." },
  { q: 'Do you travel to Île de Ré?', a: "Yes, it is even one of our main areas. We equip hoteliers, restaurateurs, guesthouses and second homes across the whole island. Travel is included for projects on Île de Ré, Île d'Oléron, La Rochelle and the whole of Charente-Maritime." },
  { q: 'Do you do small projects (a single room)?', a: "Yes. A master suite, a child's room, a guest room, a dressing room, a staircase, an entrance, a bathroom, a library, or a reception room: we work on targeted projects without imposing a full renovation." },
  { q: 'What is the time between the quote and the laying?', a: "Allow 2 to 6 weeks depending on the availability of the chosen material (EGE, Gerflor, objectflor ranges ordered per project) and our schedule. For emergencies (a claim, a planned move), we always do our utmost to speed things up." },
  { q: 'Why not show a price per m²?', a: "Because the same product laid on a sound substrate or on tiling that needs a levelling compound, in a square room or an L-shaped one, in La Rochelle or on Île de Ré, does not cost the same. Showing a standardised price per m² would be either dishonest or inaccurate. We prefer to come and see and cost it fairly." },
  { q: 'Do you work in an occupied house?', a: "Yes, we work in occupied premises, by phasing if needed (room by room, floor by floor). We protect the furniture, move what can be moved, and leave a clean project at the end of the day." },
]

export default function ParticuliersPageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 30%, rgba(44, 85, 48, 0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>For homeowners</span>
          </div>
          <span style={{ display: 'inline-block', padding: '0.3rem 0.875rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(44, 85, 48, 0.08)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', borderRadius: '999px', marginBottom: '1.5rem' }}>
            For private projects
          </span>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
            The standard of 5★ hotels<br />
            <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>in your home.</em>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', maxWidth: '680px', lineHeight: 1.75, marginBottom: '2rem' }}>
            The same craftsman who lays the carpet of the region’s starred hotels and restaurants can lay yours. On one condition: that the project makes sense. A fine material, a bespoke quote, a visit to your home before any costing.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--dark-2)', maxWidth: '680px', lineHeight: 1.75, marginBottom: '2.5rem', fontStyle: 'italic' }}>
            No price-per-m² grid, no off-the-shelf price: we come and see, we understand your project, we cost it accordingly.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button href="/en/contact?from=particuliers" variant="primary" size="md">Request a bespoke quote</Button>
            <Button href="/en/showroom" variant="outline" size="md">Book a showroom visit</Button>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our positioning</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Two principles <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>that set the frame.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {filtres.map((f, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)', borderLeft: '3px solid var(--terra)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', lineHeight: 1.3, letterSpacing: '-0.01em' }}>{f.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Use cases</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            For what <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>kind of project?</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {cas.map((c) => (
              <Link key={c.title} href={c.href} style={{ textDecoration: 'none', display: 'block' }}>
                <div className="service-card" style={{ border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', backgroundColor: 'var(--bg-card)', height: '100%', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s, box-shadow 0.2s' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.title} style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }} />
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', flexGrow: 1 }}>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', margin: 0, letterSpacing: '-0.01em' }}>{c.title}</h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0, flexGrow: 1 }}>{c.desc}</p>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', marginTop: '0.5rem' }}>Explore →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Why a craftsman rather than a chain</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Six <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>concrete differences.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.25rem' }}>
            {pourquoi.map((p) => (
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
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Dedicated services for private clients</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Four services <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>for your home.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {services.map((s, i) => (
              <Link key={s.href} href={s.href} style={{ textDecoration: 'none' }}>
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', padding: '1.5rem 0', borderBottom: i < services.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--border-strong)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--terra)' }}>{i + 1}</span>
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.25rem' }}>{s.label}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</div>
                  </div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', flexShrink: 0 }}>→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Private clients’ frequently asked questions</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Your questions, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>our honest answers.</em>
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
            Your project deserves <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>a real visit.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A bespoke quote, free, no obligation. A home visit in La Rochelle, Île de Ré, Île d&apos;Oléron and the whole of Charente-Maritime.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=particuliers" variant="primary" size="md">Request a quote</Button>
            <Button href="/en/showroom" variant="outline" size="md">Book a showroom visit</Button>
          </div>
          <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.6)' }}>
            Or call Valentin directly: <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.phone}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
