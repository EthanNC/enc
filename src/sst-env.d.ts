/// <reference types="vite/client" />
// biome-ignore lint/suspicious/noEmptyInterface: sst is generating this empty interface
interface ImportMetaEnv {}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
