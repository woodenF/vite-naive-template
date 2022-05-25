export function getAsyncRoutes(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const permList = [
      '/dashboard',
      '/dashboard/analysis',
      '/dashboard/workbench'
    ];
    setTimeout(() => {
      resolve(permList);
    }, 1000);
  });
}
