export interface HealthAPIData {
	cached: boolean;
	online: boolean;
	shards: Shard[];
	totalGuilds: number;
	totalUsers: number;
	ttl?: number;
	shardsOnline: number;
	totalShards: number;
}

export interface Shard {
	id: number;
	guildCount: number;
	userCount: number;
	ping: number;
	state: 'online' | 'starting' | 'offline';
}

export interface data {
	status: number;
	statusText: string;
	health?: HealthAPIData;
}

export async function load(): Promise<data> {
	const response = await fetch('https://tippy.cafe/api/health');

	const data: data = {
		status: response.status,
		statusText: response.statusText
	};

	if (!response.ok) return data;

	data.health = await response.json();

    for (let i = 0; i < data.health!.shards.length; i++) {
        if (i < 21) {
            data.health!.shards[i].state = 'online';
        } else if (i < 22) {
            data.health!.shards[i].state = 'starting';
            data.health!.shards[i].guildCount = 0;
            data.health!.shards[i].userCount = 0;
            data.health!.shards[i].ping = 0;
        } else {
            data.health!.shards[i].state = 'offline';
            data.health!.shards[i].guildCount = 0;
            data.health!.shards[i].userCount = 0;
            data.health!.shards[i].ping = 0;
        }
    }

	data.health!.totalShards = data.health!.shards.length;
	data.health!.shardsOnline = data.health!.shards.filter((s) => s.state === 'online').length;

	return data;
}
