<script lang="ts" setup>
import { usePreview } from '@/components/Preview/usePreview';

const imgs = [
  'https://img0.baidu.com/it/u=203029382,3321673726&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  'https://img0.baidu.com/it/u=2337408361,289263770&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  'https://img1.baidu.com/it/u=4216761644,15569246&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500'
];

const { open, close } = usePreview();
</script>
<template>
  <div class="flex">
    <img
      v-for="img, index in imgs"
      :key="index"
      class="mr-mini"
      :src="img"
      width="150"
      height="150"
      alt=""
      @click="open({ data: imgs, active: index })"
    >
  </div>
</template>
