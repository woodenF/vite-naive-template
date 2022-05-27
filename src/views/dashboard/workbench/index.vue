<script lang="ts" setup name="DashboardWorkbench">
import { getTest, getTestById } from '@/api/test';
import { useRequest } from '@/hooks/useRequest';
import { ITest } from '@/interface/test';

const { run, data, loading, cancel, err } = useRequest<ITest>(getTest, {
  manual: true
});

const { run: queryRun, querise } = useRequest<ITest, [number]>(getTestById, {
  manual: true,
  queryKey: (id) => String(id)
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
    <NSpace>
      data: {{ data }}
    </NSpace>
    <NSpace>
      err: {{ err }}
    </NSpace>

    <NSpace>
      {{ querise[1]?.data }}
      <NButtonGroup>
        <NButton
          :loading="querise[1]?.loading"
          @click="queryRun(1)"
        >
          请求
        </NButton>
        <NButton @click="querise[1].cancel?.()">
          取消
        </NButton>
      </NButtonGroup>
    </NSpace>

    <NSpace>
      {{ querise[2]?.data }}
      <NButtonGroup>
        <NButton
          :loading="querise[2]?.loading"
          @click="queryRun(2)"
        >
          请求
        </NButton>
        <NButton @click="querise[2].cancel?.()">
          取消
        </NButton>
      </NButtonGroup>
    </NSpace>

    <NSpace>
      {{ querise[3]?.data }}
      <NButtonGroup>
        <NButton
          :loading="querise[3]?.loading"
          @click="queryRun(3)"
        >
          请求
        </NButton>
        <NButton @click="querise[3]?.cancel?.()">
          取消
        </NButton>
      </NButtonGroup>
    </NSpace>
  </div>
</template>
