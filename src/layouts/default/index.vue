<script lang="ts" setup name="Layout">
import { useDialog, useLoadingBar, useMessage, useNotification } from 'naive-ui';
import Content from './components/content.vue';
import Header from './components/header.vue';
import Sidebar from './components/sidebar.vue';
import Tabs from './components/tab/index.vue';

function registerNaiveTools() {
  window.$loadingBar = useLoadingBar();
  window.$dialog = useDialog();
  window.$message = useMessage();
  window.$notification = useNotification();
}

registerNaiveTools();

</script>
<template>
  <div class="h-screen">
    <Sidebar />
    <Header />
    <Tabs />
    <Content />
  </div>
</template>
