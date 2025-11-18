<template>
  <!-- Overlay -->
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        @click.self="closeModal"
      >
        <!-- Modal -->
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all">
          <!-- Header -->
          <div class="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 class="text-2xl font-bold text-gray-900">Mot de passe oublié</h2>
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
          <div class="p-6">
            <p class="text-gray-600 mb-6">
              Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.
            </p>

            <form @submit.prevent="handleResetPassword" class="space-y-6">
              <!-- Email -->
              <div>
                <label for="reset-email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  id="reset-email"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="votre@email.com"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                />
              </div>

              <!-- Message de succès -->
              <div v-if="success" class="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                {{ success }}
              </div>

              <!-- Message d'erreur -->
              <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {{ error }}
              </div>

              <!-- Boutons -->
              <div class="flex flex-col gap-3">
                <button
                  type="submit"
                  :disabled="isLoading"
                  class="btn-primary w-full flex items-center justify-center"
                >
                  <span v-if="!isLoading">Envoyer le lien de réinitialisation</span>
                  <span v-else class="flex items-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
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
            <div class="mt-6 pt-6 border-t border-gray-200 text-center">
              <p class="text-sm text-gray-600">
                Vous vous souvenez de votre mot de passe ?
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

const emit = defineEmits(['close', 'reset-password', 'back-to-login'])

const form = ref({
  email: ''
})

const error = ref('')
const success = ref('')
const isLoading = ref(false)

const closeModal = () => {
  form.value = { email: '' }
  error.value = ''
  success.value = ''
  emit('close')
}

const handleResetPassword = async () => {
  error.value = ''
  success.value = ''
  isLoading.value = true

  try {
    // Simulation d'un envoi d'email (à remplacer par un vrai appel API)
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Ici vous pouvez ajouter votre logique de réinitialisation
    // Par exemple : await $fetch('/api/reset-password', { method: 'POST', body: form.value })
    
    success.value = 'Un email de réinitialisation a été envoyé à ' + form.value.email
    emit('reset-password', form.value)
    
    // Fermer la modal après 3 secondes
    setTimeout(() => {
      closeModal()
    }, 3000)
  } catch (err) {
    error.value = 'Une erreur est survenue. Veuillez réessayer.'
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

