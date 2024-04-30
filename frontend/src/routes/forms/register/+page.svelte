<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Aside from '$lib/components/Aside.svelte';
	import Header from '$lib/components/Header.svelte';
	import { fetchData } from '$lib/utils';

	let errorMessages: string[] = [];
	let showErrors = false;

	// Regex patterns for validation as strings
	const namePattern = '^[a-zA-ZÀ-ÿ\\- ]{2,30}$';
	const emailPattern = '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$';
	const passwordPattern = '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$';
	const siretPattern = '^[0-9]{14}$';

	const postForm = async () => {
		// Check if any of the fields are invalid
		!new RegExp(namePattern).test(formData.lastName) ||
			!new RegExp(namePattern).test(formData.firstName) ||
			!new RegExp(emailPattern).test(formData.email) ||
			!new RegExp(passwordPattern).test(formData.password) ||
			!formData.passwordValidation ||
			!new RegExp(siretPattern).test(formData.siret);

		// Check password match
		if (formData.password !== formData.passwordValidation) {
			errorMessages.push('Les mots de passe ne correspondent pas.');
		}

		try {
			const data = await fetchData('/register', 'POST', formData);
			// Send if connected in local storage for icon display
			
			// Redirect to login page
			goto('/forms/login');
		} catch (error) {
			showErrors = true;
			errorMessages.push('Un compte avec le même SIRET ou email existe déjà.');
			return errorMessages;
		}
	};

	// Form data object
	let formData = {
		lastName: '',
		firstName: '',
		email: '',
		password: '',
		passwordValidation: '',
		siret: ''
	};

	// Variables to control password visibility
	let passwordVisible = false;
	let passwordValidationVisible = false;

	// Function to toggle password visibility
	const togglePasswordVisibility = () => {
		passwordVisible = !passwordVisible;
		const passwordInput = document.getElementById('password') as HTMLInputElement;
		passwordInput.type = passwordVisible ? 'text' : 'password';
	};

	// Function to toggle password validation visibility
	const togglePasswordValidationVisibility = () => {
		passwordValidationVisible = !passwordValidationVisible;
		const passwordValidationInput = document.getElementById(
			'passwordValidation'
		) as HTMLInputElement;
		passwordValidationInput.type = passwordValidationVisible ? 'text' : 'password';
	};

	// On component mount, check if there are errors to show
	onMount(() => {
		if (errorMessages.length > 0) {
			showErrors = true;
		}
	});

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
		<form on:submit|preventDefault={postForm}>
			<label for="lastName">Prénom :</label>
			<input
				type="text"
				id="lastName"
				bind:value={formData.lastName}
				pattern={namePattern}
				class={selectedClass(namePattern, formData.lastName)}
				title="Le prénom doit contenir entre 2 et 30 caractères alphabétiques."
			/>

			<label for="firstName">Nom :</label>
			<input
				type="text"
				id="firstName"
				bind:value={formData.firstName}
				pattern={namePattern}
				class={selectedClass(namePattern, formData.firstName)}
				title="Le nom doit contenir entre 2 et 30 caractères alphabétiques."
			/>

			<label for="email">Email :</label>
			<input
				type="email"
				id="email"
				bind:value={formData.email}
				pattern={emailPattern}
				class={selectedClass(emailPattern, formData.email)}
				title="Entrez une adresse email valide."
			/>

			<label for="password"> Mot de passe :</label>

			<div class="password">
				<input
					type="password"
					id="password"
					bind:value={formData.password}
					pattern={passwordPattern}
					class={selectedClass(passwordPattern, formData.password)}
					title="Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule et un chiffre."
				/>
				<button
					type="button"
					class="eye"
					aria-label="Toggle password visibility"
					on:click={togglePasswordVisibility}
				>
					{#if passwordVisible}
						<i class="fa-solid fa-eye"></i>
					{:else}
						<i class="fa-solid fa-eye-slash"></i>
					{/if}
				</button>
			</div>

			<label for="passwordValidation">Confirmation mot de passe :</label>
			<div class="password">
				<input
					type="password"
					id="passwordValidation"
					bind:value={formData.passwordValidation}
					pattern={passwordPattern}
					class={selectedClass(passwordPattern, formData.passwordValidation)}
					title="Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule et un chiffre."
				/>
				<button
					type="button"
					class="eye"
					aria-label="Toggle password visibility"
					on:click={togglePasswordValidationVisibility}
				>
					{#if passwordValidationVisible}
						<i class="fa-solid fa-eye"></i>
					{:else}
						<i class="fa-solid fa-eye-slash"></i>
					{/if}
				</button>
			</div>

			<label for="siret"> N° de SIRET :</label>
			<input
				type="text"
				id="siret"
				bind:value={formData.siret}
				pattern={siretPattern}
				class={selectedClass(siretPattern, formData.siret)}
				title="Le numéro SIRET doit être composé de 14 chiffres."
			/>

			{#if showErrors && errorMessages.length > 0}
				<div class="error-container">
					{#each errorMessages as message (message)}
						<p class="error">{message}</p>
					{/each}
				</div>
			{/if}

			<button class="submit" type="submit"> Soumettre </button>
			<div class="login">
				<a href="/forms/login"><p>Vous avez déjà un compte?</p></a>
			</div>
		</form>
	</div>
</div>

<style>
	.main {
		display: flex;
	}

	.aside-container {
		margin-left: 10px;
		margin-top: 400px;
	}

	input:focus {
		outline: none;
	}

	.invalid {
		border: 1px solid red;
	}

	.form-container {
		display: flex;
		margin-top: 5vh;
		width: 90%;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	label {
		display: block;
		margin-bottom: 2vh;
		font-weight: bold;
	}

	input {
		padding: 10px;
		margin-bottom: 16px;
		
	}

	.error {
		color: red;
		margin-top: 5px;
	}

	.error-container {
		margin-top: 10px;
	}
	.eye {
		position: absolute;
		border: none;
		cursor: pointer;
		background: none;
		color: black;
	}

	.fa-eye,
	.fa-eye-slash {
		font-size: 1rem;
		margin-left: -3rem;
		cursor: pointer;
	}

	.eye:hover {
		background: white;
		color: black;
	}

	button {
		padding: 10px;
		background-color: #4caf50;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
	.submit {
		width: 80%;
		color: white;
	}

	button:hover {
		background-color: #45a049;
	}

	.passwordPattern {
		position: relative;
	}

	.login {
		width: 100%;
		height: 15px;
	}

	.error-container {
		margin-top: 10px;
	}
</style>
