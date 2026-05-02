/**
 * CRM fake data — used by /admin prototype views.
 * In production this would come from a database (Supabase/Postgres).
 */

export type LeadStatus =
  | 'nouveau'
  | 'contacte'
  | 'devis_envoye'
  | 'relance'
  | 'converti'
  | 'perdu'

export type LeadSource =
  | 'site_web'
  | 'whatsapp'
  | 'telephone'
  | 'showroom'
  | 'recommandation'
  | 'architecte'

export interface Lead {
  id: string
  date: string // ISO date created
  source: LeadSource
  nom: string
  telephone: string
  email?: string
  ville: string
  type_projet: string
  surface_estimee?: string
  budget_estime?: string
  message?: string
  statut: LeadStatus
  derniere_interaction: string // ISO
  prochaine_action?: string
  notes: { date: string; content: string; auteur: string }[]
  segment: 'particulier' | 'hotel' | 'restaurant' | 'bureau' | 'ehpad' | 'architecte' | 'commerce' | 'camping'
}

export type ClientType = 'particulier' | 'pro'

export interface Client {
  id: string
  nom: string
  type: ClientType
  entreprise?: string
  segment: Lead['segment']
  contact_principal: string
  telephone: string
  email: string
  adresse: string
  ville: string
  date_premier_contact: string // ISO
  ca_total_ht: number
  nombre_chantiers: number
  derniere_intervention: string // ISO
  notes?: string
  tags: string[]
}

export type ChantierStatut =
  | 'devis_en_cours'
  | 'devis_envoye'
  | 'planifie'
  | 'en_cours'
  | 'termine'
  | 'sav'
  | 'annule'

export interface Chantier {
  id: string
  client_id: string
  titre: string
  ville: string
  type_prestation: string
  surface_m2: number
  montant_ht: number
  statut: ChantierStatut
  date_devis: string
  date_debut?: string
  date_fin?: string
  equipe: string[]
  marque_principale?: string
  notes: string
  marge_ht?: number
}

