// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import partytown from "@astrojs/partytown";
import { config } from "astro:schema";

// https://astro.build/config
export default defineConfig({
  site: "https://Masamune0221.github.io",
  base: "/portfolio/",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [partytown({
    config:{
      forward: ["dataLayer.push"]
    }
  })],
});