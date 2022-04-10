<script>
  import "prism-themes/themes/prism-holi-theme.css";
  import { Utterances } from "@codewithshin/svelte-utterances";
  import { Navbar, Select } from "flowbite-svelte";
  let theme = "github-light";
  let selectprops = {
    id: "theme-select",
    name: "theme-select",
    label: "Select your theme",
  };
  let selectClass =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  let sitename = "Svelte-utterances";
  let logo = "/images/mkdir-logo.webp";
  let alt = "Svelte-utterances";
  let textsize = "text-lg";
  let menus = [
    {
      name: "Home",
      link: "/",
      rel: undefined,
    },
    {
      name: "GitHub",
      link: "https://github.com/shinokada/svelte-utterances",
      rel: undefined,
    },
    {
      name: "UI by Svelte-flow",
      link: "https://svelte-flow.vercel.app",
      rel: undefined,
    },
  ];
</script>

<div class="max-w-4xl mx-auto py-4">
  <Navbar {menus} {sitename} {alt} {logo} {textsize} />
</div>
<div class="max-w-3xl mx-auto pt-8">
  <div class="container">
    <slot />

    <div class="my-16 relative">
      <Select {...selectprops} bind:value={theme} {selectClass}>
        <option value="github-light">GitHub Light</option>
        <option value="github-dark">GitHub Dark</option>
        <option value="github-dark-orange">GitHub Dark Orange</option>
        <option value="icy-dark">Icy Dark</option>
        <option value="dark-blue">Dark Blue</option>
        <option value="photon-dark">Photon Dark</option>
        <option value="boxy-light">Boxy Light</option>
        <option value="gruvbox-dark">Gruvbox Dark</option>
      </Select>

      <Utterances reponame="shinokada/svelte-utterances" {theme} />
    </div>
  </div>
</div>
