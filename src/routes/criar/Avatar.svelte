<!-- src/routes/account/Avatar.svelte
<script lang="ts">
	import { enhance } from '$app/forms';
	import { createEventDispatcher } from 'svelte';

	export let size = 10;
	export let url: string;


	let imagemUrl: string | null = null;
	let uploading = false;
	let files: FileList;

	const dispatch = createEventDispatcher();

	const downloadImage = async (path: string) => {
		try {
			const { data, error } = await supabase.storage.from('imagens/produtos').download(path);

			console.log('data @20', data);

			if (error) {
				throw error;
				console.log('@@@ERRO Avatar.svelte @25\n\n', error);
			}

			const url = URL.createObjectURL(data);
			console.log('@@@url criada @29 Avatar.svelte: ', url);
			imagemUrl = url;
		} catch (error) {
			if (error instanceof Error) {
				console.log('@@@Error downloading image: ', error.message);
			}
		}
		dispatch('upload');
	};

	const uploadAvatar = async () => {
		// console.log('@@@@@@@@@@@@@@@@@@@@@@aqui!!!\n\n');
		try {
			uploading = true;

			if (!files || files.length === 0) {
				throw new Error('You must select an image to upload.');
			}

			const file = files[0];
			const fileExt = file.name.split('.').pop();
			const filePath = `${Math.random()}.${fileExt}`;
			console.log('@@@ files @51 Avatar.svelte: \n:', filePath, file);

			const { error } = await supabase.storage.from('imagens/produtos').upload(filePath, file);

			if (error) {
				throw error;
				console.log('@@@57 Avatar.svelte ERRO:', error);
			}

			url = filePath;
			setTimeout(() => {
				dispatch('upload');
			}, 100);
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			uploading = false;
		}
	};

	$: if (url) downloadImage(url);
</script>

<div>
	{#if imagemUrl}
		<img
			src={imagemUrl}
			alt={imagemUrl ? 'Avatar' : 'No image'}
			class="avatar image"
			style="height: {size}em; width: {size}em;"
		/>
	{:else}
		<div class="avatar no-image" style="height: {size}em; width: {size}em;" />
	{/if}
</div> -->
