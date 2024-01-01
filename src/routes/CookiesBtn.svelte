<script lang="ts">
	import { onMount } from 'svelte';

	// Function to set a cookie with a given name, value, and expiration time in days
	const setCookie = (name: string, value: string, days: number) => {
		const expires = new Date();
		expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
		document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/; SameSite=None; Secure`;
	};

	const acceptCookies = () => {
		setCookie('cookie_consent', 'true', 365);

		document.getElementById('cookieBanner').style.display = 'none';
	};

	onMount(() => {
		// Check if the 'cookie_consent' cookie is present
		const cookieConsent = document.cookie
			.split(';')
			.some((item) => item.trim().startsWith('cookie_consent='));

		// If the cookie is not present, display the cookie banner
		if (!cookieConsent) {
			document.getElementById('cookieBanner').style.display = 'block';
		}
	});
</script>

<div id="cookieBanner" class="container px-20 fixed z-10 bottom-0 right-0" style="display: none;">
	<div style="background-color: rgb(255, 255, 255)">
		<div class="w-72 bg-white rounded-lg shadow-md p-6" style="cursor: auto;">
			<div class="w-16 mx-auto relative -mt-10 mb-3">
				<img
					class="mt-10"
					src="https://www.svgrepo.com/show/30963/cookie.svg"
					alt="Cookie Icon SVG"
				/>
			</div>
			<span class="w-full sm:w-48 block leading-normal text-gray-800 text-md mb-3"
				>Esse site utiliza cookies para melhorar sua experiência.</span
			>
			<div class="flex items-center justify-between">
				<a class="text-xs text-gray-400 mr-1 hover:text-gray-800" href="/politica-de-privacidade"
					>Leia mais</a
				>
				<div class="w-1/2">
					<button
						type="button"
						on:click={acceptCookies}
						class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
					>
						Aceitar
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		margin-top: 10rem;
		max-width: 20%;
	}
</style>
