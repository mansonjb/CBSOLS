import type { Metadata } from 'next'
import { Briefcase, Hotel, Factory, Phone, Star, Users } from 'lucide-react'
import { VideoTestimonialCompact } from '@/components/VideoTestimonialCompact'
import { RelatedCards, type RelatedCardItem } from '@/components/RelatedCards'
import { getVimeoThumbnail } from '@/lib/vimeo'

export const metadata: Metadata = {
  title: 'Video client testimonials',
  description: 'Discover our clients’ feedback on video: insurance, hotels, industry. Every project is a story of trust.',
  alternates: {
    canonical: 'https://cbsols.fr/en/temoignages',
    languages: { 'fr-FR': 'https://cbsols.fr/temoignages', en: 'https://cbsols.fr/en/temoignages' },
  },
}

interface VideoData {
  vimeoId: string
  name: string
  role: string
  company: string
  /** Client quote (verbatim) OR, if isDescription, a factual project descriptor. */
  quote: string
  /** true = `quote` is a project descriptor, not reported speech (no quotation marks, no italics). */
  isDescription?: boolean
  projectInfo: string
}

const videos: VideoData[] = [
  {
    vimeoId: '1201719634',
    name: 'David Labarrère',
    role: 'General agent',
    company: 'AXA Moiroud-Labarrère',
    quote: 'Our office welcomes clients every day; the floor is part of the image we project. CB Sols was able to propose a covering that holds up and shows the premises off.',
    projectInfo: 'Insurance office, La Rochelle',
  },
  {
    vimeoId: '1201720165',
    name: 'Cyril Moiroud',
    role: 'General agent',
    company: 'AXA Moiroud-Labarrère',
    quote: 'A single point of contact from quote to handover, a schedule kept, a careful finish. That is exactly what you expect from a craftsman.',
    projectInfo: 'Insurance office, La Rochelle',
  },
  {
    vimeoId: '1201720983',
    name: 'Cédrick Poucineau',
    role: 'Operations Director',
    company: 'Cosy Hotels Group',
    quote: 'In hospitality, the floor plays a direct part in the comfort our guests feel. The work CB Sols did let us transform our bedrooms for the long term.',
    projectInfo: 'Bedrooms and common areas',
  },
  {
    vimeoId: '1201721934',
    name: 'Jérôme Buffereau',
    role: 'Branch manager',
    company: 'Paprec Sud-Ouest, La Rochelle',
    quote: 'On an industrial site, you want a floor that holds up, cleans easily and lays fast. CB Sols ticked all three boxes with no overrun on the schedule.',
    projectInfo: 'Offices and circulation areas',
  },
  {
    vimeoId: '1216035317',
    name: 'Gaëlle Martel',
    role: 'Director',
    company: 'Golf de la Prée, La Rochelle',
    quote: 'We wanted carpet to create different spaces with real consistency, despite intensive traffic from golfers in spiked shoes. Valentin’s team found the right product, kept to the schedule and left an impeccable site. Today the clubhouse is understated and classy, and it opens up events we could not host before.',
    projectInfo: 'Clubhouse, restaurant and seminar rooms',
  },
  {
    vimeoId: '1248720481',
    name: 'Robbie',
    role: 'Owner',
    company: 'Catamaran, Charente-Maritime',
    quote:
      'Bespoke marine carpet laid aboard his catamaran: cabins, companionways and circulation, delivered in under three days, with a reply to the enquiry in under an hour.',
    isDescription: true,
    projectInfo: 'Bespoke marine carpet',
  },
]

const videoSchema = (v: VideoData) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: `Testimonial ${v.name}, ${v.company}`,
  description: v.quote,
  thumbnailUrl: `https://vumbnail.com/${v.vimeoId}.jpg`,
  uploadDate: '2026-06-15',
  contentUrl: `https://vimeo.com/${v.vimeoId}`,
  embedUrl: `https://player.vimeo.com/video/${v.vimeoId}`,
  publisher: { '@id': 'https://cbsols.fr/#organization' },
})

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'CB Sols video client testimonials',
  description: 'Video testimonials from CB Sols professional clients: insurance, hotels, industry.',
  url: 'https://cbsols.fr/en/temoignages',
  hasPart: videos.map((v) => videoSchema(v)),
}

