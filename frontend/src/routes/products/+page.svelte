<script lang="ts">
    import { onMount} from 'svelte';
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
        } catch (err) {
            error = (err as Error).message;
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
	{#if error}
		<p>{error}</p>
	{:else}
		<div class="container">
			<div class="button-container">
				<button>
					<a href="/forms/addProduct">ajouter un produit</a>
				</button>
			</div>
			<div class="list-container">
				<span class="title"> Liste des produits </span>
				<ul>
					{#each products as product (product.id)}
						<div class="button-container">
							<div class="card-product">
								<img src={product.image} alt={product.name} />
								<h2>{product.name}</h2>
								<p>Description : {product.description}</p>
								<p>Categorie : {product.category}</p>
								<div class="product-button">
									<p>Stock : {product.stock}</p>
									<p class="product-button-price">Prix : {product.price + ' €'}</p>
								</div>
							</div>
							<ButtonDelete id={product.id}  on:productDeleted={handleProductDeleted} />
						</div>
					{/each}
				</ul>
			</div>
		</div>
	{/if}
</div>

<style>
	.main {
		display: flex;
	}

	.container {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
	}

	.title {
		font-size: 2rem;
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
		margin: 5vh;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
		border: solid 1px black;
	}

	.card-product:hover {
		box-shadow: none;
	}

	.product-button {
		font-weight: bold;
		text-align: right;
		padding: 1rem;
		background-color: #fd6060;
		border-radius: 20px;
		color: white;
		border: solid 1px black;
	}

	.list-container {
		display: flex;
		align-items: center;
		width: 100%;
		flex-direction: column;
		margin-top: 5vh;
	}

	.button-container {
		display: flex;
		width: 100%;
		justify-content: center;
	}

	button {
		padding: 10px;
		width: 200px;
		background-color: #fd6060;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
		border-radius: 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		margin-top: 5vh;
	}

	a {
		color: white;
	}

	button:hover {
		box-shadow: none;
	}

	ul {
		list-style-type: none;
	}

	img {
		width: 100%;
		height: 200px;
		object-fit: cover;
		border-radius: 10px;
		border: solid 1px black;
	}
</style>
