<script lang="ts">
	import { onMount } from 'svelte';
	let isLoggedIn: string | null = null;

	onMount(() => {
		isLoggedIn = localStorage.getItem('accessToken');
	});

	function deleteToken() {
		localStorage.removeItem('accessToken');
	}
</script>

<div class="aside">
	<i class="fa-solid fa-sliders"></i>
	<i class="fa-regular fa-bell"></i>
	<a
		href="/logout"
		class="fa-solid fa-door-open"
		style="display: {isLoggedIn ? 'block' : 'none'}"
		on:click={deleteToken}
		aria-label="Logout"
	></a>
	<a 
		href="/forms/login"
		class="fa-solid fa-door-closed" 
		style="display: {isLoggedIn ? 'none' : 'block'}" 
		aria-label="Logout" 
	></a>
</div>

<style>
	.aside {
		display: flex;
		flex-direction: column;
		position: fixed;
		margin-left: -5vh;
	}

	i {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 5vh;
		cursor: pointer;
	}

	i:hover {
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	}

	.fa-sliders {
		transform: rotate(90deg);
	}
</style>
