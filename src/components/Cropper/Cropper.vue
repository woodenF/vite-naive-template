<script lang="ts" setup>
import useCropper from './cropper';
import Cropper from 'cropperjs';
import { CropendResult } from './types';

interface Props{
  src: string;
  onClose?: () => void;
  afterLeave?: () => void;
  onSuccess?: (result: CropendResult) => void;
  show: boolean;
  onShow?: () => void;
  options?: (Cropper.Options);
  canvasOptions?: Cropper.GetCroppedCanvasOptions
}

const props = defineProps<Props>();

const { cropperImg, cropendResult } = useCropper({
  onShow: props.onShow
}, props.options, props.canvasOptions);

function onSubmit() {
  if(!cropendResult.value) {
    return;
  }
  props.onSuccess?.(cropendResult.value);
  props.onClose?.();
}

</script>
<template>
  <Transition
    name="fade"
    @after-leave="afterLeave"
  >
    <div
      v-show="show"
      class="bg-black bg-opacity-40 fixed top-0 left-0 right-0 bottom-0 z-[999] flex items-center justify-center"
    >
      <Transition
        name="fade-bottom"
      >
        <div
          v-if="show"
          class="bg-white overflow-hidden"
        >
          <div class="flex justify-between items-center p-small text-gray-400 border-b border-solid border-gray-200">
            <div class="font-semibold">
              图片裁剪
            </div>
            <Icon
              name="cancel"
              size="16"
              @click="onClose?.()"
            />
          </div>
          <div class="px-small py-medium flex">
            <div>
              <img
                ref="cropperImg"
                class="overflow-hidden max-w-[600px]"
                :src="src"
              >
            </div>
            <div class="px-large">
              <div class="flex justify-center text-normal font-semibold text-gray-400 mb-normal">
                裁剪预览
              </div>
              <img
                width="170"
                :src="cropendResult?.base64"
                alt=""
                class="mb-normal"
              >
              <img
                width="170"
                :src="cropendResult?.base64"
                alt=""
                class="rounded-full"
              >
            </div>
          </div>
          <div class="flex justify-end p-small border-t border-solid border-gray-200">
            <NSpace>
              <NButton
                type="info"
                @click="onClose"
              >
                取消
              </NButton>
              <NButton
                type="primary"
                @click="onSubmit"
              >
                确认
              </NButton>
            </NSpace>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>
