import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: "Revêtement de Sol Bordeaux | Moquette, PVC, Tapis Sur Mesure | CB Sols",
  description: "Pose de moquette, sol PVC et tapis sur mesure à Bordeaux. Hôtels particuliers du Triangle d'Or, échoppes bordelaises, restaurants gastronomiques. CB Sols intervient depuis 27 ans, déplacement depuis Villedoux.",
  alternates: { canonical: 'https://cbsols.fr/revetement-sol-bordeaux' },
  keywords: ['revêtement sol Bordeaux', 'moquette Bordeaux', 'sol PVC Bordeaux', 'pose tapis Bordeaux', 'artisan sol Bordeaux'],
  openGraph: {
    title: "Revêtement de sol à Bordeaux, l'élégance bordelaise",
    description: "Moquette, sol PVC et tapis sur mesure à Bordeaux. Hôtels particuliers, échoppes, restaurants gastronomiques. CB Sols, 27 ans de savoir-faire.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-bordeaux.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: "Hôtels particuliers du Triangle d'Or", desc: "Chartrons, Saint-Pierre, Cours de l'Intendance, Place des Grands Hommes. Salons d'apparat, bibliothèques, chambres parentales et bureaux privés. Moquette laine vierge tissée, tapis sur mesure bordés main, raccords aux parquets de chêne d'origine validés en amont. Coordination avec l'architecte d'intérieur ou le décorateur de famille quand il en existe un." },
  { title: "Échoppes bordelaises rénovées", desc: "L'échoppe simple ou double, en pierre de Bordeaux, garde une âme très particulière : parquets anciens souvent fragiles, escaliers étroits, contraintes ABF en centre-ville. Notre intervention respecte le bâti existant et propose des solutions de moquette ou de PVC réversibles, sans agression du support, pour préserver la valeur patrimoniale du bien." },
  { title: "Restaurants gastronomiques et tables étoilées", desc: "Cours de l'Intendance, place du Parlement, Saint-Pierre, allées de Tourny. Salles à manger, salons privés, espaces de réception. Moquette hôtellerie haute densité, traitement anti-tache compatible service intense, isolation acoustique pour préserver la conversation à table. Pose nocturne pour ne pas perdre un service." },
  { title: "Cabinets d'affaires et professions libérales CBD", desc: "Quartier Mériadeck, cours du Trente Juillet, immeubles tertiaires du Pey-Berland. Salles de réunion, bureaux de direction, espaces d'accueil discrets. Sol PVC acoustique pour les open spaces, moquette laine pour les bureaux de direction, finitions soignées qui posent le ton dès l'entrée du visiteur." },
]

const exigences = [
  { title: "Respect du bâti ancien", desc: "Bordeaux est une ville de patrimoine, classée UNESCO. Les hôtels particuliers, immeubles XVIIIe et échoppes bordelaises présentent des parquets anciens, des planchers sur solives bois et des escaliers d'origine qu'il faut préserver. Nos poses sont pensées en réversibilité chaque fois que possible, sans clouage ni colle agressive sur les supports historiques." },
  { title: "Contraintes ABF en centre-ville", desc: "Les zones classées du Triangle d'Or, du Saint-Pierre historique et des Chartrons relèvent de l'avis de l'Architecte des Bâtiments de France pour certains travaux visibles depuis l'espace public. Nous documentons nos interventions, fournissons les fiches matière et accompagnons l'architecte ou le maître d'ouvrage dans la constitution du dossier quand c'est nécessaire." },
  { title: "Accès logistique centre historique", desc: "Le centre piéton, les rues étroites du vieux Bordeaux, les voies bus et le tramway imposent des créneaux de livraison précis. Notre équipe coordonne avec la mairie pour l'autorisation de stationnement, prévoit les manutentions à la main sur les derniers mètres, et protège les parties communes des immeubles d'apparat avant tout déballage." },
  { title: "Coordination corps de métiers patrimoniaux", desc: "À Bordeaux, on travaille souvent avec des ébénistes spécialisés en restauration, des doreurs, des restaurateurs de boiseries XVIIIe, des peintres en décor. Notre intervention s'intègre à un planning global piloté par l'architecte d'intérieur ou le maître d'œuvre, en avant-dernier rang pour éviter qu'un autre corps de métier n'abîme la moquette neuve." },
  { title: "Acoustique des grands volumes", desc: "Les salons d'apparat et les bibliothèques des hôtels particuliers atteignent souvent 4 à 5 mètres sous plafond, avec parquet ancien et boiseries dures. La moquette laine sur thibaude feutre apporte une chute notable de la réverbération, sans dénaturer le caractère du lieu. Nous calculons les surfaces utiles pour viser un confort acoustique mesurable." },
  { title: "Coordination architectes d'intérieur locaux", desc: "Bordeaux compte une scène architecture intérieure très active autour des Bassins à flot, de Darwin et des Chartrons. Nous travaillons en sous-traitance de leur prescription, avec échantillons envoyés directement à l'agence pour validation sous l'éclairage de référence du projet, fiches techniques et PV feu fournis pour les dossiers de chantier." },
]

