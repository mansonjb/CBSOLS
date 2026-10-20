import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Revêtement de Sol après Dégât des Eaux | Devis Assurance',
  description: "Sol abîmé par un dégât des eaux : parquet gonflé, moquette, sol PVC ou stratifié à refaire. CB Sols intervient après séchage, chiffre la réfection et fournit le devis détaillé attendu par votre assurance. La Rochelle et Charente-Maritime.",
  alternates: { canonical: 'https://cbsols.fr/revetement-sol-degat-des-eaux' },
  openGraph: {
    title: 'Revêtement de Sol après Dégât des Eaux | Devis Assurance | CB Sols',
    description: "Réfection de sol après sinistre : parquet, moquette, PVC, stratifié. Visite sur place, mesure de l'humidité, devis chiffré pour l'expert et l'assurance. CB Sols, artisan solier La Rochelle.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-degat-des-eaux.jpg', width: 1200, height: 630 }],
  },
}

// Les 4 piliers du positionnement
const piliers = [
  { title: 'Le devis que votre assurance attend', desc: "Un expert ne se contente pas d'un montant griffonné. Il lui faut un devis détaillé : surfaces, type de revêtement d'origine, préparation du support, dépose, fourniture et pose, ligne par ligne. On a l'habitude de ce formalisme. On rédige un devis clair, chiffré et défendable, que vous transmettez tel quel à votre assureur ou à l'expert mandaté." },
  { title: 'On intervient après séchage', desc: "Reposer un sol sur un support encore humide, c'est le condamner d'avance : cloques, décollement, moisissure qui revient. On mesure le taux d'humidité du support avant toute repose, et on attend qu'il soit sain. C'est la différence entre une réfection qui tient et un deuxième sinistre dans six mois." },
  { title: 'Tous les revêtements, pas qu\'un', desc: "Parquet gonflé, stratifié qui se soulève, moquette imbibée, sol PVC décollé, lino qui a tuilé : chaque matériau réagit différemment à l'eau. On dépose, on diagnostique le support, et on repose le revêtement adapté, à l'identique ou en amélioration selon votre choix et celui de l'assurance." },
  { title: 'Des artisans, pas une hotline', desc: `${company.experience} de pose derrière nous et un atelier à vingt minutes de La Rochelle. On vient voir le chantier, on travaille soigné, on rend un sol propre et fini. Vous avez un seul interlocuteur, Valentin, du relevé jusqu'à la réception.` },
]

// Section 1 : ce qui arrive à un sol après un dégât des eaux
const symptomes = [
  { title: 'Parquet et stratifié qui gonflent', desc: "Le bois et les panneaux stratifiés absorbent l'eau, gonflent et se soulèvent aux joints. Une fois tuilé, un stratifié ne redescend pas : il se remplace. Un parquet massif peut parfois se poncer et se remettre en état, mais seulement après séchage complet et diagnostic." },
  { title: 'Moquette imbibée et odeurs', desc: "Une moquette gorgée d'eau sèche mal, surtout avec sa sous-couche. Au-delà de quelques heures, les risques de moisissure et d'odeur persistante deviennent sérieux. Selon la durée d'immersion et la nature du support, on tranche entre nettoyage en profondeur et remplacement." },
  { title: 'Sol PVC et lino décollés', desc: "L'eau s'infiltre sous les lés ou les dalles, attaque la colle et fait cloquer le revêtement. Un sol PVC peut parfois se reposer si le support est sain, mais souvent la dépose et la repose sont nécessaires pour repartir sur une base propre." },
  { title: 'Support et chape encore humides', desc: "Le vrai sujet est souvent invisible : la chape ou la dalle a pris l'eau. Reposer dessus trop vite, c'est refaire le sinistre. On mesure l'humidité résiduelle et on attend un support sain avant de reposer quoi que ce soit." },
  { title: 'Plinthes, seuils et raccords', desc: "L'eau ne s'arrête pas au revêtement. Plinthes gondolées, barres de seuil décollées, raccords entre pièces à reprendre : la remise en état propre passe par ces finitions, souvent oubliées dans les devis trop rapides." },
  { title: 'Un chantier à chiffrer, pas à improviser', desc: "Chaque sinistre est différent : surface touchée, ancienneté du sol, type de pose, état du support. C'est pour ça qu'un devis sérieux passe par une visite. On regarde, on mesure, on chiffre juste, pour vous et pour l'assurance." },
]

