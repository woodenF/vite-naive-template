<script lang="ts" setup>
import { useAppStore } from '@/store/modules/app';
import { useTabStore } from '@/store/modules/tab';

const appStore = useAppStore();
const tabStore = useTabStore();

const includeList = computed(() => {
  return tabStore.tabs.map((route) => route.name as string);
});

</script>
<template>
  <div
    class="fixed top-content right-0 bottom-0 transition-all duration-300"
    :class="[appStore.collapsed ? 'left-sidebar--collapsed' : 'left-sidebar']"
  >
    <NScrollbar>
      <div class="p-normal h-[calc(100vh-92px)]">
        <RouterView v-slot="{ Component, route }">
          <Transition
            name="fade"
            mode="out-in"
            appear
          >
            <KeepAlive :include="includeList">
              <Component
                :is="Component"
                :key="route.name"
              />
            </KeepAlive>
          </Transition>
        </RouterView>
      </div>
    </NScrollbar>
  </div>
</template>
<style lang="scss">
</style>
