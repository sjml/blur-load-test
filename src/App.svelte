<script lang="ts">
    import type { ImageDataDescription } from "./types";

    import Album from "./Album.svelte";
    import Controls from "./Controls.svelte";

    import {
        controlSettingsStore,
        imageDataStore,
        imageSizeStore,
        imageEncodedStore,
        encodedImageResponseSize
    } from "./stores";

    async function getImgData(): Promise<ImageDataDescription> {
        const imgDataRes = await fetch("./img/imageData.json");
        if (!imgDataRes.ok) {
            return null;
        }
        const data: ImageDataDescription = await imgDataRes.json();

        return data;
    }

    async function getEncodedImages(): Promise<{string: string}> {
        const imgEncRes = await fetch(`./img/tiny/format_${$controlSettingsStore.tinyFormat}/quality_${$controlSettingsStore.tinyQuality}/size_${$controlSettingsStore.tinySize}/imageData.json`);
        if (!imgEncRes.ok) {
            return null;
        }
        $encodedImageResponseSize = parseInt(imgEncRes.headers.get("Content-Length"));
        const encodedImages = await imgEncRes.json();

        return encodedImages;
    }

    async function getImgSizes(): Promise<object> {
        const imgSizeRes = await fetch("./img/sizeReport.json");
        if (!imgSizeRes.ok) {
            return null;
        }
        const sizes = await imgSizeRes.json();

        return sizes;
    }

    getImgData().then(data => $imageDataStore = data)
        .then(() => {
             getEncodedImages().then(encodeds => $imageEncodedStore = encodeds);
        });
    getImgSizes().then(sizes => $imageSizeStore = sizes);

    controlSettingsStore.subscribe((_) => {
        getEncodedImages().then(encodeds => $imageEncodedStore = encodeds);
    });

</script>

<a
    href="https://github.com/sjml/blur-load-test"
    class="github-corner"
    aria-label="View source on GitHub">
    <svg width="120" height="120" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
    </svg>
</a>

<section class="explainer">
<h1>Blur Load Tester</h1>
    <p>
        I was intrigued by the way <a href="https://jmperezperez.com/medium-image-progressive-loading-placeholder/">
        Medium</a> and <a href="https://engineering.fb.com/2015/08/06/android/the-technology-behind-preview-photos/">
        Facebook</a> use blurred preview images while the larger versions are loading. It’s pretty clever — with a
        small enough preview image, it becomes reasonable to send it as a data element in the HTML itself instead of
        triggering another load. And with enough blurring, the artifacts from the super small image file aren’t visible.
    </p>
    <p>
        So I ended up curious about optimal image compression for such a thing. I figured it would be different at
        different display sizes of the actual image, but wanted to see for myself. JPEG is not the ideal choice for
        images this small — it has a fixed overhead that usually is negligible but becomes a real factor when you’re
        looking at just a few hundred bytes. WebP is actually great, getting down to just a hundred bytes or so with
        decent visual quality, but it’s only supported in Safari on macOS >= Big Sur. 😕 Other formats might be
        promising, but nothing has as broad support as JPEG. So here we are.
    </p>
    <p>
        Facebook went through the effort of identifying the common sections of the compressed JPEG header so they
        could save an additional 20 bytes or so… I’m not quite that interested in hyper-optimization, but of course
        there’s almost always a little more space to trim.
    </p>
    <section>
        Caveats:
        <ul>
            <li>
                Obviously on an actual web page the placeholder preview would disappear once the full image was
                loaded, but the whole point here is to look at visual quality of the placeholders, so they
                stick around with a multitude of different ways to toggle them.
            </li>
            <li>
                This page doesn’t do any checking about what image types your browser supports, so if you choose one
                of the exotic ones and all the blurred images disappear, that’s why. (The usual solution to that
                problem, <a href="https://caniuse.com/srcset"><code>srcset</code></a>, doesn’t work with data attributes,
                understandably.)
            </li>
            <li>
                Larger display sizes usually need a stronger blur to help cover the compression artifacts, and thus
                reveal some of the problems around non-standard aspect ratios. Looks like the blur scaling might need
                to be custom-fitted.
                <ul><li>
                    (I would guess this is why Medium does their version the blur in a canvas element. Might try to
                    mock up a version that does that. But maybe not; I was more interested in testing different
                    compression strategies for a longer-term project that I kind of want to get back to.)
                </li></ul>
            </li>
            <li>
                The controls take up too much space on mobile. Sorry; this is meant more for desktop use where
                you can get a good look at the visual tradeoffs, not on mobile where the data tradeoffs are more
                useful. ¯\_(ツ)_/¯
            </li>
        </ul>
    </section>
    <p>
        These photos were all taken by me at various points around the world. Consider them Creative Commons
        licensed (<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>), I guess.
    </p>
</section>
<hr/>

<main>
    {#if $imageDataStore}
        <Controls />
        {#if $imageEncodedStore}
            <Album />
        {/if}
    {/if}
</main>

<style>
    main {
        padding-bottom: 30px;
        margin: auto;
    }

    h1 {
        font-size: xx-large;
    }

    .explainer {
        max-width: 1000px;
        margin: 80px auto 10px auto;
    }

    .github-corner {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1000;
    }

    .github-corner:hover .octo-arm {
        animation: octocat-wave 560ms ease-in-out;
    }
    @keyframes octocat-wave {
        0%,
        100% {
            transform: rotate(0);
        }
        20%,
        60% {
            transform: rotate(-25deg);
        }
        40%,
        80% {
            transform: rotate(10deg);
        }
    }

    @media (max-width: 500px) {
        .github-corner:hover .octo-arm {
            animation: none;
        }
        .github-corner .octo-arm {
            animation: octocat-wave 560ms ease-in-out;
        }
    }

</style>
