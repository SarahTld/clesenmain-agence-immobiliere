<template>
  <!-- Overlay -->
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto"
        @click.self="closeModal"
      >
        <!-- Modal -->
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-4xl transform transition-all my-8">
          <!-- Header -->
          <div class="flex items-center justify-between p-6 border-b border-gray-200">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <!-- Icon Acheter -->
                <svg v-if="service === 'acheter'" class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <!-- Icon Vendre -->
                <svg v-else-if="service === 'vendre'" class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <!-- Icon Estimer -->
                <svg v-else class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900">{{ serviceTitle }}</h2>
            </div>
            <button
              @click="closeModal"
              class="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Body -->
          <div class="p-6 md:p-8 max-h-[70vh] overflow-y-auto">
            <div class="prose max-w-none">
              <!-- Contenu dynamique selon le service -->
              <div v-if="service === 'acheter'" class="space-y-6">
                <p class="text-lg text-gray-700 leading-relaxed">
                  Chez ClésEnMain, nous vous accompagnons dans votre projet d'achat immobilier de A à Z. Notre équipe d'experts immobiliers vous guide à chaque étape pour trouver le bien qui correspond parfaitement à vos besoins et à votre budget.
                </p>

                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-4">Notre processus d'accompagnement</h3>
                  <div class="space-y-4">
                    <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div class="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 class="font-semibold text-gray-900 mb-2">Analyse de vos besoins</h4>
                        <p class="text-gray-600">Nous prenons le temps de comprendre vos attentes, votre budget, vos critères de localisation et vos projets de vie. Cette étape est essentielle pour cibler précisément les biens qui vous correspondent.</p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div class="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 class="font-semibold text-gray-900 mb-2">Recherche personnalisée</h4>
                        <p class="text-gray-600">Grâce à notre connaissance approfondie du marché immobilier en Provence-Alpes-Côte d'Azur, nous identifions les meilleures opportunités. Nous analysons les annonces, visitons les biens en avant-première et vous proposons une sélection sur-mesure.</p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div class="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 class="font-semibold text-gray-900 mb-2">Visites accompagnées</h4>
                        <p class="text-gray-600">Nous organisons et accompagnons toutes vos visites. Nos experts vous aident à évaluer chaque bien, à identifier les points d'attention et à poser les bonnes questions. Nous vous donnons notre avis professionnel pour vous aider dans votre décision.</p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div class="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                      <div>
                        <h4 class="font-semibold text-gray-900 mb-2">Négociation et conseils</h4>
                        <p class="text-gray-600">Nous négocions pour vous le meilleur prix et les meilleures conditions. Notre expertise du marché nous permet de vous conseiller sur la valeur réelle du bien et de vous aider à prendre les bonnes décisions.</p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div class="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                      <div>
                        <h4 class="font-semibold text-gray-900 mb-2">Accompagnement administratif</h4>
                        <p class="text-gray-600">Nous vous assistons dans toutes les démarches : constitution du dossier de prêt, vérification des diagnostics, suivi des conditions suspensives, coordination avec le notaire. Nous restons à vos côtés jusqu'à la signature de l'acte authentique.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg">
                  <h4 class="font-semibold text-gray-900 mb-2">Types de biens que nous proposons</h4>
                  <ul class="text-gray-700 space-y-2">
                    <li>• Appartements et studios en centre-ville ou en périphérie</li>
                    <li>• Maisons et villas avec jardin ou piscine</li>
                    <li>• Terrains constructibles pour vos projets</li>
                    <li>• Locaux commerciaux et professionnels</li>
                    <li>• Biens de prestige et investissements locatifs</li>
                  </ul>
                </div>

                <div class="pt-4">
                  <p class="text-gray-600 mb-4">
                    <strong>Notre engagement :</strong> Transparence, réactivité et professionnalisme. Nous mettons notre expertise à votre service pour que votre projet d'achat immobilier se déroule dans les meilleures conditions.
                  </p>
                  <button class="btn-primary" @click="handleContact">Nous contacter pour votre projet</button>
                </div>
              </div>

              <div v-else-if="service === 'vendre'" class="space-y-6">
                <p class="text-lg text-gray-700 leading-relaxed">
                  Vendre votre bien immobilier au meilleur prix et dans les meilleurs délais, c'est notre mission. Chez ClésEnMain, nous mettons notre expertise du marché et notre réseau d'acheteurs qualifiés à votre service pour optimiser votre vente.
                </p>

                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-4">Notre méthode de vente</h3>
                  <div class="space-y-4">
                    <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div class="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 class="font-semibold text-gray-900 mb-2">Estimation précise et gratuite</h4>
                        <p class="text-gray-600">Nous réalisons une étude approfondie de votre bien : analyse comparative du marché, visite détaillée, évaluation des atouts et des points d'amélioration. Vous obtenez une estimation précise et réaliste pour fixer le bon prix de vente.</p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div class="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 class="font-semibold text-gray-900 mb-2">Conseils en valorisation</h4>
                        <p class="text-gray-600">Nous vous conseillons sur les travaux et aménagements qui peuvent augmenter la valeur de votre bien. Mise en scène, home staging, petits travaux de rénovation : nous vous guidons pour présenter votre bien sous son meilleur jour.</p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div class="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 class="font-semibold text-gray-900 mb-2">Promotion multi-canal</h4>
                        <p class="text-gray-600">Nous mettons en place une stratégie de communication complète : annonces optimisées sur les portails immobiliers, réseaux sociaux, mailing à notre base d'acheteurs, partenariats avec d'autres agences. Votre bien bénéficie d'une visibilité maximale.</p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div class="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                      <div>
                        <h4 class="font-semibold text-gray-900 mb-2">Sélection des acquéreurs</h4>
                        <p class="text-gray-600">Nous présélectionnons les candidats sérieux et qualifiés financièrement. Nous organisons les visites, gérons les demandes et vous faisons un retour détaillé sur chaque prospect. Vous gardez le contrôle tout en gagnant du temps.</p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div class="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                      <div>
                        <h4 class="font-semibold text-gray-900 mb-2">Négociation et transaction</h4>
                        <p class="text-gray-600">Nous négocions pour vous le meilleur prix et les meilleures conditions. Nous gérons toute la partie administrative : compromis de vente, conditions suspensives, coordination avec le notaire. Vous êtes accompagné jusqu'à la signature de l'acte authentique.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg">
                  <h4 class="font-semibold text-gray-900 mb-2">Nos avantages pour votre vente</h4>
                  <ul class="text-gray-700 space-y-2">
                    <li>• Réseau d'acheteurs qualifiés et sérieux</li>
                    <li>• Expertise du marché local pour optimiser le prix</li>
                    <li>• Accompagnement personnalisé et réactif</li>
                    <li>• Transparence totale sur les démarches</li>
                    <li>• Suivi régulier et communication constante</li>
                  </ul>
                </div>

                <div class="pt-4">
                  <p class="text-gray-600 mb-4">
                    <strong>Notre objectif :</strong> Vendre votre bien au meilleur prix, dans les meilleurs délais, avec un accompagnement professionnel et rassurant. Faites confiance à notre expertise pour réussir votre vente immobilière.
                  </p>
                  <button class="btn-primary" @click="handleContact">Demander une estimation gratuite</button>
                </div>
              </div>

              <div v-else-if="service === 'estimer'" class="space-y-6">
                <p class="text-lg text-gray-700 leading-relaxed">
                  Obtenir une estimation précise de votre bien immobilier est la première étape essentielle, que vous souhaitiez vendre, acheter ou simplement connaître la valeur de votre patrimoine. Nos experts certifiés vous offrent une évaluation professionnelle et gratuite.
                </p>

                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-4">Comment se déroule notre estimation ?</h3>
                  <div class="space-y-4">
                    <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div class="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 class="font-semibold text-gray-900 mb-2">Prise de contact et rendez-vous</h4>
                        <p class="text-gray-600">Contactez-nous par téléphone, email ou via notre formulaire. Nous convenons ensemble d'un rendez-vous à votre convenance, à votre domicile ou dans nos locaux. L'estimation est entièrement gratuite et sans engagement.</p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div class="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 class="font-semibold text-gray-900 mb-2">Visite approfondie de votre bien</h4>
                        <p class="text-gray-600">Un expert immobilier certifié visite votre bien en détail. Il analyse la surface, l'état général, la qualité des finitions, l'orientation, l'exposition, les équipements, le jardin, le parking, etc. Il prend en compte tous les éléments qui influencent la valeur.</p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div class="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 class="font-semibold text-gray-900 mb-2">Analyse comparative du marché (CMI)</h4>
                        <p class="text-gray-600">Nous comparons votre bien avec les biens similaires vendus récemment dans votre secteur. Nous analysons les prix au m², les tendances du marché local, l'offre et la demande. Cette étude comparative nous permet d'établir une fourchette de prix précise.</p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div class="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                      <div>
                        <h4 class="font-semibold text-gray-900 mb-2">Rapport détaillé d'estimation</h4>
                        <p class="text-gray-600">Sous 48h, vous recevez un rapport complet avec : la fourchette de prix recommandée, l'analyse du marché local, les points forts et points d'attention de votre bien, des conseils pour optimiser sa valeur si vous souhaitez vendre.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg">
                  <h4 class="font-semibold text-gray-900 mb-2">Pourquoi faire estimer votre bien ?</h4>
                  <ul class="text-gray-700 space-y-2">
                    <li>• <strong>Pour vendre :</strong> Fixer le bon prix de vente et éviter de surévaluer ou sous-évaluer</li>
                    <li>• <strong>Pour acheter :</strong> Négocier en connaissance de cause et éviter de surpayer</li>
                    <li>• <strong>Pour investir :</strong> Évaluer la rentabilité d'un bien locatif</li>
                    <li>• <strong>Pour la succession :</strong> Connaître la valeur de votre patrimoine</li>
                    <li>• <strong>Pour l'assurance :</strong> Assurer votre bien à sa juste valeur</li>
                  </ul>
                </div>

                <div class="pt-4">
                  <p class="text-gray-600 mb-4">
                    <strong>Notre garantie :</strong> Une estimation professionnelle, objective et transparente, réalisée par des experts certifiés qui connaissent parfaitement le marché immobilier de votre région.
                  </p>
                  <button class="btn-primary" @click="handleContact">Demander une estimation gratuite</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  service: {
    type: String,
    default: 'acheter',
    validator: (value) => ['acheter', 'vendre', 'estimer'].includes(value)
  }
})

const emit = defineEmits(['close', 'contact'])

const serviceData = {
  acheter: {
    title: 'Acheter un bien immobilier',
    icon: 'HomeIcon'
  },
  vendre: {
    title: 'Vendre votre bien immobilier',
    icon: 'CurrencyIcon'
  },
  estimer: {
    title: 'Estimation immobilière gratuite',
    icon: 'CalculatorIcon'
  }
}

const serviceTitle = computed(() => serviceData[props.service]?.title || '')

const closeModal = () => {
  emit('close')
}

const handleContact = () => {
  closeModal()
  emit('contact', props.service)
  // Scroll vers la section contact
  setTimeout(() => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, 300)
}

// Fermer avec la touche Escape
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape' && props.isOpen) {
      closeModal()
    }
  }
  window.addEventListener('keydown', handleEscape)
  
  onUnmounted(() => {
    window.removeEventListener('keydown', handleEscape)
  })
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active > div,
.modal-leave-active > div {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from > div,
.modal-leave-to > div {
  transform: scale(0.9);
  opacity: 0;
}
</style>

