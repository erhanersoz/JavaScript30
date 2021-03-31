# 27 - Click and Drag

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_27.gif?raw=true)

## How it works?

**HTML**

```html
  <div class="items">
    <div class="item item1">01</div>
    <div class="item item2">02</div>
    <div class="item item3">03</div>
    <!-- ... -->
    <div class="item item25">25</div>
  </div>
```

<br/>

**CSS**

```css
body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-size: 20px;
  margin: 0;
}

.items {
  height: 800px;
  padding: 100px;
  width: 100%;
  border: 1px solid white;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
  transform: scale(0.98);
  will-change: transform;
  position: relative;
  background: rgba(255,255,255,0.1);
  font-size: 0;
  perspective: 500px;
}

.items.active {
  background: rgba(255,255,255,0.3);
  cursor: grabbing;
  cursor: -webkit-grabbing;
  transform: scale(1);
}

.item {
  width: 200px;
  height: calc(100% - 40px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  font-weight: 100;
  color: rgba(0,0,0,0.15);
  box-shadow: inset 0 0 0 10px rgba(0,0,0,0.15);
}

.item:nth-child(9n+1) { background: dodgerblue;}
.item:nth-child(9n+2) { background: goldenrod;}
.item:nth-child(9n+3) { background: paleturquoise;}
.item:nth-child(9n+4) { background: gold;}
.item:nth-child(9n+5) { background: cadetblue;}
.item:nth-child(9n+6) { background: tomato;}
.item:nth-child(9n+7) { background: lightcoral;}
.item:nth-child(9n+8) { background: darkslateblue;}
.item:nth-child(9n+9) { background: rebeccapurple;}

.item:nth-child(even) { transform: scaleX(1.31) rotateY(40deg); }
.item:nth-child(odd) { transform: scaleX(1.31) rotateY(-40deg); }

```

<br/>

**JS**

```js
const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;
```
Defination

<br/>

```js
const passive = () => {
  isDown = false;
  slider.classList.remove("active");
}
```
The `passive` method stops sliding.

<br/>

```js
slider.addEventListener("mouseleave", passive);

slider.addEventListener("mouseup", passive);
```

The `passive` method triggers when mouse leave or up on slider.

<br/>

```js
slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
```
This event prepares the slider to slide.

<br/>

```js
slider.addEventListener("mousemove", (e) => {
  if(!isDown) return;
  e.preventDefault(); 
  const x = e.pageX - slider.offsetLeft;
  const walk = (x- startX) * 3; // slider sensitivity: 3x 
  slider.scrollLeft = scrollLeft - walk;
});
```
This event slides the slider.

<br/>

## What i have learned?

- I have learned how to make a custom slider.
