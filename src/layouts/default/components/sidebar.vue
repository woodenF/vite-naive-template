<script lang="ts" setup>
import { renderMenuLabel, renderIcon } from '@/helper/router';
import { useAppStore } from '@/store/modules/app';
import { usePermissionStore } from '@/store/modules/permisssion';
import { useRoute } from 'vue-router';

const appStore = useAppStore();
const permissionStore = usePermissionStore();

const route = useRoute();

</script>
<template>
  <div
    class="h-full fixed top-0 left-0 transition-all duration-300 z-30 flex flex-col shadow-lg"
    :class="[appStore.collapsed ? 'w-sidebar--collapsed' : 'w-sidebar']"
  >
    <div class="h-header flex items-center justify-center font-bold text-medium text-primary whitespace-nowrap overflow-hidden">
      {{ appStore.collapsed ? 'N' : 'Naive Template' }}
    </div>
    <div class="flex-1 overflow-auto">
      <NMenu
        :value="(route.name as string)"
        :collapsed="appStore.collapsed"
        :collapsed-width="56"
        :indent="20"
        :options="permissionStore.authRoutes"
        key-field="name"
        :render-label="(route: any) => renderMenuLabel(route)"
        :render-icon="(route: any) => renderIcon(route)"
      />
    </div>
  </div>
</template>
