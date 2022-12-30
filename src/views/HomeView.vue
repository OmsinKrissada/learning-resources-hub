<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import Item from '../components/Item.vue';

// const channels: { tags: string[], url: string; }[] = [
//   { url: 'https://www.youtube.com/@Fireship', tags: ['Programming', 'Web Dev', 'JavaScript', 'News'] },
//   { url: 'https://www.youtube.com/@TheCherno', tags: ['Programming', 'C++'] },
//   { url: 'https://www.youtube.com/@derekbanas', tags: ['Programming', 'Java'] },
//   { url: 'https://www.youtube.com/@Techquickie', tags: ['Computer', 'Hardware'] },
//   { url: 'https://www.youtube.com/@JacobSorber', tags: ['Embeded', 'C'] },
//   { url: 'https://www.youtube.com/@TomScottGo', tags: ['General', 'IT'] },
//   { url: 'https://www.youtube.com/@LinusTechTips', tags: ['Computer', 'Hardware'] },
//   { url: 'https://www.youtube.com/@Computerphile', tags: ['Computer', 'Hardware', 'Programming', 'Algorithm'] },
//   { url: 'https://www.youtube.com/@WebDevSimplified', tags: ['Programming', 'Web Dev', 'JavaScript', 'CSS'] },
//   { url: 'https://www.youtube.com/@t3dotgg', tags: ['Web Dev', 'JS Framework'] },
//   { url: 'https://www.youtube.com/@Vsauce', tags: ['General', 'Philosophy'] },
//   { url: 'https://www.youtube.com/@KevinPowell', tags: ['Web Dev', 'CSS'] },
// ];

// const playlists: { tags: string[], url: string; }[] = [
//   { url: 'https://www.youtube.com/playlist?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb', tags: ['Programming', 'C++'] },
//   { url: 'https://www.youtube.com/playlist?list=PLlrATfBNZ98foTJPJ_Ev03o2oq3-GGOS2', tags: ['Programming', 'C++', 'OpenGL'] },
//   { url: 'https://www.youtube.com/playlist?list=PLQMVnqe4XbictUtFZK1-gBYvyUzTWJnOk', tags: ['General', 'IT'] },
//   { url: 'https://www.youtube.com/playlist?list=PLE7E8B7F4856C9B19', tags: ['Programming', 'Java'] },
//   { url: 'https://www.youtube.com/playlist?list=PL96C35uN7xGLux5q2c4P_IqbKF11-pfsR', tags: ['Computer', 'Programming'] },
//   { url: 'https://www.youtube.com/playlist?list=PL96C35uN7xGLLeET0dOWaKHkAlPsrkcha', tags: ['Computer', 'IT', 'Programming'] },
// ];

// const vids: { tags: string[], url: string; }[] = [
//   { url: 'https://www.youtube.com/watch?v=VhmkLrOjLsw', tags: ['LaTeX'] },
//   { url: 'https://www.youtube.com/watch?v=85pG_pDkITY', tags: ['Database', 'PostgreSQL'] },
//   { url: 'https://www.youtube.com/watch?v=HkdAHXoRtos', tags: ['Git'] },
//   { url: 'https://www.youtube.com/watch?v=ecK3EnyGD8o', tags: ['Git'] },
//   { url: 'https://www.youtube.com/watch?v=hwP7WQkmECE', tags: ['Git'] },
// ];
type ResourceItem = {
  type: 'channel' | 'playlist' | 'video';
  url: string;
  tags: string[];
  comment?: string;
};
const items = ref<ResourceItem[]>();

onMounted(async () => {
  items.value = (await axios.get('https://krissada.com/api/resources.php')).data;
});
</script>

<template>
  <main class="dark:bg-neutral-900 min-h-screen p-6 xl:px-36">
    <div class="grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
      <!-- <div class="flex flex-wrap space-x-6 space-y-6"> -->
      <Item v-for="i in items" :type="i.type" :url="i.url" :tags="i.tags" :comment="i.comment" class="h-fit w-full" />
      <!-- <ChannelItem v-for="i in playlists" type="playlist" :url="i.url" :tags="i.tags" class="h-fit w-full" />
      <ChannelItem v-for="i in vids" type="video" :url="i.url" :tags="i.tags" class="h-fit w-full" /> -->
    </div>
  </main>
</template>