// Par type de revêtement (cards 6)
const parType = [
  { title: 'Parquet massif', desc: "Après séchage complet, un parquet massif peut parfois être sauvé par un ponçage et une remise en finition. Si les lames ont trop travaillé, on remplace les zones atteintes ou l'ensemble. On tranche après avoir vu et mesuré, jamais à l'aveugle." },
  { title: 'Parquet stratifié et flottant', desc: "Le stratifié supporte mal l'eau : dès qu'il gonfle aux joints, il se remplace. On dépose, on vérifie la sous-couche et le support, on sèche, puis on repose un sol neuf, à l'identique ou dans une gamme plus résistante à l'humidité si vous le souhaitez." },
  { title: 'Moquette', desc: "Selon le temps passé sous l'eau et le type de pose, on arbitre entre un nettoyage par injection-extraction poussé et un remplacement. Une moquette sur sous-couche imbibée est rarement récupérable. Sur dalles, on peut parfois remplacer seulement la zone touchée." },
  { title: 'Sol PVC et lino', desc: "On dépose les lés ou dalles décollés, on traite le support, on sèche, puis on repose un revêtement résilient. C'est l'occasion de passer sur un PVC plus adapté aux pièces humides, soudé et remonté en plinthe, si la configuration s'y prête." },
  { title: 'Sol souple en pièce humide', desc: "Salle de bain, buanderie, cuisine : après sinistre, on privilégie des solutions pensées pour l'eau, avec remontées en plinthe à gorge et soudure des joints. Moins de recoins, moins de reprises d'humidité, un sol qui vieillit mieux." },
  { title: 'Préparation du support', desc: "Avant toute repose : dépose de l'ancien sol, grattage de la colle, ragréage si besoin, contrôle de l'humidité. Un beau sol commence par un support sain et plan. C'est la partie invisible qui décide si la réfection tiendra dans le temps." },
]

// Étapes / délais (table : pistes, rien de figé)
const etapes = [
  { phase: 'Déclaration du sinistre', qui: 'Vous, auprès de votre assureur', cle: "En général sous 5 jours ouvrés. On vous aide avec le devis si besoin." },
  { phase: 'Recherche de fuite', qui: 'Assureur ou plombier', cle: "Indispensable avant de reposer : la cause doit être traitée." },
  { phase: 'Séchage du support', qui: 'Naturel ou assécheurs', cle: "De quelques jours à plusieurs semaines selon l'ampleur." },
  { phase: 'Visite et devis CB Sols', qui: 'Valentin, sur place', cle: "Relevé, mesure d'humidité, devis détaillé pour l'assurance." },
  { phase: 'Passage de l\'expert', qui: 'Expert mandaté', cle: "Au-delà d'un certain montant, selon votre contrat." },
  { phase: 'Accord d\'indemnisation', qui: 'Vous et l\'assureur', cle: "Le devis sert de base au chiffrage de l'indemnité." },
  { phase: 'Dépose et préparation', qui: 'CB Sols', cle: "Ancien sol, colle, ragréage, contrôle final du support." },
  { phase: 'Repose du revêtement', qui: 'CB Sols', cle: "Pose, finitions, plinthes, seuils. Pièce rendue propre et finie." },
]

// Process CB Sols (8 étapes)
const process = [
  { step: 'Premier contact', desc: "Vous nous appelez ou vous passez par le formulaire. On comprend vite la situation : pièce touchée, type de sol, où en est le dossier assurance." },
  { step: 'Visite sur place', desc: "On vient voir le sol sinistré : surfaces, support, type de pose, étendue des dégâts. Rien ne remplace l'œil sur le terrain pour chiffrer juste." },
  { step: "Mesure de l'humidité", desc: "On contrôle l'humidité résiduelle du support. Si c'est encore humide, on le dit, et on attend. Reposer trop tôt, c'est préparer le sinistre suivant." },
  { step: 'Devis détaillé', desc: "On rédige un devis clair et ligne par ligne, pensé pour l'expert et l'assurance : dépose, préparation, fourniture, pose, finitions." },
  { step: "Échange avec l'assurance", desc: "On adapte le devis aux demandes de l'expert si besoin, on précise, on justifie. On a l'habitude de ce dialogue." },
  { step: 'Préparation du support', desc: "Dépose de l'ancien revêtement, grattage, ragréage, traitement du support. La base doit être saine et plane avant la repose." },
  { step: 'Repose soignée', desc: "Pose par nos équipes, à l'identique ou en amélioration selon l'accord : parquet, stratifié, moquette, PVC. Plinthes et seuils repris." },
  { step: 'Réception', desc: "On vous rend une pièce propre, finie, prête à vivre. Et les documents utiles pour clôturer sereinement le dossier." },
]

