<script lang="ts" setup>
import { useAppStore } from '@/store/modules/app';

const appStore = useAppStore();
</script>
<template>
  <div
    class="fixed top-header right-0 bottom-0 transition-all duration-300 p-normal"
    :class="[appStore.collapsed ? 'left-sidebar--collapsed' : 'left-sidebar']"
  >
    <RouterView />
  </div>
</template>
