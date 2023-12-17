<script lang="ts">
    import {screen} from '../store'
    import AssetInfo from './assetInfo.svelte';
    import AssetCard from './assetCard.svelte';
</script>

{#if $screen === "assets"}
    <AssetCard/>
{:else if $screen === "assetInfo"}
    <AssetInfo/>
{:else if $screen === "send"}
    <p>send</p>
{/if}



