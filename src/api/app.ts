import { RequestReturn } from '@/types/http';

// 测试打包之后的效果
// 弃用mock
export function onLogin(): RequestReturn<any> {
  return {
    instance: new Promise((reslove, reject) => {
      const permList = [
        '/dashboard',
        '/dashboard/analysis',
        '/dashboard/workbench'
      ];
      setTimeout(() => {
        reslove({
          data: {
            data: {
              permList
            }
          }
        } as any);
      }, 1000);
    }),
    cancel: null
  };
}
