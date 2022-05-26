import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import LogoutView from '../views/LogoutView.vue';
import AccountView from '../views/AccountView.vue';
import { useUserStore } from '../stores/userStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView,
    },
    {
      path: '/logout',
      name: 'Logout',
      component: LogoutView,
    },
    {
      path: '/account',
      name: 'Account',
      component: AccountView,
      beforeEnter: (to, from, next) => {
        const userStore = useUserStore();
        if (!userStore.isAuthenticated) next({ name: 'Login' });
        else next();
      },
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
});

export default router;
