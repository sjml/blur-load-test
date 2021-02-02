import { writable } from 'svelte/store';

import type { ImageDataDescription } from "./types";

// description of available image formats and sizes
export const imageDataStore = writable<ImageDataDescription>(null);

// image sizes calculated during export
export const imageSizeStore = writable(null);

// actual preview image data loaded as JSON
export const imageEncodedStore = writable<{string: string}>(null)

// HACKHACK -- recording how big the encoded data is
export const encodedImageResponseSize = writable<number>(0);

// default values for controls
export const controlSettingsStore = writable({
    tinyFormat: "jpg",
    tinySize: 32,
    tinyQuality: 40,
    normalSize: "320x240",
    placeholderMode: "click",
    placeholderCSS: "filter: blur(0.5em); transform: scale(1.3);",
    useEncodedData: true,
});
