# 29 - Countdown Timer

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_29.gif?raw=true)

## How it works?

**HTML**

```html
  <div class="timer">
    <div class="timer__controls">
      <button data-time="20" class="timer__button">20 Secs</button>
      <button data-time="300" class="timer__button">Work 5</button>
      <button data-time="900" class="timer__button">Quick 15</button>
      <button data-time="1200" class="timer__button">Snack 20</button>
      <button data-time="3600" class="timer__button">Lunch Break</button>
      <form name="customForm" id="custom">
        <input type="text" name="minutes" placeholder="Enter Minutes">
      </form>
    </div>
    <div class="display">
      <h1 class="display__time-left"></h1>
      <p class="display__end-time"></p>
    </div>
  </div>
```

<br/>

**JS**

```js
let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");
```
Defination

<br/>

```js
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}
```
The `displayTimeLeft` method displays time left.

<br/>

```js
function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? "0" : ""}${minutes}`;
}
```

The `displayEndTime` method displays end time.

<br/>

```js
function timer(seconds) {
  clearInterval(countdown); // clear any existing timers

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it!
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}
```

The `timer` method sets end time and displays it. Then it updates `secondsLeft` each 1 second and runs `displayTimeLeft(secondsLeft)`.

<br/>

```js
function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}
```

The `startTimer` method gets `dataset.time` of element and passes it to `timer` method.

<br/>

```js
buttons.forEach((button) => button.addEventListener("click", startTimer));
```

The `startTimer` method will be triggered when buttons are clicked.

<br/>

```js
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stop submitting
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset(); // restores element's default values
});
```

The listener of the event gets value of minutes element and passes it to `timer` method.

<br/>

## What I have learned?

- I have learned the `WindowOrWorkerGlobalScope.clearInterval()`method.


## Notes

- [WindowOrWorkerGlobalScope.clearInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)
- [Event.preventDefault\(\)](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [HTMLFormElement.reset\(\)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset)
