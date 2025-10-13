<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm sticky top-0 z-50">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <button @click="goHome" class="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
            <span class="text-xl font-bold text-gray-900">ClésEnMain</span>
          </button>
          <button @click="goHome" class="text-primary-600 hover:text-primary-700 font-medium transition-colors">
            ← Retour à l'accueil
          </button>
        </div>
      </div>
    </nav>

    <!-- Header de recherche -->
    <div class="bg-gradient-to-r from-primary-600 to-primary-800 py-12">
      <div class="container mx-auto px-6">
        <h1 class="text-4xl font-bold text-white mb-6">Résultats de recherche</h1>
        
        <!-- Barre de recherche -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Type de bien</label>
              <select v-model="searchFilters.type" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent bg-white">
                <option>Tous</option>
                <option>Appartement</option>
                <option>Maison</option>
                <option>Terrain</option>
                <option>Local commercial</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Localisation</label>
              <input v-model="searchFilters.location" type="text" placeholder="Ville, quartier..." class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Budget max</label>
              <input v-model="searchFilters.budget" type="text" placeholder="500 000 €" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent" />
            </div>
            <div class="flex items-end">
              <button @click="applyFilters" class="btn-primary w-full">
                <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Actualiser
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Résultats -->
    <div class="container mx-auto px-6 py-12">
      <!-- Nombre de résultats -->
      <div class="mb-8">
        <p class="text-lg text-gray-600">
          <span class="font-bold text-gray-900">{{ filteredBiens.length }}</span> 
          {{ filteredBiens.length > 1 ? 'biens trouvés' : 'bien trouvé' }}
        </p>
      </div>

      <!-- Aucun résultat -->
      <div v-if="filteredBiens.length === 0" class="text-center py-20">
        <svg class="w-24 h-24 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-2xl font-bold text-gray-900 mb-2">Aucun bien trouvé</h3>
        <p class="text-gray-600 mb-6">Essayez de modifier vos critères de recherche</p>
        <button @click="resetFilters" class="btn-primary">
          Réinitialiser la recherche
        </button>
      </div>

      <!-- Grille de biens -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="bien in filteredBiens" :key="bien.id" class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2">
          <div :class="['relative h-64 bg-gradient-to-br overflow-hidden', bien.gradient]">
            <div class="absolute top-4 right-4 bg-white px-4 py-2 rounded-full transform group-hover:scale-110 transition-transform">
              <span class="text-primary-600 font-bold">{{ formatPrice(bien.prix) }}</span>
            </div>
            <div class="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {{ bien.type }}
            </div>
            <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ bien.titre }}</h3>
            <p class="text-gray-600 mb-4">📍 {{ bien.location }}</p>
            <p class="text-gray-500 text-sm mb-4">{{ bien.description }}</p>
            <div v-if="bien.type !== 'Terrain'" class="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <span v-if="bien.chambres > 0">🛏️ {{ bien.chambres }} {{ bien.chambres > 1 ? 'chambres' : 'chambre' }}</span>
              <span v-if="bien.sallesDeBain > 0">🛁 {{ bien.sallesDeBain }} {{ bien.sallesDeBain > 1 ? 'salles de bain' : 'salle de bain' }}</span>
              <span>📐 {{ bien.surface }} m²</span>
            </div>
            <div v-else class="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <span>📐 {{ bien.surface }} m²</span>
            </div>
            <button class="text-primary-600 font-semibold group-hover:underline">Voir les détails →</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 py-12 mt-20">
      <div class="container mx-auto px-6">
        <div class="text-center text-gray-400">
          <p class="mb-2">&copy; 2025 ClésEnMain. Tous droits réservés.</p>
          <p class="text-sm">
            Développé avec ❤️ par 
            <a href="https://github.com/SarahTld" target="_blank" rel="noopener noreferrer" class="text-primary-500 hover:text-primary-400 transition-colors font-semibold">
              Sarah T
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const { biens, filterBiens } = useBiens()

// Fonction pour retourner à l'accueil
const goHome = () => {
  window.location.href = '/'
}

// Filtres de recherche (formulaire)
const searchFilters = ref({
  type: 'Tous',
  location: '',
  budget: ''
})

// Filtres actifs (ceux qui sont appliqués aux résultats)
const activeFilters = ref({
  type: 'Tous',
  location: '',
  budget: ''
})

// Biens filtrés (utilise activeFilters, pas searchFilters)
const filteredBiens = computed(() => {
  return filterBiens(activeFilters.value)
})

// Initialisation avec les paramètres de l'URL
onMounted(() => {
  // Si on a des paramètres de recherche dans l'URL, on les applique
  if (route.query.type) {
    searchFilters.value.type = String(route.query.type)
    activeFilters.value.type = String(route.query.type)
  }
  if (route.query.location) {
    searchFilters.value.location = String(route.query.location)
    activeFilters.value.location = String(route.query.location)
  }
  if (route.query.budget) {
    searchFilters.value.budget = String(route.query.budget)
    activeFilters.value.budget = String(route.query.budget)
  }
  
  // Si on n'a pas de paramètres (lien "Nos Biens"), on affiche tous les biens
  if (!route.query.type && !route.query.location && !route.query.budget) {
    // Les filtres restent par défaut (Tous, '', '') et affichent tous les biens
  }
})

// Fonction pour formater le prix
const formatPrice = (price) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

// Appliquer les filtres
const applyFilters = () => {
  // Copier les valeurs du formulaire vers les filtres actifs
  activeFilters.value = {
    type: searchFilters.value.type,
    location: searchFilters.value.location,
    budget: searchFilters.value.budget
  }
}

// Réinitialiser les filtres
const resetFilters = () => {
  searchFilters.value = {
    type: 'Tous',
    location: '',
    budget: ''
  }
  activeFilters.value = {
    type: 'Tous',
    location: '',
    budget: ''
  }
}
</script>

