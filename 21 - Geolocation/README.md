# 21 - Geolocation

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_21.png?raw=true)

**:compass: Direction and speed detection**

## How it works?

**HTML**

```html
<svg class="arrow"></svg>

<h1 class="speed">
  <span class="speed-value">0</span>
  <span class="units">KM/H</span>
</h1>
```

<br/>

**CSS**

```css
html {
  font-size: 100px;
}

body {
  margin: 0;
  font-family: sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background:
    radial-gradient(black 15%, transparent 16%) 0 0,
    radial-gradient(black 15%, transparent 16%) 8px 8px,
    radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
    radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;
  background-color: #282828;
  background-size: 16px 16px;
  background-attachment: fixed;
}

.arrow {
  width: 250px;
  overflow: hidden;
  transition: all 0.2s;
  transform: rotate(0deg);
  display: inline-block;
}

h1 {
  color: white;
  font-weight: 100;
  font-size: 60px;
  display: flex;
  align-items: center;
}

.units {
  font-size: 15px;
}
```

<br/>

**JS**

```js
const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");
```
Defination

<br/>

```js
navigator.geolocation.watchPosition((data) => {
  speed.textContent = data.coords.speed;
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
  console.error(err.message);
});
```
The ***Geolocation.watchPosition()*** method returns a long value representing the newly established callback function to be invoked whenever the device location changes.


## What i have learned?

- I have learned to use the ***Geolocation.watchPosition()*** method.


## Notes

- [Geolocation.watchPosition\(\)](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition)
