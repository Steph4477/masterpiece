<script lang="ts">
	import ButtonsFunc from '$lib/components/ButtonsFunc.svelte';
	import {isUserDiscon} from '$lib/stores/userStore';
</script>

<div class="home" class:filter-grayscale={$isUserDiscon}>
	<p class="title">
		<span class="b">B</span>
		<span class="p">P</span>
		<span class="i">I</span>
		<span class="m">M</span>
	</p>
	<h1>Gérer votre business ?!</h1>
	<div class="buttons">
		<div>
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
			/>
		</div>
		<div>
			<ButtonsFunc label="Commands" customColor="#FFDF8C" icone="fa-solid fa-clipboard-check" />
			<ButtonsFunc label="Clients" customColor="#F8FD00" icone="fa-solid fa-users" />
		</div>
	</div>
</div>

<style>
	.home {
		padding-left: 5vh;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.filter-grayscale {
		filter: grayscale(100%);
	}

	h1 {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 5rem;
		height: 50px;
	}

	.b {
		color: #00c2ff;
	}

	.p {
		color: #fd6060;
	}

	.i {
		color: #ffdf8c;
	}

	.m {
		color: #f8fd00;
	}

	p {
		font-weight: bold;
		text-align: center;
	}

	.buttons {
		display: flex;
		flex-wrap: wrap;
		margin-top: 5vh;
		width: 100%;
	}

	div {
		display: flex;
		width: 80%;
		height: 180px;
		justify-content: space-around;
		text-align: center;
	}
</style>
