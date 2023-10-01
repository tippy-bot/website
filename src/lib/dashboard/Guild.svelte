<script lang="ts">
	type Guild = {
		id: string;
		name: string;
		icon: string;
		owner: boolean;
		permissions: string;
		features: string[];
		approximate_member_count: number;
		approximate_presence_count: number;
	};

	const icon = (id: string, hash: string, format: string) =>
		`https://cdn.discordapp.com/icons/${id}/${hash}.${format}`;
	export let guild: Guild;

	function getIcon() {
		if (guild.icon) return icon(guild.id, guild.icon, guild.icon.startsWith('a_') ? 'gif' : 'png');
		else return 'https://cdn.discordapp.com/embed/avatars/1.png';
	}

	function getStaticIcon() {
		if (guild.icon) return icon(guild.id, guild.icon, 'png');
		else return 'https://cdn.discordapp.com/embed/avatars/1.png';
	}

	function startAnimate(event: MouseEvent & { currentTarget: EventTarget & HTMLImageElement }) {
		event.currentTarget.src = getIcon();
	}

	function stopAnimate(event: MouseEvent & { currentTarget: EventTarget & HTMLImageElement }) {
		event.currentTarget.src = getStaticIcon();
	}
</script>

<div class="flex w-full justify-center">
	<a
		href="/dashboard/{guild.id}"
		class="flex-col justify-center items-center flex hover:opacity-80 hover:scale-90 transition"
	>
		<img
			src={getStaticIcon()}
			alt="Server icon"
			class="h-[128px] lg:h-[192px] w-[128px] lg:w-[192px] rounded-xl mb-4"
			on:mouseenter={(e) => startAnimate(e)}
			on:mouseleave={(e) => stopAnimate(e)}
		/>
		<div
			class="w-36 lg:w-48 font-semibold text-lg whitespace-nowrap text-ellipsis overflow-hidden text-center"
		>
			{guild.name}
		</div>
	</a>
</div>
