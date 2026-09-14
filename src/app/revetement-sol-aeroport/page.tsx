import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Revêtement de Sol Aéroport & Aérogare | Fort Trafic, Normes ERP',
  description: "Pose et rénovation de sol pour aéroports et aérogares : hall, embarquement, salons, bureaux. Sol PVC et moquette classés feu Cfl-s1, PMR, antidérapants. Intervention en site occupé, travaux de nuit. CB Sols, La Rochelle.",
  alternates: { canonical: 'https://cbsols.fr/revetement-sol-aeroport' },
  openGraph: {
    title: 'Revêtement de Sol Aéroport & Aérogare | Fort Trafic, Normes ERP',
    description: "Sol technique pour aérogares : classé feu Cfl-s1, PMR podotactile, antidérapant, trafic classe 34. Pose par phases sans fermer le terminal. CB Sols, artisan La Rochelle.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/revetement-sol-aeroport.jpg', width: 1200, height: 630 }],
  },
}

const zones = [
  { title: 'Hall départ et arrivée', desc: "Le point de passage obligé. Semelles mouillées, roulettes de valises, chariots à bagages : ça défile du premier au dernier vol. Un sol qui se raye ici se voit de loin. On y déroule du PVC compact ou du LVT en classe 34, soudé à chaud pour qu'aucun joint ne s'ouvre, et qui se relave d'un simple passage d'autolaveuse." },
  { title: "Salle d'embarquement et attente", desc: "Les gens y patientent, assis, debout, parfois une heure. Ce qu'ils entendent compte autant que ce qu'ils voient. Dalles de moquette qui cassent l'écho et réchauffent la salle. Et si le sol fatigue devant les sièges, on change les dalles concernées, pas toute la pièce." },
  { title: 'Comptoirs enregistrement', desc: "Une file qui serpente, des balances, des chariots chargés qui tournent au même endroit toute la journée. Usure ponctuelle mais brutale. Revêtement anti-poinçonnement sous les zones de charge, contrastes au sol pour canaliser le flux, seuils traités pour que rien n'accroche." },
  { title: "Salon VIP et aviation d'affaires", desc: "L'endroit où l'aéroport soigne ses meilleurs passagers. On quitte le technique pur pour la matière : moquette laine, tapis sur mesure cousus à l'atelier, calepinage sans raccord visible. Exactement le geste qu'on maîtrise déjà sur les cabines de jet privé." },
  { title: 'Bureaux et administratif exploitant', desc: "Derrière les guichets, des plateaux entiers : exploitant, compagnies, sûreté. Open space veut dire bruit. Dalles de moquette acoustiques, posées un plateau à la fois, la nuit, sans jamais couper le travail des équipes." },
  { title: 'Circulations, sanitaires et sas', desc: "Les coulisses, là où l'hygiène se joue vraiment. PVC en lés soudé et remonté en plinthe à gorge, sans recoin où la saleté s'installe. Aux portes, un tapis de propreté encastré arrête l'eau et le sable avant qu'ils n'entrent dans le terminal." },
]

const specs = [
  { title: 'Réaction au feu', desc: "Cfl-s1. C'est le classement qu'exige un ERP de cette taille, et la première ligne que lit la commission de sécurité. On arrive avec les procès-verbaux de classement et la traçabilité des lots. Pas avec des promesses." },
  { title: 'Accessibilité PMR', desc: "Un aéroport doit se traverser presque les yeux fermés. Bandes d'éveil podotactiles aux points sensibles, contraste visuel des cheminements, seuils sans ressaut. Le sol guide au même titre que la signalétique." },
  { title: 'Antidérapance', desc: "L'eau entre par les portes, stagne aux sas, près des sanitaires. Un sol glissant à cet endroit, sur ce volume de monde, c'est la chute assurée. On met le bon classement de glissance là où il faut, sans transformer le reste en papier de verre." },
  { title: 'Trafic intensif', desc: "On ne parle pas d'un salon qui voit vingt personnes par jour. Une aérogare, c'est des dizaines de milliers de passages. Donc du 33 ou du 34, l'usage le plus dur du barème, celui qui garde son aspect quand tout le reste aurait déjà rendu les armes." },
  { title: 'Acoustique', desc: "Un terminal est déjà un brouhaha permanent. Inutile d'en rajouter avec un sol dur qui renvoie tout. Moquette et sous-couches avalent le bruit d'impact dans les salles d'attente, les salons et les bureaux. Des décibels gagnés sans y penser." },
  { title: 'Hygiène', desc: "Un sol d'aéroport se nettoie la nuit, vite, tous les jours. Donc aucun joint ouvert, aucun angle mort : lés soudés à chaud, plinthes à gorge, surfaces qui rendent l'autolaveuse efficace dès le premier passage." },
]

