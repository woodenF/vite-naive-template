import { useAppStore } from '@/store/modules/app';
import * as echarts from 'echarts';
import { debounce } from 'lodash-es';
import { Ref } from 'vue';

export function useCharts(option: Ref) {
  const chartEl = ref<HTMLDivElement>();
  const charts = ref<echarts.ECharts | null>(null);
  let chartInstance: echarts.ECharts | null = null;

  const appStore = useAppStore();

  function renderChart(option: Ref) {
    if(!chartEl.value) {
      return;
    }
    if(!charts.value) {
      chartInstance = echarts.init(chartEl.value);
    }

    chartInstance?.setOption(option.value);
    charts.value = chartInstance;
  }

  const resize = debounce(() => {
      console.log('chartEl resize');
      charts.value?.resize();
  }, 200);

  onMounted(() => {
    renderChart(option);
    setTimeout(() => {
      charts.value?.resize();
    }, 200);
    window.addEventListener('resize', resize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', resize);
  });

  watch(() => option, () => {
    renderChart(option);
  }, { deep: true });

  watch(() => appStore.collapsed, () => {
    // 开关侧边菜单时，过渡动画结束后 resize
    setTimeout(() => {
      chartInstance?.resize();
    }, 320);
  });

  return {
    chartEl,
    charts
  };
}
