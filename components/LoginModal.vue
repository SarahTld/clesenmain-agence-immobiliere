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
            <h2 class="text-2xl font-bold text-gray-900">Connexion</h2>
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
            <form @submit.prevent="handleLogin" class="space-y-6">
              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="votre@email.com"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                />
              </div>

              <!-- Mot de passe -->
              <div>
                <div class="flex items-center justify-between mb-2">
                  <label for="password" class="block text-sm font-medium text-gray-700">
                    Mot de passe
                  </label>
                  <button
                    type="button"
                    @click="handleForgotPassword"
                    class="text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    Mot de passe oublié ?
                  </button>
                </div>
                <input
                  id="password"
                  v-model="form.password"
                  type="password"
                  required
                  placeholder="••••••••"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                />
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
                  <span v-if="!isLoading">Se connecter</span>
                  <span v-else class="flex items-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Connexion...
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

            <!-- Lien d'inscription -->
            <div class="mt-6 pt-6 border-t border-gray-200 text-center">
              <p class="text-sm text-gray-600">
                Vous n'avez pas de compte ?
                <button
                  type="button"
                  @click="handleSignUp"
                  class="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                >
                  S'inscrire
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

const emit = defineEmits(['close', 'login', 'forgot-password', 'sign-up'])

const form = ref({
  email: '',
  password: ''
})

const error = ref('')
const isLoading = ref(false)

const closeModal = () => {
  form.value = { email: '', password: '' }
  error.value = ''
  emit('close')
}

const handleLogin = async () => {
  error.value = ''
  isLoading.value = true

  try {
    // Simulation d'une connexion (à remplacer par un vrai appel API)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Ici vous pouvez ajouter votre logique de connexion
    // Par exemple : await $fetch('/api/login', { method: 'POST', body: form.value })
    
    emit('login', form.value)
    closeModal()
  } catch (err) {
    error.value = 'Email ou mot de passe incorrect'
  } finally {
    isLoading.value = false
  }
}

const handleForgotPassword = () => {
  closeModal()
  emit('forgot-password')
}

const handleSignUp = () => {
  closeModal()
  emit('sign-up')
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

