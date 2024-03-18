<script lang="ts">
	import { goto } from '$app/navigation';
	import Aside from '$lib/components/Aside.svelte';
	import Header from '$lib/components/Header.svelte';

	// Function to handle form submission
	const postForm = async () => {
		try {
			const response = await fetch('http://localhost:3000/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			console.log('Backend Response:', data);

			// If registration is successful, redirects to login/success page
			if (response.ok) {
				goto('/forms/login/success');
			}
		} catch (error) {
			console.error('Error during POST request:', error);
		}
	};

	// Form data object
	let formData = {
		lastName: '',
		firstName: '',
		email: '',
		password: '',
		passwordValidation: '',
		siret: '',
		headQuarter: ''
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
</script>

<Header />
<div class="main">
	<div class="aside-container">
		<Aside />
	</div>
	<div class="form-container">
		<form on:submit|preventDefault={postForm}>
			<label for="lastName">Prénom :</label>
			<input type="text" id="lastName" bind:value={formData.lastName} required />

			<label for="firstName">Nom :</label>
			<input type="text" id="firstName" bind:value={formData.firstName} required />

			<label for="email">Email :</label>
			<input type="email" id="email" bind:value={formData.email} required />

			<label for="password"> Mot de passe :</label>

			<div class="password">
				<input type="password" id="password" bind:value={formData.password} required />
				<button
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
					required
				/>
				<button
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
			<input type="text" id="siret" bind:value={formData.siret} required />

			<label for="headQuarter">Adresse siège social:</label>
			<input type="text" id="headQuarter" bind:value={formData.headQuarter} required />

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

	.eye {
		display: flex;
		text-align: center;
		border: none;
		cursor: pointer;
		background: white;
		color: black;
	}

	.fa-eye,
	.fa-eye-slash {
		font-size: 1rem;
		margin-left: -2rem;
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
		color: white;
	}

	button:hover {
		background-color: #45a049;
	}

	.password {
		display: flex;
		width: 100%;
	}

	.login {
		width: 100%;
		height: 15px;
	}
</style>
