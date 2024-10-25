// @ts-check
import { defineConfig } from 'astro/config';
import { defaultWebsiteConfig } from './src/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: defaultWebsiteConfig.siteUrl.href,
  prefetch: {
    prefetchAll: true,
  },
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
