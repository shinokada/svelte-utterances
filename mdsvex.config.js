import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
  layout: {
    defaultLayout: './src/routes/layouts/defaultLayout/+page.svelte',
    mainLayout: './src/routes/layouts/mainLayout/+page.svelte'
  },
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool'
  },

  rehypePlugins: []
});

export default config;