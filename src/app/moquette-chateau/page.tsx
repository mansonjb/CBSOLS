import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Moquette Château et Manoir | Tapis Sur Mesure Patrimoine',
  description: "Pose de moquette et tapis sur mesure en château, manoir et hôtel particulier. Respect du patrimoine et validation ABF. CB Sols accompagne propriétaires et hôteliers de prestige depuis 27 ans.",
  alternates: { canonical: 'https://cbsols.fr/moquette-chateau' },
  openGraph: {
    title: 'Moquette Château et Manoir | Tapis Sur Mesure Patrimoine',
    description: "Confection et pose de tapis d'apparat sur mesure en château et manoir. Validation ABF, motifs Aubusson et Savonnerie reproduits, escaliers monumentaux.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/moquette-chateau.jpg', width: 1200, height: 630 }],
  },
}

const cas = [
  { title: "Salons d'apparat et galeries", desc: "Tapis sur mesure aux dimensions exactes de la pièce, motifs validés avec le décorateur ou le conservateur, pose libre sur parquet historique. Reconstitution possible de motifs anciens disparus, à partir de relevés ou photographies d'époque." },
  { title: 'Escaliers monumentaux', desc: "Tapis d'escalier d'apparat sur volée droite ou tournante, calage marche par marche sur escaliers en pierre de Charente ou en chêne, profilés laiton ou bronze patiné, fixation discrète préservant le bois ou la pierre." },
  { title: "Suites d'hôtes et chambres", desc: "Vous tenez un hôtel-château. On pose une moquette laine traitée anti-tache, conforme aux exigences feu des ERP. La pièce garde son caractère, le sol encaisse les services soutenus. Quinze ans devant vous." },
  { title: 'Couloirs et coursives', desc: "On tisse en grande longueur, sans joint visible. Le passage soutenu ne marque pas le velours. La finition se cale discrètement le long des plinthes anciennes, sans toucher au bois." },
]

const produits = [
  { name: 'Tapis sur mesure Axminster ou Wilton', desc: "Tissage haut de gamme historiquement britannique, idéal pour les pièces d'apparat. L'Axminster autorise les motifs complexes au mètre, le Wilton offre un velours bouclé dense de très longue durée. Dimensions jusqu'à 8 mètres sur 12 mètres d'un seul tenant." },
  { name: 'Moquette laine pour hôtel-château', desc: "Laine vierge tuftée, traitement anti-tache et tenue au feu conforme aux ERP. Nous travaillons avec EGE, Brintons ou Ulster Carpets. Coloris et motifs calés sur la charte du lieu, pose pied à pied possible sur grandes surfaces." },
  { name: 'Confection de tapis Aubusson et Savonnerie', desc: "Reproduction de motifs anciens sur mesure, en lien avec les ateliers de tissage spécialisés. Hereke turc également disponible pour les commandes longues. Validation des cartons avec le conservateur ou l'architecte d'intérieur avant lancement." },
]

const process = [
  { step: 'Visite sur site', desc: "Relevé précis sur calque, photos, mesure d'humidité du parquet ou du support pierre, diagnostic état des planchers. Échange avec le propriétaire, l'architecte du patrimoine ou le décorateur." },
  { step: 'Validation ABF', desc: "Si le bien est classé ou inscrit Monuments Historiques, constitution du dossier pour l'Architecte des Bâtiments de France. Choix des matériaux compatibles esthétiquement et techniquement, validation préalable à toute commande." },
  { step: 'Sélection matière', desc: "Choix en showroom à Villedoux ou présentation d'échantillons sur place. Présentation des motifs reproduits, validation des coloris avec le décorateur ou le conservateur." },
  { step: 'Confection atelier', desc: "Découpe atelier ou commande au tisseur partenaire pour les tapis sur mesure. Délais 6 à 16 semaines selon la complexité du motif et le tissage choisi. Suivi de fabrication transmis au client." },
  { step: 'Pose et finitions', desc: "Pose libre sur parquet ancien avec sous-couche feutre réversible, pose collée réversible si nécessaire, profilés sur escaliers. Aucun perçage dans le parquet historique sans accord explicite. Restitution propre." },
]

