import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";


import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
    site: "https://xyz.com",
    integrations: [tailwind({
        applyAstroPreset: false,
    }), react()],
    vite: {
        plugins: [],
    },
    devToolbar: {
        enabled: true,
    },
    output: "server",
    adapter: node({
        mode: "middleware",
    }),
});