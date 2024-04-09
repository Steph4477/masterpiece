<!-- <script lang="ts">
    import { onMount } from 'svelte';
    import { loadMerchantProducts } from '$lib/utils'; 

    let merchantProducts:any = []; 

    let merchantId: any;
    onMount(() => {
        const unsubscribe = merchantProducts.subscribe((value: any) => {
            merchantId = value.id;
            loadMerchantProducts(merchantId).then(productsData => {
                merchantProducts = productsData; 
            });
        });

        return unsubscribe;
    });
</script>

<h1>Produits du Marchand</h1>
<div class="button-container">
    <a href="/forms/addProduct" class="add">Ajouter un produit</a>
</div>

{#if merchantProducts.length > 0}
    <ul>
        {#each merchantProducts as product}
            <li>{product.name}</li> 
        {/each}
    </ul>
{:else}
    <p>Aucun produit trouvé pour ce marchand.</p>
{/if} -->
