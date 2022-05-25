import { defineStore } from 'pinia';

interface IAppStore {
  collapsed: boolean;
}

export const useAppStore = defineStore('app', () => {
  const store: IAppStore = reactive({
    collapsed: false
  });

  function toggleCollapsed() {
    store.collapsed = !store.collapsed;
  }

  return {
    ...toRefs(store),
    toggleCollapsed
  };
});
