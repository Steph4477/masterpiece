<script lang="ts">
	import { onMount } from 'svelte';
	let isLoggedIn = false;

	onMount(() => {
		isLoggedIn = localStorage.getItem('is_logged_in') === 'true';
	});

	function logout() {
		localStorage.setItem('is_logged_in', 'false');
	}
</script>

<div class="aside">
	<i class="fa-solid fa-sliders"></i>
	<i class="fa-regular fa-bell"></i>
	<a
		href="/logout"
		class="fa-solid fa-door-open"
		style="display: {isLoggedIn ? 'block' : 'none'}"
		on:click={logout}
		aria-label="Logout"
	></a>
	<i class="fa-solid fa-door-closed" style="display: {isLoggedIn ? 'none' : 'block'}"></i>
</div>

<style>
	.aside {
		display: flex;
		flex-direction: column;
		position: fixed;
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
