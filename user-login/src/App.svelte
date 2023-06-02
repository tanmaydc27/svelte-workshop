<script lang="ts">
  import Login from '../src/Login.svelte'
  import { isAuthenticatedUser } from "../src/UserAuthetication.js";
  $: userState = $isAuthenticatedUser;
</script>

<div>
  {#if userState}
  <div style="width: 100% !important;">
  <my-main-page></my-main-page>
  </div>
  {:else}
  <Login />
  {/if}
</div>


