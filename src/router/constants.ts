import { AppRouteRecordRaw } from '@/types/router';
import { RouteRecordRaw } from 'vue-router';

export const LAYOUT = () => import('@/layouts/default/index.vue');

const routes: AppRouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    redirect: '/dashboard',
    meta: {
      title: 'Home'
    }
  }
];

export const constants = routes as RouteRecordRaw[];
