import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
