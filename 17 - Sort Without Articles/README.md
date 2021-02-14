# 17 - Sort Without Articles

![](https://github.com/erhanersoz/JavaScript30/blob/master/Screenshots/demo_17.png?raw=true)

**:checkered_flag: Sorting without (the |a |an ) using *regular expression***

## How it works?


**JS**

```js
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
```
Defination

```js
function strip(bandName){
  return bandName.replace(/^(the |a |an )/i,"").trim();
}
```
The ***strip*** method returns the deleted version of articles at the beginning of the names.

```js
const sortedBands = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1);
```
The ***sortedBands*** method sorts names without articles.
 

```js
document.querySelector("#bands").innerHTML = sortedBands.map((band) => `<li>${band}</li>`).join("");
```
Adds sorted names to #bands



## Notes

- [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
