<script>
  import Utterances from "$lib/Utterances.svelte";
  let theme = "github-light";

  const switchTheme = () => {
    theme = theme === "github-light" ? "github-dark" : "github-light";
  };
</script>

<header>
  <h1>Svelte Utterances component</h1>

  <button on:click={switchTheme}>Toggle theme</button>
</header>

<Utterances reponame="shinokada/svelte-utterances" {theme} />

<footer>
  <a href="https://www.npmjs.com/package/@codewithshin/svelte-utterances">NPM</a
  >
  <a href="https://github.com/shinokada/svelte-utterances">Github</a>
</footer>

<style>
  h1 {
    text-align: center;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
  button {
    display: block;
    margin: auto;
    padding: 1.5em 1em;
    cursor: pointer;
    background-color: #8585f9;
    color: white;
    border: none;
    border-radius: 7px;
    font-family: sans-serif;
    line-height: 0em;
    transition: all 100ms ease-in-out;
  }
  button:hover {
    box-shadow: 1px 3px 8px rgb(179, 179, 212);
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
