<script lang="ts">
	// TODO: Add Validation in functions.
	import * as config from '$lib/config';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';
	import Dialog from './Dialoge.svelte';
	import Table from './Table.svelte';

	// Create a writable store to hold the posts data
	const postsStore = writable([]);
	// export let data;
	let open = false;
	let loaded = false;
	let items: Post[] = [];

	onMount(() => loadThings(true));

	function loadThings(wait: boolean) {
		if (typeof fetch !== 'undefined') {
			loaded = false;

			fetch(`${config.url}/produtos`)
				.then((response) => response.json())
				.then((json) =>
					setTimeout(
						() => {
							items = json;
							loaded = true;
						},
						// Simulate a long load time.
						wait ? 500 : 0
					)
				);
		}
	}
	
</script>

<main class="h-screen">
	<h1 class="text-7xl font-bold my-4 text-white text-center">Produtos</h1>

	<div class="flex justify-between text-white">
		<button
			class=" mt-4 bg-green-500 text-white p-3 rounded-md hover:bg-green-600 w-auto"
			on:click={() => (open = true)}>Add New</button
		>
	</div>

	<Table {items} {loaded} />
	<Dialog {open} />
</main>

<!-- <style>
	* {
		border: red dashed;
		inset: 0;
	}
</style> -->
