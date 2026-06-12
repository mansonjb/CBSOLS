import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: "Revêtement de Sol Angoulême | Patrimoine et Tertiaire | CB Sols",
  description: "Pose de moquette, sol PVC et tapis sur mesure à Angoulême. Hôtels particuliers du plateau, sièges d'imprimeries BD, restaurants gastronomiques, châteaux des Charentes. CB Sols, 27 ans de savoir-faire, déplacement régulier depuis Villedoux.",
  alternates: { canonical: 'https://cbsols.fr/revetement-sol-angouleme' },
  keywords: ['revêtement sol Angoulême', 'moquette Angoulême', 'sol PVC Angoulême', 'pose tapis Angoulême', 'artisan sol Angoulême', 'tapis château Charentes'],
  openGraph: {
    title: "Revêtement de sol à Angoulême, élégance des Charentes",
    description: "Moquette, sol PVC et tapis sur mesure à Angoulême. Hôtels particuliers, imprimeries BD, restaurants gastronomiques, châteaux. CB Sols, 27 ans de savoir-faire.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-angouleme.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: "Hôtels particuliers du plateau historique", desc: "Vous avez un hôtel particulier sur le plateau classé. Moquette laine tissée, tapis cousu main, raccords précis sur le parquet ancien. On valide chaque détail avec vous avant de poser. Le caractère patrimonial reste intact." },
  { title: "Studios BD et maisons d'édition", desc: "Vous installez un studio ou une maison d'édition à Angoulême. PVC acoustique pour les plateaux, dalles moquette dans les bureaux, finitions design pour le FIBD. Le sol respire l'univers créatif." },
  { title: "Restaurants gastronomiques et bistronomie", desc: "Vous tenez une table en centre-ville ou aux halles. On vient la nuit ou le jour de fermeture, vous ne perdez pas un service. Moquette dense anti-tache et acoustique soignée." },
  { title: "Châteaux et demeures de campagne", desc: "Vous rénovez un château familial ou une gentilhommière cognaçaise. Tapis sur mesure dans les salons d'apparat, moquette laine dans la chambre parentale, raccords sur tomettes ou parquets d'origine." },
]

const exigences = [
  { title: "Le plateau classé, on le respecte", desc: "Le plateau d'Angoulême est un secteur sauvegardé : remparts, cathédrale, hôtels particuliers. On pose en réversible, sans clouer, sans coller agressivement. Les parquets d'origine restent intacts. Notre passage est discret, c'est ce qu'on attend ici." },
  { title: "La ville de la BD, on parle son langage", desc: "Angoulême, c'est aussi les studios, la Cité de la BD, les fresques. Pour un studio créatif ou un loft, on propose des dalles design, des unis nets, des couleurs franches. Pour un salon classique, on reste en laine sobre. On accorde la matière au lieu, simplement." },
  { title: "Une heure et demie de route, et on est là", desc: "Angoulême est à 120 km de notre atelier, deux heures par l'A10 ou la N141. C'est tout près. On y passe plusieurs fois par mois, on connaît la ville. Vous appelez, on vient mesurer dans la semaine, sans surcoût caché pour le déplacement." },
  { title: "On travaille avec les artisans patrimoine", desc: "Sur les hôtels particuliers, vous avez souvent ébéniste, doreur, peintre en décor. On s'intègre au planning de l'architecte, on passe en avant-dernier pour ne pas abîmer la moquette neuve. Vous n'arbitrez rien, on s'accorde entre nous." },
  { title: "Moins d'écho dans les grands volumes", desc: "Les salons d'apparat font cinq mètres sous plafond, ça résonne. Une moquette laine sur sous-couche feutre coupe la moitié de l'écho. La pièce retrouve sa douceur, les conversations passent mieux. Et le caractère du lieu reste intact." },
  { title: "Tradition et contemporain, on sait marier", desc: "Beaucoup de projets ici mélangent un salon classique et un studio créatif sous le même toit. Moquette laine d'un côté, dalles design de l'autre, raccord précis entre les deux. Vous gardez votre cohérence, sans renoncer ni au patrimoine ni à la modernité." },
]

