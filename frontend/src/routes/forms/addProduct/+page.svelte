<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Aside from '$lib/components/Aside.svelte';
	import { fetchData } from '$lib/utils';

	// Form data object
	let formData = {
		image: '',
		name: '',
		description: '',
		category: '',
		price: ''
	};

	// manage event when file is selected
	const handleFileChange = (event: any) => {
		// File reader is api Web for to read the file content
		const reader = new FileReader();
		// When the file is read, the event is triggered
		reader.onload = (event) => {
			// If the event target and the result are not null, we assign the result
			// to the image property of the formData object
			if (event.target && event.target.result) {
				formData.image = event.target.result as string;
			}
		};
		// Read the file as a data URL
		reader.readAsDataURL(event.target.files[0]);
	};

	// Function to handle form submission
	const postForm = async () => {
		if (localStorage.getItem('is_logged_in') !== 'true') {
			console.error('User is not logged in');
			return;
		}

		try {
			// Convert price to number before sending to the server
			const data = await fetchData('/product', 'POST', {
				...formData,
				price: Number(formData.price)
			});
			console.log('Backend Response:', data);
		} catch (error) {
			console.error('Error during POST request:', error);
		}
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
			<input type="file" id="image" on:change={handleFileChange} accept=".png, .jpg, .jpeg" />

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
				<option value="autre">Autre</option>
			</select>

			<label for="price">Prix :</label>
			<input type="number" id="price" placeholder="Prix en €" bind:value={formData.price} />

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
		background-color: #fd6060;
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
