<script lang="ts">
	import { Alert, Button } from 'flowbite-svelte';
	import { InfoCircleSolid } from 'flowbite-svelte-icons';

	export let online: boolean;
	export let totalShards: number | undefined = undefined;
	export let shardsOnline: number | undefined = undefined;

    function shardOnlineStyle(totalShards: number | undefined, shardsOnline: number | undefined): string {
        if (shardsOnline === undefined || totalShards === undefined)
            return "";

        if (shardsOnline < totalShards) {
            return 'text-yellow-400 dark:text-yellow-300';
        } else {
            return 'text-green-500 dark:text-green-400';
        }
    }
</script>

<div class="flex justify-center w-full flex-col">
	{#if online}
		<Alert
			class="w-full text-base text-green-500 bg-accent-50 dark:text-green-400 dark:bg-accent-800 flex justify-between"
		>
			<div class="flex">
				<InfoCircleSolid slot="icon" class="w-4 h-4 my-1 ml-0 mr-3" />
				<span class="font-medium">Tippy is online!</span>
			</div>
            <span class="{shardOnlineStyle(totalShards, shardsOnline)}">{shardsOnline}/{totalShards} shards online!</span>
		</Alert>
	{:else}
		<Alert
			class="w-full text-base text-red-500 bg-accent-50 dark:text-red-500 dark:bg-accent-800 flex justify-between p-0"
		>
			<div class="flex p-4">
				<InfoCircleSolid slot="icon" class="w-4 h-4 my-1 ml-0 mr-3" />
				<span class="font-medium">Tippy is currently offline!</span>
			</div>

			<Button
				class="m-2 bg-accent-400 hover:bg-accent-500 focus:ring-accent-600 dark:bg-primary-600 hover:dark:bg-primary-700 focus:dark:ring-primary-800"
				>Support server</Button
			>
		</Alert>
	{/if}
</div>
