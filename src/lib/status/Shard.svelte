<script lang="ts">
	import { Indicator } from 'flowbite-svelte';

	type state = 'online' | 'starting' | 'offline';

	interface Shard {
		id: number;
		guildCount: number;
		userCount: number;
		ping: number;
		state: state;
	}

	function stateStyle(state: state): string {
		switch (state) {
			case 'online':
				return 'bg-green-500 dark:bg-green-400';
			case 'offline':
				return 'bg-red-500 dark:bg-red-500';
			case 'starting':
				return 'bg-yellow-400 dark:bg-yellow-300';
			default:
				return 'bg-gray-400 dark:bg-gray-300';
		}
	}

	export let shard: Shard;
</script>

<div class="flex w-full h-32 bg-accent-50 dark:bg-accent-800 rounded-lg p-2 flex-col">
	<span class="flex items-center font-semibold"
		><Indicator size="sm" class="mr-1.5 {stateStyle(shard.state)}" />Shard #{shard.id}</span
	>
	<div class="opacity-60 px-4 pt-0.5">
		<div class="flex justify-between">
			<p>Users:</p>
			<p>{shard.userCount == 0 ? '-' : shard.userCount}</p>
		</div>
		<div class="flex justify-between">
			<p>Servers:</p>
			<p>{shard.guildCount == 0 ? '-' : shard.guildCount}</p>
		</div>
		<div class="flex justify-between">
			<p>Latency:</p>
			<p>{shard.ping == 0 ? '-' : shard.ping}</p>
		</div>
	</div>
</div>
