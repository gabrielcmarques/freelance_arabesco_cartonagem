<script lang="ts">
	import * as config from '$lib/config';

	import DataTable, { Body, Cell, Head, Row } from '@smui/data-table';
	import LinearProgress from '@smui/linear-progress';

	export let items: any[] = [];
	export let loaded = false;

	const localServerUrl = 'http://localhost:5173';

	async function deletePost(id: number) {
		const shouldDelete = window.confirm('Are you sure you want to delete this post?');
		if (shouldDelete) {
			const res = await fetch(`${config.url}/produtos/${id}`, {
				method: 'DELETE'
			}).then((res) => {
				res.json();
				location.reload();
			});
		}
	}

	// console.log(items);
</script>

<DataTable table$aria-label="User list" style="width: 100%;">
	<Head>
		<Row>
			<Cell numeric>ID</Cell>
			<Cell>Title</Cell>
			<Cell>Image</Cell>
			<Cell>Date Created</Cell>
			<Cell>Actions</Cell>
		</Row>
	</Head>
	<Body>
		{#each items as item (item.id)}
			<Row>
				<Cell numeric>{item.id}</Cell>
				<Cell>{item.nome}</Cell>
				<Cell>{item.preco}</Cell>
				<Cell>{item.desc}</Cell>
				<!-- <Cell><img width="100" src={`http://localhost:8800${imageResponse.imagem_url}`} alt="" /></Cell> -->

				<!-- Fetch image URL from the server API -->
				{#await fetch(`${config.url}/produtos/${item.id}/imagem`)}
					<LinearProgress indeterminate />
				{:then imageResponse}
					{console.log('Image Response:', imageResponse)}
					<!-- Use the extracted image URL -->
					<Cell
						><img
							width="100"
							src={`${imageResponse ? imageResponse.imagem_url3 : ''}`}
							alt=""
						/></Cell
					>
				{/await}

				<Cell>{item.createdAt}</Cell>
				<Cell>
					<a
						class=" mt-4 bg-blue-500 text-white p-3.5 rounded-md hover:bg-blue-600 w-16 max-w-lg"
						href={`/products/${item.id}`}>Edit</a
					>

					<button
						on:click={() => deletePost(item.id)}
						class="mt-4 bg-red-500 text-white p-3 rounded-md hover:bg-red-600 max-w-lg"
						>Delete</button
					>
				</Cell>
			</Row>
		{/each}
	</Body>

	<LinearProgress
		indeterminate
		bind:closed={loaded}
		aria-label="Data is being loaded..."
		slot="progress"
	/>
</DataTable>
