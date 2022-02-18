<script>
  import { onMount } from "svelte";
  export let reponame;
  export let issueTerm = "pathname";
  export let label = "comments";
  export let theme = "github-light";
  onMount(() => {
    const s = document.createElement("script");
    const tag = document.getElementById("utterances");
    s.setAttribute("repo", reponame);
    s.setAttribute("issue-term", issueTerm);
    s.setAttribute("label", label);
    s.setAttribute("theme", theme);
    s.setAttribute("crossorigin", "anonymous");
    s.src = "https://utteranc.es/client.js";
    tag.parentNode.insertBefore(s, tag);
  });
</script>

<div id="utterances" />
