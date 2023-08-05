<script lang="ts">
	import Item from '../components/Item.svelte';
	import Footer from '../components/Footer.svelte';

	export let data;

	// type ResourceItem = {
	// 	type: 'channel' | 'playlist' | 'video';
	// 	url: string;
	// 	tags: string[];
	// 	comment?: string;
	// };

	// onMount(async () => {
	// 	items = (await axios.get('https://krissada.com/api/resources.php')).data;
	// });
</script>

<main class="min-h-screen xl:max-w-7xl xl:mx-auto">
	<!-- <div class="flex flex-wrap space-x-6 space-y-6"> -->
	{#each data.items as [topic, list]}
		<!-- <div class="flex flex-col"> -->
		<section class="flex flex-col items-center sm:block mb-8">
			<h2
				class="z-10 sticky -top-px w-full px-4 lg:px-0 py-4 bg-white dark:bg-neutral-900 font-medium text-xl md:text-3xl dark:text-neutral-200 border-b-2 border-neutral-300 dark:border-neutral-600"
			>
				{topic}
			</h2>
			<!-- <div class="grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"> -->
			<div class="mx-auto my-6 px-4 lg:px-0 grid grid-cols-[repeat(auto-fit,300px)] gap-6">
				{#each list as item}
					<Item
						url={item.url}
						title={item.title}
						thumbnailUrl={item.thumbnailUrl}
						comment={item.comment}
					/>
				{/each}
			</div>
		</section>

		<!-- </div> -->
	{/each}
	<!-- <ChannelItem v-for="i in playlists" type="playlist" :url="i.url" :tags="i.tags" class="h-fit w-full" />
		  <ChannelItem v-for="i in vids" type="video" :url="i.url" :tags="i.tags" class="h-fit w-full" /> -->
	<Footer />
</main>

<!-- {channels:[
	{ url: 'https://www.youtube.com/@Fireship', tags: ['Programming', 'Web Dev', 'JavaScript', 'News'] },
	{ url: 'https://www.youtube.com/@TheCherno', tags: ['Programming', 'C++'] },
	{ url: 'https://www.youtube.com/@derekbanas', tags: ['Programming', 'Java'] },
	{ url: 'https://www.youtube.com/@Techquickie', tags: ['Computer', 'Hardware'] },
	{ url: 'https://www.youtube.com/@JacobSorber', tags: ['Embeded', 'C'] },
	{ url: 'https://www.youtube.com/@TomScottGo', tags: ['General', 'IT'] },
	{ url: 'https://www.youtube.com/@LinusTechTips', tags: ['Computer', 'Hardware'] },
	{ url: 'https://www.youtube.com/@Computerphile', tags: ['Computer', 'Hardware', 'Programming', 'Algorithm'] },
	{ url: 'https://www.youtube.com/@WebDevSimplified', tags: ['Programming', 'Web Dev', 'JavaScript', 'CSS'] },
	{ url: 'https://www.youtube.com/@t3dotgg', tags: ['Web Dev', 'JS Framework'] },
	{ url: 'https://www.youtube.com/@Vsauce', tags: ['General', 'Philosophy'] },
	{ url: 'https://www.youtube.com/@KevinPowell', tags: ['Web Dev', 'CSS'] },
  ],
  playlists:  [
	{ url: '', tags: ['Programming', 'C++'] },
	{ url: '', tags: ['Programming', 'C++', 'OpenGL'] },
	{ url: '', tags: ['General', 'IT'] },
	{ url: '', tags: ['Programming', 'Java'] },
	{ url: '', tags: ['Computer', 'Programming'] },
	{ url: '', tags: ['Computer', 'IT', 'Programming'] },
  ],

  vids: [
	{ url: '', tags: ['LaTeX'] },
	{ url: '', tags: ['Database', 'PostgreSQL'] },
  ]} -->
