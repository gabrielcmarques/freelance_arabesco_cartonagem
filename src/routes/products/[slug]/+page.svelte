<script lang="ts">
	export let data;
	import { goto } from '$app/navigation';
	/** @type {import('./$types').PageData} */
	import Button from '@smui/button';
	import Card, { Content } from '@smui/card';
	import Textfield from '@smui/textfield';
	import CharacterCounter from '@smui/textfield/character-counter';
	import HelperText from '@smui/textfield/helper-text';
	let valueNome = data.post.nome;
	let valuePreco = data.post.preco;
	let valueDesc = data.post.desc;
	let valueImagemUrl = data.post.imagem_url;

	console.log(data);

	const dataSlug = JSON.parse(data.postSlug.slug);

	console.log(dataSlug);

	async function editPost() {
		console.log(dataSlug, valueNome, valuePreco, valueDesc, valueImagemUrl);
		const res = await fetch(`http://localhost:8800/produtos/${dataSlug}/`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				nome: valueNome,
				preco: valuePreco,
				desc: valueDesc,
				imagem_url: valueImagemUrl
			})
		}).then((res) => {
			res.json();
			goto('/products');
		});
	}
</script>

<div class="card-display">
	<div class="card-container">
		<Card padded>
			<Textfield variant="outlined" bind:value={valueNome} label="Edit Nome">
				<HelperText>Helper Text</HelperText>
			</Textfield>
			<br />

			<Textfield textarea input$maxlength={2500} bind:value={valueDesc} label="Edit Desc">
				<CharacterCounter>0 / 100</CharacterCounter>
			</Textfield>
			<br />
			<Textfield textarea input$maxlength={2500} bind:value={valuePreco} label="Edit Preco" />
			<br />
			<Textfield textarea input$maxlength={2500} bind:value={valueImagemUrl} label="Edit Imagem" />
			<br />
			<Button on:click={editPost}>Edit</Button>
		</Card>
	</div>
</div>

<!-- <script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;

	console.log(data.post);
</script>

<main>
	<section class="mb-32 my-16 text-white">
		<h1 class="text-7xl font-bold my-4 text-white text-center">Produto: {data.post.nome}</h1>
		<p class=" text-gray-100 text-center text-2xl">{data.post.nome}</p>
		<p class=" text-gray-100 text-center text-2xl">{data.post.desc}</p>
		<p class=" text-gray-100 text-center text-2xl">{data.post.imagem_url}</p>
		<p class=" text-gray-100 text-center text-2xl">{data.post.preco}</p>
		<p class=" text-gray-100 text-center text-2xl">{data.post.slug}</p>
	</section>
</main> -->
