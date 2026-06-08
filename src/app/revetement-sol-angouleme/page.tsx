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
  { title: "Hôtels particuliers du plateau historique", desc: "Plateau d'Angoulême, remparts, place Saint-Pierre, rue de Beaulieu. Hôtels particuliers XVIIIe et XIXe, salons d'apparat sous plafonds moulurés, bibliothèques et chambres parentales. Moquette laine vierge tissée, tapis sur mesure bordés main, raccords sur parquets anciens validés en amont. Respect du caractère patrimonial du plateau classé." },
  { title: "Sièges d'imprimeries et industrie BD", desc: "Angoulême est la capitale française de la bande dessinée, avec un tissu d'imprimeries historiques, de maisons d'édition, de studios de création et de musées dédiés. Plateaux open space pour studios, bureaux d'édition, salles de réception pour le FIBD. Sols PVC acoustiques, dalles moquette, finitions design adaptées à cet univers créatif singulier." },
  { title: "Restaurants gastronomiques et bistronomie", desc: "Centre-ville historique, plateau, halles. Salles à manger, salons privés, espaces de réception. Moquette hôtellerie haute densité avec traitement anti-tache, isolation acoustique, finitions raffinées. Pose nocturne ou jour de fermeture hebdomadaire pour ne pas perdre un service. Coordination avec le chef et son équipe." },
  { title: "Châteaux et belles demeures de campagne", desc: "Campagne charentaise autour d'Angoulême, châteaux familiaux, maisons fortes restaurées, gentilhommières viticoles cognaçaises. Tapis sur mesure pour salons d'apparat, moquette laine pour chambres parentales, raccords précis sur parquets anciens ou tomettes d'origine. Coordination avec décorateur et conservateur du patrimoine." },
]

const exigences = [
  { title: "Patrimoine plateau et remparts classés", desc: "Le plateau d'Angoulême, avec ses remparts gallo-romains et médiévaux, son hôtel de ville, sa cathédrale Saint-Pierre et ses hôtels particuliers, est un secteur sauvegardé qui impose le respect du bâti existant. Nos poses respectent les parquets anciens et les supports d'origine, en réversibilité chaque fois que possible, sans clouage ni colle agressive. Documentation systématique des interventions pour le dossier patrimonial." },
  { title: "Identité ville BD à honorer", desc: "Le Festival International de la Bande Dessinée (FIBD) en janvier structure une identité culturelle unique à Angoulême. Le Musée de la Bande Dessinée, la Cité internationale de la BD et de l'image, les fresques murales, les studios de création donnent à la ville une coloration design contemporaine. Nous adaptons nos propositions à cet univers créatif quand le projet l'appelle, en alliance avec le patrimoine." },
  { title: "Logistique vers la Charente", desc: "Angoulême se situe à environ 120 km de notre atelier de Villedoux, près de La Rochelle, soit moins de deux heures de route par l'autoroute A10 ou la N141. C'est une zone d'intervention naturelle et régulière, avec passages plusieurs fois par mois. Visite de prise de cotes organisée sous huitaine, pose programmée selon votre calendrier." },
  { title: "Coordination corps de métiers patrimoniaux", desc: "Sur les chantiers d'hôtels particuliers et de châteaux charentais, nous travaillons avec des ébénistes spécialisés en restauration, des doreurs, des restaurateurs de boiseries XVIIIe, des peintres en décor. Notre intervention s'intègre à un planning global piloté par l'architecte d'intérieur ou le maître d'œuvre, en avant-dernier rang pour éviter qu'un autre corps de métier n'abîme la moquette neuve." },
  { title: "Acoustique des grands volumes", desc: "Les salons d'apparat des hôtels particuliers et les bibliothèques de châteaux charentais atteignent souvent 4 à 5 mètres sous plafond, avec parquet ancien et boiseries dures. La moquette laine sur thibaude feutre apporte une chute notable de la réverbération, sans dénaturer le caractère du lieu. Nous calculons les surfaces utiles pour viser un confort acoustique mesurable." },
  { title: "Équilibre tradition et contemporain", desc: "Angoulême est une ville où coexistent un patrimoine remarquable et une scène culturelle contemporaine très active (BD, image, audiovisuel, jeu vidéo). Nous savons composer ces deux registres dans un même projet : moquette laine traditionnelle pour le salon classique, dalles design contemporaines pour le studio attenant, raccords précis entre les deux univers. Cet équilibre est devenu une marque de fabrique de la décoration angoumoisine." },
]

