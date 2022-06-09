import { Component, ComputedRef, DefineComponent } from 'vue';

export interface Options {
  type: 'top' | 'left';
  data?: Record<string, any>;
}

type BaseConfig = {
  span?: string | number;
  label?: string;
  labelWidth?: number;
  hidden?: ComputedRef<boolean> | boolean;
  tips?: string;
  props?: Record<string, any>;
}

export type DetailConfig =
  (| {
    type: 'component';
    component: Component | string;
    props?: Record<string, any>;
    // eslint-disable-next-line @typescript-eslint/ban-types
    listeners?: Record<string, Function>;
  }
  | {
    type: 'slot';
    slotName: string;
  }
  | {
    type: 'innerText';
    innerText: string;
  }
  | {
    type: 'key';
    key: string;
    handler?: (value: any) => string
  }
  | {
    type: 'divider',
    title: string
  }) & BaseConfig
