// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://toolztotal.com',
  trailingSlash: 'never',
  redirects: {
    '/utility/grade-calculator': '/education/grade-calculator',
    '/utility/gpa-calculator': '/education/gpa-calculator',
    '/dev/html-entities': '/dev/url-encoder-decoder',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

