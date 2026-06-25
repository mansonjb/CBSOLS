import type { NextConfig } from "next";

// CSP pragmatique : autorise GTM/GA4, Clarity, Vercel speed-insights,
// Leaflet + tuiles OpenStreetMap (admin/carte), Google Fonts. 'unsafe-inline'
// sur script-src est gardé tant que les JSON-LD inline ne sont pas migres
// vers des nonces.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://*.googletagmanager.com https://www.googletagmanager.com https://*.google-analytics.com https://www.google-analytics.com https://*.clarity.ms https://www.clarity.ms https://vercel.live https://va.vercel-scripts.com https://player.vimeo.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https://*.googletagmanager.com https://*.google-analytics.com https://*.clarity.ms https://c.bing.com https://www.google.com https://www.google.fr https://*.tile.openstreetmap.org https://vumbnail.com https://i.vimeocdn.com",
  "connect-src 'self' https://*.google-analytics.com https://www.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.clarity.ms https://www.clarity.ms https://c.bing.com https://api.openstreetmap.org https://nominatim.openstreetmap.org https://player.vimeo.com https://*.vimeocdn.com",
  "media-src 'self' blob: https://player.vimeo.com https://*.vimeocdn.com",
  "frame-src 'self' https://www.googletagmanager.com https://player.vimeo.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join('; ');

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=(), payment=()' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  // Strict-Transport-Security : forcée par Vercel en prod HTTPS, on renforce
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Content-Security-Policy', value: csp },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // Slug historique avec accent → normalisé ASCII
      {
        source: '/revetement-sol-aytré',
        destination: '/revetement-sol-aytre',
        permanent: true,
      },
      {
        source: '/:service-aytré',
        destination: '/:service-aytre',
        permanent: true,
      },
      // Ancien slug hub marine → nouveau slug SEO
      {
        source: '/sols-marine',
        destination: '/moquette-bateau',
        permanent: true,
      },
      {
        source: '/sols-marine/',
        destination: '/moquette-bateau',
        permanent: true,
      },
      // Ancienne URL WordPress du service nettoyage → nouvelle URL canonique
      {
        source: '/nettoyage-des-moquettes',
        destination: '/nettoyage-moquettes',
        permanent: true,
      },
      {
        source: '/nettoyage-des-moquettes/',
        destination: '/nettoyage-moquettes',
        permanent: true,
      },
      // Ancienne URL WordPress sol PVC en lés → page service canonique
      // (rankait pos 5 sur "pvc en lés" mais 0 clic, on consolide vers la vraie page)
      {
        source: '/pvc-en-les',
        destination: '/services/sol-pvc-les',
        permanent: true,
      },
      {
        source: '/pvc-en-les/',
        destination: '/services/sol-pvc-les',
        permanent: true,
      },
      // Autres anciennes URLs WordPress PVC qui captent encore des impressions
      {
        source: '/pvc-en-lames-ou-dalles',
        destination: '/services/sol-pvc-lames-dalles',
        permanent: true,
      },
      {
        source: '/pvc-en-lames-ou-dalles/',
        destination: '/services/sol-pvc-lames-dalles',
        permanent: true,
      },
      {
        source: '/pose-pvc-de-differents-coloris',
        destination: '/services/sol-pvc-lames-dalles',
        permanent: true,
      },
      {
        source: '/pose-pvc-de-differents-coloris/',
        destination: '/services/sol-pvc-lames-dalles',
        permanent: true,
      },
      {
        source: '/pose-de-lames-pvc-dans-le-couloir',
        destination: '/services/sol-pvc-lames-dalles',
        permanent: true,
      },
      {
        source: '/pose-de-lames-pvc-dans-le-couloir/',
        destination: '/services/sol-pvc-lames-dalles',
        permanent: true,
      },

      // ── Anciennes URLs WordPress (cbsols.fr) → nouvelles URLs ──
      // Listing projets
      { source: '/projets', destination: '/realisations', permanent: true },

      // Projets individuels (ancien permalien WP → /realisations/[slug])
      { source: '/pose-moquette-bistro-de-la-grande-terrasse', destination: '/realisations/pose-moquette-bistro-grande-terrasse', permanent: true },
      { source: '/pose-sols-cabinet-dassurances', destination: '/realisations/pose-sols-cabinet-axa-la-rochelle', permanent: true },
      { source: '/tapis-sur-mesure-hotel', destination: '/realisations/tapis-sur-mesure-hotel-la-baronnie', permanent: true },
      { source: '/pose-moquettes-et-sols-maison', destination: '/realisations/pose-moquettes-sols-maison-de-maitre', permanent: true },
      { source: '/moquettes-et-sols-golf', destination: '/realisations/moquettes-sols-golf-de-la-pree', permanent: true },
      { source: '/pose-des-moquettes-dun-restaurant-etoile', destination: '/realisations/moquettes-restaurant-etoile-la-rochelle', permanent: true },

      // Autres URLs WordPress remontées par Search Console
      { source: '/sol-de-bureau-cabinet-comptable', destination: '/realisations/sols-bureau-cabinet-comptable-groupe-excel', permanent: true },
      { source: '/lames-pvc-de-differents-coloris', destination: '/realisations/lames-pvc-multicolore-salon-cuisine', permanent: true },
      { source: '/salle-de-bain-en-lames-plombantes', destination: '/realisations/lames-plombantes-bureaux-multicolore', permanent: true },
      { source: '/pose-dune-moquette', destination: '/services/pose-moquette', permanent: true },
      { source: '/remontee-en-plinthes', destination: '/services/pose-moquette', permanent: true },
    ];
  },
};

export default nextConfig;
