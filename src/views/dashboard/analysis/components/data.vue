<script lang="ts" setup>
interface CardData {
  id: string;
  title: string;
  value: number;
  unit: string;
  colors: [string, string];
  icon: string;
}

const cardData: CardData[] = [
  {
    id: 'visit',
    title: '访问量',
    value: 1000000,
    unit: '',
    colors: ['#ec4786', '#b955a4'],
    icon: 'visit'
  },
  {
    id: 'amount',
    title: '成交额',
    value: 234567.89,
    unit: '$',
    colors: ['#865ec0', '#5144b4'],
    icon: 'money'
  },
  {
    id: 'download',
    title: '下载数',
    value: 666666,
    unit: '',
    colors: ['#56cdf3', '#719de3'],
    icon: 'download'
  },
  {
    id: 'trade',
    title: '成交数',
    value: 999999,
    unit: '',
    colors: ['#fcbc25', '#f68057'],
    icon: 'deal'
  }
];
</script>

<template>
  <NGrid
    :x-gap="16"
    :y-gap="16"
    :item-responsive="true"
    cols="s:1 m:2 l:4"
    class="mb-normal"
    responsive="screen"
  >
    <NGridItem
      v-for="item in cardData"
      :key="item.id"
    >
      <div
        class="flex flex-col justify-between bg-gradient-to-r h-[100px] rounded-mini p-small text-normal text-white"
        :class="[`from-[${item.colors[0]}]`, `to-[${item.colors[1]}]`]"
      >
        <div>{{ item.title }}</div>
        <div class="flex justify-between items-center">
          <Icon
            :name="item.icon"
            size="24"
          />
          <div class="text-large">
            {{ item.unit }} {{ item.value }}
          </div>
        </div>
      </div>
    </NGridItem>
  </NGrid>
</template>
