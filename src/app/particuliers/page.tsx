import Link from 'next/link'
import type { Metadata } from 'next'
import { company } from '@/data/company'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Particuliers | CB Sols, Artisan-Poseur Haut de Gamme La Rochelle, Île de Ré',
  description: "L'artisan qui pose la moquette des hôtels 5★ de la région intervient aussi chez les particuliers : maison principale, résidence secondaire, escalier sur mesure, rénovation pièce par pièce. Devis sur mesure, jamais de grille au m².",
  alternates: { canonical: 'https://cbsols.fr/particuliers' },
}

const filtres = [
  {
    title: 'Pas de grille de prix au m²',
    desc: "Chaque projet est différent : surface, support, contraintes, accès. Nous nous déplaçons, nous regardons, nous chiffrons. Le devis est gratuit, détaillé et sans engagement.",
  },
  {
    title: 'Le type de projets sur lesquels nous intervenons',
    desc: "Suite parentale, chambre d'enfant, bibliothèque, dressing, étage complet, escalier sur mesure en bois ou en pierre, résidence principale ou secondaire, maison ancienne à rénover.",
  },
]

const cas = [
  {
    img: '/images/moquette-chambre.webp',
    title: 'Résidence principale',
    desc: 'Moquette dans les chambres, sol PVC dans les pièces humides, escalier sur mesure : votre maison mérite la même rigueur de pose que les hôtels que nous équipons.',
    href: '/particuliers/moquette-maison',
  },
  {
    img: '/images/particuliers/photo-1.jpg',
    title: 'Résidence secondaire (Île de Ré, Oléron)',
    desc: "Vous habitez Paris, Bordeaux, Nantes : nous gérons le projet en votre absence, photos d'avancement, livraison clé en main. Spécialité maisons de l'Île de Ré.",
    href: '/particuliers/residence-secondaire',
  },
  {
    img: '/images/particuliers/photo-2.jpg',
    title: 'Rénovation pièce par pièce',
    desc: 'Un sol à refaire dans la cuisine, la salle de bains, une chambre, un dressing : nous intervenons sur des projets ciblés sans imposer une rénovation globale.',
    href: '/particuliers/sol-pvc-maison',
  },
  {
    img: '/images/tapis-hotel.webp',
    title: 'Projet ponctuel : escalier, entrée, salon',
    desc: 'Un tapis sur mesure pour habiller un escalier en bois ou en pierre, une entrée à mettre en valeur, un salon à feutrer : prestations très demandées, peu d\'artisans capables de les exécuter proprement.',
    href: '/particuliers/tapis-escalier-sur-mesure',
  },
]

const pourquoi = [
  {
    num: '01',
    title: 'Valentin décroche',
    desc: 'Quand vous appelez le ' + company.phone + ', c\'est l\'artisan qui répond. Pas un standard, pas un commercial : la personne qui posera votre sol.',
  },
  {
    num: '02',
    title: 'Pas de sous-traitance',
    desc: "L'équipe CB Sols pose elle-même tous les projets. Aucun intermédiaire, aucune équipe inconnue chez vous.",
  },
  {
    num: '03',
    title: 'Showroom à Villedoux',
    desc: 'Plus de 500 échantillons consultables sur rendez-vous. Vous touchez, vous comparez, vous choisissez en conditions réelles avant de vous engager.',
  },
  {
    num: '04',
    title: 'Plus de 25 ans, marques de référence',
    desc: 'Revendeur agréé EGE, Gerflor, objectflor, Bostik, Romus depuis 2012. Le même savoir-faire technique que pour les chantiers hôteliers haut de gamme.',
  },
  {
    num: '05',
    title: 'Devis sur mesure, gratuit',
    desc: 'Visite à votre domicile, état des lieux du support, conseil sur les produits adaptés à votre usage et votre budget. Devis détaillé sous 48h.',
  },
  {
    num: '06',
    title: 'Garantie décennale',
    desc: 'Attestation décennale à jour, assurance RC pro, certificats de conformité des produits remis en fin de projet. Tranquillité totale.',
  },
]

