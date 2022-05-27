import { HttpError, Options, Result, Service } from '@/types/http';
import { isFunction } from 'lodash-es';

const defaultQuerise = Symbol('default');

export function useRequest<T, P extends any[] = any[]>(
  service: Service<T, P>,
  options: Options<T, P> = {}
) {
  const {
    manual = false,
    defaultParmas = ([] as unknown as P),
    repeatCancel = false,
    refreshDeps = null,
    refreshDepsParams = null,
    queryKey = null
  } = options;

  const querise = reactive<Record<string | symbol, Result<T>>>({
    [defaultQuerise]: {
      data: null,
      loading: false,
      cancel: () => null,
      err: undefined
    }
  });

  const serviceFn = async (...args: P) => {
    const key = queryKey ? queryKey(...args) : defaultQuerise;
    if(!querise[key]) {
      querise[key] = {} as any;
    }
    if(!queryKey && repeatCancel) {
      querise[key].cancel?.();
    }

    querise[key].loading = true;

    const { instance, cancel } = service(...args);
    querise[key].cancel = cancel;

    instance
      .then((res) => {
        querise[key].data = res.data.data;
        // 请求成功时清空之前的错误信息
        querise[key].err = undefined;
        if(isFunction(options.onSuccess)) {
          options.onSuccess(res, args);
        }
      })
      .catch((err: HttpError) => {
        querise[key].err = err;
        if(isFunction(options.onError)) {
          options.onError(err, args);
        }
      })
      .finally(() => {
        querise[key].loading = false;
      });
  };

  const run = serviceFn;

  // 依赖更新
  if(refreshDeps) {
    watch(refreshDeps, () => {
      run(...(refreshDepsParams?.value || ([] as unknown as P)));
    }, { deep: true });
  }

  // 自动执行
  if(!manual) {
    run(...defaultParmas);
  }

  return {
    run,
    querise,
    ...toRefs(querise[defaultQuerise])
  };
}
