import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Moquette Yacht et Voilier Luxe | La Rochelle | CB Sols',
  description: "Pose de moquette et tapis sur mesure pour yacht moteur et voilier luxe : Sunseeker, Princess, Beneteau, Jeanneau. Laine traitée anti-feu, finitions premium, vibrations moteur.",
  alternates: { canonical: 'https://cbsols.fr/moquette-yacht' },
  openGraph: {
    title: 'Moquette Yacht | La Rochelle',
    description: "Revêtements de sol pour yachts à moteur et voiliers luxe : salon, cabine propriétaire, coursive. Laine traitée anti-feu, tapis sur mesure, intégration boiseries.",
    type: 'website',
    images: [{ url: 'https://cbsols.fr/og/moquette-yacht.jpg', width: 1200, height: 630 }],
  },
}

const zones = [
  { title: 'Salon principal & carré', desc: "Pièce de représentation : assises cuir, boiseries précieuses, baies vitrées. Laine vierge traitée ignifuge M1 ou polyamide haut de gamme, coloris coordonnés aux essences (acajou, teck, noyer). Finition douce, toucher premium." },
  { title: 'Cabine propriétaire', desc: "Le détail qui distingue un beau yacht. Moquette épaisse 1200-1600 g/m² avec tapis sur mesure devant le lit, intégration aux dressings et tables de chevet. Confort acoustique recherché." },
  { title: 'Coursives & paliers', desc: "Zones de passage exposées aux vibrations moteur. Sous-couche mousse fermée fine, colle polyuréthane élastique, joints invisibles. La moquette doit absorber sans onduler." },
  { title: 'Salle des cartes, bureau du commandant', desc: "Espace technique mais à exigence esthétique. Combinaison moquette sobre + tapis sur mesure, intégration aux équipements de navigation." },
]

const produits = [
  { name: 'Laine vierge traitée anti-feu', desc: "La référence des intérieurs de yachts. Fibre naturelle traitée ignifuge en cœur (pas en surface), classement M1 et Bfl-s1. Toucher haut de gamme, vieillissement noble, large palette de coloris. À réserver aux espaces ventilés et climatisés." },
  { name: 'Polypropylène premium 1400 g/m²', desc: "Pour les yachts à usage charter ou exposés à l’humidité (voiliers de croisière hauturière). Insensible à l’eau, résistant aux UV, même rendu visuel que la laine sur les coloris foncés." },
  { name: 'Tapis sur mesure marine', desc: "Pour habiller un salon, marquer une zone (devant un canapé, pied de lit), apporter un détail couture. Confection atelier Villedoux, bordures cousues main, fixation antidérapante adaptée bateau." },
]

const process = [
  { step: 'Visite à quai', desc: "Relevé précis, photos des boiseries et finitions existantes pour coordination des coloris, mesure d’humidité, identification des passages techniques (cale moteur, salle des machines)." },
  { step: 'Coordination intérieure', desc: "Sélection en showroom avec, si pertinent, votre architecte d’intérieur ou décorateur. Tests d’échantillons sous éclairage du bord. Validation du classement feu selon usage privé ou charter commercial." },
  { step: 'Devis & confidentialité', desc: "Devis détaillé sous 48h. Toutes nos interventions yacht sont couvertes par discrétion : pas de communication sans accord écrit du propriétaire." },
  { step: 'Confection atelier', desc: "Découpe au calque en atelier Villedoux. Confection des tapis sur mesure en parallèle. Tests d’ajustement avant transport." },
  { step: 'Pose à quai ou cale sèche', desc: "Pose finale : Port des Minimes, La Pallice, ou en cale sèche pour les refits importants. Colle polyuréthane marine, soudure à chaud des joints, finitions sur seuils, nettoyage complet à la livraison." },
]

