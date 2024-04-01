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
		stock: '',
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
				price: Number(formData.price),
				stock: Number(formData.stock)
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
			<input
				type="file"
				id="image"
				aria-label="ajouter une image"
				on:change={handleFileChange}
				accept=".png, .jpg, .jpeg"
			/>

			<label for="name">Nom :</label>
			<input type="text" id="name" aria-label="Nom" bind:value={formData.name} required />
			<label for="description">Description :</label>
			<textarea id="description" aria-label="Description" bind:value={formData.description} />

			<label for="category">Catégorie :</label>
			<select id="category" aria-label="Catégorie" bind:value={formData.category}>
				<option value="">Choisir une catégorie :</option>
				<option value="electronique">Electronique</option>
				<option value="vetement">Vêtement</option>
				<option value="livre">Livre</option>
				<option value="autre">Autre</option>
			</select>

			<label for="stock">Stock :</label>
			<input
				type="number"
				id="stock"
				aria-label="Stock"
				placeholder="Quantité de stock"
				bind:value={formData.stock}
			/>

			<label for="price">Prix :</label>
			<input
				type="number"
				id="price"
				aria-label="Prix"
				placeholder="Prix en €"
				bind:value={formData.price}
			/>

			<button type="submit" aria-label="Ajouter le produit">Ajouter le produit</button>
			<a href="/products" class="return">Retour</a>
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
		margin-top: 5vh;
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

	input,
	select,
	textarea {
		width: 100%;
		padding: 10px;
		margin-bottom: 16px;
	}

	textarea {
		height: 100px;
	}
	button,
	a,
	.return {
		padding: 10px;
		width: 200px;
		background-color: #fd6060;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
		border-radius: 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		margin-top: 5vh;
		color: white;
		font-size: 16px;
	}

	a {
		color: white;
	}

	button:hover,
	.return:hover {
		box-shadow: none;
	}
</style>
