import { createRouter, createWebHistory } from '@ionic/vue-router';
import AboutView from '../views/AboutView.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
];

console.log(import.meta.env.MODE);

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;
