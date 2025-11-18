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
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl transform transition-all my-8">
          <!-- Header -->
          <div class="flex items-center justify-between p-5 border-b border-gray-200">
            <h2 class="text-xl font-bold text-gray-900">Créer un compte</h2>
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
          <div class="p-5">
            <form @submit.prevent="handleSignUp" class="space-y-4">
              <!-- Prénom et Nom sur la même ligne -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="firstname" class="block text-sm font-medium text-gray-700 mb-2">
                    Prénom
                  </label>
                  <input
                    id="firstname"
                    v-model="form.firstname"
                    type="text"
                    required
                    placeholder="Jean"
                    class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label for="lastname" class="block text-sm font-medium text-gray-700 mb-2">
                    Nom
                  </label>
                  <input
                    id="lastname"
                    v-model="form.lastname"
                    type="text"
                    required
                    placeholder="Dupont"
                    class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <!-- Email et Téléphone sur la même ligne -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="signup-email" class="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    id="signup-email"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="votre@email.com"
                    class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone (optionnel)
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <!-- Mot de passe et Confirmation sur la même ligne -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="signup-password" class="block text-sm font-medium text-gray-700 mb-2">
                    Mot de passe
                  </label>
                  <input
                    id="signup-password"
                    v-model="form.password"
                    type="password"
                    required
                    placeholder="••••••••"
                    minlength="8"
                    class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                  />
                  <p class="mt-1 text-xs text-gray-500">Minimum 8 caractères</p>
                </div>
                <div>
                  <label for="confirm-password" class="block text-sm font-medium text-gray-700 mb-2">
                    Confirmer le mot de passe
                  </label>
                  <input
                    id="confirm-password"
                    v-model="form.confirmPassword"
                    type="password"
                    required
                    placeholder="••••••••"
                    class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <!-- Validation des mots de passe -->
              <div v-if="form.password && form.confirmPassword && form.password !== form.confirmPassword" class="bg-red-50 border border-red-200 text-red-700 px-4 py-2.5 rounded-lg text-sm">
                Les mots de passe ne correspondent pas
              </div>

              <!-- Conditions générales -->
              <div class="flex items-start">
                <input
                  id="terms"
                  v-model="form.acceptTerms"
                  type="checkbox"
                  required
                  class="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label for="terms" class="ml-2 text-sm text-gray-600">
                  J'accepte les 
                  <a href="#" class="text-primary-600 hover:text-primary-700 font-medium">conditions générales</a>
                  et la 
                  <a href="#" class="text-primary-600 hover:text-primary-700 font-medium">politique de confidentialité</a>
                </label>
              </div>

              <!-- Message d'erreur -->
              <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-2.5 rounded-lg text-sm">
                {{ error }}
              </div>

              <!-- Boutons -->
              <div class="flex flex-col gap-3">
                <button
                  type="submit"
                  :disabled="isLoading || (form.password !== form.confirmPassword)"
                  class="btn-primary w-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="!isLoading">Créer mon compte</span>
                  <span v-else class="flex items-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Création en cours...
                  </span>
                </button>
                <button
                  type="button"
                  @click="closeModal"
                  class="text-gray-600 hover:text-gray-800 font-medium transition-colors"
                >
                  Annuler
                </button>
              </div>
            </form>

            <!-- Lien retour connexion -->
            <div class="mt-4 pt-4 border-t border-gray-200 text-center">
              <p class="text-sm text-gray-600">
                Vous avez déjà un compte ?
                <button
                  type="button"
                  @click="handleBackToLogin"
                  class="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                >
                  Se connecter
                </button>
              </p>
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
  }
})

const emit = defineEmits(['close', 'sign-up', 'back-to-login'])

const form = ref({
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false
})

const error = ref('')
const isLoading = ref(false)

const closeModal = () => {
  form.value = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  }
  error.value = ''
  emit('close')
}

const handleSignUp = async () => {
  error.value = ''
  
  // Validation
  if (form.value.password !== form.value.confirmPassword) {
    error.value = 'Les mots de passe ne correspondent pas'
    return
  }

  if (form.value.password.length < 8) {
    error.value = 'Le mot de passe doit contenir au moins 8 caractères'
    return
  }

  if (!form.value.acceptTerms) {
    error.value = 'Vous devez accepter les conditions générales'
    return
  }

  isLoading.value = true

  try {
    // Simulation d'une inscription (à remplacer par un vrai appel API)
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Ici vous pouvez ajouter votre logique d'inscription
    // Par exemple : await $fetch('/api/signup', { method: 'POST', body: form.value })
    
    emit('sign-up', form.value)
    closeModal()
  } catch (err) {
    error.value = 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.'
  } finally {
    isLoading.value = false
  }
}

const handleBackToLogin = () => {
  closeModal()
  emit('back-to-login')
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

