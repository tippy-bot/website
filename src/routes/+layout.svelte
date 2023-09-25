<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
</script>

<Navbar />

<slot />

<style lang="postcss">
	:global(html) {
		color: theme(colors.text.default);
		background-color: theme(colors.background.default);
	}
</style>
