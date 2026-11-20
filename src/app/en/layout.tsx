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
    default: 'CB Sols | Flooring & Carpet Craftsman, La Rochelle & Île de Ré',
    template: '%s | CB Sols',
  },
  description:
    'CB Sols, flooring and carpet craftsman for over 28 years in Charente-Maritime. Carpet, vinyl flooring and bespoke rugs for homes and businesses in La Rochelle, Île de Ré and the surrounding area.',
  keywords: ['floor covering', 'carpet', 'vinyl flooring', 'bespoke rugs', 'La Rochelle', 'Île de Ré', 'Charente-Maritime'],
  alternates: { canonical: 'https://cbsols.fr/en' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://cbsols.fr/en',
    siteName: 'CB Sols',
    title: 'CB Sols | Flooring & Carpet Craftsman, La Rochelle & Île de Ré',
    description:
      'Carpet, vinyl flooring and bespoke rugs. Over 28 years of craft experience in Charente-Maritime, from La Rochelle to Île de Ré.',
    images: [
      {
        url: 'https://cbsols.fr/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'CB Sols, flooring and carpet craftsman in La Rochelle and Île de Ré',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CB Sols | Flooring & Carpet Craftsman, La Rochelle & Île de Ré',
    description: 'Carpet, vinyl flooring and bespoke rugs. Over 28 years of craft experience in Charente-Maritime.',
    images: ['https://cbsols.fr/images/og-default.jpg'],
  },
}

// English-language WebSite node for the /en subtree. Distinct @id (/en/#website),
// inLanguage en-GB. It does NOT redeclare the Organization/LocalBusiness (those
// language-neutral entities live once in the root layout with their canonical
// @id) — it only references the Organization as publisher, so no duplicate
// business node appears on /en pages.
const enWebsiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://cbsols.fr/en/#website',
  url: 'https://cbsols.fr/en',
  name: 'CB Sols',
  description: 'Flooring and carpet craftsman — La Rochelle, Île de Ré, Charente-Maritime',
  inLanguage: 'en-GB',
  publisher: { '@id': 'https://cbsols.fr/#organization' },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(enWebsiteJsonLd) }} />
      {children}
    </>
  )
}
