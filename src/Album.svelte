<script lang="ts">
    import { imageDataStore } from "./stores";

    import Photo from "./Photo.svelte";
</script>

<h2>Images</h2>

<div class="photos">
    {#each $imageDataStore.inputImages as img}
        <Photo img={img} />
    {/each}
</div>

<style>
    .photos {
        display: flex;
        flex-wrap: wrap;
    }
</style>
