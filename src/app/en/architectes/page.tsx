import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { ClientLogoCard } from '@/components/ClientLogoCard'
import { architectePartners } from '@/data/clients'

export const metadata: Metadata = {
  title: 'Architects & Specifiers | CB Sols, Floor Covering Partner',
  description: 'CB Sols supports architects, decorators and project managers in Charente-Maritime. Technical sheets, colour ranges, dedicated project follow-up. Specifier quote within 24h.',
  alternates: {
    canonical: 'https://cbsols.fr/en/architectes',
    languages: { 'fr-FR': 'https://cbsols.fr/architectes', en: 'https://cbsols.fr/en/architectes' },
  },
}

const atouts = [
  { num: '01', title: 'Complete technical sheets', desc: 'Fire ratings, acoustics, chemical resistance, laying formats: all the documents your as-built files and specifications need, available on request.' },
  { num: '02', title: 'Showroom by specifier appointment', desc: 'A private showroom visit in Villedoux. 500+ EGE, Gerflor, objectflor samples to take away. Technical advice directly from Valentin Prévoteau.' },
  { num: '03', title: 'Quote within 24h (vs 48h standard)', desc: 'Architect files are handled as a priority. Send your DXF/PDF plans and specifications: a costed reply the next day.' },
  { num: '04', title: 'Work with no interruption to activity', desc: 'CB Sols organises projects in occupied premises, by phasing and rotation to respect your client’s schedule. Zero delivery delay on our part.' },
  { num: '05', title: 'Dedicated project follow-up', desc: 'A single point of contact from quote to handover. Progress photos, laying reports, snags cleared within the contractual deadlines.' },
  { num: '06', title: 'Ten-year guarantee + certificates', desc: 'Up-to-date ten-year certificate, professional liability insurance, product compliance certificates: a complete file for your as-built documents at handover.' },
]

const process = [
  { step: 'Brief', desc: 'Send your plans, your programme and your technical requirements. CB Sols assesses feasibility and calls you back within 4h.' },
  { step: 'Proposal', desc: 'A selection of products matched to your specifications (ratings, looks, client budget) with alternatives.' },
  { step: 'Spec quote', desc: 'A detailed itemised quote, compatible with your specification, including technical sheets and standards references.' },
  { step: 'Project', desc: 'Laying by the CB Sols team, no subcontracting. Schedule respected, progress photos if wanted.' },
  { step: 'As-built', desc: 'Delivery of the complete as-built file: products laid, technical sheets, certificates, guarantees.' },
]

const secteurs = [
  { label: 'Hotels & tourism', desc: 'Islands of Ré and Oléron, La Rochelle, Royan: 2- to 5-star hotels, residences, campsites' },
  { label: 'Offices & commercial', desc: 'Open-plan, meeting rooms, reception: acoustic tiles, LVT, contract carpet' },
  { label: 'Clinics and practices', desc: 'Bacteriostatic carpets, certified homogeneous vinyl, reduced-mobility accessibility' },
  { label: 'Restaurants & catering', desc: 'Welded R11 pro kitchens, acoustic dining rooms, mixed spaces' },
  { label: 'Public bodies & buildings', desc: 'Tenders, fire ratings, accessibility: compliant files' },
]

const conseils = [
  { num: '01', title: 'Reading the programme', desc: '4★ hotel, fine-dining restaurant, medical practice, open-plan office: each type has its regulatory requirements (Bfl-s1, R10/R11, acoustics). We read your programme and spot from the outset the obligations that steer the choices.' },
  { num: '02', title: 'Material selection', desc: 'Three proposals ranked by use, looks and budget, with their stated limits. We never push a single reference: your client must be able to decide fully informed.' },
  { num: '03', title: 'Acoustics & comfort', desc: 'We quantify the expected acoustic impact (sound reduction in dB by carpet) and thermal comfort. Useful for defending carpet against a hard floor in client trade-offs.' },
  { num: '04', title: 'Durability & upkeep', desc: 'Total cost of ownership over 10 years (laying + periodic upkeep + replacement), not just the purchase price. We present the durability vs initial-budget trade-offs.' },
  { num: '05', title: 'Substrate compatibility', desc: 'A technical visit ahead of the tender file to check flatness, residual moisture, the type of substrate. We identify the preparatory works needed (levelling compound, primer, underlay).' },
  { num: '06', title: 'Project phasing', desc: 'Laying in occupied premises, stages by zone, off-peak hours: we propose a phasing compatible with your operation schedule and your client’s.' },
]

