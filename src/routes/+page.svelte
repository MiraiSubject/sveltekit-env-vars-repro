<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  {#each Object.entries(data.env) as key}
	<p>{key[0]}</p>
	<p>{key[1]}</p>
  {/each}
</section>

<section>
  {#each Object.entries(data.pubEnv) as key}
	<p>{key[0]}</p>
	<p>{key[1]}</p>
  {/each}
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }
</style>