const faq = [
  { q: "Comment se passe une intervention en bâtiment classé ABF ?", a: "Si le bien est classé ou inscrit Monuments Historiques, toute intervention visible doit recevoir l'accord préalable de l'Architecte des Bâtiments de France. Nous constituons le dossier avec le propriétaire ou l'architecte du patrimoine : description des matériaux, échantillons, photographies, motifs et coloris proposés. Le délai d'instruction est d'un à trois mois selon la DRAC concernée. Une fois l'accord obtenu, nous lançons la confection. Pour les biens uniquement inscrits, la procédure est plus souple mais nous appliquons le même niveau de rigueur." },
  { q: "Pouvez-vous reproduire un motif Aubusson ou Savonnerie ancien ?", a: "Oui, en lien avec des ateliers de tissage partenaires. À partir d'un tapis existant à restaurer, d'une photographie d'archive ou d'un dessin, nous faisons réaliser un carton de tissage qui est validé avec le conservateur, le décorateur ou le propriétaire avant lancement. Délais de 12 à 24 semaines pour les motifs complexes. Pour les surfaces très importantes, l'Hereke turc offre une alternative de très belle qualité avec des délais souvent plus courts." },
  { q: "Quelle moquette choisir pour un hôtel-château Relais & Châteaux ?", a: "Pour un hôtel de prestige patrimonial, on combine généralement deux logiques. Dans les espaces d'apparat ouverts aux clients (salons, bibliothèque, fumoir), tapis sur mesure ou moquette laine grand classique, esthétique avant tout. Dans les suites et couloirs, moquette contract en laine vierge tuftée, classement feu Cfl-s1 minimum, traitement anti-tache compatible service hôtelier, durée de vie 10 à 15 ans avec entretien régulier. Les maisons de référence pour ce type de projet sont EGE, Brintons, Ulster Carpets et Tisca Tiara." },
  { q: "Comment poser une moquette sans abîmer un parquet ancien ?", a: "Nous évitons systématiquement le clouage et le perçage sur un parquet historique en chêne massif, point de Hongrie ou Versailles. Trois techniques selon le cas. La pose libre sur sous-couche feutre épaisse, totalement réversible, idéale pour les tapis d'apparat. La pose collée réversible avec adhésifs spécifiques qui se déposent sans laisser de trace, utilisée pour les moquettes contract en suite. La pose sur barres à griffes positionnées sur baguettes amovibles le long des plinthes, pour préserver le parquet visible au centre. Diagnostic préalable systématique : taux d'humidité du bois, planéité, traitement insectes si nécessaire." },
  { q: "Restaurez-vous des moquettes ou tapis de famille ?", a: "Oui. Refixation des ourlets, retissage local sur petites zones usées, nettoyage à sec profond, dépoussiérage mécanique sur dossiers anciens. Pour les pièces de très grande valeur, nous orientons vers des restaurateurs spécialisés textiles anciens avec lesquels nous travaillons régulièrement. Diagnostic préalable gratuit en showroom ou sur site." },
  { q: "Travaillez-vous avec les architectes du patrimoine ?", a: "Régulièrement. Architectes du patrimoine, architectes d'intérieur spécialisés, décorateurs de demeures de prestige, conservateurs. Nous fournissons les éléments techniques nécessaires à leurs dossiers : fiches matériaux, échantillons annotés, descriptifs de pose, devis détaillés par lot. Notre rôle est d'exécuter avec précision la vision du prescripteur, en apportant l'expertise technique du métier." },
  { q: "Quels délais pour un tapis sur mesure d'apparat ?", a: "Pour un tapis Axminster ou Wilton tissé sur mesure aux dimensions exactes d'une pièce, comptez 8 à 16 semaines de fabrication selon le tisseur et la complexité du motif. Pour une reproduction Aubusson ou Savonnerie, 12 à 24 semaines. Pour une moquette contract en pose pied à pied sur grande surface, 3 à 6 semaines de délai matière puis pose en 1 à 3 jours selon la surface. Nous planifions en lien avec les autres corps d'état de chantier." },
]

