<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    <div class="flex">
      <div class="flex-1 p-8 max-w-5xl mx-auto">
        <div class="mb-6 text-center sticky top-0 z-10 bg-gradient-to-br from-gray-50 to-blue-50 pb-4">
          <h2 class="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Lista de Contactos
          </h2>
          <p class="text-base text-gray-600 mt-1">Mensajes recibidos a través del formulario</p>
        </div>
        <div class="max-h-[70vh] overflow-y-auto pr-1 space-y-5">
          <div v-for="c in contacts" :key="c.id" class="p-5 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all">
            <div class="grid grid-cols-1 md:grid-cols-3">
              <div>
                <p class="text-xs font-semibold text-gray-400 uppercase tracking-wide">Nombre</p>
                <p class="text-base font-semibold text-gray-900">{{ c.name }}</p>
              </div>
              <div>
                <p class="text-xs font-semibold text-gray-400 uppercase tracking-wide">Email</p>
                <p class="text-base text-blue-600 hover:underline break-all">
                  <a :href="`mailto:${c.email}`">{{ c.email }}</a>
                </p>
              </div>
              <div class="md:col-span-3 mt-4 pt-4 border-t border-gray-200">
                <p class="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Mensaje</p>
                <p class="text-gray-700 whitespace-pre-line text-base">{{ c.message }}</p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!contacts.length" class="text-center py-20">
          <svg class="mx-auto h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h3 class="mt-4 text-lg font-semibold text-gray-900">No hay contactos aún</h3>
          <p class="text-sm text-gray-500">Todos los mensajes recibidos aparecerán aquí.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const contacts = ref([])

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/contact')
    contacts.value = res.data
  } catch (err) {
    console.error('Error al obtener los contactos:', err)
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No se pudieron cargar los contactos',
      confirmButtonColor: '#4f46e5'
    })
  }
})
</script>
