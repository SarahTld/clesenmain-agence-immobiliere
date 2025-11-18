<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-screen bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
      <!-- Animated Background Shapes -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div class="absolute top-1/2 left-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      <div class="absolute inset-0 bg-black opacity-20"></div>
      
      <!-- Navigation -->
      <nav class="relative z-20 container mx-auto px-6 py-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
            <span class="text-2xl font-bold text-white">ClésEnMain</span>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <NuxtLink to="/nos_biens" class="text-white hover:text-primary-200 transition-colors font-medium">Nos Biens</NuxtLink>
            <a href="#services" class="text-white hover:text-primary-200 transition-colors font-medium">Services</a>
            <a href="#contact" class="text-white hover:text-primary-200 transition-colors font-medium">Contact</a>
            <button @click="openLoginModal" class="bg-white text-primary-600 px-6 py-2 rounded-full font-semibold hover:bg-primary-50 transition-all">
              Se connecter
            </button>
          </div>
        </div>
      </nav>

      <!-- Hero Content -->
      <div class="relative z-10 container mx-auto px-6 h-[calc(100vh-100px)] flex items-center">
        <div class="w-full max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up" style="animation-delay: 0.2s; opacity: 0;">
              Votre nouvelle vie commence ici
            </h1>
            <p class="text-xl md:text-2xl text-primary-100 mb-12 leading-relaxed animate-slide-up" style="animation-delay: 0.4s; opacity: 0;">
              Découvrez des propriétés exceptionnelles avec l'expertise et le service personnalisé que vous méritez
            </p>
          </div>

          <!-- Search Bar integrated in Hero -->
          <div class="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 animate-slide-up" style="animation-delay: 0.6s; opacity: 0;">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Type de bien</label>
                <select v-model="searchForm.type" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent bg-white">
                  <option>Appartement</option>
                  <option>Maison</option>
                  <option>Terrain</option>
                  <option>Local commercial</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Localisation</label>
                <input v-model="searchForm.location" type="text" placeholder="Ville, quartier..." class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Budget max</label>
                <input v-model="searchForm.budget" type="text" placeholder="500 000 €" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent" />
              </div>
              <div class="flex items-end">
                <button @click="handleSearch" class="btn-primary w-full">
                  <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Rechercher
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Decorative elements -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
        </svg>
      </div>
    </section>
    <!-- Featured Properties -->
    <section id="biens" class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16 scroll-reveal">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Biens d'exception</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">Découvrez notre sélection de propriétés premium</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Property Card 1 -->
          <div class="scroll-reveal group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2">
            <div class="relative h-64 bg-gradient-to-br from-primary-400 to-primary-600 overflow-hidden">
              <div class="absolute top-4 right-4 bg-white px-4 py-2 rounded-full transform group-hover:scale-110 transition-transform">
                <span class="text-primary-600 font-bold">495 000 €</span>
              </div>
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Villa Moderne avec Piscine</h3>
              <p class="text-gray-600 mb-4">📍 Aix-en-Provence</p>
              <div class="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span>🛏️ 4 chambres</span>
                <span>🛁 2 salles de bain</span>
                <span>📐 180 m²</span>
              </div>
              <button class="text-primary-600 font-semibold group-hover:underline">Voir les détails →</button>
            </div>
          </div>

          <!-- Property Card 2 -->
          <div class="scroll-reveal group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2">
            <div class="relative h-64 bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden">
              <div class="absolute top-4 right-4 bg-white px-4 py-2 rounded-full transform group-hover:scale-110 transition-transform">
                <span class="text-primary-600 font-bold">325 000 €</span>
              </div>
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Appartement Vue Mer</h3>
              <p class="text-gray-600 mb-4">📍 Nice</p>
              <div class="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span>🛏️ 3 chambres</span>
                <span>🛁 1 salle de bain</span>
                <span>📐 95 m²</span>
              </div>
              <button class="text-primary-600 font-semibold group-hover:underline">Voir les détails →</button>
            </div>
          </div>

          <!-- Property Card 3 -->
          <div class="scroll-reveal group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2">
            <div class="relative h-64 bg-gradient-to-br from-green-400 to-green-600 overflow-hidden">
              <div class="absolute top-4 right-4 bg-white px-4 py-2 rounded-full transform group-hover:scale-110 transition-transform">
                <span class="text-primary-600 font-bold">675 000 €</span>
              </div>
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Mas Provençal Authentique</h3>
              <p class="text-gray-600 mb-4">📍 Luberon</p>
              <div class="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span>🛏️ 5 chambres</span>
                <span>🛁 3 salles de bain</span>
                <span>📐 250 m²</span>
              </div>
              <button class="text-primary-600 font-semibold group-hover:underline">Voir les détails →</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16 scroll-reveal">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">Un accompagnement complet pour tous vos projets immobiliers</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="scroll-reveal bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-all group-hover:scale-110">
              <svg class="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Acheter</h3>
            <p class="text-gray-600 mb-6">Trouvez la propriété de vos rêves avec nos experts qui vous accompagnent à chaque étape.</p>
            <button class="btn-secondary w-full">En savoir plus</button>
          </div>

          <div class="scroll-reveal bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-all group-hover:scale-110">
              <svg class="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Vendre</h3>
            <p class="text-gray-600 mb-6">Vendez au meilleur prix grâce à notre expertise du marché et notre réseau d'acheteurs qualifiés.</p>
            <button class="btn-secondary w-full">En savoir plus</button>
          </div>

          <div class="scroll-reveal bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-all group-hover:scale-110">
              <svg class="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Estimer</h3>
            <p class="text-gray-600 mb-6">Obtenez une estimation précise et gratuite de votre bien par nos experts certifiés.</p>
            <button class="btn-secondary w-full">En savoir plus</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="scroll-reveal bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 md:p-20 text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Prêt à concrétiser votre projet ?</h2>
          <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contactez nos experts pour un accompagnement personnalisé
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all text-lg shadow-xl">
              📞 Nous appeler
            </button>
            <button class="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition-all text-lg border-2 border-white/20">
              ✉️ Nous écrire
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <AppFooter />

    <!-- Modal de connexion -->
    <LoginModal 
      :is-open="isLoginModalOpen" 
      @close="closeLoginModal" 
      @login="handleLogin"
      @forgot-password="handleForgotPassword"
      @sign-up="handleSignUp"
    />

    <!-- Modal mot de passe oublié -->
    <ForgotPasswordModal 
      :is-open="isForgotPasswordModalOpen" 
      @close="closeForgotPasswordModal" 
      @reset-password="handleResetPassword"
      @back-to-login="handleBackToLoginFromForgot"
    />

    <!-- Modal d'inscription -->
    <SignUpModal 
      :is-open="isSignUpModalOpen" 
      @close="closeSignUpModal" 
      @sign-up="handleSignUpSubmit"
      @back-to-login="handleBackToLoginFromSignUp"
    />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

