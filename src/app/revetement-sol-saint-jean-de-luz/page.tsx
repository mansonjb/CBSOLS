import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: "Revêtement de Sol Saint-Jean-de-Luz | Villas Pays Basque",
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
  { title: "Villas familiales sur l'Océan", desc: "Vous avez une villa à Sainte-Barbe ou Erromardie, vue large. On pose une moquette laine dans la chambre parentale et un tapis sur mesure dans le salon. On raccorde proprement sur le parquet ancien ou les tomettes rouges." },
  { title: "Maisons basques à colombages rouges", desc: "Vous habitez une etxe traditionnelle, parquet châtaignier d'origine. Les pièces sont intimes, les escaliers étroits. On pose dans le respect du bâti, sans rien dénaturer." },
  { title: "Hôtels boutique de la baie", desc: "Vous tenez un Relais & Châteaux ou une maison d'hôtes. On vient en basse saison, vous gardez vos nuitées. Moquette dense traitée anti-tache, acoustique soignée pour les chambres côté rue." },
  { title: "Restaurants gastronomiques de la baie", desc: "Vous avez une table avec vue port ou front de mer. On vient la nuit ou le jour de fermeture. Moquette laine sur thibaude feutre pour l'acoustique, finitions à la hauteur d'une étoile." },
]

const exigences = [
  { title: "On respecte les couleurs du Pays basque", desc: "Rouge basque, blanc de chaux, colombages, tomettes : le Pays basque a son identité forte. Nos coloris s'y accordent sans la trahir. Le rouge se retrouve sur un tapis d'apparat, les laines naturelles dialoguent avec la chaux. L'ambiance reste cohérente avec le lieu." },
  { title: "L'embrun, on le prend en compte", desc: "Le climat atlantique charge en humidité et en sel. On retient des laines traitées, des PVC souples, des bordures cousues main qui tiennent dans le temps. Vous gardez un sol stable, une couleur qui ne ternit pas. Pas de matières fragiles ici, on connaît le terrain." },
  { title: "La vue océan reste la star", desc: "Une villa de Saint-Jean est structurée autour du panorama. Le sol doit accompagner sans concurrencer : tons sablés, beiges chauds, blancs cassés. On soigne particulièrement les seuils sur terrasse et les raccords aux baies. Dans la lumière du soir, ces détails se voient." },
  { title: "Quatre heures de route, bien organisées", desc: "Saint-Jean est à 370 km de notre atelier. Quand on descend, on descend avec l'équipe complète, on dort sur place, on enchaîne les jours. Tout est pré-assemblé à Villedoux avant de partir. Sur site, on pose vite, sans navette inutile." },
  { title: "On travaille en équipe avec les autres artisans", desc: "Sur une villa basque, il y a souvent charpentier, maçon à la chaux, ferronnier. On s'intègre au planning de l'architecte, on passe en avant-dernier pour ne pas abîmer la moquette neuve. Vous n'arbitrez rien, on s'accorde entre nous." },
  { title: "Jamais l'été, planifié dès l'hiver", desc: "Juillet et août, c'est la saison. On vient entre octobre et mai. Pour livrer en juillet, on prend les cotes dès février-mars : il faut le temps de la confection sur mesure. Vous récupérez la villa prête pour les vacances, sans avoir vu un seul rouleau passer." },
]

const materiaux = [
  { name: "Moquette laine vierge tissée EGE", desc: "Notre matière préférée pour les chambres et salons des villas luziennes. La laine se patine en climat atlantique, ne s'écrase pas, vieillit noblement. On choisit avec vous un coloris sablé, terra cotta ou écru, dans la palette basque. Quinze à vingt ans devant vous tranquillement." },
  { name: "Tapis sur mesure laine et soie Brintons", desc: "Pour un salon vue océan ou un hôtel boutique de la baie, le tapis sur mesure fait toute la différence. Bordure cousue main, dimensions au centimètre près, motif adapté à la décoration basque ou contemporaine. Compter dix à seize semaines de fabrication. C'est ce qui sublime une vue déjà exceptionnelle." },
  { name: "Sols Bolon tissés vinyle bord de mer", desc: "Pour les entrées et les zones de passage des villas en front de mer, le Bolon est notre référence. Les embruns, l'humidité, le sable rapporté de la plage, il encaisse. L'esthétique tissée contemporaine s'accorde avec les maisons d'architecte. Entretien simple, quinze à vingt ans en climat atlantique sans broncher." },
  { name: "Tapis tissés Tisca Tiara haute couture", desc: "Pour une villa d'exception ou une suite de Relais & Châteaux, on monte d'un cran. Le suisse, c'est le très haut de gamme. Laine vierge fine, motifs personnalisables, tissage d'une précision rare. C'est l'équivalent d'une haute couture pour le sol. Quand le projet le justifie, le résultat est sans équivalent." },
  { name: "Moquette laine motif basque ou contemporain", desc: "Pour un hôtel boutique luzien, on peut intégrer un motif géométrique discret qui rappelle les motifs basques traditionnels. Ou rester sur un uni chiné dans la palette régionale, selon votre parti pris. Le classement Bfl-s1 est conforme à l'usage public hôtelier. Vos clients sentent immédiatement le soin apporté." },
  { name: "Profilés laiton vieilli et bronze patiné Romus", desc: "Pour les seuils et les raccords entre parquet et moquette, on soigne le détail. On coordonne avec la quincaillerie traditionnelle des maisons basques. Sur les chantiers patrimoniaux exigeants, on peut faire fabriquer du sur mesure. C'est ce genre de chose qu'on remarque à la livraison, et qui fait la différence." },
]