const specs = [
  { title: 'Dossier ABF', desc: "Sur un bien classé ou inscrit, tout élément visible passe devant l'Architecte des Bâtiments de France. On monte le dossier avec vous. Délai d'instruction d'un à trois mois selon la DRAC, et on lance la confection une fois l'accord obtenu." },
  { title: 'Sous-couches sans clouage', desc: "Sur plancher historique en chêne massif, parquet point de Hongrie ou parquet Versailles, nous évitons tout perçage. Système de pose collée réversible ou pose libre sur sous-couche feutre, pour préserver intégralement le bois ancien." },
  { title: "Tapis sur mesure d'apparat", desc: "Reconstitution de motifs anciens type Aubusson ou Savonnerie, tissage Axminster ou Wilton, dimensions adaptées à la pièce jusqu'à 8 mètres sur 12 mètres d'un seul tenant. Cartons validés avec le décorateur ou le conservateur avant lancement." },
  { title: "Tapis d'escalier monumental", desc: "Escaliers en pierre de Charente, escaliers d'honneur en chêne, calage marche par marche sur volée droite ou tournante, profilés laiton ou bronze patiné, fixation discrète respectueuse du support." },
  { title: 'Restauration de pièces anciennes', desc: "Refixation, retissage local sur petites zones usées, nettoyage à sec profond, dépoussiérage mécanique sur dossiers fragiles. Orientation vers restaurateurs textiles spécialisés pour les pièces de musée." },
  { title: 'Diagnostic plancher préalable', desc: "Avant toute pose, vérification de la planéité, mesure du taux d'humidité du bois, essentielle en demeure ancienne. Traitement préventif insectes si nécessaire. Pas de pose sur support douteux, on prend le temps de bien préparer." },
]

const marques = [
  { name: 'EGE', detail: "Le tisseur danois pour les hôtels et demeures de caractère. Esthétique classique qui reste compatible avec les exigences ERP." },
  { name: 'Brintons', detail: "L'Axminster britannique historique, motifs classiques ou héraldiques. Une référence mondiale en hôtellerie de luxe, et la matière vieillit noblement." },
  { name: 'Ulster Carpets', detail: "Tissages irlandais haut de gamme pour grandes demeures. Plus de vingt ans de tenue en usage normal." },
  { name: 'Tisca Tiara', detail: "Manufacture suisse, gammes contract et résidentielles. Les finitions douces s'accordent avec les boiseries anciennes sans contraste agressif." },
  { name: 'Axminster Carpets', detail: "Tissage à motifs au mètre, idéal pour reconstitutions de pièces d'apparat. Tradition anglaise depuis 1755." },
  { name: 'Wilton Carpets', detail: "Velours bouclé dense, durée de vie 15 à 25 ans, adaptable en moquette contract ou en tapis sur mesure." },
  { name: 'Ateliers Aubusson et Savonnerie', detail: "Tisseurs partenaires pour la reproduction de motifs historiques sur mesure, validation cartonniers avec le conservateur." },
  { name: 'Hereke turc', detail: "Alternative qualitative pour grandes surfaces, délais souvent plus courts, motifs orientaux ou occidentaux sur commande." },
]

