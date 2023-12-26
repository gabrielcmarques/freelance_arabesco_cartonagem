import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	if (!session) {
		throw redirect(303, '/');
	}

	const { data: profile } = await supabase
		.from('produtos')
		.select(`nome, descricao, preco, imagem_url`)
		.eq('id', session?.user.id)
		.single();

	return { session, profile };
};

export const actions = {
	create: async ({ request, locals: { supabase } }) => {
		try {
			const formData = await request.formData();

			const nome = formData.get('nome') as string;
			const preco = formData.get('preco') as string;
			const descricao = formData.get('descricao') as string;
			const imagemUrl = formData.get('imagemUrl') as string;
			// console.log('imagem_url page.server.ts ....\n', imagemUrl);
			// const session = await getSession();

			const file = formData.get('imagemUrlFile') as File;

			if (!nome || !imagemUrl || !preco || !descricao || !file) {
				console.log('Todos os campos devem ser preenchidos para a criação do produto!');
				// console.group(nome, imagemUrl, preco, descricao);
				return fail(400, {
					message: 'Todos os campos devem ser preenchidos para a criação do produto!'
				});
			}

			const { error } = await supabase.from('produtos').upsert({
				nome,
				imagem_url: imagemUrl,
				preco,
				descricao
			});

			supabase.storage.from('imagens/produtos').upload(imagemUrl, file);

			if (error) {
				console.log('Erro durante a criação @44', error);
				return fail(500, {
					nome,
					imagem_url: imagemUrl,
					preco,
					descricao
				});
			}

			return {
				nome,
				imagem_url: imagemUrl,
				preco,
				descricao
			};
		} catch (error) {
			console.error('Error during form data processing:', error);
			return fail(500, {
				message: 'Internal Server Error'
			});
		}
	},

	signout: async ({ locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (session) {
			await supabase.auth.signOut();
			throw redirect(303, '/');
		}
	}
};
