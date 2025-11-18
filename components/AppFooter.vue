<template>
  <footer class="bg-gray-900 text-gray-300 py-12">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <svg class="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
            <span class="text-xl font-bold text-white">ClésEnMain</span>
          </div>
          <p class="text-gray-400">Votre partenaire de confiance pour tous vos projets immobiliers.</p>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Navigation</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="hover:text-primary-500 transition-colors">Accueil</NuxtLink></li>
            <li><NuxtLink to="/nos_biens" class="hover:text-primary-500 transition-colors">Nos Biens</NuxtLink></li>
            <li><a href="#services" class="hover:text-primary-500 transition-colors">Services</a></li>
            <li><a href="#contact" class="hover:text-primary-500 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Services</h4>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-primary-500 transition-colors">Acheter</a></li>
            <li><a href="#" class="hover:text-primary-500 transition-colors">Vendre</a></li>
            <li><a href="#" class="hover:text-primary-500 transition-colors">Estimer</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Contact</h4>
          <ul class="space-y-2">
            <li>📞 01 23 45 67 89</li>
            <li>✉️ contact@clesenmain.fr</li>
            <li>📍 123 Avenue de la République<br/>75001 Paris</li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
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
</template>

