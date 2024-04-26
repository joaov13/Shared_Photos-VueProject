import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import AboutView from '../views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { requiresAuth: true } // Adiciona meta para indicar que a rota requer autenticação
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
});

// Guarda de navegação para verificar autenticação
router.beforeEach((to, from, next) => {
  // Verifica se a rota requer autenticação (possui meta requiresAuth: true)
  if (to.meta.requiresAuth) {
    // Verifica se o usuário está autenticado (por exemplo, verifica localStorage)
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
      // Se o usuário estiver autenticado, permite a navegação para a rota protegida
      next();
    } else {
      // Se o usuário não estiver autenticado, redireciona para a página de login
      next({
        name: 'login',
        query: { redirectMessage: 'Você não está logado. Por favor, faça login.' }
      });
    }
  } else {
    // Se a rota não requer autenticação, permite a navegação normalmente
    next();
  }
});

export default router;
