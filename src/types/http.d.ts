import { AxiosResponse } from 'axios';

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
