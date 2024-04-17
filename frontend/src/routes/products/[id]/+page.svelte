<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { fetchById, updateProduct } from '$lib/utils';
	import Header from '$lib/components/Header.svelte';
	import Aside from '$lib/components/Aside.svelte';

	let product: any;
	let error: any;

	onMount(async () => {
		const { params } = $page;
		product = await fetchById(params.id);
	});

	async function handleProductUpdate(event: any) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const updatedProduct = {
			reference: formData.get('reference'),
			name: formData.get('name'),
			description: formData.get('description'),
			stock: formData.get('stock'),
			price: formData.get('price')
		};
		try {
			await updateProduct(product.id, updatedProduct);
			product = await fetchById(product.id); // reload the product
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
		{#if product}
			<h1>Modifier</h1>
			<form on:submit={handleProductUpdate}>
				<label>
					Référence :
					<input type="text" aria-label="référence de l'article" name="reference" value={product.reference} />
				</label>
				<label>
					Nom :
					<input type="text" aria-label="nom de l'article" name="name" value={product.name} />
				</label>
				<label>
					Description :
					<textarea id="description" aria-label="Description" name="description" value={product.description} />
				</label>
				
				<label>
					Stock :
					<input type="number" aria-label="stock de l'article" name="stock" value={product.stock} />
				</label>
				<label>
					Prix :
					<input type="number" aria-label="prix de l'article" name="price" value={product.price} />
				</label>

				<button type="submit">Mettre à jour</button>
				<a href="/products" class="return">Retour</a>
			</form>
		{:else}
			<p>Chargement du produit...</p>
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

	input, textarea {
		width: 100%;
		padding: 10px;
		margin-bottom: 16px;
	}

	textarea {
		height: 100px;
	}
	button, a , .return{
		padding: 10px;
		width: 200px;
		background-color: #fd6060;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
		border-radius: 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		margin-top: 5vh;
		color: white;
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
