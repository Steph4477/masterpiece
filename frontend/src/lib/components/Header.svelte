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
			<p>S'inscrire</p>
        </a>
    </div>
</header>

<style>
	header {
        display: flex;
        justify-content: space-between;
		position: fixed;
        top: 20px;
		margin-left: -5vh;
		width: 100%;
    }

	.search {
		display: flex;
		align-items: center;
	}

	.input {
		padding: 0.5rem;
		border: gray 1px solid;
		border-radius: 0.5rem;
		width: 420px;
	}

	.fa-user,
	.fa-house, .fa-magnifying-glass {
		cursor: pointer;
		border: none;
		background-color: transparent;
		font-size: 20px;
		text-align: center;
	}

	.register {
		display: flex;
		flex-direction: column;
		height: 20px;
	}
	
	p {
		margin: 0;
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
