import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: "Moquette Jet Privé | Refit Cabine Aviation d'Affaires",
  description: "Pose de moquette sur jet privé et avion d'affaires. Refit cabine cuir et tapis sur mesure pour Cessna Citation, Falcon, Gulfstream, Bombardier. Normes feu FAA / EASA. CB Sols, La Rochelle.",
  alternates: { canonical: 'https://cbsols.fr/moquette-jet-prive' },
  openGraph: {
    title: "Moquette Jet Privé | Refit Cabine Aviation d'Affaires",
    description: "Moquette aviation d'affaires certifiée FAA Part 25 et EASA CS-25. Confection atelier, pose en hangar. Falcon, Gulfstream, Bombardier, Citation.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/moquette-jet-prive.jpg', width: 1200, height: 630 }],
  },
}

const cas = [
  { title: 'Cabine principale', desc: "Moquette pleine surface, calepinage millimétrique autour des rails de sièges, trappes de visite et passages techniques. Sur cabine large (Global, Falcon 8X, G650), tissage continu sans joint visible dans l'axe de circulation." },
  { title: 'Vestibule et galley', desc: "Zone très sollicitée par l'équipage et le service à bord. Polypropylène aviation ou nylon ignifugé pour la résistance aux chocs, taches café et passages permanents pendant les rotations." },
  { title: 'Cockpit corridor et lavatory', desc: "Surfaces réduites mais contraintes feu maximales en raison de la proximité avec les zones techniques. Matériaux certifiés aux essais les plus sévères, traçabilité complète pour le dossier opérateur." },
  { title: 'Tapis amovibles et runners', desc: "Couloirs principaux, marches d'escalier sur jets large cabine, tapis d'accueil. Confection cousue main avec ourlets renforcés, fixation Velcro aviation pour dépose rapide lors des contrôles." },
]

const produits = [
  { name: 'Laine vierge plus fibre aramide Nomex', desc: "Mélange de référence pour l'aviation d'affaires haut de gamme. La laine apporte douceur et toucher, le Nomex assure le classement feu A-1 selon FAA Part 25 §853. Grammage 900 à 1200 g/m² selon zone, teintures basse toxicité." },
  { name: 'Polypropylène aviation traité', desc: "Pour les zones de service intensives, galley et vestibule. Fibre 100% hydrophobe, séchage rapide, traitement ignifuge intégré. Réussit le test 12-second vertical burn et le test 60-degré burn requis par la FAA." },
  { name: 'Tapis sur mesure cousus main', desc: "Confection complémentaire pour runners et tapis d'accueil. Tissage Axminster ou Wilton sur dossier composite non halogéné, ourlets cousus main, dimensions ajustées au millimètre sur le calque cabine." },
]

const process = [
  { step: 'Visite hangar', desc: "Relevé sur calque dans le hangar de maintenance, photos haute définition, échange avec le chef de cabine et le responsable maintenance. Identification des contraintes de calendrier et fenêtre d'intervention." },
  { step: 'Sélection matière', desc: "Choix des coloris et fibres en lien avec le décorateur ou le designer cabine. Validation des certifications feu requises selon registration de l'appareil (FAA, EASA, registre offshore)." },
  { step: 'Dossier technique', desc: "Constitution du dossier de traçabilité : fiches matériaux, PV d'essais feu, déclarations de conformité, marquage des lots. Document remis à l'opérateur pour son dossier conformité." },
  { step: 'Confection atelier', desc: "Découpe et préparation à l'atelier Villedoux. Calepinage testé en blanc avant transport vers le hangar. Précision indispensable pour respecter la fenêtre de maintenance." },
  { step: 'Pose en hangar', desc: "Intervention pendant l'arrêt programmé, colles polyuréthane aviation sans solvant, finitions sur seuils et trappes. Restitution propre, prêt à voler le lendemain." },
]

