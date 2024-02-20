<script lang="ts">
	export let label = '';
	export let customColor = '';
	export let color = '';
	export let icone = '';
</script>

<button
	style="background-color: {customColor};
  color: {color};"
	on:click={() => console.log('Bouton cliqué')}
>
	{#if icone}
		<div class="icon">
			<i class={icone}></i>
		</div>
	{/if}
	{label}
</button>

<style>
	button {
		border: none;
		border-radius: 50px;
		color: black;
		cursor: pointer;
		font-size: 16px;
		height: 140px;
		width: 140px;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	button:hover {
		box-shadow: none;
	}

	.icon {
		margin-bottom: 10px; 
	}
</style>
