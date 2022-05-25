import { defineStore } from 'pinia';
import { RouteLocationNormalized, Router } from 'vue-router';
import Icon from '@/components/Icon/index.vue';

interface ITabStore {
  tabs: RouteLocationNormalized[]
}

export const useTabStore = defineStore('tab', () => {
  const store: ITabStore = reactive({
    tabs: [
      {
        path: '/dashboard/analysis',
        fullPath: '/dashboard/analysis',
        name: 'DashboardAnalysis',
        meta: {
          title: '分析页',
          icon: h(Icon, { name: 'analysis' })
        }
      } as unknown as RouteLocationNormalized
    ]
  });

  function getTabIndex(route: RouteLocationNormalized) {
    return store.tabs.findIndex((item) => item.name === route.name);
  }

  function addTab(route: RouteLocationNormalized) {
    if(getTabIndex(route) !== -1) {
      return;
    }
    store.tabs.push(route);
  }

  function removeTab(route: RouteLocationNormalized, router: Router) {
    const index = getTabIndex(route);
    if(index !== -1) {
      store.tabs.splice(index, 1);
    }
    if(router.currentRoute.value.name === route.name) {
      router.push({ name: store.tabs[index - 1].name as string });
    }
  }

  return {
    ...toRefs(store),
    addTab,
    removeTab,
    getTabIndex
  };
});