const materiaux = [
  { name: "Moquette laine vierge tissée EGE", desc: "Pour les salons d'apparat des hôtels particuliers du plateau et les chambres parentales des châteaux charentais. Tissage dense, durée de vie 15 à 20 ans en usage privé soigné, toucher ferme et vieillissement noble. Disponible en uni, chiné ou motif géométrique discret, parfait pour s'inscrire dans un décor classique des Charentes." },
  { name: "Tapis sur mesure Brintons Aubusson reconstitués", desc: "Pour les intérieurs néo-classiques et les chantiers patrimoniaux du plateau. Reproduction de motifs historiques en laine vierge, bordure cousue main, dimensions calées au centimètre sur la pièce. Délai 10 à 16 semaines selon complexité du motif. Idéal pour habiller un parquet ancien sans le masquer totalement." },
  { name: "Sols PVC design pour studios créatifs", desc: "Pour les studios de BD, maisons d'édition, agences créatives et bureaux d'architectes angoumoisins. Gerflor Texline ou Forbo Flotex aux motifs contemporains, classement 33, durabilité 15 à 20 ans en usage tertiaire intensif. Esthétique design adaptée à l'univers visuel de la ville BD." },
  { name: "Sols PVC homogènes pour imprimeries et ateliers", desc: "Pour les imprimeries et ateliers de production graphique de l'agglomération angoumoisine. Résistance aux encres, solvants et produits de nettoyage, classement P3, soudure à chaud des lés, antistatique en option pour zones à équipements sensibles. Durée de vie 20 à 25 ans en usage intensif." },
  { name: "Moquettes EGE Highline et Hospitality", desc: "Pour les restaurants gastronomiques et hôtels boutique du centre. Traitement ignifuge en cœur de fibre, classement Bfl-s1 conforme à l'usage public, large palette de coloris coordonnables. Tient les rythmes de service intense sans perte de tenue visuelle entre deux remplacements." },
  { name: "Profilés laiton brossé et bronze patiné Romus", desc: "Pour les seuils, nez de marche et raccords entre essences. Coordination avec la quincaillerie d'origine des hôtels particuliers et châteaux charentais, possibilité de profilés sur mesure pour les chantiers patrimoniaux à exigence particulière. Finitions soignées qui font la différence." },
]

