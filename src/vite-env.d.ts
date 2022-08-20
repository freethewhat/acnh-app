/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<PropsOrPropOptions, RawBingings, unknown>;
  export default component;
}
