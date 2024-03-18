<script lang="ts">
	import { goto } from '$app/navigation';
	import Aside from '$lib/components/Aside.svelte';
	import Header from '$lib/components/Header.svelte';

	export let email = '';
	export let password = '';

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
				console.log('Login successful:', responseData);

				// Send if connected in local storage
				localStorage.setItem('is_logged_in', 'true');

				// Redirect to success page
				goto('/success');
			} else {
				alert('Echec de connection:' + response.status);
				console.log('Login failed :', response.status);
			}
		} catch (err) {
			alert('Erreur lors de la requête :' + err);
			console.error('Erreur lors de la requête POST :', err);
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

<Header />
<div class="main">
	<div class="aside-container">
		<Aside />
	</div>
	<div class="form-container">
		<form on:submit|preventDefault={handleLogin} class="formulary">
			<label for="email"> Email :</label>
			<input
				type="email"
				id="email"
				name="email"
				autocomplete="email"
				bind:value={email}
				required
			/>

			<label for="password"> Mot de passe : </label>

			<div class="password">
				<input
					type="password"
					id="password"
					name="password"
					autocomplete="current-password"
					bind:value={password}
					required
				/>
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

			<div class="submit">
				<button type="submit"> Se connecter</button>
				<a href="/forms/register">
					<p>Pas encore inscrit ?</p>
				</a>
			</div>
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
