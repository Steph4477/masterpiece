<script lang="ts">
	import { fetchDeleteCustomer } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';

	export let id: string;

	const dispatch = createEventDispatcher();
	let error: string | null = null;

	async function deleteCustomer() {
		try {
			await fetchDeleteCustomer(id);
			console.log('Customer deleted');
			dispatch('customerDeleted');
		} catch (err) {
			console.error('Error during DELETE request:', err);
			error = (err as Error).message;
		}
	}
</script>
<div class="container">
	
<div class="button">
	<button on:click={deleteCustomer} class="button-delete">
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
	}

	.button-delete:hover {
		box-shadow: none;
	}
	
</style>