const marques = [
  { name: "EGE Carpets", desc: "Manufacture danoise référence de l'hôtellerie premium européenne. Gammes Highline et Hospitality pour hôtels particuliers du plateau d'Angoulême et restaurants gastronomiques charentais." },
  { name: "Gerflor", desc: "Sol PVC Mipolam et Texline. Gamme étendue pour studios créatifs angoumoisins, imprimeries, restaurants et plateaux tertiaires. Compatible chauffage au sol, entretien simple, large palette." },
  { name: "Forbo", desc: "Sols Marmoleum naturels (linoléum) et Flotex tissé vinyle. Solutions design pour studios BD et agences créatives, ou solutions sanitaires pour cabinets médicaux et zones humides angoumoisines." },
  { name: "Brintons", desc: "Axminster britannique haut de gamme, motifs sur mesure jusqu'à 36 couleurs. Référence des hôtels particuliers du plateau et des châteaux charentais à esprit classique d'apparat." },
  { name: "Tarkett", desc: "Sol PVC iQ Granit et iQ Optima. Performances acoustiques élevées, durabilité éprouvée pour plateaux tertiaires angoumoisins et zones humides hôtelières." },
  { name: "Tisca Tiara", desc: "Manufacture suisse de tapis et moquette laine de très haut de gamme. Référence des projets résidentiels d'exception et des suites de châteaux charentais transformés en Relais & Châteaux." },
  { name: "Object Carpet", desc: "Manufacture allemande, sols textiles design contemporain. Gammes pour studios de BD, maisons d'édition, agences de design et bureaux créatifs angoumoisins." },
  { name: "Bolon", desc: "Sols tissés vinyle suédois design. Résistance et esthétique contemporaine pour halls d'accueil, restaurants design et espaces culturels angoumoisins." },
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
  { q: "Vous déplacez-vous régulièrement à Angoulême depuis La Rochelle ?", a: "Oui, très régulièrement. Angoulême se situe à environ 120 km de notre atelier de Villedoux, soit moins de deux heures de route par l'autoroute A10 ou la N141. C'est une zone d'intervention naturelle pour nous, dans la continuité de notre savoir-faire patrimonial déjà bien établi sur la Charente-Maritime, les Charentes et le Sud-Ouest. Nous organisons les déplacements en deux temps : une visite de prise de cotes en début de projet, puis l'intervention de pose en fin de chantier. L'hébergement et la logistique sont inclus dans le devis. Pour les chantiers de plusieurs jours sur le plateau historique ou en campagne charentaise, nous mobilisons une équipe complète qui reste sur place jusqu'à la finition." },
  { q: "Travaillez-vous dans les hôtels particuliers du plateau d'Angoulême ?", a: "Oui, c'est un de nos terrains de prédilection. Le plateau d'Angoulême, avec ses remparts, ses hôtels particuliers XVIIIe et XIXe et son secteur sauvegardé, concentre un patrimoine d'une grande qualité avec des exigences techniques fortes : parquets anciens à préserver, boiseries d'origine à respecter, contraintes patrimoniales en secteur sauvegardé. Valentin Prévoteau et son équipe interviennent en coordination avec l'architecte d'intérieur ou le propriétaire, avec une attention particulière portée à la réversibilité des poses chaque fois que possible. Les tapis sur mesure Aubusson reconstitués trouvent là leur écrin naturel." },
  { q: "Intervenez-vous sur les studios de BD et l'industrie créative angoumoisine ?", a: "Oui, c'est un terrain qui nous intéresse particulièrement. Angoulême, capitale française de la BD, concentre studios de création, maisons d'édition, écoles d'animation (EMCA), studios de jeu vidéo et agences créatives. Les exigences sont précises : sols PVC design pour les open spaces de studios, dalles moquette acoustique pour les salles de travail, finitions contemporaines en accord avec l'univers visuel des lieux. Nous travaillons avec les marques Forbo Flotex, Object Carpet et Bolon pour proposer une esthétique design adaptée à cet écosystème créatif unique en France." },
  { q: "Travaillez-vous sur les châteaux et belles demeures de la campagne charentaise ?", a: "Oui, c'est un de nos terrains historiques. La campagne charentaise autour d'Angoulême, du côté de Cognac, de Jarnac, de la vallée de la Touvre, concentre un patrimoine de châteaux familiaux, de maisons fortes restaurées et de gentilhommières viticoles cognaçaises. Nous intervenons en coordination avec l'architecte d'intérieur, le décorateur ou le conservateur du patrimoine, pour des moquettes laine d'apparat, des tapis Aubusson reconstitués sur mesure, et des raccords précis sur parquets anciens ou tomettes d'origine. La discrétion et le respect du caractère du lieu sont notre marque." },
  { q: "Comment gérez-vous les contraintes du secteur sauvegardé du plateau ?", a: "Le plateau d'Angoulême est un secteur sauvegardé avec exigences fortes sur les travaux visibles depuis l'espace public. Concrètement, sur un revêtement de sol intérieur, l'ABF est rarement saisi directement, mais nous documentons systématiquement nos interventions : fiches matière, PV feu, certificats d'origine, photos avant et après. Cette documentation est précieuse pour le maître d'ouvrage en cas de revente du bien ou de demande d'autorisation ultérieure. Nous coordonnons avec l'architecte du patrimoine ou le maître d'œuvre quand le projet inclut une modification visible depuis la rue ou les remparts." },
  { q: "Intervenez-vous pendant le Festival International de la BD en janvier ?", a: "Nous évitons en règle générale les interventions sur la dernière quinzaine de janvier pendant le FIBD, période pendant laquelle l'ensemble de l'hôtellerie, de la restauration et des espaces culturels du plateau sont en suractivité avec affluence record dans la ville. Nous planifions les chantiers en amont (octobre-novembre-décembre) ou en aval (mars-avril). Pour les structures qui exposent ou accueillent pendant le festival (hôtels, restaurants, espaces de réception, librairies BD), nous proposons des poses anticipées de plusieurs semaines avec recette technique avant l'ouverture du festival." },
  { q: "Quelle est la durabilité d'une moquette laine dans un château charentais ?", a: "Une moquette laine vierge de qualité Wilton ou Axminster, posée sur thibaude feutre dans un château charentais à usage privé ou semi-public (réceptions, événements), dure facilement 15 à 20 ans avec un entretien correct. La laine vierge présente l'avantage de bien vieillir : elle se patine, se densifie au lieu de s'écraser, et conserve sa tenue visuelle longtemps. Pour les zones à fort passage comme les vestibules ou les escaliers monumentaux, on visera plutôt une laine tissée serrée à motif géométrique discret qui pardonnera mieux les marques de passage. Un nettoyage professionnel annuel suffit à maintenir l'aspect d'origine, idéalement programmé en fin de saison événementielle." },
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
