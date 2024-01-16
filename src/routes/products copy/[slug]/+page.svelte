<script lang="ts">
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
</main>