const marques = [
  { name: "EGE Carpets", desc: "Le danois, notre référence pour les villas familiales luziennes et les hôtels boutiques de la côte basque. Leurs gammes Highline et Hospitality posent un cadre immédiatement." },
  { name: "Brintons", desc: "L'Axminster britannique, l'aristocratie de la moquette. Jusqu'à trente-six couleurs sur un motif. On l'appelle pour les grandes villas du Pays basque et les intérieurs d'apparat." },
  { name: "Bolon", desc: "Le suédois du tissé vinyle, notre référence pour les villas en front de mer. Il encaisse les embruns et l'humidité sans broncher. Idéal pour les hôtels de la baie." },
  { name: "Tisca Tiara", desc: "Le suisse, c'est le très haut de gamme. On les sort pour les projets résidentiels d'exception et les suites de Relais & Châteaux du Pays basque. Sans équivalent quand le budget suit." },
  { name: "Gerflor", desc: "Le français de Lyon, que nous connaissons en profondeur. Leurs gammes Mipolam et Texline résistent à l'humidité atlantique sans difficulté. Compatible chauffage au sol, entretien simple." },
  { name: "Forbo", desc: "Quand le projet demande du naturel, on regarde Forbo. Leur Marmoleum est un vrai linoléum à base d'huile de lin. Idéal pour les villas écoresponsables et les maisons basques restaurées." },
  { name: "Object Carpet", desc: "Les allemands, pour les villas d'architecte et les hôtels boutiques à esthétique épurée. Design contemporain affirmé, finitions parfaites." },
  { name: "Hereke", desc: "Les tapis turcs tissés main, en soie ou laine vierge fine. On les pose dans les bibliothèques et salons des grandes villas familiales à esprit classique. Le genre d'objet qui se transmet." },
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
  { q: "Vous venez vraiment à Saint-Jean-de-Luz depuis La Rochelle ?", a: "Oui, sur les projets qui le justifient. Saint-Jean-de-Luz est à 370 km, quatre heures par l'A10 puis l'A63. On organise un déplacement long, l'équipe reste sur place jusqu'à la livraison, hébergement inclus. La distance impose une préparation atelier irréprochable. Tout est pré-assemblé à blanc avant le départ, donc la pose sur site va vite. On intervient régulièrement sur la côte basque, on connaît les contraintes." },
  { q: "Vous travaillez sur les villas familiales du Pays basque ?", a: "Oui, c'est un de nos terrains préférés sur la côte. Sainte-Barbe, Acotz, Erromardie, Lafitenia concentrent un patrimoine de villas transmises de génération en génération. Les parquets anciens, les tomettes basques, la vue océan demandent qu'on les accompagne sans les concurrencer. On intervient avec votre architecte d'intérieur. Les tapis sur mesure et les moquettes laine dans la palette basque trouvent là leur écrin naturel." },
  { q: "Comment vous gérez le climat atlantique et les embruns ?", a: "Les embruns salins et l'humidité atlantique imposent une vraie rigueur sur le choix des matières. On écarte ce qui marche en climat sec et on prend de la laine traitée anti-mites et anti-humidité, du PVC à fort taux de plastifiant qui garde sa souplesse, des tapis à bordure cousue main qui ne bougent pas. Et on soigne particulièrement les raccords aux baies vitrées et aux terrasses pour éviter toute infiltration." },
  { q: "Combien de temps pour un tapis sur mesure ?", a: "Compter dix à seize semaines pour un Brintons Axminster custom avec motif validé sur cartouche. Huit à quatorze semaines pour un Tisca Tiara haute couture. Huit à quatorze pour un Hereke avec bordure cousue main. Ajoutez la confection atelier et la pose sur place. Un projet complet de villa se planifie sur quatre à six mois, à anticiper si la famille arrive en juillet." },
  { q: "Vous intervenez sur les restaurants gastronomiques de la baie ?", a: "Oui. Sur le port de pêche, en centre historique ou côté Ciboure, l'acoustique fait toute la différence à table. Une moquette laine sur thibaude feutre coupe la moitié de la réverbération. Vos clients passent une meilleure soirée. On pose la nuit ou le jour de fermeture, vous ne perdez pas un service. On protège les cuisines, on nettoie tout, au matin la salle est prête." },
  { q: "Vous travaillez dans les maisons basques traditionnelles ?", a: "Oui, et avec beaucoup de respect pour le bâti. Une etxe à Saint-Pée, une maison de centre à Ciboure, une ferme restaurée dans l'arrière-pays, chacune a son âme : parquet châtaignier d'origine, tomettes rouges, escaliers étroits, pièces intimes. On reste dans la tradition régionale : palette sablée, terra cotta, motifs discrets. Pas question d'imposer un parti pris qui trahirait la maison." },
  { q: "Combien de temps tient une moquette laine en front de mer ?", a: "Compter facilement quinze à vingt ans, même en climat atlantique. La laine vierge tolère bien l'humidité ambiante, elle l'absorbe et la restitue sans s'altérer. Les synthétiques, eux, peuvent se déformer. Sur les vestibules et les escaliers, on choisit plutôt une laine tissée serrée avec un motif discret, qui résiste mieux aux passages. Un nettoyage professionnel en fin de saison avant l'hivernage suffit à conserver l'aspect du premier jour." },
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
