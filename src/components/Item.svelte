<script lang="ts">
	// export let type: 'video' | 'playlist' | 'channel';
	// export let tags: string[];
	export let title: string;
	export let url: string;
	export let thumbnailUrl: string;
	export let comment: string | undefined;

	let type = url.includes('/watch') ? 'video' : 'playlist';

	// onMount(async () => {
	// 	// if (props.type !== 'video') {
	// 	const metaTags = (await axios.get(`https://krissada.com/getmetatags.php?url=${url}`)).data;
	// 	title = metaTags['og:title'];
	// 	thumbnailUrl = metaTags['og:image'];
	// 	// }
	// });

	function videoIdFromUrl(url: string) {
		return url.split(/\?v=|&v=/g)[1];
	}

	function getItemType() {}
</script>

<a
	href={url}
	class="relative dark:text-white rounded-lg lg:hover:scale-105 lg:transition-transform"
>
	<!-- <div
		class="w-10 -translate-x-5 bg-rose-900 dark:bg-rose-400 font-bold text-center text-white dark:text-black shadow-sm shadow-black">
		{{ badgeKey[type] }}
	</div> -->

	<div>
		<!-- {#if type === 'video'}
			<iframe
				src={`https://www.youtube.com/embed/${videoIdFromUrl(url)}`}
				class="w-full aspect-video rounded-lg lg:hover:scale-105 transition-transform"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>
		{:else if type === 'channel'}
			<a href={url} target="_blank">
				<img src={thumbnailUrl} alt="" class="inline h-16 mx-auto shadow rounded-full" />
				<h3 class="inline ml-4 font-medium">{{ title }}</h3>
			</a>
		{:else} -->
		<img src={thumbnailUrl} alt="" class="mx-auto shadow rounded-lg aspect-video object-cover" />
		<!-- {/if} -->
	</div>

	<div class="absolute -inset-1 overflow-hidden">
		{#if type === 'video'}
			<div
				class="absolute top-6 right-6 translate-x-1/2 pr-12 pl-8 bg-emerald-600 font-medium text-sm text-white rotate-45 shadow-sm shadow-black"
			>
				VIDEO
			</div>
		{:else if type === 'playlist'}
			<div
				class="absolute top-6 right-6 translate-x-1/2 pr-12 pl-8 bg-fuchsia-600 font-medium text-sm text-white rotate-45 shadow-sm shadow-black"
			>
				PLAYLIST
			</div>
		{/if}
	</div>

	{#if type !== 'channel'}
		<h3 class="mt-2 font-medium">{title}</h3>
	{/if}

	<!-- tags -->
	<!-- <div class="flex flex-wrap space-x-2 text-xs">
			<span class="dark:text-neutral-400">Topics: </span>
			<span class="dark:text-neutral-300">
				{tags.join(', ')}
			</span>
		</div> -->

	<!-- comment -->
	{#if comment}
		<div class="flex flex-wrap">
			<!-- <span class="dark:text-neutral-400"> -->
			<span class="font-adaptive dark:text-neutral-300 text-sm text-neutral-600">
				{comment}
			</span>
			<!-- </span> -->
		</div>
	{/if}
</a>
