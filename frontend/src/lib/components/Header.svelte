<script lang="ts">
    import { onMount } from 'svelte';
    let isLoggedIn: string | null = null;

    onMount(() => {
        isLoggedIn = localStorage.getItem('accessToken');	
    });
</script>

<header>
    <div class="search">
        <a href="/">
            <button class="fa-solid fa-house"></button>
        </a>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Rechercher" class="input" />
        <a href="/forms/register" class="register">
            <button class="fa-solid fa-user" style="color: {isLoggedIn ? 'green' : 'red'}"></button>
        </a>
    </div>
</header>

<style>
	header {
        display: flex;
		position: fixed;
		width: 100%; 	
    }

	.search {
		display: flex;
		align-items: center;
		width: 100%;	
	}

	.input {
		padding: 0.5rem;
		border: gray 1px solid;
		border-radius: 0.5rem;
		width: 80%;
		margin-right: 2vh;
	}

	.fa-user,
	.fa-house, .fa-magnifying-glass {
		cursor: pointer;
		border: none;
		background-color: transparent;
		font-size: 25px;
		text-align: center;
		margin-right: 2vh;
		-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
	}
	.fa-house {
		font-size: 140%;
		left: 6.5vh;
	}
	.register {
		display: flex;
		flex-direction: column;
		height: 20px;
	}
	
	@media (max-width: 568px) {
		header {
			width: 100%;
		}
		
		.input {
			width: 300px;
		}
	}
	@media (max-width: 476px) {
		header {
			width: 100%;
		}
		
		.input {
			width: 220px;
		}
	} 
</style>
