# 15 - LocalStorage

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_15.gif?raw=true)

**:department_store: Example of a simple to do list**

## How it works?

**HTML**

```html
<div class="wrapper">
  <h2>LOCAL TAPAS</h2>
  <p></p>
  <ul class="plates">
    <li>Loading Tapas...</li>
  </ul>
  <form class="add-items">
    <input class="check-all" type="button" value="Check All">
    <input class="uncheck-all" type="button" value="Uncheck All">
    <input class="delete-all" type="button" value="Delete All">
    <hr>
    <input type="text" name="item" placeholder="Item Name" required>
    <input type="submit" value="+ Add Item">
  </form>
</div>
```

**CSS**

```css
.plates input + label:before {
  content: "⬜️";
  margin-right: 10px;
}

.plates input:checked + label:before {
  content: "🌮";
}
```



**JS**

```js
const addItems = document.querySelector('.add-items');
const checkAll = document.querySelector('.check-all');
const uncheckAll = document.querySelector('.uncheck-all');
const deleteAll = document.querySelector('.delete-all');
const itemsList = document.querySelector('.plates');
```
Defination

```js
let items = JSON.parse(localStorage.getItem('items')) || [];
```
***items*** gets items from local storage

```js
function populateList(plates =[], platesList){
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `
  }).join("");
}
```
The ***populateList*** method adds the ***plates*** to the ***platesList***.

```js
function addItem(e){
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text : text,
    done : false
  }
  items.push(item)
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
  this.reset();
}
addItems.addEventListener("submit", addItem);
```
When the form is submitted, the ***addItem*** method adds the input value to the local storage.
 

```js
function toggleDone(e){
  if (!e.target.matches('input')) return; 
  const {index} = e.target.dataset;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}
itemsList.addEventListener("click", toggleDone);
```
When a checkbox is clicked, the ***toggleDone*** method changes state of the checkbox on ui and the local storage.


```js
checkAll.addEventListener("click", () => {
  items.forEach(item => {
    item.done = true;
  });
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
});
```
When this event is triggered, it makes all the checkboxes checked.
 

 ```js
uncheckAll.addEventListener("click", () => {
  items.forEach(item => {
    item.done = false;
  });
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
});
```
When this event is triggered, it makes all the checkboxes unchecked.
 

 ```js
deleteAll.addEventListener("click", () => {
  items = [];
  localStorage.removeItem("items");
  populateList(items,itemsList);
});
```
When this event is triggered, it deletes all the checkboxes.
 

## What i have learned?

- I have learned the ***preventDefault*** and ***reset*** methods.

## Notes

- [Event.preventDefault\(\)](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [HTMLFormElement.reset\(\)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset)
