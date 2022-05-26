import { AppRouteRecordRaw } from '@/types/router';
import { NIcon } from 'naive-ui';
import { Component } from 'vue';
import { RouterLink } from 'vue-router';

export function renderDropdownLabel(route: AppRouteRecordRaw) {
  return h(
    RouterLink,
    {
      to: {
        name: route.children ? '' : route.name
      }
    },
    { default: () => route.meta.title }
  );
}

export function renderDropdownIcon(route: AppRouteRecordRaw) {
  return h(
    NIcon,
    {
      size: 16
    },
    { default: () => h(route.meta.icon as Component) }
  );
}
