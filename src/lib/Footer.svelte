<script>
	import {
		Footer,
		FooterCopyright,
		FooterIcon,
		FooterBrand,
		FooterLinkGroup
	} from 'flowbite-svelte';
	import { DiscordSolid } from 'flowbite-svelte-icons';
</script>

<Footer class="rounded-none !bg-background-default border-t-[1px] border-t-accent-800 text-[0.6rem] md:text-xs flex items-center justify-between">
	<FooterLinkGroup class="flex">
		<FooterBrand href="/" src="/images/tippy-logo.png" alt="Tippy Logo" name="Tippy" spanClass="self-center text-base md:text-2xl font-semibold whitespace-nowrap dark:text-white" />
		<FooterCopyright href="/" by="Tippy" spanClass="my-auto pl-3 pt-2 md:pt-4" />
	</FooterLinkGroup>
	<FooterIcon href="/">
		<DiscordSolid
			class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
		/>
	</FooterIcon>
</Footer>
