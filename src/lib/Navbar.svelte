<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode } from 'flowbite-svelte';
	import { page } from '$app/stores';
	$: activeUrl = $page.url.pathname;
</script>

<Navbar let:hidden let:toggle color="none" class="border-b-accent-800 border-b-[1px]">
	<NavBrand href="/">
		<img src="/images/tippy-logo.png" class="mr-3 h-6 sm:h-9" alt="Tippy Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold">Tippy</span>
	</NavBrand>
	<div class="flex md:order-2 justify-start">
		<DarkMode />
		<NavHamburger on:click={toggle} />
	</div>
	<NavUl {activeUrl} {hidden}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/commands">Commands</NavLi>
		<NavLi href="/docs">Docs</NavLi>
		<NavLi href="/premium">Premium</NavLi>
		<NavLi href="https://discord.gg/JfsU5Zk" target="_blank">Support</NavLi>
	</NavUl>
</Navbar>
