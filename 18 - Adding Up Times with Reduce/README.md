# 18 - Adding Up Times with Reduce


## How it works?

**HTML**

```html
<ul class="videos">
  <li data-time="5:43">
    Video 1
  </li>
  .
  .
  .
  <li data-time="4:04">
    Video 58
  </li>
</ul>
```


**JS**

```js
const timeNodes = Array.from(document.querySelectorAll("[data-time]"));
```
Defination

```js
const totalSeconds = timeNodes.map((item)=> {
  const [mins,secs] = item.dataset.time.split(":").map(parseFloat);
  return mins * 60 + secs;
}).reduce((total,vidSeconds) => total + vidSeconds);
```
The ***totalSeconds*** is total time converted to seconds.

```js
let leftSeconds = totalSeconds;

const hours = Math.floor(leftSeconds / 3600);
leftSeconds = leftSeconds % 3600;
const minutes = Math.floor(leftSeconds / 60);
leftSeconds = leftSeconds % 60;
const seconds = leftSeconds;
```
The ***hours***, the ***minutes***, the ***seconds*** are generated from The ***totalSeconds***.
 

```js
console.log(hours,minutes,seconds);
```
Result
