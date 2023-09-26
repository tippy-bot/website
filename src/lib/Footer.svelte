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

<Footer class="rounded-none !bg-background-default border-t-[1px] border-t-accent-800">
	<FooterLinkGroup class="flex">
		<FooterBrand href="/" src="/images/tippy-logo.png" alt="Tippy Logo" name="Tippy" />
		<FooterCopyright href="/" by="Tippy" spanClass="my-auto pl-3 pt-1" />
	</FooterLinkGroup>
	<FooterIcon href="/">
		<DiscordSolid
			class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
		/>
	</FooterIcon>
</Footer>