const produits = [
  { name: 'PVC compact et LVT haute densité', desc: "Le cheval de bataille des zones qui prennent tout : hall, circulations, comptoirs. Couche d'usure épaisse, feu Cfl-s1, trafic 34, pose soudée pour une surface d'un seul tenant. Décors bois, béton ou pierre : ça résiste comme un sol technique et ça ressemble à un beau sol." },
  { name: 'Dalles de moquette contract', desc: "Pour tout ce qui doit être confortable et silencieux : embarquement, salons, bureaux. L'atout de la dalle, c'est la réparation. Une zone s'use devant les sièges ? On remplace vingt dalles en une nuit, et le lendemain personne ne voit la différence." },
  { name: 'Moquette laine et tapis sur mesure', desc: "La pièce maîtresse des salons VIP. Laine véritable, toucher dense, tapis taillés au millimètre à l'atelier de Villedoux, ourlets cousus main. Le même geste que sur un tapis de cabine d'avion d'affaires, transposé au sol du terminal." },
  { name: 'Tapis de propreté grande dimension', desc: "La première ligne de défense, encastrée aux entrées. Il attrape l'eau, le sable et les cailloux avant qu'ils ne rayent tout le reste. Bien dimensionné, il fait durer chacun des sols posés derrière lui." },
]

const process = [
  { step: 'Relevé en exploitation', desc: "On vient voir le sol vivant, en plein fonctionnement. Relevé zone par zone, échange avec le responsable technique, repérage des accès et des créneaux réellement disponibles. C'est là qu'on comprend le vrai chantier, pas sur un plan." },
  { step: 'Étude produits et normes', desc: "À chaque zone son revêtement, choisi sur le trafic, le classement feu Cfl-s1, la glissance et l'accessibilité PMR. On monte le dossier technique et les PV de classement en même temps que le devis, jamais après coup." },
  { step: 'Phasage et planning', desc: "Le nerf de la guerre. On découpe le chantier en zones assez petites pour ne jamais bloquer un flux, et on cale les interventions sur les nuits et les heures creuses. Le planning est validé avec l'exploitant avant qu'on touche au premier mètre carré." },
  { step: 'Coordination sûreté', desc: "Zone réservée, règles strictes. Badges, habilitations, escorte si besoin, contrôle du matériel qui entre. On prépare tout ça en amont et on s'aligne sur les autres corps d'état déjà présents. La sûreté ne se négocie pas, on s'y plie." },
  { step: 'Pose par zones', desc: "Dépose, ragréage, pose soudée, finitions, nettoyage. Chaque zone repart propre et opérationnelle avant l'ouverture, les ouvrages protégés pour que les lots suivants ne les abîment pas. Au matin, c'est simple : on n'a pas existé." },
  { step: 'Réception et dossier', desc: "On vous remet le dossier complet : PV de classement au feu, fiches techniques, numéros de lot. De quoi passer la commission de sécurité sans chercher un papier, et garder une traçabilité propre pour la suite." },
]

