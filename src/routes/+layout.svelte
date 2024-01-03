<script lang="ts">
	import { invalidate } from '$app/navigation';
	import shape_texture from '$lib/assets/texture.webp';
	import { onMount } from 'svelte';

	import '../app.postcss';
	import type { LayoutData } from './$types';
	import CookiesBtn from './CookiesBtn.svelte';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import Navbar from './Navbar.svelte';

	// import { fade } from 'svelte/transition';
</script>

<div class="app">
	<main >
		
		<CookiesBtn />
		<Navbar />
		<slot />
		<Footer />
	</main>
</div>
