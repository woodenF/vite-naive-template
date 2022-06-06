<script lang="ts" setup>
const duration = '300ms';
const transition = `${duration} height ease-in-out, ${duration} padding-top ease-in-out, ${duration} padding-bottom ease-in-out`;
const beforeEnter = (el: any) => {
  el.style.transition = transition;
  el.dataset.oldPaddingTop = el.style.paddingTop;
  el.dataset.oldPaddingBottom = el.style.paddingBottom;

  el.style.height = '0';
  el.style.paddingTop = '0';
  el.style.paddingBottom = '0';
};

const enter = (el: any) => {
  el.dataset.oldOverflow = el.style.overflow;
  if(el.scrollHeight !== 0) {
    el.style.height = el.scrollHeight + 'px';
  } else {
    el.style.height = '';
  }
  el.style.paddingTop = <string>el.dataset.oldPaddingTop;
  el.style.paddingBottom = <string>el.dataset.oldPaddingBottom;
  el.style.overflow = 'hidden';
};

const afterEnter = (el: any) => {
  el.style.transition = '';
  el.style.height = '';
  el.style.overflow = <string>el.dataset.oldOverflow;
};

const beforeLeave = (el: any) => {
  el.dataset.oldPaddingTop = el.style.paddingTop;
  el.dataset.oldPaddingBottom = el.style.paddingBottom;
  el.dataset.oldOverflow = el.style.overflow;

  el.style.height = el.scrollHeight + 'px';
  el.style.overflow = 'hidden';
};

const leave = (el: any) => {
  if(el.scrollHeight !== 0) {
    el.style.transition = transition;
    el.style.height = '0';
    el.style.paddingTop = '0';
    el.style.paddingBottom = '0';
  }
};

const afterLeave = (el: any) => {
  el.style.transition = '';
    el.style.height = '';
    el.style.overflow = <string>el.dataset.oldOverflow;
    el.style.paddingTop = <string>el.dataset.oldPaddingTop;
    el.style.paddingBottom = <string>el.dataset.oldPaddingBottom;
};
</script>
<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <slot></slot>
  </transition>
</template>