const clients = [
  { nom: 'Aéroports régionaux', detail: "Notre cœur de cible. Des aérogares à taille humaine qu'on rénove par tranches, sans jamais tout fermer. Le format exact où notre méthode de phasage fait la différence." },
  { nom: "Aviation d'affaires et FBO", detail: "Terminaux privés, salons d'accueil, hangars. Le niveau d'exigence d'un client qui voyage en jet, qu'on connaît déjà par notre travail sur les cabines." },
  { nom: 'Aéroclubs et aérodromes', detail: "Club-house, salle de briefing, accueil. Des chantiers courts, un seul interlocuteur, une réactivité que les gros mastodontes ne peuvent pas offrir." },
  { nom: 'Salons VIP et lounges', detail: "Salons compagnies, espaces cartes de fidélité. Ici, c'est la matière et le silence qui parlent : laine, tapis sur mesure, raccords invisibles." },
  { nom: 'Zones commerciales du terminal', detail: "Boutiques, restauration, services, côté ville comme côté piste. Des sols qui tiennent le passage sans casser l'ambiance, posés aux horaires qui arrangent l'exploitant." },
  { nom: 'Bureaux et locaux exploitant', detail: "Plateaux administratifs, sûreté, back-office. Dalles acoustiques posées plateau par plateau, la nuit, pour que personne ne perde une journée de travail." },
]

const aeroports = [
  { nom: 'La Rochelle Île de Ré', detail: "Notre aéroport local, à vingt minutes de l'atelier de Villedoux. Réactivité maximale, pour les interventions programmées comme pour les coups de fil de dernière minute." },
  { nom: 'Rochefort Charente-Maritime', detail: "Plateforme et zone aéronautique du bassin rochefortais, à un quart d'heure de nos équipes." },
  { nom: 'Angoulême Cognac', detail: "Aéroport du sud Charente, accessible depuis notre base pour les chantiers planifiés en tranches." },
  { nom: 'Niort Marais Poitevin', detail: "Aérodrome des Deux-Sèvres, à portée de main pour rénover un club-house ou un espace d'accueil." },
  { nom: 'Poitiers Biard', detail: "Aéroport de la Vienne, dans notre rayon d'intervention élargi Nouvelle-Aquitaine." },
  { nom: 'La Roche-sur-Yon Les Ajoncs', detail: "Aérodrome vendéen, couvert par notre zone d'intervention nord." },
  { nom: "Les Sables d'Olonne Talmont", detail: "Plateforme littorale vendéenne, chantiers calés de préférence en intersaison." },
  { nom: "Île d'Yeu", detail: "Aérodrome insulaire, desservi avec l'habitude qu'on a des chantiers sur les îles du littoral." },
  { nom: 'Royan Médis', detail: "Aérodrome de la presqu'île royannaise, en plein dans notre secteur historique." },
  { nom: 'Bordeaux Mérignac', detail: "Grand aéroport régional : bureaux, salons et zones tertiaires, sur chantiers programmés à l'avance." },
  { nom: 'Saintes Thénac', detail: "Aérodrome saintongeais et son club, à moins d'une heure de l'atelier." },
  { nom: 'Fontenay-le-Comte', detail: "Aérodrome du sud Vendée, dans notre zone d'intervention nord." },
]

