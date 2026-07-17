// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://relentgroup.ru',
  trailingSlash: 'always',
  build: {
    // keep clean directory-style URLs: /analog/minotti-andersen/
    format: 'directory',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
});
