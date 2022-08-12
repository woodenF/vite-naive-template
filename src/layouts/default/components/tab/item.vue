<script lang="ts" setup>
import useBoolean from '@/hooks/useBoolean';
import { useThemeVars, NIcon } from 'naive-ui';
import SvgRadiusBg from './SvgRadiusBg.vue';

interface Props {
  isActive?: boolean;
  hiddenClose?: boolean;
}

interface Emits {
  (e: 'close'): void;
}

const props = withDefaults(defineProps<Props>(), {
  isActive: false
});
const emit = defineEmits<Emits>();
const themeVars = useThemeVars();
const { bool: isHover, setBool } = useBoolean(false);

</script>
<template>
  <div
    class="relative px-large h-[32px] box-border flex items-center whitespace-nowrap -ml-[16px]"
    :class="{ 'z-30': props.isActive, 'z-20': isHover }"
    @mouseenter="setBool(true)"
    @mouseleave="setBool(false)"
  >
    <div class="absolute w-full h-full bottom-0 left-0 -z-10">
      <SvgRadiusBg
        :is-active="props.isActive"
        :is-hover="isHover"
        :primary-color="themeVars.primaryColor"
        :hover-color="themeVars.primaryColorHover"
      />
    </div>
    <div
      class="text-small font-thin flex items-center"
      :class="{ 'text-white': props.isActive }"
    >
      <slot></slot>
    </div>
    <div
      v-if="!props.hiddenClose"
      class="transition-all duration-300 text-[0px] ml-normal w-[16px] h-[16px] flex items-center justify-center hover:bg-primary-hover rounded-full mt-[2px] text-zinc-600"
      @click.stop="emit('close')"
    >
      <Icon
        name="tab_close"
        size="12"
        class="text-close"
      />
    </div>
  </div>
</template>
