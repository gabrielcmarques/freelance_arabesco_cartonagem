import { postsStore } from './posts.js';
import * as config from '$lib/config'



export async function load({ fetch }) {
	const response = await fetch(`${config.url}/produtos`);
	console.log(response);
	const posts = await response.json();
	postsStore.set(posts);

	return { posts };
}