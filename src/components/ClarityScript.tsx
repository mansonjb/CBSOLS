'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'

/**
 * Microsoft Clarity loader — skip sur les routes admin pour ne pas polluer
 * les statistiques (31% du trafic Clarity en juin 2026 venait de Valentin
 * en train d'utiliser le CRM).
 *
 * Project ID : wyqlw2u4g8
 */
export function ClarityScript() {
  const pathname = usePathname()
  if (pathname?.startsWith('/admin')) return null

  return (
    <Script id="clarity-init" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "wyqlw2u4g8");
      `}
    </Script>
  )
}
