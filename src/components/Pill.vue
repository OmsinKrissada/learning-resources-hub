<script setup lang="ts">
const props = defineProps<{
	label: string;
}>();
</script>

<template>
	<!-- <span class="px-2 py-1 bg-slate-600 text-xs text-white rounded-full"> -->
	<span class="font-medium text-xs dark:text-slate-400">
		{{ label }}
	</span>
</template>