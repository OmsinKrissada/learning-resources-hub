<script lang="ts">
	import Item from '../components/Item.svelte';

	import youtubeIcon from '$lib/assets/youtube-icon-3.svg';
	import playlistIcon from '$lib/assets/playlist-icon.svg';
	import articleIcon from '$lib/assets/article-icon.svg';

	export let data;
</script>

<div
	class="mt-8 lg:mt-10 mb-4 p-6 lg:p-10 mx-4 md:mx-8 xl:mx-0 bg-zinc-800 text-neutral-200 border border-zinc-600 rounded-lg"
>
	<h1 class="font-medium text-3xl">🙋‍♂️ Hello, it's Omsin, your friend!</h1>
	<br />
	<p>เราทำเว็บนี้ขึ้นหวังว่าจะเป็นประโยชน์สำหรับคนที่ต้องการหา resource เรียนเองจาก internet</p>
	<p>
		ซึ่ง resource ที่ใส่ไว้จะเป็น programming ที่โน้มไปทาง web dev เป็นส่วนใหญ่
		คัดมาเฉพาะอันที่เราคิดว่าจะคุ้มค่ากับเวลา
	</p>
	<br />
	<p>
		Resource มีทั้งที่เป็น <img src={youtubeIcon} class="inline mx-1 mb-px" alt="" />
		YouTube video, <img src={playlistIcon} class="inline mx-1 mb-px" alt="" />
		YouTube playlist และ <img src={articleIcon} class="inline mx-1 mb-px" alt="" /> website สำหรับอ่าน
		โดยในแต่ละหมวดเราพยายามเรียงไว้ให้แล้ว เพราะฉะนั้นถ้าไม่ได้สนใจคลิปไหนเป็นพิเศษจะดูเรียงเลยก็ได้
	</p>
	<br />
	<p>Feel free to reach me on Discord (omsin.zip) should you have any questions.</p>
	<p>Stay curious!</p>
</div>

{#each data.items as [topic, list]}
	<section class="flex flex-col items-center sm:block mb-8">
		<div class="z-10 sticky -top-px w-full pb">
			<h2
				class="px-4 md:px-8 xl:px-0 pt-4 pb-2 bg-zinc-900 text-xl md:text-2xl text-neutral-100 border-b border-zinc-600"
			>
				{topic}
			</h2>
		</div>
		<!-- <div class="grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"> -->
		<div
			class="mx-auto my-6 px-4 md:px-8 xl:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
		>
			{#each list as item}
				<Item
					url={item.url}
					title={item.title}
					thumbnailUrl={item.thumbnailUrl}
					comment={item.comment}
					noShadow={item.noShadow}
				/>
			{/each}
		</div>
	</section>
{/each}
