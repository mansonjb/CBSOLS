import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Sols Marine & Moquette Bateau | La Rochelle — CB Sols',
  description: "Spécialiste revêtement de sol marine en Charente-Maritime : moquette catamaran, yacht, péniche. Normes IMO FTP, MED, Bfl-s1. Confection atelier, pose à quai. Devis.",
  alternates: { canonical: 'https://cbsols.fr/sols-marine' },
  openGraph: {
    title: 'Sols Marine & Moquette Bateau | La Rochelle',
    description: "Revêtements de sol marine sur mesure : catamaran, yacht, péniche. Normes feu IMO, humidité saline, colles polyuréthane marine.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/sols-marine.jpg', width: 1200, height: 630 }],
  },
}

const cas = [
  { title: 'Catamaran de voile ou moteur', desc: "Deux coques, salon central exposé soleil et sel. Moquette polypropylène 100% non absorbante, calepinage adapté aux courbes du carré et aux bavettes de poutre centrale. Voir notre page dédiée catamaran." },
  { title: 'Yacht à moteur ou voilier luxe', desc: "Salons larges, cabines propriétaires, finitions premium. Combinaison moquette laine traitée anti-feu + tapis sur mesure, intégration aux boiseries et cuirs existants. Tolérance aux vibrations moteur." },
  { title: 'Péniche habitée ou commerciale', desc: "Surfaces planes type appartement, humidité fluviale forte mais pas de sel. Pour les péniches restaurant et événementiel, classement feu ERP fluvial à respecter (Bfl-s1 minimum)." },
  { title: 'Refit complet d’unité de plaisance', desc: "Dépose ancien revêtement (souvent collé à l’acrylique standard, désastre garanti), traitement du support, pose neuve avec colle polyuréthane marine, soudure à chaud des joints." },
]

const produits = [
  { name: 'Moquette polypropylène marine 100%', desc: "Fibre qui n’absorbe pas l’eau, séchage rapide, insensible au sel. Grammage 800 à 1400 g/m². Classement feu Bfl-s1 minimum, certification IMO FTP Code partie 5 sur demande pour les unités commerciales." },
  { name: 'Laines vierges traitées anti-feu', desc: "Pour les yachts haut de gamme où l’esthétique prime. Traitement ignifuge intégré à la fibre, classement M1, finition douce et chaleureuse. Sensibilité à l’humidité prolongée : à réserver aux salons et cabines bien ventilés." },
  { name: 'Sols PVC marine acoustique', desc: "Pour les zones de circulation, cuisines, salles de bain de bord. Sous-couche mousse fermée (jamais de feutre), soudure à chaud des joints, étanchéité totale. Compatible MED (Marine Equipment Directive)." },
]

const process = [
  { step: 'Visite à quai', desc: "Relevé sur calque, photos, mesure d’humidité du support, identification des points durs (mainfold, courbes, passages techniques). Échange avec le propriétaire ou le capitaine." },
  { step: 'Sélection matière', desc: "Choix en showroom à Villedoux ou via échantillons envoyés. Validation des normes feu requises selon usage (plaisance privée, charter, commercial)." },
  { step: 'Devis & planning', desc: "Devis détaillé sous 48h. Planning calé sur l’arrêt technique du bateau ou la disponibilité à quai. Pas de surprise sur la facture finale." },
  { step: 'Confection atelier', desc: "Découpe et préparation en atelier Villedoux selon calque. Précision millimétrique pour éviter toute reprise sur place. Calepinage testé avant transport." },
  { step: 'Pose à quai', desc: "Pose finale sur le bateau, colle polyuréthane marine, soudure à chaud des joints, finitions sur seuils et trappes de visite. Restitution propre." },
]

