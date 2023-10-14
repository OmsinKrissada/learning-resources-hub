<script lang="ts">
	import svelteLogo from '$lib/assets/svelte_logo.svg';
</script>

<footer
	class="flex flex-col md:flex-row justify-center gap-4 py-6 text-center text-neutral-400 border-t border-neutral-600"
>
	<span>Content Collected With ♥️</span>
	<span class="hidden md:inline px-2 text-neutral-400 dark:text-neutral-600">•</span>
	<span>
		Website Made With <a href="https://kit.svelte.dev"
			><img class="inline w-4 mx-1" src={svelteLogo} alt="SvelteKit" /></a
		>
		<br />
		<!-- <a
			href="https://github.com/OmsinKrissada/learning-resources-hub"
			class="font-semibold text-xs text-sky-600 dark:text-sky-400 underlin underline-offset-4"
			>SOURCE CODE AVAILABLE HERE</a
		> -->
	</span>
	<!-- <p class="mt-2">... by Omsin</p> -->
	<!-- <p>Source code available on GitHub</p> -->
</footer>
