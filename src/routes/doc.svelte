<script>
  import "prism-themes/themes/prism-holi-theme.css";
  import { Utterances } from "$lib/index";
  import { Navbar } from "flowbite-svelte";
  // let theme
  $: theme = "github-light";

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
      <Utterances reponame="shinokada/svelte-utterances" {theme} />
    </div>
  </div>
</div>
