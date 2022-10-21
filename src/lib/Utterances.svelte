<script>
	import utterancesTheme from './theme';
	import { onMount } from 'svelte';
	/** @type {string}*/
	export let reponame;
	/** @type {string}*/
	export let issueTerm = 'pathname';
	/** @type {string}*/
	export let label = 'comments';
	/** @type {string}*/
	export let theme = $utterancesTheme;

	/** @type {HTMLDivElement} */
	let divElm;
	/** @type {HTMLScriptElement} */
	let scriptElm;
	/** @type {boolean}*/
	let browser = false;
	$: {
		try {
			/** @type {HTMLIFrameElement}*/
			const iFrame = browser && divElm.getElementsByClassName('utterances-frame')[0];
			if (iFrame) {
				iFrame.contentWindow.postMessage({ type: 'set-theme', theme }, 'https://utteranc.es');
			}
		} catch (e) {
			// iFrame is not loaded yet!
			console.log('error', e);
		}
	}

	const sendPostMessage = () => {
		const iFrame = divElm.getElementsByClassName('utterances-frame')[0];
		if (!iFrame) {
			// Recursion until iFrame is loaded
			setTimeout(sendPostMessage, 100);
			return;
		}

		iFrame.contentWindow.postMessage({ type: 'set-theme', theme }, 'https://utteranc.es');
	};
	onMount(() => {
		scriptElm = document.createElement('script');

		scriptElm.setAttribute('repo', reponame);
		scriptElm.setAttribute('issue-term', issueTerm);
		scriptElm.setAttribute('label', label);
		scriptElm.setAttribute('crossorigin', 'anonymous');
		scriptElm.src = 'https://utteranc.es/client.js';

		divElm.appendChild(scriptElm);
		browser = true;
		sendPostMessage();
	});
</script>

<div bind:this={divElm} />