const faq = [
  { q: 'Quelles sont les normes feu pour un revêtement de sol marine ?', a: "Pour la plaisance privée, le classement européen Bfl-s1 (réaction au feu + faible émission de fumée) est la base minimale recommandée. Pour les unités commerciales (charter, navires à passagers), il faut respecter le code IMO FTP (International Maritime Organization, Fire Test Procedures) partie 5 ainsi que la directive MED 2014/90/UE (Marine Equipment Directive). Nous fournissons les certificats matériaux à chaque pose." },
  { q: 'Pourquoi ne pas utiliser une moquette d’intérieur standard sur un bateau ?', a: "Trois raisons techniques. Premièrement, les fibres comme la laine non traitée ou le polyamide standard absorbent l’humidité ambiante (80-95% sur un bateau) et finissent par moisir sous le sol. Deuxièmement, les colles acryliques d’intérieur ne tiennent pas avec les variations de température et l’atmosphère saline. Troisièmement, le classement feu intérieur Cfl-s1 est insuffisant face aux exigences marines. Résultat à 18 mois : décollement, odeur, dégâts sur le support." },
  { q: 'Quel matériau pour quel bateau ?', a: "Polypropylène 100% pour les zones humides, exposées au sel, ou très utilisées (catamaran de voile, voilier de croisière). Laine traitée anti-feu pour les salons de yachts à moteur ventilés et climatisés. PVC marine soudé pour cuisines, salles de bain, coursives. Sur un bateau, on combine souvent deux ou trois matériaux selon les zones." },
  { q: 'Faut-il sortir le bateau de l’eau pour la pose ?', a: "Non, dans la majorité des cas. La pose se fait à quai, sur 1 à 3 jours selon la surface. Nous calons l’intervention avec le port (La Pallice, Port des Minimes, La Flotte, Saint-Martin) ou le chantier. Pour un refit complet avec dépose de l’ancien revêtement et traitement du support, le bateau peut être au sec (cale sèche, élévateur)." },
  { q: 'Combien de temps dure une moquette marine bien posée ?', a: "Sur une unité de plaisance utilisée à la saison (juin-septembre), une moquette polypropylène marine posée dans les règles dure 8 à 12 ans. Sur un yacht à usage permanent, comptez 5 à 8 ans selon la fréquence d’occupation. Les défaillances que nous rencontrons sont rarement liées à l’usure mais à une pose initiale bâclée (colle inadaptée, sous-couche absorbante)." },
  { q: 'Intervenez-vous sur les ports hors La Rochelle ?', a: "Oui. Notre atelier est à Villedoux, à 10 minutes de La Pallice et du Port des Minimes. Nous intervenons régulièrement à Rochefort, Royan, La Flotte, Saint-Martin-de-Ré, Boyardville, Marennes. Sur devis, nous nous déplaçons jusqu’à Arcachon, Les Sables-d’Olonne ou la Bretagne sud pour les unités importantes." },
  { q: 'Avez-vous des références sur le secteur marine ?', a: "27 ans d’expérience CB Sols incluent des interventions sur catamarans de la flotte de Lagoon et Bali à La Rochelle, plusieurs yachts privés au Port des Minimes, et des péniches habitées sur la Charente. Les détails de chantier restent confidentiels par respect des propriétaires, mais nous transmettons des références sur demande sérieuse." },
]

const tableau = [
  { type: 'Catamaran', surfaces: 'Carré central + cabines x4, surfaces planes majoritaires', enjeu: 'Humidité saline, ventilation entre coques, exposition soleil', materiau: 'Polypropylène 100% Bfl-s1' },
  { type: 'Yacht moteur/voile luxe', surfaces: 'Salon, cabine propriétaire, coursives, surfaces courbes', enjeu: 'Vibrations moteur, finitions premium, esthétique', materiau: 'Laine vierge traitée + tapis sur mesure' },
  { type: 'Péniche', surfaces: 'Espace appartement, salons larges, surfaces planes', enjeu: 'Humidité fluviale forte, poids OK, ERP si commercial', materiau: 'Polypropylène ou laine selon usage, PVC soudé en humide' },
]

