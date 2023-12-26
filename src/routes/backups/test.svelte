<script lang="ts">
	// import { supabase } from '$lib/supabase';
	import { onMount } from 'svelte';
	import { createProduto } from '../../queries/createProduto';
	import type { PageServerLoad } from '../criar/$types';
	import Avatar from '../criar/Avatar.svelte';

	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';

	export let data: any;
	export let form;

	let nome = '';
	let imageFile;

	let { session, supabase, profile } = data;
	$: ({ session, supabase, profile } = data);

	let profileForm: HTMLFormElement;
	let loading = false;
	let fullName: string = profile?.full_name ?? '';
	let username: string = profile?.username ?? '';
	let website: string = profile?.website ?? '';
	let avatarUrl: string = profile?.avatar_url ?? '';

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		return async () => {
			loading = false;
		};
	};

	const handleSignOut: SubmitFunction = () => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			update();
		};
	};

	function updateFunction() {
		// Add logic for the Update button
		alert('Update button clicked');
	}

	function deleteFunction() {
		// Add logic for the Delete button
		alert('Delete button clicked');
	}

	function saveFunction() {
		// Add logic for the Save button
		alert('Save button clicked');
	}
</script>

<svelte:head>
	<!-- Add your head content here -->
</svelte:head>

<body class="bg-gray-100">
	<div class="form-widget">
		<form
			class="form-widget"
			method="post"
			action="?/update"
			use:enhance={handleSubmit}
			bind:this={profileForm}
		>
			<!-- Add to body -->
			<Avatar
				{supabase}
				bind:url={avatarUrl}
				size={10}
				on:upload={() => {
					profileForm.requestSubmit();
				}}
			/>

			<!-- Other form elements -->
		</form>
	</div>

	<div class="card border p-4 w-64 mx-auto my-8 shadow-md">
		{#each data.produtos as prod (prod.id)}
			<img
				class="hover:opacity-75 rounded"
				src={`https://mroqlyiosviuhqulflqq.supabase.co/storage/v1/object/public/imagens/produtos/${prod.name}`}
				alt={`Image of ${prod.name}`}
			/>
			<form class="mt-4">
				<!-- Add your form fields here if needed -->

				<div class="flex justify-between">
					<button
						type="button"
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						on:click={updateFunction}
					>
						Update
					</button>
					<button
						type="button"
						class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
						on:click={deleteFunction}
					>
						Delete
					</button>
					<button
						type="button"
						class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
						on:click={saveFunction}
					>
						Save
					</button>
				</div>
			</form>
		{/each}
	</div>
</body>

<!-- Add your scripts here if needed -->
