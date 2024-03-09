<script lang="ts">
	import { goto } from '$app/navigation';

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
			console.log('Réponse du backend:', data);

			// If registration is successful, redirects to login/success page
			if (response.ok) {
				goto('/forms/login/success');
			}
		} catch (error) {
			console.error('Erreur lors de la requête POST:', error);
		}
	};
	
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
	
	let formData = {
		lastName: '',
		firstName: '',
		email: '',
		password: '',
		passwordValidation: '',
		siret: '',
		headQuarter: ''
	};

	let passwordVisible = false;
	let passwordValidationVisible = false;

</script>

<div class="container">
	<form on:submit|preventDefault={postForm}>
		<label for="lastName">Nom :</label>
		<input type="text" id="lastName" bind:value={formData.lastName} required />

		<label for="firstName">Prénom :</label>
		<input type="text" id="firstName" bind:value={formData.firstName} required />

		<label for="email">Email :</label>
		<input type="email" id="email" bind:value={formData.email} required />
		<label for="password">Mot de passe :</label>
		<div class="password">
			<input type="password" id="password" bind:value={formData.password} required />
			<button class="eye" on:click={togglePasswordVisibility}>
				{#if passwordVisible}
					<i class="fa-solid fa-eye"></i>
				{:else}
					<i class="fa-solid fa-eye-slash"></i>
				{/if}
			</button>
		</div>
		<label for="passwordValidation">Confirmer le mot de passe :</label>
		<div class="password">
			<input
				type="password"
				id="passwordValidation"
				bind:value={formData.passwordValidation}
				required
			/>
			<button class="eye" on:click={togglePasswordValidationVisibility}>
				{#if passwordValidationVisible}
					<i class="fa-solid fa-eye"></i>
				{:else}
					<i class="fa-solid fa-eye-slash"></i>
				{/if}
			</button>
		</div>

		<label for="siret">SIRET :</label>
		<input type="text" id="siret" bind:value={formData.siret} required />

		<label for="headQuarter">Adresse du siège social :</label>
		<input type="text" id="headQuarter" bind:value={formData.headQuarter} required />

		<button type="submit">Soumettre</button>
		<div class="login">
			<a href="/forms/login"><p>Déjà un compte ?</p></a>
		</div>
	</form>
</div>

<style>
	.container {
		display: flex;
	}

	form {
		max-width: 400px;
		margin: auto;
	}

	label {
		display: block;
		margin-bottom: 8px;
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

	button {
		padding: 10px;
		background-color: #4caf50;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	button:hover {
		background-color: #45a049;
	}

	.password {
		display: flex;
	}

	.login {
		width: 100%;
		height: 15px;
	}
</style>
