# 08 - Fun with HTML5 Canvas

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_08.gif?raw=true)

**:paintbrush: Colorful drawing**

## How it works?

**HTML**

```html
<canvas id="draw" ></canvas>
```

**JS**

```js
const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 1;

const MINLINEWIDTH = 1;
const MAXLINEWIDTH = 50;
let isDrawing = false;
let hue = 0; // color
let direction = true; // direction of width change
```
Definitions

```js
canvas.addEventListener("mousemove",draw);
canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  [lastX,lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);
```
Events

```js
function draw(e){
  if(!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX,lastY);
  ctx.lineTo(e.offsetX,e.offsetY);
  ctx.stroke();
  [lastX,lastY] = [e.offsetX, e.offsetY];

  hue >= 360 ? hue = 0 : hue++;

  if(ctx.lineWidth >= MAXLINEWIDTH || ctx.lineWidth <= MINLINEWIDTH ){
    direction = !direction;
  }

  direction ? ctx.lineWidth++ : ctx.lineWidth--;
}
```

## What I have learned?

- I have learned to use the `CanvasRenderingContext2D` interface.

## Notes

- [HTMLCanvasElement.getContext\(\)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext)
- [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)

