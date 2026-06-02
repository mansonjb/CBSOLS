import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Sol PVC Collège et Lycée | Revêtement Sol Établissements Secondaires | CB Sols',
  description: "Pose de sol PVC en collège et lycée, salles de cours, laboratoires sciences, CDI, ateliers. Conformité ERP type R, lés grande largeur soudés à chaud, marché public éducation. CB Sols, 27 ans d'expérience.",
  alternates: { canonical: 'https://cbsols.fr/sol-pvc-college-lycee' },
  openGraph: {
    title: 'Sol PVC Collège et Lycée | Revêtement Sol Établissements Secondaires',
    description: "Sol PVC en lés grande largeur soudés à chaud pour collèges et lycées : salles, labos, CDI, ateliers techniques. Marchés publics éducation.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/sol-pvc-college-lycee.jpg', width: 1200, height: 630 }],
  },
}

const cas = [
  { title: "Salles de cours générales", desc: "Sol PVC en lés grande largeur 2 mètres, soudure à chaud entre lés, classement U4P3 et glissance R10. Calepinage adapté à l'orientation des tables. Pose pendant les vacances scolaires sur l'intégralité d'un étage si nécessaire, 30 à 200 mètres carrés par salle." },
  { title: 'Laboratoires sciences', desc: "Sol PVC compact ou hétérogène avec résistance chimique accrue : acides faibles, bases, solvants courants utilisés en TP physique-chimie et SVT. Plinthes à gorge remontées, soudure à chaud intégrale, U4P3 minimum. Préconisations Tarkett iQ Granit ou Gerflor Mipolam Esprit." },
  { title: "CDI, BDI et salles d'études", desc: "Sol PVC acoustique amélioré pour réduire le bruit ambiant et favoriser la concentration. Sol bois ou uni discret. Pose en lés sur grande surface ouverte, intégration des seuils avec les couloirs et escaliers existants." },
  { title: 'Ateliers techniques et lycée pro', desc: "Sol PVC compact U4P4 pour les ateliers bois, métallerie, électrotechnique. Résistance au poinçonnement des chariots, des établis lourds, à la chute d'outils. Glissance R10 sec, zones de coupe avec sol sécurité R11 si projection." },
]

const produits = [
  { name: 'Sol PVC hétérogène en lés grande largeur', desc: "Pose en lés 2 mètres soudés à chaud, technique signature des établissements scolaires de qualité. Étanchéité totale entre lés, absence de joints accumulant la poussière, durée de vie 15 à 20 ans. Références : Tarkett iQ Granit, Gerflor Taralay Impression Compact, Forbo Eternal, Tarkett Acczent Excellence 70." },
  { name: 'Sol PVC compact homogène premium', desc: "Pour zones très sollicitées : ateliers lycée pro, circulations principales, halls d'accueil. Couche d'usure dans la masse, ponçage possible de rénovation. Garantie commerciale jusqu'à 30 ans. Références : Gerflor Mipolam Esprit, Forbo Sphera Element, Polyflor XL." },
  { name: 'Sol PVC sécurité et antidérapant', desc: "Pour sanitaires lycée, vestiaires gymnase, zones humides labo. Glissance R11 ou R12, granulats anti-glisse intégrés. Références : Altro XpressLay (pose sans colle pour rénovation rapide), Polyflor Polysafe Quattro, Forbo Surestep, Gerflor Tarasafe." },
]

const process = [
  { step: 'Visite et relevé', desc: "Métré précis sur site, étage par étage, identification des contraintes (sols amiantés des constructions années 70-80, chauffage au sol, dénivelés). Échange avec le gestionnaire ou les services techniques de la région ou du département." },
  { step: 'Mémoire technique', desc: "Pour marchés publics éducation, constitution complète du dossier : références, fiches produits, PV classement feu, FDES, certifications, planning, équipe. Réponse soignée déterminante sur les notes techniques." },
  { step: 'Coordination chantier', desc: "Calage du planning sur les vacances scolaires : été pour les gros chantiers (200 à 2000 m²), Toussaint pour les petites surfaces. Coordination avec les autres entreprises du chantier global si rénovation lourde." },
  { step: 'Pose en lés grande largeur', desc: "Dépose ancien revêtement, ragréage autolissant, primaire, déroulage des lés 2 mètres, encollage pleine surface, marouflage soigné, soudure à chaud thermofusion entre lés. Plinthes à gorge en zones humides." },
  { step: 'Réception et remise', desc: "Contrôle de chaque soudure à la pointe, vérification des reprises de plinthes et seuils, nettoyage de mise en service, remise des PV et FDES aux gestionnaires, instructions d'entretien aux agents techniques." },
]

