<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import Aside from '$lib/components/Aside.svelte';
	import ButtonDelete from '$lib/components/ButtonDelete.svelte';
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

<Header />
<div class="main">
	<div class="aside-container">
		<Aside />
	</div>
	<div class="container">
		<div class="button-container">
			<a href="/forms/addProduct" class="add">ajouter un produit</a>
		</div>
		<div class="list-container">
			<h1 class="title">Liste des produits</h1>
			{#if error}
				<p>{error}</p>
			{/if}
			<ul>
				{#each products as product}
					<li>
						<div class="button-container">
							<div class="card-product">
								<a href="/products/{product.id}" class="productId">
									<span class="click">Cliquez pour Modifier</span>
									<img src={product.image} alt={product.name} class="image" />
									<h2 class="name">{product.name}</h2>
									<p>Référence : {product.reference}</p>
									<p>Description : {product.description}</p>
									<div class="product-button">
										<p>Stock : {product.stock}</p>
										<p>Prix : {product.price + ' €'}</p>
									</div>
								</a>
							</div>
							<ButtonDelete id={product.id} on:productDeleted={handleProductDeleted} />
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style>
	.main {
		display: flex;
	}
	
	.container {
		display: flex;
		margin: 0 auto;
		flex-direction: column;
		/* margin: 0 auto; */
	}

	.title {
		font-size: 1.5rem;
		margin-bottom: 20px;
		font-weight: bold;
		color: black;
	}

	.aside-container {
		margin-left: 10px;
		margin-top: 500px;
	}

	.card-product {
		padding: 20px;
		border-radius: 20px;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
		border: solid 1px black;	
	}

	.card-product:hover {
		box-shadow: none;
	}

	.productId {
		font-size: 1.5rem;
		font-weight: bold;
		color: black;
	}

	.image {
		display: flex;
		align-items: center;
		margin: 2vh;
		object-fit: cover;
		border-radius: 20px;
		width: 280px;
		height: 250px;
	}

	.product-button {
		font-weight: bold;
		text-align: right;
		padding: 0.3rem;
		background-color: #fd6060;
		border-radius: 10px;
		color: white;
	}

	.list-container {
		display: flex;
		align-items: center;
		flex-direction: column;
		margin-top: 5vh;
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
		background-color: #fd6060;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
		border-radius: 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		margin-top: 5vh;
		text-align: center;
		margin-top: 10vh;
	}

	.click {
		color: #fd6060;
		text-decoration: underline;
	}

	a {
		color: white;
	}

	.add:hover {
		box-shadow: none;
	}

	ul {
		list-style-type: none;
	}

	@media (max-width: 376px) {
		
		.container {
			width: 100%;
		}

		.card-product {
			width: 100%;
		}

		.image {
			width: 180px;
			height: 150px;
		}

		.product-button {
			width: 100%;
		}

		
	}
</style>
