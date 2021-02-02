# Blur Load Tester

This is a [Svelte](https://svelte.dev) web application that you can see running
at [the GitHub pages site for the repository](https://sjml.github.io/blur-load-test/).

I was learning Svelte as I built it, so it's probably super non-idiomatic. If you are
someone who knows Svelte and has some thoughts on how I could have done it better, 
I welcome feedback. :) 

### Map
* `scripts`
    * `regenerateTestData.sh` -- all the images at various sizes and compressions are
       pre-rendered offline. Sorry if you thought this page was doing any magical 
       compression itself. 
* `public/img`
    * the `normal` directory has the photos at actual sizes at which you might want to 
    use them on a web site
    * the `tiny` directory contains the thousands of iterations of different compression
    options that either get stuffed into the `src` attribute as strings of Base64 data
    or fetched as traditional images.
    * the `imageData.json` file at the root is metadata that the rest of the frontend 
    uses to know what compression options are available and where to find the resulting images.
        * the `imageData.json` files spread through the `tiny` directory contain the 
        actual Base64 data for each image in that directory. This could live more
        centrally, but the one file would have been pretty big in that case. In reality,
        these strings would likely live in a database or something similar, and a JSON
        file is not a bad approximation of that.
        * (Note that the Base64 data in the JSON files is only used if the "Use Base64 encoded data for previews" box is checked. Otherwise the previews are just fetched as conventional images, though still very smol ones.)
* `src`
    * `src/App.svelte` -- pulls the actual image data and writes it to shared stores. 
      (Also handles perhaps too much static HTML for the welcome which could probably be 
      put elsewhere.) 
        * **Questionable**: the way I manually subscribe to 
          `controlSettingsStore` to update the encoded images. I tried and failed to get a 
          more automatic reactive way of handling this but could never get it to sync up 
          properly. 
    * `src/Album.svelte` -- From building in other toolkits I originally thought this was
    going to be far more functional than it is. Really it just makes an array of Photo 
    components. Not too shabby. 
        * **Questionable**: Does this even need to exist? 
    * `src/Photo.svelte` -- Where the magic happens. Reacts to changes in the controls and
    encoded images to update its display accordingly. Handles user actions to show/hide
    the preview. 
        * **Questionable**: I'm not sure I have the right granularity of `$:` 
          reactive functions. Too many? Too few? Feels like not the right amount either way. 
          The manual subscription to `imageEncodedStore` also has a bit of code smell. 
    * `src/Controls.svelte` -- Implements the UI for controlling the image display 
    settings. Nothing too fancy; works as expected, and was one of the nicer things about 
    building with Svelte! 
        * **Questionable**: The HTML/CSS doesn't work well on tiny 
          screens. Probably could fix it but my skills and interests lie more in the tech and 
          image processing stuff here than the display layout.
    * `src/Metrics.svelte` -- Calculates and shows the calculated min / max / average /
    total-gzipped numbers for the preview images based on the current settings. 
        * **Questionable**: This should probably be separated from the controls or hide at 
          small sizes.
