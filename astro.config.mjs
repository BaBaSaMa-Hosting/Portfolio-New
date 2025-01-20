// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://babasama.com",
  integrations: [tailwind(), sitemap()],
  trailingSlash: "never",
  redirects: {},
  security: {
    checkOrigin: true
  },
  prefetch: true,
  output: "static",
  compressHTML: true,
});