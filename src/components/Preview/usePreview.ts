import { isFunction } from 'lodash-es';

interface Options {
  data: string[];
  active: number;
  onShow?: () => void;
}

export default function(options: Options) {
  const { onShow, data, active: index } = options;
  const active = ref(index);
  const imgConfig = ref({
    scale: 1
  });

  onMounted(() => {
    if(isFunction(onShow)) {
      onShow();
    }
  });

  watch(active, () => {
    imgConfig.value.scale = 1;
  });

  function prev() {
    if(active.value > 0) {
      active.value -= 1;
    }
  }

  function next() {
    if(active.value < data.length - 1) {
      active.value += 1;
    }
  }

  function onWheel(e: any) {
    const delta = e.wheelDelta;
    if(delta > 0) {
      if(imgConfig.value.scale >= 2) {
        return;
      }
      imgConfig.value.scale += 0.1;
    } else {
      if(+imgConfig.value.scale.toFixed(1) <= 0.1) {
        return;
      }
      imgConfig.value.scale -= 0.1;
    }
  }

  return {
    active,
    prev,
    next,
    onWheel,
    imgConfig
  };
}
