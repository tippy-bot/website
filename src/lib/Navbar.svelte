<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		DarkMode,
		Button,
		Dropdown,
		DropdownItem
	} from 'flowbite-svelte';
	import { ChevronDownSolid } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
	$: activeUrl = $page.url.pathname;
</script>

<Navbar
	let:hidden
	let:toggle
	color="none"
	class="border-b-accent-800 border-b-[1px]"
	navDivClass="mx-auto flex flex-wrap justify-between items-center px-4 md:px-20"
>
	<NavBrand href="/">
		<img src="/images/tippy-logo.png" class="mr-3 h-6 sm:h-9" alt="Tippy Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold">Tippy</span>
	</NavBrand>
	<div class="flex md:order-2 justify-start">
		<DarkMode />
		{#if activeUrl == '/dashboard'}
			<Button
				class="ml-2 pl-3 hidden md:flex bg-secondary-300 hover:bg-secondary-400 focus:ring-secondary-500 dark:bg-secondary-600 hover:dark:bg-secondary-700 focus:dark:ring-secondary-800"
			>
				<img src="/images/tippy-logo.png" class="mr-2 p-0 h-4 sm:h-6" alt="Tippy Logo" />
				Tippy
				<ChevronDownSolid class="w-3 h-3 ml-2 mt-1 text-white dark:text-white" />
			</Button>
			<Dropdown>
				<DropdownItem href="/signout">Sign out</DropdownItem>
			</Dropdown>
		{:else}
			<Button
				href="/dashboard"
				class="ml-4 hidden md:flex bg-secondary-300 hover:bg-secondary-400 focus:ring-secondary-500 dark:bg-secondary-600 hover:dark:bg-secondary-700 focus:dark:ring-secondary-800"
				>Dashboard</Button
			>
		{/if}
		<NavHamburger on:click={toggle} />
	</div>
	<NavUl
		{activeUrl}
		{hidden}
		activeClass="font-semibold md:bg-transparent text-accent-700 before:content-['•_'] before:font-bold md:before:content-none -translate-x-2.5 md:translate-x-0 dark:text-text-default md:dark:text-white md:dark:bg-transparent md:underline underline-offset-8"
	>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/commands">Commands</NavLi>
		<NavLi href="/docs">Docs</NavLi>
		<NavLi href="/premium">Premium</NavLi>
		<NavLi href="/status">Status</NavLi>
		<NavLi href="https://discord.gg/JfsU5Zk" target="_blank">Support</NavLi>
		{#if activeUrl == '/dashboard'}
			<NavLi
				href="/signout"
				class="bg-secondary-300 dark:bg-secondary-400 !text-background-950 font-semibold md:hidden flex mt-2 justify-between"
			>
				<span class="text-right">Sign out</span>
				<div class="flex">
					Tippy
					<img src="/images/tippy-logo.png" class="ml-2 p-0 h-6 sm:h-6" alt="Tippy Logo" />
				</div>
			</NavLi>
		{:else}
			<NavLi
				href="/dashboard"
				class="bg-secondary-300 dark:bg-secondary-400 !text-background-950 font-semibold md:hidden mt-2"
				>Dashboard</NavLi
			>
		{/if}
	</NavUl>
</Navbar>
