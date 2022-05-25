import { LAYOUT } from '@/router/constants';
import { AppRouteRecordRaw } from '@/types/router';
import Icon from '@/components/Icon/index.vue';

const dashboard: AppRouteRecordRaw = {
  orderBy: 0,
  path: '/dashboard',
  name: 'Dashboard',
  redirect: '/dashboard/analysis',
  component: LAYOUT,
  meta: {
    title: 'Dashboard',
    icon: h(Icon, { name: 'dashboard' })
  },
  children: [
    {
      path: 'analysis',
      name: 'DashboardAnalysis',
      component: () => import('@/views/dashboard/analysis/index.vue'),
      meta: {
        title: '分析页',
        icon: h(Icon, { name: 'dashboard' })
      }
    },
    {
      path: 'workbench',
      name: 'DashboardWorkbench',
      component: () => import('@/views/dashboard/workbench/index.vue'),
      meta: {
        title: '工作台',
        icon: h(Icon, { name: 'dashboard' })
      }
    }
  ]
};

export default dashboard;
