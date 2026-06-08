import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: "Revêtement de Sol Saint-Jean-de-Luz | Villas Pays Basque | CB Sols",
  description: "Pose de moquette, sol PVC et tapis sur mesure à Saint-Jean-de-Luz. Villas familiales sur l'Océan, maisons basques à colombages, hôtels boutique de la baie, restaurants gastronomiques. CB Sols, 27 ans de savoir-faire, déplacement organisé depuis Villedoux.",
  alternates: { canonical: 'https://cbsols.fr/revetement-sol-saint-jean-de-luz' },
  keywords: ['revêtement sol Saint-Jean-de-Luz', 'moquette Pays Basque', 'tapis sur mesure villa basque', 'artisan sol Saint-Jean-de-Luz', 'sol PVC Côte basque'],
  openGraph: {
    title: "Revêtement de sol à Saint-Jean-de-Luz, l'âme basque",
    description: "Moquette, sol PVC et tapis sur mesure à Saint-Jean-de-Luz. Villas familiales, maisons basques, hôtels boutique. CB Sols, 27 ans de savoir-faire.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-saint-jean-de-luz.jpg', width: 1200, height: 630 }],
  },
}

const usages = [
  { title: "Villas familiales sur l'Océan", desc: "Sainte-Barbe, Acotz, Erromardie, Lafitenia. Villas de famille à vue océan, maisons d'architectes contemporaines, demeures de villégiature transmises de génération en génération. Moquette laine vierge tissée pour les chambres parentales, tapis sur mesure pour les salons donnant sur le large, raccords précis sur parquets anciens ou tomettes basques rouges." },
  { title: "Maisons basques à colombages rouges", desc: "Centre historique luzien, Ciboure, Guéthary, Saint-Pée-sur-Nivelle. L'etxe basque traditionnelle, avec ses colombages rouges sang-de-bœuf et sa façade blanche, garde une âme très particulière : parquets de châtaignier d'origine, escaliers étroits, pièces aux proportions intimes. Nos poses respectent le bâti existant et la tradition." },
  { title: "Hôtels boutique de la baie", desc: "Hôtels indépendants du centre, hôtels Relais & Châteaux de la côte, maisons d'hôtes de caractère. Moquette hôtellerie haute densité avec traitement anti-tache, isolation acoustique pour les chambres donnant sur la rue, tapis sur mesure pour les halls et salons. Pose calée sur la basse saison atlantique pour ne pas perdre un nuitée." },
  { title: "Restaurants gastronomiques de la baie", desc: "Centre historique luzien, port de pêche, front de mer, Ciboure-Socoa. Salles à manger avec vue, salons privés, espaces de réception. Moquette laine sur thibaude feutre pour l'acoustique, traitement anti-tache, finitions raffinées qui s'accordent à la table étoilée. Pose nocturne ou jour de fermeture hebdomadaire." },
]