const services = [
  { href: '/particuliers/moquette-maison', label: 'Moquette pour la maison', desc: 'Chambre, suite parentale, étage, dressing — qualité hôtel chez vous.' },
  { href: '/particuliers/sol-pvc-maison', label: 'Sol PVC pièces humides', desc: 'Salle de bains, cuisine, buanderie, sous-sol — 100% waterproof.' },
  { href: '/particuliers/tapis-escalier-sur-mesure', label: 'Tapis & escalier sur mesure', desc: 'Habiller un escalier en bois ou en pierre, créer une entrée, feutrer un salon.' },
  { href: '/particuliers/residence-secondaire', label: 'Résidence secondaire', desc: 'Île de Ré, Oléron, La Rochelle : projet géré à distance, photos d\'avancement.' },
]

const faq = [
  {
    q: 'Quels types de projets prenez-vous ?',
    a: "Chambre d'enfant, résidence principale ou secondaire, bibliothèque, suite parentale, étage entier, escalier sur mesure, maison ancienne à rénover, projet où le matériau compte vraiment : c'est notre terrain.",
  },
  {
    q: 'Vous déplacez-vous sur l\'Île de Ré ?',
    a: "Oui, c'est même un de nos terrains principaux. Nous équipons hôteliers, restaurateurs, gîtes et résidences secondaires sur toute l'île. Le déplacement est inclus pour les projets sur l'Île de Ré, l'Île d'Oléron, La Rochelle et toute la Charente-Maritime.",
  },
  {
    q: 'Faites-vous les petits projets (une seule pièce) ?',
    a: "Oui. Une suite parentale, une chambre d'enfant, une chambre d'hôte, un dressing, un escalier, une entrée, une salle de bains, une bibliothèque, ou encore une pièce de réception : nous intervenons sur des projets ciblés sans imposer une rénovation globale.",
  },
  {
    q: 'Quel est le délai entre le devis et la pose ?',
    a: "Comptez 2 à 6 semaines selon la disponibilité du matériau choisi (gammes EGE, Gerflor, objectflor commandées sur projet) et notre planning. Pour les urgences (sinistre, déménagement programmé), nous faisons toujours le maximum pour accélérer.",
  },
  {
    q: 'Pourquoi ne pas afficher de prix au m² ?',
    a: "Parce qu'un même produit posé sur un support sain ou sur un carrelage à ragréer, dans une pièce carrée ou en L, à La Rochelle ou sur l'Île de Ré, ne coûte pas la même chose. Afficher un prix au m² standardisé serait soit malhonnête, soit inexact. Nous préférons venir voir et chiffrer juste.",
  },
  {
    q: 'Vous intervenez dans une maison habitée ?',
    a: "Oui, nous travaillons en site occupé, par phasage si nécessaire (pièce par pièce, étage par étage). Nous protégeons les meubles, déplaçons ce qui peut l'être, et laissons un projet propre en fin de journée.",
  },
]

