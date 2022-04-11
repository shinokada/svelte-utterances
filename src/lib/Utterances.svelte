<script>
  import { onMount } from "svelte";
  export let reponame;
  export let issueTerm = "pathname";
  export let label = "comments";
  export let theme = "github-light";
  let scriptElm;
  let browser = false;
  $: {
    if (browser) {
      try {
        const iFrame = document.getElementsByClassName("utterances-frame")[0];
        if (iFrame) {
          iFrame.contentWindow.postMessage(
            { type: "set-theme", theme },
            "https://utteranc.es"
          );
        }
      } catch (err) {
        // The iFrame has not been loaded yet.
      }
    }
  }
  onMount(() => {
    scriptElm = document.createElement("script");
    scriptElm.setAttribute("repo", reponame);
    scriptElm.setAttribute("issue-term", issueTerm);
    scriptElm.setAttribute("label", label);
    scriptElm.setAttribute("crossorigin", "anonymous");
    scriptElm.src = "https://utteranc.es/client.js";
    const tag = document.getElementById("utterances");
    tag.parentNode.insertBefore(scriptElm, tag);
    browser = true;
  });
</script>

<div id="utterances" />
