---
layout: doc
---

<div class="max-w-3xl mx-auto mb-8">
    <h1 class="text-3xl text-gray-900 w-full dark:text-white py-4">Svelte-utterances</h1>

   <p class="text-gray-900 dark:text-white "><a href="https://utteranc.es/" target="_blank" class="underline"
      >Utterances</a> component for Svelte. Utterances is a lightweight comments widget built on GitHub issues.</p>

<h2 class="text-gray-900 text-2xl w-full dark:text-white py-4">Installation</h2>

```sh
npm i -D @codewithshin/svelte-utterances
```

<h2 class="text-gray-900 text-2xl w-full dark:text-white py-4">Default Props</h2>

```js
let reponame;
let issueTerm = "pathname"
let label = "comments"
let theme = "github-light"
```

<h2 class="text-gray-900 text-2xl w-full dark:text-white py-4">Themes</h2>

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

<p class="text-gray-900 dark:text-white">In __layout.svelte:</p>

```svelte
<script>
  import { Utterances } from "@codewithshin/svelte-utterances";
</script>
<div class="container">
  <slot />
  <Utterances reponame="your-name/repo-name" theme="github-light" />
</div>
```

<h2 class="text-gray-900 text-2xl w-full dark:text-white py-4">References</h2>

<p class="text-gray-900 dark:text-white py-2"><a href="https://utteranc.es/" target="_blank" class="underline">utterances</a></p>
<p class="text-gray-900 dark:text-white py-2"><a href="https://github.com/utterance/utterances" target="_blank" class="underline">utterances Repo</a></p>
<p class="text-gray-900 dark:text-white py-2"><a href="https://www.jamesperkins.dev/post/supercharge-your-astro-blog" target="_blank" class="underline">James Perkins</a></p>

</div>