const materiaux = [
  { name: "Moquette laine vierge tissée Wilton et Axminster", desc: "Pour les salons d'apparat des hôtels particuliers et les chambres parentales d'exception. Tissage dense, durée de vie 15 à 20 ans en usage privé soigné, toucher ferme et vieillissement noble. Disponible en uni, chiné ou motif géométrique discret, parfait pour s'inscrire dans un décor classique bordelais sans heurter les boiseries." },
  { name: "Tapis sur mesure Hereke et Aubusson reconstitués", desc: "Pour les intérieurs néo-classiques et les chantiers patrimoniaux du Triangle d'Or. Reproduction de motifs historiques en laine vierge, bordure cousue main, dimensions calées au centimètre sur la pièce. Délai 10 à 16 semaines selon complexité du motif et nombre de coloris. Idéal pour habiller un parquet ancien sans le masquer totalement." },
  { name: "Moquettes EGE Highline et Hospitality", desc: "Pour les restaurants gastronomiques et les hôtels du centre. Traitement ignifuge en cœur de fibre, classement Bfl-s1 conforme à l'usage public, large palette de coloris coordonnables à la décoration existante. Tient les rythmes de service intense sans perte de tenue visuelle entre deux remplacements." },
  { name: "Sols PVC Gerflor Mipolam et Tarkett iQ Granit", desc: "Pour les cabinets d'affaires, les espaces tertiaires et les zones humides des hôtels particuliers. Aspect uni mat, hautes performances acoustiques, entretien simple, durabilité 15 ans en conditions normales. Pose en lés soudés à chaud pour une finition continue sans joint apparent." },
  { name: "Sols PVC effet bois et minéral pour échoppes", desc: "Quand le parquet d'origine n'est plus récupérable ou que la dépose serait trop invasive, le PVC effet bois pose haute qualité offre une alternative crédible visuellement, réversible et compatible avec une revente patrimoniale. Compatible chauffage au sol pour les rénovations contemporaines." },
  { name: "Profilés laiton brossé et bronze patiné Romus", desc: "Pour les seuils, nez de marche et raccords entre essences. Coordination avec la quincaillerie d'origine des hôtels particuliers, les poignées de porte en bronze d'époque et les boiseries cirées. Possibilité de profilés sur mesure pour les chantiers patrimoniaux à exigence particulière." },
]

