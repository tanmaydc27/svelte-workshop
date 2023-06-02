<svelte:options tag="my-file"></svelte:options>
<script>
	export let name;
	export let type; 
</script>

<div>
{#if type === 1}
<!--<span style="background-image: url(./../images/file.svg)">{name}</span>-->
<span style="background-image: url(https://hilarious-sable-e12db2.netlify.app/file.svg)">{name}</span>
{:else if type === 2}
<span style="background-image: url(https://hilarious-sable-e12db2.netlify.app/folder.svg)">{name}</span>
{/if}

<style>
	span {
		padding: 0 0 0 1.5em;
		background: 0 0.1em no-repeat;
		background-size: 1em 1em;
	}
</style>
</div>
