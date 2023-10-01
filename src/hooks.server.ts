import { SvelteKitAuth } from '@auth/sveltekit';
import Discord from '@auth/core/providers/discord';
import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET, DISCORD_AUTH_URL } from '$env/static/private';
import { sequence } from '@sveltejs/kit/hooks';
import { redirect, type Handle } from '@sveltejs/kit';

export const authorization = (async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/dashboard')) {
		const session = await event.locals.getSession();
		if (!session) throw redirect(303, '/auth');
	}

	return resolve(event);
}) satisfies Handle;

export const handle = sequence(
	SvelteKitAuth({
		providers: [
			Discord({
				clientId: DISCORD_CLIENT_ID,
				clientSecret: DISCORD_CLIENT_SECRET,
				authorization: DISCORD_AUTH_URL,
				checks: ['pkce', 'state']
			})
		],
		callbacks: {
			async jwt({ token, account }) {
				if (account) {
					token.accessToken = account.access_token;
					token.id = account.providerAccountId;
				}

				return token;
			},
			async session({ session, token }) {
				// @ts-expect-error
				session.accessToken = token.accessToken;
				// @ts-expect-error
				if (session.user) session.user.id = token.id;

				return session;
			}
		}
	}),
	authorization
);

declare module '@auth/core/types' {
	interface Session {
		error?: 'RefreshAccessTokenError';
	}
}

declare module '@auth/core/jwt' {
	interface JWT {
		access_token: string;
		expires_at: number;
		refresh_token: string;
		error?: 'RefreshAccessTokenError';
	}
}