const faq = [
  { q: "Quelles sont les exigences ERP pour un sol PVC en collège ou lycée ?", a: "Les collèges et lycées relèvent du type R (établissements d'enseignement) en classification ERP. Les exigences principales sont : classement feu Bfl-s1 minimum (PV européen obligatoire), classement UPEC U4P3 minimum pour les salles et circulations, U4P4 recommandé pour les zones à fort passage comme les halls et ateliers, glissance R10 en zones sèches et R11 en sanitaires, vestiaires et zones humides selon DIN 51130, label A+ pour les émissions de COV avec FDES vérifiée. Pour les laboratoires, une résistance chimique aux acides faibles, bases et solvants courants est exigée en plus. Nous fournissons tous les PV et FDES au moment du devis et constituons le dossier réglementaire complet pour la réception." },
  { q: "Pourquoi poser un sol PVC en lés grande largeur 2 mètres plutôt qu'en dalles ?", a: "La pose en lés grande largeur 2 mètres avec soudure à chaud thermofusion est la signature des établissements scolaires de qualité. Trois raisons. Étanchéité : la soudure à chaud crée une continuité parfaite entre lés, sans joints. La poussière, l'eau et les liquides ne pénètrent jamais sous le revêtement. Hygiène : aucun joint vertical de dalle qui s'encrasse au fil des années, nettoyage simple à l'autolaveuse. Durabilité : pas de décollement de coin de dalle après quelques années de passage intense. Un sol PVC en lés bien posé tient 15 à 20 ans sans intervention majeure. Le surcoût initial est largement absorbé sur la durée de vie. C'est la technique que nous appliquons systématiquement en lycée et collège." },
  { q: "Quel est le délai pour répondre à un marché public éducation ?", a: "À réception du DCE, nous analysons le CCTP et le BPU dans les 48 heures pour confirmer notre intérêt et notre capacité à répondre dans les délais. Nous demandons éventuellement une visite des locaux si elle est proposée, qui permet de chiffrer juste. Le mémoire technique demande 5 à 10 jours de rédaction soignée pour un dossier complet : entreprise, équipe, références similaires en lycée ou collège, fiches techniques produits proposés, PV classement feu, FDES, certifications, planning détaillé sur vacances scolaires, mesures qualité et sécurité. Pour les gros marchés régionaux, nous nous appuyons sur notre catalogue de références constitué sur 27 ans de pose en collectivités éducatives." },
  { q: "Exemple de chantier récent en lycée : comment ça se passe concrètement ?", a: "Sur un chantier lycée 200 mètres carrés en pose lés grande largeur pendant les vacances de la Toussaint, le déroulé type est le suivant. Lundi : arrivée équipe, dépose ancien revêtement, diagnostic support. Mardi : ragréage autolissant, primaire d'accrochage, séchage. Mercredi : pose des lés en pleine surface, encollage, marouflage. Jeudi : soudure à chaud entre lés, pose des plinthes, finitions seuils. Vendredi : nettoyage de mise en service, contrôles, réception avec le gestionnaire. Vacances Toussaint d'environ 10 jours, l'équipe finit toujours en avance pour absorber les imprévus. Ce planning serré est notre standard. Sur 27 ans, nous n'avons jamais retardé une rentrée." },
  { q: "Les sols PVC modernes posent-ils un problème sanitaire en lycée ?", a: "Les sols PVC contractuels posés en lycée aujourd'hui sont classés A+ pour les émissions de composés organiques volatils, soit le meilleur niveau de la classification française. Les anciennes générations contenant des phtalates problématiques (DEHP, DBP, BBP) sont depuis longtemps remplacées par des plastifiants conformes au règlement REACH. Certaines gammes vont nettement plus loin : Gerflor Mipolam Symbioz est bio-attribué, Forbo Sphera est totalement sans phtalates, Tarkett iQ Granit est 100% recyclable en circuit fermé. Pour les lycées en démarche HQE ou bâtiment exemplaire, ces gammes premium sont les références. Nous orientons systématiquement vers ces produits pour les marchés affichant une exigence environnementale." },
  { q: "Comment gérer un sol amianté découvert sous l'ancien revêtement ?", a: "De nombreux collèges et lycées construits entre 1950 et 1997 contiennent des dalles PVC ou des colles amiantées. Un diagnostic amiante avant travaux est obligatoire et doit être fourni par le maître d'ouvrage avant intervention. Si présence avérée, deux options. Le retrait par entreprise certifiée sous-section 3 ou 4, avec confinement et évacuation en filière agréée, suivi d'une pose neuve sur support traité. Le recouvrement, autorisé sous conditions strictes (état de l'ancien sol parfaitement adhérent, fiche de prévention amiante, suivi traçabilité), avec primaire spécifique et pose neuve par-dessus. Nous coordonnons avec les entreprises amiante certifiées de notre réseau et intégrons ces phases dans le planning global." },
  { q: "Quelle durée de vie attendre d'un sol PVC en lycée ?", a: "Avec un produit U4P3 ou U4P4 posé en lés soudés à chaud, comptez 15 à 20 ans en salle de cours et circulation. Les zones très passantes comme les halls d'accueil et les ateliers de lycée pro tournent autour de 12 à 15 ans. Les sols compacts homogènes type Gerflor Mipolam Esprit ou Polyflor XL permettent une rénovation par ponçage de surface après 10 à 12 ans, prolongeant la durée totale à 25 ans voire 30. L'entretien régulier par l'agent technique est déterminant : nettoyage quotidien à l'autolaveuse avec produit neutre, métallisation tous les 2 à 3 ans pour les sols filmogènes. Nous remettons une fiche d'entretien personnalisée et accompagnons les agents techniques sur les premiers mois." },
]

