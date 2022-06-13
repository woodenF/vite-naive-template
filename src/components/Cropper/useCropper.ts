import Cropper from './Cropper.vue';
import { createVNode, render, RendererElement, RendererNode, VNode } from 'vue';
import Cropperjs from 'cropperjs';
import { CropendResult } from './types';
import { getObjectURL } from '@/utils';

let container: HTMLDivElement | null = null;
let vm: VNode<RendererNode, RendererElement, { [key: string]: any }> | null = null;

interface Options {
  onSuccess?: (result: CropendResult) => void
}

interface Params {
  options?: Options;
  cropperOptions?: Cropperjs.Options;
  canvasOptions?: Cropperjs.GetCroppedCanvasOptions
}

export function useCropper(params: Params) {
  function onClose() {
    (vm?.component?.props as { show: boolean }).show = false;
  }
  function open(src: string | File | Blob) {
    console.log('==========', typeof src);
    if(container && vm) {
      return;
    }
    container = document.createElement('div');
    vm = createVNode(
      Cropper,
      {
        onClose,
        afterLeave: () => {
          if(container) {
            document.body.removeChild(container);
            container = null;
            vm = null;
          }
        },
        onShow: () => {
          (vm?.component?.props as { show: boolean }).show = true;
        },
        onSuccess: params.options?.onSuccess,
        show: false,
        options: params.options,
        canvasOptions: params.canvasOptions,
        src: (typeof src === 'string') ? src : getObjectURL(src)
      }
    );
    render(vm, container);
    document.body.appendChild(container);
  }
  return {
    open,
    close: onClose
  };
}
