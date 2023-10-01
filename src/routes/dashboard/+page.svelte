<script>
	import Guild from '$lib/dashboard/Guild.svelte';
	import { Spinner } from 'flowbite-svelte';

	export let data;
</script>

<div class="flex justify-center w-full pb-8 md:pb-16 3xl:pb-20">
	{#await data.streamed.guilds}
		<div class="flex justify-center">
			<Spinner class="mr-4" />
			<p class="text-3xl">Loading servers...</p>
		</div>
	{:then guilds}
		<div class="w-[90%] md:w-[80%] lg:w-[70%] xl:w[60%] flex-col items-center">
			<div
				class="flex justify-center text-2xl lg:text-4xl mb-10 font-bold text-accent-400 dark:text-accent-300"
			>
				Pick a server to manage
			</div>
			<div
				class="mt-2 md:mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-x-2 md:gap-x-3 gap-y-6 md:gap-y-9"
			>
				{#each guilds as guild}
					<Guild {guild} />
				{/each}
			</div>
		</div>
	{/await}
</div>
