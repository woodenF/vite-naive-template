<script lang="ts" setup>
import { useAppStore } from '@/store/modules/app';

const appStore = useAppStore();

</script>
<template>
  <div
    class="fixed top-0 h-header right-0 transition-all duration-300 bg-fuchsia-100 flex justify-between"
    :class="[appStore.collapsed ? 'left-sidebar--collapsed' : 'left-sidebar']"
    @click="appStore.toggleCollapsed"
  >
    <div class="h-full flex items-center px-small hover:bg-gray-200 hover:text-primary">
      <Icon
        size="20"
        :name=" appStore.collapsed ? 'open' : 'close' "
      />
    </div>
  </div>
</template>
