<script setup lang="ts">
import { zhCN, dateZhCN } from 'naive-ui';
import { useThemeStore } from '@/store/modules/theme';

const themeStore = useThemeStore();
</script>

<template>
  <NConfigProvider
    :theme-overrides="themeStore.themeOverrides"
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <NEl
      tag="div"
    >
      <NLoadingBarProvider>
        <NDialogProvider>
          <NNotificationProvider>
            <NMessageProvider>
              <Transition
                name="fade-slide"
                mode="out-in"
                appear
              >
                <RouterView />
              </Transition>
            </NMessageProvider>
          </NNotificationProvider>
        </NDialogProvider>
      </NLoadingBarProvider>
    </NEl>
  </NConfigProvider>
</template>