const lieux = [
  { nom: 'Châteaux de la Loire', detail: "Touraine, Indre-et-Loire, Maine-et-Loire. Demeures classées et hôtels patrimoniaux du Val de Loire." },
  { nom: 'Châteaux du Cognaçais et Saintongeais', detail: "Charente et Charente-Maritime, à proximité directe de notre atelier. Interventions rapides, déplacement gratuit." },
  { nom: 'Hôtels particuliers de La Rochelle', detail: "Centre historique, demeures du 17e et 18e siècle, refits intérieurs sous contrainte patrimoniale." },
  { nom: 'Demeures du Bordelais', detail: "Vignobles du Médoc, Saint-Émilion, Pessac-Léognan. Châteaux viticoles et propriétés familiales." },
  { nom: 'Châteaux du Périgord et du Quercy', detail: "Dordogne, Lot, Tarn-et-Garonne. Manoirs en pierre blonde et demeures forteresses." },
  { nom: 'Manoirs normands', detail: "Calvados, Eure, Orne. Manoirs à pans de bois et demeures de la côte fleurie." },
  { nom: 'Hôtels-châteaux Relais & Châteaux', detail: "France entière. Coordination avec direction et équipe maintenance pour les interventions hors saison." },
  { nom: 'Châteaux viticoles', detail: "Champagne, Bourgogne, Provence, Languedoc. Domaines de prestige ouverts à la réception privée." },
  { nom: 'Manoirs bretons', detail: "Côte sud, golfe du Morbihan, Cornouaille. Demeures granitiques à fort caractère architectural." },
  { nom: 'Hôtels particuliers parisiens', detail: "Refits complets en lien avec architectes d'intérieur, intervention sur fenêtre courte." },
  { nom: 'Demeures classées Île-de-France', detail: "Yvelines, Essonne, Seine-et-Marne. Châteaux et manoirs proches de la capitale." },
  { nom: 'Hôtels 5 étoiles patrimoniaux', detail: "Établissements historiques de centre-ville, refits suites et espaces communs sous contrainte ERP." },
]

