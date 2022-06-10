<script lang="ts" setup>
import { DetailConfig } from '@/components/Detail/types';

const data = ref({
  activity: {
    name: '凯翼成都车友会',
    time: '2022-02-28 00:00~2022-03-15 23:59',
    endTime: '2022-02-27 23:59',
    region: '四川省/成都市/武侯区',
    address: '环球中心',
    contacts: '李四',
    phone: '13566789033',
    maxMember: 30,
    integral: 5,
    status: 2,
    qrcode: 'https://img0.baidu.com/it/u=203029382,3321673726&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    club: '凯翼俱乐部成都分部',
    imgs: [
      'https://img0.baidu.com/it/u=203029382,3321673726&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      'https://img0.baidu.com/it/u=203029382,3321673726&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      'https://img0.baidu.com/it/u=203029382,3321673726&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      'https://img0.baidu.com/it/u=203029382,3321673726&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      'https://img0.baidu.com/it/u=203029382,3321673726&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      'https://img0.baidu.com/it/u=203029382,3321673726&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
    ]
  },
  release: {
    createTime: '2022-02-25 17:33:28',
    status: 2,
    checkStatus: 2,
    explain: '活动说明内容活动说明内容活动说明内容活动说明内容活动说明内容',
    isTop: false
  },
  data: {
    enrollNum: 12,
    signNum: 2,
    trendsNum: 10,
    commentNum: 22,
    shareNum: 8
  }
});

const config = ref<DetailConfig[]>([
  {
    type: 'divider',
    title: '活动信息'
  },
  {
    type: 'key',
    key: 'activity.name',
    label: '活动名称'
  },
  {
    type: 'key',
    key: 'activity.time',
    label: '活动时间'
  },
  {
    type: 'key',
    key: 'activity.endTime',
    label: '报名截止时间'
  },
  {
    type: 'key',
    key: 'activity.region',
    label: '活动地区'
  },
  {
    type: 'key',
    key: 'activity.address',
    label: '详细地址'
  },
  {
    type: 'key',
    key: 'activity.contacts',
    label: '联系人'
  },
  {
    type: 'key',
    key: 'activity.phone',
    label: '联系电话'
  },
  {
    type: 'key',
    key: 'activity.maxMember',
    label: '人数限制'
  },
  {
    type: 'key',
    key: 'activity.integral',
    label: '报名积分'
  },
  {
    type: 'key',
    key: 'activity.status',
    label: '活动状态',
    props: {
      class: computed(() => data.value.activity.status === 2 ? 'text-red-500' : 'text-green-500')
    },
    handler: (status) => {
      if(status === 2) {
        return '已结束';
      }
      return '进行中';
    }
  },
  {
    type: 'key',
    key: 'activity.club',
    label: '关联俱乐部'
  },
  {
    type: 'component',
    component: 'img',
    props: {
      src: data.value.activity.qrcode,
      width: 150,
      height: 150
    },
    label: '签到码'
  },
  {
    type: 'slot',
    slotName: 'imgsSlot',
    label: '图片',
    span: 24
  },
  {
    type: 'divider',
    title: '发布信息'
  },
  {
    type: 'key',
    key: 'release.createTime',
    label: '创建时间'
  },
  {
    type: 'key',
    key: 'release.status',
    label: '状态',
    handler: (status) => {
      if(status === 2) {
        return '已下架';
      }
      return '已上架';
    }
  },
  {
    type: 'key',
    key: 'release.checkStatus',
    label: '审核状态',
    handler: (status) => {
      if(status === 2) {
        return '已通过';
      }
      return '未审核';
    }
  },
  {
    type: 'key',
    key: 'release.explain',
    label: '说明'
  },
  {
    type: 'key',
    key: 'release.isTop',
    label: '是否置顶',
    handler: (status) => {
      return status ? '是' : '否';
    }
  },
  {
    type: 'divider',
    title: '数据信息'
  },
  {
    type: 'key',
    key: 'data.enrollNum',
    label: '报名用户数'
  },
  {
    type: 'key',
    key: 'data.signNum',
    label: '签到数'
  },
  {
    type: 'key',
    key: 'data.trendsNum',
    label: '相关动态数'
  },
  {
    type: 'key',
    key: 'data.commentNum',
    label: '评论数'
  },
  {
    type: 'key',
    key: 'data.shareNum',
    label: '评论数'
  }
]);
</script>
<template>
  <div class="bg-white p-small">
    <Detail
      type="top"
      span="0:24 1024:12 1334:8"
      :data="data"
      :config="config"
    >
      <template #imgsSlot>
        <div class="flex flex-wrap">
          <img
            v-for="item, index in data.activity.imgs"
            :key="index"
            class="mr-mini mb-mini"
            :src="item"
            width="150"
            height="150"
            alt=""
          >
        </div>
      </template>
    </Detail>
  </div>
</template>