const materiaux = [
  { name: "Moquette laine vierge tissée EGE", desc: "Notre matière préférée pour les salons d'apparat des hôtels particuliers du plateau et les chambres des châteaux charentais. La laine se patine, ne s'écrase pas, vieillit noblement. On choisit avec vous un uni profond ou un motif géométrique discret pour s'accorder au décor existant. Quinze à vingt ans devant vous." },
  { name: "Tapis sur mesure Brintons Aubusson reconstitués", desc: "Quand vous voulez habiller un parquet ancien sans le masquer, le tapis sur mesure fait toute la différence. On reproduit un motif historique en laine vierge, bordure cousue main, dimensions au centimètre près. Compter dix à seize semaines de fabrication. Le résultat parle tout seul à l'arrivée." },
  { name: "Sols PVC design pour studios créatifs", desc: "Pour un studio de BD, une maison d'édition ou une agence créative angoumoisine, on choisit des PVC design. Gerflor Texline ou Forbo Flotex aux motifs contemporains, classement 33 qui encaisse l'usage intensif. L'esthétique colle à l'univers visuel de la ville BD. Quinze à vingt ans devant vous tranquillement." },
  { name: "Sols PVC homogènes pour imprimeries et ateliers", desc: "Sur une imprimerie ou un atelier de production graphique, le sol prend cher : encres, solvants, produits de nettoyage. On part sur du PVC homogène classé P3, soudé à chaud. En option, on peut prendre une version antistatique pour les zones à équipements sensibles. Vingt à vingt-cinq ans en usage intensif." },
  { name: "Moquettes EGE Highline et Hospitality", desc: "Pour les restaurants gastronomiques et les hôtels boutiques du centre, on part sur des gammes ignifugées en cœur de fibre. Elles passent la sécurité incendie sans difficulté. Choix large de coloris pour s'aligner sur votre décoration. Et elles encaissent les rythmes de service intense sans perdre leur tenue visuelle." },
  { name: "Profilés laiton brossé et bronze patiné Romus", desc: "Pour les seuils et les nez de marche, on soigne le détail. On coordonne avec la quincaillerie d'origine des hôtels particuliers et des châteaux. Sur les chantiers patrimoniaux particuliers, on peut faire fabriquer du sur mesure. C'est ce genre de chose qu'on remarque à la livraison, et qui fait la différence." },
]

const marques = [
  { name: "EGE Carpets", desc: "Le danois, notre référence pour les hôtels particuliers du plateau et les restaurants gastronomiques charentais. Leurs gammes Highline et Hospitality posent un cadre immédiatement." },
  { name: "Gerflor", desc: "Le français de Lyon, qu'on connaît par cœur. Leurs gammes équipent les studios créatifs, les imprimeries, les restaurants et les plateaux tertiaires angoumoisins. Choix énorme, entretien simple." },
  { name: "Forbo", desc: "Quand le projet demande du naturel, on regarde Forbo. Leur Marmoleum est un vrai linoléum à base d'huile de lin. Les Flotex couvrent les agences créatives, et la gamme sanitaire les cabinets médicaux." },
  { name: "Brintons", desc: "L'Axminster britannique, l'aristocratie de la moquette. Jusqu'à trente-six couleurs sur un motif. On l'appelle pour les hôtels particuliers du plateau et les châteaux à esprit classique d'apparat." },
  { name: "Tarkett", desc: "Pour les plateaux tertiaires qui demandent un vrai confort acoustique, on part sur du Tarkett iQ Granit. Ça vieillit bien, c'est notre référence pour les zones humides hôtelières aussi." },
  { name: "Tisca Tiara", desc: "Le suisse, c'est le très haut de gamme. On les sort pour les projets résidentiels d'exception et les suites de châteaux charentais transformés en Relais & Châteaux." },
  { name: "Object Carpet", desc: "Les allemands, pour les studios de BD, maisons d'édition et agences de design. Design contemporain affirmé, finitions parfaites. Parfait pour la scène créative angoumoisine." },
  { name: "Bolon", desc: "Le suédois du tissé vinyle. Esthétique contemporaine qui tient le passage intense. On les pose dans les halls d'accueil, les restaurants design et les espaces culturels angoumoisins." },
]

