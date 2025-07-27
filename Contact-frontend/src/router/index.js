import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '@/views/LandingPageView.vue'
import ContactListView from '@/views/ContactListView.vue'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LandingPageView
  },
  {
    path: '/getData',
    name: 'List',
    component: ContactListView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// ✅ Middleware para proteger rutas
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  // Si está autenticado y quiere ir a login o home, redirige a dashboard
  if (token && (to.path === '/' || to.path === '/login')) {
    next('/dashboard')
  }

  // Si no está autenticado y quiere ir a dashboard, redirige a login
  else if (!token && to.path === '/dashboard') {
    next('/login')
  }

  // Deja pasar
  else {
    next()
  }
})


export default router
