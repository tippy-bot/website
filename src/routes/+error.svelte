<script>
	import { page } from '$app/stores';
	import NotFound from '$lib/NotFound.svelte';
</script>

{#if $page.status === 404}
    <NotFound />
{:else}
	<h1>{$page.status}: {$page.error?.message}</h1>
{/if}
