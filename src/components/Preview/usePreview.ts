import { createVNode, render, RendererElement, RendererNode, VNode } from 'vue';
import Preview from './Preview.vue';

let container: HTMLDivElement | null = null;
let vm: VNode<RendererNode, RendererElement, { [key: string]: any }> | null = null;

interface Params{
  data: string[];
  active?: number;
}

export function usePreview() {
  function onClose() {
    (vm?.component?.props as { show: boolean }).show = false;
  }
  function open(params: Params) {
    if(container && vm) {
      return;
    }
    container = document.createElement('div');
    vm = createVNode(
      Preview,
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
        show: false,
        data: params.data,
        active: params.active || 0
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
