<script lang="ts" setup>
import { useAppStore } from '@/store/modules/app';

const appStore = useAppStore();

</script>
<template>
  <div
    class="fixed top-0 h-header right-0 transition-all duration-300 flex justify-between shadow-sm"
    :class="[appStore.collapsed ? 'left-sidebar--collapsed' : 'left-sidebar']"
  >
    <div
      class="h-full flex items-center px-small hover:bg-gray-200 hover:text-primary"
      @click="appStore.toggleCollapsed"
    >
      <Icon
        size="20"
        :name=" appStore.collapsed ? 'open' : 'close' "
      />
    </div>
  </div>
</template>