export default function MoquetteChateauPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/moquette-chateau#service',
        name: 'Moquette et tapis sur mesure pour château, manoir et hôtel particulier',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'Country', name: 'France' },
          { '@type': 'Place', name: 'Val de Loire' },
          { '@type': 'Place', name: 'Charente-Maritime' },
          { '@type': 'Place', name: 'Bordelais' },
          { '@type': 'Place', name: 'Périgord' },
          { '@type': 'Place', name: 'Île-de-France' },
        ],
        serviceType: "Pose de moquette et confection de tapis sur mesure pour patrimoine, validation ABF, restauration",
        description: "Confection et pose de tapis sur mesure et moquette contract pour châteaux, manoirs, hôtels particuliers et hôtels-châteaux. Reproduction de motifs Aubusson et Savonnerie, validation ABF, respect du parquet historique.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Moquette château', item: 'https://cbsols.fr/moquette-chateau' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Moquette château</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Moquette château,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>respect du patrimoine.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Salons d&apos;apparat, escaliers monumentaux, suites d&apos;hôtel-château : tapis sur mesure et moquette contract pour le patrimoine privé et hôtelier français. Validation ABF, reproduction de motifs Aubusson et Savonnerie, pose réversible sur parquet historique. {company.experience} d&apos;expérience artisan.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=moquette-chateau" variant="primary" size="md">Demander un devis</Button>
                <Button href="/showroom" variant="outline" size="md">Voir le showroom</Button>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Le détail qui change tout</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Sur un parquet point de Hongrie qui a traversé trois siècles, le geste juste consiste d&apos;abord à ne rien abîmer. C&apos;est le respect du lieu qui guide tout le reste. »
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pour quelle pièce du château ?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Quatre lieux, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>quatre approches.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {cas.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline 1 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un projet de restauration ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Chaque demeure demande sa réponse.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Château, manoir, hôtel particulier : Valentin Prévoteau se déplace pour la visite préalable et l&apos;expertise du support.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=moquette-chateau" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Spécificités techniques */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Le métier de la pose en patrimoine</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Six exigences qui structurent <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>notre approche.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {specs.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{i + 1}. {s.title}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produits */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Tapis et moquettes que nous posons en patrimoine</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Trois familles, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>un seul niveau d&apos;exigence.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {produits.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '1.5rem 0', borderBottom: i < produits.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--terra)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#fff' }}>{i + 1}</span>
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.4rem' }}>{p.name}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2.5rem', fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px' }}>
            Nous travaillons avec les manufactures européennes spécialisées dans le patrimoine : EGE pour les hôtels-châteaux, Brintons et Ulster Carpets pour les Axminster sur mesure, Tisca Tiara pour les finitions douces. Pour les motifs anciens, nous passons par des ateliers Aubusson ou Savonnerie. Et l'Hereke turc reste une bonne alternative sur les très grandes surfaces, avec des délais souvent plus courts.
          </p>
        </div>
      </section>

      {/* Citation milieu + CTA */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              « Une couture impeccable, un calepinage juste, c&apos;est ce qui signe une finition haut de gamme. Dans une demeure ancienne, c&apos;est aussi ce qui se transmet. »
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?from=moquette-chateau-inline" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Visite préalable systématique, déplacement gratuit en Charente-Maritime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marques */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Manufactures partenaires</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Huit références, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>du contract au sur mesure.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Tisseurs européens spécialisés contract et patrimoine, ateliers de tissage français pour les reproductions historiques, sous-traitance Hereke pour les grandes surfaces. Le bon matériau au bon endroit.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {marques.map((m, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra)', marginBottom: '0.5rem' }}>{m.name}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lieux et demeures */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Là où nous intervenons</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Quelques demeures et hôtels <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de prestige.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Nous intervenons sur l&apos;ensemble du patrimoine privé et hôtelier français, en lien étroit avec les architectes du patrimoine, conservateurs et décorateurs d&apos;intérieur. Visite préalable systématique, validation ABF si nécessaire, devis détaillé après expertise.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {lieux.map((l, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{l.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{l.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline 2 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un dossier ABF à instruire ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            On constitue le dossier matières avec vous.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Échantillons, descriptifs, motifs, fiches techniques : tout ce qu&apos;il faut pour défendre le projet auprès de la DRAC.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=moquette-chateau-mid" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche, de la visite à la pose</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>du calque à la finition.</em>
          </h2>
          <div data-flow="steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0' }}>
            {process.map((p, i) => (
              <div key={i} style={{ padding: '1.75rem', borderRight: i < process.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--terra)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#fff' }}>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{p.step}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Questions fréquentes</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Moquette patrimoine, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses détaillées.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faq.map((f, i) => (
              <details key={i} style={{ border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', padding: '1.25rem 1.5rem' }}>
                <summary style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--dark)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <span>{f.q}</span>
                  <span style={{ color: 'var(--terra)', fontSize: '1.2rem', flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.75, margin: '1rem 0 0' }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA après FAQ */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Une question restée sans réponse ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Décrivez votre demeure, on revient sous 48h.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Type de bien, statut patrimonial éventuel, pièces concernées, motifs ou contraintes : ces éléments suffisent pour démarrer un échange utile.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=moquette-chateau-faq" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Voir aussi</div>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '1.5rem' }}>
            CB Sols est également spécialiste de la moquette marine et de l&apos;aviation d&apos;affaires. Trois univers d&apos;exigence partagée, une même précision de finition.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/moquette-jet-prive" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette jet privé →</Link>
            <Link href="/moquette-bateau" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette bateau →</Link>
            <Link href="/moquette-yacht" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette yacht →</Link>
            <Link href="/moquette-catamaran" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette catamaran →</Link>
            <Link href="/moquette-peniche" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette péniche →</Link>
            <Link href="/services/tapis-sur-mesure" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Tapis sur mesure →</Link>
            <Link href="/services/pose-moquette" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Pose de moquette →</Link>
            <Link href="/particuliers" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Particuliers →</Link>
            <Link href="/architectes" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Architectes →</Link>
            <Link href="/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom Villedoux →</Link>
          </div>
        </div>
      </section>

      {/* CTA final dark */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Une demeure à équiper ? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Parlons-en.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite préalable en château, manoir ou hôtel particulier. Dossier ABF si nécessaire, devis détaillé après expertise.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=moquette-chateau" variant="primary" size="md">Demander un devis</Button>
            <Button href="/showroom" variant="outline" size="md">RDV showroom</Button>
          </div>
          <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.6)' }}>
            Ou <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.phone}</a> · <a href={`mailto:${company.email}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.email}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
