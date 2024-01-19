<script lang="ts">
	// @ts-nocheck
	import * as config from '$lib/config';
	import Card from '@smui/card';
	import Dialog, { Actions, Content, Title } from '@smui/dialog';

	let nome = '';
	let preco = '';
	let desc = '';
	let imagem_url2 = '';

	export let open = false;

	async function createPost() {
		const formData = new FormData();
		formData.append('nome', nome);
		formData.append('preco', preco);
		formData.append('desc', desc);
		formData.append(
			'imagem_url2',
			(document.getElementById('imagem_url2') as HTMLInputElement).files[0]
		);

		const res = await fetch(`${config.url}/produtos`, {
			method: 'POST',
			// headers: {
			// 	'Content-Type': 'application/json'
			// },
			body: formData
		}).then((res) => {
			res.json();
			open = false;
			location.reload();
		});
	}
</script>

<Dialog bind:open selection aria-labelledby="list-title" aria-describedby="list-content">
	<Title id="list-title">Create New Post</Title>
	<Content id="mandatory-content">
		<Card padded>
			<div class="mb-4">
				<label for="nome" class="block text-sm font-medium text-gray-700">Nome</label>
				<input
					type="text"
					id="nome"
					name="nome"
					class="mt-1 p-2 border rounded-md"
					bind:value={nome}
				/>
				<p class="mt-2 text-sm text-gray-500">Helper Text</p>
			</div>

			<div class="mb-4">
				<label for="preco" class="block text-sm font-medium text-gray-700">Preco</label>
				<textarea
					id="preco"
					name="preco"
					rows="3"
					class="mt-1 p-2 border rounded-md"
					bind:value={preco}
				/>
			</div>

			<div class="mb-4">
				<label for="descricao" class="block text-sm font-medium text-gray-700">Descrição</label>
				<textarea
					id="descricao"
					name="descricao"
					rows="3"
					class="mt-1 p-2 border rounded-md"
					bind:value={desc}
				/>
			</div>

			<!-- BELLOW THE FORM I WANT TO CHANGE FOR FILE UPLOAD. -->
			<div class="mb-4">
				<label for="imagem_url2" class="block text-sm font-medium text-gray-700">Imagem_url2</label>
				<input id="imagem_url2" name="imagem_url2" type="file" class="mt-1 p-2 border rounded-md" />
			</div>

			<button
				class="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full"
				on:click={createPost}
			>
				Create Post
			</button>
		</Card>
	</Content>
</Dialog>
