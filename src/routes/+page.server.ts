import type { Config } from '@sveltejs/adapter-vercel';
import { BYPASS_TOKEN } from '$env/static/private';

export const config: Config = {
	isr: {
		expiration: false,
		bypassToken: BYPASS_TOKEN
	}
};

export async function load({ fetch }) {
	const res = await fetch('https://krissada.com/api/items.json');
	const topicObject = (await res.json()) as { [key: string]: { url: string; comment?: string; }[]; };
	const topicList = Object.entries(topicObject);
	// for (const [topic, item] of list) {

	// }

	const topicPromises = topicList.map(async ([topic, items]) => {
		const itemPromises = items.map(async (item) => {
			const res = await fetch(`https://krissada.com/getmetatags.php?url=${item.url}`);
			const metaTags = await res.json();
			return {
				...item,
				title: metaTags['og:title'],
				// thumbnailUrl: `https://i.ytimg.com/vi/${item.url.split('=')[1]}/maxresdefault.jpg`
				thumbnailUrl: metaTags['og:image']
			};
		});
		return [topic, await Promise.all(itemPromises)] as [
			string,
			Awaited<(typeof itemPromises)[0]>[]
		];
	});

	return { items: await Promise.all(topicPromises) };
}
