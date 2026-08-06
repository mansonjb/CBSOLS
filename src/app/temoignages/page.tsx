import type { Metadata } from 'next'
import { Briefcase, Hotel, Factory, Phone, Star, Users } from 'lucide-react'
import { VideoTestimonialCompact } from '@/components/VideoTestimonialCompact'
import { RelatedCards, type RelatedCardItem } from '@/components/RelatedCards'
import { getVimeoThumbnail } from '@/lib/vimeo'

export const metadata: Metadata = {
  title: 'Témoignages clients vidéo',
  description:
    "Découvrez les retours de nos clients en vidéo : assurance, hôtellerie, industrie. Chaque projet est une histoire de confiance.",
  alternates: { canonical: 'https://cbsols.fr/temoignages' },
}

interface VideoData {
  vimeoId: string
  name: string
  role: string
  company: string
  quote: string
  projectInfo: string
}

const videos: VideoData[] = [
  {
    vimeoId: '1201719634',
    name: 'David Labarrère',
    role: 'Agent général',
    company: 'AXA Moiroud-Labarrère',
    quote:
      "Notre cabinet accueille des clients tous les jours, le sol fait partie de l'image qu'on renvoie. CB Sols a su nous proposer un revêtement qui tient et qui valorise les locaux.",
    projectInfo: "Cabinet d'assurance, La Rochelle",
  },
  {
    vimeoId: '1201720165',
    name: 'Cyril Moiroud',
    role: 'Agent général',
    company: 'AXA Moiroud-Labarrère',
    quote:
      "Un seul interlocuteur du devis à la réception, un planning tenu, une finition soignée. C'est exactement ce qu'on attend d'un artisan.",
    projectInfo: "Cabinet d'assurance, La Rochelle",
  },
  {
    vimeoId: '1201720983',
    name: 'Cédrick Poucineau',
    role: 'Directeur des Opérations',
    company: 'Groupe Cosy Hotels',
    quote:
      "En hôtellerie, le sol participe directement au confort ressenti par nos clients. Le travail de CB Sols nous a permis de transformer nos chambres durablement.",
    projectInfo: 'Chambres et espaces communs',
  },
  {
    vimeoId: '1201721934',
    name: 'Jérôme Buffereau',
    role: "Directeur d'agence",
    company: 'Paprec Sud-Ouest, La Rochelle',
    quote:
      "Sur un site industriel, on cherche un sol qui résiste, qui se nettoie, et qui se pose vite. CB Sols a coché les trois cases sans débordement de planning.",
    projectInfo: 'Bureaux et zones de circulation',
  },
  {
    vimeoId: '1216035317',
    name: 'Gaëlle Martel',
    role: 'Directrice',
    company: 'Golf de la Prée, La Rochelle',
    quote:
      "On voulait de la moquette pour créer différents espaces avec une vraie uniformité, malgré un passage intensif de golfeurs en chaussures à crampons. L'équipe de Valentin a trouvé le bon produit, tenu les délais et laissé un chantier impeccable. Aujourd'hui le club-house est sobre, classe, et nous ouvre des événements qu'on ne pouvait pas accueillir avant.",
    projectInfo: 'Club-house, restaurant et salles de séminaire',
  },
]

const videoSchema = (v: VideoData) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: `Témoignage ${v.name}, ${v.company}`,
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
  name: 'Témoignages clients vidéo CB Sols',
  description:
    'Témoignages vidéo de clients professionnels de CB Sols : assurance, hôtellerie, industrie.',
  url: 'https://cbsols.fr/temoignages',
  hasPart: videos.map((v) => videoSchema(v)),
}

