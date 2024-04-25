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
			localStorage.setItem('is_logged_in', 'true');
			// Redirect to success page
			goto('/success');
		} catch (error) {
			errorMessages = ["Mot de passe ou email invalides."];
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
		margin-top: 150px;
		margin-left: 10px;
	}

	input:focus {
		outline: none;
	}

	.invalid {
		border: 1px solid red;
	}

	.form-container {
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		text-align: center;
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

	.formulary {
		max-width: 400px;
		margin: 2rem;
		padding: 2rem;
		border-radius: 8px;
	}

	label {
		display: block;
		font-weight: bold;
		margin-top: 5vh;
	}

	input {
		width: 100%;
		padding: 10px;
	}

	.error{
		color: red;
		margin-top: 5vh;
	}

	.password {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.submit {
		margin-top: 5vh;
	}

	button {
		padding: 10px;
		background-color: #4caf50;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		color: white;
	}

	button:hover {
		background-color: #45a049;
	}
</style>