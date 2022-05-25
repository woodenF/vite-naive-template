import { RouteRecordRaw } from 'vue-router';
import { cloneDeep } from 'lodash-es';

export function filterAsyncRoutes(routes: RouteRecordRaw[], permList: string[], prefix = ''): RouteRecordRaw[] {
  const res: RouteRecordRaw[] = [];
  routes.forEach((route) => {
    const tmp: RouteRecordRaw = cloneDeep<RouteRecordRaw>(route);
    const path = tmp.path.charAt(0) === '/' ? tmp.path : `${prefix}${tmp.path}`;
    if(tmp.meta?.noPerm) {
      res.push(tmp);
    } else if(permList.includes(path)) {
      if(tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, permList, `${prefix}${tmp.path}/`);
      }
      res.push(tmp);
    }
  });
  return res;
}
