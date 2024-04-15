<script lang="ts">
	import { goto } from '$app/navigation';
	import Aside from '$lib/components/Aside.svelte';
	import Header from '$lib/components/Header.svelte';
	import { fetchData } from '$lib/utils';

	export let email = '';
	export let password = '';

	const handleLogin = async () => {
		try {
			const responseData = await fetchData('/login', 'POST', { email, password });
			console.log('Login successful:', responseData);

			// Send if connected in local storage
			localStorage.setItem('accessToken', responseData.accessToken);

			// Redirect to success page
			goto('/');
		} catch (error) {
			console.error('Error:', error);
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
			<label for="email">Email :</label>
			<input
				type="email"
				id="email"
				name="email"
				autocomplete="email"
				aria-label="Email"
				bind:value={email}
				required
			/>

			<label for="password">Mot de passe :</label>
			<div class="password">
				<input
					type="password"
					id="password"
					name="password"
					autocomplete="current-password"
					aria-label="Mot de passe"
					bind:value={password}
					required
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