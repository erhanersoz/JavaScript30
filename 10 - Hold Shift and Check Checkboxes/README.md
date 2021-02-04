# 10 - Hold Shift and Check Checkboxes

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_10.gif?raw=true)

**:heavy_check_mark: Example of multiple check**

## How it works?

**HTML**

```html
<div class="inbox">
  <div class="item">
    <input type="checkbox">
    <p>Check one item</p>
  </div>
  <div class="item">
    <input type="checkbox">
    <p>Hold down your Shift key</p>
  </div>
  <div class="item">
    <input type="checkbox">
    <p>Check a lower item</p>
  </div>
</div>
```

**JS**

```js
const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");
let lastChecked;
}
```
Definition

```js
checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));
```
Event

```js
function handleCheck(e) {
  let inBetween = false;
  if (
    e.shiftKey && // if the shiftKey is true
    this.checked && // if the clicked checkbox is true
    lastChecked.checked && // if the last clicked checkbox is true
    this !== lastChecked // if the clicked checkbox is not the last clicked checkbox
    ) {

    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}
```
handleCheck method
