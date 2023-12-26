<script lang="ts">
	export let form;
</script>

<h1>Welcome to Consulting Ninja</h1>
<h2>Upload Files</h2>

{#if form?.error}
	<h2>Failed to upload / wrong format.</h2>
{/if}
{#if form?.success}
	<h2>File uploaded successfully!</h2>
{/if}

<div class="form">
	<form method="post" action="?/upload">
		<label for="file-upload"> Select a file:</label>
		<input type="file" id="file-upload" name="file-upload" />
		<button type="submit"> !! Upload !!</button>
	</form>
</div>