const exigences = [
  { title: "Tradition basque à respecter", desc: "Le Pays basque a une identité architecturale forte qu'il faut respecter : rouge basque, blanc de chaux, colombages, tomettes, ardoise. Nos propositions de coloris et de matières s'inscrivent dans cette palette régionale sans la trahir. Le rouge basque trouve des échos sur les tapis d'apparat, le blanc se décline sur les laines naturelles, l'ambiance reste cohérente avec le lieu." },
  { title: "Climat atlantique et embruns", desc: "Saint-Jean-de-Luz subit un climat atlantique humide avec embruns salins permanents en front de mer. Nous sélectionnons des matières adaptées : moquette laine traitée anti-mites et anti-humidité, sols PVC à fort taux de plastifiant pour la souplesse, tapis aux bordures cousues main résistantes à l'humidité ambiante. Pas de matières fragiles aux climats secs continentaux." },
  { title: "Vue océan et finitions raffinées", desc: "Les villas familiales luziennes sont structurées autour de la vue océan. Le sol doit accompagner ce panorama sans le concurrencer : tons sablés, terra cotta basque, blancs cassés, beiges chauds. Les bordures, les raccords aux baies vitrées, les seuils sur terrasse sont des points d'attention permanents. La finition se voit dans la lumière atlantique." },
  { title: "Logistique longue distance", desc: "Saint-Jean-de-Luz se situe à environ 370 km de notre atelier de Villedoux, soit quatre heures de route. C'est un déplacement organisé en projet long, avec hébergement sur place pour l'équipe pendant la durée de la pose. Cette logistique implique une préparation atelier irréprochable : tout est pré-assemblé à blanc avant départ pour réduire la durée d'intervention sur place." },
  { title: "Coordination corps de métiers basques", desc: "Sur les villas de prestige et les maisons basques restaurées, nous travaillons avec des charpentiers spécialisés en bois local, des maçons à la chaux, des ferronniers, des peintres décorateurs. Notre intervention s'intègre à un planning global piloté par l'architecte d'intérieur ou le maître d'œuvre, en avant-dernier rang pour éviter qu'un autre corps de métier n'abîme la moquette neuve." },
  { title: "Saisonnalité Pays basque", desc: "La haute saison luzienne court de juillet à septembre, avec des pics en août pour les villas familiales et les hôtels. Les chantiers se calent en basse saison (octobre à mai) pour ne pas perturber les vacances ou l'exploitation hôtelière. Anticipation indispensable : un projet livré pour juillet doit être lancé en cotes dès février-mars pour les délais de confection sur mesure." },
]

const materiaux = [
  { name: "Moquette laine vierge tissée EGE", desc: "Pour les chambres parentales et salons des villas familiales luziennes. Tissage dense, toucher ferme, vieillissement noble en climat atlantique. Coloris sablés, terra cotta ou écrus en accord avec la palette basque. Durabilité 15 à 20 ans en usage privé soigné." },
  { name: "Tapis sur mesure laine et soie Brintons", desc: "Pour les salons d'apparat des villas vue océan et les hôtels boutique de la baie. Bordure cousue main, dimensions calées au centimètre, motifs adaptables à la décoration basque ou contemporaine. Délai 10 à 16 semaines selon complexité. Habillage qui sublime une vue exceptionnelle." },
  { name: "Sols Bolon tissés vinyle bord de mer", desc: "Pour les entrées, salles à manger et zones de passage des villas familiales et hôtels. Résistance aux embruns, à l'humidité, aux sables. Esthétique contemporaine adaptée aux maisons d'architectes en front de mer. Entretien simple, durée de vie 15 à 20 ans en climat atlantique." },
  { name: "Tapis tissés Tisca Tiara haute couture", desc: "Pour les villas d'exception, suites de Relais & Châteaux, salons de réception privés. Manufacture suisse de très haut de gamme, laine vierge fine, motifs personnalisables. Référence des projets résidentiels luziens d'exception et des hôtels haut de gamme de la côte basque." },
  { name: "Moquette laine motif basque ou contemporain", desc: "Pour les hôtels boutique de Saint-Jean-de-Luz et les maisons basques restaurées avec exigence. Motifs géométriques discrets en rappel des motifs traditionnels, ou unis chiné dans la palette régionale. Classement Bfl-s1 conforme à l'usage public hôtelier." },
  { name: "Profilés laiton vieilli et bronze patiné Romus", desc: "Pour les seuils, nez de marche et raccords entre parquets et moquette. Coordination avec la quincaillerie traditionnelle des maisons basques, possibilité de profilés sur mesure pour les chantiers patrimoniaux luziens. Finitions soignées qui font la différence à la livraison sur un chantier d'exception." },
]