export default function ArchitectesPageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 30%, rgba(44, 85, 48, 0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem' }}>
            <Link href="/en" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Specifiers</span>
          </div>
          <span style={{ display: 'inline-block', padding: '0.3rem 0.875rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(44, 85, 48, 0.08)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', borderRadius: '999px', marginBottom: '1.5rem' }}>
            Architects · Decorators · Project managers
          </span>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
            CB Sols,{' '}
            <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>your flooring partner.</em>
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '620px', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            You specify the materials, CB Sols lays them. Quote within 24h, complete technical sheets, projects run without interrupting activity. A single technical point of contact from your brief to the as-built file.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button href="/en/contact?from=architectes" variant="primary" size="md">Contact CB Sols</Button>
            <Button href="/en/showroom" variant="outline" size="md">Visit the showroom</Button>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>What CB Sols brings specifiers</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            A partner <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>that makes your work easier</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.5rem' }}>
            {atouts.map((a) => (
              <div key={a.num} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>{a.num}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>{a.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-alt)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Specifier process</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            From brief to as-built
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0' }}>
            {process.map((p, i) => (
              <div key={i} style={{ padding: '1.75rem', borderRight: i < process.length - 1 ? '1px solid var(--border)' : 'none', position: 'relative' }}>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Sectors we work in</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {secteurs.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '1.375rem 0', borderBottom: '1px solid var(--border)' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid var(--border-strong)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px' }}>
                  <span style={{ fontSize: '0.62rem', fontWeight: 700, color: 'var(--muted)' }}>{i + 1}</span>
                </div>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.25rem' }}>{s.label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem', maxWidth: '760px' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Advice matched to the project</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              Helping you <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>make the right choices.</em>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', lineHeight: 1.75 }}>
              Specifying a covering means balancing acoustics, durability, looks, standards, budget and timescales. Our role as technical partner: to decode those trade-offs with you and propose the solution that holds on every axis, including the ones the client does not see yet.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
            {conseils.map((c) => (
              <div key={c.num} style={{ padding: '1.75rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)', borderRadius: '10px', borderLeft: '3px solid var(--terra)' }}>
                <div style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontSize: '1.25rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)', lineHeight: 1, marginBottom: '0.75rem' }}>{c.num}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.6rem', lineHeight: 1.3, letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--cream-muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'start', padding: '2.5rem 0 0', borderTop: '1px solid var(--border)' }}>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Typical deliverables</div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.01em' }}>
                What you receive at the advice stage
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {[
                  'A positioning note: 2 to 3 argued references per space',
                  'Manufacturer technical sheets (safety data, fire ratings, certifications)',
                  'Physical samples shipped to the agency or the showroom',
                  'An indicative budget estimate per m² fitted',
                  'An opinion on compatibility with the existing substrate',
                  'Realistic phasing and timescale recommendations',
                ].map((it) => (
                  <li key={it} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.85rem', color: 'var(--dark-2)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--terra)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ padding: '2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', borderLeft: '3px solid var(--terra)' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>How it starts</div>
              <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {[
                  { t: 'Brief by email or phone', d: 'Programme, plans (DXF, PDF), client requirements, target budget.' },
                  { t: 'Analysis within 4 working hours', d: 'You receive our first technical questions and confirmation the project is within our scope.' },
                  { t: 'Advice note within 5 days', d: 'An argued selection + alternatives. You stay in charge of the final specification.' },
                  { t: 'Costed quote on request', d: 'Once the client has decided, we cost it in detail (specification-compatible).' },
                ].map((s, i) => (
                  <li key={s.t} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                    <span style={{ width: 26, height: 26, borderRadius: '50%', backgroundColor: 'var(--terra)', color: '#fff', fontSize: '0.7rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      {i + 1}
                    </span>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.2rem' }}>{s.t}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{s.d}</div>
                    </div>
                  </li>
                ))}
              </ol>
              <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)' }}>
                <Button href="/en/contact?from=architectes-conseil" variant="primary" size="md">
                  Start a brief
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-inv)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem' }}>They specify us</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--text-on-dark)', margin: '0 0 0.75rem', letterSpacing: '-0.02em' }}>
              Partner architects & agencies
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-on-dark-muted)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
              Several interior-architecture agencies in Charente-Maritime regularly entrust their projects to us. A selection below.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem', justifyContent: 'center' }}>
            {architectePartners.map((p) => (
              <ClientLogoCard key={p.alt} client={p} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Partner programme</div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
                A long-term <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>relationship.</em>
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.8 }}>
                We work with a small circle of architects and design offices in Charente-Maritime. Our goal: to become your default flooring partner, not a one-off subcontractor.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { title: 'Negotiated pricing terms', desc: 'Reduced margins for your recurring professional projects. Terms discussed one to one.' },
                { title: 'Adapted payment terms', desc: 'Invoicing at 30 or 45 days by volume. Compatible with your client cycles.' },
                { title: 'Dedicated showroom by appointment', desc: 'Private slots for your client meetings. We can receive your prospects directly.' },
              ].map((item) => (
                <div key={item.title} style={{ padding: '1.25rem 1.5rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)', borderLeft: '3px solid var(--terra)' }}>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.4rem', fontFamily: 'var(--font-sans)' }}>{item.title}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Specifier contact</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Let&apos;s talk about your project
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
            <strong style={{ color: 'var(--dark-2)' }}>Valentin Prévoteau</strong>, {company.phone}
          </p>
          <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginBottom: '2.5rem' }}>
            Reply within 4h on weekdays. Send plans and specifications to{' '}
            <a href={`mailto:${company.email}`} style={{ color: 'var(--terra)', textDecoration: 'none' }}>{company.email}</a>
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="/en/contact?from=architectes" variant="primary" size="md">Send a brief</Button>
            <Button href={`tel:${company.phoneClean}`} external variant="outline" size="md">{company.phone}</Button>
          </div>
        </div>
      </section>

    </div>
  )
}