const faq = [
  { q: 'Quelle moquette est certifiée pour le jet privé ?', a: "Une moquette d'aviation d'affaires doit respecter la FAA Part 25 §853 (intérieurs cabine) ou §855 (compartiments cargo) selon la zone d'application, ainsi que l'EASA CS-25.853 côté Europe. Les essais clés sont le 12-second vertical burn (vitesse de propagation flamme), le 60-degré burn pour les éléments situés près des sorties, la densité de fumée ASTM E662 et la toxicité Boeing BSS 7239. Nous travaillons exclusivement avec des fibres certifiées laine plus Nomex ou polypropylène traité aviation, accompagnées des PV d'essais à jour." },
  { q: 'Combien de temps pour un refit moquette cabine complète ?', a: "Pour un jet midsize type Falcon 2000 ou Citation Latitude, la confection atelier prend 5 à 8 jours après validation du calque. La pose en hangar se cale sur 2 à 4 jours selon la complexité, idéalement pendant un arrêt C-check ou un passage en peinture. Sur un large cabine Global 7500 ou G650, comptez 10 à 14 jours d'atelier et 5 à 7 jours de pose." },
  { q: "Travaillez-vous sur Le Bourget et les aéroports d'affaires ?", a: "Oui. Nous nous déplaçons sur Le Bourget, Cannes-Mandelieu, Nice Côte d'Azur, Saint-Tropez La Môle, Annecy Meythet, Bordeaux-Mérignac, Biarritz, ainsi qu'à La Rochelle Île de Ré pour notre zone locale. L'équipe mobile se cale sur la fenêtre de maintenance programmée par l'opérateur ou la base FBO. Pour les rotations courtes, nous pouvons aussi recevoir l'appareil dans un hangar partenaire à proximité de notre atelier." },
  { q: 'Quelle est la différence avec une moquette automobile premium ?', a: "L'automobile premium répond à des normes feu de l'ordre du FMVSS 302 ou de la norme ISO 3795, sensiblement moins exigeantes que la FAA Part 25. Les seuils de toxicité de fumée et de propagation de flamme demandés en aviation sont environ trois fois plus stricts. Les fibres et dossiers sont également différents : en jet, on impose Nomex ou polypropylène traité avec dossier composite non halogéné, là où l'automobile autorise des sous-couches mousse classique." },
  { q: "Comment se passe la coordination avec le constructeur ou l'opérateur ?", a: "Nous échangeons en amont avec le chef de cabine, le responsable maintenance et, si nécessaire, le bureau d'études du constructeur ou de la STC (Supplemental Type Certificate). Le dossier technique est transmis pour validation avant commande matière. Pour les refits américains, nous fournissons les éléments compatibles avec une certification ARSA. Pour les refits EASA, dossier Part 21 Subpart J ou intervention sous responsabilité Part 145 de l'opérateur." },
  { q: 'Quelle traçabilité fournissez-vous pour la conformité ?', a: "Chaque mètre carré est tracé : numéro de lot fabricant, PV d'essais feu (12-second vertical burn, 60-degré burn, ASTM E662, BSS 7239), fiche technique signée, déclaration de conformité matériaux. L'ensemble est remis sous dossier numérique et papier au responsable maintenance, prêt à être intégré au manuel de l'appareil et au CAMO." },
  { q: 'Faites-vous aussi les tapis amovibles complémentaires ?', a: "Oui. Runners de couloir, tapis d'accueil, tapis d'escalier sur jets large cabine, tapis cockpit corridor. Confection cousue main à l'atelier, ourlets renforcés, fixation Velcro aviation pour faciliter la dépose lors des contrôles ou du nettoyage profond. Matériaux et certifications identiques à la moquette de cabine." },
]

const specs = [
  { title: 'Normes feu aviation', desc: "FAA Part 25 §853 (intérieurs) ou §855 (cargo) selon zone, EASA CS-25.853, classement A-1 (laine plus Nomex), 12-second vertical burn, 60-degré burn pour zones proches sorties, densité de fumée ASTM E662, toxicité Boeing BSS 7239." },
  { title: 'Poids restreint', desc: "Chaque kilo embarqué se traduit en autonomie en moins. La moquette aviation reste sur des grammages 800 à 1200 g/m² maximum, contre 2000 g/m² et plus en marine. Dossier mousse ultra-fine, sans surcharge inutile." },
  { title: 'Matériaux certifiés', desc: "Laine vierge plus fibre aramide Nomex pour les cabines premium, polypropylène traité aviation pour les zones de service. Dossier composite non halogéné, soutache spéciale conforme aux exigences de toxicité de fumée." },
  { title: 'Traçabilité complète', desc: "Chaque pose s'accompagne d'un dossier matière complet : PV d'essais, fiche technique fabricant, numéro de lot, déclaration de conformité. Pour les refits américains, éléments compatibles ARSA. Pour l'EASA, dossier Part 21 ou Part 145." },
  { title: 'Adhésifs aviation', desc: "Colles polyuréthane certifiées aviation, sans solvant pour ne pas attaquer le cuir Connolly ou Edelman, les boiseries en loupe d'érable, les placages bois précieux. Mise en œuvre maîtrisée par notre équipe, ventilation hangar respectée." },
  { title: 'Pose en fenêtre programmée', desc: "Nous travaillons exclusivement pendant les fenêtres de maintenance définies par l'opérateur. Planning serré, respect des consignes de hangar, propreté absolue, restitution prête à voler." },
]

