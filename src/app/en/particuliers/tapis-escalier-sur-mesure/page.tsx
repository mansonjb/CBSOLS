import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Bespoke Rugs & Staircases | Artisan Laying La Rochelle, Île de Ré',
  description: 'Bespoke rug laying for wood or stone staircases, entrances, living rooms. Artisan making & laying, EGE & Romus (profiles) brands. A know-how we have practised for over 28 years for boutique hotels and family homes.',
  alternates: {
    canonical: 'https://cbsols.fr/en/particuliers/tapis-escalier-sur-mesure',
    languages: { 'fr-FR': 'https://cbsols.fr/particuliers/tapis-escalier-sur-mesure', en: 'https://cbsols.fr/en/particuliers/tapis-escalier-sur-mesure' },
  },
}

const cas = [
  { title: 'Wooden staircase', desc: 'A bespoke rug cut and laid step by step, a tensioned riser, Romus brass or stainless-steel profiles for the nosing. Protects the wood, dampens noise, adds character.' },
  { title: 'Stone or concrete staircase', desc: 'Glued laying with dressed risers. Ideal in a second home or old house where the staircase is cold and noisy. A boutique-hotel finish.' },
  { title: 'Entrance & hallway', desc: 'A bespoke rug cut to the exact dimensions of your entrance, with a whipped edge or woven border. A custom motif is possible in the EGE Custom collection.' },
  { title: 'Living room, library, bedroom', desc: 'A large bespoke rug to mark out a space, soften a living room, create a reading zone. Cutting, finishing and home delivery.' },
]

const produits = [
  { name: 'EGE Axminster Custom', desc: 'The high-end woven range from Denmark’s EGE: bespoke motifs, up to 24 colours, palace quality. A 6-10 week lead time, but the result is incomparable.' },
  { name: 'EGE Highline / Cantana', desc: 'Prestige tufted ranges for cutting into bespoke rugs. Faster to produce (3-5 weeks), a very wide range of colours.' },
  { name: 'Romus profiles', desc: 'Brass, stainless-steel or aluminium stair nosings. Choice of finish (polished, brushed, aged) in the showroom to suit your home’s style.' },
]

const process = [
  { step: 'Visit', desc: 'Precise measurement of the staircase (every step, riser, intermediate landing), the stairwell, and a discussion of the style sought.' },
  { step: 'Showroom', desc: 'Selecting the material and the profiles in real conditions. Comparing several ranges and colours under natural light.' },
  { step: 'Quote', desc: 'A detailed quote: material per m², profiles, bespoke making, laying. The manufacturing lead time is given at the order.' },
  { step: 'Making', desc: 'Cutting and making at the manufacturer’s or in the workshop (by range). A 3 to 10 week lead time depending on the chosen product.' },
  { step: 'Laying', desc: 'Step-by-step laying with suitable adhesive, precise tensioning of the risers, fixing of the profiles.' },
]

const faq = [
  { q: 'What is the lead time for a bespoke stair rug?', a: 'Allow 4 to 12 weeks between the order and the laying, by range: 3-5 weeks for the tufted EGE Highline, 6-10 weeks for the Axminster Custom, plus 1 to 2 days of laying. We give a precise lead time at the quote.' },
  { q: 'How much does a bespoke stair rug cost?', a: 'Very variable by range and number of steps. As a guide: a standard straight 14-step staircase in EGE Highline starts around 1,800-2,500 €, profiles and laying included. A winding staircase in Axminster Custom rises quickly to 4,000-6,000 €. A precise quote after a visit.' },
  { q: 'Can a rug be laid on an old (wood, stone) staircase?', a: 'Yes, almost always. The substrate must be stable and clean. On a stone staircase a bonding primer is needed. On old wood, the steps’ fixity is checked. In all cases, we assess at the visit.' },
  { q: 'Does the rug damage the staircase wood?', a: 'No, on the contrary: it protects it from wear and knocks. On any later removal, the adhesive comes off cleanly (on varnished or painted wood). On bare wood, residual traces may remain. We always say so.' },
  { q: 'Why do few craftsmen do this work?', a: 'Because it is demanding: precise measuring, bespoke making, meticulous step-by-step laying. It is a know-how being lost in the national chains. We have practised it for over 28 years, mainly for hotels and family homes.' },
]

export default function TapisEscalierPageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <Link href="/en/particuliers" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>For homeowners</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Bespoke rugs & staircases</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Bespoke rugs &<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>staircases.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Dressing a wood or stone staircase, creating a standout entrance, softening a living room: a rare artisan know-how we have practised for over 28 years for the region’s boutique hotels and family homes.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/en/contact?from=tapis-escalier" variant="primary" size="md">Request a quote</Button>
                <Button href="/en/showroom" variant="outline" size="md">Showroom visit</Button>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/tapis-hotel-baronnie.webp" alt="Bespoke rug for a staircase" style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>For which project?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Four places where a bespoke rug <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>makes the difference.</em>
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

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>What we make and lay</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Materials & profiles <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>of quality.</em>
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
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Our approach, from quote to laying</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Five steps, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>no surprises.</em>
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
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Frequently asked questions</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Bespoke rugs, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>honest answers.</em>
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
            A staircase worthy of <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>your home?</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            A bespoke quote, free, after a visit. Charente-Maritime, Île de Ré, Île d&apos;Oléron.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/en/contact?from=tapis-escalier" variant="primary" size="md">Request a quote</Button>
            <Button href="/en/showroom" variant="outline" size="md">Showroom visit</Button>
          </div>
          <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.6)' }}>
            Or <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.phone}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