const marques = [
  { name: "EGE Carpets", desc: "Manufacture danoise référence de l'hôtellerie premium européenne. Gammes Highline et Hospitality pour villas familiales luziennes et hôtels boutique de la côte basque." },
  { name: "Brintons", desc: "Axminster britannique haut de gamme, motifs sur mesure jusqu'à 36 couleurs. Référence des grandes villas du Pays basque et des intérieurs d'apparat tradition basque." },
  { name: "Bolon", desc: "Sols tissés vinyle suédois design, résistants aux embruns et à l'humidité. Solution idéale pour les villas en front de mer et les hôtels de la baie luzienne." },
  { name: "Tisca Tiara", desc: "Manufacture suisse de tapis et moquette laine de très haut de gamme. Référence des projets résidentiels d'exception et des suites de Relais & Châteaux du Pays basque." },
  { name: "Gerflor", desc: "Sol PVC Mipolam et Texline. Gammes adaptées aux climats humides, compatible chauffage au sol, entretien simple pour les villas familiales luziennes." },
  { name: "Forbo", desc: "Sols Marmoleum naturels (linoléum) et Flotex tissé vinyle. Solutions naturelles pour villas écoresponsables et maisons basques restaurées dans un esprit durable." },
  { name: "Object Carpet", desc: "Manufacture allemande, sols textiles design contemporain. Gammes pour villas d'architectes et hôtels boutique de la côte basque à esthétique épurée." },
  { name: "Hereke", desc: "Tapis turcs d'apparat, tissage main, soie ou laine vierge fine. Pour les bibliothèques et salons des grandes villas familiales luziennes à esprit classique." },
]

const quartiers = [
  { nom: "Centre historique", detail: "Rue Gambetta, place Louis-XIV, port de pêche. Maisons basques à colombages rouges, hôtels particuliers, boutiques de prestige, restaurants gastronomiques de la baie." },
  { nom: "Sainte-Barbe", detail: "Quartier résidentiel sur la colline, vue sur la baie. Villas familiales de caractère, maisons d'architectes, copropriétés de prestige avec belle exposition océan." },
  { nom: "Quartier Acotz", detail: "Quartier nord en front de mer, villas familiales sur l'Océan, lotissements pavillonnaires haut de gamme. Clientèle résidentielle attachée à la qualité d'exécution et à la vue." },
  { nom: "Erromardie", detail: "Quartier de bord de mer au nord, plage familiale, campings de luxe et villas vacances. Maisons de vacances familiales transmises et copropriétés de standing." },
  { nom: "Lafitenia", detail: "Quartier surf sur la côte nord, spot mythique, villas d'architectes contemporaines avec vue directe sur l'Océan. Projets résidentiels haut de gamme et résidences de villégiature." },
  { nom: "Plage de Mayarco", detail: "Crique préservée au nord, villas isolées et propriétés familiales discrètes. Clientèle exigeante recherchant la confidentialité et la qualité absolue d'exécution." },
  { nom: "Socoa", detail: "Quartier portuaire en face de Saint-Jean-de-Luz côté Ciboure. Maisons de pêcheurs rénovées, restaurants de fruits de mer, fort de Socoa et patrimoine historique." },
  { nom: "Ciboure", detail: "Commune jumelle côté ouest de la baie. Maisons basques traditionnelles, ruelles pavées, port de plaisance, restaurants de poissons et patrimoine architectural à préserver." },
  { nom: "Hendaye", detail: "Commune frontalière au sud, longue plage familiale, villas Art Déco et maisons basques. Projets résidentiels variés du studio frontalier à la grande villa familiale." },
  { nom: "Guéthary", detail: "Village basque chic entre Saint-Jean-de-Luz et Biarritz. Villas d'architectes, maisons basques restaurées, ambiance discrète et raffinée. Clientèle internationale exigeante." },
  { nom: "Bidart", detail: "Commune littorale au nord, falaises et plages, villas familiales et résidences de tourisme haut de gamme. Mix résidentiel et hôtelier de standing." },
  { nom: "Saint-Pée-sur-Nivelle", detail: "Commune de l'arrière-pays basque, maisons basques traditionnelles, fermes restaurées, projets de campagne. Bâti authentique à préserver avec respect du patrimoine local." },
]

