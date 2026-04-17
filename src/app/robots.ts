import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://cbsols.fr/sitemap.xml',
    host: 'https://cbsols.fr',
  }
}
