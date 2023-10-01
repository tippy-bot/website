import { PUBLIC_HEALTH_API } from '$env/static/public';

type HealthAPIData = {
	cached: boolean;
	online: boolean;
	shards: Shard[];
	totalGuilds: number;
	totalUsers: number;
	ttl?: number;
	shardsOnline: number;
	totalShards: number;
};

type Shard = {
	id: number;
	guildCount: number;
	userCount: number;
	ping: number;
	state: 'online' | 'starting' | 'offline';
};

type data = {
	status: number;
	statusText: string;
	health?: HealthAPIData;
};

export async function load({ fetch }): Promise<data> {
	const response = await fetch(PUBLIC_HEALTH_API);

	const data: data = {
		status: response.status,
		statusText: response.statusText
	};

	if (!response.ok) return data;

	data.health = await response.json();

	data.health!.totalShards = data.health!.shards.length;
	data.health!.shardsOnline = data.health!.shards.filter((s) => s.state === 'online').length;

	return data;
}
