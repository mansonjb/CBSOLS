import type { Metadata } from 'next'
import Script from 'next/script'
import { Plus_Jakarta_Sans, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { MobileCTA } from '@/components/MobileCTA'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { CookieBanner } from '@/components/CookieBanner'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { company } from '@/data/company'
import { avis } from '@/data/avis'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap', weight: ['400', '500', '600', '700', '800'] })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', display: 'swap', weight: ['300', '400'], style: ['normal', 'italic'] })

export const metadata: Metadata = {
  title: {
    default: 'CB Sols | Artisan Revêtement de Sol La Rochelle & Île de Ré',
    template: '%s | CB Sols',
  },
  alternates: { canonical: 'https://cbsols.fr/' },
  description:
    'CB Sols, artisan spécialiste du revêtement de sol depuis 27 ans en Charente-Maritime. Moquette, sol PVC, tapis sur mesure pour particuliers et professionnels à La Rochelle, Île de Ré et environs.',
  keywords: ['revêtement sol', 'moquette', 'sol PVC', 'La Rochelle', 'Île de Ré', 'Charente-Maritime'],
  authors: [{ name: 'CB Sols' }],
  metadataBase: new URL('https://cbsols.fr'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://cbsols.fr',
    siteName: 'CB Sols',
    images: [
      {
        url: 'https://cbsols.fr/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'CB Sols, artisan revêtement de sol à La Rochelle et Île de Ré',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CB Sols | Artisan Revêtement de Sol La Rochelle & Île de Ré',
    description: 'Moquette, sol PVC, tapis sur mesure. 27 ans d\'expérience en Charente-Maritime.',
    images: ['https://cbsols.fr/images/og-default.jpg'],
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
  themeColor: '#F8F5EE',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const featuredReviews = avis.slice(0, 5).map((a) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: a.name },
    reviewBody: a.text,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    itemReviewed: { '@id': 'https://cbsols.fr/#localbusiness' },
  }))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://cbsols.fr/#website',
        url: 'https://cbsols.fr',
        name: 'CB Sols',
        description: 'Artisan revêtement de sol — La Rochelle, Île de Ré, Charente-Maritime',
        inLanguage: 'fr-FR',
        publisher: { '@id': 'https://cbsols.fr/#organization' },
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: 'https://cbsols.fr/recherche?q={search_term_string}' },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://cbsols.fr/#organization',
        name: company.legalName,
        legalName: company.legalName,
        url: 'https://cbsols.fr',
        logo: {
          '@type': 'ImageObject',
          url: 'https://cbsols.fr/images/logo-cbsols.png',
          width: 200,
          height: 200,
        },
        foundingDate: '1999',
        founder: { '@id': 'https://cbsols.fr/#valentin' },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: company.phoneClean,
          contactType: 'customer service',
          email: company.email,
          areaServed: 'FR',
          availableLanguage: ['French'],
        },
        sameAs: [company.social.instagram, company.social.linkedin],
      },
      {
        '@type': 'Person',
        '@id': 'https://cbsols.fr/#valentin',
        name: 'Valentin Prévoteau',
        jobTitle: 'Artisan poseur de revêtements de sol',
        worksFor: { '@id': 'https://cbsols.fr/#organization' },
        knowsAbout: [
          'Pose de moquette contrat',
          'Sol PVC en lés soudés',
          'Lames LVT',
          'Tapis sur mesure',
          'Ragréage P3 et fibré',
          'Barrière anti-humidité',
          'Conformité DTU 53.12',
        ],
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://cbsols.fr/#localbusiness',
        additionalType: 'HomeAndConstructionBusiness',
        name: company.legalName,
        legalName: company.legalName,
        url: 'https://cbsols.fr',
        telephone: company.phoneClean,
        email: company.email,
        image: 'https://cbsols.fr/images/logo-cbsols.png',
        logo: 'https://cbsols.fr/images/logo-cbsols.png',
        description: 'Artisan spécialiste du revêtement de sol depuis 1999 en Charente-Maritime. Moquette professionnelle, sol PVC, tapis sur mesure. Intervention hôtels, campings, bureaux.',
        parentOrganization: { '@id': 'https://cbsols.fr/#organization' },
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
        priceRange: '€€€',
        foundingDate: '1999',
        sameAs: [company.social.instagram, company.social.linkedin],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '41',
          bestRating: '5',
        },
        review: featuredReviews,
        employee: { '@id': 'https://cbsols.fr/#valentin' },
        knowsAbout: ['Moquette professionnelle', 'Sol PVC', 'LVT', 'Tapis sur mesure', 'Moquette hôtelière', 'Sol PVC cuisine professionnelle', 'Revêtement de sol ERP'],
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', name: 'Assurance décennale' },
        ],
      },
    ],
  }

  return (
    <html lang="fr" className={`${jakarta.variable} ${cormorant.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        {/* Google Analytics (gtag.js) — G-0HSR55DW27 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0HSR55DW27"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0HSR55DW27');
          `}
        </Script>
        {/* Microsoft Clarity — wyqlw2u4g8 */}
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wyqlw2u4g8");
          `}
        </Script>
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