const process = [
  { step: 'Premier contact', desc: "Échange téléphonique ou par mail. Recueil des éléments clés : type de projet (villa familiale, maison basque, hôtel boutique, restaurant), surface estimée, calendrier souhaité, contraintes saisonnières. Pour les projets pilotés par un architecte d'intérieur basque, contact direct avec son agence." },
  { step: 'Visite à Saint-Jean-de-Luz', desc: "Déplacement organisé sous 2 à 3 semaines depuis Villedoux. Prise de cotes au laser, repérage des contraintes d'accès, photos pour coordination coloris avec les boiseries, les tomettes basques ou les baies océan. Frais inclus dans le devis si le chantier est confirmé." },
  { step: 'Choix matière', desc: "Showroom Villedoux ou échantillons envoyés directement à Saint-Jean-de-Luz, à votre adresse ou chez l'architecte. Validation finale sous la lumière atlantique du lieu, jamais en salle d'expo : la lumière luzienne transforme les coloris, surtout les laines chaudes et les terra cotta." },
  { step: 'Confection atelier La Rochelle', desc: "3 à 16 semaines selon gamme : Axminster custom, Wilton, soie, laine vierge, PVC découpé, tapis sur mesure. Pré-assemblage à blanc en atelier pour valider l'ajustement avant transport. Cette préparation est ce qui permet une pose finale rapide à Saint-Jean-de-Luz malgré la distance." },
  { step: 'Pose à Saint-Jean-de-Luz', desc: "Équipe mobilisée sur place avec hébergement inclus dans le devis, planning calé sur vos disponibilités ou la basse saison hôtelière. Coordination avec la conciergerie ou le maître d'œuvre. Nettoyage complet à la livraison, finitions vérifiées avec vous ou avec l'architecte." },
]

