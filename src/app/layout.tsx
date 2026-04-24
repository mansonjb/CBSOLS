import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { MobileCTA } from '@/components/MobileCTA'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { CookieBanner } from '@/components/CookieBanner'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { company } from '@/data/company'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap', weight: ['400', '500', '600', '700', '800'] })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', display: 'swap', weight: ['300', '400'], style: ['normal', 'italic'] })

export const metadata: Metadata = {
  title: {
    default: 'CB Sols | Artisan Revêtement de Sol La Rochelle & Île de Ré',
    template: '%s',
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/site.webmanifest',
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAF8' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0908' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: company.legalName,
    legalName: company.legalName,
    url: 'https://cbsols.fr',
    telephone: company.phoneClean,
    email: company.email,
    description: 'Artisan spécialiste du revêtement de sol depuis 1999 en Charente-Maritime. Moquette professionnelle, sol PVC, tapis sur mesure. Certifié Qualibat. Intervention hôtels, campings, bureaux, EHPAD.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      postalCode: company.address.zip,
      addressCountry: 'FR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: company.geo.lat, longitude: company.geo.lng },
    areaServed: [
      { '@type': 'City', name: 'La Rochelle' },
      { '@type': 'AdministrativeArea', name: 'Île de Ré' },
      { '@type': 'AdministrativeArea', name: "Île d'Oléron" },
      { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
    ],
    hasMap: 'https://share.google/86MXB40I3QuKofiI4',
    priceRange: '€€',
    foundingDate: '1999',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
      bestRating: '5',
    },
    employee: {
      '@type': 'Person',
      name: 'Valentin Prévoteau',
      jobTitle: 'Artisan poseur de revêtements de sol',
      worksFor: { '@type': 'Organization', name: company.legalName },
    },
    knowsAbout: ['Moquette professionnelle', 'Sol PVC', 'LVT', 'Tapis sur mesure', 'Moquette hôtelière', 'Sol PVC cuisine professionnelle', 'Revêtement de sol ERP'],
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', name: 'Qualification Qualibat' },
      { '@type': 'EducationalOccupationalCredential', name: 'Assurance décennale' },
    ],
  }

  return (
    <html lang="fr" className={`${jakarta.variable} ${cormorant.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t===null&&p)){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
        <WhatsAppButton />
        <CookieBanner />
        <SpeedInsights />
      </body>
    </html>
  )
}
