import { writable } from 'svelte/store';

export const accountName = writable("");
export const address = writable("");
export const assets = writable([]);
export const testnet = writable(false);
export const installed = writable(false);
export const screen = writable("assets");