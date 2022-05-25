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
              <RouterView />
            </NMessageProvider>
          </NNotificationProvider>
        </NDialogProvider>
      </NLoadingBarProvider>
    </NEl>
  </NConfigProvider>
</template>
