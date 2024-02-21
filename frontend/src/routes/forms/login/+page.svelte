<!-- src/routes/Login.svelte -->

<script context="module">
  export let email = '';
  export let password = '';
  import { writable } from 'svelte/store';
  export const error = writable('');

  import { onMount } from 'svelte';

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:3000/merchant/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        window.location.href = '/'; // Redirigez l'utilisateur après une connexion réussie
      } else {
        const responseData = await response.json();
        error.set(responseData.error || "Erreur d'authentification");
      }
    } catch  {
      console.error('Erreur lors de la requête POST:', error);
	   error.set("Erreur lors de la connexion au serveur");
    }
  };
</script>

<main>
  {#if $error}
    <p style="color: red">{ $error }</p>
  {/if}

  <form on:submit|preventDefault={handleSubmit} class="formulary">
    <label>
      <span>Email :</span>
      <input type="email" bind:value={email} required />
    </label>

    <label>
      <span>Mot de passe :</span>
      <input type="password" bind:value={password} required />
    </label>

    <div class="submit">
      <button type="submit">Se connecter</button>
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
        padding: 0.5rem;
        border: 1px solid #bdc3c7;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .submit {
        margin-top: 1rem;
    }

    button {
        padding: 0.5rem 1rem;
        background-color: #3498db;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
    }

    button:hover {
        background-color: #2980b9;
    }
</style>