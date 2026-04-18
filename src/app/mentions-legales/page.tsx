import type { Metadata } from 'next'
import { company } from '@/data/company'

export const metadata: Metadata = {
  title: 'Mentions Légales | CB Sols',
  robots: { index: false },
}

export default function MentionsLegalesPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ padding: '5rem 2rem 6rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '2.5rem', fontWeight: 400, color: 'var(--cream)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Mentions légales
          </h1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {[
              {
                title: 'Éditeur du site',
                content: `${company.legalName}\n${company.address.full}\nTéléphone : ${company.phone}\nEmail : ${company.email}`,
              },
              {
                title: 'Responsable de publication',
                content: company.contact,
              },
              {
                title: 'Hébergement',
                content: 'Vercel Inc.\n440 N Barranca Ave #4133\nCovina, CA 91723\nUSA',
              },
              {
                title: 'Propriété intellectuelle',
                content: 'L\'ensemble du contenu de ce site (textes, images, logos) est la propriété exclusive de CB Sols Revêtements. Toute reproduction, même partielle, est interdite sans autorisation préalable.',
              },
              {
                title: 'Données personnelles',
                content: 'Les informations collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes. Elles ne sont ni vendues, ni cédées à des tiers. Conformément au RGPD, vous disposez d\'un droit d\'accès, de rectification et de suppression de vos données en nous contactant à ' + company.email,
              },
            ].map((section) => (
              <div key={section.title} style={{ borderBottom: '1px solid var(--border)', paddingBottom: '2rem' }}>
                <h2 style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>{section.title}</h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--cream-muted)', lineHeight: 1.7, margin: 0, whiteSpace: 'pre-line' }}>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
