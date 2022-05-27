import { AxiosResponse, Canceler } from 'axios';
import { ComputedRef, WatchSource } from 'vue';

export interface Response<T> {
  status: number;
  data: T;
  msg: string;
}

export type AppAxiosResponse<T = any> = AxiosResponse<Response<T>>;

/**
 * 为了满足 useRequest，这里对 request 返回的类型做了改变
 */
export interface RequestReturn<T> {
  instance: Promise<AppAxiosResponse<T>>;
  cancel: Ref<Canceler | undefined>;
}

export interface HttpError<T = any> {
  status: number | string;
  data: T;
  mag: string;
}

export type Service<T, P extends any[]> = (...args: P) => RequestReturn<T>;

export interface Options<T, P extends any[]> {
  // 是否手动发起请求
  manual?: boolean;

  // 当 manual 为 false 时，自动执行的默认参数
  defaultParmas?: P;

  // 依赖项更新
  refreshDeps?: WatchSource<any>[];
  refreshDepsParams?: ComputedRef<P>;

  // 是否关闭重复请求，当 queryKey 存在时，该字段无效
  repeatCancel?: boolean;

  // 并发请求
  queryKey?: (...args: P) => string;

  // 成功回调
  onSuccess?: (response: AppAxiosResponse<T>, params: P) => void;

  // 失败回调
  onError?: (err: HttpError, params: P) => void;
}

export interface Result<T = any> {
  data?: T | null;
  loading?: boolean;
  cancel?: Canceler;
  err?: HttpError;
}