const marques = [
  { name: 'Dassault Falcon', detail: '2000, 6X, 7X, 8X. Refits cabine en lien avec le réseau de maintenance Dassault, dossiers conformité EASA.' },
  { name: 'Gulfstream', detail: 'G280, G500, G650, G700. Cabines large pour vols intercontinentaux, calepinage adapté aux long couloirs centraux.' },
  { name: 'Bombardier', detail: 'Challenger 350 et 650, Global 6500 et 7500. Plateforme la plus large du marché, confection en lés continus.' },
  { name: 'Cessna Citation', detail: 'Mustang, XLS, Latitude, Longitude. Du light jet au super midsize, gamme la plus diffusée en aviation d\'affaires.' },
  { name: 'Embraer Phenom', detail: '100 et 300. Cabines compactes, contraintes de poids accrues, choix matières adapté.' },
  { name: 'Pilatus PC-24', detail: 'Le super versatile, accès aéroports courts. Pose calée sur les rotations charter intensives.' },
  { name: 'HondaJet', detail: 'Light jet récent, cabine optimisée, refit moquette en lien direct avec le réseau service Honda Aircraft.' },
]

const aeroports = [
  { nom: 'Paris Le Bourget', detail: "Premier aéroport d'affaires d'Europe. Interventions sur les FBO Universal Aviation, Signature, Advanced Air Support." },
  { nom: 'Cannes-Mandelieu', detail: "Hub azuréen historique de l'aviation d'affaires. Refits pendant l'arrière-saison." },
  { nom: 'Nice Côte d\'Azur', detail: "Terminal aviation d'affaires Sky Valet. Coordination avec les opérateurs et les chefs de cabine de la Riviera." },
  { nom: 'Saint-Tropez La Môle', detail: "Port d'attache aérien des yachts owners. Interventions ciblées en intersaison." },
  { nom: 'Annecy Meythet', detail: "Transit alpin premium. Hangars partenaires pour les arrêts techniques courts." },
  { nom: 'Bordeaux-Mérignac', detail: "Base aviation d'affaires et site de maintenance Dassault Falcon. Coordination avec les ateliers Sogerma et Dassault Aviation." },
  { nom: 'Biarritz Pays Basque', detail: "Hub pour la côte basque et le nord de l'Espagne. Refits possibles en hangar partenaire local." },
  { nom: 'La Rochelle Île de Ré', detail: "Notre aéroport local, à 20 minutes de l'atelier Villedoux. Pose rapide en hangar." },
  { nom: 'Cognac Châteaubernard', detail: "Base hélicoptère et aviation d'affaires régionale. Interventions sur les unités basées Charente." },
  { nom: 'Lyon-Bron', detail: "Aéroport d'affaires lyonnais, deuxième de France en volume. Hangars FBO disponibles pour les refits programmés." },
]

