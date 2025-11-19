<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm sticky top-0 z-50">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
            <span class="text-xl font-bold text-gray-900">ClésEnMain</span>
          </NuxtLink>
          <button @click="goBack" class="text-primary-600 hover:text-primary-700 font-medium transition-colors">
            ← Retour
          </button>
        </div>
      </div>
    </nav>

    <!-- Contenu principal -->
    <div v-if="bien" class="container mx-auto px-6 py-8">
      <!-- Image principale -->
      <div :class="['relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-8 shadow-xl', `bg-gradient-to-br ${bien.gradient}`]">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="absolute top-6 left-6 bg-white px-4 py-2 rounded-full">
          <span class="text-primary-600 font-bold text-lg">{{ formatPrice(bien.prix) }}</span>
        </div>
        <div class="absolute top-6 right-6 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
          {{ bien.type }}
        </div>
        <div class="absolute bottom-6 left-6 right-6">
          <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">{{ bien.titre }}</h1>
          <p class="text-white/90 text-lg">📍 {{ bien.location }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Colonne principale -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Description -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Description</h2>
            <p class="text-gray-700 leading-relaxed text-lg">{{ bien.description }}</p>
            <p class="text-gray-600 mt-4 leading-relaxed">
              Ce bien exceptionnel vous offre une opportunité unique dans le marché immobilier de {{ bien.location }}. 
              Situé dans un secteur privilégié, il combine confort, qualité et emplacement idéal pour répondre à tous vos besoins.
            </p>
          </div>

          <!-- Caractéristiques détaillées -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Caractéristiques</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div v-if="bien.chambres > 0" class="text-center p-4 bg-gray-50 rounded-xl">
                <div class="text-3xl mb-2">🛏️</div>
                <div class="text-2xl font-bold text-gray-900">{{ bien.chambres }}</div>
                <div class="text-sm text-gray-600">{{ bien.chambres > 1 ? 'Chambres' : 'Chambre' }}</div>
              </div>
              <div v-if="bien.sallesDeBain > 0" class="text-center p-4 bg-gray-50 rounded-xl">
                <div class="text-3xl mb-2">🛁</div>
                <div class="text-2xl font-bold text-gray-900">{{ bien.sallesDeBain }}</div>
                <div class="text-sm text-gray-600">{{ bien.sallesDeBain > 1 ? 'Salles de bain' : 'Salle de bain' }}</div>
              </div>
              <div class="text-center p-4 bg-gray-50 rounded-xl">
                <div class="text-3xl mb-2">📐</div>
                <div class="text-2xl font-bold text-gray-900">{{ bien.surface }}</div>
                <div class="text-sm text-gray-600">m²</div>
              </div>
              <div class="text-center p-4 bg-gray-50 rounded-xl">
                <div class="text-3xl mb-2">💰</div>
                <div class="text-2xl font-bold text-gray-900">{{ Math.round(bien.prix / bien.surface) }}</div>
                <div class="text-sm text-gray-600">€/m²</div>
              </div>
            </div>
          </div>

          <!-- Points forts -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Points forts</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">Emplacement privilégié à {{ bien.location }}</span>
              </div>
              <div class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">Bien entretenu et en excellent état</span>
              </div>
              <div class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">Prix attractif sur le marché</span>
              </div>
              <div class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">Accompagnement personnalisé</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Carte de contact -->
          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Intéressé par ce bien ?</h3>
            <p class="text-gray-600 mb-6">Contactez-nous pour plus d'informations ou pour organiser une visite.</p>
            
            <div class="space-y-4">
              <button class="btn-primary w-full">
                📞 Nous appeler
              </button>
              <button class="btn-secondary w-full">
                ✉️ Demander des infos
              </button>
              <button class="w-full px-4 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-all">
                📅 Réserver une visite
              </button>
            </div>

            <div class="mt-6 pt-6 border-t border-gray-200">
              <div class="flex items-center space-x-3 mb-4">
                <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <div class="font-semibold text-gray-900">Expert Immobilier</div>
                  <div class="text-sm text-gray-600">ClésEnMain</div>
                </div>
              </div>
              <div class="text-sm text-gray-600 space-y-1">
                <p>📞 01 23 45 67 89</p>
                <p>✉️ contact@clesenmain.fr</p>
              </div>
            </div>
          </div>

          <!-- Informations pratiques -->
          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Informations pratiques</h3>
            <div class="space-y-3 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600">Référence :</span>
                <span class="font-semibold text-gray-900">REF-{{ String(bien.id).padStart(4, '0') }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Type :</span>
                <span class="font-semibold text-gray-900">{{ bien.type }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Localisation :</span>
                <span class="font-semibold text-gray-900">{{ bien.location }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Prix :</span>
                <span class="font-semibold text-primary-600">{{ formatPrice(bien.prix) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bien non trouvé -->
    <div v-else class="container mx-auto px-6 py-20 text-center">
      <svg class="w-24 h-24 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Bien non trouvé</h2>
      <p class="text-gray-600 mb-8">Le bien que vous recherchez n'existe pas ou a été supprimé.</p>
      <NuxtLink to="/nos_biens" class="btn-primary">
        Voir tous nos biens
      </NuxtLink>
    </div>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const { getBienById } = useBiens()

// Récupérer l'ID depuis les paramètres de la route
const bienId = parseInt(route.params.id)
const bien = getBienById(bienId)

// Fonction pour retourner à la page précédente
const goBack = () => {
  // Utiliser l'historique du navigateur directement
  if (process.client) {
    window.history.back()
  } else {
    navigateTo('/')
  }
}

// Fonction pour formater le prix
const formatPrice = (price) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

// Meta tags pour le SEO
useHead({
  title: bien ? `${bien.titre} - ${bien.location} | ClésEnMain` : 'Bien non trouvé | ClésEnMain',
  meta: [
    {
      name: 'description',
      content: bien ? bien.description : 'Bien immobilier non trouvé'
    }
  ]
})
</script>

