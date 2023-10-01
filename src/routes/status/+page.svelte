<script lang="ts">
	import HealthBanner from '$lib/status/HealthBanner.svelte';
	import Shard from '$lib/status/Shard.svelte';
	export let data;
</script>

<div class="flex justify-center w-full pb-8 md:pb-16 3xl:pb-20">
	<div class="w-[90%] md:w-[60%]">
		{#if data.health}
			<div class="w-full flex-col items-center">
				<HealthBanner
					online={data.health.online}
					totalShards={data.health.totalShards}
					shardsOnline={data.health.shardsOnline}
				/>
				<div
					class="rounded-md mt-2 md:mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-8 gap-2 md:gap-3"
				>
					{#each data.health.shards as shard}
						<Shard {shard} />
					{/each}
				</div>
			</div>
		{:else}
			<HealthBanner online={false} />
		{/if}
	</div>
</div>
