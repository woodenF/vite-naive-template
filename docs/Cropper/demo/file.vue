<script lang="ts" setup>
import { useCropper } from '@/components/Cropper/useCropper';
import { usePreview } from '@/components/Preview/usePreview';
import { UploadCustomRequestOptions } from 'naive-ui';

const img = ref('');

const { open, close } = useCropper({
  options: {
    onSuccess: (result) => {
      img.value = result.base64;
    }
  },
  canvasOptions: {
    width: 100
  }
});
const { open: openPreview } = usePreview();

function customRequest(e: UploadCustomRequestOptions) {
  open(e?.file?.file || '');
  e.onFinish();
}

</script>
<template>
  <div>
    <NUpload
      :custom-request="customRequest"
      :show-file-list="false"
    >
      <NButton>上传文件</NButton>
    </NUpload>
    <div class="mt-mini">
      <img
        :src="img"
        alt=""
        @click="openPreview({ data: [img] })"
      >
    </div>
  </div>
</template>
