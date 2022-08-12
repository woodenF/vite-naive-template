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
      path: 'detail',
      name: 'ComponentsDetail',
      component: () => import('@/docs/Detail/index.md'),
      meta: {
        title: 'Detail',
        icon: h(Icon, { name: 'components' })
      }
    },
    {
      path: 'preview',
      name: 'ComponentsPreview',
      component: () => import('@/docs/Preview/index.md'),
      meta: {
        title: 'Preview',
        icon: h(Icon, { name: 'components' })
      }
    },
    {
      path: 'cropper',
      name: 'ComponentsCropper',
      component: () => import('@/docs/Cropper/index.md'),
      meta: {
        title: 'Cropper',
        icon: h(Icon, { name: 'components' })
      }
    },
    {
      path: 'form',
      name: 'ComponentsForm',
      component: () => import('@/docs/Form/index.md'),
      meta: {
        title: 'Form',
        icon: h(Icon, { name: 'components' })
      }
    },
    {
      path: 'request',
      name: 'ComponentsRequest',
      component: () => import('@/docs/Request/index.md'),
      meta: {
        title: 'Request',
        icon: h(Icon, { name: 'components' })
      }
    },
    {
      path: 'theme',
      name: 'ComponentsTheme',
      component: () => import('@/docs/Theme/index.md'),
      meta: {
        title: 'Theme',
        icon: h(Icon, { name: 'components' })
      }
    }
  ]
};

export default components;
