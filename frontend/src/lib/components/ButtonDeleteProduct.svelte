<script lang="ts">
	import { fetchDeleteProduct } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';

	export let id: string;

	const dispatch = createEventDispatcher();
	let error: string | null = null;

	async function deleteProduct() {
		try {
			await fetchDeleteProduct(id);
			console.log('Product deleted');
			dispatch('productDeleted');
		} catch (err) {
			console.error('Error during DELETE request:', err);
			error = (err as Error).message;
		}
	}
</script>
<div class="container">
	
<div class="button">
	<button on:click={deleteProduct} class="button-delete">
		<i class="fa-solid fa-trash"></i>
	</button>
</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}
	.button {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.button-delete {
		background-color: red;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
		border: none;
		color: white;
		border-radius: 50%;
		padding: 0.5rem;
		cursor: pointer;
		font-size: 20px;
	}

	.button-delete:hover {
		box-shadow: none;
	}
	
</style>
