# 11 - Custom Video Player

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_11.gif?raw=true)

**:play_or_pause_button: A simple custom video player**


## How it works?

**HTML**

```html
<div class="player">
  <video class="player__video viewer" src="652333414.mp4"></video>

  <div class="player__controls">
    <div class="progress">
     <div class="progress__filled"></div>
    </div>
    <button class="player__button toggle" title="Toggle Play">►</button>
    <input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1">
    <input type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="1">
    <button data-skip="-10" class="player__button">« 10s</button>
    <button data-skip="25" class="player__button">25s »</button>
  </div>
</div>
```

**JS**

```js
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const togglePlayPauseButton = player.querySelector(".toggle");
const ranges = player.querySelectorAll(".player__slider");
const skipButtons = player.querySelectorAll("[data-skip]");
}
```
Definitions


```js
video.addEventListener("click", togglePlayPause);
togglePlayPauseButton.addEventListener("click", togglePlayPause);

function togglePlayPause(){
  const method = video.paused ? "play" : "pause";
  video[method]();
  updateButton();
}

function updateButton(){
  const icon = video.paused ? "►" : "❚❚";
  togglePlayPauseButton.textContent = icon;
}

```
The togglePlayPause method plays and stops the video when the video or icon is clicked.

The updateButton method changes the play-pause status icon.


```js
video.addEventListener("timeupdate", updateProgressBar);

function updateProgressBar(){
  const percent = (video.currentTime / video.duration) * 100 ;
  progressBar.style.flexBasis = `${percent}%`;
}
```
The updateProgressBar method updates the progress bar of the video when the video's time changes.


```js
skipButtons.forEach(button => button.addEventListener("click", skip));

function skip(){
  video.currentTime += parseFloat(this.dataset.skip);
}
```
The skip method skips the video as much as value of buttons clicked.


```js
ranges.forEach(renge => {
  renge.addEventListener("change", handleRangeUpdate)
  renge.addEventListener("mousemove", handleRangeUpdate)
});

function handleRangeUpdate(){
  video[this.name] = this.value;
}
```
The handleRangeUpdate method updates volume and playbackRate values of the video.


```js
let changeProgress = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => changeProgress && scrub(e));
progress.addEventListener("mousedown", () => changeProgress = true);
progress.addEventListener("mouseup", () => changeProgress = false);

function scrub(e){
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
```
The scrub method updates video.currentTime according width of the progress bar when the progress bar clicked and dragged.


## What i have learned?

- I have learned to manage video.


## Notes

- [\<video\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
