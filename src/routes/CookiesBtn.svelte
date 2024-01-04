<script lang="ts">
	import { cookie_icon } from '$lib';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	// Function to set a cookie with a given name, value, and expiration time in days
	const setCookie = (name: string, value: string, days: number) => {
		const expires = new Date();
		expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
		document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/; SameSite=None; Secure`;
	};

	const acceptCookies = () => {
		setCookie('cookie_consent', 'true', 365);
		showButton.set(false);
	};

	// Store to manage the visibility of the cookie banner
	const showButton = writable(true);

	onMount(() => {
		// Check if the 'cookie_consent' cookie is present
		const cookieConsent = document.cookie
			.split(';')
			.some((item) => item.trim().startsWith('cookie_consent='));

		// Set the visibility based on the presence of the cookie
		showButton.set(!cookieConsent);
	});
</script>

{#if $showButton}
	<div id="cookieBanner" class="fixed z-20 bottom-0 right-0 p-4">
		<div class="bg-white rounded-lg shadow-md p-6 mx-auto flex items-center">
			<div>
				<span class="block leading-normal text-gray-800 text-sm md:text-md lg:text-lg m-auto pr-4">
					Esse site utiliza cookies para melhorar sua experiência.
				</span>
				<div class="flex items-center">
					<a class="text-xs text-gray-800 mr-1 hover:text-gray-400" href="/politica-de-privacidade">
						Leia mais
					</a>
				</div>
			</div>
			<button
				type="button"
				on:click={acceptCookies}
				class="ml-auto py-4 px-5 bg-indigo-700 hover:bg-indigo-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base md:text-lg lg:text-xl font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg flex items-center"
			>
				<img class="mr-2" src={cookie_icon} alt="Cookie Icon SVG" width="20" height="20" />
				Aceitar
			</button>
		</div>
	</div>
{/if}
