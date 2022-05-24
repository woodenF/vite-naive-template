<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  prefix?: string;
  name: string;
  color?: string;
  size?: string;
}

const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
  color: 'currentColor',
  size: '16px'
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<template>
  <svg
    aria-hidden="true"
    :width="props.size"
    :height="props.size"
  >
    <use
      :xlink:href="symbolId"
      :fill="props.color"
    />
  </svg>
</template>
