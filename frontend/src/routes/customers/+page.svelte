<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import Aside from '$lib/components/Aside.svelte';
	import ButtonDeleteCustomer from '$lib/components/ButtonDeleteCustomer.svelte';
	import { fetchAllCustomers } from '$lib/utils';

	let customers: any = [];
	let error: string | null = null;

	onMount(async () => {
		loadcustomers();
	});

	async function loadcustomers() {
		try {
			customers = await fetchAllCustomers();
			if (customers.length === 0) {
				error = 'Aucun clients trouvés.';
			} else {
				error = null;
			}
		} catch (err) {
			error = (err as Error).message;
			console.error('Erreur lors de la récupération des clients :', error);
		}
	}

	// reload customers after deletion
	function handlecustomerDeleted() {
		loadcustomers();
	}
</script>

<div class="main">
	<div class="header-container">
		<Header />
	</div>
	<div class="aside-container">
		<Aside />
	</div>
	<div class="container">
		<div class="list-container">
			<div class="button-container">
				<a href="/forms/addCustomer" class="add">Créer un compte client ?</a>
			</div>
			<h1 class="title">Liste des clients</h1>
			{#if error}
				<p>{error}</p>
			{/if}
			<ul>
				{#each customers as customer}
					<li>
						<div class="button-container">
							<div class="card">
								<a href="/customers/{customer.id}" class="customerId">
									<span class="click">Cliquez pour Modifier</span>
									<p>Numéro client : {customer.reference}</p>
									<img src={customer.image} alt={customer.name} class="image" />
									<h1 class="name">{customer.name}</h1>
									<p>Nombre de commandes :{customer.orders}</p>
									<div class="button">
										<div class="average">Panier moyen : {customer.average + '€'}</div>
										<div class="total">Achat totale : {customer.total + '€'}</div>
									</div>
								</a>
							</div>
							<ButtonDeleteCustomer id={customer.id} on:customerDeleted={handlecustomerDeleted} />
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style>
	.aside-container {
		margin-top: 400px;
		position: fixed;
		left: 4vh;
	}

	.header-container {
		position: fixed;
		width: 95%;
	}

	.container {
		width: 100%;
	}

	.title {
		display: flex;
		justify-content: center;
		font-size: 1.5rem;
		font-weight: bold;
		color: black;	
	}

	.card {
		padding: 20px;
		width: 80%;
		border-radius: 20px;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
		border: solid 1px black;
	}

	.card:hover {
		box-shadow: none;
	}

	.customerId {
		font-weight: bold;
		color: black;
	}

	.image {
		margin-top: 5vh;
		object-fit: cover;
		border-radius: 20px;
		width: 280px;
		height: 250px;
		color: transparent;
	}

	.list-container {
		display: flex;
		flex-direction: column;
		margin: 5vh auto;
	}

	.name {
		font-weight: bold;
	}

	.button-container {
		display: flex;
		justify-content: center;
		margin-bottom: 5vh;
	}

	.add {
		padding: 10px;
		width: 100%;
		font-size: large;
		font-weight: bold;
		background-color: #f8fd00;
		color: black;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
		border-radius: 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		text-align: center;
		margin-top: 10vh;
	}

	.click {
		color: #fd6060;
		text-decoration: underline;
	}

	.add:hover {
		box-shadow: none;
	}

	div {
		display: flex;
		justify-content: space-around;
		text-align: center;
	}

	.button {
		font-weight: bold;
		display: flex;
		flex-wrap: wrap;
	}

	.average {
		color: black;
		width: 100%;
		font-size: 20px;
	}

	.total {
		color: black;
		font-size: 20px;
	}

	.customerId {
		background-color: #f6f7d7;
		padding: 2vh;
		border-radius: 15px;
	}
	
	@media (max-width: 376px) {
		.container {
			width: 100%;
		}

		.card {
			width: 100%;
		}

		.image {
			width: 180px;
			height: 150px;
		}

		.button {
			width: 100%;
		}
	}
</style>
