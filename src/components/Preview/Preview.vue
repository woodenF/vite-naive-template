<script lang="ts" setup>
import usePreview from './perview';

interface Props {
  onClose?: () => void;
  afterLeave?: () => void;
  onShow?: () => void;
  show: boolean;
  data: string[];
  active: number;
}

const props = defineProps<Props>();

const { active, imgConfig, prev, next, onWheel } = usePreview({ data: props.data, active: props.active, onShow: props.onShow });

</script>
<template>
  <Transition
    name="fade-scale"
    @after-leave="afterLeave"
  >
    <div
      v-if="show"
      class="bg-black text-red-500 bg-opacity-40 fixed top-0 left-0 right-0 bottom-0 z-[999] flex items-center justify-center"
      @click="onClose"
      @wheel="onWheel"
    >
      <img
        :style="{transform: `scale(${imgConfig.scale})`}"
        :src="data?.[active]"
        alt=""
        @click.stop=""
      >
      <div class="absolute bottom-[5%] text-white text-normal font-semibold">
        {{ active + 1 }} / {{ data?.length }}
      </div>
      <div
        class="absolute left-0 top-0 bottom-0 w-[10%] flex items-center justify-center text-large text-white font-semibold"
        onselectstart="return false"
        @click.stop.prevent="prev"
      >
        <Icon
          name="prev"
          size="36"
        />
      </div>
      <div
        class="absolute right-0 top-0 bottom-0 w-[10%] flex items-center justify-center text-large text-white font-semibold"
        onselectstart="return false"
        @click.stop="next"
      >
        <Icon
          name="next"
          size="36"
        />
      </div>
    </div>
  </Transition>
</template>
