import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://sanddigital.github.io',
  base: '/derby-double/',
  output: 'static',
  devToolbar: {
    enabled: false
  }
});