// ── LEADS (12 entries with mixed status) ──────────────────────────
export const leads: Lead[] = [
  {
    id: 'L-2026-042',
    date: '2026-04-29T09:14:00',
    source: 'site_web',
    nom: 'Marie Lefebvre',
    telephone: '06 78 21 34 56',
    email: 'm.lefebvre@hotelpetitnice.fr',
    ville: 'Saint-Martin-de-Ré',
    type_projet: 'Moquette hôtelière, 14 chambres rénovées',
    surface_estimee: '320 m²',
    budget_estime: '12 000 – 18 000 € HT',
    message: "Bonjour, nous prévoyons une rénovation de 14 chambres pour la saison 2027. Idéalement intervention en novembre. Pouvez-vous me proposer plusieurs gammes EGE ?",
    statut: 'nouveau',
    derniere_interaction: '2026-04-29T09:14:00',
    prochaine_action: 'Rappeler avant 02/05',
    segment: 'hotel',
    notes: [],
  },
  {
    id: 'L-2026-041',
    date: '2026-04-28T14:32:00',
    source: 'whatsapp',
    nom: 'Christophe Durand',
    telephone: '06 12 87 45 23',
    ville: 'La Rochelle',
    type_projet: 'Rénovation salle restaurant, sol PVC',
    surface_estimee: '180 m²',
    statut: 'contacte',
    derniere_interaction: '2026-04-29T11:00:00',
    prochaine_action: 'RDV showroom planifié 03/05',
    segment: 'restaurant',
    notes: [
      { date: '2026-04-29T11:00:00', content: "Échange WhatsApp. Cherche un sol PVC effet bois, esprit bistrot. RDV showroom samedi 03/05 à 14h.", auteur: 'VP' },
    ],
  },
  {
    id: 'L-2026-040',
    date: '2026-04-26T16:45:00',
    source: 'site_web',
    nom: 'Sophie Marchand',
    telephone: '07 65 43 21 89',
    email: 'sophie.marchand@gmail.com',
    ville: 'Aytré',
    type_projet: 'Tapis sur mesure salon, motif graphique',
    surface_estimee: '24 m²',
    budget_estime: '2 500 – 4 000 € HT',
    statut: 'devis_envoye',
    derniere_interaction: '2026-04-28T10:30:00',
    prochaine_action: 'Relancer 05/05',
    segment: 'particulier',
    notes: [
      { date: '2026-04-27T08:30:00', content: "Visite chez la cliente. Salon 24 m², parquet existant. Choix d'un motif Balsan Boréale, coloris naturel.", auteur: 'VP' },
      { date: '2026-04-28T10:30:00', content: "Devis envoyé : 3 240 € HT. Validité 30 jours.", auteur: 'VP' },
    ],
  },
  {
    id: 'L-2026-039',
    date: '2026-04-24T11:20:00',
    source: 'architecte',
    nom: 'Atelier 715 — projet villa Île de Ré',
    telephone: '05 46 41 78 20',
    email: 'contact@atelier715.fr',
    ville: 'Le Bois-Plage-en-Ré',
    type_projet: 'Villa contemporaine, moquette bouclée chambre maître + tapis sur mesure salon',
    surface_estimee: '90 m² total',
    budget_estime: '8 000 – 12 000 € HT',
    statut: 'devis_envoye',
    derniere_interaction: '2026-04-26T15:00:00',
    prochaine_action: 'Attendre validation client final',
    segment: 'architecte',
    notes: [
      { date: '2026-04-24T11:20:00', content: "Plans reçus, brief technique précis. Hygrométrie villa Île de Ré : prévoir colle marine. Visite faite avec architecte.", auteur: 'VP' },
      { date: '2026-04-26T15:00:00', content: "Devis envoyé en double exemplaire (architecte + maître d'ouvrage).", auteur: 'VP' },
    ],
  },
  {
    id: 'L-2026-038',
    date: '2026-04-22T08:15:00',
    source: 'telephone',
    nom: 'Patrick Vasseur',
    telephone: '06 23 45 67 89',
    ville: 'Rochefort',
    type_projet: 'Bureau cabinet médical, 4 pièces, sol PVC LVT',
    surface_estimee: '85 m²',
    statut: 'relance',
    derniere_interaction: '2026-04-22T08:15:00',
    prochaine_action: '⚠ Relance overdue depuis 10 jours',
    segment: 'bureau',
    notes: [
      { date: '2026-04-22T08:15:00', content: "Premier contact tel. Voulait juste un ordre de prix. Pas encore décidé sur le matériau.", auteur: 'VP' },
    ],
  },
  {
    id: 'L-2026-037',
    date: '2026-04-19T17:50:00',
    source: 'recommandation',
    nom: 'EHPAD Les Tilleuls',
    telephone: '05 46 27 14 88',
    email: 'direction@ehpad-tilleuls.fr',
    ville: 'Saintes',
    type_projet: 'Réfection sol couloirs étage 2, PVC homogène certifié',
    surface_estimee: '420 m²',
    budget_estime: '22 000 – 28 000 € HT',
    statut: 'converti',
    derniere_interaction: '2026-04-25T14:00:00',
    segment: 'ehpad',
    notes: [
      { date: '2026-04-19T17:50:00', content: "Recommandé par M. Bernard (ancien chantier 2024). Devis demandé urgent.", auteur: 'VP' },
      { date: '2026-04-21T10:00:00', content: "Visite technique faite. Tarkett iQ Optima retenu. Pose en milieu occupé, 4 zones.", auteur: 'VP' },
      { date: '2026-04-25T14:00:00', content: "Devis signé. Acompte 30% reçu. Démarrage 15 mai.", auteur: 'VP' },
    ],
  },
  {
    id: 'L-2026-036',
    date: '2026-04-15T13:42:00',
    source: 'site_web',
    nom: 'Camping Les Pertuis 5*',
    telephone: '05 46 09 12 47',
    email: 'direction@campinglespertuis.com',
    ville: 'Saint-Pierre-d\'Oléron',
    type_projet: '12 mobil-homes premium, sol PVC effet bois',
    surface_estimee: '380 m²',
    budget_estime: '14 000 – 18 000 € HT',
    statut: 'devis_envoye',
    derniere_interaction: '2026-04-23T09:15:00',
    prochaine_action: 'Relance 06/05',
    segment: 'camping',
    notes: [
      { date: '2026-04-15T13:42:00', content: "Demande via formulaire. Saison ouvre 15/06, intervention obligatoire avant fin mai.", auteur: 'VP' },
      { date: '2026-04-18T11:00:00', content: "Visite sur place. Choix Gerflor Senso Urban Wood Forest.", auteur: 'VP' },
      { date: '2026-04-23T09:15:00', content: "Devis envoyé : 16 800 € HT. Échéance pose 15-25 mai si signature avant 03/05.", auteur: 'VP' },
    ],
  },
  {
    id: 'L-2026-035',
    date: '2026-04-12T10:00:00',
    source: 'site_web',
    nom: 'Julien Pradier',
    telephone: '06 99 88 77 66',
    email: 'jul.pradier@orange.fr',
    ville: 'Royan',
    type_projet: '2 chambres, moquette résidentielle haut de gamme',
    surface_estimee: '38 m²',
    statut: 'perdu',
    derniere_interaction: '2026-04-20T16:00:00',
    segment: 'particulier',
    notes: [
      { date: '2026-04-12T10:00:00', content: "Contact site, recherche moquette laine pure.", auteur: 'VP' },
      { date: '2026-04-15T14:00:00', content: "Devis envoyé : 2 850 € HT.", auteur: 'VP' },
      { date: '2026-04-20T16:00:00', content: "Client préfère un revendeur Saint Maclou pour le délai. Lead perdu.", auteur: 'VP' },
    ],
  },
  {
    id: 'L-2026-034',
    date: '2026-04-09T15:25:00',
    source: 'showroom',
    nom: 'Brasserie La Rotonde',
    telephone: '05 46 41 93 22',
    email: 'contact@larotonde-larochelle.fr',
    ville: 'La Rochelle',
    type_projet: 'Moquette acoustique salle (niveau sonore actuel insupportable)',
    surface_estimee: '215 m²',
    budget_estime: '11 000 – 14 000 € HT',
    statut: 'converti',
    derniere_interaction: '2026-04-22T11:00:00',
    segment: 'restaurant',
    notes: [
      { date: '2026-04-09T15:25:00', content: "Visite showroom. Le gérant cherche absolument à baisser le bruit (-8 à -12 dB attendu).", auteur: 'VP' },
      { date: '2026-04-15T10:30:00', content: "Visite technique. Recommandé Balsan Acoustic Plus.", auteur: 'VP' },
      { date: '2026-04-22T11:00:00', content: "Devis signé. Pose programmée nuits du 12-13 et 13-14 mai (fermé le lundi).", auteur: 'VP' },
    ],
  },
  {
    id: 'L-2026-033',
    date: '2026-04-05T11:15:00',
    source: 'whatsapp',
    nom: 'Anne-Charlotte Vidal',
    telephone: '06 14 25 36 47',
    email: 'ac.vidal@studio-vidal.fr',
    ville: 'La Rochelle',
    type_projet: 'Architecte d\'intérieur — chantier en cascade hôtel La Maline',
    surface_estimee: 'Multi-zones, à définir',
    statut: 'contacte',
    derniere_interaction: '2026-04-26T17:00:00',
    prochaine_action: 'Attendre brief précis du MOA',
    segment: 'architecte',
    notes: [
      { date: '2026-04-05T11:15:00', content: "Première prise de contact. Découvert via Atelier 715 (recommandation). Plusieurs projets à venir.", auteur: 'VP' },
      { date: '2026-04-26T17:00:00', content: "Échange tel. Hôtel La Maline en cours d'étude, devis attendu fin mai.", auteur: 'VP' },
    ],
  },
  {
    id: 'L-2026-032',
    date: '2026-04-02T16:00:00',
    source: 'recommandation',
    nom: 'Cabinet d\'avocats Marchais & Associés',
    telephone: '05 46 50 21 88',
    email: 'cabinet@marchais-avocats.fr',
    ville: 'La Rochelle',
    type_projet: 'Rénovation locaux, moquette dalles bureaux + accueil',
    surface_estimee: '210 m²',
    budget_estime: '9 000 – 12 000 € HT',
    statut: 'converti',
    derniere_interaction: '2026-04-18T10:00:00',
    segment: 'bureau',
    notes: [
      { date: '2026-04-02T16:00:00', content: "Recommandé par CB Sols (ancien chantier 2022 du voisin de palier).", auteur: 'VP' },
      { date: '2026-04-08T14:00:00', content: "Devis 10 540 € HT envoyé.", auteur: 'VP' },
      { date: '2026-04-18T10:00:00', content: "Devis signé. Pose les 17-18 mai (week-end).", auteur: 'VP' },
    ],
  },
  {
    id: 'L-2026-031',
    date: '2026-03-28T09:30:00',
    source: 'site_web',
    nom: 'Maison de la Presse',
    telephone: '05 46 95 22 14',
    ville: 'Lagord',
    type_projet: 'Renouvellement sol commerce, dalles PVC haute résistance',
    surface_estimee: '140 m²',
    statut: 'perdu',
    derniere_interaction: '2026-04-10T13:00:00',
    segment: 'commerce',
    notes: [
      { date: '2026-03-28T09:30:00', content: "Demande via formulaire.", auteur: 'VP' },
      { date: '2026-04-10T13:00:00', content: "Refusé devis : trop cher selon le client (avait 4 200 € HT chez un concurrent vs notre 5 800 €).", auteur: 'VP' },
    ],
  },
]

