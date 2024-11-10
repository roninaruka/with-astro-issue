/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly PUBLIC_API_PATH: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
declare module "*.astro";


