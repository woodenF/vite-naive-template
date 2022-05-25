import { useTabStore } from '@/store/modules/tab';
import { Router } from 'vue-router';

export function createTabGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    const tabStore = useTabStore();
    const tabIndex = tabStore.getTabIndex(to);
    if(tabIndex !== -1 && to.fullPath !== tabStore.tabs[tabIndex].fullPath) {
      tabStore.tabs.splice(tabIndex, 1);
    }
    next();
  });
  router.afterEach((to) => {
    const tabStore = useTabStore();
    tabStore.addTab(to);
  });
}
