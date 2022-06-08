import { LAYOUT } from '@/router/constants';
import { AppRouteRecordRaw } from '@/types/router';
import Icon from '@/components/Icon/index.vue';

const components: AppRouteRecordRaw = {
  orderBy: 40,
  path: '/components',
  name: 'Components',
  redirect: '/components/input',
  component: LAYOUT,
  meta: {
    noPerm: true,
    title: '组件',
    icon: h(Icon, { name: 'components' })
  },
  children: [
    {
      path: 'input',
      name: 'ComponentsInput',
      component: () => import('@/docs/Input/index.md'),
      meta: {
        title: 'Input',
        icon: h(Icon, { name: 'input' })
      }
    },
    {
      path: 'detail',
      name: 'ComponentsDetail',
      component: () => import('@/docs/Detail/index.md'),
      meta: {
        title: 'Detail',
        icon: h(Icon, { name: 'detail' })
      }
    }
  ]
};

export default components;