// Cibles
const cibles = [
  { nom: 'Particuliers', detail: "Votre maison ou votre appartement a pris l'eau. Vous voulez un sol refait proprement et un devis que l'assurance accepte sans discuter. On gère les deux." },
  { nom: 'Syndics et copropriétés', detail: "Dégât des eaux entre étages, parties communes touchées : un interlocuteur fiable, qui rend un devis conventionné, dialogue avec l'expert et intervient proprement en site occupé." },
  { nom: 'Gestionnaires et bailleurs', detail: "Logement loué sinistré, remise en état entre deux locataires : réfection rapide, devis clair et coordination avec l'assurance pour ne pas laisser un bien vide trop longtemps." },
  { nom: 'Commerces et bureaux', detail: "Local professionnel inondé : on cale l'intervention pour limiter l'arrêt d'activité, on chiffre pour l'assurance, et on repose un sol adapté au passage de votre établissement." },
]

// L'essentiel (GEO citable)
const essentiel = [
  "CB Sols remet en état les sols abîmés par un dégât des eaux : parquet, stratifié, moquette, sol PVC et lino, pour particuliers et professionnels.",
  "On intervient après le séchage du support : le taux d'humidité est mesuré avant toute repose, pour éviter un second sinistre (cloques, décollement, moisissure).",
  "On rédige un devis détaillé, ligne par ligne, conçu pour être transmis à votre assurance ou à l'expert mandaté.",
  "La visite sur place est indispensable : chaque sinistre diffère par la surface, l'ancienneté du sol, le type de pose et l'état du support.",
  "Selon l'accord avec l'assurance, le revêtement est reposé à l'identique ou dans une gamme plus adaptée à l'humidité.",
  "Entreprise basée à Villedoux près de La Rochelle. Interventions en Charente-Maritime, sur l'Île de Ré, l'Île d'Oléron et le secteur rochelais.",
]