// ── CLIENTS (8 entries, mostly converted leads) ───────────────────
export const clients: Client[] = [
  {
    id: 'C-001',
    nom: 'Hôtel La Baronnie',
    type: 'pro',
    entreprise: 'Hôtel La Baronnie',
    segment: 'hotel',
    contact_principal: 'Véronique Andriot',
    telephone: '05 46 09 21 29',
    email: 'contact@hotel-la-baronnie.com',
    adresse: '17 rue Baron de Chantal',
    ville: 'Saint-Martin-de-Ré',
    date_premier_contact: '2024-09-12',
    ca_total_ht: 84500,
    nombre_chantiers: 3,
    derniere_intervention: '2026-03-15',
    tags: ['hotellerie', 'ile-de-re', 'haut-de-gamme', 'recurrent'],
    notes: 'Client référence Île de Ré. Très satisfait, recommande activement. Possible 2e phase fin 2026.',
  },
  {
    id: 'C-002',
    nom: 'Restaurant Christopher Coutanceau',
    type: 'pro',
    entreprise: 'SARL Coutanceau Restauration',
    segment: 'restaurant',
    contact_principal: 'Christopher Coutanceau',
    telephone: '05 46 41 48 19',
    email: 'contact@coutanceaularochelle.com',
    adresse: 'Plage de la Concurrence',
    ville: 'La Rochelle',
    date_premier_contact: '2025-03-20',
    ca_total_ht: 28400,
    nombre_chantiers: 1,
    derniere_intervention: '2025-11-08',
    tags: ['restauration-etoilee', 'la-rochelle', 'prestige'],
    notes: 'Restaurant 2 étoiles Michelin. Exigence très haute sur les finitions. Client à mettre en avant en référence.',
  },
  {
    id: 'C-003',
    nom: 'Golf de la Prée',
    type: 'pro',
    entreprise: 'Golf de la Prée SAS',
    segment: 'commerce',
    contact_principal: 'Éric Demangeon',
    telephone: '05 46 09 30 30',
    email: 'contact@golf-de-la-pree.com',
    adresse: 'Route du Golf',
    ville: 'La Couarde-sur-Mer',
    date_premier_contact: '2023-04-05',
    ca_total_ht: 47800,
    nombre_chantiers: 2,
    derniere_intervention: '2026-02-12',
    tags: ['ile-de-re', 'sport-loisirs', 'recurrent'],
    notes: 'Clubhouse 2023 + vestiaires 2026. Très bonne relation. Intervention week-end systématique.',
  },
  {
    id: 'C-004',
    nom: 'EHPAD Les Tilleuls',
    type: 'pro',
    entreprise: 'EHPAD Les Tilleuls',
    segment: 'ehpad',
    contact_principal: 'Mme Lacroix (Direction)',
    telephone: '05 46 27 14 88',
    email: 'direction@ehpad-tilleuls.fr',
    adresse: '14 rue des Tilleuls',
    ville: 'Saintes',
    date_premier_contact: '2024-02-10',
    ca_total_ht: 41200,
    nombre_chantiers: 2,
    derniere_intervention: '2026-04-30',
    tags: ['ehpad', 'sante', 'pose-en-milieu-occupe'],
    notes: 'Chantier récurrent. Étage 2 fait en avril 2026, étage 3 prévu 2027.',
  },
  {
    id: 'C-005',
    nom: 'Sophie Marchand',
    type: 'particulier',
    segment: 'particulier',
    contact_principal: 'Sophie Marchand',
    telephone: '07 65 43 21 89',
    email: 'sophie.marchand@gmail.com',
    adresse: '23 avenue de l\'Atlantique',
    ville: 'Aytré',
    date_premier_contact: '2026-04-26',
    ca_total_ht: 3240,
    nombre_chantiers: 1,
    derniere_intervention: '',
    tags: ['particulier', 'tapis-sur-mesure'],
    notes: 'Tapis sur mesure en cours. Devis signé le 30/04.',
  },
  {
    id: 'C-006',
    nom: 'Bistrot de la Grande Terrasse',
    type: 'pro',
    entreprise: 'SARL La Grande Terrasse',
    segment: 'restaurant',
    contact_principal: 'Pierre Lavoine',
    telephone: '05 46 23 45 67',
    email: 'contact@lagrandeterrasse.fr',
    adresse: 'Place de la Mairie',
    ville: 'La Rochelle',
    date_premier_contact: '2025-09-18',
    ca_total_ht: 18750,
    nombre_chantiers: 1,
    derniere_intervention: '2026-01-12',
    tags: ['restauration', 'la-rochelle', 'moquette-acoustique'],
    notes: 'Très satisfait du résultat acoustique (-10 dB mesuré). Recommandation potentielle.',
  },
  {
    id: 'C-007',
    nom: 'Bureaux Apivia Mutuelle',
    type: 'pro',
    entreprise: 'Apivia Mutuelle SA',
    segment: 'bureau',
    contact_principal: 'Frédéric Boutin (Services Généraux)',
    telephone: '05 46 50 24 80',
    email: 'fboutin@apivia.fr',
    adresse: '7 rue de l\'Innovation',
    ville: 'La Rochelle',
    date_premier_contact: '2024-06-12',
    ca_total_ht: 33500,
    nombre_chantiers: 1,
    derniere_intervention: '2024-08-25',
    tags: ['tertiaire', 'la-rochelle', 'pose-week-end'],
    notes: 'Pose 350 m² sur 2 week-ends sans interruption. Possible extension 2027.',
  },
  {
    id: 'C-008',
    nom: 'Cabinet Marchais & Associés',
    type: 'pro',
    entreprise: 'Marchais & Associés Avocats',
    segment: 'bureau',
    contact_principal: 'Maître Marchais',
    telephone: '05 46 50 21 88',
    email: 'cabinet@marchais-avocats.fr',
    adresse: '12 place du Marché',
    ville: 'La Rochelle',
    date_premier_contact: '2026-04-02',
    ca_total_ht: 10540,
    nombre_chantiers: 1,
    derniere_intervention: '',
    tags: ['tertiaire', 'la-rochelle'],
    notes: 'Pose programmée week-end 17-18 mai.',
  },
]

