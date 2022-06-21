<script lang="ts" setup>
import { FormConfig } from '@/components/Form/types';
import { NCheckboxGroup, NDatePicker, NRadioGroup, NSelect, NInput } from 'naive-ui';

const data = ref({
  slotValue: '',
  test: 1,
  input: 'input',
  radio: 'BeiJing',
  check: [] as any[],
  timeStr: null,
  timestamp: null,
  formatDate: null
});

const config: FormConfig<typeof data.value>[] = [
  {
    type: 'slot',
    key: 'slotValue',
    label: 'label',
    slotName: 'testSlot',
    itemProps: {
      rule: [
        {
          required: true,
          trigger: ['blur'],
          message: '请输入...'
        }
      ]
    }
  },
  {
    type: 'component',
    label: 'Component',
    component: NSelect,
    key: 'test',
    tips: '看看控制台的事件触发',
    props: {
      options: [
        { label: '选项1', value: 1 },
        { label: '选项2', value: 2 },
        { label: '选项3', value: 3 }
      ],
      onBlur: () => {
        console.log('onBlur');
      }
    },
    listeners: {
      focus: () => {
        console.log('focus');
      }
    }
  },
  {
    type: 'component',
    component: NInput,
    key: 'input',
    label: '表单验证列',
    itemProps: {
      rule: [{
        required: true,
        trigger: ['blur', 'input'],
        message: '请输入'
      }, {
        max: 10,
        trigger: ['blur', 'input'],
        message: '最大10位'
      }, {
        trigger: ['blur', 'input'],
        validator(rule, value) {
          if(value.length === 5) {
            return new Error('不能是五位');
          }
          return true;
        }
      }]
    }
  },
  {
    type: 'component',
    component: NRadioGroup,
    label: '单选框组',
    key: 'radio',
    tips: '单选框组',
    options: [
      { value: 'BeiJing', label: '北京' },
      { value: 'ShangHai', label: '上海' },
      { value: 'ChenDu', label: '成都' },
      { value: 'ShenZhen', label: '深圳' }
    ]
  },
  {
    type: 'component',
    component: NCheckboxGroup,
    label: '多选框组',
    key: 'check',
    tips: '多选框组',
    options: [
      { value: 'BeiJing', label: '北京' },
      { value: 'ShangHai', label: '上海' },
      { value: 'ChenDu', label: '成都' },
      { value: 'ShenZhen', label: '深圳' }
    ]
  },
  {
    type: 'component',
    component: NDatePicker,
    label: '格式化为时间戳',
    key: 'timestamp'
  },
  {
    type: 'component',
    component: NDatePicker,
    label: '格式化为字符串',
    key: 'timeStr',
    tips: '这个字段会被格式化为 yyyy-MM-dd HH:mm:ss 格式',
    props: {
      'value-format': 'yyyy-MM-dd HH:mm:ss'
    }
  },
  {
    type: 'component',
    component: NDatePicker,
    label: '日期选择格式化',
    key: 'formatDate',
    props: {
      type: 'datetimerange'
    },
    listeners: {}
  },
  {
    type: 'slot',
    slotName: 'submit',
    span: 24,
    itemProps: {
      showLabel: false
    }
  }
];

const form = ref();

async function validate() {
  await form.value.validate().catch(() => {
    window.$message?.error('信息未完善');
    return Promise.reject(false);
  });
  window.$message?.success('验证成功');
}
</script>
<template>
  <div>
    <Form
      ref="form"
      v-model:data="data"
      :config="config"
    >
      <template #testSlot>
        <NInput v-model:value="data.slotValue" />
      </template>
      <template #submit>
        <div class="flex justify-end">
          <NButtonGroup>
            <NButton @click="form?.restoreValidation">
              去除验证
            </NButton>
            <NButton @click="validate">
              验证
            </NButton>
          </NButtonGroup>
        </div>
      </template>
    </Form>
    <NSpace />
    <NCode>
      {{ data }}
    </NCode>
  </div>
</template>
