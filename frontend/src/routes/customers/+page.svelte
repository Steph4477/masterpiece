<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import Aside from '$lib/components/Aside.svelte';
	import ButtonDelete from '$lib/components/ButtonDelete.svelte';
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
			<div class="buttoncont">
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
							<div class="card-customer">
								<a href="/customers/{customer.id}" class="customerId">
									<span class="click">Cliquez pour Modifier</span>
									<img src={customer.image} alt={customer.name} class="image" />
									<h2 class="name">Prénom Nom :{customer.name}</h2>
									<p>Numéro client : {customer.reference}</p>
									<p> Nombre de commandes :{customer.orders}</p>
									<div class="customer-button">
										<p>Panier moyen : {customer.average + ' €'}</p>
										<p>Achat totale : {customer.total + ' €'}</p>
									</div>
								</a>
							</div>
							<ButtonDelete id={customer.id} on:customerDeleted={handlecustomerDeleted} />
						</div>
					</li>
				{/each}
			</ul>
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

	

	.title {
		display: flex;
		justify-content: center;
		font-size: 1.5rem;
		font-weight: bold;
		color: black;
		margin-top: 10vh;
		width: 100%;
	}

	.buttoncont {
		width: 100%;
		margin-top: 20vh;
	}
	.card-customer {
		padding: 20px;
		border-radius: 20px;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
		border: solid 1px black;	
	}

	.card-customer:hover {
		box-shadow: none;
	}

	.customerId {
		font-size: 1.5rem;
		font-weight: bold;
		color: black;
	}

	.image {
		margin-top: 5vh;
		object-fit: cover;
		border-radius: 20px;
		width: 280px;
		height: 250px;
	}

	.customer-button {
		font-weight: bold;
		text-align: right;
		padding: 0.3rem;
		background-color: #F8FD00;
		border-radius: 10px;
		color: white;
	}

	.list-container {
		display: flex;
		
		
		flex-direction: column;
		margin:5vh auto;
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
		background-color: #F8FD00;
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
		color: #F8FD00;
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
	

</style>