// ── CHANTIERS (12 across all states) ──────────────────────────────
export const chantiers: Chantier[] = [
  {
    id: 'CH-2026-018',
    client_id: 'C-004',
    titre: 'EHPAD Les Tilleuls — Étage 2',
    ville: 'Saintes',
    type_prestation: 'Sol PVC homogène certifié',
    surface_m2: 420,
    montant_ht: 24800,
    statut: 'en_cours',
    date_devis: '2026-04-21',
    date_debut: '2026-04-30',
    date_fin: '2026-05-08',
    equipe: ['Valentin', 'Mehdi', 'Sébastien'],
    marque_principale: 'Tarkett iQ Optima',
    notes: "Pose par zones. Étape 1 terminée (ailes Est). Étape 2 en cours.",
    marge_ht: 7200,
  },
  {
    id: 'CH-2026-017',
    client_id: 'C-008',
    titre: 'Cabinet Marchais — Bureaux + accueil',
    ville: 'La Rochelle',
    type_prestation: 'Moquette dalles haute résistance',
    surface_m2: 210,
    montant_ht: 10540,
    statut: 'planifie',
    date_devis: '2026-04-08',
    date_debut: '2026-05-17',
    date_fin: '2026-05-18',
    equipe: ['Valentin', 'Mehdi'],
    marque_principale: 'Interface Touch & Tones',
    notes: 'Pose week-end pour ne pas interrompre l\'activité du cabinet.',
    marge_ht: 3100,
  },
  {
    id: 'CH-2026-016',
    client_id: 'C-006',
    titre: 'Brasserie La Rotonde — Salle',
    ville: 'La Rochelle',
    type_prestation: 'Moquette acoustique salle restaurant',
    surface_m2: 215,
    montant_ht: 12750,
    statut: 'planifie',
    date_devis: '2026-04-22',
    date_debut: '2026-05-12',
    date_fin: '2026-05-14',
    equipe: ['Valentin', 'Sébastien'],
    marque_principale: 'Balsan Acoustic Plus',
    notes: 'Pose 2 nuits + 1 lundi (jour de fermeture). Réduction ~10 dB attendue.',
    marge_ht: 3850,
  },
  {
    id: 'CH-2026-015',
    client_id: 'C-005',
    titre: 'Tapis sur mesure salon — Mme Marchand',
    ville: 'Aytré',
    type_prestation: 'Tapis sur mesure motif graphique',
    surface_m2: 24,
    montant_ht: 3240,
    statut: 'devis_envoye',
    date_devis: '2026-04-28',
    equipe: ['Valentin'],
    marque_principale: 'Balsan Boréale',
    notes: 'Confection atelier, pose prévue mi-mai si signature.',
    marge_ht: 980,
  },
  {
    id: 'CH-2026-014',
    client_id: 'C-001',
    titre: 'Hôtel La Baronnie — 14 chambres saison 2027',
    ville: 'Saint-Martin-de-Ré',
    type_prestation: 'Moquette hôtelière chambres',
    surface_m2: 320,
    montant_ht: 17200,
    statut: 'devis_en_cours',
    date_devis: '',
    equipe: [],
    notes: 'Lead arrivé 29/04, devis à monter cette semaine. Mme Lefebvre.',
  },
  {
    id: 'CH-2026-013',
    client_id: 'C-003',
    titre: 'Golf de la Prée — Vestiaires hommes',
    ville: 'La Couarde-sur-Mer',
    type_prestation: 'Sol PVC vestiaires',
    surface_m2: 95,
    montant_ht: 6850,
    statut: 'termine',
    date_devis: '2026-01-15',
    date_debut: '2026-02-05',
    date_fin: '2026-02-12',
    equipe: ['Valentin', 'Mehdi'],
    marque_principale: 'Gerflor Tarasafe Plus',
    notes: 'Chantier livré conforme. Réception sans réserve.',
    marge_ht: 2050,
  },
  {
    id: 'CH-2026-012',
    client_id: 'C-002',
    titre: 'Restaurant Coutanceau — Salle gastronomique',
    ville: 'La Rochelle',
    type_prestation: 'Moquette gastronomique sur mesure',
    surface_m2: 220,
    montant_ht: 28400,
    statut: 'termine',
    date_devis: '2025-09-12',
    date_debut: '2025-11-03',
    date_fin: '2025-11-08',
    equipe: ['Valentin', 'Mehdi', 'Sébastien'],
    marque_principale: 'EGE Carpets — Highline 80/20',
    notes: 'Chantier prestige. Très belle référence. Photos à jour.',
    marge_ht: 8200,
  },
  {
    id: 'CH-2025-031',
    client_id: 'C-001',
    titre: 'Hôtel La Baronnie — Tapis sur mesure espaces communs',
    ville: 'Saint-Martin-de-Ré',
    type_prestation: 'Tapis sur mesure motif exclusif + moquette EGE chambres',
    surface_m2: 600,
    montant_ht: 52500,
    statut: 'termine',
    date_devis: '2025-08-10',
    date_debut: '2025-10-20',
    date_fin: '2025-11-15',
    equipe: ['Valentin', 'Mehdi', 'Sébastien'],
    marque_principale: 'EGE + tapis atelier',
    notes: 'Le chantier référence du portfolio. Photos publiées.',
    marge_ht: 15800,
  },
  {
    id: 'CH-2026-019',
    client_id: 'C-001',
    titre: 'Hôtel La Baronnie — SAV moquette couloir nord',
    ville: 'Saint-Martin-de-Ré',
    type_prestation: 'Reprise pose moquette + nettoyage',
    surface_m2: 18,
    montant_ht: 0,
    statut: 'sav',
    date_devis: '2026-03-10',
    date_debut: '2026-03-15',
    date_fin: '2026-03-15',
    equipe: ['Valentin'],
    notes: 'Zone d\'usure prématurée signalée. Reprise gratuite sous garantie. RAS depuis.',
  },
  {
    id: 'CH-2026-011',
    client_id: 'C-007',
    titre: 'Apivia Mutuelle — Open space étage 3',
    ville: 'La Rochelle',
    type_prestation: 'Moquette dalles open space',
    surface_m2: 350,
    montant_ht: 16800,
    statut: 'termine',
    date_devis: '2024-07-02',
    date_debut: '2024-08-24',
    date_fin: '2024-08-25',
    equipe: ['Valentin', 'Mehdi'],
    marque_principale: 'Interface Composure',
    notes: 'Pose week-end. Open space 100 personnes. Aucune perturbation lundi.',
    marge_ht: 5050,
  },
  {
    id: 'CH-2026-020',
    client_id: 'C-005',
    titre: 'Camping Les Pertuis — 12 mobil-homes',
    ville: 'Saint-Pierre-d\'Oléron',
    type_prestation: 'Sol PVC effet bois mobil-homes',
    surface_m2: 380,
    montant_ht: 16800,
    statut: 'devis_envoye',
    date_devis: '2026-04-23',
    equipe: [],
    notes: 'Devis envoyé. Échéance impérative avant ouverture saison 15/06.',
  },
  {
    id: 'CH-2025-024',
    client_id: 'C-006',
    titre: 'Bistrot Grande Terrasse — Salle',
    ville: 'La Rochelle',
    type_prestation: 'Moquette acoustique salle',
    surface_m2: 280,
    montant_ht: 18750,
    statut: 'termine',
    date_devis: '2025-10-05',
    date_debut: '2026-01-08',
    date_fin: '2026-01-12',
    equipe: ['Valentin', 'Mehdi'],
    marque_principale: 'Balsan Acoustic Plus',
    notes: 'Réduction sonore -10 dB mesurée. Très bon retour client.',
    marge_ht: 5400,
  },
]

