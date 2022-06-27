import { usePermissionStore } from '@/store/modules/permisssion';
import { Router } from 'vue-router';
import { constantsBefore } from '../constants';

const whiteList = ['/not-found'];

export function createPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    if(whiteList.includes(to.path)) {
      next();
      return;
    }
    const permissionStore = usePermissionStore();
    if(!permissionStore.authRoutes.length) {
      await permissionStore.generateRoutes();
      [...permissionStore.authRoutes, ...constantsBefore].map((route) => {
        router.addRoute(route);
      });
      next(to);
    }
    next();
  });
}
