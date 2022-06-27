<script setup lang="ts">
import { zhCN, dateZhCN } from 'naive-ui';
</script>

<template>
  <NConfigProvider
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