const faq = [
  { q: "Vous déplacez-vous à Saint-Jean-de-Luz depuis La Rochelle ?", a: "Oui, sur projet et avec une logistique adaptée. Saint-Jean-de-Luz se situe à environ 370 km de notre atelier de Villedoux, près de La Rochelle, soit quatre heures de route par l'autoroute A10 puis A63. Le déplacement est organisé en projet long avec hébergement sur place pour l'équipe pendant la durée de la pose. Cette distance impose une préparation atelier irréprochable : tout est pré-assemblé à blanc avant départ pour réduire au minimum la durée d'intervention sur site. Nous intervenons régulièrement sur la côte basque pour des villas familiales, des hôtels boutique et des restaurants gastronomiques. L'hébergement et la logistique sont inclus dans le devis." },
  { q: "Travaillez-vous sur les villas familiales du Pays basque ?", a: "Oui, c'est même un de nos terrains de prédilection sur la côte basque. Sainte-Barbe, Acotz, Erromardie, Lafitenia concentrent un patrimoine de villas familiales transmises de génération en génération, avec exigences fortes : parquets anciens à préserver, tomettes basques rouges à respecter, vue océan à accompagner sans concurrencer. Valentin Prévoteau et son équipe interviennent en coordination avec l'architecte d'intérieur ou le propriétaire, avec une attention particulière portée aux raccords précis et aux finitions raffinées. Les tapis sur mesure et moquettes laine tissées dans la palette basque trouvent là leur écrin naturel." },
  { q: "Comment gérez-vous le climat atlantique et les embruns salins ?", a: "Le climat atlantique luzien, avec ses embruns salins permanents en front de mer et son taux d'humidité élevé, impose une sélection rigoureuse des matières. Nous écartons les matières fragiles aux climats secs continentaux et privilégions des solutions adaptées : moquette laine traitée anti-mites et anti-humidité, sols PVC à fort taux de plastifiant pour conserver leur souplesse dans le temps, tapis aux bordures cousues main résistantes à l'humidité ambiante. Les finitions de raccord aux baies vitrées et aux terrasses sur l'Océan font l'objet d'une attention particulière pour éviter les infiltrations." },
  { q: "Quels délais pour un tapis sur mesure pour une villa luzienne ?", a: "Compter 10 à 16 semaines de délai usine pour un tapis Brintons Axminster custom avec motif validé sur cartouche couleur, selon la complexité du motif et le nombre de coloris. Pour un tapis Tisca Tiara haute couture en laine vierge fine, 8 à 14 semaines. Pour un Hereke en laine vierge avec bordure cousue main, 8 à 14 semaines selon les dimensions. Ces délais s'ajoutent à la confection atelier et à la pose finale à Saint-Jean-de-Luz. Un projet complet de villa familiale se planifie en général sur 4 à 6 mois entre la signature et la livraison, à anticiper si la livraison doit se faire avant l'arrivée de la famille en juillet." },
  { q: "Intervenez-vous sur les restaurants gastronomiques de la baie ?", a: "Oui. Les restaurants gastronomiques luziens, qu'ils soient situés sur le port de pêche, en centre historique ou côté Ciboure-Socoa, accordent une importance majeure à l'ambiance acoustique et à la qualité visuelle du sol. Une moquette laine sur thibaude feutre apporte une chute notable de la réverbération, ce qui transforme l'expérience client à table. Nous travaillons en pose nocturne ou jour de fermeture hebdomadaire pour ne pas perdre un service, avec une équipe rodée aux contraintes de l'hôtellerie-restauration : protection des cuisines et des caves, nettoyage intégral à la livraison, planning calé sur l'inter-saison." },
  { q: "Travaillez-vous dans les maisons basques traditionnelles à colombages ?", a: "Oui, c'est un terrain où nous sommes particulièrement attentifs. Les maisons basques traditionnelles, qu'il s'agisse d'une etxe à Saint-Pée-sur-Nivelle, d'une maison de centre à Ciboure ou d'une ferme restaurée dans l'arrière-pays, gardent une âme particulière : parquets de châtaignier d'origine, tomettes rouges, escaliers étroits, pièces aux proportions intimes. Nos poses respectent le bâti existant et s'inscrivent dans la tradition régionale : palette sablée, terra cotta basque ou écrue, motifs discrets en rappel des motifs traditionnels. Pas question d'imposer un parti pris qui trahirait la maison." },
  { q: "Quelle est la durabilité d'une moquette laine dans une villa luzienne en front de mer ?", a: "Une moquette laine vierge de qualité, posée sur thibaude feutre dans une villa familiale luzienne à usage privé saisonnier, dure facilement 15 à 20 ans avec un entretien correct, malgré le climat atlantique. La laine vierge présente l'avantage de bien gérer l'humidité ambiante : elle l'absorbe et la restitue sans s'altérer, contrairement aux synthétiques qui peuvent se déformer. Pour les zones à fort passage comme les vestibules ou les escaliers, on visera plutôt une laine tissée serrée à motif géométrique discret. Un nettoyage professionnel annuel en fin de saison, avant l'hivernage de la villa, suffit à maintenir l'aspect d'origine." },
]

export default function RevetementSolSaintJeanDeLuzPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/revetement-sol-saint-jean-de-luz#service',
        name: "Revêtement de sol à Saint-Jean-de-Luz",
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'City', name: 'Saint-Jean-de-Luz' },
          { '@type': 'AdministrativeArea', name: 'Pyrénées-Atlantiques' },
          { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        ],
        serviceType: "Pose de moquette, sol PVC et tapis sur mesure à Saint-Jean-de-Luz et sur la côte basque",
        description: "Conception, confection atelier et pose de moquette, sol PVC et tapis sur mesure pour villas familiales sur l'Océan, maisons basques traditionnelles, hôtels boutique et restaurants gastronomiques à Saint-Jean-de-Luz.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Revêtement de sol à Saint-Jean-de-Luz', item: 'https://cbsols.fr/revetement-sol-saint-jean-de-luz' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revêtement sol Saint-Jean-de-Luz</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Revêtement de sol à Saint-Jean-de-Luz,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>l&apos;âme basque.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Pose de moquette, sol PVC et tapis sur mesure à Saint-Jean-de-Luz. Villas familiales sur l&apos;Océan, maisons basques à colombages rouges, hôtels boutique de la baie, restaurants gastronomiques. Atelier basé à La Rochelle, déplacement organisé sur la côte basque pour les projets de prestige.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=saint-jean-de-luz" variant="primary" size="md">Demander un devis</Button>
                <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Nous nous déplaçons</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Saint-Jean-de-Luz, c&apos;est une lumière unique, une tradition forte, et des familles qui transmettent leurs villas depuis trois générations. CB Sols accompagne ces projets dans le respect de l&apos;esprit basque, depuis 27 ans. »
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
            Quatre terrains, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>une même fidélité à l&apos;esprit basque.</em>
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
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un projet à Saint-Jean-de-Luz ?</p>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
              Visite sur place, devis chiffré.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Échange direct avec votre architecte d&apos;intérieur, votre décorateur basque ou directement avec vous. Visite organisée sous 2 à 3 semaines, devis détaillé sous huitaine.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button href="/contact?source=saint-jean-de-luz-cta1" variant="primary" size="md">Demander un devis</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Spécificités Pays basque</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Six exigences <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>propres aux chantiers luziens.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Intervenir à Saint-Jean-de-Luz, ce n&apos;est pas reproduire un chantier standard. Voici les six points sur lesquels nous structurons notre méthode dès la première visite, pour respecter la tradition basque et tenir le calendrier saisonnier.
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Matériaux et gammes pour Saint-Jean-de-Luz</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Les familles de produits <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que nous mobilisons sur la côte basque.</em>
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
              « Une villa luzienne, on l&apos;aborde par la lumière atlantique et par la tradition basque. Une moquette qui s&apos;accorde à la tomette rouge, un tapis qui répond à la vue océan, des finitions impeccables sous la lumière du soir. »
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Valentin Prévoteau, gérant de CB Sols</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?source=saint-jean-de-luz-citation" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Visite sur place à Saint-Jean-de-Luz</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Manufactures partenaires</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Huit maisons de référence <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>pour vos projets luziens.</em>
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
            Saint-Jean-de-Luz et la côte basque, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Bidart à Hendaye.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Notre équipe se déplace sur l&apos;ensemble de la côte basque ainsi que dans l&apos;arrière-pays, là où se concentrent les projets résidentiels d&apos;exception et les hôtels boutique de prestige.
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
            Vingt minutes au téléphone suffisent pour clarifier les gammes possibles, le calendrier réaliste et un ordre de grandeur budgétaire pour votre chantier luzien.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?source=saint-jean-de-luz-cta2" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de Villedoux à Saint-Jean-de-Luz.</em>
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
            Revêtement de sol à Saint-Jean-de-Luz, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses concrètes.</em>
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
            Notre savoir-faire couvre la côte basque, le Sud-Ouest et au-delà, sur tous les terrains d&apos;exception.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/revetement-sol-biarritz" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Revêtement sol Biarritz →</Link>
            <Link href="/revetement-sol-bordeaux" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Revêtement sol Bordeaux →</Link>
            <Link href="/moquette-chateau" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette château →</Link>
            <Link href="/particuliers" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Particuliers →</Link>
            <Link href="/architectes" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Architectes d&apos;intérieur →</Link>
            <Link href="/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom Villedoux →</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Votre projet luzien <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>entre les bonnes mains.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite sur place à Saint-Jean-de-Luz. Devis détaillé, finitions premium, respect de la tradition basque. CB Sols, 27 ans de savoir-faire au service des projets d&apos;exception sur la côte basque.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=saint-jean-de-luz-final" variant="primary" size="md">Demander un devis</Button>
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
