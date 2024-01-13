import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],

	kit: {
		adapter: adapter(),
		files: {
			serviceWorker: 'src/service-worker.js'
		},
		
	}
};

config.paths = { base: process.argv.includes('dev') ? '' : process.env.BASE_PATH };

export default config;
