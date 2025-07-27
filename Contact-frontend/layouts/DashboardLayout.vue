<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-800 text-white flex flex-col">
      <div class="text-2xl font-bold p-4 border-b border-gray-700">
        ContactApp
      </div>
      <nav class="flex flex-col gap-2 p-4">
        <RouterLink
          to="/dashboard/contacts"
          class="hover:bg-gray-700 p-2 rounded transition"
        >
          Contactos
        </RouterLink>
        <RouterLink
          to="/dashboard/users"
          class="hover:bg-gray-700 p-2 rounded transition"
        >
          Usuarios
        </RouterLink>
      </nav>
    </aside>

    <!-- Contenido principal -->
    <main class="flex-1 p-6 overflow-auto">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
