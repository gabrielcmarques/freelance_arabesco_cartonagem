import * as config from '$lib/config';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	// console.log(params);
	try {
		const response = await fetch(`${config.url}/produtos/${params.slug}`);
		// console.log(response);

		// if (!response.ok) {
		// 	throw error(response.status, `Could not find ${params.slug}`);
		// }

		const post = await response.json();
		const postSlug = params
		console.log(post , postSlug);
		// const response = await fetch('http://localhost:8800/produtos');

		return { post, postSlug };
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}
