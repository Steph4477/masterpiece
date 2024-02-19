<script>
	import Aside from '$lib/components/Aside.svelte';
	let formData = {
		nom: '',
		prenom: '',
		email: '',
		motDePasse: '',
		confirmationMotDePasse: '',
		siret: ''
	};

	function handleSubmit() {
		console.log('Formulaire de données:', formData);
	}
</script>

<div class="container">
	<Aside />
	<form on:submit|preventDefault={handleSubmit}>
		<label for="nom">Nom :</label>
		<input type="text" id="nom" bind:value={formData.nom} required />

		<label for="prenom">Prénom :</label>
		<input type="text" id="prenom" bind:value={formData.prenom} required />

		<label for="email">Email :</label>
		<input type="email" id="email" bind:value={formData.email} required />

		<label for="motDePasse">Mot de passe :</label>
		<input type="password" id="motDePasse" bind:value={formData.motDePasse} required />

		<label for="confirmationMotDePasse">Confirmer le mot de passe :</label>
		<input
			type="password"
			id="confirmationMotDePasse"
			bind:value={formData.confirmationMotDePasse}
			required
		/>

		<label for="siret">SIRET :</label>
		<input type="text" id="siret" bind:value={formData.siret} required />

		<button type="submit">Soumettre</button>
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
		padding: 8px;
		margin-bottom: 16px;
	}

	button {
		padding: 8px 16px;
		background-color: #4caf50;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	button:hover {
		background-color: #45a049;
	}
</style>
