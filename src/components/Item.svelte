<script lang="ts">
	import youtubeIcon from '$lib/assets/youtube-icon-3.svg';
	import playlistIcon from '$lib/assets/playlist-icon.svg';
	import articleIcon from '$lib/assets/article-icon.svg';
	import globeIcon from '$lib/assets/globe-icon.svg';
	import { typeFromUrl } from '$lib/helper';
	// export let type: 'video' | 'playlist' | 'channel';
	// export let tags: string[];
	export let title: string;
	export let url: string;
	export let thumbnailUrl: string;
	export let comment: string | undefined;

	let type = typeFromUrl(url);
</script>

<a
	href={url}
	class="relative p-4 flex items-center text-white rounded-lg bg-gradient-to-r from-transparent to-zinc-800/80 hover:to-teal-800/30 border border-zinc-700 hover:border-teal-500 lg:hover:scale-100 lg:transition-colors"
>
	<img
		src={thumbnailUrl}
		alt=""
		class="h-16 rounded-lg aspect-video object-cover shadow-lg shadow-zinc-700"
		class:object-fill={type === 'article'}
		class:shadow-lg={thumbnailUrl !== globeIcon}
	/>

	<div class="h-full ml-4 text-sm text-neutral-200">
		{#if type !== 'channel'}
			<div class="flex items-start">
				<h3 class="font-medium">
					{#if type === 'video'}
						<img src={youtubeIcon} class="inline mr-1" alt="" />
					{:else if type === 'playlist'}
						<img src={playlistIcon} class="inline mr-1" alt="" />
					{:else if type === 'article'}
						<img src={articleIcon} class="inline mr-1" alt="" />
					{/if}
					{title}
				</h3>
			</div>
		{/if}

		<!-- comment -->
		{#if comment}
			<div class="flex flex-wrap">
				<span class="font-adaptive text-neutral-400">
					{comment}
				</span>
				<!-- </span> -->
			</div>
		{/if}
	</div>
</a>
