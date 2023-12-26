<!-- src/routes/account/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { createEventDispatcher } from 'svelte';
	// import Avatar from './Avatar.svelte';

	export let url: string;
	export let files: FileList;
	export let data;
	export let form;

	const dispatch = createEventDispatcher();

	// console.log('@@@ PROFILE: \n', profile);

	let profileForm: HTMLFormElement;
	let loading = false;
	let nome: string = profile?.nome ?? '';
	let preco: string = profile?.preco ?? '';
	let descricao: string = profile?.descricao ?? '';
	let imagem_url: string = profile?.imagem_url ?? '';
	// console.log('@@@22 DADOS:\n ', imagem_url, nome, preco, descricao);

	const handleSubmit: SubmitFunction = async () => {
		loading = true;
		console.log('@@@@@@HERE!!');
		await uploadAvatar();

		return async () => {
			loading = false;
		};
	};

	const uploadAvatar = async () => {
		// console.log('@@@@@@@@@@@@@@@@@@@@@@aqui!!!\n\n');
		// try {
		// uploading = true;

		// if (!files || files.length === 0) {
		// 	throw new Error('You must select an image to upload.');
		// }

		const file = files[0];

		const fileExt = file.name.split('.').pop();
		const filePath = `${Math.random()}.${fileExt}`;
		console.log('@@@FILES: \n', file);

		url = filePath;
		setTimeout(() => {
			dispatch('create');
		}, 100);

		return file;

		// } catch (error) {
		// 	if (error instanceof Error) {
		// 		alert(error.message);
		// 	}
		// } finally {
		// 	uploading = false;
		// }
	};

	// const handleSignOut: SubmitFunction = () => {
	// 	loading = true;
	// 	return async ({ create }) => {
	// 		loading = false;
	// 		update();
	// 	};
	// };
</script>

<div class="form-widget max-w-md mx-auto p-4 bg-white rounded-lg shadow-md text-black">
	<form
		class="space-y-4"
		method="post"
		action="?/create"
		use:enhance={handleSubmit}
		bind:this={profileForm}
	>
		<div>
			<label for="nome" class="block text-sm font-medium text-gray-600">Name</label>
			<input
				id="nome"
				name="nome"
				type="text"
				value={form?.nome ?? nome}
				class="mt-1 p-2 w-full border rounded-md"
			/>
		</div>
		<div>
			<label for="preco">Preço</label>
			<input
				id="preco"
				name="preco"
				type="text"
				value={form?.preco ?? preco}
				class="mt-1 p-2 w-full border rounded-md"
			/>
		</div>
		<div>
			<label for="descricao" class="block text-sm font-medium text-gray-600">Descrição</label>
			<textarea
				id="descricao"
				name="descricao"
				rows="4"
				value={form?.descricao ?? descricao}
				class="mt-1 p-2 w-full border rounded-md"
			/>
		</div>

		<div class="form">
			<input hidden name="imagemUrl" value={url} />
			<label for="imagemUrl"> Select a file:</label>
			<input
				type="file"
				id="imagemUrlFile"
				name="imagemUrlFile"
				bind:files
				on:change={uploadAvatar}
			/>
		</div>

		<div>
			<button
				type="submit"
				class="button block primary"
				value={loading ? 'Loading...' : '!!! Create !!!'}
				disabled={loading}>ENVIAR</button
			>
		</div>
	</form>
</div>
