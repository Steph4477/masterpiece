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
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Login success!');
        success.set(true);

        // Rediriger vers la page de succès
        goto('/login/success');
      } else {
        console.log('Login failed:', response.status);
        const responseData = await response.json();
        error.set(responseData.error || "Erreur d'authentification");
      }
    } catch (err) {
      console.error('Erreur lors de la requête POST:', err);
      error.set("Erreur lors de la connexion au serveur");
    }
  };
</script>

{#if $error}
  <p style="color: red">{ $error }</p>
{:else if $success}
  {goto('/forms/login/success')}
{/if}

<main>
  <form on:submit|preventDefault={handleLogin} class="formulary">
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
