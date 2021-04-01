# 12 - Key Sequence Detection

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_12.gif?raw=true)

**:keyboard: Key Sequence Detection**

## How it works?

**JS**

```js
const pressed = [];
const secretCode = "erhan";
```
Definitions


```js
window.addEventListener("keyup", e => {
  pressed.push(e.key);
  pressed.splice(0,pressed.length - secretCode.length);
  if(pressed.join("").includes(secretCode)){
    console.log("DING DING!");
    cornify_add();
  }
});
```
When a key is pressed, the key is added to the `pressed`.

It keeps `pressed.length` equal to `secret.code.length`.

If the `pressed` includes the secretCode, `cornify_add()` runs.



## What I have learned?

- I have learned `cornify_add()` :)

## Notes

- [https://www.cornify.com/](https://www.cornify.com/)