const glossaire = [
  { term: 'Bfl-s1', def: "Classement européen de réaction au feu pour revêtements de sol (norme EN 13501-1) : B = très faible contribution à l'incendie, fl = floor, s1 = émission de fumée faible. Base minimale pour la plaisance." },
  { term: 'IMO FTP Code 2010', def: 'International Maritime Organization, Fire Test Procedures. Référence mondiale des essais feu marins. La partie 5 concerne spécifiquement les revêtements de sol des navires à passagers et commerciaux.' },
  { term: 'MED / Wheelmark', def: "Marine Equipment Directive 2014/90/UE. Marquage roue de gouvernail apposé sur les matériaux conformes pour la navigation commerciale en Europe. Obligatoire pour le charter pro et l'événementiel à bord." },
  { term: 'ISO 9239-1', def: "Essai au panneau radiant pour mesurer le flux critique de propagation de flamme d'un revêtement de sol. Plus la valeur kW/m² est haute, plus le matériau résiste." },
  { term: 'Classement M0–M4', def: "Ancien classement français de réaction au feu (M0 incombustible, M4 facilement inflammable). Toujours cité dans les dossiers ERP fluvial. Équivalence approximative : M1 ≈ Bfl-s1, M2 ≈ Cfl-s1." },
  { term: 'FRP', def: 'Fiber Reinforced Polymer. Le composite polyester/fibre de verre qui constitue 90% des coques de plaisance modernes. Support non poreux qui exige un primaire spécifique avant collage.' },
  { term: 'Tuftage', def: "Procédé de fabrication par aiguilles qui plantent la fibre dans un dossier primaire, puis fixation par latex ou dossier secondaire. La majorité des moquettes contract et marine sont tuftées." },
  { term: 'Axminster / Wilton', def: "Tissages haut de gamme historiquement britanniques. Axminster = motif au mètre, idéal pour les yachts à grand salon. Wilton = velours bouclé dense, durée de vie 15-25 ans." },
  { term: 'Polypropylène (PP)', def: "Fibre synthétique 100% hydrophobe (taux de reprise d'humidité < 0,05%). Insensible au sel, séchage en quelques heures. La fibre de référence en marine." },
  { term: 'Polyamide 6.6 (PA 6.6)', def: "Nylon technique, résistance à l'abrasion supérieure au PP mais reprise d'humidité 4-5%. Réservé aux carrés ventilés et aux salons climatisés." },
  { term: 'Soudure à chaud', def: "Technique d'étanchéité des joints sur sols PVC marine : un cordon thermofusible est inséré dans une rainure puis fondu à 200°C avec un fer à souder. Le joint devient continu, étanche." },
  { term: 'Colle PU bi-composant', def: "Colle polyuréthane à deux composants (résine + durcisseur) avec un pot de vie de 30 à 60 minutes. Tient sous variations thermiques (-20 à +80°C), élastique, résiste au sel. La référence marine." },
]

const materiaux = [
  { fibre: 'Polypropylène 100%', humidite: 'Insensible (< 0,05% reprise)', feu: 'Bfl-s1 / IMO partie 5', prix: '€€', vie: '8-12 ans', confort: 'Sec, ferme' },
  { fibre: 'Polyamide 6.6 traité', humidite: 'Sensible (4-5% reprise)', feu: 'Bfl-s1 / M1', prix: '€€€', vie: '10-15 ans', confort: 'Doux, résilient' },
  { fibre: 'Laine vierge ignifugée', humidite: 'Très sensible (15-20%)', feu: 'M1 / Bfl-s1', prix: '€€€€', vie: '15-20 ans', confort: 'Chaud, noble' },
  { fibre: 'PVC marine soudé', humidite: 'Totalement étanche', feu: 'Bfl-s1 / MED', prix: '€€€', vie: '10-15 ans', confort: 'Froid, technique' },
]

const ports = [
  { nom: 'Port des Minimes — La Rochelle', detail: "Plus grand port de plaisance de la façade atlantique, 5000 anneaux. Interventions hebdomadaires sur catamarans Lagoon, Bali, Fountaine Pajot des flottes de location." },
  { nom: 'La Pallice — La Rochelle', detail: 'Port de commerce et chantier naval. Cale sèche disponible pour les refits complets. Accès facile depuis Villedoux en 15 minutes.' },
  { nom: 'Saint-Martin-de-Ré & La Flotte', detail: "Ports de plaisance Île de Ré, flotte de voiliers privés et yachts moteur. Pose à quai entre marées hautes, planning calé sur les coefficients." },
  { nom: 'Bourcefranc-le-Chapus & Marennes', detail: "Bassin de Marennes-Oléron, chantiers ostréicoles reconvertis en plaisance, plus quelques péniches habitées sur le bassin." },
  { nom: "Saint-Denis-d'Oléron & Boyardville", detail: "Ports de la côte ouest de l'île. Interventions saisonnières, principalement sur voiliers de croisière et catamarans de propriétaires." },
  { nom: 'Charente fluviale & Sèvre niortaise', detail: "Péniches habitées et péniches restaurant sur Saintes, Rochefort, Tonnay-Charente, Marans. Logistique terrestre simplifiée par rapport à la plaisance mer." },
]

