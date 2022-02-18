# svelte-utterances

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

Select one from:

`github-light`, `github-dark`, `preferred-color-scheme`, `github-dark-orange`, `icy-dark`, `dark-blue`, `photon-dark`, `boxy-light`, or `gruvbox-dark`.

## How to use

```js
<script>
import { Utterances } from '@codewithshin/svelte-utterances'
</script>

<Utterances 
  theme="github-dark"
/>
```

Check more details [Utterances](https://utteranc.es/)

## Credits

- [James Perkins](https://www.jamesperkins.dev/post/supercharge-your-astro-blog)


## References

- [utterances](https://utteranc.es/)
- [utterances Repo](https://github.com/utterance/utterances)