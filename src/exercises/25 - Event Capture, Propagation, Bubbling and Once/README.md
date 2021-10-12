# 25 - Event Capture, Propagation, Bubbling and Once

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_25.png?raw=true)


## How it works?

**HTML**

```html
<div class="one">
  <div class="two">
    <div class="three">
    </div>
  </div>
</div>
<button></button>
```

<br/>

**JS**

```js
const divs = document.querySelectorAll("div");
const button = document.querySelector("button");
```
Defination

<br/>

```js
function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation(); // stop bubbling
}
```
The `Event.stopPropagation()` method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.

The `logText()` method writes only the class name of the clicked top div because of the `stopPropagation()` method.

<br/>

```js
  divs.forEach((div) => div.addEventListener("click", logText, {
    capture: false,
    once: true
  }));
```
> `capture`: A Boolean indicating that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree.

> `once`: A Boolean indicating that the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked.

<br/>

```js
  button.addEventListener("click", () => {
    console.log("Click!!!");
  }, {
    once: true
  });
```
It writes a "Click!!!" only once, regardless of the number of clicks.


## What I have learned?

- I have learned to use the `Event.stopPropagation()` method.
- I have learned to use `capture` and `once` options.


## Notes

- [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)
- [Event.stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)
- [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
