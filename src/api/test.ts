import { request } from '@/http/axios';
import { ITest } from '@/interface/test';

export function getTest() {
  return request<ITest>({
    url: '/test'
  });
}

export function getTestById(id: number) {
  return request<ITest>({
    url: '/test',
    params: {
      id
    }
  });
}
