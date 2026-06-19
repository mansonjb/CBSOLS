import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'
import { RelatedCards } from '@/components/RelatedCards'
import { StickyDevisButton } from '@/components/StickyDevisButton'
import { BookOpen, Building2, GraduationCap, Home, Mail, Pill, Stethoscope, Store } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sol PVC Crèche, Micro-Crèche et MAM | Sol Petite Enfance',
  description: "Pose de sol PVC en crèche, micro-crèche et MAM. Conformité PMI, sans phtalates, label A+, acoustique, antibactérien. CB Sols accompagne structures petite enfance depuis plus de 25 ans.",
  alternates: { canonical: 'https://cbsols.fr/sol-pvc-creche' },
  openGraph: {
    title: "Sol PVC en crèche, micro-crèche et MAM | Sol petite enfance",
    description: "Sol PVC conforme PMI en crèche, micro-crèche et MAM. Sans phtalates, label A+, acoustique, glissance R10/R11, antibactérien intégré.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/sol-pvc-creche.jpg', width: 1200, height: 630 }],
  },
}

const cas = [
  { title: "Section bébés 0-12 mois", desc: "Sol PVC acoustique 3 à 4 mm avec amélioration significative du bruit d'impact, confort sous les coussins de motricité et les tapis d'éveil. Sans phtalates, label A+, antibactérien intégré. Les bébés rampent dessus toute la journée, c'est l'exigence la plus haute de la pose petite enfance." },
  { title: 'Sections moyens et grands', desc: "Sol PVC hétérogène classement U4P3, glissance R10, décors doux bois clair ou unis pastel. Pose en lés grande largeur 2 mètres avec soudure à chaud, étanchéité totale, hygiène irréprochable pour les chutes et les renversements quotidiens." },
  { title: 'Dortoirs et biberonnerie', desc: "Sol PVC acoustique pour préserver le calme de la sieste, surface lisse facile à désinfecter en biberonnerie. Plinthes à gorge intégrées, antibactérien dans la masse, conformité aux exigences PMI sur les surfaces de préparation alimentaire petite enfance." },
  { title: 'Salle de change et sanitaires', desc: "Sol PVC sécurité antidérapant R11, plinthes à gorge remontées sur 10 cm, soudure à chaud intégrale. Résistance aux produits désinfectants, surface continue sans joints poussiéreux, lavage à grande eau possible. Conformité PMI stricte." },
]

const produits = [
  { name: 'Sol PVC acoustique petite enfance', desc: "Référence des sections bébés et dortoirs. Amélioration du bruit d'impact de 17 à 22 dB, label A+, classement U3P3 ou U4P3 selon zone, sans phtalates de génération précédente. Principales gammes mobilisées : Gerflor Taralay Acoustic et Tarkett iQ Granit Acoustic." },
  { name: 'Sol PVC compact sans phtalates', desc: "Pour les structures les plus exigeantes ou en démarche HQE. Compact homogène ponçable, durée de vie 25 ans, label A+. Principales gammes mobilisées : Gerflor Mipolam Symbioz (bio-attribué) et Forbo Sphera (totalement sans phtalates)." },
  { name: 'Sol PVC sécurité change et sanitaires', desc: "Pour la salle de change, les sanitaires et la biberonnerie. Glissance R11, granulats anti-glisse dans la couche d'usure, plinthes à gorge associées, conformité PMI. Principales gammes mobilisées : Gerflor Tarasafe Standard et Forbo Surestep." },
]

