<script>
  import "prism-themes/themes/prism-holi-theme.css";
  import { Utterances } from "$lib/index";
  import { Navbar, Select } from "flowbite-svelte";
  let theme = "github-light";
  let selectprops = {
    id: "theme-select",
    name: "theme-select",
    label: "Select your theme",
  };
  let selectClass =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  let spanClass =
    "pl-2 self-center text-lg font-semibold text-gray-900 whitespace-nowrap dark:text-white";
  let name = "Svelte-Utterances";
  let logo = "/images/svelte-utterances-logo.png";
  let alt = "Svelte-Utterances";
  let textsize = "text-lg";
  let menus = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Dynamic Theme",
      href: "/dynamic-theme",
    },
    {
      name: "GitHub",
      href: "https://github.com/shinokada/svelte-utterances",
    },
    {
      name: "UI by Flowbite-Svelte",
      href: "https://flowbite-svelte.vercel.app",
    },
  ];
</script>

<div class="max-w-4xl mx-auto py-4">
  <Navbar {menus} {name} {alt} {logo} {textsize} {spanClass} />
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
