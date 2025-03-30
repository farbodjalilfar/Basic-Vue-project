import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import ServicesView from './views/ServicesView.vue';
import CustomersView from './views/CustomersView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/services', component: ServicesView },
  { path: '/customers', component: CustomersView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
