import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { company } from '@/data/company'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: 'CB Sols — Artisan Revêtement de Sol La Rochelle & Île de Ré',
    template: '%s — CB Sols',
  },
  description:
    'CB Sols, artisan spécialiste du revêtement de sol depuis 25 ans en Charente-Maritime. Moquette, sol PVC, tapis sur mesure pour particuliers et professionnels à La Rochelle, Île de Ré et environs.',
  keywords: ['revêtement sol', 'moquette', 'sol PVC', 'La Rochelle', 'Île de Ré', 'Charente-Maritime'],
  authors: [{ name: 'CB Sols' }],
  metadataBase: new URL('https://cbsols.fr'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://cbsols.fr',
    siteName: 'CB Sols',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: company.legalName,
    url: 'https://cbsols.fr',
    telephone: company.phoneClean,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      postalCode: company.address.zip,
      addressCountry: 'FR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: company.geo.lat, longitude: company.geo.lng },
    areaServed: company.zones.map((z) => ({ '@type': 'City', name: z })),
    priceRange: '€€',
    foundingDate: '1999',
  }

  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body style={{ fontFamily: 'var(--font-inter, Inter, system-ui, sans-serif)' }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
