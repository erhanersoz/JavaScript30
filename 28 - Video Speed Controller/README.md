# 28 - Video Speed Controller

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_28.gif?raw=true)

## How it works?

**HTML**

```html
<div class="wrapper">
  <video class="flex" width="765" height="430" src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" loop controls></video>
  <div class="speed">
    <div class="speed-bar">1×</div>
  </div>
</div>
```

<br/>

**CSS**

```css
.speed {
  background: #efefef;
  flex: 1;
  display: flex;
  align-items: flex-start;
  margin: 10px;
  border-radius: 50px;
  box-shadow: 0 0 1px 3px rgba(0,0,0,0.1);
  overflow: hidden;
}

.speed-bar {
  width: 100%;
  background: linear-gradient(-170deg, #2376ae 0%, #c16ecf 100%);
  text-shadow: 1px 1px 0 rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  color: white;
  height: 16.3%;
}
```

<br/>

**JS**

```js
const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");
```
Defination

<br/>

```js
speed.addEventListener("mousemove", handleMove);
```
the `handleMove` method will be triggered when mouse move on speed bar.

<br/>

```js
function handleMove(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + "%";
  const playbackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + "x";
  video.playbackRate = playbackRate;
}
```

The `handleMove` method calculates speed. Then it sets bar style and video playbackRate.

<br/>

## What I have learned?

- I have learned the `MouseEvent.pageY`property. I already made [custom video player](https://github.com/erhanersoz/JavaScript30/tree/master/11%20-%20Custom%20Video%20Player)


## Notes

- [MouseEvent.pageY](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY)
