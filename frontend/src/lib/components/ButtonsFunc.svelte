<script lang="ts">
	export let label = '';
	export let customColor = '';
	export let color = '';
	export let icone = '';
	export let href = '';

	let isLoggedIn = typeof window !== 'undefined' && window.localStorage.getItem('accessToken');
    href = isLoggedIn ? href : '';
</script>

<a {href}>
	<button
		style="background-color: {customColor}; color: {color};"
	>
		{#if icone}
			<div class="icon">
				<i class={icone}></i>
			</div>
		{/if}
		{label}
	</button>
</a>

<style>
	button {
		border: none;
		border-radius: 20px;
		color: black;
		cursor: pointer;
		font-size: 16px;
		height: 100px;
		width: 100px;
		margin: 2vh;
		
		
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
