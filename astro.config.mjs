import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [svelte(), tailwind(), vue(), {
    name: 'integration',
    hooks: {
      "astro:config:setup": ({
        addClientDirective,
        injectScript,
        addWatchFile
      }) => {
        addClientDirective({
          name: "scroll",
          entrypoint: "./src/directives/scrollDirective.ts"
        });
        addWatchFile('/package.json');
        addWatchFile('/src/assets/base.css')
      }
    }
  }],
  adapter: netlify()
});