<script>
	import { Section, Page404 } from 'flowbite-svelte-blocks';
	import { Button } from 'flowbite-svelte';
</script>

<Section name="page404">
	<Page404 class="mt-24">
		<svelte:fragment slot="h1">404</svelte:fragment>
		<svelte:fragment slot="paragraph">
			<p class="mb-4 text-3xl tracking-tight font-bold text-text-900 md:text-4xl dark:text-white">
				Something's missing.
			</p>
			<p class="mb-4 text-lg font-[350] text-text-700 dark:text-text-300">
				Sorry, we can't find that page. You'll find lots to explore on the home page.
			</p>
			<Button href="/" size="lg" color="alternative" class="mt-2">Go home</Button>
		</svelte:fragment>
	</Page404>
</Section>
