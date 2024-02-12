<script lang="ts">
	import { home_banner } from '$lib';
	// import type { PageData } from './$types';
	import Contato from './Contato.svelte';
	import Header from './Header.svelte';
	import Produtos from './Produtos.svelte';
	import Sobre from './Sobre.svelte';
</script>

<svelte:head>
	<title>Cartonagemns e Bijuterias | Home</title>
	<link rel="canonical" href="https://arabescocartonagem.store/" />
	<meta property="og:url" content="https://arabescocartonagem.store/" />
	<meta property="og:type" content="product" />
	<meta property="og:title" content="Cartonagens, Bijuterias e Artesanatos por Miriam de Christo" />
	<meta
		name="Description"
		content="Produtos de Cartonagem, Artesanato e Bijuteria feitos com amor. Faça sua encomenda!"
	/>
	<meta
		name="description"
		content="Produtos de Cartonagem, Artesanato e Bijuteria feitos com amor. Faça sua encomenda!"
	/>
	<meta property="og:image" content={home_banner} />
	<meta property="og:image:width" content={1280} />
	<meta property="og:image:height" content={720} />
	<meta name="twitter:image" content={home_banner} />
	<meta name="twitter:card" content="Miriam Cartonagem e Bijuteria" />

	<meta name="twitter:title" content="Miriam Cartonagem e Bijuteria" />
	<meta
		name="twitter:description"
		content="Produtos de Cartonagem, Artesanato e Bijuteria feitos com amor. Faça sua encomenda!"
	/>
</svelte:head>

<div>
	<Header />
	<Contato />
	<Produtos />
	<Sobre />
</div>
