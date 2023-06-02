<svelte:options tag="my-main-page"></svelte:options>
<script lang="ts">
	import Folder from './folder.svelte';
    import AddFileFolder from './AddFileFolder.svelte';
	import { componentList } from "../stores/ComponentList.js";
</script>
<AddFileFolder/>
<Folder name="Root"  files={$componentList} expanded/>
