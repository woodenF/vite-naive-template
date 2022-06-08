<script lang="ts" setup>
import { DetailConfig } from './types';
import { useDetail } from './useDetail';

interface Props {
  data: Record<string, any>;
  config: DetailConfig[];
  span?: string;
  type: 'top' | 'left';
  labelWidth: number;
  hasColon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'top',
  span: '0:24 640:12 1024:8 1920:6',
  labelWidth: 120,
  hasColon: true
});

const { labelClass, itemClass, getValue } = useDetail(props);

</script>
<template>
  <NGrid
    :x-gap="24"
    :y-gap="12"
    :item-responsive="true"
  >
    <NGridItem
      v-for="item, index in config"
      :key="index"
      :span="item.hidden ? 0 : ['divider'].includes(item.type) ? 24 : item.span || span"
    >
      <div
        v-if="!item.hidden"
        class="overflow-hidden"
        :class="itemClass"
      >
        <NDivider
          v-if="item.type === 'divider'"
          title-placement="left"
        >
          <div class="font-semibold text-medium text-primary">
            {{ item.title }}
          </div>
        </NDivider>
        <div
          v-if="!['divider'].includes(item.type)"
          ref="labelEl"
          :style="{ width: type === 'top' ? '' : `${item.labelWidth || labelWidth}px` }"
          :class="labelClass"
        >
          {{ item.label }} {{ type === 'left' && hasColon ? ':' : '' }}
        </div>
        <div class="flex-1 min-w-0">
          <template v-if="item.type === 'component'">
            <Component
              :is="item.component"
              v-bind="item.props"
              disabled
              v-on="item.listeners"
            />
          </template>
          <template v-if="['key', 'innerText'].includes(item.type)">
            <div
              class="text-info font-semibold text-normal break-all"
              v-bind="item.props"
            >
              <template v-if="item.type === 'innerText'">
                {{ item.innerText }}
              </template>
              <template v-if="item.type === 'key'">
                {{ item.handler ? item.handler(getValue(item.key, data)) : getValue(item.key, data) }}
              </template>
            </div>
          </template>
          <template v-if="item.type === 'slot'">
            <slot :name="item.slotName"></slot>
          </template>
          <div
            v-if="item.tips"
            class="text-mini text-tips mt-mini"
          >
            tips: {{ item.tips }}
          </div>
        </div>
      </div>
    </NGridItem>
  </NGrid>
</template>
