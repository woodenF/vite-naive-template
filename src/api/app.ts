import { request } from '@/http/axios';
import { ILoginReturn } from '@/interface/app';

export function onLogin() {
  return request<ILoginReturn>({
    url: '/login'
  });
}
