import { MetadataRoute } from 'next'
import { cities } from '@/data/cities'
import { services } from '@/data/services'
import { sectors } from '@/data/sectors'
import { solutions } from '@/data/solutions'
import { guides } from '@/data/guides'
import { brands } from '@/data/brands'
import { faqs } from '@/data/faqs'

const BASE_URL = 'https://cbsols.fr'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/secteurs`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/realisations`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/showroom`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/a-propos`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/zones`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/tarifs`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/architectes`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/marques`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/ile-doleron`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const sectorPages: MetadataRoute.Sitemap = sectors.map((sector) => ({
    url: `${BASE_URL}/secteurs/${sector.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  const cityHubPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/revetement-sol-${city.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const geoPages: MetadataRoute.Sitemap = []
  for (const service of services) {
    for (const city of cities) {
      geoPages.push({
        url: `${BASE_URL}/${service.slug}-${city.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    }
  }

  const solutionPages: MetadataRoute.Sitemap = solutions.map((s) => ({
    url: `${BASE_URL}/solutions/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const guidePages: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${BASE_URL}/guide/${g.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  const brandPages: MetadataRoute.Sitemap = brands.map((b) => ({
    url: `${BASE_URL}/marques/${b.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const faqPages: MetadataRoute.Sitemap = faqs.map((f) => ({
    url: `${BASE_URL}/faq/${f.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  return [...staticPages, ...servicePages, ...sectorPages, ...cityHubPages, ...geoPages, ...solutionPages, ...guidePages, ...brandPages, ...faqPages]
}
