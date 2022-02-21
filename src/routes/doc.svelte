<script>
  import Prism from "prismjs";
  import "prismjs/themes/prism.css";
  import "prism-themes/themes/prism-holi-theme.css";
  import "prismjs/components/prism-markdown.js";
  import { Utterances } from "@codewithshin/svelte-utterances";
  import { Navbar } from "svelte-flow";
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
    <div class="my-16">
      <Utterances reponame="shinokada/svelte-flow" theme="dark-blue" />
    </div>
  </div>
</div>
