export type Categories = 'sveltekit' | 'svelte';

export type Post = {
	nome: string;
	preco: string;
	descriaco: string;
	imagem_url: string;
	date: Date;
	categories: Categories[];
	published: boolean;
};
