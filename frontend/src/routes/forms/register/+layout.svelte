<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Aside from '$lib/components/Aside.svelte';
</script>

<header>
	<Header />
</header>

<slot />

<aside>
	<Aside />
</aside>

<style>
	header {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 20px;
		margin-top: 3vh;	
		margin-top: 0;
		margin-bottom: 10vh;
	}
	aside {
		display: flex;
		justify-content: flex-start;
		margin-top: -20vh;
	}
</style>
