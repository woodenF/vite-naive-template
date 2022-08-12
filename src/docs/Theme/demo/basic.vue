<script lang="ts" setup>
import { useThemeStore } from '@/store/modules/theme';

const themeStroe = useThemeStore();

function getRandomColor() {
  return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}

function setTheme() {
  themeStroe.setThemeOverrides({
    common: {
      primaryColor: getRandomColor(),
      primaryColorHover: getRandomColor(),
      infoColor: getRandomColor(),
      infoColorHover: getRandomColor(),
      successColor: getRandomColor(),
      successColorHover: getRandomColor(),
      warningColor: getRandomColor(),
      warningColorHover: getRandomColor(),
      errorColor: getRandomColor(),
      errorColorHover: getRandomColor(),
      hoverColor: getRandomColor()
    }
  });
}

</script>
<template>
  <div>
    <NSpace>
      <NButton type="primary">
        primary
      </NButton>
      <NButton type="info">
        info
      </NButton>
      <NButton type="success">
        success
      </NButton>
      <NButton type="warning">
        warning
      </NButton>
      <NButton type="error">
        error
      </NButton>
    </NSpace>
    <NSpace>
      <NButton @click="setTheme">
        切换主题
      </NButton>
    </NSpace>
  </div>
</template>
