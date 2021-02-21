# 19 - Webcam Fun

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_19.png?raw=true)

**:video_camera: Webcam, canvas, video, audio**

## How it works?

**HTML**

```html
<div class="photobooth">
  <div class="controls">
    <button onClick="takePhoto()">Take Photo</button>
    <div class="rgb">
      <label for="rmin">Red Min:</label>
      <input type="range" min=0 max=255 name="rmin">
      <label for="rmax">Red Max:</label>
      <input type="range" min=0 max=255 name="rmax">

      <br>

      <label for="gmin">Green Min:</label>
      <input type="range" min=0 max=255 name="gmin">
      <label for="gmax">Green Max:</label>
      <input type="range" min=0 max=255 name="gmax">

      <br>

      <label for="bmin">Blue Min:</label>
      <input type="range" min=0 max=255 name="bmin">
      <label for="bmax">Blue Max:</label>
      <input type="range" min=0 max=255 name="bmax">
    </div>
  </div>

  <canvas class="photo"></canvas>
  <video class="player"></video>
  <div class="strip"></div>
</div>

<audio class="snap" src="./snap.mp3" hidden></audio>

<script src="scripts.js"></script>
```

<br/>

**CSS**

```css
.strip {
  padding: 2rem;
}

.strip img {
  width: 100px;
  overflow-x: scroll;
  padding: 0.8rem 0.8rem 2.5rem 0.8rem;
  box-shadow: 0 0 3px rgba(0,0,0,0.2);
  background: white;
}

.strip a:nth-child(5n+1) img { transform: rotate(10deg); }
.strip a:nth-child(5n+2) img { transform: rotate(-2deg); }
.strip a:nth-child(5n+3) img { transform: rotate(8deg); }
.strip a:nth-child(5n+4) img { transform: rotate(-11deg); }
.strip a:nth-child(5n+5) img { transform: rotate(12deg); }
```

<br/>

**JS**

```js
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
```
Defination

<br/>

```js
function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.error("OH NO!!!", err);
    });
}
```
The ***MediaDevices.getUserMedia()*** method With the user's permission through a prompt, turns on a camera and/or a microphone on the system and provides a MediaStream containing a video track and/or an audio track with the input.

If the ***getVideo()*** method can access the camera, it adds the stream to the video element.

<br/>

```js
function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // BLUE
  }
  return pixels;
}
```
The ***redEffect()*** method increases the red representing value of the pixels by 100. It decreases the green representing value of the pixels by 50. It reduces the blue representing value of the pixels to half.

<br/>

```js
function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 100] = pixels.data[i + 0]; // RED
    // pixels.data[i - 500] = pixels.data[i + 1]; // GREEN
    // pixels.data[i - 550] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}
```
The ***rgbSplit()*** method assigns the red channel of each pixel to the 20th\(100/4\) red channel\(i % 4 === 0 && 100 % 4 === 0\) after it.

<br/>

```js
function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll(".rgb input").forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}
```
The ***greenScreen()*** method filters pixels outside the values of max and min inputs of colors.

<br/>

```js
function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    // mess with them
    // pixels = redEffect(pixels);

    pixels = rgbSplit(pixels);
    ctx.globalAlpha = 0.3;

    // pixels = greenScreen(pixels);
    // put them back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}
```
The ***CanvasRenderingContext2D.drawImage()*** method draws the specified image. This method is available in multiple formats, providing a great deal of flexibility in its use.

The ***CanvasRenderingContext2D.getImageData()*** method returns an ImageData object representing the underlying pixel data for the area of the canvas denoted by the rectangle which starts at (sx, sy) and has an sw width and sh height.
 
The ***CanvasRenderingContext2D.globalAlpha*** property alpha value that is applied to shapes and images before they are composited onto the canvas. Default 1.0 (opaque).

The ***CanvasRenderingContext2D.putImageData()*** method paints data from the given ImageData object onto the bitmap. If a dirty rectangle is provided, only the pixels from that rectangle are painted.

The ***paintToCanvas()*** method adds the image taken from the webcam to the canvas with the effect every 16 milliseconds.

<br/>

```js
function takePhoto() {
  // played the sound
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas
  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "handsome");
  link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
  strip.insertBefore(link, strip.firstChild);
}
```
The ***HTMLCanvasElement.toDataURL()*** method returns a data-URL containing a representation of the image in the format specified by the type parameter (defaults to png). The returned image is in a resolution of 96 dpi.

The ***takePhoto()*** method plays snap sound. Then adds the snapshot on the canvas to the beginning of the strip. The snapshot is downloadable.

<br/>

```js
video.addEventListener("canplay", paintToCanvas);
```
The ***canplay*** event is fired when the user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.


## What i have learned?

- I have learned to use the *CanvasRenderingContext2D* interface.
- I have learned to take stream from webcam with *navigator.mediaDevices.getUserMedia*.
- I have learned to pass a stream to video element with *video.srcObject*.
- I have learned to manipulation a video with *CanvasRenderingContext2D* in JavaScript.
- I have learned to take snapshot from canvas with the *canvas.toDataURL()* method.
- I have learned the the *download* attribute of \<a\> tag. 
- I have learned the *Node.insertBefore()* method. 
- I have learned the *canplay* event.


## Notes

- [MediaDevices.getUserMedia\(\)](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
- [HTMLMediaElement.srcObject](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject)
- [HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)
- [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
- [Node.insertBefore\(\)](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)
