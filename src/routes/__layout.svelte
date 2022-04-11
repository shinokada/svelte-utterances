<script>
  import "../app.css";
  import { DarkMode, SimpleFooter } from "flowbite-svelte";
  let site = {
    href: "/",
    name: "Svelte Utterances",
  };
  let links = [
    { name: "Home", href: "/" },
    { name: "Dynamic Theme", href: "/dynamic-theme" },
    { name: "Theme Switch", href: "/theme-switch" },
  ];
  let darkmodebtn =
    "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 fixed left-2 top-4 z-50";
</script>

<main class="container mx-auto">
  <DarkMode btnClass={darkmodebtn} />
  <slot />
</main>
<SimpleFooter {links} {site} allRightsReserved="" />