const process = [
  { step: 'Visite et conformité PMI', desc: "Échange avec la directrice, le gestionnaire ou le promoteur micro-crèche. Vérification des exigences PMI départementales (variations légères entre départements). Relevé des surfaces, identification des zones bébés, change, dortoir, biberonnerie." },
  { step: 'Conseil produit dédié', desc: "Présentation en showroom Villedoux ou échantillons sur site. Choix entre sols acoustiques (sections bébés et dortoirs), sols compacts premium (zones de circulation), sols sécurité (change et sanitaires). Conseil sans phtalates et label A+ systématique." },
  { step: 'Devis et planning', desc: "Chiffrage détaillé par zone, fourniture et pose, ragréage, plinthes à gorge. Pour les crèches en activité, planning sur fermetures d'été ou de fin d'année. Pour ouvertures neuves, coordination avec promoteur et autres corps d'état." },
  { step: 'Préparation et pose', desc: "Dépose ancien revêtement si rénovation, ragréage autolissant, primaire d'accrochage, déroulage des lés 2 mètres, encollage pleine surface, marouflage soigné, soudure à chaud thermofusion. Plinthes à gorge en change, sanitaires, biberonnerie." },
  { step: 'Réception et conformité', desc: "Contrôle de chaque soudure, vérification des plinthes à gorge, nettoyage de mise en service. Remise du dossier conformité : PV classement feu Bfl-s1, FDES, fiches techniques A+, attestations sans phtalates. Pour la PMI et la directrice." },
]