const related: RelatedCardItem[] = [
  { href: '/en/realisations', title: 'All our projects', teaser: 'Photos and descriptions of our projects: offices, hotels, restaurants, private homes.', icon: Briefcase },
  { href: '/en/secteurs/hotellerie', title: 'Solutions for hoteliers', teaser: 'Floors and carpet designed for traffic, acoustics and hotel standing.', icon: Hotel },
  { href: '/en/secteurs/bureaux-entreprises', title: 'Offices and commercial', teaser: 'Coverings suited to practices, agencies and public-facing workspaces.', icon: Users },
  { href: '/en/architectes', title: 'For architects', teaser: 'Our dedicated specifier support: samples, technical sheets, site coordination.', icon: Factory },
  { href: '/en/contact', title: 'Request a quote', teaser: 'Describe your project and we get back to you within 24h.', icon: Phone },
]

export default async function TemoignagesPageEn() {
  const thumbnails = await Promise.all(videos.map((v) => getVimeoThumbnail(v.vimeoId)))
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      <div style={{ paddingTop: '72px' }}>
        <section style={{ padding: '5rem 2rem 3.5rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--terra)', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Star size={12} fill="var(--terra)" stroke="var(--terra)" />
              Video client testimonials
            </div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.75rem', letterSpacing: '-0.035em', lineHeight: 1.02 }}>
              They trusted us,{' '}
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>and they tell the story.</em>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--cream-muted)', lineHeight: 1.75, margin: 0, maxWidth: '720px' }}>
              More than ten written reviews, one video testimonial. Here are the directors and owners who chose CB Sols, for their offices, their hotels, their industrial sites or their boat. They tell what they experienced: the quote, the laying, the result, the service. No script, no retouching, no compromise.
            </p>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem 6rem', backgroundColor: 'var(--bg-alt)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {videos.map((v, i) => (
              <article key={v.vimeoId} className="temoignage-row" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', paddingBottom: '4rem', borderBottom: '1px solid var(--border)' }}>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema(v)) }} />
                <div style={{ flexShrink: 0 }}>
                  <VideoTestimonialCompact vimeoId={v.vimeoId} name={v.name} thumbnailUrl={thumbnails[i] ?? undefined} />
                </div>
                <div>
                  <p style={{ fontFamily: v.isDescription ? 'var(--font-sans)' : 'var(--font-serif)', fontStyle: v.isDescription ? 'normal' : 'italic', fontSize: v.isDescription ? '0.95rem' : '1.05rem', color: v.isDescription ? 'var(--cream-muted)' : 'var(--dark)', lineHeight: 1.6, margin: '0 0 1.5rem', borderLeft: '2px solid var(--terra)', paddingLeft: '1.1rem' }}>
                    {v.isDescription ? v.quote : <>&ldquo;{v.quote}&rdquo;</>}
                  </p>
                  <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--dark)', fontSize: '0.95rem' }}>{v.name}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: '0.15rem' }}>{v.role}, {v.company}</div>
                  <div style={{ marginTop: '0.55rem', fontSize: '0.78rem', color: 'var(--terra)', fontWeight: 600 }}>{v.projectInfo}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <RelatedCards
          items={related}
          sectionTitle="See also"
          sectionSubtitle="Explore our projects, our solutions by sector and our support for architects."
          forceColumns={related.length}
        />
      </div>

      <style>{`@media (max-width: 720px) { .temoignage-row { flex-direction: column !important; gap: 1.75rem !important; align-items: stretch !important; } }`}</style>
    </>
  )
}
