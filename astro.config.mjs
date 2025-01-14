// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: "https://babasama.com",
  integrations: [tailwind()],
  trailingSlash: "never",
  redirects: {},
  security: {
    checkOrigin: true
  },
  prefetch: true,
  output: "static",
  compressHTML: true,
});