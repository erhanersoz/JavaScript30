# 13 - Slide in on Scroll

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_13.gif?raw=true)

**:sparkles: Slide in on Scroll**

## How it works?

**HTML**

```html
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, deserunt facilis et iste corrupti omnis tenetur est. Iste ut est dicta dolor itaque adipisci, dolorum minima, veritatis earum provident error molestias. Ratione magni illo sint vel velit ut excepturi consectetur suscipit, earum modi accusamus voluptatem nostrum, praesentium numquam, reiciendis voluptas sit id quisquam. Consequatur in quis reprehenderit modi perspiciatis necessitatibus saepe, quidem, suscipit iure natus dignissimos ipsam, eligendi deleniti accusantium, rerum quibusdam fugit perferendis et optio recusandae sed ratione.</p>

<img src="http://unsplash.it/400/401" class="align-right slide-in">

<p>Quos excepturi fuga, molestiae ea quisquam minus, ratione dicta consectetur officia omnis, doloribus voluptatibus? Veniam ipsum veritatis architecto, provident quas consequatur doloremque quam quidem earum expedita, ad delectus voluptatum, omnis praesentium nostrum qui aspernatur ea eaque adipisci et cumque ab? Ea voluptatum dolore itaque odio. Eius minima distinctio harum, officia ab nihil exercitationem. Tempora rem nemo nam temporibus molestias facilis minus ipsam quam doloribus consequatur debitis nesciunt tempore officiis aperiam quisquam, molestiae voluptates cum, fuga culpa.</p>
```

**CSS**

```css
.align-left {
  float: left;
  margin-right: 20px;
}

.align-right {
  float: right;
  margin-left: 20px;
}

.slide-in {
  opacity: 0;
  transition: all .5s;
}

.align-left.slide-in {
  transform: translateX(-30%) scale(0.95);
}

.align-right.slide-in {
  transform: translateX(30%) scale(0.95);
}

.slide-in.active {
  opacity: 1;
  transform: translateX(0%) scale(1);
}
```



**JS**

```js
const silderImages = document.querySelectorAll(".slide-in");
```
Defination

```js
window.addEventListener("scroll", debounce(checkSlide));
```
Event

```js
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
```
The ***debounce*** method runs the ***checkSlide*** method every 20 miliseconds while scrolling.
 

```js
function checkSlide(){
  silderImages.forEach(silderImage => {
    const slideInAt = (window.scrollY + window.innerHeight) - silderImage.height / 2;
    const imageBottom = silderImage.offsetTop + silderImage.height;
    const isHalfShown = slideInAt > silderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if(isHalfShown && isNotScrolledPast){
      silderImage.classList.add("active");
    }
    else{
      silderImage.classList.remove("active");
    }
  });
}
```
if half the images are shown The ***checkSlide*** method make the images slide in and fade in.


## What I have learned?

- I have learned how The ***debounce*** method works.

## Notes

- [Lodash _.debounce \(\)](https://lodash.com/docs/4.17.15#debounce)
