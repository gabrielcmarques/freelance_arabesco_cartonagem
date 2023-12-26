import { supabase } from '$lib/supabase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const { data, error } = await supabase.storage.from('imagens').list('produtos');

	if (error) {
		console.error('Error fetching data from Supabase', error);
		return {
			status: 500,
			error: new Error('Internal Server Error')
		};
	}

	return {
		props: {
			produtos: data ?? []
		},
		url: url.origin
	};
};
