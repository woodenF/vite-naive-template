import { RequestReturn } from '@/types/http';
import axios, { AxiosRequestConfig, Canceler } from 'axios';

const instance = axios.create({
  timeout: 30 * 1000,
  baseURL: '/api'
});

/**
 * 抛出 cancel, 使外部可以主动关闭请求
 * @param config
 * @returns
 */
export function request<T = any>(config: AxiosRequestConfig): RequestReturn<T> {
  const cancel = ref<Canceler>();
  return {
    instance: instance({
      ...config,
      cancelToken: new axios.CancelToken((c) => {
        cancel.value = c;
      })
    }),
    cancel
  };
}