// ── HELPERS ───────────────────────────────────────────────────────
export function getLeadById(id: string): Lead | undefined {
  return leads.find((l) => l.id === id)
}
export function getClientById(id: string): Client | undefined {
  return clients.find((c) => c.id === id)
}
export function getChantierById(id: string): Chantier | undefined {
  return chantiers.find((c) => c.id === id)
}
export function getChantiersForClient(clientId: string): Chantier[] {
  return chantiers.filter((c) => c.client_id === clientId)
}

// ── KPI agrégés (pour dashboard) ──────────────────────────────────
export function computeKPIs() {
  const now = new Date('2026-05-02')
  const startMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  const startNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1)
  const endNextMonth = new Date(now.getFullYear(), now.getMonth() + 2, 0)

  const ca_mois_en_cours = chantiers
    .filter((c) => c.date_fin && new Date(c.date_fin) >= startMonth && new Date(c.date_fin) < startNextMonth && c.statut === 'termine')
    .reduce((s, c) => s + c.montant_ht, 0)

  const ca_planifie_mois_prochain = chantiers
    .filter((c) => c.date_debut && new Date(c.date_debut) >= startNextMonth && new Date(c.date_debut) <= endNextMonth)
    .reduce((s, c) => s + c.montant_ht, 0)

  const leads_a_relancer = leads.filter((l) => {
    if (l.statut === 'converti' || l.statut === 'perdu') return false
    const days = (now.getTime() - new Date(l.derniere_interaction).getTime()) / (1000 * 60 * 60 * 24)
    return days >= 7
  }).length

  const leads_actifs = leads.filter((l) => l.statut !== 'converti' && l.statut !== 'perdu').length

  const total_leads_ce_mois = leads.filter((l) => new Date(l.date) >= startMonth).length
  const conversions_ce_mois = leads.filter(
    (l) => new Date(l.date) >= startMonth && (l.statut === 'converti' || l.statut === 'devis_envoye')
  ).length
  const taux_conversion = total_leads_ce_mois > 0 ? Math.round((conversions_ce_mois / total_leads_ce_mois) * 100) : 0

  const chantiers_actifs = chantiers.filter((c) => c.statut === 'en_cours' || c.statut === 'planifie').length

  const top_sources: Record<string, number> = {}
  for (const l of leads) {
    top_sources[l.source] = (top_sources[l.source] || 0) + 1
  }

  return {
    ca_mois_en_cours,
    ca_planifie_mois_prochain,
    leads_a_relancer,
    leads_actifs,
    taux_conversion,
    chantiers_actifs,
    total_clients: clients.length,
    top_sources,
  }
}

