<script lang="ts">
	import { PUBLIC_SUPABASE_URL } from '$env/static/public';
	export let data: any;
	// console.log('data', data.props.produtos);
</script>

<section>
	<div
		class="grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3 gap-1 p-1 max-w-7xl place-items-center w-full m-0 mx-auto"
	>
		{#each data.props.produtos as prod}
			<a href="/items/{prod.name}">
				URL: {prod.name}
				<img
					class="hover:opacity-75"
					src={`${PUBLIC_SUPABASE_URL}/storage/v1/object/public/imagens/produtos/${prod.name}`}
					alt={`Image of ${prod.name}`}
				/></a
			>
		{/each}
	</div>
</section>
