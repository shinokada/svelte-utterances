<script lang="ts">
	import 'prism-themes/themes/prism-holi-theme.css';
	import { Utterances, utterancesTheme } from '$lib';
	import { Navbar, Select, NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte';

	let options = [
		{ value: 'github-light', name: 'GitHub Light' },
		{ value: 'github-dark', name: 'GitHub Dark' },
		{ value: 'github-dark-orange', name: 'GitHub Dark Orange' },
		{ value: 'icy-dark', name: 'Icy Dark' },
		{ value: 'dark-blue', name: 'Dark Blue' },
		{ value: 'photon-dark', name: 'Photon Dark' },
		{ value: 'boxy-light', name: 'Boxy Light' },
		{ value: 'gruvbox-dark', name: 'Gruvbox Dark' }
	];

	$: theme = $utterancesTheme;
</script>

<div class="max-w-3xl mx-auto pt-8">
	<div class="container">
		<slot />

		<div class="my-16 relative">
			<p class="dark:text-white">Current theme is: {theme}</p>
			<Select
				class="mt-2"
				items={options}
				bind:value={theme}
				on:change={() => utterancesTheme.update((n) => (n = theme))}
			/>

			<Utterances reponame="shinokada/svelte-utterances" {theme} />
		</div>
	</div>
</div>
