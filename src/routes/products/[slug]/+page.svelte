<script lang="ts">
	//TODO: import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';
	export let data;
	import { goto } from '$app/navigation';
	/** @type {import('./$types').PageData} */

	let valueNome = data.post.nome;
	let valuePreco = data.post.preco;
	let valueDesc = data.post.desc;

	// console.log(data);

	const dataSlug = JSON.parse(data.postSlug.slug);

	// console.log(dataSlug);

	async function editPost() {
		console.log(dataSlug, valueNome, valuePreco, valueDesc);
		const res = await fetch(`${config.url}/produtos/${dataSlug}/`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				nome: valueNome,
				preco: valuePreco,
				desc: valueDesc
			})
		}).then((res) => {
			res.json();
			goto('/products');
		});
	}
</script>

<div class="h-screen card-display">
	<div class="card-container flex justify-center item-center p-48">
		<div class="p-4 border rounded-lg shadow-md">
			<!-- Edit Nome -->
			<label class="block text-lg font-medium text-gray-200">Edit Nome</label>
			<input type="text" class="mt-1 p-3 border rounded-md w-full" bind:value={valueNome} />

			<!-- Edit Desc -->
			<label class="block text-lg font-medium text-gray-200 mt-4">Edit Desc</label>
			<textarea class="mt-1 p-3 border rounded-md w-full" bind:value={valueDesc} maxlength="2500" />

			<!-- Edit Preco -->
			<label class="block text-lg font-medium text-gray-200 mt-4">Edit Preco</label>
			<textarea
				class="mt-1 p-3 border rounded-md w-full"
				bind:value={valuePreco}
				maxlength="2500"
			/>

			<!-- Edit Imagem -->
			<!-- <label class="block text-lg font-medium text-gray-200 mt-4">Edit Imagem</label>
			<textarea
				class="mt-1 p-3 border rounded-md w-full"
				bind:value={valueImagemUrl}
				maxlength="2500"
			/> -->

			<button
				class="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full"
				on:click={editPost}
			>
				Edit
			</button>
		</div>
	</div>
</div>
