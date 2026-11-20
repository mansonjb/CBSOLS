import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Floor Covering Showroom La Rochelle | CB Sols, By Appointment',
  description:
    'Visit the CB Sols showroom in Villedoux (10 min from La Rochelle): over 500 EGE, Gerflor, objectflor, Bostik, Romus samples to see on site. By appointment.',
  alternates: {
    canonical: 'https://cbsols.fr/en/showroom',
    languages: { 'fr-FR': 'https://cbsols.fr/showroom', en: 'https://cbsols.fr/en/showroom', es: 'https://cbsols.fr/es/showroom', },
  },
}

export default function ShowroomPageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Showroom · By appointment</div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
            Come to touch,<br />see, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>choose.</em>
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', maxWidth: '560px', lineHeight: 1.7 }}>
            Our showroom is a quiet space, far from the big-box stores. You are received by an expert who takes the time to understand your project, your use and your wishes.
          </p>
        </div>
      </section>

      {/* How a visit unfolds */}
      <section style={{ padding: '4.5rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem' }}>How a visit unfolds</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 700, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.02em', maxWidth: '640px', lineHeight: 1.15 }}>
            An hour to understand your project, 48 hours to cost it.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {[
              { num: '01', title: 'Initial discussion', desc: 'We talk through your space, its use, the traffic, the light. Each constraint steers the choice of material.' },
              { num: '02', title: 'Selecting samples', desc: 'We identify 5 to 10 suitable references from our 500+ samples available on site: material, colour, finish.' },
              { num: '03', title: 'Seeing it in context', desc: 'For bespoke projects, we bring the samples so you can see them in context on site, in the light of your space. For specific references not in stock, we order from the manufacturers within 5 to 10 days.' },
              { num: '04', title: 'Technical visit and quote within 48h', desc: 'The on-site technical visit is mandatory before any costing: we check flatness, residual moisture and the state of the substrate. You then receive a detailed quote: supply, laying, preparation, timescales.' },
            ].map((step) => (
              <div key={step.num} style={{ borderTop: '2px solid var(--terra)', paddingTop: '1.5rem' }}>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--terra)', fontWeight: 600, marginBottom: '0.75rem' }}>{step.num}</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.75rem', fontFamily: 'var(--font-sans)' }}>{step.title}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', margin: 0, lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>What you will find</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { label: 'Over 500 samples on site', desc: 'A very wide range of EGE, Gerflor, objectflor, Bostik and Romus to see and handle at the showroom' },
                  { label: 'Personalised advice', desc: 'Valentin Prévoteau or a member of his team guides you in your choice' },
                  { label: 'Samples ordered on request', desc: 'For references that interest you and are not in stock at the showroom, we order them from the manufacturer within 5 to 10 days for final approval.' },
                  { label: 'In-situ visualisation', desc: 'We help you picture the final result in your space with visualisation tools' },
                  { label: 'Mandatory technical visit', desc: 'We always travel to the site before costing to assess the substrate and guarantee a quote with no surprises' },
                  { label: 'Quote within 48h', desc: 'After the technical visit, a detailed quote is sent by email: supply, laying, substrate preparation, timescales' },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--terra)', marginTop: '0.5rem', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--cream)', marginBottom: '0.25rem' }}>{item.label}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', padding: '3rem' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '2rem' }}>Book an appointment</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-muted)', marginBottom: '0.5rem' }}>Address</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--cream)', margin: 0, lineHeight: 1.6 }}>
                    8 rue des Merises, ZA les Cerisiers<br />17230 Villedoux<br />
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>(10 minutes from La Rochelle)</span>
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-muted)', marginBottom: '0.5rem' }}>Contact</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--cream)', margin: 0 }}>{company.contact}</p>
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-muted)', marginBottom: '0.5rem' }}>Opening</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--cream-muted)', margin: 0 }}>Mon – Fri · 8am – 6pm<br />By appointment only</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Button href={`tel:${company.phoneClean}`} external variant="primary" size="md" style={{ display: 'flex', width: '100%' }}>
                  Call to book
                </Button>
                <Button href="/en/contact" variant="outline" size="md" style={{ display: 'flex', width: '100%' }}>
                  Contact page
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
