<script lang="ts">
	// TODO: Add Validation in functions.

	import * as config from '$lib/config';
	import Button from '@smui/button';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';
	import Dialog from './Dialoge.svelte';
	import Modal from './Modal.svelte';
	import Table from './Table.svelte';

	// Create a writable store to hold the posts data
	const postsStore = writable([]);
	export let data;
	let open = false;
	let items: Post[] = [];
	let loaded = false;
	// console.log(data.posts);

	// Store to manage product data
	let products = writable([]);
	let showModal = null;

	// Variables to hold Added values for the product
	let newNome = '';
	let newPreco = '';
	let newDesc = '';
	let newImagemUrl = '';

	// Variables to hold Updated values for the product
	let updateNome = '';
	let updateDesc = '';
	let updatePreco = '';
	let updateImagemUrl = '';

	const addProduct = async () => {
		// Perform form validation if needed
		const response = await fetch('http://localhost:8800/produtos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				nome: newNome,
				preco: newPreco,
				desc: newDesc,
				imagem_url: newImagemUrl
			})
		});

		if (response.ok) {
			// Product added successfully, fetch updated products
			await fetchProducts();
			// Clear form fields after successful addition
			const errorMessage = await response.text();
			console.error(`Error adding product: ${errorMessage}`);
		} else {
			const errorMessage = await response.text();
			console.error(`Error adding product: ${errorMessage}`);
			// Display an error message to the user or handle it appropriately
			// Example: setErrorState(`Error adding product: ${errorMessage}`);
		}
	};

	const updateProduct = async (id) => {
		// Perform form validation if needed

		const response = await fetch(`http://localhost:8800/produtos/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				nome: updateNome,
				desc: updateDesc,
				imagem_url: updateImagemUrl
			})
		});

		if (response.ok) {
			// Product updated successfully, fetch updated products
			await fetchProducts();
			const errorMessage = await response.text();
			console.error(`Error adding product: ${errorMessage}`);
		} else {
			console.log('ERRO AO ATUALIZAR');
			const errorMessage = await response.text();
			console.error(`Error adding product: ${errorMessage}`);
			// Handle error, e.g., display an error message
		}
	};

	export const deleteProduct = async (id: string) => {
		const shouldDelete = window.confirm(`Are you sure you want to delete item ${id}?`);
		if (shouldDelete) {
			const response = await fetch(`http://localhost:8800/produtos/${id}`, {
				method: 'DELETE'
			});

			if (response.ok) {
				const updatedProducts = await fetchProducts();
				products.set(updatedProducts);
			} else {
				throw new Error(`Error deleting product: ${await response.text()}`);
			}
		}
	};

	onMount(() => loadThings(false));

	function loadThings(wait: boolean) {
		if (typeof fetch !== 'undefined') {
			loaded = false;

			fetch('http://localhost:8800/produtos')
				.then((response) => response.json())
				.then((json) =>
					setTimeout(
						() => {
							items = json;
							loaded = true;
						},
						// Simulate a long load time.
						wait ? 2000 : 0
					)
				);
		}
	}
</script>

<main>
	<h1 class="text-7xl font-bold my-4 text-white text-center">Produtos</h1>

	<div style="display:flex; justify-content:space-between">
		<Button on:click={() => (open = true)}>Add New</Button>
	</div>

	<Table {items} {loaded} />

	<Dialog {open} />
</main>

<!-- <style>
	* {
		border: red dashed;
	}
</style> -->
