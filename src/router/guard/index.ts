import { Router } from 'vue-router';
import { createPermissionGuard } from './permissionGuard';

export function createGuard(router: Router) {
  createPermissionGuard(router);
}
