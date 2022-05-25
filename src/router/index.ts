import { createRouter, createWebHashHistory } from 'vue-router';
import { constants } from './constants';
import { createGuard } from './guard';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...constants
  ]
});

createGuard(router);

export default router;