const quartiers = [
  { nom: "Centre historique (plateau)", detail: "Plateau d'Angoulême, remparts, hôtel de ville, cathédrale Saint-Pierre, place du Murier. Hôtels particuliers XVIIIe et XIXe, immeubles d'apparat, restaurants gastronomiques, boutiques de prestige." },
  { nom: "Saint-Cybard", detail: "Quartier historique en contrebas du plateau, en bord de Charente. Anciennes papeteries reconverties en lofts, ateliers d'artistes, restaurants tendance, scène culturelle BD active." },
  { nom: "Bel-Air-Grand-Font", detail: "Quartier résidentiel en renouvellement urbain au nord. Programmes neufs, équipements collectifs, équipements scolaires et culturels." },
  { nom: "Sillac-Grand-Font", detail: "Quartier nord-est, mix résidentiel et tertiaire avec sièges d'entreprises et plateformes logistiques. Maisons familiales et copropriétés récentes." },
  { nom: "La Madeleine", detail: "Quartier résidentiel et commercial à l'est, marché et commerces de proximité, copropriétés bourgeoises, cabinets de profession libérale." },
  { nom: "L'Houmeau", detail: "Quartier historique en bord de Charente, anciennes papeteries et maisons ouvrières rénovées. Scène culturelle créative, restaurants et lofts d'artistes." },
  { nom: "Soyaux", detail: "Commune limitrophe est, mix résidentiel pavillonnaire et zones d'activité économique. Sièges d'entreprises et copropriétés récentes." },
  { nom: "Ruelle-sur-Touvre", detail: "Commune limitrophe est, vallée de la Touvre, mix résidentiel et industriel patrimonial (anciennes manufactures d'armes). Belles propriétés et restauration de bâti." },
  { nom: "Fléac", detail: "Commune limitrophe ouest en bord de Charente, résidentiel haut de gamme, propriétés familiales et cabinets de profession libérale. Clientèle attachée à la qualité d'exécution." },
  { nom: "Saint-Yrieix-sur-Charente", detail: "Commune limitrophe nord-ouest, plan d'eau, résidentiel et équipements de loisirs. Maisons familiales et programmes pavillonnaires de standing." },
  { nom: "Magnac-sur-Touvre", detail: "Commune limitrophe est, vallée de la Touvre, résidentiel de caractère et belles propriétés. Patrimoine de campagne charentais à préserver." },
  { nom: "Mornac", detail: "Commune limitrophe nord-est, résidentiel pavillonnaire et villas familiales. Clientèle stable attachée au conseil personnalisé et aux finitions soignées." },
]

const process = [
  { step: 'Premier contact', desc: "Échange téléphonique ou par mail. Recueil des éléments clés : type de projet (hôtel particulier du plateau, château charentais, studio BD, restaurant, tertiaire), surface estimée, calendrier souhaité, contraintes patrimoniales éventuelles. Pour les projets pilotés par un architecte d'intérieur, contact direct avec son agence." },
  { step: 'Visite à Angoulême', desc: "Déplacement organisé sous 1 à 2 semaines depuis Villedoux. Prise de cotes au laser, repérage des contraintes d'accès au plateau, photos pour coordination coloris boiseries et parquets existants. Frais inclus dans le devis si le chantier est confirmé." },
  { step: 'Choix matière', desc: "Showroom Villedoux ou échantillons envoyés directement à Angoulême, à votre adresse ou chez l'architecte. Validation finale sous l'éclairage du lieu, jamais en salle d'expo : la lumière charentaise transforme les coloris, surtout les laines à reflet soyeux des salons d'apparat." },
  { step: 'Confection atelier La Rochelle', desc: "3 à 16 semaines selon gamme : Axminster custom, Wilton, soie, laine vierge, PVC découpé, tapis sur mesure. Pré-assemblage à blanc en atelier pour valider l'ajustement avant transport. Cette préparation est ce qui permet de tenir une pose finale en 2 à 5 jours à Angoulême." },
  { step: 'Pose à Angoulême', desc: "Équipe mobilisée sur place, hébergement inclus dans le devis, planning calé sur vos disponibilités ou la fenêtre du chantier. Coordination avec la conciergerie, le syndic ou le maître d'œuvre. Nettoyage complet à la livraison, finitions vérifiées avec vous ou avec l'architecte." },
]

