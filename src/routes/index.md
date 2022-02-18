---
layout: doc
---

<script>
 
</script>

<div class="max-w-3xl mx-auto mb-8">
    <h1 class="text-3xl w-full dark:text-white py-4">Svelte-utterances</h1>

   <a href="https://github.com/shinokada/svelte-utterances" target="_blank" class="dark:text-white hover:underline"
      >Svelte-utterances GitHub Repo</a>

<h2 class="text-2xl w-full dark:text-white py-4">Installation</h2>

```sh
npm i -D @codewithshin/svelte-utterances
```

<h2 class="text-2xl w-full dark:text-white py-4">Default Props</h2>

```js
let reponame;
let issueTerm = "pathname"
let label = "comments"
let theme = "github-light"
```

<h2 class="text-2xl w-full dark:text-white py-4">Themes</h2>

```md
- github-light
- github-dark
- preferred-color-scheme
- github-dark-orange
- icy-dark
- dark-blue
- photon-dark
- boxy-light
- gruvbox-dark
```

<p class="dark:text-white">In a __layout.svelte:</p>

```svelte
<script>
  import { Utterances } from "@codewithshin/svelte-utterances";
</script>
<div class="container">
  <slot />
  <Utterances reponame="your-name/repo-name" theme="github-light" />
</div>
```

</div>