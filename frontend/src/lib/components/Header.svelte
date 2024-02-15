<header class="header">
	<div class="search">
		<i class="fa-solid fa-house"></i>
		<i class="fa-solid fa-magnifying-glass"></i>
		<input type="text" placeholder="Search" />
		<i class="fa-solid fa-user"></i>
	</div>
</header>

<style>

	.header {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 5vh;
	}

	.fa-magnifying-glass{
		width: 30px;
	}

	.fa-house{
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

    .fa-user{
		color: red;
		padding-left: 30px;
	}

</style>
