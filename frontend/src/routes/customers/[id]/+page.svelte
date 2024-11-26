<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { fetchByCustomerId, updateCustomer } from '$lib/utils';
	import Header from '$lib/components/Header.svelte';
	import Aside from '$lib/components/Aside.svelte';

	let customer: any;
	let error: any;

	onMount(async () => {
		const { params } = $page;
		customer = await fetchByCustomerId(params.id);
	});

	async function handleCustomerUpdate(event: any) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const updatedCustomer = {
			reference: formData.get('reference'),
			name: formData.get('name'),
			orders: formData.get('orders'),
			average: formData.get('average'),
			total: formData.get('total')
		};
		try {
			await updateCustomer(customer.id, updatedCustomer);
			customer = await fetchByCustomerId(customer.id); // reload the customer
		} catch (err) {
			error = (err as any).message;
		}
	}
</script>

<Header />
<div class="main">
	<div class="aside-container">
		<Aside />
	</div>
	<div class="form-container">
		{#if customer}
			<h1>Modifier</h1>
			<form on:submit={handleCustomerUpdate}>
				<label>
					Référence :
					<input type="text" aria-label="référence de l'article" name="reference" value={customer.reference} />
				</label>
				<label>
					Prénon, nom :
					<input type="text" aria-label="Prénon, nom" name="name" value={customer.name} />
				</label>
				<label>
					Nombre de commandes :
					<input type="number" aria-label="Nombre de commandes" name="orders" value={customer.orders} />
				</label>
				
				<label>
					Panier moyen :
					<input type="number" aria-label="Panier moyen" name="average" value={customer.average} />
				</label>
				<label>
					Achat toltale :
					<input type="number" aria-label="Achat toltale" name="total" value={customer.total} />
				</label>

				<button type="submit">Mettre à jour</button>
				<a href="/customers" class="return">Retour</a>
			</form>
		{:else}
			<p>Chargement du client...</p>
		{/if}

		{#if error}
			<p>{error}</p>
		{/if}
	</div>
</div>

<style>
	.main {
		display: flex;
	}

	.aside-container {
		margin-left: 10px;
		margin-top: 500px;
	}

	.form-container {
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin-top: 5vh;
	}

	form {
		margin-top: 5vh;
		max-width: 400px;
	}

	label {
		display: block;
		margin-bottom: 2vh;
		font-weight: bold;
	}

	input {
		width: 100%;
		padding: 10px;
		margin-bottom: 16px;
	}

	button, a , .return{
		padding: 10px;
		width: 200px;
		background-color: #f8fd00;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
		border-radius: 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		margin-top: 5vh;
		color: black;
		font-size: 16px;
	}

	a {
		color: white;
	}

	button:hover,
	.return:hover {
		box-shadow: none;
	}
</style>
