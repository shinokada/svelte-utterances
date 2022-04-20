import { writable } from 'svelte/store';
import { browser } from '$app/env';

/** @type {string} */
const LS = browser && localStorage.getItem('theme');

/** @type {import('svelte/types/runtime/store').Writable<string>}*/
export const theme = writable(LS); // null | github-light | github-dark

theme.subscribe((value /** @type {string} */) => {
	if (browser) {
		localStorage.setItem('theme', value);
		theme.set(value);
	}
});
