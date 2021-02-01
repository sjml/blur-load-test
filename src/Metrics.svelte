<script lang="ts">
    import { imageSizeStore, controlSettingsStore, encodedImageResponseSize } from "./stores";

    let minSize: number;
    let maxSize: number;
    let averageSize: number;

    function getDisplayByteCount(num: number) {
        if (num < 1024) {
            return `${num} bytes`;
        }
        else {
            return `${(num / 1024).toFixed(3)} KB`;
        }
    }

    $: {
        const sizes = $imageSizeStore[
            `format_${$controlSettingsStore.tinyFormat}`][
            `quality_${$controlSettingsStore.tinyQuality}`][
            `size_${$controlSettingsStore.tinySize}`
        ];
        minSize = Math.min(...sizes);
        maxSize = Math.max(...sizes);
        averageSize = Math.ceil(sizes.reduce((a, b) => (a + b)) / sizes.length);
    }
</script>

<div class="metrics">
    <h3>Metrics</h3>
    the preview images with selected options:
    <table>
        <tr><td><strong>smallest</strong></td><td>{getDisplayByteCount(minSize)}</td></tr>
        <tr><td><strong>largest</strong></td><td>{getDisplayByteCount(maxSize)}</td></tr>
        <tr><td><strong>average</strong></td><td>{getDisplayByteCount(averageSize)}</td></tr>
        <tr><td><strong>full set as base64</strong></td><td>{getDisplayByteCount($encodedImageResponseSize)}</td></tr>
    </table>
</div>

<style>
    .metrics {
        margin-left: 10px;
    }
    table {
        margin-top: 5px;
        border-collapse: collapse;
    }
    table tr {
        border-bottom: 1px solid rgb(134, 134, 134);
    }
    table tr:last-child {
        border-bottom: none;
    }
    table td {
        padding: 5px 0 5px 10px;
    }
</style>
