<script>
  import { theme as themeStore } from "$lib/theme";

  function switchTheme(e) {
    $themeStore = e.target.checked ? "github-dark" : "github-light";
    document.documentElement.classList.toggle("dark");
  }
  if ($themeStore === null) {
    // This is the first visit.
    // So We need to set the theme to the default.
    // We check if user has dark mode enabled by calling prefers-color-scheme.
    const browserDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    $themeStore = browserDarkMode ? "github-dark" : "github-light";
  }
  // Toggle html dark mode based on the theme store.
  $themeStore === "github-dark" &&
    document.documentElement.classList.toggle("dark");
</script>

<label for="darkmode-checkbox">Dark mode</label>
<input
  id="darkmode-checkbox"
  type="checkbox"
  checked={$themeStore === "github-dark"}
  on:change={switchTheme}
/>

<slot />
