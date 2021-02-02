# 05 - Flex Panel Gallery

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_05.gif?raw=true)

**Example of transition event**

## How it works ?

HTML

```html
<div class="panels">
  <!-- ... -->
  <div class="panel panel3">
    <p>Experience</p>
    <p>It</p>
    <p>Today</p>
  </div>
  <!-- ... -->
</div>
```

JS

```js
const panels = document.querySelectorAll(".panel");
```
panels is a NodeList;

```js
function toggleOpen(){
  this.classList.toggle("open");
}
```
If there is no *open* in the classList of this element **toggleOpen** adds *open* to classList else remove the *open* from classList.

```js
function toggleActive(e){
  if (e.propertyName.includes("flex")){
    this.classList.toggle("open-active");
  }
}
```
If the ending transition property of this element is 'flex' **toggleActive** adds *open-active* to classList else remove the *open-active* from classList.

```js
panels.forEach(panel => panel.addEventListener("click", toggleOpen));
}
```
toggleOpen will be triggered when a panel is clicked. 

```js
panels.forEach(panel => panel.addEventListener("transitionend",toggleActive));
}
```
toggleActive will be triggered when transition of panel is end. 

## What i have learned

- I have learned classList.toggle()
- I have learned transitionend event.

## Notes

- [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
