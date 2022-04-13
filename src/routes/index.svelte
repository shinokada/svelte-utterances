<script>
  import Utterances from "$lib/Utterances.svelte";
  import { theme as themeStore } from "$lib/theme";
</script>

<header>
  <h1>Svelte Utterances component</h1>
</header>

<Utterances reponame="shinokada/svelte-utterances" theme={$themeStore} />

<footer>
  <a href="https://www.npmjs.com/package/@codewithshin/svelte-utterances">NPM</a
  >
  <a href="https://github.com/shinokada/svelte-utterances">Github</a>
</footer>

<style>
  :global(html) {
    transition: all 200ms ease;
  }
  :global(html.dark) {
    background-color: hsl(0, 0%, 30%);
    color: hsl(0, 0%, 90%);
  }
  h1 {
    text-align: center;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }

  footer {
    margin: 2em 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 2ch;
    text-align: center;
    background-color: bisque;
    font-family: "Courier New", Courier, monospace;
  }
  footer a {
    line-height: 0;
  }
</style>
