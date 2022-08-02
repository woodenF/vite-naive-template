<script lang="ts" setup>
import { useRequest } from '@/hooks/useRequest';
import { request } from '@/http/axios';

interface IUser {
  id?: number;
  name?: string;
  email?: string;
}

function getUserInfo(id: number) {
  return request<IUser>({
    url: '/test',
    method: 'get',
    params: {
      id
    }
  });
}
const { run, querise } = useRequest<IUser, [number]>(getUserInfo, {
  manual: true,
  queryKey: (id) => String(id)
});

const users: Required<IUser>[] = [
  { id: 1, name: '刘华强', email: 'liuhuaqiang@gmail.com' },
  { id: 2, name: '卖瓜佬', email: 'maigualao@gmail.com' },
  { id: 3, name: '萨日朗', email: 'sharilang@gmail.com' }
];
</script>
<template>
  <div>
    <div class="w-full">
      <ul>
        <li
          v-for="user in users"
          :key="user.id"
        >
          <NSpace justify="space-between">
            <span>{{ user.name }}</span>
            <div>{{ querise[user.id]?.data }}</div>
            <NButtonGroup>
              <NButton
                :loading="querise[user.id]?.loading"
                @click="run(user.id)"
              >
                请求
              </NButton>
              <NButton @click="querise[user.id].cancel?.()">
                失败
              </NButton>
            </NButtonGroup>
          </NSpace>
        </li>
      </ul>
    </div>
  </div>
</template>