const faq = [
  { q: "Quelle norme de feu s'applique au sol d'un aéroport ?", a: "Une aérogare est un ERP de grande capacité : le sol doit être classé au feu selon la norme EN 13501-1, en pratique Cfl-s1 dans les circulations et les zones publiques, c'est-à-dire peu inflammable et à faible dégagement de fumée. Concrètement, on ne pose que des produits qui ont ce PV de classement à jour, et on garde la traçabilité des lots. C'est précisément le dossier que réclame la commission de sécurité, et c'est nous qui vous le fournissons, prêt à présenter." },
  { q: "Pouvez-vous intervenir sans fermer l'aérogare ?", a: "Oui, c'est même toute la méthode. On ne demande jamais la fermeture du terminal. Le chantier est découpé en zones et programmé la nuit ou en heures creuses, hors des pics de vols. Une zone est déposée, préparée, posée et relavée dans la même fenêtre, puis rendue au public avant la réouverture. Le passager du lendemain marche sur un sol neuf sans avoir vu l'ombre d'un chantier." },
  { q: "Comment gérez-vous l'accès en zone réservée et la sûreté ?", a: "Au pied de la lettre. Selon la zone, cela passe par des badges temporaires, des habilitations, parfois une escorte par un agent de l'exploitant, et le contrôle de tout le matériel qui entre. On règle ces formalités avec vos équipes avant de démarrer, et on cale notre présence sur celle des autres intervenants. La sûreté d'un aéroport ne se négocie pas : on s'y plie, et ça fait partie du métier." },
  { q: "Quel revêtement pour un hall à très fort passage ?", a: "Un PVC compact ou un LVT haute densité, en trafic 34 et feu Cfl-s1, posé en lés soudés à chaud. On obtient une surface continue, étanche, sans joint où la crasse s'accroche, capable d'encaisser des dizaines de milliers de passages, de roulettes et de chariots par jour sans se marquer. C'est aussi le sol le plus rentable sur la durée : il se nettoie vite et il se remplace rarement." },
  { q: "Le sol est-il accessible aux personnes à mobilité réduite ?", a: "Oui, et cela se pense dès le relevé. Contraste visuel des cheminements, bandes d'éveil de vigilance podotactiles aux points singuliers comme le haut d'un escalier ou un changement de direction, seuils sans ressaut au-delà de la réglementation. Le sol travaille avec la signalétique pour guider les personnes malvoyantes et faciliter le passage des fauteuils." },
  { q: "Quels revêtements pour les salons VIP et les salles d'attente ?", a: "Tout se joue sur le confort et le silence. En salle d'attente, on pose des dalles de moquette contract acoustiques ; dans les salons prestige, de la moquette laine et des tapis sur mesure confectionnés à l'atelier. Le format dalle a un vrai avantage : quand une zone fatigue devant les sièges, on remplace juste ce qu'il faut, sans refaire tout l'espace ni le fermer longtemps." },
  { q: "Quels sont les délais sur ce type de chantier ?", a: "Cela dépend de la surface et surtout du phasage que l'exploitation autorise. Un salon ou un plateau de bureaux se traite en quelques nuits. Un hall complet se planifie par tranches sur plusieurs interventions. On ne vous annonce pas un délai en l'air : on le construit après le relevé, calé sur vos créneaux, avec une remise en service propre à chaque étape." },
]

const essentiel = [
  "CB Sols pose et rénove les sols d'aéroports et d'aérogares : hall, embarquement, salons, comptoirs et bureaux.",
  "Revêtements classés au feu Cfl-s1 (norme EN 13501-1), antidérapants et accessibles PMR avec bandes podotactiles.",
  "Sols en trafic 33 et 34, l'usage le plus intensif du barème, pour encaisser des dizaines de milliers de passages.",
  "Intervention en site occupé : travaux de nuit et en heures creuses, zone par zone, sans jamais fermer le terminal.",
  "Produits posés : sol PVC compact et LVT, dalles de moquette, moquette laine et tapis sur mesure, tapis de propreté.",
  "Atelier à Villedoux près de La Rochelle. Interventions en Charente-Maritime, Vendée et Nouvelle-Aquitaine, devis gratuit après relevé.",
]

const tableRows = [
  { zone: 'Hall départ et arrivée', produit: 'PVC compact ou LVT haute densité', cle: 'Feu Cfl-s1, trafic 34, lés soudés à chaud' },
  { zone: "Salle d'embarquement", produit: 'Dalles de moquette contract', cle: 'Confort acoustique, réparable dalle par dalle' },
  { zone: 'Comptoirs enregistrement', produit: 'PVC anti-poinçonnement', cle: 'Résiste aux chariots, contrastes de guidage' },
  { zone: 'Salon VIP et lounge', produit: 'Moquette laine, tapis sur mesure', cle: 'Confort, silence, finition haut de gamme' },
  { zone: 'Bureaux exploitant', produit: 'Dalles de moquette acoustique', cle: "Absorption du bruit d'open space" },
  { zone: 'Sas et sanitaires', produit: 'PVC en lés soudé, tapis de propreté', cle: 'Hygiène, antidérapance, plinthe à gorge' },
]

