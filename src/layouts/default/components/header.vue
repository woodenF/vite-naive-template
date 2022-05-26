<script lang="ts" setup>
import { useAppStore } from '@/store/modules/app';
import { useRoute } from 'vue-router';
import { renderDropdownLabel, renderDropdownIcon } from '@/helper/breadcrumb';

const appStore = useAppStore();
const route = useRoute();

</script>
<template>
  <div
    class="fixed top-0 h-header right-0 transition-all duration-300 flex justify-between shadow-sm"
    :class="[appStore.collapsed ? 'left-sidebar--collapsed' : 'left-sidebar']"
  >
    <div class="h-full flex items-center">
      <div
        class="h-full flex items-center px-small hover:bg-gray-200 hover:text-primary"
        @click="appStore.toggleCollapsed"
      >
        <Icon
          size="20"
          :name=" appStore.collapsed ? 'open' : 'close' "
        />
      </div>
      <div>
        <NBreadcrumb>
          <NBreadcrumbItem
            v-for="item in route.matched"
            :key="item.name"
          >
            <NDropdown
              :options="(item.children as any)"
              label-field="name"
              key-field="name"
              placement="bottom-start"
              :render-label="(route: any) => renderDropdownLabel(route)"
              :render-icon="(route: any) => renderDropdownIcon(route)"
            >
              <span>
                <NIcon size="16">
                  <Component :is="item.meta.icon" />
                </NIcon> {{ item.meta.title }}
              </span>
            </NDropdown>
          </NBreadcrumbItem>
        </NBreadcrumb>
      </div>
    </div>
  </div>
</template>
