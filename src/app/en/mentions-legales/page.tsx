import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Legal Notice | CB Sols Revêtements',
  description: 'Legal notice for cbsols.fr: publisher, hosting, intellectual property, personal data.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://cbsols.fr/en/mentions-legales',
    languages: { 'fr-FR': 'https://cbsols.fr/mentions-legales', en: 'https://cbsols.fr/en/mentions-legales', es: 'https://cbsols.fr/es/mentions-legales', },
  },
}

const sections = [
  {
    title: 'Site publisher',
    lines: [
      'Company name: CB Sols Revêtements',
      `Publication director: ${company.director}`,
      'Registered office: 8 rue des Merises, ZA les Cerisiers, 17230 Villedoux',
      `Phone: ${company.phone}`,
      `Email: ${company.email}`,
      `SIRET: ${company.siret}`,
      'Legal form: Company',
      'Intra-community VAT: on request',
      'Activity: Laying floor coverings (carpet, vinyl flooring, bespoke rugs)',
      'Experience: 500+ projects delivered since 1998',
      'Professional and ten-year structural insurance in place.',
    ],
  },
  {
    title: 'Hosting',
    lines: [
      'Host: Vercel Inc.',
      'Address: 440 N Barranca Ave #4133, Covina, CA 91723, United States',
      'Site: https://vercel.com',
      'The site is deployed via the Vercel Edge infrastructure, with edge servers in Europe (Paris, Frankfurt).',
    ],
  },
  {
    title: 'Intellectual property',
    lines: [
      'All content on the cbsols.fr site (text, graphics, images, logos, project photographs, videos, structure) is the exclusive property of CB Sols Revêtements, unless stated otherwise.',
      'Any reproduction, representation, modification, publication, transmission or distortion, in whole or in part, of the site or its content, by any means whatsoever, is prohibited without prior written authorisation.',
      'The logos of the partner brands (EGE, Gerflor, objectflor, Bostik, Romus) remain the property of their respective owners and are displayed for information as part of the commercial relationship with CB Sols Revêtements.',
      'The client logos shown in the “They trust us” section are used with their agreement, as professional references.',
    ],
  },
  {
    title: 'Personal data (GDPR)',
    lines: [
      'The information collected via the contact form or the express quote form (name, phone, email, town, project type, message) is intended exclusively for CB Sols Revêtements to handle your quote or appointment request.',
      'Legal basis for processing: the legitimate interest of CB Sols Revêtements in responding to commercial enquiries, and the explicit consent of the user when sending the form.',
      'Retention period: 3 years from the last contact for prospects, and for the whole duration of the commercial relationship then 10 years for clients (accounting obligations).',
      'Recipients: only the CB Sols Revêtements team. No transfer to third parties, no sale of data.',
      'Your rights: in accordance with the GDPR (EU regulation 2016/679) and French data-protection law, you have a right of access, rectification, erasure, restriction, portability and objection regarding your personal data. To exercise these rights, contact us at ' + company.email + '.',
      'You may also lodge a complaint with the CNIL (www.cnil.fr) if you consider that your rights have not been respected.',
    ],
  },
  {
    title: 'Cookies and trackers',
    lines: [
      'The cbsols.fr site uses a minimum of cookies necessary for its proper functioning (session, light/dark theme preference).',
      'No advertising cookie or third-party marketing tracker is placed without your explicit consent.',
      'An audience-measurement tool (Vercel Speed Insights) may be used to measure site performance anonymously. The data is aggregated and does not identify visitors.',
    ],
  },
  {
    title: 'Outbound links',
    lines: [
      'The cbsols.fr site may contain links to other sites (Google Maps, social media). CB Sols Revêtements is not responsible for the content of these third-party sites, nor for the use that may be made of them.',
    ],
  },
  {
    title: 'Liability',
    lines: [
      'CB Sols Revêtements strives to provide information on the cbsols.fr site that is as accurate as possible. However, we cannot be held responsible for omissions, inaccuracies or shortcomings in updating the information, whether they come from us or from third-party partners.',
      'The project photographs on the site are published with the agreement of the clients concerned, and for illustration. Real projects may differ depending on the project constraints, the choice of materials and the client’s preferences.',
    ],
  },
  {
    title: 'Applicable law and jurisdiction',
    lines: [
      'The cbsols.fr site is governed by French law. In the event of a dispute, and after an attempt at amicable resolution, jurisdiction is assigned to the French courts within the La Rochelle district.',
    ],
  },
]

export default function MentionsLegalesPageEn() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Legal information</div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Legal notice
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--cream-muted)', lineHeight: 1.7, margin: 0 }}>
            Under article 6 of French law no. 2004-575 of 21 June 2004 on confidence in the digital economy, users of the cbsols.fr site are informed of the identity of the various parties involved in its creation and upkeep.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '1.5rem' }}>
            Last updated: 24 April 2026
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem 6rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {sections.map((section) => (
              <div
                key={section.title}
                id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}
                style={{ borderTop: '2px solid var(--terra)', paddingTop: '2rem', scrollMarginTop: '90px' }}
              >
                <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.02em' }}>
                  {section.title}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {section.lines.map((line, i) => (
                    <p key={i} style={{ fontSize: '0.9rem', color: 'var(--cream-muted)', lineHeight: 1.75, margin: 0 }}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', textAlign: 'center' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--cream-muted)', margin: '0 0 1rem' }}>
              A question about your data or our terms of use?
            </p>
            <Button href="/en/contact" variant="primary" size="md">Contact us</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
