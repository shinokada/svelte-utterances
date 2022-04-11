<script>
  import { onMount } from "svelte";

  /** @type {string}*/
  export let reponame;

  /** @type {string}*/
  export let issueTerm = "pathname";

  /** @type {string}*/
  export let label = "comments";

  /** @type {string}*/
  export let theme = "github-light";

  /** @type {HTMLDivElement} */
  let divElm;

  /** @type {HTMLScriptElement} */
  let scriptElm;

  /** @type {boolean}*/
  let browser = false;

  $: {
    if (browser) {
      try {
        const iFrame = divElm.getElementsByClassName("utterances-frame")[0];
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

    divElm.appendChild(scriptElm);
    browser = true;
  });
</script>

<div bind:this={divElm} />
