import '@fontsource/jetbrains-mono';
import '@fontsource/inter';
import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

import App from './App.vue';
import Extension from './pages/Extension.vue';
import Home from './pages/Home.vue';

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    { path: '', redirect: '/store' },
    { path: '/store', component: Home },
    { path: '/:user/:extension', component: Extension },
  ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');

export { routerHistory, router };
