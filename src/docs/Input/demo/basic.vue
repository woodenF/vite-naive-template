<script lang="ts" setup>
const value = ref('123');
</script>
<template>
  <div>
    <NInput v-model:value="value" />
    {{ value }}
  </div>
</template>
