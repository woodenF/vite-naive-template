import { AppRouteRecordRaw } from '@/types/router';
import { RouteRecordRaw } from 'vue-router';

const modules = import.meta.globEager('./modules/*.ts');
const routeModules: AppRouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const route: AppRouteRecordRaw = modules[key].default;
  routeModules.push(route);
});

export const asyncRoutes = routeModules.sort((current, next) => (current.orderBy || 0) - (next.orderBy || 0)) as RouteRecordRaw[];
