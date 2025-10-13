// Interface pour les biens immobiliers

export const useBiens = () => {
  // Base de données fictive des biens immobiliers
  const biens = [
    {
      id: 1,
      type: 'Maison',
      titre: 'Villa Moderne avec Piscine',
      location: 'Aix-en-Provence',
      prix: 495000,
      chambres: 4,
      sallesDeBain: 2,
      surface: 180,
      gradient: 'from-primary-400 to-primary-600',
      description: 'Magnifique villa moderne avec piscine, située dans un quartier calme d\'Aix-en-Provence. Grande terrasse et jardin arboré.'
    },
    {
      id: 2,
      type: 'Appartement',
      titre: 'Appartement Vue Mer',
      location: 'Nice',
      prix: 325000,
      chambres: 3,
      sallesDeBain: 1,
      surface: 95,
      gradient: 'from-blue-400 to-blue-600',
      description: 'Superbe appartement avec vue panoramique sur la mer Méditerranée. Proche des commodités et de la Promenade des Anglais.'
    },
    {
      id: 3,
      type: 'Maison',
      titre: 'Mas Provençal Authentique',
      location: 'Luberon',
      prix: 675000,
      chambres: 5,
      sallesDeBain: 3,
      surface: 250,
      gradient: 'from-green-400 to-green-600',
      description: 'Authentique mas provençal avec piscine et vue imprenable sur le Luberon. Pierres apparentes et poutres d\'origine.'
    },
    {
      id: 4,
      type: 'Appartement',
      titre: 'Penthouse Luxueux',
      location: 'Monaco',
      prix: 2500000,
      chambres: 4,
      sallesDeBain: 3,
      surface: 200,
      gradient: 'from-purple-400 to-purple-600',
      description: 'Penthouse d\'exception avec terrasse panoramique et vue sur la mer. Prestations haut de gamme et emplacement privilégié.'
    },
    {
      id: 5,
      type: 'Maison',
      titre: 'Maison de Campagne',
      location: 'Aix-en-Provence',
      prix: 380000,
      chambres: 3,
      sallesDeBain: 2,
      surface: 140,
      gradient: 'from-yellow-400 to-yellow-600',
      description: 'Charmante maison de campagne avec grand jardin. Calme et sérénité à quelques minutes du centre-ville.'
    },
    {
      id: 6,
      type: 'Appartement',
      titre: 'Studio Centre-Ville',
      location: 'Nice',
      prix: 180000,
      chambres: 1,
      sallesDeBain: 1,
      surface: 35,
      gradient: 'from-pink-400 to-pink-600',
      description: 'Studio moderne en plein centre-ville, idéal pour investissement locatif ou première acquisition.'
    },
    {
      id: 7,
      type: 'Terrain',
      titre: 'Terrain Constructible',
      location: 'Luberon',
      prix: 120000,
      chambres: 0,
      sallesDeBain: 0,
      surface: 1500,
      gradient: 'from-orange-400 to-orange-600',
      description: 'Magnifique terrain constructible avec vue panoramique. Viabilisé et prêt à bâtir.'
    },
    {
      id: 8,
      type: 'Local commercial',
      titre: 'Local Commercial Centre',
      location: 'Monaco',
      prix: 850000,
      chambres: 0,
      sallesDeBain: 2,
      surface: 80,
      gradient: 'from-red-400 to-red-600',
      description: 'Local commercial en plein centre, fort passage piéton. Idéal pour boutique ou restaurant.'
    },
    {
      id: 9,
      type: 'Maison',
      titre: 'Villa Vue Mer',
      location: 'Nice',
      prix: 1200000,
      chambres: 6,
      sallesDeBain: 4,
      surface: 300,
      gradient: 'from-teal-400 to-teal-600',
      description: 'Villa d\'architecte avec vue mer exceptionnelle. Piscine à débordement et prestations de luxe.'
    },
    {
      id: 10,
      type: 'Appartement',
      titre: 'Duplex Moderne',
      location: 'Aix-en-Provence',
      prix: 420000,
      chambres: 3,
      sallesDeBain: 2,
      surface: 110,
      gradient: 'from-indigo-400 to-indigo-600',
      description: 'Superbe duplex avec terrasse, dans résidence récente avec parking et cave.'
    }
  ];

  // Fonction de filtrage des biens
  const filterBiens = (filters) => {
    let filtered = [...biens];

    // Filtre par type
    if (filters.type && filters.type !== 'Tous') {
      filtered = filtered.filter(bien => bien.type === filters.type);
    }

    // Filtre par localisation
    if (filters.location && filters.location.trim() !== '') {
      const searchLocation = filters.location.toLowerCase().trim();
      filtered = filtered.filter(bien => 
        bien.location.toLowerCase().includes(searchLocation)
      );
    }

    // Filtre par budget
    if (filters.budget && filters.budget.trim() !== '') {
      // Nettoyer le budget (supprimer espaces, €, etc.)
      const budgetStr = filters.budget.replace(/\s/g, '').replace(/€/g, '').replace(/\./g, '');
      const budgetMax = parseInt(budgetStr);
      
      if (!isNaN(budgetMax)) {
        filtered = filtered.filter(bien => bien.prix <= budgetMax);
      }
    }

    return filtered;
  };

  return {
    biens,
    filterBiens
  };
};

