<script lang="ts">
	import '../app.postcss';
	// import type { LayoutData } from './$types';
	import CookiesBtn from './CookiesBtn.svelte';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import Navbar from './Navbar.svelte';
</script>

<div class="app">
	<main>
		<CookiesBtn />
		<!-- <Navbar /> -->
		<slot />
		<Footer />
	</main>
</div>
