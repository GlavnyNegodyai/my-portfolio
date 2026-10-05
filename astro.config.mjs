// @ts-check
import { defineConfig } from "astro/config";
import { imagetools } from "vite-imagetools";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://glavnynegodyai.github.io',
  base: '/my-portfolio',
  vite: {
    plugins: [imagetools()],
  },
  integrations: [react()],
  i18n: {
    locales: ["ru", "en"],
    defaultLocale: "ru",
    routing: {
      prefixDefaultLocale: false,
      fallbackType: "redirect",
    },
  },
});
