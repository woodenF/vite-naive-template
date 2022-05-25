import { createRouter, createWebHashHistory } from 'vue-router';
import { constants } from './constants';
import { createGuard } from './guard';
import { asyncRoutes } from './routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...constants,
    ...asyncRoutes
  ]
});

createGuard(router);

export default router;
