# 24 - Sticky Nav

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_24.gif?raw=true)

## How it works?

**HTML**

```html
<header>
  <h1>A story about getting lost.</h1>
</header>

<nav id="main">
  <ul>
    <li class="logo"><a href="#">LOST.</a></li>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Images</a></li>
    <li><a href="#">Locations</a></li>
    <li><a href="#">Maps</a></li>
  </ul>
</nav>

<div class="site-wrap">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.</p>
  <img src="http://unsplash.it/400/400" class="align-left slide-in">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus expedita quia vero perferendis, deserunt et incidunt eveniet temporibus doloremque possimus facilis. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.</p>
</div>
```

<br/>

**CSS**

```css
.site-wrap {
  max-width: 700px;
  margin: 70px auto;
  background: white;
  padding: 40px;
  text-align: justify;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.05);
  transform: scale(0.98);
  transition: transform 0.5s;
}

body.fixed-nav .site-wrap {
  transform: scale(1);
}

header {
  text-align: center;
  height: 50vh;
  background: url(https://source.unsplash.com/GKN6rpDr0EI/960x640) bottom center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  color: white;
  font-size: 7vw;
  text-shadow: 3px 4px 0 rgba(0,0,0,0.2);
}

nav {
  background: black;
  top: 0;
  width: 100%;
  transition: all 0.5s;
  position: relative;
  z-index: 1;
}

body.fixed-nav nav {
  position: fixed;
  box-shadow: 0 5px 0 rgba(0, 0, 0, 0.1);
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}

nav li {
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

li.logo {
  max-width: 0;
  overflow: hidden;
  background: white;
  transition: all .5s;
  font-weight: 600;
  font-size: 30px;
}

li.logo a {
  color: black;
}

.fixed-nav li.logo {
  max-width: 500px;
}

nav a {
  text-decoration: none;
  padding: 20px;
  display: inline-block;
  color: white;
  transition: all 0.2s;
  text-transform: uppercase;
}
```

<br/>

**JS**

```js
const nav = document.querySelector("#main");
let topOfNav = nav.offsetTop;
```
Defination

<br/>

```js
function fixNav() {
  if(window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  }
  else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixNav);
```
The ***fixNav()*** method is fired when page has been scrolled.
