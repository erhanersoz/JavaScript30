# 16 - Mouse Move Shadow

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_16.gif?raw=true)

**:fire: Mouse move effect**

## How it works?

**HTML**

```html
<div class="hero">
  <h1 contenteditable>🔥WOAH!</h1>
</div>
```

**CSS**

```css
.hero {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}

h1 {
  text-shadow: 1px 1px 10 rgba(0,0,0,1);
  font-size: 100px;
}
```


**JS**

```js
const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 10;
```
Defination


```js
hero.addEventListener("mousemove",shadow);
```
Event
The ***shadow*** method is triggered when mouse moves



```js
function shadow(e){
  const { offsetWidth : width, offsetHeight : height } = hero;
  let { offsetX : x, offsetY : y } = e;

  if(this !== e.target){
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop; 
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,100,0.8),
    ${xWalk * -1}px ${yWalk * -1}px 0 rgba(0,100,255,0.8)
  `;
}
```
The ***shadow*** method adds a shadow based on the mouse position.


## What i have learned?

- I have learned the ***contenteditable*** attribute.

## Notes

- [contenteditable](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable)
