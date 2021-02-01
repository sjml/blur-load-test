<script lang="ts">
    import { controlSettingsStore, imageEncodedStore } from "./stores";
    import type { ImageData } from "./types";
    import { fade } from 'svelte/transition';

    export let img: ImageData;

    let dispWidth: number = 300;
    let dispHeight: number = 300;
    let sourceString: string = "";
    let showPlaceholder: boolean = true;
    let shiftDown: boolean = false;
    let mouseInside: boolean = false;

    function getSourceString(): string {
        const fname = `${img.file}.${$controlSettingsStore.tinyFormat}`;
        if ($controlSettingsStore.useEncodedData) {
            return `data:image/jpeg;base64,${$imageEncodedStore[fname]}`;
        }
        else {
            return `/img/tiny/format_${$controlSettingsStore.tinyFormat}/`
                + `quality_${$controlSettingsStore.tinyQuality}/`
                + `size_${$controlSettingsStore.tinySize}/`
                + fname;
        }
    }

    $: {
        const dispSize = $controlSettingsStore.normalSize.split("x").map(Number);
        const dispAspect = dispSize[0] / dispSize[1];
        if (img.aspect >= 1.0) {
            dispWidth = dispSize[0];
            dispHeight = dispWidth / dispAspect;
        }
        else {
            dispHeight = dispSize[1];
            dispWidth = dispHeight / dispAspect;
        }

        sourceString = getSourceString();
    }

    $: {
        switch ($controlSettingsStore.placeholderMode) {
            case "always off":
                showPlaceholder = false;
                break;
            case "always on":
                showPlaceholder = true;
                break;
            case "hold shift":
                showPlaceholder = !shiftDown;
                break;
            case "rollover":
                showPlaceholder = !mouseInside;
                break;
            default:
                break;
        }
    }

    function keydown(event: KeyboardEvent) {
        if (event.key == "Shift") {
            shiftDown = true;
        }
    }
    function keyup(event: KeyboardEvent) {
        if (event.key == "Shift") {
            shiftDown = false;
        }
    }

    function mouseenter(event: MouseEvent) {
        mouseInside = true;
    }
    function mouseleave(event: MouseEvent) {
        mouseInside = false;
    }
</script>

<div
    class="photo"
    style="width: {dispWidth}px; height: {dispHeight}px;"
    on:mouseenter={mouseenter}
    on:mouseleave={mouseleave}
    >
    <img
        class="true"
        src="/img/normal/{$controlSettingsStore.normalSize}/{img.file}.jpg" alt="{img.file}"
        width="{dispWidth}px" height="{dispHeight}px"
    />
    {#if showPlaceholder}
        <img
            class="placeholder"
            transition:fade="{{duration: 200}}"
            src={sourceString}
            alt="{img.file}"
            width="{dispWidth}px" height="{dispHeight}px"
            style={$controlSettingsStore.placeholderCSS}
        />
    {/if}
</div>

<svelte:window on:keydown={keydown} on:keyup={keyup}/>

<style>
    .photo {
        margin: 5px;
        padding: 0px;
        position: relative;
        overflow: hidden;
    }

    .placeholder {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
    }
</style>
