import { MockMethod } from 'vite-plugin-mock';

const mocks: MockMethod[] = [
  {
    url: '/api/test',
    method: 'get',
    timeout: 1500,
    response: () => {
      return {
        code: 200,
        msg: '',
        data: {
          'id|10000-100000': 1,
          'name': '@cname',
          'email': '@email'
        }
      };
    }
  }
];

export default mocks;