const marques = [
  { name: "EGE Carpets", desc: "Manufacture danoise référence de l'hôtellerie premium européenne. Gammes Highline et Hospitality utilisées en hôtels particuliers et restaurants étoilés." },
  { name: "Brintons", desc: "Axminster britannique haut de gamme, motifs sur mesure jusqu'à 36 couleurs. Référence des grands hôtels de palace et des intérieurs d'apparat classiques." },
  { name: "Tarkett", desc: "Sol PVC professionnel gamme iQ Granit et iQ Optima. Performances acoustiques élevées, durabilité éprouvée, finition mate haut de gamme." },
  { name: "Gerflor", desc: "Sol PVC Mipolam et Texline. Gamme étendue de coloris et d'imitations bois, compatible chauffage au sol, entretien simple." },
  { name: "Forbo", desc: "Sols Marmoleum naturels (linoléum) et Flotex tissé vinyle. Solutions sanitaires éprouvées pour cabinets médicaux et zones humides." },
  { name: "Tisca Tiara", desc: "Manufacture suisse de tapis et moquette laine de très haut de gamme. Référence des projets résidentiels d'exception et des suites de palace." },
  { name: "Hereke", desc: "Tapis turcs d'apparat, tissage main, soie ou laine vierge fine. Pour les bibliothèques et salons de grands hôtels particuliers historiques bordelais." },
  { name: "Object Carpet", desc: "Manufacture allemande, sols textiles design contemporain. Gammes pour bureaux d'affaires haut de gamme et espaces tertiaires de prestige." },
]

const quartiers = [
  { nom: "Triangle d'Or", detail: "Cœur du luxe bordelais entre cours Clemenceau, cours de l'Intendance et allées de Tourny. Hôtels particuliers, boutiques de luxe, sièges sociaux." },
  { nom: "Chartrons", detail: "Quartier historique du négoce du vin, échoppes et hôtels particuliers de négociants. Patrimoine XVIIIe à préserver, scène architecture intérieure active." },
  { nom: "Saint-Pierre", detail: "Vieux Bordeaux classé UNESCO, rues piétonnes, immeubles d'apparat. Restaurants gastronomiques, boutiques haut de gamme, résidences de caractère." },
  { nom: "Saint-Michel", detail: "Quartier en pleine mutation, anciens entrepôts reconvertis et lofts, cafés design. Projets résidentiels et tertiaires créatifs." },
  { nom: "Capucins", detail: "Quartier du marché central et de la gastronomie populaire. Restaurants, bistrots de chefs, échoppes rénovées en habitat haut de gamme." },
  { nom: "Quinconces", detail: "Vaste esplanade et immeubles bourgeois XIXe environnants. Cabinets de profession libérale, sièges d'entreprise, appartements d'apparat." },
  { nom: "Pey-Berland", detail: "Quartier de la cathédrale et de l'hôtel de ville. Immeubles tertiaires haut de gamme, cabinets d'avocats, professions libérales." },
  { nom: "Caudéran", detail: "Quartier résidentiel bourgeois, villas de famille, parcs privés. Belle clientèle résidentielle attachée à la qualité d'exécution." },
  { nom: "Bordeaux Lac", detail: "Pôle tertiaire moderne, sièges sociaux, hôtels d'affaires. Sols PVC acoustiques pour open spaces et moquettes dalles pour bureaux de direction." },
  { nom: "Bègles", detail: "Commune limitrophe sud, mix de résidentiel ancien et programmes neufs. Échoppes rénovées et maisons familiales en cours de modernisation." },
  { nom: "Talence", detail: "Université et résidences étudiantes, mais aussi quartiers résidentiels haut de gamme. Maisons de famille, copropriétés bourgeoises, cabinets médicaux." },
  { nom: "Pessac", detail: "Résidences pavillonnaires, facultés et cliniques privées. Projets résidentiels haut de gamme et cabinets de profession libérale en plein essor." },
]

