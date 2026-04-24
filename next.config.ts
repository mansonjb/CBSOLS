import type { NextConfig } from "next";

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=(), payment=()' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  // Strict-Transport-Security : forcée par Vercel en prod HTTPS, on renforce
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
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
    ];
  },
};

export default nextConfig;
