<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center px-4">
    <div class="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative">
      <!-- Botón para volver -->
      <button
        @click="router.push('/')"
        class="absolute top-4 right-4 text-sm text-blue-600 hover:text-indigo-600 transition"
      >
        ← Regresar
      </button>

      <!-- Título -->
      <h1 class="text-3xl font-extrabold text-center text-gray-800 mb-6 tracking-tight">
        Iniciar Sesión
      </h1>

      <!-- Formulario -->
      <form @submit.prevent="login" class="space-y-5">
        <div>
          <label class="block text-gray-600 mb-1 font-medium">Usuario</label>
          <input
            v-model="username"
            type="text"
            placeholder="Tu usuario"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label class="block text-gray-600 mb-1 font-medium">Contraseña</label>
          <input
            v-model="password"
            type="password"
            placeholder="Tu contraseña"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <!-- Botón login -->
        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-[1.01] transition-all"
        >
          {{ loading ? 'Ingresando...' : 'Entrar' }}
        </button>
      </form>

      <!-- Error -->
      <p v-if="error" class="text-red-500 text-sm text-center mt-4">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

const login = async () => {
  error.value = ''
  loading.value = true

  try {
    const response = await axios.post('http://localhost:4000/api/auth/login', {
      username: username.value,
      password: password.value
    })

    const token = response.data.token
    if (token) {
      localStorage.setItem('token', token)
      router.push('/dashboard')
    } else {
      error.value = 'Token no recibido'
    }
  } catch (err) {
    error.value = err.response?.data?.error || 'Credenciales incorrectas o error en el servidor'
  } finally {
    loading.value = false
  }
}
</script>
