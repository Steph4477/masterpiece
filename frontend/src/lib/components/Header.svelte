<script lang="ts">
	import { writable } from 'svelte/store';

	// Create a custom reactive store linked to local storage, initialized to false if no account:
	// local storage is initialized from null to false
	function createIsLoggedInStore() {
		// If the code is running in a browser, retrieve the value from local storage, otherwise set to null
		const isLoggedIn = typeof window !== 'undefined' ? localStorage.getItem('is_logged_in') : null;
		// Create a reactive store with the retrieved value
		const store = writable(isLoggedIn !== null ? isLoggedIn === 'true' : false);
		// Subscribe to this store to update local storage
		if (typeof window !== 'undefined') {
			store.subscribe((value) => localStorage.setItem('is_logged_in', value ? 'true' : 'false'));
		}
		return store;
	}
	//ZA
	const isLoggedIn = createIsLoggedInStore();
</script>

<header>
	<div class="search">
		<a href="/">
			<button class="fa-solid fa-house"></button>
		</a>
		<i class="fa-solid fa-magnifying-glass"></i>
		<input type="text" placeholder="Search" class="input" />
		<a href="/forms/register">
			<!-- Direct usage of the store to set the color of the icon -->
			<button class="fa-solid fa-user" style="color: {$isLoggedIn ? 'green' : 'red'}"></button>
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		height: 40px;
		margin-top: 3vh;
		margin-bottom: 3vh;
		width: 100%;
	}

	.fa-house {
		margin-right: 1rem;
	}

	.fa-magnifying-glass {
		width: 30px;
		margin-right: 1rem;
	}

	.search {
		display: flex;
		align-items: center;
		flex: 1;
	}

	.input {
		padding: 0.5rem;
		border: gray 1px solid;
		border-radius: 0.5rem;
		margin-right: 2rem;
		flex-grow: 1;
	}

	.fa-user,
	.fa-house {
		cursor: pointer;
		border: none;
		background-color: white;
		font-size: 20px;
	}
</style>
