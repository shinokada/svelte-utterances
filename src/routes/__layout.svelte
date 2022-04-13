<script>
  import { theme as themeStore } from "$lib/theme";
  import { onMount } from "svelte";
  /** @type {boolean}*/
  let darkMode = $themeStore === "github-dark";

  function switchTheme(e) {
    $themeStore = e.target.checked ? "github-dark" : "github-light";
    document.documentElement.classList.toggle("dark");
  }
  onMount(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    }
  });
</script>

<label for="darkmode-checkbox">Dark mode</label>
<input id="darkmode-checkbox" type="checkbox" on:change={switchTheme} />

<slot />