const faq = [
  { q: "Quelles sont les exigences PMI pour le sol d'une crèche ?", a: "Les exigences PMI (Protection Maternelle et Infantile) varient légèrement d'un département à l'autre, mais le socle commun est solide. Le revêtement doit être souple pour amortir les chutes des tout-petits, lavable et désinfectable, sans joint visible accumulant les bactéries, sans phtalates de génération problématique (DEHP, DBP, BBP interdits). Le classement feu doit être Bfl-s1 minimum (ERP type R), le label COV A+ est exigé pour la qualité de l'air respiré par les bébés, la glissance R10 en zones courantes et R11 en change et sanitaires. Pour le bruit d'impact, une amélioration supérieure à 15 dB est recommandée dans les sections accueillant des enfants en éveil moteur. Nous remettons systématiquement le dossier complet à la directrice pour le contrôle PMI." },
  { q: "Sans phtalates : c'est vraiment important pour une crèche ?", a: "Oui, c'est devenu un standard incontournable des structures petite enfance modernes. Les phtalates DEHP, DBP et BBP ont été classés CMR (cancérogènes, mutagènes, reprotoxiques) et sont depuis longtemps remplacés dans les sols PVC contractuels par des plastifiants de nouvelle génération conformes au règlement REACH. Pour aller plus loin, certaines gammes premium éliminent totalement les phtalates au profit d'autres plastifiants jugés plus sûrs : Forbo Sphera est totalement sans phtalates, Gerflor Mipolam Symbioz est bio-attribué et utilise des matières premières renouvelables, Tarkett iQ Granit est 100% recyclable en circuit fermé. Pour une crèche, micro-crèche ou MAM, nous orientons systématiquement vers ces gammes. Le surcoût est modéré et l'argument fort vis-à-vis des parents et de la PMI." },
  { q: "Pourquoi un sol acoustique dans une crèche ?", a: "Le bruit d'impact (les bruits de pas, de chutes d'objets, de jouets, de chariots) est l'une des principales sources de fatigue acoustique pour les enfants et les professionnelles de la petite enfance. Un sol PVC acoustique de 3 à 4 mm intègre une sous-couche dense qui amortit ce bruit avant qu'il ne se propage. Les meilleures références (Gerflor Taralay Acoustic, Tarkett iQ Granit Acoustic, Forbo Sarlon Habitat) annoncent des améliorations de 17 à 22 dB. Concrètement, cela transforme l'ambiance sonore d'une section et permet aux bébés de mieux dormir, aux moyens de mieux se concentrer en activité, aux professionnelles de moins se fatiguer en fin de journée. Pour les sections bébés et les dortoirs, c'est notre standard." },
  { q: "Comment se passe la pose dans une crèche en activité ?", a: "Deux configurations possibles. La crèche ferme totalement pour les travaux : nous intervenons sur la fermeture d'été (souvent 3 semaines en août) ou de fin d'année, planning serré mais maîtrisé. La crèche reste partiellement ouverte : nous travaillons section par section, dans le respect strict du protocole sanitaire. Confinement de la zone par bâche, ventilation de la zone de pose, mise en service après dégazage (24 à 48 heures), redémarrage de la section sur sol neuf. Coordination étroite avec la directrice pour le planning, les accès, la sécurité des enfants. En plus de 25 ans, CB Sols a posé dans des dizaines de structures petite enfance avec des protocoles validés par les PMI départementales." },
  { q: "Quel budget pour un sol PVC crèche au mètre carré posé ?", a: "Le budget varie selon le type de produit et la complexité du chantier. Pour un sol PVC acoustique petite enfance type Gerflor Taralay Acoustic ou Tarkett iQ Granit Acoustic, posé avec ragréage et plinthes à gorge, comptez 60 à 85 euros HT du mètre carré tout compris. Pour un sol compact sans phtalates Gerflor Mipolam Symbioz ou Forbo Sphera, 75 à 110 euros HT. Pour un sol sécurité R11 en change et sanitaires, 65 à 90 euros HT. Les micro-crèches (souvent 100 à 150 mètres carrés au total) entrent dans des enveloppes de 8 000 à 15 000 euros HT pour l'intégralité du sol. Les crèches multi-sections atteignent rapidement 20 000 à 40 000 euros HT. Devis détaillé poste par poste après visite, sans surprise." },
  { q: "Quelles marques recommandez-vous pour une micro-crèche neuve ?", a: "Pour une micro-crèche en ouverture, nous recommandons une combinaison cohérente. Dans les sections de vie (bébés, moyens, grands) : Gerflor Taralay Acoustic ou Tarkett iQ Granit Acoustic, en pose lés grande largeur soudés à chaud, décor bois clair ou uni pastel. Dans le dortoir : Forbo Sarlon Habitat ou même produit que la section, pour la continuité visuelle et acoustique. Dans la salle de change et les sanitaires : Gerflor Tarasafe Standard ou Forbo Surestep, glissance R11, plinthes à gorge. Dans la biberonnerie : sol compact sans phtalates type Forbo Sphera ou Gerflor Mipolam Symbioz, surface continue et désinfectable. Cette composition couvre les exigences PMI et offre un confort acoustique et visuel optimal." },
  { q: "L'antibactérien intégré, c'est vraiment efficace en crèche ?", a: "Les sols PVC modernes pour petite enfance intègrent souvent un traitement antibactérien dans la couche d'usure, à base d'ions argent ou de molécules antimicrobiennes stables. L'efficacité est démontrée par tests en laboratoire selon ISO 22196 : réduction de 99% des populations bactériennes courantes (E. coli, S. aureus) sur la surface, en complément du nettoyage. Cela ne remplace pas le protocole de désinfection mais réduit la pression bactérienne entre deux nettoyages, ce qui est apprécié en salle de change, biberonnerie et zones de motricité. Pour autant, l'essentiel reste la soudure à chaud parfaite, les plinthes à gorge bien remontées et un protocole d'entretien quotidien rigoureux. Le sol fait sa part, le protocole fait le reste." },
]

