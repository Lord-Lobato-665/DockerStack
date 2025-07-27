<template>
  <div class="h-screen w-64 bg-gray-800 text-white flex flex-col">
    <div class="text-2xl font-bold p-4 border-b border-gray-700">
      ContactApp
    </div>
    <nav class="flex flex-col gap-2 p-4">
      <RouterLink to="/form" class="hover:bg-gray-700 p-2 rounded transition">
        Formulario
      </RouterLink>
      <RouterLink to="/contacts" class="hover:bg-gray-700 p-2 rounded transition">
        Lista de Contactos
      </RouterLink>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
