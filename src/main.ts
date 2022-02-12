import '@fontsource/jetbrains-mono';
import '@fontsource/inter/variable.css';
import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

import App from './App.vue';
import Blog from './pages/Blog.vue';
import Changelog from './pages/Changelog.vue';
import Developers from './pages/Developers.vue';
import Extension from './pages/Extension.vue';
import Jobs from './pages/Jobs.vue';
import Pricing from './pages/Pricing.vue';
import Store from './pages/Store.vue';
import User from './pages/User.vue';

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    { path: '', redirect: '/store' },
    { path: '/store', name: 'store', component: Store },
    { path: '/:user/:extension', name: 'extension', component: Extension },
    { path: '/developers', name: 'developers', component: Developers },
    { path: '/pricing', name: 'pricing', component: Pricing },
    { path: '/changelog', name: 'changelog', component: Changelog },
    { path: '/blog', name: 'blog', component: Blog },
    { path: '/jobs', name: 'jobs', component: Jobs },
    { path: '/:user', name: 'user', component: User },
  ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');

export { routerHistory, router };
