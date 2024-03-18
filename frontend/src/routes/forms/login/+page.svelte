<script lang="ts">
	export let email = '';
	export let password = '';
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';

	export const error = writable('');
	export const success = writable(false);

	const handleLogin = async () => {
		try {
			const response = await fetch(`http://localhost:3000/auth/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email, password })
			});

			if (response.ok) {
				const responseData = await response.json();
				success.set(true);
				console.log('Login successful:', responseData);

				// Send the JWT token in local storage
				localStorage.setItem('is_logged_in', 'true');

				// Verify the token in console
				console.log('Stored JWT token:', localStorage.getItem('access_token'));

				// Check if explicit redirection is necessary (status code 303)
				if (response.status === 303 && responseData.redirect) {
					goto(responseData.redirect);
				} else {
					// Redirect to home page if no explicit redirection is provided
					goto('/');
				}
			} else {
				console.log('Login failed:', response.status);
				const responseData = await response.json();
				error.set(responseData.error || "Erreur d'authentification");
			}
		} catch (err) {
			console.error('Erreur lors de la requête POST:', err);
			error.set('Erreur lors de la connexion au serveur');
		}
	};

	let passwordVisible = false;

	// Function to toggle password visibility
	const togglepasswordVisible = () => {
		passwordVisible = !passwordVisible;
		const passwordInput = document.getElementById('password') as HTMLInputElement;
		passwordInput.type = passwordVisible ? 'text' : 'password';
	};
</script>

<main>
	<form on:submit|preventDefault={handleLogin} class="formulary">
		<label for="email">
			<span>Email :</span>
			<input type="email" bind:value={email} required />
		</label>

		<label for="password">
			<span>Mot de passe :</span>

			<div class="password">
				<input type="password" id="password" bind:value={password} required />
				<!-- The type="button" attribute ensures that clicking this button does not submit 
          the form -->
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
		</label>

		<div class="submit">
			<button type="submit"> Se connecter</button>
			<a href="/forms/register">
				<p>Pas encore inscrit ?</p>
			</a>
		</div>
	</form>
</main>

<style>
	main {
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
		margin-bottom: 5vh;
	}

	span {
		font-weight: bold;
		display: block;
		margin-bottom: 0.5rem;
	}

	input {
		width: 100%;
		padding: 10px;
	}

	.password {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.submit {
		margin-top: 1rem;
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