const faq = [
  { q: "Vous venez vraiment à Angoulême depuis La Rochelle ?", a: "Oui, et souvent. Angoulême est à 120 km, moins de deux heures par l'A10 ou la N141. C'est tout près. On y passe régulièrement, dans la continuité de nos chantiers du Sud-Ouest. On vient mesurer en début de projet, puis on revient poser à la fin. L'hébergement est inclus dans le devis. Sur les gros chantiers du plateau ou de la campagne charentaise, l'équipe reste sur place jusqu'à la livraison." },
  { q: "Vous travaillez dans les hôtels particuliers du plateau ?", a: "Oui, c'est un de nos terrains préférés. Le plateau concentre des hôtels particuliers XVIIIe et XIXe d'une qualité folle. Les parquets anciens et les boiseries d'origine demandent du respect. On pose chaque fois que possible en réversible, sans clouer, sans coller agressivement. Les tapis sur mesure Aubusson reconstitués trouvent là leur écrin naturel. On coordonne avec votre architecte d'intérieur quand il y en a un." },
  { q: "Vous intervenez sur les studios de BD et l'industrie créative ?", a: "Oui, et c'est un terrain qui nous plaît particulièrement. Angoulême, capitale française de la BD, concentre studios, maisons d'édition, écoles d'animation (EMCA), studios de jeu vidéo. Les exigences sont précises : sols PVC design pour les open spaces, dalles moquette acoustique pour les salles de travail. On travaille avec Forbo Flotex, Object Carpet et Bolon pour coller à l'univers visuel de cet écosystème unique en France." },
  { q: "Vous travaillez sur les châteaux de la campagne charentaise ?", a: "Oui, c'est un de nos terrains historiques. Autour de Cognac, Jarnac, la vallée de la Touvre, on intervient sur des châteaux familiaux, des maisons fortes restaurées, des gentilhommières viticoles. On coordonne avec votre architecte d'intérieur, votre décorateur ou le conservateur du patrimoine. Moquettes laine d'apparat, tapis Aubusson sur mesure, raccords précis sur parquets et tomettes d'origine. Discrétion et respect du lieu, c'est notre marque." },
  { q: "Comment ça se passe en secteur sauvegardé sur le plateau ?", a: "Sur un sol intérieur, l'ABF est rarement saisi directement. Mais on documente quand même tout, par habitude : fiches matière, PV feu, photos avant et après. Vous avez un dossier propre si vous revendez le bien plus tard, ou si l'ABF revient pour un autre sujet. Quand le projet touche à quelque chose de visible depuis la rue ou les remparts, on s'aligne avec votre architecte du patrimoine." },
  { q: "Vous travaillez pendant le Festival International de la BD ?", a: "On évite la dernière quinzaine de janvier, c'est l'ébullition complète sur le plateau. Hôtels, restaurants, espaces culturels sont saturés, l'accès est compliqué. On planifie les chantiers en amont (octobre à décembre) ou en aval (mars-avril). Pour les structures qui exposent pendant le festival, on propose des poses anticipées de plusieurs semaines avec recette technique avant l'ouverture." },
  { q: "Combien de temps tient une moquette laine dans un château ?", a: "Quinze à vingt ans facilement, en usage privé ou semi-public. La laine vierge se patine, se densifie au lieu de s'écraser, elle garde sa tenue visuelle longtemps. Sur les vestibules et les escaliers monumentaux, on choisit plutôt une laine tissée serrée avec un motif géométrique discret qui pardonne mieux les passages. Un nettoyage pro une fois par an suffit, idéalement en fin de saison événementielle." },
]

