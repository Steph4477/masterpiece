<script lang="ts">
	import { fetchDeleteProduct } from '$lib/utils';
	import { createEventDispatcher } from 'svelte'; 

	export let id: string;

	

	let error: string | null = null;
	const dispatch = createEventDispatcher(); 

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

<div class="button">
	<button on:click={deleteProduct} class="button-delete">
		<i class="fa-solid fa-trash"></i>
		
	</button>
</div>

<style>
	.button {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.button-delete {
		background-color: red;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
		border: none;
		color:white;
		border-radius: 50%;
		padding: 0.5rem;
		cursor: pointer;
	}
	
	.button-delete:hover{
		box-shadow: none;
	}
	
</style>
