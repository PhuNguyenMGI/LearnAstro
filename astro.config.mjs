import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import addClientDirective from 'astro';

import vue from "@astrojs/vue";

const directives = () => {
  return {
    name: 'integration',
    hooks: {
      "astro:config:setup": ({addClientDirective}: any) => {
        addClientDirective({
          name: "scroll",
          entrypoint: "./src/directives/scrollDirectives.ts",
        });
    }}
  }
}

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), vue(), directives()]})