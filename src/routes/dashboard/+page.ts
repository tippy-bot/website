import { redirect } from '@sveltejs/kit';

type Guild = {
	id: string;
	name: string;
	icon: string;
	owner: boolean;
	permissions: string;
	features: string[];
	approximate_member_count: number;
	approximate_presence_count: number;
}

type data = {
	streamed: {
		guilds: Promise<Guild[]>;
	}
};

async function fetchGuilds(token: string): Promise<{guilds: Guild[], retryAfter: null} | {guilds: null, retryAfter: number}> {
	const response = await fetch('https://discord.com/api/users/@me/guilds', {
		headers: {
			Authorization: `Bearer ${token}`
		}
	});

	if (response.status === 429) {
		return {
			guilds: null,
			retryAfter: parseInt(response.headers.get("x-ratelimit-reset-after") ?? "5") * 1000,
		}
	}

	const body = await response.json();

	const guilds = (body as Guild[]).filter((g) => {
		const bitmap = parseInt(g.permissions);
		if (bitmap & (1 << 5) || bitmap & (1 << 8)) return true;
		return false;
	});

	return {
		guilds,
		retryAfter: null,
	};
}

export function load({ parent }): data {
	const guilds = new Promise<Guild[]>(async (resolve) => {
		const { session } = await parent();
		let response = await fetchGuilds((session as any).accessToken);

		for (let i = 0; i < 5; i++) {
			if (response.guilds)
				return resolve(response.guilds)
			else
				await new Promise((resolve) => setTimeout(resolve, response.retryAfter!))

			response = await fetchGuilds((session as any).accessToken);
		}

		throw redirect(307, '/');
	})

	return {
		streamed: {
			guilds
		}
	};
}