const faq = [
  { q: 'Quelles marques de yacht avez-vous équipées ?', a: "Sans nommer les propriétaires, nous sommes intervenus sur des Sunseeker, Princess, Azimut côté yachts à moteur, et sur des Beneteau Oceanis, Jeanneau Sun Odyssey, Hanse côté voiliers de croisière haut de gamme. La méthode change selon le type, le calepinage aussi : un Sunseeker 60 n’a rien à voir avec un Oceanis 51." },
  { q: 'La laine est-elle vraiment adaptée à un bateau ?', a: "Oui, à deux conditions. Premièrement, le bateau doit être climatisé et ventilé en permanence (yacht à moteur, grand voilier de croisière avec ventilation contrôlée). Deuxièmement, le traitement ignifuge doit être en cœur de fibre, pas en surface, sinon il s’efface en 2 ans. La laine apporte un toucher et une noblesse qu’aucune fibre synthétique n’atteint encore. Mais sur un voilier de course-croisière humide, on bascule sur du polypropylène premium." },
  { q: 'Comment gérez-vous la coordination avec les autres corps de métier ?', a: "Un refit de yacht implique souvent ébéniste, sellier, peintre, électricien. Nous calons notre intervention en dernier ou avant-dernier rang pour éviter qu’un autre corps de métier ne pose ses caisses à outils sur la moquette neuve. Nous travaillons en chantier mutualisé en bonne entente avec les artisans habitués au secteur nautique de La Rochelle." },
  { q: 'Faites-vous aussi les tapis sur mesure du salon ?', a: "Oui, c’est même fréquent : moquette + tapis sur mesure forment un ensemble. Tapis confectionné en atelier Villedoux selon vos dimensions exactes, bordures cousues main, fixation antidérapante marine. Nous proposons aussi le marquage discret au monogramme du bateau ou aux initiales du propriétaire sur demande." },
  { q: 'Quelle durée de vie sur un yacht ?', a: "Sur un yacht à usage privé saisonnier bien entretenu, comptez 8 à 12 ans pour une moquette laine traitée. Sur un yacht à usage permanent (résidence à bord), 5 à 7 ans. Les tapis sur mesure se remplacent plus souvent (3 à 6 ans) car ce sont les zones d’usure visible." },
  { q: 'Intervenez-vous en confidentialité totale ?', a: "Oui, par défaut. Aucune photo publiée sans accord, aucun nom communiqué, aucune mention dans nos communications. C’est une exigence évidente sur ce segment, nous la respectons strictement depuis 27 ans." },
  { q: 'Quel coût indicatif pour un refit complet sols sur un yacht 50 pieds ?', a: "Impossible de chiffrer sans visite. Les écarts vont de 1 à 5 selon le choix matière (polypropylène vs laine premium), la complexité des courbes, la dépose de l’ancien, l’intégration aux boiseries. Pour donner un ordre de grandeur, un refit complet sols sur un yacht 50 pieds en laine traitée + tapis sur mesure se situe généralement entre 12 000 et 35 000 € TTC." },
]

