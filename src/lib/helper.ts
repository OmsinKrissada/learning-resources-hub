// place files you want to import through the `$lib` alias in this folder.
export function typeFromUrl(url: string) {
	if (url.includes('/watch')) return 'video';
	if (url.includes('/playlist')) return 'playlist';
	else return 'article';
}