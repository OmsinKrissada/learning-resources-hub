<script>
	import '../app.postcss';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<body class="bg-zinc-900 font-adaptive">
	<Header />
	<main class="min-h-screen xl:max-w-7xl xl:mx-auto">
		<slot />
	</main>
	<Footer />
</body>
