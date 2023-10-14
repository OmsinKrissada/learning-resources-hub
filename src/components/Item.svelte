<script lang="ts">
	import youtubeIcon from '$lib/assets/youtube-icon-3.svg';
	import playlistIcon from '$lib/assets/playlist-icon.svg';
	// export let type: 'video' | 'playlist' | 'channel';
	// export let tags: string[];
	export let title: string;
	export let url: string;
	export let thumbnailUrl: string;
	export let comment: string | undefined;

	let type = url.includes('/watch') ? 'video' : 'playlist';

	function videoIdFromUrl(url: string) {
		return url.split(/\?v=|&v=/g)[1];
	}

	function getItemType() {}
</script>

<a
	href={url}
	class="relative p-4 flex items-center text-white rounded-lg bg-gradient-to-r from-transparent to-zinc-800/80 hover:to-teal-800/30 border border-zinc-700 hover:border-teal-500 lg:hover:scale-100 lg:transition-colors"
>
	<img
		src={thumbnailUrl}
		alt=""
		class="h-16 rounded-lg aspect-video object-cover shadow-lg shadow-zinc-700"
	/>
	<!-- <div class="w-60" /> -->

	<!-- <div class="absolute -inset-1 overflow-hidden">
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
	</div> -->

	<div class="h-full ml-4 text-sm text-neutral-200">
		{#if type !== 'channel'}
			<div class="flex items-start">
				{#if type === 'video'}
					<h3 class="font-medium">
						<img src={youtubeIcon} class="inline invert mr-1" width="16" alt="" />
						{title}
					</h3>
				{:else}
					<h3 class="font-medium">
						<img src={playlistIcon} class="inline invert mr-1" width="16" alt="" />
						{title}
					</h3>
				{/if}
			</div>
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
				<span class="font-adaptive text-neutral-400">
					{comment}
				</span>
				<!-- </span> -->
			</div>
		{/if}
	</div>
</a>
