import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: () => import('../views/HomeView.vue') },
  { path: '/about', name: 'About', component: () => import('../views/AboutView.vue') },
  {
    path: '/museum',
    name: 'Museum',
    redirect: '/museum/fish',
    component: () => import('../views/MuseumView.vue'),
    children: [
      {
        path: '/museum/:sourceSheet',
        name: 'MuseumList',
        component: () => import('../components/museum/MuseumList.vue'),
      },
    ],
  },
];

console.log(import.meta.env.MODE);

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;