// FAQ
const faq = [
  { q: 'Mon assurance me demande un devis pour le sol, vous le faites ?', a: "Oui, c'est l'une de nos interventions les plus fréquentes. On se déplace pour voir le sol sinistré, on relève les surfaces et le type de revêtement, on mesure l'état du support, puis on rédige un devis détaillé : dépose, préparation, fourniture, pose, finitions, ligne par ligne. C'est exactement le document qu'attend un expert ou un gestionnaire de sinistre. Vous le transmettez tel quel à votre assurance." },
  { q: 'Faut-il attendre que le sol soit sec avant de le refaire ?', a: "Oui, et c'est un point sur lequel on ne transige pas. Reposer un revêtement sur une chape ou une dalle encore humide, c'est condamner le nouveau sol : cloques, décollement, moisissure qui revient par en dessous. On mesure le taux d'humidité résiduelle du support avant toute repose. Si c'est encore trop humide, on vous le dit et on attend, au besoin avec des assécheurs. Un séchage peut prendre de quelques jours à plusieurs semaines selon l'ampleur du dégât." },
  { q: 'Combien de temps faut-il pour sécher un support après un dégât des eaux ?', a: "Il n'y a pas de durée unique honnête à donner. Cela dépend de la quantité d'eau, de la nature du support, de la ventilation de la pièce et de l'usage ou non d'assécheurs. Une infiltration légère peut sécher en quelques jours, une dalle gorgée d'eau demander plusieurs semaines. Plutôt que d'annoncer un délai fixe, on mesure l'humidité sur place et on repose quand le support est réellement sain. C'est la seule méthode fiable." },
  { q: 'Un parquet gonflé par l\'eau est-il forcément à changer ?', a: "Pas toujours. Un parquet massif peut parfois être récupéré après séchage complet, par un ponçage et une remise en finition, si les lames n'ont pas trop travaillé. Un parquet stratifié ou flottant qui a gonflé aux joints, en revanche, ne redescend pas : il se remplace. On tranche après avoir vu le sol et mesuré le support, jamais à distance sur photo." },
  { q: 'Peut-on récupérer une moquette après un dégât des eaux ?', a: "Cela dépend du temps passé sous l'eau et du type de pose. Une moquette brièvement mouillée en surface peut parfois être sauvée par un nettoyage en profondeur par injection-extraction et un séchage rapide. Une moquette gorgée d'eau avec sa sous-couche, ou restée humide plusieurs jours, est rarement récupérable : les risques de moisissure et d'odeur persistante sont trop élevés. Sur une pose en dalles, on peut parfois remplacer uniquement la zone touchée." },
  { q: 'Qu\'est-ce que la convention IRSI et est-ce que ça me concerne ?', a: "La convention IRSI est un accord entre assureurs qui organise la gestion des dégâts des eaux et incendies jusqu'à 5 000 € HT de dommages par local sinistré, principalement en immeuble collectif et copropriété. En dessous d'un certain montant, l'assureur indemnise souvent sans expertise ; au-delà, un expert unique est généralement mandaté. Les règles exactes, les seuils et la franchise dépendent de votre contrat. Notre rôle à nous est simple et constant : vous fournir un devis de réfection chiffré et défendable, quel que soit le cadre d'indemnisation." },
  { q: 'C\'est quoi la vétusté et comment ça joue sur le remboursement ?', a: "La vétusté est la perte de valeur d'un bien liée à son âge et à son usure. Beaucoup de contrats appliquent un coefficient de vétusté sur un sol ancien : l'assurance ne rembourse alors pas la totalité du prix d'un sol neuf. Certains contrats proposent une garantie « valeur à neuf » qui réduit ou annule cet abattement. C'est un point à vérifier dans votre contrat. Un devis clair et détaillé aide justement l'expert à chiffrer correctement et à limiter les mauvaises surprises." },
  { q: 'Dois-je faire la recherche de fuite avant de vous appeler ?', a: "La recherche de fuite et la réparation de la cause sont indispensables avant toute repose : inutile de refaire un sol si l'eau revient. C'est souvent l'assureur qui organise cette recherche, parfois un plombier. Vous pouvez tout à fait nous contacter en parallèle : on vient faire le relevé et le devis pendant que le support sèche, pour ne pas perdre de temps sur le dossier." },
  { q: 'Intervenez-vous en copropriété et en logement loué ?', a: "Oui. On intervient aussi bien chez les particuliers que pour les syndics, les copropriétés, les bailleurs et les gestionnaires. Dégât des eaux entre étages, parties communes, logement à remettre en état entre deux locataires : on fournit un devis conventionné, on dialogue avec l'expert et on travaille proprement, y compris quand les lieux restent occupés." },
  { q: 'Pouvez-vous reposer un autre revêtement que celui d\'origine ?', a: "Oui, selon votre choix et l'accord avec l'assurance. Un sinistre est parfois l'occasion de passer sur un revêtement mieux adapté, par exemple un sol PVC résilient et soudé dans une pièce exposée à l'eau, à la place d'un stratifié fragile. L'assurance indemnise en général sur la base du sol d'origine ; la différence éventuelle vers une gamme supérieure reste à votre charge. On vous explique clairement ce qui est pris en charge et ce qui ne l'est pas." },
  { q: 'Faut-il obligatoirement une visite ou un devis sur photo suffit ?', a: "La visite est indispensable pour un devis sérieux. Une photo ne dit pas l'état réel du support, son taux d'humidité, le type de pose d'origine, ni l'étendue exacte des dégâts aux plinthes et aux raccords. Chiffrer à l'aveugle, c'est prendre le risque d'un devis faux, refusé par l'expert ou insuffisant pour vraiment remettre le sol en état. On préfère venir voir : c'est gratuit et sans engagement." },
  { q: 'Travaillez-vous directement avec les assurances et les experts ?', a: "On a l'habitude du dialogue avec les experts et les gestionnaires de sinistre. On rédige des devis au bon format, on les ajuste si l'expert demande des précisions, on justifie les postes. On ne se substitue pas à votre assureur et on ne gère pas votre dossier à votre place, mais on fournit la pièce technique dont tout le monde a besoin : un devis de réfection clair et fiable." },
  { q: 'Combien coûte la réfection d\'un sol après dégât des eaux ?', a: "Impossible de donner un prix unique : tout dépend de la surface touchée, du revêtement, de l'état du support et de la préparation nécessaire. C'est précisément le rôle du devis, établi après visite. Dans le cadre d'un dégât des eaux, cette réfection est généralement prise en charge par l'assurance, sous réserve de votre contrat, de la franchise et de l'éventuelle vétusté. On chiffre le vrai coût, vous voyez clair, l'assurance aussi." },
  { q: 'Dans quel secteur intervenez-vous pour un dégât des eaux ?', a: "CB Sols est basé à Villedoux, près de La Rochelle, et intervient en Charente-Maritime, sur l'Île de Ré, l'Île d'Oléron, ainsi qu'à Rochefort, Saintes, Royan et le secteur rochelais. Pour un chantier plus éloigné, parlons-en : on étudie selon l'ampleur du projet." },
]

export default function RevetementSolDegatDesEauxPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/revetement-sol-degat-des-eaux#service',
        name: 'Réfection de revêtement de sol après dégât des eaux',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
          { '@type': 'Place', name: 'La Rochelle' },
          { '@type': 'Place', name: 'Île de Ré' },
          { '@type': 'Place', name: "Île d'Oléron" },
        ],
        serviceType: "Remise en état et remplacement de sol après sinistre dégât des eaux, devis pour assurance",
        description: "Réfection de sol après dégât des eaux : parquet, stratifié, moquette, sol PVC et lino. Intervention après séchage du support, mesure de l'humidité, devis détaillé pour l'assurance et l'expert, dépose et repose soignée.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Revêtement de sol après dégât des eaux', item: 'https://cbsols.fr/revetement-sol-degat-des-eaux' },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'Refaire un sol après un dégât des eaux',
        description: "Méthode CB Sols pour remettre en état un sol sinistré, de la déclaration à l'assurance jusqu'à la repose du revêtement.",
        step: process.map((p, i) => ({ '@type': 'HowToStep', position: i + 1, name: p.step, text: p.desc })),
      },
      {
        '@type': 'WebPage',
        '@id': 'https://cbsols.fr/revetement-sol-degat-des-eaux#webpage',
        url: 'https://cbsols.fr/revetement-sol-degat-des-eaux',
        name: 'Revêtement de sol après dégât des eaux',
        description: "Service CB Sols : réfection de sol après dégât des eaux, devis détaillé pour l'assurance, intervention après séchage du support, en Charente-Maritime et dans le secteur de La Rochelle.",
        dateModified: '2026-10-20',
        inLanguage: 'fr-FR',
        isPartOf: { '@id': 'https://cbsols.fr/#website' },
        about: { '@id': 'https://cbsols.fr/revetement-sol-degat-des-eaux#service' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Sol après dégât des eaux</span>
          </div>
          <div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              Comment refaire un sol{' '}
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>abîmé par un dégât des eaux ?</em>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '900px' }}>
              Parquet qui gonfle, moquette imbibée, sol PVC qui cloque, stratifié qui se soulève : après un dégât des eaux, la tentation est de tout refaire vite. C&apos;est l&apos;erreur. Le vrai sujet, c&apos;est le support en dessous, souvent encore humide. Reposer trop tôt, c&apos;est préparer le sinistre suivant. Notre métier ici, c&apos;est de venir voir, de mesurer, de vous dire la vérité sur ce qui est récupérable, et de rédiger le devis détaillé que votre assurance attend. Derrière tout ça, {company.experience} de pose et un atelier à vingt minutes de La Rochelle.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/contact?from=revetement-sol-degat-des-eaux" variant="primary" size="md">Demander un devis assurance</Button>
              <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* L'essentiel (résumé citable) */}
      <section style={{ padding: '3.5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>L&apos;essentiel en bref</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '0.9rem 2.5rem' }}>
            {essentiel.map((t, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.95rem', color: 'var(--dark)', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--terra)', fontWeight: 800, flexShrink: 0, marginTop: '0.05rem' }}>•</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 piliers du positionnement */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pourquoi passer par nous</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Le bon devis, le bon timing, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>et un sol qui tient.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {piliers.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce qui arrive à un sol */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Ce que l&apos;eau fait vraiment à un sol</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Les dégâts visibles, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>et celui qu&apos;on ne voit pas.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {symptomes.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{i + 1}. {s.title}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Par type de revêtement (cards) */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Chaque matériau réagit autrement</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Réparer ou remplacer ? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>Ça se décide sur place.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '820px' }}>
            Un parquet, une moquette et un sol PVC ne se comportent pas de la même façon face à l&apos;eau. Certains se récupèrent après séchage, d&apos;autres se remplacent. On diagnostique matériau par matériau, support compris, avant de trancher.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {parType.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Le devis / travailler avec l'assurance */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre vrai rôle dans votre dossier</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', maxWidth: '900px' }}>
            On fournit le devis <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>que l&apos;assurance et l&apos;expert attendent.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem', maxWidth: '900px' }}>
            Dans un dossier de dégât des eaux, la réfection du sol est très souvent prise en charge par l&apos;assurance, sous réserve de votre contrat, de la franchise et de l&apos;éventuelle vétusté. Mais pour chiffrer l&apos;indemnité, tout le monde a besoin de la même chose : un devis de réfection clair et détaillé. C&apos;est précisément ce qu&apos;on produit. Dépose de l&apos;ancien sol, préparation du support, fourniture, pose, plinthes et finitions : chaque poste est chiffré, lisible par un expert comme par un gestionnaire de sinistre.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, margin: '0 0 2.5rem', maxWidth: '900px' }}>
            On a l&apos;habitude de ce dialogue. Si l&apos;expert demande une précision, on l&apos;apporte. S&apos;il faut justifier un poste, on le justifie. On ne gère pas votre dossier à votre place et on ne se substitue pas à votre assureur, mais on vous donne la pièce technique qui fait avancer le règlement. Et selon le cadre, convention IRSI ou droit commun, le principe reste le même : un devis juste protège vos intérêts.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              { t: 'Un devis au bon format', d: "Détaillé, chiffré ligne par ligne, avec les surfaces et le type de revêtement. Le document qu'un expert peut lire et valider sans aller-retour." },
              { t: 'Le dialogue avec l\'expert', d: "On ajuste, on précise, on justifie les postes si on nous le demande. On parle le même langage technique." },
              { t: 'La vérité sur la vétusté', d: "On vous explique ce qui relève du neuf, ce qui peut subir un abattement de vétusté, et pourquoi. Pas de fausse promesse." },
              { t: 'À l\'identique ou en mieux', d: "Repose du même sol, ou passage vers une gamme plus adaptée à l'humidité. On vous dit ce qui est pris en charge et ce qui reste à votre charge." },
            ].map((b, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra)', marginBottom: '0.6rem' }}>{b.t}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{b.d}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2rem', padding: '1.25rem 1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--dark)' }}>À savoir :</strong> la convention IRSI encadre entre assureurs la gestion des dégâts des eaux jusqu&apos;à 5 000 € HT de dommages par local, surtout en immeuble et copropriété. Les seuils d&apos;expertise, la franchise et la vétusté dépendent de votre contrat. Cette page donne un repère général et ne remplace pas l&apos;avis de votre assureur.
          </p>
        </div>
      </section>

      {/* CTA inline 1 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un sinistre à faire chiffrer ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            On vient voir le sol et on le chiffre pour l&apos;assurance.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Valentin se déplace, regarde le sol sinistré, mesure l&apos;état du support et vous remet un devis détaillé, prêt à transmettre à votre assureur. Visite gratuite et sans engagement.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=revetement-sol-degat-des-eaux" variant="primary" size="md">Demander ma visite</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Séchage / humidité (dark) */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra-on-dark)', marginBottom: '1.5rem' }}>Le point qu&apos;on ne néglige jamais</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.9rem, 3.4vw, 3rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', maxWidth: '960px' }}>
            On ne repose jamais <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>sur un support humide.</em>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(248, 245, 238, 0.78)', maxWidth: '900px', margin: '0 0 2.5rem', lineHeight: 1.8 }}>
            C&apos;est l&apos;erreur la plus coûteuse après un dégât des eaux : refaire le sol trop vite, sur une chape qui a encore de l&apos;eau dedans. Quelques mois plus tard, le nouveau revêtement cloque, se décolle, ou la moisissure revient par en dessous. Et là, l&apos;assurance ne repasse pas. On préfère mesurer, attendre le temps qu&apos;il faut, et reposer sur un support réellement sain. C&apos;est moins spectaculaire qu&apos;une intervention en 48 heures, mais c&apos;est ce qui fait qu&apos;un sol refait tient dix ans au lieu de six mois.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { t: 'Mesure de l\'humidité', d: "On contrôle l'humidité résiduelle du support avant toute décision de repose. Un chiffre, pas une impression." },
              { t: 'Le temps du séchage', d: 'De quelques jours à plusieurs semaines selon le dégât. On fait le devis pendant ce temps pour ne pas perdre le dossier.' },
              { t: 'Traitement du support', d: "Grattage de l'ancienne colle, ragréage, remise à plat. La base conditionne tout le reste." },
              { t: 'Repose quand c\'est sain', d: 'On repose seulement quand le support est prêt. Pas de pose de confort sur un sol qui va re-sinistrer.' },
            ].map((b, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid rgba(248, 245, 238, 0.15)', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra-on-dark)', marginBottom: '0.6rem' }}>{b.t}</div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.7)', lineHeight: 1.65, margin: 0 }}>{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tableau étapes (quick reference) */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Le dossier, étape par étape</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            À titre de repère, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>comment se déroule un dossier.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '820px' }}>
            Rien de figé ici : l&apos;ordre et les délais varient selon votre assureur, l&apos;ampleur du sinistre et votre contrat. C&apos;est juste une idée du chemin. Les étapes qui nous concernent, ce sont la visite, le devis, la préparation et la repose.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: '640px' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Étape</th>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Qui s&apos;en occupe</th>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>À retenir</th>
                </tr>
              </thead>
              <tbody>
                {etapes.map((r, i) => (
                  <tr key={i}>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--border)', fontWeight: 700, color: 'var(--dark)' }}>{r.phase}</td>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--dark)' }}>{r.qui}</td>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--muted)' }}>{r.cle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Du premier appel à la pièce rendue</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Huit étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de la déclaration à la repose.</em>
          </h2>
          <div data-flow="steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {process.map((p, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
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

      {/* Cibles */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>À qui on parle</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.03em' }}>
            Particuliers, copros, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>pros : on gère les trois.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: '1.25rem' }}>
            {cibles.map((m, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra)', marginBottom: '0.5rem' }}>{m.nom}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savoir-faire / preuve honnête */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pourquoi nous faire confiance</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.5rem', letterSpacing: '-0.03em', maxWidth: '900px' }}>
            Des artisans soliers, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>pas des poseurs de passage.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem', maxWidth: '900px' }}>
            CB Sols, c&apos;est {company.experience} de pose de revêtements de sol en Charente-Maritime : parquet, moquette, sol PVC et lino, chez les particuliers comme dans les hôtels, restaurants, commerces et établissements recevant du public. La préparation de support, le diagnostic d&apos;humidité, la dépose propre et la repose soignée sont notre quotidien. C&apos;est exactement ce savoir-faire qu&apos;on mobilise sur un dégât des eaux.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, margin: 0, maxWidth: '900px' }}>
            On ne sous-traite pas la pose à des équipes qu&apos;on ne connaît pas. Vous avez un seul interlocuteur, Valentin, du relevé jusqu&apos;à la réception. Et un atelier à Villedoux, à vingt minutes de La Rochelle, où l&apos;on confectionne aussi tapis et moquettes sur mesure. Un travail d&apos;artisan, du devis au dernier raccord de plinthe.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/realisations" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--terra)', textDecoration: 'none' }}>Voir nos réalisations →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Les questions qu&apos;on nous pose</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Dégât des eaux et sol, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses d&apos;artisan.</em>
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

      {/* Voir aussi */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Voir aussi</div>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Un sinistre est souvent l&apos;occasion de repartir sur un sol mieux adapté. Découvrez nos prestations de pose, d&apos;entretien et de devis.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            <Link href="/devis-revetement-sol" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Devis revêtement de sol →</Link>
            <Link href="/nettoyage-moquettes" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Nettoyage de moquettes →</Link>
            <Link href="/nettoyage-sols" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Nettoyage de sols →</Link>
            <Link href="/particuliers" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Pour les particuliers →</Link>
            <Link href="/realisations" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Nos réalisations →</Link>
            <Link href="/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom Villedoux →</Link>
          </div>
        </div>
      </section>

      {/* CTA final dark */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Un dégât des eaux a abîmé vos sols ? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>On s&apos;en occupe.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '680px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            On vient voir le sol sinistré, on mesure l&apos;état du support, et on vous remet un devis détaillé prêt pour votre assurance. Puis on repose un sol propre, quand le support est sain. Interventions à La Rochelle, en Charente-Maritime, sur l&apos;Île de Ré et l&apos;Île d&apos;Oléron.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=revetement-sol-degat-des-eaux" variant="primary" size="md">Demander un devis assurance</Button>
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
