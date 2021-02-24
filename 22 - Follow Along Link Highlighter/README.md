# 22 - Follow Along Link Highlighter

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_22.gif?raw=true)

**:high_brightness: Link Highlighter**

## How it works?

**HTML**

```html
<nav>
  <ul class="menu">
    <li><a href="">Home</a></li>
    <li><a href="">Order Status</a></li>
    <li><a href="">Tweets</a></li>
    <li><a href="">Read Our History</a></li>
    <li><a href="">Contact Us</a></li>
  </ul>
</nav>

<div class="wrapper">
  <p>Lorem ipsum dolor sit amet, <a href="">consectetur</a> adipisicing elit.</p>
</div>
```

<br/>

**CSS**

```css
.highlight {
  transition: all 0.2s;
  border-bottom: 2px solid white;
  position: absolute;
  top: 0;
  background: white;
  left: 0;
  z-index: -1;
  border-radius: 20px;
  display: none;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
}
```

<br/>

**JS**

```js
    const triggers = document.querySelectorAll("a");
    const highlight = document.createElement("span");
    highlight.classList.add("highlight");
    document.body.appendChild(highlight);
```
Defination

<br/>

```js
triggers.forEach(a => a.addEventListener("mouseenter", highlightLink));
```
The ***HighlightLink*** is triggered when the user hovers over the links.

<br/>

```js
function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
  highlight.style.display = "block";
}
```
The ***highlightLink()*** method takes the width, height and coordinates of the link. Then updates width, height and coordinates of the highlight.


## What i have learned?

- I have learned to use the `Element.getBoundingClientRect()` method.


## Notes

- [Element.getBoundingClientRect\(\)](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
