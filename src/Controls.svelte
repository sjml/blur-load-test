<script lang="ts">
    import { imageDataStore, controlSettingsStore, imageSizeStore } from "./stores";
    import Metrics from "./Metrics.svelte";
</script>

<div class="panel">
    <div>
        <h2>Controls</h2>

        <div>
            <label>
                Use Base64 encoded data for previews
                <input type="checkbox" bind:checked={$controlSettingsStore.useEncodedData}>
            </label>
        </div>

        <hr />

        <div class="params">
            <label>
                Normal Image Size:
                <select id="normalSize" bind:value="{$controlSettingsStore.normalSize}">
                    {#each $imageDataStore.normalSizes.reverse() as sizeOption}
                        <option value="{sizeOption}">{sizeOption}</option>
                    {/each}
                </select>
            </label>

            <label>
                Tiny Image Quality:
                <select id="tinyQuality" bind:value="{$controlSettingsStore.tinyQuality}">
                    {#each $imageDataStore.qualities as qualityOption}
                        <option value="{qualityOption}">{qualityOption}</option>
                    {/each}
                </select>
            </label>

            <label>
                Tiny Image Resolution:
                <select id="tinySize" bind:value="{$controlSettingsStore.tinySize}">
                    {#each $imageDataStore.tinySizes as sizeOption}
                        <option value="{sizeOption}">{sizeOption}</option>
                    {/each}
                </select>
            </label>

            <label>
                Tiny Image Format:
                <select id="tinyFormat" bind:value="{$controlSettingsStore.tinyFormat}">
                    {#each $imageDataStore.formats as formatOption}
                        <option value="{formatOption}">{formatOption}</option>
                    {/each}
                </select>
            </label>
        </div>

        <div>
            <div>
                Placeholder Mode:
                <label>
                    <input type=radio value="rollover" bind:group={$controlSettingsStore.placeholderMode}>
                    rollover
                </label>
                <label>
                    <input type=radio value="always on" bind:group={$controlSettingsStore.placeholderMode}>
                    always on
                </label>
                <label>
                    <input type=radio value="always off" bind:group={$controlSettingsStore.placeholderMode}>
                    always off
                </label>
                <label>
                    <input type=radio value="hold shift" bind:group={$controlSettingsStore.placeholderMode}>
                    hold shift
                </label>
            </div>
        </div>

        <hr />

        <div>
            <label>
                Placeholder CSS:
                <input type="text" bind:value={$controlSettingsStore.placeholderCSS} />
            </label>
        </div>
    </div>
    {#if $imageSizeStore}
        <Metrics />
    {/if}
</div>



<style>
    hr {
        border-top: 1px solid rgb(134, 134, 134);
        border-bottom: none;
    }

    .panel {
        z-index: 200;
        background-color: white;
        position: sticky;
        top: 0;
        font-size: small;
        padding-bottom: 5px;
        display: flex;
        justify-content: center;
    }

    .params {
        width: 90%;
        display: flex;
        justify-content: space-between;
    }

    .params label {
        display: block;
        margin: 2px;
    }

    .panel div {
        margin: 5px;
    }

    input[type=text] {
        width: 80%;
        font-size: large;
    }
</style>