let observer = null;
const isScrolled = ref(false)
const isLoginModalOpen = ref(false)
const isForgotPasswordModalOpen = ref(false)
const isSignUpModalOpen = ref(false)

// Formulaire de recherche
const searchForm = ref({
  type: 'Appartement',
  location: '',
  budget: ''
})

// Gestion de la modal de connexion
const openLoginModal = () => {
  isLoginModalOpen.value = true
}

const closeLoginModal = () => {
  isLoginModalOpen.value = false
}

const handleLogin = (credentials) => {
  // Ici vous pouvez gérer la connexion
  console.log('Connexion avec:', credentials)
  // Par exemple : rediriger vers une page, stocker le token, etc.
}

// Gestion de la modal mot de passe oublié
const handleForgotPassword = () => {
  isForgotPasswordModalOpen.value = true
}

const closeForgotPasswordModal = () => {
  isForgotPasswordModalOpen.value = false
}

const handleResetPassword = (data) => {
  // Ici vous pouvez gérer la réinitialisation du mot de passe
  console.log('Réinitialisation du mot de passe pour:', data.email)
  // Par exemple : afficher un message de succès, etc.
}

const handleBackToLoginFromForgot = () => {
  isLoginModalOpen.value = true
}

// Gestion de la modal d'inscription
const handleSignUp = () => {
  isSignUpModalOpen.value = true
}

const closeSignUpModal = () => {
  isSignUpModalOpen.value = false
}

const handleSignUpSubmit = (data) => {
  // Ici vous pouvez gérer l'inscription
  console.log('Inscription avec:', data)
  // Par exemple : rediriger vers une page, afficher un message de succès, etc.
}

const handleBackToLoginFromSignUp = () => {
  isLoginModalOpen.value = true
}

// Fonction de recherche
const handleSearch = () => {
  navigateTo({
    path: '/nos_biens',
    query: {
      type: searchForm.value.type,
      location: searchForm.value.location,
      budget: searchForm.value.budget
    }
  })
}

onMounted(() => {
  // Intersection Observer pour les animations au scroll
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  // Observer tous les éléments avec la classe scroll-reveal
  const elements = document.querySelectorAll('.scroll-reveal')
  elements.forEach((el) => observer?.observe(el))

  // Gestion du scroll pour le header
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  observer?.disconnect()
  window.removeEventListener('scroll', handleScroll)
})
</script>

