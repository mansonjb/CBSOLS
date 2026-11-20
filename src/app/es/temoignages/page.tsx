import type { Metadata } from 'next'
import { Briefcase, Hotel, Factory, Phone, Star, Users } from 'lucide-react'
import { VideoTestimonialCompact } from '@/components/VideoTestimonialCompact'
import { RelatedCards, type RelatedCardItem } from '@/components/RelatedCards'
import { getVimeoThumbnail } from '@/lib/vimeo'

export const metadata: Metadata = {
  title: 'Testimonios de clientes en vídeo',
  description: 'Descubra las opiniones de nuestros clientes en vídeo: seguros, hoteles, industria. Cada proyecto es una historia de confianza.',
  alternates: {
    canonical: 'https://cbsols.fr/es/temoignages',
    languages: { 'fr-FR': 'https://cbsols.fr/temoignages', en: 'https://cbsols.fr/en/temoignages', es: 'https://cbsols.fr/es/temoignages', },
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
    role: 'Agente general',
    company: 'AXA Moiroud-Labarrère',
    quote: 'Nuestra oficina recibe clientes todos los días; el suelo forma parte de la imagen que proyectamos. CB Sols supo proponer un revestimiento que aguanta y realza el local.',
    projectInfo: 'Oficina de seguros, La Rochelle',
  },
  {
    vimeoId: '1201720165',
    name: 'Cyril Moiroud',
    role: 'Agente general',
    company: 'AXA Moiroud-Labarrère',
    quote: 'Un único interlocutor desde el presupuesto hasta la entrega, un plazo respetado, un acabado cuidado. Es exactamente lo que se espera de un artesano.',
    projectInfo: 'Oficina de seguros, La Rochelle',
  },
  {
    vimeoId: '1201720983',
    name: 'Cédrick Poucineau',
    role: 'Director de operaciones',
    company: 'Cosy Hotels Group',
    quote: 'En hostelería, el suelo influye directamente en el confort que perciben nuestros huéspedes. El trabajo que realizó CB Sols nos permitió transformar nuestras habitaciones a largo plazo.',
    projectInfo: 'Habitaciones y zonas comunes',
  },
  {
    vimeoId: '1201721934',
    name: 'Jérôme Buffereau',
    role: 'Director de centro',
    company: 'Paprec Sud-Ouest, La Rochelle',
    quote: 'En un emplazamiento industrial se busca un suelo que aguante, que se limpie con facilidad y que se coloque rápido. CB Sols cumplió los tres requisitos sin ningún retraso en el plazo.',
    projectInfo: 'Oficinas y zonas de circulación',
  },
  {
    vimeoId: '1216035317',
    name: 'Gaëlle Martel',
    role: 'Directora',
    company: 'Golf de la Prée, La Rochelle',
    quote: 'Queríamos moqueta para crear espacios diferenciados con una verdadera coherencia, a pesar del tránsito intensivo de golfistas con zapatos de clavos. El equipo de Valentin encontró el producto adecuado, respetó el plazo y dejó una obra impecable. Hoy el clubhouse es sobrio y elegante, y nos permite acoger eventos que antes no podíamos organizar.',
    projectInfo: 'Clubhouse, restaurante y salas de seminarios',
  },
  {
    vimeoId: '1248720481',
    name: 'Robbie',
    role: 'Propietario',
    company: 'Catamaran, Charente-Maritime',
    quote:
      'Moqueta marina a medida colocada a bordo de su catamarán: camarotes, pasillos y zonas de circulación, entregada en menos de tres días, con respuesta a la consulta en menos de una hora.',
    isDescription: true,
    projectInfo: 'Moqueta marina a medida',
  },
]

const videoSchema = (v: VideoData) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: `Testimonio ${v.name}, ${v.company}`,
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
  name: 'Testimonios de clientes en vídeo de CB Sols',
  description: 'Testimonios en vídeo de clientes profesionales de CB Sols: seguros, hoteles, industria.',
  url: 'https://cbsols.fr/es/temoignages',
  hasPart: videos.map((v) => videoSchema(v)),
}

const related: RelatedCardItem[] = [
  { href: '/es/realisations', title: 'Todos nuestros proyectos', teaser: 'Fotos y descripciones de nuestros proyectos: oficinas, hoteles, restaurantes, viviendas particulares.', icon: Briefcase },
  { href: '/es/secteurs/hotellerie', title: 'Soluciones para hoteleros', teaser: 'Suelos y moqueta pensados para el tránsito, la acústica y el nivel de un hotel.', icon: Hotel },
  { href: '/es/secteurs/bureaux-entreprises', title: 'Oficinas y comercios', teaser: 'Revestimientos adaptados a despachos, agencias y espacios de trabajo abiertos al público.', icon: Users },
  { href: '/es/architectes', title: 'Para arquitectos', teaser: 'Nuestro apoyo específico a la prescripción: muestras, fichas técnicas, coordinación de obra.', icon: Factory },
  { href: '/es/contact', title: 'Solicitar un presupuesto', teaser: 'Describa su proyecto y le respondemos en un plazo de 24 h.', icon: Phone },
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
              Testimonios de clientes en vídeo
            </div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.75rem', letterSpacing: '-0.035em', lineHeight: 1.02 }}>
              Confiaron en nosotros,{' '}
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>y lo cuentan.</em>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--cream-muted)', lineHeight: 1.75, margin: 0, maxWidth: '720px' }}>
              Más de diez reseñas escritas, un testimonio en vídeo. Estos son los directores y propietarios que eligieron CB Sols, para sus oficinas, sus hoteles, sus emplazamientos industriales o su barco. Cuentan lo que vivieron: el presupuesto, la colocación, el resultado, el servicio. Sin guion, sin retoques, sin concesiones.
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
          sectionTitle="Ver también"
          sectionSubtitle="Explore nuestros proyectos, nuestras soluciones por sector y nuestro apoyo a los arquitectos."
          forceColumns={related.length}
        />
      </div>

      <style>{`@media (max-width: 720px) { .temoignage-row { flex-direction: column !important; gap: 1.75rem !important; align-items: stretch !important; } }`}</style>
    </>
  )
}
