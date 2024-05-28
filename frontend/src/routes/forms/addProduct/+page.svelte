<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Aside from '$lib/components/Aside.svelte';
	import { fetchDataWithMerchantId } from '$lib/utils';
	import { goto } from '$app/navigation';

	// Form data object
	let formData = {
		reference: '',
		name: '',
		description: '',
		stock: '',
		price: '',
		image: ''
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

	let errorMessages: string[] = [];
	let showErrors = false;

	// Regex patterns for validation as strings
	const referencePattern = '^[a-zA-Z0-9]{8}$';
	const namePattern = '^[a-zA-ZÀ-ÿ]{1,100}$';
	const descriptionPattern = '^[a-zA-ZÀ-ÿ0-9 ]{1,500}$';
	const stockPattern = '^[0-9]{1,6}$';
	const pricePattern = '^[0-9]{1,6}$';

	const validateForm =(): string[] => {
		const errors: string[] = [];

		if (!new RegExp(referencePattern).test(formData.reference)) {
			errors.push('La référence doit contenir 8 caractères alphanumériques.');
		}
		if (!new RegExp(namePattern).test(formData.name)) {
			errors.push('Le nom doit contenir entre 1 et 100 caractères.');
		}
		if (!new RegExp(descriptionPattern).test(formData.description)) {
			errors.push('La description doit contenir entre 1 et 500 caractères alphanumériques.');
		}
		if (!new RegExp(stockPattern).test(formData.stock)) {
			errors.push('Le stock doit être un nombre entier positif.');
		}
		if (!new RegExp(pricePattern).test(formData.price)) {
			errors.push('Le prix doit être un nombre entier positif.');
		}
		return errors;
	};

	// Function to handle form submission
	const postForm = async () => {
		// Validate the form
		const validationErrors = validateForm();

		if (validationErrors.length > 0) {
			errorMessages = validationErrors;
			showErrors = true;
			return;
		}

		try {
			// Convert price to number before sending to the server
			const data = await fetchDataWithMerchantId({
				...formData,
				price: Number(formData.price),
				stock: Number(formData.stock)
			});
			console.log('Backend Response:', data);
			goto('/products');
		} catch (error) {
			errorMessages = ['Merci de vérifier les informations saisies.'];
		}	
	};

	// Function to determine if a class should be added based on the validation pattern and value of the input
	function selectedClass(pattern: string, value: string) {
		return value !== '' && !new RegExp(pattern).test(value) ? 'invalid' : '';
	}

</script>

<Header />
<div class="main">
	<div class="aside-container">
		<Aside />
	</div>
	<div class="form-container">
		<!-- Check error after submit form -->
		<form on:submit|preventDefault={() => { showErrors = true; postForm(); }}>
			<h1>Ajouter un produit</h1>
			<label for="reference">Référence</label>
			<input
				type="text"
				id="reference"
				aria-label="Reference"
				bind:value={formData.reference}
				class={selectedClass(referencePattern, formData.reference)}
			/>
			<label for="image">Image :</label>
			<input
				type="file"
				id="image"
				aria-label="ajouter une image"
				on:change={handleFileChange}
				accept=".png, .jpg, .jpeg"
			/>
			<label for="name">Nom :</label>
			<input 
				type="text" 
				id="name" 
				aria-label="Nom" 
				bind:value={formData.name}
				class={selectedClass(namePattern, formData.name)}
			/>
			<label for="description">Description :</label>
			<textarea
				id="description"
				aria-label="Description"
				bind:value={formData.description}
				class={selectedClass(descriptionPattern, formData.description)}	
			/>
			<label for="stock">Stock :</label>
			<input
				type="number"
				id="stock"
				aria-label="Stock"
				placeholder="Quantité de stock"
				bind:value={formData.stock}
				class={selectedClass(stockPattern, formData.stock)}
				
			/>
			<label for="price">Prix :</label>
			<input
				type="number"
				id="price"
				aria-label="Prix"
				placeholder="Prix en €"
				bind:value={formData.price}
				class={selectedClass(pricePattern, formData.price)}
				
			/>
			{#if showErrors && errorMessages.length > 0}
				<div class="error-container">
					{#each errorMessages as message (message)}
						<p class="error">{message}</p>
					{/each}
				</div>
			{/if}
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

	
	.error {
		color: red;
		margin-top: 5px;
	}

	.error-container {
		margin-top: 10px;
	}

	input:focus {
		outline: none;
	}

	.invalid {
		border: 3px solid red;
	}

	input, textarea
	 {
		width: 100%;
		padding: 10px;
		margin-bottom: 16px;
	}

	textarea{
		height: 100px;
	}

	textarea:focus {
		outline: none;
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
