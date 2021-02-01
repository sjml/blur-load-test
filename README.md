# Blur Load Tester

I was intrigued by the way [Medium](https://jmperezperez.com/medium-image-progressive-loading-placeholder/) and [Facebook](https://engineering.fb.com/2015/08/06/android/the-technology-behind-preview-photos/) use blurred
preview images while the larger versions are loading. It's pretty clever
— with a small enough preview image, it becomes reasonable to send it as
a data element in the HTML itself instead of triggering another load.
And with enough blurring, the artifacts from the super small image file
aren't visible.

So I ended up curious about optimal image compression for such a thing.
I figured it would be different at different display sizes of the actual
image, but wanted to see for myself. JPEG is not the ideal choice for
images this small — it has a fixed overhead that usually is negligible
but becomes a real factor when you're looking at just a few hundred
bytes. WebP is actually great, getting down to just a hundred bytes or
so with decent visual quality, but it's only supported in Safari on
macOS &gt;= Big Sur. 😕 Other formats might be promising, but nothing has
as broad support as JPEG. So here we are.

Facebook went through the effort of identifying the common sections of
the compressed JPEG header so they could save an additional 20 bytes or
so… I'm not quite that interested in hyper-optimization, but of course
there's almost always a little more space to trim.

This page doesn't do any checking about what image types your browser
supports, so if you choose one of the exotic ones and all the blurred
images disappear, that's why. It also reveals some problems around
non-standard aspect ratios — looks like it's wise to custom fit the 
blur scaling. (Same problem becomes apparent when the images are 
displayed very large.)

These photos were all taken by me at various points around the world.
Consider them Creative Commons licensed ([CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)), I guess.
