<script lang="ts">
    import { onMount } from 'svelte';
    let isLoggedIn = false;

    onMount(() => {
        isLoggedIn = localStorage.getItem('is_logged_in') === 'true';	
    });
</script>

<header>
    <div class="search">
        <a href="/">
            <button class="fa-solid fa-house"></button>
        </a>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search" class="input" />
        <a href="/forms/register">
            <button class="fa-solid fa-user" style="color: {isLoggedIn ? 'green' : 'red'}"></button>
        </a>
    </div>
</header>

<style>
	header {
        display: flex;
        justify-content: space-around;
		position: fixed;
        top: 20px;
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
	}

	.input {
		padding: 0.5rem;
		border: gray 1px solid;
		border-radius: 0.5rem;
		margin-right: 2rem;
		width: 300px;
		flex-grow: 1;
	}

	.fa-user,
	.fa-house {
		cursor: pointer;
		border: none;
		background-color: white;
		font-size: 20px;
	}

	@media (max-width: 576px) {
		.input {
			width: 200px;
		}
	}
</style>
