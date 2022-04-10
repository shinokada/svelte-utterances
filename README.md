# svelte-utterances

## Demo

[Svelte-utterances](https://svelte-utterances.vercel.app/)

## Installation

```sh
npm i -D @codewithshin/svelte-utterances
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

### Dynamic theme switching

This is an example of how to reactively change the theme.

```js
<script>
import { Utterances } from '@codewithshin/svelte-utterances'

let theme = 'github-light';

const switchTheme = () => {
  theme = theme === 'github-light' ? 'github-dark' : 'github-light';
}
</script>

<button on:click={switchTheme}>

<Utterances 
  theme={theme}
  reponame="yourname/repo-name"
/>
```

Check more details [Utterances](https://utteranc.es/)

## Credits

- [James Perkins](https://www.jamesperkins.dev/post/supercharge-your-astro-blog)

## References

- [utterances](https://utteranc.es/)
- [utterances Repo](https://github.com/utterance/utterances)