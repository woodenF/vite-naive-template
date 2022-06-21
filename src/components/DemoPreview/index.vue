<script lang="ts" setup>
import useBoolean from '@/hooks/useBoolean';
import CollapseTransition from './collapse.vue';

const props = defineProps<{
  compName: string;
  demoName: string;
  tips?: string;
}>();
const component = ref();
const sourceCode = ref('');

const isDev = import.meta.env.MODE === 'development';
onMounted(async () => {
  console.log(props);
  component.value = (
    await import(`../../docs/${props.compName}/demo/${props.demoName}.vue`)
  ).default;

  if(isDev) {
    sourceCode.value = (
      await import(`../../docs/${props.compName}/demo/${props.demoName}.vue?raw`)
    ).default;
  } else {
    sourceCode.value = await fetch(`./docs/${props.compName}/demo/${props.demoName}.vue`).then((res) => res.text());
  }
});

const { bool: isCodeShow, toggle } = useBoolean();

</script>
<template>
  <div class="bg-white border-gray-200 border border-solid">
    <div class="flex justify-end px-large pt-small">
      <NTooltip trigger="hover">
        <template #trigger>
          <NIcon
            :size="20"
            color="gray"
            @click="toggle"
          >
            <Icon
              name="code"
            />
          </NIcon>
        </template>
        {{ isCodeShow ? '收起代码' : '显示代码' }}
      </NTooltip>
    </div>
    <div class="p-large">
      <Component
        :is="component"
      />
    </div>
    <CollapseTransition>
      <div
        v-show="isCodeShow"
        class="overflow-hidden box-border border-gray-200 border-[0px] border-solid border-t text-normal font-sans bg-gray-100 hljs"
      >
        <div
          v-if="tips"
          class="m-small p-small text-mini bg-white"
        >
          {{ tips }}
        </div>

        <highlightjs
          language="html"
          :code="sourceCode"
        />
      </div>
    </CollapseTransition>
  </div>
</template>
