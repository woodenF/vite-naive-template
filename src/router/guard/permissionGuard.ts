import { usePermissionStore } from '@/store/modules/permisssion';
import { Router } from 'vue-router';

export function createPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const permissionStore = usePermissionStore();
    if(!permissionStore.authRoutes.length) {
      await permissionStore.generateRoutes();
      permissionStore.authRoutes.map((route) => {
        router.addRoute(route);
      });
      next(to);
    }
    next();
  });
}
