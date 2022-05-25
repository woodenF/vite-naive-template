import { getAsyncRoutes } from '@/api/app';
import { filterAsyncRoutes } from '@/helper/router';
import { asyncRoutes } from '@/router/routes';
import { defineStore } from 'pinia';
import { RouteRecordRaw } from 'vue-router';

interface IPermissionStore {
  authRoutes: RouteRecordRaw []
}

export const usePermissionStore = defineStore('permission', () => {
  const store: IPermissionStore = reactive({
    authRoutes: []
  });

  async function generateRoutes() {
    const permList = await getAsyncRoutes();
    store.authRoutes = filterAsyncRoutes(asyncRoutes, permList);
    console.log('generateRoutes', store.authRoutes);
  }

  return {
    ...toRefs(store),
    generateRoutes
  };
});