// ── Labels d'affichage ────────────────────────────────────────────
export const LEAD_STATUS_LABEL: Record<LeadStatus, { label: string; color: string }> = {
  nouveau: { label: 'Nouveau', color: 'var(--terra)' },
  contacte: { label: 'Contacté', color: '#5C8CB5' },
  devis_envoye: { label: 'Devis envoyé', color: '#7A6FCC' },
  relance: { label: 'À relancer', color: '#D9802F' },
  converti: { label: 'Converti', color: '#5DA37C' },
  perdu: { label: 'Perdu', color: '#999' },
}

export const CHANTIER_STATUS_LABEL: Record<ChantierStatut, { label: string; color: string }> = {
  devis_en_cours: { label: 'Devis en cours', color: '#999' },
  devis_envoye: { label: 'Devis envoyé', color: '#7A6FCC' },
  planifie: { label: 'Planifié', color: '#5C8CB5' },
  en_cours: { label: 'En cours', color: 'var(--terra)' },
  termine: { label: 'Terminé', color: '#5DA37C' },
  sav: { label: 'SAV', color: '#D9802F' },
  annule: { label: 'Annulé', color: '#999' },
}

export const SOURCE_LABEL: Record<LeadSource, string> = {
  site_web: 'Site web',
  whatsapp: 'WhatsApp',
  telephone: 'Téléphone',
  showroom: 'Showroom',
  recommandation: 'Recommandation',
  architecte: 'Architecte',
}
