<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Navbar />

<div class="min-h-screen pt-32">
	<slot />
</div>

<Footer />

<style lang="postcss">
	:global(html) {
		color: theme(colors.text.default);
		background-color: theme(colors.background.default);
	}
</style>
