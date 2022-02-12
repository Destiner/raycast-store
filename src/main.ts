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
    { path: '/store', component: Store },
    { path: '/:user/:extension', component: Extension },
    { path: '/developers', component: Developers },
    { path: '/pricing', component: Pricing },
    { path: '/changelog', component: Changelog },
    { path: '/blog', component: Blog },
    { path: '/jobs', component: Jobs },
    { path: '/:user', component: User },
  ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');

export { routerHistory, router };