export default function ParticuliersPage() {
  return (
    <div style={{ paddingTop: '72px' }}>

      {/* Hero */}
      <section style={{ padding: '5rem 2rem 4rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 30%, rgba(44, 85, 48, 0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '2rem' }}>
            <Link href="/" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>CB Sols</Link>
            <span style={{ color: 'var(--border-hover)' }}>→</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>Particuliers</span>
          </div>
          <span style={{ display: 'inline-block', padding: '0.3rem 0.875rem', border: '1px solid var(--border-hover)', backgroundColor: 'rgba(44, 85, 48, 0.08)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', borderRadius: '999px', marginBottom: '1.5rem' }}>
            Pour les projets particuliers
          </span>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 0.75rem', letterSpacing: '-0.03em', lineHeight: 1.0 }}>
            L&apos;exigence des hôtels 5★<br />
            <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)' }}>chez vous.</em>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', maxWidth: '680px', lineHeight: 1.75, marginBottom: '2rem' }}>
            Le même artisan qui pose la moquette des hôtels et restaurants étoilés de la région peut poser la vôtre. Sous une condition : que le projet ait du sens. Un beau matériau, un devis sur mesure, une visite à votre domicile avant tout chiffrage.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--dark-2)', maxWidth: '680px', lineHeight: 1.75, marginBottom: '2.5rem', fontStyle: 'italic' }}>
            Pas de grille au m², pas de prix tout fait : on vient voir, on comprend votre projet, on chiffre en conséquence.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button href="/contact?from=particuliers" variant="primary" size="md">Demander un devis sur mesure</Button>
            <Button href="/showroom" variant="outline" size="md">Prendre RDV au showroom</Button>
          </div>
        </div>
      </section>

      {/* Filtrage / positionnement */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Notre positionnement</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em', maxWidth: '720px' }}>
            Deux principes <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>qui clarifient le cadre.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {filtres.map((f, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', backgroundColor: 'var(--bg-card)', borderLeft: '3px solid var(--terra)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.75rem', fontWeight: 600 }}>0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.75rem', lineHeight: 1.3, letterSpacing: '-0.01em' }}>{f.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Cas d&apos;usage</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Pour quel <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>type de projet ?</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {cas.map((c) => (
              <Link key={c.title} href={c.href} style={{ textDecoration: 'none', display: 'block' }}>
                <div className="service-card" style={{ border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', backgroundColor: 'var(--bg-card)', height: '100%', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s, box-shadow 0.2s' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.title} style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }} />
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', flexGrow: 1 }}>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', margin: 0, letterSpacing: '-0.01em' }}>{c.title}</h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0, flexGrow: 1 }}>{c.desc}</p>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', marginTop: '0.5rem' }}>Découvrir →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Pourquoi un artisan plutôt qu&apos;une enseigne</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Six <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>différences concrètes.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.25rem' }}>
            {pourquoi.map((p) => (
              <div key={p.num} style={{ padding: '1.75rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)', borderRadius: '10px', borderLeft: '3px solid var(--terra)' }}>
                <div style={{ fontFamily: 'var(--font-serif, Georgia, serif)', fontSize: '1.25rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra)', lineHeight: 1, marginBottom: '0.75rem' }}>{p.num}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.6rem', letterSpacing: '-0.01em' }}>{p.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services dédiés */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Services dédiés particuliers</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Quatre prestations <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>pour votre maison.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {services.map((s, i) => (
              <Link key={s.href} href={s.href} style={{ textDecoration: 'none' }}>
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', padding: '1.5rem 0', borderBottom: i < services.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--border-strong)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--terra)' }}>{i + 1}</span>
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.25rem' }}>{s.label}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</div>
                  </div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--terra)', flexShrink: 0 }}>→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie réalisations particuliers */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Quelques réalisations chez les particuliers</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Le détail <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>se voit.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {[
              { src: '/images/particuliers/photo-7.jpg', alt: 'Cuisine ouverte avec sol PVC parquet et zone terrazzo' },
              { src: '/images/particuliers/photo-3.jpg', alt: 'Transition PVC terrazzo et parquet, cuisine particulier' },
              { src: '/images/particuliers/photo-9.jpg', alt: 'Transition diagonale terrazzo / parquet à un seuil de porte' },
              { src: '/images/particuliers/photo-5.jpg', alt: 'Détail finition entre parquet et sol PVC terrazzo' },
              { src: '/images/particuliers/photo-8.jpg', alt: 'Caisses bois sur sol parquet, ambiance maison' },
              { src: '/images/particuliers/photo-1.jpg', alt: 'Couloir parquet maison ancienne avec portail fer forgé' },
              { src: '/images/particuliers/photo-6.jpg', alt: 'Sol parquet avec bande terrazzo, salon contemporain' },
              { src: '/images/particuliers/photo-4.jpg', alt: 'Salon vue parquet vers porte ancienne, transition terrazzo' },
            ].map((p, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={p.src} alt={p.alt} style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '10px', display: 'block' }} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.5rem' }}>Questions fréquentes des particuliers</div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--dark)', margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
            Vos questions, <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>nos réponses honnêtes.</em>
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

      {/* CTA final */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--dark)', color: 'var(--bg)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: 'var(--bg)', margin: '0 0 1.5rem', letterSpacing: '-0.03em' }}>
            Votre projet mérite <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--terra-on-dark)' }}>une vraie visite.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248, 245, 238, 0.75)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Devis sur mesure, gratuit, sans engagement. Visite à domicile sur La Rochelle, Île de Ré, Île d&apos;Oléron et toute la Charente-Maritime.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="/contact?from=particuliers" variant="primary" size="md">Demander un devis</Button>
            <Button href="/showroom" variant="outline" size="md">Prendre RDV au showroom</Button>
          </div>
          <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(248, 245, 238, 0.6)' }}>
            Ou appelez directement Valentin : <a href={`tel:${company.phoneClean}`} style={{ color: 'var(--terra-on-dark)', textDecoration: 'none', fontWeight: 600 }}>{company.phone}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
