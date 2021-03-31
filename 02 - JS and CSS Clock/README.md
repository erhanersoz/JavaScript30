# 02 - JS and CSS Clock

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_02.gif?raw=true)

**:clock9: This is a simple analog clock.**

## How it works?

HTML

```html
<div class="clock">
  <div class="clock-face">
    <div class="hand hour-hand"></div>
    <div class="hand min-hand"></div>
    <div class="hand second-hand"></div>
    <div class="dot"></div>
  </div>
</div>
```

CSS

```css
.hand {
  transition: all 0.05s;
  transition-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
}
```

JS

```js
  setInterval(updateClock, 1000);
```
updateClock will run every 1000 milliseconds.

```js
function updateClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
```

Create a object from Date.

The degree of second hand is calculates from seconds with ((seconds / 60) * 360) and adds 90 degrees, because the degree of elements are -90 by default.

Second hand rotates.

Similar process are applied to the minute hand and the hour hand.

## What i have learned?

- I have learned transition-timing-function property.

## Notes

- [transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
