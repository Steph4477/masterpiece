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
			<h1 class="title">Liste des produits</h1>
			<div class="button-container">
				<a href="/forms/addProduct" class="add">ajouter un produit</a>
			</div>
			{#if error}
				<p>{error}</p>
			{/if}
			<ul>
				{#each products as product}
					<li>
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
									<div class="price">Prix :{product.price + ' €'}</div>
									<div class="nbrvente">Nombre de vente :</div>
									<div class="prixha">Prix d'achat :</div>
									<div class="privte">Prix de vente :</div>
									<div class="marge">Marge :</div>
									<div class="ca">CA totale :</div>
								</div>
							</div>
						</div>
						<ButtonDeleteProduct id={product.id} on:productDeleted={handleProductDeleted} />
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
	.card {
		display: flex;
		flex-wrap: wrap;
		border: solid black 1px;
		border-radius:20px;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
		padding: 2vh;
		margin: 50px;
	}
	.card:hover {
		box-shadow: none;
	}

	.modify{
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

	.container{
		display: flex;
		width: 100%;
		justify-content: space-around;
	}
	.name{
		width: 100%;
		
	}
	.identity{
		display: flex;
		flex-direction: column;
		width: 40%;
	}
	.image{
		height: 200px;
		object-fit: cover;
		background-color: white;
		padding: 10px;
		border-radius: 5px;
	}
	.detail{
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

	ul {
		display: flex;
		flex-wrap: wrap;
		list-style-type: none;

	}
	
</style>