const specs = [
  { title: 'Sans phtalates problématiques', desc: "Les phtalates CMR (DEHP, DBP, BBP) sont interdits. Pour aller plus loin, gammes totalement sans phtalates : Forbo Sphera, ou plastifiants bio-attribués : Gerflor Mipolam Symbioz. Standard incontournable pour structures petite enfance." },
  { title: 'Label A+ COV et FDES', desc: "Émissions de composés organiques volatils ≤ 100 µg/m³ après 28 jours (norme A+ française). FDES vérifiée par tierce partie. Indispensable pour la qualité de l'air respiré par les bébés et les jeunes enfants en éveil moteur." },
  { title: 'Acoustique > 15 dB de gain', desc: "Sols acoustiques 3 à 4 mm avec amélioration du bruit d'impact supérieure à 15 dB, idéalement 17 à 22 dB. Standard pour sections bébés, dortoirs et zones d'éveil moteur. Confort des enfants et des professionnelles." },
  { title: 'Glissance R10 et R11', desc: "R10 minimum en zones de circulation et salles de vie, R11 obligatoire en salle de change, sanitaires et biberonnerie selon DIN 51130. Granulats anti-glisse dans la couche d'usure pour les zones humides." },
  { title: 'Antibactérien intégré', desc: "Traitement antibactérien à base d'ions argent ou molécules antimicrobiennes dans la couche d'usure, efficacité testée selon ISO 22196. Réduction de la pression bactérienne entre deux nettoyages en change et biberonnerie." },
  { title: 'Soudure à chaud et plinthes à gorge', desc: "Pose en lés 2 mètres avec soudure à chaud thermofusion entre lés. Plinthes à gorge remontées 10 cm en change, sanitaires et biberonnerie. Étanchéité totale, hygiène irréprochable, conformité PMI." },
]

const marques = [
  { name: 'Gerflor Taralay Acoustic', detail: "Hétérogène acoustique amélioration 19 dB, U3P3, A+, sans phtalates. Référence des sections bébés et dortoirs en crèche française." },
  { name: 'Tarkett iQ Granit Acoustic', detail: "Compact homogène acoustique, ponçable, durée 25 ans. Amélioration 17 dB, antibactérien intégré, label A+." },
  { name: 'Forbo Sarlon Habitat', detail: "Hétérogène acoustique 19 dB, large gamme de décors doux. Très utilisé en micro-crèche pour son rapport qualité-prix." },
  { name: 'Gerflor Mipolam Symbioz', detail: "Compact homogène bio-attribué, 100% recyclable, sans phtalates. Solution premium pour crèches HQE et démarches environnementales." },
  { name: 'Tarkett Acczent Excellence Acoustic', detail: "Hétérogène contract amélioration 19 dB, classement U4P3. Décors bois réalistes appréciés en section moyens et grands." },
  { name: 'Polyflor Acoustix', detail: "Gamme acoustique britannique avec sécurité antidérapante R11. Idéale pour salles de change et zones humides en crèche." },
  { name: 'Forbo Sphera', detail: "Compact homogène totalement sans phtalates, 100% recyclable, A+. Le choix de référence pour micro-crèches éco-responsables." },
  { name: 'Gerflor Tarasafe Standard', detail: "Sol sécurité R11 pour change et sanitaires, granulats anti-glisse, antibactérien intégré. Plinthes à gorge associées." },
]

