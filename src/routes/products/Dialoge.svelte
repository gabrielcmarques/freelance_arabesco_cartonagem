<script lang="ts">
	// @ts-nocheck
	import Button from '@smui/button';
	import Card from '@smui/card';
	import Dialog, { Actions, Content, Title } from '@smui/dialog';
	import Textfield from '@smui/textfield';
	import CharacterCounter from '@smui/textfield/character-counter';
	import HelperText from '@smui/textfield/helper-text';

	let nome = '';
	let preco = '';
	let desc = '';
	let imagem_url = '';

	export let open = false;

	async function createPost() {
		const res = await fetch(`http://localhost:8800/produtos`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				nome,
				preco,
				desc,
				imagem_url
			})
		}).then((res) => {
			res.json();
			open = false;
		});
	}
</script>

<Dialog bind:open selection aria-labelledby="list-title" aria-describedby="list-content">
	<Title id="list-title">Create New Post</Title>
	<Content id="mandatory-content">
		<Card padded>
			<Textfield variant="outlined" bind:value={nome} label="Title">
				<HelperText slot="Title">Helper Text</HelperText>
			</Textfield>
			<br />
			<Textfield textarea input$maxlength={2500} bind:value={preco} label="Content">
				<CharacterCounter slot="internalCounter">0 / 100</CharacterCounter>
			</Textfield>
			<br />
			<Textfield textarea input$maxlength={2500} bind:value={desc} label="Content">
				<CharacterCounter slot="internalCounter">0 / 100</CharacterCounter>
			</Textfield>
			<br />
			<Textfield textarea input$maxlength={2500} bind:value={imagem_url} label="Content">
				<CharacterCounter slot="internalCounter">0 / 100</CharacterCounter>
			</Textfield>
			<br />
			<Button on:click={createPost}>Create</Button>
		</Card>
	</Content>
	<Actions>
		<Button action="accept">Close</Button>
	</Actions>
</Dialog>
