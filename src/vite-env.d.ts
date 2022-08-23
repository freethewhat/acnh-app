/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<PropsOrPropOptions, RawBingings, unknown>;
  export default component;
}

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
