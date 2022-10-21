---
layout: mainLayout
---

<div class="max-w-3xl mx-auto mb-8">
  <h1 class="text-3xl text-gray-900 w-full dark:text-white py-4">Dynamic</h1>

<h2 class="text-gray-900 text-2xl w-full dark:text-white py-4">Installation</h2>

<p class="dark:text-white">For this example, install Flowbite-Svelte:</p>

```sh
npm i -D flowbite flowbite-svelte classnames @popperjs/core
```

<p class="text-gray-900 dark:text-white">In __layout.svelte:</p>

```svelte
<script>
  import { Utterances, utterancesTheme } from "@codewithshin/svelte-utterances";
  import { Select } from 'flowbite-svelte';

  let options = [
    { value: 'github-light', name: 'GitHub Light' },
    { value: 'github-dark', name: 'GitHub Dark' },
    { value: 'github-dark-orange', name: 'GitHub Dark Orange' },
    { value: 'icy-dark', name: 'Icy Dark' },
    { value: 'dark-blue', name: 'Dark Blue' },
    { value: 'photon-dark', name: 'Photon Dark' },
    { value: 'boxy-light', name: 'Boxy Light' },
    { value: 'gruvbox-dark', name: 'Gruvbox Dark' }
  ];

  $: theme = $utterancesTheme;
</script>

<div class="container">
  <slot />
  <div class="my-16 relative">
    <Select
      class="mt-2"
      items={options}
      bind:value={theme}
      on:change={() => utterancesTheme.update((n) => (n = theme))}
    />
    <Utterances reponame="shinokada/svelte-utterances" {theme} />
  </div>
</div>
```

</div>