<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Aside from '$lib/components/Aside.svelte';
	import { fetchCustomer} from '$lib/utils';
	import { goto } from '$app/navigation';

	// Form data object
	let formData = {
		reference: '',
		name: '',
		orders: '',
		average: '',
		total: '',
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
	const namePattern = '^[a-zA-ZÀ-ÿ\\s]{1,100}$';

	const ordersPattern = '^[0-9]{1,6}$';
	const averagePattern = '^[0-9]{1,6}$';
	const totalPattern = '^[0-9]{1,6}$';

	const validateForm =(): string[] => {
		const errors: string[] = [];

		if (!new RegExp(referencePattern).test(formData.reference)) {
			errors.push('La référence doit contenir 8 caractères alphanumériques.');
		}
		if (!new RegExp(namePattern).test(formData.name)) {
			errors.push('Le nom doit contenir entre 1 et 100 caractères.');
		}
		if (!new RegExp(ordersPattern).test(formData.orders)) {
			errors.push('Le Nombre de commandes doit être un nombre entier positif.');
		}
		if (!new RegExp(averagePattern).test(formData.average)) {
			errors.push('Le panier moyen doit être un nombre entier positif en %');
		}
		if (!new RegExp(totalPattern).test(formData.total)) {
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
			// Convert total to number before sending to the server
			const data = await fetchCustomer({
				...formData,
				orders:Number(formData.orders),
				total: Number(formData.total),
				average: Number(formData.average)
			});
			console.log('Backend Response:', data);
			goto('/customers');
		} catch (error) {
			errorMessages = ['Merci de vérifier les informations saisies.'];
		}	
	};

	// Function to determine if a class should be added based on the validation pattern and value of the input
	function selectedClass(pattern: string, value: string) {
		return value !== '' && !new RegExp(pattern).test(value) ? 'invalid' : '';
	}

</script>


<div class="main">
	<div class="header-container">
		<Header />
	</div>
	<div class="aside-container">
		<Aside />
	</div>
	<div class="form-container">
		<!-- Check error after submit form -->
		<form on:submit|preventDefault={() => { showErrors = true; postForm(); }}>
			<h1>Ajouter un client ?</h1>
			<label for="reference">Numéro client :</label>
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
			<label for="name">Prénom, Nom :</label>
			<input 
				type="text" 
				id="name" 
				aria-label="Prénom, Nom" 
				bind:value={formData.name}
				class={selectedClass(namePattern, formData.name)}
			/>
			<label for="orders">Nombre de commandes :</label>
			<textarea
				id="orders"
				aria-label="Description"
				bind:value={formData.orders}
				class={selectedClass(ordersPattern, formData.orders)}	
			/>
			<label for="average">Panier moyen :</label>
			<input
				type="number"
				id="average"
				aria-label="average"
				placeholder="Panier moyen en %"
				bind:value={formData.average}
				class={selectedClass(averagePattern, formData.average)}
				
			/>
			<label for="total">Achat totale :</label>
			<input
				type="number"
				id="total"
				aria-label="Prix"
				placeholder="Achat totale en €"
				bind:value={formData.total}
				class={selectedClass(totalPattern, formData.total)}
				
			/>
			{#if showErrors && errorMessages.length > 0}
				<div class="error-container">
					{#each errorMessages as message (message)}
						<p class="error">{message}</p>
					{/each}
				</div>
			{/if}
			<button type="submit" aria-label="Ajouter le client">Ajouter le client</button>
			<a href="/customers" class="return">Retour</a>
		</form>
	</div>
</div>

<style>

	.header-container {
		position:fixed;
		left: 5vh;
		width: 95%;
	}

	.aside-container {
		margin-top: 400px;
		position:fixed;
		left: 4vh;	
	}

	.form-container {
		display: flex;
		flex-wrap: wrap;
		margin-top: 5vh;
	}

	form {
		width: 400px;
		margin-bottom: 2vh;
	}

	label {
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

	input, textarea {
		width: 100%;
		padding: 10px;
		margin-bottom: 16px;
	}

	textarea {
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
		background-color: #F8FD00;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
		border-radius: 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		margin-top: 5vh;
		color: black;
		font-size: 16px;
	}

	button:hover,
	.return:hover {
		box-shadow: none;
	}
	
	div {
		display: flex;
		justify-content: space-around;
		text-align: center;
	}
</style>