const process = [
  { step: 'Premier contact', desc: "Échange téléphonique ou par mail. Recueil des éléments clés : type de projet, surface estimée, calendrier souhaité, contraintes ABF éventuelles. Si le projet est piloté par un architecte d'intérieur, nous prenons contact directement avec son agence pour caler la suite." },
  { step: 'Visite à Bordeaux', desc: "Déplacement organisé sous 1 à 2 semaines. Prise de cotes au laser ou au calque selon configuration, repérage des contraintes d'accès immeuble, photos pour coordination coloris boiseries et parquets existants. Frais inclus dans le devis si le chantier est confirmé." },
  { step: 'Choix matière', desc: "Showroom Villedoux ou échantillons envoyés directement à Bordeaux, à votre adresse ou chez l'architecte. Validation finale sous l'éclairage du lieu, jamais en salle d'expo : la lumière atlantique bordelaise transforme les coloris, surtout les laines à reflet soyeux." },
  { step: 'Confection atelier La Rochelle', desc: "3 à 10 semaines selon gamme : Axminster custom, Wilton, soie, laine vierge, PVC découpé. Pré-assemblage à blanc en atelier pour valider l'ajustement avant transport. Cette préparation amont est ce qui permet de tenir une pose finale en 2 à 5 jours à Bordeaux." },
  { step: 'Pose à Bordeaux', desc: "Équipe mobilisée sur place, hébergement inclus dans le devis, planning calé sur vos disponibilités ou la fenêtre de chantier. Coordination avec la conciergerie ou le syndic. Nettoyage complet à la livraison, finitions vérifiées avec vous ou avec l'architecte." },
]

const faq = [
  { q: "Vous déplacez-vous régulièrement à Bordeaux depuis La Rochelle ?", a: "Oui, très régulièrement. Bordeaux est à environ 2 heures de route de notre atelier de Villedoux, près de La Rochelle, par l'autoroute A10. C'est une zone d'intervention naturelle pour nous, dans la continuité de notre savoir-faire patrimonial déjà bien établi sur la Charente-Maritime et l'île de Ré. Nous organisons les déplacements en deux temps : une visite de prise de cotes en début de projet, puis l'intervention de pose en fin de chantier. L'hébergement et la logistique sont inclus dans le devis. Pour les chantiers de plusieurs jours, nous mobilisons une équipe complète qui reste sur place jusqu'à la finition." },
  { q: "Travaillez-vous dans les hôtels particuliers du Triangle d'Or ?", a: "Oui, c'est même un de nos terrains de prédilection. Le Triangle d'Or et les Chartrons concentrent un patrimoine d'hôtels particuliers XVIIIe et XIXe d'une grande qualité, avec des exigences techniques fortes : parquets anciens à préserver, boiseries d'origine à respecter, contraintes ABF en zone classée. Valentin Prévoteau et son équipe interviennent en coordination avec l'architecte d'intérieur ou le maître d'ouvrage, avec une attention particulière portée à la réversibilité des poses chaque fois que possible. Les tapis sur mesure Aubusson ou Hereke trouvent là leur écrin naturel." },
  { q: "Comment gérez-vous les contraintes ABF en zone classée ?", a: "Les zones classées du vieux Bordeaux et du Triangle d'Or relèvent de l'Architecte des Bâtiments de France pour certains travaux visibles depuis l'espace public. Concrètement, sur un revêtement de sol intérieur, l'ABF est rarement saisi directement, mais nous documentons systématiquement nos interventions : fiches matière, PV feu, certificats d'origine, photos avant et après. Cette documentation est précieuse pour le maître d'ouvrage en cas de revente du bien ou de demande d'autorisation ultérieure. Nous coordonnons avec l'architecte ou le maître d'œuvre quand le projet inclut une modification visible depuis la rue." },
  { q: "Quels délais pour un tapis sur mesure Aubusson ou Hereke ?", a: "Compter 10 à 16 semaines de délai usine pour un tapis Aubusson ou Savonnerie reconstitué, selon la complexité du motif et le nombre de coloris à tisser. Pour un Hereke en laine vierge avec bordure cousue main, 8 à 14 semaines selon les dimensions. Pour une moquette Axminster custom avec motif validé sur cartouche couleur, 8 à 12 semaines. Ces délais s'ajoutent à la confection atelier et à la pose finale à Bordeaux. Un projet complet de salon d'apparat dans un hôtel particulier se planifie en général sur 4 à 6 mois entre la signature et la livraison, parfois plus si le motif nécessite plusieurs allers-retours d'épreuves." },
  { q: "Intervenez-vous sur les restaurants gastronomiques bordelais ?", a: "Oui, c'est un terrain où nous sommes particulièrement attendus. Les restaurants gastronomiques bordelais, qu'ils soient étoilés ou en cours d'étoile, accordent une importance majeure à l'ambiance acoustique et à la qualité visuelle du sol. Une moquette laine sur thibaude feutre apporte une chute notable de la réverbération, ce qui transforme l'expérience client à table. Nous travaillons en pose nocturne pour ne pas perdre un service, avec une équipe rodée aux contraintes de l'hôtellerie-restauration : protection des cuisines et des caves, nettoyage intégral à la livraison, planning calé sur le jour de fermeture hebdomadaire." },
  { q: "Quelle est la durabilité d'une moquette laine dans un hôtel particulier bordelais ?", a: "Une moquette laine vierge de qualité Wilton ou Axminster, posée sur thibaude feutre dans un hôtel particulier à usage privé, dure facilement 15 à 20 ans avec un entretien correct. La laine vierge présente l'avantage de bien vieillir : elle se patine, se densifie au lieu de s'écraser, et conserve sa tenue visuelle longtemps. Pour les pièces à fort passage comme les vestibules ou les escaliers, on visera plutôt une laine tissée serrée à motif géométrique discret qui pardonnera mieux les marques de passage. Un nettoyage professionnel annuel suffit à maintenir l'aspect d'origine." },
  { q: "Travaillez-vous avec les architectes d'intérieur de Bordeaux ?", a: "Oui, régulièrement. La scène architecture intérieure bordelaise est active, en particulier autour des Bassins à flot, de Darwin, des Chartrons et du Triangle d'Or. Nous intervenons en sous-traitance de leur prescription, avec l'architecte comme interlocuteur principal pour les choix matières et le calepinage. Les échantillons sont envoyés directement à son agence pour validation sous l'éclairage de référence du projet. Nous fournissons les fiches techniques, les PV feu et la traçabilité matière nécessaires aux dossiers de chantier premium. Cette collaboration nous permet d'élargir le champ des matières proposées au-delà du catalogue habituel, en mobilisant les manufactures partenaires européennes." },
]

