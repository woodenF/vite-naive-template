import { MockMethod } from 'vite-plugin-mock';

const appMocks: MockMethod[] = [
  {
    url: '/api/login',
    method: 'get',
    timeout: 1000,
    response: () => {
      return {
        code: 200,
        msg: '',
        data: {
          permList: [
            '/dashboard',
            '/dashboard/analysis',
            '/dashboard/workbench'
          ]
        }
      };
    }
  }
];

export default appMocks;
