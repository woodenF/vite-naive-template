import { DialogProviderInst, LoadingBarProviderInst, MessageProviderInst, NotificationProviderInst } from 'naive-ui';

declare global {
  interface Window{
    $loadingBar?: LoadingBarProviderInst;
    $dialog?: DialogProviderInst;
    $message?: MessageProviderInst;
    $notification?: NotificationProviderInst;
  }
}
