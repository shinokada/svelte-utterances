const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/svelte-flow/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {},
  },

  plugins: [require('flowbite/plugin')],
};

module.exports = config;