export default function RevetementSolAngoulemePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/revetement-sol-angouleme#service',
        name: "Revêtement de sol à Angoulême",
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Angoulême' },
          { '@type': 'AdministrativeArea', name: 'Charente' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: "Pose de moquette, sol PVC et tapis sur mesure à Angoulême et en Charente",
        description: "Conception, confection atelier et pose de moquette, sol PVC et tapis sur mesure pour hôtels particuliers du plateau, studios de BD, restaurants gastronomiques et châteaux charentais à Angoulême.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Revêtement de sol à Angoulême', item: 'https://cbsols.fr/revetement-sol-angouleme' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revêtement sol Angoulême</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revêtement de sol à Angoulême,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>élégance des Charentes.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Pose de moquette, sol PVC et tapis sur mesure à Angoulême. Hôtels particuliers du plateau historique, sièges d&apos;imprimeries et studios BD, restaurants gastronomiques, châteaux et belles demeures de campagne. Atelier basé à La Rochelle, déplacement à Angoulême organisé chaque mois.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=angouleme" variant="primary" size="md">Demander un devis</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nous nous déplaçons</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Angoulême, c&apos;est une ville où le patrimoine du plateau dialogue avec la création contemporaine de la BD. Un terrain riche, exigeant, où CB Sols sait conjuguer tradition et modernité depuis 27 ans. »
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pour quel type de projet</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Quatre terrains, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>du patrimoine au contemporain.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {usages.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 2rem' }}>
        <div style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un projet à Angoulême ?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Visite sur place, devis chiffré.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Échange direct avec votre architecte d&apos;intérieur, votre décorateur ou directement avec vous. Visite organisée sous 1 à 2 semaines, devis détaillé sous huitaine.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/contact?source=angouleme-cta1" variant="primary" size="md">Demander un devis</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Spécificités Angoulême</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six exigences <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propres aux chantiers angoumoisins.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Intervenir à Angoulême, ce n&apos;est pas reproduire un chantier standard. Voici les six points sur lesquels nous structurons notre méthode dès la première visite, pour respecter le patrimoine du plateau et accompagner la création contemporaine.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {exigences.map((e, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>{e.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Matériaux et gammes pour Angoulême</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Les familles de produits <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que nous mobilisons en Charente.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {materiaux.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '1.5rem 0', borderBottom: i < materiaux.length - 1 ? '1px solid var(--border)' : 'none' }}>
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
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              « Angoulême, c&apos;est savoir jouer la moquette d&apos;apparat dans un hôtel particulier du plateau le matin, et la dalle design pour un studio de BD à Saint-Cybard l&apos;après-midi. CB Sols, c&apos;est exactement cette polyvalence. »
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, gérant de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?source=angouleme-citation" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Visite sur place à Angoulême</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Manufactures partenaires</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Huit maisons de référence <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>pour vos projets angoumoisins.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {marques.map((m, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{m.name}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Quartiers et communes où nous intervenons</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Angoulême et le Grand Angoulême, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>jusqu&apos;aux vallées charentaises.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Notre équipe se déplace sur l&apos;ensemble du Grand Angoulême ainsi que sur les communes de la campagne charentaise environnante, là où se concentrent les projets résidentiels patrimoniaux, tertiaires créatifs et les châteaux familiaux.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {quartiers.map((q, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{q.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{q.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Projet en réflexion ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Un appel pour défricher le sujet.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Vingt minutes au téléphone suffisent pour clarifier les gammes possibles, le calendrier réaliste et un ordre de grandeur budgétaire pour votre chantier angoumoisin.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?source=angouleme-cta2" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux à Angoulême.</em>
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

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Questions fréquentes</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Revêtement de sol à Angoulême, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses concrètes.</em>
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

      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Une question de plus ? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>Appelez Valentin.</em>
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Direct avec le gérant. Pas de hotline, pas de standard. Conseil clair, ordre de grandeur honnête, suite donnée seulement si le projet a du sens pour vous comme pour nous.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Voir aussi</div>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Notre savoir-faire couvre les Charentes, la Charente-Maritime et au-delà, sur tous les terrains patrimoniaux et créatifs d&apos;exception.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/revetement-sol-la-rochelle" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Revêtement sol La Rochelle →</Link>
            <Link href="/moquette-chateau" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette château →</Link>
            <Link href="/revetement-sol-bordeaux" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Revêtement sol Bordeaux →</Link>
            <Link href="/architectes" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Architectes d&apos;intérieur →</Link>
            <Link href="/particuliers" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Particuliers →</Link>
            <Link href="/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom Villedoux →</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Votre projet angoumoisin <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>entre les bonnes mains.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite sur place à Angoulême. Devis détaillé, finitions premium, respect du patrimoine du plateau et accompagnement de la création contemporaine. CB Sols, 27 ans de savoir-faire au service des projets d&apos;exception en Charente.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=angouleme-final" variant="primary" size="md">Demander un devis</Button>
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
