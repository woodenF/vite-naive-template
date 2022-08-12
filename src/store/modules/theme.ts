import { merge } from 'lodash-es';
import { GlobalThemeOverrides } from 'naive-ui';
import { defineStore } from 'pinia';

interface IThemeStore {
  themeOverrides: GlobalThemeOverrides;
}

export const useThemeStore = defineStore('theme', () => {
  const store: IThemeStore = reactive({
    themeOverrides: {}
  });

  function setThemeOverrides(theme: GlobalThemeOverrides) {
    store.themeOverrides = merge(store, theme);
  }

  return {
    ...toRefs(store),
    setThemeOverrides
  };
});
