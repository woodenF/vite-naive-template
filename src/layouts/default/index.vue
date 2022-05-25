<script lang="ts" setup>
import { useDialog, useLoadingBar, useMessage, useNotification } from 'naive-ui';

function registerNaiveTools() {
  window.$loadingBar = useLoadingBar();
  window.$dialog = useDialog();
  window.$message = useMessage();
  window.$notification = useNotification();
}

registerNaiveTools();

</script>
<template>
  <div class="">
    <RouterView />
  </div>
</template>
