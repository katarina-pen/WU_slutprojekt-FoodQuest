<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from './Nav.svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Nav />
<Header />  



<main class="bg-[#008080] row-start-3 col-span-full min-h-screen">
	{@render children()}
</main>


<Footer /> 
