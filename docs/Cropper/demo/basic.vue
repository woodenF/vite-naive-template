<script lang="ts" setup>
import { useCropper } from '@/components/Cropper/useCropper';

const img = ref('');

const { open, close } = useCropper({
  options: {
    onSuccess: (result) => {
      img.value = result.base64;
    }
  },
  canvasOptions: {
    width: 200
  }
});
</script>
<template>
  <div>
    <NButton @click="open('https://img1.baidu.com/it/u=1966616150,2146512490&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500')">
      打开
    </NButton>
    <div class="mt-normal">
      <img
        :src="img"
        width="200"
        alt=""
      >
    </div>
  </div>
</template>