const specs = [
  { title: 'Classement feu Bfl-s1 obligatoire', desc: "Norme européenne EN 13501-1, PV de classement fourni par le fabricant. Obligatoire pour tout ERP type R, joint au dossier de réception. Aucun produit posé en lycée ne descend en dessous de ce classement." },
  { title: 'Classement UPEC U4P3 à U4P4', desc: "U4P3 pour salles de cours et circulations, U4P4 pour halls, restaurations scolaires, ateliers lycée pro. Assure la résistance à l'usure, au poinçonnement et au passage soutenu sur la durée de vie de l'ouvrage." },
  { title: 'Glissance R10 et R11', desc: "R10 minimum en zones sèches selon DIN 51130, R11 en sanitaires, vestiaires, douches, laboratoires de chimie. Pour les ateliers humides ou avec projection, sol sécurité dédié R11/R12." },
  { title: 'Résistance chimique laboratoires', desc: "Pour TP physique-chimie et SVT, exigence de résistance aux acides faibles, bases et solvants courants. Gammes spécifiques type Tarkett iQ Granit ou Gerflor Mipolam Esprit avec couche d'usure dense et étanche." },
  { title: 'Pose en lés grande largeur', desc: "Lés 2 mètres de large, soudure à chaud thermofusion entre lés. Étanchéité totale, hygiène irréprochable, durabilité maximale. Technique signature de la pose en lycée et collège de qualité." },
  { title: 'Calendrier vacances scolaires', desc: "Été pour les gros marchés (500 à 2000 m²), Toussaint pour les surfaces intermédiaires, Pâques pour les compléments. Coordination obligatoire avec gestionnaire et autres corps d'état." },
]

