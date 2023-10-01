<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import Particles from 'svelte-particles';
	import { loadSlim } from 'tsparticles-slim';
	import { browser } from '$app/environment';

	const theme = browser ? localStorage.getItem('color-theme') : 'dark';
	const PARTICLE_NODE_COLOR = theme === 'dark' ? '#e2dff6' : '#0c0920';
	const PARTICLE_LINE_COLOR = theme === 'dark' ? '#6a5cd1' : '#3c2ea3';

	const config: any = {
		particles: {
			number: {
				value: 50,
				density: {
					enable: true,
					value_area: 800
				}
			},
			color: {
				value: PARTICLE_NODE_COLOR
			},
			opacity: {
				value: 0.4,
				random: true
			},
			size: {
				value: 2,
				random: true
			},
			line_linked: {
				enable: true,
				distance: 126,
				color: PARTICLE_LINE_COLOR,
				opacity: 0.37,
				width: 1.57
			},
			move: {
				enable: true,
				speed: 0.8,
				direction: 'none',
				random: false,
				straight: false,
				out_mode: 'out',
				bounce: false
			}
		},
		interactivity: {
			detect_on: 'window',
			events: {
				onclick: {
					enable: true,
					mode: 'push'
				}
			},
			modes: {
				push: {
					particles_nb: 4
				}
			}
		}
	};

	let particlesLoaded = false;
	const particlesInit = async (engine: any) => await loadSlim(engine);
	const particlesLoadedEvent = () => (particlesLoaded = true);
</script>

<Navbar />

<Particles
	id="tsparticles"
	class="{particlesLoaded ? 'opacity-60' : 'opacity-0'} -z-10 absolute transition duration-[3000ms]"
	options={config}
	on:particlesLoaded={particlesLoadedEvent}
	{particlesInit}
/>

<div class="min-h-screen pt-8 md:pt-16 3xl:pt-20">
	<slot />
</div>

<Footer />

<style lang="postcss">
	:global(html) {
		color: theme(colors.text.default);
		background-color: theme(colors.background.default);
	}
</style>
