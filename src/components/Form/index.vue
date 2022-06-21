<script lang="ts" setup>
import { FormInst } from 'naive-ui';
import { FormConfig } from './types';

interface Props {
  data: Record<string, any>;
  config: FormConfig[];
  span?: string;
  labelWidth?: number;
}

const props = withDefaults(defineProps<Props>(), {
  span: '0:24 640:12 1024:8 1920:6',
  labelWidth: 120
});
const emits = defineEmits(['update:data']);

const model = ref(props.data);

watch(model, () => {
  emits('update:data', model);
}, { deep: true });

watch(props.data, () => {
  model.value = unref(props.data);
}, { deep: true });

const form = ref<FormInst>();

function validate() {
  return form.value?.validate();
}

function restoreValidation() {
  form.value?.restoreValidation();
}

defineExpose({
  validate,
  restoreValidation
});

</script>
<template>
  <NForm
    ref="form"
    :model="model"
    inline
  >
    <NGrid
      :x-gap="24"
      :y-gap="12"
      :item-responsive="true"
    >
      <NGridItem
        v-for="item, index in config"
        :key="index"
        :span="item.hidden ? 0 : item.span || span"
      >
        <NFormItem
          :label="item.label"
          :path="item.key"
          v-bind="item.itemProps"
          v-on="item.itemListeners"
        >
          <div class="w-full">
            <template v-if="item.type === 'slot'">
              <slot :name="item.slotName"></slot>
            </template>
            <template v-if="item.type === 'component'">
              <!--
                Naive UI 的时间选择器有些特殊
                这里单独处理
                TT 表示毫秒级时间戳
                tt 表示秒级时时间戳
              -->
              <NDatePicker
                v-if="
                  typeof item.component === 'string' && item.component === 'NDatePicker'
                    || typeof item.component !== 'string' && item.component.name === 'DatePicker'"
                v-model:formatted-value="model[item.key]"
                :value-format="item?.props?.['value-format'] || 'TT'"
                v-bind="item.props"
                v-on="item.listeners"
              />
              <Component
                :is="item.component"
                v-else
                v-model:value="model[item.key]"
                v-bind="item.props"
                v-on="item.listeners"
              >
                <template v-if="typeof item.component !== 'string' && item.component.name === 'RadioGroup'">
                  <NRadioButton
                    v-for="radio, radioIndex in item.options"
                    :key="radioIndex"
                    :value="radio.value"
                  >
                    {{ radio.label }}
                  </NRadioButton>
                </template>
                <template v-if="typeof item.component !== 'string' && item.component.name === 'CheckboxGroup'">
                  <NCheckbox
                    v-for="check, checkIndex in item.options"
                    :key="checkIndex"
                    :value="check.value"
                    :label="check.label"
                  />
                </template>
              </Component>
            </template>
            <div
              v-if="item.tips"
              class="text-mini text-tips mt-mini"
            >
              tips: {{ item.tips }}
            </div>
          </div>
        </NFormItem>
      </NGridItem>
    </NGrid>
  </NForm>
</template>
