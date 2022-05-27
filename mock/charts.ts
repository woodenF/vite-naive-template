import { MockMethod } from 'vite-plugin-mock';

const chartMocks: MockMethod[] = [
  {
    url: '/api/getHomeChart1',
    method: 'get',
    timeout: 1000,
    response: () => {
      return {
        code: 200,
        msg: '',
        data: {

        }
      };
    }
  }
];

export default chartMocks;
