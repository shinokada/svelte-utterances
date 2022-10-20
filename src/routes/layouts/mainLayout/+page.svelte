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
</script>

<p class="dark:text-white">{$utterancesTheme}</p>
<div class="max-w-4xl mx-auto py-4">
	<Navbar let:hidden let:toggle>
		<NavBrand href="/">
			<img
				src="/images/svelte-utterances-logo.png"
				class="mr-3 h-6 sm:h-9"
				alt="Svelte-Utterances"
			/>
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
				Svelte-Utterances
			</span>
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden}>
			<NavLi href="/" active={true}>Home</NavLi>
			<NavLi href="/about">About</NavLi>
			<NavLi href="https://github.com/shinokada/svelte-utterances">GitHub</NavLi>
		</NavUl>
	</Navbar>
</div>
<div class="max-w-3xl mx-auto pt-8">
	<div class="container">
		<slot />

		<div class="my-16 relative">
			<Select class="mt-2" items={options} bind:value={$utterancesTheme} />

			<Utterances reponame="shinokada/svelte-utterances" theme={$utterancesTheme} />
		</div>
	</div>
</div>
