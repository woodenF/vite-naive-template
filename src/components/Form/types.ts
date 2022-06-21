import { FormItemRule } from 'naive-ui';
import { Component, ComputedRef } from 'vue';

interface ItemProps {
  rule?: FormItemRule | FormItemRule[];
  [key: string]: any
}

type BaseConfig<T> = {
  span?: string | number;
  label?: string;
  labelWidth?: number;
  hidden?: ComputedRef<boolean> | boolean;
  tips?: string;
  props?: Record<string, any>;
  itemProps?: ItemProps;
  // eslint-disable-next-line @typescript-eslint/ban-types
  itemListeners?: Record<string, Function>;
  key?: keyof T;
}

export type FormOptions = {
  value: string | number;
  label: string
}

export type FormConfig<T extends Record<string, any> = Record<string, any>> = (
  | {
    type: 'slot';
    slotName: string;
  }
  | {
    key: string;
    type: 'component';
    component: Component;
    // eslint-disable-next-line @typescript-eslint/ban-types
    listeners?: Record<string, Function>,
    options?: FormOptions[]
  }
) & BaseConfig<T>;
