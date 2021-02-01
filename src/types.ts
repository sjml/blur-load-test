export type ImageData = {
    file: string,
    width: number,
    height: number,
    aspect: number,
}

export type ImageDataDescription = {
    tinySizes: number[],
    normalSizes: string[],
    qualities: number[],
    formats: string[],
    inputImages: ImageData[],
}
