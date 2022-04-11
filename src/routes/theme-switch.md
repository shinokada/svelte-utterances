---
layout: themeSwitchLayout
---

<script>
  import Utterances from "$lib/Utterances.svelte";
  import {Button} from 'flowbite-svelte'
  let theme = "github-light";
  const switchTheme = () => {
    theme = theme === "github-light" ? "github-dark" : "github-light";
  };
</script>


  <h1 class="text-3xl w-full flex justify-center text-gray-900 dark:text-white p-8">Theme Switcher</h1>


```html
<script>
  import Utterances from "@codewithshin/svelte-utterances";
  import {Button} from 'flowbite-svelte'
  let theme = "github-light";
  const switchTheme = () => {
    theme = theme === "github-light" ? "github-dark" : "github-light";
  };
</script>

<Button on:click={switchTheme} name="Toggle theme" />

<Utterances reponame="shinokada/svelte-utterances" {theme} />
```

<div class="flex justify-center p-8">
<Button on:click={switchTheme} name="Toggle theme" />
 </div>

<Utterances reponame="shinokada/svelte-utterances" {theme} />

<footer>
  <a href="https://www.npmjs.com/package/@codewithshin/svelte-utterances">NPM</a
  >
  <a href="https://github.com/shinokada/svelte-utterances">Github</a>
</footer>
