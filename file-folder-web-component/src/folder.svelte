<svelte:options tag="my-folder"></svelte:options>

<script lang="ts">
  import File from "./File.svelte";
  export let expanded = false;
  export let name;
  export let files;

  function handleToggle() {
    expanded = !expanded;
  }

</script>

<div>
<div class="hierarchy-list">
  <div class="folder-info">

    <div>
		<button class:expanded class="bt-class" on:click={handleToggle} style="background-image: url(https://hilarious-sable-e12db2.netlify.app/folder.svg)" >{name}</button>   
    </div>
  </div>

  {#if expanded}
    <ul>
      {#each files as file}
        <li>
          {#if file.files}
            <svelte:self {...file} />
          {:else}
            <File {...file} />
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .folder-info {
    display: flex;
  }

  .hierarchy-list li {
    margin: 5px;
    padding: 5px;
  }
  
  ul {
    padding: 0.2em 0 0 0.5em;
    margin: 0 0 0 0.5em;
    list-style: none;
    border-left: 1px solid #eee;
  }

  li {
    padding: 0.2em 0;
  }

  .bt-class {
		padding: 0 0 0 1.5em;
		font-weight: bold;
		cursor: pointer;
		border: none;
		margin: 0;
        background: 0 0.1em no-repeat;
		background-size: 1em 1em;
	}
</style>
</div>
