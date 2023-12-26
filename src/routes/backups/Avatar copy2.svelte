<!-- src/routes/account/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import Avatar from '../criar/Avatar.svelte';

	export let data;
	export let form;

	let { session, supabase, profile } = data;
	$: ({ session, supabase, profile } = data);

	let profileForm: HTMLFormElement;
	let loading = false;
	let nome: string = profile?.nome ?? '';
	let preco: string = profile?.preco ?? '';
	let descricao: string = profile?.descricao ?? '';
	let imagem_url: string = profile?.imagem_url ?? '';

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		return async () => {
			loading = false;
		};
	};

	const handleSignOut: SubmitFunction = () => {
		loading = true;
		return async ({ create }) => {
			loading = false;
			create();
		};
	};
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

		<div>
			<input
				type="submit"
				class="button block primary"
				value={loading ? 'Loading...' : 'Create'}
				disabled={loading}
				on:click={() => {
					profileForm.submit();
				}}
			/>
		</div>
		<Avatar
			{supabase}
			bind:url={imagem_url}
			size={10}
			on:upload={() => {
				profileForm.requestSubmit();
			}}
		/>
	</form>
</div>
