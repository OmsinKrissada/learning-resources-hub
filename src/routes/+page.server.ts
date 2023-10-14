import type { Config } from '@sveltejs/adapter-vercel';
import { BYPASS_TOKEN } from '$env/static/private';
import { typeFromUrl } from '$lib/helper.js';

import globeIcon from '$lib/assets/globe-icon.svg';

export const config: Config = {
	isr: {
		expiration: false,
		bypassToken: BYPASS_TOKEN
	}
};

export async function load({ fetch }) {
	const res = await fetch('https://krissada.com/api/learning-resources/items.json');
	const topicObject = (await res.json()) as { [key: string]: { url: string; comment?: string; title?: string; thumbnailUrl: string; }[]; };
	const topicList = Object.entries(topicObject);
	// for (const [topic, item] of list) {

	// }

	const topicPromises = topicList.map(async ([topic, items]) => {
		const itemPromises = items.map(async (item) => {
			if (typeFromUrl(item.url) === 'article') {
				return {
					...item,
					title: item.title,
					thumbnailUrl: item.thumbnailUrl || globeIcon
				};
			} else {
				const res = await fetch(`https://krissada.com/getmetatags.php?url=${item.url}`);
				const metaTags = await res.json();
				return {
					...item,
					title: metaTags['og:title'],
					// thumbnailUrl: `https://i.ytimg.com/vi/${item.url.split('=')[1]}/maxresdefault.jpg`
					thumbnailUrl: metaTags['og:image']
				};
			}
		});
		return [topic, await Promise.all(itemPromises)] as [
			string,
			Awaited<(typeof itemPromises)[0]>[]
		];
	});

	return { items: await Promise.all(topicPromises) };
}
