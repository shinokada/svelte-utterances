import { defineMDSveXConfig as defineConfig } from "mdsvex";

const config = defineConfig({
  layout: {
    doc: './src/routes/doc.svelte',
    themeSwitchLayout: './src/routes/themeSwitchLayout.svelte',
  },
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;
