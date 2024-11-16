<script lang="ts">
	import { goto } from '$app/navigation';
	import Aside from '$lib/components/Aside.svelte';
	import Header from '$lib/components/Header.svelte';
	import { fetchData } from '$lib/utils';

	export let email = '';
	export let password = '';

	//Regex patterns for validation as strings
	const emailPattern = '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$';
	const passwordPattern = '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$';

	let errorMessages: any = [];

	const handleLogin = async () => {
		// Check if any of the fields are invalid
		if (!new RegExp(emailPattern).test(email) || !new RegExp(passwordPattern).test(password)) {
			errorMessages = ["Veuillez vérifier l'email ou le mot de passe."];
			return errorMessages;
		}
		try {
			const responseData = await fetchData('/login', 'POST', { email, password });
			// Send if connected in local storage
			localStorage.setItem('accessToken', responseData.accessToken);
			// Redirect to success page
			goto('/success');
		} catch (error) {
			errorMessages = ['Mot de passe ou email invalides.'];
		}
	};

	let passwordVisible = false;

	// Function to toggle password visibility
	const togglepasswordVisible = () => {
		passwordVisible = !passwordVisible;
		const passwordInput = document.getElementById('password') as HTMLInputElement;
		passwordInput.type = passwordVisible ? 'text' : 'password';
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
		<form on:submit|preventDefault={handleLogin} class="formulary">
			<label for="email">Email :</label>
			<input
				type="email"
				id="email"
				bind:value={email}
				pattern={emailPattern}
				class={selectedClass(emailPattern, email)}
			/>

			<label for="password">Mot de passe :</label>
			<div class="password">
				<input
					type="password"
					id="password"
					bind:value={password}
					pattern={passwordPattern}
					class={selectedClass(passwordPattern, password)}
				/>

				<button
					type="button"
					class="eye"
					on:click={togglepasswordVisible}
					aria-label="Toggle password visibility"
				>
					{#if passwordVisible}
						<i class="fa-solid fa-eye"></i>
					{:else}
						<i class="fa-solid fa-eye-slash"></i>
					{/if}
				</button>
			</div>
			{#if errorMessages.length > 0}
				<div>
					{#each errorMessages as errorMessage}
						<p class="error">{errorMessage}</p>
					{/each}
				</div>
			{/if}

			<button type="submit" class="submit" aria-label="Se connecter">Se connecter</button>
		</form>
	</div>
</div>

<style>
	.main {
		display: flex;
	}

	.aside-container {
		margin-left: 10px;
		margin-top: 150px;
	}

	input:focus {
		outline: none;
	}

	.invalid {
		border: 1px solid red;
	}

	.form-container {
		display: flex;
		width: 90%;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	label {
		display: block;
		margin-bottom: 2vh;
		font-weight: bold;
		margin-top: 5vh;
	}

	input {
		padding: 10px;
		
	}

	.error {
		color: red;
		
	}

	.passwordPattern {
		position: relative;
		display: flex;
		
	}

	.eye {
		position: absolute;
		right: 44%;
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
		background: none;
		color: black;
	}

	.formulary {
		margin: 2rem;
		padding: 2rem;
		border-radius: 8px;
	}

	.password {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 5vh;
	}

	.submit {
		color: white;
		width: 80%;
	}

	button {
		padding: 10px;
		background-color: #4caf50;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	button:hover {
		background-color: #45a049;
	}
	
	@media (max-width: 576px) {
		.eye{
			right: 20%;
		}
	}
</style>
