import { createRouter, createWebHashHistory } from 'vue-router';
import HelloWorld from '../src/components/HelloWorld.vue';
const routes = [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
  });

export default router;