import { LAYOUT } from '@/router/constants';
import { AppRouteRecordRaw } from '@/types/router';
import Icon from '@/components/Icon/index.vue';

const document: AppRouteRecordRaw = {
  orderBy: 20,
  path: '/document',
  name: 'Document',
  component: LAYOUT,
  meta: {
    title: '文档',
    icon: h(Icon, { name: 'document' }),
    noPerm: true
  },
  children: [
    {
      path: 'vue',
      name: 'DocumentVue',
      component: () => import('@/views/document/vue/index.vue'),
      meta: {
        title: 'Vue',
        icon: h(Icon, { name: 'document' })
      }
    },
    {
      path: 'vite',
      name: 'DocumentVite',
      component: () => import('@/views/document/vite/index.vue'),
      meta: {
        title: 'Vite',
        icon: h(Icon, { name: 'document' })
      }
    },
    {
      path: 'naive',
      name: 'DocumentNaive',
      component: () => import('@/views/document/naive/index.vue'),
      meta: {
        title: 'Naive',
        icon: h(Icon, { name: 'document' })
      }
    },
    {
      path: 'linknaive',
      name: 'DocumentLink',
      component: () => '',
      meta: {
        title: 'NaiveUI文档(外链)',
        url: 'https://www.naiveui.com',
        icon: h(Icon, { name: 'document' })
      }
    }
  ]
};

export default document;
