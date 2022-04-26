import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router';

// eslint-disable-next-line require-jsdoc
export default function() {
  const routerHistory = import.meta.env.SSR === false ? createWebHistory() : createMemoryHistory();

  return createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/pages/TestPage.vue'),
      },
      {
        path: '/test2',
        name: 'test2',
        component: () => import('@/pages/TestPage2.vue'),
      },
    ],
  });
}
