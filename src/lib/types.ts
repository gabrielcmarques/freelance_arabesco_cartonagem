export type Categories = 'sveltekit' | 'svelte';

export type Post = {
	nome: string;
	preco: string;
	descriaco: string;
	date: Date;
	categories: Categories[];
	published: boolean;
};
