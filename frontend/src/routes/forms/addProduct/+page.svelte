<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Aside from '$lib/components/Aside.svelte';
	import { fetchData } from '$lib/utils';

	// Function to handle form submission
	const postForm = async () => {
		try {
			localStorage.setItem('is_logged_in', 'true');
			const data = await fetchData('/products', 'POST', formData);
			console.log('Backend Response:', data);
		} catch (error) {
			console.error('Error during POST request:', error);
		}
	};

	// Form data object
	let formData = {
		image: '',
		name: '',
		description: '',
		category: '',
		price: ''
	};
</script>

<Header />
<div class="main">
	<div class="aside-container">
		<Aside />
	</div>
	<div class="form-container">
		<form on:submit|preventDefault={postForm}>
			<label for="image">Image :</label>
			<input type="file" class="image" id="image" bind:value={formData.image} />

			<label for="name">Nom :</label>
			<input type="text" id="name" bind:value={formData.name} />

			<label for="description">Description :</label>
			<textarea id="description" bind:value={formData.description} />

			<label for="category">Catégorie :</label>
			<select id="category" bind:value={formData.category}>
				<option value="">Choisir une catégorie :</option>
				<option value="electronique">Electronique</option>
				<option value="vetement">Vêtement</option>
				<option value="livre">Livre</option>
			</select>

			<label for="price">Prix :</label>
			<input type="number" id="price" bind:value={formData.price} />

			<button type="submit">Ajouter le produit</button>
		</form>
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
	 .image {
		text-decoration: none;
	 }
	.form-container {
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	form {
		max-width: 400px;
		margin: auto;
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

    button {
		padding: 10px;
		width: 200px;
		background-color: #FD6060;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
		border-radius: 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
	

	button:hover {
		box-shadow: none;
	}
</style>

