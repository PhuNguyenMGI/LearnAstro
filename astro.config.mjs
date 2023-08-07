import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [svelte(), tailwind(), vue(), {
    name: 'integration',
    hooks: {
      "astro:config:setup": ({ addClientDirective, injectScript, addWatchFile }) => {
        addClientDirective({
          name: "scroll",
          entrypoint: "./src/directives/scrollDirective.ts",
        });
        injectScript('page-ssr', 'import "./src/assets/base.css";');
        addWatchFile('/package.json');
        addWatchFile('/src/assets/base.css')
      }
    }
  }],
})