import { createRouter, createWebHashHistory } from 'vue-router';
import { constants } from './constants';
import { asyncRoutes } from './routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...constants,
    ...asyncRoutes
  ]
});

export default router;
