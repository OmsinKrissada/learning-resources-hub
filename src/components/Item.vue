<script setup lang="ts">
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import Pill from './Pill.vue';

const props = defineProps<{
	type: 'video' | 'playlist' | 'channel';
	tags: string[];
	url: string;
	comment?: string;
}>();

const badgeKey = {
	'video': 'VID',
	'channel': 'CH',
	'playlist': 'PL',
};

const title = ref('');
const thumbnailUrl = ref('');
onMounted(async () => {
	// if (props.type !== 'video') {
	const metaTags = (await axios.get(`https://krissada.com/getmetatags.php?url=${props.url}`)).data;
	title.value = metaTags['og:title'];
	thumbnailUrl.value = metaTags['og:image'];
	// }
});

function videoIdFromUrl(url: string) {
	return url.split(/\?v=|&v=/g)[1];
}
</script>


<template>
	<div class="w-fit p-4 space-y-4 dark:bg-black/30 lg:dark:bg-transparent dark:text-white  rounded-lg">

		<!-- <div
		class="w-10 -translate-x-5 bg-rose-900 dark:bg-rose-400 font-bold text-center text-white dark:text-black shadow-sm shadow-black">
		{{ badgeKey[type] }}
	</div> -->

		<div class="w-10 font-bold uppercase text-xs text-center text-slate-500 dark:text-slate-400 tracking-wider">
			<!-- {{ type }} -->
		</div>

		<div>
			<iframe v-if="type === 'video'" :src="`https://www.youtube.com/embed/${videoIdFromUrl(url)}`"
				class="w-full aspect-video rounded-lg lg:hover:scale-105 transition-transform"
				title="YouTube video player" frameborder="0"
				allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen></iframe>
			<a v-else-if="type === 'channel'" :href="url" target="_blank">
				<img :src="thumbnailUrl" alt="" class="inline h-16 mx-auto shadow rounded-full">
				<h3 class="inline ml-4 font-medium">{{ title }}</h3>
			</a>
			<a v-else :href="url" target="_blank">
				<img :src="thumbnailUrl" alt=""
					class="mx-auto shadow rounded-lg lg:hover:scale-105 transition-transform">
			</a>
		</div>

		<h3 v-if="type !== 'channel'" class="font-medium">{{ title }}</h3>

		<div class="space-y-1">

			<!-- tags -->
			<div class="flex flex-wrap space-x-2 text-xs">
				<span class="dark:text-neutral-400">Topics: </span>
				<span class="dark:text-neutral-300">
					{{ tags.join(', ') }}
				</span>
			</div>

			<!-- comment -->
			<div v-if="comment" class="flex flex-wrap space-x-2 text-xs">
				<span class="dark:text-neutral-400">Comment: </span>
				<span class="dark:text-neutral-300 font-adaptive">
					{{ comment }}
				</span>
			</div>

		</div>

	</div>
</template>