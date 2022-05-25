import NxIcon from '@/components/Icon/index.vue';
import { AppRouteRecordRaw } from '@/types/router';
import { h } from 'vue';
import { LAYOUT, BLANK_LAYOUT } from '../../constants';

const nesting: AppRouteRecordRaw = {
  orderBy: 100,
  path: '/nesting',
  name: 'Nesting',
  component: LAYOUT,
  meta: {
    title: '多级菜单',
    icon: h(NxIcon, { name: 'menu' }),
    noPerm: true
  },
  children: [
    {
      path: 'firstpage',
      name: 'NestingFirstPage',
      component: () => import('@/views/nesting/first-page/index.vue'),
      meta: {
        title: '一级菜单',
        icon: h(NxIcon, { name: 'menu' })
      }
    },
    {
      path: 'first',
      name: 'NestingFirst',
      component: BLANK_LAYOUT,
      meta: {
        title: '一级菜单',
        icon: h(NxIcon, { name: 'menu' })
      },
      children: [
        {
          path: 'second',
          name: 'NestingFirstSecond',
          component: () => import('@/views/nesting/first/second/index.vue'),
          meta: {
            title: '二级菜单',
            icon: h(NxIcon, { name: 'menu' })
          }
        },
        {
          path: 'second-nesting',
          name: 'NestingFirstSecondNesting',
          component: BLANK_LAYOUT,
          meta: {
            title: '二级菜单(有子菜单)',
            icon: h(NxIcon, { name: 'menu' })
          },
          children: [
            {
              path: 'third',
              name: 'NestingFirstSecondNestingThird',
              component: () => import('@/views/nesting/first/second-nesting/third/index.vue'),
              meta: {
                title: '三级菜单',
                icon: h(NxIcon, { name: 'menu' })
              }
            }
          ]
        }
      ]
    }
  ]
};

export default nesting;
