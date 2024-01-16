<script lang="ts">
	import Button from '@smui/button';
	import DataTable, { Body, Cell, Head, Row } from '@smui/data-table';
	import LinearProgress from '@smui/linear-progress';

	export let items: any[] = [];
	export let loaded = false;

	async function deletePost(id: number) {
		const shouldDelete = window.confirm('Are you sure you want to delete this post?');
		if (shouldDelete) {
			const res = await fetch(`http://localhost:8800/produtos/${id}`, {
				method: 'DELETE'
			}).then((res) => {
				res.json();
				location.reload();
			});
		}
	}
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
				<Cell><img width="100" src="https://i.imgur.com/IAt1QKp.jpeg" alt="" /></Cell>
				<Cell>{item.createdAt}</Cell>
				<Cell>
					<a href={`/products/${item.id}`}>Edit</a>

					<Button on:click={() => deletePost(item.id)}>Delete</Button>
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
