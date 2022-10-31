import { AppAxiosResponse } from '@/types/http';

// 测试打包之后的效果
// 弃用mock
export function onLogin(): Promise<AppAxiosResponse<any>> {
  return new Promise((resolve, reject) => {
    const permList = [
      '/dashboard',
      '/dashboard/analysis',
      '/dashboard/workbench'
    ];
    resolve({
        data: {
          data: {
            permList
          }
        }
      } as any);
  });

}
