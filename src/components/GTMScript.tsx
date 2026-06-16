'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'

/**
 * Google Tag Manager loader — skip sur les routes admin pour ne pas polluer
 * les conteneurs de mesure (Valentin qui utilise le CRM).
 *
 * Container ID : GTM-T53BRKNL
 */
export function GTMScript() {
  const pathname = usePathname()
  if (pathname?.startsWith('/admin')) return null

  return (
    <Script id="gtm-init" strategy="lazyOnload">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-T53BRKNL');
      `}
    </Script>
  )
}
