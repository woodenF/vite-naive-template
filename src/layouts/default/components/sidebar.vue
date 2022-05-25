<script lang="ts" setup>
import { useAppStore } from '@/store/modules/app';

const appStore = useAppStore();
</script>
<template>
  <div
    class="h-full fixed top-0 left-0 transition-all duration-300 bg-pink-300"
    :class="[appStore.collapsed ? 'w-sidebar--collapsed' : 'w-sidebar']"
  >
    sidebar
  </div>
</template>
