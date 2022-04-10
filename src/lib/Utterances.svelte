<script>
  import { onMount } from "svelte";
  import { browser } from "$app/env";

  export let reponame;
  export let issueTerm = "pathname";
  export let label = "comments";
  export let theme = "github-light";

  let scriptElm;

  if (browser) {
    scriptElm = document.createElement("script");
    scriptElm.setAttribute("repo", reponame);
    scriptElm.setAttribute("issue-term", issueTerm);
    scriptElm.setAttribute("label", label);
    scriptElm.setAttribute("crossorigin", "anonymous");
    scriptElm.src = "https://utteranc.es/client.js";
  }
  $: {
    if (browser) {
      try {
        const iFrame = document.getElementsByClassName("utterances-frame");
        iFrame.contentWindow.postMessage(
          { type: "set-theme", theme },
          "https://utteranc.es"
        );
      } catch (err) {
        // The iFrame has not been loaded yet.
        console.log("err", err);
      }
    }
  }
  onMount(() => {
    const tag = document.getElementById("utterances");
    tag.parentNode.insertBefore(scriptElm, tag);
  });
</script>

<div id="utterances" />
