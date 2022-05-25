<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  isActive?: boolean;
  isHover?: boolean;
  primaryColor?: string;
  hoverColor?: string;
}
const props = withDefaults(defineProps<Props>(), {
  isActive: false,
  isHover: false,
  primaryColor: '#409eff',
  hoverColor: '#dee1e6'
});

const defaultColor = '#fff';

const fill = computed(() => {
  let color = defaultColor;
  if(props.isHover) {
    color = props.hoverColor;
  }
  if(props.isActive) {
    color = props.primaryColor;
  }

  return color;
});

</script>
<template>
  <svg class="w-full h-full">
    <defs>
      <symbol
        id="geometry-left"
        viewBox="0 0 236 32"
      >
        <path d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z" />
      </symbol>
      <symbol
        id="geometry-right"
        viewBox="0 0 214 32"
      >
        <use xlink:href="#geometry-left" />
      </symbol>
      <clipPath>
        <rect
          width="100%"
          height="100%"
          x="0"
        />
      </clipPath>
    </defs>
    <svg
      width="52%"
      height="100%"
    >
      <use
        xlink:href="#geometry-left"
        width="214"
        height="32"
        :fill="fill"
        class="transition-all duration-300 ease-in-out"
      />
    </svg>
    <g transform="scale(-1, 1)">
      <svg
        width="52%"
        height="100%"
        x="-100%"
        y="0"
      >
        <use
          xlink:href="#geometry-right"
          width="214"
          height="32"
          :fill="fill"
          class="transition-fill duration-300 ease-in-out"
        />
      </svg>
    </g>
  </svg>
</template>
