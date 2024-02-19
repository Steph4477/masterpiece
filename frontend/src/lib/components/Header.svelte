<script lang="ts">
	import { isUserDiscon } from '$lib/stores/userStore';
	let toggleUserIconColor = () => {
    	$isUserDiscon = !$isUserDiscon;
  	};
</script>
  
<header class="header">
	<div class="search">
		<i class="fa-solid fa-house"></i>
		<i class="fa-solid fa-magnifying-glass"></i>
		<input type="text" placeholder="Search" />
		<button class="fa-solid fa-user" on:click={toggleUserIconColor} style="color: {$isUserDiscon ? 'red' : 'green'}"></button>
	</div>
</header>

<style>
	.header {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 5vh;
	}

	.fa-magnifying-glass {
		width: 30px;
	}

	.fa-house {
		width: 60px;
	}
    
	.search {
		display: flex;
		align-items: center;
	}
	
	.search input {
		padding: 0.5rem;
		width: 350px;
		border: gray 1px solid;
		border-radius: 0.5rem;
	}
	
	.fa-user {
		cursor: pointer; 
		background-color: white;
		border-radius: 100px;
		border: none;
		margin-left: 15px;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
		width: 60px;
		height: 60px;
		font-size: 20px
	}
	.fa-user:hover {
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	}
</style>
