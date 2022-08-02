<script lang="ts" setup>
import { useRequest } from '@/hooks/useRequest.js';
import { request } from '@/http/axios.js';

interface IUser {
  id?: number;
  name?: string;
  email?: string;
}

function getUserInfo() {
  return request<IUser>({
    url: '/test',
    method: 'get'
  });
}

const { run, data, loading, cancel, err } = useRequest<IUser>(getUserInfo, {
  manual: true
});

</script>
<template>
  <div>
    <NButtonGroup>
      <NButton
        :loading="loading"
        @click="run"
      >
        请求
      </NButton>
      <NButton @click="cancel?.()">
        取消
      </NButton>
    </NButtonGroup>
    {{ data }}
  </div>
</template>
