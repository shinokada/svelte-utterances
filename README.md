# svelte-utterances

## Demo

[Svelte-Utterances Demo](https://svelte-utterances.vercel.app/)


## Installation

```sh
npm i -D @codewithshin/svelte-utterances
```

After cloning this repo, you can see Svelte-Utterances in action in the demo-site branch.

```sh
git checkout demo-site
```

## Props

| Name        | Default        |
| ----------- | -------------- |
| `reponame`  | None           |
| `issueTerm` | `pathname`     |
| `label`     | `comments`     |
| `theme`     | `github-light` |

### Themes

The default is github-light. Select one from:

- github-light
- github-dark
- preferred-color-scheme
- github-dark-orange
- icy-dark
- dark-blue
- photon-dark
- boxy-light
- gruvbox-dark

### Issue term

The default is pathname. Select one from:

- url
- title
- og:title
- [Enter issue number]
- [Enter term]

## How to use

```js
<script>
import { Utterances } from '@codewithshin/svelte-utterances'
</script>

<Utterances 
  theme="github-dark"
  reponame="yourname/repo-name"
/>
```

Check more details [Svelte-Utterances](https://svelte-utterances.vercel.app/)

## Theme switch

You can toggle between two themes.

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

## Dynamic theme switching

This is an example of how to reactively change the theme.

Install `Flowbite-Svelte`:

```sh
npm i -D flowbite-svelte
```

```html
<script>
  import { Utterances } from "@codewithshin/svelte-utterances";
  import { Select } from "flowbite-svelte";
  let theme = "github-light";
  let selectprops = {
    id: "theme-select",
    name: "theme-select",
    label: "Select your theme",
  };
  let selectClass =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
</script>

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
```

Check more details [Utterances](https://utteranc.es/)

## Credits

- [James Perkins](https://www.jamesperkins.dev/post/supercharge-your-astro-blog)

## References

- [utterances](https://utteranc.es/)
- [utterances Repo](https://github.com/utterance/utterances)