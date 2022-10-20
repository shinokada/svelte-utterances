import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultValue = 'github-light';
const initialValue = browser ? window.localStorage.getItem('utterancesTheme') ?? defaultValue : defaultValue;

const utterancesTheme = writable<string>(initialValue);

utterancesTheme.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('utterancesTheme', value);
  }
});

export default utterancesTheme;