export default function SolsMarinePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/sols-marine#service',
        name: 'Revêtements de sol marine et nautique',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: ['La Rochelle', 'Île de Ré', 'Île d’Oléron', 'Rochefort', 'Royan', 'Charente-Maritime'],
        serviceType: 'Pose de moquette et sol PVC marine pour bateaux, yachts, catamarans, péniches',
        description: 'Conception, confection atelier et pose à quai de revêtements de sol marine conformes aux normes IMO FTP et MED.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Sols marine', item: 'https://cbsols.fr/sols-marine' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Sols marine</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revêtements de sol marine,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>posés à quai.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Catamaran, yacht, péniche : nous concevons en atelier à Villedoux et posons à quai à La Rochelle, La Flotte, Rochefort. Matériaux conformes IMO FTP et MED, colles polyuréthane marine, soudure à chaud des joints. {company.experience} d&apos;expérience artisan.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=sols-marine" variant="primary" size="md">Demander un devis</Button>
                <Button href="/showroom" variant="outline" size="md">Voir le showroom</Button>
              </div>
            </div>
            {/* TODO: ajouter photo bateau / pose à quai */}
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Le détail qui change tout</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Une moquette d&apos;intérieur posée à la colle acrylique tient 18 mois sur un bateau. Une moquette marine bien posée tient 10 ans. La différence n&apos;est pas le tissu — c&apos;est tout ce qui est sous le tissu. »
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>— Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pour quel type de bateau ?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Quatre cas, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>quatre approches.</em>
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

      {/* CTA inline après cas d'usage */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un projet en tête ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Chaque bateau demande sa réponse.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Catamaran, yacht ou péniche : Valentin Prévoteau se déplace à quai pour relever les cotes et chiffrer juste.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=sols-marine" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Pourquoi un sol marine est différent */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pourquoi un sol marine n&apos;est pas un sol d&apos;intérieur</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Cinq contraintes que ne connaît pas <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>une moquette de salon.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>1 — Humidité saline permanente</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>L&apos;air à bord oscille entre 80 et 95% d&apos;humidité relative. Le sel se dépose en surface puis migre dans les fibres. Sur un revêtement non adapté, la moisissure apparaît sous le sol en 12 à 18 mois. Le polypropylène, lui, n&apos;absorbe quasiment rien.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>2 — Normes feu strictes</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>En cas d&apos;incendie à bord, l&apos;évacuation prend du temps. Le code IMO FTP impose des seuils de toxicité de fumée et de vitesse de propagation. Pour la plaisance privée, Bfl-s1 est la base. Pour le charter et le commercial, certification IMO partie 5 obligatoire.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>3 — Poids restreint</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Sur une unité de plaisance, chaque kilo embarqué impacte la ligne de flottaison, la consommation, le comportement à la mer. Nous privilégions les moquettes grammage 800-1100 g/m², sans sous-couche feutre lourde mais avec mousse fermée fine.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>4 — Surfaces courbes</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Carène arrondie, mainfold, formes complexes des cabines : la pose en lé droit standard est impossible. Calepinage sur calque, découpe atelier au millimètre, soudure à chaud des joints pour éviter toute infiltration.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>5 — Colle polyuréthane marine</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Une colle acrylique standard d&apos;intérieur sèche, se rétracte avec les variations de température et lâche sous l&apos;effet du sel. Nous utilisons exclusivement des colles polyuréthane mono ou bi-composant certifiées marine, conformes à l&apos;ISO 9239.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>6 — Vibrations & température</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Vibrations moteur, dilatations thermiques entre cale fraîche et pont chauffé au soleil : un sol marine doit absorber sans se décoller. Sous-couche mousse à cellules fermées, colle élastique, joints flexibles. C&apos;est aussi pour ça que la pose se fait en atelier puis ajustée à quai, jamais improvisée.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tableau comparatif */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Comparatif rapide</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Catamaran, yacht, péniche — <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>vue d&apos;ensemble.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {tableau.map((t, i) => (
              <div key={i} style={{ borderLeft: '3px solid var(--terra)', padding: '1.5rem 1.5rem 1.5rem 2rem', marginBottom: '1rem', backgroundColor: 'var(--bg-card)', borderRadius: '0 8px 8px 0' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem' }}>{t.type}</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  <div><div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--terra)', marginBottom: '0.3rem' }}>Surfaces</div><div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>{t.surfaces}</div></div>
                  <div><div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--terra)', marginBottom: '0.3rem' }}>Enjeu principal</div><div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>{t.enjeu}</div></div>
                  <div><div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--terra)', marginBottom: '0.3rem' }}>Matériau préconisé</div><div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>{t.materiau}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produits */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Produits que nous posons en milieu marin</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Trois familles de matériaux, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>un seul standard.</em>
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
            Côté marques, nous travaillons avec les fournisseurs européens spécialisés contract et marine : Bolon (Suède, sols tissés vinyle), Roberts Marine, ainsi qu&apos;avec les gammes contract de EGE et Gerflor adaptables au nautisme sur certifications complémentaires. Pas d&apos;entrée de gamme grand public détournée de son usage : nous voyons trop de bateaux refaits trois fois en cinq ans pour cette raison.
          </p>
        </div>
      </section>

      {/* Comparatif matériaux détaillé */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Comparatif matériaux marine</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Quatre fibres, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>quatre logiques de pose.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            On compare ce qui compte vraiment en milieu marin : la reprise d&apos;humidité (qui détermine la durée de vie sous le sol), le classement feu maximum atteignable, et le confort sous les pieds nus. Le prix est indicatif, du moins cher (€) au plus haut de gamme (€€€€).
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--terra)' }}>
                  <th style={{ padding: '0.85rem 0.75rem', textAlign: 'left', color: 'var(--dark)', fontWeight: 700 }}>Fibre</th>
                  <th style={{ padding: '0.85rem 0.75rem', textAlign: 'left', color: 'var(--dark)', fontWeight: 700 }}>Humidité</th>
                  <th style={{ padding: '0.85rem 0.75rem', textAlign: 'left', color: 'var(--dark)', fontWeight: 700 }}>Feu max</th>
                  <th style={{ padding: '0.85rem 0.75rem', textAlign: 'left', color: 'var(--dark)', fontWeight: 700 }}>Prix</th>
                  <th style={{ padding: '0.85rem 0.75rem', textAlign: 'left', color: 'var(--dark)', fontWeight: 700 }}>Durée de vie</th>
                  <th style={{ padding: '0.85rem 0.75rem', textAlign: 'left', color: 'var(--dark)', fontWeight: 700 }}>Confort</th>
                </tr>
              </thead>
              <tbody>
                {materiaux.map((m, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '0.85rem 0.75rem', color: 'var(--dark)', fontWeight: 600 }}>{m.fibre}</td>
                    <td style={{ padding: '0.85rem 0.75rem', color: 'var(--muted)' }}>{m.humidite}</td>
                    <td style={{ padding: '0.85rem 0.75rem', color: 'var(--muted)' }}>{m.feu}</td>
                    <td style={{ padding: '0.85rem 0.75rem', color: 'var(--muted)' }}>{m.prix}</td>
                    <td style={{ padding: '0.85rem 0.75rem', color: 'var(--muted)' }}>{m.vie}</td>
                    <td style={{ padding: '0.85rem 0.75rem', color: 'var(--muted)' }}>{m.confort}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Citation milieu de page (CTA léger) */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              « Chaque bateau est différent. Aucun calque ne se réutilise. Une visite à quai s&apos;impose avant tout chiffrage sérieux. »
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?from=sols-marine-inline" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Déplacement gratuit dans les ports charentais</span>
            </div>
          </div>
        </div>
      </section>

      {/* Glossaire technique */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Glossaire marine</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Douze termes <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>à connaître avant tout devis.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Le vocabulaire marine peut sembler hermétique. Voici les normes, fibres et techniques qu&apos;on cite couramment dans un devis ou un dossier ERP fluvial. Ce sont aussi les questions que pose toute commission de sécurité sérieuse.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {glossaire.map((g, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra)', marginBottom: '0.5rem' }}>{g.term}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{g.def}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ports & zone d'intervention */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Zone d&apos;intervention nautique</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Les ports que nous couvrons <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>régulièrement.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Atelier basé à Villedoux, à 10 minutes du Port des Minimes. Déplacement systématique pour la visite et la pose. Pour les chantiers importants hors zone (Bretagne sud, Arcachon, canaux du Centre), devis sur demande.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {ports.map((p, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{p.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche, de la visite à la pose</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>pose calée sur votre disponibilité.</em>
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
            Sols marine, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses techniques.</em>
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
            Décrivez votre bateau, on revient sous 48h.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Modèle, longueur, port d&apos;attache, surfaces concernées : ces quatre éléments suffisent pour démarrer un échange utile.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=sols-marine-faq" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Voir aussi</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/moquette-catamaran" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette catamaran →</Link>
            <Link href="/moquette-yacht" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette yacht →</Link>
            <Link href="/moquette-peniche" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette péniche →</Link>
            <Link href="/services/pose-moquette" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Pose de moquette →</Link>
            <Link href="/services/tapis-sur-mesure" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Tapis sur mesure →</Link>
            <Link href="/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom Villedoux →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Un bateau à équiper ? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Parlons-en.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite à quai dans les ports de La Rochelle, Île de Ré, Rochefort. Devis sur mesure après relevé précis.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=sols-marine" variant="primary" size="md">Demander un devis</Button>
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