export default function MoquetteYachtPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://cbsols.fr/moquette-yacht#service',
        name: 'Pose de moquette et tapis sur mesure pour yacht et voilier luxe',
        provider: { '@id': 'https://cbsols.fr/#localbusiness' },
        areaServed: ['La Rochelle', 'Île de Ré', 'Port des Minimes', 'La Pallice', 'Charente-Maritime'],
        serviceType: 'Revêtement de sol marine premium yacht à moteur et voilier luxe',
        description: 'Conception, confection atelier et pose discrète de moquette laine traitée et tapis sur mesure pour yachts. Conforme Bfl-s1, M1, IMO FTP.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'CB Sols', item: 'https://cbsols.fr' },
          { '@type': 'ListItem', position: 2, name: 'Moquette bateau', item: 'https://cbsols.fr/moquette-bateau' },
          { '@type': 'ListItem', position: 3, name: 'Moquette yacht', item: 'https://cbsols.fr/moquette-yacht' },
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
            <Link href="/moquette-bateau" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>Moquette bateau</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Moquette yacht</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1.25rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
                Moquette yacht,<br />
                <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>l&apos;exigence d&apos;un sol premium.</em>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2rem' }}>
                Salon, cabine propriétaire, coursives : moquette laine traitée anti-feu et tapis sur mesure pour yachts à moteur et voiliers luxe. Sunseeker, Princess, Beneteau Oceanis, Jeanneau. Confidentialité totale, finitions intégrées aux boiseries.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact?from=moquette-yacht" variant="primary" size="md">Demander un devis</Button>
                <Button href="/moquette-bateau" variant="outline" size="md">Voir la page moquette bateau</Button>
              </div>
            </div>
            {/* TODO: ajouter photo salon yacht */}
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>L&apos;exigence yacht</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1rem' }}>
                « Un yacht se voit dans les détails. Le sol en fait partie. Une couture impeccable, un calepinage juste, c&apos;est ce qui signe une finition haut de gamme. »
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Valentin Prévoteau, CB Sols</div>
            </div>
          </div>
        </div>
      </section>

      {/* Zones */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pour quelle zone du yacht ?</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Quatre espaces, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>quatre niveaux d&apos;exigence.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
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

      {/* Spécificités yacht */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Ce qui distingue le yacht</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Trois exigences qu&apos;on ne retrouve pas <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>en plaisance standard.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Surfaces courbes & carène pleine</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Sur un yacht à moteur (Sunseeker, Princess, Azimut), la carène n&apos;est pas plate : les espaces de vie épousent des courbes douces. Le calepinage en lés droits est impossible. Découpe au calque sur place, confection atelier au millimètre, joints invisibles. Sur un voilier luxe, c&apos;est pire encore : les bouchains imposent un travail à la main.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Vibrations & bruits moteur</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Sur un yacht à moteur, les zones au-dessus de la cale machines vibrent. Une moquette posée sur sous-couche rigide finit par onduler. Solution : mousse à cellules fermées élastique, colle polyuréthane bi-composant qui absorbe le mouvement. La moquette joue aussi un rôle acoustique réel : 5 à 8 dB de moins selon le grammage.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Finitions intégrées</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Un yacht haut de gamme combine bois précieux (teck, acajou), cuir, métal poli, marqueterie. Le revêtement de sol doit s&apos;intégrer sans rupture : seuils sur mesure, finitions cousues main, coordination des coloris avec les essences. Pas de profilé alu standard, jamais. On travaille avec l&apos;ébéniste de bord ou l&apos;architecte d&apos;intérieur quand il existe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA inline après spécificités */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', margin: '3rem auto', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Projet en tête ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Discrétion garantie, devis chiffré.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Visite confidentielle à quai, échange direct avec le commandant ou l&apos;architecte d&apos;intérieur. Aucune communication sans accord écrit.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?source=moquette-yacht" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Marques yacht */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Yachts que nous équipons</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Moteur ou voile, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>même standard de finition.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              { m: 'Sunseeker', s: 'Yachts à moteur 50-100 pieds' },
              { m: 'Princess', s: 'Yachts à moteur de croisière' },
              { m: 'Azimut', s: 'Yachts à moteur italiens' },
              { m: 'Beneteau Oceanis', s: 'Voiliers de croisière premium' },
              { m: 'Jeanneau Sun Odyssey', s: 'Voiliers haut de gamme' },
              { m: 'Hanse', s: 'Voiliers allemands' },
            ].map((m) => (
              <div key={m.m} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)' }}>{m.m}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.4rem' }}>{m.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produits */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Produits que nous posons sur yacht</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Trois familles de matériaux, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>une exigence commune.</em>
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
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre démarche</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Cinq étapes, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>discrétion comprise.</em>
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

      {/* Calepinage et confection */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Calepinage et confection atelier</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            La pose à quai ne dure que trois jours. <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>Tout se prépare avant.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Prise de cotes au calque</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Sur un yacht à carène pleine, la prise de cotes au mètre est inopérante : chaque cloison s&apos;arrondit, chaque seuil suit la courbure du pont. Nous travaillons au calque papier kraft épais, posé puis tracé à la main au feutre marin, repère par repère. Sur les yachts récents (Sunseeker, Princess) un calque laser complète le calque manuel pour les grandes surfaces du salon. Précision visée : 1 à 2 mm.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Confection en atelier Villedoux</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Tous les calques sont transférés sur les rouleaux en atelier. Découpe à la lame circulaire ou au cutter selon les angles. Le pré-assemblage permet de tester l&apos;ajustement à blanc sur le sol atelier avant transport. Sur un refit complet 50 pieds, 4 à 7 jours en atelier pour une pose finale en 2-3 jours à bord. C&apos;est ce qui permet de tenir un planning serré quand le propriétaire ne libère le bateau que sur une semaine.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Gestion des chutes et raccords motif</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Sur une laine vierge à motif (Wilton à dessin, Axminster custom), l&apos;optimisation des chutes change la facture : un raccord motif strict peut imposer 15 à 25% de chute supplémentaire. Le calepinage rigoureux limite la casse. Sur une laine custom commandée à dimension finale, aucune chute possible : chaque erreur de cote équivaut à recommencer une commande de 6 à 12 semaines de délai usine.</p>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Tapis sur mesure assortis</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Pour les salons principaux, un tapis sur mesure découpé dans la même fibre que la moquette environnante, avec bordure cousue main (galon coton ou cuir) et fixation antidérapante adaptée bateau. Possibilité de monogramme discret ou d&apos;intégration des armoiries du bateau au tuftage. Confection 3 à 5 semaines selon dimensions et complexité de bordure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quatre exigences spécifiques au yacht */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre approche du sur-mesure premium</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Quatre exigences <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>spécifiques au yacht.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
            Travailler dans les contraintes du haut de gamme suppose une boîte à outils adaptée. Voici ce qui rend la pose en yacht spécifique, et la façon dont nous l&apos;abordons sur chaque chantier.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Colles polyuréthane marine</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Nous travaillons exclusivement avec des colles PU bi-composant certifiées marine, formulées pour rester élastiques en milieu salin et sous variations de température. Leur coût matière est 4 à 6 fois supérieur à une colle acrylique d&apos;intérieur, mais c&apos;est la condition d&apos;une pose qui tient 10 ans à bord.</p>
            </div>
            <div style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Sous-couches adaptées</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Sur un yacht, la sous-couche fait autant que la moquette. Nous utilisons des mousses à cellules fermées spécifiques marine, qui ne stockent pas la condensation contre le support. Le revêtement respire, le bois reste sec, l&apos;ensemble reste sain dans la durée.</p>
            </div>
            <div style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Classement feu et traçabilité</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Nous posons des matériaux dont les PV feu sont fournis sur demande : Bfl-s1 pour la plaisance privée, IMO FTP partie 5 pour le charter commercial. Cette traçabilité matière est attendue par les compagnies d&apos;assurance type Pantaenius ou Generali Yacht et nous la documentons à chaque chantier.</p>
            </div>
            <div style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem' }}>Calepinage des courbes</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>Sur un yacht, les sols droits n&apos;existent pas. Notre méthode repose sur le calque papier kraft, la découpe atelier au millimètre et la soudure des joints en gorge. Ces gestes demandent l&apos;habitude des ateliers contract et marine, c&apos;est ce que CB Sols pratique depuis 27 ans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Délais et planification */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Délais et planification</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 2rem', letterSpacing: '-0.03em', maxWidth: '780px' }}>
            Du premier appel à la livraison, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>compter 6 à 14 semaines.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              { etape: 'Devis', delai: '5 jours', detail: 'Visite à quai sous 1 semaine après contact. Devis chiffré 48h après visite, validation matière en showroom.' },
              { etape: 'Commande matière', delai: '1-2 semaines', detail: 'Polypropylène en stock fournisseur, laine custom ou Axminster sur commande 6-12 semaines selon usine.' },
              { etape: 'Confection atelier', delai: '3-8 semaines', detail: 'Selon surface et complexité. Refit yacht 50 pieds complet = 5-7 semaines atelier en parallèle commande tapis sur mesure.' },
              { etape: 'Pose à quai', delai: '2-5 jours', detail: 'Selon surface. Pose calée sur disponibilité bateau, idéalement hors saison (octobre-avril) avec bateau au sec.' },
            ].map((p) => (
              <div key={p.etape} style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{p.etape}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '0.6rem' }}>{p.delai}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{p.detail}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '780px' }}>
            Périodes idéales : octobre à avril, bateau hiverné à sec ou en cale sèche. Accès facilité, pas de pression de saison, possibilité de coordonner avec ébéniste, sellier, peintre sur un même chantier mutualisé.
          </p>
        </div>
      </section>

      {/* Citation milieu CTA */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid var(--terra)', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: 'var(--dark)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              « Un yacht ne se chiffre pas au téléphone. Il faut monter à bord, sentir l&apos;ambiance, repérer les boiseries. Le devis ne vient qu&apos;après. »
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button href="/contact?source=moquette-yacht-inline" variant="primary" size="md">Prendre rendez-vous</Button>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Confidentialité totale par défaut</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Questions fréquentes</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Moquette yacht, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>réponses honnêtes.</em>
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
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>Refit en réflexion ?</p>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            Discussion confidentielle, sans engagement.
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            Un échange de 20 minutes suffit pour clarifier les options matières, le calendrier réaliste et un ordre de grandeur budgétaire.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?source=moquette-yacht-faq" variant="primary" size="md">Demander un devis</Button>
            <a href={`tel:${company.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '8px', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>{company.phone}</a>
          </div>
        </div>
      </section>

      {/* Voir aussi */}
      <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Voir aussi</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            <Link href="/moquette-bateau" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette bateau (hub) →</Link>
            <Link href="/sols-monaco" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Sols Monaco (Port Hercule) →</Link>
            <Link href="/moquette-catamaran" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette catamaran →</Link>
            <Link href="/moquette-peniche" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Moquette péniche →</Link>
            <Link href="/services/pose-moquette" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Pose de moquette →</Link>
            <Link href="/services/tapis-sur-mesure" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Tapis sur mesure →</Link>
            <Link href="/showroom" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '10px', backgroundColor: 'var(--bg-card)', textDecoration: 'none', color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>Showroom Villedoux →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Votre yacht <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>en mains expertes.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Visite confidentielle à quai. Devis détaillé, finitions premium, discrétion garantie.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=moquette-yacht" variant="primary" size="md">Demander un devis</Button>
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
