<script lang="ts">
	import ButtonsFunc from '$lib/components/ButtonsFunc.svelte';
	import { onMount } from 'svelte';
	import Aside from '$lib/components/Aside.svelte';
	import Header from '$lib/components/Header.svelte';
	
	let isLoggedIn: string | null = null;

	onMount(() => {
		isLoggedIn = localStorage.getItem('accessToken');
	});
</script>


<div class="main">
	<div class="header-container">
		<Header />
	</div>
	<div class="aside-container">
		<Aside />
	</div>
	<div class="home" class:filter-grayscale={!isLoggedIn}>
		<p class="title">
			<span class="b">B</span>
			<span class="p">P</span>
			<span class="i">I</span>
			<span class="m">M</span>
		</p>
		<h1>Gérer votre business ?!</h1>
		<div class="buttons">
			<div class="button-top">
				<ButtonsFunc
					label="Stats"
					customColor="#00C2FF"
					color="white"
					icone="fa-solid fa-chart-simple"
					
				/>
				<ButtonsFunc
					label="Products"
					customColor="#FD6060"
					color="white"
					icone="fa-solid fa-boxes-packing"
					href="/products"
				/>
			</div>	
			<div class="button-bottom">
				<ButtonsFunc label="Commands" customColor="#FFDF8C" icone="fa-solid fa-clipboard-check" />
				<ButtonsFunc 
					label="Clients" 
					customColor="#F8FD00" 
					icone="fa-solid fa-users" 
					color="black"
					href="/customers"
				/>
			</div>
			<div class="login">
				<a href="/forms/login"><p>Déjà un compte ?</p></a>
			</div>
		</div>
	</div>
</div>

<style>
	.aside-container {
		margin-top: 500px;
		position:fixed;
		left: 4vh;	
	}

	.header-container {
		position:fixed;
		left: 5vh;
		width: 95%;
	}

	.home {
		display: flex;
		flex-wrap: wrap;
		margin-top: 5vh;
	}

	.filter-grayscale {
		filter: grayscale(100%);
	}

	h1 {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 4rem;
		margin-top: 5vh;
		margin-bottom: 5vh;
		width: 100%;
	}

	.b {
		font-size: 60px;
		color: #00c2ff;
	}

	.p {
		font-size: 60px;
		color: #fd6060;
		height: 20px;
	}

	.i {
		font-size: 60px;
		color: #ffdf8c;
	}

	.m {
		font-size: 60px;
		color: #f8fd00;
	}

	p {
		
		font-weight: bold;
		text-align: center;
	}
	.button-top {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 5vh;
		width: 100%;
	}
	.buttons {
		display: flex;
		flex-wrap: wrap;
		margin-top: 5vh;
		width: 100%;
		
	}

	div {
		display: flex;
		justify-content: space-around;
		text-align: center;
	}

	.login {
		margin-top: 5vh;
		width: 100%;
		height: 15px;
	}

	@media (max-width: 376px) {

		.b {
			font-size: 50px;
		}

		.p {
			font-size: 50px;
		}

		.i {
			font-size: 50px;
		}

		.m {
			font-size: 50px;
		}

	}
</style>
