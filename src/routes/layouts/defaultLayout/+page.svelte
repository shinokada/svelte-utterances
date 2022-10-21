<script lang="ts">
	import 'prism-themes/themes/prism-holi-theme.css';
	import { Utterances } from '$lib';

	const theme = 'dark-blue';
</script>

<div class="max-w-3xl mx-auto pt-8">
	<div class="container">
		<slot />
		<div class="my-16 relative">
			<p class="dark:text-white">Current theme is: {theme}</p>
			<Utterances reponame="shinokada/svelte-utterances" {theme} />
		</div>
	</div>
</div>