const lieux = [
  { nom: 'Crèches municipales', detail: "Mairie ou CCAS maître d'ouvrage, marché public ou marché à procédure adaptée. Réponse au DCE avec mémoire technique petite enfance." },
  { nom: 'Crèches associatives et parentales', detail: "Conseil d'administration décisionnaire, planning sur fermetures d'été. Conseil sur les choix produits et le respect des exigences PMI." },
  { nom: "Crèches d'entreprise", detail: "Promoteur ou groupe de crèches (Babilou, Crèche Attitude, People&Baby). Cahier des charges souvent renforcé, démarche HQE fréquente." },
  { nom: 'Micro-crèches privées', detail: "Création par un porteur indépendant, capacité 10 ou 12 enfants. Accompagnement complet du choix produit à la conformité PMI." },
  { nom: 'MAM Maisons d&apos;Assistantes Maternelles', detail: "Structures à 4 assistantes maternelles maximum, locaux de 80 à 150 m². Cahier des charges PMI similaire, budget ajusté." },
  { nom: 'RAM et Relais Petite Enfance', detail: "Lieux d'accueil itinérants pour assistantes maternelles. Salles d'éveil avec sols acoustiques, conformité PMI souple." },
  { nom: 'Haltes-garderies', detail: "Accueil ponctuel d'enfants 0-6 ans, salles polyvalentes avec sols acoustiques et sécurité change. Souvent intégrés à des centres sociaux." },
  { nom: "Jardins d'enfants", detail: "Structures pour enfants 2-6 ans, transition crèche-école. Sols PVC contract avec décors ludiques mais conformes ERP type R." },
  { nom: 'Structures multi-accueil', detail: "Sections crèche et halte-garderie combinées, capacités importantes. Gestion par grand groupe ou collectivité." },
  { nom: "Crèches en Charente-Maritime", detail: "La Rochelle, Rochefort, Saintes, Royan, Aytré, Surgères, Marennes. Déplacement gratuit, interventions régulières." },
  { nom: 'Micro-crèches Deux-Sèvres et Vendée', detail: "Niort, Fontenay-le-Comte, La Roche-sur-Yon. Marché en croissance, accompagnement de porteurs indépendants." },
  { nom: "Crèches île de Ré et île d'Oléron", detail: "Structures saisonnières et permanentes. Logistique insulaire maîtrisée, planning calé sur basse saison touristique." },
]

