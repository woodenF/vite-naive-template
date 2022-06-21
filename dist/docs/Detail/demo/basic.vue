<script lang="ts" setup>
import { DetailConfig } from '@/components/Detail/types';
import { NInput } from 'naive-ui';

const type = ref<'top' | 'left'>('top');
const data = ref({
  a: false,
  b: {
    c: Array.from({ length: 100 }, (item, index) => index).join(','),
    d: 3,
    e: {
      f: 4
    }
  }
});

const keyClass = computed(() => {
  if(data.value.a) {
    return {
      props: {
        class:  'text-green-500'
      },
      value: '真'
    };
  }
  return {
      props: {
        class:  'text-red-500'
      },
      value: '假'
    };
});

const config = ref<DetailConfig[]>([
  {
    type: 'divider',
    title: '品牌'
  },
  {
    type: 'component',
    component: NInput,
    label: '测试Component',
    tips: '提示信息',
    props: {
      placeholder: '请输入...',
      value: data.value.a
    },
    hidden: computed(() => type.value === 'left'),
    listeners: {
      blur: () => {
        console.log('123');
      }
    }
  },
  {
    type: 'innerText',
    innerText: 'innerText',
    label: 'InnerText测试',
    tips: '这里显示静态文本'
  },
  {
    type: 'slot',
    slotName: 'testSlot',
    label: 'Slot'
  },
  {
    type: 'key',
    key: 'a',
    label: '绑定Key值',
    tips: '这里显示绑定的 value，提供 handler 方法处理数据',
    props: {
      ...keyClass.value.props
    },
    handler: (value) => {
      return keyClass.value.value;
    }
  },
  {
    type: 'key',
    key: 'b.c',
    label: '显示对应的value',
    span: 24
  },
  {
    type: 'divider',
    title: '车型'
  },
  {
    type: 'component',
    component: NInput,
    span: 24,
    label: '测试Component',
    tips: '始终占整行',
    props: {
      placeholder: '请输入...',
      value: data.value.a
    },
    listeners: {
      blur: () => {
        console.log('123');
      }
    }
  },
  {
    type: 'innerText',
    innerText: 'innerText',
    label: 'InnerText测试'
  },
  {
    type: 'key',
    key: 'a',
    label: '绑定Key值'
  },
  {
    type: 'slot',
    slotName: 'testSlot',
    label: 'Slot'
  },
  {
    type: 'divider',
    title: '车系'
  },
  {
    type: 'component',
    component: NInput,
    span: 24,
    label: '测试Component',
    tips: '始终占整行',
    props: {
      placeholder: '请输入...',
      value: data.value.a
    },
    listeners: {
      blur: () => {
        console.log('123');
      }
    }
  },
  {
    type: 'innerText',
    innerText: 'innerText',
    label: 'InnerText测试'
  },
  {
    type: 'key',
    key: 'a',
    label: '绑定Key值'
  },
  {
    type: 'slot',
    slotName: 'testSlot',
    label: 'Slot'
  }
]);

</script>
<template>
  <div class="overflow-hidden">
    切换显示方式: <n-switch
      v-model:value="type"
      checked-value="top"
      unchecked-value="left"
    />
    <Detail
      :type="type"
      :data="data"
      :config="(config as any)"
    >
      <template #testSlot>
        <div>
          <NInput
            disabled
            placeholder="Detail 内的 slot 组件，通常不可被修改"
          />
        </div>
      </template>
    </Detail>
  </div>
</template>
