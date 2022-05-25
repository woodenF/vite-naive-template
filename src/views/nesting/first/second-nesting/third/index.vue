<script lang="ts" setup name="NestingFirstSecondNestingThird">
import { useRoute } from 'vue-router';
console.log('三级菜单');
const route = useRoute();

</script>
<template>
  <div>
    三级菜单
    query参数{{ route.query.id }}
    params参数{{ route.params.test }}
  </div>
</template>
