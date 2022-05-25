<script lang="ts" setup>
import useHorizontalScroll from '@/hooks/useHorizontalScroll';
import { useAppStore } from '@/store/modules/app';
import { useTabStore } from '@/store/modules/tab';
import { NIcon } from 'naive-ui';
import { useRoute, useRouter } from 'vue-router';
import TabItem from './item.vue';
const appStore = useAppStore();
const tabStore = useTabStore();
const route = useRoute();
const router = useRouter();
const { el, onScroll } = useHorizontalScroll();

</script>
<template>
  <div
    ref="el"
    class="overflow-y-hidden transition-all duration-300 fixed h-tab top-header right-0 z-10 shadow-sm px-normal flex items-end"
    :class="[appStore.collapsed ? 'left-sidebar--collapsed' : 'left-sidebar']"
    @mousewheel="onScroll"
  >
    <tab-item
      v-for="(item, index) in tabStore.tabs"
      :key="item.path"
      :is-active="route.path === item.path"
      :hidden-close="index === 0"
      @close="tabStore.removeTab(item, router)"
      @click="router.push(item)"
    >
      <n-icon
        size="16"
        class="mr-[8px]"
      >
        <component :is="item.meta?.icon" />
      </n-icon>
      {{ item.meta.title }}
    </tab-item>
  </div>
</template>
<style lang="scss" scoped>
::-webkit-scrollbar{
	height: 0px;
}
</style>