const related: RelatedCardItem[] = [
  {
    href: '/realisations',
    title: 'Toutes nos réalisations',
    teaser:
      'Photos et descriptifs de nos chantiers : bureaux, hôtels, restaurants, particuliers.',
    icon: Briefcase,
  },
  {
    href: '/secteurs/hotellerie',
    title: 'Solutions pour hôteliers',
    teaser:
      "Sols et moquettes pensés pour le trafic, l'acoustique et le standing hôtelier.",
    icon: Hotel,
  },
  {
    href: '/secteurs/bureaux-entreprises',
    title: 'Bureaux et tertiaire',
    teaser:
      "Revêtements adaptés aux cabinets, agences et espaces de travail recevant du public.",
    icon: Users,
  },
  {
    href: '/architectes',
    title: 'Pour architectes',
    teaser:
      "Notre accompagnement dédié aux prescripteurs : échantillons, fiches techniques, coordination chantier.",
    icon: Factory,
  },
  {
    href: '/contact',
    title: 'Demander un devis',
    teaser: 'Décrivez votre projet, nous revenons vers vous sous 24 h.',
    icon: Phone,
  },
]

export default async function TemoignagesPage() {
  // Fetch des vignettes Vimeo officielles (via oEmbed), parallèle.
  // Bypass vumbnail.com qui cache trop longtemps.
  const thumbnails = await Promise.all(
    videos.map((v) => getVimeoThumbnail(v.vimeoId)),
  )
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <div style={{ paddingTop: '72px' }}>
        {/* Hero */}
        <section
          style={{
            padding: '5rem 2rem 3.5rem',
            borderBottom: '1px solid var(--border)',
            backgroundColor: 'var(--bg)',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--terra)',
                fontWeight: 700,
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <Star size={12} fill="var(--terra)" stroke="var(--terra)" />
              Témoignages clients vidéo
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                fontWeight: 800,
                color: 'var(--dark)',
                margin: '0 0 1.75rem',
                letterSpacing: '-0.035em',
                lineHeight: 1.02,
              }}
            >
              Ils nous ont fait confiance,{' '}
              <em
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: 'var(--terra)',
                }}
              >
                et le racontent.
              </em>
            </h1>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--cream-muted)',
                lineHeight: 1.75,
                margin: 0,
                maxWidth: '720px',
              }}
            >
              Plus que dix avis textuels, un seul témoignage vidéo. Voici quatre
              dirigeants qui ont choisi CB Sols pour leurs bureaux, leurs hôtels
              ou leurs sites industriels. Ils racontent ce qu'ils ont vécu : le
              devis, la pose, le résultat, le service. Sans script, sans
              retouche, sans concession.
            </p>
          </div>
        </section>

        {/* Stack vidéos : chaque témoignage en layout horizontal (vidéo gauche, texte droite) */}
        <section
          style={{
            padding: '5rem 2rem 6rem',
            backgroundColor: 'var(--bg-alt)',
          }}
        >
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {videos.map((v, i) => (
              <article
                key={v.vimeoId}
                className="temoignage-row"
                style={{
                  display: 'flex',
                  gap: '2.5rem',
                  alignItems: 'center',
                  paddingBottom: '4rem',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify(videoSchema(v)),
                  }}
                />
                <div style={{ flexShrink: 0 }}>
                  <VideoTestimonialCompact
                    vimeoId={v.vimeoId}
                    name={v.name}
                    thumbnailUrl={thumbnails[i] ?? undefined}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      fontSize: '1.05rem',
                      color: 'var(--dark)',
                      lineHeight: 1.55,
                      margin: '0 0 1.5rem',
                      borderLeft: '2px solid var(--terra)',
                      paddingLeft: '1.1rem',
                    }}
                  >
                    « {v.quote} »
                  </p>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 700,
                      color: 'var(--dark)',
                      fontSize: '0.95rem',
                    }}
                  >
                    {v.name}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: '0.15rem' }}>
                    {v.role}, {v.company}
                  </div>
                  <div
                    style={{
                      marginTop: '0.55rem',
                      fontSize: '0.78rem',
                      color: 'var(--terra)',
                      fontWeight: 600,
                    }}
                  >
                    {v.projectInfo}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <RelatedCards
          items={related}
          sectionTitle="Voir aussi"
          sectionSubtitle="Explorez nos réalisations, nos solutions par secteur et notre accompagnement des architectes."
          forceColumns={related.length}
        />
      </div>

      <style>{`
        @media (max-width: 720px) {
          .temoignage-row { flex-direction: column !important; gap: 1.75rem !important; align-items: stretch !important; }
        }
      `}</style>
    </>
  )
}
