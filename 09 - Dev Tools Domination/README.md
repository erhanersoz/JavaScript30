# 09 - Dev Tools Domination

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_09.png?raw=true)

**:warning: Console methods**

## How it works?

**HTML**

```html
<p onClick="makeGreen()">×BREAK×DOWN×</p>
```

**JS**

```js
function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}
```
The `makeGreen` method changes styles of p element.

```js
console.log("the lesson is %s.", "math");
console.log("PI = %f", Math.PI);
```
| Type | Char | 
| ---- | ---- |
| string | %s |
| number | %d or %i |
| floating-point | %f |
| object | %o or %O |

```js
console.log("%c I am neon text", "font-size:20px; font-weight: bold; text-shadow: 0px 0px 10px gray;");
```
styled log

```js
console.warn("OH NOOO"); // warning!
console.error("Shit!"); // Error :|
console.info("Crocodiles eat 3-4 people per year"); // Info
```

```js
console.assert(p.classList.contains("ouch"),"That is wrong!"); 
```
The `console.assert()` method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.

```js
console.log(p);
```
\<p onclick="makeGreen()">×BREAK×DOWN×\</p>

```js
console.dir(p);
```
The `console.dir()` method displays an interactive list of the properties of the specified JavaScript object.

```js
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
  console.groupEnd(`${dog.name}`);
}); 
```
<details>
  <summary>Snickers</summary>
  
      This is Snickers
    
      Snickers is 2 years old.
    
      Snickers is 14 dog years old.
    
</details>

```js
console.count("Wes");
console.count("Erhan");
console.count("Wes");
```
Wes: 1

Erhan: 1

Wes: 2

```js
console.time("fetching data");
fetch("https://api.github.com/users/erhanersoz")
  .then(data => data.json())
  .then(data => {
    console.timeEnd("fetching data");
  });
```
fetching data: 389.762939453125 ms

```js
console.table(dogs);
```
| (index) | name | age |
| ------- | ---- | --- |
| 0 | "Snickers" | 2 |
| 1 | "hugo" | 8 |


## What I have learned?

- I have learned to use the `console` methods.

## Notes

- [console](https://developer.mozilla.org/en-US/docs/Web/API/Console)
