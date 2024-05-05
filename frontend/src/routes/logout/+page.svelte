<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		setTimeout(() => {
			window.location.href = '/';
		}, 800);
	});
</script>

<main>
	<div>
		<i class="fa-solid fa-user"></i>
	</div>
	<h1>Vous êtes déconnecté</h1>
    <p>Merci de votre visite</p>
	<p>Merci de patienter</p>
	<span>...</span>
	<p>Vous êtes redirigé vers la page d’accueil</p>
	<span>...</span>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 5vh;
		cursor: pointer;
		color: #ff004c;
		margin-left: 2vh;
	}

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 90px;
		width: 90px;

		border-radius: 50%;
		margin-top: 10vh;
		margin-bottom: 10vh;

		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	}

	i {
		font-size: 37px;
	}

	h1 {
		font-weight: bold;
	}

</style>
