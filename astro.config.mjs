import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), vue(), {
    name: 'integration',
    hooks: {
      "astro:config:setup": ({ addClientDirective }) => {
        addClientDirective({
          name: "scroll",
          entrypoint: "./src/directives/scrollDirective.ts",
        });
      }
    }
  }],
})