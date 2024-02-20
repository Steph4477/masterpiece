<script lang="ts">
	import { isUserDiscon } from '$lib/stores/userStore';
	let toggleUserIconColor = () => {
		$isUserDiscon = !$isUserDiscon;
	};
</script>

<header class="header">
	<div class="search">
		<a href="/">
			<button class="fa-solid fa-house"></button>
		</a>
		<i class="fa-solid fa-magnifying-glass"></i>
		<input type="text" placeholder="Search" />
		<a href="/forms/register">
			<button
				class="fa-solid fa-user"
				on:click={toggleUserIconColor}
				style="color: {$isUserDiscon ? 'red' : 'green'}"
			></button>
		</a>
	</div>
</header>

<style>
	.header {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 5vh;
		margin-bottom: 5vh;
	}

	.fa-magnifying-glass {
		width: 30px;
	}

	.search {
		display: flex;
		align-items: center;
	}

	.search input {
		padding: 0.5rem;
		width: 350px;
		border: gray 1px solid;
		border-radius: 0.5rem;
	}

	.fa-user,
	.fa-house {
		cursor: pointer;
		background-color: white;
		border-radius: 100px;
		border: none;
		margin-left: 15px;
		margin-right: 15px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		width: 60px;
		height: 60px;
		font-size: 20px;
	}
	.fa-user:hover,
	.fa-house:hover {
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	}
</style>
