<template>
  <div class="p-8 max-w-7xl mx-auto">
    <!-- Header y botón de logout -->
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Panel de Control</h1>
      <button @click="logout" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Cerrar sesión
      </button>
    </div>

    <!-- Botón para agregar usuario -->
    <div class="mb-6">
      <button @click="openModal" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Agregar Usuario
      </button>
    </div>

    <!-- Contadores -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      <div class="bg-white shadow rounded-lg p-6">
        <h2 class="text-xl font-semibold text-gray-800">Total de Usuarios</h2>
        <p class="text-3xl mt-2 text-blue-600">{{ users.length }}</p>
      </div>
      <div class="bg-white shadow rounded-lg p-6">
        <h2 class="text-xl font-semibold text-gray-800">Total de Contactos</h2>
        <p class="text-3xl mt-2 text-indigo-600">{{ contacts.length }}</p>
      </div>
    </div>

    <!-- Tablas desplegables -->
    <details class="mb-4 bg-white rounded shadow p-4">
      <summary class="cursor-pointer text-lg font-semibold text-blue-600">Usuarios Registrados</summary>
      <table class="mt-4 w-full text-sm text-left border">
        <thead class="bg-blue-100 text-blue-900">
          <tr>
            <th class="px-4 py-2">ID</th>
            <th class="px-4 py-2">Username</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" class="hover:bg-blue-50">
            <td class="px-4 py-2">{{ user.id }}</td>
            <td class="px-4 py-2">{{ user.username }}</td>
          </tr>
        </tbody>
      </table>
    </details>

    <details class="mb-4 bg-white rounded shadow p-4">
      <summary class="cursor-pointer text-lg font-semibold text-indigo-600">Contactos Registrados</summary>
      <table class="mt-4 w-full text-sm text-left border">
        <thead class="bg-indigo-100 text-indigo-900">
          <tr>
            <th class="px-4 py-2">ID</th>
            <th class="px-4 py-2">Nombre</th>
            <th class="px-4 py-2">Email</th>
            <th class="px-4 py-2">Mensaje</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in contacts" :key="contact.id" class="hover:bg-indigo-50">
            <td class="px-4 py-2">{{ contact.id }}</td>
            <td class="px-4 py-2">{{ contact.name }}</td>
            <td class="px-4 py-2">{{ contact.email }}</td>
            <td class="px-4 py-2">{{ contact.message }}</td>
          </tr>
        </tbody>
      </table>
    </details>

    <!-- Modal agregar usuario -->
    <div v-if="showModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 class="text-xl font-bold text-gray-800 mb-4">Registrar Usuario</h2>
        <form @submit.prevent="registerUser" class="space-y-4">
          <input v-model="newUser.username" type="text" placeholder="Usuario"
            class="w-full border px-4 py-2 rounded" />
          <input v-model="newUser.password" type="password" placeholder="Contraseña"
            class="w-full border px-4 py-2 rounded" />
          <p v-if="error" class="text-red-600 text-sm">{{ error }}</p>
          <div class="flex justify-end gap-2">
            <button @click="closeModal" type="button" class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
              Cancelar
            </button>
            <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const users = ref([])
const contacts = ref([])
const showModal = ref(false)
const newUser = ref({ username: '', password: '' })
const error = ref('')
const router = useRouter()

const fetchData = async () => {
  try {
    const token = localStorage.getItem('token')
    const config = { headers: { Authorization: `Bearer ${token}` } }

    const [userRes, contactRes] = await Promise.all([
      axios.get('https://3159.efdiaz.xyz/api/auth/users', config),
      axios.get('https://3159.efdiaz.xyz/api/contact', config)
    ])

    users.value = userRes.data
    contacts.value = contactRes.data
  } catch (err) {
    console.error(err)
  }
}

const logout = () => {
  localStorage.removeItem('token')
  router.replace('/login')
}

const openModal = () => {
  newUser.value = { username: '', password: '' }
  error.value = ''
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

const validateInputs = () => {
  const { username, password } = newUser.value
  const usernameValid = /^[^\s]{4,}$/.test(username)
  const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)

  if (!usernameValid) {
    error.value = 'Usuario debe tener al menos 4 caracteres y sin espacios.'
    return false
  }
  if (!passwordValid) {
    error.value =
      'Contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas y números.'
    return false
  }
  return true
}

const registerUser = async () => {
  if (!validateInputs()) return

  try {
    await axios.post('https://3159.efdiaz.xyz/api/auth/register', newUser.value)
    await fetchData()
    closeModal()
  } catch (err) {
    error.value = err.response?.data?.error || 'Error al registrar usuario.'
  }
}

onMounted(fetchData)
</script>
