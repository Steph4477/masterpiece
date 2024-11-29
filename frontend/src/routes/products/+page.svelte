<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import Aside from '$lib/components/Aside.svelte';
	import ButtonDeleteProduct from '$lib/components/ButtonDeleteProduct.svelte';
	import { fetchAllProducts } from '$lib/utils';

	let products: any = [];
	let error: string | null = null;

	onMount(async () => {
		loadProducts();
	});

	async function loadProducts() {
		try {
			products = await fetchAllProducts();
			if (products.length === 0) {
				error = 'Aucun produit trouvé.';
			} else {
				error = null;
			}
		} catch (err) {
			error = (err as Error).message;
			console.error('Erreur lors de la récupération des produits :', error);
		}
	}

	// reload products after deletion
	function handleProductDeleted() {
		loadProducts();
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
				<a href="/forms/addProduct" class="add">ajouter un produit</a>
			</div>
			{#if error}
				<p>{error}</p>
			{/if}
			<div class="home">
				{#each products as product}
					<div class="card">
						<div class="modify">
							<a href="/products/{product.id}" class="productId">
								<span class="click">Cliquez pour Modifier</span>
							</a>
						</div>
						<div class="container">
							<div class="identity">
								<h3 class="name">{product.name}</h3>
								<img src={product.image} alt={product.name} class="image" />
								<p>Description : {product.description}</p>
							</div>
							<div class="detail">
								<p>Référence : {product.reference}</p>
								<div class="stock">Stock :{product.stock}</div>
								<div class="salesCount">Nombre de vente :</div>
								<div class="purchasePrice">Prix d'achat :</div>
								<div class="sellingPrice">Prix de vente :</div>
								<div class="margin">Marge :</div>
								<div class="salesRevenue">CA totale :</div>
							</div>
						</div>
						<div class="delete">
							<ButtonDeleteProduct id={product.id} on:productDeleted={handleProductDeleted} />
							<div>supprimer</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.aside-container {
		margin-top: 400px;
		position: fixed;
	}

	.header-container {
		position: fixed;
	}

	.list-container {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.home {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.card {
		display: flex;
		flex-wrap: wrap;
		/* border: solid black 1px; */
		background-color: azure;
		border-radius: 20px;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
		padding: 2vh;
		margin-bottom: 5vh;
		width: 35%;
		align-items: center;
	}

	.card:hover {
		box-shadow: none;
	}

	.modify {
		width: 100%;
		display: flex;
		justify-content: center;
		text-decoration: none;
		font-weight: bold;
		font-size: larger;
	}

	.title {
		display: flex;
		justify-content: center;
		font-size: xx-large;
		font-weight: bold;
		color: black;
		margin-top: 5vh;
		width: 100%;
	}

	.button-container {
		display: flex;
		justify-content: center;
		margin-bottom: 5vh;
		width: 100%;
		margin-top: 20vh;
	}

	.add {
		padding: 10px;
		width: 30%;
		font-size: large;
		font-weight: bold;
		background-color: #fd6060;
		color: white;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
		border: none;
		border-radius: 15px;
		cursor: pointer;
		text-align: center;
		margin-top: 5vh;
	}

	.add:hover {
		box-shadow: none;
	}

	.click {
		color: #fd6060;
		text-decoration: underline;
	}

	.container {
		display: flex;
		width: 100%;
		justify-content: space-around;
		margin-left: 5vh;
	}

	.identity {
		display: flex;
		flex-direction: column;
		width: 40%;
	}

	.image {
		height: 200px;
		object-fit: cover;
		background-color: white;
		padding: 10px;
		border-radius: 5px;
	}

	.detail {
		display: flex;
		margin-top: 20px;
		flex-direction: column;
		justify-content: space-around;
		padding: 0px 50px 5px 10px;
		border-radius: 20px;
		background-color: #fd6060;
		font-style: italic;
		color: white;
		font-weight: bold;
	}

	.delete {
		width: 50%;
		height: 30px;
		display: flex;
		align-items: center;
		font-size: 18px;
		font-weight: bold;
		color: #fd6060;
	}
</style>
