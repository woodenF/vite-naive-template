import { AppRouteRecordRaw } from '@/types/router';
import { RouteRecordRaw } from 'vue-router';

export const LAYOUT = () => import('@/layouts/default/index.vue');
export const BLANK_LAYOUT = () => import('@/layouts/default/blankLayout.vue');

const routes: AppRouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    redirect: '/dashboard',
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/not-found',
    name: 'NotFound',
    component: () => import('@/views/system/not-found/index.vue'),
    meta: {
      title: 'NotFound'
    }
  }
];

const constantsRoutes: AppRouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)',
    name: 'Catch',
    meta: {
      title: '404'
    },
    redirect: '/not-found'
  }
];

export const constants = routes as RouteRecordRaw[];
export const constantsBefore = constantsRoutes;
