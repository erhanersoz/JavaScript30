# 26 - Stripe Follow Along Nav

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_26.gif?raw=true)

## How it works?

**HTML**

```html
<nav class="top">
  <div class="dropdownBackground">
    <span class="arrow"></span>
  </div>

  <ul class="cool">
    <li>
      <a href="#">About Me</a>
      <div class="dropdown dropdown1">
        <div class="bio">
          <img src="https://logo.clearbit.com/wesbos.com">
          <p>Wes Bos sure does love web development. He teaches things like JavaScript, CSS and BBQ. Wait. BBQ isn't part of web development. It should be though!</p>
        </div>
      </div>
    </li>
    <li>
      <a href="#">Courses</a>
      <ul class="dropdown courses">
        <li>
          <span class="code">RFB</span>
          <a href="https://ReactForBeginners.com">React For Beginners</a>
        </li>
        <li>
          <span class="code">ES6</span>
          <a href="https://ES6.io">ES6 For Everyone</a>
        </li>
        <li>
          <span class="code">NODE</span>
          <a href="https://LearnNode.com">Learn Node</a>
        </li>
        <li>
          <span class="code">STPU</span>
          <a href="https://SublimeTextBook.com">Sublime Text Power User</a>
        </li>
        <li>
          <span class="code">WTF</span>
          <a href="http://Flexbox.io">What The Flexbox?!</a>
        </li>
        <li>
          <span class="code">GRID</span>
          <a href="https://CSSGrid.io">CSS Grid</a>
        </li>
        <li>
          <span class="code">LRX</span>
          <a href="http://LearnRedux.com">Learn Redux</a>
        </li>
        <li>
          <span class="code">CLPU</span>
          <a href="http://CommandLinePowerUser.com">Command Line Power User</a>
        </li>
        <li>
          <span class="code">MMD</span>
          <a href="http://MasteringMarkdown.com">Mastering Markdown</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">Other Links</a>
      <ul class="dropdown dropdown3">
        <li><a class="button" href="http://twitter.com/wesbos">Twitter</a></li>
        <li><a class="button" href="http://facebook.com/wesbos.developer">Facebook</a></li>
        <li><a class="button" href="http://wesbos.com">Blog</a></li>
        <li><a class="button" href="http://wesbos.com/courses">Course Catalog</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

<br/>

**CSS**

```css
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.cool > li {
  position: relative;
  display: flex;
  justify-content: center;
}

.dropdown {
  opacity: 0;
  position: absolute;
  overflow: hidden;
  padding: 20px;
  top: -20px;
  border-radius: 2px;
  transition: all 0.5s;
  transform: translateY(100px);
  will-change: opacity;
  display: none;
}

.trigger-enter .dropdown {
  display: block;
}

.trigger-enter-active .dropdown {
  opacity: 1;
}

.dropdownBackground {
  width: 100px;
  height: 100px;
  position: absolute;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
  transition: all 0.3s, opacity 0.1s, transform 0.2s;
  transform-origin: 50% 0;
  display: flex;
  justify-content: center;
  opacity:0;
}

.dropdownBackground.open {
  opacity: 1;
}
```

<br/>

**JS**

```js
const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");
```
Defination

<br/>

```js
triggers.forEach(trigger => trigger.addEventListener("mouseenter", handleEnter));
```
The `handleEnter` method will be triggered when mouse enter each nav element.

<br/>

```js
triggers.forEach(trigger => trigger.addEventListener("mouseleave", handleLeave));
```

The `handleLeave` method will be triggered when mouse leave each nav element.

<br/>

```js
function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(() => {
    if(this.classList.contains("trigger-enter")){
      this.classList.add("trigger-enter-active");
    }
  }, 150);
  background.classList.add("open");

  const dropdown = this.querySelector(".dropdown");
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
  };

  background.style.setProperty("width", `${coords.width}px`);
  background.style.setProperty("height", `${coords.height}px`);
  background.style.setProperty("transform", `translate(${coords.left}px, ${coords.top}px)`);
}
```
The `handleEnter` method makes visible the nav element. Then it sets width, height and position of background.

The `Element.getBoundingClientRect()` method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.

<br/>

```js
function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}
```
The `handleLeave` method makes invisible the nav element.

<br/>

## What I have learned?

- I have learned to use the `Element.getBoundingClientRect()` method.


## Notes

- [Element.getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