const marques = [
  { name: 'Tarkett iQ Granit', detail: "Compact homogène premium, garantie commerciale jusqu'à 30 ans, ponçable. Référence des laboratoires de sciences et des circulations principales en lycée." },
  { name: 'Gerflor Taralay Impression Compact', detail: "Hétérogène U4P3, R10, large gamme de décors bois et unis. Excellente tenue dans le temps, marché public récurrent en collège et lycée." },
  { name: 'Forbo Eternal', detail: "Hétérogène contract U4P3, classement A+, FDES vérifiée. Particulièrement adapté aux salles de cours et halls d'établissement secondaire." },
  { name: 'Polyflor Polysafe Quattro', detail: "Sol sécurité haut de gamme R12, garantie 15 ans coefficient de glissance. Pour vestiaires gymnase, sanitaires, abords de zones humides." },
  { name: 'Tarkett Acczent Excellence 70', detail: "Hétérogène acoustique avec amélioration du bruit d'impact de 19 dB. Idéal pour CDI, salles d'études, internats lycée." },
  { name: 'Gerflor Mipolam Esprit', detail: "Compact homogène avec résistance chimique renforcée, indispensable en laboratoire de chimie et de SVT. A+, FDES vérifiée." },
  { name: 'Forbo Sphera Element', detail: "Compact homogène sans phtalates, 100% recyclable, label A+. Référence éco-responsable pour lycées HQE ou bâtiments démonstrateurs." },
  { name: 'Altro XpressLay', detail: "Sol sécurité pose sans colle, idéal pour rénovation rapide en intersession courte. Glissance R11, classement Bfl-s1, mise en service immédiate." },
]

const lieux = [
  { nom: 'Collèges publics de Charente-Maritime', detail: "Conseil départemental maître d'ouvrage, marchés publics réguliers, intervention sur le département entier." },
  { nom: 'Lycées publics Nouvelle-Aquitaine', detail: "Conseil régional maître d'ouvrage, marchés pluriannuels d'entretien et rénovation des sols sur l'académie." },
  { nom: 'Lycées professionnels et techniques', detail: "Ateliers de production, salles de TP, halls techniques. Exigences renforcées sur résistance et glissance." },
  { nom: 'Lycées agricoles', detail: "Internats, salles de cours, ateliers, restauration. Marchés portés par le ministère de l'agriculture ou la région." },
  { nom: 'Collèges et lycées privés sous contrat', detail: "OGEC maître d'ouvrage, décision plus rapide qu'en marché public, planning calé sur calendrier de l'établissement." },
  { nom: 'Internats lycéens', detail: "Chambres, sanitaires, circulations, salles d'études du soir. Sols acoustiques recommandés pour le confort du repos." },
  { nom: 'CDI et BDI', detail: "Centres de documentation, sols acoustiques pour réduire le bruit et favoriser la concentration. Surfaces ouvertes de 100 à 300 m²." },
  { nom: 'Restaurants scolaires lycée', detail: "Salles de plus de 300 places, sols compacts ou sécurité R11, plinthes à gorge, résistance HACCP." },
  { nom: 'Lycées en Charente-Maritime', detail: "La Rochelle, Rochefort, Saintes, Saint-Jean-d'Angély, Royan. Déplacement gratuit, interventions régulières." },
  { nom: 'Collèges Deux-Sèvres et Vendée', detail: "Niort, Parthenay, Fontenay-le-Comte, La Roche-sur-Yon. Marchés des conseils départementaux." },
  { nom: "Établissements en démarche HQE", detail: "Bâtiments démonstrateurs ou rénovations exemplaires : Gerflor Mipolam Symbioz, Forbo Sphera, Tarkett iQ Optima." },
  { nom: 'Laboratoires et CDI universitaires', detail: "Universités La Rochelle, Poitiers, Limoges. Spécificités proches du lycée, marchés portés par les services patrimoniaux." },
]

export default function SolPvcCollegeLyceePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/sol-pvc-college-lycee#service',
        name: 'Pose de sol PVC en collège et lycée',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'Country', name: 'France' },
          { '@type': 'Place', name: 'Nouvelle-Aquitaine' },
          { '@type': 'Place', name: 'Charente-Maritime' },
          { '@type': 'Place', name: 'Deux-Sèvres' },
          { '@type': 'Place', name: 'Vendée' },
        ],
        serviceType: "Pose de sol PVC en collège et lycée, lés grande largeur soudés à chaud, conformité ERP, marchés publics éducation",
        description: "Fourniture et pose de sol PVC en lés grande largeur soudés à chaud dans les collèges et lycées. Salles de cours, laboratoires, CDI, ateliers techniques, internats. Conformité ERP type R complète.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Sol PVC collège lycée', item: 'https://cbsols.fr/sol-pvc-college-lycee' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Sol PVC collège lycée</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Sol PVC collège et lycée,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>la robustesse au passage.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Salles de cours, laboratoires sciences, CDI, ateliers techniques, internats : sol PVC en lés grande largeur 2 mètres soudés à chaud thermofusion. Conformité ERP type R complète, marchés publics éducation, planning vacances scolaires. {company.experience} d&apos;expérience artisan.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=sol-pvc-college-lycee" variant="primary" size="md">Demander un devis</Button>
                <Button href="/showroom" variant="outline" size="md">Voir le showroom</Button>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>La signature d&apos;une vraie pose lycée</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Un lycée, c&apos;est de la pose en lés 2 mètres soudés à chaud, point. Pas de dalles qui se décollent au bout de cinq ans. C&apos;est la base d&apos;un sol qui tient 20 ans. »
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pour quelle zone du secondaire ?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Quatre espaces, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>quatre exigences.</em>
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un marché public en cours ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            On répond avec mémoire technique soigné.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Région ou département : Valentin Prévoteau pilote la réponse personnellement, PV et FDES sous la main.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=sol-pvc-college-lycee" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Spécificités techniques */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Les exigences ERP type R</div>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Les sols PVC que nous posons en secondaire</div>
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
            Pour les marchés régionaux et départementaux, nous travaillons exclusivement avec les fabricants disposant de FDES vérifiée, de PV de classement feu européens et de réseaux logistiques permettant la livraison sur grands chantiers d&apos;été. Exemple récent : un lycée de 200 mètres carrés en pose lés sur vacances de la Toussaint, livré avec deux jours d&apos;avance.
          </p>
        </div>
      </section>

      {/* Citation milieu + CTA */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              « Quand on rend un lycée à la veille de la rentrée, on doit pouvoir passer le doigt sur la soudure sans rien sentir. C&apos;est cette finition-là qu&apos;on signe. »
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?from=sol-pvc-college-lycee-inline" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Visite préalable sur site, étude du DCE et planning vacances scolaires</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marques */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Marques et références ERP type R</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Huit références, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>du contract robuste au sécurité.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Fabricants européens majeurs des revêtements de sol pour collectivités éducatives. Tous les produits disposent des PV classement feu Bfl-s1, du classement UPEC adapté, des FDES vérifiées et du label A+ COV.
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

      {/* Lieux et établissements */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Là où nous intervenons</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Tous les contextes <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de l&apos;enseignement secondaire.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            CB Sols répond aux marchés publics des conseils départementaux et régionaux, intervient sur les lycées professionnels et agricoles, accompagne les établissements privés sous contrat. Une expertise complète du type R éducation.
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un labo ou un atelier à équiper ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Résistance chimique et glissance R11, on connaît.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Tarkett iQ Granit, Gerflor Mipolam Esprit, sols sécurité Polyflor : nous orientons selon le besoin précis du local.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=sol-pvc-college-lycee-mid" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche, du DCE à la remise</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de la réponse à la rentrée.</em>
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
            Sol PVC secondaire, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses détaillées.</em>
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
            Décrivez votre établissement, on revient sous 48h.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Type d&apos;établissement, surfaces, calendrier, contraintes amiante éventuelles : ces éléments suffisent pour démarrer un échange utile.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=sol-pvc-college-lycee-faq" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Voir aussi</div>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '1.5rem' }}>
            CB Sols intervient sur l&apos;ensemble du cycle éducatif, du premier degré au lycée, en passant par la petite enfance. Une même exigence ERP du dossier à la pose.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/sol-pvc-ecole" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Sol PVC école →</Link>
            <Link href="/sol-pvc-creche" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Sol PVC crèche →</Link>
            <Link href="/secteurs/collectivites" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Collectivités →</Link>
            <Link href="/services" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Tous nos services →</Link>
            <Link href="/architectes" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Architectes →</Link>
            <Link href="/marques" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Marques →</Link>
            <Link href="/realisations" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Réalisations →</Link>
            <Link href="/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom Villedoux →</Link>
          </div>
        </div>
      </section>

      {/* CTA final dark */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Un lycée à rénover ? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Parlons marché.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Réponse au DCE, mémoire technique, planning vacances scolaires : nous accompagnons les collectivités sur l&apos;intégralité du process marché public éducation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=sol-pvc-college-lycee" variant="primary" size="md">Demander un devis</Button>
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
