<script lang="ts" setup>import { useRouter } from 'vue-router';

const router = useRouter();
</script>
<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <NResult
      status="404"
      title="404 资源不存在"
      description="生活总归带点荒谬"
    >
      <template #footer>
        <NButton
          type="primary"
          @click="router.push({ path: '/' })"
        >
          回到首页
        </NButton>
      </template>
    </NResult>
  </div>
</template>
