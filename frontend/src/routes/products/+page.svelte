<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Aside from '$lib/components/Aside.svelte';
	import { fetchAllProducts } from '$lib/utils'; 

	let products: any = [];
	let error: string | null = null;

	async function fetchProducts() {
		try {
			products = await fetchAllProducts();
		} catch (err) {
			error = (err as Error).message;
		}
	}

	fetchProducts();
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
			<h1 class="list-container">liste des produits</h1>
			<ul>
				{#each products as product (product.id)}
					<li>
						<img src={product.image} alt={product.name} />
						<h2>{product.name}</h2>
						<p>{product.description}</p>
						<p>{product.category}</p>
						<p>{product.price + ' €'}</p>
					</li>
				{/each}
			</ul>
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
	.aside-container {
		margin-left: 10px;
		margin-top: 500px;
	}

	.list-container {
		display: flex;
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
</style>
