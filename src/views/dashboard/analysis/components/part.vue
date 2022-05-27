<script lang="ts" setup>import { NTag } from 'naive-ui';

interface TimelineData {
  type: 'default' | 'info' | 'success' | 'warning' | 'error';
  title: string;
  content: string;
  time: string;
}
interface TableData {
  key: number;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const timelines: TimelineData[] = [
  { type: 'default', title: '啊', content: '', time: '2021-10-10 20:46' },
  { type: 'success', title: '成功', content: '哪里成功', time: '2021-10-10 20:46' },
  { type: 'error', title: '错误', content: '哪里错误', time: '2021-10-10 20:46' },
  { type: 'warning', title: '警告', content: '哪里警告', time: '2021-10-10 20:46' },
  { type: 'info', title: '信息', content: '是的', time: '2021-10-10 20:46' },
  { type: 'default', title: '啊', content: '', time: '2021-10-10 20:46' },
  { type: 'success', title: '成功', content: '哪里成功', time: '2021-10-10 20:46' },
  { type: 'error', title: '错误', content: '哪里错误', time: '2021-10-10 20:46' },
  { type: 'warning', title: '警告', content: '哪里警告', time: '2021-10-10 20:46' },
  { type: 'info', title: '信息', content: '是的', time: '2021-10-10 20:46' }
];

const columns = [
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age'
  },
  {
    title: 'Address',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags',
    render(row: TableData) {
      const tags = row.tags.map((tagKey) => {
        return h(
          NTag,
          {
            style: {
              marginRight: '6px'
            },
            type: 'info'
          },
          {
            default: () => tagKey
          }
        );
      });
      return tags;
    }
  }
];

const tableData: TableData[] = [
  {
    key: 0,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['wow']
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  },
  {
    key: 3,
    name: 'Soybean',
    age: 25,
    address: 'China Shenzhen',
    tags: ['handsome', 'programmer']
  },
  {
    key: 4,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: 5,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['wow']
  },
  {
    key: 6,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
];
</script>
<template>
  <NGrid
    :x-gap="16"
    :y-gap="16"
    :item-responsive="true"
  >
    <NGridItem span="0:24 640:24 1024:8">
      <NCard title="时间线">
        <div class="h-[360px]">
          <NScrollbar>
            <NTimeline>
              <NTimelineItem
                v-for="item, index in timelines"
                :key="index"
                v-bind="item"
              />
            </NTimeline>
          </NScrollbar>
        </div>
      </NCard>
    </NGridItem>
    <NGridItem span="0:24 640:24 1024:16">
      <NCard title="表格">
        <div class="h-[360px]">
          <NDataTable
            size="small"
            :columns="columns"
            :data="tableData"
          />
        </div>
      </NCard>
    </NGridItem>
  </NGrid>
</template>
