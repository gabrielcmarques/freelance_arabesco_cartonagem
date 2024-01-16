<script lang="ts">
	// @ts-nocheck
	import * as config from '$lib/config';
	import Card from '@smui/card';
	import Dialog, { Actions, Content, Title } from '@smui/dialog';

	let nome = '';
	let preco = '';
	let desc = '';
	let imagem_url = '';

	export let open = false;

	async function createPost() {
		const res = await fetch(`${config.url}/produtos`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				nome,
				preco,
				desc,
				imagem_url
			})
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
				<label for="title" class="block text-sm font-medium text-gray-700">Title</label>
				<input
					type="text"
					id="title"
					name="title"
					class="mt-1 p-2 border rounded-md"
					bind:value={nome}
				/>
				<p class="mt-2 text-sm text-gray-500">Helper Text</p>
			</div>

			<div class="mb-4">
				<label for="content" class="block text-sm font-medium text-gray-700">Content</label>
				<textarea
					id="content"
					name="content"
					rows="3"
					class="mt-1 p-2 border rounded-md"
					bind:value={preco}
				/>
				<p class="mt-2 text-sm text-gray-500"><span id="internalCounter">0 / 100</span></p>
			</div>

			<div class="mb-4">
				<label for="content" class="block text-sm font-medium text-gray-700">Content</label>
				<textarea
					id="content"
					name="content"
					rows="3"
					class="mt-1 p-2 border rounded-md"
					bind:value={desc}
				/>
				<p class="mt-2 text-sm text-gray-500"><span id="internalCounter">0 / 100</span></p>
			</div>

			<div class="mb-4">
				<label for="content" class="block text-sm font-medium text-gray-700">Content</label>
				<textarea
					id="content"
					name="content"
					rows="3"
					class="mt-1 p-2 border rounded-md"
					bind:value={imagem_url}
				/>
				<p class="mt-2 text-sm text-gray-500"><span id="internalCounter">0 / 100</span></p>
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
