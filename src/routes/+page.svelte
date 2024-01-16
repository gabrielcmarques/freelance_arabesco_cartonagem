<script lang="ts">
	// import type { PageData } from './$types';
	import Contato from './Contato.svelte';
	import Header from './Header.svelte';
	import Produtos from './Produtos.svelte';
	import Sobre from './Sobre.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Miriam Cartonagem e Bijuteria" />
</svelte:head>

<div>
	<Header />
	<Contato />
	<Produtos />
	<Sobre />
</div>
