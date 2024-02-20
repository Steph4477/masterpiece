<script>
	let formData = {
	  lastName: '',
	  firstName: '',
	  email: '',
	  password: '',
	  confirmPassword: '',
	  siret: '',
	  headQuarter: ''
	};
  
	const postForm = async () => {
	  try {
		const response = await fetch("http://localhost:3000/merchant", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify(formData),
		});
  
		if (!response.ok) {
		  throw new Error(`HTTP error! Status: ${response.status}`);
		}
  
		const data = await response.json();
		console.log("Réponse du backend:", data);
	  } catch (error) {
		console.error("Erreur lors de la requête POST:", error);
	  }
	};
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
	  <input type="password" id="password" bind:value={formData.password} required />
  
	  <label for="confirmPassword">Confirmer le mot de passe :</label>
	  <input
		type="password"
		id="confirmPassword"
		bind:value={formData.confirmPassword}
		required
	  />
  
	  <label for="siret">SIRET :</label>
	  <input type="text" id="siret" bind:value={formData.siret} required />
  
	  <label for="headQuarter">Adresse du siège social :</label>
	  <input type="text" id="headQuarter" bind:value={formData.headQuarter} required />
  
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
  