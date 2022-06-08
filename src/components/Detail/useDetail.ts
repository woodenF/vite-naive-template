import { Options } from './types';

export function useDetail(options: Options) {

  const topLabelClass = 'text-normal text-gray-400 mb-[8px] font-semibold';
  const leftLabelClass = 'text-normal text-right mr-[16px] font-semibold';
  const topItemClass = 'w-full';
  const leftItemClass = 'w-full flex';

  const labelClass = ref('');

  const itemClass = ref('');

  watch(() => options.type, () => {
    labelClass.value = options.type === 'top' ? topLabelClass : leftLabelClass;
    itemClass.value = options.type === 'top' ? topItemClass : leftItemClass;
  }, { immediate: true });

  function getValue(key: string, data: Record<string, any>) {
    if(!key) {return '/';}
    const keys = key.split('.');
    let value = data;
    for(const item in keys) {
      value = value && value[keys[item] as any];
    }
    return value;
  }

  return {
    labelClass,
    itemClass,
    getValue
  };
}
