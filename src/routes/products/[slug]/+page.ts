import * as config from '$lib/config';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const response = await fetch(`${config.url}/produtos/${params.slug}`);
		const post = await response.json();
		const postSlug = params;
		return { post, postSlug };
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}

export const prerender = true;