export default function SolPvcCrechePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/sol-pvc-creche#service',
        name: 'Pose de sol PVC en crèche, micro-crèche et MAM',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'Country', name: 'France' },
          { '@type': 'Place', name: 'Nouvelle-Aquitaine' },
          { '@type': 'Place', name: 'Charente-Maritime' },
          { '@type': 'Place', name: 'Deux-Sèvres' },
          { '@type': 'Place', name: 'Vendée' },
        ],
        serviceType: "Pose de sol PVC en crèche, micro-crèche et MAM, conformité PMI, sans phtalates, label A+, acoustique",
        description: "Fourniture et pose de sol PVC pour structures petite enfance : crèche, micro-crèche, MAM. Conformité PMI, sans phtalates, label A+, sol acoustique, antibactérien intégré, plinthes à gorge.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Sol PVC en crèche', item: 'https://cbsols.fr/sol-pvc-creche' },
        ],
      },
    ],
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <StickyDevisButton from="creche" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Sol PVC crèche</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Sol PVC en crèche,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>douceur et conformité PMI.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Crèche, micro-crèche, MAM : sols PVC acoustiques, sans phtalates, label A+, plinthes à gorge en change et sanitaires. Conformité PMI, antibactérien intégré, soudure à chaud thermofusion. Pour les bébés qui rampent dessus chaque jour. {company.experience} d&apos;expérience artisan.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=sol-pvc-creche" variant="primary" size="md">Demander un devis</Button>
                <Button href="/showroom" variant="outline" size="md">Voir le showroom</Button>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>La responsabilité d&apos;un sol petite enfance</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Quand je pose un sol en crèche, je sais que des bébés vont ramper dessus chaque jour. Sans phtalates, label A+, soudure parfaite : ce n&apos;est pas négociable, c&apos;est la base. »
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pour quelle zone de la crèche ?</div>
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Une micro-crèche en projet ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            On vous oriente vers les bons produits PMI.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Porteur indépendant ou groupe : Valentin Prévoteau accompagne la conformité PMI dès l&apos;étude du local.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=sol-pvc-creche" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Spécificités techniques */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Les exigences de la petite enfance</div>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Les sols PVC que nous posons en petite enfance</div>
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
            Pour les structures petite enfance, nous travaillons exclusivement avec les fabricants disposant de gammes dédiées : Gerflor (Taralay Acoustic, Mipolam Symbioz, Tarasafe), Tarkett (iQ Granit Acoustic, Acczent Excellence Acoustic), Forbo (Sarlon Habitat, Sphera, Surestep), Polyflor (Acoustix). Chaque produit est sélectionné pour sa conformité PMI, son label A+ et l&apos;absence de phtalates problématiques.
          </p>
        </div>
      </section>

      {/* Citation milieu + CTA */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              « Une plinthe à gorge bien remontée dans une salle de change, c&apos;est ce qui permet à la directrice de laver à grande eau sans crainte. Le détail qui change la vie au quotidien. »
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?from=sol-pvc-creche-inline" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Visite préalable systématique, accompagnement conformité PMI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marques */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Marques et références petite enfance</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Huit références, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>toutes conformes PMI.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Fabricants européens proposant des gammes dédiées petite enfance : acoustique, sans phtalates, label A+, antibactérien intégré. Chaque référence est testée en structure réelle avant recommandation.
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
            Tous les contextes <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de la petite enfance.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            CB Sols intervient pour les crèches municipales, associatives, d&apos;entreprise, les micro-crèches privées, les MAM et l&apos;ensemble des structures d&apos;accueil petite enfance. Conformité PMI rigoureuse, accompagnement administratif au besoin.
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Une visite PMI à anticiper ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Dossier conformité complet remis à la directrice.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            PV classement feu, FDES, attestations sans phtalates, fiches A+ : tout ce qu&apos;il faut pour la PMI.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=sol-pvc-creche-mid" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche, de la visite à la réception PMI</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>du conseil au dossier conformité.</em>
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
            Sol PVC petite enfance, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses détaillées.</em>
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
            Décrivez votre structure, on revient sous 48h.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Type de structure, capacité, sections, calendrier de fermeture : ces éléments suffisent pour démarrer un échange utile.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=sol-pvc-creche-faq" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      <RelatedCards
        sectionSubtitle="Notre savoir-faire couvre d'autres univers susceptibles de vous intéresser. Prenez le temps de parcourir, posez vos questions, nous y répondrons."
        items={[
          { href: "/sol-pvc-ecole", title: "Sol PVC école", teaser: "Acoustique apaisée, entretien rapide, durabilité de quinze ans dans une classe qui ne s'arrête jamais.", icon: GraduationCap },
          { href: "/sol-pvc-college-lycee", title: "Sol PVC collège et lycée", teaser: "Un sol qui encaisse mille passages par jour, résiste aux chaussures et garde son éclat sur la durée.", icon: BookOpen },
          { href: "/sol-pvc-cabinet-medical", title: "Sol PVC cabinet médical", teaser: "Un sol qui rassure vos patients dès la salle d'attente et facilite votre nettoyage quotidien.", icon: Stethoscope },
          { href: "/sol-pvc-pharmacie", title: "Sol PVC pharmacie d'officine", teaser: "Hygiène quotidienne, conformité ARS, pose nocturne. Vingt ans de tenue dans une officine qui ne ferme pas.", icon: Pill },
          { href: "/particuliers", title: "Pour les particuliers", teaser: "Moquette, sol PVC, tapis sur mesure : notre savoir-faire au service de votre maison.", icon: Home },
          { href: "/architectes", title: "Pour les architectes", teaser: "Documentation matière, échantillons annotés, devis détaillés. Notre rôle, c'est de servir votre vision.", icon: Building2 },
          { href: "/showroom", title: "Showroom Villedoux", teaser: "Venez voir et toucher les matières. Sur rendez-vous, à Villedoux près de La Rochelle.", icon: Store },
          { href: "/contact", title: "Nous contacter", teaser: "Une question, un projet, un devis sous 48 heures. Le gérant vous répond directement.", icon: Mail },
        ]}
      />

      {/* CTA final dark */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Une crèche à équiper ? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Parlons conformité.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite préalable, conseil produits PMI, planning sur fermetures. Pour les bébés qui rampent dessus chaque jour, on ne fait pas de compromis.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=sol-pvc-creche" variant="primary" size="md">Demander un devis</Button>
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
