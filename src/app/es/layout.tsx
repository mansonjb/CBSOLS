import type { Metadata } from 'next'

/**
 * EN subtree layout. Pass-through for rendering (Header/Footer/<html> live in the
 * root layout and are already locale-aware; <html lang> is synced client-side by
 * LangSync). Its job is to set English metadata defaults for every /en page that
 * does not override them: title template, description, keywords, Open Graph locale
 * en_GB and Twitter card. Static — no impact on the FR tree.
 */
export const metadata: Metadata = {
  title: {
    default: 'CB Sols | Artesano de suelos y moquetas, La Rochelle e Île de Ré',
    template: '%s | CB Sols',
  },
  description:
    'CB Sols, artesano de suelos y moquetas desde hace más de 28 años en Charente-Maritime. Moqueta, suelo vinílico y alfombras a medida para hogares y empresas en La Rochelle, Île de Ré y los alrededores.',
  keywords: ['revestimiento de suelo', 'moqueta', 'suelo vinílico', 'alfombras a medida', 'La Rochelle', 'Île de Ré', 'Charente-Maritime'],
  alternates: { canonical: 'https://cbsols.fr/es' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://cbsols.fr/es',
    siteName: 'CB Sols',
    title: 'CB Sols | Artesano de suelos y moquetas, La Rochelle e Île de Ré',
    description:
      'Moqueta, suelo vinílico y alfombras a medida. Más de 28 años de experiencia artesanal en Charente-Maritime, de La Rochelle a Île de Ré.',
    images: [
      {
        url: 'https://cbsols.fr/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'CB Sols, artesano de suelos y moquetas en La Rochelle e Île de Ré',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CB Sols | Artesano de suelos y moquetas, La Rochelle e Île de Ré',
    description: 'Moqueta, suelo vinílico y alfombras a medida. Más de 28 años de experiencia artesanal en Charente-Maritime.',
    images: ['https://cbsols.fr/images/og-default.jpg'],
  },
}

// English-language WebSite node for the /en subtree. Distinct @id (/es/#website),
// inLanguage en-GB. It does NOT redeclare the Organization/LocalBusiness (those
// language-neutral entities live once in the root layout with their canonical
// @id) — it only references the Organization as publisher, so no duplicate
// business node appears on /en pages.
const enWebsiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://cbsols.fr/es/#website',
  url: 'https://cbsols.fr/es',
  name: 'CB Sols',
  description: 'Artesano de suelos y moquetas en La Rochelle, Île de Ré, Charente-Maritime',
  inLanguage: 'es-ES',
  publisher: { '@id': 'https://cbsols.fr/#organization' },
}

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(enWebsiteJsonLd) }} />
      {children}
    </>
  )
}
