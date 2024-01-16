<script lang="ts">
	// TODO: Add Validation in functions.

	import Button from '@smui/button';
	import Dialog from './Dialoge.svelte';

	let open = false;

	import * as config from '$lib/config';
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';
	import Modal from './Modal.svelte';

	// Create a writable store to hold the posts data
	const postsStore = writable([]);
	export let data;
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
</script>

<main>
	<h1 class="text-7xl font-bold my-4 text-white text-center">Produtos</h1>

	

	<!-- Display products -->
	<div class="max-w-7xl mx-auto py-8 px-4 sm:px-6">
		<div class="max-w-md">
			<form on:submit|preventDefault={addProduct} class="block">
				<!-- Add form fields for new product -->
				<input bind:value={newNome} placeholder="Product Name" />
				<input bind:value={newPreco} placeholder="Product Price" />
				<input bind:value={newDesc} placeholder="Product Description" />
				<input bind:value={newImagemUrl} placeholder="Image URL" />

				<button type="submit" class="text-white bg-green-500 p-2 rounded-md hover:bg-green-600"
					>Add Product</button
				>
			</form>
		</div>
		<!-- Add form for adding new product -->
		{#if data.posts.length > 0}
			{#each data.posts as product (product.id)}
				<div class="bg-white border border-gray-200 rounded-lg shadow-md p-4 mb-4 w-72 h-80">
					<strong class="text-center text-2xl text-gray-800">{product.nome}</strong>
					<p class="text-base text-gray-600 p-10">{product.desc}</p>
					<p class="mt-4 rounded-lg text-center">{product.imagem_url}</p>
					<a href="products/{product.id}">{product.slug}</a>
				</div>
				<button
					class="text-white bg-blue-500 p-2 rounded-md hover:bg-blue-600"
					on:click={() => (showModal = product)}>Update</button
				>

				<!-- Update form for product -->
				<a href="products/{product.id}">EDITAR ITEM</a>

				<form on:submit|preventDefault={() => updateProduct(product.id)}>
					<!-- Update form fields -->
					<div class="mb-2">
						<label for="update-nome" class="block text-sm font-medium text-gray-100">Nome</label>
						<input
							type="text"
							id="update-nome"
							name="update-nome"
							class="mt-1 p-2 border rounded-md"
							bind:value={updateNome}
						/>
					</div>
					<div class="mb-2">
						<label for="update-nome" class="block text-sm font-medium text-gray-100">Preço</label>
						<input
							type="text"
							id="update-nome"
							name="update-nome"
							class="mt-1 p-2 border rounded-md"
							bind:value={updatePreco}
						/>
					</div>
					<div class="mb-2">
						<label for="update-desc" class="block text-sm font-medium text-gray-100"
							>Descrição</label
						>
						<textarea
							id="update-desc"
							name="update-desc"
							rows="3"
							class="mt-1 p-2 border rounded-md"
							bind:value={updateDesc}
						/>
					</div>
					<div class="mb-2">
						<label for="update-imagem-url" class="block text-sm font-medium text-gray-100"
							>URL da Imagem</label
						>
						<input
							type="text"
							id="update-imagem-url"
							name="update-imagem-url"
							class="mt-1 p-2 border rounded-md"
							bind:value={updateImagemUrl}
						/>
					</div>
					<button type="submit" class="text-white bg-blue-500 p-2 rounded-md hover:bg-blue-600"
						>Update</button
					>
				</form>

				<!-- Button to delete product -->
				<button
					class="text-white bg-red-500 p-2 rounded-md hover:bg-red-600"
					on:click|preventDefault={() => deleteProduct(product.id)}>Delete</button
				>
				<div />
			{/each}
		{:else}
			<p class="text-3xl text-gray-100">Carregando...</p>
		{/if}
	</div>
</main>

<!-- <style>
	* {
		border: red dashed;
	}
</style> -->
