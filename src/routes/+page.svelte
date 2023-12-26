<script lang="ts">
	import type { PageData } from './$types';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import Navbar from './Navbar.svelte';
	import Produtos from './Produtos.svelte';
	export let data: any;

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Miriam Cartonagem e Bijuteria" />
</svelte:head>

<body class=" bg-white">
	<Header />
	<Footer />
	<Produtos {data} />
	<Navbar />
</body>
