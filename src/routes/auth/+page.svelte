<script>
	import { Spinner } from 'flowbite-svelte';
	import { signIn } from '@auth/sveltekit/client';
	import { onMount } from 'svelte';

	onMount(() => {
		signIn('discord', { callbackUrl: '/dashboard' });
	});
</script>

<div class="flex flex-col justify-center items-center text-xl">
	<div class="flex justify-center">
		<Spinner class="mr-4" />
		<p class="text-3xl">Logging in...</p>
	</div>
	<div class="mt-3 opacity-40">
		Not automatically redirected? Click <button
			class="font-bold"
			on:click={() => signIn('discord', { callbackUrl: '/dashboard' })}>here</button
		>
	</div>
</div>
