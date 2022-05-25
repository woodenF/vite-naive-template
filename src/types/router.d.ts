import { Component } from 'vue';
import { RouteMeta, RouteRecordName, RouteRecordRaw } from 'vue-router';

export type AppRouteRecordRaw = {
  meta: RouteMeta;
  name: RouteRecordName;
  orderBy?: number;
  children?: AppRouteRecordRaw[];
  hidden?: boolean;
} & RouteRecordRaw;

declare module 'vue-router' {
  interface RouteMeta {
    title: string;
    noPerm?: boolean;
    icon?: Component;
    url?: string;
  }
}
