<script>
	import '../app.postcss';
	import {
		DarkMode,
		Footer,
		FooterCopyright,
		FooterLink,
		FooterLinkGroup,
		Navbar,
		NavBrand,
		NavHamburger,
		NavUl,
		NavLi
	} from 'flowbite-svelte';
	let darkmodebtn =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 fixed right-2 top-4 z-50';
</script>

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
			<NavLi rel="external" href="/dynamic">Dynamic</NavLi>
			<NavLi href="https://github.com/shinokada/svelte-utterances">GitHub</NavLi>
		</NavUl>
	</Navbar>
</div>
<main class="container mx-auto">
	<DarkMode btnClass={darkmodebtn} />
	<slot />
</main>

<Footer>
	<FooterCopyright href="/" by="Svelte-Utterances" year={2022} />
	<FooterLinkGroup
		ulclass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
	>
		<FooterLink href="/">Home</FooterLink>
		<FooterLink href="/dynamic-theme" />
		<FooterLink href="/theme-switch">Theme Switch</FooterLink>
	</FooterLinkGroup>
</Footer>
