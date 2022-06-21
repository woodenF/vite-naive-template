<script lang="ts" setup name="NestingFirstPage">
const list = ref([
  { id: 1, label: '列表1', isDrag: false },
  { id: 2, label: '列表2' },
  { id: 3, label: '列表3' },
  { id: 4, label: '列表4' },
  { id: 5, label: '列表5' },
  { id: 6, label: '列表6' }
]);
const dragIndex = ref(-1);

function dragStart(index: number) {
  console.log('gragIndex', index);
  dragIndex.value = index;
}

function dragEnter(e: DragEvent, index: number) {
  e.preventDefault();
  if(unref(dragIndex) !== index) {
    const moving = unref(list)[unref(dragIndex)];
    if(!moving) {return;}
    console.log(moving);
    list.value.splice(unref(dragIndex), 1);
    list.value.splice(index, 0, { ...moving, isDrag: true});
    dragIndex.value = index;
  }
}
function dragOver(e: DragEvent, index: number) {
  console.log('dragOver');
  e.preventDefault();
  list.value[unref(dragIndex)].isDrag = false;
  dragIndex.value = -1;
}

</script>
<template>
  <div>
    <TransitionGroup
      name="drag"
      tag="ul"
    >
      <li
        v-for="(item, index) in list"
        :key="item.id"
        class="mb-small p-mini"
        :draggable="true"
        :class="[item.isDrag ? 'bg-white text-white border border-solid border-pink-600' : 'bg-pink-400']"
        @dragenter="dragEnter($event, index)"
        @dragend="dragOver($event, index)"
        @dragstart="dragStart(index)"
      >
        {{ item.label }}
      </li>
    </TransitionGroup>
  </div>
</template>
<style lang="scss">
.drag-move {
  transition: transform .3s;
}
</style>
