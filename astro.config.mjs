// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { categories, productsByCategory } from './src/data/products.js';

// Категории без товаров закрыты в noindex — в sitemap их быть не должно.
const emptyCategoryPaths = categories
  .filter((c) => productsByCategory(c.slug).length === 0)
  .map((c) => `/katalog/${c.slug}/`);

// https://astro.build/config
export default defineConfig({
  site: 'https://relentgroup.ru',
  trailingSlash: 'always',
  build: {
    // чистые URL вида /analog/minotti-andersen/
    format: 'directory',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      filter: (page) => !emptyCategoryPaths.some((p) => page.endsWith(p)),
    }),
  ],
});
