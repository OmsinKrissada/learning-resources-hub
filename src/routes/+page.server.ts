import type { Config } from '@sveltejs/adapter-vercel';
import { BYPASS_TOKEN, YOUTUBE_API_KEY } from '$env/static/private';
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
			if (typeFromUrl(item.url) === 'playlist') {
				// const res = await fetch(`https://krissada.com/getmetatags.php?url=${item.url}`);
				// const metaTags = await res.json();
				const res = await fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&id=${item.url.split('=')[1]}&key=${YOUTUBE_API_KEY}`);
				const data = await res.json();
				return {
					...item,
					title: data.items[0].snippet.title,
					// title: metaTags['og:title'],
					thumbnailUrl: data.items[0].snippet.thumbnails.high?.url || data.items[0].snippet.thumbnails.medium?.url,
					// thumbnailUrl: metaTags['og:image'],
					noShadow: false
				};

			} else if (typeFromUrl(item.url) === 'video') {
				const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${item.url.split('=')[1]}&key=${YOUTUBE_API_KEY}`);
				const data = await res.json();
				return {
					...item,
					// title: 'Title',
					title: data.items[0].snippet.title,
					thumbnailUrl: `https://i.ytimg.com/vi/${item.url.split('=')[1]}/hqdefault.jpg`,
					noShadow: false
				};
			} else if (typeFromUrl(item.url) === 'article') {
				return {
					...item,
					title: item.title,
					thumbnailUrl: item.thumbnailUrl || globeIcon,
					noShadow: !item.thumbnailUrl
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