export default function MoquetteJetPrivePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/moquette-jet-prive#service',
        name: "Moquette jet privé et aviation d'affaires",
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: [
          { '@type': 'Country', name: 'France' },
          { '@type': 'Place', name: 'Aéroport Paris Le Bourget' },
          { '@type': 'Place', name: 'Aéroport Cannes-Mandelieu' },
          { '@type': 'Place', name: "Aéroport Nice Côte d'Azur" },
          { '@type': 'Place', name: 'Aéroport Bordeaux-Mérignac' },
          { '@type': 'Place', name: "Aéroport La Rochelle Île de Ré" },
        ],
        serviceType: "Pose de moquette et confection de tapis sur mesure pour jets privés et avions d'affaires",
        description: "Refit cabine, vestibule, galley et runners pour jets privés. Matériaux certifiés FAA Part 25 et EASA CS-25, traçabilité complète, intervention en hangar pendant les fenêtres de maintenance.",
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Moquette jet privé', item: 'https://cbsols.fr/moquette-jet-prive' },
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
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Moquette jet privé</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Moquette jet privé,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>posée en hangar.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Cabine, vestibule, galley, runners : refit moquette et tapis sur mesure pour Cessna Citation, Falcon, Gulfstream, Bombardier. Matériaux certifiés FAA Part 25 et EASA CS-25, dossier traçabilité complet, intervention pendant les fenêtres de maintenance. {company.experience} d&apos;expérience artisan.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=moquette-jet-prive" variant="primary" size="md">Demander un devis</Button>
                <Button href="/showroom" variant="outline" size="md">Voir le showroom</Button>
              </div>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Le détail qui change tout</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Une couture impeccable, un calepinage juste, c&apos;est ce qui signe une finition haut de gamme. En cabine de jet, chaque millimètre se voit. »
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pour quelle zone de la cabine ?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Quatre zones, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>quatre approches.</em>
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Un refit cabine en préparation ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Chaque cabine demande son calque.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Falcon, Gulfstream, Bombardier ou Citation : Valentin Prévoteau se déplace en hangar pour relever et chiffrer juste.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=moquette-jet-prive" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Spécificités techniques */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Le métier de la moquette aviation</div>
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
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Matériaux que nous posons en cabine</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Trois familles, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>un seul standard.</em>
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
            Côté fournisseurs, nous travaillons avec les manufactures spécialisées aviation : laines techniques irlandaises et britanniques, mélanges Nomex sur cahier des charges constructeur, dossiers composites européens conformes FAA et EASA. Pas de matière standard détournée, pas de marque grand public maquillée en aviation : la traçabilité fait foi devant le constructeur et l&apos;opérateur.
          </p>
        </div>
      </section>

      {/* Citation milieu + CTA */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              « En aviation, le détail visible compte autant que le PV technique derrière. C&apos;est cet équilibre qui définit le métier. »
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?from=moquette-jet-prive-inline" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Visite hangar sur l&apos;ensemble des hubs aviation d&apos;affaires français</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marques jets */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Constructeurs sur lesquels nous intervenons</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Sept gammes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>du light au large cabine.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Light, midsize, super midsize, large cabine, ultra long range : chaque plateforme a ses contraintes de calepinage, de poids et de certification. Notre approche reste la même, ajustée à la fiche technique de l&apos;appareil.
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

      {/* Aéroports d'affaires */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Là où nous intervenons</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Les plus beaux aéroports d&apos;affaires <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>de France.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2.5rem' }}>
            Atelier basé à Villedoux, équipe mobile organisée pour intervenir sur les principaux hubs aviation d&apos;affaires français. Pour les chantiers complets, nous coordonnons l&apos;intervention pendant les fenêtres de maintenance programmée.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Une fenêtre de maintenance à exploiter ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            On cale la pose sur votre planning.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Arrêt C-check, passage peinture, transit FBO : décrivez la fenêtre, on s&apos;y adapte.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=moquette-jet-prive-mid" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche, de la visite à la pose</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>calées sur votre maintenance.</em>
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
            Moquette aviation, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses techniques.</em>
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
            Décrivez votre appareil, on revient sous 48h.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Constructeur, modèle, immatriculation, base FBO, fenêtre maintenance : ces cinq éléments suffisent pour démarrer un échange utile.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=moquette-jet-prive-faq" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Voir aussi</div>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '1.5rem' }}>
            CB Sols est également spécialiste de la moquette marine et de la pose en château, manoir et hôtel particulier. Trois univers, une même exigence de finition.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/moquette-chateau" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette château →</Link>
            <Link href="/moquette-bateau" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette bateau →</Link>
            <Link href="/moquette-yacht" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette yacht →</Link>
            <Link href="/moquette-catamaran" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette catamaran →</Link>
            <Link href="/moquette-peniche" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette péniche →</Link>
            <Link href="/services/pose-moquette" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Pose de moquette →</Link>
            <Link href="/services/tapis-sur-mesure" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Tapis sur mesure →</Link>
            <Link href="/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom Villedoux →</Link>
          </div>
        </div>
      </section>

      {/* CTA final dark */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Un appareil à équiper ? <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>Parlons-en.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite hangar sur Le Bourget, Cannes, Nice, Bordeaux, La Rochelle et l&apos;ensemble des hubs aviation d&apos;affaires français. Devis sur mesure après relevé précis.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=moquette-jet-prive" variant="primary" size="md">Demander un devis</Button>
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