export default function RevetementSolBordeauxPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/revetement-sol-bordeaux#service',
        name: "Revêtement de sol à Bordeaux",
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Bordeaux' },
          { '@type': 'AdministrativeArea', name: 'Gironde' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: "Pose de moquette, sol PVC et tapis sur mesure à Bordeaux et en Gironde",
        description: "Conception, confection atelier et pose de moquette, sol PVC et tapis sur mesure pour hôtels particuliers, restaurants gastronomiques, cabinets d'affaires et résidences de caractère à Bordeaux.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Revêtement de sol à Bordeaux', item: 'https://cbsols.fr/revetement-sol-bordeaux' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revêtement sol Bordeaux</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revêtement de sol à Bordeaux,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>l&apos;élégance bordelaise.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Pose de moquette, sol PVC et tapis sur mesure à Bordeaux. Hôtels particuliers du Triangle d&apos;Or, échoppes bordelaises rénovées, restaurants gastronomiques, cabinets d&apos;affaires. Atelier basé à La Rochelle, déplacement à Bordeaux régulièrement organisé.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=bordeaux" variant="primary" size="md">Demander un devis</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nous nous déplaçons</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Bordeaux, c&apos;est une ville de patrimoine accessible depuis La Rochelle en deux heures. Respecter un parquet ancien d&apos;échoppe ou habiller un salon des Chartrons, c&apos;est exactement le métier que CB Sols fait depuis 27 ans. »
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pour quel type de projet */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pour quel type de projet</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Quatre terrains, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>une même exigence patrimoniale.</em>
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

      {/* CTA inline #1 */}
      <section style={{ padding: '3rem 2rem' }}>
        <div style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un projet à Bordeaux ?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Visite sur place, devis chiffré.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Échange direct avec votre architecte d&apos;intérieur, votre décorateur ou directement avec vous. Visite organisée sous 1 à 2 semaines, devis détaillé sous huitaine.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/contact?source=bordeaux-cta1" variant="primary" size="md">Demander un devis</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Spécificités Bordeaux */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Spécificités Bordeaux</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six exigences <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propres aux chantiers bordelais.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Intervenir à Bordeaux, ce n&apos;est pas reproduire un chantier standard. Voici les six points sur lesquels nous structurons notre méthode dès la première visite, pour respecter le patrimoine et tenir le calendrier.
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

      {/* Matériaux */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Matériaux et gammes pour Bordeaux</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Les familles de produits <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que nous mobilisons en Gironde.</em>
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

      {/* Citation milieu */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              « Un parquet d&apos;échoppe bordelaise du XIXe, ça ne se touche pas comme un sol neuf. On pose une moquette qui se dépose proprement, qui ne marque pas le bois, qui respecte ce que la maison a déjà connu. »
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, gérant de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?source=bordeaux-citation" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Visite à domicile à Bordeaux</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marques */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Manufactures partenaires</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Huit maisons de référence <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>pour vos projets bordelais.</em>
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

      {/* Quartiers */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Quartiers et communes où nous intervenons</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Bordeaux et sa métropole, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>jusqu&apos;à Pessac et Talence.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Notre équipe se déplace sur l&apos;ensemble de Bordeaux Métropole ainsi que sur les communes limitrophes en première couronne, là où se concentrent les projets résidentiels et tertiaires haut de gamme.
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

      {/* CTA inline #2 */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Projet en réflexion ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Un appel pour défricher le sujet.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Vingt minutes au téléphone suffisent pour clarifier les gammes possibles, le calendrier réaliste et un ordre de grandeur budgétaire pour votre chantier bordelais.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?source=bordeaux-cta2" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux à Bordeaux.</em>
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
            Revêtement de sol à Bordeaux, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses concrètes.</em>
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
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Une question de plus ? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>Appelez Valentin.</em>
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Direct avec le gérant. Pas de hotline, pas de standard. Conseil clair, ordre de grandeur honnête, suite donnée seulement si le projet a du sens pour vous comme pour nous.
          </p>
          <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 1.75rem', border: '1px solid var(--terra)', borderRadius: '8px', textDecoration: 'none', color: 'var(--terra)', fontWeight: 700, fontSize: '0.95rem' }}>{company.phone}</a>
        </div>
      </section>

      {/* Voir aussi */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Voir aussi</div>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Notre savoir-faire couvre la Gironde et au-delà, sur tous les terrains d&apos;exception.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/revetement-sol-cap-ferret" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Revêtement sol Cap Ferret →</Link>
            <Link href="/revetement-sol-saint-emilion" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Revêtement sol Saint-Émilion →</Link>
            <Link href="/moquette-chateau" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette château →</Link>
            <Link href="/sols-monaco" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Sols Monaco →</Link>
            <Link href="/ile-de-re" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Île de Ré →</Link>
            <Link href="/particuliers" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Particuliers →</Link>
            <Link href="/architectes" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Architectes d&apos;intérieur →</Link>
            <Link href="/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom Villedoux →</Link>
          </div>
        </div>
      </section>

      {/* CTA final dark */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Votre projet bordelais <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>entre les bonnes mains.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite sur place à Bordeaux. Devis détaillé, finitions premium, respect du patrimoine. 27 ans de savoir-faire au service des projets d&apos;exception en Gironde.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=bordeaux-final" variant="primary" size="md">Demander un devis</Button>
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
