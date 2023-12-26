<!-- src/routes/account/Avatar.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SupabaseClient } from '@supabase/supabase-js';
	import { createEventDispatcher } from 'svelte';

	export let size = 10;
	export let url: string;
	export let supabase: SupabaseClient;

	let imagem_url: string | null = null;
	let uploading = false;
	let files: FileList;

	const dispatch = createEventDispatcher();

	const downloadImage = async (path: string) => {
		try {
			const { data, error } = await supabase.storage.from('imagens/produtos').download(path);

			console.log('data @20', data);

			if (error) {
				throw error;
				console.log(error);
			}

			const url = URL.createObjectURL(data);
			console.log('url criada: ', url);
			imagem_url = url;
		} catch (error) {
			if (error instanceof Error) {
				console.log('Error downloading image: ', error.message);
			}
		}
	};

	const uploadAvatar = async () => {
		// try {
		// if (!files || files.length === 0) {
		// 	throw new Error('You must select an image to upload.');
		// 	console.log('erro linha 40');
		// }

		const file = files[0];
		const fileExt = file.name.split('.').pop();
		const filePath = `${Math.random()}.${fileExt}`;
		console.log('files\n:', filePath, file);

		const { error } = await supabase.storage.from('imagens/produtos').upload(filePath, file);

		if (error) {
			throw error;
			console.log('error uploading:\n', error);
		}

		url = filePath;
		setTimeout(() => {
			dispatch('upload');
		}, 100);
		console.log('url @59', url);
		// } catch (error) {
		// 	if (error instanceof Error) {
		// 		alert(error.message);
		// 		console.log('error uploading: @63 \n', error);
		// 	}
		// } finally {
		// 	uploading = false;
		// }
	};

	$: if (url) downloadImage(url);
</script>

<div>
	{#if imagem_url}
		<img
			src={imagem_url}
			alt={imagem_url ? 'Avatar' : 'No image'}
			class="avatar image"
			style="height: {size}em; width: {size}em;"
		/>
	{:else}
		<div class="avatar no-image" style="height: {size}em; width: {size}em;" />
	{/if}
	<input type="hidden" name="imagem_url" value={url} />

	<div style="width: {size}em;">
		<label class="button primary block" for="single">
			{uploading ? 'Uploading ...' : 'Upload'}
		</label>
		<input
			type="file"
			id="single"
			accept="image/*"
			bind:files
			on:change={uploadAvatar}
			disabled={uploading}
		/>
	</div>
</div>