export default function RevetementSolAeroportPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/revetement-sol-aeroport#service',
        name: 'Revêtement de sol pour aéroports et aérogares',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'Country', name: 'France' },
          { '@type': 'Place', name: 'Aéroport La Rochelle Île de Ré' },
          { '@type': 'Place', name: 'Aéroport Poitiers Biard' },
          { '@type': 'Place', name: 'Aéroport Angoulême Cognac' },
          { '@type': 'Place', name: 'Aéroport Bordeaux Mérignac' },
        ],
        serviceType: "Pose et rénovation de sol PVC, LVT et moquette pour aérogares",
        description: "Revêtement de sol pour halls, salles d'embarquement, salons, comptoirs et bureaux d'aéroport. Produits classés feu Cfl-s1, PMR podotactile, antidérapants, trafic 34. Intervention en site occupé, travaux de nuit par phases.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Revêtement de sol aéroport', item: 'https://cbsols.fr/revetement-sol-aeroport' },
        ],
      },
      {
        '@type': 'HowTo',
        name: "Rénover le sol d'un aéroport sans fermer le terminal",
        description: "Méthode CB Sols pour poser un revêtement de sol en aérogare en site occupé, du relevé à la remise du dossier de conformité.",
        step: process.map((p, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: p.step,
          text: p.desc,
        })),
      },
      {
        '@type': 'WebPage',
        '@id': 'https://cbsols.fr/revetement-sol-aeroport#webpage',
        url: 'https://cbsols.fr/revetement-sol-aeroport',
        name: 'Revêtement de sol pour aéroports et aérogares',
        description: "Guide et service CB Sols : sol PVC, LVT et moquette pour halls, salons et bureaux d'aéroport, classés feu Cfl-s1, PMR et antidérapants, posés sans fermer le terminal.",
        dateModified: '2026-09-14',
        inLanguage: 'fr-FR',
        isPartOf: { '@id': 'https://cbsols.fr/#website' },
        about: { '@id': 'https://cbsols.fr/revetement-sol-aeroport#service' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revêtement de sol aéroport</span>
          </div>
          <div>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
              Sol d&apos;aéroport,{' '}
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>posé sans fermer le terminal.</em>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '900px' }}>
              On ne ferme pas un aéroport pour refaire un sol. Alors on fait l&apos;inverse : on avance quand il dort. Zone par zone, de nuit ou en heures creuses, l&apos;ancien revêtement part, le support est repris, le nouveau sol est posé et lavé avant le premier vol. Hall, embarquement, comptoirs, salon, bureaux : chaque espace a son revêtement, classé au feu, accessible, taillé pour un passage que peu de lieux connaissent. Derrière tout ça, {company.experience} de métier et un atelier à vingt minutes de La Rochelle.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/contact?from=revetement-sol-aeroport" variant="primary" size="md">Demander un devis</Button>
              <Button href="/showroom" variant="outline" size="md">Voir le showroom</Button>
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

      {/* Zones */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Un terminal n&apos;est pas une seule surface</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Six espaces, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>six façons d&apos;user un sol.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {zones.map((c, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: 'var(--terra)', opacity: 0.2, lineHeight: 1, marginBottom: '1.25rem' }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tableau récap (quick reference) */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>En un coup d&apos;œil</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2.5rem', letterSpacing: '-0.03em' }}>
            Le bon revêtement, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>zone par zone.</em>
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: '640px' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Zone</th>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Revêtement conseillé</th>
                  <th style={{ textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid var(--terra)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terra)' }}>Norme et point clé</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((r, i) => (
                  <tr key={i}>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--border)', fontWeight: 700, color: 'var(--dark)' }}>{r.zone}</td>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--dark)' }}>{r.produit}</td>
                    <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--muted)' }}>{r.cle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA inline 1 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un projet de rénovation en préparation ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            On se déplace pour voir le sol et le chiffrer.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Hall, salon, bureaux ou local technique : Valentin passe sur place, regarde ce qu&apos;il y a à faire, vous conseille le bon revêtement et vous remet un devis précis, sans engagement.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=revetement-sol-aeroport" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Spécificités techniques */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Ce qu&apos;un sol d&apos;aérogare doit encaisser</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em' }}>
            Le cahier des charges, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>sans langue de bois.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Ce qu&apos;on déroule, et pourquoi</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Quatre matières, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>chacune à sa place.</em>
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
          <p style={{ marginTop: '2.5rem', fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7 }}>
            On travaille avec les manufactures qui savent faire du contract : Gerflor, Tarkett, objectflor, egeCarpets. Pas de sol grand public repeint aux couleurs de l&apos;aéroport. Chaque produit est retenu sur sa fiche technique et son PV de classement, parce que c&apos;est ce document, pas le prix d&apos;appel, qui passe devant la commission de sécurité.
          </p>
        </div>
      </section>

      {/* Types de clients */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>À qui on parle</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Du terrain d&apos;aéroclub <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>au salon première.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Chaque site a ses contraintes de sûreté, d&apos;exploitation et d&apos;image. La méthode ne change pas, elle s&apos;ajuste à la configuration et au public de l&apos;aérogare.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {clients.map((m, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--terra)', marginBottom: '0.5rem' }}>{m.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aéroports de la région */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre terrain</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Les aérogares du Grand Ouest, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>à portée d&apos;atelier.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Atelier à Villedoux, à côté de La Rochelle. Une équipe qui bouge, organisée pour intervenir sur les aérogares et les terrains de Nouvelle-Aquitaine et de Vendée, avec la logistique que chaque site impose. La liste n&apos;a rien d&apos;exhaustif : si votre plateforme est dans la région, on vient la voir.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {aeroports.map((p, i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem' }}>{p.nom}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inline 2 */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Une fenêtre d&apos;exploitation à saisir ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Donnez-nous le créneau, on cale la pose dessus.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Nuits, heures creuses, intersaison : dites-nous quand le terminal est calme, on s&apos;organise autour de vous.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=revetement-sol-aeroport-mid" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>De la première visite au premier vol</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>calées sur vos horaires.</em>
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
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Les questions qu&apos;on nous pose vraiment</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Sol d&apos;aéroport, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses d&apos;artisan.</em>
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
            CB Sols intervient partout où le sol prend cher et où les normes ERP s&apos;appliquent : cinéma, collectivité, hôtel, cabine d&apos;avion d&apos;affaires. Mêmes exigences, même soin du détail.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            <Link href="/moquette-jet-prive" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette jet privé →</Link>
            <Link href="/secteurs/collectivites" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Collectivités →</Link>
            <Link href="/secteurs/hotellerie" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Hôtellerie →</Link>
            <Link href="/services/sol-pvc-les" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Sol PVC en lés →</Link>
            <Link href="/services/tapis-de-proprete" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Tapis de propreté →</Link>
            <Link href="/services/pose-moquette" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Pose de moquette →</Link>
            <Link href="/guide/moquette-acoustique" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette acoustique →</Link>
            <Link href="/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom Villedoux →</Link>
          </div>
        </div>
      </section>

      {/* CTA final dark */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Un sol d&apos;aérogare à refaire ? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Parlons-en pour de vrai.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '640px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Relevé sur site en Charente-Maritime, Vendée et Nouvelle-Aquitaine. Devis sur mesure après état des lieux, avec un phasage pensé pour votre exploitation, pas pour notre confort.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=revetement-sol-aeroport" variant="primary" size="md">Demander un devis</Button>
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
