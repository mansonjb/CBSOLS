import { MetadataRoute } from 'next'
import { cities } from '@/data/cities'
import { services } from '@/data/services'
import { sectors } from '@/data/sectors'
import { solutions } from '@/data/solutions'
import { guides } from '@/data/guides'
import { brands } from '@/data/brands'
import { faqs } from '@/data/faqs'

const BASE_URL = 'https://cbsols.fr'

/**
 * Sitemap lastModified strategy:
 * - We don't use `new Date()` everywhere because it signals "all pages updated today"
 *   on every deploy, wasting Google's crawl budget.
 * - Instead, each page type has a realistic lastModified that reflects actual update frequency.
 * - Bump these values when you do a meaningful content update on a section.
 */
const LAST = {
  home: new Date('2026-04-20'),
  services: new Date('2026-04-15'),
  sectors: new Date('2026-03-10'),
  cityHubs: new Date('2026-04-20'), // enrichment via zones
  geo: new Date('2026-04-20'), // enriched with zone content + testimonials
  solutions: new Date('2026-03-15'),
  guides: new Date('2026-03-15'),
  brands: new Date('2026-02-01'),
  faqs: new Date('2026-03-15'),
  // Non-programmatic pages
  contact: new Date('2026-04-18'),
  showroom: new Date('2026-04-20'),
  realisations: new Date('2026-04-20'),
  aPropos: new Date('2026-04-10'),
  tarifs: new Date('2026-02-10'),
  architectes: new Date('2026-03-01'),
  marques: new Date('2026-02-01'),
  zones: new Date('2026-04-05'),
  iles: new Date('2026-04-20'),
  mentions: new Date('2025-11-01'),
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: LAST.home, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/services`, lastModified: LAST.services, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/secteurs`, lastModified: LAST.sectors, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/realisations`, lastModified: LAST.realisations, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/showroom`, lastModified: LAST.showroom, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/a-propos`, lastModified: LAST.aPropos, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE_URL}/contact`, lastModified: LAST.contact, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE_URL}/zones`, lastModified: LAST.zones, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: LAST.mentions, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE_URL}/tarifs`, lastModified: LAST.tarifs, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/architectes`, lastModified: LAST.architectes, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/marques`, lastModified: LAST.marques, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/ile-doleron`, lastModified: LAST.iles, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/ile-de-re`, lastModified: LAST.iles, changeFrequency: 'monthly', priority: 0.85 },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: LAST.services,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const sectorPages: MetadataRoute.Sitemap = sectors.map((sector) => ({
    url: `${BASE_URL}/secteurs/${sector.slug}`,
    lastModified: LAST.sectors,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  const cityHubPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/revetement-sol-${city.slug}`,
    lastModified: LAST.cityHubs,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const geoPages: MetadataRoute.Sitemap = []
  for (const service of services) {
    for (const city of cities) {
      geoPages.push({
        url: `${BASE_URL}/${service.slug}-${city.slug}`,
        lastModified: LAST.geo,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    }
  }

  const solutionPages: MetadataRoute.Sitemap = solutions.map((s) => ({
    url: `${BASE_URL}/solutions/${s.slug}`,
    lastModified: LAST.solutions,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const guidePages: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${BASE_URL}/guide/${g.slug}`,
    lastModified: LAST.guides,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  const brandPages: MetadataRoute.Sitemap = brands.map((b) => ({
    url: `${BASE_URL}/marques/${b.slug}`,
    lastModified: LAST.brands,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const faqPages: MetadataRoute.Sitemap = faqs.map((f) => ({
    url: `${BASE_URL}/faq/${f.slug}`,
    lastModified: LAST.faqs,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  return [...staticPages, ...servicePages, ...sectorPages, ...cityHubPages, ...geoPages, ...solutionPages, ...guidePages, ...brandPages, ...faqPages]
}
