import { ref } from 'vue';
export default function useHorizontalScroll() {
  const el = ref<Element>();
  function onScroll(e: any) {
    const detail = e.wheelDelta || e.detail;
    let step = 0;
    step = detail > 0 ? -50 : 50;
    if(el.value) {
      el.value.scrollLeft += step;
    }
  }
  return {
    el,
    onScroll
  };
}
